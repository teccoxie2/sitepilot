from __future__ import annotations

import re
from typing import Any

from .enums import DISCIPLINES, PAGE_TYPES

DRAWING_NO_RE = re.compile(
    r"(?:drawing\s*(?:no\.?|number|#)|drg\.?\s*no\.?|sheet\s*(?:no\.?|number))"
    r"\s*[:.\-]?\s*"
    r"([A-Z]{0,3}-?\d{1,4}[A-Za-z]?)",
    re.I,
)
BARE_SHEET_RE = re.compile(r"\b([ASCE]\d{2,4}[A-Za-z]?|[A-Z]-\d{2,3})\b")
REVISION_RE = re.compile(r"\brev(?:ision)?\s*[:.\-]?\s*([A-Z0-9]{1,4})\b", re.I)
SCALE_RE = re.compile(r"\bscale\s*[:.\-]?\s*(1\s*:\s*\d{1,4})\b", re.I)
INDEX_HEAD_RE = re.compile(r"drawing\s+index|sheet\s+(?:index|register|schedule)", re.I)
INDEX_ROW_RE = re.compile(
    r"^([A-Z]{0,3}-?\d{1,4}[A-Za-z]?)\s+(.+?)(?:\s+rev(?:ision)?\s*([A-Z0-9]{1,4}))?$",
    re.I,
)
REF_RE = re.compile(r"\b(\d{1,3})\s*/\s*([A-Z]{0,3}-?\d{2,4}[A-Za-z]?)\b")
FLOOR_AREA_RE = re.compile(
    r"(?:(?:unit\s*(\d+)\s+)?(?:gfa|gross\s+floor\s+area|building\s+area))"
    r"\s*[:=]?\s*([\d]+(?:\.\d+)?)\s*(?:m[²2]|sqm)",
    re.I,
)
UNIT_AREA_RE = re.compile(
    r"unit\s*(\d+)\s*[:.\-]?\s*([\d]+(?:\.\d+)?)\s*(?:m[²2]|sqm)",
    re.I,
)
ROOF_AREA_RE = re.compile(
    r"roof(?:\s+area)?\s*[:=]?\s*([\d]+(?:\.\d+)?)\s*(?:m[²2]|sqm)",
    re.I,
)
FOOTPRINT_RE = re.compile(
    r"(?:footprint|ground\s+floor\s+area)\s*[:=]?\s*([\d]+(?:\.\d+)?)\s*(?:m[²2]|sqm)",
    re.I,
)
BEAM_RE = re.compile(
    r"\b(\d{2,3}\s*UB\s*\d{2,3}|\d{2,3}UB|\bUB\s*\d{2,3}|PFC\s*\d{2,3}|\d{2,3}\s*PFC)\b",
    re.I,
)
BEAM_COUNT_RE = re.compile(r"\b(?:qty|quantity|no\.?)\s*[:=]?\s*(\d+)\b", re.I)

PAGE_TYPE_HINTS: tuple[tuple[str, tuple[str, ...]], ...] = (
    ("COVER", ("cover sheet", "drawing index", "title sheet", "cover page")),
    ("SCHEDULE", ("window schedule", "door schedule", "area schedule", "drawing index")),
    ("FOUNDATION_PLAN", ("foundation plan", "foundation", "waffle", "ribraft")),
    ("FRAMING_PLAN", ("framing plan", "floor framing", "roof framing")),
    ("ROOF_PLAN", ("roof plan",)),
    ("FLOOR_PLAN", ("floor plan", "ground floor", "first floor", "level 1")),
    ("SITE_PLAN", ("site plan", "location plan")),
    ("SECTION", ("section a", "section b", "cross section")),
    ("ELEVATION", ("elevation", "north elevation")),
    ("DETAIL", ("detail", "typical detail")),
    ("SPECIFICATION", ("specification", "notes and specs")),
)

DISCIPLINE_HINTS: tuple[tuple[str, tuple[str, ...]], ...] = (
    ("STRUCTURAL", ("structural", "foundation plan", "framing plan", "s0", "engineer")),
    ("ARCHITECTURAL", ("architectural", "floor plan", "elevation", "window schedule")),
    ("CIVIL", ("civil", "drainage plan", "earthworks")),
    ("PLUMBING", ("plumbing", "sanitary")),
    ("ELECTRICAL", ("electrical", "lighting layout")),
    ("MECHANICAL", ("mechanical", "hvac")),
    ("LANDSCAPE", ("landscape", "planting")),
)


def normalize_sheet(value: str | None) -> str:
    if not value:
        return ""
    return re.sub(r"[\s\-]+", "", value).upper()


def _first_match(pattern: re.Pattern[str], text: str) -> str | None:
    match = pattern.search(text)
    if not match:
        return None
    return match.group(1).strip()


def classify_page(text: str, filename: str = "", kind: str = "") -> dict[str, Any]:
    lowered = text.lower()
    page_type = "UNKNOWN"
    type_conf = 0.0
    for candidate, hints in PAGE_TYPE_HINTS:
        if any(hint in lowered for hint in hints):
            page_type = candidate
            type_conf = 0.86
            break
    discipline = "UNKNOWN"
    disc_conf = 0.0
    for candidate, hints in DISCIPLINE_HINTS:
        if any(hint in lowered for hint in hints):
            discipline = candidate
            disc_conf = 0.86
            break
    kind_upper = (kind or "").upper()
    file_lower = filename.lower()
    if discipline == "UNKNOWN":
        if kind_upper in DISCIPLINES and kind_upper != "UNKNOWN":
            discipline = kind_upper
            disc_conf = 0.55
        elif "struct" in file_lower:
            discipline = "STRUCTURAL"
            disc_conf = 0.5
        elif "arch" in file_lower:
            discipline = "ARCHITECTURAL"
            disc_conf = 0.5
    confidence = max(type_conf, disc_conf)
    if page_type == "UNKNOWN" and discipline == "UNKNOWN":
        confidence = 0.0
    return {
        "page_type": page_type if page_type in PAGE_TYPES else "UNKNOWN",
        "discipline": discipline if discipline in DISCIPLINES else "UNKNOWN",
        "confidence": confidence,
        "source": "native_text" if text.strip() else "filename",
    }


def extract_title_block(text: str) -> dict[str, Any]:
    drawing_number = _first_match(DRAWING_NO_RE, text)
    if not drawing_number:
        bare = BARE_SHEET_RE.search(text)
        drawing_number = bare.group(1) if bare else None
    revision = _first_match(REVISION_RE, text)
    scale = _first_match(SCALE_RE, text)
    title = None
    for line in text.splitlines():
        stripped = line.strip()
        if len(stripped) < 8:
            continue
        if DRAWING_NO_RE.search(stripped) or REVISION_RE.search(stripped):
            continue
        if re.search(r"floor plan|roof plan|foundation|elevation|section|cover|framing", stripped, re.I):
            title = stripped[:160]
            break
    confidence = 0.0
    if drawing_number:
        confidence += 0.55
    if revision:
        confidence += 0.2
    if title:
        confidence += 0.15
    return {
        "drawing_number": drawing_number,
        "drawing_title": title,
        "revision": revision,
        "scale": scale,
        "confidence": min(confidence, 0.95),
    }


def parse_drawing_index(text: str) -> list[dict[str, str | None]]:
    if not INDEX_HEAD_RE.search(text):
        return []
    started = False
    rows: list[dict[str, str | None]] = []
    for raw in text.splitlines():
        line = raw.strip()
        if not line:
            continue
        if INDEX_HEAD_RE.search(line):
            started = True
            continue
        if not started:
            continue
        if re.match(r"^(notes?|legend|north)\b", line, re.I):
            break
        match = INDEX_ROW_RE.match(line)
        if not match:
            continue
        number = match.group(1).strip()
        title = match.group(2).strip()
        if normalize_sheet(number) in {normalize_sheet(item["drawing_number"]) for item in rows}:
            continue
        rows.append(
            {
                "drawing_number": number,
                "drawing_title": title[:200],
                "revision": match.group(3),
            }
        )
    return rows


def parse_references(text: str) -> list[dict[str, str]]:
    found: list[dict[str, str]] = []
    seen: set[str] = set()
    for match in REF_RE.finditer(text):
        target = match.group(2)
        key = normalize_sheet(target)
        if not key or key in seen:
            continue
        seen.add(key)
        found.append({"target_number": target, "raw_text": match.group(0)})
    return found


def parse_floor_areas(text: str) -> list[dict[str, Any]]:
    items: list[dict[str, Any]] = []
    for match in FLOOR_AREA_RE.finditer(text):
        items.append(
            {
                "kind": "floor_area",
                "unit_index": int(match.group(1)) if match.group(1) else None,
                "quantity": float(match.group(2)),
                "unit": "m2",
                "evidence": match.group(0).strip(),
            }
        )
    if items:
        return items
    for match in UNIT_AREA_RE.finditer(text):
        items.append(
            {
                "kind": "floor_area",
                "unit_index": int(match.group(1)),
                "quantity": float(match.group(2)),
                "unit": "m2",
                "evidence": match.group(0).strip(),
            }
        )
    return items


def parse_roof_areas(text: str) -> list[dict[str, Any]]:
    items: list[dict[str, Any]] = []
    for match in ROOF_AREA_RE.finditer(text):
        items.append(
            {
                "kind": "roof_area",
                "quantity": float(match.group(1)),
                "unit": "m2",
                "evidence": match.group(0).strip(),
            }
        )
    return items


def parse_footprints(text: str) -> list[dict[str, Any]]:
    items: list[dict[str, Any]] = []
    for match in FOOTPRINT_RE.finditer(text):
        items.append(
            {
                "kind": "footprint",
                "quantity": float(match.group(1)),
                "unit": "m2",
                "evidence": match.group(0).strip(),
            }
        )
    return items


def parse_beams(text: str) -> list[dict[str, Any]]:
    items: list[dict[str, Any]] = []
    for match in BEAM_RE.finditer(text):
        window = text[max(0, match.start() - 40) : match.end() + 40]
        count_match = BEAM_COUNT_RE.search(window)
        items.append(
            {
                "kind": "structural_beam",
                "size": re.sub(r"\s+", "", match.group(1).upper()),
                "quantity": int(count_match.group(1)) if count_match else None,
                "unit": "ea",
                "evidence": window.strip(),
            }
        )
    return items
