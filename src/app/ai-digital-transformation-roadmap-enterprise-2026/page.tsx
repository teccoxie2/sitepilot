import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = '企业AI数字化转型路线图指南 2026 | SitePilot'
const pageDescription =
  '基于 Fortune 500 实践的企业 AI 数字化转型 18 个月路线图，覆盖三阶段推进、预算规划、风险管控与成功衡量指标。'
const pageUrl = 'https://sitepilot.co/ai-digital-transformation-roadmap-enterprise-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    '企业AI转型',
    'digital transformation roadmap',
    'AI implementation strategy',
    'enterprise AI adoption',
    '数字化转型路线图',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
}

const quickNav = [
  { href: '#overview', title: '执行摘要', note: '转型成果、投资与总体判断' },
  { href: '#framework', title: '三阶段框架', note: '基础构建、规模部署、智能创新' },
  { href: '#phase-one', title: 'Phase 1 细化', note: '战略评估与能力建设动作' },
  { href: '#phase-two', title: 'Phase 2 重点', note: '核心业务 AI 化优先级' },
  { href: '#risk', title: '风险与指标', note: '缓解策略与里程碑体系' },
]

const summaryStats = [
  { value: '18个月', label: '完整转型周期' },
  { value: '236', label: '执行步骤' },
  { value: '$2.4M-$4.8M', label: '中型企业总投资' },
  { value: '242%-425%', label: '净 ROI 区间' },
]

const executiveHighlights = [
  '运营效率平均提升 47%，关键决策时间减少 62%，是这类 Fortune 500 转型项目的典型结果带。',
  '18 个月路线图分为三阶段：基础构建、规模化部署、智能创新，每一阶段都对应不同的组织与投资重心。',
  '转型成败通常不取决于模型本身，而取决于数据治理、组织协同、技能建设和变革管理是否跟上。',
  '最危险的做法不是慢，而是在基础能力不稳时就试图大规模上线高复杂度 AI 项目。',
]

const phaseCards = [
  {
    phase: 'Phase 1',
    title: '基础构建',
    duration: '1-6个月 · 投资占比 35%',
    accent: 'text-blue-600',
    outcome: '关键成果：AI Ready Organization',
    items: [
      'AI 战略制定与组织调整',
      '基础设施评估与升级',
      '数据架构现代化',
      '人才招聘与培训体系',
      '治理框架建立',
      'Pilot 项目启动',
    ],
  },
  {
    phase: 'Phase 2',
    title: '规模化部署',
    duration: '7-12个月 · 投资占比 45%',
    accent: 'text-indigo-600',
    outcome: '关键成果：AI-Powered Operations',
    items: [
      '核心业务流程 AI 化',
      '客户体验智能化升级',
      '供应链 AI 优化',
      '财务 AI 分析系统',
      '人力资源 AI 工具',
      '风险管理 AI 系统',
    ],
  },
  {
    phase: 'Phase 3',
    title: '智能创新',
    duration: '13-18个月 · 投资占比 20%',
    accent: 'text-violet-600',
    outcome: '关键成果：AI-First Enterprise',
    items: [
      'AI 驱动产品创新',
      '智能商业模式探索',
      '生态系统 AI 集成',
      '预测性业务战略',
      '自主决策系统',
      'AI 中心组织进化',
    ],
  },
]

const phaseOneTracks = [
  {
    title: 'Month 1-2：战略规划与评估',
    sections: [
      {
        heading: 'Week 1-2 · AI Vision & Strategy',
        items: [
          '成立 AI 转型委员会（CEO / CTO / CDO / CHRO）',
          '制定 5 年 AI 愿景声明',
          '确定 AI 投资预算分配策略',
          '识别 12 个优先级业务用例',
          '制定 AI 伦理与治理原则',
          '设立 AI 卓越中心（CoE）组织架构',
        ],
      },
      {
        heading: 'Week 3-4 · Current State Assessment',
        items: [
          'IT 基础设施 AI 就绪度评估',
          '数据质量与可用性审计',
          '员工 AI 技能差距分析',
          '业务流程 AI 化机会识别',
          '竞争对手 AI 采用情况调研',
          '合规与安全要求评估',
        ],
      },
    ],
  },
  {
    title: 'Month 3-6：基础设施与能力建设',
    sections: [
      {
        heading: '技术基础设施',
        items: [
          '云平台 AI 服务集成',
          '数据湖 / 仓库现代化',
          'MLOps 平台部署',
          'API 管理系统升级',
          '网络安全加固',
          '监控与日志系统',
        ],
      },
      {
        heading: '组织能力建设',
        items: [
          'AI 团队招聘计划',
          '员工 AI 素养培训',
          '变管理流程设计',
          'KPI 与激励体系调整',
          '跨部门协作机制',
          '外部合作伙伴选择',
        ],
      },
      {
        heading: '治理与合规',
        items: [
          'AI 治理政策制定',
          '数据隐私合规框架',
          'AI 模型审批流程',
          '风险管理机制',
          '道德委员会设立',
          '监管报告流程',
        ],
      },
    ],
  },
]

const businessPriorityRows = [
  ['客户服务', '智能客服 + 情感分析', '425%', '中等', '高'],
  ['销售预测', '预测分析 + 推荐引擎', '380%', '低', '高'],
  ['供应链优化', '需求预测 + 库存优化', '315%', '高', '中'],
  ['财务分析', '智能报告 + 异常检测', '290%', '中等', '中'],
  ['人力资源', '招聘筛选 + 员工发展', '235%', '低', '中'],
  ['产品研发', 'AI辅助设计 + 测试自动化', '185%', '高', '低'],
]

const innovationTracks = [
  {
    title: 'AI 驱动创新战略',
    items: [
      'AI-Native 产品线开发',
      '智能服务定制化平台',
      '预测性维护服务',
      'AI 驱动用户体验优化',
      'AI 即服务（AIaaS）平台',
      '数据货币化策略',
      '生态系统合作伙伴网络',
      '订阅制智能服务',
    ],
  },
  {
    title: '成熟度评估框架',
    items: [
      'AI 战略成熟度：Level 5',
      '技术实施能力：Level 4',
      '组织变管理：Level 4',
      '数据治理能力：Level 3',
      '总体判断：AI-First Enterprise Ready',
    ],
  },
]

const riskGroups = [
  {
    title: '关键风险识别',
    accent: 'text-rose-600',
    items: [
      '技术风险：模型性能不达预期、数据质量问题、系统集成复杂、网络安全漏洞',
      '组织风险：员工抵触变化、关键人才流失、部门协调困难、管理层支持不足',
      '商业风险：投资回收期延长、竞争对手先发、客户接受度不足、合规要求变化',
    ],
  },
  {
    title: '风险缓解措施',
    accent: 'text-indigo-600',
    items: [
      '技术风险缓解：MVP 验证机制、数据质量标准化、分阶段集成、零信任安全架构',
      '组织风险缓解：全员 AI 培训、人才保留机制、跨部门协调委员会、C-suite KPI 绑定',
      '商业风险缓解：阶段性 ROI 衡量、快速原型、客户共创、持续合规监控',
    ],
  },
]

const kpiCards = [
  ['47%', '运营效率提升'],
  ['62%', '决策速度加快'],
  ['35%', '18个月成本降低'],
  ['425%', '总体 ROI 目标'],
  ['里程碑 1', 'AI 战略规划完成'],
  ['里程碑 2', '基础设施就绪'],
  ['里程碑 3', '核心业务 AI 化完成'],
  ['里程碑 4', 'AI-First 文化确立'],
]

const relatedResources = [
  {
    href: '/ai-roi-calculator',
    title: 'AI ROI Calculator',
    description: '先把 18 个月路线图转成财务模型，避免预算讨论失焦。',
  },
  {
    href: '/enterprise-ai-implementation-best-practices-2026',
    title: 'Enterprise AI Best Practices',
    description: '把路线图落成可交付的实施方法，而不是停留在战略口号。',
  },
  {
    href: '/ai-governance-compliance-framework-2026',
    title: 'AI Governance & Compliance',
    description: '把治理和合规前置，避免规模化后才回头补控制。',
  },
  {
    href: '/ai-team-training-certification-2026',
    title: 'AI Team Training Program',
    description: '解决变革中最常见的技能和采用率短板。',
  },
  {
    href: '/ai-tools-budget-planning-enterprise-2026',
    title: 'AI Budget Planning',
    description: '让转型阶段、工具成本和年度预算节奏对齐。',
  },
  {
    href: '/enterprise-ai-vendor-comparison-guide-2026',
    title: 'Enterprise AI Vendor Comparison',
    description: '在规模化部署阶段更理性地筛选平台与服务商。',
  },
]

export default function AIDigitalTransformationRoadmapPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-03-06"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_24%,#ffffff_54%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                2026 enterprise AI transformation guide
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                企业 AI 数字化转型路线图，
                <span className="brand-gradient-text block">从试点走到 AI-First 组织。</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                这份 18 个月路线图面向 CEO、CTO、CDO 和转型办公室负责人，目标不是列出更多愿景，而是把基础构建、规模部署和智能创新拆成可执行的节奏、预算与控制动作。
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a href="#framework" className="btn-brand">
                  查看三阶段框架
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link href="/ai-roi-calculator" className="btn-secondary">
                  先算 ROI
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                {summaryStats.map((stat) => (
                  <div key={stat.label} className="page-card p-4 bg-white/90">
                    <div className="text-2xl font-semibold tracking-[-0.04em] text-slate-950 mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
              <div className="relative page-card-glow p-5 md:p-6">
                <div className="page-card p-6 bg-white/95">
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div>
                      <div className="text-sm text-slate-500 mb-1">Guide map</div>
                      <div className="text-xl font-semibold text-slate-950">如何使用这份路线图</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      18个月视角
                    </div>
                  </div>

                  <div className="space-y-3">
                    {quickNav.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4"
                      >
                        <div className="font-semibold text-slate-950 mb-1">{item.title}</div>
                        <div className="text-sm text-slate-500">{item.note}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="relative max-w-7xl mx-auto px-4 py-14 md:py-18">
        <div className="absolute inset-x-0 top-0 h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
        <section id="overview" className="page-card p-8 md:p-10 mb-16 scroll-mt-28">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">执行摘要</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                真正有价值的转型路线图，
                <span className="block brand-gradient-text">必须把组织和投资节奏写清楚。</span>
              </h2>
              <div className="space-y-4">
                {executiveHighlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="page-card-soft p-7">
              <h3 className="text-2xl font-semibold text-slate-950 mb-5">投资回报预览</h3>
              <div className="space-y-4">
                {[
                  ['18个月总投资', '$2.4M-$4.8M'],
                  ['年化收益', '$8.2M-$15.6M'],
                  ['净 ROI', '242%-425%'],
                  ['投资回收期', '8-14个月'],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4">
                    <span className="text-slate-600">{label}</span>
                    <span className="font-semibold text-indigo-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="framework" className="page-card-glow p-1.5 mb-16 scroll-mt-28">
          <div className="page-card rounded-[2rem] p-8 md:p-10">
            <div className="max-w-3xl mb-8">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">三阶段框架</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                18 个月路线图，
                <span className="block brand-gradient-text">先打基础，再放大价值，最后建立优势。</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {phaseCards.map((phase) => (
                <div key={phase.title} className="page-card-soft p-6">
                  <div className={`text-sm font-semibold uppercase tracking-[0.2em] mb-3 ${phase.accent}`}>{phase.phase}</div>
                  <h3 className="text-2xl font-semibold text-slate-950 mb-2">{phase.title}</h3>
                  <div className="text-sm text-slate-500 mb-4">{phase.duration}</div>
                  <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-950 mb-5">
                    {phase.outcome}
                  </div>
                  <div className="space-y-3">
                    {phase.items.map((item) => (
                      <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-600">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="phase-one" className="page-card p-8 md:p-10 mb-16 scroll-mt-28">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Phase 1 细化</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              基础构建阶段，
              <span className="block brand-gradient-text">把组织、基础设施和治理一起推起来。</span>
            </h2>
          </div>

          <div className="space-y-6">
            {phaseOneTracks.map((track) => (
              <div key={track.title} className="page-card-soft p-6">
                <h3 className="text-2xl font-semibold text-slate-950 mb-5">{track.title}</h3>
                <div className={`grid gap-6 ${track.sections.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
                  {track.sections.map((section) => (
                    <div key={section.heading} className="rounded-2xl border border-slate-200 bg-white px-5 py-5">
                      <div className="font-semibold text-slate-950 mb-4">{section.heading}</div>
                      <div className="space-y-2 text-sm text-slate-600">
                        {section.items.map((item) => (
                          <div key={item}>{item}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="phase-two" className="page-card-glow p-1.5 mb-16 scroll-mt-28">
          <div className="page-card rounded-[2rem] p-8 md:p-10">
            <div className="max-w-3xl mb-8">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Phase 2 & 3</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                规模化部署与智能创新，
                <span className="block brand-gradient-text">决定你是在追赶，还是在建立领先位置。</span>
              </h2>
            </div>

            <div className="page-card-soft p-6 mb-8">
              <h3 className="text-2xl font-semibold text-slate-950 mb-5">核心业务 AI 化优先级</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500">
                      <th className="px-3 py-3 text-left font-semibold">业务领域</th>
                      <th className="px-3 py-3 text-left font-semibold">AI 应用场景</th>
                      <th className="px-3 py-3 text-left font-semibold">预期 ROI</th>
                      <th className="px-3 py-3 text-left font-semibold">实施复杂度</th>
                      <th className="px-3 py-3 text-left font-semibold">优先级</th>
                    </tr>
                  </thead>
                  <tbody>
                    {businessPriorityRows.map(([domain, useCase, roi, complexity, priority]) => (
                      <tr key={domain} className="border-b border-slate-100 last:border-none">
                        <td className="px-3 py-4 text-slate-950 font-medium">{domain}</td>
                        <td className="px-3 py-4 text-slate-600">{useCase}</td>
                        <td className="px-3 py-4 text-indigo-600 font-semibold">{roi}</td>
                        <td className="px-3 py-4 text-slate-600">{complexity}</td>
                        <td className="px-3 py-4 text-slate-600">{priority}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {innovationTracks.map((track) => (
                <div key={track.title} className="page-card-soft p-6">
                  <h3 className="text-2xl font-semibold text-slate-950 mb-5">{track.title}</h3>
                  <div className="space-y-3">
                    {track.items.map((item) => (
                      <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-600">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="risk" className="page-card p-8 md:p-10 mb-16 scroll-mt-28">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">风险与指标</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              风险缓解和里程碑体系，
              <span className="block brand-gradient-text">是路线图能否真正执行下去的护栏。</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {riskGroups.map((group) => (
              <div key={group.title} className="page-card-soft p-6">
                <h3 className={`text-2xl font-semibold mb-5 ${group.accent}`}>{group.title}</h3>
                <div className="space-y-4">
                  {group.items.map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-600">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {kpiCards.map(([value, label]) => (
              <div key={label} className="page-card px-5 py-5">
                <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-2">{value}</div>
                <div className="text-sm text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="page-card-glow p-1.5">
          <div className="page-card rounded-[2rem] p-8 md:p-10">
            <div className="max-w-3xl mb-8">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">相关资源</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                从路线图继续往下走，
                <span className="block brand-gradient-text">把 ROI、治理、团队和供应商选择串起来。</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
              {relatedResources.map((resource) => (
                <Link key={resource.href} href={resource.href} className="page-card-soft p-6 hover:border-slate-300 transition">
                  <h3 className="text-xl font-semibold text-slate-950 mb-3">{resource.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{resource.description}</p>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-8">
                如果你已经有初步路线图，下一步通常不是继续写文档，而是把预算、供应商、治理和团队训练拆成可推进的工作流。
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/ai-roi-calculator" className="btn-brand">
                  先做 ROI 建模
                </Link>
                <Link href="/ai-tools" className="btn-secondary">
                  浏览 AI 工具与资源
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
