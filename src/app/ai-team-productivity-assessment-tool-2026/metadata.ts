import type { Metadata } from 'next'

const pageTitle = 'AI Team Productivity Assessment Tool 2026 | Enterprise Productivity ROI | SitePilot'
const pageDescription =
  'Assess team productivity potential, AI implementation risk, and ROI with a practical enterprise productivity planning tool.'
const pageUrl = 'https://sitepilot.co/ai-team-productivity-assessment-tool-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI productivity assessment',
    'team productivity calculator',
    'enterprise productivity ROI',
    'AI workforce optimization',
    'productivity planning tool',
    'AI team assessment',
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
