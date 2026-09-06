from __future__ import annotations

import shutil
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from tempfile import mkdtemp
from typing import Any

from fastapi import HTTPException

from . import job_store
from .drawing_flow import parse_files
from .drawing_verify import verify_drawing_parts

_EXECUTOR = ThreadPoolExecutor(max_workers=1, thread_name_prefix="drawing-verify")
MISSING_JOB = "核对任务不存在或已过期，请重新上传。"


def _http_detail(detail: Any) -> str:
    if isinstance(detail, str):
        return detail
    if isinstance(detail, dict):
        error = detail.get("error") or detail
        if isinstance(error, dict) and error.get("message"):
            return str(error["message"])
        return str(detail.get("message") or detail)
    return str(detail)


def get_verify_job(job_id: str) -> dict[str, Any]:
    return job_store.read_job(job_id, MISSING_JOB, kind="drawing-verify")


def _run_job(job_id: str, saved: list[dict[str, Any]], workdir: Path) -> None:
    try:
        job_store.update_job(job_id, status="running", note="正在读取 PDF 文字层…")
        parts = parse_files(saved)
        job_store.update_job(job_id, note="正在调用大模型读文字层，可能需要几分钟…")
        payload = verify_drawing_parts(parts)
        if payload.get("error"):
            job_store.update_job(
                job_id,
                status="error",
                detail=_http_detail(payload["error"]),
                note="核对失败，未编造材料或金额。",
            )
            return
        job_store.update_job(job_id, status="ok", result=payload, note="核对完成。")
    except HTTPException as exc:
        job_store.update_job(job_id, status="error", detail=_http_detail(exc.detail), note="核对失败。")
    except Exception as exc:  # noqa: BLE001
        job_store.update_job(job_id, status="error", detail=f"图纸解析失败：{exc}", note="核对失败。")
    finally:
        shutil.rmtree(workdir, ignore_errors=True)


def submit_verify_job(saved: list[dict[str, Any]], workdir: Path) -> dict[str, Any]:
    job = job_store.create_job("drawing-verify", "已排队，正在读取文字层。")
    _EXECUTOR.submit(_run_job, str(job["job_id"]), saved, workdir)
    return job


def save_upload_dir() -> Path:
    return Path(mkdtemp(prefix="drawing-verify-"))
