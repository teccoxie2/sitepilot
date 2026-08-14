import { normalizeMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

const metadataConfig: Metadata = {
  title: 'AI ROI Calculator 2026 | SitePilot',
  description:
    'Calculate your AI tool investment returns with a scenario-based methodology using the inputs and assumptions you provide.',
  keywords: [
    'AI ROI calculator',
    'AI investment calculator',
    'AI tools ROI',
    'small business AI ROI',
    'AI automation savings calculator',
  ],
  openGraph: {
    title: 'AI ROI Calculator 2026 | SitePilot',
    description:
      'Calculate your AI tool investment returns with a scenario-based methodology using the inputs and assumptions you provide.',
    url: 'https://sitepilot.co/ai-roi-calculator',
    type: 'article',
  },
  alternates: {
    canonical: 'https://sitepilot.co/ai-roi-calculator',
  },
};

export const metadata: Metadata = normalizeMetadata(metadataConfig);
