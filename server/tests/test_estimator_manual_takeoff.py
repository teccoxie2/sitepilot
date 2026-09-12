from fastapi.testclient import TestClient

from app.estimator.pipeline import ingest_document, process_project
from app.estimator.takeoff import build_takeoff_and_review
from app.main import app
from tests.test_estimator import A101_FIXTURE, A601_FIXTURE, _isolated_db, _pdf


def _pilot(owner: str) -> TestClient:
    return TestClient(app, headers={"X-Pilot-Id": owner})


def _synthetic_project(tmp_path, monkeypatch, owner: str = "pilot-manual-a") -> tuple[TestClient, str]:
    _isolated_db(tmp_path, monkeypatch)
    client = _pilot(owner)
    created = client.post("/estimator/projects", json={"name": "漏量夹具"}).json()
    path = tmp_path / "synthetic-qa.pdf"
    _pdf(path, [A101_FIXTURE, A601_FIXTURE])
    ingest_document(created["id"], path, "synthetic-qa.pdf", "ARCHITECTURAL")
    process_project(created["id"])
    return client, created["id"]


def test_manual_takeoff_requires_reason_and_rejects_handwritten_money(tmp_path, monkeypatch):
    client, project_id = _synthetic_project(tmp_path, monkeypatch)
    missing = client.post(
        f"/estimator/projects/{project_id}/takeoff/manual",
        json={"description": "漏窗", "quantity": 1, "unit": "ea", "scope_code": "08"},
    )
    assert missing.status_code == 422
    money = client.post(
        f"/estimator/projects/{project_id}/takeoff/manual",
        json={
            "description": "漏窗",
            "quantity": 1,
            "unit": "ea",
            "scope_code": "08",
            "reason_code": "MISSED_ITEM",
            "amount": 999,
        },
    )
    assert money.status_code == 422
    fake_sku = client.post(
        f"/estimator/projects/{project_id}/takeoff/manual",
        json={
            "description": "漏窗",
            "quantity": 1,
            "unit": "ea",
            "scope_code": "08",
            "reason_code": "MISSED_ITEM",
            "sku": "not-a-pricebook-sku",
        },
    )
    assert fake_sku.status_code == 400


def test_manual_takeoff_keeps_old_estimate_and_survives_replace(tmp_path, monkeypatch):
    client, project_id = _synthetic_project(tmp_path, monkeypatch)
    first = client.post(f"/estimator/projects/{project_id}/estimate").json()
    old_id = first["estimate"]["id"]
    old_total = first["estimate"]["expected_total"]
    assert old_total == 2637.0
    added = client.post(
        f"/estimator/projects/{project_id}/takeoff/manual",
        json={
            "description": "漏项 W03 窗 1200×1200 mm",
            "quantity": 1,
            "unit": "ea",
            "scope_code": "08",
            "reason_code": "MISSED_ITEM",
            "comment": "门窗表未列但现场有一樘",
            "sku": "window_alu_1200x1200_dg",
        },
    )
    assert added.status_code == 200
    body = added.json()
    manuals = [item for item in body["takeoff"] if item["source_method"] == "MANUAL"]
    assert len(manuals) == 1
    assert manuals[0]["quantity"] == 1
    assert manuals[0]["unit"] == "ea"
    assert manuals[0]["scope_code"] == "08"
    assert manuals[0]["status"] == "ALLOWANCE"
    assert manuals[0]["sku"] == "window_alu_1200x1200_dg"
    assert body["estimate"]["id"] != old_id
    assert body["estimate"]["expected_total"] == 3456.0
    creates = [event for event in body["correction_events"] if event["field_name"] == "create"]
    assert creates
    assert creates[0]["reason_code"] == "MISSED_ITEM"
    frozen = client.get(f"/estimator/projects/{project_id}/estimates/{old_id}")
    assert frozen.status_code == 200
    assert frozen.json()["estimate"]["expected_total"] == 2637.0
    exported = client.get(f"/estimator/projects/{project_id}/export", params={"estimate_id": old_id})
    assert exported.status_code == 200
    assert exported.json()["estimate"]["expected_total"] == 2637.0
    rebuilt = build_takeoff_and_review(project_id)
    kept = [item for item in rebuilt["takeoff"] if item["source_method"] == "MANUAL"]
    assert len(kept) == 1
    assert kept[0]["id"] == manuals[0]["id"]
    reread = client.get(f"/estimator/projects/{project_id}")
    assert reread.status_code == 200
    again = [item for item in reread.json()["takeoff"] if item["source_method"] == "MANUAL"]
    assert [item["id"] for item in again] == [manuals[0]["id"]]


def test_manual_takeoff_is_isolated(tmp_path, monkeypatch):
    owner_a, project_id = _synthetic_project(tmp_path, monkeypatch, owner="pilot-manual-a")
    owner_b = _pilot("pilot-manual-b")
    hijack = owner_b.post(
        f"/estimator/projects/{project_id}/takeoff/manual",
        json={
            "description": "不应写入",
            "quantity": 1,
            "unit": "ea",
            "scope_code": "08",
            "reason_code": "MISSED_ITEM",
        },
    )
    assert hijack.status_code == 404
    assert owner_b.get(f"/estimator/projects/{project_id}").status_code == 404
