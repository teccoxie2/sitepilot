import type { Metadata } from 'next'

const pageTitle = 'AI Content Audit Tool 2026 | SitePilot'
const pageDescription =
  'Analyze your content strategy and identify AI optimization opportunities to improve quality, efficiency, and ROI.'
const pageUrl = 'https://sitepilot.co/ai-content-audit-tool-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
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
