#!/usr/bin/env python3
"""Probe public Estimator endpoints. Prints no secrets."""

from __future__ import annotations

import json
import sys
import urllib.error
import urllib.request

BASE = "https://demo-cost.vsense.co.nz"


def fetch(method: str, path: str, body: bytes | None = None) -> tuple[int, str]:
    request = urllib.request.Request(
        BASE + path,
        data=body,
        method=method,
        headers={"Content-Type": "application/json", "Accept": "application/json"},
    )
    try:
        with urllib.request.urlopen(request, timeout=20) as response:
            return response.getcode(), response.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as exc:
        return exc.code, exc.read().decode("utf-8", "replace")


def main() -> int:
    health_code, _ = fetch("GET", "/engine/health")
    get_code, get_body = fetch("GET", "/engine/estimator/projects")
    post_code, post_body = fetch("POST", "/engine/estimator/projects", b'{"name":"probe-no-fake"}')
    payload = {
        "health": health_code,
        "estimator_get": get_code,
        "estimator_post": post_code,
        "get_is_error": get_code >= 400,
        "post_is_error": post_code >= 400,
        "get_body_excerpt": get_body[:180],
        "post_body_excerpt": post_body[:180],
    }
    print(json.dumps(payload, ensure_ascii=False, indent=2))
    if health_code != 200:
        return 2
    if get_code >= 400 or post_code >= 400:
        return 3
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
