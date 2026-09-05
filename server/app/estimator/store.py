from __future__ import annotations

import json
import uuid
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

from sqlalchemy import select

from ..data_loader import pricebook
from ..runtime_paths import writable_root
from ..store import session
from .models import (
    EstimatorCorrectionEvent,
    EstimatorDocument,
    EstimatorDrawing,
    EstimatorDrawingReference,
    EstimatorEstimate,
    EstimatorEvidence,
    EstimatorExpectedDrawing,
    EstimatorProject,
    EstimatorQuoteLine,
    EstimatorReviewItem,
    EstimatorTakeoffItem,
)

DATA_DIR = writable_root() / "estimator"


def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


def new_id() -> str:
    return str(uuid.uuid4())


def project_dir(project_id: str) -> Path:
    path = DATA_DIR / project_id
    path.mkdir(parents=True, exist_ok=True)
    return path


def create_project(name: str, address: str | None = None) -> dict[str, Any]:
    project_id = new_id()
    created = now_iso()
    with session() as db:
        db.add(
            EstimatorProject(
                id=project_id,
                name=name.strip() or "未命名图纸项目",
                address=(address or "").strip() or None,
                created_at=created,
                status="UPLOADED",
                document_set_version=1,
            )
        )
        db.commit()
    return get_project(project_id) or {"id": project_id}


def list_projects() -> list[dict[str, Any]]:
    with session() as db:
        rows = db.scalars(select(EstimatorProject).order_by(EstimatorProject.created_at.desc())).all()
    return [
        {
            "id": row.id,
            "name": row.name,
            "address": row.address,
            "created_at": row.created_at,
            "status": row.status,
            "document_set_version": row.document_set_version,
        }
        for row in rows
    ]


def get_project_row(project_id: str) -> EstimatorProject | None:
    with session() as db:
        return db.get(EstimatorProject, project_id)


def add_document(
    project_id: str,
    *,
    filename: str,
    kind: str,
    sha256: str,
    stored_path: str,
    page_count: int,
    has_text_layer: bool,
    processing_mode: str,
    payload: dict[str, Any],
) -> str:
    document_id = new_id()
    with session() as db:
        project = db.get(EstimatorProject, project_id)
        if not project:
            raise KeyError(project_id)
        project.document_set_version = int(project.document_set_version or 1) + 1
        db.add(
            EstimatorDocument(
                id=document_id,
                project_id=project_id,
                filename=filename,
                kind=kind,
                sha256=sha256,
                stored_path=stored_path,
                page_count=page_count,
                has_text_layer=1 if has_text_layer else 0,
                processing_mode=processing_mode,
                status="UPLOADED",
                payload=payload,
            )
        )
        db.commit()
    return document_id


def set_document_status(document_id: str, status: str, error_message: str | None = None) -> None:
    with session() as db:
        row = db.get(EstimatorDocument, document_id)
        if not row:
            return
        row.status = status
        row.error_message = error_message
        db.commit()


def set_project_status(project_id: str, status: str) -> None:
    with session() as db:
        row = db.get(EstimatorProject, project_id)
        if not row:
            return
        row.status = status
        db.commit()


def replace_document_pages(document_id: str, drawings: list[dict[str, Any]]) -> None:
    with session() as db:
        doc = db.get(EstimatorDocument, document_id)
        if not doc:
            return
        existing = db.scalars(select(EstimatorDrawing).where(EstimatorDrawing.document_id == document_id)).all()
        for row in existing:
            db.delete(row)
        for item in drawings:
            db.add(
                EstimatorDrawing(
                    id=item["id"],
                    project_id=doc.project_id,
                    document_id=document_id,
                    page_number=item["page_number"],
                    discipline=item.get("discipline") or "UNKNOWN",
                    page_type=item.get("page_type") or "UNKNOWN",
                    drawing_number=item.get("drawing_number"),
                    drawing_title=item.get("drawing_title"),
                    revision=item.get("revision"),
                    issue_status=item.get("issue_status"),
                    scale=item.get("scale"),
                    rotation_deg=int(item.get("rotation_deg") or 0),
                    confidence=float(item.get("confidence") or 0),
                    rendered_path=item.get("rendered_path"),
                    native_text=item.get("native_text") or "",
                    payload=item.get("payload") or {},
                )
            )
        db.commit()


def replace_expected(project_id: str, document_id: str, rows: list[dict[str, Any]]) -> None:
    with session() as db:
        old = db.scalars(
            select(EstimatorExpectedDrawing).where(
                EstimatorExpectedDrawing.project_id == project_id,
                EstimatorExpectedDrawing.document_id == document_id,
            )
        ).all()
        for item in old:
            db.delete(item)
        for row in rows:
            db.add(
                EstimatorExpectedDrawing(
                    id=new_id(),
                    project_id=project_id,
                    document_id=document_id,
                    drawing_number=str(row["drawing_number"]),
                    drawing_title=row.get("drawing_title"),
                    revision=row.get("revision"),
                    source="index",
                )
            )
        db.commit()


def replace_references(project_id: str, source_drawing_id: str, rows: list[dict[str, Any]]) -> None:
    with session() as db:
        old = db.scalars(
            select(EstimatorDrawingReference).where(
                EstimatorDrawingReference.source_drawing_id == source_drawing_id
            )
        ).all()
        for item in old:
            db.delete(item)
        for row in rows:
            db.add(
                EstimatorDrawingReference(
                    id=new_id(),
                    project_id=project_id,
                    source_drawing_id=source_drawing_id,
                    target_number=row["target_number"],
                    found=1 if row.get("found") else 0,
                    raw_text=row.get("raw_text"),
                )
            )
        db.commit()


def add_evidence(row: dict[str, Any]) -> str:
    evidence_id = row.get("id") or new_id()
    with session() as db:
        db.add(
            EstimatorEvidence(
                id=evidence_id,
                project_id=row["project_id"],
                document_id=row.get("document_id"),
                drawing_id=row.get("drawing_id"),
                page_number=int(row.get("page_number") or 1),
                evidence_type=row["evidence_type"],
                raw_text=row.get("raw_text") or "",
                structured_value=row.get("structured_value") or {},
                x1=float(row.get("x1") or 0),
                y1=float(row.get("y1") or 0),
                x2=float(row.get("x2") or 0),
                y2=float(row.get("y2") or 0),
                extraction_method=row["extraction_method"],
                model_provider=row.get("model_provider"),
                model_name=row.get("model_name"),
                prompt_version=row.get("prompt_version"),
                confidence=float(row.get("confidence") or 0),
                status=row.get("status") or "ACTIVE",
                created_at=row.get("created_at") or now_iso(),
            )
        )
        db.commit()
    return evidence_id


def replace_takeoff(project_id: str, items: list[dict[str, Any]]) -> None:
    with session() as db:
        old = db.scalars(select(EstimatorTakeoffItem).where(EstimatorTakeoffItem.project_id == project_id)).all()
        for item in old:
            db.delete(item)
        for item in items:
            db.add(
                EstimatorTakeoffItem(
                    id=item["id"],
                    project_id=project_id,
                    scope_code=item["scope_code"],
                    description=item["description"],
                    quantity=item.get("quantity"),
                    unit=item["unit"],
                    status=item["status"],
                    confidence=float(item.get("confidence") or 0),
                    source_method=item["source_method"],
                    calculation_formula=item.get("calculation_formula"),
                    calculation_inputs=item.get("calculation_inputs") or {},
                    evidence_ids=item.get("evidence_ids") or [],
                    sku=item.get("sku"),
                    created_at=item.get("created_at") or now_iso(),
                )
            )
        db.commit()


def replace_review(project_id: str, items: list[dict[str, Any]]) -> None:
    with session() as db:
        old = db.scalars(select(EstimatorReviewItem).where(EstimatorReviewItem.project_id == project_id)).all()
        for item in old:
            db.delete(item)
        for item in items:
            db.add(
                EstimatorReviewItem(
                    id=item["id"],
                    project_id=project_id,
                    entity_type=item["entity_type"],
                    entity_id=item["entity_id"],
                    queue_status=item["queue_status"],
                    reason_code=item["reason_code"],
                    payload=item.get("payload") or {},
                    created_at=item.get("created_at") or now_iso(),
                )
            )
        db.commit()


def add_correction(row: dict[str, Any]) -> str:
    event_id = new_id()
    with session() as db:
        db.add(
            EstimatorCorrectionEvent(
                id=event_id,
                project_id=row["project_id"],
                entity_type=row["entity_type"],
                entity_id=row["entity_id"],
                field_name=row["field_name"],
                original_value=json.dumps(row.get("original_value"), ensure_ascii=False),
                corrected_value=json.dumps(row.get("corrected_value"), ensure_ascii=False),
                reason_code=row["reason_code"],
                comment=row.get("comment"),
                evidence_id=row.get("evidence_id"),
                created_at=now_iso(),
            )
        )
        db.commit()
    return event_id


def save_estimate(project_id: str, payload: dict[str, Any], lines: list[dict[str, Any]]) -> str:
    estimate_id = new_id()
    with session() as db:
        project = db.get(EstimatorProject, project_id)
        if not project:
            raise KeyError(project_id)
        previous = db.scalars(
            select(EstimatorEstimate)
            .where(EstimatorEstimate.project_id == project_id)
            .order_by(EstimatorEstimate.version.desc())
        ).first()
        version = (previous.version + 1) if previous else 1
        db.add(
            EstimatorEstimate(
                id=estimate_id,
                project_id=project_id,
                version=version,
                document_set_version=project.document_set_version,
                pricebook_version=payload.get("pricebook_version"),
                expected_total=float(payload.get("expected_total") or 0),
                range_low=float(payload.get("range_low") or 0),
                range_high=float(payload.get("range_high") or 0),
                scope_completeness=float(payload.get("scope_completeness") or 0),
                pricing_completeness=float(payload.get("pricing_completeness") or 0),
                reliability=str(payload.get("reliability") or "LOW"),
                payload=payload,
                created_at=now_iso(),
            )
        )
        for line in lines:
            db.add(
                EstimatorQuoteLine(
                    id=line["id"],
                    estimate_id=estimate_id,
                    takeoff_id=line.get("takeoff_id"),
                    scope_code=line["scope_code"],
                    description=line["description"],
                    quantity=line.get("quantity"),
                    unit=line["unit"],
                    rate_id=line.get("rate_id"),
                    amount_incl_gst=float(line.get("amount_incl_gst") or 0),
                    status=line["status"],
                    payload=line.get("payload") or {},
                )
            )
        db.commit()
    return estimate_id


def get_review_item(item_id: str) -> EstimatorReviewItem | None:
    with session() as db:
        return db.get(EstimatorReviewItem, item_id)


def get_takeoff_item(item_id: str) -> EstimatorTakeoffItem | None:
    with session() as db:
        return db.get(EstimatorTakeoffItem, item_id)


def get_evidence(item_id: str) -> EstimatorEvidence | None:
    with session() as db:
        return db.get(EstimatorEvidence, item_id)


def get_document(document_id: str) -> EstimatorDocument | None:
    with session() as db:
        return db.get(EstimatorDocument, document_id)


def get_drawing(drawing_id: str) -> EstimatorDrawing | None:
    with session() as db:
        return db.get(EstimatorDrawing, drawing_id)


def update_review_status(item_id: str, queue_status: str) -> None:
    with session() as db:
        row = db.get(EstimatorReviewItem, item_id)
        if not row:
            return
        row.queue_status = queue_status
        db.commit()


def update_takeoff_fields(item_id: str, fields: dict[str, Any]) -> None:
    with session() as db:
        row = db.get(EstimatorTakeoffItem, item_id)
        if not row:
            return
        for key, value in fields.items():
            if hasattr(row, key):
                setattr(row, key, value)
        db.commit()


def update_evidence_bbox(item_id: str, x1: float, y1: float, x2: float, y2: float) -> None:
    with session() as db:
        row = db.get(EstimatorEvidence, item_id)
        if not row:
            return
        row.x1, row.y1, row.x2, row.y2 = x1, y1, x2, y2
        db.commit()


def update_drawing_field(drawing_id: str, field_name: str, value: Any) -> None:
    with session() as db:
        row = db.get(EstimatorDrawing, drawing_id)
        if not row:
            return
        if hasattr(row, field_name):
            setattr(row, field_name, value)
        db.commit()


def assemble_project(project_id: str) -> dict[str, Any] | None:
    with session() as db:
        project = db.get(EstimatorProject, project_id)
        if not project:
            return None
        documents = db.scalars(
            select(EstimatorDocument).where(EstimatorDocument.project_id == project_id)
        ).all()
        drawings = db.scalars(
            select(EstimatorDrawing)
            .where(EstimatorDrawing.project_id == project_id)
            .order_by(EstimatorDrawing.page_number)
        ).all()
        expected = db.scalars(
            select(EstimatorExpectedDrawing).where(EstimatorExpectedDrawing.project_id == project_id)
        ).all()
        refs = db.scalars(
            select(EstimatorDrawingReference).where(EstimatorDrawingReference.project_id == project_id)
        ).all()
        evidence = db.scalars(
            select(EstimatorEvidence).where(EstimatorEvidence.project_id == project_id)
        ).all()
        takeoff = db.scalars(
            select(EstimatorTakeoffItem).where(EstimatorTakeoffItem.project_id == project_id)
        ).all()
        review = db.scalars(
            select(EstimatorReviewItem).where(EstimatorReviewItem.project_id == project_id)
        ).all()
        corrections = db.scalars(
            select(EstimatorCorrectionEvent)
            .where(EstimatorCorrectionEvent.project_id == project_id)
            .order_by(EstimatorCorrectionEvent.created_at)
        ).all()
        estimates = db.scalars(
            select(EstimatorEstimate)
            .where(EstimatorEstimate.project_id == project_id)
            .order_by(EstimatorEstimate.version.desc())
        ).all()
        latest = estimates[0] if estimates else None
        quote_lines = []
        if latest:
            quote_lines = db.scalars(
                select(EstimatorQuoteLine).where(EstimatorQuoteLine.estimate_id == latest.id)
            ).all()

        supplied = [row.drawing_number for row in drawings if row.drawing_number]
        missing_refs = [row for row in refs if not row.found]
        discipline_health: dict[str, str] = {}
        for row in drawings:
            discipline_health[row.discipline] = "Available"
        for kind in ("ARCHITECTURAL", "STRUCTURAL", "CIVIL", "PLUMBING", "ELECTRICAL", "MECHANICAL"):
            if kind not in discipline_health:
                discipline_health[kind] = "NONE"

        auto = sum(1 for item in review if item.queue_status == "AUTO_ACCEPTED")
        needs = sum(1 for item in review if item.queue_status == "NEEDS_REVIEW")
        unresolved = sum(1 for item in review if item.queue_status == "UNRESOLVED")

        return {
            "id": project.id,
            "name": project.name,
            "address": project.address,
            "created_at": project.created_at,
            "status": project.status,
            "document_set_version": project.document_set_version,
            "pricebook_version": (pricebook() or {}).get("version"),
            "document_health": discipline_health,
            "review_counts": {
                "AUTO_ACCEPTED": auto,
                "NEEDS_REVIEW": needs,
                "UNRESOLVED": unresolved,
            },
            "documents": [
                {
                    "id": row.id,
                    "filename": row.filename,
                    "kind": row.kind,
                    "sha256": row.sha256,
                    "page_count": row.page_count,
                    "has_text_layer": bool(row.has_text_layer),
                    "processing_mode": row.processing_mode,
                    "status": row.status,
                    "error_message": row.error_message,
                    "payload": row.payload,
                }
                for row in documents
            ],
            "drawings": [_drawing_dict(row) for row in drawings],
            "expected_drawings": [
                {
                    "id": row.id,
                    "drawing_number": row.drawing_number,
                    "drawing_title": row.drawing_title,
                    "revision": row.revision,
                    "source": row.source,
                    "document_id": row.document_id,
                }
                for row in expected
            ],
            "supplied_drawing_numbers": supplied,
            "references": [
                {
                    "id": row.id,
                    "source_drawing_id": row.source_drawing_id,
                    "target_number": row.target_number,
                    "found": bool(row.found),
                    "raw_text": row.raw_text,
                }
                for row in refs
            ],
            "missing_references": [
                {
                    "id": row.id,
                    "source_drawing_id": row.source_drawing_id,
                    "target_number": row.target_number,
                    "raw_text": row.raw_text,
                }
                for row in missing_refs
            ],
            "evidence": [_evidence_dict(row) for row in evidence],
            "takeoff": [_takeoff_dict(row) for row in takeoff],
            "review": [_review_dict(row) for row in review],
            "correction_events": [
                {
                    "id": row.id,
                    "entity_type": row.entity_type,
                    "entity_id": row.entity_id,
                    "field_name": row.field_name,
                    "original_value": row.original_value,
                    "corrected_value": row.corrected_value,
                    "reason_code": row.reason_code,
                    "comment": row.comment,
                    "created_at": row.created_at,
                }
                for row in corrections
            ],
            "estimate": _estimate_dict(latest, quote_lines) if latest else None,
            "estimate_versions": [
                {
                    "id": row.id,
                    "version": row.version,
                    "document_set_version": row.document_set_version,
                    "pricebook_version": row.pricebook_version,
                    "expected_total": row.expected_total,
                    "created_at": row.created_at,
                }
                for row in estimates
            ],
        }


def get_project(project_id: str) -> dict[str, Any] | None:
    return assemble_project(project_id)


def _drawing_dict(row: EstimatorDrawing) -> dict[str, Any]:
    return {
        "id": row.id,
        "document_id": row.document_id,
        "page_number": row.page_number,
        "discipline": row.discipline,
        "page_type": row.page_type,
        "drawing_number": row.drawing_number,
        "drawing_title": row.drawing_title,
        "revision": row.revision,
        "issue_status": row.issue_status,
        "scale": row.scale,
        "rotation_deg": row.rotation_deg,
        "confidence": row.confidence,
        "rendered_path": row.rendered_path,
        "native_text": row.native_text,
        "payload": row.payload,
    }


def _evidence_dict(row: EstimatorEvidence) -> dict[str, Any]:
    return {
        "id": row.id,
        "document_id": row.document_id,
        "drawing_id": row.drawing_id,
        "page_number": row.page_number,
        "evidence_type": row.evidence_type,
        "raw_text": row.raw_text,
        "structured_value": row.structured_value,
        "bbox": {"x1": row.x1, "y1": row.y1, "x2": row.x2, "y2": row.y2},
        "extraction_method": row.extraction_method,
        "confidence": row.confidence,
        "status": row.status,
        "created_at": row.created_at,
    }


def _takeoff_dict(row: EstimatorTakeoffItem) -> dict[str, Any]:
    return {
        "id": row.id,
        "scope_code": row.scope_code,
        "description": row.description,
        "quantity": row.quantity,
        "unit": row.unit,
        "status": row.status,
        "confidence": row.confidence,
        "source_method": row.source_method,
        "calculation_formula": row.calculation_formula,
        "calculation_inputs": row.calculation_inputs,
        "evidence_ids": row.evidence_ids,
        "sku": row.sku,
        "created_at": row.created_at,
    }


def _review_dict(row: EstimatorReviewItem) -> dict[str, Any]:
    return {
        "id": row.id,
        "entity_type": row.entity_type,
        "entity_id": row.entity_id,
        "queue_status": row.queue_status,
        "reason_code": row.reason_code,
        "payload": row.payload,
        "created_at": row.created_at,
    }


def _estimate_dict(row: EstimatorEstimate, lines: list[EstimatorQuoteLine]) -> dict[str, Any]:
    return {
        "id": row.id,
        "version": row.version,
        "document_set_version": row.document_set_version,
        "pricebook_version": row.pricebook_version,
        "expected_total": row.expected_total,
        "range_low": row.range_low,
        "range_high": row.range_high,
        "scope_completeness": row.scope_completeness,
        "pricing_completeness": row.pricing_completeness,
        "reliability": row.reliability,
        "payload": row.payload,
        "created_at": row.created_at,
        "quote_lines": [
            {
                "id": line.id,
                "takeoff_id": line.takeoff_id,
                "scope_code": line.scope_code,
                "description": line.description,
                "quantity": line.quantity,
                "unit": line.unit,
                "rate_id": line.rate_id,
                "amount_incl_gst": line.amount_incl_gst,
                "status": line.status,
                "payload": line.payload,
            }
            for line in lines
        ],
    }
