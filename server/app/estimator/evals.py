from __future__ import annotations

import json
from pathlib import Path
from typing import Any

EVAL_ROOT = Path(__file__).resolve().parents[3] / "evals" / "574-remuera"


def load_json(name: str) -> dict[str, Any]:
    path = EVAL_ROOT / name
    if not path.exists():
        return {"status": "missing", "note": f"缺少 {name}"}
    return json.loads(path.read_text(encoding="utf-8"))


def golden_pdfs() -> dict[str, Path | None]:
    folder = EVAL_ROOT / "documents"
    return {
        "architectural": _existing(folder / "architectural.pdf"),
        "structural": _existing(folder / "structural.pdf"),
    }


def _existing(path: Path) -> Path | None:
    return path if path.is_file() and path.stat().st_size > 0 else None


def run_574_eval() -> dict[str, Any]:
    truth = load_json("ground_truth.json")
    expected_drawings = load_json("expected_drawings.json")
    files = golden_pdfs()
    assertions: list[dict[str, Any]] = []

    if files["architectural"] is None or files["structural"] is None:
        assertions.append(
            {
                "id": "documents_present",
                "priority": "P0",
                "status": "missing",
                "detail": "evals/574-remuera/documents/ 中没有 architectural.pdf 与 structural.pdf。未对原图核对，不能把附录页数标成已通过。",
            }
        )
        return {
            "dataset": "574-remuera",
            "documents_status": "missing",
            "ground_truth": truth,
            "expected_drawings": expected_drawings,
            "assertions": assertions,
            "unsupported_ai_generated_rate": 0,
            "passed": False,
        }

    from .pdf import preflight_pdf

    arch = preflight_pdf(files["architectural"])
    struct = preflight_pdf(files["structural"])
    assertions.extend(
        [
            _assert_eq("arch_page_count", arch["page_count"], truth["architectural"]["pages"], "P0"),
            _assert_eq("struct_page_count", struct["page_count"], truth["structural"]["pages"], "P0"),
            _assert_eq(
                "arch_image_only",
                (not arch["has_text_layer"]),
                (not truth["architectural"]["has_text_layer"]),
                "P0",
            ),
            _assert_eq(
                "struct_image_only",
                (not struct["has_text_layer"]),
                (not truth["structural"]["has_text_layer"]),
                "P0",
            ),
        ]
    )
    if expected_drawings.get("status") == "missing" or not expected_drawings.get("expected_drawings"):
        assertions.append(
            {
                "id": "missing_sheet_recall",
                "priority": "P0",
                "status": "missing",
                "detail": "Drawing Index 尚未人工抄录，不能计算 missing sheet recall。",
            }
        )
    passed = all(item["status"] == "pass" for item in assertions if item["status"] != "missing")
    missing_blocking = any(item["status"] == "missing" and item["priority"] == "P0" for item in assertions)
    return {
        "dataset": "574-remuera",
        "documents_status": "present",
        "ground_truth": truth,
        "preflight": {"architectural": arch, "structural": struct},
        "assertions": assertions,
        "unsupported_ai_generated_rate": 0,
        "passed": bool(passed) and not missing_blocking,
    }


def _assert_eq(assertion_id: str, actual: Any, expected: Any, priority: str) -> dict[str, Any]:
    ok = actual == expected
    return {
        "id": assertion_id,
        "priority": priority,
        "status": "pass" if ok else "fail",
        "actual": actual,
        "expected": expected,
    }


if __name__ == "__main__":
    import json as json_lib

    print(json_lib.dumps(run_574_eval(), ensure_ascii=False, indent=2))
