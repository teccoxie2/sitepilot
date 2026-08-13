import type { Metadata } from 'next'

const pageTitle = 'AI Training ROI Calculator 2026 | SitePilot'
const pageDescription =
  'Estimate AI workforce training ROI, implementation cost, annual savings, payback period, completion-rate lift, and productivity impact with a model-based calculator.'
const pageUrl = 'https://sitepilot.co/ai-training-roi-calculator-2026'

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
