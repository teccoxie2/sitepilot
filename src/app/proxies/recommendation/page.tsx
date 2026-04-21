'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'

const recommend = (budget: string, useCase: string, scale: string) => {
  if (useCase === 'social') {
    if (scale === 'massive') return { title: 'DIY Mobile Farm', url: '/proxies/mobile-proxy-farm-setup-guide-2026', type: 'mobile' }
    return { title: 'NodeMaven Mobile', url: '/proxies/best-mobile-proxies-2026', type: 'mobile' }
  }

  if (useCase === 'seo') {
    if (budget === 'low') return { title: 'Rayobyte Datacenter', url: '/proxies/best-datacenter-proxies-2026', type: 'datacenter' }
    return { title: 'Oxylabs Residential', url: '/proxies/best-residential-proxies-2026', type: 'residential' }
  }

  if (useCase === 'ecommerce' || useCase === 'ai_training') {
    if (budget === 'high') return { title: 'Bright Data', url: '/proxies/best-residential-proxies-2026', type: 'residential' }
    return { title: 'Decodo', url: '/proxies/best-residential-proxies-2026', type: 'residential' }
  }

  return { title: 'Decodo Residential', url: '/proxies/best-residential-proxies-2026', type: 'residential' }
}

const useCaseOptions = [
  { id: 'ecommerce', label: 'E-commerce and retail pricing' },
  { id: 'social', label: 'Social media automation' },
  { id: 'seo', label: 'SEO and SERP scraping' },
  { id: 'ai_training', label: 'AI dataset collection' },
]

const budgetOptions = [
  { id: 'low', label: '< $500 / month' },
  { id: 'medium', label: '$500 - $2,000' },
  { id: 'high', label: 'Enterprise ($2k+)' },
]

const scaleOptions = [
  { id: 'small', label: 'Light scraping / testing' },
  { id: 'massive', label: 'High concurrency bulk extraction' },
]

export default function ProxyRecommendationTool() {
  const [budget, setBudget] = useState('medium')
  const [useCase, setUseCase] = useState('ecommerce')
  const [scale, setScale] = useState('small')
  const [result, setResult] = useState<{ title: string; url: string; type: string } | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setResult(recommend(budget, useCase, scale))
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                Interactive workflow mapping
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Find the right proxy network,
                <span className="brand-gradient-text block">without guessing from vendor pages.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                Select your use case, scale, and budget to get a direct recommendation based on the proxy pages already mapped in our 2026 cluster. The tool keeps the logic simple, but it is designed to route you toward the right network model faster.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/proxies" className="btn-brand">
                  Back to proxy hub
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/proxies/best-residential-proxies-2026" className="btn-secondary">
                  Compare residential options
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                {[
                  'Map use case to trust level before comparing vendors.',
                  'Budget changes network class as much as it changes provider choice.',
                  'High-concurrency social workflows may point to a DIY mobile farm instead of a hosted plan.',
                  'The tool routes into existing review pages rather than pretending to be a black-box AI picker.',
                ].map((item) => (
                  <div key={item} className="page-card px-4 py-4">
                    <div className="text-sm text-slate-700 leading-6">{item}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
              <div className="relative page-card-glow p-5 md:p-6">
                <div className="page-card p-6 bg-white/95">
                  <div className="flex items-center justify-between mb-6 gap-4">
                    <div>
                      <div className="text-sm text-slate-500 mb-1">Decision flow</div>
                      <div className="text-xl font-semibold text-slate-950">What this tool is optimizing for</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Match model to workload
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      ['Use case', 'Social, SEO, ecommerce, and dataset collection do not need the same trust model.'],
                      ['Budget', 'Lower budgets push the recommendation toward the cheapest viable network, not the flashiest vendor.'],
                      ['Scale', 'Massive concurrency can change the answer from a hosted provider to a self-operated architecture.'],
                      ['Internal routing', 'Every output links into an existing SitePilot review or guide page so the next step stays clear.'],
                    ].map(([title, note]) => (
                      <div
                        key={title}
                        className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4"
                      >
                        <div className="font-semibold text-slate-950 mb-1">{title}</div>
                        <div className="text-sm text-slate-500">{note}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="max-w-3xl mx-auto px-4">
          {!result ? (
            <form onSubmit={handleSubmit} className="page-card-glow p-1.5">
              <div className="page-card rounded-[1.8rem] p-8 md:p-10 space-y-8">
                <div>
                  <label className="block text-lg font-semibold text-slate-950 mb-4">What is your primary use case?</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {useCaseOptions.map((opt) => {
                      const selected = useCase === opt.id

                      return (
                        <label
                          key={opt.id}
                          className={`cursor-pointer rounded-2xl border p-4 transition-all ${
                            selected
                              ? 'border-indigo-200 bg-indigo-50 shadow-sm'
                              : 'border-slate-200 bg-white hover:border-slate-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="useCase"
                            value={opt.id}
                            checked={selected}
                            onChange={(e) => setUseCase(e.target.value)}
                            className="sr-only"
                          />
                          <div className="flex items-center justify-between gap-3">
                            <span className="font-semibold text-slate-800">{opt.label}</span>
                            {selected && <CheckCircle2 className="w-5 h-5 text-indigo-500" />}
                          </div>
                        </label>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-slate-950 mb-4">What is your monthly budget?</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {budgetOptions.map((opt) => {
                      const selected = budget === opt.id

                      return (
                        <label
                          key={opt.id}
                          className={`cursor-pointer rounded-2xl border p-4 text-center transition-all ${
                            selected
                              ? 'border-indigo-200 bg-indigo-50 shadow-sm'
                              : 'border-slate-200 bg-white hover:border-slate-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="budget"
                            value={opt.id}
                            checked={selected}
                            onChange={(e) => setBudget(e.target.value)}
                            className="sr-only"
                          />
                          <span className="font-semibold text-slate-800">{opt.label}</span>
                        </label>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-slate-950 mb-4">What scale of traffic are you running?</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {scaleOptions.map((opt) => {
                      const selected = scale === opt.id

                      return (
                        <label
                          key={opt.id}
                          className={`cursor-pointer rounded-2xl border p-4 transition-all ${
                            selected
                              ? 'border-indigo-200 bg-indigo-50 shadow-sm'
                              : 'border-slate-200 bg-white hover:border-slate-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="scale"
                            value={opt.id}
                            checked={selected}
                            onChange={(e) => setScale(e.target.value)}
                            className="sr-only"
                          />
                          <div className="flex items-center justify-between gap-3">
                            <span className="font-semibold text-slate-800">{opt.label}</span>
                            {selected && <CheckCircle2 className="w-5 h-5 text-indigo-500" />}
                          </div>
                        </label>
                      )
                    })}
                  </div>
                </div>

                <button type="submit" className="btn-brand w-full text-lg py-4">
                  Get recommendation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </form>
          ) : (
            <div className="page-card-glow p-1.5">
              <div className="page-card rounded-[1.8rem] p-8 md:p-10 text-center">
                <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full border border-indigo-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-[0.18em] mb-4">Based on your workflow</h2>
                <h3 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-6">{result.title}</h3>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                  We matched your {useCase.replace('_', ' ')} requirements against pricing posture, trust level, and operational fit. This points you toward the page most aligned with the architecture your workflow can actually support.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href={result.url} className="btn-brand text-lg">
                    Read full review
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <button onClick={() => setResult(null)} className="btn-secondary text-lg">
                    Start over
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
