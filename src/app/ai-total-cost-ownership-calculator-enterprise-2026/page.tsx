import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  Calculator,
  CheckCircle2,
  Clock,
  DollarSign,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI Total Cost of Ownership Calculator 2026 | SitePilot'
const pageDescription =
  'Enterprise AI total cost of ownership should include software, infrastructure, implementation, training, maintenance, compliance, and hidden organizational drag instead of pretending the subscription line item is the whole story.'
const pageUrl = 'https://sitepilot.co/ai-total-cost-ownership-calculator-enterprise-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI total cost ownership',
    'AI TCO calculator',
    'enterprise AI costs',
    'AI financial planning',
    'AI implementation budget',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: '5-year enterprise AI TCO planning with hidden costs, ROI framing, and financial decision support.',
    type: 'article',
    url: pageUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: 'Enterprise AI TCO planning page with hidden costs, break-even framing, and related financial tools.',
  },
}

const heroStats = [
  { value: '$670K', label: '示例 Year 1 总成本' },
  { value: '$1.405M', label: '示例 5 年 TCO' },
  { value: '340%', label: '示例 ROI' },
  { value: '18个月', label: '示例回本周期' },
]

const tcoSignals = [
  'AI 项目最会骗人的地方，就是大家只盯 license 价格，不看后面的组织成本。',
  '如果培训、治理、兼容性和维护没进模型，那个预算基本就是乐观主义文学。',
  'TCO 不只是财务数字，它决定这个项目是战略资产还是昂贵摆设。',
  '先算全成本，再谈 ROI，顺序反了通常会很惨。',
]

const initialCosts = [
  'AI 软件许可',
  '基础设施与硬件',
  '实施服务',
  '培训与变革管理',
]

const ongoingCosts = [
  '维护与支持',
  '云与算力成本',
  '新增人力与持续培训',
  '合规与安全治理',
]

const hiddenCosts = [
  {
    title: '技术隐性成本',
    items: ['数据迁移与集成', '旧系统兼容性改造', '安全与合规升级', '监控与可观测性工具'],
  },
  {
    title: '组织隐性成本',
    items: ['员工阻力与流失', '流程重设计', '延长培训周期', '短期生产率下滑'],
  },
]

const optimizationStrategies = [
  {
    title: '降低初始成本',
    icon: Clock,
    items: [
      '分阶段实施，把一次性投入拆成可控波次。',
      '优先 cloud-first，避免过早砸重资产。',
    ],
  },
  {
    title: '最大化 ROI',
    icon: TrendingUp,
    items: [
      '优先切高影响流程，不要什么都一起上。',
      '持续 review，别把第一次上线当成最后答案。',
    ],
  },
]

const relatedLinks = [
  {
    href: '/ai-implementation-cost-calculator-enterprise-2026',
    title: 'Implementation cost calculator',
    description: '先算初始实施开销。',
  },
  {
    href: '/ai-automation-roi-measurement-2026',
    title: 'AI ROI measurement',
    description: '上线后继续量化自动化回报。',
  },
]

export default function AITotalCostOwnershipCalculatorPage() {
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

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_24%,#ffffff_56%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[34rem] h-[34rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
        <section className="page-hero relative">
          <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6">
                  <Sparkles className="h-4 w-4 text-[#635bff]" />
                  Enterprise AI TCO planning 2026
                </div>

                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  AI 总拥有成本，
                  <span className="brand-gradient-text block">别只算订阅费那点皮毛。</span>
                </h1>

                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  Enterprise AI total cost of ownership should include software, infrastructure, implementation, training, maintenance, compliance, and hidden organizational drag instead of pretending the subscription line item is the whole story. 这页保留原有 TCO 结构、5 年成本视角、优化策略和内部链接，只统一到当前浅色 Stripe-ish UI。
                </p>

                <div className="mb-10 flex flex-wrap gap-3">
                  <Link href="/ai-implementation-cost-calculator-enterprise-2026" className="btn-brand inline-flex items-center gap-2">
                    查看实施成本
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/ai-automation-roi-measurement-2026" className="btn-secondary inline-flex items-center gap-2">
                    查看 ROI 量化
                  </Link>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
                  {heroStats.map((item) => (
                    <div key={item.label} className="page-card bg-white/90 p-4">
                      <div className="mb-1 text-3xl font-semibold tracking-[-0.04em] text-slate-950">{item.value}</div>
                      <div className="text-sm text-slate-600">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
                <div className="relative page-card-glow p-5 md:p-6">
                  <div className="page-card bg-white/95 p-6">
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <div className="mb-1 text-sm text-slate-500">Financial baseline</div>
                        <div className="text-xl font-semibold text-slate-950">四个硬判断</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        全成本视角
                      </div>
                    </div>
                    <div className="space-y-3">
                      {tcoSignals.map((item) => (
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

        <section className="grid gap-6 lg:grid-cols-2 mb-16">
          <div className="page-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                <Calculator className="h-5 w-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">初始投资成本</h2>
            </div>
            <div className="space-y-4">
              {initialCosts.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="page-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                <DollarSign className="h-5 w-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">年度持续成本</h2>
            </div>
            <div className="space-y-4">
              {ongoingCosts.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3 mb-16">
          {[
            { title: 'Year 1 costs', icon: DollarSign, tone: 'bg-indigo-50/80 border-indigo-100', lines: ['初始投资：$425,000', '持续成本：$245,000', '总计：$670,000'] },
            { title: '5-year TCO', icon: BarChart3, tone: 'bg-sky-50/80 border-sky-100', lines: ['总投资：$1,405,000', '平均年成本：$281,000', 'ROI：340%'] },
            { title: 'Break-even', icon: TrendingUp, tone: 'bg-violet-50/80 border-violet-100', lines: ['回本周期：18个月', 'Year 3+ 净收益：$890K', 'NPV：$2.4M'] },
          ].map((card) => {
            const Icon = card.icon
            return (
              <div key={card.title} className={`page-card border p-8 ${card.tone}`}>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-white/70">
                  <Icon className="h-5 w-5 text-[#635bff]" />
                </div>
                <h3 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{card.title}</h3>
                <div className="space-y-2 text-sm text-slate-700">
                  {card.lines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              </div>
            )
          })}
        </section>

        <section className="mb-16 page-card-glow overflow-hidden rounded-[2rem] border border-amber-100 bg-gradient-to-r from-amber-50/90 via-orange-50/70 to-white p-1.5">
          <div className="rounded-[1.8rem] border border-amber-100/80 bg-white/90 p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-200 bg-amber-50">
                <Shield className="h-5 w-5 text-amber-600" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Hidden costs to consider</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {hiddenCosts.map((group) => (
                <div key={group.title} className="page-card p-6">
                  <h3 className="mb-4 text-lg font-semibold text-slate-950">{group.title}</h3>
                  <div className="space-y-3">
                    {group.items.map((item) => (
                      <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-700">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] mb-16">
          <div className="page-card-glow p-8 md:p-12 surface-muted">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Optimization strategies</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              降成本和提 ROI，
              <span className="brand-gradient-text block">都得按顺序来。</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              原页的优化策略我保留了：先控制初始投入，再聚焦高影响场景，最后做持续优化。没有这个顺序，很多团队会在“AI 转型”四个字里烧掉一堆真金白银。
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {optimizationStrategies.map((group) => {
                const Icon = group.icon
                return (
                  <div key={group.title} className="page-card bg-white/90 p-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                      <Icon className="h-5 w-5 text-[#635bff]" />
                    </div>
                    <h3 className="mb-4 text-xl font-semibold text-slate-950">{group.title}</h3>
                    <div className="space-y-3">
                      {group.items.map((item) => (
                        <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-700">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="page-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                <Target className="h-5 w-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Related AI financial tools</h2>
            </div>
            <div className="space-y-3">
              {relatedLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="page-card-soft block rounded-2xl border border-slate-200 bg-slate-50/90 p-4 transition hover:border-sky-200 hover:bg-sky-50/70"
                >
                  <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                  <div className="mt-1 text-sm text-slate-600">{item.description}</div>
                </Link>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/80 p-6">
              <div className="mb-3 flex items-center gap-3">
                <Users className="h-5 w-5 text-[#635bff]" />
                <h3 className="text-lg font-semibold text-slate-950">Next move</h3>
              </div>
              <p className="text-sm leading-7 text-slate-600">
                真要算 TCO，就把软件、硬件、实施、培训、维护、安全、合规和人力波动全拉进一个表。少一列，结果都可能从决策模型变成自我安慰。
              </p>
            </div>
          </div>
        </section>

        <section className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <Calculator className="h-4 w-4 text-[#635bff]" />
                CTA
              </div>
              <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
                Need expert TCO analysis?
              </h2>
              <p className="text-lg leading-8 text-slate-600">
                页面还是原来的意思：如果你的企业正在算 AI 财务模型，最好别一个人瞎猜。至少把 TCO 和 ROI 放在同一张图里看，不然预算审批大概率会被现实狠狠干翻。
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link href="/ai-implementation-cost-calculator-enterprise-2026" className="btn-brand inline-flex items-center gap-2">
                Start with implementation costs
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/ai-automation-roi-measurement-2026" className="btn-secondary">
                Review ROI measurement
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
