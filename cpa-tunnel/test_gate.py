from __future__ import annotations

import threading
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

import pytest

from gate import client_ip, gate_authorized, ip_allowed, parse_allowlist, path_allowed


def test_path_allows_v1_only():
    assert path_allowed("/v1")
    assert path_allowed("/v1/models")
    assert path_allowed("/v1/chat/completions?foo=1")
    assert not path_allowed("/")
    assert not path_allowed("/management.html")
    assert not path_allowed("/v1/../management.html")
    assert not path_allowed("/models")


def test_empty_allowlist_does_not_filter_ip():
    assert ip_allowed("203.0.113.8", []) is True


def test_cidr_allowlist_accepts_only_listed_range():
    networks = parse_allowlist("# office\n203.0.113.0/24\n")
    assert ip_allowed("203.0.113.10", networks) is True
    assert ip_allowed("198.51.100.2", networks) is False


def test_invalid_allowlist_line_exits():
    with pytest.raises(SystemExit, match="白名单无法解析"):
        parse_allowlist("not-an-ip")


def test_client_ip_prefers_cf_connecting_ip():
    ip = client_ip(
        [("X-Forwarded-For", "198.51.100.1"), ("Cf-Connecting-IP", "203.0.113.9")],
        "127.0.0.1",
    )
    assert ip == "203.0.113.9"


def test_gate_token_rejects_empty_and_mismatch():
    assert gate_authorized("secret-token", "secret-token") is True
    assert gate_authorized("Bearer secret-token", "secret-token") is True
    assert gate_authorized("other", "secret-token") is False
    assert gate_authorized("", "secret-token") is False
    assert gate_authorized("secret-token", "") is False


class _Origin(BaseHTTPRequestHandler):
    def do_GET(self) -> None:  # noqa: N802
        body = b'{"data":[]}'
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, fmt: str, *args: object) -> None:
        return


def test_gate_proxies_v1_and_blocks_management(monkeypatch):
    origin = ThreadingHTTPServer(("127.0.0.1", 0), _Origin)
    origin_thread = threading.Thread(target=origin.serve_forever, daemon=True)
    origin_thread.start()
    monkeypatch.setenv("CPA_ORIGIN", f"http://127.0.0.1:{origin.server_address[1]}")
    monkeypatch.setenv("CPA_GATE_TOKEN", "unit-gate")
    monkeypatch.delenv("CPA_ALLOWLIST_FILE", raising=False)

    from gate import GateHandler

    gate = ThreadingHTTPServer(("127.0.0.1", 0), GateHandler)
    gate_thread = threading.Thread(target=gate.serve_forever, daemon=True)
    gate_thread.start()
    host, port = gate.server_address
    try:
        import urllib.error
        import urllib.request

        models = urllib.request.Request(
            f"http://{host}:{port}/v1/models",
            headers={"X-CPA-Gate": "unit-gate"},
        )
        with urllib.request.urlopen(models, timeout=5) as response:
            assert response.status == 200
            assert b'"data"' in response.read()

        with pytest.raises(urllib.error.HTTPError) as blocked:
            urllib.request.urlopen(
                urllib.request.Request(
                    f"http://{host}:{port}/management.html",
                    headers={"X-CPA-Gate": "unit-gate"},
                ),
                timeout=5,
            )
        assert blocked.value.code == 404

        with pytest.raises(urllib.error.HTTPError) as unauthorized:
            urllib.request.urlopen(f"http://{host}:{port}/v1/models", timeout=5)
        assert unauthorized.value.code == 401
    finally:
        gate.shutdown()
        origin.shutdown()


def test_gate_ip_allowlist_blocks_unlisted_source(monkeypatch, tmp_path):
    origin = ThreadingHTTPServer(("127.0.0.1", 0), _Origin)
    threading.Thread(target=origin.serve_forever, daemon=True).start()
    allow = tmp_path / "allowlist.txt"
    allow.write_text("203.0.113.10\n", encoding="utf-8")
    monkeypatch.setenv("CPA_ORIGIN", f"http://127.0.0.1:{origin.server_address[1]}")
    monkeypatch.setenv("CPA_GATE_TOKEN", "unit-gate")
    monkeypatch.setenv("CPA_ALLOWLIST_FILE", str(allow))
    from gate import GateHandler

    gate = ThreadingHTTPServer(("127.0.0.1", 0), GateHandler)
    threading.Thread(target=gate.serve_forever, daemon=True).start()
    host, port = gate.server_address
    try:
        import urllib.error
        import urllib.request

        denied = urllib.request.Request(
            f"http://{host}:{port}/v1/models",
            headers={"X-CPA-Gate": "unit-gate", "Cf-Connecting-IP": "198.51.100.2"},
        )
        with pytest.raises(urllib.error.HTTPError) as blocked:
            urllib.request.urlopen(denied, timeout=5)
        assert blocked.value.code == 403

        allowed = urllib.request.Request(
            f"http://{host}:{port}/v1/models",
            headers={"X-CPA-Gate": "unit-gate", "Cf-Connecting-IP": "203.0.113.10"},
        )
        with urllib.request.urlopen(allowed, timeout=5) as response:
            assert response.status == 200
    finally:
        gate.shutdown()
        origin.shutdown()
