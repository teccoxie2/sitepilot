import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Coins,
  Gauge,
  Headphones,
  ShieldCheck,
  Sparkles,
  Wallet,
  XCircle,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import RelatedLinks from '@/components/RelatedLinks'

const pageTitle = 'Best Cheap Hosting 2026 | SitePilot'
const pageDescription =
  'A practical 2026 guide to cheap hosting options, with a focus on total cost of ownership, renewal pricing, security baseline, and real-world value.'
const pageUrl = 'https://sitepilot.co/hosting/cheap-hosting'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: 'article',
  },
}

const quickPicks = [
  {
    label: 'Best value overall',
    value: 'Hostinger',
    note: 'The cheapest option that still feels like a real hosting service rather than a compromise stack with a login screen.',
  },
  {
    label: 'Best TCO profile',
    value: 'Namecheap',
    note: 'Less flashy, but often the calmer answer when renewal pain matters more than marketing copy.',
  },
  {
    label: 'Best performance pick',
    value: 'Hostinger Business',
    note: 'The strongest budget-tier performance profile when LiteSpeed + NVMe matter more than the absolute lowest invoice.',
  },
  {
    label: 'Main trap',
    value: '3-year cost reality',
    note: 'Budget hosting stops being “cheap” fast if you ignore renewal pricing and missing features.',
  },
]

const criteria = [
  {
    title: 'Total cost of ownership',
    body: 'The real budget question is not the first invoice. It is what the stack costs once renewals, upsells, and feature gaps start showing up.',
    icon: Coins,
  },
  {
    title: 'Security baseline',
    body: 'Cheap hosting still needs account isolation, SSL, backups, and basic malware posture. Low price does not excuse weak fundamentals.',
    icon: ShieldCheck,
  },
  {
    title: 'Support usefulness',
    body: 'Budget hosting becomes expensive the moment support turns a 20-minute issue into a 2-day problem.',
    icon: Headphones,
  },
  {
    title: 'Performance realism',
    body: 'At this price point we are not chasing perfection. We are filtering out the options that are too slow or too unstable to defend.',
    icon: Gauge,
  },
]

const tcoRows = [
  {
    provider: 'Hostinger Premium',
    intro: '$2.99/mo',
    renewal: '$7.99/mo',
    tco: '$143.64',
    note: 'Best value/performance balance',
  },
  {
    provider: 'DreamHost',
    intro: '$2.59/mo',
    renewal: '$5.99/mo',
    tco: '$136.44',
    note: 'More moderate long-term profile',
  },
  {
    provider: 'Namecheap Stellar',
    intro: '$1.98/mo',
    renewal: '$4.48/mo',
    tco: '$107.52',
    note: 'Cheapest 3-year total cost',
  },
]

const decisionGuide = [
  {
    title: 'Choose Hostinger if…',
    points: [
      'You want the strongest mix of speed and budget value',
      'You need cheap hosting that still feels usable',
      'You are willing to accept higher renewals for better overall performance',
    ],
  },
  {
    title: 'Choose Namecheap if…',
    points: [
      'You care more about pricing honesty than raw speed',
      'You want the lowest 3-year total cost',
      'You are okay with a more modest performance profile',
    ],
  },
  {
    title: 'Avoid budget junk if…',
    points: [
      'The site matters commercially',
      'You cannot tolerate weak support or downtime',
      'You want “cheap” to stay cheap after the promo period ends',
    ],
  },
]

const related = [
  {
    title: 'Best Web Hosting 2026',
    href: '/hosting/best-web-hosting',
    description: 'The main shortlist of hosting providers worth serious consideration.',
    category: 'hosting',
  },
  {
    title: 'WordPress Hosting',
    href: '/hosting/wordpress-hosting',
    description: 'Best hosting choices for WordPress-focused sites.',
    category: 'hosting',
  },
]

export default function CheapHosting2026() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_22%,#ffffff_50%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-22 pb-18 md:pt-28 md:pb-24">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-indigo-500" />
                2026 value-for-money audit
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Cheap hosting,
                <span className="block brand-gradient-text">without the $0.99 delusion.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                Cheap hosting should be judged on total cost of ownership, not on a temporary intro price designed to make bad decisions feel smart for five minutes.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/hosting/hostinger-review" className="btn-brand">
                  Review a budget winner
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/cheap-hosting" className="btn-secondary">
                  Open full cheap-hosting guide
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                {quickPicks.map((item) => (
                  <div key={item.label} className="page-card px-4 py-4">
                    <div className="text-xs uppercase tracking-[0.16em] text-slate-400 mb-2">{item.label}</div>
                    <div className="font-semibold text-slate-950 mb-1">{item.value}</div>
                    <div className="text-sm text-slate-600 leading-6">{item.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
              <div className="relative page-card-glow p-5 md:p-6">
                <div className="page-card p-5 md:p-6">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="text-sm text-slate-500 mb-1">Budget-hosting reality</div>
                      <div className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">What actually matters</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      TCO &gt; intro price
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {[
                      'The cheapest intro plan is rarely the smartest long-term choice.',
                      'Renewal pricing matters more than banner pricing.',
                      'Cheap hosting must still clear a minimum support and security threshold.',
                    ].map((item) => (
                      <div key={item} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-4 w-4 mt-1 text-indigo-500 shrink-0" />
                          <p className="text-sm text-slate-700 leading-6">{item}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-amber-200 bg-amber-50/70 px-4 py-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                      <p className="text-sm text-amber-900 leading-6">
                        If the site makes money or carries operational risk, “cheap” should be a starting filter, not the final decision criterion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section surface-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <div className="page-pill mb-4">Selection criteria</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">How to judge cheap hosting without lying to yourself.</h2>
            <p className="page-lead text-lg">
              Budget hosting looks attractive precisely because the sales pitch is simple. The actual evaluation should not be.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {criteria.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="page-card-soft p-6">
                  <div className="inline-flex rounded-2xl bg-indigo-50 p-3 mb-5">
                    <Icon className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">{item.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{item.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <div className="page-pill mb-4">3-year TCO view</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">The numbers that matter more than the first invoice.</h2>
            <p className="page-lead text-lg">
              This is the simplest way to stop getting manipulated by fake entry pricing: compare what the stack costs after renewal reality shows up.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {tcoRows.map((row) => (
              <div key={row.provider} className="page-card p-6">
                <div className="text-lg font-semibold tracking-[-0.03em] text-slate-950 mb-3">{row.provider}</div>
                <div className="space-y-3 text-sm mb-4">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700">Intro: {row.intro}</div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700">Renewal: {row.renewal}</div>
                  <div className="rounded-2xl border border-indigo-200 bg-indigo-50/70 px-4 py-3 font-semibold text-indigo-950">3-year TCO: {row.tco}</div>
                </div>
                <div className="text-sm text-slate-600">{row.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section border-y border-slate-200/70 surface-warm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-5">
            {decisionGuide.map((item) => (
              <div key={item.title} className="page-card p-7">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-5">{item.title}</h3>
                <div className="space-y-3">
                  {item.points.map((point) => (
                    <div key={point} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="max-w-6xl mx-auto px-4">
          <RelatedLinks links={related} />
        </div>
      </section>
    </div>
  )
}
