#!/usr/bin/env python3
"""Render rathole TOML from environment variables and optionally exec rathole.

Secrets are never printed. Empty token/key values fail closed.
"""
from __future__ import annotations

import argparse
import json
import os
import sys
from pathlib import Path

CONFIG_PATH = Path("/tmp/rathole.toml")
RATHOLE_BIN = os.environ.get("RATHOLE_BIN", "/usr/local/bin/rathole")
DEFAULT_REMOTE = "vsense-cpa-tunnel.fly.dev:4443"
DEFAULT_CPA_LOCAL = "192.168.52.81:8317"
SERVICE_NAME = "cpa"


def toml_str(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


def require_env(name: str) -> str:
    raw = os.environ.get(name, "")
    if "\n" in raw or "\r" in raw:
        raise SystemExit(f"{name} 含换行，拒绝启动隧道。")
    value = raw.strip()
    if not value:
        raise SystemExit(f"缺少 {name}，拒绝启动隧道。")
    return value


def listen_addr(port: int, *, private: bool) -> str:
    private_ip = os.environ.get("FLY_PRIVATE_IP", "").strip()
    if private and private_ip:
        host = private_ip.split("%", 1)[0]
        if ":" in host:
            return f"[{host}]:{port}"
        return f"{host}:{port}"
    return f"[::]:{port}"


def render_server_toml(*, token: str, noise_private: str) -> str:
    control = os.environ.get("RATHOLE_CONTROL_BIND", "").strip() or listen_addr(4443, private=False)
    cpa_bind = os.environ.get("RATHOLE_CPA_BIND", "").strip() or listen_addr(8317, private=True)
    return "\n".join(
        [
            "[server]",
            f"bind_addr = {toml_str(control)}",
            f"default_token = {toml_str(token)}",
            "heartbeat_interval = 30",
            "",
            "[server.transport]",
            'type = "noise"',
            "",
            "[server.transport.noise]",
            f"local_private_key = {toml_str(noise_private)}",
            "",
            "[server.transport.tcp]",
            "nodelay = true",
            "keepalive_secs = 20",
            "keepalive_interval = 8",
            "",
            f"[server.services.{SERVICE_NAME}]",
            f"token = {toml_str(token)}",
            f"bind_addr = {toml_str(cpa_bind)}",
            "",
        ]
    )


def render_client_toml(*, token: str, noise_public: str, remote: str, local: str) -> str:
    return "\n".join(
        [
            "[client]",
            f"remote_addr = {toml_str(remote)}",
            f"default_token = {toml_str(token)}",
            "heartbeat_timeout = 40",
            "retry_interval = 1",
            "",
            "[client.transport]",
            'type = "noise"',
            "",
            "[client.transport.noise]",
            f"remote_public_key = {toml_str(noise_public)}",
            "",
            "[client.transport.tcp]",
            "nodelay = true",
            "keepalive_secs = 20",
            "keepalive_interval = 8",
            "",
            f"[client.services.{SERVICE_NAME}]",
            f"token = {toml_str(token)}",
            f"local_addr = {toml_str(local)}",
            "",
        ]
    )


def write_config(mode: str) -> Path:
    token = require_env("RATHOLE_TOKEN")
    if mode == "server":
        text = render_server_toml(token=token, noise_private=require_env("RATHOLE_NOISE_PRIVATE"))
    elif mode == "client":
        text = render_client_toml(
            token=token,
            noise_public=require_env("RATHOLE_NOISE_PUBLIC"),
            remote=os.environ.get("RATHOLE_REMOTE", DEFAULT_REMOTE).strip() or DEFAULT_REMOTE,
            local=os.environ.get("CPA_LOCAL", DEFAULT_CPA_LOCAL).strip() or DEFAULT_CPA_LOCAL,
        )
    else:
        raise SystemExit("mode 只能是 server 或 client")
    CONFIG_PATH.write_text(text, encoding="utf-8")
    CONFIG_PATH.chmod(0o600)
    return CONFIG_PATH


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Render and run the CPA rathole tunnel.")
    parser.add_argument("--mode", choices=("server", "client"), default=os.environ.get("RATHOLE_MODE", "server"))
    parser.add_argument("--emit", action="store_true", help="Write TOML to stdout (still requires env).")
    parser.add_argument("--run", action="store_true", help="Exec rathole with the rendered config.")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    path = write_config(args.mode)
    if args.emit:
        sys.stdout.write(path.read_text(encoding="utf-8"))
        return
    if not args.run:
        return
    os.execv(RATHOLE_BIN, [RATHOLE_BIN, f"--{args.mode}", str(path)])


if __name__ == "__main__":
    main()
