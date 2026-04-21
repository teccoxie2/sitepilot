import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Sparkles, Zap } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Residential vs Mobile Proxies Comparison 2026 | SitePilot',
  description:
    'Compare residential proxies and mobile proxies in 2026 across IP source, rotation behavior, operating complexity, and workload fit. Use this SitePilot guide to decide when mobile infrastructure is justified over residential supply.',
  alternates: { canonical: 'https://sitepilot.co/proxies/residential-vs-mobile-proxies-comparison-2026' },
  openGraph: {
    title: 'Residential vs Mobile Proxies Comparison 2026 | SitePilot',
    description:
      'Compare residential proxies and mobile proxies in 2026 across IP source, rotation behavior, operating complexity, and workload fit. Use this SitePilot guide to decide when mobile infrastructure is justified over residential supply.',
    url: 'https://sitepilot.co/proxies/residential-vs-mobile-proxies-comparison-2026',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Residential vs Mobile Proxies Comparison 2026 | SitePilot',
    description:
      'Compare residential proxies and mobile proxies in 2026 across IP source, rotation behavior, operating complexity, and workload fit. Use this SitePilot guide to decide when mobile infrastructure is justified over residential supply.',
  },
}

const comparisonRows = [
  {
    feature: 'IP source',
    residential: 'Fixed-line broadband allocated by residential ISPs',
    mobile: 'Carrier-issued IPs from 4G and 5G mobile networks',
  },
  {
    feature: 'Rotation behavior',
    residential: 'Often slower and provider-dependent',
    mobile: 'Usually stronger when device and software controls are set up correctly',
  },
  {
    feature: 'Typical fit',
    residential: 'General web tasks and lower-friction collection',
    mobile: 'Workflows facing tighter anti-bot pressure or session sensitivity',
  },
  {
    feature: 'Operational complexity',
    residential: 'Usually simpler to buy and use',
    mobile: 'Higher because devices, SIMs, power, and software all matter',
  },
  {
    feature: 'Cost profile',
    residential: 'Often lower at entry level',
    mobile: 'Usually higher because infrastructure is heavier',
  },
]

const clusterLinks = [
  {
    eyebrow: 'Next step',
    title: 'Mobile proxy farm setup',
    description:
      'Use this after the comparison when you need a real deployment path for Android devices, SIM rotation, and management software.',
    href: '/proxies/mobile-proxy-farm-setup-guide-2026',
  },
  {
    eyebrow: 'Validation',
    title: 'Hardware selection guide',
    description:
      'Review device, hub, cable, and controller fit before you spend money on a cluster that cannot stay online.',
    href: '/proxies/proxy-farm-hardware-selection-guide',
  },
  {
    eyebrow: 'Software',
    title: 'Mobile proxy software comparison',
    description:
      'Use this after the network decision when you need to compare Coronium, LTESpace, and DIY control stacks.',
    href: '/proxies/mobile-proxy-software-comparison-2026',
  },
]

export default function ProxyComparison() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title="Residential vs Mobile Proxies Comparison 2026 | SitePilot"
        description="Compare residential proxies and mobile proxies in 2026 across IP source, rotation behavior, operating complexity, and workload fit."
        url="https://sitepilot.co/proxies/residential-vs-mobile-proxies-comparison-2026"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                2026 proxy model comparison
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Residential vs mobile proxies,
                <span className="brand-gradient-text block">for trust, complexity, and workload fit.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                The technical difference comes down to IP source and operating model. Residential proxies come from household broadband. Mobile proxies route through 4G and 5G carrier networks. This page compares when the heavier mobile model is justified over simpler residential supply.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/proxies/best-residential-proxies-2026" className="btn-brand">
                  Compare residential providers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/proxies/best-mobile-proxies-2026" className="btn-secondary">
                  Compare mobile providers
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                {[
                  'Residential is usually the simpler default for general collection and automation.',
                  'Mobile earns its premium when carrier trust and rotation behavior materially change the outcome.',
                  'The comparison is not just about trust; it is also about operational burden.',
                  'Choosing mobile too early usually creates infrastructure pain without real upside.',
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
                      <div className="text-sm text-slate-500 mb-1">Decision lens</div>
                      <div className="text-xl font-semibold text-slate-950">What really separates the two models</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Simplicity vs trust
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      ['Network reputation', 'Mobile supply can carry more trust for tougher targets, but not for free.'],
                      ['Operating model', 'Residential is simpler to buy and deploy; mobile requires heavier hardware and software coordination.'],
                      ['Budget fit', 'Residential usually wins early-stage economics. Mobile wins only when the workload forces it.'],
                      ['Next steps', 'If mobile is justified, the immediate follow-up is setup planning, hardware validation, and software comparison.'],
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

      <section className="page-section surface-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <div className="page-pill mb-4">Comparison table</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">A practical side-by-side view.</h2>
            <p className="page-lead text-lg">
              Use this as a workload filter, not as an abstract technology debate. The right choice depends on how much trust you need and how much infrastructure pain you can absorb.
            </p>
          </div>

          <div className="page-card-glow p-1.5 overflow-hidden">
            <div className="page-card rounded-[1.8rem] overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-6 text-left border-b border-slate-200 text-slate-500 font-semibold">Feature</th>
                    <th className="p-6 text-left border-b border-slate-200 text-slate-950 font-semibold">Residential proxies</th>
                    <th className="p-6 text-left border-b border-slate-200 text-indigo-700 font-semibold">Mobile proxies (4G/5G)</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="align-top">
                      <td className="p-6 border-b border-slate-200 font-semibold text-slate-950">{row.feature}</td>
                      <td className="p-6 border-b border-slate-200 text-slate-600">{row.residential}</td>
                      <td className="p-6 border-b border-slate-200 text-slate-700 bg-indigo-50/40">{row.mobile}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="page-card-glow p-1.5">
              <div className="page-card rounded-[1.8rem] p-8 h-full">
                <h3 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">When to choose residential</h3>
                <p className="text-slate-600 leading-8 mb-8">
                  Use residential supply when the workload needs lower operational complexity and does not justify managing Android devices, SIM inventory, or carrier rotation workflows.
                </p>
                <div className="space-y-4">
                  {['Search monitoring', 'General web collection', 'Market checks', 'Lower-complexity automation'].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="page-card-glow p-1.5">
              <div className="page-card rounded-[1.8rem] p-8 h-full surface-muted">
                <h3 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">When to choose mobile</h3>
                <p className="text-slate-600 leading-8 mb-8">
                  Use mobile infrastructure when network trust, rotation behavior, and session control matter enough to justify a heavier operating model.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    'Session-sensitive automation',
                    'Higher-friction collection',
                    'Carrier-based rotation workflows',
                    'Teams operating their own device fleets',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/proxies/mobile-proxy-farm-setup-guide-2026" className="btn-brand">
                  Build your own farm
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section surface-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {clusterLinks.map((item) => (
              <Link key={item.href} href={item.href} className="page-card p-7 hover:-translate-y-0.5 transition-transform block">
                <div className="text-xs uppercase tracking-[0.18em] text-indigo-500 mb-3">{item.eyebrow}</div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-7 mb-5">{item.description}</p>
                <div className="inline-flex items-center font-semibold text-[#635bff]">
                  Open guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="max-w-5xl mx-auto px-4">
          <div className="page-card-glow p-8 md:p-12 surface-muted">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Bottom line</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                Choose software after the network model is clear.
                <span className="block brand-gradient-text">Residential is simpler. Mobile is heavier, but sometimes justified.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                The cleaner path is simple: decide whether mobile infrastructure is justified, then map hardware and control software around that choice. If residential already clears the workload, do not buy yourself a mobile operating problem for no reason.
              </p>
              <a
                href="https://dashboard.coronium.io/en/sign-up#bc2924ccac1eae657b6fe8daf1e97201"
                className="btn-brand"
              >
                Start with Coronium.io
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
