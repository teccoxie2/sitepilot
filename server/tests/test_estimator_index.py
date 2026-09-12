from fastapi.testclient import TestClient

from app.estimator.pipeline import ingest_document, process_project
from app.main import app
from tests.test_estimator import STRUCT_COVER, STRUCT_FOUNDATION, _isolated_db, _pdf


def _pilot(owner: str) -> TestClient:
    return TestClient(app, headers={"X-Pilot-Id": owner})


def test_manual_index_requires_drawing_number(tmp_path, monkeypatch):
    _isolated_db(tmp_path, monkeypatch)
    client = _pilot("pilot-index-a")
    created = client.post("/estimator/projects", json={"name": "目录夹具"}).json()
    project_id = created["id"]
    missing = client.post(
        f"/estimator/projects/{project_id}/expected-drawings",
        json={"drawing_title": "Foundation Plan"},
    )
    assert missing.status_code == 422
    blank = client.post(
        f"/estimator/projects/{project_id}/expected-drawings",
        json={"drawing_number": "   "},
    )
    assert blank.status_code == 400


def test_manual_index_persists_and_is_isolated(tmp_path, monkeypatch):
    _isolated_db(tmp_path, monkeypatch)
    owner_a = _pilot("pilot-index-a")
    owner_b = _pilot("pilot-index-b")
    created = owner_a.post("/estimator/projects", json={"name": "目录夹具"}).json()
    project_id = created["id"]
    added = owner_a.post(
        f"/estimator/projects/{project_id}/expected-drawings",
        json={"drawing_number": "S099", "drawing_title": "Site Setout", "revision": "A"},
    )
    assert added.status_code == 200
    rows = added.json()["expected_drawings"]
    assert len(rows) == 1
    assert rows[0]["drawing_number"] == "S099"
    assert rows[0]["drawing_title"] == "Site Setout"
    assert rows[0]["revision"] == "A"
    assert rows[0]["source"] == "manual"
    reread = owner_a.get(f"/estimator/projects/{project_id}")
    assert reread.status_code == 200
    again = reread.json()["expected_drawings"]
    assert [item["drawing_number"] for item in again] == ["S099"]
    foreign = owner_b.post(
        f"/estimator/projects/{project_id}/expected-drawings",
        json={"drawing_number": "S100", "drawing_title": "Hijack"},
    )
    assert foreign.status_code == 404
    assert owner_b.get(f"/estimator/projects/{project_id}").status_code == 404
    listed_b = owner_b.get("/estimator/projects").json()["projects"]
    assert all(item["id"] != project_id for item in listed_b)


def test_pipeline_does_not_drop_manual_index(tmp_path, monkeypatch):
    _isolated_db(tmp_path, monkeypatch)
    client = _pilot("pilot-index-a")
    created = client.post("/estimator/projects", json={"name": "目录保留"}).json()
    project_id = created["id"]
    client.post(
        f"/estimator/projects/{project_id}/expected-drawings",
        json={"drawing_number": "S099", "drawing_title": "Manual Extra", "revision": "B"},
    )
    path = tmp_path / "structural.pdf"
    _pdf(path, [STRUCT_COVER, STRUCT_FOUNDATION])
    ingest_document(project_id, path, "structural.pdf", "STRUCTURAL")
    project = process_project(project_id)
    numbers = {item["drawing_number"] for item in project["expected_drawings"]}
    assert "S099" in numbers
    assert "S001" in numbers
    assert "S011a" in numbers
    manual = next(item for item in project["expected_drawings"] if item["drawing_number"] == "S099")
    assert manual["source"] == "manual"
    assert manual["revision"] == "B"
    supplied = {item["drawing_number"] for item in project["drawings"] if item["drawing_number"]}
    assert "S099" not in supplied
