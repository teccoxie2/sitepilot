import type { Metadata } from 'next'

const pageTitle = 'AI Governance Monitoring Dashboard 2026 | SitePilot'
const pageDescription =
  'Monitor enterprise AI governance health, compliance posture, live risk alerts, and operational KPIs with a dashboard built for AI oversight teams.'
const pageUrl = 'https://sitepilot.co/ai-governance-monitoring-dashboard-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI governance dashboard',
    'AI compliance monitoring',
    'enterprise AI oversight',
    'AI risk alerts',
    'AI governance metrics',
    'AI compliance dashboard',
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
