'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  Calendar,
  CheckCircle2,
  Compass,
  DollarSign,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import { pageDescription, pageTitle, pageUrl } from './metadata'

interface FormData {
  companySize: string
  industry: string
  currentRecruitmentBudget: string
  averageTimeToHire: string
  currentTurnoverRate: string
  averageTrainingCostPerEmployee: string
  hrTeamSize: string
  currentProductivity: string
  aiToolsExperience: string
  primaryGoal: string
}

interface CalculationResults {
  costSavings: number
  timeToHireReduction: number
  turnoverReduction: number
  productivityGain: number
  annualSavings: number
  implementationCost: number
  roi: number
  paybackPeriod: number
  riskLevel: string
  timeframe: string
}

const heroSignals = [
  '保留招聘预算、离职率、培训成本和生产力输入',
  '保留节省、ROI、回收期和风险等级输出',
  '统一到当前浅色 Stripe-ish UI',
  '保留 enterprise HR planning 的内部链接和决策路径',
]

const statCards = [
  { label: 'Recruitment focus', value: 'Hiring', note: '先看招聘和时间成本。' },
  { label: 'Retention focus', value: 'Stability', note: '别把离职率当背景音乐。' },
  { label: 'Productivity focus', value: 'Output', note: '人效要算，不能靠感觉。' },
  { label: 'Decision level', value: 'Executive', note: '给老板和 HRD 一起看的。' },
]

const internalLinks = [
  { href: '/ai-tool-implementation-strategy-2026', title: 'AI Tool Implementation Strategy', note: '把 HR 方案接到落地路线。' },
  { href: '/enterprise-ai-implementation-best-practices-2026', title: 'Implementation Best Practices', note: '看企业级执行方法。' },
  { href: '/ai-implementation-cost-calculator-enterprise-2026', title: 'Implementation Cost Calculator', note: '把 ROI 和成本摆一起。' },
  { href: '/ai-tools', title: 'AI Tools Hub', note: '回到工具总目录。' },
  { href: '/apply-for-audit', title: 'Talk to SitePilot', note: '需要顾问式评估就直接约。' },
] as const

const companyOptions = [
  { value: 'startup', label: 'Startup (10-50 employees)' },
  { value: 'small', label: 'Small Business (51-200 employees)' },
  { value: 'medium', label: 'Medium Enterprise (201-1000 employees)' },
  { value: 'large', label: 'Large Enterprise (1001-5000 employees)' },
  { value: 'xlarge', label: 'Fortune 500 (5000+ employees)' },
]

const industryOptions = [
  { value: 'tech', label: 'Technology' },
  { value: 'finance', label: 'Financial Services' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'retail', label: 'Retail & E-commerce' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'consulting', label: 'Consulting' },
  { value: 'education', label: 'Education' },
  { value: 'other', label: 'Other' },
]

const experienceOptions = [
  { value: 'none', label: 'No AI tools experience' },
  { value: 'basic', label: 'Basic AI tools (ChatGPT, etc.)' },
  { value: 'intermediate', label: 'Some HR AI tools implemented' },
  { value: 'advanced', label: 'Comprehensive AI HR strategy' },
]

const goalOptions = [
  { value: 'recruitment', label: 'Optimize recruitment & hiring' },
  { value: 'retention', label: 'Improve employee retention' },
  { value: 'productivity', label: 'Increase team productivity' },
  { value: 'training', label: 'Enhance training & development' },
  { value: 'comprehensive', label: 'Complete HR optimization' },
]

const stepTitles = ['Company Overview', 'Current HR Metrics', 'AI Experience & Goals', 'Optimization Results']

export default function AITalentOptimizationCalculatorClient() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    companySize: '',
    industry: '',
    currentRecruitmentBudget: '',
    averageTimeToHire: '',
    currentTurnoverRate: '',
    averageTrainingCostPerEmployee: '',
    hrTeamSize: '',
    currentProductivity: '',
    aiToolsExperience: '',
    primaryGoal: '',
  })
  const [results, setResults] = useState<CalculationResults | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const calculateROI = () => {
    setIsCalculating(true)

    window.setTimeout(() => {
      const companyMultiplier = {
        startup: 1,
        small: 1.5,
        medium: 2.5,
        large: 4,
        xlarge: 6,
      }[formData.companySize] || 1

      const industryMultiplier = {
        tech: 1.3,
        finance: 1.2,
        healthcare: 1.1,
        retail: 1.0,
        manufacturing: 1.1,
        consulting: 1.25,
        education: 0.9,
        other: 1.0,
      }[formData.industry] || 1

      const currentBudget = Number.parseFloat(formData.currentRecruitmentBudget) || 100000
      const timeToHire = Number.parseFloat(formData.averageTimeToHire) || 30
      const turnoverRate = Number.parseFloat(formData.currentTurnoverRate) || 15

      const recruitmentEfficiency = Math.min(45, timeToHire * 0.4)
      const costSavings = currentBudget * 0.35 * companyMultiplier * industryMultiplier
      const turnoverReduction = Math.min(turnoverRate * 0.5, 8)
      const productivityGain = 25 * companyMultiplier * industryMultiplier
      const annualSavings = costSavings + (turnoverReduction / 100) * currentBudget * 2
      const implementationCost = Math.max(25000, currentBudget * 0.15)
      const roi = ((annualSavings - implementationCost) / implementationCost) * 100

      setResults({
        costSavings: Math.round(costSavings),
        timeToHireReduction: Math.round(recruitmentEfficiency),
        turnoverReduction: Math.round(turnoverReduction * 10) / 10,
        productivityGain: Math.round(productivityGain),
        annualSavings: Math.round(annualSavings),
        implementationCost: Math.round(implementationCost),
        roi: Math.round(roi),
        paybackPeriod: Math.round((implementationCost / (annualSavings / 12)) * 10) / 10,
        riskLevel: roi > 200 ? 'Low' : roi > 100 ? 'Medium' : 'High',
        timeframe: companyMultiplier > 3 ? '12-18 months' : '6-12 months',
      })

      setIsCalculating(false)
    }, 1200)
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
          <section className="page-hero relative">
            <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
              <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="max-w-3xl">
                  <div className="page-pill mb-6">
                    <Sparkles className="h-4 w-4 text-[#635bff]" />
                    Enterprise HR planning
                  </div>

                  <h1 className="page-title mb-6 text-5xl md:text-7xl">
                    AI Talent Optimization Calculator,
                    <span className="brand-gradient-text block">把招聘、留任和人效放进同一张账单。</span>
                  </h1>

                  <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                    这页保留原始的招聘预算、离职率、培训成本、生产力和 ROI 逻辑，只把壳子统一到当前浅色 Stripe-ish 系统。
                  </p>

                  <div className="mb-10 flex flex-wrap gap-3">
                    <a href="#talent-calculator" className="btn-brand inline-flex items-center gap-2">
                      Open calculator
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
                          <div className="text-xl font-semibold text-slate-950">Same HR logic, cleaner shell</div>
                        </div>
                        <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                          live ops
                        </div>
                      </div>

                      <div className="grid gap-3">
                        {[
                          ['Inputs', '公司规模、行业、预算、离职率、培训成本和人效。'],
                          ['Outputs', 'Savings、ROI、payback period、risk level 和 timeframe。'],
                          ['Workflow', '继续走公司概览、HR 指标、AI 经验和结果四步。'],
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
                          这是 HR ROI 工具，不是招聘海报。先算账，再谈愿景。
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

          <section id="talent-calculator" className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div className="max-w-3xl">
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Interactive calculator
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                把 HR 投入、效率和回报放到同一个模型里。
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                输入保留原样，只是现在它们被包进了统一的视觉系统。
              </p>
            </div>

            <div className="mt-10 grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-6">
                <div className="page-card-soft p-6 md:p-8">
                  <h3 className="text-2xl font-semibold text-slate-950">Company and HR inputs</h3>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <label className="space-y-2 text-sm md:col-span-2">
                      <span className="block font-medium text-slate-700">Company Size</span>
                      <select
                        value={formData.companySize}
                        onChange={(event) => handleInputChange('companySize', event.target.value)}
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/15"
                      >
                        <option value="">Select company size</option>
                        {companyOptions.map((option) => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </label>

                    <label className="space-y-2 text-sm md:col-span-2">
                      <span className="block font-medium text-slate-700">Industry</span>
                      <select
                        value={formData.industry}
                        onChange={(event) => handleInputChange('industry', event.target.value)}
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/15"
                      >
                        <option value="">Select industry</option>
                        {industryOptions.map((option) => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </label>

                    {[
                      ['currentRecruitmentBudget', 'Annual Recruitment Budget (USD)', '150000'],
                      ['averageTimeToHire', 'Average Time to Hire (days)', '45'],
                      ['currentTurnoverRate', 'Annual Turnover Rate (%)', '15'],
                      ['averageTrainingCostPerEmployee', 'Training Cost Per Employee (USD)', '5000'],
                      ['hrTeamSize', 'HR Team Size', '8'],
                      ['currentProductivity', 'Current HR Productivity Rating (1-10)', '6'],
                    ].map(([field, label, placeholder]) => (
                      <label key={field} className="space-y-2 text-sm">
                        <span className="block font-medium text-slate-700">{label}</span>
                        <input
                          type="number"
                          value={formData[field as keyof FormData]}
                          onChange={(event) => handleInputChange(field as keyof FormData, event.target.value)}
                          placeholder={placeholder}
                          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/15"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                <div className="page-card-soft p-6 md:p-8">
                  <h3 className="text-2xl font-semibold text-slate-950">AI readiness and goals</h3>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <label className="space-y-2 text-sm md:col-span-2">
                      <span className="block font-medium text-slate-700">Current AI Tools Experience</span>
                      <select
                        value={formData.aiToolsExperience}
                        onChange={(event) => handleInputChange('aiToolsExperience', event.target.value)}
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/15"
                      >
                        <option value="">Select experience level</option>
                        {experienceOptions.map((option) => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </label>

                    <label className="space-y-2 text-sm md:col-span-2">
                      <span className="block font-medium text-slate-700">Primary Optimization Goal</span>
                      <select
                        value={formData.primaryGoal}
                        onChange={(event) => handleInputChange('primaryGoal', event.target.value)}
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/15"
                      >
                        <option value="">Select goal</option>
                        {goalOptions.map((option) => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="page-card-glow p-1.5">
                  <div className="page-card-soft space-y-5 p-6 md:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-sm text-slate-500">Execution panel</div>
                        <div className="text-xl font-semibold text-slate-950">Optimize AI talent operations</div>
                      </div>
                      <div className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                        enterprise
                      </div>
                    </div>

                    <div className="grid gap-4">
                      {[
                        ['Company size', formData.companySize],
                        ['Industry', formData.industry],
                        ['Budget', formData.currentRecruitmentBudget],
                        ['Goal', formData.primaryGoal],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                          <div className="text-sm text-slate-500">{label}</div>
                          <div className="mt-1 text-lg font-semibold text-slate-950">{value || '未填写'}</div>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        setCurrentStep(4)
                        calculateROI()
                      }}
                      disabled={!formData.companySize || !formData.industry || !formData.aiToolsExperience || !formData.primaryGoal}
                      className="btn-brand inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Calculate ROI
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

          <section className="mt-16 grid gap-6 lg:grid-cols-2">
            <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <Shield className="h-4 w-4 text-indigo-600" />
                HR control points
              </div>
              <div className="mt-4 grid gap-3">
                {[
                  ['Recruiting discipline', 'Keep sourcing and screening measurable.'],
                  ['Retention lens', 'Track turnover before it turns into a surprise.'],
                  ['Training return', 'Invest where skills actually change output.'],
                  ['Executive review', 'Use the result in a budget meeting, not a slide deck.'],
                ].map(([label, status]) => (
                  <div key={label} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm">
                    <span className="font-medium text-slate-700">{label}</span>
                    <span className="text-slate-600">{status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <Calendar className="h-4 w-4 text-sky-600" />
                Next step after the number
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {[
                  ['Implementation plan', '/ai-tool-implementation-strategy-2026'],
                  ['Cost framing', '/ai-implementation-cost-calculator-enterprise-2026'],
                  ['Best practices', '/enterprise-ai-implementation-best-practices-2026'],
                  ['Consultation', '/apply-for-audit'],
                ].map(([label, href]) => (
                  <Link key={label} href={href} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 text-sm transition hover:border-sky-200 hover:bg-sky-50/70">
                    <div className="font-semibold text-slate-950">{label}</div>
                    <div className="mt-1 text-slate-600">Go there</div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {currentStep === 4 && (
            <section className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
              <div className="max-w-3xl">
                <div className="page-pill mb-4 inline-flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Results and recommendations
                </div>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950">结果出来了，别装作没看见。</h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  保留原来的输出逻辑，只是排版换成了统一的 light Stripe-ish system。
                </p>
              </div>

              {isCalculating ? (
                <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8 text-center text-slate-600">
                  Calculating ROI...
                </div>
              ) : results ? (
                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-6">
                    <h3 className="text-lg font-semibold text-slate-950">Key outputs</h3>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      {[
                        ['Annual savings', `$${results.annualSavings.toLocaleString()}`],
                        ['ROI', `${results.roi}%`],
                        ['Payback period', `${results.paybackPeriod} months`],
                        ['Risk level', results.riskLevel],
                        ['Time to hire reduction', `${results.timeToHireReduction}%`],
                        ['Productivity gain', `${results.productivityGain}%`],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-2xl border border-white bg-white p-4">
                          <div className="text-sm text-slate-500">{label}</div>
                          <div className="mt-1 text-lg font-semibold text-slate-950">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-sky-200 bg-sky-50/70 p-6">
                    <h3 className="text-lg font-semibold text-slate-950">Interpretation</h3>
                    <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                      <p>Turnover reduction: {results.turnoverReduction}%.</p>
                      <p>Implementation cost: ${results.implementationCost.toLocaleString()}.</p>
                      <p>Expected timeframe: {results.timeframe}.</p>
                      <p>这页已经把结果、风险和落地路径放到一起了。</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8 text-slate-600">
                  Complete the inputs to generate the ROI analysis.
                </div>
              )}
            </section>
          )}

          <section className="mt-16 text-center">
            <div className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="rounded-[1.5rem] bg-gradient-to-r from-[#0f172a] via-[#635bff] to-sky-500 p-8 text-white">
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">Ready to optimize your HR operations?</h3>
                <p className="mx-auto mt-3 max-w-2xl text-white/85">
                  把人效算清楚，才知道该先投工具、流程还是培训。
                </p>
                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="/enterprise-ai-implementation-best-practices-2026" className="btn-brand bg-white text-slate-950 hover:bg-slate-100">
                    Implementation best practices
                  </Link>
                  <Link href="/ai-tool-implementation-strategy-2026" className="btn-secondary border-white/25 bg-white/10 text-white hover:bg-white/15">
                    Implementation strategy
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
