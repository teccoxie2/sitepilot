from __future__ import annotations

from datetime import datetime, timezone
from pathlib import Path

from sqlalchemy import select

from .models import StoredBlob
from .store import session


def _now() -> str:
    return datetime.now(timezone.utc).isoformat()


def put_bytes(key: str, data: bytes, content_type: str = "application/octet-stream") -> None:
    with session() as db:
        row = db.get(StoredBlob, key)
        if row:
            row.data = data
            row.content_type = content_type
            row.created_at = _now()
        else:
            db.add(StoredBlob(key=key, data=data, content_type=content_type, created_at=_now()))
        db.commit()


def get_bytes(key: str) -> bytes | None:
    with session() as db:
        row = db.get(StoredBlob, key)
        if not row:
            return None
        return bytes(row.data)


def materialize(key: str, dest: Path) -> Path:
    if dest.is_file() and dest.stat().st_size > 0:
        return dest
    blob = get_bytes(key)
    if blob is None:
        raise FileNotFoundError("原件不在本机且共享库没有副本，请重新上传图纸。")
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(blob)
    return dest


def original_key(project_id: str, document_id: str) -> str:
    return f"estimator/{project_id}/documents/{document_id}/original.pdf"
