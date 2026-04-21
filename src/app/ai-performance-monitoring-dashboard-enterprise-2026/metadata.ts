import type { Metadata } from 'next'

const pageTitle = 'Enterprise AI Performance Monitoring Dashboard 2026 | SitePilot'
const pageDescription =
  'Comprehensive AI performance monitoring and analytics dashboard for enterprise deployments. Track KPIs, ROI, costs, compliance, and operational metrics.'
const pageUrl = 'https://sitepilot.co/ai-performance-monitoring-dashboard-enterprise-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI performance monitoring',
    'enterprise AI analytics',
    'AI dashboard',
    'AI KPI tracking',
    'AI ROI measurement',
    'AI governance dashboard',
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
