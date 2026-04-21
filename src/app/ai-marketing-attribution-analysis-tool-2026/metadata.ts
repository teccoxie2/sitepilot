import type { Metadata } from 'next'

const pageTitle = 'AI营销归因分析工具 2026 | 多渠道ROI追踪 | SitePilot'
const pageDescription =
  '专业AI营销归因分析工具 2026版。多渠道ROI追踪、客户旅程分析、转化路径优化。助力CMO级别营销决策，提升营销效率75%+。'
const pageUrl = 'https://sitepilot.co/ai-marketing-attribution-analysis-tool-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI营销归因',
    '多渠道分析',
    'ROI追踪',
    '客户旅程分析',
    '转化优化',
    '营销分析工具',
    'CMO工具',
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
    locale: 'zh_CN',
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
