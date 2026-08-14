# SitePilot 内容资产第一轮清单

最后更新：2026-08-14
数据来源：`src/app/**/page.tsx` 路由扫描与当前生产 sitemap

当前源码保留 **140 个页面路由**；其中 3 个低搜索价值入口标记为 `noindex,follow`，因此当前 sitemap 应包含 137 个可索引 URL。另保留 2 条已退役的 legacy URL 记录在 JSON 清单中，状态为 `Merge`，但不再提供兼容路由。

## 当前主题分布

| 主题 | 页面数 | 当前策略 | 下一步 |
|---|---:|---|---|
| AI 企业采购与实施 | 90 | 主航道 | 保留有独立证据、工具或采购路径的页面；合并重复 ROI/实施/治理变体 |
| Web 基础设施 | 17 | 主航道 | 统一 hosting、builder、domain、迁移和安全路径 |
| 代理基础设施 | 13 | 独立维护垂直线 | 保留专业工具和合规内容；不继续横向扩张关键词页 |
| 域名购买 | 7 | Web 基础设施子集 | 接入 web infrastructure hub 和购买决策路径 |
| 信任/工具/法律 | 6 | 必要入口 | 保留首页、methodology、audit、contact、privacy、terms |
| 其他待归类 | 7 | Review | 依据 Search Console、转化和独立证据决定合并或维护 |

## 第一轮处置规则

### Keep

- 页面服务 AI 采购、Web 基础设施、代理独立垂直或信任/工具入口；
- 有独立的用户问题、证据、计算逻辑或操作资产；
- 能接入 `hub → 证据/比较 → 工具 → 报告/审计` 路径；
- 重要量化主张已在 `CONTENT_CLAIM_LEDGER.md` 登记。

### Merge

- 仅有年份、同义词或轻微意图差异；
- 与另一个页面使用相同模板、相同供应商结论或相同 ROI 故事；
- 没有独立数据、工具结果或新增决策动作。

### Noindex

- 需要保留给站内用户，但暂时不应参与搜索的实验结果页或低价值工具壳；
- 页面可以帮助完成任务，但没有足够独立内容支撑索引。

### Remove

- 无法提供可信内容、无维护责任、没有独立用户价值或不应公开的页面；
- 先移除内链和 sitemap 条目，再删除路由，不保留兼容层。

## 首批人工复核队列

这些页面不代表已经删除，而是第一批需要基于真实搜索与工具数据做最终决定的对象：

- `/best-email-marketing-tools-2026`
- `/best-project-management-tools-2026`
- `/best-social-media-management-tools-2026`
- `/best-free-ssl-certificates-2026`
- `/readdy-ai-review`
- `/best-ecommerce-website-builders-2026`
- `/ai-content-*`、`/ai-tools-for-bloggers-2026` 等偏内容营销的 AI 变体

处理原则：如果页面能提供独立实测、真实工具使用或明确的 Web/AI 采购决策动作，则归入 `Keep`；否则合并到主航道页面或进入 `Noindex`/`Remove` 评估。

## 验收要求

每个最终处置记录都要包含：

- URL、状态、目标页面（如适用）；
- 处置依据和证据来源；
- 是否有工具启动、完成、导出或审计申请；
- 负责人和下次复核日期；
- sitemap、canonical、站内链接和生产状态检查结果。

当前实现状态：2 条 hosting legacy 路由已从源码和 sitemap 移除；privacy、terms、proxy recommendation 保留访问但输出 `noindex,follow`，且不进入 sitemap。其余 Review 页面仍保持 provisional，等待 Search Console 与真实工具/线索数据后再做最终取舍。
