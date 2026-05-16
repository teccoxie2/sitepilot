import type { Metadata } from 'next'

export const pageTitle = 'Best Web Hosting 2026 | Compare Hosting Reviews, Pricing & Fit'
export const pageDescription =
  'Compare the best web hosting in 2026 using uptime discipline, support quality, pricing structure, caching stack, security defaults, scaling headroom, and lock-in risk before you choose a provider.'
export const pageUrl = 'https://sitepilot.co/web-hosting'

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
