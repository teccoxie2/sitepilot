from __future__ import annotations

import pytest

from write_config import render_client_toml, render_server_toml, require_env, write_config


def test_require_env_rejects_empty(monkeypatch):
    monkeypatch.delenv("RATHOLE_TOKEN", raising=False)
    with pytest.raises(SystemExit, match="RATHOLE_TOKEN"):
        require_env("RATHOLE_TOKEN")


def test_server_toml_uses_noise_and_cpa_port(monkeypatch):
    monkeypatch.delenv("FLY_PRIVATE_IP", raising=False)
    text = render_server_toml(token="unit-token", noise_private="unit-private")
    assert 'type = "noise"' in text
    assert "local_private_key = \"unit-private\"" in text
    assert "[server.services.cpa]" in text
    assert "8317" in text
    assert "4443" in text


def test_server_toml_binds_cpa_to_fly_private_ip(monkeypatch):
    monkeypatch.setenv("FLY_PRIVATE_IP", "fdaa:1:2:3:4::5")
    text = render_server_toml(token="unit-token", noise_private="unit-private")
    assert 'bind_addr = "[fdaa:1:2:3:4::5]:8317"' in text
    assert "[::]:4443" in text


def test_client_toml_points_at_lan_cpa():
    text = render_client_toml(
        token="unit-token",
        noise_public="unit-public",
        remote="vsense-cpa-tunnel.fly.dev:4443",
        local="192.168.52.81:8317",
    )
    assert 'remote_addr = "vsense-cpa-tunnel.fly.dev:4443"' in text
    assert 'local_addr = "192.168.52.81:8317"' in text
    assert "retry_interval = 1" in text


def test_write_config_refuses_newline_token(monkeypatch):
    monkeypatch.setenv("RATHOLE_TOKEN", "abc\n")
    monkeypatch.setenv("RATHOLE_NOISE_PUBLIC", "pub")
    with pytest.raises(SystemExit, match="换行"):
        write_config("client")
