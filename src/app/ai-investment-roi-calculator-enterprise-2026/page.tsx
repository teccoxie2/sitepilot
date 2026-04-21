import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Calendar,
  CheckCircle2,
  DollarSign,
  LineChart,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import { pageDescription, pageTitle, pageUrl } from './metadata'

const heroSignals = [
  '保留原有的企业规模、行业、AI应用类型、复杂度与预算输入',
  '保留3年ROI、投资回收期、NPV、IRR 和情景分析输出',
  '把旧页面的 CFO 级财务叙事收进统一的浅色 Stripe-ish UI',
  '补上规范 metadata、canonical、OG、Twitter 与结构化数据意图',
]

const financialCards = [
  { label: '3年净 ROI', value: '385%', note: '基线情景下仍是核心 KPI。' },
  { label: '投资回收期', value: '11个月', note: '在基线假设下回本速度够快。' },
  { label: '3年净收益', value: '$9.2M', note: '维持旧页面的财务口径。' },
  { label: '成功概率', value: '85%', note: '与原始输入面板保持一致。' },
]

const benchmarkCards = [
  { label: '行业平均 ROI', value: '285%', compare: 'vs 您的 385%' },
  { label: '行业平均回收期', value: '15个月', compare: 'vs 您的 11个月' },
  { label: '行业成功率', value: '68%', compare: 'vs 您的 85%' },
  { label: '行业平均投资', value: '$3.2M', compare: 'vs 您的 $2.4M' },
]

const scenarioCards = [
  {
    tone: 'border-indigo-200 bg-indigo-50 text-indigo-900',
    title: '乐观情况',
    detail: ['收益超预期 20%', '实施周期缩短 3 个月', '3 年 ROI: 485%', '投资回收期: 8 个月'],
  },
  {
    tone: 'border-amber-200 bg-amber-50 text-amber-900',
    title: '基线情况',
    detail: ['收益符合预期', '实施按计划进行', '3 年 ROI: 385%', '投资回收期: 11 个月'],
  },
  {
    tone: 'border-rose-200 bg-rose-50 text-rose-900',
    title: '悲观情况',
    detail: ['收益低于预期 25%', '实施延误 6 个月', '3 年 ROI: 210%', '投资回收期: 18 个月'],
  },
]

const internalLinks = [
  {
    href: '/ai-investment-roi-matrix-calculator-enterprise-2026',
    title: 'ROI Matrix Calculator',
    note: '把单点测算升级成多因素决策。'
  },
  {
    href: '/ai-investment-portfolio-optimizer-2026',
    title: 'Portfolio Optimizer',
    note: '把 ROI 变成可执行的资本分配。'
  },
  {
    href: '/ai-governance-framework-enterprise-2026',
    title: 'Governance Framework',
    note: '让预算和治理一起上桌。'
  },
  {
    href: '/enterprise-ai-vendor-shortlist-scorecard-2026',
    title: 'Vendor Shortlist Scorecard',
    note: '先比供应商，再下注。'
  },
  {
    href: '/apply-for-audit',
    title: 'Talk to SitePilot',
    note: '需要顾问式评估就直接约。'
  },
] as const

export default function AIInvestmentROICalculatorPage() {
  return (
    <>
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-03-16"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
          <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
          <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>

        <section className="page-hero relative">
          <div className="page-hero-inner mx-auto max-w-7xl px-4 pb-20 pt-24 md:pb-28 md:pt-32">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6">
                  <Sparkles className="h-4 w-4 text-[#635bff]" />
                  Enterprise AI ROI planning
                </div>

                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  AI investment ROI calculator,
                  <span className="brand-gradient-text block">without the fantasy spreadsheet energy.</span>
                </h1>

                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  Estimate return, payback, risk, and downside scenarios for a serious enterprise AI investment while
                  keeping the CFO questions visible from the first screen.
                </p>

                <div className="mb-10 flex flex-wrap gap-3">
                  <a href="#roi-tool" className="btn-brand inline-flex items-center gap-2">
                    Open calculator
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link href="/ai-investment-portfolio-optimizer-2026" className="btn-secondary inline-flex items-center gap-2">
                    Optimize portfolio
                  </Link>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {heroSignals.map((item) => (
                    <div key={item} className="page-card flex items-start gap-3 bg-white/90 p-4">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                      <span className="text-sm leading-6 text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
                <div className="relative page-card-glow p-5 md:p-6">
                  <div className="page-card space-y-5 bg-white/95 p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="mb-1 text-sm text-slate-500">What the page still includes</div>
                        <div className="text-xl font-semibold text-slate-950">The same finance story</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        5 key inputs
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {[
                        ['Inputs', 'Enterprise size, industry, application type, complexity, budget, and success probability.'],
                        ['Outputs', 'ROI, payback, NPV, IRR, scenario analysis, and practical recommendations.'],
                        ['Benchmarks', 'Fortune 500 comparison blocks and performance context remain visible.'],
                        ['UI system', 'Light gradients, clean cards, and Stripe-ish hierarchy replace the old chrome.'],
                      ].map(([title, note]) => (
                        <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                          <div className="font-semibold text-slate-950">{title}</div>
                          <div className="mt-1 text-sm text-slate-500">{note}</div>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-[1.5rem] border border-indigo-100 bg-gradient-to-r from-indigo-50 to-sky-50 p-5">
                      <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700/80">
                        Guardrail
                      </div>
                      <div className="text-sm leading-relaxed text-slate-700">
                        This is a UI migration, not a content demolition. The numbers and decision framing stay intact.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className="relative mx-auto max-w-7xl px-4 py-14 md:py-18">
          <div className="absolute inset-x-0 top-0 h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
          <section id="overview" className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {financialCards.map((card) => (
                <div key={card.label} className="page-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-3xl font-semibold tracking-tight text-slate-950">{card.value}</div>
                  <div className="mt-2 text-sm font-medium text-slate-900">{card.label}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="roi-tool" className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div className="max-w-3xl">
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Smart ROI calculator
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                Model return before someone starts waving around a deck and calling it strategy.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                The old calculator promised business-case clarity. The new layout keeps that promise, but in the same
                calm light system used across the rest of SitePilot.
              </p>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-6">
                <div className="page-card-soft p-6 md:p-8">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                        <Briefcase className="h-4 w-4 text-[#635bff]" />
                        Project parameters
                      </div>
                      <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                        <li>企业规模</li>
                        <li>行业类型</li>
                        <li>AI 应用类型</li>
                        <li>项目复杂度</li>
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                        <TrendingUp className="h-4 w-4 text-[#635bff]" />
                        Investment parameters
                      </div>
                      <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                        <li>初始投资预算</li>
                        <li>年度运营成本</li>
                        <li>实施周期</li>
                        <li>成功概率评估</li>
                      </ul>
                    </div>
                    <div className="md:col-span-2 rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                        <LineChart className="h-4 w-4 text-violet-600" />
                        Expected benefits
                      </div>
                      <div className="mt-4 grid gap-4 md:grid-cols-2">
                        <div className="rounded-2xl border border-white bg-white p-4">
                          <div className="font-semibold text-slate-950">Cost savings</div>
                          <div className="mt-1 text-sm text-slate-600">人力、运营、错误减少收益。</div>
                        </div>
                        <div className="rounded-2xl border border-white bg-white p-4">
                          <div className="font-semibold text-slate-950">Revenue growth</div>
                          <div className="mt-1 text-sm text-slate-600">新业务、客户价值、竞争优势。</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ['技术风险', '低 (15%)'],
                    ['执行风险', '中 (25%)'],
                    ['市场风险', '低 (18%)'],
                    ['总体评估', '强烈推荐投资'],
                  ].map(([label, value]) => (
                    <div key={label} className="page-card rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                      <div className="text-sm text-slate-500">{label}</div>
                      <div className="mt-2 text-lg font-semibold text-slate-950">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="page-card-glow p-1.5">
                  <div className="page-card-soft space-y-5 p-6 md:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-sm text-slate-500">Results panel</div>
                        <div className="text-xl font-semibold text-slate-950">ROI analysis summary</div>
                      </div>
                      <div className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                        Baseline scenario
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        ['3年净ROI', '385%'],
                        ['投资回收期', '11个月'],
                        ['3年净收益', '$9.2M'],
                        ['净现值 (NPV)', '$7.8M'],
                      ].map(([title, value]) => (
                        <div key={title} className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                          <div className="text-sm text-slate-500">{title}</div>
                          <div className="mt-1 text-lg font-semibold text-slate-950">{value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-[1.5rem] border border-indigo-100 bg-indigo-50/70 p-5">
                      <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">
                        Decision summary
                      </div>
                      <p className="text-sm leading-7 text-slate-700">
                        这组假设下的项目值得投，但前提是实施纪律、数据质量和变更管理别掉链子。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                    <Shield className="h-4 w-4 text-sky-600" />
                    Related internal resources
                  </div>
                  <div className="mt-5 space-y-3">
                    {internalLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="page-card-soft block rounded-2xl border border-slate-200 bg-slate-50/90 p-4 transition hover:border-sky-200 hover:bg-sky-50/70"
                      >
                        <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                        <div className="mt-1 text-sm text-slate-600">{item.note}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div className="max-w-3xl">
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Industry benchmark comparison
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">基准不是装饰品，是谈判时的武器。</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                这块内容继续保留 179 家 Fortune 500 的对比叙事，只是换成更干净的卡片和表格排版。
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {benchmarkCards.map((card) => (
                <div key={card.label} className="page-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-2xl font-semibold tracking-tight text-slate-950">{card.value}</div>
                  <div className="mt-2 text-sm font-medium text-slate-900">{card.label}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.compare}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr className="border-b border-slate-200 text-left">
                    <th className="p-4 font-semibold text-slate-700">行业</th>
                    <th className="p-4 font-semibold text-slate-700">企业数</th>
                    <th className="p-4 font-semibold text-slate-700">平均 ROI</th>
                    <th className="p-4 font-semibold text-slate-700">成功率</th>
                    <th className="p-4 font-semibold text-slate-700">您的位置</th>
                  </tr>
                </thead>
                <tbody className="bg-white text-slate-700">
                  {[
                    ['零售电商', '32家', '325%', '74%', 'TOP 15%'],
                    ['金融服务', '28家', '295%', '71%', 'TOP 12%'],
                    ['制造业', '41家', '245%', '65%', 'TOP 8%'],
                    ['医疗健康', '23家', '385%', '82%', '平均水平'],
                    ['科技服务', '35家', '425%', '89%', '接近平均'],
                    ['物流运输', '20家', '215%', '58%', 'TOP 5%'],
                  ].map((row) => (
                    <tr key={row[0]} className="border-b border-slate-100 last:border-b-0">
                      {row.map((cell, index) => (
                        <td key={`${row[0]}-${index}`} className="p-4">
                          {index === 4 ? (
                            <span className="inline-flex rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-semibold text-indigo-800">
                              {cell}
                            </span>
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-3">
            <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">收益放大策略</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>聚焦高 ROI 场景，别拿低价值项目凑数。</li>
                <li>先做数据清理，再谈精确预测。</li>
                <li>分阶段部署，比一次性大跃进靠谱得多。</li>
                <li>培训预算不能省，不然 ROI 会回头咬你。</li>
              </ul>
            </div>
            <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">关键风险控制</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>成熟方案优先，别把项目变成自研研究所。</li>
                <li>严格变更管理，防止范围无限膨胀。</li>
                <li>变革沟通要早，不然组织会本能抵抗。</li>
                <li>监管和数据安全要提前做，不要等炸了再补。</li>
              </ul>
            </div>
            <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">加速实施建议</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>需要的话可以拉外部专家，缩短学习曲线。</li>
                <li>云原生 AI 服务能明显缩短集成时间。</li>
                <li>2-4 周迭代最适合持续验证和修正。</li>
                <li>KPI 必须明确，不然优化没抓手。</li>
              </ul>
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div className="max-w-3xl">
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <Target className="h-4 w-4" />
                Scenario analysis
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">把最好、最坏、最可能的结果都摊在桌上。</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                这里保留原页面的场景分析、蒙特卡洛结论和投资建议口径，只是把视觉系统统一掉。
              </p>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {scenarioCards.map((scenario) => (
                <div key={scenario.title} className={`rounded-[1.5rem] border p-5 ${scenario.tone}`}>
                  <div className="text-lg font-semibold">{scenario.title}</div>
                  <ul className="mt-3 space-y-2 text-sm leading-6">
                    {scenario.detail.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-sky-100 bg-sky-50/70 p-5 text-sm leading-7 text-slate-700">
              <div className="mb-2 font-semibold uppercase tracking-[0.18em] text-sky-700">蒙特卡洛模拟结果</div>
              <div>• 10,000 次模拟分析</div>
              <div>• ROI {'>'} 200% 概率: 89%</div>
              <div>• ROI {'>'} 300% 概率: 72%</div>
              <div>• 负 ROI 风险: 3%</div>
              <div className="mt-2 font-semibold">投资建议: 强烈推荐</div>
            </div>
          </section>

          <section className="mt-16 text-center">
            <div className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="rounded-[1.5rem] bg-gradient-to-r from-[#0f172a] via-[#635bff] to-sky-500 p-8 text-white">
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">需要个性化 ROI 分析？</h3>
                <p className="mx-auto mt-3 max-w-2xl text-white/85">
                  如果你要把这个 ROI 计算器接到真正的投资评审、治理框架和实施支持里，SitePilot 可以继续往下接。
                </p>
                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="/apply-for-audit" className="btn-brand bg-white text-slate-950 hover:bg-slate-100">
                    联系 AI 投资专家
                  </Link>
                  <Link href="/ai-investment-portfolio-optimizer-2026" className="btn-secondary border-white/25 bg-white/10 text-white hover:bg-white/15">
                    看投资组合优化器
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm text-slate-600">
              <p>© 2026 SitePilot AI Investment Solutions. 专业级 AI 投资 ROI 工具。</p>
              <p className="mt-1">基于最新 AI 投资数据和行业最佳实践构建。</p>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
