'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'AI Content Audit Tool 2026 | SitePilot'
const pageDescription =
  'Analyze your content strategy and identify AI optimization opportunities to improve quality, efficiency, and ROI.'
const pageUrl = 'https://sitepilot.co/ai-content-audit-tool-2026'

type Recommendation = {
  priority: string
  action: string
  impact: string
  timeframe: string
}

type AuditResults = {
  qualityScore: number
  efficiencyGain: number
  monthlyCostSavings: number
  trafficIncrease: number
  conversionIncrease: number
  roi: number
  recommendations: Recommendation[]
}

export default function AIContentAuditTool() {
  const [auditData, setAuditData] = useState({
    contentVolume: '100',
    contentTypes: ['blog'],
    currentPerformance: '50',
    aiUsage: 'none',
    businessGoals: 'traffic',
  })

  const [results, setResults] = useState<AuditResults | null>(null)

  const handleInputChange = (field: string, value: string | string[]) => {
    setAuditData((current) => ({ ...current, [field]: value }))
  }

  const generateRecommendations = (
    data: typeof auditData,
    quality: number,
    efficiency: number
  ): Recommendation[] => {
    const recommendations: Recommendation[] = []

    if (data.aiUsage === 'none') {
      recommendations.push({
        priority: 'High',
        action: 'Start with AI content optimization',
        impact: 'Immediate 40% efficiency gain',
        timeframe: '1-2 weeks',
      })
    }

    if (quality < 70) {
      recommendations.push({
        priority: 'High',
        action: 'Content quality assessment and improvement',
        impact: `Potential ${100 - quality}% quality increase`,
        timeframe: '2-4 weeks',
      })
    }

    if (data.contentTypes.length < 3) {
      recommendations.push({
        priority: 'Medium',
        action: 'Diversify content formats',
        impact: 'Reach broader audience segments',
        timeframe: '4-6 weeks',
      })
    }

    if (efficiency < 30) {
      recommendations.push({
        priority: 'High',
        action: 'Implement AI workflow automation',
        impact: 'Reduce production time by 50%',
        timeframe: '2-3 weeks',
      })
    }

    return recommendations
  }

  const calculateAudit = () => {
    const volume = parseInt(auditData.contentVolume, 10)
    const performance = parseInt(auditData.currentPerformance, 10)
    const aiMultiplier =
      auditData.aiUsage === 'none' ? 1 : auditData.aiUsage === 'basic' ? 1.3 : 2.2
    const typeMultiplier = auditData.contentTypes.length * 0.3 + 0.7

    const qualityScore = Math.min(95, Math.round(performance * aiMultiplier * typeMultiplier))
    const efficiencyGain = auditData.aiUsage === 'none' ? 40 : auditData.aiUsage === 'basic' ? 25 : 15
    const monthlyCostSavings = Math.round(volume * 15 * (efficiencyGain / 100))
    const trafficIncrease = Math.round(qualityScore * 0.8)
    const conversionIncrease = Math.round(qualityScore * 0.3)
    const monthlyAIToolCost = auditData.aiUsage === 'advanced' ? 500 : 200
    const roi = Math.round(((monthlyCostSavings * 12) / (monthlyAIToolCost * 12)) * 100)

    setResults({
      qualityScore,
      efficiencyGain,
      monthlyCostSavings,
      trafficIncrease,
      conversionIncrease,
      roi,
      recommendations: generateRecommendations(auditData, qualityScore, efficiencyGain),
    })
  }

  const contentTypeOptions = ['blog', 'social', 'email', 'video', 'podcasts', 'whitepapers']

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
                Enterprise content strategy audit
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Audit your content stack.
                <span className="brand-gradient-text block">Find the AI leverage.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                Analyze your current content operation, estimate the likely impact of AI optimization, and prioritize the next moves
                that improve quality, efficiency, and ROI instead of adding more content noise.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a href="#audit-tool" className="btn-brand">
                  Run the audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link href="/ai-content-workflow-automation-2026" className="btn-secondary">
                  Review workflow automation
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
                {[
                  'Estimate quality, efficiency, savings, traffic, and conversion lift in one flow',
                  'Keep the calculator simple enough for teams to actually use',
                  'Translate AI usage level into operational next steps',
                  'Route the result into workflow, analytics, and writing-tool decisions',
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
                      <div className="text-sm text-slate-500 mb-1">Tool output</div>
                      <div className="text-xl font-semibold text-slate-950">What this audit estimates</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      5-minute pass
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      ['Quality score', 'Current content quality after AI optimization potential is applied'],
                      ['Efficiency gain', 'Estimated production-speed improvement based on current AI maturity'],
                      ['Cost savings', 'Monthly labor savings from better workflows and automation'],
                      ['Growth upside', 'Traffic and conversion improvement from stronger content quality'],
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
        <section id="audit-tool" className="page-card p-8 md:p-10 mb-16">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Assessment</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Keep the inputs light,
              <span className="block brand-gradient-text">so the audit gets used.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              This calculator is opinionated by design. It asks for only the variables that materially shift operational outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Monthly content volume</label>
              <select
                value={auditData.contentVolume}
                onChange={(e) => handleInputChange('contentVolume', e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20"
              >
                <option value="50">1-50 pieces</option>
                <option value="100">51-100 pieces</option>
                <option value="200">101-200 pieces</option>
                <option value="500">200+ pieces</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Current AI usage level</label>
              <select
                value={auditData.aiUsage}
                onChange={(e) => handleInputChange('aiUsage', e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20"
              >
                <option value="none">No AI tools currently</option>
                <option value="basic">Basic AI assistance</option>
                <option value="advanced">Advanced AI workflow integration</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Current content performance score</label>
              <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 px-5 py-5">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={auditData.currentPerformance}
                  onChange={(e) => handleInputChange('currentPerformance', e.target.value)}
                  className="w-full accent-[#635bff]"
                />
                <div className="text-center text-2xl font-semibold tracking-[-0.04em] text-indigo-700 mt-3">
                  {auditData.currentPerformance}/100
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Primary business goal</label>
              <select
                value={auditData.businessGoals}
                onChange={(e) => handleInputChange('businessGoals', e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20"
              >
                <option value="traffic">Increase website traffic</option>
                <option value="leads">Generate more leads</option>
                <option value="brand">Build brand authority</option>
                <option value="efficiency">Improve content efficiency</option>
                <option value="revenue">Drive direct revenue</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-semibold text-slate-700 mb-3">Content types</label>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {contentTypeOptions.map((type) => (
                <label key={type} className="page-card p-4 flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={auditData.contentTypes.includes(type)}
                    onChange={(e) => {
                      const nextTypes = e.target.checked
                        ? [...auditData.contentTypes, type]
                        : auditData.contentTypes.filter((currentType) => currentType !== type)
                      handleInputChange('contentTypes', nextTypes)
                    }}
                    className="h-4 w-4 rounded border-slate-300 text-[#635bff]"
                  />
                  <span className="capitalize text-sm text-slate-700">{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <button onClick={calculateAudit} className="btn-brand">
              Generate content audit report
            </button>
          </div>
        </section>

        {results ? (
          <section className="page-card-glow p-8 md:p-10 surface-muted mb-16">
            <div className="max-w-3xl mb-8">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Results</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                Turn content sprawl into
                <span className="block brand-gradient-text">an operational plan.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                These outputs show the likely upside of AI optimization based on your current publishing load, performance, and workflow maturity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 mb-6">
              {[
                { label: 'Content quality score', value: `${results.qualityScore}%` },
                { label: 'Efficiency gain', value: `${results.efficiencyGain}%` },
                { label: 'Monthly cost savings', value: `$${results.monthlyCostSavings}` },
              ].map((item) => (
                <div key={item.label} className="page-card p-6 text-center">
                  <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-2">{item.value}</div>
                  <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="page-card p-6">
                <div className="text-lg font-semibold text-slate-950 mb-4">Performance improvements</div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5">
                    <div className="text-sm text-slate-500 mb-2">Traffic increase</div>
                    <div className="text-3xl font-semibold text-indigo-700">{results.trafficIncrease}%</div>
                    <div className="text-sm text-slate-500 mt-1">Expected within 6 months</div>
                  </div>
                  <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5">
                    <div className="text-sm text-slate-500 mb-2">Conversion lift</div>
                    <div className="text-3xl font-semibold text-indigo-700">{results.conversionIncrease}%</div>
                    <div className="text-sm text-slate-500 mt-1">From stronger content quality</div>
                  </div>
                </div>
              </div>

              <div className="page-card p-6">
                <div className="text-lg font-semibold text-slate-950 mb-4">ROI analysis</div>
                <div className="rounded-[1.5rem] border border-indigo-100 bg-indigo-50/80 p-6">
                  <div className="text-4xl font-semibold tracking-[-0.05em] text-indigo-700 mb-2">{results.roi}%</div>
                  <div className="font-semibold text-indigo-900 mb-2">Annual ROI</div>
                  <p className="text-sm text-slate-600">
                    Based on efficiency gains and cost savings from AI content optimization.
                  </p>
                </div>
              </div>
            </div>

            <div className="page-card p-6 mb-6">
              <div className="text-lg font-semibold text-slate-950 mb-4">Priority recommendations</div>
              <div className="space-y-4">
                {results.recommendations.map((rec) => (
                  <div key={rec.action} className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <div className="font-semibold text-slate-950">{rec.action}</div>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          rec.priority === 'High'
                            ? 'border border-rose-100 bg-rose-50 text-rose-700'
                            : 'border border-amber-100 bg-amber-50 text-amber-700'
                        }`}
                      >
                        {rec.priority} priority
                      </span>
                    </div>
                    <div className="text-slate-600 mb-2">{rec.impact}</div>
                    <div className="text-sm text-slate-500">Timeline: {rec.timeframe}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="page-card p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-950 mb-2">Ready to optimize the content operation?</h3>
                  <p className="text-slate-600">Move from this quick audit into workflow automation, writing tools, and analytics decisions.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/ai-content-workflow-automation-2026" className="btn-brand">
                    Open workflow guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link href="/best-ai-writing-tools-2026" className="btn-secondary">
                    Compare writing tools
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="page-card p-8">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Why this matters</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Content auditing matters more
              <span className="block brand-gradient-text">when AI changes the cost curve.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-[1.75rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6">
              <h3 className="text-xl font-semibold text-slate-950 mb-4">Current market reality</h3>
              <ul className="space-y-3 text-slate-600">
                <li>87% of businesses still struggle with content ROI measurement.</li>
                <li>Average content marketing costs are still rising year over year.</li>
                <li>AI-optimized content tends to outperform traditional workflows materially.</li>
                <li>Most teams still lack a systematic content-audit process.</li>
              </ul>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6">
              <h3 className="text-xl font-semibold text-slate-950 mb-4">2026 competitive advantages</h3>
              <ul className="space-y-3 text-slate-600">
                <li>AI-powered personalization at scale.</li>
                <li>Real-time content performance optimization.</li>
                <li>Automated A/B testing and faster iteration loops.</li>
                <li>Cross-platform content repurposing efficiency.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-amber-100 bg-amber-50/70 p-5 text-amber-900">
            <strong>Pro tip:</strong> teams that run quarterly content audits usually see materially better ROI than teams publishing without a systematic feedback loop.
          </div>
        </section>
      </main>
    </div>
  )
}
