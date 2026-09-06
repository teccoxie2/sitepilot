import time

from app.estimator import jobs
from app.job_store import create_job, read_job
from app.store import reset_engine


def test_estimator_job_survives_engine_reset(tmp_path, monkeypatch):
    monkeypatch.setenv("DATABASE_URL", f"sqlite:///{tmp_path / 'jobs.sqlite'}")
    monkeypatch.setenv("DATA_DIR", str(tmp_path / "data"))
    reset_engine()

    def worker(note):
        note("running fixture")
        return {"id": "fixture", "status": "READY"}

    submitted = jobs.submit(worker, "queued")
    job_id = submitted["job_id"]
    payload = None
    deadline = time.time() + 5
    while time.time() < deadline:
        payload = jobs.get_job(job_id)
        if payload["status"] in {"ok", "error"}:
            break
        time.sleep(0.05)
    assert payload is not None
    assert payload["status"] == "ok"
    assert payload["result"]["id"] == "fixture"
    reset_engine()
    restored = jobs.get_job(job_id)
    assert restored["status"] == "ok"
    assert restored["result"]["id"] == "fixture"


def test_drawing_verify_job_readable_after_engine_reset(tmp_path, monkeypatch):
    monkeypatch.setenv("DATABASE_URL", f"sqlite:///{tmp_path / 'drawing-jobs.sqlite'}")
    monkeypatch.setenv("DATA_DIR", str(tmp_path / "data"))
    reset_engine()
    job = create_job("drawing-verify", "已排队，正在读取文字层。")
    reset_engine()
    payload = read_job(job["job_id"], "核对任务不存在或已过期，请重新上传。", kind="drawing-verify")
    assert payload["status"] == "pending"
    assert payload["kind"] == "drawing-verify"
