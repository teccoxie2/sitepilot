import type { Metadata } from 'next'

export const pageTitle = 'Best AI Tools 2026 | SitePilot'
export const pageDescription =
  'AI tools in 2026 should be compared on workflow automation depth, output quality, integration fit, privacy risk, pricing discipline, and operator control so buyers can separate durable business value from demo-stage novelty.'
export const pageUrl = 'https://sitepilot.co/ai-tools'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
}
