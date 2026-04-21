import type { Metadata } from 'next'

const pageTitle = '企业AI投资回报率计算器 2026 | ROI Calculator | SitePilot'
const pageDescription =
  '权威企业AI投资ROI计算工具。基于179家Fortune 500实际数据的智能计算器，评估AI项目财务回报、风险因子和投资建议。CFO级财务建模工具。'
const pageUrl = 'https://sitepilot.co/ai-investment-roi-calculator-enterprise-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI ROI calculator',
    'AI investment return',
    'enterprise AI ROI',
    'AI project valuation',
    'AI cost benefit analysis',
    'AI财务分析',
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
