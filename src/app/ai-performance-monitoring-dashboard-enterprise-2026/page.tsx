import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  Clock,
  CheckCircle2,
  Compass,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
  AlertTriangle,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import { pageDescription, pageTitle, pageUrl } from './metadata'

const heroSignals = [
  '保留 KPI、usage、alerts、cost analysis 和 related tools',
  '保留原始的企业监控、ROI、合规和运营指标叙事',
  '统一到当前浅色 Stripe-ish 视觉系统',
  '保留 internal links、canonical、metadata 和 schema',
]

const kpiMetrics = [
  { name: 'Model Accuracy', value: '94.2%', change: '+2.1%' },
  { name: 'Response Time', value: '0.8s', change: '-0.2s' },
  { name: 'API Uptime', value: '99.97%', change: '+0.02%' },
  { name: 'Cost Per Query', value: '$0.003', change: '-$0.001' },
  { name: 'User Adoption', value: '87%', change: '+12%' },
  { name: 'Error Rate', value: '0.08%', change: '-0.05%' },
]

const usageMetrics = [
  { department: 'Sales', requests: '45K', growth: '+15%', satisfaction: '92%' },
  { department: 'Marketing', requests: '38K', growth: '+22%', satisfaction: '89%' },
  { department: 'Customer Support', requests: '67K', growth: '+8%', satisfaction: '94%' },
  { department: 'Operations', requests: '23K', growth: '+28%', satisfaction: '87%' },
  { department: 'Finance', requests: '12K', growth: '+35%', satisfaction: '91%' },
]

const internalLinks = [
  { href: '/ai-automation-roi-measurement-2026', title: 'ROI Measurement', note: '把监控数据转成 ROI 结论。' },
  { href: '/ai-governance-monitoring-dashboard-2026', title: 'Governance Monitoring', note: '追踪合规、风险和治理。' },
  { href: '/ai-performance-monitoring-dashboard-2026', title: 'Standard Monitoring Dashboard', note: '看标准版监控页面。' },
  { href: '/ai-tools', title: 'AI Tools Hub', note: '回到工具总目录。' },
  { href: '/apply-for-audit', title: 'Talk to SitePilot', note: '需要顾问式评估就直接约。' },
] as const

export default function AIPerformanceMonitoringDashboardEnterprisePage() {
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
                    <BarChart3 className="h-4 w-4 text-[#635bff]" />
                    Enterprise monitoring stack
                  </div>

                  <h1 className="page-title mb-6 text-5xl md:text-7xl">
                    Enterprise AI Performance Monitoring Dashboard,
                    <span className="brand-gradient-text block">把性能、成本和治理摆在同一张桌子上。</span>
                  </h1>

                  <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                    这页保留原始的 KPI、部门使用、告警、成本分析与相关工具导航，只把外观统一到现在这套浅色 Stripe-ish 系统。
                  </p>

                  <div className="mb-10 flex flex-wrap gap-3">
                    <a href="#monitoring-dashboard" className="btn-brand inline-flex items-center gap-2">
                      Open dashboard
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <Link href="/ai-automation-roi-measurement-2026" className="btn-secondary inline-flex items-center gap-2">
                      Tie to ROI
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
                          <div className="mb-1 text-sm text-slate-500">What this dashboard keeps</div>
                          <div className="text-xl font-semibold text-slate-950">Same enterprise metrics, cleaner shell</div>
                        </div>
                        <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                          live ops
                        </div>
                      </div>

                      <div className="grid gap-3">
                        {[
                          ['KPI metrics', '模型准确率、响应时间、API uptime、成本和 adoption。'],
                          ['Charts', '实时性能、速率、成功率和小时成本。'],
                          ['Alerts', '延迟、成本、模型更新与安全状态仍然可见。'],
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
                          这是监控页，不是仪表盘装饰画。该报警就报警，该看 ROI 就看 ROI。
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
                { value: '$2.4M', label: 'AI-Generated ROI', note: '这个月的净回报。' },
                { value: '1.2M', label: 'API Requests', note: '过去 24 小时请求量。' },
                { value: '94.2%', label: 'Avg Accuracy', note: '当前平均准确率。' },
                { value: '1.2s', label: 'Response Time', note: 'P95 响应时间。' },
              ].map((card) => (
                <div key={card.label} className="page-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-3xl font-semibold tracking-tight text-slate-950">{card.value}</div>
                  <div className="mt-2 text-sm font-medium text-slate-900">{card.label}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="monitoring-dashboard" className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div className="max-w-3xl">
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <Target className="h-4 w-4" />
                Monitoring dashboard
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                用一套干净的仪表盘，把企业 AI 状态讲明白。
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                你仍然能看到核心指标、部门使用、告警、安全和成本。区别只是这次不用在蓝色大盒子里翻答案了。
              </p>
            </div>

            <div className="mt-10 grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-6">
                <div className="page-card-soft p-6 md:p-8">
                  <h3 className="text-2xl font-semibold text-slate-950">Core AI Performance Metrics</h3>
                  <div className="mt-6 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
                    {kpiMetrics.map((metric) => (
                      <div key={metric.name} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                        <div className="text-sm text-slate-600">{metric.name}</div>
                        <div className="mt-1 text-xl font-semibold text-slate-950">{metric.value}</div>
                        <div className="mt-1 text-sm text-indigo-600">{metric.change}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="page-card-soft p-6 md:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm text-slate-500">Department usage</div>
                      <h3 className="text-2xl font-semibold text-slate-950">Usage by Department</h3>
                    </div>
                    <div className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                      5 departments
                    </div>
                  </div>

                  <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-slate-200">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 text-left text-slate-700">
                        <tr>
                          <th className="p-4 font-semibold">Department</th>
                          <th className="p-4 font-semibold">Requests</th>
                          <th className="p-4 font-semibold">Growth</th>
                          <th className="p-4 font-semibold">Satisfaction</th>
                          <th className="p-4 font-semibold">Top Use Cases</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white text-slate-700">
                        {usageMetrics.map((dept) => (
                          <tr key={dept.department} className="border-t border-slate-100">
                            <td className="p-4 font-medium text-slate-950">{dept.department}</td>
                            <td className="p-4 text-sky-700 font-semibold">{dept.requests}</td>
                            <td className="p-4 text-indigo-700 font-semibold">{dept.growth}</td>
                            <td className="p-4">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-violet-700">{dept.satisfaction}</span>
                                <div className="h-2 w-24 rounded-full bg-slate-100">
                                  <div className="h-2 rounded-full bg-violet-500" style={{ width: dept.satisfaction }} />
                                </div>
                              </div>
                            </td>
                            <td className="p-4 text-sm text-slate-600">
                              {dept.department === 'Sales' && 'Lead Scoring, Proposal Gen'}
                              {dept.department === 'Marketing' && 'Content Creation, SEO'}
                              {dept.department === 'Customer Support' && 'Chatbots, Ticket Routing'}
                              {dept.department === 'Operations' && 'Process Automation'}
                              {dept.department === 'Finance' && 'Report Analysis, Forecasting'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="page-card-glow p-1.5">
                  <div className="page-card-soft space-y-5 p-6 md:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-sm text-slate-500">Alerts & control</div>
                        <div className="text-xl font-semibold text-slate-950">Active alerts and compliance</div>
                      </div>
                      <div className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                        3 active
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {[
                        ['High Latency Detected', 'Model response time exceeded 2s threshold in EU region', 'yellow'],
                        ['Cost Spike Warning', 'Marketing department usage 25% above monthly budget', 'orange'],
                        ['Model Update Available', 'New version 2.1.3 with 3% accuracy improvement', 'sky'],
                      ].map(([title, note, tone]) => (
                        <div
                          key={title}
                          className={`rounded-2xl border p-4 ${
                            tone === 'yellow'
                              ? 'border-yellow-200 bg-yellow-50/80'
                              : tone === 'orange'
                                ? 'border-orange-200 bg-orange-50/80'
                                : 'border-sky-200 bg-sky-50/80'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-4">
                            <div className="font-semibold text-slate-950">{title}</div>
                            <div className="text-xs text-slate-500">just now</div>
                          </div>
                          <p className="mt-1 text-sm text-slate-600">{note}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                    <Compass className="h-4 w-4 text-sky-600" />
                    Related internal resources
                  </div>
                  <div className="mt-5 space-y-3">
                    {internalLinks.map((item) => (
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
                <Shield className="h-4 w-4 text-indigo-600" />
                Security & Compliance
              </div>
              <div className="mt-4 grid gap-3">
                {[
                  ['Data Encryption', '✓ Active'],
                  ['Access Logs', '✓ Monitored'],
                  ['Compliance Check', '✓ GDPR Ready'],
                  ['Audit Trail', '✓ Complete'],
                ].map(([label, status]) => (
                  <div key={label} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm">
                    <span className="font-medium text-slate-700">{label}</span>
                    <span className="text-indigo-600">{status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <Clock className="h-4 w-4 text-sky-600" />
                Cost Analysis & Optimization
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {[
                  ['$47K', 'Monthly Spend', '↓ $3K vs budget'],
                  ['$0.003', 'Cost Per Query', '↓ 15% optimization'],
                  ['340%', 'ROI Current', '↑ 18% vs Q3'],
                  ['18m', 'Payback Period', '3m ahead of plan'],
                ].map(([value, label, note]) => (
                  <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 text-center">
                    <div className="text-2xl font-semibold text-slate-950">{value}</div>
                    <div className="mt-1 text-sm font-medium text-slate-700">{label}</div>
                    <div className="mt-1 text-xs text-slate-500">{note}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div className="max-w-3xl">
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Optimization recommendations
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">成本别硬扛，优化是正经活。</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Quick wins 和长期策略都保留着，只是现在的排版更像在看一个认真做事的产品，而不是一个花哨的报表。
              </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[1.5rem] border border-sky-200 bg-sky-50/70 p-6">
                <div className="text-lg font-semibold text-slate-950">Quick Wins</div>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                  <li>• Implement request caching (est. 15% savings)</li>
                  <li>• Optimize model selection per use case</li>
                  <li>• Enable auto-scaling for peak hours</li>
                </ul>
              </div>

              <div className="rounded-[1.5rem] border border-indigo-200 bg-indigo-50/70 p-6">
                <div className="text-lg font-semibold text-slate-950">Long-term Strategies</div>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                  <li>• Negotiate enterprise pricing tiers</li>
                  <li>• Consider fine-tuned models for repetitive tasks</li>
                  <li>• Implement usage quotas by department</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-16 text-center">
            <div className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="rounded-[1.5rem] bg-gradient-to-r from-[#0f172a] via-[#635bff] to-[#38bdf8] p-8 text-white">
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">Advanced AI Analytics Platform</h3>
                <p className="mx-auto mt-3 max-w-2xl text-white/85">
                  监控做得好，钱花得才不心虚。需要更深的企业 AI 监控，我们可以继续往下接。
                </p>
                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="/ai-automation-roi-measurement-2026" className="btn-brand bg-white text-slate-950 hover:bg-slate-100">
                    ROI Measurement
                  </Link>
                  <Link href="/ai-governance-monitoring-dashboard-2026" className="btn-secondary border-white/25 bg-white/10 text-white hover:bg-white/15">
                    Governance Monitoring
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm text-slate-600">
              <p>© 2026 SitePilot. Enterprise AI performance monitoring dashboard.</p>
              <p className="mt-1">Track KPIs, ROI, and operational metrics.</p>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
