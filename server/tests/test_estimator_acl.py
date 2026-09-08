import uuid

from fastapi.testclient import TestClient

from app.estimator.pipeline import ingest_document, process_project
from app.estimator.takeoff import units_compatible
from app.main import app
from app.store import reset_engine
from tests.test_estimator import A101_FIXTURE, A601_FIXTURE, _isolated_db, _pdf


def _pilot(owner: str) -> TestClient:
    return TestClient(app, headers={"X-Pilot-Id": owner})


def _synthetic_project(tmp_path, monkeypatch, owner: str = "pilot-owner-a") -> tuple[TestClient, str]:
    _isolated_db(tmp_path, monkeypatch)
    client = _pilot(owner)
    created = client.post("/estimator/projects", json={"name": "隔离夹具"}).json()
    path = tmp_path / "synthetic-qa.pdf"
    _pdf(path, [A101_FIXTURE, A601_FIXTURE])
    ingest_document(created["id"], path, "synthetic-qa.pdf", "ARCHITECTURAL")
    process_project(created["id"])
    return client, created["id"]


def test_units_ea_matches_each():
    assert units_compatible("ea", "each")
    assert units_compatible("m2", "m2")
    assert not units_compatible("m2", "each")


def test_quote_snapshot_hand_calc_and_unpriced_doors(tmp_path, monkeypatch):
    client, project_id = _synthetic_project(tmp_path, monkeypatch)
    estimate = client.post(f"/estimator/projects/{project_id}/estimate")
    assert estimate.status_code == 200
    quote = estimate.json()["estimate"]
    window_1200 = next(item for item in quote["quote_lines"] if item["rate_id"] == "window_alu_1200x1200_dg")
    window_1800 = next(item for item in quote["quote_lines"] if item["rate_id"] == "window_alu_1800x1200_dg")
    assert window_1200["quantity"] == 2
    assert window_1200["amount_incl_gst"] == 1638.0
    assert window_1800["amount_incl_gst"] == 999.0
    assert quote["expected_total"] == 2637.0
    assert window_1200["payload"]["gst_included"] is True
    assert window_1200["payload"]["pack"]
    assert window_1200["payload"]["source_url"]
    assert window_1200["payload"]["retrieved_at"]
    door = next(item for item in quote["quote_lines"] if item["description"].startswith("D01 门"))
    assert door["status"] == "UNPRICED"
    assert door["amount_incl_gst"] == 0
    assert door["payload"]["unpriced_reason"] == "NO_RATE"


def test_correction_creates_new_estimate_and_keeps_old(tmp_path, monkeypatch):
    client, project_id = _synthetic_project(tmp_path, monkeypatch)
    first = client.post(f"/estimator/projects/{project_id}/estimate").json()
    old_id = first["estimate"]["id"]
    old_total = first["estimate"]["expected_total"]
    assert old_total == 2637.0
    w01 = next(item for item in first["takeoff"] if item["description"].startswith("W01 窗") and item["unit"] == "ea")
    area = next(item for item in first["takeoff"] if item["description"].startswith("W01 窗面积"))
    assert area["quantity"] == 2.88
    corrected = client.post(
        f"/estimator/projects/{project_id}/takeoff/{w01['id']}/correct",
        json={"quantity": 3, "reason_code": "WRONG_DIMENSION", "comment": "按门窗表件数改正"},
    )
    assert corrected.status_code == 200
    body = corrected.json()
    assert body["estimate"]["id"] != old_id
    assert body["estimate"]["expected_total"] == 3456.0
    new_area = next(item for item in body["takeoff"] if item["description"].startswith("W01 窗面积"))
    assert new_area["quantity"] == 4.32
    assert body["correction_events"]
    frozen = client.get(f"/estimator/projects/{project_id}/estimates/{old_id}")
    assert frozen.status_code == 200
    assert frozen.json()["estimate"]["expected_total"] == 2637.0
    exported = client.get(f"/estimator/projects/{project_id}/export", params={"estimate_id": old_id})
    assert exported.status_code == 200
    assert exported.json()["estimate"]["expected_total"] == 2637.0
    assert exported.json()["estimate"]["id"] == old_id
    csv_body = client.get(f"/estimator/projects/{project_id}/export", params={"estimate_id": old_id, "format": "csv"})
    assert csv_body.status_code == 200
    assert "window_alu_1200x1200_dg" in csv_body.text
    diff = client.get(
        f"/estimator/projects/{project_id}/estimates/{body['estimate']['id']}/diff",
        params={"against": old_id},
    )
    assert diff.status_code == 200
    changed = next(item for item in diff.json()["lines"] if item["description"].startswith("W01 窗") and "面积" not in item["description"])
    assert changed["base_quantity"] == 3
    assert changed["against_quantity"] == 2


def test_unit_mismatch_is_unpriced(tmp_path, monkeypatch):
    client, project_id = _synthetic_project(tmp_path, monkeypatch)
    project = client.get(f"/estimator/projects/{project_id}").json()
    w01 = next(item for item in project["takeoff"] if item["description"].startswith("W01 窗") and item["unit"] == "ea")
    patched = client.post(
        f"/estimator/projects/{project_id}/takeoff/{w01['id']}/correct",
        json={"unit": "m2", "reason_code": "WRONG_UNIT"},
    )
    assert patched.status_code == 200
    line = next(
        item
        for item in patched.json()["estimate"]["quote_lines"]
        if item["takeoff_id"] == w01["id"]
    )
    assert line["status"] == "UNPRICED"
    assert line["amount_incl_gst"] == 0
    assert line["payload"]["unpriced_reason"] == "UNIT_MISMATCH"


def test_two_pilots_cannot_read_each_other(tmp_path, monkeypatch):
    client_a, project_id = _synthetic_project(tmp_path, monkeypatch, owner="pilot-owner-a")
    client_b = _pilot("pilot-owner-b")
    listed_b = client_b.get("/estimator/projects")
    assert listed_b.status_code == 200
    assert listed_b.json()["projects"] == []
    foreign = client_b.get(f"/estimator/projects/{project_id}")
    assert foreign.status_code == 404
    page = client_b.get(f"/estimator/projects/{project_id}/documents/{uuid.uuid4()}/pages/1")
    assert page.status_code == 404
    own = client_a.get(f"/estimator/projects/{project_id}")
    assert own.status_code == 200
    created_b = client_b.post("/estimator/projects", json={"name": "乙的项目"}).json()
    assert created_b["id"] != project_id
    assert client_a.get(f"/estimator/projects/{created_b['id']}").status_code == 404
    listed_a = client_a.get("/estimator/projects").json()["projects"]
    assert all(item["id"] != created_b["id"] for item in listed_a)
    hijack = client_b.post(
        f"/estimator/projects/{project_id}/documents",
        files=[("files", ("x.pdf", b"%PDF-1.4", "application/pdf"))],
        data={"kinds": "ARCHITECTURAL"},
    )
    assert hijack.status_code == 404


def test_ready_hides_service_url(monkeypatch):
    monkeypatch.delenv("OPENAI_API_KEY", raising=False)
    monkeypatch.delenv("CPA_API_KEY", raising=False)
    client = TestClient(app)
    response = client.get("/drawings/verify/ready")
    assert response.status_code == 200
    body = response.json()
    assert "base_url" not in body
    assert "http://" not in (body.get("note") or "")
    estimator = client.get("/estimator/ready")
    assert estimator.status_code == 200
    assert "http://" not in (estimator.json().get("note") or "")
