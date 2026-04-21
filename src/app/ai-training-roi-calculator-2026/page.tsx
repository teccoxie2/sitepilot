'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  BarChart3,
  BookOpen,
  Brain,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  DollarSign,
  Download,
  GraduationCap,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'

interface TrainingFormData {
  employeeCount: string
  industry: string
  annualTrainingBudget: string
  averageTrainingHours: string
  currentCompletionRate: string
  averageEmployeeSalary: string
  trainingMethods: string[]
  currentChallenges: string[]
  aiReadiness: string
  targetOutcomes: string[]
}

interface TrainingResults {
  currentCost: number
  annualSavings: number
  implementationCost: number
  roi: number
  paybackPeriod: number
  efficiencyGain: number
  completionImprovement: number
  timeReduction: number
  productivityIncrease: number
  engagementIncrease: number
  learningSpeedIncrease: number
  retentionImprovement: number
  riskLevel: string
  timeframe: string
}

export default function AITrainingROICalculator() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<TrainingFormData>({
    employeeCount: '',
    industry: '',
    annualTrainingBudget: '',
    averageTrainingHours: '',
    currentCompletionRate: '',
    averageEmployeeSalary: '',
    trainingMethods: [],
    currentChallenges: [],
    aiReadiness: '',
    targetOutcomes: [],
  })
  const [results, setResults] = useState<TrainingResults | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const industryOptions = [
    { value: 'technology', label: 'Technology' },
    { value: 'finance', label: 'Financial Services' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'retail', label: 'Retail' },
    { value: 'consulting', label: 'Consulting' },
    { value: 'education', label: 'Education' },
    { value: 'government', label: 'Government' },
    { value: 'other', label: 'Other' },
  ]

  const trainingMethodOptions = [
    { value: 'classroom', label: 'Traditional Classroom Training' },
    { value: 'elearning', label: 'E-learning Platforms' },
    { value: 'webinars', label: 'Live Webinars / Virtual Sessions' },
    { value: 'onthejob', label: 'On-the-job Training' },
    { value: 'mentoring', label: 'Mentoring / Coaching' },
    { value: 'microlearning', label: 'Microlearning Modules' },
    { value: 'simulation', label: 'Simulations / VR Training' },
    { value: 'conferences', label: 'External Conferences / Workshops' },
  ]

  const challengeOptions = [
    { value: 'engagement', label: 'Low learner engagement' },
    { value: 'completion', label: 'Poor completion rates' },
    { value: 'relevance', label: 'Content not relevant to roles' },
    { value: 'tracking', label: 'Difficulty tracking progress' },
    { value: 'personalization', label: 'One-size-fits-all approach' },
    { value: 'cost', label: 'High training costs' },
    { value: 'time', label: 'Limited time for training' },
    { value: 'measurement', label: 'Measuring training effectiveness' },
  ]

  const outcomeOptions = [
    { value: 'efficiency', label: 'Improve training efficiency' },
    { value: 'personalization', label: 'Personalize learning paths' },
    { value: 'completion', label: 'Increase completion rates' },
    { value: 'skills', label: 'Accelerate skill development' },
    { value: 'retention', label: 'Improve knowledge retention' },
    { value: 'compliance', label: 'Streamline compliance training' },
    { value: 'costs', label: 'Reduce training costs' },
    { value: 'analytics', label: 'Better learning analytics' },
  ]

  const readinessOptions = [
    { value: 'beginner', label: 'No AI training experience' },
    { value: 'basic', label: 'Basic AI tools (ChatGPT for content)' },
    { value: 'intermediate', label: 'Some AI-powered learning tools' },
    { value: 'advanced', label: 'Comprehensive AI learning strategy' },
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleMultiSelect = (
    field: keyof Pick<TrainingFormData, 'trainingMethods' | 'currentChallenges' | 'targetOutcomes'>,
    value: string,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: (prev[field] as string[]).includes(value)
        ? (prev[field] as string[]).filter((item) => item !== value)
        : [...(prev[field] as string[]), value],
    }))
  }

  const calculateROI = () => {
    setIsCalculating(true)

    setTimeout(() => {
      const employees = parseFloat(formData.employeeCount) || 500
      const trainingBudget = parseFloat(formData.annualTrainingBudget) || 200000
      const trainingHours = parseFloat(formData.averageTrainingHours) || 40
      const completionRate = parseFloat(formData.currentCompletionRate) || 65
      const avgSalary = parseFloat(formData.averageEmployeeSalary) || 75000

      const industryMultipliers = {
        technology: 1.4,
        finance: 1.3,
        healthcare: 1.2,
        consulting: 1.35,
        manufacturing: 1.15,
        retail: 1.1,
        education: 1.25,
        government: 1.05,
        other: 1.0,
      }

      const industryMultiplier = industryMultipliers[formData.industry as keyof typeof industryMultipliers] || 1.0
      const efficiencyGain = Math.min(50, 25 + formData.targetOutcomes.length * 3)
      const completionImprovement = Math.min(95, completionRate + (95 - completionRate) * 0.6)
      const timeReduction = Math.min(60, trainingHours * 0.4)

      const currentTrainingCost = (avgSalary / 2080) * trainingHours * employees + trainingBudget
      const timeValueSaved = ((avgSalary / 2080) * timeReduction * employees) * industryMultiplier
      const efficiencyValue = currentTrainingCost * (efficiencyGain / 100) * industryMultiplier
      const completionValue = ((completionImprovement - completionRate) / 100) * trainingBudget
      const totalBenefits = timeValueSaved + efficiencyValue + completionValue
      const implementationCost = Math.max(50000, trainingBudget * 0.25)
      const annualSavings = totalBenefits * 0.8
      const roi = ((annualSavings - implementationCost) / implementationCost) * 100
      const productivityIncrease = Math.round(efficiencyGain / 2 + formData.targetOutcomes.length * 2)
      const engagementIncrease = Math.round(30 + (formData.aiReadiness === 'advanced' ? 15 : 0))

      setResults({
        currentCost: Math.round(currentTrainingCost),
        annualSavings: Math.round(annualSavings),
        implementationCost: Math.round(implementationCost),
        roi: Math.round(roi),
        paybackPeriod: Math.round((implementationCost / (annualSavings / 12)) * 10) / 10,
        efficiencyGain: Math.round(efficiencyGain),
        completionImprovement: Math.round(completionImprovement),
        timeReduction: Math.round(timeReduction),
        productivityIncrease,
        engagementIncrease,
        learningSpeedIncrease: Math.round(25 + (industryMultiplier - 1) * 20),
        retentionImprovement: Math.round(35 + formData.targetOutcomes.length * 3),
        riskLevel: roi > 150 ? 'Low' : roi > 75 ? 'Medium' : 'High',
        timeframe: employees > 1000 ? '12-18 months' : '6-12 months',
      })

      setIsCalculating(false)
    }, 2500)
  }

  const stepTitles = ['Organization details', 'Current training program', 'Challenges & goals', 'ROI analysis']

  const choiceClass = (active: boolean) =>
    `rounded-2xl border px-4 py-4 text-left text-sm transition ${active ? 'border-indigo-300 bg-indigo-50 text-slate-950 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'}`

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_24%,#ffffff_56%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
        <div className="absolute inset-x-0 top-0 h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
        <section className="page-hero relative mb-10">
          <div className="page-hero-inner mx-auto pb-10 pt-12 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6">
                  <Sparkles className="h-4 w-4 text-[#635bff]" />
                  AI training ROI calculator 2026
                </div>
                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  AI 培训 ROI 计算器，
                  <span className="brand-gradient-text block">别再把学习项目当成本黑洞。</span>
                </h1>
                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  这页保留原有四步计算流程、行业系数、ROI 逻辑、结果指标和内部链接，只把交互界面统一到当前浅色 Stripe-ish 系统。L&D 页面也该像产品，不该像旧式企业表单墓地。
                </p>
                <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
                  {[
                    ['8 分钟', '完成一次定制化测算'],
                    ['4 步', '组织信息到 ROI 结果'],
                    ['280%', '示例年内平均 ROI'],
                    ['68%', '示例完成率提升'],
                  ].map(([value, label]) => (
                    <div key={label} className="page-card bg-white/90 p-4">
                      <div className="mb-1 text-3xl font-semibold tracking-[-0.04em] text-slate-950">{value}</div>
                      <div className="text-sm text-slate-600">{label}</div>
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
                        <div className="mb-1 text-sm text-slate-500">Calculator frame</div>
                        <div className="text-xl font-semibold text-slate-950">你会得到什么</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        可执行结果
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[
                        '年度节省额、实施成本和 ROI',
                        '回本周期、效率提升和完成率改善',
                        '学习速度、参与度和知识保留改善',
                        '风险等级与建议实施时间窗',
                      ].map((item) => (
                        <div key={item} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4 text-sm text-slate-600">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="page-card h-fit p-6 lg:sticky lg:top-8">
            <div className="mb-5 flex items-center gap-3">
              <Target className="h-5 w-5 text-[#635bff]" />
              <h2 className="text-lg font-semibold text-slate-950">Progress</h2>
            </div>
            <div className="space-y-4">
              {stepTitles.map((title, index) => (
                <div key={title} className="flex items-center gap-3">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${index + 1 < currentStep ? 'bg-indigo-100 text-indigo-700' : index + 1 === currentStep ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-400'}`}>
                    {index + 1 < currentStep ? <CheckCircle className="h-4 w-4" /> : index + 1}
                  </div>
                  <span className={`text-sm ${index + 1 <= currentStep ? 'text-slate-900' : 'text-slate-400'}`}>{title}</span>
                </div>
              ))}
            </div>
          </aside>

          <div className="page-card p-8 md:p-10">
            {currentStep === 1 && (
              <div>
                <div className="mb-8">
                  <h2 className="mb-2 text-3xl font-semibold tracking-[-0.03em] text-slate-950">Organization details</h2>
                  <p className="text-slate-600">先把组织规模、预算和行业说清楚，后面结果才不至于瞎飘。</p>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">Number of employees</label>
                      <input value={formData.employeeCount} onChange={(e) => handleInputChange('employeeCount', e.target.value)} placeholder="500" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-0 transition focus:border-indigo-300 focus:bg-indigo-50/30" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">Annual training budget (USD)</label>
                      <input value={formData.annualTrainingBudget} onChange={(e) => handleInputChange('annualTrainingBudget', e.target.value)} placeholder="200000" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-0 transition focus:border-indigo-300 focus:bg-indigo-50/30" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-medium text-slate-700">Industry</label>
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                      {industryOptions.map((option) => (
                        <button key={option.value} onClick={() => handleInputChange('industry', option.value)} className={choiceClass(formData.industry === option.value)}>
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button onClick={() => setCurrentStep(2)} disabled={!formData.employeeCount || !formData.industry || !formData.annualTrainingBudget} className="btn-brand inline-flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-50">
                    Continue <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <div className="mb-8">
                  <h2 className="mb-2 text-3xl font-semibold tracking-[-0.03em] text-slate-950">Current training program</h2>
                  <p className="text-slate-600">看清现在的训练方式、时间投入和完成率，才知道 AI 能不能真帮上忙。</p>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">Average training hours per employee</label>
                      <input value={formData.averageTrainingHours} onChange={(e) => handleInputChange('averageTrainingHours', e.target.value)} placeholder="40" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-300 focus:bg-indigo-50/30" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">Current completion rate (%)</label>
                      <input value={formData.currentCompletionRate} onChange={(e) => handleInputChange('currentCompletionRate', e.target.value)} placeholder="65" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-300 focus:bg-indigo-50/30" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Average employee salary (USD)</label>
                    <input value={formData.averageEmployeeSalary} onChange={(e) => handleInputChange('averageEmployeeSalary', e.target.value)} placeholder="75000" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-300 focus:bg-indigo-50/30" />
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-medium text-slate-700">Current training methods</label>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {trainingMethodOptions.map((option) => (
                        <button key={option.value} onClick={() => handleMultiSelect('trainingMethods', option.value)} className={choiceClass(formData.trainingMethods.includes(option.value))}>
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-between">
                  <button onClick={() => setCurrentStep(1)} className="btn-secondary">Back</button>
                  <button onClick={() => setCurrentStep(3)} disabled={!formData.averageTrainingHours || !formData.currentCompletionRate || formData.trainingMethods.length === 0} className="btn-brand inline-flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-50">
                    Continue <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <div className="mb-8">
                  <h2 className="mb-2 text-3xl font-semibold tracking-[-0.03em] text-slate-950">Challenges & goals</h2>
                  <p className="text-slate-600">把当前问题和目标挑出来，结果才会更像决策工具，不像算命。</p>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="mb-3 block text-sm font-medium text-slate-700">Current training challenges</label>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {challengeOptions.map((option) => (
                        <button key={option.value} onClick={() => handleMultiSelect('currentChallenges', option.value)} className={choiceClass(formData.currentChallenges.includes(option.value))}>
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-medium text-slate-700">AI readiness level</label>
                    <div className="space-y-3">
                      {readinessOptions.map((option) => (
                        <button key={option.value} onClick={() => handleInputChange('aiReadiness', option.value)} className={choiceClass(formData.aiReadiness === option.value)}>
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-medium text-slate-700">Target outcomes</label>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {outcomeOptions.map((option) => (
                        <button key={option.value} onClick={() => handleMultiSelect('targetOutcomes', option.value)} className={choiceClass(formData.targetOutcomes.includes(option.value))}>
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-between">
                  <button onClick={() => setCurrentStep(2)} className="btn-secondary">Back</button>
                  <button onClick={() => { setCurrentStep(4); calculateROI() }} disabled={!formData.aiReadiness || formData.targetOutcomes.length === 0} className="btn-brand inline-flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-50">
                    Calculate ROI <BarChart3 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div>
                {isCalculating ? (
                  <div className="py-20 text-center">
                    <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-[#635bff]" />
                    <h3 className="mb-2 text-xl font-semibold text-slate-950">Analyzing your L&D optimization potential</h3>
                    <p className="text-slate-600">在算训练效率、完成率、时间节省和财务影响。别急，几秒钟。</p>
                  </div>
                ) : results ? (
                  <div>
                    <div className="mb-8">
                      <h2 className="mb-2 text-3xl font-semibold tracking-[-0.03em] text-slate-950">Your AI training ROI analysis</h2>
                      <p className="text-slate-600">下面这些结果保留原始计算逻辑，只把展示方式整理得更像一个靠谱工具。</p>
                    </div>

                    <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                      {[
                        { label: 'Annual savings', value: `$${results.annualSavings.toLocaleString()}`, icon: DollarSign },
                        { label: 'ROI', value: `${results.roi}%`, icon: TrendingUp },
                        { label: 'Payback period', value: `${results.paybackPeriod} months`, icon: Clock },
                      ].map((item) => {
                        const Icon = item.icon
                        return (
                          <div key={item.label} className="page-card p-6">
                            <div className="flex items-center gap-3">
                              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                                <Icon className="h-5 w-5 text-[#635bff]" />
                              </div>
                              <div>
                                <div className="text-sm text-slate-500">{item.label}</div>
                                <div className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">{item.value}</div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                      {[
                        [`${results.efficiencyGain}%`, 'Training efficiency'],
                        [`${results.completionImprovement}%`, 'Completion rate'],
                        [`${results.timeReduction}%`, 'Time reduction'],
                        [`${results.productivityIncrease}%`, 'Productivity gain'],
                      ].map(([value, label]) => (
                        <div key={label} className="page-card bg-slate-50/80 p-4 text-center">
                          <div className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">{value}</div>
                          <div className="mt-1 text-sm text-slate-600">{label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mb-8 grid gap-6 lg:grid-cols-2">
                      <div className="page-card p-6">
                        <h3 className="mb-4 text-lg font-semibold text-slate-950">Learning impact breakdown</h3>
                        <div className="space-y-4 text-sm">
                          {[
                            ['Learning speed increase', `${results.learningSpeedIncrease}%`],
                            ['Engagement improvement', `${results.engagementIncrease}%`],
                            ['Knowledge retention', `${results.retentionImprovement}%`],
                            ['Current training cost', `$${results.currentCost.toLocaleString()}`],
                            ['Implementation investment', `$${results.implementationCost.toLocaleString()}`],
                            ['Risk level', results.riskLevel],
                          ].map(([label, value]) => (
                            <div key={label} className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3">
                              <span className="text-slate-500">{label}</span>
                              <span className="font-medium text-slate-950">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="page-card-glow p-6 surface-muted">
                        <h3 className="mb-4 text-lg font-semibold text-slate-950">AI training transformation features</h3>
                        <div className="space-y-3 text-sm text-slate-600">
                          {[
                            'Personalized learning paths by role, skill level, and style',
                            'Adaptive content delivery and difficulty adjustment',
                            'Knowledge-gap detection with targeted recommendations',
                            'Automated compliance tracking and certification management',
                            'Predictive analytics for learning outcomes and business impact',
                            `Expected implementation timeframe: ${results.timeframe}`,
                          ].map((item) => (
                            <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-slate-200 pt-8">
                      <h3 className="mb-3 text-lg font-semibold text-slate-950">Ready to transform your L&D program?</h3>
                      <p className="mb-6 text-slate-600">下一步很简单：拿这些结果去做实施策略，不要把它们埋进下载文件夹吃灰。</p>
                      <div className="flex flex-col gap-4 sm:flex-row">
                        <Link href="/ai-tool-implementation-strategy-2026" className="btn-brand inline-flex items-center justify-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Schedule strategy session
                        </Link>
                        <Link href="/ai-training-roi-calculator-2026" className="btn-secondary inline-flex items-center justify-center gap-2">
                          <Download className="h-4 w-4" />
                          Download L&D transformation guide
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </section>

        <section className="mt-16 page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-8 shadow-sm">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-2xl font-semibold text-white">Proven results from L&D leaders</h2>
            <p className="text-slate-300">原来的成功指标保留：完成率、时间缩减、年内 ROI。只是终于没那么像十年前的黑底宣传页。</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { value: '68%', label: 'Average increase in learning completion rates', Icon: GraduationCap },
              { value: '45%', label: 'Reduction in training delivery time', Icon: Clock },
              { value: '280%', label: 'Average ROI within first year', Icon: TrendingUp },
            ].map(({ value, label, Icon }) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="text-3xl font-semibold tracking-[-0.03em] text-white">{value}</div>
                <p className="mt-2 text-sm text-slate-300">{label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
