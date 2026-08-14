# SitePilot 内容主张台账

最后更新：2026-08-15
范围：第一轮战略收敛涉及的高风险量化主张

机器可校验版本：`src/data/evidence/sitepilot-claim-ledger-v1.json`。Markdown 表格用于编辑阅读，JSON 记录完整的来源、样本、日期、公式、适用条件、负责人、复核日期和状态字段；两者由 `npm run claims:ledger` 校验一致。

本台账记录当前页面中容易被理解为外部研究结果的数字。没有可公开复核的来源、样本、日期和公式时，页面已经改为明确的 illustrative / scenario / planning assumption 表述；在补齐证据前，不得恢复成“实测”“平均值”“研究发现”或“行业基准”。

| Claim ID | 页面 | 当前主张类型 | 当前状态 | 下一步 |
|---|---|---|---|---|
| CL-001 | `/ai-tools-cost-benefit-analysis-2026` | `$25,000`、`78 tools`、`500+ companies`、`245% ROI` | `example`：页面明确为 illustrative scenario | 若要升级为研究结论，补样本定义、原始数据、采集日期和公式 |
| CL-002 | `/ai-tool-implementation-strategy-2026` | `78 tools`、`245% ROI` | `example`：页面明确为 planning scenario | 与 CL-001 使用同一证据版本，避免独立叙述 |
| CL-003 | `/ai-digital-transformation-roadmap-2026` | `$1.9M–$2.9M`、`267%–394% ROI`、`89% adoption` | `estimate`：页面明确为 illustrative assumptions | 增加行业、组织规模和成本模型的适用条件 |
| CL-004 | `/ai-implementation-success-patterns-2026` | `73%`、`27%`、`$31M`、`347% ROI` | `example`：页面明确为 planning scenarios | 没有外部来源前不使用“成功率/平均 ROI”措辞 |
| CL-005 | `/ai-vendor-selection-enterprise-decision-framework` | `50+ vendors`、`94%`、`$2.1M` | `estimate`：页面明确为 shortlist/scenario | 记录供应商集合、评分版本和 switching-cost 假设 |
| CL-006 | `/enterprise-ai-roi-calculation-model-2026` | `315%`、`$3.8M`、`1000+ projects` | `example`：页面默认值/项目池明确为 illustrative | 让用户输入覆盖默认值，并在导出中记录输入版本 |
| CL-007 | `/enterprise-ai-success-patterns-analysis-2026` | `50 Fortune 500`、`83%`、`18 months` | `example`：页面明确为 illustrative planning scenario | 若无真实研究来源，继续禁止 Fortune 500 / tracked study 表述 |
| CL-008 | `/ai-workflow-automation-guide-2026` | `90%` success、`300%` ROI、6–12 个月回收 | `example`：页面明确为 illustrative planning scenario | 用真实 pilot 基线替换默认值后，才能升级为 verified |
| CL-009 | `/ai-transformation-success-metrics-enterprise-2026` | KPI、ROI、benchmark tiers | `example`：页面明确为 illustrative benchmark scenarios | 先记录组织 baseline、测量窗口和业务口径 |
| CL-010 | `/enterprise-ai-deployment-risk-assessment-guide` | mitigation success、uptime、ROI、satisfaction | `estimate`：页面明确为 target/scenario | 补风险登记、服务级别和复核日期后再发布实测结果 |
| CL-011 | 其他 ROI/成本计算器 | 行业比例、回收期、收益提升 | `review`：按同一规则检查 | 每次新增数字先登记，再决定是 verified、estimate、example 或 remove |
| CL-012 | `/ai-procurement-decision-matrix-tool-2026` | 25% / 25% / 20% / 15% / 15% editorial weights | `example`：页面明确为 planning aid，模型版本固定 | 由买方批准权重并以 dated vendor evidence 替换内部起点 |
| CL-013 | `/ai-implementation-cost-calculator-enterprise-2026` | `$1.8M` base input 与调整因子 | `estimate`：页面明确为 illustrative planning scenario | 用 dated quotes、内部成本和 pilot evidence 替换默认值 |
| CL-014 | `/hosting-platform-fit-scorecard-2026` | 30% / 20% / 15% / 20% / 15% weights 与平台 scenario defaults | `example`：页面明确为 illustrative fit signal | 用实测流量、迁移清单、支持条款和当前报价复核 |
| CL-015 | `/cheap-hosting` | 价格、续费、性能信号和 editorial scores | `example`：页面明确为 illustrative editorial snapshot | 补当前报价、测试窗口、原始测量和供应商来源后再升级为 verified |
| CL-016 | `/ai-content-generator-comparison` | 供应商 listed prices 与 1–10 editorial fit signals | `example`：页面明确为 illustrative snapshot | 补当前报价来源、测试提示集、评分维度和检查日期后再升级为 verified |
| CL-017 | `/best-wordpress-themes-2026` | 主题价格、0.8–1.0s 速度信号、98/100 等 editorial signals | `example`：页面明确为 illustrative comparison snapshot | 补主题版本、测试栈、测试窗口、原始测量和当前价格来源后再升级为 verified |
| CL-018 | `/best-web-hosting-2026` | 主机价格、uptime、load time、TTFB、support time 与 editorial scores | `example`：页面明确为 illustrative comparison snapshot | 补当前报价、测试窗口、原始测量和供应商支持条款后再升级为 verified |
| CL-019 | `/best-website-builders-2026` | Webflow、Wix、Shopify、Squarespace 的 8.9–9.8/10 editorial fit scores | `example`：页面明确为 illustrative editorial fit signals | 补评分维度、测试任务、版本/价格来源和复核日期后再升级为 verified |
| CL-020 | `/ai-tools-for-bloggers-2026` | 17 个工具、80% 时间节省、300+ 文章、340% ROI 与 8–9/10 评分 | `example`：页面明确为 illustrative editorial comparison/scenario | 补工具清单、提示集、测试窗口、原始测量和价格来源后再升级为 verified |
| CL-021 | `/best-email-marketing-tools-2026` | 15 个平台、价格快照和 8.9–9.6/10 editorial fit scores | `example`：页面明确为 illustrative comparison snapshot | 补平台版本、价格来源、名单规模、投递测试和评分维度后再升级为 verified |
| CL-022 | `/ai-content-workflow-automation-2026` | 价格、1–10 fit values、$200–5,000/月 stack totals 与 40–120 小时实施范围 | `example`：页面明确为 illustrative planning ranges | 补当前报价、工作流样本、实施范围和计算口径后再升级为 verified |
| CL-023 | `/enterprise-ai-implementation-best-practices-2026` | 制造、专业服务、医疗场景的投资/节省/效率 success-story numbers | `example`：页面明确为 illustrative implementation scenarios | 用 dated internal baselines、pilot evidence 或供应商资料替换情景数字后再升级为 verified |
| CL-024 | `/best-ai-seo-tools-2026` | 价格、ROI ranges、keyword counts、2,847 targets 和 traffic-lift scenarios | `example`：页面明确为 illustrative editorial/scenario signals | 补供应商价格/范围、关键词集合、测试任务、测量窗口和公式后再升级为 verified |
| CL-025 | `/enterprise-ai-success-patterns-analysis-2026` | 50 家公司、18 个月、83% success share 与 pattern-level success percentages | `example`：页面明确为 illustrative planning scenario | 补 dated research sample、项目定义、测量窗口和来源后再升级为 verified |
| CL-026 | `/ai-vendor-selection-enterprise-decision-framework` | 50+ vendors、94% selection success、$2.1M switching cost、3.5x/$5M ROI impact | `example`：页面明确为 illustrative editorial comparison/scenario | 补供应商集合、评分版本、合同成本、样本和公式后再升级为 verified |
| CL-027 | `/enterprise-ai-roi-optimization-framework-2026` | 47% success、83% planning share、6–24 month payback、35–50% hidden-cost range | `example`：页面明确为 illustrative CFO planning scenario | 补行业样本、成本口径、测量窗口和内部基线后再升级为 verified |
| CL-028 | `/ai-investment-decision-framework-2026` | $47M investment、342% ROI、18-month payback、73% success、portfolio metrics | `example`：页面明确为 illustrative portfolio scenario | 补投资组合样本、分配公式、风险调整方法和日期后再升级为 verified |
| CL-029 | `/ai-implementation-checklist-enterprise-2026` | 26 周、90+ checklist items 与 87% adoption scenario | `example`：页面明确为 illustrative rollout target | 补实际项目 baseline、阶段定义、采用率计算和复核日期后再升级为 verified |
| CL-030 | `/ai-implementation-success-framework-2026` | 4 阶段时间线、78% success、6–18 个月 ROI、$2.5M savings、industry ROI ranges | `example`：页面明确为 illustrative planning scenarios | 补项目 baseline、采用率/ROI 公式、行业样本、日期和来源后再升级为 verified |

## 字段要求

新增长期主张必须补齐：

- 原文主张、数值和单位；
- 来源 URL 或原始数据位置；
- 样本量与样本定义；
- 采集/测试日期；
- 计算公式或推导步骤；
- 结论类型：实测、供应商声明、公开资料或编辑判断；
- 适用条件、不确定性、负责人和下次复核日期。

## 发布门槛

- `verified`：来源、样本、日期和方法完整，并在页面显示适用条件；
- `estimate`：明确标记为估算，不能写成平均值或行业事实；
- `example`：明确标记为示例/情景，不能写成真实研究；
- `remove`：无法解释来源、单位、范围或用途的数字直接删除。
