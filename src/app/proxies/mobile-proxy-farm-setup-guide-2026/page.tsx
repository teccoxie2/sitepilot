import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Cpu, Network, Shield, Sparkles, Zap } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Mobile Proxy Farm Setup Guide 2026 | SitePilot',
  description:
    'Learn how to plan a mobile proxy farm in 2026 across Android devices, SIM strategy, controller layout, and management software. Use this SitePilot guide to evaluate deployment fit before scaling a 4G or 5G proxy operation.',
  alternates: { canonical: 'https://sitepilot.co/proxies/mobile-proxy-farm-setup-guide-2026' },
  openGraph: {
    title: 'Mobile Proxy Farm Setup Guide 2026 | SitePilot',
    description:
      'Learn how to plan a mobile proxy farm in 2026 across Android devices, SIM strategy, controller layout, and management software. Use this SitePilot guide to evaluate deployment fit before scaling a 4G or 5G proxy operation.',
    url: 'https://sitepilot.co/proxies/mobile-proxy-farm-setup-guide-2026',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Proxy Farm Setup Guide 2026 | SitePilot',
    description:
      'Learn how to plan a mobile proxy farm in 2026 across Android devices, SIM strategy, controller layout, and management software. Use this SitePilot guide to evaluate deployment fit before scaling a 4G or 5G proxy operation.',
  },
}

const capabilityCards = [
  {
    title: 'Carrier-issued network access',
    desc: 'Carrier-issued IPs can fit workloads that face more network scrutiny than ordinary residential or datacenter traffic.',
    icon: Shield,
  },
  {
    title: 'Region and carrier control',
    desc: 'Device placement and SIM planning let operators map traffic to specific networks and local regions when that matters.',
    icon: Network,
  },
  {
    title: 'Rotation workflow control',
    desc: 'Managed software can coordinate device control and rotation workflows when the operating model is designed correctly.',
    icon: Cpu,
  },
]

const planningPoints = [
  {
    title: 'Android fleet design',
    note: 'The device count, form factor, and power model should be chosen before software or panel decisions.',
  },
  {
    title: 'SIM and data strategy',
    note: 'Carrier selection, regional placement, and usage caps define the economics long before scale arrives.',
  },
  {
    title: 'Controller layout',
    note: 'USB topology, power stability, and remote access decide whether the farm survives day-two operations.',
  },
  {
    title: 'Management software',
    note: 'Control layers matter, but only after the underlying hardware and connectivity plan are coherent.',
  },
]

const relatedGuides = [
  {
    eyebrow: 'Context',
    title: 'Residential vs mobile comparison',
    description:
      'Use the comparison page to decide when a mobile deployment is justified instead of a residential pool.',
    href: '/proxies/residential-vs-mobile-proxies-comparison-2026',
  },
  {
    eyebrow: 'Hardware',
    title: 'Hardware selection guide',
    description:
      'Validate phones, powered hubs, cables, and control nodes before you clone the architecture.',
    href: '/proxies/proxy-farm-hardware-selection-guide',
  },
  {
    eyebrow: 'Software',
    title: 'Mobile proxy software comparison',
    description: 'Compare management layers after the farm architecture is clear, not before.',
    href: '/proxies/mobile-proxy-software-comparison-2026',
  },
]

export default function MobileProxyFarmGuide() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title="Mobile Proxy Farm Setup Guide 2026 | SitePilot"
        description="Learn how to plan a mobile proxy farm in 2026 across Android devices, SIM strategy, controller layout, and management software."
        url="https://sitepilot.co/proxies/mobile-proxy-farm-setup-guide-2026"
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
                2026 mobile farm setup guide
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                How to build a professional mobile proxy farm,
                <span className="brand-gradient-text block">without confusing software for architecture.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                A mobile proxy farm is a localized infrastructure that routes traffic through real mobile devices and 4G or 5G SIM cards to obtain carrier-issued IP addresses. This guide focuses on the setup logic that matters first: Android clusters, SIM planning, controller layout, and the management layer you put on top of them.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  href="https://dashboard.coronium.io/en/sign-up#bc2924ccac1eae657b6fe8daf1e97201"
                  className="btn-brand"
                >
                  Get Coronium OS
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link href="/contact" className="btn-secondary">
                  Consult an expert
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                {planningPoints.map((item) => (
                  <div key={item.title} className="page-card px-4 py-4">
                    <div className="text-xs uppercase tracking-[0.16em] text-slate-400 mb-2">{item.title}</div>
                    <div className="text-sm text-slate-600 leading-6">{item.note}</div>
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
                      <div className="text-sm text-slate-500 mb-1">Planning flow</div>
                      <div className="text-xl font-semibold text-slate-950">What to decide before you scale</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Hardware first
                    </div>
                  </div>

                  <div className="space-y-3">
                    {planningPoints.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4"
                      >
                        <div className="font-semibold text-slate-950 mb-1">{item.title}</div>
                        <div className="text-sm text-slate-500">{item.note}</div>
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
          <div className="max-w-3xl mb-10">
            <div className="page-pill mb-4">Why mobile infrastructure</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">Why teams choose mobile proxy infrastructure in the first place.</h2>
            <p className="page-lead text-lg">
              Teams usually move to mobile infrastructure when they need carrier-issued IPs, stronger rotation behavior, and tighter session control than simpler proxy models can offer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {capabilityCards.map((item) => {
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
          <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-8 items-start">
            <div className="page-card-glow p-1.5">
              <div className="page-card rounded-[1.8rem] p-8 md:p-10 h-full">
                <div className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-indigo-700 mb-5">
                  Control layer option
                </div>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-5">
                  Coronium.io as an operator-focused control layer.
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  In this cluster, Coronium is presented as a control layer for Android fleets that need centralized rotation workflows, port exposure, and device monitoring. The software matters, but only after the physical fleet and data plan model are coherent.
                </p>

                <div className="space-y-4 mb-10">
                  {[
                    'Centralized device and port management',
                    'Rotation workflows tied to Android devices',
                    'Fleet monitoring and health visibility',
                    'Useful when teams operate their own hardware',
                  ].map((text) => (
                    <div key={text} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                      <span className="text-slate-700 leading-7">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href="https://ltespace.com/sitepilot" className="btn-secondary">
                    Visit LTESpace
                  </a>
                  <a
                    href="https://dashboard.coronium.io/en/sign-up#bc2924ccac1eae657b6fe8daf1e97201"
                    className="btn-brand"
                  >
                    Visit Coronium
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="page-card-glow p-1.5">
              <div className="page-card rounded-[1.8rem] p-6 md:p-8 bg-white/95">
                <div className="text-sm text-slate-500 mb-3">Example control action</div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-5 overflow-x-auto">
                  <pre className="text-sm leading-7 text-sky-200">
                    <code>{`// Coronium Device Control API
curl -X POST "https://api.coronium.io/rotate" \\
  -H "Authorization: Bearer $TOKEN" \\
  -d "device_id=phone_01"

{ "status": "ok", "rotation_requested": true }`}</code>
                  </pre>
                </div>
                <p className="text-slate-500 text-sm leading-6 mt-5">
                  The exact API is less important than the operating model behind it: device identity, rotation logic, and fleet health all need to be first-class concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section surface-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <div className="page-pill mb-4">Related guides</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">Use the rest of the proxy cluster in the right order.</h2>
            <p className="page-lead text-lg">
              The setup guide should not live in isolation. Move from model selection to hardware planning to software comparison so the build path stays coherent.
            </p>
          </div>

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
                Build the operating model before you scale.
                <span className="block brand-gradient-text">Software comes after hardware, SIMs, and controller design.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                If you are running your own device fleet, choose software only after the hardware, SIM plan, and controller model are clear. The cleanest panel in the world does not rescue a fragile power topology or a bad carrier plan.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://dashboard.coronium.io/en/sign-up#bc2924ccac1eae657b6fe8daf1e97201"
                  className="btn-brand"
                >
                  Start building now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link href="/proxies/mobile-proxy-software-comparison-2026" className="btn-secondary">
                  Compare software stacks
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
