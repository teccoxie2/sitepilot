import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  Compass,
  DollarSign,
  Layers,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI ROI Optimization Framework 2026 - CFO Financial Analysis Guide'
const pageDescription =
  'CFO视角的企业AI投资分析框架。基于50家财富500强企业18个月ROI追踪研究，7步ROI计算方法，风险评估，行业基准数据。专业企业AI咨询服务。'
const pageUrl = 'https://sitepilot.co/enterprise-ai-roi-optimization-framework-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['enterprise AI ROI', 'CFO analysis', 'AI investment framework', 'business value', 'ROI calculation', 'enterprise consulting'],
  alternates: { canonical: pageUrl },
  openGraph: { title: pageTitle, description: pageDescription, type: 'article', url: pageUrl },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription },
}

const heroStats = [
  { value: '83%', label: 'successful enterprises use structured financial planning' },
  { value: '18 mo', label: 'average payback window' },
  { value: '35-50%', label: 'hidden cost share to plan for' },
  { value: '47%', label: 'overall success rate without discipline' },
]

const steps = [
  {
    step: '1',
    title: 'Investment cost analysis',
    icon: DollarSign,
    tone: 'border-sky-100 bg-sky-50/80',
    groups: [
      { title: 'Technical costs', bullets: ['Software licensing: $50K-$500K/year', 'Infrastructure: $100K-$2M', 'Integration development: $200K-$1.5M'] },
      { title: 'People costs', bullets: ['Team training: $50K-$200K', 'External consulting: $150K-$800K', 'Change management: 15-25% of budget'] },
      { title: 'Hidden costs', bullets: ['Business disruption: 2-5% monthly revenue', 'Data preparation: 30-50% of project time', 'Annual maintenance: 20-30% of initial investment'] },
    ],
  },
  {
    step: '2',
    title: 'Revenue quantification',
    icon: TrendingUp,
    tone: 'border-indigo-100 bg-indigo-50/80',
    groups: [
      { title: 'Direct returns', bullets: ['Labor savings: $500K-$2M/year', 'Efficiency lift: 30-70%', 'Error reduction: 50-90%'] },
      { title: 'Indirect returns', bullets: ['Revenue growth: 5-15%', 'Launch speed: 30-50% faster', 'Decision accuracy: 10-25% improvement'] },
      { title: 'Strategic returns', bullets: ['New product opportunity: $5M-$50M', 'Competitive edge: 2-5 years', 'Organizational capability: long-term moat'] },
    ],
  },
  {
    step: '3',
    title: 'Risk assessment',
    icon: Shield,
    tone: 'border-amber-100 bg-amber-50/80',
    groups: [
      { title: 'Implementation risk', bullets: ['Delays: 5-10% budget increase per month', 'Missing features: 20-50% value discount', 'Maintenance: 50-100% higher'] },
      { title: 'Operational risk', bullets: ['Low adoption: 6-12 month delay', 'Data quality: 30-60% effectiveness loss', 'Compliance risk: $500K-$10M in penalties'] },
      { title: 'Market risk', bullets: ['Tech obsolescence: reinvest in 2-3 years', 'Competitive pressure: advantage halves', 'Regulatory changes: $200K-$2M cost'] },
    ],
  },
]

const benchmarks = [
  {
    title: 'Manufacturing',
    subtitle: '(15 companies)',
    investment: '$2.5M-$8M',
    payback: '14 months',
    roi: '45-85%',
    note: 'Equipment integration first, then expand in phases.',
  },
  {
    title: 'Financial services',
    subtitle: '(12 companies)',
    investment: '$5M-$15M',
    payback: '18 months',
    roi: '35-65%',
    note: 'Compliance-first. Security reviews are not optional.',
  },
  {
    title: 'Healthcare',
    subtitle: '(8 companies)',
    investment: '$3M-$12M',
    payback: '22 months',
    roi: '40-70%',
    note: 'Patient safety first, validate in small increments.',
  },
]

const checklist = [
  'Complete cost analysis including hidden costs',
  'Cash flow modeling by month or quarter',
  'Risk-adjusted ROI calculation',
  'Alternative investment comparison',
  'CFO directly involved in governance',
  'Monthly financial performance review',
  'Budget variance alert over 10%',
  'ROI milestone gating mechanism',
]

const relatedLinks = [
  { href: '/enterprise-ai-implementation-best-practices-2026', title: 'Implementation best practices', note: '实施框架和 ROI 框架一起看。' },
  { href: '/enterprise-ai-implementation-budget-planning-guide-2026', title: 'Budget planning guide', note: '预算和 ROI 放一起算。' },
  { href: '/enterprise-ai-risk-assessment-tool-2026', title: 'Risk assessment tool', note: '把风险量化。' },
  { href: '/enterprise-ai-roi-calculation-model-2026', title: 'ROI calculation model', note: '看计算模型本体。' },
  { href: '/enterprise-ai-budget-optimization-calculator', title: 'Budget optimization calculator', note: '先把钱花得对。' },
  { href: '/enterprise-ai-transformation-roadmap-2026', title: 'Transformation roadmap', note: '看路线图怎么排。' },
]

export default function EnterpriseAIROIFrameworkPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} publishedDate="2026-03-12" modifiedDate="2026-04-20" authorName="SitePilot Team" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_24%,#ffffff_56%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
        <div className="absolute inset-x-0 top-[44rem] h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
        <section className="page-hero relative">
          <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6 inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-[#635bff]" />Enterprise AI ROI optimization framework</div>
                <h1 className="page-title mb-6 text-5xl md:text-7xl">Enterprise AI ROI framework，<span className="brand-gradient-text block">别让财务被“我们很快就能回本”骗了。</span></h1>
                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">CFO视角的企业AI投资分析框架。基于50家财富500强企业18个月ROI追踪研究。这里保留 7 步框架、行业基准和决策清单，只统一到浅色 Stripe-ish UI。</p>
                <div className="mb-10 flex flex-wrap gap-3">
                  <a href="#framework" className="btn-brand inline-flex items-center gap-2">查看7步框架 <ArrowRight className="h-4 w-4" /></a>
                  <a href="#benchmarks" className="btn-secondary inline-flex items-center gap-2">查看行业基准</a>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-3xl">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="page-card bg-white/90 p-4"><div className="text-2xl font-semibold text-slate-950 md:text-3xl">{stat.value}</div><div className="mt-1 text-sm text-slate-600">{stat.label}</div></div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
                <div className="relative page-card-glow p-5 md:p-6">
                  <div className="page-card bg-white/95 p-6">
                    <div className="mb-6 flex items-center justify-between">
                      <div><div className="mb-1 text-sm text-slate-500">What this framework answers</div><div className="text-xl font-semibold text-slate-950">Is this investment actually worth it?</div></div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">CFO lens</div>
                    </div>
                    <div className="space-y-3">
                      {['Full cost picture', 'Revenue and efficiency gains', 'Risk-adjusted value', 'Governance checkpoints'].map((item) => (
                        <div key={item} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4"><div className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" /><p className="text-sm leading-6 text-slate-600">{item}</p></div></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Success rate', 'Only 47% of AI projects succeed without financial discipline.'],
            ['Planning advantage', '83% of successful firms use structured financial modeling.'],
            ['Payback window', 'Typical ROI returns show up in 6-24 months.'],
            ['Hidden cost share', 'Plan for 35-50% of the budget before launch.'],
          ].map(([title, body]) => (
            <div key={title} className="page-card p-5"><div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900"><BarChart3 className="h-4 w-4 text-indigo-500" />{title}</div><p className="text-sm leading-6 text-slate-600">{body}</p></div>
          ))}
        </section>

        <section id="framework" className="mb-16">
          <div className="mb-8 max-w-2xl"><div className="page-pill mb-3 inline-flex items-center gap-2"><Compass className="h-4 w-4 text-[#635bff]" />7-step framework</div><h2 className="page-title text-3xl md:text-4xl">7步ROI计算框架</h2><p className="page-lead mt-3 text-lg">从成本、收益、风险到治理，一步一步把投资说清楚。</p></div>
          <div className="space-y-5">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.step} className={`page-card p-6 md:p-8 ${step.tone}`}>
                  <div className="mb-6 flex items-center gap-3"><div className="rounded-2xl bg-white/80 p-3 shadow-sm ring-1 ring-white/80"><Icon className="h-5 w-5 text-slate-800" /></div><div><div className="text-sm uppercase tracking-[0.24em] text-slate-500">Step {step.step}</div><h3 className="text-xl font-semibold text-slate-950">{step.title}</h3></div></div>
                  <div className="grid gap-5 lg:grid-cols-3">
                    {step.groups.map((group) => (
                      <div key={group.title} className="rounded-3xl border border-white/70 bg-white/70 p-5"><h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{group.title}</h4><ul className="space-y-2 text-sm text-slate-700">{group.bullets.map((bullet) => <li key={bullet} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" /><span>{bullet}</span></li>)}</ul></div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section id="benchmarks" className="mb-16">
          <div className="mb-8 max-w-2xl"><div className="page-pill mb-3 inline-flex items-center gap-2"><Layers className="h-4 w-4 text-[#635bff]" />Industry benchmarks</div><h2 className="page-title text-3xl md:text-4xl">行业基准ROI数据</h2><p className="page-lead mt-3 text-lg">Three vertical slices, no marketing fluff.</p></div>
          <div className="grid gap-5 lg:grid-cols-3">
            {benchmarks.map((item) => (
              <div key={item.title} className="page-card p-6">
                <h3 className="mb-1 text-xl font-semibold text-slate-950">{item.title} <span className="text-sm text-slate-500">{item.subtitle}</span></h3>
                <div className="mt-4 space-y-2 text-sm text-slate-700">
                  <div className="flex justify-between"><span>Average investment</span><span className="font-semibold">{item.investment}</span></div>
                  <div className="flex justify-between"><span>Payback</span><span className="font-semibold text-indigo-600">{item.payback}</span></div>
                  <div className="flex justify-between"><span>Annual ROI</span><span className="font-semibold text-indigo-600">{item.roi}</span></div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="page-card-glow rounded-[2rem] p-5 md:p-6">
            <div className="page-card flex flex-col gap-6 p-6 md:p-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl"><div className="page-pill mb-3 inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-[#635bff]" />CFO checklist</div><h2 className="page-title text-3xl md:text-4xl">决策检查清单</h2><p className="page-lead mt-3 text-lg">If these boxes are not ticked, the project is not ready.</p></div>
              <div className="grid gap-2 sm:grid-cols-2">
                {checklist.map((item) => (<div key={item} className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-700"><CheckCircle2 className="mr-2 inline h-4 w-4 text-indigo-500" />{item}</div>))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="mb-8 max-w-2xl"><div className="page-pill mb-3 inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-[#635bff]" />Related resources</div><h2 className="page-title text-3xl md:text-4xl">Internal links kept intact</h2><p className="page-lead mt-3 text-lg">Same cluster, same intent, cleaner UI.</p></div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {relatedLinks.map((link) => (<Link key={link.href} href={link.href} className="page-card group p-6 transition hover:-translate-y-0.5 hover:shadow-lg"><div className="mb-3 text-lg font-semibold text-slate-950 group-hover:text-[#635bff]">{link.title}</div><p className="text-sm leading-6 text-slate-600">{link.note}</p><div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#635bff]">Open resource <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" /></div></Link>))}
          </div>
        </section>
      </main>
    </div>
  )
}
