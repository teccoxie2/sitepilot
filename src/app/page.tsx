import { normalizeMetadata } from '@/lib/seo'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, Cpu, Gauge, Network, CheckCircle2, Sparkles } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'SitePilot | Compare Hosting, Website Builders & Proxies'
const pageDescription =
  'Compare hosting, website builders, and proxy infrastructure using independent audits, buyer-focused comparisons, and decision assets built for real operator and procurement workflows.'
const pageUrl = 'https://sitepilot.co'

const metadataConfig: Metadata = {
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
};

export const metadata: Metadata = normalizeMetadata(metadataConfig);
const operatingSignals = [
  'Hosting, builders, proxy infrastructure, and domain buying paths in one editorial system',
  'Operator-grade comparisons instead of promo-code theater',
  'A clear decision path from category research to evidence and action',
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

const domainClusterLinks = [
  {
    title: 'Best domain registrars 2026',
    href: '/best-domain-registrars-2026',
    note: 'Start here when the real question is where to buy and renew the domain.',
  },
  {
    title: 'How to buy a domain name',
    href: '/how-to-buy-a-domain-name-2026',
    note: 'Use the step-by-step path when the team is buying its first serious domain.',
  },
  {
    title: 'Domain vs hosting',
    href: '/domain-vs-hosting-2026',
    note: 'Useful when buyers are mixing up the naming layer and the infrastructure layer.',
  },
  {
    title: '.com vs .ai vs .co vs .io',
    href: '/com-vs-ai-vs-co-vs-io-2026',
    note: 'Choose the extension with the least long-term confusion and brand drag.',
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
              <p className="text-sm md:text-base font-medium text-slate-600 max-w-2xl mb-4">
                SitePilot compares hosting, website builders, and proxy infrastructure using independent audits, commercial analysis, operational risk review, and buyer-path decision assets. Teams use it to move from category discovery into shortlist, diligence, implementation planning, and platform commitment without affiliate fluff or vendor theatre.
              </p>

              <div className="page-pill mb-6" data-nosnippet>
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                2026 digital infrastructure decision system
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Independent infrastructure buying intelligence.
                <span className="brand-gradient-text block">For teams that need evidence, not theater.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                SitePilot is a decision system for hosting, website builders, and proxy infrastructure that connects methodology, audits, comparisons, and buyer assets so operators can move from category discovery to shortlist, due diligence, and vendor selection without relying on affiliate fluff or glossy vendor positioning.
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

      <section className="max-w-7xl mx-auto px-4 py-14 md:py-18">
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

        <section className="page-card p-8 md:p-10 mb-16">
          <div className="max-w-4xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Domain buying path</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Domain intent is the front door.
              <span className="block brand-gradient-text">Use it to feed hosting and site-build decisions.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Buyers often start with the name first, then figure out registrar choice, extension strategy, hosting, and publishing. These pages now give SitePilot a cleaner path for that earlier-stage intent instead of dropping everyone straight into hosting comparisons.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {domainClusterLinks.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-2xl border border-slate-200 bg-white px-5 py-5 transition-colors hover:bg-slate-50">
                <div className="text-lg font-semibold text-slate-950 mb-2">{item.title}</div>
                <p className="text-sm leading-6 text-slate-600 mb-3">{item.note}</p>
                <div className="inline-flex items-center text-[#635bff] font-semibold">
                  Open page
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="page-card-glow p-8 md:p-12 surface-muted">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Operating model</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                One site, three decision systems.
                <span className="block brand-gradient-text">Built to move buyers from category to evidence.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                SitePilot brings category research, evaluation criteria, comparisons, scorecards, and audit paths into one practical decision system for teams buying digital infrastructure.
              </p>
              <div className="flex flex-wrap gap-3">
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
      </section>
    </div>
  )
}
