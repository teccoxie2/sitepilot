#!/usr/bin/env python3
"""Vsense overnight task runner.

This is a project scheduler, not a Cursor built-in. It selects one READY task,
starts a new subprocess (never --resume), independently runs acceptance commands,
and only then marks DONE. CLI exit code 0 is not sufficient.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import shutil
import subprocess
import sys
import tempfile
import time
import uuid
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

SECRET_KEYS = (
    "DATABASE_URL",
    "CHECKPOINT_DATABASE_URL",
    "CPA_API_KEY",
    "OPENAI_API_KEY",
    "CPA_GATE_TOKEN",
    "PRICE_API_URL",
)


def utc_now() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat()


def atomic_write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    fd, tmp = tempfile.mkstemp(prefix=path.name, dir=str(path.parent))
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as handle:
            handle.write(text)
            handle.flush()
            os.fsync(handle.fileno())
        os.replace(tmp, path)
    except Exception:
        try:
            os.unlink(tmp)
        except OSError:
            pass
        raise


def atomic_write_json(path: Path, payload: Any) -> None:
    atomic_write(path, json.dumps(payload, ensure_ascii=False, indent=2) + "\n")


def load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def redact(text: str) -> str:
    cleaned = text
    for key in SECRET_KEYS:
        value = os.environ.get(key, "").strip()
        if value:
            cleaned = cleaned.replace(value, f"<{key}>")
    return cleaned


def which(name: str) -> str | None:
    return shutil.which(name)


@dataclass
class Lock:
    path: Path
    handle: Any

    def release(self) -> None:
        try:
            if sys.platform != "win32":
                import fcntl

                fcntl.flock(self.handle.fileno(), fcntl.LOCK_UN)
            self.handle.close()
        except OSError:
            pass


def acquire_lock(path: Path) -> Lock:
    path.parent.mkdir(parents=True, exist_ok=True)
    handle = open(path, "a+", encoding="utf-8")
    if sys.platform != "win32":
        import fcntl

        try:
            fcntl.flock(handle.fileno(), fcntl.LOCK_EX | fcntl.LOCK_NB)
        except OSError as exc:
            handle.close()
            raise RuntimeError(f"another overnight runner holds {path}") from exc
    handle.seek(0)
    handle.truncate()
    handle.write(f"pid={os.getpid()} started={utc_now()}\n")
    handle.flush()
    return Lock(path, handle)


class OvernightRunner:
    def __init__(self, repo: Path, config_path: Path | None = None):
        self.repo = repo.resolve()
        self.config_path = config_path or (self.repo / "docs" / "agent" / "runner_config.json")
        self.config = load_json(self.config_path)
        self.state_path = self.repo / self.config["state_path"]
        self.tasks_path = self.repo / self.config["tasks_path"]
        self.lock_path = self.repo / self.config["lock_path"]
        self.stop_path = self.repo / self.config["stop_path"]
        self.runs_dir = self.repo / self.config["runs_dir"]

    def load_state(self) -> dict[str, Any]:
        return load_json(self.state_path)

    def save_state(self, state: dict[str, Any]) -> None:
        atomic_write_json(self.state_path, state)

    def load_tasks(self) -> list[dict[str, Any]]:
        payload = load_json(self.tasks_path)
        return list(payload.get("tasks") or [])

    def task_by_id(self, task_id: str) -> dict[str, Any]:
        for task in self.load_tasks():
            if task["id"] == task_id:
                return task
        raise KeyError(task_id)

    def task_status(self, state: dict[str, Any], task_id: str) -> str:
        row = (state.get("tasks") or {}).get(task_id) or {}
        return str(row.get("status") or self.task_by_id(task_id).get("initial_status") or "DISCOVERY")

    def dependencies_satisfied(self, state: dict[str, Any], task: dict[str, Any]) -> bool:
        for dep in task.get("depends_on") or []:
            if self.task_status(state, dep) != "DONE":
                return False
        return True

    def select_next(self, state: dict[str, Any], prefer: str | None = None) -> dict[str, Any] | None:
        incomplete = state.get("incomplete_task_id")
        if incomplete:
            return self.task_by_id(incomplete)
        tasks = self.load_tasks()
        if prefer:
            chosen = self.task_by_id(prefer)
            status = self.task_status(state, prefer)
            if status in {"READY", "RETRYABLE", "VERIFYING", "RUNNING"} and self.dependencies_satisfied(state, chosen):
                return chosen
            return None
        max_attempts = int(self.config.get("max_attempts_per_task") or 2)
        for task in tasks:
            status = self.task_status(state, task["id"])
            attempts = int(((state.get("tasks") or {}).get(task["id"]) or {}).get("attempts") or 0)
            if status not in {"READY", "RETRYABLE"}:
                continue
            if attempts >= max_attempts and status == "RETRYABLE":
                continue
            commands = ((task.get("validation") or {}).get("commands")) or []
            if not commands or not task.get("scope_paths"):
                continue
            if self.dependencies_satisfied(state, task):
                return task
        return None

    def git_head(self) -> str:
        result = subprocess.run(
            ["git", "rev-parse", "HEAD"],
            cwd=self.repo,
            capture_output=True,
            text=True,
            check=False,
        )
        return (result.stdout or "").strip()

    def git_dirty(self) -> bool:
        result = subprocess.run(
            ["git", "status", "--porcelain"],
            cwd=self.repo,
            capture_output=True,
            text=True,
            check=False,
        )
        return bool((result.stdout or "").strip())

    def discover_cli(self) -> list[str]:
        configured = self.config.get("cli_argv")
        if isinstance(configured, list) and configured:
            return [str(item) for item in configured]
        env_json = os.environ.get("OVERNIGHT_CLI_JSON", "").strip()
        if env_json:
            parsed = json.loads(env_json)
            if not isinstance(parsed, list) or not parsed:
                raise ValueError("OVERNIGHT_CLI_JSON must be a JSON array")
            return [str(item) for item in parsed]
        agent = which("agent")
        if agent:
            return [agent, "-p", "--force", "--output-format", "json"]
        local = self.repo / str(self.config.get("local_agent") or "scripts/overnight_local_agent.py")
        if local.is_file():
            return [sys.executable, str(local)]
        raise RuntimeError("no Cursor agent CLI and no local agent script")

    def snapshot_task(self, task: dict[str, Any], round_dir: Path, base_commit: str) -> Path:
        snapshot = {
            "task_id": task["id"],
            "contract_version": load_json(self.tasks_path).get("contract_version"),
            "acceptance": task.get("acceptance"),
            "validation": task.get("validation"),
            "scope_paths": task.get("scope_paths"),
            "local_handler": task.get("local_handler"),
            "base_commit": base_commit,
            "snapshot_at": utc_now(),
        }
        path = round_dir / "acceptance_snapshot.json"
        atomic_write_json(path, snapshot)
        return path

    def contract_weakened(self, snapshot: dict[str, Any], task: dict[str, Any]) -> list[str]:
        problems: list[str] = []
        old_acc = list(snapshot.get("acceptance") or [])
        new_acc = list(task.get("acceptance") or [])
        if len(new_acc) < len(old_acc):
            problems.append("acceptance list shortened")
        for item in old_acc:
            if item not in new_acc:
                problems.append(f"acceptance removed: {item}")
        old_cmds = list((snapshot.get("validation") or {}).get("commands") or [])
        new_cmds = list((task.get("validation") or {}).get("commands") or [])
        if len(new_cmds) < len(old_cmds):
            problems.append("validation commands shortened")
        for item in old_cmds:
            if item not in new_cmds:
                problems.append(f"validation command removed: {item}")
        return problems

    def run_acceptance(self, task: dict[str, Any], round_dir: Path) -> dict[str, Any]:
        results: list[dict[str, Any]] = []
        ok = True
        for command in (task.get("validation") or {}).get("commands") or []:
            started = time.time()
            proc = subprocess.run(
                command,
                cwd=self.repo,
                shell=True,
                capture_output=True,
                text=True,
                check=False,
            )
            stdout = redact(proc.stdout or "")
            stderr = redact(proc.stderr or "")
            row = {
                "command": command,
                "exit_code": proc.returncode,
                "seconds": round(time.time() - started, 3),
                "stdout_path": "acceptance.stdout.log",
                "stderr_path": "acceptance.stderr.log",
            }
            results.append(row)
            if proc.returncode != 0:
                ok = False
            with open(round_dir / "acceptance.stdout.log", "a", encoding="utf-8") as handle:
                handle.write(f"$ {command}\n{stdout}\n")
            with open(round_dir / "acceptance.stderr.log", "a", encoding="utf-8") as handle:
                handle.write(f"$ {command}\n{stderr}\n")
        payload = {"ok": ok, "results": results, "ran_at": utc_now()}
        atomic_write_json(round_dir / "acceptance.json", payload)
        return payload

    def invoke_executor(self, task: dict[str, Any], round_dir: Path, snapshot_path: Path) -> dict[str, Any]:
        argv = self.discover_cli()
        session_id = str(uuid.uuid4())
        prompt_path = round_dir / "prompt.txt"
        prompt = (
            "读取本轮任务文件与项目状态，只执行本轮任务并写入结果。"
            f" task_id={task['id']} snapshot={snapshot_path} "
            "不要恢复上一轮聊天。不要削弱验收。不要编造金额或地块事实。"
        )
        prompt_path.write_text(prompt, encoding="utf-8")
        env = os.environ.copy()
        env["OVERNIGHT_TASK_ID"] = task["id"]
        env["OVERNIGHT_SNAPSHOT"] = str(snapshot_path)
        env["OVERNIGHT_ROUND_DIR"] = str(round_dir)
        env["OVERNIGHT_REPO"] = str(self.repo)
        env["OVERNIGHT_SESSION_ID"] = session_id
        timeout = int(self.config.get("round_timeout_minutes") or 40) * 60
        started = time.time()
        proc = subprocess.run(
            argv,
            cwd=self.repo,
            capture_output=True,
            text=True,
            check=False,
            timeout=timeout,
            env=env,
        )
        raw = redact((proc.stdout or "") + "\n" + (proc.stderr or ""))
        (round_dir / "cli-raw.log").write_text(raw, encoding="utf-8")
        payload = {
            "session_id": session_id,
            "argv": argv,
            "exit_code": proc.returncode,
            "seconds": round(time.time() - started, 3),
            "continue_old_session": False,
        }
        atomic_write_json(round_dir / "cli.json", payload)
        return payload

    def write_result(self, round_dir: Path, task: dict[str, Any], **extra: Any) -> Path:
        result = {
            "task_id": task["id"],
            "requirement_ids": task.get("requirement_ids"),
            "changed_paths": extra.get("changed_paths") or [],
            "tests_run": extra.get("tests_run") or [],
            "test_exit_codes": extra.get("test_exit_codes") or {},
            "evidence_paths": extra.get("evidence_paths") or [str(round_dir)],
            "unresolved": extra.get("unresolved") or [],
            "next_action": extra.get("next_action") or "",
            "decision_ids": extra.get("decision_ids") or [],
            "status": extra.get("status"),
            "base_commit": extra.get("base_commit"),
            "final_commit": extra.get("final_commit"),
            "notes": extra.get("notes") or "",
            "written_at": utc_now(),
        }
        path = round_dir / "result.json"
        atomic_write_json(path, result)
        return path

    def ensure_run(self, state: dict[str, Any]) -> str:
        run_id = str(state.get("run_id") or "").strip()
        if not run_id:
            run_id = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ") + "-" + uuid.uuid4().hex[:8]
            state["run_id"] = run_id
            state["started_at"] = utc_now()
        (self.runs_dir / run_id).mkdir(parents=True, exist_ok=True)
        return run_id

    def run_once(self, prefer: str | None = None, skip_executor: bool = False) -> dict[str, Any]:
        if self.stop_path.is_file():
            return {"stopped": True, "reason": "STOP marker"}
        state = self.load_state()
        task = self.select_next(state, prefer=prefer)
        if not task:
            return {"stopped": True, "reason": "no READY task"}
        run_id = self.ensure_run(state)
        round_index = int(state.get("rounds_completed") or 0) + 1
        round_dir = self.runs_dir / run_id / f"round-{round_index:02d}-{task['id']}"
        round_dir.mkdir(parents=True, exist_ok=True)
        base_commit = self.git_head()
        snapshot_path = self.snapshot_task(task, round_dir, base_commit)
        row = dict((state.get("tasks") or {}).get(task["id"]) or {})
        row["status"] = "RUNNING"
        row["attempts"] = int(row.get("attempts") or 0) + 1
        row["round_dir"] = str(round_dir.relative_to(self.repo))
        row["base_commit"] = base_commit
        state.setdefault("tasks", {})[task["id"]] = row
        state["current_task_id"] = task["id"]
        state["incomplete_task_id"] = task["id"]
        state["last_round_dir"] = str(round_dir.relative_to(self.repo))
        self.save_state(state)

        executor = {"skipped": True, "session_id": None, "exit_code": 0}
        if not skip_executor:
            try:
                executor = self.invoke_executor(task, round_dir, snapshot_path)
            except subprocess.TimeoutExpired:
                row["status"] = "RETRYABLE"
                row["last_error"] = "executor timeout"
                state["tasks"][task["id"]] = row
                self.write_result(
                    round_dir,
                    task,
                    status="interrupted",
                    base_commit=base_commit,
                    notes="executor timeout; not marked DONE",
                )
                self.save_state(state)
                return {"task_id": task["id"], "status": "RETRYABLE", "reason": "timeout"}

        live_task = self.task_by_id(task["id"])
        weakened = self.contract_weakened(load_json(snapshot_path), live_task)
        if weakened:
            row["status"] = "BLOCKED"
            row["last_error"] = "acceptance contract weakened: " + "; ".join(weakened)
            state["tasks"][task["id"]] = row
            state["incomplete_task_id"] = None
            self.save_state(state)
            self.write_result(round_dir, task, status="BLOCKED", notes=row["last_error"], base_commit=base_commit)
            return {"task_id": task["id"], "status": "BLOCKED", "reason": row["last_error"]}

        row["status"] = "VERIFYING"
        state["tasks"][task["id"]] = row
        self.save_state(state)
        acceptance = self.run_acceptance(live_task, round_dir)
        codes = {item["command"]: item["exit_code"] for item in acceptance["results"]}
        if acceptance["ok"]:
            row["status"] = "DONE"
            row["done_at"] = utc_now()
            row["verified_existing"] = bool(live_task.get("verified_existing_if_pass"))
            row["last_error"] = None
            state["incomplete_task_id"] = None
            state["current_task_id"] = None
            state["last_completed_task_id"] = task["id"]
            next_action = "select next READY task"
        else:
            attempts = int(row.get("attempts") or 0)
            max_attempts = int(self.config.get("max_attempts_per_task") or 2)
            row["status"] = "BLOCKED" if attempts >= max_attempts else "RETRYABLE"
            row["last_error"] = "acceptance failed"
            if row["status"] == "BLOCKED":
                state["incomplete_task_id"] = None
                state.setdefault("blocked", []).append(
                    {
                        "task_id": task["id"],
                        "reason": "acceptance failed",
                        "round_dir": str(round_dir.relative_to(self.repo)),
                        "at": utc_now(),
                    }
                )
            next_action = "retry same task" if row["status"] == "RETRYABLE" else "record BLOCKED and pick independent task"
        state["tasks"][task["id"]] = row
        state["rounds_completed"] = round_index
        state["last_updated"] = utc_now()
        self.save_state(state)
        self.write_result(
            round_dir,
            task,
            status=row["status"],
            base_commit=base_commit,
            final_commit=self.git_head(),
            tests_run=list(codes),
            test_exit_codes=codes,
            notes=f"executor_exit={executor.get('exit_code')} session={executor.get('session_id')}",
            next_action=next_action,
            evidence_paths=[str(round_dir.relative_to(self.repo))],
        )
        return {
            "task_id": task["id"],
            "status": row["status"],
            "round_dir": str(round_dir.relative_to(self.repo)),
            "session_id": executor.get("session_id"),
            "acceptance_ok": acceptance["ok"],
        }

    def run_loop(self, max_rounds: int | None = None) -> list[dict[str, Any]]:
        started = time.time()
        limit_hours = float(self.config.get("run_hours") or 8)
        buffer_min = float(self.config.get("finish_buffer_minutes") or 20)
        deadline = started + max(0.0, limit_hours * 3600 - buffer_min * 60)
        remaining = int(max_rounds if max_rounds is not None else self.config.get("max_rounds") or 16)
        outcomes: list[dict[str, Any]] = []
        while remaining > 0 and time.time() < deadline:
            if self.stop_path.is_file():
                outcomes.append({"stopped": True, "reason": "STOP marker"})
                break
            outcome = self.run_once()
            outcomes.append(outcome)
            remaining -= 1
            if outcome.get("stopped"):
                break
        return outcomes


def default_state(head: str) -> dict[str, Any]:
    return {
        "run_id": None,
        "branch": None,
        "base_commit": head,
        "started_at": None,
        "last_updated": utc_now(),
        "current_task_id": None,
        "incomplete_task_id": None,
        "last_completed_task_id": None,
        "rounds_completed": 0,
        "cli": {"agent_present": bool(which("agent")), "vercel_logged_in": None},
        "blocked": [],
        "next_action": "run N00-01 then scheduler short-run",
        "tasks": {},
    }


def cmd_init_state(runner: OvernightRunner) -> None:
    if runner.state_path.is_file():
        return
    state = default_state(runner.git_head())
    try:
        branch = subprocess.run(
            ["git", "rev-parse", "--abbrev-ref", "HEAD"],
            cwd=runner.repo,
            capture_output=True,
            text=True,
            check=False,
        ).stdout.strip()
        state["branch"] = branch
    except OSError:
        state["branch"] = None
    runner.save_state(state)


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Vsense overnight runner")
    parser.add_argument("--repo", default=".", help="repository root")
    parser.add_argument("--config", default=None)
    sub = parser.add_subparsers(dest="cmd", required=True)
    sub.add_parser("status")
    once = sub.add_parser("once")
    once.add_argument("--task", default=None)
    once.add_argument("--skip-executor", action="store_true")
    loop = sub.add_parser("run")
    loop.add_argument("--max-rounds", type=int, default=None)
    args = parser.parse_args(argv)

    repo = Path(args.repo)
    config = Path(args.config) if args.config else None
    runner = OvernightRunner(repo, config)
    lock = acquire_lock(runner.lock_path)
    try:
        if args.cmd == "status":
            state = runner.load_state()
            nxt = runner.select_next(state)
            print(
                json.dumps(
                    {
                        "run_id": state.get("run_id"),
                        "current": state.get("current_task_id"),
                        "incomplete": state.get("incomplete_task_id"),
                        "next": None if nxt is None else nxt["id"],
                        "blocked": state.get("blocked"),
                    },
                    ensure_ascii=False,
                    indent=2,
                )
            )
            return 0
        if args.cmd == "once":
            print(json.dumps(runner.run_once(prefer=args.task, skip_executor=args.skip_executor), ensure_ascii=False, indent=2))
            return 0
        if args.cmd == "run":
            print(json.dumps(runner.run_loop(max_rounds=args.max_rounds), ensure_ascii=False, indent=2))
            return 0
        return 2
    finally:
        lock.release()


if __name__ == "__main__":
    raise SystemExit(main())
