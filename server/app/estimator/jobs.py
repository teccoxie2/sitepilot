from __future__ import annotations

import threading
import time
import uuid
from concurrent.futures import ThreadPoolExecutor
from typing import Any, Callable

from fastapi import HTTPException

JOB_TTL_SEC = 30 * 60
_LOCK = threading.Lock()
_JOBS: dict[str, dict[str, Any]] = {}
_EXECUTOR = ThreadPoolExecutor(max_workers=1, thread_name_prefix="estimator")


def _public(job: dict[str, Any]) -> dict[str, Any]:
    out = {"job_id": job["id"], "status": job["status"], "note": job.get("note")}
    if job["status"] == "ok":
        out["result"] = job.get("result")
    if job["status"] == "error":
        out["detail"] = job.get("detail")
    return out


def get_job(job_id: str) -> dict[str, Any]:
    with _LOCK:
        job = _JOBS.get(job_id)
        if not job:
            raise HTTPException(status_code=404, detail="任务不存在或已过期。")
        if time.time() - float(job.get("created_at") or 0) > JOB_TTL_SEC:
            _JOBS.pop(job_id, None)
            raise HTTPException(status_code=404, detail="任务不存在或已过期。")
        return _public(job)


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
        stale = [key for key, item in _JOBS.items() if time.time() - float(item.get("created_at") or 0) > JOB_TTL_SEC]
        for key in stale:
            _JOBS.pop(key, None)
        _JOBS[job_id] = job

    def run() -> None:
        def set_note(message: str) -> None:
            with _LOCK:
                current = _JOBS.get(job_id)
                if current:
                    current["note"] = message
                    current["status"] = "running"

        try:
            result = worker(set_note)
            with _LOCK:
                current = _JOBS.get(job_id)
                if current:
                    current["status"] = "ok"
                    current["result"] = result
                    current["note"] = "完成。"
        except Exception as exc:  # noqa: BLE001
            with _LOCK:
                current = _JOBS.get(job_id)
                if current:
                    current["status"] = "error"
                    current["detail"] = str(exc)
                    current["note"] = "失败，未编造数量或金额。"

    _EXECUTOR.submit(run)
    return _public(job)
