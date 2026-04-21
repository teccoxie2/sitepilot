'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, BarChart3, CheckCircle2, Compass, Monitor, Shield, Sparkles, TrendingUp } from 'lucide-react'

interface FormData {
  employees: string
  currentToolCount: string
  monthlyAISpend: string
  productivityGains: string
  errorRate: string
  userSatisfaction: string
  timeToValue: string
}

interface Results {
  performanceIndex: number
  performanceGrade: string
  costPerEmployee: string
  annualSavings: string
  roi: string
  recommendations: string[]
  risks: string[]
  qualityScore: string
  adoptionScore: string
  efficiencyScore: string
}

const heroSignals = [
  '保留原有的员工、工具数、月度支出与效果输入',
  '保留性能指数、ROI、建议和风险提示输出',
  '统一到当前浅色 Stripe-ish UI 风格',
  '保持用户能继续做 AI 实施监控和优化判断',
]

const statCards = [
  { label: 'Performance visibility', value: 'Real-time', note: '看得到才有得管。' },
  { label: 'ROI focus', value: 'Optimization', note: '把花的钱和拿到的价值连起来。' },
  { label: 'Adoption tracking', value: 'Enterprise', note: '使用率不是装饰品。' },
  { label: 'Decision level', value: 'Executive', note: '给管理层看的，不是给仪表盘看的。' },
]

const internalLinks = [
  { href: '/ai-tools', title: 'AI Tools Hub', note: '回到工具总目录。' },
  { href: '/ai-roi-calculator', title: 'AI ROI Calculator', note: '把绩效和财务回报接起来。' },
  { href: '/ai-performance-monitoring-dashboard-enterprise-2026', title: 'Enterprise Dashboard', note: '更完整的企业监控版。' },
  { href: '/ai-transformation-success-metrics-enterprise-2026', title: 'Transformation Success Metrics', note: '看转型指标怎么落地。' },
  { href: '/apply-for-audit', title: 'Talk to SitePilot', note: '需要顾问式评估就直接约。' },
] as const

export default function AIPerformanceMonitoringDashboardClient() {
  const [formData, setFormData] = useState<FormData>({
    employees: '',
    currentToolCount: '',
    monthlyAISpend: '',
    productivityGains: '',
    errorRate: '',
    userSatisfaction: '',
    timeToValue: '',
  })
  const [results, setResults] = useState<Results | null>(null)

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const calculatePerformance = () => {
    const employees = Number.parseInt(formData.employees) || 0
    const monthlySpend = Number.parseFloat(formData.monthlyAISpend) || 0
    const productivity = Number.parseFloat(formData.productivityGains) || 0
    const errorRate = Number.parseFloat(formData.errorRate) || 0
    const satisfaction = Number.parseFloat(formData.userSatisfaction) || 0
    const timeToValue = Number.parseInt(formData.timeToValue) || 0

    const costPerEmployee = employees > 0 ? monthlySpend / employees : 0
    const productivityRatio = productivity / 100
    const qualityScore = (100 - errorRate) / 100
    const adoptionScore = satisfaction / 10
    const efficiencyScore = Math.max(1, (180 - timeToValue) / 180)

    const performanceIndex = Math.round((productivityRatio * 25 + qualityScore * 25 + adoptionScore * 25 + efficiencyScore * 25) * 100)

    const costSavingsPerEmployee = costPerEmployee * productivityRatio * 12
    const annualSavings = costSavingsPerEmployee * employees
    const roi = monthlySpend > 0 ? ((annualSavings - monthlySpend * 12) / (monthlySpend * 12)) * 100 : 0

    const recommendations: string[] = []
    let performanceGrade = 'D'

    if (performanceIndex >= 90) {
      performanceGrade = 'A+'
      recommendations.push('Exceptional performance! Consider scaling to additional departments.')
      recommendations.push('Document best practices for company-wide adoption.')
    } else if (performanceIndex >= 80) {
      performanceGrade = 'A'
      recommendations.push('Strong performance. Focus on optimizing user workflows.')
      recommendations.push('Consider advanced AI features for power users.')
    } else if (performanceIndex >= 70) {
      performanceGrade = 'B'
      recommendations.push('Good foundation. Improve training and change management.')
      recommendations.push('Address user satisfaction concerns through better support.')
    } else if (performanceIndex >= 60) {
      performanceGrade = 'C'
      recommendations.push('Average performance. Review tool selection and usage patterns.')
      recommendations.push('Implement structured training programs.')
    } else {
      performanceGrade = 'D'
      recommendations.push('Performance below expectations. Consider strategy reassessment.')
      recommendations.push('Focus on change management and user adoption.')
    }

    const risks: string[] = []
    if (errorRate > 15) risks.push('High error rate indicates quality issues')
    if (satisfaction < 6) risks.push('Low user satisfaction threatens adoption')
    if (timeToValue > 120) risks.push('Slow time-to-value may impact ROI')
    if (costPerEmployee > 500) risks.push('High cost per employee requires justification')

    setResults({
      performanceIndex,
      performanceGrade,
      costPerEmployee: costPerEmployee.toFixed(2),
      annualSavings: annualSavings.toFixed(0),
      roi: roi.toFixed(1),
      recommendations,
      risks,
      qualityScore: (qualityScore * 100).toFixed(1),
      adoptionScore: adoptionScore.toFixed(1),
      efficiencyScore: (efficiencyScore * 100).toFixed(1),
    })
  }

  const isFormReady = Boolean(formData.employees && formData.monthlyAISpend)

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
        <div className="absolute inset-x-0 top-0 h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
        <section className="page-hero relative">
          <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6">
                  <Monitor className="h-4 w-4 text-[#635bff]" />
                  AI performance monitoring
                </div>

                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  AI Performance Monitoring Dashboard,
                  <span className="brand-gradient-text block">把“上线了”变成“真的有效”。</span>
                </h1>

                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  这页保留原始的绩效指数、ROI 计算、风险提醒和建议输出，只把界面收进当前统一的浅色 Stripe-ish 系统。
                </p>

                <div className="mb-10 flex flex-wrap gap-3">
                  <a href="#monitoring-tool" className="btn-brand inline-flex items-center gap-2">
                    Open dashboard
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link href="/ai-roi-calculator" className="btn-secondary inline-flex items-center gap-2">
                    Tie to ROI
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
                        <div className="mb-1 text-sm text-slate-500">What the dashboard keeps</div>
                        <div className="text-xl font-semibold text-slate-950">Same analytics, less landfill UI</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        live metrics
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {[
                        ['Inputs', '员工数、工具数、月度投入、生产力、错误率、满意度和见效时间。'],
                        ['Outputs', 'Performance grade、ROI、annual savings、quality score 和 risk alerts。'],
                        ['Recommendation', '识别是否该扩展、优化、培训，还是重新评估策略。'],
                        ['UI system', '统一到当前浅色 Stripe-ish cards and gradients。'],
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
                        这个 dashboard 不是装饰面板；它是看 AI 部署有没有在漏钱。
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {statCards.map((card) => (
              <div key={card.label} className="page-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-3xl font-semibold tracking-tight text-slate-950">{card.value}</div>
                <div className="mt-2 text-sm font-medium text-slate-900">{card.label}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{card.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="monitoring-tool" className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
          <div className="max-w-3xl">
            <div className="page-pill mb-4 inline-flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Performance monitoring workspace
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              把 AI 实施指标摆到桌面上，别让它藏在会议纪要里。
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              你仍然可以输入员工、支出、生产力、错误率和满意度。区别只是现在它看起来像一个靠谱产品，而不是旧时代的财务表单。
            </p>
          </div>

          <div className="mt-10 grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <div className="page-card-soft p-6 md:p-8">
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    ['Performance visibility', '实时看清 AI 部署到底发生了什么。'],
                    ['ROI optimization', '别让投入只长报告不长回报。'],
                    ['Adoption tracking', '知道谁在用，谁在装样子。'],
                    ['Rapid optimization', '尽快发现瓶颈，尽快处理。'],
                  ].map(([title, note]) => (
                    <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                        <Shield className="h-4 w-4 text-[#635bff]" />
                        {title}
                      </div>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{note}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-6 rounded-[1.5rem] border border-slate-200 bg-white p-6">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">Current AI Implementation Metrics</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      输入现状数据，看看你的 AI 部署是在赚钱，还是在偷偷烧钱。
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {[
                      ['employees', 'Number of Employees Using AI Tools', 'e.g., 150'],
                      ['currentToolCount', 'Number of AI Tools Currently Deployed', 'e.g., 8'],
                      ['monthlyAISpend', 'Monthly AI Tools Spending ($)', 'e.g., 25000'],
                      ['productivityGains', 'Average Productivity Gains (%)', 'e.g., 25'],
                      ['errorRate', 'Error/Quality Issues Rate (%)', 'e.g., 8'],
                      ['userSatisfaction', 'User Satisfaction Score (1-10)', 'e.g., 7.5'],
                      ['timeToValue', 'Average Time to Value (Days)', 'e.g., 45'],
                    ].map(([field, label, placeholder]) => (
                      <label key={field} className="space-y-2 text-sm">
                        <span className="block font-medium text-slate-700">{label}</span>
                        <input
                          type="number"
                          value={formData[field as keyof FormData]}
                          onChange={(event) => handleInputChange(field as keyof FormData, event.target.value)}
                          placeholder={placeholder}
                          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/15"
                          step={field === 'userSatisfaction' ? '0.1' : undefined}
                          min={field === 'userSatisfaction' ? '1' : undefined}
                          max={field === 'userSatisfaction' ? '10' : undefined}
                        />
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ['Performance Grade', results?.performanceGrade ?? '—'],
                  ['Performance Index', results ? `${results.performanceIndex}/100` : '—'],
                  ['ROI', results ? `${results.roi}%` : '—'],
                  ['Annual Savings', results ? `$${results.annualSavings}` : '—'],
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
                      <div className="text-sm text-slate-500">Execution panel</div>
                      <div className="text-xl font-semibold text-slate-950">Analyze your AI performance</div>
                    </div>
                    <div className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                      enterprise
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {[
                      ['Employees', formData.employees],
                      ['Monthly Spend', formData.monthlyAISpend],
                      ['Productivity Gains', formData.productivityGains],
                      ['User Satisfaction', formData.userSatisfaction],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                        <div className="text-sm text-slate-500">{label}</div>
                        <div className="mt-1 text-lg font-semibold text-slate-950">{value || '未填写'}</div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={calculatePerformance}
                    disabled={!isFormReady}
                    className="btn-brand inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold disabled:opacity-50"
                  >
                    Analyze AI Performance
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                  <Compass className="h-4 w-4 text-sky-600" />
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

        {results && (
          <section className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div className="max-w-3xl">
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Results and recommendations
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">结果出来了，别装作没看见。</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                这里继续展示绩效等级、建议和风险提醒。逻辑和原来一样，只是摆法更像现在的 SitePilot。
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                ['Quality Score', `${results.qualityScore}%`],
                ['Adoption Score', `${results.adoptionScore}/10`],
                ['Efficiency Score', `${results.efficiencyScore}%`],
                ['Cost/Employee', `$${results.costPerEmployee}`],
              ].map(([label, value]) => (
                <div key={label} className="page-card rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-sm text-slate-500">{label}</div>
                  <div className="mt-2 text-lg font-semibold text-slate-950">{value}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-6">
                <div className="text-lg font-semibold text-slate-950">Key Recommendations</div>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  {results.recommendations.map((rec) => (
                    <li key={rec}>• {rec}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.5rem] border border-rose-200 bg-rose-50/70 p-6">
                <div className="text-lg font-semibold text-rose-900">Risk Alerts</div>
                {results.risks.length > 0 ? (
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-rose-900/90">
                    {results.risks.map((risk) => (
                      <li key={risk}>• {risk}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 text-sm text-rose-900/80">No major risks detected. Nice, for once.</p>
                )}
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="rounded-[1.5rem] bg-gradient-to-r from-[#0f172a] via-[#635bff] to-sky-500 p-8 text-white">
                  <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">Ready to optimize your AI performance?</h3>
                  <p className="mx-auto mt-3 max-w-2xl text-white/85">
                    把监控做起来，才能知道到底是工具不行，还是流程不行，还是人不行。
                  </p>
                  <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                    <a href="mailto:hello@sitepilot.co" className="btn-brand bg-white text-slate-950 hover:bg-slate-100">
                      Schedule AI Performance Consultation
                    </a>
                    <Link href="/ai-tools" className="btn-secondary border-white/25 bg-white/10 text-white hover:bg-white/15">
                      Explore more AI tools
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
