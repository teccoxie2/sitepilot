from __future__ import annotations

import base64
import json
import re
from pathlib import Path
from typing import Any

from fastapi import HTTPException
from pydantic import BaseModel, Field, ValidationError

from ..drawing_llm import call_vision_completion, llm_api_key
from .enums import DISCIPLINES, PAGE_TYPES

PROMPT_ROOT = Path(__file__).resolve().parent.parent / "prompts"
VISION_CONFIDENCE_CAP = 0.72
VISION_MAX_EDGE_PX = 1600
REVISION_RE = re.compile(r"^[A-Z0-9]{1,4}$")


class PageClassificationSchema(BaseModel):
    drawing_number: str | None = None
    drawing_title: str | None = None
    revision: str | None = None
    discipline: str = "UNKNOWN"
    page_type: str = "UNKNOWN"
    confidence: float = 0.0
    evidence: list[dict[str, Any]] = Field(default_factory=list)


def vision_available() -> bool:
    return bool(llm_api_key())


def vision_classification_implemented() -> bool:
    return True


def _load_prompt(name: str) -> str:
    path = PROMPT_ROOT / name / "v1.md"
    return path.read_text(encoding="utf-8") if path.exists() else ""


def _sanitize_sheet(value: str | None) -> str | None:
    text = (value or "").strip()
    if not text:
        return None
    from .extract import BARE_SHEET_RE, DRAWING_NO_RE

    match = DRAWING_NO_RE.search(text) or BARE_SHEET_RE.search(text)
    if not match:
        return None
    return match.group(1).strip()


def _sanitize_revision(value: str | None) -> str | None:
    text = (value or "").strip().upper()
    if not text or not REVISION_RE.fullmatch(text):
        return None
    return text


def _png_as_data_url(path: Path) -> str | None:
    if not path.is_file() or path.stat().st_size <= 0:
        return None
    from .pdf import require_pymupdf

    pdf = require_pymupdf()
    try:
        document = pdf.open(path)
    except Exception:
        data = path.read_bytes()
        if not data or len(data) > 2_000_000:
            return None
        return "data:image/png;base64," + base64.b64encode(data).decode("ascii")
    try:
        page = document[0]
        width = max(float(page.rect.width), 1.0)
        scale = min(1.0, VISION_MAX_EDGE_PX / width)
        pixmap = page.get_pixmap(matrix=pdf.Matrix(scale, scale), alpha=False)
        data = pixmap.tobytes("png")
    finally:
        document.close()
    if not data:
        return None
    return "data:image/png;base64," + base64.b64encode(data).decode("ascii")


def classify_page_vision(png_path: Path) -> PageClassificationSchema | None:
    """Send a rendered page to the same CPA/OpenAI chat endpoint used by V1."""
    if not vision_available():
        return None
    image = _png_as_data_url(png_path)
    if not image:
        return None
    prompt = _load_prompt("page-classification")
    if not prompt.strip():
        return None
    try:
        raw, _used = call_vision_completion(prompt, image)
    except HTTPException:
        raise
    except Exception:
        return None
    parsed = parse_model_json(raw)
    if not parsed:
        return None
    validated = validate_classification_payload(parsed)
    if not validated:
        return None
    validated.drawing_number = _sanitize_sheet(validated.drawing_number)
    validated.revision = _sanitize_revision(validated.revision)
    title = (validated.drawing_title or "").strip()
    validated.drawing_title = title[:160] or None
    validated.confidence = min(float(validated.confidence or 0), VISION_CONFIDENCE_CAP)
    if not validated.drawing_number and validated.page_type == "UNKNOWN":
        validated.confidence = min(validated.confidence, 0.4)
    return validated


def validate_classification_payload(payload: dict[str, Any]) -> PageClassificationSchema | None:
    try:
        parsed = PageClassificationSchema.model_validate(payload)
    except ValidationError:
        return None
    if parsed.discipline not in DISCIPLINES:
        parsed.discipline = "UNKNOWN"
    if parsed.page_type not in PAGE_TYPES:
        parsed.page_type = "UNKNOWN"
    parsed.confidence = max(0.0, min(1.0, float(parsed.confidence or 0)))
    return parsed


def parse_model_json(raw: str) -> dict[str, Any] | None:
    raw = raw.strip()
    if raw.startswith("```"):
        raw = raw.strip("`")
        if raw.lower().startswith("json"):
            raw = raw[4:]
    try:
        data = json.loads(raw)
    except json.JSONDecodeError:
        return None
    return data if isinstance(data, dict) else None
