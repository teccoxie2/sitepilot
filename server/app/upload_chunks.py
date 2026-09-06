from __future__ import annotations

import json
import re
import shutil
import time
import uuid
from pathlib import Path
from typing import Any

from fastapi import HTTPException, UploadFile

from .drawing_parse import MAX_PDF_BYTES
from .runtime_paths import writable_root

SESSION_TTL_SEC = 30 * 60
CHUNK_BYTES = 3_500_000
MAX_FILES = 6
_SESSION_ID = re.compile(r"^[0-9a-f]{32}$")


def sessions_root() -> Path:
    path = writable_root() / "upload-sessions"
    path.mkdir(parents=True, exist_ok=True)
    return path


def _purge_stale(now: float | None = None) -> None:
    stamp = now if now is not None else time.time()
    root = sessions_root()
    for item in root.iterdir():
        if not item.is_dir():
            continue
        meta_path = item / "meta.json"
        created = item.stat().st_mtime
        if meta_path.is_file():
            try:
                payload = json.loads(meta_path.read_text(encoding="utf-8"))
                created = float(payload.get("created_at") or created)
            except (OSError, TypeError, ValueError, json.JSONDecodeError):
                created = item.stat().st_mtime
        if stamp - created > SESSION_TTL_SEC:
            shutil.rmtree(item, ignore_errors=True)


def create_session() -> dict[str, Any]:
    _purge_stale()
    session_id = uuid.uuid4().hex
    dest = sessions_root() / session_id
    dest.mkdir(parents=True, exist_ok=False)
    meta = {"created_at": time.time(), "files": {}}
    (dest / "meta.json").write_text(json.dumps(meta), encoding="utf-8")
    return {"session_id": session_id, "chunk_bytes": CHUNK_BYTES}


def _session_dir(session_id: str) -> Path:
    if not _SESSION_ID.fullmatch(session_id or ""):
        raise HTTPException(status_code=400, detail="无效上传会话")
    dest = sessions_root() / session_id
    if not dest.is_dir():
        raise HTTPException(status_code=404, detail="上传会话不存在或已过期，请重新上传。")
    meta_path = dest / "meta.json"
    if meta_path.is_file():
        try:
            payload = json.loads(meta_path.read_text(encoding="utf-8"))
            created = float(payload.get("created_at") or 0)
            if created and time.time() - created > SESSION_TTL_SEC:
                shutil.rmtree(dest, ignore_errors=True)
                raise HTTPException(status_code=404, detail="上传会话不存在或已过期，请重新上传。")
        except HTTPException:
            raise
        except (OSError, TypeError, ValueError, json.JSONDecodeError):
            pass
    return dest


def _read_meta(dest: Path) -> dict[str, Any]:
    meta_path = dest / "meta.json"
    if not meta_path.is_file():
        raise HTTPException(status_code=404, detail="上传会话不存在或已过期，请重新上传。")
    try:
        payload = json.loads(meta_path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        raise HTTPException(status_code=400, detail="上传会话损坏，请重新上传。") from exc
    if not isinstance(payload, dict):
        raise HTTPException(status_code=400, detail="上传会话损坏，请重新上传。")
    files = payload.get("files")
    if not isinstance(files, dict):
        payload["files"] = {}
    return payload


def _write_meta(dest: Path, meta: dict[str, Any]) -> None:
    (dest / "meta.json").write_text(json.dumps(meta), encoding="utf-8")


def _safe_filename(raw: str) -> str:
    name = Path(raw or "").name
    if not name or name.startswith(".") or "/" in name or "\\" in name:
        raise HTTPException(status_code=400, detail="文件名无效")
    if not name.lower().endswith(".pdf"):
        raise HTTPException(status_code=400, detail=f"{name} 不是 PDF")
    return name


async def put_chunk(
    session_id: str,
    *,
    file_index: int,
    chunk_index: int,
    chunk_count: int,
    filename: str,
    kind: str | None,
    chunk: UploadFile,
) -> dict[str, Any]:
    if file_index < 0 or file_index >= MAX_FILES:
        raise HTTPException(status_code=400, detail="一次最多上传 6 份 PDF")
    if chunk_index < 0 or chunk_count < 1 or chunk_index >= chunk_count:
        raise HTTPException(status_code=400, detail="分片序号无效")
    name = _safe_filename(filename)
    dest = _session_dir(session_id)
    meta = _read_meta(dest)
    files = meta["files"]
    key = str(file_index)
    existing = files.get(key)
    if existing:
        if existing.get("filename") != name or int(existing.get("chunk_count") or 0) != chunk_count:
            raise HTTPException(status_code=400, detail="同一文件的分片信息不一致，请重新上传。")
    blob = await chunk.read()
    if not blob:
        raise HTTPException(status_code=400, detail=f"{name} 分片是空的")
    if len(blob) > CHUNK_BYTES:
        raise HTTPException(status_code=400, detail="分片超过允许大小")
    received = int(existing.get("bytes") or 0) if existing else 0
    if received + len(blob) > MAX_PDF_BYTES:
        raise HTTPException(status_code=400, detail=f"{name} 超过 15MB")
    part_dir = dest / f"{file_index:02d}"
    part_dir.mkdir(parents=True, exist_ok=True)
    part_path = part_dir / f"{chunk_index:04d}.part"
    if part_path.is_file():
        received -= part_path.stat().st_size
    part_path.write_bytes(blob)
    files[key] = {
        "filename": name,
        "kind": (kind or "").strip() or None,
        "chunk_count": chunk_count,
        "bytes": received + len(blob),
    }
    meta["files"] = files
    _write_meta(dest, meta)
    return {"ok": True, "file_index": file_index, "chunk_index": chunk_index, "received_bytes": files[key]["bytes"]}


def assemble_session(session_id: str, dest: Path) -> list[dict[str, Any]]:
    source = _session_dir(session_id)
    meta = _read_meta(source)
    files = meta.get("files") or {}
    if not files:
        raise HTTPException(status_code=400, detail="请至少上传一份 PDF")
    dest.mkdir(parents=True, exist_ok=True)
    saved: list[dict[str, Any]] = []
    for file_index in sorted(int(key) for key in files):
        info = files[str(file_index)]
        name = _safe_filename(str(info.get("filename") or ""))
        chunk_count = int(info.get("chunk_count") or 0)
        part_dir = source / f"{file_index:02d}"
        parts = sorted(part_dir.glob("*.part")) if part_dir.is_dir() else []
        if chunk_count < 1 or len(parts) != chunk_count:
            raise HTTPException(status_code=400, detail=f"{name} 分片不完整，请重新上传。")
        expected = [part_dir / f"{index:04d}.part" for index in range(chunk_count)]
        if [item.name for item in parts] != [item.name for item in expected] or not all(item.is_file() for item in expected):
            raise HTTPException(status_code=400, detail=f"{name} 分片不完整，请重新上传。")
        blob = b"".join(item.read_bytes() for item in expected)
        if not blob:
            raise HTTPException(status_code=400, detail=f"{name} 是空文件")
        if len(blob) > MAX_PDF_BYTES:
            raise HTTPException(status_code=400, detail=f"{name} 超过 15MB")
        path = dest / f"{file_index}-{name}"
        path.write_bytes(blob)
        saved.append(
            {
                "path": str(path),
                "filename": name,
                "kind": info.get("kind"),
            }
        )
    if len(saved) > MAX_FILES:
        raise HTTPException(status_code=400, detail="一次最多上传 6 份 PDF")
    return saved


def delete_session(session_id: str) -> None:
    if not _SESSION_ID.fullmatch(session_id or ""):
        return
    shutil.rmtree(sessions_root() / session_id, ignore_errors=True)
