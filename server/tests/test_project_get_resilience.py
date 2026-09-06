from fastapi.testclient import TestClient

from app.main import app
from app.store import create_project, reset_engine


def test_get_project_survives_hydrate_failure(tmp_path, monkeypatch):
    monkeypatch.setenv("DATABASE_URL", f"sqlite:///{tmp_path / 'projects.sqlite'}")
    reset_engine()
    record = create_project(
        "55 Nelson Street HOWICK 2014",
        {
            "site": {
                "geo": {
                    "display_name": "55 Nelson Street HOWICK 2014",
                    "lat": -36.898391765801,
                    "lon": 174.9238266328954,
                    "source_name": "Auckland Council AC_Address（Open Data, CC-BY 4.0）",
                    "source_url": "https://services1.arcgis.com/n4yPwebTjJCmXB6W/arcgis/rest/services/AC_Address_Query/FeatureServer/0",
                }
            },
            "explanation": "已读取议会地址。",
        },
        "ready",
    )

    def boom(*_args, **_kwargs):
        raise RuntimeError("hydrate failed")

    monkeypatch.setattr("app.main.hydrate_lim", boom)
    client = TestClient(app)
    response = client.get(f"/projects/{record['id']}")
    assert response.status_code == 200
    body = response.json()
    assert body["id"] == record["id"]
    assert body["address"] == "55 Nelson Street HOWICK 2014"
    assert body["result"]["site"]["geo"]["lat"] == -36.898391765801
