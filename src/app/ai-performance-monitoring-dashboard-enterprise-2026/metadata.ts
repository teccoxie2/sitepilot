import { normalizeMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

const pageTitle = 'Enterprise AI Performance Monitoring Dashboard 2026 | SitePilot'
const pageDescription =
  'Use this enterprise AI performance monitoring dashboard to track usage, quality, response time, cost, adoption, and governance signals before poor workflows or model drift damage ROI.'
const pageUrl = 'https://sitepilot.co/ai-performance-monitoring-dashboard-enterprise-2026'

const metadataConfig: Metadata = {
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
};

export const metadata: Metadata = normalizeMetadata(metadataConfig);
export { pageTitle, pageDescription, pageUrl }
