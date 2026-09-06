from __future__ import annotations

from pathlib import Path
from typing import Any

from ..blobs import original_key, put_bytes, materialize
from . import store
from .enums import NATIVE_TEXT_MIN_CHARS, RENDER_DPI
from .extract import (
    classify_page,
    extract_title_block,
    normalize_sheet,
    parse_beams,
    parse_drawing_index,
    parse_floor_areas,
    parse_footprints,
    parse_opening_schedule,
    parse_references,
    parse_roof_areas,
)
from .pdf import page_native_text, preflight_pdf, render_page_png, search_text_bbox, sha256_file
from .vision import vision_available


def infer_kind(filename: str, declared: str | None) -> str:
    if declared:
        upper = declared.strip().upper()
        if upper in {"ARCHITECTURAL", "STRUCTURAL", "CIVIL", "PLUMBING", "ELECTRICAL", "MECHANICAL", "LANDSCAPE"}:
            return upper
    lower = filename.lower()
    if "struct" in lower:
        return "STRUCTURAL"
    if "arch" in lower:
        return "ARCHITECTURAL"
    return "UNKNOWN"


def ingest_document(project_id: str, source: Path, filename: str, kind: str | None = None) -> str:
    dest_dir = store.project_dir(project_id) / "original"
    dest_dir.mkdir(parents=True, exist_ok=True)
    dest = dest_dir / filename
    if dest.exists():
        dest = dest_dir / f"{source.stem}-{store.new_id()[:8]}{source.suffix}"
    pdf_bytes = source.read_bytes()
    dest.write_bytes(pdf_bytes)
    preflight = preflight_pdf(dest)
    document_id = store.add_document(
        project_id,
        filename=filename,
        kind=infer_kind(filename, kind),
        sha256=preflight["file_hash"] or sha256_file(dest),
        stored_path=str(dest),
        page_count=int(preflight["page_count"]),
        has_text_layer=bool(preflight["has_text_layer"]),
        processing_mode=str(preflight["processing_mode"]),
        payload=preflight,
    )
    blob_key = original_key(project_id, document_id)
    put_bytes(blob_key, pdf_bytes, "application/pdf")
    store.patch_document_payload(document_id, {"blob_key": blob_key})
    store.set_project_status(project_id, "PREFLIGHT")
    return document_id


def ensure_document_pdf(document: Any) -> Path:
    stored = Path(getattr(document, "stored_path", "") or "")
    payload = getattr(document, "payload", None) or {}
    blob_key = payload.get("blob_key") if isinstance(payload, dict) else None
    if stored.is_file() and stored.stat().st_size > 0:
        return stored
    if blob_key:
        return materialize(str(blob_key), stored)
    raise FileNotFoundError("原件不在本机且共享库没有副本，请重新上传图纸。")


def process_project(project_id: str, note=lambda _m: None) -> dict[str, Any]:
    project = store.get_project(project_id)
    if not project:
        raise KeyError(project_id)
    store.set_project_status(project_id, "RENDERING")
    try:
        for document in project["documents"]:
            note(f"正在处理 {document['filename']}…")
            process_document(project_id, document["id"], note=note)
        note("正在生成工程量…")
        from .takeoff import build_takeoff_and_review

        build_takeoff_and_review(project_id)
        store.set_project_status(project_id, "READY")
    except FileNotFoundError as exc:
        store.set_project_status(project_id, "FAILED")
        raise RuntimeError(str(exc) or "原件不在共享库中，请重新上传图纸。") from exc
    return store.get_project(project_id) or {}


def process_document(project_id: str, document_id: str, note=lambda _m: None) -> None:
    row = store.get_document(document_id)
    if not row or row.project_id != project_id:
        raise KeyError(document_id)
    path = ensure_document_pdf(row)
    store.set_document_status(document_id, "RENDERING")
    drawings: list[dict[str, Any]] = []
    evidence_rows: list[dict[str, Any]] = []
    expected_rows: list[dict[str, Any]] = []
    render_root = store.project_dir(project_id) / "rendered" / document_id
    page_count = int(row.page_count or 0)
    filename = row.filename
    kind = row.kind
    for page_number in range(1, page_count + 1):
        note(f"{filename} 第 {page_number}/{page_count} 页")
        png_path = render_root / f"page-{page_number:03d}.png"
        render_meta = render_page_png(path, page_number, png_path, dpi=RENDER_DPI)
        text = page_native_text(path, page_number)
        classified = classify_page(text, filename=filename, kind=kind)
        title = extract_title_block(text) if text.strip() else {}
        drawing_id = store.new_id()
        has_text = len(text.strip()) >= NATIVE_TEXT_MIN_CHARS
        drawing_number = title.get("drawing_number") if has_text else None
        # Filename/kind may hint discipline; never invent a sheet number without text or vision.
        if not has_text:
            classified = {
                **classified,
                "page_type": classified["page_type"] if classified["page_type"] != "UNKNOWN" else "UNKNOWN",
                "confidence": min(float(classified.get("confidence") or 0), 0.5),
            }
            if not vision_available():
                classified["page_type"] = "UNKNOWN"
                classified["confidence"] = min(classified["confidence"], 0.45)
        drawing = {
            "id": drawing_id,
            "page_number": page_number,
            "discipline": classified.get("discipline") or "UNKNOWN",
            "page_type": classified.get("page_type") or "UNKNOWN",
            "drawing_number": drawing_number,
            "drawing_title": title.get("drawing_title") if has_text else None,
            "revision": title.get("revision") if has_text else None,
            "scale": title.get("scale") if has_text else None,
            "rotation_deg": render_meta.get("rotation_deg") or 0,
            "confidence": float(max(classified.get("confidence") or 0, title.get("confidence") or 0)),
            "rendered_path": str(png_path),
            "native_text": text,
            "payload": {
                "render": render_meta,
                "classification_source": classified.get("source"),
                "has_native_text": has_text,
                "vision_available": vision_available(),
                "page_type_candidates": classified.get("page_type_candidates") or [],
                "discipline_candidates": classified.get("discipline_candidates") or [],
            },
        }
        drawings.append(drawing)
        if has_text:
            evidence_rows.extend(
                _measurement_evidence(project_id, document_id, drawing_id, page_number, path, text)
            )
            if title.get("drawing_number"):
                bbox = search_text_bbox(path, page_number, str(title["drawing_number"]))
                evidence_rows.append(
                    {
                        "project_id": project_id,
                        "document_id": document_id,
                        "drawing_id": drawing_id,
                        "page_number": page_number,
                        "evidence_type": "TEXT",
                        "raw_text": str(title["drawing_number"]),
                        "structured_value": {"field": "drawing_number", "value": title["drawing_number"]},
                        "x1": bbox[0],
                        "y1": bbox[1],
                        "x2": bbox[2],
                        "y2": bbox[3],
                        "extraction_method": "REGEX",
                        "confidence": float(title.get("confidence") or 0),
                    }
                )
            expected_rows.extend(parse_drawing_index(text))

    store.set_document_status(document_id, "BUILDING_MANIFEST")
    store.replace_document_pages(document_id, drawings)
    store.replace_expected(project_id, document_id, expected_rows)
    supplied = [item.get("drawing_number") for item in drawings]
    supplied_keys = {normalize_sheet(item) for item in supplied if item}
    for drawing in drawings:
        refs = parse_references(drawing.get("native_text") or "")
        store.replace_references(
            project_id,
            drawing["id"],
            [
                {
                    "target_number": item["target_number"],
                    "found": normalize_sheet(item["target_number"]) in supplied_keys,
                    "raw_text": item["raw_text"],
                }
                for item in refs
            ],
        )
    for row in evidence_rows:
        store.add_evidence(row)
    store.set_document_status(document_id, "READY")


def _measurement_evidence(
    project_id: str,
    document_id: str,
    drawing_id: str,
    page_number: int,
    path: Path,
    text: str,
) -> list[dict[str, Any]]:
    rows: list[dict[str, Any]] = []
    parsed = (
        parse_floor_areas(text)
        + parse_roof_areas(text)
        + parse_footprints(text)
        + parse_beams(text)
        + parse_opening_schedule(text)
    )
    for item in parsed:
        bbox = search_text_bbox(path, page_number, str(item.get("evidence") or ""))
        rows.append(
            {
                "project_id": project_id,
                "document_id": document_id,
                "drawing_id": drawing_id,
                "page_number": page_number,
                "evidence_type": "TEXT",
                "raw_text": item.get("evidence") or "",
                "structured_value": item,
                "x1": bbox[0],
                "y1": bbox[1],
                "x2": bbox[2],
                "y2": bbox[3],
                "extraction_method": "REGEX",
                "confidence": 0.9,
            }
        )
    return rows


def manifest_for(project: dict[str, Any]) -> dict[str, Any]:
    expected = project.get("expected_drawings") or []
    supplied = [item.get("drawing_number") for item in project.get("drawings") or []]
    return {
        "documents": project.get("documents") or [],
        "drawings": project.get("drawings") or [],
        "completeness": completeness(expected, supplied),
        "missing_references": project.get("missing_references") or [],
    }
