from __future__ import annotations

from pathlib import Path
from typing import Any

from fastapi import APIRouter, Depends, File, Form, HTTPException, Query, Response, UploadFile
from fastapi.responses import FileResponse, JSONResponse
from pydantic import BaseModel, Field, model_validator

from ..drawing_parse import MAX_PDF_BYTES
from ..identity import PilotIdentity, get_pilot
from ..llm_audit import public_note
from ..upload_chunks import assemble_session, delete_session
from . import jobs, store
from .evals import run_574_eval
from .pipeline import ensure_document_pdf, ingest_document, process_project
from .takeoff import (
    add_manual_takeoff_item,
    apply_review_action,
    build_estimate,
    build_takeoff_and_review,
    correct_takeoff_item,
    diff_estimates,
    export_project,
    quote_lines_csv,
)
from .vision import vision_available, vision_classification_implemented

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


class ExpectedDrawingBody(BaseModel):
    drawing_number: str = Field(min_length=1, max_length=40)
    drawing_title: str | None = Field(default=None, max_length=200)
    revision: str | None = Field(default=None, max_length=20)


class TakeoffCorrectBody(BaseModel):
    quantity: float | None = None
    unit: str | None = None
    scope_code: str | None = None
    reason_code: str = Field(min_length=1, max_length=80)
    comment: str | None = Field(default=None, max_length=2000)

    @model_validator(mode="after")
    def require_editable_field(self) -> TakeoffCorrectBody:
        provided = set(self.model_fields_set) & {"quantity", "unit", "scope_code"}
        if not provided:
            raise ValueError("请至少修正数量、单位或科目")
        return self


class ManualTakeoffBody(BaseModel):
    description: str = Field(min_length=1, max_length=200)
    quantity: float
    unit: str = Field(min_length=1, max_length=20)
    scope_code: str = Field(min_length=1, max_length=8)
    reason_code: str = Field(min_length=1, max_length=80)
    comment: str | None = Field(default=None, max_length=2000)
    sku: str | None = Field(default=None, max_length=80)
    amount: float | None = None
    unit_price: float | None = None

    @model_validator(mode="after")
    def reject_handwritten_money(self) -> ManualTakeoffBody:
        if self.amount is not None or self.unit_price is not None:
            raise ValueError("不能手写金额或单价，金额只走价表")
        return self


MISSING_WORKSPACE = "找不到这个图纸工作区。请从列表重新打开，或重新创建。"


def _owned_or_404(project_id: str, owner_id: str) -> dict[str, Any]:
    try:
        parsed_id = store._parse_project_id(project_id)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    row = store.get_project_row(parsed_id)
    if not row or row.owner_id != owner_id:
        raise HTTPException(status_code=404, detail=MISSING_WORKSPACE)
    record = store.get_project(parsed_id)
    if not record:
        raise HTTPException(status_code=404, detail=MISSING_WORKSPACE)
    return record


@router.get("/ready")
def estimator_ready() -> dict[str, Any]:
    configured = vision_available()
    implemented = vision_classification_implemented()
    if implemented and configured:
        note = (
            "已配置 CPA/OpenAI 密钥。无文字层页会把渲染图送给同一套 chat/completions 识别图号、修订和页类。"
            "Vision 读数进审核，不标已核实，不编造工程量或金额。"
        )
    elif configured:
        note = "已配置视觉密钥，但页分类尚未接到模型，不会读扫描页，图号保持空，不编造。"
    else:
        note = "未配置 CPA_API_KEY 或 OPENAI_API_KEY。无文字层页保持 UNKNOWN，不编造图号或工程量。"
    return {
        "vision": configured,
        "vision_classification_implemented": implemented,
        "note": public_note(note),
    }


@router.post("/projects")
def create_estimator_project(body: CreateBody, pilot: PilotIdentity = Depends(get_pilot)) -> dict[str, Any]:
    return store.create_project(body.name, body.address, owner_id=pilot.owner_id)


@router.get("/projects")
def list_estimator_projects(pilot: PilotIdentity = Depends(get_pilot)) -> dict[str, Any]:
    return {"projects": store.list_projects(pilot.owner_id)}


@router.get("/projects/{project_id}")
def get_estimator_project(project_id: str, pilot: PilotIdentity = Depends(get_pilot)) -> dict[str, Any]:
    return _owned_or_404(project_id, pilot.owner_id)


@router.post("/projects/{project_id}/expected-drawings")
def post_expected_drawing(
    project_id: str,
    body: ExpectedDrawingBody,
    pilot: PilotIdentity = Depends(get_pilot),
) -> dict[str, Any]:
    _owned_or_404(project_id, pilot.owner_id)
    try:
        store.add_expected_manual(
            project_id,
            body.drawing_number,
            body.drawing_title,
            body.revision,
        )
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    return _owned_or_404(project_id, pilot.owner_id)


@router.patch("/projects/{project_id}/expected-drawings/{row_id}")
def patch_expected_drawing(
    project_id: str,
    row_id: str,
    body: ExpectedDrawingBody,
    pilot: PilotIdentity = Depends(get_pilot),
) -> dict[str, Any]:
    _owned_or_404(project_id, pilot.owner_id)
    try:
        store.update_expected_drawing(
            project_id,
            row_id,
            body.drawing_number,
            body.drawing_title,
            body.revision,
        )
    except KeyError as exc:
        raise HTTPException(status_code=404, detail="目录行不存在") from exc
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    return _owned_or_404(project_id, pilot.owner_id)


@router.delete("/projects/{project_id}/expected-drawings/{row_id}")
def delete_expected_drawing(
    project_id: str,
    row_id: str,
    pilot: PilotIdentity = Depends(get_pilot),
) -> dict[str, Any]:
    _owned_or_404(project_id, pilot.owner_id)
    try:
        store.delete_expected_drawing(project_id, row_id)
    except KeyError as exc:
        raise HTTPException(status_code=404, detail="目录行不存在") from exc
    return _owned_or_404(project_id, pilot.owner_id)


def _queue_process(project_id: str, saved: list[str], owner_id: str) -> dict[str, Any]:
    record = _owned_or_404(project_id, owner_id)

    def worker(note) -> dict[str, Any]:
        return process_project(project_id, note=note)

    job = jobs.submit(worker, "已排队，开始预检与渲染。", owner_id=owner_id)
    return {
        "job_id": job["job_id"],
        "job_status": job.get("status"),
        "note": job.get("note"),
        "uploaded_document_ids": saved,
        "project": record,
    }


@router.post("/projects/{project_id}/documents")
async def upload_documents(
    project_id: str,
    files: list[UploadFile] = File(...),
    kinds: str | None = Form(default=None),
    workspace_name: str | None = Form(default=None),
    workspace_address: str | None = Form(default=None),
    pilot: PilotIdentity = Depends(get_pilot),
) -> JSONResponse:
    del workspace_name, workspace_address
    _owned_or_404(project_id, pilot.owner_id)
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
    return JSONResponse(status_code=202, content=_queue_process(project_id, saved, pilot.owner_id))


@router.post("/projects/{project_id}/documents/from-session")
def upload_documents_from_session(
    project_id: str,
    session_id: str = Form(...),
    kinds: str | None = Form(default=None),
    workspace_name: str | None = Form(default=None),
    workspace_address: str | None = Form(default=None),
    pilot: PilotIdentity = Depends(get_pilot),
) -> JSONResponse:
    del workspace_name, workspace_address
    _owned_or_404(project_id, pilot.owner_id)
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
    return JSONResponse(status_code=202, content=_queue_process(project_id, saved, pilot.owner_id))


@router.post("/projects/{project_id}/process")
def post_process(project_id: str, pilot: PilotIdentity = Depends(get_pilot)) -> JSONResponse:
    _owned_or_404(project_id, pilot.owner_id)

    def worker(note) -> dict[str, Any]:
        return process_project(project_id, note=note)

    job = jobs.submit(worker, "已排队，开始预检与渲染。", owner_id=pilot.owner_id)
    return JSONResponse(status_code=202, content=job)


@router.get("/jobs/{job_id}")
def get_estimator_job(job_id: str, pilot: PilotIdentity = Depends(get_pilot)) -> dict[str, Any]:
    return jobs.get_job(job_id, owner_id=pilot.owner_id)


@router.get("/projects/{project_id}/documents/{document_id}/pages/{page_number}")
def get_page_image(
    project_id: str,
    document_id: str,
    page_number: int,
    pilot: PilotIdentity = Depends(get_pilot),
) -> FileResponse:
    project = _owned_or_404(project_id, pilot.owner_id)
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
        document = store.get_document(document_id)
        if not document or document.project_id != project_id:
            raise HTTPException(status_code=404, detail="图纸文件不存在")
        try:
            pdf_path = ensure_document_pdf(document)
        except FileNotFoundError as exc:
            raise HTTPException(status_code=404, detail=str(exc)) from exc
        from .enums import RENDER_DPI
        from .pdf import render_page_png

        path.parent.mkdir(parents=True, exist_ok=True)
        render_page_png(pdf_path, page_number, path, dpi=RENDER_DPI)
    if not path.is_file():
        raise HTTPException(status_code=404, detail="渲染文件不在磁盘上")
    return FileResponse(path, media_type="image/png")


@router.post("/projects/{project_id}/takeoff")
def post_takeoff(project_id: str, pilot: PilotIdentity = Depends(get_pilot)) -> dict[str, Any]:
    _owned_or_404(project_id, pilot.owner_id)
    build_takeoff_and_review(project_id)
    return _owned_or_404(project_id, pilot.owner_id)


@router.post("/projects/{project_id}/takeoff/manual")
def post_manual_takeoff(
    project_id: str,
    body: ManualTakeoffBody,
    pilot: PilotIdentity = Depends(get_pilot),
) -> dict[str, Any]:
    _owned_or_404(project_id, pilot.owner_id)
    try:
        return add_manual_takeoff_item(
            project_id,
            description=body.description,
            quantity=body.quantity,
            unit=body.unit,
            scope_code=body.scope_code,
            reason_code=body.reason_code,
            comment=body.comment,
            sku=body.sku,
        )
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc


@router.post("/projects/{project_id}/takeoff/{item_id}/correct")
def post_takeoff_correct(
    project_id: str,
    item_id: str,
    body: TakeoffCorrectBody,
    pilot: PilotIdentity = Depends(get_pilot),
) -> dict[str, Any]:
    _owned_or_404(project_id, pilot.owner_id)
    fields: dict[str, Any] = {}
    if "quantity" in body.model_fields_set:
        fields["quantity"] = body.quantity
    if body.unit is not None:
        fields["unit"] = body.unit
    if body.scope_code is not None:
        fields["scope_code"] = body.scope_code
    try:
        return correct_takeoff_item(
            project_id,
            item_id,
            fields=fields,
            reason_code=body.reason_code,
            comment=body.comment,
        )
    except KeyError as exc:
        raise HTTPException(status_code=404, detail="取量项不存在") from exc
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc


@router.post("/projects/{project_id}/estimate")
def post_estimate(project_id: str, pilot: PilotIdentity = Depends(get_pilot)) -> dict[str, Any]:
    record = _owned_or_404(project_id, pilot.owner_id)
    if not record.get("documents"):
        raise HTTPException(status_code=409, detail="尚未上传图纸，不能生成报价。")
    if record.get("status") != "READY":
        raise HTTPException(status_code=409, detail="图纸尚未解析完成，不能生成报价。")
    return build_estimate(project_id)


@router.get("/projects/{project_id}/estimates/{estimate_id}")
def get_estimate_version(
    project_id: str,
    estimate_id: str,
    pilot: PilotIdentity = Depends(get_pilot),
) -> dict[str, Any]:
    _owned_or_404(project_id, pilot.owner_id)
    estimate = store.get_saved_estimate(project_id, estimate_id)
    if not estimate:
        raise HTTPException(status_code=404, detail="报价版本不存在")
    return {"estimate": estimate}


@router.get("/projects/{project_id}/estimates/{estimate_id}/diff")
def get_estimate_diff(
    project_id: str,
    estimate_id: str,
    against: str = Query(..., min_length=8),
    pilot: PilotIdentity = Depends(get_pilot),
) -> dict[str, Any]:
    _owned_or_404(project_id, pilot.owner_id)
    try:
        return diff_estimates(project_id, estimate_id, against)
    except KeyError as exc:
        raise HTTPException(status_code=404, detail="报价版本不存在") from exc


@router.get("/projects/{project_id}/export")
def get_export(
    project_id: str,
    estimate_id: str | None = None,
    export_format: str = Query("json", alias="format"),
    pilot: PilotIdentity = Depends(get_pilot),
) -> Response:
    _owned_or_404(project_id, pilot.owner_id)
    try:
        payload = export_project(project_id, estimate_id)
    except KeyError as exc:
        raise HTTPException(status_code=404, detail="报价版本不存在") from exc
    estimate = payload.get("estimate")
    if export_format == "csv":
        if not estimate:
            raise HTTPException(status_code=409, detail="还没有可导出的报价版本。")
        csv_text = quote_lines_csv(estimate)
        filename = f"estimator-{project_id[:8]}-v{estimate.get('version')}.csv"
        return Response(
            content=csv_text,
            media_type="text/csv; charset=utf-8",
            headers={"Content-Disposition": f'attachment; filename="{filename}"'},
        )
    return JSONResponse(payload)


@router.post("/projects/{project_id}/review/{review_id}/{action}")
def post_review(
    project_id: str,
    review_id: str,
    action: str,
    body: ReviewBody | None = None,
    pilot: PilotIdentity = Depends(get_pilot),
) -> dict[str, Any]:
    _owned_or_404(project_id, pilot.owner_id)
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
def correct_evidence(
    project_id: str,
    evidence_id: str,
    body: EvidenceCorrectBody,
    pilot: PilotIdentity = Depends(get_pilot),
) -> dict[str, Any]:
    _owned_or_404(project_id, pilot.owner_id)
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
    return _owned_or_404(project_id, pilot.owner_id)


@router.get("/evals/574-remuera")
def get_574_eval() -> dict[str, Any]:
    return run_574_eval()
