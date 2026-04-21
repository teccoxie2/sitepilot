'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

type TimelinePhase = {
  name: string
  duration: number
  description: string
}

type TimelineData = {
  companySize: string
  industry: string
  complexity: string
  budget: string
  experience: string
  timeline: number
  phases: TimelinePhase[]
}

const pageTitle = 'AI Integration Timeline Calculator 2026 | SitePilot'
const pageDescription =
  'Estimate a realistic AI implementation timeline based on company size, industry, complexity, budget, and team experience.'
const pageUrl = 'https://sitepilot.co/ai-integration-timeline-calculator-2026'

const quickSignals = [
  'Keeps the original company-size, industry, complexity, budget, and experience inputs',
  'Preserves the calculated phase breakdown and rotating current-phase highlight',
  'Translates the result into implementation planning, checklist, and risk-assessment next steps',
  'Fits the shared light Stripe-ish calculator system used across the AI planning tools',
]

export default function AIIntegrationTimelineCalculator() {
  const [formData, setFormData] = useState({
    companySize: '',
    industry: '',
    complexity: '',
    budget: '',
    experience: '',
  })
  const [result, setResult] = useState<TimelineData | null>(null)
  const [currentPhase, setCurrentPhase] = useState(0)

  const calculateTimeline = () => {
    let baseWeeks = 12

    switch (formData.companySize) {
      case 'startup':
        baseWeeks *= 0.8
        break
      case 'sme':
        baseWeeks *= 1
        break
      case 'enterprise':
        baseWeeks *= 1.5
        break
      case 'fortune500':
        baseWeeks *= 2.2
        break
      default:
        break
    }

    switch (formData.industry) {
      case 'tech':
        baseWeeks *= 0.9
        break
      case 'finance':
        baseWeeks *= 1.3
        break
      case 'healthcare':
        baseWeeks *= 1.6
        break
      case 'manufacturing':
        baseWeeks *= 1.2
        break
      case 'retail':
        baseWeeks *= 1
        break
      default:
        break
    }

    switch (formData.complexity) {
      case 'simple':
        baseWeeks *= 0.7
        break
      case 'moderate':
        baseWeeks *= 1
        break
      case 'complex':
        baseWeeks *= 1.4
        break
      case 'enterprise':
        baseWeeks *= 1.8
        break
      default:
        break
    }

    switch (formData.budget) {
      case 'under50k':
        baseWeeks *= 1.3
        break
      case '50k-200k':
        baseWeeks *= 1
        break
      case '200k-500k':
        baseWeeks *= 0.8
        break
      case 'over500k':
        baseWeeks *= 0.6
        break
      default:
        break
    }

    switch (formData.experience) {
      case 'none':
        baseWeeks *= 1.5
        break
      case 'basic':
        baseWeeks *= 1.2
        break
      case 'intermediate':
        baseWeeks *= 1
        break
      case 'expert':
        baseWeeks *= 0.7
        break
      default:
        break
    }

    const totalWeeks = Math.round(baseWeeks)
    const phases: TimelinePhase[] = [
      {
        name: 'Strategy & Planning',
        duration: Math.round(totalWeeks * 0.2),
        description: 'Requirements gathering, vendor selection, and core team setup.',
      },
      {
        name: 'Pilot Development',
        duration: Math.round(totalWeeks * 0.3),
        description: 'Initial implementation, testing, and proof-of-concept delivery.',
      },
      {
        name: 'Integration & Testing',
        duration: Math.round(totalWeeks * 0.25),
        description: 'System integration, security validation, and performance tuning.',
      },
      {
        name: 'Deployment & Training',
        duration: Math.round(totalWeeks * 0.15),
        description: 'Go-live preparation, user training, and support setup.',
      },
      {
        name: 'Optimization & Scale',
        duration: Math.round(totalWeeks * 0.1),
        description: 'Continuous improvement, scaling, and post-launch refinement.',
      },
    ]

    setCurrentPhase(0)
    setResult({
      companySize: formData.companySize,
      industry: formData.industry,
      complexity: formData.complexity,
      budget: formData.budget,
      experience: formData.experience,
      timeline: totalWeeks,
      phases,
    })
  }

  useEffect(() => {
    if (!result) return

    const interval = setInterval(() => {
      setCurrentPhase((previous) => (previous + 1) % result.phases.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [result])

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-04-20"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                Project planning calculator
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                AI integration timeline,
                <span className="brand-gradient-text block">estimated from actual delivery constraints.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                Estimate a realistic implementation timeline based on company scale, industry complexity, budget, and team maturity.
                The goal is to stop teams from planning AI rollouts like generic software installs.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a href="#timeline-tool" className="btn-brand">
                  Calculate timeline
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link href="/ai-implementation-cost-calculator-enterprise-2026" className="btn-secondary">
                  Cost planning
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
                {quickSignals.map((item) => (
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
                      <div className="text-sm text-slate-500 mb-1">What this tool returns</div>
                      <div className="text-xl font-semibold text-slate-950">Timeline outputs</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      5-phase model
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      ['Total weeks', 'A project-level estimate transformed into an implementation horizon.'],
                      ['Phase breakdown', 'Planning, pilot, integration, deployment, and optimization durations.'],
                      ['Constraint profile', 'Inputs preserved so teams can explain why the estimate moved.'],
                      ['Next-step links', 'Risk, checklist, and consultation paths after the estimate is generated.'],
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
        <section id="timeline-tool" className="page-card p-8 md:p-10 mb-16 scroll-mt-28">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Timeline Tool</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Keep the inputs tight,
              <span className="block brand-gradient-text">so the estimate stays credible.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-8">
            <div className="page-card-soft p-6">
              <h3 className="text-2xl font-semibold text-slate-950 mb-6">Project parameters</h3>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Company size</label>
                  <select
                    value={formData.companySize}
                    onChange={(event) => setFormData({ ...formData, companySize: event.target.value })}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20"
                  >
                    <option value="">Select company size</option>
                    <option value="startup">Startup (1-50 employees)</option>
                    <option value="sme">SME (51-500 employees)</option>
                    <option value="enterprise">Enterprise (501-5,000 employees)</option>
                    <option value="fortune500">Fortune 500 (5,000+ employees)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Industry</label>
                  <select
                    value={formData.industry}
                    onChange={(event) => setFormData({ ...formData, industry: event.target.value })}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20"
                  >
                    <option value="">Select industry</option>
                    <option value="tech">Technology</option>
                    <option value="finance">Financial Services</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail &amp; E-commerce</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Implementation complexity</label>
                  <select
                    value={formData.complexity}
                    onChange={(event) => setFormData({ ...formData, complexity: event.target.value })}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20"
                  >
                    <option value="">Select complexity</option>
                    <option value="simple">Simple (Single tool/process)</option>
                    <option value="moderate">Moderate (Multiple tools)</option>
                    <option value="complex">Complex (Custom integration)</option>
                    <option value="enterprise">Enterprise (Full transformation)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Budget range</label>
                  <select
                    value={formData.budget}
                    onChange={(event) => setFormData({ ...formData, budget: event.target.value })}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20"
                  >
                    <option value="">Select budget range</option>
                    <option value="under50k">Under $50,000</option>
                    <option value="50k-200k">$50,000 - $200,000</option>
                    <option value="200k-500k">$200,000 - $500,000</option>
                    <option value="over500k">Over $500,000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Team AI experience</label>
                  <select
                    value={formData.experience}
                    onChange={(event) => setFormData({ ...formData, experience: event.target.value })}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20"
                  >
                    <option value="">Select experience level</option>
                    <option value="none">No prior AI experience</option>
                    <option value="basic">Basic AI knowledge</option>
                    <option value="intermediate">Some AI implementations</option>
                    <option value="expert">Extensive AI experience</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={calculateTimeline}
                  disabled={!Object.values(formData).every(Boolean)}
                  className="btn-brand w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Calculate timeline
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {result ? (
                <>
                  <div className="page-card-soft p-6">
                    <h3 className="text-2xl font-semibold text-slate-950 mb-4">Your AI implementation timeline</h3>
                    <div className="text-center">
                      <div className="text-5xl font-semibold tracking-[-0.05em] text-[#635bff] mb-2">{result.timeline}</div>
                      <div className="text-lg text-slate-700">weeks estimated</div>
                      <div className="text-sm text-slate-500 mt-2">
                        Approximately {Math.round(result.timeline / 4.33)} months
                      </div>
                    </div>
                  </div>

                  <div className="page-card-soft p-6">
                    <h3 className="text-2xl font-semibold text-slate-950 mb-5">Implementation phases</h3>
                    <div className="space-y-3">
                      {result.phases.map((phase, index) => (
                        <div
                          key={phase.name}
                          className={`rounded-2xl border px-4 py-4 transition-colors ${
                            currentPhase === index
                              ? 'border-[#635bff] bg-indigo-50'
                              : 'border-slate-200 bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-4 mb-2">
                            <div className="font-semibold text-slate-950">{phase.name}</div>
                            <div className="text-sm font-medium text-[#635bff]">{phase.duration} weeks</div>
                          </div>
                          <p className="text-sm text-slate-600">{phase.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="page-card-soft p-6">
                    <h3 className="text-2xl font-semibold text-slate-950 mb-4">Timeline factors</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div><strong>Company size:</strong> {formData.companySize}</div>
                      <div><strong>Industry:</strong> {formData.industry}</div>
                      <div><strong>Complexity:</strong> {formData.complexity}</div>
                      <div><strong>Budget:</strong> {formData.budget}</div>
                      <div><strong>Experience:</strong> {formData.experience}</div>
                    </div>
                  </div>

                  <div className="page-card-soft p-6">
                    <h3 className="text-2xl font-semibold text-slate-950 mb-4">Next steps</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <Link href="/enterprise-ai-risk-assessment-tool-2026" className="page-card p-4 hover:-translate-y-0.5 transition-transform">
                        <div className="font-semibold text-slate-950 mb-1">Enterprise AI Risk Assessment</div>
                        <div className="text-sm text-slate-600">Validate timeline assumptions against risk constraints.</div>
                      </Link>
                      <Link href="/ai-implementation-checklist-enterprise-2026" className="page-card p-4 hover:-translate-y-0.5 transition-transform">
                        <div className="font-semibold text-slate-950 mb-1">Implementation Checklist</div>
                        <div className="text-sm text-slate-600">Turn the timeline into phase-based delivery tasks.</div>
                      </Link>
                      <Link href="/apply-for-audit" className="page-card p-4 hover:-translate-y-0.5 transition-transform">
                        <div className="font-semibold text-slate-950 mb-1">Strategy Consultation</div>
                        <div className="text-sm text-slate-600">Get a tailored enterprise planning pass.</div>
                      </Link>
                      <Link href="/enterprise-ai-transformation-roadmap-2026" className="page-card p-4 hover:-translate-y-0.5 transition-transform">
                        <div className="font-semibold text-slate-950 mb-1">Transformation Roadmap</div>
                        <div className="text-sm text-slate-600">Compare your calculated timeline with a full-scale roadmap.</div>
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <div className="page-card-soft p-8 text-center">
                  <div className="text-6xl mb-4">⏱️</div>
                  <h3 className="text-2xl font-semibold text-slate-950 mb-2">Ready to calculate?</h3>
                  <p className="text-slate-600">
                    Fill out the form to generate a personalized AI implementation timeline and phased delivery plan.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="page-card-glow p-8 md:p-12 surface-muted mb-16">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Trust Signal</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Timeline planning should be credible enough
              <span className="block brand-gradient-text">for enterprise project managers to defend.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              This calculator is intentionally simple: it forces the discussion into the main delivery constraints instead of pretending precision where none exists.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
