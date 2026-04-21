import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import { ArrowRight, Smartphone, Network, Cpu, Shield, Sparkles, CheckCircle2, Globe, Server, Radio } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Mobile Proxy Infrastructure Guides 2026 | SitePilot',
  description:
    'Compare mobile proxy infrastructure in 2026 across network model, farm setup, hardware selection, and control software.',
  alternates: { canonical: 'https://sitepilot.co/proxies' },
  openGraph: {
    title: 'Mobile Proxy Infrastructure Guides 2026 | SitePilot',
    description:
      'Compare mobile proxy infrastructure in 2026 across network model, farm setup, hardware selection, and control software.',
    url: 'https://sitepilot.co/proxies',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Proxy Infrastructure Guides 2026 | SitePilot',
    description:
      'Compare mobile proxy infrastructure in 2026 across network model, farm setup, hardware selection, and control software.',
  },
}

const pageTitle = 'Mobile Proxy Infrastructure Guides 2026 | SitePilot'
const pageDescription =
  'Compare mobile proxy infrastructure in 2026 across network model, farm setup, hardware selection, and control software. Use this SitePilot hub to navigate residential vs mobile decisions, Android farm design, and operator tooling.'
const pageUrl = 'https://sitepilot.co/proxies'

const guides = [
  {
    title: 'Mobile proxy farm setup',
    desc: 'A practical path for Android-based mobile proxy infrastructure, including SIM planning, controller layout, and operating assumptions.',
    link: '/proxies/mobile-proxy-farm-setup-guide-2026',
    tag: 'Core blueprint',
    icon: Smartphone,
  },
  {
    title: 'Residential vs mobile',
    desc: 'Compare where each proxy type fits, how rotation behavior changes, and when mobile infrastructure is actually justified.',
    link: '/proxies/residential-vs-mobile-proxies-comparison-2026',
    tag: 'Comparison',
    icon: Network,
  },
  {
    title: 'Hardware selection',
    desc: 'Review device, hub, cable, and controller requirements before wasting money on a fragile cluster.',
    link: '/proxies/proxy-farm-hardware-selection-guide',
    tag: 'Hardware fit',
    icon: Cpu,
  },
  {
    title: 'Best ISP proxies',
    desc: 'Static residential options for long-lived sessions, lower-latency trust, and account continuity workflows.',
    link: '/proxies/best-isp-proxies-2026',
    tag: 'Static residential',
    icon: Radio,
  },
  {
    title: 'Best datacenter proxies',
    desc: 'Speed-first proxy options for throughput-heavy automation and scraping where residential trust is unnecessary.',
    link: '/proxies/best-datacenter-proxies-2026',
    tag: 'Speed + scale',
    icon: Server,
  },
]

const clusterLinks = [
  {
    title: 'Mobile proxy software comparison',
    desc: 'Compare controller layers, rotation tooling, and operating trade-offs before buying software you will hate in a week.',
    href: '/proxies/mobile-proxy-software-comparison-2026',
  },
  {
    title: 'Best residential proxies',
    desc: 'Use this when the workload needs stronger trust signals than datacenter supply can usually survive with.',
    href: '/proxies/best-residential-proxies-2026',
  },
  {
    title: 'Developer hub',
    desc: 'Technical guidance for operators who care about workflow design, automation fit, and implementation details.',
    href: '/proxies/developer-hub',
  },
]

export default function ProxiesHub() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-04-20"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.06fr_0.94fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                2026 proxy infrastructure guides
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Mobile Proxy Infrastructure Guides 2026
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                Mobile proxy infrastructure in 2026 includes network-model selection, Android device planning, powered USB topology, controller hosting, and software orchestration for IP rotation. This guide cluster compares the main architectural choices so operators can evaluate fit, hardware risk, and operating complexity before building or buying a stack.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/proxies/mobile-proxy-farm-setup-guide-2026" className="btn-brand">
                  Start with the setup guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/proxies/residential-vs-mobile-proxies-comparison-2026" className="btn-secondary">
                  Compare proxy models
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
                {[
                  'Move from model selection to setup planning in one flow',
                  'Treat hardware stability as part of the buying decision',
                  'Prefer clear architecture over “black-box” jargon',
                  'Use the same clean UI system as the rest of the site',
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
                      <div className="text-sm text-slate-500 mb-1">Decision path</div>
                      <div className="text-xl font-semibold text-slate-950">Proxy planning matrix</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Unified authority UI
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      ['Network model', 'Residential, mobile, ISP, or datacenter depending on trust requirements'],
                      ['Build path', 'DIY farm versus hosted panel depending on control and speed-to-launch'],
                      ['Hardware fit', 'Device density, power, cabling, and controller reliability all matter'],
                      ['Operational layer', 'Software, rotation logic, and day-two stability decide whether the stack survives'],
                    ].map(([title, note]) => (
                      <div key={title} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <div className="font-semibold text-slate-950">{title}</div>
                            <div className="text-sm text-slate-500 mt-1">{note}</div>
                          </div>
                          <Globe className="h-5 w-5 text-indigo-500 shrink-0" />
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
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mb-16">
          {guides.map((guide) => {
            const Icon = guide.icon
            return (
              <Link key={guide.title} href={guide.link} className="page-card p-8 hover:-translate-y-0.5 transition-transform block">
                <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 mb-5">
                  {guide.tag}
                </div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-[#635bff]" />
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">{guide.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-6">{guide.desc}</p>
                <div className="inline-flex items-center text-[#635bff] font-semibold">
                  Open guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            )
          })}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] mb-16">
          <div className="page-card-glow p-8 md:p-12 surface-muted">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Why this works better</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                Proxy content can still feel technical.
                <span className="block brand-gradient-text">It just no longer has to look ridiculous.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                The old dark cyber style made everything feel louder than it needed to be. The new system keeps the category serious,
                but aligns it with the rest of SitePilot so the whole site finally feels like one product.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/website-builders" className="btn-secondary">See the reference style</Link>
                <Link href="/proxies/mobile-proxy-farm-setup-guide-2026" className="btn-brand">
                  Open setup guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="page-card rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="page-pill mb-4 inline-flex items-center gap-2">
              <Shield className="h-4 w-4 text-[#635bff]" />
              Cluster map
            </div>
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">Keep the internal links working for you.</h2>
            <p className="text-slate-600 leading-7 mb-6">
              Same topic cluster, cleaner navigation. Use these pages when you need to move from infrastructure theory to specific buying or implementation decisions.
            </p>
            <div className="space-y-4">
              {clusterLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="page-card-soft block rounded-2xl border border-slate-200 bg-slate-50/90 p-4 transition hover:border-sky-200 hover:bg-sky-50/70"
                >
                  <div className="font-semibold text-slate-950 mb-1">{item.title}</div>
                  <div className="text-sm leading-6 text-slate-600">{item.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
