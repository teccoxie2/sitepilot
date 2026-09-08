from __future__ import annotations

import os
import re
import uuid
from contextvars import ContextVar
from dataclasses import dataclass

from fastapi import HTTPException, Request, Response

COOKIE_NAME = "vsense_pilot"
HEADER_NAME = "X-Pilot-Id"
COOKIE_MAX_AGE = 60 * 60 * 24 * 365
_TOKEN_RE = re.compile(r"^[A-Za-z0-9._-]{8,64}$")

current_owner_id: ContextVar[str | None] = ContextVar("current_owner_id", default=None)


@dataclass(frozen=True)
class PilotIdentity:
    owner_id: str


def allow_pilot_header() -> bool:
    flag = os.environ.get("ALLOW_PILOT_HEADER", "").strip().lower()
    if flag in {"1", "true", "yes"}:
        return True
    return bool(os.environ.get("PYTEST_CURRENT_TEST"))


def normalize_owner_id(raw: str | None) -> str | None:
    token = str(raw or "").strip()
    if not token or not _TOKEN_RE.match(token):
        return None
    return token


def new_owner_id() -> str:
    return str(uuid.uuid4())


def resolve_owner_id(request: Request) -> str:
    if allow_pilot_header():
        header = normalize_owner_id(request.headers.get(HEADER_NAME))
        if header:
            return header
    cookie = normalize_owner_id(request.cookies.get(COOKIE_NAME))
    if cookie:
        return cookie
    return new_owner_id()


def bind_owner_id(owner_id: str):
    return current_owner_id.set(owner_id)


def reset_owner_id(token) -> None:
    current_owner_id.reset(token)


def get_owner_id() -> str | None:
    return current_owner_id.get()


def require_owner_id() -> str:
    owner_id = get_owner_id()
    if not owner_id:
        raise HTTPException(status_code=401, detail="缺少访问身份。请刷新页面后重试。")
    return owner_id


def get_pilot() -> PilotIdentity:
    return PilotIdentity(owner_id=require_owner_id())


def attach_pilot_cookie(request: Request, response: Response, owner_id: str) -> None:
    existing = request.cookies.get(COOKIE_NAME)
    if existing == owner_id:
        return
    response.set_cookie(
        COOKIE_NAME,
        owner_id,
        max_age=COOKIE_MAX_AGE,
        httponly=True,
        samesite="lax",
        path="/",
        secure=request.url.scheme == "https",
    )
