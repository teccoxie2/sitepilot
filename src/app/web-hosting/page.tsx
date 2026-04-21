import React from 'react'
import Link from 'next/link'
import { ArrowRight, Shield, Rocket, Cpu, Server, Globe, CheckCircle2, Sparkles, Layers3, Gauge } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

export { metadata } from './metadata'

const pageTitle = 'Web Hosting Reviews 2026 | SitePilot'
const pageDescription = 'Web hosting in 2026 should be evaluated on uptime discipline, support quality, pricing structure, caching stack, security defaults, scaling headroom, and lock-in risk so teams can choose infrastructure that stays reliable after the promotional discount expires.'
const pageUrl = 'https://sitepilot.co/web-hosting'

const cards = [
  {
    title: 'Premium hosting',
    desc: 'High-trust infrastructure for production sites where support quality, uptime discipline, and operational confidence matter.',
    link: '/hosting/siteground-review',
    tag: 'Business fit',
    icon: Shield,
  },
  {
    title: 'Budget performance',
    desc: 'Providers that keep cost low without turning the stack into a long-term maintenance penalty.',
    link: '/hosting/hostinger-review',
    tag: 'Value fit',
    icon: Rocket,
  },
  {
    title: 'WordPress hosting',
    desc: 'Managed and semi-managed paths for teams that care about publishing velocity without babysitting the server.',
    link: '/hosting/wordpress-hosting',
    tag: 'CMS fit',
    icon: Cpu,
  },
]

const workflowCards = [
  {
    title: 'Reliability first',
    desc: 'The hosting choice should reduce operational drama: cleaner uptime habits, usable support, and fewer dumb surprises after launch.',
    icon: Shield,
  },
  {
    title: 'Commercial reality',
    desc: 'Intro pricing is bait. Renewal cost, lock-in pressure, and the real migration path matter more once the honeymoon ends.',
    icon: Gauge,
  },
  {
    title: 'Use-case matching',
    desc: 'Brochure sites, WordPress stacks, and commerce workloads should not be pushed through the same buying logic just because the sales page says “fast.”',
    icon: Layers3,
  },
]

const clusterLinks = [
  {
    title: 'Best web hosting 2026',
    href: '/best-web-hosting-2026',
    note: 'Use the shortlist when you want the broader market view before digging into provider-specific audits.',
  },
  {
    title: 'Cheap hosting',
    href: '/cheap-hosting',
    note: 'For budget-sensitive buying, where low cost matters but you still want to avoid total garbage.',
  },
  {
    title: 'Cloud hosting vs traditional hosting',
    href: '/cloud-hosting-vs-traditional-hosting-2026',
    note: 'Helpful when the real decision is infrastructure model rather than brand comparison.',
  },
]

export default function WebHostingHub2026() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        data={{
          headline: pageTitle,
          description: pageDescription,
          url: pageUrl,
          datePublished: '2026-04-19',
          dateModified: '2026-04-19',
        }}
      />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-x-0 top-[42rem] h-[24rem] bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.06fr_0.94fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                2026 hosting audits
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Hosting audits,
                <span className="brand-gradient-text block">without marketing sludge.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                Web hosting in 2026 should be evaluated on uptime discipline, support quality, pricing structure, caching stack, security defaults, scaling headroom, and lock-in risk so teams can choose infrastructure that stays reliable after the promotional discount expires instead of buying short-term speed claims with long-term operating pain.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/hosting/hostinger-review" className="btn-brand">
                  Start with a real audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/cloud-hosting-vs-traditional-hosting-2026" className="btn-secondary">
                  Compare hosting models
                </Link>
                <Link href="/best-web-hosting-2026" className="btn-secondary">
                  Review top hosting picks
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
                {[
                  'Focus on uptime, support quality, and actual operator fit',
                  'Audit pricing beyond the fake intro offer',
                  'Treat speed as one factor, not the entire story',
                  'Prefer sustainable infrastructure over hype cycles',
                ].map((item) => (
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
                      <div className="text-sm text-slate-500 mb-1">Decision model</div>
                      <div className="text-xl font-semibold text-slate-950">Hosting selection matrix</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Stripe palette
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      ['Reliability', 'Uptime discipline, support quality, operational trust'],
                      ['Performance', 'Latency, caching stack, and realistic site speed impact'],
                      ['Commercial fit', 'Renewal pricing, lock-in risk, and scaling economics'],
                      ['Use-case fit', 'Brochure site, WordPress, app stack, or traffic-heavy property'],
                    ].map(([title, note]) => (
                      <div key={title} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <div className="font-semibold text-slate-950">{title}</div>
                            <div className="text-sm text-slate-500 mt-1">{note}</div>
                          </div>
                          <Server className="h-5 w-5 text-indigo-500 shrink-0" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="relative max-w-7xl mx-auto px-4 py-14 md:py-18">
        <div className="absolute inset-x-0 top-0 h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
        <section className="grid md:grid-cols-3 gap-6 mb-16">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <Link key={card.title} href={card.link} className="page-card p-8 hover:-translate-y-0.5 transition-transform">
                <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 mb-5">
                  {card.tag}
                </div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-[#635bff]" />
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">{card.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-6">{card.desc}</p>
                <div className="inline-flex items-center text-[#635bff] font-semibold">
                  Open audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            )
          })}
        </section>

        <section className="grid gap-6 md:grid-cols-3 mb-16">
          {workflowCards.map((card) => {
            const Icon = card.icon
            return (
              <div key={card.title} className="page-card p-6 md:p-7">
                <div className="mb-5 inline-flex rounded-2xl border border-indigo-100 bg-indigo-50 p-3">
                  <Icon className="h-5 w-5 text-[#635bff]" />
                </div>
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">{card.title}</h2>
                <p className="text-slate-600 leading-7">{card.desc}</p>
              </div>
            )
          })}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="page-card-glow p-8 md:p-12 surface-muted">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Selection logic</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                Hosting is not a vibes purchase.
                <span className="block brand-gradient-text">It is an operations decision.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                That means the page should feel calm, legible, and authority-driven. The new visual system does that better than the old black-box cyber aesthetic.
                It looks more credible and scales better across adjacent audit categories.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/website-builders" className="btn-secondary">See the reference style</Link>
                <Link href="/hosting/hostinger-review" className="btn-brand">
                  Review a provider
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/hosting/siteground-review" className="btn-secondary">Compare premium hosting</Link>
              </div>
            </div>
          </div>

          <div className="page-card rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="page-pill mb-4 inline-flex items-center gap-2">
              <Globe className="h-4 w-4 text-[#635bff]" />
              Hosting cluster
            </div>
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">Keep the internal links doing real work.</h2>
            <p className="text-slate-600 leading-7 mb-6">
              Use the cluster like a buying path: shortlist first, then drill into budget, infrastructure model, or provider audits depending on what is actually blocking the decision.
            </p>
            <div className="space-y-4">
              {clusterLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="page-card-soft block rounded-2xl border border-slate-200 bg-slate-50/90 p-4 transition hover:border-sky-200 hover:bg-sky-50/70"
                >
                  <div className="font-semibold text-slate-950 mb-1">{item.title}</div>
                  <div className="text-sm leading-6 text-slate-600">{item.note}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
