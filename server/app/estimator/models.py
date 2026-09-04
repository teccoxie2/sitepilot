from __future__ import annotations

from typing import Any

from sqlalchemy import Float, ForeignKey, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.types import JSON

from ..models import Base


class EstimatorProject(Base):
    __tablename__ = "estimator_projects"

    id: Mapped[str] = mapped_column(String, primary_key=True)
    name: Mapped[str] = mapped_column(String, nullable=False)
    address: Mapped[str | None] = mapped_column(String, nullable=True)
    created_at: Mapped[str] = mapped_column(String, nullable=False)
    status: Mapped[str] = mapped_column(String, nullable=False)
    document_set_version: Mapped[int] = mapped_column(Integer, nullable=False, default=1)

    documents: Mapped[list[EstimatorDocument]] = relationship(back_populates="project")


class EstimatorDocument(Base):
    __tablename__ = "estimator_documents"

    id: Mapped[str] = mapped_column(String, primary_key=True)
    project_id: Mapped[str] = mapped_column(ForeignKey("estimator_projects.id"), nullable=False, index=True)
    filename: Mapped[str] = mapped_column(String, nullable=False)
    kind: Mapped[str] = mapped_column(String, nullable=False, default="UNKNOWN")
    sha256: Mapped[str] = mapped_column(String, nullable=False)
    stored_path: Mapped[str] = mapped_column(String, nullable=False)
    page_count: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    has_text_layer: Mapped[bool] = mapped_column(Integer, nullable=False, default=0)
    processing_mode: Mapped[str] = mapped_column(String, nullable=False, default="unknown")
    status: Mapped[str] = mapped_column(String, nullable=False, default="UPLOADED")
    error_message: Mapped[str | None] = mapped_column(Text, nullable=True)
    payload: Mapped[dict[str, Any]] = mapped_column(JSON, nullable=False, default=dict)

    project: Mapped[EstimatorProject] = relationship(back_populates="documents")


class EstimatorDrawing(Base):
    __tablename__ = "estimator_drawings"

    id: Mapped[str] = mapped_column(String, primary_key=True)
    project_id: Mapped[str] = mapped_column(ForeignKey("estimator_projects.id"), nullable=False, index=True)
    document_id: Mapped[str] = mapped_column(ForeignKey("estimator_documents.id"), nullable=False, index=True)
    page_number: Mapped[int] = mapped_column(Integer, nullable=False)
    discipline: Mapped[str] = mapped_column(String, nullable=False, default="UNKNOWN")
    page_type: Mapped[str] = mapped_column(String, nullable=False, default="UNKNOWN")
    drawing_number: Mapped[str | None] = mapped_column(String, nullable=True)
    drawing_title: Mapped[str | None] = mapped_column(String, nullable=True)
    revision: Mapped[str | None] = mapped_column(String, nullable=True)
    issue_status: Mapped[str | None] = mapped_column(String, nullable=True)
    scale: Mapped[str | None] = mapped_column(String, nullable=True)
    rotation_deg: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    confidence: Mapped[float] = mapped_column(Float, nullable=False, default=0.0)
    rendered_path: Mapped[str | None] = mapped_column(String, nullable=True)
    native_text: Mapped[str] = mapped_column(Text, nullable=False, default="")
    payload: Mapped[dict[str, Any]] = mapped_column(JSON, nullable=False, default=dict)


class EstimatorExpectedDrawing(Base):
    __tablename__ = "estimator_expected_drawings"

    id: Mapped[str] = mapped_column(String, primary_key=True)
    project_id: Mapped[str] = mapped_column(ForeignKey("estimator_projects.id"), nullable=False, index=True)
    document_id: Mapped[str | None] = mapped_column(String, nullable=True)
    drawing_number: Mapped[str] = mapped_column(String, nullable=False)
    drawing_title: Mapped[str | None] = mapped_column(String, nullable=True)
    revision: Mapped[str | None] = mapped_column(String, nullable=True)
    source: Mapped[str] = mapped_column(String, nullable=False, default="index")


class EstimatorDrawingReference(Base):
    __tablename__ = "estimator_drawing_references"

    id: Mapped[str] = mapped_column(String, primary_key=True)
    project_id: Mapped[str] = mapped_column(ForeignKey("estimator_projects.id"), nullable=False, index=True)
    source_drawing_id: Mapped[str] = mapped_column(String, nullable=False)
    target_number: Mapped[str] = mapped_column(String, nullable=False)
    found: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    raw_text: Mapped[str | None] = mapped_column(String, nullable=True)


class EstimatorEvidence(Base):
    __tablename__ = "estimator_evidence"

    id: Mapped[str] = mapped_column(String, primary_key=True)
    project_id: Mapped[str] = mapped_column(ForeignKey("estimator_projects.id"), nullable=False, index=True)
    document_id: Mapped[str | None] = mapped_column(String, nullable=True)
    drawing_id: Mapped[str | None] = mapped_column(String, nullable=True)
    page_number: Mapped[int] = mapped_column(Integer, nullable=False, default=1)
    evidence_type: Mapped[str] = mapped_column(String, nullable=False)
    raw_text: Mapped[str] = mapped_column(Text, nullable=False, default="")
    structured_value: Mapped[dict[str, Any]] = mapped_column(JSON, nullable=False, default=dict)
    x1: Mapped[float] = mapped_column(Float, nullable=False, default=0.0)
    y1: Mapped[float] = mapped_column(Float, nullable=False, default=0.0)
    x2: Mapped[float] = mapped_column(Float, nullable=False, default=0.0)
    y2: Mapped[float] = mapped_column(Float, nullable=False, default=0.0)
    extraction_method: Mapped[str] = mapped_column(String, nullable=False)
    model_provider: Mapped[str | None] = mapped_column(String, nullable=True)
    model_name: Mapped[str | None] = mapped_column(String, nullable=True)
    prompt_version: Mapped[str | None] = mapped_column(String, nullable=True)
    confidence: Mapped[float] = mapped_column(Float, nullable=False, default=0.0)
    status: Mapped[str] = mapped_column(String, nullable=False, default="ACTIVE")
    created_at: Mapped[str] = mapped_column(String, nullable=False)


class EstimatorTakeoffItem(Base):
    __tablename__ = "estimator_takeoff_items"

    id: Mapped[str] = mapped_column(String, primary_key=True)
    project_id: Mapped[str] = mapped_column(ForeignKey("estimator_projects.id"), nullable=False, index=True)
    scope_code: Mapped[str] = mapped_column(String, nullable=False)
    description: Mapped[str] = mapped_column(String, nullable=False)
    quantity: Mapped[float | None] = mapped_column(Float, nullable=True)
    unit: Mapped[str] = mapped_column(String, nullable=False)
    status: Mapped[str] = mapped_column(String, nullable=False)
    confidence: Mapped[float] = mapped_column(Float, nullable=False, default=0.0)
    source_method: Mapped[str] = mapped_column(String, nullable=False)
    calculation_formula: Mapped[str | None] = mapped_column(String, nullable=True)
    calculation_inputs: Mapped[dict[str, Any]] = mapped_column(JSON, nullable=False, default=dict)
    evidence_ids: Mapped[list[str]] = mapped_column(JSON, nullable=False, default=list)
    sku: Mapped[str | None] = mapped_column(String, nullable=True)
    created_at: Mapped[str] = mapped_column(String, nullable=False)


class EstimatorReviewItem(Base):
    __tablename__ = "estimator_review_items"

    id: Mapped[str] = mapped_column(String, primary_key=True)
    project_id: Mapped[str] = mapped_column(ForeignKey("estimator_projects.id"), nullable=False, index=True)
    entity_type: Mapped[str] = mapped_column(String, nullable=False)
    entity_id: Mapped[str] = mapped_column(String, nullable=False)
    queue_status: Mapped[str] = mapped_column(String, nullable=False)
    reason_code: Mapped[str] = mapped_column(String, nullable=False)
    payload: Mapped[dict[str, Any]] = mapped_column(JSON, nullable=False, default=dict)
    created_at: Mapped[str] = mapped_column(String, nullable=False)


class EstimatorCorrectionEvent(Base):
    __tablename__ = "estimator_correction_events"

    id: Mapped[str] = mapped_column(String, primary_key=True)
    project_id: Mapped[str] = mapped_column(ForeignKey("estimator_projects.id"), nullable=False, index=True)
    entity_type: Mapped[str] = mapped_column(String, nullable=False)
    entity_id: Mapped[str] = mapped_column(String, nullable=False)
    field_name: Mapped[str] = mapped_column(String, nullable=False)
    original_value: Mapped[str] = mapped_column(Text, nullable=False)
    corrected_value: Mapped[str] = mapped_column(Text, nullable=False)
    reason_code: Mapped[str] = mapped_column(String, nullable=False)
    comment: Mapped[str | None] = mapped_column(Text, nullable=True)
    evidence_id: Mapped[str | None] = mapped_column(String, nullable=True)
    created_at: Mapped[str] = mapped_column(String, nullable=False)


class EstimatorEstimate(Base):
    __tablename__ = "estimator_estimates"

    id: Mapped[str] = mapped_column(String, primary_key=True)
    project_id: Mapped[str] = mapped_column(ForeignKey("estimator_projects.id"), nullable=False, index=True)
    version: Mapped[int] = mapped_column(Integer, nullable=False)
    document_set_version: Mapped[int] = mapped_column(Integer, nullable=False)
    pricebook_version: Mapped[str | None] = mapped_column(String, nullable=True)
    expected_total: Mapped[float] = mapped_column(Float, nullable=False, default=0.0)
    range_low: Mapped[float] = mapped_column(Float, nullable=False, default=0.0)
    range_high: Mapped[float] = mapped_column(Float, nullable=False, default=0.0)
    scope_completeness: Mapped[float] = mapped_column(Float, nullable=False, default=0.0)
    pricing_completeness: Mapped[float] = mapped_column(Float, nullable=False, default=0.0)
    reliability: Mapped[str] = mapped_column(String, nullable=False, default="LOW")
    payload: Mapped[dict[str, Any]] = mapped_column(JSON, nullable=False, default=dict)
    created_at: Mapped[str] = mapped_column(String, nullable=False)


class EstimatorQuoteLine(Base):
    __tablename__ = "estimator_quote_lines"

    id: Mapped[str] = mapped_column(String, primary_key=True)
    estimate_id: Mapped[str] = mapped_column(ForeignKey("estimator_estimates.id"), nullable=False, index=True)
    takeoff_id: Mapped[str | None] = mapped_column(String, nullable=True)
    scope_code: Mapped[str] = mapped_column(String, nullable=False)
    description: Mapped[str] = mapped_column(String, nullable=False)
    quantity: Mapped[float | None] = mapped_column(Float, nullable=True)
    unit: Mapped[str] = mapped_column(String, nullable=False)
    rate_id: Mapped[str | None] = mapped_column(String, nullable=True)
    amount_incl_gst: Mapped[float] = mapped_column(Float, nullable=False, default=0.0)
    status: Mapped[str] = mapped_column(String, nullable=False)
    payload: Mapped[dict[str, Any]] = mapped_column(JSON, nullable=False, default=dict)
