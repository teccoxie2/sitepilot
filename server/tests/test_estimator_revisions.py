from fastapi.testclient import TestClient

from app.estimator.completeness import completeness
from app.estimator.extract import parse_drawing_index
from app.estimator.pipeline import ingest_document, process_project
from app.main import app
from tests.test_estimator import _isolated_db, _pdf

INDEX_TWO_REVISIONS = """
ARCHITECTURAL COVER
Drawing Index
A101 Ground Floor Plan Rev A
A101 Ground Floor Plan Rev C
A102 First Floor Plan Rev B
Drawing No: A100
Rev C
"""

OLD_FLOOR = """
ARCHITECTURAL FLOOR PLAN
Drawing No: A101
Rev A
Floor Plan
Gross floor area: 100 m2
"""

NEW_FLOOR = """
ARCHITECTURAL FLOOR PLAN
Drawing No: A101
Rev C
Floor Plan
Gross floor area: 120 m2
"""


def _pilot(owner: str) -> TestClient:
    return TestClient(app, headers={"X-Pilot-Id": owner})


def test_index_keeps_same_number_different_revision():
    rows = parse_drawing_index(INDEX_TWO_REVISIONS)
    pairs = [(item["drawing_number"], item["revision"]) for item in rows]
    assert pairs == [("A101", "A"), ("A101", "C"), ("A102", "B")]


def test_completeness_older_expected_revision_is_satisfied_by_newer_supplied():
    expected = [
        {"drawing_number": "A101", "revision": "A"},
        {"drawing_number": "A101", "revision": "C"},
        {"drawing_number": "A102", "revision": "B"},
    ]
    supplied = [{"drawing_number": "A101", "revision": "C"}]
    result = completeness(expected, supplied)
    missing = {(item["drawing_number"], item.get("revision")) for item in result["missing_drawings"]}
    assert ("A101", "A") not in missing
    assert ("A101", "C") not in missing
    assert missing == {("A102", "B")}


def test_current_revision_takeoff_does_not_sum_old_page(tmp_path, monkeypatch):
    _isolated_db(tmp_path, monkeypatch)
    client = _pilot("pilot-rev-a")
    created = client.post("/estimator/projects", json={"name": "修订夹具"}).json()
    project_id = created["id"]
    path = tmp_path / "revisions.pdf"
    _pdf(path, [INDEX_TWO_REVISIONS, OLD_FLOOR, NEW_FLOOR])
    ingest_document(project_id, path, "revisions.pdf", "ARCHITECTURAL")
    project = process_project(project_id)
    expected_pairs = {
        (item["drawing_number"], item.get("revision")) for item in project["expected_drawings"]
    }
    assert ("A101", "A") in expected_pairs
    assert ("A101", "C") in expected_pairs
    by_page = {item["page_number"]: item for item in project["drawings"]}
    assert by_page[2]["drawing_number"] == "A101"
    assert by_page[2]["revision"] == "A"
    assert by_page[2]["issue_status"] == "SUPERSEDED"
    assert by_page[3]["drawing_number"] == "A101"
    assert by_page[3]["revision"] == "C"
    assert by_page[3]["issue_status"] == "CURRENT"
    floor_items = [
        item
        for item in project["takeoff"]
        if (item.get("calculation_inputs") or {}).get("evidence_kind") == "floor_area"
    ]
    quantities = [item["quantity"] for item in floor_items]
    assert 120.0 in quantities
    assert 100.0 not in quantities
    assert sum(quantities) == 120.0
