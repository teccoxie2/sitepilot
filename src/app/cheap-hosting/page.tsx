import type { Metadata } from 'next'
import Link from 'next/link'
import { AlertTriangle, ArrowRight, CheckCircle2, Coins, Gauge, Headphones, Sparkles, Wallet, XCircle } from 'lucide-react'
import RelatedLinks, { hostingRelatedLinks } from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Best Cheap Web Hosting Under $5 in 2026 | SitePilot'
const pageDescription =
  'Compare cheap web hosting under $5 in 2026. Review Hostinger, Namecheap, and A2 Hosting on speed, uptime, support, renewal pricing, and hidden trade-offs.'
const pageUrl = 'https://sitepilot.co/cheap-hosting'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: 'cheap web hosting, budget hosting under $5, best cheap hosting 2026, affordable web hosting',
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: pageUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
  alternates: { canonical: pageUrl },
}

const quickPicks = [
  {
    label: 'Best overall value',
    value: 'Hostinger',
    note: 'Still the easiest low-cost recommendation that does not immediately feel cheap in the bad sense.',
  },
  {
    label: 'Best pricing honesty',
    value: 'Namecheap',
    note: 'Not the fastest, but usually less annoying on renewal and upsell behavior.',
  },
  {
    label: 'Best raw speed',
    value: 'A2 Hosting',
    note: 'Fastest of the budget bunch, with the usual catch that renewals hurt more.',
  },
  {
    label: 'Main trap',
    value: 'Renewal shock',
    note: 'Cheap hosting is usually cheap only at the exact moment they want your card details.',
  },
]

const criteria = [
  {
    title: 'Budget without self-harm',
    body: 'Cheap hosting is only a win if the lower price does not come bundled with support chaos, slow servers, or forced upgrades later.',
    icon: Wallet,
  },
  {
    title: 'Speed with realism',
    body: 'We care whether the host feels usable for a real site, not whether it won a synthetic benchmark screenshot on a good day.',
    icon: Gauge,
  },
  {
    title: 'Support survivability',
    body: 'The cheaper the host, the more important support quality becomes. Budget hosting breaks trust fast when support is useless.',
    icon: Headphones,
  },
  {
    title: 'Pricing honesty',
    body: 'If the intro offer is the entire story, it is not a deal. It is bait with a billing calendar attached.',
    icon: Coins,
  },
]

const providers = [
  {
    name: 'Hostinger',
    badge: 'Best overall value',
    score: '9.2/10',
    price: '$2.99/month intro',
    renewal: '$7.99/month',
    description:
      'Hostinger wins this category because it manages to stay cheap without becoming obviously miserable. It is not premium hosting, but for many small sites it is the smartest low-cost answer.',
    metrics: ['Uptime: 99.97%', 'Load time: 780ms', 'Support: < 3 min', 'PageSpeed: 84/100'],
    pros: ['Strong balance of price and actual usability', 'Good beginner path', 'Global CDN and weekly backups included'],
    cons: ['Renewals jump hard', 'Entry plan constraints still exist'],
    summary: 'Choose Hostinger when you want the best shot at cheap hosting that still feels professionally workable.',
    href: '/hosting/hostinger-review',
    cta: 'Read Hostinger audit',
  },
  {
    name: 'Namecheap Shared Hosting',
    badge: 'Most transparent pricing feel',
    score: '8.4/10',
    price: '$2.88/month intro',
    renewal: '$4.88/month',
    description:
      'Namecheap is not winning on speed, but it earns points for being more predictable and less theatrical on pricing. That matters if you hate bait-and-switch economics.',
    metrics: ['Uptime: 99.94%', 'Load time: 1,240ms', 'Support: 5–15 min', 'PageSpeed: 76/100'],
    pros: ['More honest renewal profile', 'Solid security baseline', 'Lower pricing drama'],
    cons: ['Noticeably slower than the top two', 'Support is merely okay'],
    summary: 'Pick Namecheap when pricing honesty matters more to you than shaving every last millisecond off performance.',
    href: '/best-web-hosting-2026',
    cta: 'See full hosting rankings',
  },
  {
    name: 'A2 Hosting',
    badge: 'Fastest budget option',
    score: '8.8/10',
    price: '$3.92/month intro',
    renewal: '$10.99/month',
    description:
      'A2 Hosting is the speed-first option in the budget bracket. The trade-off is obvious: you pay for that advantage later through steeper renewals and more pricing friction.',
    metrics: ['Uptime: 99.96%', 'Load time: 650ms', 'Support: < 2 min', 'PageSpeed: 91/100'],
    pros: ['Fastest budget performer here', 'Good support response times', 'Developer-friendly enough'],
    cons: ['Higher renewal rates', 'More upsell pressure than it should have'],
    summary: 'Choose A2 when you care more about budget-tier speed than long-term pricing smoothness.',
    href: '/hosting/wordpress-hosting',
    cta: 'See WordPress hosting guide',
  },
]

const avoidProviders = [
  {
    name: 'HostGator',
    reasons: [
      'Oversold servers create the kind of slowness that makes cheap expensive in practice.',
      'Support quality is too inconsistent to trust when something breaks.',
      'Upsell pressure and hidden-feeling charges drag the whole experience down.',
    ],
  },
  {
    name: 'GoDaddy',
    reasons: [
      'Performance under load is rarely a selling point.',
      'Too many basic capabilities are treated like paid extras.',
      'The pricing structure is more annoying than it needs to be.',
    ],
  },
  {
    name: 'iPage',
    reasons: [
      'Speed is too weak for most modern expectations.',
      'Downtime reputation and UI quality both feel behind the times.',
      'It is hard to recommend when better cheap options already exist.',
    ],
  },
]

const decisionGuide = [
  {
    title: 'Choose Hostinger if…',
    points: ['You want the strongest overall value', 'You are building a first site or small business site', 'You want cheap hosting that still feels usable'],
  },
  {
    title: 'Choose Namecheap if…',
    points: ['You care a lot about pricing transparency', 'You can tolerate slower performance', 'You prefer a calmer billing story over benchmark numbers'],
  },
  {
    title: 'Choose A2 if…',
    points: ['You want the fastest option in this cheap bracket', 'You are okay paying more later', 'Speed matters more than renewal smoothness'],
  },
]

export default function CheapHostingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title="Best Cheap Web Hosting Under $5 in 2026"
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-02-14T00:00:00Z"
        modifiedDate="2026-04-18T00:00:00Z"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 pb-24 pt-6 sm:px-6 lg:px-8">
        <section className="page-hero relative">
          <div className="page-hero-inner mx-auto pb-16 pt-10 md:pb-24 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6 inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-indigo-500" />
                  2026 budget hosting guide
                </div>

                <h1 className="page-title mb-6 text-5xl font-semibold tracking-[-0.05em] text-slate-950 md:text-7xl">
                  Cheap hosting,
                  <span className="block bg-gradient-to-r from-slate-950 via-indigo-700 to-sky-600 bg-clip-text text-transparent">
                    without the fake bargain smell.
                  </span>
                </h1>

                <p className="page-lead mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                  Cheap hosting only works when the lower price does not quietly buy you slow servers, useless support, and billing nonsense later. This page focuses on the under-$5 options that are at least worth discussing.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link href="/best-web-hosting-2026" className="btn-brand inline-flex items-center gap-2">
                    See full hosting rankings
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/web-hosting" className="btn-secondary inline-flex items-center gap-2">
                    Open hosting hub
                  </Link>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {quickPicks.map((item) => (
                    <div key={item.label} className="page-card p-4 bg-white/90">
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
                        <div className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">What actually goes wrong</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        Price is not enough
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {[
                        'A low intro price does not matter if renewals get dumb later.',
                        'Cheap hosting is tolerable only when support is still usable.',
                        'Speed gaps become very obvious once the site starts carrying real content.',
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
                          If the website is revenue-critical, cheap hosting should be treated as a starting point, not a permanent identity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="absolute inset-x-0 top-[44rem] h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />

        <section className="page-section surface-muted">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-10">
              <div className="page-pill mb-4">Evaluation criteria</div>
              <h2 className="page-title text-3xl md:text-5xl mb-4">How to judge cheap hosting without fooling yourself.</h2>
              <p className="page-lead text-lg">
                Cheap hosting is where bad decision-making gets rewarded by marketing. That is why the selection criteria need to be stricter, not looser.
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
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-10">
              <div className="page-pill mb-4">Top budget picks</div>
              <h2 className="page-title text-3xl md:text-5xl mb-4">Three cheap hosts that are at least worth considering.</h2>
              <p className="page-lead text-lg">
                Not all under-$5 hosts deserve oxygen. These three cover the most defensible routes depending on what you value most.
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
                        <div className="flex flex-wrap gap-4 text-sm font-semibold text-indigo-700 mb-4">
                          <span>Intro: {provider.price}</span>
                          <span>Renewal: {provider.renewal}</span>
                        </div>
                        <p className="text-base md:text-lg leading-8 text-slate-600 mb-6">{provider.description}</p>

                        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3 mb-6">
                          {provider.metrics.map((metric) => (
                            <div key={metric} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                              {metric}
                            </div>
                          ))}
                        </div>

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

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-6 text-slate-700">
                          <span className="font-semibold">Plain answer:</span> {provider.summary}
                        </div>
                      </div>

                      <div className="lg:w-56 shrink-0">
                        <div className="page-card-soft p-5 h-full flex flex-col justify-between">
                          <div>
                            <div className="text-sm text-slate-500 mb-2">Best fit</div>
                            <div className="text-lg font-semibold tracking-[-0.03em] text-slate-950 mb-4">
                              Small sites, early-stage launches, and owners trying to avoid both overspending and obvious garbage.
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

        <section className="page-section surface-warm border-y border-slate-200/70">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-10">
              <div className="page-pill mb-4">Avoid list</div>
              <h2 className="page-title text-3xl md:text-5xl mb-4">Cheap hosts we would not bother defending.</h2>
              <p className="page-lead text-lg">
                Some providers are cheap in the way instant noodles are cheap during a finance crisis. Technically affordable, strategically stupid.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {avoidProviders.map((provider) => (
                <div key={provider.name} className="page-card p-6 border-rose-200/80">
                  <div className="inline-flex rounded-2xl bg-rose-50 p-3 mb-5">
                    <XCircle className="h-5 w-5 text-rose-600" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-4">{provider.name}</h3>
                  <div className="space-y-3">
                    {provider.reasons.map((reason) => (
                      <div key={reason} className="rounded-2xl border border-rose-200 bg-rose-50/70 px-4 py-3 text-sm text-rose-950">
                        {reason}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-10">
              <div className="page-pill mb-4">Decision guide</div>
              <h2 className="page-title text-3xl md:text-5xl mb-4">Pick the least regrettable cheap option.</h2>
              <p className="page-lead text-lg">
                The goal here is not perfection. It is avoiding the kind of cheap hosting choice that costs you weeks later.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {decisionGuide.map((item) => (
                <div key={item.title} className="page-card-soft p-6">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950 mb-4">{item.title}</h3>
                  <div className="space-y-3">
                    {item.points.map((point) => (
                      <div key={point} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="max-w-5xl mx-auto">
            <div className="page-card-glow p-1.5">
              <div className="page-card rounded-[1.8rem] p-8 md:p-10 text-center">
                <div className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 mb-5">
                  Bottom line
                </div>
                <h2 className="page-title text-3xl md:text-5xl mb-5">Cheap hosting is fine. Fake cheap is not.</h2>
                <p className="page-lead text-lg max-w-3xl mx-auto mb-8">
                  Hostinger is the best overall cheap hosting pick. Namecheap is the calmer pricing option. A2 is the speed-first option. The wrong move is choosing a host purely because the first invoice looked tiny.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link href="/best-web-hosting-2026" className="btn-brand inline-flex items-center gap-2">
                    See better long-term options
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/cloud-hosting-vs-traditional-hosting-2026" className="btn-secondary inline-flex items-center gap-2">
                    Compare hosting models
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section pt-0">
          <div className="max-w-6xl mx-auto">
            <RelatedLinks title="More hosting guides" links={hostingRelatedLinks.filter((link) => link.href !== '/cheap-hosting')} />
          </div>
        </section>
      </main>
    </div>
  )
}
