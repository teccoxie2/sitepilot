import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Coins,
  Gauge,
  Globe,
  Headphones,
  ShieldCheck,
  Sparkles,
  XCircle,
} from 'lucide-react'
import RelatedLinks from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'SiteGround Review 2026 | SitePilot'
const pageDescription =
  'A practical 2026 SiteGround review covering Google Cloud-backed infrastructure, support quality, WordPress tooling, renewal pricing, and whether the premium positioning is still justified for business sites.'
const pageUrl = 'https://sitepilot.co/hosting/siteground-review'

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
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
}

const quickPicks = [
  {
    label: 'Verdict',
    value: 'Best premium default for most business sites',
    note: 'SiteGround is still the easiest serious recommendation when uptime discipline and support quality matter more than chasing the lowest invoice.',
  },
  {
    label: 'Best fit',
    value: 'Business WordPress and production sites',
    note: 'A strong answer for teams that want cleaner operations, staging tools, and less hosting nonsense.',
  },
  {
    label: 'Main advantage',
    value: 'Support + operational trust',
    note: 'The real premium is not branding. It is less wasted time when things break or traffic changes.',
  },
  {
    label: 'Main caution',
    value: 'Renewal pricing',
    note: 'SiteGround is good, but it is not cheap, and pretending otherwise would be goofy.',
  },
]

const scorecard = [
  {
    title: 'Support quality',
    score: '9.4/10',
    body: 'This is still SiteGround’s clearest advantage. Better support means less operational drag when the site actually matters.',
    icon: Headphones,
  },
  {
    title: 'Infrastructure trust',
    score: '9.1/10',
    body: 'Google Cloud-backed infrastructure and a more disciplined operating model give SiteGround a stronger reliability story than budget hosts.',
    icon: ShieldCheck,
  },
  {
    title: 'WordPress fit',
    score: '9.2/10',
    body: 'Staging, backups, and a more polished WordPress workflow make SiteGround easy to recommend for business publishing stacks.',
    icon: Globe,
  },
  {
    title: 'Value for money',
    score: '8.1/10',
    body: 'You are paying more, but the premium is often defensible if downtime, weak support, or clumsy tooling would cost you more anyway.',
    icon: Coins,
  },
]

const strengths = [
  'Support quality is meaningfully better than most mainstream budget alternatives.',
  'The platform feels calmer to operate because staging, backups, caching, and WordPress tooling are treated like normal features, not luxury add-ons.',
  'SiteGround is easier to trust for business websites where preventable headaches cost more than the hosting bill itself.',
  'Performance is strong enough that you rarely feel like you compromised by choosing the operationally safer option.',
]

const tradeoffs = [
  'Renewal pricing is real and absolutely not subtle.',
  'If the site is tiny and cost-sensitive, SiteGround may be more host than you actually need.',
  'The value case weakens fast if you only compare intro offers and ignore total cost of ownership.',
  'People who buy SiteGround expecting bargain hosting are shopping in the wrong aisle.',
]

const decisionRows = [
  {
    title: 'Choose SiteGround if…',
    points: [
      'The site is commercially important',
      'Support quality and operational trust matter more than shaving a few dollars off the bill',
      'You want a stronger WordPress operating experience without going full enterprise hosting',
    ],
  },
  {
    title: 'Skip SiteGround if…',
    points: [
      'Your only real buying criterion is the lowest possible price',
      'The site is small enough that premium support has no meaningful business value',
      'You would rather accept budget-hosting compromises than pay for a calmer stack',
    ],
  },
  {
    title: 'Best comparison path',
    points: [
      'Compare against Hostinger if you are deciding between budget value and premium trust',
      'Compare inside WordPress-hosting guides if the stack is CMS-heavy',
      'Use SiteGround as the benchmark for “what better hosting support feels like”',
    ],
  },
]

const related = [
  {
    title: 'Hostinger Review',
    href: '/hosting/hostinger-review',
    description: 'Compare SiteGround’s premium support-first approach with Hostinger’s budget-performance proposition.',
    category: 'hosting',
  },
  {
    title: 'WordPress Hosting',
    href: '/hosting/wordpress-hosting',
    description: 'See where SiteGround sits in the broader WordPress hosting decision.',
    category: 'hosting',
  },
  {
    title: 'Best Web Hosting',
    href: '/hosting/best-web-hosting',
    description: 'Return to the shortlist view across broader hosting use cases.',
    category: 'hosting',
  },
]

export default function SiteGroundReview2026() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-04-18"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-22 pb-18 md:pt-28 md:pb-24">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-indigo-500" />
                2026 premium hosting audit
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                SiteGround review,
                <span className="block brand-gradient-text">without the premium-hosting cosplay.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                SiteGround is a premium hosting provider built around stronger support, cleaner WordPress tooling, and a more reliable operating experience. In 2026, the real question is not whether it is cheap. It is whether paying more meaningfully reduces risk, friction, and wasted time.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/hosting/wordpress-hosting" className="btn-brand">
                  Compare WordPress hosting
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/hosting/hostinger-review" className="btn-secondary">
                  Compare budget alternative
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
                      <div className="text-sm text-slate-500 mb-1">Fast verdict</div>
                      <div className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Why SiteGround still justifies the premium</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Trust costs money
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {[
                      'SiteGround wins when support quality has real business value.',
                      'The WordPress workflow is cleaner and less annoying than most cheaper alternatives.',
                      'The premium is defensible because it often buys calmer operations, not just a shinier landing page.',
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
                        SiteGround is not the answer for people who just want the lowest headline price. If that is the only lens, you are asking the wrong question.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section surface-muted relative">
        <div className="absolute inset-x-0 top-0 h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <div className="page-pill mb-4">Scorecard</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">How SiteGround performs where it actually matters.</h2>
            <p className="page-lead text-lg">
              Premium hosting only deserves the premium label if support, workflow, and reliability really improve. Otherwise it is just expensive branding.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {scorecard.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="page-card-soft p-6">
                  <div className="inline-flex rounded-2xl bg-indigo-50 p-3 mb-5">
                    <Icon className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="text-xs uppercase tracking-[0.16em] text-slate-400 mb-2">{item.score}</div>
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
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="page-card p-7">
              <div className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700 mb-5">
                What SiteGround gets right
              </div>
              <div className="space-y-3">
                {strengths.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 mt-1 text-indigo-500 shrink-0" />
                      <p className="text-sm text-slate-700 leading-6">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="page-card p-7">
              <div className="inline-flex rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-rose-700 mb-5">
                Where it still hurts
              </div>
              <div className="space-y-3">
                {tradeoffs.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                    <div className="flex items-start gap-3">
                      <XCircle className="h-4 w-4 mt-1 text-rose-500 shrink-0" />
                      <p className="text-sm text-slate-700 leading-6">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section border-y border-slate-200/70 surface-warm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <div className="page-pill mb-4">Decision guide</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">When SiteGround is worth paying for.</h2>
            <p className="page-lead text-lg">
              Good hosting does not need to be cheap. It needs to be cheaper than the problems it prevents.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {decisionRows.map((item) => (
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
