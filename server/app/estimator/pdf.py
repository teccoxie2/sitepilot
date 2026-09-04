from __future__ import annotations

import hashlib
from pathlib import Path
from typing import Any

from .enums import NATIVE_TEXT_MIN_CHARS, RENDER_DPI

try:
    import fitz
except ImportError:  # pragma: no cover
    fitz = None  # type: ignore[assignment]


def require_pymupdf() -> Any:
    if fitz is None:
        raise RuntimeError("未安装 PyMuPDF，无法预检或渲染 PDF。")
    return fitz


def sha256_file(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        while True:
            chunk = handle.read(1024 * 1024)
            if not chunk:
                break
            digest.update(chunk)
    return digest.hexdigest()


def preflight_pdf(path: Path) -> dict[str, Any]:
    pdf = require_pymupdf()
    document = pdf.open(path)
    try:
        page_count = document.page_count
        page_chars: list[int] = []
        rotations: list[int] = []
        for page in document:
            text = page.get_text("text") or ""
            page_chars.append(len(text.strip()))
            rotations.append(int(page.rotation or 0))
        has_text_layer = any(count >= NATIVE_TEXT_MIN_CHARS for count in page_chars)
        processing_mode = "native_text" if has_text_layer else "vision_ocr"
        if has_text_layer and any(count < NATIVE_TEXT_MIN_CHARS for count in page_chars):
            processing_mode = "mixed"
        return {
            "filename": path.name,
            "page_count": page_count,
            "has_text_layer": has_text_layer,
            "page_char_counts": page_chars,
            "rotations": rotations,
            "file_hash": sha256_file(path),
            "processing_mode": processing_mode,
            "status": "ready",
        }
    finally:
        document.close()


def page_native_text(path: Path, page_number: int) -> str:
    pdf = require_pymupdf()
    document = pdf.open(path)
    try:
        page = document.load_page(page_number - 1)
        return page.get_text("text") or ""
    finally:
        document.close()


def search_text_bbox(path: Path, page_number: int, needle: str) -> tuple[float, float, float, float]:
    if not needle.strip():
        return (0.0, 0.0, 0.0, 0.0)
    pdf = require_pymupdf()
    document = pdf.open(path)
    try:
        page = document.load_page(page_number - 1)
        rects = page.search_for(needle)
        if not rects:
            snippet = needle[:24]
            rects = page.search_for(snippet) if snippet else []
        if not rects:
            return (0.0, 0.0, 0.0, 0.0)
        box = rects[0]
        width = float(page.rect.width) or 1.0
        height = float(page.rect.height) or 1.0
        return (
            max(0.0, min(1.0, box.x0 / width)),
            max(0.0, min(1.0, box.y0 / height)),
            max(0.0, min(1.0, box.x1 / width)),
            max(0.0, min(1.0, box.y1 / height)),
        )
    finally:
        document.close()


def render_page_png(path: Path, page_number: int, dest: Path, dpi: int = RENDER_DPI) -> dict[str, Any]:
    pdf = require_pymupdf()
    document = pdf.open(path)
    try:
        page = document.load_page(page_number - 1)
        pixmap = page.get_pixmap(dpi=dpi, alpha=False)
        dest.parent.mkdir(parents=True, exist_ok=True)
        pixmap.save(dest)
        return {
            "width": pixmap.width,
            "height": pixmap.height,
            "dpi": dpi,
            "rotation_deg": int(page.rotation or 0),
            "path": str(dest),
        }
    finally:
        document.close()
