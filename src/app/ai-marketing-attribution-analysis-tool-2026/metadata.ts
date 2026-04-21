import type { Metadata } from 'next'

const pageTitle = 'AI Marketing Attribution Analysis Tool 2026 | Multi-Channel ROI Tracking | SitePilot'
const pageDescription =
  'Professional AI marketing attribution analysis tool for 2026. Track multi-channel ROI, analyze customer journeys, and optimize conversion paths for CMO-level decisions and 75%+ marketing efficiency gains.'
const pageUrl = 'https://sitepilot.co/ai-marketing-attribution-analysis-tool-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI marketing attribution',
    'multi-channel analysis',
    'ROI tracking',
    'customer journey analysis',
    'conversion optimization',
    'marketing analytics tool',
    'CMO tool',
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
