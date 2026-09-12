# Handoff · 2026-09-12 收尾

## 上轮做了什么

- 夜间文件与调度器落地；短跑/失败/恢复测试 6 通过。
- N00-03：Vision stub 诚实披露，调度器独立 pytest 通过。
- N01-01：现有报价快照测试通过（verified_existing）。
- N02-01：本地任务持久化与隔离通过。
- N03-01：人工 Drawing Index API + 工作区表单；本地 `127.0.0.1:8764` Cookie 探针通过。
- N08-01 保持 BLOCKED（Vercel 未登录）。未重建 Prisma。

## 未完成

- Drawing Index 表单未做浏览器点选（无浏览器工具，web 未装依赖）。
- N04 人工漏量：`store.replace_takeoff` 会删除全部旧行。
- 生产 Estimator 500。
- `classify_page_vision` 仍不读图。

## 下一步

1. 登录 Vercel 后重建共享库（N08-01），回复只给 claim URL。
2. 或做 N04：新增漏量并保留 MANUAL，旧报价不改。
3. 有浏览器时补 N03 表单点选。

## 证据

- `.agent-runs/20260912T110557Z-a23b2dab/`
- 本地引擎：`http://127.0.0.1:8764/health`
