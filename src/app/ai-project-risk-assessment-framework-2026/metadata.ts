import { normalizeMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

const pageTitle = 'AI Project Risk Assessment Framework 2026 | SitePilot'
const pageDescription =
  'Assess AI project delivery risk across 24 factors in six categories, including governance, security, data, operations, vendor exposure, and rollout complexity, so teams can prioritize mitigation work before launch approvals, budget commitments, and implementation deadlines lock in.'
const pageUrl = 'https://sitepilot.co/ai-project-risk-assessment-framework-2026'

const metadataConfig: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI project risk assessment',
    'enterprise AI risk',
    'AI governance',
    'AI compliance',
    'AI implementation risk',
    'risk mitigation framework',
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
};

export const metadata: Metadata = normalizeMetadata(metadataConfig);
export { pageTitle, pageDescription, pageUrl }
