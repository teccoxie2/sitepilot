from pathlib import Path

from fastapi.testclient import TestClient

from app.estimator.pipeline import ingest_document, process_project
from app.estimator.vision import classify_page_vision, vision_available, vision_classification_implemented
from app.main import app
from tests.test_estimator import _image_pdf, _isolated_db


def test_classify_page_vision_none_without_key(monkeypatch, tmp_path):
    monkeypatch.delenv("OPENAI_API_KEY", raising=False)
    monkeypatch.delenv("CPA_API_KEY", raising=False)
    assert vision_available() is False
    assert vision_classification_implemented() is True
    assert classify_page_vision(tmp_path / "scan.png") is None


def test_classify_page_vision_uses_cpa_chat(monkeypatch, tmp_path):
    monkeypatch.setenv("CPA_API_KEY", "cpa-test-not-live")
    monkeypatch.delenv("OPENAI_API_KEY", raising=False)
    png = tmp_path / "scan.png"
    png.write_bytes(b"not-a-real-png")

    def fake_vision(prompt: str, image_data_url: str) -> tuple[str, str]:
        assert "drawing_number" in prompt
        assert image_data_url.startswith("data:image/")
        return (
            '{"drawing_number":"A101","drawing_title":"Ground Floor Plan","revision":"C",'
            '"discipline":"ARCHITECTURAL","page_type":"FLOOR_PLAN","confidence":0.91,"evidence":[]}',
            "gpt-5.6-luna",
        )

    monkeypatch.setattr("app.estimator.vision.call_vision_completion", fake_vision)
    monkeypatch.setattr(
        "app.estimator.vision._png_as_data_url",
        lambda _path: "data:image/png;base64,ZmFrZQ==",
    )
    result = classify_page_vision(png)
    assert result is not None
    assert result.drawing_number == "A101"
    assert result.revision == "C"
    assert result.page_type == "FLOOR_PLAN"
    assert result.confidence <= 0.72


def test_classify_page_vision_rejects_ungrounded_sheet(monkeypatch, tmp_path):
    monkeypatch.setenv("CPA_API_KEY", "cpa-test-not-live")
    monkeypatch.setattr(
        "app.estimator.vision.call_vision_completion",
        lambda _p, _i: ('{"drawing_number":"see cover","page_type":"UNKNOWN","confidence":0.9}', "m"),
    )
    monkeypatch.setattr("app.estimator.vision._png_as_data_url", lambda _path: "data:image/png;base64,ZmFrZQ==")
    result = classify_page_vision(tmp_path / "scan.png")
    assert result is not None
    assert result.drawing_number is None


def test_ready_discloses_vision_wired(monkeypatch):
    monkeypatch.setenv("OPENAI_API_KEY", "sk-test-not-sent")
    monkeypatch.delenv("CPA_API_KEY", raising=False)
    client = TestClient(app)
    response = client.get("/estimator/ready")
    assert response.status_code == 200
    body = response.json()
    assert body["vision"] is True
    assert body["vision_classification_implemented"] is True
    assert "stub" not in body["note"]
    assert "http://" not in body["note"]
    assert "不标已核实" in body["note"]


def test_pipeline_vision_does_not_create_takeoff_quantities(tmp_path, monkeypatch):
    _isolated_db(tmp_path, monkeypatch)
    monkeypatch.setenv("CPA_API_KEY", "cpa-test-not-live")

    class Hit:
        drawing_number = "A101"
        drawing_title = "Ground Floor"
        revision = "C"
        discipline = "ARCHITECTURAL"
        page_type = "FLOOR_PLAN"
        confidence = 0.7
        evidence = []

    monkeypatch.setattr("app.estimator.pipeline.classify_page_vision", lambda _path: Hit())
    created = TestClient(app).post("/estimator/projects", json={"name": "扫描 Vision 夹具"}).json()
    scan = tmp_path / "architectural.pdf"
    _image_pdf(scan, 1)
    ingest_document(created["id"], scan, "architectural.pdf", "ARCHITECTURAL")
    project = process_project(created["id"])
    assert project["drawings"][0]["drawing_number"] == "A101"
    assert project["drawings"][0]["payload"]["classification_source"] == "vision"
    assert project["takeoff"] == []
    assert any(item["reason_code"] == "LLM_INFERENCE" for item in project["review"])
    evidence_methods = {item["extraction_method"] for item in project["evidence"]}
    assert "VISION" in evidence_methods
