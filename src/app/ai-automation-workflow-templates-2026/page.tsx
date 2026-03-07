import { Metadata } from 'next'
import Link from 'next/link'
import { readFileSync } from 'fs'
import { join } from 'path'
import ReactMarkdown from 'react-markdown'
import type { Components } from 'react-markdown'

export const metadata: Metadata = {
  title: '25 AI自动化工作流程模板 - 立即可用的业务优化方案 | SitePilot 2026',
  description: '基于$12K AI工具测试的25个经过验证的自动化工作流程模板。包含客户服务、销售、内容营销、财务管理等业务流程。每个模板都有成本分析、实施时间和预期ROI。立即开始优化您的业务流程。',
  keywords: 'AI自动化, 工作流程模板, 业务流程优化, ChatGPT自动化, Zapier工作流, AI客服, 销售自动化, 内容营销自动化, ROI分析, 小企业AI解决方案',
  openGraph: {
    title: '25 AI自动化工作流程模板 - 经过验证的业务优化方案',
    description: '基于$12K真实测试的AI自动化模板，平均ROI 320%+。包含实施指南、成本分析和真实案例。',
    type: 'article',
    url: 'https://sitepilot.co/ai-automation-workflow-templates-2026',
  }
}

const components: Components = {
  h1: ({children}) => <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">{children}</h1>,
  h2: ({children}) => <h2 className="text-3xl font-semibold text-gray-800 mt-8 mb-4">{children}</h2>,
  h3: ({children}) => <h3 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">{children}</h3>,
  h4: ({children}) => <h4 className="text-xl font-semibold text-gray-700 mt-4 mb-2">{children}</h4>,
  p: ({children}) => <p className="text-gray-600 mb-4 leading-relaxed">{children}</p>,
  ul: ({children}) => <ul className="list-disc pl-6 mb-4 text-gray-600">{children}</ul>,
  ol: ({children}) => <ol className="list-decimal pl-6 mb-4 text-gray-600">{children}</ol>,
  li: ({children}) => <li className="mb-1">{children}</li>,
  blockquote: ({children}) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 py-2 mb-4 bg-blue-50 text-blue-800 italic">
      {children}
    </blockquote>
  ),
  strong: ({children}) => <strong className="font-semibold text-gray-900">{children}</strong>,
  table: ({children}) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        {children}
      </table>
    </div>
  ),
  thead: ({children}) => <thead className="bg-gray-50">{children}</thead>,
  tbody: ({children}) => <tbody className="divide-y divide-gray-200">{children}</tbody>,
  tr: ({children}) => <tr>{children}</tr>,
  th: ({children}) => (
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
      {children}
    </th>
  ),
  td: ({children}) => <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{children}</td>,
  code: ({children, className}) => {
    const isBlock = className?.includes('language-')
    if (isBlock) {
      return (
        <pre className="bg-gray-100 rounded-lg p-4 mb-4 overflow-x-auto">
          <code className="text-sm font-mono text-gray-800">{children}</code>
        </pre>
      )
    }
    return <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{children}</code>
  },
  a: ({children, href}) => (
    <Link 
      href={href || '#'} 
      className="text-blue-600 hover:text-blue-800 underline font-medium"
    >
      {children}
    </Link>
  ),
}

export default function AIWorkflowTemplatesPage() {
  const contentPath = join(process.cwd(), 'content', 'ai-automation-workflow-templates-2026.md')
  const content = readFileSync(contentPath, 'utf8')

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              🚀 基于$12K真实测试数据
            </div>
          </div>
          
          {/* Main Content */}
          <article className="prose prose-lg max-w-none">
            <ReactMarkdown components={components}>
              {content}
            </ReactMarkdown>
          </article>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg text-white p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">准备开始AI自动化转型？</h3>
          <p className="text-xl mb-6 text-blue-100">
            使用我们的AI ROI计算器，获取个性化的工具推荐和投资回报分析
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-roi-calculator"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              🧮 免费ROI计算器
            </Link>
            <Link 
              href="/ai-tools"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              📊 浏览AI工具对比
            </Link>
          </div>
        </div>

        {/* Related Content */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">相关资源</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">AI ROI计算器</h4>
              <p className="text-gray-600 mb-4">
                基于您的业务类型和规模，计算个性化的AI工具投资回报率
              </p>
              <Link 
                href="/ai-roi-calculator"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                立即计算 ROI →
              </Link>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">AI实施案例研究</h4>
              <p className="text-gray-600 mb-4">
                25个真实企业的AI实施案例，包含详细的ROI分析和实施经验
              </p>
              <Link 
                href="/ai-implementation-case-studies"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                阅读案例研究 →
              </Link>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">小企业AI工具指南</h4>
              <p className="text-gray-600 mb-4">
                专为小企业设计的AI工具选择指南，包含预算优化建议
              </p>
              <Link 
                href="/best-ai-tools-small-business-2026"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                查看工具指南 →
              </Link>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">AI工具对比分析</h4>
              <p className="text-gray-600 mb-4">
                基于真实测试数据的AI工具深度对比，帮您做出明智选择
              </p>
              <Link 
                href="/ai-tools-roi-comparison-2026"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                查看对比分析 →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}