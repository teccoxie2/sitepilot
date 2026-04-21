'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AlertCircle, ArrowRight, BarChart3, CheckCircle2, Sparkles, Target, TrendingUp, Zap } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

type FormData = {
  contentVolume: string
  currentEngagementRate: string
  targetAudience: string
  contentTypes: string[]
  aiToolsUsed: string
  optimizationGoals: string[]
  currentWorkflow: string
  teamSize: string
  monthlyBudget: string
}

type Recommendation = {
  type: string
  priority: 'High' | 'Medium' | 'Low'
  description: string
  impact: string
}

type Results = {
  currentEngagementRate: number
  newEngagementRate: number
  engagementIncrease: number
  productivityIncrease: number
  timeReduction: number
  monthlySavings: number
  annualSavings: number
  roiMultiplier: number
  riskLevel: 'High' | 'Medium' | 'Low'
  riskColor: string
  recommendations: Recommendation[]
}

const pageTitle = 'AI Content Optimization Framework 2026 | SitePilot'
const pageDescription =
  'Advanced content performance optimization using AI-driven insights, automation workflows, and predictive analytics.'
const pageUrl = 'https://sitepilot.co/ai-content-optimization-framework-2026'

const contentTypeOptions = [
  'Blog Posts',
  'Social Media',
  'Email Campaigns',
  'Video Content',
  'Infographics',
  'Podcasts',
  'Interactive Content',
  'Case Studies',
]

const optimizationGoalOptions = [
  'Increase Engagement',
  'Reduce Production Time',
  'Improve SEO Rankings',
  'Boost Conversion Rates',
  'Enhance Brand Consistency',
  'Scale Content Production',
]

const stepLabels = [
  { step: 1, title: 'Performance' },
  { step: 2, title: 'Strategy' },
  { step: 3, title: 'Resources' },
  { step: 4, title: 'Framework' },
]

const implementationTimeline = [
  {
    step: '1',
    title: 'Week 1-2: Foundation Setup',
    note: 'AI tools implementation, workflow automation, and team training.',
  },
  {
    step: '2',
    title: 'Week 3-4: Content Strategy Optimization',
    note: 'Content type diversification and audience targeting refinement.',
  },
  {
    step: '3',
    title: 'Week 5-8: Performance Monitoring & Iteration',
    note: 'Analytics setup, A/B testing, and continuous optimization.',
  },
]

const relatedResources = [
  {
    href: '/ai-content-marketing-strategy-2026',
    title: 'AI Content Marketing Strategy',
    description: 'Connect optimization work to the broader enterprise content operating model.',
  },
  {
    href: '/ai-content-performance-analytics-2026',
    title: 'Content Performance Analytics',
    description: 'Use analytics guidance to validate whether optimization changes produce real lift.',
  },
  {
    href: '/ai-marketing-attribution-analysis-tool-2026',
    title: 'Marketing Attribution Analysis',
    description: 'Tie content improvements back to pipeline, revenue, and channel contribution.',
  },
]

function priorityClasses(priority: Recommendation['priority']) {
  if (priority === 'High') {
    return 'bg-red-100 text-red-700'
  }

  if (priority === 'Medium') {
    return 'bg-amber-100 text-amber-700'
  }

  return 'bg-indigo-100 text-indigo-700'
}

export default function AIContentOptimizationFramework2026() {
  const [formData, setFormData] = useState<FormData>({
    contentVolume: '',
    currentEngagementRate: '',
    targetAudience: 'general',
    contentTypes: [],
    aiToolsUsed: '',
    optimizationGoals: [],
    currentWorkflow: 'manual',
    teamSize: '',
    monthlyBudget: '',
  })
  const [results, setResults] = useState<Results | null>(null)
  const [currentStep, setCurrentStep] = useState(1)

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }))
  }

  const handleArrayToggle = (field: 'contentTypes' | 'optimizationGoals', value: string) => {
    setFormData((current) => {
      const currentArray = current[field]

      return {
        ...current,
        [field]: currentArray.includes(value)
          ? currentArray.filter((item) => item !== value)
          : [...currentArray, value],
      }
    })
  }

  const generateRecommendations = (
    data: FormData,
    efficiency: number,
    engagement: number
  ): Recommendation[] => {
    const recommendations: Recommendation[] = []

    if ((parseInt(data.aiToolsUsed, 10) || 0) < 3) {
      recommendations.push({
        type: 'AI Tools',
        priority: 'High',
        description: 'Implement a broader AI content suite with drafting, editing, and workflow automation layers.',
        impact: 'Increase productivity by 40-60%',
      })
    }

    if (data.contentTypes.length < 3) {
      recommendations.push({
        type: 'Content Diversity',
        priority: 'Medium',
        description: 'Expand into video, interactive assets, and lifecycle content to reduce format concentration risk.',
        impact: 'Boost engagement by 25-35%',
      })
    }

    if (data.currentWorkflow === 'manual') {
      recommendations.push({
        type: 'Workflow Automation',
        priority: 'High',
        description: 'Implement automated distribution, review checkpoints, and performance tracking.',
        impact: 'Reduce manual work by 50-70%',
      })
    }

    if (data.targetAudience === 'general') {
      recommendations.push({
        type: 'Audience Targeting',
        priority: 'Medium',
        description: 'Develop audience-specific personas and content sequences instead of using one generic editorial stream.',
        impact: 'Improve conversion rates by 30-45%',
      })
    }

    if ((parseFloat(data.monthlyBudget) || 0) > 5000) {
      recommendations.push({
        type: 'Advanced Analytics',
        priority: 'Low',
        description: 'Add predictive analytics and real-time optimization once the core workflow is stable.',
        impact: 'Optimize performance continuously with an additional 15-20% ROI uplift',
      })
    }

    if (efficiency > 1.4 && engagement > 0.25) {
      recommendations.push({
        type: 'Scaling Readiness',
        priority: 'Low',
        description: 'Your current inputs support a scale phase. Focus on QA thresholds and executive reporting next.',
        impact: 'Sustain gains while expanding output volume',
      })
    }

    return recommendations
  }

  const calculateOptimization = () => {
    const volume = parseFloat(formData.contentVolume) || 0
    const currentEngagement = parseFloat(formData.currentEngagementRate) || 0
    const budget = parseFloat(formData.monthlyBudget) || 1000
    const aiToolsCount = parseInt(formData.aiToolsUsed, 10) || 0

    let efficiencyMultiplier = 1
    let engagementBoost = 0
    let costReduction = 0

    if (volume > 100) efficiencyMultiplier += 0.4
    else if (volume > 50) efficiencyMultiplier += 0.25
    else if (volume > 20) efficiencyMultiplier += 0.15

    if (aiToolsCount > 5) {
      efficiencyMultiplier += 0.35
      engagementBoost += 0.45
      costReduction += 0.25
    } else if (aiToolsCount > 3) {
      efficiencyMultiplier += 0.25
      engagementBoost += 0.3
      costReduction += 0.18
    } else if (aiToolsCount > 1) {
      efficiencyMultiplier += 0.15
      engagementBoost += 0.2
      costReduction += 0.12
    }

    const contentTypesCount = formData.contentTypes.length
    if (contentTypesCount > 4) engagementBoost += 0.25
    else if (contentTypesCount > 2) engagementBoost += 0.15

    if (formData.targetAudience !== 'general') {
      engagementBoost += 0.2
      efficiencyMultiplier += 0.1
    }

    efficiencyMultiplier += formData.optimizationGoals.length * 0.05

    if (formData.currentWorkflow === 'fully-automated') {
      efficiencyMultiplier += 0.3
      costReduction += 0.2
    } else if (formData.currentWorkflow === 'semi-automated') {
      efficiencyMultiplier += 0.2
      costReduction += 0.12
    }

    const newEngagementRate = Math.min(currentEngagement * (1 + engagementBoost), 15)
    const productivityIncrease = (efficiencyMultiplier - 1) * 100
    const monthlySavings = budget * costReduction
    const timeReduction = Math.min(productivityIncrease * 0.6, 60)
    const roiMultiplier = 1 + engagementBoost * 2 + costReduction * 1.5

    let riskLevel: Results['riskLevel'] = 'Low'
    let riskColor = 'text-indigo-600'

    if (aiToolsCount === 0 || contentTypesCount === 0) {
      riskLevel = 'High'
      riskColor = 'text-red-600'
    } else if (aiToolsCount < 3 || budget < 2000) {
      riskLevel = 'Medium'
      riskColor = 'text-amber-600'
    }

    setResults({
      currentEngagementRate: currentEngagement,
      newEngagementRate,
      engagementIncrease: newEngagementRate - currentEngagement,
      productivityIncrease,
      timeReduction,
      monthlySavings,
      annualSavings: monthlySavings * 12,
      roiMultiplier,
      riskLevel,
      riskColor,
      recommendations: generateRecommendations(formData, efficiencyMultiplier, engagementBoost),
    })
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-04-19"
        modifiedDate="2026-04-19"
        authorName="SitePilot Team"
      />

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                Interactive optimization planner
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                AI content optimization,
                <span className="brand-gradient-text block">framed as an operating system.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                Run a four-step assessment to estimate engagement lift, productivity gain, cost savings, and implementation risk
                before you commit to more tools or a larger content team.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a href="#optimization-tool" className="btn-brand">
                  Run the framework
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link href="/ai-content-marketing-strategy-2026" className="btn-secondary">
                  Strategy overview
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
                {[
                  'Preserves the multi-step optimization workflow and recommendation engine',
                  'Estimates engagement, productivity, savings, ROI, and implementation risk in one pass',
                  'Keeps the input set compact so content teams will actually finish the assessment',
                  'Routes the result toward strategy, analytics, and attribution next steps',
                ].map((item) => (
                  <div key={item} className="page-card p-4 flex items-start gap-3 bg-white/90">
                    <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
              <div className="relative page-card-glow p-5 md:p-6">
                <div className="page-card p-6 bg-white/95">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm text-slate-500 mb-1">Outputs</div>
                      <div className="text-xl font-semibold text-slate-950">What this tool gives back</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      4-step flow
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      ['Engagement lift', 'Projected movement from current to optimized engagement rate.'],
                      ['Productivity gain', 'Estimated output and time reduction from AI-assisted workflows.'],
                      ['Savings profile', 'Monthly and annual labor savings based on current budget.'],
                      ['Risk view', 'Implementation risk signal based on AI maturity, diversity, and budget.'],
                    ].map(([title, note]) => (
                      <div key={title} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                        <div className="font-semibold text-slate-950">{title}</div>
                        <div className="text-sm text-slate-500 mt-1">{note}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-14 md:py-18">
        <section id="optimization-tool" className="page-card p-8 md:p-10 mb-16">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Optimization Tool</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Keep the inputs practical,
              <span className="block brand-gradient-text">so the framework gets used.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {stepLabels.map((item) => (
              <button
                key={item.step}
                type="button"
                onClick={() => setCurrentStep(item.step)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  currentStep >= item.step ? 'bg-[#635bff] text-white' : 'bg-slate-100 text-slate-500'
                }`}
              >
                {item.step}. {item.title}
              </button>
            ))}
          </div>

          <div className="page-card-soft p-6 md:p-8">
            {currentStep === 1 && (
              <div>
                <h3 className="text-2xl font-semibold text-slate-950 mb-6 flex items-center gap-3">
                  <BarChart3 className="h-6 w-6 text-[#635bff]" />
                  Content performance analysis
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Monthly content volume</label>
                    <input
                      type="number"
                      value={formData.contentVolume}
                      onChange={(e) => handleInputChange('contentVolume', e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20"
                      placeholder="e.g. 50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Current engagement rate (%)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={formData.currentEngagementRate}
                      onChange={(e) => handleInputChange('currentEngagementRate', e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20"
                      placeholder="e.g. 3.5"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Target audience</label>
                    <select
                      value={formData.targetAudience}
                      onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20"
                    >
                      <option value="general">General Audience</option>
                      <option value="b2b">B2B Professionals</option>
                      <option value="b2c">B2C Consumers</option>
                      <option value="enterprise">Enterprise Decision Makers</option>
                      <option value="technical">Technical Professionals</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">AI tools currently used</label>
                    <input
                      type="number"
                      value={formData.aiToolsUsed}
                      onChange={(e) => handleInputChange('aiToolsUsed', e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20"
                      placeholder="e.g. 3"
                    />
                  </div>
                </div>

                <button type="button" onClick={() => setCurrentStep(2)} className="btn-brand mt-8">
                  Next: content strategy
                </button>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h3 className="text-2xl font-semibold text-slate-950 mb-6 flex items-center gap-3">
                  <Target className="h-6 w-6 text-[#635bff]" />
                  Content strategy configuration
                </h3>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">Content types</label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {contentTypeOptions.map((type) => (
                        <label key={type} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={formData.contentTypes.includes(type)}
                            onChange={() => handleArrayToggle('contentTypes', type)}
                            className="h-4 w-4 rounded border-slate-300 text-[#635bff] focus:ring-[#635bff]/30"
                          />
                          <span className="text-sm text-slate-700">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">Optimization goals</label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {optimizationGoalOptions.map((goal) => (
                        <label key={goal} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={formData.optimizationGoals.includes(goal)}
                            onChange={() => handleArrayToggle('optimizationGoals', goal)}
                            className="h-4 w-4 rounded border-slate-300 text-[#635bff] focus:ring-[#635bff]/30"
                          />
                          <span className="text-sm text-slate-700">{goal}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Current workflow type</label>
                    <select
                      value={formData.currentWorkflow}
                      onChange={(e) => handleInputChange('currentWorkflow', e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20"
                    >
                      <option value="manual">Fully Manual</option>
                      <option value="semi-automated">Semi-Automated</option>
                      <option value="fully-automated">Fully Automated</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                  <button type="button" onClick={() => setCurrentStep(1)} className="btn-secondary">
                    Back
                  </button>
                  <button type="button" onClick={() => setCurrentStep(3)} className="btn-brand">
                    Next: resources
                  </button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h3 className="text-2xl font-semibold text-slate-950 mb-6 flex items-center gap-3">
                  <Zap className="h-6 w-6 text-[#635bff]" />
                  Resource allocation
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Team size</label>
                    <input
                      type="number"
                      value={formData.teamSize}
                      onChange={(e) => handleInputChange('teamSize', e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20"
                      placeholder="e.g. 5"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Monthly content budget ($)</label>
                    <input
                      type="number"
                      value={formData.monthlyBudget}
                      onChange={(e) => handleInputChange('monthlyBudget', e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20"
                      placeholder="e.g. 5000"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                  <button type="button" onClick={() => setCurrentStep(2)} className="btn-secondary">
                    Back
                  </button>
                  <button type="button" onClick={() => setCurrentStep(4)} className="btn-brand">
                    Next: generate framework
                  </button>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div>
                <h3 className="text-2xl font-semibold text-slate-950 mb-6 flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-[#635bff]" />
                  Generate optimization framework
                </h3>
                <p className="text-slate-600 mb-6">
                  Run the model to generate your projected optimization gains, risk level, and next-step recommendations.
                </p>

                <div className="flex flex-wrap gap-3">
                  <button type="button" onClick={calculateOptimization} className="btn-brand">
                    Analyze and generate
                  </button>
                  <button type="button" onClick={() => setCurrentStep(3)} className="btn-secondary">
                    Back to edit
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {results && (
          <>
            <section className="page-card p-8 md:p-10 mb-16">
              <div className="max-w-3xl mb-8">
                <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Results</div>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                  Your AI content optimization framework,
                  <span className="block brand-gradient-text">translated into measurable upside.</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
                <div className="page-card-soft p-6">
                  <TrendingUp className="h-8 w-8 text-blue-600 mb-4" />
                  <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-1">+{results.engagementIncrease.toFixed(1)}%</div>
                  <div className="font-semibold text-slate-900 mb-2">Engagement boost</div>
                  <div className="text-sm text-slate-500">
                    {results.currentEngagementRate.toFixed(1)}% to {results.newEngagementRate.toFixed(1)}%
                  </div>
                </div>

                <div className="page-card-soft p-6">
                  <Zap className="h-8 w-8 text-indigo-600 mb-4" />
                  <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-1">+{results.productivityIncrease.toFixed(0)}%</div>
                  <div className="font-semibold text-slate-900 mb-2">Productivity gain</div>
                  <div className="text-sm text-slate-500">-{results.timeReduction.toFixed(0)}% time reduction</div>
                </div>

                <div className="page-card-soft p-6">
                  <BarChart3 className="h-8 w-8 text-violet-600 mb-4" />
                  <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-1">
                    ${results.monthlySavings.toLocaleString()}
                  </div>
                  <div className="font-semibold text-slate-900 mb-2">Monthly savings</div>
                  <div className="text-sm text-slate-500">${results.annualSavings.toLocaleString()} annually</div>
                </div>

                <div className="page-card-soft p-6">
                  <Target className="h-8 w-8 text-amber-600 mb-4" />
                  <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-1">{results.roiMultiplier.toFixed(1)}x</div>
                  <div className="font-semibold text-slate-900 mb-2">ROI multiplier</div>
                  <div className={`text-sm font-semibold ${results.riskColor}`}>{results.riskLevel} risk</div>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 px-6 py-6 mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <AlertCircle className={`h-5 w-5 ${results.riskColor}`} />
                  <h3 className="text-xl font-semibold text-slate-950">Risk assessment</h3>
                </div>
                <p className="text-slate-600">
                  Implementation risk is currently <span className={`font-semibold ${results.riskColor}`}>{results.riskLevel}</span>.
                  Teams with limited AI tooling, low budget, or low format diversity should fix those basics before chasing advanced optimization.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-950 mb-5">Strategic recommendations</h3>
                <div className="grid gap-4">
                  {results.recommendations.map((rec) => (
                    <div key={`${rec.type}-${rec.description}`} className="page-card-soft p-6">
                      <div className="flex items-center justify-between gap-4 mb-3 flex-wrap">
                        <div className="font-semibold text-slate-950">{rec.type}</div>
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${priorityClasses(rec.priority)}`}>
                          {rec.priority} priority
                        </span>
                      </div>
                      <p className="text-slate-600 mb-2">{rec.description}</p>
                      <div className="text-sm font-semibold text-[#635bff]">{rec.impact}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="page-card-glow p-8 md:p-12 surface-muted mb-16">
              <div className="max-w-3xl mb-8">
                <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Timeline</div>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                  Turn recommendations into a rollout,
                  <span className="block brand-gradient-text">not just a report.</span>
                </h2>
              </div>

              <div className="space-y-4">
                {implementationTimeline.map((item) => (
                  <div key={item.step} className="page-card p-5 flex items-start gap-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#635bff] text-sm font-semibold text-white">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-950 mb-1">{item.title}</div>
                      <div className="text-sm text-slate-600">{item.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        <section className="grid md:grid-cols-3 gap-6">
          {relatedResources.map((resource) => (
            <Link key={resource.href} href={resource.href} className="page-card p-8 hover:-translate-y-0.5 transition-transform">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">{resource.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{resource.description}</p>
              <div className="inline-flex items-center text-[#635bff] font-semibold">
                Open resource
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  )
}
