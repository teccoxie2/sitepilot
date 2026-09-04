from pathlib import Path

import fitz
from fastapi.testclient import TestClient

from app.estimator.completeness import completeness
from app.estimator.evals import run_574_eval
from app.estimator.extract import classify_page, extract_title_block, parse_drawing_index, parse_floor_areas
from app.estimator.pdf import preflight_pdf
from app.estimator.pipeline import ingest_document, process_project
from app.estimator.takeoff import apply_review_action, build_estimate
from app.main import app
from app.store import reset_engine

client = TestClient(app)

ARCH_TEXT = """
ARCHITECTURAL COVER SHEET
Drawing No: A101
Rev C
Scale 1:100
Floor Plan
Gross floor area: 186.4 m2
Ground floor area: 98.2 m2
Roof area: 112 m2
"""

STRUCT_COVER = """
STRUCTURAL COVER
Drawing Index
S001 Cover Sheet
S011a Foundation Plan
S055 Typical Detail
Drawing No: S001
Rev A
Foundation Plan notes
"""

STRUCT_FOUNDATION = """
STRUCTURAL FOUNDATION PLAN
Drawing No: S011a
Rev A
250UB Qty 4
See 23/S056
See 22/S055
"""


def _pdf(path: Path, pages: list[str]) -> None:
    document = fitz.open()
    for text in pages:
        page = document.new_page()
        page.insert_text((72, 72), text, fontsize=11)
    document.save(path)
    document.close()


def _image_pdf(path: Path, page_count: int) -> None:
    document = fitz.open()
    for _ in range(page_count):
        page = document.new_page()
        page.draw_rect(page.rect, color=(0.7, 0.7, 0.7), fill=(0.92, 0.92, 0.92))
    document.save(path)
    document.close()


def _isolated_db(tmp_path, monkeypatch):
    monkeypatch.setenv("DATABASE_URL", f"sqlite:///{tmp_path / 'estimator.sqlite'}")
    reset_engine()


def test_preflight_detects_image_only(tmp_path):
    path = tmp_path / "scan.pdf"
    _image_pdf(path, 3)
    result = preflight_pdf(path)
    assert result["page_count"] == 3
    assert result["has_text_layer"] is False
    assert result["processing_mode"] == "vision_ocr"
    assert result["file_hash"]


def test_preflight_detects_native_text(tmp_path):
    path = tmp_path / "notes.pdf"
    _pdf(path, [ARCH_TEXT])
    result = preflight_pdf(path)
    assert result["page_count"] == 1
    assert result["has_text_layer"] is True
    assert result["processing_mode"] == "native_text"


def test_classify_and_title_block_from_text():
    classified = classify_page(ARCH_TEXT, filename="architectural.pdf", kind="ARCHITECTURAL")
    assert classified["discipline"] == "ARCHITECTURAL"
    assert classified["page_type"] in {"COVER", "FLOOR_PLAN"}
    title = extract_title_block(ARCH_TEXT)
    assert title["drawing_number"] == "A101"
    assert title["revision"] == "C"


def test_drawing_index_and_completeness():
    rows = parse_drawing_index(STRUCT_COVER)
    assert [item["drawing_number"] for item in rows] == ["S001", "S011a", "S055"]
    result = completeness(rows, ["S001", "S011a"])
    assert result["expected_count"] == 3
    assert result["supplied_expected_count"] == 2
    missing = {item["drawing_number"] for item in result["missing_drawings"]}
    assert missing == {"S055"}


def test_floor_area_parser_uses_source_sentence():
    items = parse_floor_areas(ARCH_TEXT)
    assert items[0]["quantity"] == 186.4
    assert "186.4" in items[0]["evidence"]


def test_process_manifest_takeoff_estimate_and_review(tmp_path, monkeypatch):
    _isolated_db(tmp_path, monkeypatch)
    created = client.post("/estimator/projects", json={"name": "文字层夹具", "address": None}).json()
    project_id = created["id"]
    arch = tmp_path / "architectural.pdf"
    struct = tmp_path / "structural.pdf"
    _pdf(arch, [ARCH_TEXT])
    _pdf(struct, [STRUCT_COVER, STRUCT_FOUNDATION])
    ingest_document(project_id, arch, "architectural.pdf", "ARCHITECTURAL")
    ingest_document(project_id, struct, "structural.pdf", "STRUCTURAL")
    project = process_project(project_id)
    assert project["status"] == "READY"
    arch_doc = next(item for item in project["documents"] if item["filename"] == "architectural.pdf")
    struct_doc = next(item for item in project["documents"] if item["filename"] == "structural.pdf")
    assert arch_doc["page_count"] == 1
    assert arch_doc["has_text_layer"] is True
    assert struct_doc["page_count"] == 2
    numbers = {item["drawing_number"] for item in project["drawings"] if item["drawing_number"]}
    assert "A101" in numbers
    assert "S001" in numbers
    assert "S011a" in numbers
    expected = {item["drawing_number"] for item in project["expected_drawings"]}
    assert expected == {"S001", "S011a", "S055"}
    missing_expected = {"S055"}
    supplied = {item["drawing_number"] for item in project["drawings"] if item["drawing_number"]}
    assert missing_expected - supplied == {"S055"}
    assert any(not item["found"] and item["target_number"] == "S056" for item in project["references"])
    takeoff_desc = [item["description"] for item in project["takeoff"]]
    assert any("建筑面积" in item for item in takeoff_desc)
    assert any("屋面波纹钢板延米" in item for item in takeoff_desc)
    calculated = next(item for item in project["takeoff"] if item["status"] == "CALCULATED" and item["sku"] == "roofing_corrugate_colour_845")
    assert calculated["calculation_formula"] == "roof_m2 / cover_width_m"
    assert calculated["calculation_inputs"]["roof_m2"] == 112
    assert any("250UB" in item["description"] for item in project["takeoff"])
    estimate = build_estimate(project_id)
    quote = estimate["estimate"]
    assert quote["document_set_version"] >= 1
    assert quote["pricebook_version"]
    beam_line = next(item for item in quote["quote_lines"] if "250UB" in item["description"])
    assert beam_line["status"] == "UNPRICED"
    assert beam_line["amount_incl_gst"] == 0
    roof_line = next(item for item in quote["quote_lines"] if item["rate_id"] == "roofing_corrugate_colour_845" and item["status"] == "CALCULATED")
    assert roof_line["amount_incl_gst"] > 0
    assert roof_line["payload"]["source_url"]
    assert quote["expected_total"] == roof_line["amount_incl_gst"] or quote["expected_total"] >= roof_line["amount_incl_gst"]
    assert any(item["reason_code"] == "MISSING_DRAWING" for item in estimate["review"])


def test_image_only_does_not_invent_sheet_numbers(tmp_path, monkeypatch):
    _isolated_db(tmp_path, monkeypatch)
    created = client.post("/estimator/projects", json={"name": "扫描夹具"}).json()
    scan = tmp_path / "architectural.pdf"
    _image_pdf(scan, 2)
    ingest_document(created["id"], scan, "architectural.pdf", "ARCHITECTURAL")
    project = process_project(created["id"])
    assert project["documents"][0]["has_text_layer"] is False
    assert project["documents"][0]["processing_mode"] == "vision_ocr"
    assert all(item["drawing_number"] is None for item in project["drawings"])
    assert all(item["page_type"] == "UNKNOWN" for item in project["drawings"])
    assert project["takeoff"] == []


def test_correction_is_append_only(tmp_path, monkeypatch):
    _isolated_db(tmp_path, monkeypatch)
    created = client.post("/estimator/projects", json={"name": "审核夹具"}).json()
    path = tmp_path / "architectural.pdf"
    _pdf(path, [ARCH_TEXT])
    ingest_document(created["id"], path, "architectural.pdf", "ARCHITECTURAL")
    project = process_project(created["id"])
    review = next(item for item in project["review"] if item["queue_status"] == "NEEDS_REVIEW" or item["entity_type"] == "drawing")
    updated = apply_review_action(
        created["id"],
        review["id"],
        "correct",
        field_name="drawing_number",
        corrected_value="A101-MANUAL",
        reason_code="OCR_ERROR",
        comment="人工从图框改正",
    )
    assert updated["correction_events"]
    event = updated["correction_events"][0]
    assert "A101-MANUAL" in event["corrected_value"]
    assert event["original_value"]
    second = apply_review_action(created["id"], review["id"], "accept", reason_code="OTHER")
    assert len(second["correction_events"]) >= 2


def test_manual_bbox_does_not_overwrite_original(tmp_path, monkeypatch):
    _isolated_db(tmp_path, monkeypatch)
    created = client.post("/estimator/projects", json={"name": "证据夹具"}).json()
    path = tmp_path / "architectural.pdf"
    _pdf(path, [ARCH_TEXT])
    ingest_document(created["id"], path, "architectural.pdf", "ARCHITECTURAL")
    project = process_project(created["id"])
    evidence = project["evidence"][0]
    response = client.post(
        f"/estimator/projects/{created['id']}/evidence/{evidence['id']}/correct",
        json={"x1": 0.1, "y1": 0.1, "x2": 0.4, "y2": 0.2, "reason_code": "OTHER"},
    )
    assert response.status_code == 200
    body = response.json()
    originals = [item for item in body["evidence"] if item["id"] == evidence["id"]]
    manuals = [item for item in body["evidence"] if item["extraction_method"] == "MANUAL"]
    assert originals[0]["bbox"] == evidence["bbox"]
    assert manuals
    assert body["correction_events"]


def test_574_eval_reports_missing_pdfs():
    result = run_574_eval()
    assert result["documents_status"] == "missing"
    assert result["passed"] is False
    assert result["unsupported_ai_generated_rate"] == 0
    assert any(item["id"] == "documents_present" and item["status"] == "missing" for item in result["assertions"])


def test_estimator_ready_endpoint():
    response = client.get("/estimator/ready")
    assert response.status_code == 200
    assert "note" in response.json()
    assert "vision" in response.json()
