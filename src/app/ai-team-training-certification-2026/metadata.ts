import type { Metadata } from 'next'

const pageTitle = 'AI Team Training & Certification Program 2026 | Enterprise Workforce Development | SitePilot'
const pageDescription =
  'Build AI capabilities across your organization with structured learning tracks, certification levels, and enterprise training delivery options.'
const pageUrl = 'https://sitepilot.co/ai-team-training-certification-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI training',
    'AI certification',
    'enterprise AI education',
    'AI skills development',
    'AI workforce training 2026',
    'learning and development AI',
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
