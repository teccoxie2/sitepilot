import type { Metadata } from 'next'

export const pageTitle = 'Apply for an Infrastructure Audit | SitePilot'
export const pageDescription =
  'Apply for a SitePilot infrastructure audit program with standard or custom technical review options covering benchmarking, review publication, and verification.'
export const pageUrl = 'https://sitepilot.co/apply-for-audit'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'infrastructure audit',
    'technical audit application',
    'hosting benchmark review',
    'performance audit',
    'SitePilot audit program',
  ],
  alternates: {
    canonical: pageUrl,
  },
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
