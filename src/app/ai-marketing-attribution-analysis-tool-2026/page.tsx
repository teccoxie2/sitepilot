import { Metadata } from 'next'
import Link from 'next/link'
import AIMarketingAttributionTool from '@/components/tools/AIMarketingAttributionTool'

export const metadata: Metadata = {
  title: 'AI营销归因分析工具 2026 | 多渠道ROI追踪 | SitePilot',
  description: '专业AI营销归因分析工具 2026版。多渠道ROI追踪、客户旅程分析、转化路径优化。助力CMO级别营销决策，提升营销效率75%+。',
  keywords: 'AI营销归因, 多渠道分析, ROI追踪, 客户旅程分析, 转化优化, 营销分析工具, CMO工具',
  authors: [{ name: 'SitePilot AI团队' }],
  openGraph: {
    title: 'AI营销归因分析工具 2026 | 多渠道ROI追踪 | SitePilot',
    description: '专业AI营销归因分析工具。多渠道ROI追踪、客户旅程分析、转化路径优化。CMO级别营销决策支持。',
    type: 'website',
    locale: 'zh_CN'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI营销归因分析工具 2026 | 多渠道ROI追踪',
    description: '专业级营销归因分析工具。多渠道ROI追踪、客户旅程分析、助力CMO营销决策优化。'
  }
}

export default function AIMarketingAttributionAnalysisPage() {
  const breadcrumbItems = [
    { label: '首页', href: '/' },
    { label: 'AI工具', href: '/ai-tools' },
    { label: 'AI营销归因分析工具 2026' }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* 面包屑导航 */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="面包屑导航">
          <ol className="flex space-x-2">
            {breadcrumbItems.map((item, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && <span className="mx-2">/</span>}
                {item.href ? (
                  <Link href={item.href} className="hover:text-blue-600 transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-800 font-medium">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* 页面标题区域 */}
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            AI营销归因分析工具
            <span className="text-blue-600 block text-2xl mt-2">2026企业版</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            专业级多渠道营销归因分析工具。精准追踪ROI，优化客户旅程，提升营销效率75%+。
            助力CMO级别数据驱动营销决策。
          </p>
        </header>

        {/* 关键特性展示 */}
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">多渠道归因追踪</h3>
            <p className="text-gray-600">
              集成12+营销渠道数据，AI驱动的归因模型精准分析每个触点的贡献价值。
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">ROI精准计算</h3>
            <p className="text-gray-600">
              实时ROI追踪，成本效益分析，预测模型帮助优化营销预算分配。
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">客户旅程优化</h3>
            <p className="text-gray-600">
              可视化客户旅程，识别关键转化节点，AI推荐优化策略提升转化率。
            </p>
          </div>
        </section>

        {/* 交互式工具 */}
        <section>
          <AIMarketingAttributionTool />
        </section>

        {/* 为什么选择我们的工具 */}
        <section className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            为什么选择我们的AI营销归因工具？
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
              <div className="text-sm text-gray-600">营销渠道整合</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">75%+</div>
              <div className="text-sm text-gray-600">营销效率提升</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">90%+</div>
              <div className="text-sm text-gray-600">归因准确率</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">30%+</div>
              <div className="text-sm text-gray-600">预算优化效果</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">实时监控分析</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">CMO级</div>
              <div className="text-sm text-gray-600">专业决策支持</div>
            </div>
          </div>
        </section>

        {/* 行动呼吁 */}
        <section className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              准备优化您的营销归因策略？
            </h2>
            <p className="text-xl mb-6 opacity-90">
              立即使用我们的AI营销归因分析工具，获得专业级的营销效果分析。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ai-tools"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                探索更多AI工具
              </Link>
              <Link
                href="/ai-roi-calculator"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                AI ROI计算器
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}