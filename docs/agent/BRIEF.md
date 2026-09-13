# 本轮目标

把 V2 图纸取量与报价做成可接手、可验收、可恢复的增量开发队列。本轮先核实源码，再落地任务/状态/调度器，并用一次真实代码改动验证调度器。

## 范围

- 保留现有选址、V1 文字层套价、V2 工作区、证据、审核、修正、报价历史与导出。
- 首夜优先：调度器、报价快照保护、原件/记录保存、Drawing Index 人工维护、Vision stub 诚实披露。
- 不整体迁移到 Dify / ERPNext。不新开并行主库。
- 不把公开网站 2026-09-09 核查当最终盘点；以源码和测试为准。

## 关键业务不变量

- 地址、地块、区划、坡度、金额只来自公开源或价表。缺项标 missing，禁止 mock / LLM 定价。
- 人工修正只追加 `correction_events`，不覆盖原提取。
- 改数量或价格必须形成新报价版本；旧版金额与来源快照不可被重算覆盖。
- Vision 读数不得标 `VERIFIED`，除非与文字层或表单元格一致。
- LangGraph checkpoint 只用 `CHECKPOINT_DATABASE_URL`，不绑 `DATABASE_URL`。
- 身份目前只有 `vsense_pilot` Cookie，不是完整登录。

## 已核实事实（2026-09-12）

- 评估首轮 1–8 已在源码：持久化、门窗表、人工修正、报价快照、导出/diff、Cookie 隔离、三入口。
- `classify_page_vision()` 在密钥存在时仍 `return None`，不会读扫描页。
- 574 原 PDF 未入库，eval 报 missing。
- 生产 `GET/POST /engine/estimator/projects` 在 2026-09-12 重建 Prisma 后恢复。用户于 2026-09-13 确认已认领 `proj_aux4dcghcmhx7f2dzmzauc1a`；认领后烟测仍通过。本环境未打开 Prisma 控制台复核认领页。
- 本环境无 Cursor `agent` CLI。Vercel CLI 已登录 `teccoxie2` / `xentechs-projects`。
