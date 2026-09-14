#!/usr/bin/env python3
"""Fallback executor when Cursor `agent` CLI is not installed.

Each invocation is a new process. It never resumes a prior chat.
It only applies documented local_handler patches or records that a
human/cloud agent must implement the task.
"""

from __future__ import annotations

import json
import os
import sys
from pathlib import Path


def repo_root() -> Path:
    return Path(os.environ.get("OVERNIGHT_REPO") or Path(__file__).resolve().parents[1])


def apply_vision_stub_honesty(root: Path) -> list[str]:
    vision = root / "server" / "app" / "estimator" / "vision.py"
    text = vision.read_text(encoding="utf-8")
    if "def vision_classification_implemented" not in text:
        needle = "def vision_available() -> bool:\n    return bool(llm_api_key())\n"
        insert = (
            "def vision_available() -> bool:\n"
            "    return bool(llm_api_key())\n"
            "\n"
            "\n"
            "def vision_classification_implemented() -> bool:\n"
            "    \"\"\"True only after classify_page_vision actually sends a page to a model.\"\"\"\n"
            "    return False\n"
        )
        if needle not in text:
            raise SystemExit("vision.py missing vision_available() anchor")
        text = text.replace(needle, insert, 1)
        text = text.replace(
            '    """Vision fallback. Without a configured provider, return None — never invent a sheet number."""\n'
            "    if not vision_available():\n"
            "        return None\n"
            "    _ = llm_base_url, llm_model_name, _load_prompt(\"page-classification\")\n"
            "    return None\n",
            '    """Vision fallback. Even with a key, this stub does not read the page."""\n'
            "    if not vision_available():\n"
            "        return None\n"
            "    _ = llm_base_url, llm_model_name, _load_prompt(\"page-classification\")\n"
            "    return None\n",
            1,
        )
        vision.write_text(text, encoding="utf-8")

    router = root / "server" / "app" / "estimator" / "router.py"
    rtext = router.read_text(encoding="utf-8")
    if "vision_classification_implemented" not in rtext:
        rtext = rtext.replace(
            "from .vision import vision_available\n",
            "from .vision import vision_available, vision_classification_implemented\n",
            1,
        )
        old = '''    note = (
        "已配置视觉密钥，扫描页可走 Vision。"
        if vision_available()
        else "未配置 CPA_API_KEY 或 OPENAI_API_KEY。无文字层页保持 UNKNOWN，图号和工程量均为空。"
    )
    return {
        "vision": vision_available(),
        "note": public_note(note),
    }
'''
        new = '''    configured = vision_available()
    implemented = vision_classification_implemented()
    if implemented and configured:
        note = "已配置视觉密钥，扫描页可走 Vision。"
    elif configured:
        note = "已配置视觉密钥，但页分类未接入模型。扫描页不送图，图号为空。"
    else:
        note = "未配置 CPA_API_KEY 或 OPENAI_API_KEY。无文字层页保持 UNKNOWN，图号和工程量均为空。"
    return {
        "vision": configured,
        "vision_classification_implemented": implemented,
        "note": public_note(note),
    }
'''
        if old not in rtext:
            raise SystemExit("router.py ready() block not found")
        router.write_text(rtext.replace(old, new, 1), encoding="utf-8")

    test = root / "server" / "tests" / "test_estimator_vision_stub.py"
    if not test.is_file():
        test.write_text(
            '''from pathlib import Path

from fastapi.testclient import TestClient

from app.estimator.vision import classify_page_vision, vision_available, vision_classification_implemented
from app.main import app


def test_classify_page_vision_none_even_with_key(monkeypatch, tmp_path):
    monkeypatch.setenv("OPENAI_API_KEY", "sk-test-not-sent")
    monkeypatch.delenv("CPA_API_KEY", raising=False)
    assert vision_available() is True
    assert vision_classification_implemented() is False
    assert classify_page_vision(tmp_path / "scan.png") is None


def test_ready_discloses_vision_stub(monkeypatch):
    monkeypatch.setenv("OPENAI_API_KEY", "sk-test-not-sent")
    monkeypatch.delenv("CPA_API_KEY", raising=False)
    client = TestClient(app)
    response = client.get("/estimator/ready")
    assert response.status_code == 200
    body = response.json()
    assert body["vision"] is True
    assert body["vision_classification_implemented"] is False
    assert "stub" in body["note"]
    assert "http://" not in body["note"]
    assert "可走 Vision" not in body["note"]
''',
            encoding="utf-8",
        )
    return [
        "server/app/estimator/vision.py",
        "server/app/estimator/router.py",
        "server/tests/test_estimator_vision_stub.py",
    ]


HANDLERS = {
    "vision_stub_honesty": apply_vision_stub_honesty,
}


def main() -> int:
    snapshot = Path(os.environ.get("OVERNIGHT_SNAPSHOT") or "")
    if not snapshot.is_file():
        print("missing OVERNIGHT_SNAPSHOT", file=sys.stderr)
        return 2
    payload = json.loads(snapshot.read_text(encoding="utf-8"))
    handler_name = payload.get("local_handler")
    root = repo_root()
    if handler_name in HANDLERS:
        changed = HANDLERS[handler_name](root)
        print(json.dumps({"ok": True, "handler": handler_name, "changed": changed}, ensure_ascii=False))
        return 0
    print(
        json.dumps(
            {
                "ok": False,
                "reason": "no Cursor agent CLI; this local executor has no handler for the task",
                "task_id": payload.get("task_id"),
            },
            ensure_ascii=False,
        )
    )
    return 3


if __name__ == "__main__":
    raise SystemExit(main())
