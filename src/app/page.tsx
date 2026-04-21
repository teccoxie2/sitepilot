import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, Cpu, Gauge, Network, CheckCircle2, Sparkles } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'SitePilot | Global Digital Infrastructure Authority'
const pageDescription =
  'Independent technical audits, infrastructure benchmarks, and AI-driven procurement frameworks for modern enterprises.'
const pageUrl = 'https://sitepilot.co'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
}

const operatingSignals = [
  'Hosting, builders, AI tools, and proxy infrastructure in one editorial system',
  'Operator-grade comparisons instead of promo-code theater',
  'Calm Stripe-ish hierarchy that now scales across the whole site',
  'Decision support built for teams buying with technical accountability',
]

const capabilityCards = [
  {
    title: 'Technical auditing',
    description:
      'Independent performance, reliability, and platform-risk reviews for teams that need more than vendor positioning.',
    icon: Shield,
  },
  {
    title: 'Infrastructure benchmarks',
    description:
      'Selection logic grounded in uptime, maintainability, operating overhead, and realistic long-term fit.',
    icon: Gauge,
  },
  {
    title: 'AI procurement frameworks',
    description:
      'Structured scorecards, calculators, and rollout guidance for teams adopting AI without buying vague promises.',
    icon: Cpu,
  },
]

const coverageTracks = [
  {
    title: 'Web hosting',
    note: 'Performance audits, provider reviews, renewal-pricing traps, and long-term infrastructure fit.',
    href: '/web-hosting',
    cta: 'Explore hosting audits',
    icon: Gauge,
  },
  {
    title: 'Website builders',
    note: 'Platform comparisons across design control, ecommerce fit, SEO ownership, and lock-in risk.',
    href: '/website-builders',
    cta: 'Explore builder guides',
    icon: Sparkles,
  },
  {
    title: 'AI tools',
    note: 'Enterprise planning models, ROI calculators, workflow guides, and product comparisons.',
    href: '/ai-tools',
    cta: 'Browse AI coverage',
    icon: Cpu,
  },
  {
    title: 'Proxy infrastructure',
    note: 'Deployment-model comparisons, farm setup guidance, and operational planning for mobile proxies.',
    href: '/proxies',
    cta: 'Open proxy hub',
    icon: Network,
  },
]

const operatingModel = [
  {
    title: 'Start with the right cluster',
    body: 'Move into the category that matches the real buying problem instead of reading generic “top 10” filler.',
  },
  {
    title: 'Use methodology before commitment',
    body: 'Every guide is meant to connect back to the same evaluation logic, so a decision on one page still holds up later.',
  },
  {
    title: 'Escalate to an audit path',
    body: 'If the team needs direct help, the audit funnel is there without turning the site into a lead-gen carnival.',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden text-slate-900">
      <SchemaMarkup type="website" title={pageTitle} description={pageDescription} url={pageUrl} />

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                2026 digital infrastructure authority
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Audit the stack.
                <span className="brand-gradient-text block">Then buy with discipline.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                SitePilot helps operators evaluate hosting, builders, AI tools, and proxy infrastructure with technical fit,
                commercial clarity, and operational reality instead of marketing theater.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/web-hosting" className="btn-brand">
                  Start with live audits
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/methodology" className="btn-secondary">
                  Review methodology
                </Link>
                <Link href="/apply-for-audit" className="btn-secondary">
                  Apply for an audit
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
                {operatingSignals.map((item) => (
                  <div key={item} className="page-card p-4 flex items-center gap-3 bg-white/90">
                    <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0" />
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
                      <div className="text-sm text-slate-500 mb-1">SitePilot matrix</div>
                      <div className="text-xl font-semibold text-slate-950">Coverage and decision logic</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Unified UI
                    </div>
                  </div>

                  <div className="space-y-3">
                    {coverageTracks.map((track) => {
                      const Icon = track.icon
                      return (
                        <div
                          key={track.title}
                          className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4"
                        >
                          <div className="flex items-center justify-between gap-4">
                            <div>
                              <div className="font-semibold text-slate-950">{track.title}</div>
                              <div className="text-sm text-slate-500 mt-1">{track.note}</div>
                            </div>
                            <Icon className="h-5 w-5 text-indigo-500 shrink-0" />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-14 md:py-18">
        <section className="grid gap-4 md:grid-cols-3 mb-16">
          {capabilityCards.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="page-card p-8">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-[#635bff]" />
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">{feature.title}</h2>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </section>

        <section className="grid lg:grid-cols-2 gap-6 mb-16">
          {coverageTracks.map((track) => {
            const Icon = track.icon
            return (
              <Link key={track.title} href={track.href} className="page-card p-8 hover:-translate-y-0.5 transition-transform">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                    Coverage track
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#635bff]" />
                  </div>
                </div>
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-3">{track.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-6">{track.note}</p>
                <div className="inline-flex items-center text-[#635bff] font-semibold">
                  {track.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            )
          })}
        </section>

        <section className="page-card-glow p-8 md:p-12 surface-muted">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Operating model</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                A clearer homepage for a site
                <span className="block brand-gradient-text">that now behaves like one product.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                The homepage now acts as the front door to the audit system, not a placeholder for visual intent. It orients buyers,
                routes them into the right cluster, and keeps the design language aligned with the migrated pages underneath it.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/ai-tools" className="btn-brand">
                  Open AI planning hub
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/methodology" className="btn-secondary">
                  See evaluation criteria
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {operatingModel.map((item, index) => (
                <div key={item.title} className="page-card p-6">
                  <div className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 mb-4">
                    Step {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-950 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
