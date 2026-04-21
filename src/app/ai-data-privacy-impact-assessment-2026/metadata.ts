import type { Metadata } from 'next'

const pageTitle = 'AI Data Privacy Impact Assessment Tool 2026 | SitePilot'
const pageDescription =
  'Assess enterprise AI privacy risk and produce compliance gaps, remediation priorities, and an implementation roadmap.'
const pageUrl = 'https://sitepilot.co/ai-data-privacy-impact-assessment-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI data privacy assessment',
    'privacy impact assessment',
    'AI compliance assessment',
    'enterprise AI compliance',
    'data protection risk assessment',
    'GDPR AI assessment',
  ],
  alternates: {
    canonical: pageUrl,
  },
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
