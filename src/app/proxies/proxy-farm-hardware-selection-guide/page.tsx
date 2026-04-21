import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Cpu, Smartphone, Sparkles, Usb, Zap } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Proxy Farm Hardware Selection Guide 2026 | SitePilot',
  description:
    'Review proxy farm hardware in 2026 across Android devices, powered USB hubs, cables, controller hosts, power delivery, and thermal stability. Use this SitePilot guide to validate hardware fit before building a mobile proxy cluster.',
  alternates: { canonical: 'https://sitepilot.co/proxies/proxy-farm-hardware-selection-guide' },
  openGraph: {
    title: 'Proxy Farm Hardware Selection Guide 2026 | SitePilot',
    description:
      'Review proxy farm hardware in 2026 across Android devices, powered USB hubs, cables, controller hosts, power delivery, and thermal stability. Use this SitePilot guide to validate hardware fit before building a mobile proxy cluster.',
    url: 'https://sitepilot.co/proxies/proxy-farm-hardware-selection-guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proxy Farm Hardware Selection Guide 2026 | SitePilot',
    description:
      'Review proxy farm hardware in 2026 across Android devices, powered USB hubs, cables, controller hosts, power delivery, and thermal stability. Use this SitePilot guide to validate hardware fit before building a mobile proxy cluster.',
  },
}

const checklist = [
  {
    title: 'Android devices',
    desc: 'Choose Android devices that match your carrier, remote-control method, and long-run stability requirements.',
    icon: Smartphone,
  },
  {
    title: 'Industrial USB hubs',
    desc: 'Hub stability, power delivery, and controller compatibility matter more than cheap consumer accessories.',
    icon: Usb,
  },
  {
    title: 'Cooling and power',
    desc: 'Thermal control and stable power matter if the cluster is expected to stay online for long operating windows.',
    icon: Zap,
  },
]

const compatibilityRows = [
  {
    label: 'Phone model',
    spec: 'Android 9+ with stable modem behavior',
    reason: 'Carrier fit and remote-control compatibility',
  },
  {
    label: 'Hub type',
    spec: 'Powered sync-capable hub with stable delivery',
    reason: 'Reduces disconnects under multi-device load',
  },
  {
    label: 'Cables',
    spec: 'Reliable short USB cables',
    reason: 'Helps reduce avoidable connection instability',
  },
  {
    label: 'Controller',
    spec: 'Dedicated mini PC or Linux host',
    reason: 'Keeps device control workflows predictable',
  },
]

const relatedGuides = [
  {
    eyebrow: 'Decision',
    title: 'Residential vs mobile comparison',
    description: 'Start here if you still need to justify why a mobile stack is necessary for the workload.',
    href: '/proxies/residential-vs-mobile-proxies-comparison-2026',
  },
  {
    eyebrow: 'Deployment',
    title: 'Mobile proxy farm setup',
    description:
      'Pair this hardware matrix with the deployment guide so infrastructure and software assumptions stay aligned.',
    href: '/proxies/mobile-proxy-farm-setup-guide-2026',
  },
  {
    eyebrow: 'Software',
    title: 'Mobile proxy software comparison',
    description: 'Compare the management layer after hardware constraints are clear.',
    href: '/proxies/mobile-proxy-software-comparison-2026',
  },
]

export default function HardwareGuide() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title="Proxy Farm Hardware Selection Guide 2026 | SitePilot"
        description="Review proxy farm hardware in 2026 across Android devices, powered USB hubs, cables, controller hosts, power delivery, and thermal stability."
        url="https://sitepilot.co/proxies/proxy-farm-hardware-selection-guide"
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
                2026 hardware blueprint
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Proxy farm hardware selection guide,
                <span className="brand-gradient-text block">for stability, power, and controller fit.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                Proxy farm hardware is the physical infrastructure behind a mobile proxy cluster. Effective selection is not about buying random phones. It is about stable USB controllers, reliable power delivery, thermal behavior, and Android hardware that can support remote control and repeatable rotation under load.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/proxies/mobile-proxy-farm-setup-guide-2026" className="btn-brand">
                  Open the setup guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/proxies/mobile-proxy-software-comparison-2026" className="btn-secondary">
                  Compare software layers
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                {[
                  'Treat hardware stability as part of proxy quality, not a separate ops concern.',
                  'Short cables and powered hubs are boring choices that prevent expensive downtime.',
                  'Controller hosts should be chosen for predictable device management, not general-purpose convenience.',
                  'Thermal and power problems surface faster than software problems in real farms.',
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
                      <div className="text-sm text-slate-500 mb-1">Hardware logic</div>
                      <div className="text-xl font-semibold text-slate-950">What makes the cluster durable</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Stability over hype
                    </div>
                  </div>

                  <div className="space-y-3">
                    {compatibilityRows.map((row) => (
                      <div
                        key={row.label}
                        className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4"
                      >
                        <div className="font-semibold text-slate-950 mb-1">{row.label}</div>
                        <div className="text-sm text-slate-600 mb-1">{row.spec}</div>
                        <div className="text-sm text-slate-500">{row.reason}</div>
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
            <div className="page-pill mb-4">Hardware checklist</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">The physical pieces that matter before the farm exists.</h2>
            <p className="page-lead text-lg">
              Hardware planning is less glamorous than software selection, but it decides whether the cluster can stay online long enough to be worth managing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {checklist.map((item) => {
              const Icon = item.icon

              return (
                <div key={item.title} className="page-card-glow p-1.5">
                  <div className="page-card rounded-[1.6rem] p-7 h-full">
                    <div className="w-12 h-12 rounded-2xl border border-indigo-100 bg-indigo-50 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-[#635bff]" />
                    </div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-7">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="page-card-glow p-1.5">
            <div className="page-card rounded-[1.8rem] p-8 md:p-10">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl border border-indigo-100 bg-indigo-50 flex items-center justify-center shrink-0">
                  <Cpu className="w-6 h-6 text-[#635bff]" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Compatibility matrix</div>
                  <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950">
                    Hardware decisions should map to controller reality.
                  </h2>
                </div>
              </div>

              <div className="space-y-4">
                {compatibilityRows.map((row) => (
                  <div key={row.label} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5">
                    <div className="grid md:grid-cols-[180px_1fr_1fr] gap-4 items-start">
                      <div className="font-semibold text-slate-950">{row.label}</div>
                      <div className="text-slate-700">{row.spec}</div>
                      <div className="text-sm text-slate-500">{row.reason}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section surface-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {relatedGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="page-card p-7 hover:-translate-y-0.5 transition-transform block">
                <div className="text-xs uppercase tracking-[0.18em] text-indigo-500 mb-3">{guide.eyebrow}</div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">{guide.title}</h3>
                <p className="text-slate-600 leading-7 mb-5">{guide.description}</p>
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
                Hardware and software should be chosen together.
                <span className="block brand-gradient-text">The farm fails physically before it fails philosophically.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Hardware decisions only make sense when the control software, rotation workflow, and operator model are defined at the same time. Choose the devices, hubs, cables, and controller host with the actual operating model in mind, not with generic “best hardware” assumptions.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://dashboard.coronium.io/en/sign-up#bc2924ccac1eae657b6fe8daf1e97201"
                  className="btn-brand"
                >
                  Get Coronium OS
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link href="/proxies/mobile-proxy-software-comparison-2026" className="btn-secondary">
                  Compare software
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
