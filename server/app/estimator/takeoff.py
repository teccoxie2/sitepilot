from __future__ import annotations

from typing import Any

from ..data_loader import pricebook
from ..price_provider import get_price_provider
from . import store
from .completeness import build_coverage, completeness, discipline_health
from .enums import ROOF_COVER_WIDTH_M, SCOPE_TAXONOMY, UNCERTAINTY_BY_STATUS
from .extract import is_opening_schedule_page

PRICE = get_price_provider()

SCOPE_BY_KIND = {
    "floor_area": "05",
    "footprint": "05",
    "structural_beam": "05",
    "roof_area": "07",
    "window_unit": "08",
    "door_unit": "08",
}

WINDOW_SKU_BY_MM = {
    (1200, 1200): "window_alu_1200x1200_dg",
    (1800, 1200): "window_alu_1800x1200_dg",
    (1800, 600): "window_alu_1800x600_dg",
}

SKU_BY_KIND = {
    "roof_area": None,
    "structural_beam": "steel_lintel_ub",
    "floor_area": None,
    "footprint": None,
    "window_unit": None,
    "door_unit": None,
}

DESCRIPTION_BY_KIND = {
    "floor_area": "建筑面积（图纸标注）",
    "footprint": "底层占地（图纸标注）",
    "structural_beam": "结构梁",
    "roof_area": "屋面斜面积（图纸标注）",
    "window_unit": "窗（门窗表）",
    "door_unit": "门（门窗表）",
}


def build_takeoff_and_review(project_id: str) -> dict[str, Any]:
    project = store.get_project(project_id)
    if not project:
        raise KeyError(project_id)
    takeoff_items: list[dict[str, Any]] = []
    for evidence in project.get("evidence") or []:
        if evidence.get("extraction_method") == "MANUAL":
            continue
        value = evidence.get("structured_value") or {}
        kind = value.get("kind")
        if kind not in SCOPE_BY_KIND:
            continue
        item = _takeoff_from_evidence(evidence, value, kind)
        takeoff_items.append(item)
    _add_calculated_roof_cover(takeoff_items)
    _add_calculated_window_area(takeoff_items)
    store.replace_takeoff(project_id, takeoff_items)
    review_items = _build_review(project, takeoff_items)
    store.replace_review(project_id, review_items)
    return {"takeoff": takeoff_items, "review": review_items}


def _takeoff_from_evidence(evidence: dict[str, Any], value: dict[str, Any], kind: str) -> dict[str, Any]:
    method = evidence.get("extraction_method") or "REGEX"
    quantity = value.get("quantity")
    status = "VERIFIED" if method in {"NATIVE_TEXT", "REGEX"} and quantity is not None else "UNRESOLVED"
    if method in {"VISION", "OCR"}:
        status = "INFERRED" if quantity is not None else "UNRESOLVED"
    if kind == "structural_beam" and quantity is None:
        status = "UNRESOLVED"
    sku = SKU_BY_KIND.get(kind)
    description = DESCRIPTION_BY_KIND.get(kind) or kind
    if kind == "structural_beam" and value.get("size"):
        description = f"结构梁 {value['size']}"
    if kind == "floor_area" and value.get("unit_index"):
        description = f"Unit {value['unit_index']} 建筑面积"
    if kind in {"window_unit", "door_unit"}:
        mark = value.get("mark") or ""
        width = value.get("width_mm")
        height = value.get("height_mm")
        label = "窗" if kind == "window_unit" else "门"
        description = f"{mark} {label} {width}×{height} mm".strip()
        if kind == "window_unit" and width is not None and height is not None:
            sku = WINDOW_SKU_BY_MM.get((int(width), int(height)))
    if status == "VERIFIED" and quantity is None:
        status = "UNRESOLVED"
    return {
        "id": store.new_id(),
        "scope_code": SCOPE_BY_KIND[kind],
        "description": description,
        "quantity": quantity,
        "unit": value.get("unit") or "m2",
        "status": status,
        "confidence": float(evidence.get("confidence") or 0),
        "source_method": method,
        "calculation_formula": None,
        "calculation_inputs": {"evidence_kind": kind, **{k: v for k, v in value.items() if k != "evidence"}},
        "evidence_ids": [evidence["id"]],
        "sku": sku,
        "created_at": store.now_iso(),
    }


def _add_calculated_roof_cover(items: list[dict[str, Any]]) -> None:
    for item in list(items):
        if (item.get("calculation_inputs") or {}).get("evidence_kind") != "roof_area":
            continue
        if item.get("quantity") is None:
            continue
        items.append(
            {
                "id": store.new_id(),
                "scope_code": "07",
                "description": "屋面波纹钢板延米（按有效覆盖宽换算）",
                "quantity": round(float(item["quantity"]) / ROOF_COVER_WIDTH_M, 4),
                "unit": "lm",
                "status": "CALCULATED",
                "confidence": item.get("confidence") or 0,
                "source_method": "GEOMETRY",
                "calculation_formula": "roof_m2 / cover_width_m",
                "calculation_inputs": {
                    "roof_m2": item["quantity"],
                    "cover_width_m": ROOF_COVER_WIDTH_M,
                    "cover_width_source": "pricebook notes for Armorsteel 845 effective cover 0.762m",
                },
                "evidence_ids": list(item.get("evidence_ids") or []),
                "sku": "roofing_corrugate_colour_845",
                "created_at": store.now_iso(),
            }
        )
        items.append(
            {
                "id": store.new_id(),
                "scope_code": "07",
                "description": "屋面衬垫面积",
                "quantity": float(item["quantity"]),
                "unit": "m2",
                "status": "CALCULATED",
                "confidence": item.get("confidence") or 0,
                "source_method": "GEOMETRY",
                "calculation_formula": "roof_m2",
                "calculation_inputs": {"roof_m2": item["quantity"]},
                "evidence_ids": list(item.get("evidence_ids") or []),
                "sku": "thermakraft_215_underlay",
                "created_at": store.now_iso(),
            }
        )


def _add_calculated_window_area(items: list[dict[str, Any]]) -> None:
    for item in list(items):
        inputs = item.get("calculation_inputs") or {}
        if inputs.get("evidence_kind") != "window_unit":
            continue
        width = inputs.get("width_mm")
        height = inputs.get("height_mm")
        quantity = item.get("quantity")
        if width is None or height is None or quantity is None:
            continue
        area = round(float(quantity) * (float(width) / 1000.0) * (float(height) / 1000.0), 4)
        mark = inputs.get("mark") or ""
        items.append(
            {
                "id": store.new_id(),
                "scope_code": "08",
                "description": f"{mark} 窗面积".strip(),
                "quantity": area,
                "unit": "m2",
                "status": "CALCULATED",
                "confidence": item.get("confidence") or 0,
                "source_method": "GEOMETRY",
                "calculation_formula": "qty * (width_mm/1000) * (height_mm/1000)",
                "calculation_inputs": {
                    "qty": quantity,
                    "width_mm": width,
                    "height_mm": height,
                    "mark": mark,
                },
                "evidence_ids": list(item.get("evidence_ids") or []),
                "sku": None,
                "created_at": store.now_iso(),
            }
        )


def _build_review(project: dict[str, Any], takeoff_items: list[dict[str, Any]]) -> list[dict[str, Any]]:
    items: list[dict[str, Any]] = []
    opening_by_drawing: dict[str, int] = {}
    for evidence in project.get("evidence") or []:
        kind = (evidence.get("structured_value") or {}).get("kind")
        if kind not in {"window_unit", "door_unit"}:
            continue
        drawing_id = str(evidence.get("drawing_id") or "")
        if drawing_id:
            opening_by_drawing[drawing_id] = opening_by_drawing.get(drawing_id, 0) + 1
    for drawing in project.get("drawings") or []:
        text = drawing.get("native_text") or ""
        candidates = (drawing.get("payload") or {}).get("page_type_candidates") or []
        if is_opening_schedule_page(text, drawing.get("page_type")) and opening_by_drawing.get(drawing["id"], 0) == 0:
            items.append(
                {
                    "id": store.new_id(),
                    "entity_type": "drawing",
                    "entity_id": drawing["id"],
                    "queue_status": "NEEDS_REVIEW",
                    "reason_code": "MISSING_SCHEDULE_ROWS",
                    "payload": {
                        "page_number": drawing.get("page_number"),
                        "drawing_number": drawing.get("drawing_number"),
                        "note": "识别到门窗表页但没有解析出行，不能当作没有门窗。",
                    },
                    "created_at": store.now_iso(),
                }
            )
            continue
        if len(candidates) > 1:
            items.append(
                {
                    "id": store.new_id(),
                    "entity_type": "drawing",
                    "entity_id": drawing["id"],
                    "queue_status": "NEEDS_REVIEW",
                    "reason_code": "DRAWING_CONFLICT",
                    "payload": {
                        "page_number": drawing.get("page_number"),
                        "drawing_number": drawing.get("drawing_number"),
                        "page_type": drawing.get("page_type"),
                        "page_type_candidates": candidates,
                    },
                    "created_at": store.now_iso(),
                }
            )
            continue
        if drawing.get("page_type") == "UNKNOWN" or not drawing.get("drawing_number"):
            items.append(
                {
                    "id": store.new_id(),
                    "entity_type": "drawing",
                    "entity_id": drawing["id"],
                    "queue_status": "NEEDS_REVIEW",
                    "reason_code": "WRONG_CLASSIFICATION" if drawing.get("page_type") == "UNKNOWN" else "LOW_CONFIDENCE",
                    "payload": {
                        "page_number": drawing.get("page_number"),
                        "filename_document_id": drawing.get("document_id"),
                    },
                    "created_at": store.now_iso(),
                }
            )
        elif float(drawing.get("confidence") or 0) >= 0.8 and drawing.get("drawing_number"):
            items.append(
                {
                    "id": store.new_id(),
                    "entity_type": "drawing",
                    "entity_id": drawing["id"],
                    "queue_status": "AUTO_ACCEPTED",
                    "reason_code": "OTHER",
                    "payload": {"drawing_number": drawing.get("drawing_number")},
                    "created_at": store.now_iso(),
                }
            )
    expected = project.get("expected_drawings") or []
    supplied = [item.get("drawing_number") for item in project.get("drawings") or []]
    missing = completeness(expected, supplied).get("missing_drawings") or []
    for row in missing:
        items.append(
            {
                "id": store.new_id(),
                "entity_type": "expected_drawing",
                "entity_id": str(row.get("drawing_number") or ""),
                "queue_status": "UNRESOLVED",
                "reason_code": "MISSING_DRAWING",
                "payload": row,
                "created_at": store.now_iso(),
            }
        )
    for ref in project.get("missing_references") or []:
        items.append(
            {
                "id": store.new_id(),
                "entity_type": "reference",
                "entity_id": ref["id"],
                "queue_status": "UNRESOLVED",
                "reason_code": "MISSING_DRAWING",
                "payload": ref,
                "created_at": store.now_iso(),
            }
        )
    for item in takeoff_items:
        if item["status"] in {"INFERRED", "UNRESOLVED", "UNPRICED"}:
            items.append(
                {
                    "id": store.new_id(),
                    "entity_type": "takeoff",
                    "entity_id": item["id"],
                    "queue_status": "NEEDS_REVIEW" if item["status"] == "INFERRED" else "UNRESOLVED",
                    "reason_code": "LLM_INFERENCE" if item["status"] == "INFERRED" else "UNPRICED",
                    "payload": {"description": item["description"], "status": item["status"]},
                    "created_at": store.now_iso(),
                }
            )
        elif item["status"] in {"VERIFIED", "CALCULATED"}:
            items.append(
                {
                    "id": store.new_id(),
                    "entity_type": "takeoff",
                    "entity_id": item["id"],
                    "queue_status": "AUTO_ACCEPTED",
                    "reason_code": "OTHER",
                    "payload": {"description": item["description"], "status": item["status"]},
                    "created_at": store.now_iso(),
                }
            )
    return items


def build_estimate(project_id: str) -> dict[str, Any]:
    project = store.get_project(project_id)
    if not project:
        raise KeyError(project_id)
    book = pricebook()
    lines: list[dict[str, Any]] = []
    priced_count = 0
    considered = 0
    expected = 0.0
    range_low = 0.0
    range_high = 0.0
    status_counts: dict[str, int] = {}
    for item in project.get("takeoff") or []:
        status_counts[item["status"]] = status_counts.get(item["status"], 0) + 1
        sku = item.get("sku")
        quantity = item.get("quantity")
        rate = PRICE.get_rate(sku, float(quantity or 0), {}) if sku else None
        considered += 1
        if item["status"] == "UNRESOLVED":
            lines.append(_quote_line(item, None, "UNRESOLVED", 0.0))
            continue
        if rate is None or quantity is None:
            lines.append(_quote_line(item, None, "UNPRICED", 0.0))
            continue
        amount = round(float(quantity) * float(rate["unit_price"]), 2)
        uncertainty = UNCERTAINTY_BY_STATUS.get(item["status"])
        if uncertainty is None:
            lines.append(_quote_line(item, rate, "UNPRICED", 0.0))
            continue
        priced_count += 1
        expected += amount
        range_low += amount * (1 - uncertainty)
        range_high += amount * (1 + uncertainty)
        lines.append(_quote_line(item, rate, item["status"], amount))
    v2_scopes = {"05", "07", "08"}
    present_scopes = {item.get("scope_code") for item in project.get("takeoff") or []}
    scope_completeness = len(v2_scopes & present_scopes) / len(v2_scopes) if v2_scopes else 0.0
    pricing_completeness = (priced_count / considered) if considered else 0.0
    if priced_count == 0:
        reliability = "LOW"
    elif pricing_completeness >= 0.8 and scope_completeness >= 0.5:
        reliability = "HIGH"
    elif pricing_completeness >= 0.4:
        reliability = "MEDIUM"
    else:
        reliability = "LOW"
    not_included = [line for line in lines if line["status"] in {"UNPRICED", "UNRESOLVED"}]
    payload = {
        "pricebook_version": book.get("version"),
        "expected_total": round(expected, 2),
        "range_low": round(range_low, 2),
        "range_high": round(range_high, 2),
        "scope_completeness": round(scope_completeness, 4),
        "pricing_completeness": round(pricing_completeness, 4),
        "reliability": reliability,
        "status_counts": status_counts,
        "not_included": not_included,
        "scope_taxonomy": [{"code": code, "name": name} for code, name in SCOPE_TAXONOMY],
        "v2_takeoff_scope": ["Floor Area", "Structural Beam", "Roof", "Windows & Doors"],
        "note": "未计价与未解决项不进入确定总价。金额只来自价表，不采用模型费率。",
    }
    store.save_estimate(project_id, payload, lines)
    return store.get_project(project_id) or {}


def _quote_line(item: dict[str, Any], rate: dict[str, Any] | None, status: str, amount: float) -> dict[str, Any]:
    return {
        "id": store.new_id(),
        "takeoff_id": item["id"],
        "scope_code": item["scope_code"],
        "description": item["description"],
        "quantity": item.get("quantity"),
        "unit": item["unit"],
        "rate_id": ((rate or {}).get("item") or {}).get("id") or (rate or {}).get("sku") or item.get("sku"),
        "amount_incl_gst": amount,
        "status": status,
        "payload": {
            "source_name": (rate or {}).get("source"),
            "source_url": (rate or {}).get("source_url"),
            "retrieved_at": (rate or {}).get("as_of"),
            "unit_price": (rate or {}).get("unit_price"),
            "supplier_sku": (rate or {}).get("sku"),
            "formula": item.get("calculation_formula"),
            "inputs": item.get("calculation_inputs"),
        },
    }


def apply_review_action(
    project_id: str,
    review_id: str,
    action: str,
    *,
    field_name: str | None = None,
    corrected_value: Any = None,
    reason_code: str = "OTHER",
    comment: str | None = None,
) -> dict[str, Any]:
    item = store.get_review_item(review_id)
    if not item or item.project_id != project_id:
        raise KeyError(review_id)
    original: Any = None
    if action == "accept":
        store.update_review_status(review_id, "AUTO_ACCEPTED")
        original = item.queue_status
        store.add_correction(
            {
                "project_id": project_id,
                "entity_type": item.entity_type,
                "entity_id": item.entity_id,
                "field_name": "queue_status",
                "original_value": original,
                "corrected_value": "AUTO_ACCEPTED",
                "reason_code": reason_code,
                "comment": comment,
            }
        )
    elif action == "reject":
        store.update_review_status(review_id, "UNRESOLVED")
        store.add_correction(
            {
                "project_id": project_id,
                "entity_type": item.entity_type,
                "entity_id": item.entity_id,
                "field_name": "queue_status",
                "original_value": item.queue_status,
                "corrected_value": "UNRESOLVED",
                "reason_code": reason_code or "OTHER",
                "comment": comment,
            }
        )
    elif action == "unresolved":
        store.update_review_status(review_id, "UNRESOLVED")
        store.add_correction(
            {
                "project_id": project_id,
                "entity_type": item.entity_type,
                "entity_id": item.entity_id,
                "field_name": "queue_status",
                "original_value": item.queue_status,
                "corrected_value": "UNRESOLVED",
                "reason_code": reason_code,
                "comment": comment,
            }
        )
    elif action == "correct":
        if not field_name:
            raise ValueError("修正必须指定字段")
        original = _current_field(item.entity_type, item.entity_id, field_name)
        _apply_field(item.entity_type, item.entity_id, field_name, corrected_value)
        store.update_review_status(review_id, "AUTO_ACCEPTED")
        store.add_correction(
            {
                "project_id": project_id,
                "entity_type": item.entity_type,
                "entity_id": item.entity_id,
                "field_name": field_name,
                "original_value": original,
                "corrected_value": corrected_value,
                "reason_code": reason_code,
                "comment": comment,
            }
        )
    else:
        raise ValueError("未知审核动作")
    return store.get_project(project_id) or {}


def _current_field(entity_type: str, entity_id: str, field_name: str) -> Any:
    if entity_type == "takeoff":
        row = store.get_takeoff_item(entity_id)
        return getattr(row, field_name, None) if row else None
    if entity_type == "drawing":
        row = store.get_drawing(entity_id)
        return getattr(row, field_name, None) if row else None
    if entity_type == "evidence":
        row = store.get_evidence(entity_id)
        return getattr(row, field_name, None) if row else None
    return None


def _apply_field(entity_type: str, entity_id: str, field_name: str, value: Any) -> None:
    if entity_type == "takeoff":
        store.update_takeoff_fields(entity_id, {field_name: value})
        return
    if entity_type == "drawing":
        store.update_drawing_field(entity_id, field_name, value)
        return
    if entity_type == "evidence" and field_name == "bbox" and isinstance(value, dict):
        store.update_evidence_bbox(
            entity_id,
            float(value["x1"]),
            float(value["y1"]),
            float(value["x2"]),
            float(value["y2"]),
        )
