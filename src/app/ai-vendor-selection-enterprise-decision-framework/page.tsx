import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Compass,
  FileSearch,
  Handshake,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import { pageDescription, pageTitle, pageUrl } from './metadata'

const heroStats = [
  { value: '50+', label: 'AI vendors evaluated' },
  { value: '8', label: 'decision criteria in the matrix' },
  { value: '94%', label: 'selection success rate cited on the page' },
  { value: '$2.1M', label: 'average switching cost per vendor' },
]

const marketCards = [
  { value: '250+', label: 'Active enterprise AI vendors' },
  { value: '$127B', label: 'Enterprise AI market size 2026' },
  { value: '73%', label: 'Vendor selection decisions regretted' },
  { value: '$2.1M', label: 'Average switching cost per vendor' },
]

const frameworkCards = [
  {
    title: 'Technical capabilities',
    tone: 'border-violet-100 bg-violet-50/80',
    points: [
      'Foundation models, multimodal support, fine-tuning, edge and on-prem options.',
      'APIs, SDKs, enterprise integrations, data pipeline readiness.',
      'Performance guarantees, concurrency, scaling, and geographic footprint.',
    ],
  },
  {
    title: 'Business model & pricing',
    tone: 'border-indigo-100 bg-indigo-50/80',
    points: [
      'Usage vs subscription pricing, discounts, hidden fees, predictability.',
      'Contract flexibility, SLAs, exit clauses, IP terms.',
      'Implementation, support, operating, and migration costs all count.',
    ],
  },
  {
    title: 'Security & compliance',
    tone: 'border-rose-100 bg-rose-50/80',
    points: [
      'Encryption, access control, residency, vulnerability management.',
      'Privacy, industry compliance, AI governance, auditability.',
      'Continuity, insurance, liability, and incident response maturity.',
    ],
  },
  {
    title: 'Support & partnership',
    tone: 'border-amber-100 bg-amber-50/80',
    points: [
      '24/7 support, TAM coverage, services, training, certification.',
      'Roadmap influence, early access, co-innovation, executive alignment.',
      'Community, ecosystem, integrations, and customer success depth.',
    ],
  },
]

const scoringRows = [
  ['Technical Capabilities', '25%', '9.2', '8.8', '8.5', '8.7', '8.3'],
  ['Business Model & Pricing', '20%', '7.8', '8.1', '8.4', '8.9', '8.6'],
  ['Security & Compliance', '20%', '8.3', '8.7', '9.1', '9.3', '9.5'],
  ['Support & Partnership', '15%', '7.9', '8.2', '8.6', '9.0', '9.1'],
  ['Innovation & Roadmap', '10%', '9.5', '9.1', '8.8', '8.4', '8.1'],
  ['Market Position & Stability', '5%', '9.3', '7.8', '9.7', '9.8', '9.6'],
  ['User Experience & Usability', '3%', '9.1', '8.9', '8.2', '8.5', '7.8'],
  ['Cultural & Strategic Fit', '2%', '8.4', '8.6', '8.1', '8.8', '8.3'],
]

const totalRow = ['Weighted Total Score', '100%', '8.65', '8.58', '8.69', '8.91', '8.78']

const processCards = [
  {
    title: 'Phase 1: Requirements definition',
    icon: FileSearch,
    points: [
      'Business use case definition',
      'Technical requirements specification',
      'Budget and timeline constraints',
      'Security and compliance needs',
      'Integration requirements analysis',
      'Success criteria establishment',
    ],
  },
  {
    title: 'Phase 2: Vendor evaluation',
    icon: Compass,
    points: [
      'Long-list vendor identification',
      'RFI/RFP process execution',
      'Proof of concept development',
      'Reference customer interviews',
      'Technical due diligence',
      'Commercial terms negotiation',
    ],
  },
  {
    title: 'Phase 3: Selection & implementation',
    icon: Handshake,
    points: [
      'Final vendor selection decision',
      'Contract finalization and signing',
      'Implementation planning',
      'Change management preparation',
      'Integration and testing',
      'Go-live and success measurement',
    ],
  },
]

const analysisCards = [
  {
    title: 'Use case alignment',
    points: [
      'Generative AI: OpenAI and Anthropic lead in creative and reasoning-heavy tasks.',
      'Enterprise integration: Microsoft and Google fit better when ecosystem alignment matters.',
      'Infrastructure services: AWS and Azure cover broader infrastructure patterns.',
    ],
  },
  {
    title: 'Cost optimization strategies',
    points: [
      'Multi-vendor strategy can improve leverage, resilience, and use-case fit.',
      'Cost control needs usage monitoring, scaling controls, and regular review.',
      'Best-of-breed is fine until governance is too weak to manage it.',
    ],
  },
  {
    title: 'Common selection pitfalls',
    points: [
      'Over-weighting benchmark performance while ignoring integration complexity.',
      'Thinking short-term price beats long-term value and switching risk.',
      'Underestimating dependency, change management, and rollout friction.',
    ],
  },
]

const roiCards = [
  {
    title: 'Optimized vendor selection',
    tone: 'border-indigo-100 bg-indigo-50/80',
    rows: [
      ['Implementation success rate', '94%'],
      ['Time to value', '4.2 months'],
      ['3-year TCO savings', '$1.8M'],
      ['ROI achievement', '267%'],
    ],
  },
  {
    title: 'Poor vendor selection',
    tone: 'border-rose-100 bg-rose-50/80',
    rows: [
      ['Implementation success rate', '27%'],
      ['Time to value', '14.7 months'],
      ['3-year additional costs', '$3.2M'],
      ['ROI achievement', '-23%'],
    ],
  },
]

const executionCards = [
  {
    title: 'Week 1-2 actions',
    points: [
      'Download your evaluation template',
      'Define AI use cases and requirements',
      'Set the evaluation team and criteria',
      'Create the preliminary vendor long-list',
    ],
  },
  {
    title: 'Week 3-8 execution',
    points: [
      'Run the RFI/RFP process',
      'Conduct proof of concepts',
      'Complete vendor due diligence',
      'Make the final selection decision',
    ],
  },
]

const relatedLinks = [
  {
    href: '/ai-vendor-risk-evaluation-tool-2026',
    title: 'AI Vendor Risk Evaluation Tool 2026',
    note: '先看风险，再谈 shortlist。',
  },
  {
    href: '/ai-vendor-due-diligence-checklist-enterprise-2026',
    title: 'AI Vendor Due Diligence Checklist 2026',
    note: '把该问的尽调问题问完。',
  },
  {
    href: '/enterprise-ai-vendor-shortlist-scorecard-2026',
    title: 'Enterprise AI Vendor Shortlist Scorecard 2026',
    note: '把长名单收成 shortlist。',
  },
  {
    href: '/ai-procurement-decision-matrix-tool-2026',
    title: 'AI Procurement Decision Matrix Tool 2026',
    note: '需要更偏采购打法时继续看。',
  },
]

export default function AIVendorSelectionEnterpriseDecisionFrameworkPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-03-11"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_24%,#ffffff_56%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[34rem] h-[34rem] bg-[radial-gradient(circle_at_18%_18%,rgba(14,165,233,0.05),transparent_24%),radial-gradient(circle_at_78%_22%,rgba(99,91,255,0.05),transparent_22%),radial-gradient(circle_at_54%_82%,rgba(251,191,36,0.05),transparent_28%)]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
        <section className="page-hero relative">
          <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6">
                  <Sparkles className="h-4 w-4 text-[#635bff]" />
                  Enterprise vendor selection 2026
                </div>
                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  AI vendor 选型，
                  <span className="brand-gradient-text block">别把采购做成抽盲盒。</span>
                </h1>
                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  这页保留原来的 8 维决策框架、市场数据、评分矩阵、流程、ROI 对比和执行步骤，只把视觉统一到当前浅色 Stripe-ish UI。内容还是那套：系统化选型，比事后返工便宜太多。
                </p>
                <div className="mb-10 flex flex-wrap gap-3">
                  <a href="#matrix" className="btn-brand inline-flex items-center gap-2">
                    查看评分矩阵
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link href="/ai-vendor-risk-evaluation-tool-2026" className="btn-secondary inline-flex items-center gap-2">
                    先做风险评估
                  </Link>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
                  {heroStats.map((item) => (
                    <div key={item.label} className="page-card bg-white/90 p-4">
                      <div className="mb-1 text-3xl font-semibold tracking-[-0.04em] text-slate-950">{item.value}</div>
                      <div className="text-sm text-slate-600">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
                <div className="relative page-card-glow p-5 md:p-6">
                  <div className="page-card bg-white/95 p-6">
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <div className="mb-1 text-sm text-slate-500">What this page preserves</div>
                        <div className="text-xl font-semibold text-slate-950">Same framework, cleaner shell</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        8 criteria
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[
                        'Market overview and switching-cost story stay intact.',
                        'The comparison matrix still uses the original vendor scores.',
                        'Process phases, ROI comparison, and execution steps remain.',
                        'Canonical, metadata, schema, and internal links are now properly wired.',
                      ].map((item) => (
                        <div key={item} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                            <p className="text-sm leading-6 text-slate-600">{item}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 rounded-2xl border border-sky-100 bg-sky-50/80 px-4 py-4 text-sm leading-6 text-slate-700">
                      选型最大的坑不是“选错”，而是你根本说不清自己为什么选它。这个框架就是拿来防这个的。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Market overview</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              市场很热闹，
              <span className="brand-gradient-text block">但错误选型一样很贵。</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              原页面的市场数据和“选错代价”逻辑保留。现在只是把它摆得更像一个真正的决策页面，而不是一张长到想关掉的宣传页。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {marketCards.map((card) => (
              <div key={card.label} className="page-card p-8">
                <div className="text-4xl font-semibold tracking-[-0.05em] text-slate-950">{card.value}</div>
                <div className="mt-3 text-sm leading-6 text-slate-600">{card.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Framework</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              8 维决策框架，
              <span className="brand-gradient-text block">不靠供应商 demo 冲昏头。</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {frameworkCards.map((card) => (
              <div key={card.title} className={`page-card border p-8 ${card.tone}`}>
                <h3 className="mb-4 text-2xl font-semibold text-slate-950">{card.title}</h3>
                <div className="space-y-3 text-sm leading-6 text-slate-700">
                  {card.points.map((point) => (
                    <div key={point} className="rounded-2xl border border-white/80 bg-white/80 px-4 py-4">
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="matrix" className="mb-16 page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Comparison matrix</div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
                评分矩阵不是圣旨，
                <span className="brand-gradient-text block">但至少比拍脑袋强太多。</span>
              </h2>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 text-sm leading-6 text-slate-600">
              Scores based on the page’s original Q4 2026 evaluation snapshot.
            </div>
          </div>

          <div className="overflow-x-auto rounded-[1.5rem] border border-slate-200 bg-white">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-950 text-white">
                <tr>
                  <th className="px-5 py-4 text-left font-semibold">Evaluation criteria</th>
                  <th className="px-5 py-4 text-center font-semibold">Weight</th>
                  <th className="px-5 py-4 text-center font-semibold">OpenAI</th>
                  <th className="px-5 py-4 text-center font-semibold">Anthropic</th>
                  <th className="px-5 py-4 text-center font-semibold">Google</th>
                  <th className="px-5 py-4 text-center font-semibold">Microsoft</th>
                  <th className="px-5 py-4 text-center font-semibold">AWS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {scoringRows.map((row) => (
                  <tr key={row[0]} className="hover:bg-slate-50">
                    <td className="px-5 py-4 font-semibold text-slate-900">{row[0]}</td>
                    <td className="px-5 py-4 text-center font-semibold text-indigo-600">{row[1]}</td>
                    <td className="px-5 py-4 text-center text-slate-700">{row[2]}</td>
                    <td className="px-5 py-4 text-center text-slate-700">{row[3]}</td>
                    <td className="px-5 py-4 text-center text-slate-700">{row[4]}</td>
                    <td className="px-5 py-4 text-center text-slate-700">{row[5]}</td>
                    <td className="px-5 py-4 text-center text-slate-700">{row[6]}</td>
                  </tr>
                ))}
                <tr className="bg-indigo-50 font-semibold">
                  <td className="px-5 py-4 text-slate-950">{totalRow[0]}</td>
                  <td className="px-5 py-4 text-center text-slate-950">{totalRow[1]}</td>
                  <td className="px-5 py-4 text-center text-indigo-700">{totalRow[2]}</td>
                  <td className="px-5 py-4 text-center text-indigo-700">{totalRow[3]}</td>
                  <td className="px-5 py-4 text-center text-indigo-700">{totalRow[4]}</td>
                  <td className="px-5 py-4 text-center text-indigo-700">{totalRow[5]}</td>
                  <td className="px-5 py-4 text-center text-amber-700">{totalRow[6]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Process</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              选型流程要分阶段，
              <span className="brand-gradient-text block">不然所有问题都会拖到最后一周。</span>
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {processCards.map((card) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="page-card p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
                    <Icon className="h-5 w-5 text-[#635bff]" />
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold text-slate-950">{card.title}</h3>
                  <ul className="space-y-3 text-sm leading-6 text-slate-700">
                    {card.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </section>

        <section className="mb-16 grid gap-6 lg:grid-cols-3">
          {analysisCards.map((card, index) => {
            const icons = [Target, BarChart3, Shield]
            const Icon = icons[index]
            return (
              <div key={card.title} className="page-card p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
                  <Icon className="h-5 w-5 text-[#635bff]" />
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-slate-950">{card.title}</h3>
                <div className="space-y-3 text-sm leading-6 text-slate-700">
                  {card.points.map((point) => (
                    <div key={point} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </section>

        <section className="mb-16 grid gap-6 lg:grid-cols-2">
          {roiCards.map((card) => (
            <div key={card.title} className={`page-card border p-8 ${card.tone}`}>
              <h3 className="mb-6 text-2xl font-semibold text-slate-950">{card.title}</h3>
              <div className="space-y-3">
                {card.rows.map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between rounded-2xl border border-white/80 bg-white/80 px-4 py-4 text-sm">
                    <span className="text-slate-700">{label}</span>
                    <span className="font-semibold text-slate-950">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mb-16 page-card border border-indigo-100 bg-indigo-50/80 p-8 md:p-10 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-sm font-medium text-indigo-700">
              <TrendingUp className="h-4 w-4" />
              ROI impact kept from the original page
            </div>
            <p className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 md:text-3xl">
              Systematic vendor selection increases success probability by 3.5x and reduces TCO by $5M over 3 years.
            </p>
          </div>
        </section>

        <section className="mb-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <div className="rounded-[1.5rem] bg-gradient-to-r from-[#0f172a] via-[#635bff] to-sky-500 p-8 text-white">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">Start the selection process without the usual chaos.</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">
                原页面的行动步骤保留，只是现在放进更清楚的执行模块里。先定义需求，再做 shortlist，再验证，不要一上来就被 vendor 带着走。
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {executionCards.map((card) => (
                  <div key={card.title} className="rounded-[1.5rem] border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
                    <h3 className="mb-4 text-xl font-semibold">{card.title}</h3>
                    <ul className="space-y-2 text-sm leading-6 text-white/85">
                      {card.points.map((point) => (
                        <li key={point}>• {point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="page-card p-8">
            <h2 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">Related internal resources</h2>
            <div className="space-y-3">
              {relatedLinks.map((item) => (
                <Link key={item.href} href={item.href} className="block rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 transition hover:border-indigo-200 hover:bg-indigo-50/60">
                  <div className="font-semibold text-slate-950">{item.title}</div>
                  <div className="mt-1 text-sm leading-6 text-slate-600">{item.note}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
