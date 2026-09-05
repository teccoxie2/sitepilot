from __future__ import annotations

import os
from pathlib import Path


def writable_root() -> Path:
    raw = os.environ.get("DATA_DIR", "").strip()
    path = Path(raw) if raw else Path(__file__).resolve().parent.parent / "data"
    path.mkdir(parents=True, exist_ok=True)
    return path
