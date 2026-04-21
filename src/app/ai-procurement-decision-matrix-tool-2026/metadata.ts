import type { Metadata } from 'next'

const pageTitle = 'AI Procurement Decision Matrix Tool 2026 | SitePilot'
const pageDescription =
  'A practical AI procurement decision matrix for comparing enterprise vendors across strategic fit, security, data governance, architecture, pricing, and rollout risk.'
const pageUrl = 'https://sitepilot.co/ai-procurement-decision-matrix-tool-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI procurement decision matrix',
    'AI vendor evaluation',
    'enterprise AI procurement',
    'vendor shortlist scorecard',
    'AI due diligence',
    'AI procurement tool',
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
