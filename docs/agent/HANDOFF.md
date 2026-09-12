# Handoff · 2026-09-12 续跑

## 上轮做了什么

- 工作分支：`cursor/overnight-n08-n04-e825`。未开 PR。
- N08-01：Vercel 已登录 `teccoxie2` / `--scope xentechs-projects`。重建 24h Prisma（us-east-1），写入 production + preview `DATABASE_URL`，未改 `CHECKPOINT_DATABASE_URL`。首次 `--prod` 因 Drawing Index TS 强转失败，修掉后发布成功，别名 `https://demo-cost.vsense.co.nz`。
- 生产烟：`GET /engine/health` 200；`55 Nelson Street` 地址检索 200 且来源为议会 AC_Address；两 Cookie 各建项目，本 Cookie GET 200，跨 Cookie GET 404。
- N04-01：`replace_takeoff` 保留 `source_method=MANUAL`。`POST /estimator/projects/{id}/takeoff/manual` 只追加取量与 `correction_events`，金额只走价表 SKU；生成新报价，旧版金额不变。TAKEOFF 页有补录表单。

## 未完成

- 24h Prisma **必须认领**，否则到期删除后 Estimator 会再 500。
- Drawing Index / 漏项表单未做浏览器点选。
- `classify_page_vision` 仍不读图。
- N05 修订识别仍是 DISCOVERY（无验收命令）。

## 下一步

1. 用户打开 claim URL 认领库（见下方，不含连接串）。
2. N05-01：先读 `pipeline.py` / `extract.py`，确认同图号不同修订是否会重复取量，再补测试后标 READY。
3. 有浏览器时补 N03/N04 表单点选。

## 认领（无连接串）

- Claim（当前 production/preview 使用的库）：https://create-db.prisma.io/claim?projectID=proj_aux4dcghcmhx7f2dzmzauc1a&utm_source=create-db&utm_medium=cli
- 删除时间：2026-09-13T12:22:18.441Z
- 同会话若另有 create-db 实例，不要认领；只认领上面这条，才对应线上 `demo-cost.vsense.co.nz`。

## 证据

- `.agent-runs/20260912T110557Z-a23b2dab/round-09-N08-01/`（建库与写环境变量，无连接串）
- `.agent-runs/20260912T110557Z-a23b2dab/round-10-N08-01/probe.json`（health / 地址 / 双 Cookie 隔离）
- `.agent-runs/20260912T110557Z-a23b2dab/round-10-N04-01/`（调度器独立 pytest 退出码 0）
