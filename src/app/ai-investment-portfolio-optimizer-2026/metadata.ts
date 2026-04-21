import type { Metadata } from 'next'

const pageTitle = 'AI Investment Portfolio Optimizer 2026 | Enterprise Capital Allocation Tool | SitePilot'
const pageDescription =
  'Optimize enterprise AI investment portfolios by balancing ROI, risk, timeline, and strategic priorities with a practical planning workflow.'
const pageUrl = 'https://sitepilot.co/ai-investment-portfolio-optimizer-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI investment portfolio optimizer',
    'enterprise AI capital allocation',
    'AI portfolio planning',
    'AI ROI tool',
    'enterprise AI budget optimization',
    'AI investment strategy',
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
