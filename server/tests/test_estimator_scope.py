from app.estimator.takeoff import attach_scope_breakdown, line_scope_bucket, scope_breakdown
from app.main import app
from tests.test_estimator_acl import _synthetic_project


def test_scope_breakdown_splits_priced_allowance_and_excluded():
    lines = [
        {"status": "VERIFIED", "amount_incl_gst": 100.0, "description": "窗"},
        {"status": "CALCULATED", "amount_incl_gst": 50.0, "description": "屋面"},
        {"status": "ALLOWANCE", "amount_incl_gst": 20.0, "description": "暂估"},
        {"status": "INFERRED", "amount_incl_gst": 10.0, "description": "推断"},
        {"status": "UNPRICED", "amount_incl_gst": 0.0, "description": "梁"},
        {"status": "UNRESOLVED", "amount_incl_gst": 0.0, "description": "缺图"},
    ]
    breakdown = scope_breakdown(lines, missing_drawing_count=1, unresolved_review_count=1)
    assert breakdown["priced_total"] == 150.0
    assert breakdown["allowance_total"] == 20.0
    assert breakdown["inferred_total"] == 10.0
    assert breakdown["excluded_count"] == 2
    assert breakdown["publication_status"] == "unissued"
    assert breakdown["publication_blockers"] == [
        "UNPRICED_OR_UNRESOLVED",
        "INFERRED_IN_TOTAL",
        "MISSING_DRAWINGS",
        "UNRESOLVED_REVIEW",
    ]
    assert line_scope_bucket("VERIFIED") == "priced"
    assert line_scope_bucket("ALLOWANCE") == "allowance"
    assert line_scope_bucket("UNPRICED") == "excluded"


def test_attach_scope_breakdown_keeps_unissued_on_old_payload():
    estimate = attach_scope_breakdown(
        {
            "expected_total": 2637.0,
            "payload": {"note": "旧快照"},
            "quote_lines": [
                {"status": "VERIFIED", "amount_incl_gst": 2637.0, "description": "窗"},
                {"status": "UNPRICED", "amount_incl_gst": 0.0, "description": "门"},
            ],
        }
    )
    assert estimate["priced_total"] == 2637.0
    assert estimate["allowance_total"] == 0.0
    assert estimate["publication_status"] == "unissued"
    assert "UNPRICED_OR_UNRESOLVED" in estimate["publication_blockers"]


def test_estimate_splits_priced_and_excluded_without_approval(tmp_path, monkeypatch):
    client, project_id = _synthetic_project(tmp_path, monkeypatch)
    estimate = client.post(f"/estimator/projects/{project_id}/estimate")
    assert estimate.status_code == 200
    quote = estimate.json()["estimate"]
    assert quote["priced_total"] == 2637.0
    assert quote["allowance_total"] == 0.0
    assert quote["expected_total"] == 2637.0
    assert quote["excluded_count"] >= 1
    assert quote["publication_status"] == "unissued"
    assert "approved" not in quote
    assert quote.get("issued") is not True
    door = next(item for item in quote["quote_lines"] if str(item["description"]).startswith("D01 门"))
    assert door["status"] == "UNPRICED"
    assert any(str(item.get("description") or "").startswith("D01 门") for item in quote["payload"]["not_included"])

    approve = client.post(f"/estimator/projects/{project_id}/budget/approve")
    assert approve.status_code in {404, 405}
    publish = client.post(f"/estimator/projects/{project_id}/estimate/publish")
    assert publish.status_code in {404, 405}

    exported = client.get(f"/estimator/projects/{project_id}/export")
    assert exported.status_code == 200
    body = exported.json()
    assert body["priced_total"] == 2637.0
    assert body["allowance_total"] == 0.0
    assert body["publication_status"] == "unissued"
    csv_body = client.get(f"/estimator/projects/{project_id}/export", params={"format": "csv"})
    assert csv_body.status_code == 200
    assert "scope_bucket" in csv_body.text
    assert "excluded" in csv_body.text


def test_manual_allowance_stays_out_of_priced_total(tmp_path, monkeypatch):
    client, project_id = _synthetic_project(tmp_path, monkeypatch)
    first = client.post(f"/estimator/projects/{project_id}/estimate").json()
    old_id = first["estimate"]["id"]
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
    quote = added.json()["estimate"]
    assert quote["priced_total"] == 2637.0
    assert quote["allowance_total"] == 819.0
    assert quote["expected_total"] == 3456.0
    assert quote["publication_status"] == "unissued"
    frozen = client.get(f"/estimator/projects/{project_id}/estimates/{old_id}")
    assert frozen.status_code == 200
    old = frozen.json()["estimate"]
    assert old["expected_total"] == 2637.0
    assert old["priced_total"] == 2637.0
    assert old["allowance_total"] == 0.0
    assert old["publication_status"] == "unissued"


def test_review_accept_does_not_issue_budget(tmp_path, monkeypatch):
    client, project_id = _synthetic_project(tmp_path, monkeypatch)
    client.post(f"/estimator/projects/{project_id}/estimate")
    project = client.get(f"/estimator/projects/{project_id}").json()
    review = next(item for item in project["review"] if item["queue_status"] in {"NEEDS_REVIEW", "UNRESOLVED"})
    accepted = client.post(
        f"/estimator/projects/{project_id}/review/{review['id']}/accept",
        json={"reason_code": "OTHER", "comment": "仅关闭取量审核"},
    )
    assert accepted.status_code == 200
    quote = client.post(f"/estimator/projects/{project_id}/estimate").json()["estimate"]
    assert quote["publication_status"] == "unissued"
    assert quote.get("approved") is not True
