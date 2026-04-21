import type { Metadata } from 'next'
import EnterpriseAIRiskAssessmentToolClient from './RiskAssessmentClient'

const pageTitle = 'Enterprise AI Risk Assessment Tool 2026 | SitePilot'
const pageDescription =
  'Evaluate financial risks, hidden costs, and success probability for your enterprise AI investment. Get CFO-ready risk assessment with mitigation strategies.'
const pageUrl = 'https://sitepilot.co/enterprise-ai-risk-assessment-tool-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'enterprise AI risk assessment',
    'AI investment risk calculator',
    'CFO AI risk analysis',
    'AI implementation risk',
    'enterprise AI financial model',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: pageUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
}

export default function EnterpriseAIRiskAssessmentToolPage() {
  return <EnterpriseAIRiskAssessmentToolClient />
}
