from pathlib import Path
import sys
import time

from fastapi.testclient import TestClient

from app.main import app
from app.upload_chunks import CHUNK_BYTES, assemble_session

sys.path.insert(0, str(Path(__file__).resolve().parent))
from test_drawing_parse import RC_TEXT, write_text_pdf
from test_drawing_verify import sample_llm_payload


def test_chunk_roundtrip_keeps_explicit_bytes(tmp_path, monkeypatch):
    monkeypatch.setenv("DATA_DIR", str(tmp_path / "data"))
    blob = b"%PDF-1.4\n" + (b"A" * 8_000) + b"\n%%EOF\n"
    client = TestClient(app)
    session = client.post("/uploads/sessions")
    assert session.status_code == 200
    session_id = session.json()["session_id"]
    assert session.json()["chunk_bytes"] == CHUNK_BYTES
    mid = 3_000
    parts = [blob[:mid], blob[mid:]]
    for index, part in enumerate(parts):
        response = client.put(
            f"/uploads/sessions/{session_id}/chunks",
            data={
                "file_index": "0",
                "chunk_index": str(index),
                "chunk_count": str(len(parts)),
                "filename": "notes.pdf",
                "kind": "rc",
            },
            files={"chunk": ("notes.pdf", part, "application/pdf")},
        )
        assert response.status_code == 200, response.text
    dest = tmp_path / "assembled"
    saved = assemble_session(session_id, dest)
    assert saved[0]["filename"] == "notes.pdf"
    assert saved[0]["kind"] == "rc"
    assert Path(saved[0]["path"]).read_bytes() == blob


def test_chunk_rejects_when_over_max_pdf_bytes(tmp_path, monkeypatch):
    monkeypatch.setenv("DATA_DIR", str(tmp_path / "data"))
    monkeypatch.setattr("app.upload_chunks.MAX_PDF_BYTES", 100)
    client = TestClient(app)
    session_id = client.post("/uploads/sessions").json()["session_id"]
    first = client.put(
        f"/uploads/sessions/{session_id}/chunks",
        data={
            "file_index": "0",
            "chunk_index": "0",
            "chunk_count": "2",
            "filename": "big.pdf",
        },
        files={"chunk": ("big.pdf", b"a" * 80, "application/pdf")},
    )
    assert first.status_code == 200
    second = client.put(
        f"/uploads/sessions/{session_id}/chunks",
        data={
            "file_index": "0",
            "chunk_index": "1",
            "chunk_count": "2",
            "filename": "big.pdf",
        },
        files={"chunk": ("big.pdf", b"b" * 30, "application/pdf")},
    )
    assert second.status_code == 400
    assert "15MB" in second.json()["detail"]


def test_verify_from_session_reads_text_pdf(tmp_path, monkeypatch):
    monkeypatch.setenv("DATA_DIR", str(tmp_path / "data"))
    monkeypatch.setenv("OPENAI_API_KEY", "test-not-used")
    monkeypatch.setattr(
        "app.drawing_verify.call_drawing_llm",
        lambda *args, **kwargs: {"ok": True, "model": "test-model", "payload": sample_llm_payload()},
    )
    rc = tmp_path / "rc-notes.pdf"
    write_text_pdf(rc, RC_TEXT)
    blob = rc.read_bytes()
    client = TestClient(app)
    session_id = client.post("/uploads/sessions").json()["session_id"]
    mid = max(1, len(blob) // 2)
    for index, part in enumerate([blob[:mid], blob[mid:]]):
        response = client.put(
            f"/uploads/sessions/{session_id}/chunks",
            data={
                "file_index": "0",
                "chunk_index": str(index),
                "chunk_count": "2",
                "filename": "rc-notes.pdf",
                "kind": "rc",
            },
            files={"chunk": ("rc-notes.pdf", part, "application/pdf")},
        )
        assert response.status_code == 200, response.text
    started = client.post("/drawings/verify/from-session", data={"session_id": session_id, "kinds": "rc"})
    assert started.status_code == 202, started.text
    job_id = started.json()["job_id"]
    deadline = time.time() + 8
    last = None
    while time.time() < deadline:
        last = client.get(f"/drawings/verify/jobs/{job_id}")
        body = last.json()
        if body.get("status") == "ok":
            result = body["result"]
            assert result["error"] is None
            assert result["derivation"] == "llm"
            return
        if body.get("status") == "error":
            raise AssertionError(body.get("detail"))
        time.sleep(0.05)
    raise AssertionError(f"job did not finish: {last.json() if last is not None else None}")


def test_incomplete_chunks_are_rejected(tmp_path, monkeypatch):
    monkeypatch.setenv("DATA_DIR", str(tmp_path / "data"))
    client = TestClient(app)
    session_id = client.post("/uploads/sessions").json()["session_id"]
    client.put(
        f"/uploads/sessions/{session_id}/chunks",
        data={
            "file_index": "0",
            "chunk_index": "0",
            "chunk_count": "2",
            "filename": "rc-notes.pdf",
        },
        files={"chunk": ("rc-notes.pdf", b"%PDF-1.4\n", "application/pdf")},
    )
    complete = client.post("/drawings/verify/from-session", data={"session_id": session_id, "kinds": "rc"})
    assert complete.status_code == 400
    assert "分片不完整" in complete.json()["detail"]
