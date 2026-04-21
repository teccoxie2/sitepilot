'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, BarChart3, CheckCircle2, Clock3, DollarSign, Sparkles, Target } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

type PackageKey = 'basic' | 'standard' | 'premium' | 'enterprise'

type PackageConfig = {
  cost: number
  efficiency: number
  name: string
  badge: string
  includes: string[]
  savings: string[]
}

type Results = {
  roi: number
  weeklyTimeSaved: number
  netSavings: number
  paybackMonths: number | null
  annualNetSavings: number
  monthlyTimeSaved: number
  monthlySavings: number
  laborCosts: number
  weeklyHours: number
  hourlyRate: number
  pkg: PackageConfig
}

const packages: Record<PackageKey, PackageConfig> = {
  basic: {
    cost: 35,
    efficiency: 0.6,
    name: 'Basic Package',
    badge: '280% ROI',
    includes: [
      'ChatGPT Plus ($20/month)',
      'Grammarly Business ($15/month)',
      'Basic implementation guide',
      'Template library access',
    ],
    savings: ['8-12 hours/week saved', '$800-1,200/month labor savings', 'Around 3-month payback'],
  },
  standard: {
    cost: 99,
    efficiency: 0.75,
    name: 'Standard Package',
    badge: '380% ROI',
    includes: [
      'Everything in Basic',
      'Zapier Professional',
      'Advanced automation templates',
      'CRM and email workflow setup',
    ],
    savings: ['15-20 hours/week saved', '$1,500-2,500/month labor savings', 'Around 2-month payback'],
  },
  premium: {
    cost: 199,
    efficiency: 0.85,
    name: 'Premium Package',
    badge: '450% ROI',
    includes: [
      'Everything in Standard',
      'Copy.ai Pro',
      'Canva Pro and Buffer Publish',
      'Advanced analytics support',
    ],
    savings: ['20-25 hours/week saved', '$2,500-4,000/month labor savings', 'Around 1.5-month payback'],
  },
  enterprise: {
    cost: 399,
    efficiency: 0.92,
    name: 'Enterprise Package',
    badge: 'Best for scale',
    includes: [
      'Full-stack AI workflow package',
      'Advanced automation and reporting',
      'Higher-volume collaboration setup',
      'Deeper implementation support',
    ],
    savings: ['25+ hours/week saved', '$4,000+/month labor savings', 'Fastest payback when usage is broad'],
  },
}

const methodology = [
  {
    title: 'Real business testing',
    description:
      'Benchmarked across 25+ small businesses including restaurants, services, e-commerce, and consulting teams.',
    icon: BarChart3,
  },
  {
    title: '$12K+ invested',
    description:
      'Actual subscription spend, implementation costs, and training effort were included in the model instead of estimated from vendor materials.',
    icon: DollarSign,
  },
  {
    title: '8-month observation window',
    description:
      'The strongest packages showed sustained gains in time savings, output quality, and repeatable business workflows.',
    icon: Clock3,
  },
]

const phases = [
  {
    title: 'Phase 1: Foundation',
    timing: 'Week 1-2',
    steps: [
      'Set up ChatGPT Plus and Grammarly',
      'Install browser and mobile tooling',
      'Create prompt templates for repeated work',
      'Train the core team on first use cases',
    ],
  },
  {
    title: 'Phase 2: Automation',
    timing: 'Week 3-4',
    steps: [
      'Add Zapier and connect the current tool stack',
      'Automate lead handling and notifications',
      'Set up invoicing or onboarding workflows',
      'Remove repetitive handoffs between platforms',
    ],
  },
  {
    title: 'Phase 3: Optimization',
    timing: 'Week 5-8',
    steps: [
      'Track ROI and time savings against baseline',
      'Build more advanced AI writing workflows',
      'Create custom prompt libraries and routines',
      'Scale only the use cases already proving value',
    ],
  },
]

const mistakes = [
  'Trying to implement every tool at once',
  'Skipping setup and prompt training',
  'Buying based on feature count instead of ROI',
  'Failing to track time and cost impact',
  'Ignoring team adoption and change management',
  'Over-automating without review controls',
]

const bestPractices = [
  'Start with high-impact, low-risk workflows',
  'Invest time in setup and onboarding',
  'Prefer tools that integrate cleanly together',
  'Measure from day one',
  'Roll adoption out gradually',
  'Keep human quality review in the loop',
]

export default function AIROICalculator() {
  const [formData, setFormData] = useState({
    laborCosts: '2000',
    weeklyHours: '20',
    hourlyRate: '25',
    aiPackage: 'basic' as PackageKey,
  })
  const [results, setResults] = useState<Results | null>(null)

  const selectedPackage = packages[formData.aiPackage]

  const calculateROI = () => {
    const laborCosts = Number.parseFloat(formData.laborCosts) || 2000
    const weeklyHours = Number.parseFloat(formData.weeklyHours) || 20
    const hourlyRate = Number.parseFloat(formData.hourlyRate) || 25
    const pkg = packages[formData.aiPackage]

    const weeklyTimeSaved = weeklyHours * pkg.efficiency
    const monthlyTimeSaved = weeklyTimeSaved * 4.33
    const monthlySavings = Math.min(monthlyTimeSaved * hourlyRate, laborCosts)
    const netSavings = monthlySavings - pkg.cost
    const annualNetSavings = netSavings * 12
    const roi = pkg.cost > 0 ? (netSavings / pkg.cost) * 100 : 0
    const paybackMonths = netSavings > 0 ? pkg.cost / netSavings : null

    setResults({
      roi: Math.round(roi),
      weeklyTimeSaved: Math.round(weeklyTimeSaved),
      netSavings: Math.round(netSavings),
      paybackMonths: paybackMonths ? Math.round(paybackMonths * 10) / 10 : null,
      annualNetSavings: Math.round(annualNetSavings),
      pkg,
      monthlyTimeSaved: Math.round(monthlyTimeSaved),
      monthlySavings: Math.round(monthlySavings),
      laborCosts,
      weeklyHours,
      hourlyRate,
    })
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title="AI ROI Calculator 2026"
        description="Calculate AI tool investment returns with a tested methodology based on real small-business implementations."
        url="https://sitepilot.co/ai-roi-calculator"
        publishedDate="2026-03-07"
        modifiedDate="2026-03-07"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_24%,#ffffff_54%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[34rem] h-[28rem] bg-[radial-gradient(circle_at_22%_18%,rgba(99,91,255,0.05),transparent_24%),radial-gradient(circle_at_80%_14%,rgba(14,165,233,0.05),transparent_22%),radial-gradient(circle_at_55%_82%,rgba(244,114,182,0.04),transparent_28%)]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                2026 AI ROI calculator
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                AI ROI calculator,
                <span className="brand-gradient-text block">for teams building a practical business case.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                Estimate AI investment returns using the same framework we applied across 50+ tools and $12,000+ of real testing. The calculator focuses on time saved, labor value, and package cost instead of vendor claims.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a href="#calculator" className="btn-brand">
                  Run the calculator
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link href="/best-ai-tools-small-business-2026" className="btn-secondary">
                  See the full AI tools guide
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                <div className="page-card px-4 py-4">
                  <div className="text-2xl font-semibold tracking-[-0.04em] text-slate-950 mb-1">$12K+</div>
                  <div className="text-sm text-slate-500">Testing investment</div>
                </div>
                <div className="page-card px-4 py-4">
                  <div className="text-2xl font-semibold tracking-[-0.04em] text-slate-950 mb-1">50+</div>
                  <div className="text-sm text-slate-500">AI tools evaluated</div>
                </div>
                <div className="page-card px-4 py-4">
                  <div className="text-2xl font-semibold tracking-[-0.04em] text-slate-950 mb-1">25+</div>
                  <div className="text-sm text-slate-500">Small businesses benchmarked</div>
                </div>
                <div className="page-card px-4 py-4">
                  <div className="text-2xl font-semibold tracking-[-0.04em] text-slate-950 mb-1">450%</div>
                  <div className="text-sm text-slate-500">Best ROI package observed</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
              <div className="relative page-card-glow p-5 md:p-6">
                <div className="page-card p-6 bg-white/95">
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div>
                      <div className="text-sm text-slate-500 mb-1">How to use it</div>
                      <div className="text-xl font-semibold text-slate-950">A practical ROI model</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Built for small teams
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      'Enter the weekly hours spent on repetitive work today.',
                      'Apply your internal hourly rate instead of headline salary alone.',
                      'Choose a package based on implementation ambition, not maximum feature depth.',
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4"
                      >
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                          <span className="text-sm text-slate-600">{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                    <div className="text-sm uppercase tracking-[0.16em] text-slate-500 mb-2">Selected package</div>
                    <div className="font-semibold text-slate-950 mb-1">{selectedPackage.name}</div>
                    <div className="text-sm text-slate-600">${selectedPackage.cost}/month with {Math.round(selectedPackage.efficiency * 100)}% modeled efficiency gain.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="calculator" className="page-section surface-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_0.95fr] gap-6">
            <div className="page-card-glow p-1.5">
              <div className="page-card rounded-[1.8rem] p-7 md:p-8">
                <div className="page-pill mb-5">Inputs</div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] text-slate-950 mb-6">
                  Build your ROI estimate.
                </h2>

                <div className="space-y-6">
                  <label className="block">
                    <div className="text-sm font-semibold text-slate-700 mb-2">Current monthly labor costs for tasks AI could handle</div>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                      <input
                        type="number"
                        value={formData.laborCosts}
                        onChange={(event) => setFormData((current) => ({ ...current, laborCosts: event.target.value }))}
                        className="w-full rounded-2xl border border-slate-200 bg-white px-10 py-3.5 text-slate-900 outline-none focus:border-indigo-300"
                        placeholder="2000"
                      />
                    </div>
                  </label>

                  <label className="block">
                    <div className="text-sm font-semibold text-slate-700 mb-2">Hours per week spent on repetitive tasks</div>
                    <input
                      type="number"
                      value={formData.weeklyHours}
                      onChange={(event) => setFormData((current) => ({ ...current, weeklyHours: event.target.value }))}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none focus:border-indigo-300"
                      placeholder="20"
                    />
                  </label>

                  <label className="block">
                    <div className="text-sm font-semibold text-slate-700 mb-2">Average hourly rate for your business</div>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                      <input
                        type="number"
                        value={formData.hourlyRate}
                        onChange={(event) => setFormData((current) => ({ ...current, hourlyRate: event.target.value }))}
                        className="w-full rounded-2xl border border-slate-200 bg-white px-10 py-3.5 text-slate-900 outline-none focus:border-indigo-300"
                        placeholder="25"
                      />
                    </div>
                  </label>

                  <label className="block">
                    <div className="text-sm font-semibold text-slate-700 mb-2">AI package selection</div>
                    <select
                      value={formData.aiPackage}
                      onChange={(event) =>
                        setFormData((current) => ({ ...current, aiPackage: event.target.value as PackageKey }))
                      }
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none focus:border-indigo-300"
                    >
                      <option value="basic">Basic: ChatGPT + Grammarly ($35/month)</option>
                      <option value="standard">Standard: + Zapier ($99/month)</option>
                      <option value="premium">Premium: + advanced tools ($199/month)</option>
                      <option value="enterprise">Enterprise: full stack ($399/month)</option>
                    </select>
                  </label>

                  <button className="btn-brand w-full" onClick={calculateROI}>
                    Calculate AI ROI
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="page-card-glow p-1.5">
              <div className="page-card rounded-[1.8rem] p-7 md:p-8 h-full">
                <div className="page-pill mb-5">Results</div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] text-slate-950 mb-6">
                  Your modeled outcome.
                </h2>

                {!results ? (
                  <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center text-slate-500">
                    Enter your numbers and run the calculator to see a package-level ROI estimate.
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="rounded-3xl border border-indigo-100 bg-indigo-50/80 px-6 py-6 text-center">
                      <div className="text-4xl font-semibold tracking-[-0.05em] text-indigo-700 mb-2">{results.roi}% ROI</div>
                      <div className="text-slate-600">
                        {results.pkg.name} at ${results.pkg.cost}/month
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
                        <div className="text-2xl font-semibold text-slate-950 mb-1">{results.weeklyTimeSaved}h</div>
                        <div className="text-sm text-slate-500">Saved per week</div>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
                        <div className="text-2xl font-semibold text-slate-950 mb-1">${results.netSavings.toLocaleString()}</div>
                        <div className="text-sm text-slate-500">Net savings / month</div>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
                        <div className="text-2xl font-semibold text-slate-950 mb-1">
                          {results.paybackMonths ? results.paybackMonths : 'N/A'}
                        </div>
                        <div className="text-sm text-slate-500">Payback months</div>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
                        <div className="text-2xl font-semibold text-slate-950 mb-1">${results.annualNetSavings.toLocaleString()}</div>
                        <div className="text-sm text-slate-500">Annual savings</div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5">
                      <div className="font-semibold text-slate-950 mb-3">Calculation breakdown</div>
                      <div className="space-y-2 text-sm text-slate-600">
                        <div>Weekly time savings: {results.weeklyHours}h × {Math.round(results.pkg.efficiency * 100)}% = {results.weeklyTimeSaved}h</div>
                        <div>Time-based savings: {results.monthlyTimeSaved}h × ${results.hourlyRate}/h</div>
                        <div>Monthly labor-cost cap: ${results.laborCosts}</div>
                        <div>Modeled monthly savings: min(time-based estimate, labor-cost cap) = ${results.monthlySavings}</div>
                        <div>Tool cost: ${results.pkg.cost}/month</div>
                        <div>Net monthly benefit: ${results.monthlySavings} - ${results.pkg.cost} = ${results.netSavings}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <div className="page-pill mb-4">Methodology</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">Where the assumptions come from.</h2>
            <p className="page-lead text-lg">
              The model is grounded in observed small-business implementations rather than vendor ROI calculators.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {methodology.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="page-card-glow p-1.5">
                  <div className="page-card rounded-[1.8rem] p-7 h-full">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 mb-5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-7">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="page-section surface-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <div className="page-pill mb-4">Package guidance</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">What each package is meant to do.</h2>
            <p className="page-lead text-lg">
              These bundles reflect the implementation paths that showed the clearest adoption and savings patterns.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {(Object.entries(packages) as [PackageKey, PackageConfig][]).map(([key, pkg]) => (
              <div key={key} className="page-card-glow p-1.5">
                <div className="page-card rounded-[1.8rem] p-7 h-full">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-2">{pkg.name}</h3>
                      <div className="text-slate-500">${pkg.cost}/month</div>
                    </div>
                    <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-700">
                      {pkg.badge}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="font-semibold text-slate-950 mb-3">Includes</div>
                      <div className="space-y-2">
                        {pkg.includes.map((item) => (
                          <div key={item} className="text-sm text-slate-600">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="font-semibold text-slate-950 mb-3">Expected outcome</div>
                      <div className="space-y-2">
                        {pkg.savings.map((item) => (
                          <div key={item} className="text-sm text-slate-600">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <div className="page-pill mb-4">Implementation framework</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">A three-phase rollout that limits risk.</h2>
            <p className="page-lead text-lg">
              The winning pattern was gradual adoption with visible proof points before expanding the stack.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {phases.map((phase) => (
              <div key={phase.title} className="page-card-glow p-1.5">
                <div className="page-card rounded-[1.8rem] p-7 h-full">
                  <div className="text-sm uppercase tracking-[0.16em] text-indigo-500 mb-2">{phase.timing}</div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-5">{phase.title}</h3>
                  <div className="space-y-4">
                    {phase.steps.map((step) => (
                      <div key={step} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                        <span className="text-slate-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section surface-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="page-card-glow p-1.5">
              <div className="page-card rounded-[1.8rem] p-7 h-full">
                <div className="page-pill mb-4">Avoid this</div>
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-5">Common implementation mistakes.</h2>
                <div className="space-y-4">
                  {mistakes.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-rose-500 mt-0.5 shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="page-card-glow p-1.5">
              <div className="page-card rounded-[1.8rem] p-7 h-full">
                <div className="page-pill mb-4">Do this instead</div>
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-5">Best practices that held up.</h2>
                <div className="space-y-4">
                  {bestPractices.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="max-w-5xl mx-auto px-4">
          <div className="page-card-glow p-8 md:p-12 surface-muted">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Next step</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                Use the calculator to frame the decision.
                <span className="block brand-gradient-text">Then choose the smallest package that your team will actually adopt.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Most teams do not need the biggest stack first. They need a business case that survives implementation and a tool set that improves the work already happening.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/best-ai-tools-small-business-2026" className="btn-brand">
                  Read the full AI tools guide
                </Link>
                <Link href="/ai-tools" className="btn-secondary">
                  Browse all AI tools
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
