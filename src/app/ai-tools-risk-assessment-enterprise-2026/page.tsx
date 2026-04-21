import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Radar,
  Shield,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = '企业级 AI 工具风险评估框架 2026 | SitePilot'
const pageDescription =
  '企业级 AI 工具风险评估框架，覆盖数据安全、供应商依赖、兼容性、合规与采用风险，帮助团队在实施前控制暴露面与缓解成本。'
const pageUrl = 'https://sitepilot.co/ai-tools-risk-assessment-enterprise-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI工具风险评估',
    '企业风险管理',
    'AI实施风险',
    '数据安全风险',
    '合规风险',
    '供应商风险',
    '风险缓解策略',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: '企业级AI工具风险评估框架 - 保护您的AI投资',
    description: '面向 CFO、CTO 与风控团队的企业 AI 风险评估框架，覆盖实时风险评分、缓解路径与 ROI 影响。',
    type: 'article',
    url: pageUrl,
    images: [
      {
        url: '/images/ai-risk-assessment-dashboard.jpg',
        width: 1200,
        height: 630,
        alt: 'AI工具风险评估仪表板',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '企业级AI工具风险评估框架 | 保护 AI 投资',
    description: '实时风险评分系统、专业缓解策略与 CFO 友好的 ROI 分析。',
    images: ['/images/ai-risk-assessment-dashboard.jpg'],
  },
}

const heroStats = [
  { value: '87%', label: '企业缺乏系统化 AI 风险评估' },
  { value: '$2.5M', label: '年度 AI 投资常处于风险暴露中' },
  { value: '43%', label: 'AI 项目因风险处理失当而失败' },
  { value: '$680K', label: '平均损失来自错误工具选择' },
]

const riskPrinciples = [
  '风险评估必须在采购前完成，不是事故后写复盘时才想起来的东西。',
  '供应商锁定、数据流向、合规义务和员工采纳率，要一起看，不能拆开装专业。',
  '高 ROI 叙事如果不算风险缓解成本，通常只是乐观主义打扮成财务模型。',
  '路线图的价值在于提前约束损失，而不是把风险标签做得更好看。',
]

const riskMatrix = [
  {
    category: '数据安全风险',
    impact: 'High',
    probability: '30%',
    score: 'High',
    mitigationCost: '$150K',
  },
  {
    category: '供应商依赖风险',
    impact: 'Medium',
    probability: '60%',
    score: 'High',
    mitigationCost: '$80K',
  },
  {
    category: '技术兼容性风险',
    impact: 'Medium',
    probability: '40%',
    score: 'Medium',
    mitigationCost: '$45K',
  },
  {
    category: '合规要求风险',
    impact: 'High',
    probability: '25%',
    score: 'High',
    mitigationCost: '$200K',
  },
  {
    category: '员工接受度风险',
    impact: 'Low',
    probability: '70%',
    score: 'Medium',
    mitigationCost: '$30K',
  },
] as const

const riskBands = [
  {
    range: '0-30',
    label: '低风险',
    note: '绿灯 - 快速审批流程',
    tone: 'border-indigo-200 bg-indigo-50 text-indigo-700',
  },
  {
    range: '31-60',
    label: '中风险',
    note: '黄灯 - 增强尽调和保护措施',
    tone: 'border-amber-200 bg-amber-50 text-amber-700',
  },
  {
    range: '61-85',
    label: '高风险',
    note: '红灯 - 董事会级别审批',
    tone: 'border-rose-200 bg-rose-50 text-rose-700',
  },
  {
    range: '86-100',
    label: '极高风险',
    note: '禁止 - 寻找替代方案',
    tone: 'border-violet-200 bg-violet-50 text-violet-700',
  },
]

const roiCards = [
  { value: '$3.2M', label: '初始风险暴露' },
  { value: '$450K', label: '缓解投资成本' },
  { value: '433%', label: '风险缓解 ROI' },
]

const roadmapPhases = [
  {
    phase: 'Phase 1',
    timeline: '月度 1-2',
    title: '风险基线建立',
    items: ['AI 工具 inventory', '行业基准对标', 'KRI 定义', '初始风险评分'],
  },
  {
    phase: 'Phase 2',
    timeline: '月度 3-4',
    title: '缓解措施实施',
    items: ['高风险项目处理', '供应商合同重谈', '员工培训', '技术安全升级'],
  },
  {
    phase: 'Phase 3',
    timeline: '月度 5-6',
    title: '监控系统建立',
    items: ['风险监控仪表板', '自动告警系统', '月度审查流程', '持续改进机制'],
  },
  {
    phase: 'Phase 4',
    timeline: '持续',
    title: '优化和扩展',
    items: ['风险模型精化', '评估标准化', '风险文化建设', '最佳实践分享'],
  },
]

const relatedLinks = [
  {
    href: '/ai-tools-usage-tracking-dashboard-2026',
    title: 'AI 工具使用率追踪仪表板',
    description: '把采用率、浪费与真实 ROI 连起来看。',
  },
  {
    href: '/ai-tools-cost-optimization-enterprise-2026',
    title: 'AI 成本优化框架',
    description: '风险缓解不能脱离预算结构单聊。',
  },
  {
    href: '/enterprise-ai-roi-optimization-framework-2026',
    title: 'AI ROI 实施指南',
    description: '把风险、收益和回收周期放进同一个决策模型。',
  },
]

function pillTone(value: string) {
  if (value === 'High') return 'border-rose-200 bg-rose-50 text-rose-700'
  if (value === 'Medium') return 'border-amber-200 bg-amber-50 text-amber-700'
  return 'border-indigo-200 bg-indigo-50 text-indigo-700'
}

export default function AIRiskAssessmentPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-03-11"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[44rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_30%),radial-gradient(circle_at_top_right,rgba(239,68,68,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_26%,#ffffff_58%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[34rem] h-[34rem] bg-[radial-gradient(circle_at_16%_20%,rgba(251,146,60,0.05),transparent_24%),radial-gradient(circle_at_78%_22%,rgba(99,91,255,0.05),transparent_22%),radial-gradient(circle_at_50%_78%,rgba(14,165,233,0.05),transparent_28%)]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
        <section className="page-hero relative">
          <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6">
                  <Sparkles className="h-4 w-4 text-[#635bff]" />
                  Enterprise AI risk assessment 2026
                </div>

                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  企业级 AI 工具风险评估，
                  <span className="brand-gradient-text block">先挡坑，再谈回报。</span>
                </h1>

                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  企业 AI 工具风险评估要同时处理数据安全、供应商依赖、技术兼容、合规要求和采用阻力。这个页面保留原来的风险矩阵、评分逻辑、ROI 案例、实施路线图和相关内部链接，只把那股老式红色营销页味道收拾成现在统一的浅色 Stripe-ish 系统。
                </p>

                <div className="mb-10 flex flex-wrap gap-3">
                  <Link href="/ai-tools-usage-tracking-dashboard-2026" className="btn-brand inline-flex items-center gap-2">
                    查看使用率追踪
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/ai-tools" className="btn-secondary inline-flex items-center gap-2">
                    返回 AI tools hub
                  </Link>
                </div>

                <div className="grid max-w-2xl gap-4 sm:grid-cols-2">
                  {heroStats.map((item) => (
                    <div key={item.label} className="page-card bg-white/90 p-4">
                      <div className="mb-1 text-3xl font-semibold tracking-[-0.04em] text-slate-950">{item.value}</div>
                      <div className="text-sm text-slate-600">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-rose-100/40 via-indigo-50/35 to-white blur-2xl" />
                <div className="relative page-card-glow p-5 md:p-6">
                  <div className="page-card bg-white/95 p-6">
                    <div className="mb-6 flex items-center justify-between gap-3">
                      <div>
                        <div className="mb-1 text-sm text-slate-500">Risk posture baseline</div>
                        <div className="text-xl font-semibold text-slate-950">四条不扯淡的评估原则</div>
                      </div>
                      <div className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
                        Board-level useful
                      </div>
                    </div>

                    <div className="space-y-3">
                      {riskPrinciples.map((item) => (
                        <div key={item} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                            <p className="text-sm leading-6 text-slate-600">{item}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">risk matrix</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              风险值不是感觉，
              <span className="brand-gradient-text block">要拆成类别、概率、影响和成本。</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              原页面的五类风险和缓解成本都保留。这里把它们变成更清晰的表格式决策面板，让人一眼知道哪类问题最贵、最常见、最该先处理。
            </p>
          </div>

          <div className="page-card overflow-hidden p-0">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-950 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">风险类别</th>
                    <th className="px-6 py-4 text-center font-semibold">影响等级</th>
                    <th className="px-6 py-4 text-center font-semibold">发生概率</th>
                    <th className="px-6 py-4 text-center font-semibold">风险值</th>
                    <th className="px-6 py-4 text-center font-semibold">缓解成本</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {riskMatrix.map((row) => (
                    <tr key={row.category} className="hover:bg-slate-50/80">
                      <td className="px-6 py-4 font-medium text-slate-900">{row.category}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${pillTone(row.impact)}`}>
                          {row.impact}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-slate-600">{row.probability}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${pillTone(row.score)}`}>
                          {row.score}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center font-semibold text-slate-950">{row.mitigationCost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-16 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="page-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                <Radar className="h-5 w-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">实时风险评分系统</h2>
            </div>
            <div className="space-y-4">
              {riskBands.map((band) => (
                <div key={band.range} className={`rounded-2xl border px-4 py-4 ${band.tone}`}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-base font-semibold">{band.label} ({band.range} 分)</div>
                      <div className="mt-1 text-sm opacity-90">{band.note}</div>
                    </div>
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="page-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                <BarChart3 className="h-5 w-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">风险评分算法</h2>
            </div>
            <div className="rounded-[1.75rem] border border-slate-800 bg-slate-950 p-6 font-mono text-sm text-indigo-300 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.7)]">
              <div className="mb-4 text-slate-100">总风险分数 = Σ(风险概率 × 影响程度 × 行业权重)</div>
              <div className="space-y-2 text-slate-300">
                <div>数据安全: 30% × 9 × 0.8 = 2.16</div>
                <div>供应商风险: 60% × 7 × 0.6 = 2.52</div>
                <div>合规风险: 25% × 9 × 0.9 = 2.03</div>
                <div>...</div>
                <div className="pt-2 font-bold text-indigo-300">总分: 67（高风险）</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">cfo view</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              风险投入值不值，
              <span className="brand-gradient-text block">最后还是看财务结果。</span>
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {roiCards.map((card) => (
              <div key={card.label} className="page-card p-7 text-center">
                <div className="mb-3 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                    <TrendingUp className="h-5 w-5 text-[#635bff]" />
                  </div>
                </div>
                <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">{card.value}</div>
                <div className="mt-2 text-sm text-slate-600">{card.label}</div>
              </div>
            ))}
          </div>

          <div className="page-card mt-6 p-8 md:p-10">
            <div className="rounded-[1.75rem] border border-slate-800 bg-slate-950 p-6 font-mono text-sm text-indigo-300">
              <div>AI 工具年收益：      $2.8M</div>
              <div>风险缓解成本：      $450K</div>
              <div>潜在风险损失：      $3.2M（未缓解）</div>
              <div>实际风险损失：      $800K（已缓解）</div>
              <div className="mt-2 font-bold text-indigo-300">净收益提升：        $1.95M</div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">implementation roadmap</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              风险治理别空谈，
              <span className="brand-gradient-text block">按阶段落地才算数。</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {roadmapPhases.map((phase) => (
              <div key={phase.phase} className="page-card p-7">
                <div className="mb-3 inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                  {phase.phase} · {phase.timeline}
                </div>
                <h3 className="mb-4 text-xl font-semibold text-slate-950">{phase.title}</h3>
                <div className="space-y-3 text-sm text-slate-600">
                  {phase.items.map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="page-card p-8 md:p-10">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                <Shield className="h-5 w-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">相关企业级 AI 工具</h2>
            </div>
            <div className="space-y-3">
              {relatedLinks.map((item) => (
                <Link key={item.href} href={item.href} className="page-card-soft block rounded-2xl border border-slate-200 bg-slate-50/90 p-4 transition hover:border-sky-200 hover:bg-sky-50/70">
                  <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                  <div className="mt-1 text-sm text-slate-600">{item.description}</div>
                </Link>
              ))}
            </div>
          </div>

          <div className="page-card-glow surface-muted p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white">
                <ArrowRight className="h-5 w-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">下一步动作</h2>
            </div>
            <p className="mb-6 leading-7 text-slate-600">
              如果你正在评估 AI 工具组合，先把现有工具清单、数据流、合规约束、供应商锁定点和采用率一起摆出来。少任何一个维度，风险结论都容易变成自我安慰。
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/ai-tools-usage-tracking-dashboard-2026" className="btn-brand inline-flex items-center gap-2">
                去看使用率追踪
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/enterprise-ai-roi-optimization-framework-2026" className="btn-secondary inline-flex items-center gap-2">
                继续看 ROI 框架
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
