import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Compass,
  Layers,
  Shield,
  Sparkles,
  Target,
  Users,
  Zap,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI Security & Risk Management Guide 2026 | SitePilot'
const pageDescription =
  'Comprehensive security framework for enterprise AI deployment: Zero-trust architecture, compliance automation, and threat mitigation. Based on 189 enterprise security incidents and Fortune 100 best practices.'
const pageUrl = 'https://sitepilot.co/enterprise-ai-security-risk-management-guide-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['enterprise AI security', 'AI risk management', 'zero trust AI', 'AI compliance automation', 'model security'],
  alternates: { canonical: pageUrl },
  openGraph: { title: pageTitle, description: pageDescription, type: 'article', url: pageUrl },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription },
}

const heroStats = [
  { value: '89%', label: 'increase in AI security incidents' },
  { value: '$4.7M', label: 'average breach cost' },
  { value: '34 days', label: 'mean detection time' },
  { value: '189', label: 'incidents analyzed' },
]

const layers = [
  {
    step: '1',
    title: 'Model security & integrity',
    tone: 'border-rose-100 bg-rose-50/80',
    badge: 'Critical',
    groups: [
      { title: 'Model poisoning prevention', bullets: ['Training data validation and provenance tracking', 'Adversarial training dataset integration', 'Model integrity checksums and versioning', 'Continuous model behavior monitoring'] },
      { title: 'Adversarial defense', bullets: ['Input sanitization and anomaly detection', 'Adversarial example filtering', 'Model ensemble defense strategies', 'Real-time attack pattern recognition'] },
    ],
  },
  {
    step: '2',
    title: 'Data privacy & protection',
    tone: 'border-orange-100 bg-orange-50/80',
    badge: 'High',
    groups: [
      { title: 'Data governance', bullets: ['Automated PII detection and classification', 'Data lineage tracking and audit trails', 'Consent management automation', 'Right-to-be-forgotten implementation'] },
      { title: 'Privacy-preserving techniques', bullets: ['Differential privacy implementation', 'Homomorphic encryption for inference', 'Federated learning architectures', 'Synthetic data generation for testing'] },
    ],
  },
  {
    step: '3',
    title: 'Access control & authentication',
    tone: 'border-amber-100 bg-amber-50/80',
    badge: 'High',
    groups: [
      { title: 'Zero trust AI architecture', bullets: ['Role-based AI model access (RBAC)', 'Multi-factor authentication for AI systems', 'Just-in-time access provisioning', 'Continuous authentication and authorization'] },
      { title: 'API security management', bullets: ['API rate limiting and throttling', 'Token-based authentication systems', 'API gateway security controls', 'Request/response monitoring and logging'] },
    ],
  },
  {
    step: '4',
    title: 'Infrastructure security',
    tone: 'border-indigo-100 bg-indigo-50/80',
    badge: 'Medium',
    groups: [
      { title: 'Container & orchestration', bullets: ['Secure container image scanning', 'Kubernetes security policies', 'Runtime container monitoring', 'Network segmentation for AI workloads'] },
      { title: 'Cloud security configuration', bullets: ['Multi-cloud security posture management', 'Encrypted data at rest and in transit', 'Secure key management systems', 'Cloud access security brokers (CASB)'] },
    ],
  },
  {
    step: '5',
    title: 'Monitoring & threat detection',
    tone: 'border-sky-100 bg-sky-50/80',
    badge: 'High',
    groups: [
      { title: 'AI-native SIEM', bullets: ['Machine learning anomaly detection', 'Behavioral pattern analysis', 'Automated threat hunting', 'Real-time security event correlation'] },
      { title: 'Model performance monitoring', bullets: ['Model drift detection systems', 'Performance degradation alerts', 'Data quality monitoring', 'Security incident response automation'] },
    ],
  },
  {
    step: '6',
    title: 'Compliance & governance',
    tone: 'border-violet-100 bg-violet-50/80',
    badge: 'Critical',
    groups: [
      { title: 'Regulatory compliance automation', bullets: ['GDPR/CCPA compliance frameworks', 'Industry-specific regulation adherence', 'Automated compliance reporting', 'Policy enforcement mechanisms'] },
      { title: 'AI ethics & bias management', bullets: ['Bias detection and mitigation', 'Explainable AI implementation', 'Fairness metrics monitoring', 'Ethical AI decision frameworks'] },
    ],
  },
  {
    step: '7',
    title: 'Incident response & recovery',
    tone: 'border-slate-200 bg-slate-50/80',
    badge: 'Critical',
    groups: [
      { title: 'AI-specific incident response', bullets: ['Model rollback and versioning systems', 'Automated containment procedures', 'Forensic analysis for AI systems', 'Communication and disclosure protocols'] },
      { title: 'Recovery & continuity', bullets: ['Backup model recovery', 'Business continuity plan updates', 'Tabletop exercises and drills', 'Post-incident review process'] },
    ],
  },
]

const benchmarkCards = [
  { label: 'Security incidents', value: '89%', note: 'increase observed in enterprise AI environments.' },
  { label: 'Average breach cost', value: '$4.7M', note: 'plan for this kind of number before approval.' },
  { label: 'Detection time', value: '34 days', note: 'mean time to notice AI-specific threats.' },
]

const checklist = [
  'Zero-trust controls defined for AI systems',
  'Data classification and governance in place',
  'Monitoring alerts wired to real responders',
  'Compliance automation mapped to regulations',
  'Incident response runbooks tested',
  'Executive templates ready for board review',
]

const relatedLinks = [
  { href: '/ai-enterprise-security-compliance', title: 'AI enterprise security compliance', note: 'See the broader enterprise security and compliance model.' },
  { href: '/ai-governance-framework-enterprise-2026', title: 'AI governance framework', note: 'Fill in the governance layer around the program.' },
  { href: '/ai-security-framework-enterprise-2026', title: 'AI security framework', note: 'Review the core security framework page.' },
  { href: '/enterprise-ai-vendor-due-diligence-checklist-2026', title: 'Vendor due diligence checklist', note: 'Do not skip vendor risk review.' },
  { href: '/enterprise-ai-vendor-rfp-template-2026', title: 'Vendor RFP template', note: 'Write security requirements into the procurement phase.' },
  { href: '/ai-compliance-readiness-assessment-2026', title: 'Compliance readiness assessment', note: 'Check compliance maturity first.' },
]

export default function EnterpriseAISecurityRiskManagementGuidePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} publishedDate="2026-03-11" modifiedDate="2026-04-20" authorName="SitePilot Team" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_24%,#ffffff_56%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[34rem] h-[34rem] bg-[radial-gradient(circle_at_18%_18%,rgba(14,165,233,0.05),transparent_24%),radial-gradient(circle_at_78%_22%,rgba(99,91,255,0.05),transparent_22%),radial-gradient(circle_at_54%_82%,rgba(251,191,36,0.05),transparent_28%)]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
        <section className="page-hero relative">
          <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6 inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-[#635bff]" />Enterprise AI security & risk management</div>
                <h1 className="page-title mb-6 text-5xl md:text-7xl">Enterprise AI security,<span className="brand-gradient-text block">Do not treat “launch first, patch security later” as an engineering method.</span></h1>
                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">Comprehensive security framework for enterprise AI deployment: Zero-trust architecture, compliance automation, and threat mitigation. This page keeps the 7-layer framework, benchmarks, and checklist, just in the unified light Stripe-ish UI.</p>
                <div className="mb-10 flex flex-wrap gap-3">
                  <a href="#framework" className="btn-brand inline-flex items-center gap-2">View 7-layer framework <ArrowRight className="h-4 w-4" /></a>
                  <a href="#checklist" className="btn-secondary inline-flex items-center gap-2">View checklist</a>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-3xl">
                  {heroStats.map((stat) => (<div key={stat.label} className="page-card bg-white/90 p-4"><div className="text-2xl font-semibold text-slate-950 md:text-3xl">{stat.value}</div><div className="mt-1 text-sm text-slate-600">{stat.label}</div></div>))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
                <div className="relative page-card-glow p-5 md:p-6">
                  <div className="page-card bg-white/95 p-6">
                    <div className="mb-6 flex items-center justify-between"><div><div className="mb-1 text-sm text-slate-500">Board-level concerns</div><div className="text-xl font-semibold text-slate-950">Security now owns the AI agenda</div></div><div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">Risk first</div></div>
                    <div className="space-y-3">{['Model integrity', 'Data privacy', 'Access control', 'Monitoring & response'].map((item) => (<div key={item} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4"><div className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" /><p className="text-sm leading-6 text-slate-600">{item}</p></div></div>))}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {benchmarkCards.map((item) => (
            <div key={item.label} className="page-card p-5"><div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900"><AlertTriangle className="h-4 w-4 text-indigo-500" />{item.label}</div><div className="text-2xl font-semibold text-slate-950">{item.value}</div><p className="mt-2 text-sm leading-6 text-slate-600">{item.note}</p></div>
          ))}
        </section>

        <section id="framework" className="mb-16">
          <div className="mb-8 max-w-2xl"><div className="page-pill mb-3 inline-flex items-center gap-2"><Compass className="h-4 w-4 text-[#635bff]" />7-layer framework</div><h2 className="page-title text-3xl md:text-4xl">7-Layer Enterprise AI Security Framework</h2><p className="page-lead mt-3 text-lg">From model integrity to incident recovery, the whole stack stays visible.</p></div>
          <div className="space-y-5">{layers.map((layer) => { const Icon = layer.step === '1' ? Target : layer.step === '2' ? Layers : layer.step === '3' ? Shield : layer.step === '4' ? Users : layer.step === '5' ? Zap : layer.step === '6' ? Sparkles : AlertTriangle; return (<div key={layer.step} className={`page-card p-6 md:p-8 ${layer.tone}`}><div className="mb-6 flex items-center justify-between gap-3"><div className="flex items-center gap-3"><div className="rounded-2xl bg-white/80 p-3 shadow-sm ring-1 ring-white/80"><Icon className="h-5 w-5 text-slate-800" /></div><div><div className="text-sm uppercase tracking-[0.24em] text-slate-500">Layer {layer.step}</div><h3 className="text-xl font-semibold text-slate-950">{layer.title}</h3></div></div><div className="rounded-full border border-current/15 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700">{layer.badge}</div></div><div className="grid gap-5 lg:grid-cols-2">{layer.groups.map((group) => (<div key={group.title} className="rounded-3xl border border-white/70 bg-white/70 p-5"><h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{group.title}</h4><ul className="space-y-2 text-sm text-slate-700">{group.bullets.map((bullet) => (<li key={bullet} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" /><span>{bullet}</span></li>))}</ul></div>))}</div></div>) })}</div>
        </section>

        <section id="checklist" className="mb-16">
          <div className="page-card-glow rounded-[2rem] p-5 md:p-6">
            <div className="page-card flex flex-col gap-6 p-6 md:p-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl"><div className="page-pill mb-3 inline-flex items-center gap-2"><Shield className="h-4 w-4 text-[#635bff]" />Executive checklist</div><h2 className="page-title text-3xl md:text-4xl">CFO/Board security checklist</h2><p className="page-lead mt-3 text-lg">If these are not done, the deployment is not ready.</p></div>
              <div className="grid gap-2 sm:grid-cols-2">{checklist.map((item) => (<div key={item} className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-700"><CheckCircle2 className="mr-2 inline h-4 w-4 text-indigo-500" />{item}</div>))}</div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="mb-8 max-w-2xl"><div className="page-pill mb-3 inline-flex items-center gap-2"><Zap className="h-4 w-4 text-[#635bff]" />Related resources</div><h2 className="page-title text-3xl md:text-4xl">Internal links kept intact</h2><p className="page-lead mt-3 text-lg">Same cluster, same intent, cleaner UI.</p></div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{relatedLinks.map((link) => (<Link key={link.href} href={link.href} className="page-card group p-6 transition hover:-translate-y-0.5 hover:shadow-lg"><div className="mb-3 text-lg font-semibold text-slate-950 group-hover:text-[#635bff]">{link.title}</div><p className="text-sm leading-6 text-slate-600">{link.note}</p><div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#635bff]">Open resource <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" /></div></Link>))}</div>
        </section>
      </main>
    </div>
  )
}
