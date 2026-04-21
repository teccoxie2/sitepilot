import Link from 'next/link'
import { ArrowRight, BarChart3, CheckCircle2, Compass, Shield, Sparkles, Target, TrendingUp } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import RelatedLinks from '@/components/RelatedLinks'
import { pageDescription, pageTitle, pageUrl } from './metadata'

const heroSignals = [
  '保留原始的评分维度、workflow、FAQ schema 和 RelatedLinks',
  '保留采购、治理、安全、价格和实施风险的判断逻辑',
  '统一到当前浅色 Stripe-ish UI',
  '保留所有内部链接，不动导航骨架',
]

const dimensions = [
  { title: 'Strategic Fit', weight: '15%', note: 'Business use-case alignment, sponsorship, roadmap relevance.' },
  { title: 'Technical Architecture', weight: '15%', note: 'Deployment model, integration effort, latency and scale.' },
  { title: 'Data Governance', weight: '20%', note: 'Usage policy, residency, retention, and sensitive-data handling.' },
  { title: 'Security & Access', weight: '15%', note: 'SSO, MFA, RBAC, audit logs, incident response.' },
  { title: 'Commercial Model', weight: '10%', note: 'Pricing transparency, support minimums, exit terms.' },
  { title: 'Implementation Speed', weight: '10%', note: 'Time to first value, onboarding quality, change effort.' },
  { title: 'Compliance Readiness', weight: '10%', note: 'Privacy obligations, sector requirements, evidence.' },
  { title: 'Risk Profile', weight: '5%', note: 'Lock-in, rollback feasibility, subprocessor clarity.' },
]

const scoringScale = [
  { score: '5', label: 'Strong', detail: 'Clear evidence, low ambiguity, and controls already proven in similar environments.' },
  { score: '3', label: 'Baseline', detail: 'Acceptable capability with gaps that need mitigation, contract controls, or pilot validation.' },
  { score: '1', label: 'High Risk', detail: 'Weak evidence, unresolved control gaps, or claims that collapse under technical review.' },
]

const workflow = [
  'Use the RFP template to gather comparable vendor responses.',
  'Use the due diligence checklist to verify security, privacy, and architecture claims.',
  'Score each shortlisted vendor only on documented evidence.',
  'Validate disputed assumptions during the pilot, then update final weighting before approval.',
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an AI procurement decision matrix?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI procurement decision matrix is a weighted evaluation framework used to compare shortlisted vendors across security, data governance, architecture, commercial model, implementation effort, and business fit before production approval.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should teams use a decision matrix in AI procurement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Teams should use a decision matrix after collecting RFP responses and completing initial due diligence. It works best when multiple vendors remain viable and the organization needs a documented, evidence-based way to rank trade-offs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should be weighted most heavily in an AI procurement matrix?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The heaviest weights usually belong to data governance, security, architecture, and business fit. Price matters, but cheap AI becomes expensive when controls, integration effort, or pilot reliability fail under production conditions.',
      },
    },
  ],
}

const relatedLinks = [
  { title: 'Enterprise AI Vendor Comparison Guide 2026', href: '/enterprise-ai-vendor-comparison-guide-2026', description: 'Compare core vendor categories before formal procurement starts.', category: 'guide' },
  { title: 'Enterprise AI Vendor RFP Template 2026', href: '/enterprise-ai-vendor-rfp-template-2026', description: 'Collect comparable answers across procurement, security, and architecture.', category: 'guide' },
  { title: 'AI Vendor Due Diligence Checklist 2026', href: '/ai-vendor-due-diligence-checklist-enterprise-2026', description: 'Verify vendor claims before final scoring.', category: 'guide' },
  { title: 'Enterprise AI Vendor Shortlist Scorecard 2026', href: '/enterprise-ai-vendor-shortlist-scorecard-2026', description: 'Convert weighted assumptions into shortlist rankings.', category: 'tools' },
  { title: 'Enterprise AI Vendor Pricing Guide 2026', href: '/enterprise-ai-vendor-pricing-guide-2026', description: 'Stress-test pricing and contract assumptions before approval.', category: 'guide' },
  { title: 'Enterprise AI Vendor Pilot Evaluation Checklist 2026', href: '/enterprise-ai-vendor-pilot-evaluation-checklist-2026', description: 'Validate acceptance criteria before production rollout.', category: 'tools' },
  { title: 'SitePilot Methodology', href: '/methodology', description: 'See how SitePilot keeps vendor evaluation evidence-first.', category: 'guide' },
] as const

export default function AIProcurementDecisionMatrixToolPage() {
  return (
    <>
      <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} />
      <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
          <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
          <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>

        <main className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
          <section className="page-hero relative">
            <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
              <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="max-w-3xl">
                  <div className="page-pill mb-6">
                    <Sparkles className="h-4 w-4 text-[#635bff]" />
                    Decision support tool
                  </div>

                  <h1 className="page-title mb-6 text-5xl md:text-7xl">
                    AI Procurement Decision Matrix Tool 2026
                    <span className="brand-gradient-text block">把采购争论变成可追溯的分数。</span>
                  </h1>

                  <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                    这页保留原始的加权维度、评分尺度、工作流、FAQ schema 和相关链接，只把外壳统一到现在的浅色 Stripe-ish 风格。
                  </p>

                  <div className="mb-10 flex flex-wrap gap-3">
                    <a href="#decision-matrix" className="btn-brand inline-flex items-center gap-2">
                      Open matrix
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="btn-secondary inline-flex items-center gap-2">
                      Shortlist scorecard
                    </Link>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {heroSignals.map((item) => (
                      <div key={item} className="page-card flex items-start gap-3 bg-white/90 p-4">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#635bff]" />
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
                          <div className="text-xl font-semibold text-slate-950">Same matrix, better shell</div>
                        </div>
                        <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                          8 dimensions
                        </div>
                      </div>

                      <div className="grid gap-3">
                        {[
                          ['Inputs', '企业规模、治理约束、预算、架构偏好、实施时长。'],
                          ['Outputs', '加权分数、短名单排序和采购建议。'],
                          ['Evidence', '所有评分都要落在证据，而不是演示幻觉上。'],
                          ['UI system', '统一到当前浅色 Stripe-ish cards and gradients。'],
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
                          采购决策别靠 vibe。这个 matrix 的作用就是把 vibe 干掉。
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
              {[
                { value: '8', label: 'Weighted dimensions', note: '采购矩阵的八个核心维度。' },
                { value: '5%', label: 'Risk weight', note: '风险权重单独拎出来。' },
                { value: '3', label: 'Score bands', note: 'Strong、Baseline、High Risk。' },
                { value: '7', label: 'Related links', note: '内部导航保持完整。' },
              ].map((card) => (
                <div key={card.label} className="page-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-3xl font-semibold tracking-tight text-slate-950">{card.value}</div>
                  <div className="mt-2 text-sm font-medium text-slate-900">{card.label}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="decision-matrix" className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div className="max-w-3xl">
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <Target className="h-4 w-4" />
                Decision matrix
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                先把采购因素拆开，再让证据自己说话。
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                这不是为了复杂而复杂，而是为了避免 demo 现场把人哄晕。每个维度都要能追溯到证据、合同、流程或测试结果。
              </p>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-6">
                <div className="page-card-soft p-6 md:p-8">
                  <h3 className="text-2xl font-semibold text-slate-950">8 weighted dimensions</h3>
                  <div className="mt-6 space-y-6">
                    {dimensions.map((dimension) => (
                      <div key={dimension.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div className="text-lg font-semibold text-slate-950">{dimension.title}</div>
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-mono text-slate-600">{dimension.weight}</span>
                        </div>
                        <p className="text-sm leading-7 text-slate-600">{dimension.note}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {scoringScale.map((item) => (
                    <div key={item.score} className="page-card rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                      <div className="text-2xl font-semibold text-slate-950">{item.score}</div>
                      <div className="mt-2 text-sm font-medium text-slate-900">{item.label}</div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="page-card-glow p-1.5">
                  <div className="page-card-soft space-y-5 p-6 md:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-sm text-slate-500">Recommended workflow</div>
                        <div className="text-xl font-semibold text-slate-950">Do the boring evidence work</div>
                      </div>
                      <div className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                        procurement ready
                      </div>
                    </div>

                    <ol className="space-y-3 text-sm leading-7 text-slate-700 list-decimal list-inside">
                      {workflow.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>

                    <div className="rounded-[1.5rem] border border-indigo-100 bg-indigo-50/70 p-5">
                      <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">
                        Bottom line
                      </div>
                      <p className="text-sm leading-7 text-slate-700">
                        Price only matters after governance, security, architecture, and rollout risk stop being a problem.
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
                        <div className="mt-1 text-sm text-slate-600">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div className="max-w-3xl">
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <Shield className="h-4 w-4" />
                FAQ schema
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">采购矩阵不是摆设，是防踩坑工具。</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                FAQ 结构化数据继续保留，能不能帮 SEO 也许不该用玄学承诺，但至少内容结构是完整的。
              </p>
            </div>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
          </section>

          <section className="mt-16 text-center">
            <div className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="rounded-[1.5rem] bg-gradient-to-r from-[#0f172a] via-[#635bff] to-[#7c3aed] p-8 text-white">
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">Need a procurement decision framework?</h3>
                <p className="mx-auto mt-3 max-w-2xl text-white/85">
                  如果你要把这个矩阵接到更大的采购、尽调和 pilot 流程里，SitePilot 可以继续往下接。
                </p>
                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="btn-brand bg-white text-slate-950 hover:bg-slate-100">
                    Shortlist scorecard
                  </Link>
                  <Link href="/enterprise-ai-vendor-rfp-template-2026" className="btn-secondary border-white/25 bg-white/10 text-white hover:bg-white/15">
                    RFP template
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm text-slate-600">
              <p>© 2026 SitePilot. AI procurement decision matrix tool.</p>
              <p className="mt-1">Evidence-first vendor evaluation for enterprise teams.</p>
            </div>
          </section>
        </main>

        <RelatedLinks links={relatedLinks as any} />
      </div>
    </>
  )
}
