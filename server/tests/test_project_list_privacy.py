from fastapi.testclient import TestClient

from app.main import app
from app.store import create_project, reset_engine


def test_http_project_list_stays_empty(tmp_path, monkeypatch):
    monkeypatch.setenv("DATABASE_URL", f"sqlite:///{tmp_path / 'projects.sqlite'}")
    reset_engine()
    create_project("55 Nelson Street, Howick", {"options": []}, "ready")
    client = TestClient(app)
    response = client.get("/projects")
    assert response.status_code == 200
    assert response.json() == {"projects": []}
    assert "no-store" in response.headers.get("cache-control", "")


def test_runtime_egress_does_not_invent_ip_on_failure(monkeypatch):
    import httpx

    class BoomClient:
        def __init__(self, *args, **kwargs):
            pass

        def __enter__(self):
            return self

        def __exit__(self, *args):
            return False

        def get(self, url):
            raise httpx.ConnectError("unreachable")

    monkeypatch.setattr("httpx.Client", BoomClient)
    client = TestClient(app)
    response = client.get("/runtime/egress")
    assert response.status_code == 502
    body = response.json()
    assert "egress_ip" not in body
    detail = body.get("detail") or ""
    assert "无法读取出口 IP" in detail
