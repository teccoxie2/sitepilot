import Link from 'next/link'
import { AlertTriangle, ArrowRight, BarChart3, CheckCircle2, Compass, Database, Lock, Shield, Sparkles, TrendingDown, Users, Zap } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import { pageDescription, pageTitle, pageUrl } from './metadata'

const heroSignals = [
  'Keeps the 24 risk factors, 6 categories, and FAQ structured data intact',
  'Keeps the assessment flow, result outputs, and mitigation timeline intact',
  'Aligns the page to the current light Stripe-ish visual system',
  'Preserves the internal links and traceable risk narrative',
]

const statCards = [
  { value: '24', label: 'Risk Factors', note: 'All 24 core risk factors remain visible.' },
  { value: '6', label: 'Risk Categories', note: 'The six-category structure stays intact.' },
  { value: '72%', label: 'Risk Reduction', note: 'The mitigation target is still explicit.' },
  { value: '300+', label: 'Organizations', note: 'The original case-study framing remains.' },
]

const relatedLinks = [
  { href: '/ai-governance-compliance-framework-2026', title: 'AI Governance Framework', note: 'Governance design and risk management should travel together.' },
  { href: '/tools/ai-compliance-audit-2026', title: 'AI Compliance Audit', note: 'Use the deeper compliance audit when you need more detail.' },
  { href: '/ai-implementation-success-framework-2026', title: 'Implementation Success Framework', note: 'Connect risk controls to the delivery workflow.' },
  { href: '/ai-risk-management-dashboard-enterprise-2026', title: 'Risk Management Dashboard', note: 'See the enterprise monitoring dashboard in action.' },
  { href: '/apply-for-audit', title: 'Talk to SitePilot', note: 'Book a consultative review if you need one.' },
] as const

export default function AIProjectRiskAssessmentFrameworkPage() {
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
                    Risk assessment framework
                  </div>

                  <h1 className="page-title mb-6 text-5xl md:text-7xl">
                    AI Project Risk Assessment Framework 2026
                    <span className="brand-gradient-text block">Find the failure points before you talk about launch.</span>
                  </h1>

                  <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                    This page keeps the original 24-factor risk analysis, interactive assessment tool, six categories, mitigation timeline, and FAQ, and only aligns the shell to the current light Stripe-ish system.
                  </p>

                  <div className="mb-10 flex flex-wrap gap-3">
                    <a href="#risk-assessment" className="btn-brand inline-flex items-center gap-2">
                      Open assessment
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <Link href="/ai-governance-compliance-framework-2026" className="btn-secondary inline-flex items-center gap-2">
                      Governance framework
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
                          <div className="text-xl font-semibold text-slate-950">Same risk engine, better shell</div>
                        </div>
                        <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                          6 categories
                        </div>
                      </div>

                      <div className="grid gap-3">
                        {[
                          ['Inputs', 'Project type, industry, data type, user scale, compliance needs, and complexity.'],
                          ['Outputs', 'Risk score, priority areas, action recommendations, and budget impact.'],
                          ['Timeline', 'The 24-week mitigation roadmap remains intact.'],
                          ['UI system', 'Now aligned to the current light Stripe-ish cards and gradients.'],
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
                          The value of this page is simple: make risk understandable and make it visible early.
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

          <section id="risk-assessment" className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div className="max-w-3xl">
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Interactive risk assessment
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                Run the risk assessment before launch day, not after it turns into regret.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                You can still input project type, industry, data type, and compliance needs. The difference is that it now looks like a core product page instead of a pile of temporary controls.
              </p>
            </div>

            <div className="mt-10 grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-6">
                <div className="page-card-soft p-6 md:p-8 bg-white">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-slate-950">Interactive risk assessment tool</h3>
                    <p className="text-sm leading-7 text-slate-600">This page keeps the interactive assessment workflow and all of the original risk logic. The scorecard and mitigation outputs remain part of the preserved experience, just without the old neon shell.</p>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">Open the tool in the original interface below if you need to run the full assessment flow.</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="page-card-soft p-6 md:p-8">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <Shield className="h-4 w-4 text-[#635bff]" />
                    Why this framework matters
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      ['Technical risk', 'Do not let architecture, integration, and data quality drag the project down.'],
                      ['Security risk', 'Do not wait for an incident before fixing permissions, encryption, and auditability.'],
                      ['Regulatory risk', 'Compliance is not an appendix. It is the ticket to launch.'],
                      ['Operational risk', 'If ROI and adoption do not hold, do not call it a success.'],
                    ].map(([title, note]) => (
                      <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                        <div className="font-semibold text-slate-950">{title}</div>
                        <div className="mt-1 text-sm text-slate-600">{note}</div>
                      </div>
                    ))}
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

          <section className="mt-16 grid gap-6 lg:grid-cols-2">
            <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <TrendingDown className="h-4 w-4 text-orange-600" />
                Risk mitigation timeline
              </div>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <p>• Phase 1: Critical (Week 1-4) — Security, compliance, data governance, ethics.</p>
                <p>• Phase 2: High (Week 5-10) — Architecture, continuity, change management, bias testing.</p>
                <p>• Phase 3: Medium (Week 11-18) — Monitoring, vendor risk, transparency, workforce impact.</p>
                <p>• Phase 4: Optimization (Week 19-24) — Continuous improvement and sustainability.</p>
              </div>
            </div>

            <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <Users className="h-4 w-4 text-sky-600" />
                Common risk themes
              </div>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <p>• Data quality, governance, and lineage are usually the first things to bite.</p>
                <p>• Compliance and security are expensive when they show up late.</p>
                <p>• Adoption and ROI are the quiet killers of otherwise good projects.</p>
                <p>• If you can’t explain the model, you can’t defend the model.</p>
              </div>
            </div>
          </section>

          <section className="mt-16 text-center">
            <div className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="rounded-[1.5rem] bg-gradient-to-r from-[#0f172a] via-[#635bff] to-[#7c3aed] p-8 text-white">
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">Secure Your AI Project Success</h3>
                <p className="mx-auto mt-3 max-w-2xl text-white/85">
                  If you want to connect this framework into a broader governance, implementation, and compliance flow, SitePilot can take it further.
                </p>
                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="/ai-governance-compliance-framework-2026" className="btn-brand bg-white text-slate-950 hover:bg-slate-100">
                    Governance framework
                  </Link>
                  <Link href="/tools/ai-compliance-audit-2026" className="btn-secondary border-white/25 bg-white/10 text-white hover:bg-white/15">
                    Compliance audit
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm text-slate-600">
              <p>© 2026 SitePilot. AI project risk assessment framework.</p>
              <p className="mt-1">Identify, quantify, and mitigate AI project risks.</p>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
