import time

from app.estimator import jobs


def test_job_survives_memory_loss(tmp_path, monkeypatch):
    monkeypatch.setenv("DATA_DIR", str(tmp_path / "data"))

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
    jobs._JOBS.clear()
    restored = jobs.get_job(job_id)
    assert restored["status"] == "ok"
    assert restored["result"]["id"] == "fixture"
    assert (tmp_path / "data" / "estimator-jobs" / f"{job_id}.json").is_file()
