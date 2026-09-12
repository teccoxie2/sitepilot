from pathlib import Path

from fastapi.testclient import TestClient

from app.estimator.vision import classify_page_vision, vision_available, vision_classification_implemented
from app.main import app


def test_classify_page_vision_none_even_with_key(monkeypatch, tmp_path):
    monkeypatch.setenv("OPENAI_API_KEY", "sk-test-not-sent")
    monkeypatch.delenv("CPA_API_KEY", raising=False)
    assert vision_available() is True
    assert vision_classification_implemented() is False
    assert classify_page_vision(tmp_path / "scan.png") is None


def test_ready_discloses_vision_stub(monkeypatch):
    monkeypatch.setenv("OPENAI_API_KEY", "sk-test-not-sent")
    monkeypatch.delenv("CPA_API_KEY", raising=False)
    client = TestClient(app)
    response = client.get("/estimator/ready")
    assert response.status_code == 200
    body = response.json()
    assert body["vision"] is True
    assert body["vision_classification_implemented"] is False
    assert "stub" in body["note"]
    assert "http://" not in body["note"]
    assert "可走 Vision" not in body["note"]
