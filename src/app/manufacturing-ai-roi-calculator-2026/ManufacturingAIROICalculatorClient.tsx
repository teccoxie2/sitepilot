'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  DollarSign,
  Factory,
  Gauge,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import { pageDescription, pageTitle, pageUrl } from './metadata'

type Results = {
  annualSavings: number
  roi: number
  paybackPeriod: number
  totalProjectCost: number
  riskAdjustedROI: number
  downtimeSavings: number
  qualitySavings: number
  energySavings: number
  inventorySavings: number
}

const heroHighlights = [
  '保留停机、缺陷、能耗、库存和项目周期输入',
  '保留 annual savings、ROI、payback 和 risk-adjusted ROI 输出',
  '统一到当前浅色 Stripe-ish UI',
  '继续保留 metadata / canonical / schema / internal links',
]

const benchmarkCards = [
  { label: 'Downtime reduction', value: '35%', note: '预测性维护是主力。' },
  { label: 'Defect reduction', value: '68%', note: '质量检测更直接。' },
  { label: 'Energy efficiency gain', value: '25%', note: '能源优化不玩虚的。' },
  { label: 'Inventory optimization', value: '20%', note: '库存是现金，别浪费。' },
]

const internalLinks = [
  { href: '/enterprise-ai-roi-optimization-framework-2026', title: 'Enterprise AI ROI Optimization Framework', note: '把财务结果接到优化框架。' },
  { href: '/ai-roi-calculator', title: 'AI ROI Calculator', note: '回到更通用的 AI ROI 入口。' },
  { href: '/ai-tools-cost-benefit-analysis-2026', title: 'AI Tools Cost Benefit Analysis', note: '对照成本收益拆解。' },
  { href: '/ai-digital-transformation-roadmap-2026', title: 'AI Digital Transformation Roadmap', note: '把 ROI 接到路线图。' },
]

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount)

export default function ManufacturingAIROICalculatorClient() {
  const [inputs, setInputs] = useState({
    annualRevenue: 100000000,
    currentDowntimeCost: 50000,
    currentDefectRate: 3,
    currentEnergyEfficiency: 75,
    currentInventoryTurnover: 6,
    aiInvestment: 3200000,
    projectTimeline: 16,
  })

  const results = useMemo<Results>(() => {
    const {
      annualRevenue,
      currentDowntimeCost,
      currentDefectRate,
      currentEnergyEfficiency,
      currentInventoryTurnover,
      aiInvestment,
    } = inputs

    const downtimeReduction = 0.35
    const defectReduction = 0.68
    const energyEfficiencyGain = 0.25
    const inventoryOptimization = 0.20

    const downtimeSavings = currentDowntimeCost * 12 * downtimeReduction
    const qualitySavings = (annualRevenue * currentDefectRate / 100) * defectReduction
    const energySavings = (annualRevenue * 0.05) * energyEfficiencyGain
    const inventorySavings = (annualRevenue * 0.30) * (inventoryOptimization * 0.10)

    const totalAnnualSavings = downtimeSavings + qualitySavings + energySavings + inventorySavings
    const hiddenCostMultiplier = 1.4
    const totalProjectCost = aiInvestment * hiddenCostMultiplier
    const basicROI = ((totalAnnualSavings - (totalProjectCost * 0.2)) / totalProjectCost) * 100
    const riskAdjustedROI = basicROI * 0.8
    const paybackPeriod = totalProjectCost / totalAnnualSavings

    return {
      annualSavings: Math.round(totalAnnualSavings),
      roi: Math.round(basicROI),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      totalProjectCost: Math.round(totalProjectCost),
      riskAdjustedROI: Math.round(riskAdjustedROI),
      downtimeSavings: Math.round(downtimeSavings),
      qualitySavings: Math.round(qualitySavings),
      energySavings: Math.round(energySavings),
      inventorySavings: Math.round(inventorySavings),
    }
  }, [inputs])

  const handleInputChange = (field: keyof typeof inputs, value: number) => {
    setInputs((prev) => ({ ...prev, [field]: value }))
  }

  const roiTone = (roi: number) => {
    if (roi >= 60) return 'text-indigo-600'
    if (roi >= 40) return 'text-amber-600'
    return 'text-rose-600'
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-04-20"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_24%,#ffffff_56%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[34rem] h-[34rem] bg-[radial-gradient(circle_at_18%_18%,rgba(14,165,233,0.05),transparent_24%),radial-gradient(circle_at_78%_22%,rgba(99,91,255,0.05),transparent_22%),radial-gradient(circle_at_54%_82%,rgba(251,191,36,0.05),transparent_28%)]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
        <section className="page-hero relative">
          <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6 inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#635bff]" />
                  Manufacturing ROI calculator 2026
                </div>
                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  制造业 AI ROI 计算器，
                  <span className="brand-gradient-text block">别拿“自动化会省钱”这种空话糊弄财务。</span>
                </h1>
                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  这页保留原来的停机、缺陷、能耗、库存和风险调整逻辑，只把展示统一到当前浅色 Stripe-ish UI。结果依然是制造业财务模型，不是漂亮但没用的宣传页。
                </p>

                <div className="mb-10 flex flex-wrap gap-3">
                  <a href="#calculator" className="btn-brand inline-flex items-center gap-2">
                    Run calculator
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="#framework" className="btn-secondary inline-flex items-center gap-2">
                    View benchmarks
                  </a>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 max-w-2xl lg:grid-cols-4">
                  {[
                    ['35%', 'Downtime reduction'],
                    ['68%', 'Defect reduction'],
                    ['25%', 'Energy gain'],
                    ['14–18 mo', 'Typical payback'],
                  ].map(([value, label]) => (
                    <div key={label} className="page-card bg-white/90 p-4">
                      <div className="text-2xl font-semibold tracking-[-0.04em] text-slate-950 md:text-3xl">{value}</div>
                      <div className="mt-1 text-sm text-slate-600">{label}</div>
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
                        <div className="mb-1 text-sm text-slate-500">Calculator scope</div>
                        <div className="text-xl font-semibold text-slate-950">What this model covers</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        Input-driven
                      </div>
                    </div>
                    <div className="space-y-3">
                      {heroHighlights.map((item) => (
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

        <section id="calculator" className="mb-16">
          <div className="mb-8 max-w-2xl">
            <div className="page-pill mb-3 inline-flex items-center gap-2">
              <Factory className="h-4 w-4 text-[#635bff]" />
              ROI calculator
            </div>
            <h2 className="page-title text-3xl md:text-4xl">Manufacturing inputs</h2>
            <p className="page-lead mt-3 text-lg">把真实经营数据填进去，结果才不会像销售 PPT。</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="page-card rounded-[2rem] p-6 md:p-8">
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  ['annualRevenue', 'Annual revenue (USD)', inputs.annualRevenue],
                  ['currentDowntimeCost', 'Monthly downtime cost (USD)', inputs.currentDowntimeCost],
                  ['currentDefectRate', 'Current defect rate (%)', inputs.currentDefectRate],
                  ['currentEnergyEfficiency', 'Current energy efficiency (%)', inputs.currentEnergyEfficiency],
                  ['currentInventoryTurnover', 'Current inventory turnover', inputs.currentInventoryTurnover],
                  ['aiInvestment', 'Planned AI investment (USD)', inputs.aiInvestment],
                  ['projectTimeline', 'Project timeline (months)', inputs.projectTimeline],
                ].map(([key, label, value]) => (
                  <div key={key as string}>
                    <label className="mb-2 block text-sm font-medium text-slate-700">{label as string}</label>
                    <input
                      type="number"
                      value={value as number}
                      onChange={(e) => handleInputChange(key as keyof typeof inputs, Number(e.target.value))}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="page-card p-6 md:p-8">
                <h2 className="mb-6 text-2xl font-semibold tracking-[-0.03em] text-slate-950">ROI result</h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="rounded-2xl bg-indigo-50 p-4">
                    <div className="text-sm font-medium text-indigo-700">Annual savings</div>
                    <div className="text-2xl font-semibold text-indigo-950">{formatCurrency(results.annualSavings)}</div>
                  </div>
                  <div className="rounded-2xl bg-sky-50 p-4">
                    <div className="text-sm font-medium text-sky-700">ROI</div>
                    <div className={`text-2xl font-semibold ${roiTone(results.roi)}`}>{results.roi}%</div>
                  </div>
                  <div className="rounded-2xl bg-violet-50 p-4">
                    <div className="text-sm font-medium text-violet-700">Payback</div>
                    <div className="text-2xl font-semibold text-violet-950">{results.paybackPeriod} mo</div>
                  </div>
                  <div className="rounded-2xl bg-orange-50 p-4">
                    <div className="text-sm font-medium text-orange-700">Project cost</div>
                    <div className="text-2xl font-semibold text-orange-950">{formatCurrency(results.totalProjectCost)}</div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    <span className="font-medium text-slate-900">Risk-adjusted ROI</span>
                  </div>
                  <div className={`text-3xl font-semibold ${roiTone(results.riskAdjustedROI)}`}>{results.riskAdjustedROI}%</div>
                  <p className="mt-1 text-sm text-slate-600">按 80% 行业平均实现率做保守折算。</p>
                </div>
              </div>

              <div className="page-card p-6 md:p-8">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-slate-950">
                  <BarChart3 className="h-5 w-5 text-[#635bff]" />
                  Savings breakdown
                </h3>
                <div className="space-y-3 text-sm">
                  {[
                    ['Downtime savings', results.downtimeSavings, 'bg-indigo-50'],
                    ['Quality savings', results.qualitySavings, 'bg-sky-50'],
                    ['Energy savings', results.energySavings, 'bg-violet-50'],
                    ['Inventory savings', results.inventorySavings, 'bg-amber-50'],
                  ].map(([label, amount, tone]) => (
                    <div key={label as string} className={`flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 ${tone}`}>
                      <span>{label as string}</span>
                      <span className="font-semibold">{formatCurrency(amount as number)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="framework" className="mb-16">
          <div className="mb-8 max-w-2xl">
            <div className="page-pill mb-3 inline-flex items-center gap-2">
              <Gauge className="h-4 w-4 text-[#635bff]" />
              Benchmarks and interpretation
            </div>
            <h2 className="page-title text-3xl md:text-4xl">Benchmark signals</h2>
            <p className="page-lead mt-3 text-lg">制造业不是玄学；看停机、缺陷、能耗和库存，才算靠谱。</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benchmarkCards.map((card) => (
              <div key={card.label} className="page-card p-6">
                <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 mb-5">
                  {card.label}
                </div>
                <h3 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-3">{card.value}</h3>
                <p className="text-slate-600 leading-relaxed">{card.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 page-card-glow p-8 md:p-10 surface-muted">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                ['Good fit', '看起来像真项目，不像概念秀。'],
                ['Watch-outs', '旧系统复杂、数据差、管理期望太高。'],
                ['Next step', '把结果接到路线图和预算评审。'],
              ].map(([title, note]) => (
                <div key={title} className="page-card p-6 bg-white/90">
                  <div className="mb-2 text-lg font-semibold text-slate-950">{title}</div>
                  <p className="text-sm leading-6 text-slate-600">{note}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/enterprise-ai-roi-optimization-framework-2026" className="btn-brand inline-flex items-center gap-2">
                Review optimization framework
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/ai-roi-calculator" className="btn-secondary inline-flex items-center gap-2">
                Open general ROI tool
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 max-w-2xl">
            <div className="page-pill mb-3 inline-flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-[#635bff]" />
              Internal links
            </div>
            <h2 className="page-title text-3xl md:text-4xl">Keep the decision chain intact</h2>
            <p className="page-lead mt-3 text-lg">别把 ROI 页做成孤岛，要让它连到优化、路线图和对照工具。</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {internalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="page-card group p-6 transition hover:-translate-y-0.5 hover:shadow-lg">
                <div className="mb-3 text-lg font-semibold text-slate-950 group-hover:text-[#635bff]">{item.title}</div>
                <p className="text-sm leading-6 text-slate-600">{item.note}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#635bff]">
                  Open resource
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="page-card p-8 md:p-10 mb-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">What to do next</h2>
              <ul className="space-y-3 text-slate-600">
                <li>• 先校准真实生产数据，再谈 ROI。</li>
                <li>• 把停机、缺陷、能源和库存分别核算，不要混成一锅粥。</li>
                <li>• 用风险调整后的结果去和财务、运营、工厂负责人对齐。</li>
                <li>• 结果如果还行，再接实施路线图和预算审批。</li>
              </ul>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-500">
                <Clock3 className="h-4 w-4 text-sky-600" />
                Decision note
              </div>
              <p className="text-sm leading-6 text-slate-700">
                如果你的项目在停机、缺陷率、能耗或库存任一项上没有可验证改善空间，那就别硬上。数字会替你把这事说死。
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
