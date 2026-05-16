import type { Metadata } from 'next'

const pageTitle = 'AI Marketing Attribution Analysis Tool (2026): Multi-Channel ROI and Journey Review'
const pageDescription =
  'Use this AI marketing attribution analysis tool to review multi-channel ROI, customer journeys, assisted conversions, and budget allocation before reporting channel performance or changing spend.'
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
