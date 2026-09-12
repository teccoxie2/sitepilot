#!/usr/bin/env python3
"""Probe public Estimator endpoints. Prints no secrets or cookies."""

from __future__ import annotations

import http.cookiejar
import json
import sys
import urllib.error
import urllib.request

BASE = "https://demo-cost.vsense.co.nz"


def fetch(
    method: str,
    path: str,
    body: bytes | None = None,
    opener: urllib.request.OpenerDirector | None = None,
) -> tuple[int, str, str | None]:
    request = urllib.request.Request(
        BASE + path,
        data=body,
        method=method,
        headers={"Content-Type": "application/json", "Accept": "application/json"},
    )
    client = opener or urllib.request.build_opener()
    try:
        with client.open(request, timeout=30) as response:
            cookie = None
            header = response.headers.get("Set-Cookie")
            if header and "vsense_pilot=" in header:
                cookie = "set"
            return response.getcode(), response.read().decode("utf-8", "replace"), cookie
    except urllib.error.HTTPError as exc:
        return exc.code, exc.read().decode("utf-8", "replace"), None


def session() -> urllib.request.OpenerDirector:
    jar = http.cookiejar.CookieJar()
    return urllib.request.build_opener(urllib.request.HTTPCookieProcessor(jar))


def _json(body: str) -> dict:
    try:
        payload = json.loads(body)
    except json.JSONDecodeError:
        return {}
    return payload if isinstance(payload, dict) else {}


def main() -> int:
    health_code, _, _ = fetch("GET", "/engine/health")
    addr_code, addr_body, _ = fetch("GET", "/engine/addresses?q=55%20Nelson%20Street")
    addresses = _json(addr_body).get("addresses") if addr_code == 200 else None
    address_count = len(addresses) if isinstance(addresses, list) else 0
    address_source = _json(addr_body).get("source_name") if addr_code == 200 else None
    address_ok = addr_code == 200 and address_count > 0
    get_code, get_body, _ = fetch("GET", "/engine/estimator/projects")
    owner_a = session()
    owner_b = session()
    post_a_code, post_a_body, _ = fetch(
        "POST",
        "/engine/estimator/projects",
        b'{"name":"probe-owner-a"}',
        opener=owner_a,
    )
    post_b_code, post_b_body, _ = fetch(
        "POST",
        "/engine/estimator/projects",
        b'{"name":"probe-owner-b"}',
        opener=owner_b,
    )
    project_a = str(_json(post_a_body).get("id") or "")
    project_b = str(_json(post_b_body).get("id") or "")
    own_a_code = foreign_a_code = own_b_code = foreign_b_code = None
    if project_a:
        own_a_code, _, _ = fetch("GET", f"/engine/estimator/projects/{project_a}", opener=owner_a)
        foreign_b_code, _, _ = fetch("GET", f"/engine/estimator/projects/{project_a}", opener=owner_b)
    if project_b:
        own_b_code, _, _ = fetch("GET", f"/engine/estimator/projects/{project_b}", opener=owner_b)
        foreign_a_code, _, _ = fetch("GET", f"/engine/estimator/projects/{project_b}", opener=owner_a)

    isolation_ok = (
        post_a_code == 200
        and post_b_code == 200
        and bool(project_a)
        and bool(project_b)
        and project_a != project_b
        and own_a_code == 200
        and own_b_code == 200
        and foreign_a_code == 404
        and foreign_b_code == 404
    )
    payload = {
        "health": health_code,
        "address_search": addr_code,
        "address_count": address_count,
        "address_source": address_source,
        "address_ok": address_ok,
        "estimator_get": get_code,
        "estimator_post_a": post_a_code,
        "estimator_post_b": post_b_code,
        "own_get_a": own_a_code,
        "own_get_b": own_b_code,
        "cross_get_a_reads_b": foreign_a_code,
        "cross_get_b_reads_a": foreign_b_code,
        "projects_created": 2 if project_a and project_b and project_a != project_b else 0,
        "isolation_ok": isolation_ok,
        "get_is_error": get_code >= 400,
        "post_is_error": post_a_code >= 400 or post_b_code >= 400,
        "get_body_excerpt": get_body[:180],
    }
    print(json.dumps(payload, ensure_ascii=False, indent=2))
    if health_code != 200:
        return 2
    if not address_ok:
        return 5
    if get_code >= 400 or post_a_code >= 400 or post_b_code >= 400:
        return 3
    if not isolation_ok:
        return 4
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
