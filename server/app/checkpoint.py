from __future__ import annotations

import os
import sqlite3
from typing import Any

from langgraph.checkpoint.sqlite import SqliteSaver

from .runtime_paths import writable_root

_checkpointer: Any = None
_sqlite_conn: sqlite3.Connection | None = None
_pg_conn: Any = None


def get_checkpointer() -> Any:
    """LangGraph thread checkpoint.

    选址图默认写本地 SQLite。共享 Postgres（DATABASE_URL）只给项目/任务/图纸原件，
    避免未安装 langgraph-checkpoint-postgres 时引擎起不来。
    需要把 checkpoint 也放进 Postgres 时，另设 CHECKPOINT_DATABASE_URL。
    """
    global _checkpointer, _sqlite_conn, _pg_conn
    if _checkpointer is not None:
        return _checkpointer
    url = (
        os.environ.get("CHECKPOINT_DATABASE_URL", "").strip()
        or os.environ.get("LANGGRAPH_DATABASE_URL", "").strip()
    )
    root = writable_root()
    root.mkdir(parents=True, exist_ok=True)
    if url.startswith("postgres"):
        _checkpointer = _postgres_saver(url)
        return _checkpointer
    path = root / "langgraph-checkpoints.sqlite"
    _sqlite_conn = sqlite3.connect(str(path), check_same_thread=False)
    saver = SqliteSaver(_sqlite_conn)
    saver.setup()
    _checkpointer = saver
    return saver


def _postgres_saver(url: str) -> Any:
    global _pg_conn
    try:
        from langgraph.checkpoint.postgres import PostgresSaver
        from psycopg import Connection
    except ImportError as exc:
        raise RuntimeError(
            "DATABASE_URL 指向 Postgres 时需要 langgraph-checkpoint-postgres 与 psycopg。"
            "本地默认用 SQLite checkpoint，不必装这两项。"
        ) from exc
    dsn = url.replace("postgresql+psycopg://", "postgresql://").replace(
        "postgresql+psycopg2://", "postgresql://"
    )
    _pg_conn = Connection.connect(dsn, autocommit=True)
    saver = PostgresSaver(_pg_conn)
    saver.setup()
    return saver


def reset_checkpointer() -> None:
    global _checkpointer, _sqlite_conn, _pg_conn
    if _sqlite_conn is not None:
        _sqlite_conn.close()
        _sqlite_conn = None
    if _pg_conn is not None:
        _pg_conn.close()
        _pg_conn = None
    _checkpointer = None
