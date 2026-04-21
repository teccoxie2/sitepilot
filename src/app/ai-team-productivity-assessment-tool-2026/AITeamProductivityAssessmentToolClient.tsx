'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  Calendar,
  CheckCircle2,
  Compass,
  Sparkles,
  Shield,
  Target,
  TrendingUp,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import { pageDescription, pageTitle, pageUrl } from './metadata'

interface ResultsType {
  currentProductivity: number
  newProductivity: number
  productivityBoost: number
  timesSaved: number
  monthlySavings: number
  yearlyValue: number
  roiPercentage: number
  riskLevel: string
  riskFactors: string[]
  recommendations: string[]
  implementationScore: number
  paybackPeriod: number
}

const heroSignals = [
  '保留团队规模、生产力、重复任务、预算和 AI readiness 输入',
  '保留 productivity boost、ROI、风险、建议和 payback 输出',
  '统一到当前浅色 Stripe-ish UI',
  '继续保留 internal links 和咨询路径',
]

const statCards = [
  { label: 'Team focus', value: 'People', note: '人效是主角，不是摆设。' },
  { label: 'Automation focus', value: 'Tasks', note: '重复工作越多，空间越大。' },
  { label: 'Risk focus', value: 'Readiness', note: '准备度低，风险就会写脸上。' },
  { label: 'Decision level', value: 'Executive', note: '给管理层的数字，不是情绪。' },
]

const internalLinks = [
  { href: '/ai-tool-implementation-strategy-2026', title: 'AI Tool Implementation Strategy', note: '把评估结果接到实施路线。' },
  { href: '/ai-roi-calculator', title: 'AI ROI Calculator', note: '看回报怎么落到预算。' },
  { href: '/enterprise-ai-implementation-best-practices-2026', title: 'Implementation Best Practices', note: '参考企业级执行方法。' },
  { href: '/ai-tools', title: 'AI Tools Hub', note: '回到工具总目录。' },
  { href: '/apply-for-audit', title: 'Talk to SitePilot', note: '需要顾问式评估就直接约。' },
] as const

export default function AITeamProductivityAssessmentToolClient() {
  const [formData, setFormData] = useState({
    teamSize: 10,
    currentProductivity: 75,
    repetitiveTasks: 40,
    aiToolsBudget: 50000,
    implementationTimeframe: 'moderate',
    teamTechSkills: 'average',
    workflowComplexity: 'medium',
    dataAvailability: 'some',
    aiReadiness: 'exploring',
  })

  const [results, setResults] = useState<ResultsType | null>(null)

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const calculateProductivityMetrics = () => {
    const {
      teamSize,
      currentProductivity,
      repetitiveTasks,
      aiToolsBudget,
      implementationTimeframe,
      teamTechSkills,
      workflowComplexity,
      dataAvailability,
      aiReadiness,
    } = formData

    let productivityBoost = repetitiveTasks * 0.5 + 15

    const skillsMultiplier = {
      beginner: 0.7,
      average: 1.0,
      advanced: 1.3,
      expert: 1.5,
    }[teamTechSkills] || 1.0

    const timeframeFactor = {
      fast: 1.2,
      moderate: 1.0,
      slow: 0.8,
    }[implementationTimeframe] || 1.0

    const complexityFactor = {
      simple: 1.1,
      medium: 1.0,
      complex: 0.9,
      very_complex: 0.75,
    }[workflowComplexity] || 1.0

    const dataBonus = {
      none: 0,
      some: 5,
      good: 10,
      excellent: 20,
    }[dataAvailability] || 0

    const readinessMultiplier = {
      skeptical: 0.6,
      exploring: 0.8,
      planning: 1.0,
      implementing: 1.2,
      optimizing: 1.4,
    }[aiReadiness] || 1.0

    productivityBoost =
      (productivityBoost + dataBonus) *
      skillsMultiplier *
      timeframeFactor *
      complexityFactor *
      readinessMultiplier

    const newProductivity = Math.min(95, currentProductivity + productivityBoost)
    const timesSaved = Math.round((productivityBoost / 100) * 40 * teamSize * 4)
    const monthlySavings = timesSaved * 75
    const yearlyValue = monthlySavings * 12
    const roiPercentage = ((yearlyValue - aiToolsBudget) / aiToolsBudget) * 100

    let riskLevel = 'Low'
    const riskFactors: string[] = []

    if (teamTechSkills === 'beginner') {
      riskLevel = 'Medium'
      riskFactors.push('Limited technical skills')
    }

    if (workflowComplexity === 'very_complex') {
      riskLevel = 'High'
      riskFactors.push('Complex workflow integration')
    }

    if (aiReadiness === 'skeptical') {
      riskLevel = riskLevel === 'High' ? 'Very High' : 'High'
      riskFactors.push('Team resistance to change')
    }

    if (dataAvailability === 'none') {
      riskLevel = riskLevel.includes('High') ? 'Very High' : 'Medium'
      riskFactors.push('Limited data for AI training')
    }

    const recommendations: string[] = []

    if (repetitiveTasks > 60) {
      recommendations.push('Start with automation tools for repetitive tasks')
    }

    if (teamTechSkills === 'beginner') {
      recommendations.push('Invest in team training and AI literacy programs')
    }

    if (aiToolsBudget < 25000) {
      recommendations.push('Consider phased implementation with budget-friendly tools')
    } else if (aiToolsBudget > 100000) {
      recommendations.push('Explore enterprise-grade AI solutions with comprehensive support')
    }

    if (dataAvailability === 'excellent') {
      recommendations.push('Leverage machine learning for predictive analytics')
    }

    return {
      currentProductivity,
      newProductivity,
      productivityBoost: Math.round(productivityBoost),
      timesSaved,
      monthlySavings,
      yearlyValue,
      roiPercentage: Math.round(roiPercentage),
      riskLevel,
      riskFactors,
      recommendations,
      implementationScore: Math.round(productivityBoost * 2 + skillsMultiplier * 20),
      paybackPeriod: Math.round(aiToolsBudget / Math.max(monthlySavings, 1)),
    }
  }

  const handleCalculate = () => {
    setResults(calculateProductivityMetrics())
  }

  const getRiskColor = (level: string) => {
    const colors: Record<string, string> = {
      Low: 'text-indigo-600',
      Medium: 'text-amber-600',
      High: 'text-orange-600',
      'Very High': 'text-rose-600',
    }
    return colors[level] || 'text-slate-600'
  }

  return (
    <>
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-04-20"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

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
                    <Sparkles className="h-4 w-4 text-[#635bff]" />
                    Team productivity assessment
                  </div>

                  <h1 className="page-title mb-6 text-5xl md:text-7xl">
                    AI Team Productivity Assessment Tool,
                    <span className="brand-gradient-text block">先算人效，再谈 AI 革命。</span>
                  </h1>

                  <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                    这页保留团队规模、重复任务、预算、技能、数据和 readiness 的原始逻辑，只把外观统一到当前浅色 Stripe-ish 系统。
                  </p>

                  <div className="mb-10 flex flex-wrap gap-3">
                    <a href="#productivity-tool" className="btn-brand inline-flex items-center gap-2">
                      Open assessment
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <Link href="/ai-tool-implementation-strategy-2026" className="btn-secondary inline-flex items-center gap-2">
                      Plan rollout
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
                          <div className="mb-1 text-sm text-slate-500">What this tool keeps</div>
                          <div className="text-xl font-semibold text-slate-950">Same productivity math, cleaner shell</div>
                        </div>
                        <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                          live ops
                        </div>
                      </div>

                      <div className="grid gap-3">
                        {[
                          ['Inputs', 'Team size、生产力、重复任务、预算和 AI readiness。'],
                          ['Outputs', 'Boost、time saved、savings、ROI、risk 和 payback。'],
                          ['Workflow', '保留完整的计算逻辑与结果展示。'],
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
                          这是 productivity assessment，不是“买点 AI 就会飞”的许愿池。
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

          <section id="productivity-tool" className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div className="max-w-3xl">
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Productivity assessment workspace
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                把团队人效、成本和 AI 空间一次看清。
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                输入照旧，输出照旧，只是现在不用盯着旧的蓝色卡片看半天。
              </p>
            </div>

            <div className="mt-10 grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-6">
                <div className="page-card-soft p-6 md:p-8">
                  <h3 className="text-2xl font-semibold text-slate-950">Team assessment inputs</h3>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <label className="space-y-2 text-sm md:col-span-2">
                      <span className="block font-medium text-slate-700">Team Size</span>
                      <input
                        type="number"
                        value={formData.teamSize}
                        onChange={(event) => handleInputChange('teamSize', Number.parseInt(event.target.value) || 0)}
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/15"
                        min="1"
                        max="1000"
                      />
                    </label>

                    <label className="space-y-2 text-sm">
                      <span className="block font-medium text-slate-700">Current Team Productivity</span>
                      <input
                        type="range"
                        min="20"
                        max="95"
                        value={formData.currentProductivity}
                        onChange={(event) => handleInputChange('currentProductivity', Number.parseInt(event.target.value) || 0)}
                        className="w-full accent-[#635bff]"
                      />
                      <div className="text-sm text-slate-500">{formData.currentProductivity}%</div>
                    </label>

                    <label className="space-y-2 text-sm">
                      <span className="block font-medium text-slate-700">Repetitive Tasks in Workflow</span>
                      <input
                        type="range"
                        min="10"
                        max="90"
                        value={formData.repetitiveTasks}
                        onChange={(event) => handleInputChange('repetitiveTasks', Number.parseInt(event.target.value) || 0)}
                        className="w-full accent-[#635bff]"
                      />
                      <div className="text-sm text-slate-500">{formData.repetitiveTasks}%</div>
                    </label>

                    {[
                      ['aiToolsBudget', 'Annual AI Tools Budget ($)', '50000'],
                    ].map(([field, label, placeholder]) => (
                      <label key={field} className="space-y-2 text-sm md:col-span-2">
                        <span className="block font-medium text-slate-700">{label}</span>
                        <input
                          type="number"
                          value={formData.aiToolsBudget}
                          onChange={(event) => handleInputChange(field, Number.parseInt(event.target.value) || 0)}
                          placeholder={placeholder}
                          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/15"
                          min="1000"
                          max="1000000"
                        />
                      </label>
                    ))}

                    <label className="space-y-2 text-sm">
                      <span className="block font-medium text-slate-700">Implementation Timeframe</span>
                      <select
                        value={formData.implementationTimeframe}
                        onChange={(event) => handleInputChange('implementationTimeframe', event.target.value)}
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/15"
                      >
                        <option value="fast">Fast (1-3 months)</option>
                        <option value="moderate">Moderate (3-6 months)</option>
                        <option value="slow">Slow (6+ months)</option>
                      </select>
                    </label>

                    <label className="space-y-2 text-sm">
                      <span className="block font-medium text-slate-700">Team Technical Skills</span>
                      <select
                        value={formData.teamTechSkills}
                        onChange={(event) => handleInputChange('teamTechSkills', event.target.value)}
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/15"
                      >
                        <option value="beginner">Beginner</option>
                        <option value="average">Average</option>
                        <option value="advanced">Advanced</option>
                        <option value="expert">Expert</option>
                      </select>
                    </label>

                    <label className="space-y-2 text-sm">
                      <span className="block font-medium text-slate-700">Workflow Complexity</span>
                      <select
                        value={formData.workflowComplexity}
                        onChange={(event) => handleInputChange('workflowComplexity', event.target.value)}
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/15"
                      >
                        <option value="simple">Simple</option>
                        <option value="medium">Medium</option>
                        <option value="complex">Complex</option>
                        <option value="very_complex">Very Complex</option>
                      </select>
                    </label>

                    <label className="space-y-2 text-sm">
                      <span className="block font-medium text-slate-700">Data Availability for AI</span>
                      <select
                        value={formData.dataAvailability}
                        onChange={(event) => handleInputChange('dataAvailability', event.target.value)}
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/15"
                      >
                        <option value="none">None/Limited</option>
                        <option value="some">Some Data Available</option>
                        <option value="good">Good Data Quality</option>
                        <option value="excellent">Excellent Data Infrastructure</option>
                      </select>
                    </label>

                    <label className="space-y-2 text-sm md:col-span-2">
                      <span className="block font-medium text-slate-700">Team AI Readiness</span>
                      <select
                        value={formData.aiReadiness}
                        onChange={(event) => handleInputChange('aiReadiness', event.target.value)}
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/15"
                      >
                        <option value="skeptical">Skeptical</option>
                        <option value="exploring">Exploring</option>
                        <option value="planning">Planning</option>
                        <option value="implementing">Implementing</option>
                        <option value="optimizing">Optimizing</option>
                      </select>
                    </label>
                  </div>
                </div>

                <div className="page-card-soft p-6 md:p-8">
                  <h3 className="text-2xl font-semibold text-slate-950">What gets returned</h3>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {[
                      ['Productivity boost', '预计的人效提升。'],
                      ['Time saved', '每月节省的工时。'],
                      ['ROI', '预算和回报的关系。'],
                      ['Risk assessment', '看团队准备度是否匹配。'],
                    ].map(([title, note]) => (
                      <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                        <div className="font-semibold text-slate-950">{title}</div>
                        <div className="mt-2 text-sm leading-6 text-slate-600">{note}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="page-card-glow p-1.5">
                  <div className="page-card-soft space-y-5 p-6 md:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-sm text-slate-500">Execution panel</div>
                        <div className="text-xl font-semibold text-slate-950">Analyze team productivity</div>
                      </div>
                      <div className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                        enterprise
                      </div>
                    </div>

                    <div className="grid gap-4">
                      {[
                        ['Team size', String(formData.teamSize)],
                        ['Budget', String(formData.aiToolsBudget)],
                        ['Skills', formData.teamTechSkills],
                        ['Readiness', formData.aiReadiness],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                          <div className="text-sm text-slate-500">{label}</div>
                          <div className="mt-1 text-lg font-semibold text-slate-950">{value}</div>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={handleCalculate}
                      className="btn-brand inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold"
                    >
                      Analyze Team Productivity Potential
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
                  ['Current Productivity', `${results.currentProductivity}%`],
                  ['Projected Productivity', `${results.newProductivity}%`],
                  ['Productivity Boost', `+${results.productivityBoost}%`],
                  ['Implementation Score', `${results.implementationScore}/100`],
                ].map(([label, value]) => (
                  <div key={label} className="page-card rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="text-sm text-slate-500">{label}</div>
                    <div className="mt-2 text-lg font-semibold text-slate-950">{value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-6">
                  <h3 className="text-lg font-semibold text-slate-950">Financial Impact</h3>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                    <p>Time saved: {results.timesSaved.toLocaleString()} hours/month.</p>
                    <p>Monthly cost savings: ${results.monthlySavings.toLocaleString()}.</p>
                    <p>Annual value: ${results.yearlyValue.toLocaleString()}.</p>
                    <p>ROI: {results.roiPercentage > 0 ? '+' : ''}{results.roiPercentage}%.</p>
                    <p>Payback period: {results.paybackPeriod} months.</p>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-amber-200 bg-amber-50/70 p-6">
                  <h3 className="text-lg font-semibold text-slate-950">Risk Assessment</h3>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                    <p>
                      Risk level: <span className={`font-semibold ${getRiskColor(results.riskLevel)}`}>{results.riskLevel}</span>
                    </p>
                    {results.riskFactors.length > 0 ? (
                      <ul className="space-y-2">
                        {results.riskFactors.map((factor) => (
                          <li key={factor}>• {factor}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>No major risks detected.</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-sky-200 bg-sky-50/70 p-6">
                <h3 className="text-lg font-semibold text-slate-950">Strategic Recommendations</h3>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                  {results.recommendations.map((rec) => (
                    <li key={rec}>• {rec}</li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          <section className="mt-16 text-center">
            <div className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="rounded-[1.5rem] bg-gradient-to-r from-[#0f172a] via-[#635bff] to-[#7c3aed] p-8 text-white">
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">Ready for enterprise AI implementation?</h3>
                <p className="mx-auto mt-3 max-w-2xl text-white/85">
                  把 productivity 先量出来，再决定要不要扩张工具、训练团队或重写流程。
                </p>
                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="/enterprise-ai-implementation-best-practices-2026" className="btn-brand bg-white text-slate-950 hover:bg-slate-100">
                    Implementation best practices
                  </Link>
                  <Link href="/apply-for-audit" className="btn-secondary border-white/25 bg-white/10 text-white hover:bg-white/15">
                    Schedule expert consultation
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
