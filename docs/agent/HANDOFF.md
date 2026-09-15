# Handoff · 2026-09-15 N06-01

## 上轮做了什么

- 给 N06 写了任务合约 `N06-01`，并按合约落地：报价拆 `priced_total` / `allowance_total` / 排除项；`publication_status` 固定 `unissued`。
- 旧报价版本仍按冻结分项回算口径；`expected_total` 不变。
- ESTIMATE 页分别显示已计价、暂估、排除项，并写明取量审核不是预算批准。
- 验收：`PYTHONPATH=server python3 -m pytest -q server/tests/test_estimator_scope.py server/tests/test_estimator_acl.py::test_correction_creates_new_estimate_and_keeps_old server/tests/test_estimator_manual_takeoff.py::test_manual_takeoff_keeps_old_estimate_and_survives_replace` 退出码 0。

## 未完成

- 完整作废/批准工作流未做；无成员角色。
- 施工范围（材料/人工/机械/分包）未补齐。
- Drawing Index / 漏项表单未做浏览器点选。
- 过夜代码未合进 `main`。

## 下一步

1. 需要时再写完整作废/批准的独立合约（有角色后再做，不要用审核按钮冒充）。
2. 有浏览器时补 N03/N04 表单点选。
3. 需要时再合过夜分支进 `main` 或发布（须明确说）。

## 证据

- `server/tests/test_estimator_scope.py`
