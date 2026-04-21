import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Mobile Proxy Software Comparison 2026 | Coronium vs LTESpace | SitePilot',
  description:
    'Compare mobile proxy software in 2026 across rotation control, device management, observability, and operator overhead. Use this guide to evaluate Coronium, LTESpace, and DIY control stacks before scaling a mobile proxy farm.',
  alternates: { canonical: 'https://sitepilot.co/proxies/mobile-proxy-software-comparison-2026' },
  openGraph: {
    title: 'Mobile Proxy Software Comparison 2026 | Coronium vs LTESpace | SitePilot',
    description:
      'Compare mobile proxy software in 2026 across rotation control, device management, observability, and operator overhead. Use this guide to evaluate Coronium, LTESpace, and DIY control stacks before scaling a mobile proxy farm.',
    url: 'https://sitepilot.co/proxies/mobile-proxy-software-comparison-2026',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Proxy Software Comparison 2026 | Coronium vs LTESpace | SitePilot',
    description:
      'Compare mobile proxy software in 2026 across rotation control, device management, observability, and operator overhead. Use this guide to evaluate Coronium, LTESpace, and DIY control stacks before scaling a mobile proxy farm.',
  },
}

const rows = [
  {
    feature: 'Primary fit',
    coronium: 'DIY operators managing physical Android farms',
    ltespace: 'Teams wanting hosted control with lower setup friction',
    diy: 'Engineers building custom ADB and modem orchestration',
  },
  {
    feature: 'Rotation control',
    coronium: 'Strong device-level rotation workflows',
    ltespace: 'Managed panel workflows with simpler operations',
    diy: 'Fully custom, but only if you maintain the stack',
  },
  {
    feature: 'Operator overhead',
    coronium: 'Moderate',
    ltespace: 'Lower',
    diy: 'High',
  },
  {
    feature: 'Observability',
    coronium: 'Centralized monitoring for device fleets',
    ltespace: 'Panel-level monitoring and hosted workflows',
    diy: 'Whatever you build yourself',
  },
  {
    feature: 'Best use case',
    coronium: 'Scaling an owned farm with repeatable operations',
    ltespace: 'Rapid deployment without deep internal tooling work',
    diy: 'Niche control requirements and strong engineering capacity',
  },
]

const decisionCards = [
  {
    title: 'When Coronium wins',
    points: [
      'You own the devices and need repeatable rotation control.',
      'You care about fleet visibility more than zero-touch onboarding.',
      'You want an operator-facing system, not raw scripts.',
    ],
  },
  {
    title: 'When LTESpace wins',
    points: [
      'You need faster deployment with less internal tooling work.',
      'Your team prefers hosted workflows over custom infrastructure.',
      'You want lower operational drag during early scale-up.',
    ],
  },
  {
    title: 'When DIY wins',
    points: [
      'You have unusual control requirements vendor panels cannot satisfy.',
      'You already operate internal ADB, modem, and monitoring expertise.',
      'You accept higher maintenance cost in exchange for flexibility.',
    ],
  },
]

const relatedLinks = [
  {
    eyebrow: 'Hub',
    title: 'Proxy resource center',
    description: 'Return to the full proxy topic cluster.',
    href: '/proxies',
  },
  {
    eyebrow: 'Decision',
    title: 'Residential vs mobile',
    description: 'Pick the right IP model before software selection.',
    href: '/proxies/residential-vs-mobile-proxies-comparison-2026',
  },
  {
    eyebrow: 'Deployment',
    title: 'Farm setup guide',
    description: 'Map software decisions to an actual device architecture.',
    href: '/proxies/mobile-proxy-farm-setup-guide-2026',
  },
  {
    eyebrow: 'Hardware',
    title: 'Hardware matrix',
    description: 'Validate phones, hubs, power, and controller fit.',
    href: '/proxies/proxy-farm-hardware-selection-guide',
  },
]

export default function MobileProxySoftwareComparisonPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title="Mobile Proxy Software Comparison 2026 | Coronium vs LTESpace | SitePilot"
        description="Compare mobile proxy software in 2026 across rotation control, device management, observability, and operator overhead."
        url="https://sitepilot.co/proxies/mobile-proxy-software-comparison-2026"
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
                2026 mobile proxy software guide
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Mobile proxy software comparison 2026,
                <span className="brand-gradient-text block">for control, observability, and operator fit.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                Mobile proxy software is the control layer that manages Android devices, triggers IP rotation, monitors health, and exposes usable proxy endpoints for automation. This comparison evaluates Coronium, LTESpace, and DIY stacks by operator overhead, rotation control, and deployment fit for teams scaling a real farm.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/proxies/mobile-proxy-farm-setup-guide-2026" className="btn-brand">
                  Start with the setup guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/proxies/residential-vs-mobile-proxies-comparison-2026" className="btn-secondary">
                  Pick the right proxy model
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                {[
                  'Compare control layers after the farm model is clear.',
                  'Treat rotation workflows and observability as first-class software requirements.',
                  'Lower setup friction is not the same thing as lower long-term cost.',
                  'DIY only wins when engineering capacity is genuinely part of the operating model.',
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
                      <div className="text-sm text-slate-500 mb-1">Evaluation path</div>
                      <div className="text-xl font-semibold text-slate-950">What the software decision really changes</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      After infrastructure
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      ['Control depth', 'How tightly the panel maps to device-level rotation and session behavior.'],
                      ['Operator drag', 'How much internal effort is required to deploy, maintain, and debug the stack.'],
                      ['Monitoring posture', 'Whether fleet health, port mapping, and failure visibility are built in or self-managed.'],
                      ['Scale path', 'Whether the software fits owned hardware, hosted workflows, or a custom engineering-heavy model.'],
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
            <div className="page-pill mb-4">Comparison matrix</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">Which software model fits the farm you actually want to run.</h2>
            <p className="page-lead text-lg">
              Software selection only makes sense when you compare it against the real operating model: owned hardware, hosted convenience, or a fully custom stack.
            </p>
          </div>

          <div className="page-card-glow p-1.5 overflow-hidden">
            <div className="page-card rounded-[1.8rem] overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-5 border-b border-slate-200 text-left text-slate-500 font-semibold">Decision factor</th>
                    <th className="p-5 border-b border-slate-200 text-left text-indigo-700 font-semibold">Coronium</th>
                    <th className="p-5 border-b border-slate-200 text-left text-sky-700 font-semibold">LTESpace</th>
                    <th className="p-5 border-b border-slate-200 text-left text-violet-700 font-semibold">DIY stack</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.feature} className="align-top">
                      <td className="p-5 border-b border-slate-200 font-semibold text-slate-950">{row.feature}</td>
                      <td className="p-5 border-b border-slate-200 text-slate-600">{row.coronium}</td>
                      <td className="p-5 border-b border-slate-200 text-slate-600">{row.ltespace}</td>
                      <td className="p-5 border-b border-slate-200 text-slate-600">{row.diy}</td>
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
          <div className="grid md:grid-cols-3 gap-6">
            {decisionCards.map((card) => (
              <div key={card.title} className="page-card-glow p-1.5">
                <div className="page-card rounded-[1.6rem] p-7 h-full">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-5">{card.title}</h3>
                  <div className="space-y-4">
                    {card.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                        <span className="text-slate-700 leading-7">{point}</span>
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
          <div className="grid md:grid-cols-4 gap-6">
            {relatedLinks.map((item) => (
              <Link key={item.href} href={item.href} className="page-card p-7 hover:-translate-y-0.5 transition-transform block">
                <div className="text-xs uppercase tracking-[0.18em] text-indigo-500 mb-3">{item.eyebrow}</div>
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950 mb-2">{item.title}</h3>
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
                Pick software after you understand the operating model.
                <span className="block brand-gradient-text">Panels should reflect the farm, not define it.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                The dumb mistake is choosing a panel before you define workload, device ownership, and operator capacity. Use the comparison, setup, and hardware pages together so software selection reflects the actual farm you intend to run.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://dashboard.coronium.io/en/sign-up#bc2924ccac1eae657b6fe8daf1e97201"
                  className="btn-brand"
                >
                  Review Coronium
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="https://ltespace.com/sitepilot" className="btn-secondary">
                  Review LTESpace
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
