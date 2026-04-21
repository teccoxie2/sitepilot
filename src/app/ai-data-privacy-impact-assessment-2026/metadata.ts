import type { Metadata } from 'next'

const pageTitle = 'AI数据隐私影响评估工具 2026 | SitePilot'
const pageDescription =
  '全面评估企业 AI 系统的数据隐私风险，输出合规缺口、整改优先级和实施路线图。'
const pageUrl = 'https://sitepilot.co/ai-data-privacy-impact-assessment-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI 数据隐私评估',
    'privacy impact assessment',
    'AI compliance assessment',
    '企业 AI 合规',
    '数据保护风险评估',
    'GDPR AI assessment',
  ],
  alternates: {
    canonical: pageUrl,
  },
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
