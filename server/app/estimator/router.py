from __future__ import annotations

from pathlib import Path
from typing import Any

from fastapi import APIRouter, File, Form, HTTPException, UploadFile
from fastapi.responses import FileResponse, JSONResponse
from pydantic import BaseModel, Field

from ..drawing_parse import MAX_PDF_BYTES
from ..upload_chunks import assemble_session, delete_session
from . import jobs, store
from .evals import run_574_eval
from .pipeline import ingest_document, process_project
from .takeoff import apply_review_action, build_estimate, build_takeoff_and_review
from .vision import vision_available

router = APIRouter(prefix="/estimator", tags=["estimator"])


class CreateBody(BaseModel):
    name: str = Field(min_length=1, max_length=200)
    address: str | None = Field(default=None, max_length=300)


class ReviewBody(BaseModel):
    field_name: str | None = None
    corrected_value: Any = None
    reason_code: str = "OTHER"
    comment: str | None = None


class EvidenceCorrectBody(BaseModel):
    x1: float
    y1: float
    x2: float
    y2: float
    reason_code: str = "OTHER"
    comment: str | None = None


def _project_or_404(project_id: str) -> dict[str, Any]:
    record = store.get_project(project_id)
    if not record:
        raise HTTPException(status_code=404, detail="Estimator 项目不存在")
    return record


@router.get("/ready")
def estimator_ready() -> dict[str, Any]:
    return {
        "vision": vision_available(),
        "note": (
            "已配置 CPA / OpenAI，扫描页可走 Vision。"
            if vision_available()
            else "未配置 CPA_API_KEY 或 OPENAI_API_KEY。无文字层页保持 UNKNOWN，不编造图号或工程量。"
        ),
    }


@router.post("/projects")
def create_estimator_project(body: CreateBody) -> dict[str, Any]:
    return store.create_project(body.name, body.address)


@router.get("/projects")
def list_estimator_projects() -> dict[str, Any]:
    return {"projects": store.list_projects()}


@router.get("/projects/{project_id}")
def get_estimator_project(project_id: str) -> dict[str, Any]:
    return _project_or_404(project_id)


@router.post("/projects/{project_id}/documents")
async def upload_documents(
    project_id: str,
    files: list[UploadFile] = File(...),
    kinds: str | None = Form(default=None),
) -> dict[str, Any]:
    _project_or_404(project_id)
    kind_list = [item.strip() for item in (kinds or "").split(",") if item.strip()]
    work = Path(store.project_dir(project_id)) / "tmp"
    work.mkdir(parents=True, exist_ok=True)
    saved: list[str] = []
    try:
        for index, upload in enumerate(files):
            name = Path(upload.filename or f"drawing-{index}.pdf").name
            if not name.lower().endswith(".pdf"):
                raise HTTPException(status_code=400, detail=f"{name} 不是 PDF")
            blob = await upload.read()
            if len(blob) > MAX_PDF_BYTES:
                raise HTTPException(status_code=400, detail=f"{name} 超过 15MB")
            tmp = work / name
            tmp.write_bytes(blob)
            kind = kind_list[index] if index < len(kind_list) else None
            saved.append(ingest_document(project_id, tmp, name, kind))
    finally:
        for path in work.glob("*"):
            path.unlink(missing_ok=True)
    return _project_or_404(project_id) | {"uploaded_document_ids": saved}


@router.post("/projects/{project_id}/documents/from-session")
def upload_documents_from_session(
    project_id: str,
    session_id: str = Form(...),
    kinds: str | None = Form(default=None),
) -> dict[str, Any]:
    _project_or_404(project_id)
    kind_list = [item.strip() for item in (kinds or "").split(",") if item.strip()]
    work = Path(store.project_dir(project_id)) / "tmp"
    work.mkdir(parents=True, exist_ok=True)
    saved: list[str] = []
    try:
        assembled = assemble_session(session_id, work)
        for index, item in enumerate(assembled):
            name = str(item["filename"])
            kind = item.get("kind") or (kind_list[index] if index < len(kind_list) else None)
            saved.append(ingest_document(project_id, Path(item["path"]), name, kind))
    finally:
        delete_session(session_id)
        for path in work.glob("*"):
            path.unlink(missing_ok=True)
    return _project_or_404(project_id) | {"uploaded_document_ids": saved}


@router.post("/projects/{project_id}/process")
def post_process(project_id: str) -> dict[str, Any]:
    _project_or_404(project_id)

    def worker(note) -> dict[str, Any]:
        return process_project(project_id, note=note)

    job = jobs.submit(worker, "已排队，开始预检与渲染。")
    return JSONResponse(status_code=202, content=job)


@router.get("/jobs/{job_id}")
def get_estimator_job(job_id: str) -> dict[str, Any]:
    return jobs.get_job(job_id)


@router.get("/projects/{project_id}/documents/{document_id}/pages/{page_number}")
def get_page_image(project_id: str, document_id: str, page_number: int) -> FileResponse:
    project = _project_or_404(project_id)
    drawing = next(
        (
            item
            for item in project.get("drawings") or []
            if item.get("document_id") == document_id and item.get("page_number") == page_number
        ),
        None,
    )
    if not drawing or not drawing.get("rendered_path"):
        raise HTTPException(status_code=404, detail="该页尚未渲染")
    path = Path(drawing["rendered_path"])
    if not path.is_file():
        raise HTTPException(status_code=404, detail="渲染文件不在磁盘上")
    return FileResponse(path, media_type="image/png")


@router.post("/projects/{project_id}/takeoff")
def post_takeoff(project_id: str) -> dict[str, Any]:
    _project_or_404(project_id)
    build_takeoff_and_review(project_id)
    return _project_or_404(project_id)


@router.post("/projects/{project_id}/estimate")
def post_estimate(project_id: str) -> dict[str, Any]:
    _project_or_404(project_id)
    return build_estimate(project_id)


@router.post("/projects/{project_id}/review/{review_id}/{action}")
def post_review(project_id: str, review_id: str, action: str, body: ReviewBody | None = None) -> dict[str, Any]:
    _project_or_404(project_id)
    payload = body or ReviewBody()
    try:
        return apply_review_action(
            project_id,
            review_id,
            action,
            field_name=payload.field_name,
            corrected_value=payload.corrected_value,
            reason_code=payload.reason_code,
            comment=payload.comment,
        )
    except KeyError as exc:
        raise HTTPException(status_code=404, detail="审核项不存在") from exc
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc


@router.post("/projects/{project_id}/evidence/{evidence_id}/correct")
def correct_evidence(project_id: str, evidence_id: str, body: EvidenceCorrectBody) -> dict[str, Any]:
    _project_or_404(project_id)
    original = store.get_evidence(evidence_id)
    if not original or original.project_id != project_id:
        raise HTTPException(status_code=404, detail="证据不存在")
    store.add_evidence(
        {
            "project_id": project_id,
            "document_id": original.document_id,
            "drawing_id": original.drawing_id,
            "page_number": original.page_number,
            "evidence_type": "USER_INPUT",
            "raw_text": original.raw_text,
            "structured_value": original.structured_value,
            "x1": body.x1,
            "y1": body.y1,
            "x2": body.x2,
            "y2": body.y2,
            "extraction_method": "MANUAL",
            "confidence": 1.0,
            "status": "ACTIVE",
        }
    )
    store.add_correction(
        {
            "project_id": project_id,
            "entity_type": "evidence",
            "entity_id": evidence_id,
            "field_name": "bbox",
            "original_value": {"x1": original.x1, "y1": original.y1, "x2": original.x2, "y2": original.y2},
            "corrected_value": {"x1": body.x1, "y1": body.y1, "x2": body.x2, "y2": body.y2},
            "reason_code": body.reason_code,
            "comment": body.comment,
            "evidence_id": evidence_id,
        }
    )
    return _project_or_404(project_id)


@router.get("/evals/574-remuera")
def get_574_eval() -> dict[str, Any]:
    return run_574_eval()
