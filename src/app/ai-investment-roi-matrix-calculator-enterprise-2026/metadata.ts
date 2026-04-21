import type { Metadata } from 'next'

const pageTitle = 'AI投资回报率矩阵计算器 - 企业决策工具2026 | SitePilot'
const pageDescription =
  '专业AI投资ROI分析工具：12个维度评估框架，327%平均回报验证，CFO级别财务建模。Fortune 500企业验证的投资决策标准。'
const pageUrl = 'https://sitepilot.co/ai-investment-roi-matrix-calculator-enterprise-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI投资回报率',
    'ROI计算器',
    '企业AI投资',
    'AI财务分析',
    '投资决策工具',
    'AI ROI matrix',
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
