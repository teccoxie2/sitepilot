from __future__ import annotations

from typing import Any

from .extract import is_opening_schedule_page, normalize_sheet

OPENING_KINDS = {"window_unit", "door_unit"}
PRIMARY_PAGE_TYPES = {
    "FLOOR_PLAN",
    "FOUNDATION_PLAN",
    "FRAMING_PLAN",
    "ROOF_PLAN",
    "SITE_PLAN",
    "SECTION",
    "ELEVATION",
    "SCHEDULE",
    "DETAIL",
}


def completeness(expected: list[dict], supplied_numbers: list[str | None]) -> dict:
    expected_keys = []
    for row in expected:
        key = normalize_sheet(str(row.get("drawing_number") or ""))
        if key:
            expected_keys.append((key, row))
    supplied = {normalize_sheet(item) for item in supplied_numbers if item}
    missing = []
    found = []
    for key, row in expected_keys:
        if key in supplied:
            found.append(row)
        else:
            missing.append(row)
    extra = [item for item in supplied_numbers if item and normalize_sheet(item) not in {k for k, _ in expected_keys}]
    expected_count = len(expected_keys)
    supplied_expected = len(found)
    return {
        "expected_count": expected_count,
        "supplied_expected_count": supplied_expected,
        "missing_drawings": missing,
        "extra_supplied": extra,
        "document_completeness": (supplied_expected / expected_count) if expected_count else None,
        "missing_sheet_recall_denominator": expected_count,
    }


def discipline_health(drawings: list[dict[str, Any]]) -> dict[str, str]:
    health = {
        kind: "NONE"
        for kind in ("ARCHITECTURAL", "STRUCTURAL", "CIVIL", "PLUMBING", "ELECTRICAL", "MECHANICAL")
    }
    for drawing in drawings:
        discipline = str(drawing.get("discipline") or "")
        page_type = str(drawing.get("page_type") or "")
        if discipline in health and page_type in PRIMARY_PAGE_TYPES:
            health[discipline] = "FOUND"
    return health


def build_coverage(drawings: list[dict[str, Any]], evidence: list[dict[str, Any]]) -> list[dict[str, Any]]:
    by_drawing: dict[str, list[dict[str, Any]]] = {}
    for item in evidence:
        drawing_id = str(item.get("drawing_id") or "")
        if drawing_id:
            by_drawing.setdefault(drawing_id, []).append(item)
    rows: list[dict[str, Any]] = []
    for drawing in drawings:
        drawing_id = str(drawing.get("id") or "")
        text = str(drawing.get("native_text") or "")
        page_type = str(drawing.get("page_type") or "UNKNOWN")
        ev = by_drawing.get(drawing_id, [])
        opening_rows = [
            item for item in ev if (item.get("structured_value") or {}).get("kind") in OPENING_KINDS
        ]
        floor_rows = [item for item in ev if (item.get("structured_value") or {}).get("kind") == "floor_area"]
        expected: list[str] = []
        if is_opening_schedule_page(text, page_type):
            expected.append("opening_schedule")
        if page_type == "FLOOR_PLAN" or re_floor_hint(text):
            expected.append("floor_area")
        if "opening_schedule" in expected and not opening_rows:
            extract_status = "MISSING_SCHEDULE_ROWS"
            ignore_reason = "识别到门窗表页但没有解析出行，不能当作数量 0。"
        elif "floor_area" in expected and not floor_rows:
            extract_status = "NO_EXTRACTION"
            ignore_reason = "平面页未读到建筑面积标注。"
        elif expected:
            extract_status = "EXTRACTED"
            ignore_reason = None
        elif ev:
            extract_status = "EXTRACTED"
            ignore_reason = None
        else:
            extract_status = "NO_SUPPORTED_CONTENT"
            ignore_reason = "本页没有当前管线支持的取量字段。"
        payload = drawing.get("payload") or {}
        rows.append(
            {
                "drawing_id": drawing_id,
                "page_number": drawing.get("page_number"),
                "drawing_number": drawing.get("drawing_number"),
                "page_type": page_type,
                "discipline": drawing.get("discipline"),
                "expected_content": expected,
                "extract_status": extract_status,
                "evidence_rows": len(ev),
                "opening_rows": len(opening_rows),
                "floor_area_rows": len(floor_rows),
                "ignore_reason": ignore_reason,
                "page_type_candidates": payload.get("page_type_candidates") or [],
            }
        )
    return rows


def re_floor_hint(text: str) -> bool:
    lowered = (text or "").lower()
    return "building area" in lowered or "gross floor area" in lowered or "gfa" in lowered
