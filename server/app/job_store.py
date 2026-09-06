from __future__ import annotations

import time
import uuid
from typing import Any

from fastapi import HTTPException

from .models import BackgroundJob
from .store import session

JOB_TTL_SEC = 30 * 60


def _public(row: BackgroundJob) -> dict[str, Any]:
    out = {"job_id": row.id, "status": row.status, "note": row.note, "kind": row.kind}
    if row.status == "ok":
        out["result"] = row.result
    if row.status == "error":
        out["detail"] = row.detail
    return out


def _safe_job_id(job_id: str) -> str:
    cleaned = str(job_id or "").strip()
    if not cleaned.isalnum() or len(cleaned) > 64:
        raise HTTPException(status_code=404, detail="任务不存在或已过期。")
    return cleaned


def create_job(kind: str, note: str) -> dict[str, Any]:
    job_id = uuid.uuid4().hex
    with session() as db:
        row = BackgroundJob(
            id=job_id,
            kind=kind,
            status="pending",
            note=note,
            detail=None,
            result=None,
            created_at=time.time(),
        )
        db.add(row)
        db.commit()
        db.refresh(row)
        return _public(row)


def update_job(job_id: str, **fields: Any) -> None:
    with session() as db:
        row = db.get(BackgroundJob, job_id)
        if not row:
            return
        for key, value in fields.items():
            if hasattr(row, key):
                setattr(row, key, value)
        db.commit()


def read_job(
    job_id: str,
    missing_detail: str = "任务不存在或已过期。",
    kind: str | None = None,
) -> dict[str, Any]:
    parsed = _safe_job_id(job_id)
    with session() as db:
        row = db.get(BackgroundJob, parsed)
        if not row:
            raise HTTPException(status_code=404, detail=missing_detail)
        if kind and row.kind != kind:
            raise HTTPException(status_code=404, detail=missing_detail)
        if time.time() - float(row.created_at or 0) > JOB_TTL_SEC:
            db.delete(row)
            db.commit()
            raise HTTPException(status_code=404, detail=missing_detail)
        return _public(row)
