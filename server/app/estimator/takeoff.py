from __future__ import annotations

from typing import Any

from ..data_loader import pricebook
from ..price_provider import get_price_provider
from . import store
from .completeness import completeness
from .enums import ROOF_COVER_WIDTH_M, SCOPE_TAXONOMY, UNCERTAINTY_BY_STATUS
from .extract import ISSUE_SUPERSEDED, is_opening_schedule_page

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

EDITABLE_TAKEOFF_FIELDS = {"quantity", "unit", "scope_code"}
ALLOWED_SCOPE_CODES = {code for code, _name in SCOPE_TAXONOMY}
UNIT_ALIASES = {
    "ea": "each",
    "each": "each",
    "nr": "each",
    "item": "each",
    "m2": "m2",
    "m²": "m2",
    "sqm": "m2",
    "lm": "lm",
    "m": "lm",
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
    store.apply_revision_currency(project_id)
    project = store.get_project(project_id)
    if not project:
        raise KeyError(project_id)
    superseded = {
        str(drawing["id"])
        for drawing in project.get("drawings") or []
        if drawing.get("issue_status") == ISSUE_SUPERSEDED
    }
    takeoff_items: list[dict[str, Any]] = []
    for evidence in project.get("evidence") or []:
        if evidence.get("extraction_method") == "MANUAL":
            continue
        if str(evidence.get("drawing_id") or "") in superseded:
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
    manuals = store.list_manual_takeoff(project_id)
    combined = takeoff_items + manuals
    review_items = _build_review(project, combined)
    store.replace_review(project_id, review_items)
    return {"takeoff": combined, "review": review_items}


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
        if drawing.get("issue_status") == ISSUE_SUPERSEDED:
            continue
        text = drawing.get("native_text") or ""
        payload = drawing.get("payload") or {}
        if payload.get("classification_source") == "vision":
            items.append(
                {
                    "id": store.new_id(),
                    "entity_type": "drawing",
                    "entity_id": drawing["id"],
                    "queue_status": "NEEDS_REVIEW",
                    "reason_code": "LLM_INFERENCE",
                    "payload": {
                        "page_number": drawing.get("page_number"),
                        "drawing_number": drawing.get("drawing_number"),
                        "note": "扫描页图号来自 Vision，未与文字层核对，不能标已核实。",
                    },
                    "created_at": store.now_iso(),
                }
            )
            continue
        candidates = payload.get("page_type_candidates") or []
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
    missing = completeness(expected, project.get("drawings") or []).get("missing_drawings") or []
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
        elif item["status"] in {"VERIFIED", "CALCULATED", "ALLOWANCE"}:
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
            reason = "NO_RATE" if rate is None else "NO_QUANTITY"
            lines.append(_quote_line(item, rate, "UNPRICED", 0.0, unpriced_reason=reason))
            continue
        if not units_compatible(item.get("unit"), rate.get("unit")):
            lines.append(_quote_line(item, rate, "UNPRICED", 0.0, unpriced_reason="UNIT_MISMATCH"))
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
        "note": "未计价与未解决项不进入确定总价。金额只来自价表，不采用模型费率。缺价与单位不符不会伪装成 0 成交。",
    }
    store.save_estimate(project_id, payload, lines)
    return store.get_project(project_id) or {}


def units_compatible(takeoff_unit: str | None, price_unit: str | None) -> bool:
    takeoff_norm = _normalize_unit(takeoff_unit)
    price_norm = _normalize_unit(price_unit)
    if not takeoff_norm or not price_norm:
        return True
    return takeoff_norm == price_norm


def _normalize_unit(unit: str | None) -> str:
    raw = str(unit or "").strip().lower().replace(" ", "")
    if not raw:
        return ""
    return UNIT_ALIASES.get(raw, raw)


def _quote_line(
    item: dict[str, Any],
    rate: dict[str, Any] | None,
    status: str,
    amount: float,
    unpriced_reason: str | None = None,
) -> dict[str, Any]:
    book_item = (rate or {}).get("item") or {}
    return {
        "id": store.new_id(),
        "takeoff_id": item["id"],
        "scope_code": item["scope_code"],
        "description": item["description"],
        "quantity": item.get("quantity"),
        "unit": item["unit"],
        "rate_id": book_item.get("id") or (rate or {}).get("sku") or item.get("sku"),
        "amount_incl_gst": amount,
        "status": status,
        "payload": {
            "source_name": (rate or {}).get("source"),
            "source_url": (rate or {}).get("source_url"),
            "retrieved_at": (rate or {}).get("as_of"),
            "unit_price": (rate or {}).get("unit_price"),
            "supplier_sku": (rate or {}).get("sku"),
            "gst_included": (rate or {}).get("gst_included"),
            "pack": book_item.get("pack"),
            "price_unit": (rate or {}).get("unit"),
            "takeoff_unit": item.get("unit"),
            "pricebook_version": (rate or {}).get("version"),
            "formula": item.get("calculation_formula"),
            "inputs": item.get("calculation_inputs"),
            "unpriced_reason": unpriced_reason,
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
        if item.entity_type == "takeoff":
            correct_takeoff_item(
                project_id,
                item.entity_id,
                fields={field_name: corrected_value},
                reason_code=reason_code,
                comment=comment,
            )
        else:
            _apply_field(item.entity_type, item.entity_id, field_name, corrected_value)
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
        store.update_review_status(review_id, "AUTO_ACCEPTED")
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


def _sku_in_pricebook(sku: str) -> bool:
    book = pricebook()
    for item in book.get("items") or []:
        if item.get("id") == sku or item.get("sku") == sku:
            return True
    return False


def add_manual_takeoff_item(
    project_id: str,
    *,
    description: str,
    quantity: float,
    unit: str,
    scope_code: str,
    reason_code: str,
    comment: str | None = None,
    sku: str | None = None,
) -> dict[str, Any]:
    if not str(reason_code or "").strip():
        raise ValueError("补录必须填写理由")
    desc = str(description or "").strip()
    if not desc:
        raise ValueError("补录必须填写科目说明")
    if len(desc) > 200:
        raise ValueError("科目说明过长")
    changes = _validated_takeoff_fields({"quantity": quantity, "unit": unit, "scope_code": scope_code})
    qty = changes.get("quantity")
    if qty is None:
        raise ValueError("补录必须填写数量")
    if float(qty) < 0:
        raise ValueError("数量不能为负")
    sku_clean = str(sku or "").strip() or None
    if sku_clean and not _sku_in_pricebook(sku_clean):
        raise ValueError("SKU 不在价表中，不能手写单价")
    item_id = store.new_id()
    store.add_takeoff_item(
        project_id,
        {
            "id": item_id,
            "scope_code": changes["scope_code"],
            "description": desc,
            "quantity": float(qty),
            "unit": changes["unit"],
            "status": "ALLOWANCE",
            "confidence": 1.0,
            "source_method": "MANUAL",
            "calculation_formula": None,
            "calculation_inputs": {"source": "manual_missed_item"},
            "evidence_ids": [],
            "sku": sku_clean,
            "created_at": store.now_iso(),
        },
    )
    store.add_correction(
        {
            "project_id": project_id,
            "entity_type": "takeoff",
            "entity_id": item_id,
            "field_name": "create",
            "original_value": None,
            "corrected_value": {
                "description": desc,
                "quantity": float(qty),
                "unit": changes["unit"],
                "scope_code": changes["scope_code"],
                "sku": sku_clean,
            },
            "reason_code": reason_code,
            "comment": comment,
        }
    )
    project = store.get_project(project_id) or {}
    if project.get("estimate") or (project.get("status") == "READY" and project.get("documents")):
        build_estimate(project_id)
    return store.get_project(project_id) or {}


def correct_takeoff_item(
    project_id: str,
    item_id: str,
    *,
    fields: dict[str, Any],
    reason_code: str,
    comment: str | None = None,
) -> dict[str, Any]:
    if not str(reason_code or "").strip():
        raise ValueError("修正必须填写理由")
    row = store.get_takeoff_item(item_id)
    if not row or row.project_id != project_id:
        raise KeyError(item_id)
    changes = _validated_takeoff_fields(fields)
    if not changes:
        raise ValueError("没有可保存的修正字段")
    for field_name, value in changes.items():
        original = getattr(row, field_name, None)
        store.update_takeoff_fields(item_id, {field_name: value})
        store.add_correction(
            {
                "project_id": project_id,
                "entity_type": "takeoff",
                "entity_id": item_id,
                "field_name": field_name,
                "original_value": original,
                "corrected_value": value,
                "reason_code": reason_code,
                "comment": comment,
            }
        )
    refreshed = store.get_takeoff_item(item_id)
    if refreshed:
        refresh_derived_takeoff(project_id, refreshed)
    project = store.get_project(project_id) or {}
    if project.get("status") == "READY" and project.get("documents"):
        build_estimate(project_id)
    return store.get_project(project_id) or {}


def _validated_takeoff_fields(fields: dict[str, Any]) -> dict[str, Any]:
    changes: dict[str, Any] = {}
    for key, value in fields.items():
        if key not in EDITABLE_TAKEOFF_FIELDS:
            raise ValueError("只能修正数量、单位或科目，不能手写金额")
        if key == "quantity":
            if value is None or value == "":
                changes["quantity"] = None
            else:
                changes["quantity"] = float(value)
        elif key == "unit":
            unit = str(value or "").strip()
            if not unit:
                raise ValueError("单位不能为空")
            changes["unit"] = unit
        elif key == "scope_code":
            code = str(value or "").strip()
            if code not in ALLOWED_SCOPE_CODES:
                raise ValueError("科目代码不在分类表中")
            changes["scope_code"] = code
    return changes


def refresh_derived_takeoff(project_id: str, source: Any) -> None:
    inputs = dict(getattr(source, "calculation_inputs", None) or {})
    kind = inputs.get("evidence_kind")
    evidence_ids = set(getattr(source, "evidence_ids", None) or [])
    siblings = store.list_takeoff_items(project_id)
    if kind == "window_unit":
        width = inputs.get("width_mm")
        height = inputs.get("height_mm")
        quantity = getattr(source, "quantity", None)
        if width is None or height is None or quantity is None:
            return
        area = round(float(quantity) * (float(width) / 1000.0) * (float(height) / 1000.0), 4)
        mark = inputs.get("mark")
        for other in siblings:
            if other.id == source.id or other.status != "CALCULATED":
                continue
            other_inputs = dict(other.calculation_inputs or {})
            if other.calculation_formula != "qty * (width_mm/1000) * (height_mm/1000)":
                continue
            same_mark = bool(mark) and other_inputs.get("mark") == mark
            same_evidence = bool(evidence_ids) and set(other.evidence_ids or []) == evidence_ids
            if not (same_mark or same_evidence):
                continue
            other_inputs["qty"] = quantity
            store.update_takeoff_fields(other.id, {"quantity": area, "calculation_inputs": other_inputs})
        return
    if kind == "roof_area" and getattr(source, "quantity", None) is not None:
        roof_m2 = float(source.quantity)
        for other in siblings:
            if other.id == source.id or other.status != "CALCULATED":
                continue
            other_inputs = dict(other.calculation_inputs or {})
            formula = other.calculation_formula
            if formula == "roof_m2 / cover_width_m":
                cover = float(other_inputs.get("cover_width_m") or ROOF_COVER_WIDTH_M)
                other_inputs["roof_m2"] = roof_m2
                store.update_takeoff_fields(
                    other.id,
                    {"quantity": round(roof_m2 / cover, 4), "calculation_inputs": other_inputs},
                )
            elif formula == "roof_m2":
                other_inputs["roof_m2"] = roof_m2
                store.update_takeoff_fields(other.id, {"quantity": roof_m2, "calculation_inputs": other_inputs})


def export_project(project_id: str, estimate_id: str | None = None) -> dict[str, Any]:
    project = store.get_project(project_id)
    if not project:
        raise KeyError(project_id)
    estimate = None
    if estimate_id:
        estimate = store.get_saved_estimate(project_id, estimate_id)
        if not estimate:
            raise KeyError(estimate_id)
    else:
        estimate = project.get("estimate")
    unresolved = [item for item in project.get("review") or [] if item.get("queue_status") == "UNRESOLVED"]
    unpriced = [
        line
        for line in (estimate or {}).get("quote_lines") or []
        if line.get("status") in {"UNPRICED", "UNRESOLVED"}
    ]
    return {
        "project_id": project_id,
        "exported_at": store.now_iso(),
        "name": project.get("name"),
        "status": project.get("status"),
        "document_set_version": project.get("document_set_version"),
        "pricebook_version": (estimate or {}).get("pricebook_version") or project.get("pricebook_version"),
        "estimate": estimate,
        "current_takeoff": project.get("takeoff") or [],
        "unpriced": unpriced,
        "unresolved_review": unresolved,
        "correction_events": project.get("correction_events") or [],
        "note": "导出绑定该报价版本的冻结分项，未按最新价重算。当前工程量单独列出，便于对照修正后的取量。",
    }


def quote_lines_csv(estimate: dict[str, Any]) -> str:
    import csv
    import io

    buffer = io.StringIO()
    writer = csv.writer(buffer)
    writer.writerow(
        [
            "takeoff_id",
            "description",
            "quantity",
            "unit",
            "rate_id",
            "unit_price",
            "amount_incl_gst",
            "status",
            "gst_included",
            "pack",
            "source_url",
            "retrieved_at",
            "unpriced_reason",
        ]
    )
    for line in estimate.get("quote_lines") or []:
        payload = line.get("payload") or {}
        writer.writerow(
            [
                line.get("takeoff_id") or "",
                line.get("description") or "",
                line.get("quantity") if line.get("quantity") is not None else "",
                line.get("unit") or "",
                line.get("rate_id") or "",
                payload.get("unit_price") if payload.get("unit_price") is not None else "",
                line.get("amount_incl_gst"),
                line.get("status") or "",
                payload.get("gst_included"),
                payload.get("pack") or "",
                payload.get("source_url") or "",
                payload.get("retrieved_at") or "",
                payload.get("unpriced_reason") or "",
            ]
        )
    return buffer.getvalue()


def diff_estimates(project_id: str, estimate_id: str, against_id: str) -> dict[str, Any]:
    base = store.get_saved_estimate(project_id, estimate_id)
    other = store.get_saved_estimate(project_id, against_id)
    if not base or not other:
        raise KeyError("报价版本不存在")
    base_map = _line_index(base.get("quote_lines") or [])
    other_map = _line_index(other.get("quote_lines") or [])
    keys = list(dict.fromkeys([*base_map.keys(), *other_map.keys()]))
    lines: list[dict[str, Any]] = []
    for key in keys:
        left = base_map.get(key)
        right = other_map.get(key)
        left_payload = (left or {}).get("payload") or {}
        right_payload = (right or {}).get("payload") or {}
        lines.append(
            {
                "key": key,
                "description": (left or right or {}).get("description"),
                "base_quantity": None if left is None else left.get("quantity"),
                "against_quantity": None if right is None else right.get("quantity"),
                "base_unit_price": left_payload.get("unit_price"),
                "against_unit_price": right_payload.get("unit_price"),
                "base_amount": None if left is None else left.get("amount_incl_gst"),
                "against_amount": None if right is None else right.get("amount_incl_gst"),
                "base_status": None if left is None else left.get("status"),
                "against_status": None if right is None else right.get("status"),
            }
        )
    return {
        "base": {
            "id": base["id"],
            "version": base["version"],
            "expected_total": base["expected_total"],
            "pricebook_version": base.get("pricebook_version"),
        },
        "against": {
            "id": other["id"],
            "version": other["version"],
            "expected_total": other["expected_total"],
            "pricebook_version": other.get("pricebook_version"),
        },
        "lines": lines,
        "note": "比较冻结报价行，不按当前价表重算。",
    }


def _line_index(lines: list[dict[str, Any]]) -> dict[str, dict[str, Any]]:
    indexed: dict[str, dict[str, Any]] = {}
    for line in lines:
        key = str(line.get("takeoff_id") or line.get("description") or line.get("id"))
        indexed[key] = line
    return indexed
