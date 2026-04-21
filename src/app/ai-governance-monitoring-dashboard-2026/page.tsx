'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  Clock3,
  Download,
  Gauge,
  Shield,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'AI Governance Monitoring Dashboard 2026 | SitePilot'
const pageDescription =
  'Monitor enterprise AI governance health, compliance posture, live risk alerts, and operational KPIs with a dashboard built for AI oversight teams.'
const pageUrl = 'https://sitepilot.co/ai-governance-monitoring-dashboard-2026'

type Timeframe = '1d' | '7d' | '30d' | '90d'

type ComplianceStatus = {
  framework: string
  status: 'compliant' | 'partial' | 'non-compliant'
  score: number
  criticalIssues: number
}

type RiskAlert = {
  type: 'high' | 'medium' | 'low'
  category: string
  description: string
  timestamp: string
  status: 'active' | 'resolved'
}

type GovernanceMetric = {
  name: string
  current: number
  target: number
  trend: 'up' | 'down' | 'stable'
  unit: string
}

type DashboardSnapshot = {
  updatedAt: string
  overallScore: number
  healthLabel: string
  healthNote: string
  executiveNote: string
  complianceData: ComplianceStatus[]
  riskAlerts: RiskAlert[]
  governanceMetrics: GovernanceMetric[]
}

const timeframeOptions: { value: Timeframe; label: string; note: string }[] = [
  { value: '1d', label: 'Last 24 hours', note: 'Newest incidents and control drift' },
  { value: '7d', label: 'Last 7 days', note: 'Weekly operating view' },
  { value: '30d', label: 'Last 30 days', note: 'Monthly governance review' },
  { value: '90d', label: 'Last 90 days', note: 'Quarterly trend line' },
]

const dashboardSnapshots: Record<Timeframe, DashboardSnapshot> = {
  '1d': {
    updatedAt: 'March 17, 2026 08:10',
    overallScore: 83,
    healthLabel: 'Watch closely',
    healthNote: 'A short-term spike in privacy and bias alerts needs human review before it hardens into policy drift.',
    executiveNote: 'The governance program is healthy overall, but the last 24 hours show elevated alert volume in production workflows.',
    complianceData: [
      { framework: 'GDPR', status: 'compliant', score: 91, criticalIssues: 0 },
      { framework: 'SOX', status: 'compliant', score: 88, criticalIssues: 0 },
      { framework: 'HIPAA', status: 'partial', score: 74, criticalIssues: 2 },
      { framework: 'CCPA', status: 'compliant', score: 93, criticalIssues: 0 },
      { framework: 'ISO 27001', status: 'partial', score: 80, criticalIssues: 1 },
      { framework: 'NIST AI RMF', status: 'compliant', score: 86, criticalIssues: 0 },
    ],
    riskAlerts: [
      {
        type: 'high',
        category: 'Data privacy',
        description: 'Anomalous access pattern detected in production customer-support model logs.',
        timestamp: '2026-03-17 07:42',
        status: 'active',
      },
      {
        type: 'medium',
        category: 'Bias monitoring',
        description: 'Threshold exceeded in customer segmentation fairness checks for one protected group.',
        timestamp: '2026-03-17 06:15',
        status: 'active',
      },
      {
        type: 'medium',
        category: 'Compliance evidence',
        description: 'HIPAA audit trail package is missing two approval artifacts from the latest release.',
        timestamp: '2026-03-17 05:20',
        status: 'active',
      },
      {
        type: 'low',
        category: 'Operations',
        description: 'Model lineage export completed after scheduled delay.',
        timestamp: '2026-03-17 02:10',
        status: 'resolved',
      },
    ],
    governanceMetrics: [
      { name: 'AI model transparency score', current: 86, target: 90, trend: 'up', unit: '%' },
      { name: 'Bias testing coverage', current: 92, target: 95, trend: 'up', unit: '%' },
      { name: 'Data lineage completeness', current: 77, target: 85, trend: 'stable', unit: '%' },
      { name: 'Compliance automation rate', current: 80, target: 90, trend: 'up', unit: '%' },
      { name: 'Governance process maturity', current: 3.7, target: 4.5, trend: 'up', unit: '/5' },
      { name: 'Risk response time', current: 4.8, target: 2, trend: 'down', unit: 'hrs' },
    ],
  },
  '7d': {
    updatedAt: 'March 16, 2026 23:52',
    overallScore: 85,
    healthLabel: 'Strong',
    healthNote: 'Controls are holding, but healthcare evidence handling and lineage completeness still need focused work.',
    executiveNote: 'This is the weekly operating baseline for governance leads who need to balance alert handling with roadmap execution.',
    complianceData: [
      { framework: 'GDPR', status: 'compliant', score: 92, criticalIssues: 0 },
      { framework: 'SOX', status: 'compliant', score: 89, criticalIssues: 0 },
      { framework: 'HIPAA', status: 'partial', score: 76, criticalIssues: 2 },
      { framework: 'CCPA', status: 'compliant', score: 94, criticalIssues: 0 },
      { framework: 'ISO 27001', status: 'partial', score: 82, criticalIssues: 1 },
      { framework: 'NIST AI RMF', status: 'compliant', score: 87, criticalIssues: 0 },
    ],
    riskAlerts: [
      {
        type: 'high',
        category: 'Data privacy',
        description: 'Anomalous data access pattern detected in production AI models.',
        timestamp: '2026-03-16 23:45',
        status: 'active',
      },
      {
        type: 'medium',
        category: 'Model performance',
        description: 'Bias detection threshold exceeded in customer segmentation model.',
        timestamp: '2026-03-16 23:15',
        status: 'active',
      },
      {
        type: 'medium',
        category: 'Compliance',
        description: 'HIPAA audit trail gaps identified in healthcare AI workflow.',
        timestamp: '2026-03-16 22:30',
        status: 'active',
      },
      {
        type: 'low',
        category: 'Operations',
        description: 'Model training data lineage documentation was completed after remediation.',
        timestamp: '2026-03-16 21:45',
        status: 'resolved',
      },
    ],
    governanceMetrics: [
      { name: 'AI model transparency score', current: 87, target: 90, trend: 'up', unit: '%' },
      { name: 'Bias testing coverage', current: 94, target: 95, trend: 'up', unit: '%' },
      { name: 'Data lineage completeness', current: 78, target: 85, trend: 'stable', unit: '%' },
      { name: 'Compliance automation rate', current: 82, target: 90, trend: 'up', unit: '%' },
      { name: 'Governance process maturity', current: 3.8, target: 4.5, trend: 'up', unit: '/5' },
      { name: 'Risk response time', current: 4.2, target: 2, trend: 'down', unit: 'hrs' },
    ],
  },
  '30d': {
    updatedAt: 'March 16, 2026 20:00',
    overallScore: 88,
    healthLabel: 'Healthy',
    healthNote: 'Monthly indicators show the program is maturing, especially in automation and cross-functional escalation routines.',
    executiveNote: 'The monthly view shows fewer severe incidents, better response discipline, and stronger coverage across frameworks.',
    complianceData: [
      { framework: 'GDPR', status: 'compliant', score: 93, criticalIssues: 0 },
      { framework: 'SOX', status: 'compliant', score: 90, criticalIssues: 0 },
      { framework: 'HIPAA', status: 'partial', score: 79, criticalIssues: 1 },
      { framework: 'CCPA', status: 'compliant', score: 95, criticalIssues: 0 },
      { framework: 'ISO 27001', status: 'partial', score: 84, criticalIssues: 1 },
      { framework: 'NIST AI RMF', status: 'compliant', score: 89, criticalIssues: 0 },
    ],
    riskAlerts: [
      {
        type: 'medium',
        category: 'Model performance',
        description: 'Repeated fairness drift in two segmentation pipelines triggered expanded monitoring.',
        timestamp: '2026-03-14 16:10',
        status: 'active',
      },
      {
        type: 'medium',
        category: 'Documentation',
        description: 'Three vendor reviews still require updated lineage evidence and human-override records.',
        timestamp: '2026-03-13 10:30',
        status: 'active',
      },
      {
        type: 'low',
        category: 'Security',
        description: 'Encryption-control exception closed after key rotation review.',
        timestamp: '2026-03-10 09:25',
        status: 'resolved',
      },
      {
        type: 'low',
        category: 'Operations',
        description: 'Monitoring backlog reduced after automating release evidence capture.',
        timestamp: '2026-03-09 14:40',
        status: 'resolved',
      },
    ],
    governanceMetrics: [
      { name: 'AI model transparency score', current: 89, target: 90, trend: 'up', unit: '%' },
      { name: 'Bias testing coverage', current: 95, target: 95, trend: 'up', unit: '%' },
      { name: 'Data lineage completeness', current: 82, target: 85, trend: 'up', unit: '%' },
      { name: 'Compliance automation rate', current: 86, target: 90, trend: 'up', unit: '%' },
      { name: 'Governance process maturity', current: 4, target: 4.5, trend: 'up', unit: '/5' },
      { name: 'Risk response time', current: 3.4, target: 2, trend: 'down', unit: 'hrs' },
    ],
  },
  '90d': {
    updatedAt: 'March 16, 2026 18:00',
    overallScore: 90,
    healthLabel: 'Quarterly improvement',
    healthNote: 'The broader trend line shows strong progress, though healthcare and third-party evidence handling remain below target.',
    executiveNote: 'Across the quarter, governance moved from reactive alert chasing toward a more predictable operating model.',
    complianceData: [
      { framework: 'GDPR', status: 'compliant', score: 94, criticalIssues: 0 },
      { framework: 'SOX', status: 'compliant', score: 91, criticalIssues: 0 },
      { framework: 'HIPAA', status: 'partial', score: 81, criticalIssues: 1 },
      { framework: 'CCPA', status: 'compliant', score: 95, criticalIssues: 0 },
      { framework: 'ISO 27001', status: 'compliant', score: 86, criticalIssues: 0 },
      { framework: 'NIST AI RMF', status: 'compliant', score: 90, criticalIssues: 0 },
    ],
    riskAlerts: [
      {
        type: 'medium',
        category: 'Third-party governance',
        description: 'Two vendors need updated incident-reporting language and model documentation coverage.',
        timestamp: '2026-03-05 11:00',
        status: 'active',
      },
      {
        type: 'low',
        category: 'Bias monitoring',
        description: 'Quarterly fairness review surfaced one retraining recommendation for regional models.',
        timestamp: '2026-03-01 15:20',
        status: 'active',
      },
      {
        type: 'low',
        category: 'Security',
        description: 'Access governance exception closed after role recertification.',
        timestamp: '2026-02-28 08:40',
        status: 'resolved',
      },
      {
        type: 'low',
        category: 'Compliance',
        description: 'Automated evidence capture reduced manual audit prep volume by more than half.',
        timestamp: '2026-02-24 17:30',
        status: 'resolved',
      },
    ],
    governanceMetrics: [
      { name: 'AI model transparency score', current: 90, target: 90, trend: 'up', unit: '%' },
      { name: 'Bias testing coverage', current: 96, target: 95, trend: 'up', unit: '%' },
      { name: 'Data lineage completeness', current: 84, target: 85, trend: 'up', unit: '%' },
      { name: 'Compliance automation rate', current: 88, target: 90, trend: 'up', unit: '%' },
      { name: 'Governance process maturity', current: 4.2, target: 4.5, trend: 'up', unit: '/5' },
      { name: 'Risk response time', current: 2.9, target: 2, trend: 'down', unit: 'hrs' },
    ],
  },
}

const quickNav = [
  { href: '#live-dashboard', title: 'Live dashboard', note: 'Score, posture, and timeframe filters' },
  { href: '#framework-status', title: 'Framework status', note: 'Compliance and critical issue coverage' },
  { href: '#alerts', title: 'Risk alerts', note: 'What needs human review now' },
  { href: '#metrics', title: 'Governance metrics', note: 'Target vs actual operating KPIs' },
  { href: '#actions', title: 'Action plan', note: 'Immediate, weekly, and monthly next steps' },
] as const

const actionGroups = [
  {
    title: 'Immediate actions',
    timing: 'Next 24h',
    tone: 'border-amber-200 bg-amber-50 text-amber-900',
    items: [
      'Investigate anomalous data access in production models',
      'Complete HIPAA audit-trail evidence package',
      'Review bias-threshold configuration and escalation owners',
    ],
  },
  {
    title: 'Short-term priorities',
    timing: 'This week',
    tone: 'border-sky-200 bg-sky-50 text-sky-900',
    items: [
      'Increase data-lineage coverage to 85%',
      'Automate fairness testing for higher-risk releases',
      'Refresh AI model transparency documentation',
    ],
  },
  {
    title: 'Longer-term improvements',
    timing: 'This month',
    tone: 'border-indigo-200 bg-indigo-50 text-indigo-900',
    items: [
      'Move compliance automation above 90%',
      'Reduce average risk response time below 2 hours',
      'Expand predictive governance analytics and vendor monitoring',
    ],
  },
] as const

const relatedResources = [
  {
    href: '/ai-governance-framework-enterprise-2026',
    title: 'AI Governance Framework',
    description: 'Use the dashboard against the broader governance operating model and policy structure.',
  },
  {
    href: '/enterprise-ai-risk-assessment-tool-2026',
    title: 'Risk Assessment Tool',
    description: 'Score individual AI initiatives before they land on the monitoring dashboard.',
  },
  {
    href: '/ai-investment-payback-period-calculator-2026',
    title: 'AI ROI Calculator',
    description: 'Tie governance maturity back to payback periods and cost justification.',
  },
  {
    href: '/enterprise-ai-vendor-comparison-guide-2026',
    title: 'Vendor Comparison Guide',
    description: 'Audit third-party AI providers that affect compliance and monitoring exposure.',
  },
] as const

function getStatusMeta(status: ComplianceStatus['status']) {
  if (status === 'compliant') {
    return {
      label: 'Compliant',
      badgeClass: 'border-indigo-200 bg-indigo-50 text-indigo-700',
      barClass: 'bg-[#635bff]',
    }
  }

  if (status === 'partial') {
    return {
      label: 'Partial',
      badgeClass: 'border-amber-200 bg-amber-50 text-amber-700',
      barClass: 'bg-amber-500',
    }
  }

  return {
    label: 'Non-compliant',
    badgeClass: 'border-rose-200 bg-rose-50 text-rose-700',
    barClass: 'bg-rose-500',
  }
}

function getAlertMeta(type: RiskAlert['type']) {
  if (type === 'high') {
    return {
      label: 'High',
      wrapperClass: 'border-rose-200 bg-rose-50',
      badgeClass: 'bg-rose-600 text-white',
    }
  }

  if (type === 'medium') {
    return {
      label: 'Medium',
      wrapperClass: 'border-amber-200 bg-amber-50',
      badgeClass: 'bg-amber-600 text-white',
    }
  }

  return {
    label: 'Low',
    wrapperClass: 'border-sky-200 bg-sky-50',
    badgeClass: 'bg-sky-600 text-white',
  }
}

function getTrendMeta(trend: GovernanceMetric['trend']) {
  if (trend === 'up') {
    return {
      icon: TrendingUp,
      className: 'text-indigo-600',
    }
  }

  if (trend === 'down') {
    return {
      icon: TrendingDown,
      className: 'text-amber-600',
    }
  }

  return {
    icon: Target,
    className: 'text-slate-500',
  }
}

export default function AIGovernanceMonitoringDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState<Timeframe>('7d')

  const snapshot = dashboardSnapshots[selectedTimeframe]
  const activeAlerts = snapshot.riskAlerts.filter((alert) => alert.status === 'active')
  const resolvedAlerts = snapshot.riskAlerts.filter((alert) => alert.status === 'resolved')
  const averageComplianceScore = Math.round(
    snapshot.complianceData.reduce((total, item) => total + item.score, 0) / snapshot.complianceData.length
  )

  const summaryCards = [
    { value: `${snapshot.overallScore}/100`, label: 'Governance score', note: snapshot.healthLabel },
    { value: `${activeAlerts.length}`, label: 'Active alerts', note: 'Requires triage and owner assignment' },
    { value: `${averageComplianceScore}%`, label: 'Average compliance score', note: 'Across six tracked frameworks' },
    { value: `${resolvedAlerts.length}`, label: 'Resolved alerts', note: 'Closed during selected window' },
  ]

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-03-16"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner mx-auto max-w-7xl px-4 pb-20 pt-24 md:pb-28 md:pt-32">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                Enterprise governance monitoring
              </div>

              <h1 className="page-title mb-6 text-5xl md:text-7xl">
                Monitor AI governance
                <span className="brand-gradient-text block">before minor drift becomes a board-level problem.</span>
              </h1>

              <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                This dashboard keeps compliance status, risk alerts, and operating KPIs in one place so AI oversight teams
                can see what is stable, what is slipping, and what needs human intervention next.
              </p>

              <div className="mb-10 flex flex-wrap gap-3">
                <a href="#live-dashboard" className="btn-brand">
                  Open live dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link href="/ai-governance-framework-enterprise-2026" className="btn-secondary">
                  Review governance framework
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {summaryCards.map((card) => (
                  <div key={card.label} className="page-card p-4 bg-white/90">
                    <div className="mb-1 text-2xl font-semibold tracking-[-0.04em] text-slate-950">{card.value}</div>
                    <div className="text-sm font-semibold text-slate-900">{card.label}</div>
                    <div className="mt-1 text-sm text-slate-500">{card.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
              <div className="relative page-card-glow p-5 md:p-6">
                <div className="page-card space-y-6 bg-white/95 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="mb-1 text-sm text-slate-500">Monitoring view</div>
                      <div className="text-xl font-semibold text-slate-950">Dashboard controls</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Live posture
                    </div>
                  </div>

                  <div className="space-y-3">
                    {quickNav.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="flex items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 transition hover:border-indigo-200 hover:bg-indigo-50/50"
                      >
                        <div>
                          <div className="font-semibold text-slate-950">{item.title}</div>
                          <div className="text-sm text-slate-500">{item.note}</div>
                        </div>
                        <ArrowRight className="mt-1 h-4 w-4 text-slate-400" />
                      </a>
                    ))}
                  </div>

                  <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold text-slate-900">Time window</span>
                      <Gauge className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div className="grid gap-2">
                      {timeframeOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setSelectedTimeframe(option.value)}
                          className={`rounded-2xl border px-4 py-3 text-left transition ${
                            selectedTimeframe === option.value
                              ? 'border-indigo-200 bg-indigo-50 text-indigo-700'
                              : 'border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:bg-indigo-50/50'
                          }`}
                        >
                          <div className="font-semibold">{option.label}</div>
                          <div className="text-sm opacity-80">{option.note}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-700"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Export dashboard report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="live-dashboard" className="page-section relative">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="page-card-soft p-8">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <div className="mb-1 text-sm text-slate-500">Executive score</div>
                  <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
                    Overall AI governance score
                  </h2>
                </div>
                <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700">
                  Updated {snapshot.updatedAt}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-[0.4fr_0.6fr]">
                <div className="rounded-[1.75rem] border border-white/80 bg-white p-6 text-center">
                  <div className="mb-2 text-sm text-slate-500">Governance health</div>
                  <div className="mb-2 text-5xl font-semibold tracking-[-0.05em] text-slate-950">{snapshot.overallScore}</div>
                  <div className="text-sm font-semibold text-indigo-600">{snapshot.healthLabel}</div>
                </div>
                <div className="rounded-[1.75rem] border border-white/80 bg-white p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Gauge className="h-5 w-5 text-indigo-600" />
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Program readout</span>
                  </div>
                  <div className="mb-4 h-3 w-full rounded-full bg-slate-200">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-[#635bff] via-sky-500 to-violet-500"
                      style={{ width: `${snapshot.overallScore}%` }}
                    />
                  </div>
                  <p className="text-sm leading-6 text-slate-700">{snapshot.executiveNote}</p>
                  <div className="mt-4 rounded-[1.25rem] border border-indigo-200 bg-indigo-50 px-4 py-3 text-sm leading-6 text-indigo-900">
                    {snapshot.healthNote}
                  </div>
                </div>
              </div>
            </div>

            <div className="page-card p-8">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <div className="mb-1 text-sm text-slate-500">Operating posture</div>
                  <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">What leadership should read first</h2>
                </div>
                <Shield className="h-7 w-7 text-indigo-600" />
              </div>
              <div className="space-y-4">
                <div className="rounded-[1.5rem] border border-indigo-200 bg-indigo-50/80 p-4">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">Strongest signal</div>
                  <p className="mt-2 text-sm leading-6 text-indigo-900">
                    Core privacy, SOX, and NIST governance controls remain stable across the current reporting window.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-amber-200 bg-amber-50/80 p-4">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">Needs attention</div>
                  <p className="mt-2 text-sm leading-6 text-amber-900">
                    Healthcare evidence collection, lineage completeness, and bias monitoring still create the highest escalation load.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">Program rule</div>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    If a control cannot be shown through logs, approvals, or documented tests, treat it as incomplete even if the team believes it exists.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="framework-status" className="page-section relative border-t border-slate-200/70 bg-white/80">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <div className="page-pill mb-4">
              <Shield className="h-4 w-4 text-[#635bff]" />
              Compliance framework status
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Track which frameworks are stable, partial, or still carrying critical evidence gaps.
            </h2>
            <p className="page-lead text-base md:text-lg">
              This section preserves the original dashboard&apos;s framework-by-framework scorecards, but aligns them to the shared visual system and clearer severity labels.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {snapshot.complianceData.map((framework) => {
              const statusMeta = getStatusMeta(framework.status)
              return (
                <div key={framework.framework} className="page-card p-6">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-slate-950">{framework.framework}</h3>
                    <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusMeta.badgeClass}`}>
                      {statusMeta.label}
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="mb-2 flex items-center justify-between gap-4 text-sm text-slate-500">
                        <span>Compliance score</span>
                        <span className="font-semibold text-slate-900">{framework.score}%</span>
                      </div>
                      <div className="h-2.5 w-full rounded-full bg-slate-200">
                        <div className={`h-2.5 rounded-full ${statusMeta.barClass}`} style={{ width: `${framework.score}%` }} />
                      </div>
                    </div>
                    <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 px-4 py-3">
                      <div className="text-sm text-slate-500">Critical issues</div>
                      <div className="text-lg font-semibold text-slate-950">{framework.criticalIssues}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="alerts" className="page-section relative">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="page-card p-8">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <div className="mb-1 text-sm text-slate-500">Alert stream</div>
                  <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">Active risk alerts</h2>
                </div>
                <Bell className="h-7 w-7 text-amber-600" />
              </div>
              <div className="space-y-4">
                {activeAlerts.map((alert) => {
                  const alertMeta = getAlertMeta(alert.type)
                  return (
                    <div key={`${alert.category}-${alert.timestamp}`} className={`rounded-[1.5rem] border p-5 ${alertMeta.wrapperClass}`}>
                      <div className="mb-3 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${alertMeta.badgeClass}`}>
                            {alertMeta.label}
                          </span>
                          <span className="text-sm font-semibold text-slate-900">{alert.category}</span>
                        </div>
                        <span className="text-xs text-slate-500">{alert.timestamp}</span>
                      </div>
                      <p className="text-sm leading-6 text-slate-700">{alert.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="page-card-soft p-8">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <div className="mb-1 text-sm text-slate-500">Resolved signals</div>
                  <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">What has already been closed</h2>
                </div>
                <CheckCircle2 className="h-7 w-7 text-indigo-600" />
              </div>
              <div className="space-y-4">
                {resolvedAlerts.map((alert) => (
                  <div key={`${alert.category}-${alert.timestamp}`} className="rounded-[1.5rem] border border-white/80 bg-white p-5">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        Resolved
                      </span>
                      <span className="text-xs text-slate-500">{alert.timestamp}</span>
                    </div>
                    <div className="text-sm font-semibold text-slate-900">{alert.category}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{alert.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="metrics" className="page-section relative border-t border-slate-200/70 bg-white/80">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <div className="page-pill mb-4">
              <BarChart3 className="h-4 w-4 text-[#635bff]" />
              Governance metrics
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Measure maturity, automation, transparency, and response speed against explicit targets.
            </h2>
            <p className="page-lead text-base md:text-lg">
              The dashboard keeps the original KPI model, including target tracking and response-time pressure, but presents it as an executive-readable scorecard.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {snapshot.governanceMetrics.map((metric) => {
              const trendMeta = getTrendMeta(metric.trend)
              const TrendIcon = trendMeta.icon
              const progress = Math.min(100, (metric.current / metric.target) * 100)

              return (
                <div key={metric.name} className="page-card p-6">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-slate-950">{metric.name}</h3>
                      <div className="mt-1 text-sm text-slate-500">
                        Target: {metric.target}
                        {metric.unit}
                      </div>
                    </div>
                    <TrendIcon className={`h-5 w-5 ${trendMeta.className}`} />
                  </div>
                  <div className="mb-2 flex items-center justify-between gap-4 text-sm">
                    <span className="text-slate-500">Current</span>
                    <span className="font-semibold text-slate-900">
                      {metric.current}
                      {metric.unit}
                    </span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-slate-200">
                    <div
                      className={`h-2.5 rounded-full ${progress >= 100 ? 'bg-[#635bff]' : progress >= 80 ? 'bg-amber-500' : 'bg-rose-500'}`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="mt-2 text-xs text-slate-500">{Math.round(progress)}% of target reached</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="actions" className="page-section relative">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <div className="page-pill mb-4">
              <Clock3 className="h-4 w-4 text-[#635bff]" />
              Action plan
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Route the dashboard into daily action, weekly cleanup, and monthly system improvement.
            </h2>
            <p className="page-lead text-base md:text-lg">
              This keeps the original action-item structure but makes the time horizon and severity much easier to scan.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {actionGroups.map((group) => (
              <div key={group.title} className={`rounded-[1.75rem] border p-8 ${group.tone}`}>
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em]">{group.timing}</div>
                <h3 className="mb-5 text-2xl font-semibold tracking-[-0.04em]">{group.title}</h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="page-card-glow p-1">
              <div className="page-card bg-slate-950 p-8 text-white">
                <div className="mb-5 flex items-center gap-3">
                  <Bell className="h-5 w-5 text-amber-300" />
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Monitoring promise</span>
                </div>
                <h3 className="mb-4 text-2xl font-semibold tracking-[-0.04em]">
                  Governance dashboards matter only if they shorten the path from signal to human decision.
                </h3>
                <p className="text-sm leading-6 text-slate-300">
                  The goal is not to collect more alerts. It is to reduce ambiguity, assign owners faster, and keep governance evidence ready for audit and executive review.
                </p>
              </div>
            </div>

            <div className="page-card p-8">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <div className="mb-1 text-sm text-slate-500">Related resources</div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">Keep the governance cluster connected</h3>
                </div>
                <ArrowRight className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="space-y-4">
                {relatedResources.map((resource) => (
                  <Link
                    key={resource.href}
                    href={resource.href}
                    className="block rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5 transition hover:border-indigo-200 hover:bg-indigo-50/50"
                  >
                    <h4 className="font-semibold text-slate-950">{resource.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{resource.description}</p>
                  </Link>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-brand">
                  Schedule demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/enterprise-ai-risk-assessment-tool-2026" className="btn-secondary">
                  Risk assessment tool
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
