#!/usr/bin/env python3
"""LAN-side allowlist gate in front of CLIProxyAPI. Stdlib only."""

from __future__ import annotations

import hmac
import http.client
import ipaddress
import os
import sys
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from posixpath import normpath
from typing import Iterable
from urllib.parse import urlsplit

HOP_BY_HOP = {
    "connection",
    "keep-alive",
    "proxy-authenticate",
    "proxy-authorization",
    "te",
    "trailers",
    "transfer-encoding",
    "upgrade",
    "host",
    "x-cpa-gate",
}

GATE_HEADER = "X-CPA-Gate"


def path_allowed(raw_path: str) -> bool:
    path = urlsplit(raw_path).path or "/"
    normalized = normpath("/" + path.lstrip("/"))
    return normalized == "/v1" or normalized.startswith("/v1/")


def parse_allowlist(text: str) -> list[ipaddress.IPv4Network | ipaddress.IPv6Network]:
    networks: list[ipaddress.IPv4Network | ipaddress.IPv6Network] = []
    for raw in text.splitlines():
        line = raw.split("#", 1)[0].strip()
        if not line:
            continue
        try:
            networks.append(ipaddress.ip_network(line, strict=False))
        except ValueError as exc:
            raise SystemExit(f"白名单无法解析：{line}") from exc
    return networks


def load_allowlist(path: str) -> list[ipaddress.IPv4Network | ipaddress.IPv6Network]:
    if not path:
        return []
    if not os.path.isfile(path):
        return []
    return parse_allowlist(open(path, encoding="utf-8").read())


def client_ip(headers: Iterable[tuple[str, str]], remote_addr: str) -> str:
    mapping = {key.lower(): value for key, value in headers}
    for name in ("cf-connecting-ip", "true-client-ip"):
        raw = (mapping.get(name) or "").split(",")[0].strip()
        if raw:
            return raw
    forwarded = (mapping.get("x-forwarded-for") or "").split(",")[0].strip()
    if forwarded:
        return forwarded
    return remote_addr.split("%")[0]


def ip_allowed(ip: str, networks: list[ipaddress.IPv4Network | ipaddress.IPv6Network]) -> bool:
    if not networks:
        return True
    try:
        addr = ipaddress.ip_address(ip)
    except ValueError:
        return False
    return any(addr in network for network in networks)


def gate_authorized(provided: str, expected: str) -> bool:
    if not expected:
        return False
    got = (provided or "").strip()
    if got.lower().startswith("bearer "):
        got = got[7:].strip()
    if not got:
        return False
    return hmac.compare_digest(got.encode("utf-8"), expected.encode("utf-8"))


def origin_target() -> urlsplit:
    raw = os.environ.get("CPA_ORIGIN", "http://192.168.52.81:8317").strip() or "http://192.168.52.81:8317"
    parsed = urlsplit(raw)
    if parsed.scheme not in {"http", "https"} or not parsed.hostname:
        raise SystemExit(f"CPA_ORIGIN 无效：{raw}")
    return parsed


class GateHandler(BaseHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def log_message(self, fmt: str, *args: object) -> None:
        sys.stderr.write("%s - %s\n" % (self.address_string(), fmt % args))

    def do_GET(self) -> None:  # noqa: N802
        self._proxy()

    def do_POST(self) -> None:  # noqa: N802
        self._proxy()

    def do_HEAD(self) -> None:  # noqa: N802
        self._proxy()

    def do_OPTIONS(self) -> None:  # noqa: N802
        self._proxy()

    def _deny(self, status: int, message: str) -> None:
        body = message.encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "text/plain; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "private, no-store")
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(body)

    def _proxy(self) -> None:
        token = os.environ.get("CPA_GATE_TOKEN", "").strip()
        if not path_allowed(self.path):
            self._deny(404, "只允许 /v1。管理页与其它路径不从公网暴露。")
            return
        if not gate_authorized(self.headers.get(GATE_HEADER) or "", token):
            self._deny(401, "缺少或错误的门禁令牌。")
            return
        networks = load_allowlist(os.environ.get("CPA_ALLOWLIST_FILE", "").strip())
        source_ip = client_ip(self.headers.items(), self.client_address[0])
        if not ip_allowed(source_ip, networks):
            self._deny(403, "来源 IP 不在白名单。")
            return
        parsed = origin_target()
        port = parsed.port or (443 if parsed.scheme == "https" else 80)
        conn: http.client.HTTPConnection
        if parsed.scheme == "https":
            conn = http.client.HTTPSConnection(parsed.hostname, port, timeout=210)
        else:
            conn = http.client.HTTPConnection(parsed.hostname, port, timeout=210)
        length = int(self.headers.get("Content-Length") or 0)
        body = self.rfile.read(length) if length else None
        outbound: dict[str, str] = {}
        for key, value in self.headers.items():
            if key.lower() in HOP_BY_HOP:
                continue
            outbound[key] = value
        outbound["Host"] = parsed.netloc
        try:
            conn.request(self.command, self.path, body=body, headers=outbound)
            response = conn.getresponse()
            payload = response.read()
        except Exception as exc:  # noqa: BLE001
            self._deny(502, f"无法转到局域网 CPA：{exc}")
            return
        finally:
            conn.close()
        self.send_response(response.status)
        for key, value in response.getheaders():
            if key.lower() in {"transfer-encoding", "connection", "content-length"}:
                continue
            self.send_header(key, value)
        self.send_header("Content-Length", str(len(payload)))
        self.send_header("Cache-Control", "private, no-store")
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(payload)


def main() -> None:
    token = os.environ.get("CPA_GATE_TOKEN", "").strip()
    if not token:
        raise SystemExit("缺少 CPA_GATE_TOKEN，拒绝在无门禁的情况下监听。")
    origin_target()
    host = os.environ.get("GATE_HOST", "0.0.0.0").strip() or "0.0.0.0"
    port = int(os.environ.get("PORT", "8318"))
    server = ThreadingHTTPServer((host, port), GateHandler)
    sys.stderr.write(f"cpa-gate listening on {host}:{port}, origin {os.environ.get('CPA_ORIGIN')}\n")
    server.serve_forever()


if __name__ == "__main__":
    main()
