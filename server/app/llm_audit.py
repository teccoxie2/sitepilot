from __future__ import annotations

import os
import re
import uuid
from datetime import datetime, timedelta, timezone
from typing import Any

from fastapi import HTTPException
from sqlalchemy import select

from .identity import get_owner_id
from .models import LlmCallAudit
from .store import session

DEFAULT_DAILY_LIMIT = 30
_URL_RE = re.compile(r"https?://\S+", re.I)
_HOST_RE = re.compile(r"\b\d{1,3}(?:\.\d{1,3}){3}(?::\d+)?(?:/\S*)?")


def daily_limit() -> int:
    raw = os.environ.get("LLM_CALLS_PER_DAY", "").strip()
    if not raw:
        return DEFAULT_DAILY_LIMIT
    try:
        value = int(raw)
    except ValueError:
        return DEFAULT_DAILY_LIMIT
    return max(1, value)


def _count_recent(owner_id: str, hours: int = 24) -> int:
    cutoff = (datetime.now(timezone.utc) - timedelta(hours=hours)).isoformat()
    with session() as db:
        rows = db.scalars(
            select(LlmCallAudit.id).where(
                LlmCallAudit.owner_id == owner_id,
                LlmCallAudit.created_at >= cutoff,
            )
        ).all()
    return len(rows)


def assert_llm_quota() -> None:
    owner_id = get_owner_id()
    if not owner_id:
        return
    used = _count_recent(owner_id)
    if used >= daily_limit():
        raise HTTPException(
            status_code=429,
            detail="24 小时内模型调用已达上限。",
        )


def record_llm_call(*, kind: str, model_name: str | None, status: str) -> None:
    owner_id = get_owner_id()
    if not owner_id:
        return
    with session() as db:
        db.add(
            LlmCallAudit(
                id=str(uuid.uuid4()),
                owner_id=owner_id,
                kind=kind,
                model_name=(model_name or "")[:120] or None,
                status=status,
                created_at=datetime.now(timezone.utc).isoformat(),
            )
        )
        db.commit()


def public_note(note: str | None) -> str:
    text = str(note or "")
    text = _URL_RE.sub("已配置的模型服务", text)
    text = _HOST_RE.sub("已配置的模型服务", text)
    return text


def public_llm_probe(probed: dict[str, Any]) -> dict[str, Any]:
    payload = dict(probed)
    payload.pop("base_url", None)
    payload["note"] = public_note(str(payload.get("note") or ""))
    return payload
