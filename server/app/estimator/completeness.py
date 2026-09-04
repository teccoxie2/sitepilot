from __future__ import annotations

from .extract import normalize_sheet


def completeness(expected: list[dict], supplied_numbers: list[str | None]) -> dict:
    expected_keys = []
    for row in expected:
        key = normalize_sheet(str(row.get("drawing_number") or ""))
        if key:
            expected_keys.append((key, row))
    supplied = {normalize_sheet(item) for item in supplied_numbers if item}
    missing = []
    found = []
    for key, row in expected_keys:
        if key in supplied:
            found.append(row)
        else:
            missing.append(row)
    extra = [item for item in supplied_numbers if item and normalize_sheet(item) not in {k for k, _ in expected_keys}]
    expected_count = len(expected_keys)
    supplied_expected = len(found)
    return {
        "expected_count": expected_count,
        "supplied_expected_count": supplied_expected,
        "missing_drawings": missing,
        "extra_supplied": extra,
        "document_completeness": (supplied_expected / expected_count) if expected_count else None,
        "missing_sheet_recall_denominator": expected_count,
    }
