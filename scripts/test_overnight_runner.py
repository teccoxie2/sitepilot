from __future__ import annotations

import json
import os
import subprocess
import sys
from pathlib import Path

import pytest

REPO = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(REPO / "scripts"))

from overnight_runner import OvernightRunner, atomic_write_json, default_state  # noqa: E402


def _git(cwd: Path, *args: str) -> subprocess.CompletedProcess[str]:
    return subprocess.run(["git", *args], cwd=cwd, check=True, capture_output=True, text=True)


def _mini_repo(tmp_path: Path) -> Path:
    root = tmp_path / "repo"
    root.mkdir()
    _git(root, "init")
    _git(root, "config", "user.email", "overnight@example.test")
    _git(root, "config", "user.name", "Overnight Runner")
    (root / "docs" / "agent").mkdir(parents=True)
    (root / "scripts").mkdir()
    (root / ".agent-runs").mkdir()
    (root / "ok.txt").write_text("ok\n", encoding="utf-8")
    atomic_write_json(
        root / "docs" / "agent" / "runner_config.json",
        {
            "run_hours": 1,
            "max_rounds": 4,
            "round_timeout_minutes": 1,
            "max_attempts_per_task": 2,
            "finish_buffer_minutes": 0,
            "continue_old_session": False,
            "publish_changes": False,
            "cli_argv": None,
            "local_agent": "scripts/overnight_local_agent.py",
            "state_path": "docs/agent/STATE.json",
            "tasks_path": "docs/agent/TASKS.json",
            "lock_path": ".agent-runs/overnight.lock",
            "stop_path": ".agent-runs/STOP",
            "runs_dir": ".agent-runs",
        },
    )
    atomic_write_json(
        root / "docs" / "agent" / "TASKS.json",
        {
            "contract_version": 1,
            "tasks": [
                {
                    "id": "T-PASS",
                    "requirement_ids": ["J05"],
                    "title": "pass fixture",
                    "depends_on": [],
                    "scope_paths": ["ok.txt"],
                    "acceptance": ["ok file exists"],
                    "validation": {"commands": [f"{sys.executable} -c \"from pathlib import Path; assert Path('ok.txt').read_text()=='ok\\n'\""]},
                    "initial_status": "READY",
                },
                {
                    "id": "T-FAIL",
                    "requirement_ids": ["J05"],
                    "title": "fail fixture",
                    "depends_on": [],
                    "scope_paths": ["ok.txt"],
                    "acceptance": ["this command fails"],
                    "validation": {"commands": [f"{sys.executable} -c \"raise SystemExit(9)\""]},
                    "initial_status": "READY",
                },
            ],
        },
    )
    head = "unknown"
    _git(root, "add", ".")
    _git(root, "commit", "-m", "mini repo")
    head = subprocess.run(["git", "rev-parse", "HEAD"], cwd=root, capture_output=True, text=True, check=True).stdout.strip()
    state = default_state(head)
    state["branch"] = "test"
    atomic_write_json(root / "docs" / "agent" / "STATE.json", state)
    return root


def _cli_script(tmp_path: Path, name: str, body: str) -> Path:
    path = tmp_path / name
    path.write_text("#!/usr/bin/env python3\n" + body, encoding="utf-8")
    path.chmod(0o755)
    return path


def test_success_requires_acceptance(tmp_path, monkeypatch):
    root = _mini_repo(tmp_path)
    cli = _cli_script(
        tmp_path,
        "ok_cli.py",
        "print('done'); raise SystemExit(0)\n",
    )
    monkeypatch.setenv("OVERNIGHT_CLI_JSON", json.dumps([sys.executable, str(cli)]))
    runner = OvernightRunner(root)
    first = runner.run_once(prefer="T-PASS")
    assert first["status"] == "DONE"
    assert first["acceptance_ok"] is True
    assert first["session_id"]
    state = runner.load_state()
    assert state["tasks"]["T-PASS"]["status"] == "DONE"
    result = json.loads((root / first["round_dir"] / "result.json").read_text(encoding="utf-8"))
    assert result["test_exit_codes"]
    assert all(code == 0 for code in result["test_exit_codes"].values())


def test_failed_acceptance_is_not_done(tmp_path, monkeypatch):
    root = _mini_repo(tmp_path)
    cli = _cli_script(tmp_path, "ok_cli.py", "print('i claim success'); raise SystemExit(0)\n")
    monkeypatch.setenv("OVERNIGHT_CLI_JSON", json.dumps([sys.executable, str(cli)]))
    runner = OvernightRunner(root)
    outcome = runner.run_once(prefer="T-FAIL")
    assert outcome["status"] == "RETRYABLE"
    assert outcome["acceptance_ok"] is False
    state = runner.load_state()
    assert state["tasks"]["T-FAIL"]["status"] != "DONE"
    assert state["incomplete_task_id"] == "T-FAIL"


def test_recover_incomplete_before_new_task(tmp_path, monkeypatch):
    root = _mini_repo(tmp_path)
    cli = _cli_script(tmp_path, "ok_cli.py", "print('round'); raise SystemExit(0)\n")
    monkeypatch.setenv("OVERNIGHT_CLI_JSON", json.dumps([sys.executable, str(cli)]))
    runner = OvernightRunner(root)
    state = runner.load_state()
    state["incomplete_task_id"] = "T-FAIL"
    state.setdefault("tasks", {})["T-FAIL"] = {"status": "RUNNING", "attempts": 0}
    runner.save_state(state)
    selected = runner.select_next(runner.load_state(), prefer="T-PASS")
    assert selected is not None
    assert selected["id"] == "T-FAIL"
    outcome = runner.run_once(prefer="T-PASS")
    assert outcome["task_id"] == "T-FAIL"


def test_new_session_each_round(tmp_path, monkeypatch):
    root = _mini_repo(tmp_path)
    # Make T-FAIL retryable once then we call T-PASS separately after clearing incomplete
    cli = _cli_script(tmp_path, "ok_cli.py", "print('session'); raise SystemExit(0)\n")
    monkeypatch.setenv("OVERNIGHT_CLI_JSON", json.dumps([sys.executable, str(cli)]))
    runner = OvernightRunner(root)
    a = runner.run_once(prefer="T-PASS")
    state = runner.load_state()
    state["incomplete_task_id"] = None
    runner.save_state(state)
    # Reset T-PASS to READY so a second round can run the same fixture
    tasks = json.loads((root / "docs" / "agent" / "TASKS.json").read_text(encoding="utf-8"))
    tasks["tasks"].append(
        {
            "id": "T-PASS-2",
            "requirement_ids": ["J05"],
            "title": "second",
            "depends_on": [],
            "scope_paths": ["ok.txt"],
            "acceptance": ["ok file exists"],
            "validation": {"commands": [f"{sys.executable} -c \"from pathlib import Path; assert Path('ok.txt').read_text()=='ok\\n'\""]},
            "initial_status": "READY",
        }
    )
    atomic_write_json(root / "docs" / "agent" / "TASKS.json", tasks)
    b = runner.run_once(prefer="T-PASS-2")
    assert a["session_id"] and b["session_id"]
    assert a["session_id"] != b["session_id"]
    cli_a = json.loads((root / a["round_dir"] / "cli.json").read_text(encoding="utf-8"))
    assert cli_a["continue_old_session"] is False


def test_stop_marker(tmp_path):
    root = _mini_repo(tmp_path)
    runner = OvernightRunner(root)
    (root / ".agent-runs" / "STOP").write_text("stop\n", encoding="utf-8")
    outcome = runner.run_once(prefer="T-PASS")
    assert outcome["stopped"] is True


def test_contract_weakening_blocks(tmp_path, monkeypatch):
    root = _mini_repo(tmp_path)
    cli = _cli_script(tmp_path, "ok_cli.py", "raise SystemExit(0)\n")
    monkeypatch.setenv("OVERNIGHT_CLI_JSON", json.dumps([sys.executable, str(cli)]))
    runner = OvernightRunner(root)

    original = runner.invoke_executor

    def shrink_then_run(task, round_dir, snapshot_path):
        payload = json.loads((root / "docs" / "agent" / "TASKS.json").read_text(encoding="utf-8"))
        for item in payload["tasks"]:
            if item["id"] == "T-PASS":
                item["acceptance"] = []
                item["validation"]["commands"] = []
        atomic_write_json(root / "docs" / "agent" / "TASKS.json", payload)
        return original(task, round_dir, snapshot_path)

    monkeypatch.setattr(runner, "invoke_executor", shrink_then_run)
    outcome = runner.run_once(prefer="T-PASS")
    assert outcome["status"] == "BLOCKED"
    assert "weakened" in outcome["reason"]
