from __future__ import annotations

import json
from pathlib import Path
from typing import Any

from pydantic import BaseModel, Field, ValidationError

from ..drawing_llm import llm_api_key, llm_base_url, llm_model_name
from .enums import DISCIPLINES, PAGE_TYPES

PROMPT_ROOT = Path(__file__).resolve().parent.parent / "prompts"


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
    """True only after classify_page_vision actually sends a page to a model."""
    return False


def _load_prompt(name: str) -> str:
    path = PROMPT_ROOT / name / "v1.md"
    return path.read_text(encoding="utf-8") if path.exists() else ""


def classify_page_vision(_png_path: Path) -> PageClassificationSchema | None:
    """Vision fallback. Even with a key, this stub does not read the page."""
    if not vision_available():
        return None
    _ = llm_base_url, llm_model_name, _load_prompt("page-classification")
    return None


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
