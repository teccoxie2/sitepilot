from __future__ import annotations

from concurrent.futures import ThreadPoolExecutor
from typing import Any, Callable

from .. import job_store
from ..identity import get_owner_id

_EXECUTOR = ThreadPoolExecutor(max_workers=1, thread_name_prefix="estimator")


def get_job(job_id: str, owner_id: str | None = None) -> dict[str, Any]:
    return job_store.read_job(job_id, "任务不存在或已过期。", kind="estimator", owner_id=owner_id)


def submit(
    worker: Callable[[Callable[[str], None]], Any],
    note: str,
    owner_id: str | None = None,
) -> dict[str, Any]:
    job = job_store.create_job("estimator", note, owner_id=owner_id if owner_id is not None else get_owner_id())
    job_id = str(job["job_id"])

    def run() -> None:
        def set_note(message: str) -> None:
            job_store.update_job(job_id, note=message, status="running")

        try:
            result = worker(set_note)
            job_store.update_job(job_id, status="ok", result=result, note="完成。")
        except Exception as exc:  # noqa: BLE001
            job_store.update_job(job_id, status="error", detail=str(exc), note="失败，未编造数量或金额。")

    _EXECUTOR.submit(run)
    return job
