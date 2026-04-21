import type { Metadata } from 'next'

const pageTitle = 'AI Performance Monitoring Dashboard 2026 | Enterprise AI Analytics | SitePilot'
const pageDescription =
  'Track, measure, and optimize enterprise AI implementations with real-time performance analytics, ROI insights, and user adoption monitoring.'
const pageUrl = 'https://sitepilot.co/ai-performance-monitoring-dashboard-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI performance monitoring',
    'enterprise AI analytics',
    'AI dashboard',
    'ROI optimization',
    'user adoption tracking',
    'performance monitoring dashboard',
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
