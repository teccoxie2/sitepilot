import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Users,
  TrendingUp,
  Shield,
  CheckCircle,
  AlertTriangle,
  Clock,
  Sparkles,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI Change Management Framework 2026 | SitePilot'
const pageDescription =
  'Comprehensive AI change management framework for enterprise adoption, including employee resistance planning, training programs, and organizational transformation.'
const pageUrl = 'https://sitepilot.co/ai-change-management-framework-enterprise-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords:
    'AI change management, enterprise AI adoption, employee training, organizational change, AI transformation framework',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
}

const phases = [
  {
    phase: 'Assessment and planning',
    duration: '2-4 weeks',
    activities: ['Current state analysis', 'Stakeholder mapping', 'Change readiness assessment', 'Communication planning'],
    deliverables: ['Change strategy', 'Stakeholder matrix', 'Training plan', 'Communication timeline'],
    risks: ['Incomplete analysis', 'Stakeholder resistance'],
  },
  {
    phase: 'Foundation building',
    duration: '4-6 weeks',
    activities: ['Leadership alignment', 'Champion network', 'Skill gap analysis', 'Quick wins identification'],
    deliverables: ['Executive sponsor plan', 'Change agent network', 'Skills matrix', 'Pilot project plan'],
    risks: ['Leadership misalignment', 'Inadequate champions'],
  },
  {
    phase: 'Pilot implementation',
    duration: '6-8 weeks',
    activities: ['Pilot group training', 'AI tool deployment', 'Performance monitoring', 'Feedback collection'],
    deliverables: ['Pilot results', 'Lessons learned', 'Success metrics', 'Scaling strategy'],
    risks: ['Poor pilot results', 'Technology issues'],
  },
  {
    phase: 'Scaled rollout',
    duration: '12-16 weeks',
    activities: ['Department-by-department rollout', 'Continuous training', 'Support systems', 'Culture integration'],
    deliverables: ['Adoption metrics', 'Training materials', 'Support documentation', 'Culture assessment'],
    risks: ['Adoption resistance', 'Training gaps'],
  },
  {
    phase: 'Sustainment',
    duration: 'Ongoing',
    activities: ['Performance monitoring', 'Continuous improvement', 'Advanced training', 'Culture reinforcement'],
    deliverables: ['ROI reports', 'Best practices', 'Advanced certifications', 'Culture metrics'],
    risks: ['Momentum loss', 'Skill decay'],
  },
]

const summaryCards = [
  {
    label: 'Human-centered adoption',
    note: 'This framework keeps enterprise AI transformation grounded in stakeholder behavior instead of tool rollout fantasy.',
  },
  {
    label: 'Five explicit phases',
    note: 'Assessment, foundation, pilot, rollout, and sustainment each require distinct deliverables and risk controls.',
  },
  {
    label: 'Training by role',
    note: 'Leadership, managers, and employees need different enablement paths if adoption is supposed to stick.',
  },
  {
    label: 'Resistance planning',
    note: 'Job security fears, skill anxiety, and change fatigue are treated as implementation realities, not afterthoughts.',
  },
]

const stakeholderGroups = [
  {
    title: 'Champions',
    strap: 'High influence, high support',
    items: ['C-suite executives', 'IT leadership', 'Early adopters', 'Innovation teams'],
    strategy: 'Leverage as change advocates.',
    tone: 'border-indigo-100 bg-indigo-50/70 text-indigo-800',
  },
  {
    title: 'Resisters',
    strap: 'High influence, low support',
    items: ['Traditional department heads', 'Senior staff with low risk tolerance', 'Union representatives', 'Compliance officers'],
    strategy: 'Address concerns directly and back the case with evidence.',
    tone: 'border-amber-100 bg-amber-50/70 text-amber-800',
  },
]

const communicationRows = [
  ['Town halls', 'Monthly'],
  ['Email updates', 'Weekly'],
  ['Team meetings', 'Bi-weekly'],
  ['Success stories', 'Ongoing'],
]

const trainingTracks = [
  {
    title: 'Leadership training',
    badge: 'Executive workshop',
    icon: Users,
    items: ['AI strategy and vision', 'Change leadership', 'Risk management', 'ROI measurement'],
    note: 'Duration: 2-day intensive plus quarterly updates.',
  },
  {
    title: 'Manager training',
    badge: 'Team leader certification',
    icon: Shield,
    items: ['Team communication', 'Performance coaching', 'AI tool management', 'Resistance handling'],
    note: 'Duration: 1-day workshop plus monthly coaching.',
  },
  {
    title: 'Employee training',
    badge: 'Skills development',
    icon: TrendingUp,
    items: ['AI literacy basics', 'Tool-specific training', 'Workflow integration', 'Best practices'],
    note: 'Duration: 4-hour modules plus hands-on practice.',
  },
]

const learningPaths = [
  { title: 'Technical staff', items: ['AI development', 'API integration', 'Data science'] },
  { title: 'Business analysts', items: ['AI for analytics', 'Process automation', 'Reporting tools'] },
  { title: 'Content teams', items: ['AI writing tools', 'Content strategy', 'Quality control'] },
  { title: 'Customer service', items: ['AI chatbots', 'Response assistance', 'Escalation protocols'] },
]

const resistanceCards = [
  {
    title: 'Job security fears',
    note: 'Employees worry AI will replace their roles.',
    response: 'Emphasize job enhancement, reskilling opportunities, and new role creation.',
  },
  {
    title: 'Skill inadequacy',
    note: 'People feel unprepared for unfamiliar tools and workflows.',
    response: 'Use comprehensive training, mentoring, and gradual skill-building.',
  },
  {
    title: 'Change fatigue',
    note: 'Constant transformation creates emotional and operational overload.',
    response: 'Use phased implementation, clearer benefit framing, and visible support systems.',
  },
]

const mitigationStrategies = [
  {
    title: 'Early engagement',
    items: [
      'Involve employees in AI tool selection',
      'Create feedback channels and act on input',
      'Establish AI ambassador programs',
    ],
  },
  {
    title: 'Transparent communication',
    items: [
      'Share AI strategy and rationale',
      'Provide regular progress updates',
      'Address concerns openly and honestly',
    ],
  },
  {
    title: 'Success demonstration',
    items: [
      'Showcase quick wins and pilot results',
      'Share employee success stories',
      'Quantify benefits and improvements',
    ],
  },
]

const successMetrics = [
  { value: '85%', label: 'Adoption rate', note: 'Target: above 80% within 6 months', icon: TrendingUp },
  { value: '92%', label: 'Employee satisfaction', note: 'Target: above 85% satisfaction with AI tools', icon: Users },
  { value: '78%', label: 'Training completion', note: 'Target: above 75% completion across modules', icon: CheckCircle },
  { value: '4.2m', label: 'Time to proficiency', note: 'Target: under 6 months average', icon: Clock },
]

const relatedResources = [
  {
    href: '/ai-implementation-checklist-enterprise-2026',
    title: 'Implementation checklist',
    description: 'Step-by-step enterprise AI deployment guide.',
    icon: CheckCircle,
  },
  {
    href: '/ai-governance-framework-enterprise-2026',
    title: 'Governance framework',
    description: 'Policy and control structure for AI rollout.',
    icon: Shield,
  },
]

export default function AIChangeManagementFramework() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-04-19"
        modifiedDate="2026-04-19"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_24%,#ffffff_54%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[34rem] h-[28rem] bg-[radial-gradient(circle_at_20%_22%,rgba(99,91,255,0.05),transparent_24%),radial-gradient(circle_at_76%_16%,rgba(14,165,233,0.05),transparent_22%),radial-gradient(circle_at_52%_78%,rgba(244,114,182,0.04),transparent_28%)]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                Human-centered AI adoption
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                AI change management,
                <span className="brand-gradient-text block">planned for actual humans.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                Enterprise AI rollout fails when transformation is treated like software deployment only. This framework maps the
                organizational work required to align leaders, prepare teams, reduce resistance, and build adoption habits that
                survive beyond the pilot stage.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/ai-implementation-checklist-enterprise-2026" className="btn-brand">
                  Open implementation checklist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/ai-governance-framework-enterprise-2026" className="btn-secondary">
                  Review governance framework
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
                {summaryCards.map((item) => (
                  <div key={item.label} className="page-card p-4 bg-white/90">
                    <div className="text-sm font-semibold text-slate-950 mb-2">{item.label}</div>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.note}</p>
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
                      <div className="text-sm text-slate-500 mb-1">Framework view</div>
                      <div className="text-xl font-semibold text-slate-950">Five-phase rollout model</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      2026 enterprise
                    </div>
                  </div>

                  <div className="space-y-3">
                    {phases.map((phase, index) => (
                      <div key={phase.phase} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="font-semibold text-slate-950">
                              Phase {index + 1}: {phase.phase}
                            </div>
                            <div className="text-sm text-slate-500 mt-1">{phase.duration}</div>
                          </div>
                          <Clock className="h-5 w-5 text-indigo-500 shrink-0" />
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

      <main className="max-w-7xl mx-auto px-4 py-14 md:py-18">
        <section className="mb-16">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Framework overview</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Change management works better
              <span className="block brand-gradient-text">when the phases are explicit.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Each phase below keeps activities, deliverables, risks, and adoption targets visible so the rollout does not drift into
              vague “enablement” language.
            </p>
          </div>

          <div className="grid gap-5">
            {phases.map((phase, index) => (
              <div key={phase.phase} className="page-card p-7">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                    Phase {index + 1}: {phase.phase}
                  </h3>
                  <div className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                    <Clock className="h-3.5 w-3.5 mr-2" />
                    {phase.duration}
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-5">
                  <div>
                    <div className="text-sm font-semibold text-slate-950 mb-3">Key activities</div>
                    <ul className="space-y-3">
                      {phase.activities.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-slate-950 mb-3">Deliverables</div>
                    <ul className="space-y-3">
                      {phase.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                          <TrendingUp className="h-4 w-4 text-sky-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-slate-950 mb-3">Risk factors</div>
                    <ul className="space-y-3">
                      {phase.risks.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                          <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5">
                    <div className="text-sm font-semibold text-slate-950 mb-2">Success target</div>
                    <div className="text-sm text-slate-600 mb-3">Stakeholder engagement</div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5 mb-2">
                      <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${75 + index * 5}%` }} />
                    </div>
                    <div className="text-xs font-semibold text-indigo-700">{75 + index * 5}% target</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="page-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Stakeholder mapping</h2>
            </div>
            <div className="space-y-4">
              {stakeholderGroups.map((group) => (
                <div key={group.title} className={`rounded-[1.5rem] border p-5 ${group.tone}`}>
                  <h3 className="text-lg font-semibold mb-1">{group.title}</h3>
                  <div className="text-sm mb-4">{group.strap}</div>
                  <ul className="space-y-2 mb-4">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-sm font-semibold">Strategy: {group.strategy}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="page-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Communication strategy</h2>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-r from-white to-slate-50 p-5 mb-5">
              <div className="text-lg font-semibold text-slate-950 mb-4">Multi-channel approach</div>
              <div className="space-y-3">
                {communicationRows.map(([label, cadence]) => (
                  <div key={label} className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                    <span className="text-sm text-slate-700">{label}</span>
                    <span className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      {cadence}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5">
              <div className="text-lg font-semibold text-slate-950 mb-4">Key messages</div>
              <ul className="space-y-3">
                {[
                  'AI enhances human capabilities',
                  'Job transformation, not replacement',
                  'Competitive advantage is the reason for change',
                  'Continuous learning is part of the new operating model',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="page-card p-8 mb-16">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Training framework</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Training fails when every role
              <span className="block brand-gradient-text">gets the same curriculum.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Leadership, managers, and frontline employees need different enablement. The framework below keeps that separation clear.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {trainingTracks.map((track) => {
              const Icon = track.icon
              return (
                <div key={track.title} className="rounded-[1.75rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#635bff]" />
                  </div>
                  <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 mb-4">
                    {track.badge}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-950 mb-4">{track.title}</h3>
                  <ul className="space-y-3 mb-5">
                    {track.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-sm text-slate-500">{track.note}</div>
                </div>
              )
            })}
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-gradient-to-r from-white to-slate-50 p-6">
            <div className="text-lg font-semibold text-slate-950 mb-5">Learning pathways by role</div>
            <div className="grid md:grid-cols-4 gap-4">
              {learningPaths.map((path) => (
                <div key={path.title} className="page-card p-5 text-center">
                  <div className="font-semibold text-slate-950 mb-3">{path.title}</div>
                  <div className="space-y-1 text-sm text-slate-600">
                    {path.items.map((item) => (
                      <div key={item}>{item}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="page-card p-8">
            <div className="text-sm uppercase tracking-[0.18em] text-amber-600/80 mb-3">Resistance</div>
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-5">Common resistance sources</h2>
            <div className="space-y-4">
              {resistanceCards.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-amber-100 bg-amber-50/70 p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                    <h3 className="font-semibold text-amber-900">{item.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">{item.note}</p>
                  <div className="text-xs font-semibold text-amber-800">Response: {item.response}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="page-card p-8">
            <div className="text-sm uppercase tracking-[0.18em] text-indigo-600/80 mb-3">Mitigation</div>
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-5">How to reduce adoption drag</h2>
            <div className="space-y-4">
              {mitigationStrategies.map((strategy) => (
                <div key={strategy.title} className="rounded-[1.5rem] border border-indigo-100 bg-indigo-50/70 p-5">
                  <h3 className="font-semibold text-indigo-900 mb-3">{strategy.title}</h3>
                  <ul className="space-y-2">
                    {strategy.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-card-glow p-8 md:p-12 surface-muted mb-16">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Success metrics</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              If change management is working,
              <span className="block brand-gradient-text">the metrics should move visibly.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Adoption, satisfaction, training completion, and time-to-proficiency are the core signals that the AI rollout is becoming operational instead of performative.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-5">
            {successMetrics.map((metric) => {
              const Icon = metric.icon
              return (
                <div key={metric.label} className="page-card p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#635bff]" />
                  </div>
                  <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-2">{metric.value}</div>
                  <div className="font-semibold text-slate-900 mb-1">{metric.label}</div>
                  <div className="text-xs text-slate-500">{metric.note}</div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="page-card-glow p-8 md:p-12 surface-muted">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Related resources</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                Change management should connect
                <span className="block brand-gradient-text">to rollout and governance.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                These pages continue the enterprise AI execution path by linking change work back to implementation sequencing and governance structure.
              </p>
              <Link href="/apply-for-audit" className="btn-brand">
                Schedule consultation path
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {relatedResources.map((resource) => {
                const Icon = resource.icon
                return (
                  <Link key={resource.href} href={resource.href} className="page-card p-6 hover:-translate-y-0.5 transition-transform">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-[#635bff]" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-950 mb-2">{resource.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-5">{resource.description}</p>
                    <div className="inline-flex items-center text-[#635bff] font-semibold">
                      Open resource
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
