from __future__ import annotations

PAGE_TYPES = (
    "COVER",
    "SITE_PLAN",
    "FLOOR_PLAN",
    "FOUNDATION_PLAN",
    "FRAMING_PLAN",
    "ROOF_PLAN",
    "SECTION",
    "ELEVATION",
    "DETAIL",
    "SCHEDULE",
    "SPECIFICATION",
    "UNKNOWN",
)

DISCIPLINES = (
    "ARCHITECTURAL",
    "STRUCTURAL",
    "CIVIL",
    "PLUMBING",
    "ELECTRICAL",
    "MECHANICAL",
    "LANDSCAPE",
    "UNKNOWN",
)

TAKEOFF_STATUSES = (
    "VERIFIED",
    "CALCULATED",
    "INFERRED",
    "ALLOWANCE",
    "UNPRICED",
    "UNRESOLVED",
)

EVIDENCE_TYPES = (
    "TEXT",
    "DIMENSION",
    "TABLE_CELL",
    "SYMBOL",
    "DRAWING_NOTE",
    "GEOMETRY",
    "LLM_INFERENCE",
    "USER_INPUT",
)

EXTRACTION_METHODS = (
    "NATIVE_TEXT",
    "OCR",
    "VISION",
    "GEOMETRY",
    "REGEX",
    "MANUAL",
)

REVIEW_QUEUE = ("AUTO_ACCEPTED", "NEEDS_REVIEW", "UNRESOLVED")

REVIEW_REASONS = (
    "OCR_ERROR",
    "WRONG_CLASSIFICATION",
    "MISSED_ITEM",
    "DOUBLE_COUNT",
    "WRONG_DIMENSION",
    "WRONG_UNIT",
    "MISSING_DRAWING",
    "DRAWING_CONFLICT",
    "WRONG_SCOPE_MAPPING",
    "WRONG_RATE",
    "RATE_OUTDATED",
    "WASTE_ADJUSTMENT",
    "SITE_CONDITION",
    "SPECIFICATION_CHANGE",
    "MANUAL_ALLOWANCE",
    "LOW_CONFIDENCE",
    "LLM_INFERENCE",
    "UNPRICED",
    "MISSING_SCHEDULE_ROWS",
    "OTHER",
)

PROCESSING_STATUSES = (
    "AWAITING_UPLOAD",
    "UPLOADED",
    "PREFLIGHT",
    "RENDERING",
    "CLASSIFYING",
    "EXTRACTING",
    "BUILDING_MANIFEST",
    "TAKEOFF",
    "READY",
    "FAILED",
)

SCOPE_TAXONOMY = (
    ("00", "PROJECT"),
    ("01", "Preliminaries"),
    ("02", "Demolition"),
    ("03", "Earthworks"),
    ("04", "Foundations"),
    ("05", "Structure"),
    ("06", "Exterior Envelope"),
    ("07", "Roofing"),
    ("08", "Windows & Doors"),
    ("09", "Internal Walls"),
    ("10", "Internal Finishes"),
    ("11", "Joinery"),
    ("12", "Plumbing"),
    ("13", "Electrical"),
    ("14", "HVAC"),
    ("15", "External Works"),
    ("16", "Professional Fees"),
    ("17", "Council / Utilities"),
    ("18", "Allowances"),
    ("19", "Contingency"),
)

# Design doc 13.5 starting defaults; estimators may later override per project.
UNCERTAINTY_BY_STATUS = {
    "VERIFIED": 0.03,
    "CALCULATED": 0.05,
    "INFERRED": 0.15,
    "ALLOWANCE": 0.25,
}

# Armorsteel 845mm sheet: pricebook notes say effective cover 0.762m.
ROOF_COVER_WIDTH_M = 0.762

NATIVE_TEXT_MIN_CHARS = 40
RENDER_DPI = 150
