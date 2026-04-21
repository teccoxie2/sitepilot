import type { Metadata } from 'next'

const pageTitle = 'AI Project Risk Assessment Framework 2026 | SitePilot'
const pageDescription =
  'Enterprise-grade risk assessment framework covering 24 critical AI project risk factors across 6 categories. Identify, quantify, and mitigate AI project risks.'
const pageUrl = 'https://sitepilot.co/ai-project-risk-assessment-framework-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI project risk assessment',
    'enterprise AI risk',
    'AI governance',
    'AI compliance',
    'AI implementation risk',
    'risk mitigation framework',
  ],
  authors: [{ name: 'SitePilot Team' }],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: 'article',
    siteName: 'SitePilot',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export { pageTitle, pageDescription, pageUrl }
