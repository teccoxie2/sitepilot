export function processingStatusLabel(status: string): string {
  if (status === "AWAITING_UPLOAD") return "待上传";
  if (status === "UPLOADED") return "已上传，待解析";
  if (status === "PREFLIGHT") return "预检中";
  if (status === "RENDERING") return "渲染中";
  if (status === "READY") return "已就绪";
  if (status === "FAILED") return "失败";
  return status;
}

export function disciplineHealthLabel(status: string): string {
  if (status === "FOUND") return "已发现相关页（不等于该专业齐备）";
  if (status === "NONE") return "未见该专业图纸";
  if (status === "Available") return "已发现相关页（不等于该专业齐备）";
  return status;
}

export interface EstimatorSummary {
  id: string;
  name: string;
  address?: string | null;
  created_at: string;
  status: string;
  document_set_version: number;
}

export interface EstimatorBBox {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export interface EstimatorProject {
  id: string;
  name: string;
  address?: string | null;
  created_at: string;
  status: string;
  document_set_version: number;
  pricebook_version?: string;
  document_health?: Record<string, string>;
  coverage?: Array<{
    drawing_id: string;
    page_number?: number | null;
    drawing_number?: string | null;
    page_type?: string | null;
    discipline?: string | null;
    expected_content?: string[];
    extract_status?: string;
    evidence_rows?: number;
    opening_rows?: number;
    floor_area_rows?: number;
    ignore_reason?: string | null;
    page_type_candidates?: string[];
  }>;
  review_counts?: Record<string, number>;
  documents: Array<{
    id: string;
    filename: string;
    kind: string;
    sha256: string;
    page_count: number;
    has_text_layer: boolean;
    processing_mode: string;
    status: string;
    error_message?: string | null;
  }>;
  drawings: Array<{
    id: string;
    document_id: string;
    page_number: number;
    discipline: string;
    page_type: string;
    drawing_number?: string | null;
    drawing_title?: string | null;
    revision?: string | null;
    rotation_deg: number;
    confidence: number;
    native_text: string;
  }>;
  expected_drawings: Array<{
    drawing_number: string;
    drawing_title?: string | null;
    revision?: string | null;
  }>;
  references: Array<{
    id: string;
    source_drawing_id: string;
    target_number: string;
    found: boolean;
    raw_text?: string | null;
  }>;
  evidence: Array<{
    id: string;
    document_id?: string | null;
    drawing_id?: string | null;
    page_number: number;
    evidence_type: string;
    raw_text: string;
    structured_value?: Record<string, unknown>;
    bbox: EstimatorBBox;
    extraction_method: string;
    confidence: number;
    status: string;
  }>;
  takeoff: Array<{
    id: string;
    scope_code: string;
    description: string;
    quantity?: number | null;
    unit: string;
    status: string;
    calculation_formula?: string | null;
    calculation_inputs?: Record<string, unknown>;
    evidence_ids: string[];
    sku?: string | null;
  }>;
  review: Array<{
    id: string;
    entity_type: string;
    entity_id: string;
    queue_status: string;
    reason_code: string;
    payload?: Record<string, unknown>;
  }>;
  correction_events: Array<{
    id: string;
    entity_type: string;
    entity_id: string;
    field_name: string;
    original_value: string;
    corrected_value: string;
    reason_code: string;
    comment?: string | null;
    created_at: string;
  }>;
  estimate: EstimatorEstimate | null;
  estimate_versions: Array<{
    id: string;
    version: number;
    document_set_version: number;
    expected_total: number;
    created_at: string;
    pricebook_version?: string | null;
  }>;
}

export interface EstimatorQuoteLine {
  id: string;
  takeoff_id?: string | null;
  scope_code: string;
  description: string;
  quantity?: number | null;
  unit: string;
  rate_id?: string | null;
  amount_incl_gst: number;
  status: string;
  payload?: {
    source_url?: string | null;
    source_name?: string | null;
    formula?: string | null;
    unit_price?: number | null;
    retrieved_at?: string | null;
    gst_included?: boolean | null;
    pack?: string | null;
    price_unit?: string | null;
    takeoff_unit?: string | null;
    unpriced_reason?: string | null;
  };
}

export interface EstimatorEstimate {
  id?: string;
  version: number;
  document_set_version: number;
  pricebook_version?: string | null;
  expected_total: number;
  range_low: number;
  range_high: number;
  scope_completeness: number;
  pricing_completeness: number;
  reliability: string;
  created_at?: string;
  quote_lines: EstimatorQuoteLine[];
  payload?: {
    not_included?: unknown[];
    note?: string;
    status_counts?: Record<string, number>;
  };
}

export const SCOPE_OPTIONS = [
  ["05", "Structure"],
  ["07", "Roofing"],
  ["08", "Windows & Doors"],
] as const;

export const CORRECTION_REASONS = [
  ["WRONG_DIMENSION", "尺寸/数量有误"],
  ["WRONG_UNIT", "单位有误"],
  ["WRONG_SCOPE_MAPPING", "科目映射有误"],
  ["OCR_ERROR", "读数有误"],
  ["DOUBLE_COUNT", "重复计量"],
  ["OTHER", "其他（须填写说明）"],
] as const;

export function publicServiceNote(note: string): string {
  return note
    .replace(/https?:\/\/\S+/gi, "已配置的模型服务")
    .replace(/\b\d{1,3}(?:\.\d{1,3}){3}(?::\d+)?(?:\/\S*)?/g, "已配置的模型服务");
}
