# Handoff · 2026-09-14 V2 Vision

## 上轮做了什么

- V2 `classify_page_vision` 走 V1 同一套 CPA/OpenAI `chat/completions`（图 + `page-classification` 提示词）。无文字层才调用。图号须像图号，否则丢弃。不标已核实，不编工程量。
- `/estimator/ready`：`vision_classification_implemented=true`。

## 未完成

- 扫描页仍不抽门窗毫米/面积当已核实工程量。
- 完整作废/批准、N06 合约、过夜代码合 `main` 仍未做。

## 下一步

1. 在生产 Estimator 上传无文字层扫描页，核图号是否进审核且取量为空。
2. 需要时再合 `main`。

## 证据

- `server/tests/test_estimator_vision_stub.py`

# 此前 · 2026-09-13 N05-01

## 上轮做了什么

- N05-01：同图号不同修订可同时留在 Drawing Index。页按修订排序，最高为 `CURRENT`，其余 `SUPERSEDED`。取量和审核不计入旧修订页。自造文字层 PDF：旧页 GFA 100、新页 120，当前取量只有 120。
- 验收：`PYTHONPATH=server python3 -m pytest -q server/tests/test_estimator_revisions.py server/tests/test_estimator.py::test_drawing_index_and_completeness server/tests/test_estimator_index.py` 退出码 0。
- 未部署生产（任务排除上线发布）。

## 未完成

- 完整作废/批准工作流未做。
- Drawing Index / 漏项表单未做浏览器点选。
- `classify_page_vision` 仍不读图。
- N06 已计价范围 / 正式发布边界：PLAN 有，`TASKS.json` 无合约。
- 过夜代码未合进 `main`。

## 下一步

1. 若要继续：先给 N06 写任务合约与验收命令（DISCOVERY），不要伪造批准。
2. 有浏览器时补 N03/N04 表单点选。
3. 需要时再合过夜分支进 `main` 或发布（须你明确说）。

## 证据

- `.agent-runs/20260912T110557Z-a23b2dab/round-12-N05-01/`
