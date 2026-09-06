from __future__ import annotations

import json
import threading
import time
import uuid
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from typing import Any, Callable

from fastapi import HTTPException

from ..runtime_paths import writable_root

JOB_TTL_SEC = 30 * 60
_LOCK = threading.Lock()
_JOBS: dict[str, dict[str, Any]] = {}
_EXECUTOR = ThreadPoolExecutor(max_workers=1, thread_name_prefix="estimator")


def _jobs_dir() -> Path:
    path = writable_root() / "estimator-jobs"
    path.mkdir(parents=True, exist_ok=True)
    return path


def _job_file(job_id: str) -> Path:
    return _jobs_dir() / f"{job_id}.json"


def _safe_job_id(job_id: str) -> str:
    cleaned = str(job_id or "").strip()
    if not cleaned.isalnum() or len(cleaned) > 64:
        raise HTTPException(status_code=404, detail="任务不存在或已过期。")
    return cleaned


def _public(job: dict[str, Any]) -> dict[str, Any]:
    out = {"job_id": job["id"], "status": job["status"], "note": job.get("note")}
    if job["status"] == "ok":
        out["result"] = job.get("result")
    if job["status"] == "error":
        out["detail"] = job.get("detail")
    return out


def _expired(job: dict[str, Any]) -> bool:
    return time.time() - float(job.get("created_at") or 0) > JOB_TTL_SEC


def _persist(job: dict[str, Any]) -> None:
    path = _job_file(str(job["id"]))
    tmp = path.with_suffix(".tmp")
    payload = {
        "id": job["id"],
        "status": job["status"],
        "note": job.get("note"),
        "created_at": job.get("created_at"),
        "result": job.get("result"),
        "detail": job.get("detail"),
    }
    tmp.write_text(json.dumps(payload, ensure_ascii=False, default=str), encoding="utf-8")
    tmp.replace(path)


def _load_from_disk(job_id: str) -> dict[str, Any] | None:
    path = _job_file(job_id)
    if not path.is_file():
        return None
    try:
        raw = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError, UnicodeDecodeError):
        return None
    if not isinstance(raw, dict) or str(raw.get("id") or "") != job_id:
        return None
    return raw


def _purge_expired_locked() -> None:
    stale = [key for key, item in _JOBS.items() if _expired(item)]
    for key in stale:
        _JOBS.pop(key, None)
        _job_file(key).unlink(missing_ok=True)


def _lookup(job_id: str) -> dict[str, Any] | None:
    job = _JOBS.get(job_id)
    if job and _expired(job):
        _JOBS.pop(job_id, None)
        _job_file(job_id).unlink(missing_ok=True)
        job = None
    if job:
        return job
    disk = _load_from_disk(job_id)
    if not disk:
        return None
    if _expired(disk):
        _job_file(job_id).unlink(missing_ok=True)
        return None
    _JOBS[job_id] = disk
    return disk


def get_job(job_id: str) -> dict[str, Any]:
    parsed = _safe_job_id(job_id)
    with _LOCK:
        job = _lookup(parsed)
        if not job:
            raise HTTPException(status_code=404, detail="任务不存在或已过期。")
        return _public(job)


def _update(job_id: str, **fields: Any) -> None:
    with _LOCK:
        current = _lookup(job_id)
        if not current:
            return
        current.update(fields)
        _persist(current)


def submit(worker: Callable[[Callable[[str], None]], Any], note: str) -> dict[str, Any]:
    job_id = uuid.uuid4().hex
    job = {
        "id": job_id,
        "status": "pending",
        "note": note,
        "created_at": time.time(),
        "result": None,
        "detail": None,
    }
    with _LOCK:
        _purge_expired_locked()
        _JOBS[job_id] = job
        _persist(job)

    def run() -> None:
        def set_note(message: str) -> None:
            _update(job_id, note=message, status="running")

        try:
            result = worker(set_note)
            _update(job_id, status="ok", result=result, note="完成。")
        except Exception as exc:  # noqa: BLE001
            _update(job_id, status="error", detail=str(exc), note="失败，未编造数量或金额。")

    _EXECUTOR.submit(run)
    return _public(job)
