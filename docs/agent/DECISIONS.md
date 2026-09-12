# 决定

## D001 · 夜间文件布局

- 日期：2026-09-12
- 决定：按夜间协议使用 `docs/agent/*`、`.cursor/rules/overnight.mdc`、`scripts/overnight_runner.py`、`.agent-runs/`。
- 理由：协议指定路径；不另起一套相冲结构。

## D002 · 调度器在无 Cursor CLI 时的行为

- 日期：2026-09-12
- 决定：调度器发现 `agent` 不存在时，使用 `scripts/overnight_local_agent.py` 作为本轮执行器；每轮仍是新进程，不传 `--resume`。完成判定只认独立验收命令，不认执行器退出码。
- 理由：本环境核实无 `agent` CLI。协议要求不能假装夜间已无人值守启动。

## D003 · Vision ready 语义

- 日期：2026-09-12
- 决定：`vision` 继续表示「已配置 CPA/OpenAI 密钥」。另增 `vision_classification_implemented`。密钥存在但 stub 未接通时，说明不得写成「扫描页可走 Vision」。
- 理由：源码 `classify_page_vision()` 在有密钥时仍返回 None；生产 `/engine/estimator/ready` 曾误报可走 Vision。

## D004 · 生产库与 checkpoint

- 日期：2026-09-12
- 决定：Estimator 业务数据走 `DATABASE_URL`；LangGraph checkpoint 只走 `CHECKPOINT_DATABASE_URL`。本环境 Vercel CLI 未登录，不创建也无法写入生产库。
- 理由：仓库已分离；协议禁止把连接串写入 git / README / 用户可见回复。

## D005 · Drawing Index 人工行

- 日期：2026-09-12
- 决定：人工补录写入 `estimator_expected_drawings`，`source=manual`，`document_id` 可空。管线 `replace_expected` 只替换同一 `document_id` 的 index 行，不删除 manual 行。
- 理由：扫描封面无文字层时必须能补期望图号，且重跑解析不能抹掉人工目录。
