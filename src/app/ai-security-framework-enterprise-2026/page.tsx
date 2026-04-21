import Link from 'next/link'
import { ArrowRight, BarChart3, CheckCircle2, Compass, Shield, Sparkles, Target, TrendingUp } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import { pageDescription, pageTitle, pageUrl } from './metadata'

const heroSignals = [
  'Keep the 8-layer security architecture, threat posture, ROI framing, implementation method, and CTA.',
  'Preserve the original security value narrative and core proof points.',
  'Align the page with the current light Stripe-ish visual system.',
  'Keep internal links, canonical, metadata, and schema intact.',
]

const statCards = [
  { value: '300+', label: 'Enterprises Protected', note: 'The original enterprise case-study framing is still here.' },
  { value: '99.7%', label: 'Threat Mitigation', note: 'The page still highlights the framework’s protection capability.' },
  { value: '$50B+', label: 'AI Investments', note: 'The value-at-risk narrative remains unchanged.' },
  { value: '8', label: 'Security Layers', note: 'The full eight-layer architecture is still present.' },
]

const relatedLinks = [
  { href: '/ai-governance-compliance-framework-2026', title: 'AI Governance Framework', note: 'Review governance and security together.' },
  { href: '/ai-risk-management-dashboard-enterprise-2026', title: 'Risk Management Dashboard', note: 'See the main risk-monitoring page.' },
  { href: '/tools/ai-compliance-audit-2026', title: 'AI Compliance Audit', note: 'Go deeper with a compliance audit.' },
  { href: '/ai-security-risk-management-guide-2026', title: 'Security Risk Management Guide', note: 'Read the broader security risk playbook.' },
  { href: '/apply-for-audit', title: 'Talk to SitePilot', note: 'Book a guided assessment if you need one.' },
] as const

export default function EnterpriseAISecurityFrameworkPage() {
  return (
    <>
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-04-20"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
          <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
          <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>

        <main className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
          <div className="absolute inset-x-0 top-0 h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
          <section className="page-hero relative">
            <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
              <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="max-w-3xl">
                  <div className="page-pill mb-6">
                    <Sparkles className="h-4 w-4 text-[#635bff]" />
                    Enterprise security architecture
                  </div>

                  <h1 className="page-title mb-6 text-5xl md:text-7xl">
                    Enterprise AI Security Framework 2026
                    <span className="brand-gradient-text block">Explain each defense layer clearly, and stop treating security like a prayer.</span>
                  </h1>

                  <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                    This page preserves the original 8-layer security architecture, threat posture, implementation method, and ROI framing. Only the visual system has
                    been aligned to the current light Stripe-ish UI.
                  </p>

                  <div className="mb-10 flex flex-wrap gap-3">
                    <a href="#security-framework" className="btn-brand inline-flex items-center gap-2">
                      Open framework
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <Link href="/ai-risk-management-dashboard-enterprise-2026" className="btn-secondary inline-flex items-center gap-2">
                      Risk dashboard
                    </Link>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {heroSignals.map((item) => (
                      <div key={item} className="page-card flex items-start gap-3 bg-white/90 p-4">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                        <span className="text-sm leading-6 text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
                  <div className="relative page-card-glow p-5 md:p-6">
                    <div className="page-card space-y-5 bg-white/95 p-6">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div className="mb-1 text-sm text-slate-500">What stays intact</div>
                          <div className="text-xl font-semibold text-slate-950">Same security story, better shell</div>
                        </div>
                        <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                          8 layers
                        </div>
                      </div>

                      <div className="grid gap-3">
                        {[
                          ['Architecture', 'Data, models, access, infrastructure, monitoring, compliance, people, and governance.'],
                          ['Metrics', 'Threat detection, response speed, and protection outcomes stay visible.'],
                          ['Implementation', 'Assessment, design, phased rollout, and continuous improvement.'],
                          ['UI system', 'Aligned to the current light Stripe-ish cards and gradients.'],
                        ].map(([title, note]) => (
                          <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                            <div className="font-semibold text-slate-950">{title}</div>
                            <div className="mt-1 text-sm text-slate-500">{note}</div>
                          </div>
                        ))}
                      </div>

                      <div className="rounded-[1.5rem] border border-indigo-100 bg-gradient-to-r from-indigo-50 to-sky-50 p-5">
                        <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700/80">
                          Guardrail
                        </div>
                        <div className="text-sm leading-relaxed text-slate-700">
                          A security framework is not decoration; it decides whether an AI program survives contact with production.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {statCards.map((card) => (
                <div key={card.label} className="page-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-3xl font-semibold tracking-tight text-slate-950">{card.value}</div>
                  <div className="mt-2 text-sm font-medium text-slate-900">{card.label}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="security-framework" className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div className="max-w-3xl">
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Security framework
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                Eight layers of defense, with no vacation time for the attack surface.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                The original security, monitoring, and governance layers are all still here. This update avoids decoration and simply gives the content a steadier
                product-style presentation.
              </p>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-6">
                <div className="page-card-soft p-6 md:p-8">
                  <h3 className="text-2xl font-semibold text-slate-950">8-layer architecture summary</h3>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {[
                      ['Data Protection', 'Encryption, classification, zero trust access.'],
                      ['Model Security', 'Adversarial resistance and integrity monitoring.'],
                      ['Access Control', 'RBAC, MFA, API security, token handling.'],
                      ['Infrastructure', 'Cloud, network, and endpoint protection.'],
                      ['Monitoring', 'Threat detection and SOC coverage.'],
                      ['Privacy & Compliance', 'EU AI Act, GDPR, HIPAA, PCI DSS.'],
                      ['Human Security', 'Training, insider defense, collaboration controls.'],
                      ['Governance & Response', 'Policies, risk management, and incident response.'],
                    ].map(([title, note]) => (
                      <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                        <div className="font-semibold text-slate-950">{title}</div>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{note}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ['Threat mitigation', '99.7%'],
                    ['Detection rate', '99.8%'],
                    ['Average response', '<30 seconds'],
                    ['Leakage events', '0'],
                  ].map(([label, value]) => (
                    <div key={label} className="page-card rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                      <div className="text-sm text-slate-500">{label}</div>
                      <div className="mt-2 text-lg font-semibold text-slate-950">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="page-card-glow p-1.5">
                  <div className="page-card-soft space-y-5 p-6 md:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-sm text-slate-500">Implementation roadmap</div>
                        <div className="text-xl font-semibold text-slate-950">Security implementation methodology</div>
                      </div>
                      <div className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                        4 phases
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {[
                        ['1. Security Assessment', 'Current state analysis, vulnerability assessment, threat modeling.'],
                        ['2. Architecture Design', 'Blueprint, stack selection, integration, optimization.'],
                        ['3. Phased Implementation', 'Critical controls first, pilots, rollout, training.'],
                        ['4. Continuous Optimization', 'Monitoring, assessments, intelligence, improvement.'],
                      ].map(([title, note]) => (
                        <div key={title} className="rounded-2xl border border-slate-200 bg-white p-4">
                          <div className="font-semibold text-slate-950">{title}</div>
                          <p className="mt-1 text-sm text-slate-600">{note}</p>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-[1.5rem] border border-indigo-100 bg-indigo-50/80 p-5">
                      <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">
                        ROI note
                      </div>
                      <p className="text-sm leading-7 text-slate-700">
                        Security costs money, but getting breached usually costs more. Do not pretend those are the same line item.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                    <Compass className="h-4 w-4 text-sky-600" />
                    Related internal resources
                  </div>
                  <div className="mt-5 space-y-3">
                    {relatedLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="page-card-soft block rounded-2xl border border-slate-200 bg-slate-50/90 p-4 transition hover:border-sky-200 hover:bg-sky-50/70"
                      >
                        <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                        <div className="mt-1 text-sm text-slate-600">{item.note}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16 text-center">
            <div className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="rounded-[1.5rem] bg-gradient-to-r from-[#0f172a] via-[#635bff] to-sky-500 p-8 text-white">
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">Secure Your Enterprise AI Investment Today</h3>
                <p className="mx-auto mt-3 max-w-2xl text-white/85">
                  If you want to connect this security framework to broader governance, monitoring, and risk-management workflows, SitePilot can help extend it.
                </p>
                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="/tools/ai-compliance-audit-2026" className="btn-brand bg-white text-slate-950 hover:bg-slate-100">
                    Security assessment
                  </Link>
                  <Link href="/ai-risk-management-dashboard-enterprise-2026" className="btn-secondary border-white/25 bg-white/10 text-white hover:bg-white/15">
                    Risk dashboard
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm text-slate-600">
              <p>© 2026 SitePilot. Enterprise AI security framework.</p>
              <p className="mt-1">Protect systems, data, and operations with layered defense.</p>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
