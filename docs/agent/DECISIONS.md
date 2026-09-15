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
- 后续：2026-09-14 已接到 V1 同一套 CPA `chat/completions`。`vision_classification_implemented=true`。无文字层才送图；置信度封顶 0.72；审核标 LLM_INFERENCE；不编造工程量或金额。

## D004 · 生产库与 checkpoint

- 日期：2026-09-12
- 决定：Estimator 业务数据走 `DATABASE_URL`；LangGraph checkpoint 只走 `CHECKPOINT_DATABASE_URL`。2026-09-12 续跑已登录 Vercel 并写入 production+preview `DATABASE_URL`，未写 checkpoint 变量。
- 理由：仓库已分离；协议禁止把连接串写入 git / README / 用户可见回复。

## D006 · 24h Prisma 只交付认领链接

- 日期：2026-09-12
- 决定：用 `create-db --region us-east-1 --ttl 24h` 重建共享库；回复与 HANDOFF 只写 claim URL 与删除时间。用户须在到期前认领。
- 理由：过期 Prisma 导致生产 Estimator 500；连接串不能进 git。
- 后续：2026-09-13 用户确认已认领当前生产库。本环境无法打开 Prisma 控制台核对认领页；认领后生产烟测仍通过，未改连接串、未重部署。

## D007 · 人工漏项取量

- 日期：2026-09-12
- 决定：漏项走 `POST /estimator/projects/{id}/takeoff/manual`，`source_method=MANUAL`、数量状态 `ALLOWANCE`。只追加 `correction_events`。`replace_takeoff` 不删除 MANUAL 行。可选 SKU 必须已在价表；拒绝手写金额/单价。有旧报价或项目 READY 时生成新报价版本，旧版不改。
- 理由：重跑解析不能丢掉人工漏量；金额只经 PriceProvider。

## D008 · 有效修订

- 日期：2026-09-13
- 决定：同一 `drawing_number` 只把排序最高的修订标 `CURRENT`，其余 `SUPERSEDED`。空修订最旧；纯字母按 A<B<C<AA；纯数字高于字母。目录按图号+修订去重，不再按图号丢掉旧修订行。当前取量与审核跳过 SUPERSEDED 页。目录里旧修订若已有更新修订页，不算缺图。不是完整作废/批准工作流。
- 理由：N05-01；避免旧版和新版重复计量。

## D009 · 报价口径与未发布边界

- 日期：2026-09-15
- 决定：`priced_total` 只加 VERIFIED/CALCULATED；`allowance_total` 单独计 ALLOWANCE；UNPRICED/UNRESOLVED 进排除项，金额 0。`expected_total` 仍含已计价+暂估（及已有费率的 INFERRED），以保持旧快照。`publication_status` 固定 `unissued`。不设批准/发布接口；取量审核 Accept 不改变该状态。
- 理由：N06-01 / E05 最小切片 + E06 不伪造批准。

## D005 · Drawing Index 人工行

- 日期：2026-09-12
- 决定：人工补录写入 `estimator_expected_drawings`，`source=manual`，`document_id` 可空。管线 `replace_expected` 只替换同一 `document_id` 的 index 行，不删除 manual 行。
- 理由：扫描封面无文字层时必须能补期望图号，且重跑解析不能抹掉人工目录。
