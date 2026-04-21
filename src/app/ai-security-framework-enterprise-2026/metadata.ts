import type { Metadata } from 'next'

const pageTitle = 'Enterprise AI Security Framework 2026 | SitePilot'
const pageDescription =
  'Complete enterprise AI security framework for 2026. Protect AI systems, data, and operations with a battle-tested 8-layer security architecture.'
const pageUrl = 'https://sitepilot.co/ai-security-framework-enterprise-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'enterprise AI security',
    'AI cybersecurity framework',
    'AI security architecture',
    'enterprise AI protection',
    'AI security governance',
    'AI threat protection',
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
