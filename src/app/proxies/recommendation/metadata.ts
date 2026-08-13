import type { Metadata } from 'next'

const pageTitle = 'Proxy Network Recommendation Tool | SitePilot'
const pageDescription =
  'Get a proxy network recommendation based on your use case, scale, and budget across residential, datacenter, and mobile options.'
const pageUrl = 'https://sitepilot.co/proxies/recommendation'

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
