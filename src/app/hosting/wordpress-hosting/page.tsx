import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Gauge,
  Globe,
  ShieldCheck,
  Sparkles,
  XCircle,
} from 'lucide-react'
import RelatedLinks from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Top WordPress Hosting 2026 | SitePilot'
const pageDescription =
  'A practical 2026 guide to WordPress hosting. Compare SiteGround, Hostinger, and managed WordPress options on caching, staging, CDN efficiency, Core Web Vitals, and operational fit.'
const pageUrl = 'https://sitepilot.co/hosting/wordpress-hosting'

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
    label: 'Best overall WP host',
    value: 'SiteGround GrowBig',
    note: 'The strongest default answer when support quality and WordPress operational smoothness both matter.',
  },
  {
    label: 'Best budget WP host',
    value: 'Hostinger Business',
    note: 'A strong low-cost route when you want WordPress performance without premium-tier pricing.',
  },
  {
    label: 'What matters most',
    value: 'Caching + staging',
    note: 'WordPress hosting lives or dies on practical workflow and performance tooling, not on theme demos.',
  },
  {
    label: 'Main trap',
    value: 'WP marketing theatre',
    note: 'A WordPress badge means nothing if the host does not deliver real caching, backups, and operational polish.',
  },
]

const requirements = [
  {
    title: 'Object caching',
    body: 'Redis or equivalent caching support matters because WordPress performance collapses quickly when every page request leans too hard on the database.',
    icon: Cpu,
  },
  {
    title: 'Edge delivery',
    body: 'CDN quality and full-page caching matter more than a generic promise of “global performance.”',
    icon: Globe,
  },
  {
    title: 'Backup and restore',
    body: 'A WordPress host is not serious if recovery is clumsy, manual, or treated like a premium luxury.',
    icon: ShieldCheck,
  },
]

const providers = [
  {
    name: 'SiteGround GrowBig',
    badge: 'Best overall WP host',
    score: '9.2/10',
    description:
      'SiteGround is still the strongest all-round WordPress answer in this set. It combines better support, cleaner Google Cloud-backed infrastructure, staging features, and a generally less annoying operational experience.',
    pros: ['Strong support quality', 'Reliable WordPress tooling', 'Good infrastructure stability'],
    cons: ['Renewals are higher than the intro offer suggests', 'Not the cheapest path'],
    href: '/hosting/siteground-review',
    cta: 'Read SiteGround audit',
  },
  {
    name: 'Hostinger Business',
    badge: 'Best budget WP host',
    score: '8.8/10',
    description:
      'Hostinger Business makes sense when budget matters but you still want solid WordPress fundamentals like LiteSpeed, NVMe storage, and a better-than-trash baseline for performance.',
    pros: ['Strong value-for-money', 'Good speed for the price', 'Beginner-friendly enough'],
    cons: ['Support quality still trails SiteGround', 'Renewals remain a watch point'],
    href: '/hosting/hostinger-review',
    cta: 'Read Hostinger audit',
  },
]

const decisionGuide = [
  {
    title: 'Choose SiteGround if…',
    points: [
      'You want the most complete WordPress operating experience',
      'Support quality matters a lot',
      'You prefer cleaner staging and workflow features',
    ],
  },
  {
    title: 'Choose Hostinger if…',
    points: [
      'You want the strongest budget WordPress option',
      'You care about speed per dollar',
      'You can tolerate a slightly rougher support profile for better cost efficiency',
    ],
  },
]

const related = [
  {
    title: 'Best Web Hosting 2026',
    href: '/hosting/best-web-hosting',
    description: 'The top hosting shortlist across broader use cases.',
    category: 'hosting',
  },
  {
    title: 'Cheap Hosting',
    href: '/hosting/cheap-hosting',
    description: 'Budget-friendly hosting options with fewer fake bargains.',
    category: 'hosting',
  },
]

export default function WordPressHosting2026() {
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
                2026 CMS infrastructure report
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Top WordPress hosting,
                <span className="block brand-gradient-text">without the benchmark cosplay.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                WordPress hosting is not just about speed scores. It is about caching, staging, backups, support quality, and whether the host actually reduces operational friction instead of just printing “optimized for WordPress” on a landing page.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/hosting/siteground-review" className="btn-brand">
                  Review the top pick
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/hosting/best-web-hosting" className="btn-secondary">
                  Back to hosting shortlist
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
                      <div className="text-sm text-slate-500 mb-1">WordPress lens</div>
                      <div className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">What actually makes a host “managed”</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Workflow matters
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {[
                      'A WP badge without real caching is mostly marketing theatre.',
                      'Staging and backup quality matter more than glossy dashboards.',
                      'Good WordPress hosting should reduce admin burden, not just rebrand shared hosting.',
                    ].map((item) => (
                      <div key={item} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-4 w-4 mt-1 text-indigo-500 shrink-0" />
                          <p className="text-sm text-slate-700 leading-6">{item}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                    <div className="text-sm text-slate-500 mb-3">Most important WordPress features</div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-700">Server caching</div>
                      <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-700">Staging</div>
                      <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-700">Backups</div>
                      <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-700">CDN quality</div>
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
            <div className="page-pill mb-4">Requirements</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">What WordPress hosting needs to do well.</h2>
            <p className="page-lead text-lg">
              In 2026, calling a product “WordPress hosting” should imply more than a one-click installer and a logo on the pricing table.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {requirements.map((item) => {
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
            <div className="page-pill mb-4">Top recommendations</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">Two WordPress hosting routes that actually make sense.</h2>
            <p className="page-lead text-lg">
              One is the stronger overall answer. The other is the stronger budget answer. That is already enough signal for most buyers.
            </p>
          </div>

          <div className="space-y-6">
            {providers.map((provider) => (
              <div key={provider.name} className="page-card-glow p-1.5">
                <div className="page-card rounded-[1.6rem] p-7 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                    <div className="max-w-3xl">
                      <div className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-indigo-700 mb-4">
                        {provider.badge}
                      </div>
                      <div className="flex items-end gap-4 flex-wrap mb-4">
                        <h3 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] text-slate-950">{provider.name}</h3>
                        <span className="text-sm font-semibold text-slate-500">{provider.score}</span>
                      </div>
                      <p className="text-base md:text-lg leading-8 text-slate-600 mb-6">{provider.description}</p>

                      <div className="grid md:grid-cols-2 gap-5 mb-6">
                        <div className="rounded-2xl border border-indigo-200 bg-indigo-50/70 px-5 py-5">
                          <div className="text-sm font-semibold uppercase tracking-[0.14em] text-indigo-800 mb-3">Pros</div>
                          <div className="space-y-3">
                            {provider.pros.map((pro) => (
                              <div key={pro} className="flex items-start gap-3 text-sm text-indigo-950">
                                <CheckCircle2 className="h-4 w-4 mt-0.5 text-indigo-600 shrink-0" />
                                <span>{pro}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-2xl border border-rose-200 bg-rose-50/70 px-5 py-5">
                          <div className="text-sm font-semibold uppercase tracking-[0.14em] text-rose-800 mb-3">Cons</div>
                          <div className="space-y-3">
                            {provider.cons.map((con) => (
                              <div key={con} className="flex items-start gap-3 text-sm text-rose-950">
                                <XCircle className="h-4 w-4 mt-0.5 text-rose-600 shrink-0" />
                                <span>{con}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-56 shrink-0">
                      <div className="page-card-soft p-5 h-full flex flex-col justify-between">
                        <div>
                          <div className="text-sm text-slate-500 mb-2">Best fit</div>
                          <div className="text-lg font-semibold tracking-[-0.03em] text-slate-950 mb-4">
                            Teams that want WordPress to feel fast, recoverable, and manageable without turning every site task into server babysitting.
                          </div>
                        </div>
                        <Link href={provider.href} className="btn-brand w-full mt-6">
                          {provider.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section border-y border-slate-200/70 surface-warm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
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
