import { Metadata } from 'next'
import RelatedLinks, { aiToolsRelatedLinks } from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: 'Best AI Writing Tools 2026: Complete Comparison & Reviews | SitePilot',
  description: 'Compare the best AI writing tools for content creation. In-depth reviews of Jasper AI, Copy.ai, Writesonic and more with testing results.',
  keywords: 'AI writing tools, Jasper AI, Copy.ai, Writesonic, AI content generator, best AI writer 2026'
}

export default function AIToolsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - 与其他页面一致的现代化标题 */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* 标签 */}
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              25+ AI Writing Tools Tested
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Best AI Writing Tools
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> 2026</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Complete comparison & reviews of AI writing platforms. After testing 25+ tools with real projects, 
              <strong className="text-slate-700"> here are our top recommendations.</strong>
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
                <div className="text-sm text-slate-600">Tools Tested</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">Real</div>
                <div className="text-sm text-slate-600">Project Testing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">2026</div>
                <div className="text-sm text-slate-600">Latest Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Picks - 现代化卡片设计 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">🚀 Quick Picks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card hover-lift">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-100 text-green-600 rounded-xl">
                  <span className="text-2xl">🏆</span>
                </div>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full uppercase tracking-wide">
                  Best Overall
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2">Jasper AI</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">Most versatile platform with 50+ templates and advanced language models</p>
              
              <div className="border-t border-slate-100 pt-4">
                <a href="#jasper" className="btn btn-primary text-sm">Learn More →</a>
              </div>
            </div>

            <div className="card hover-lift">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-100 text-green-600 rounded-xl">
                  <span className="text-2xl">✍️</span>
                </div>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full uppercase tracking-wide">
                  Best for Bloggers
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2">Copy.ai</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">Excellent long-form content creation with blogger-focused templates</p>
              
              <div className="border-t border-slate-100 pt-4">
                <a href="#copyai" className="btn btn-primary text-sm">Learn More →</a>
              </div>
            </div>

            <div className="card hover-lift">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-100 text-green-600 rounded-xl">
                  <span className="text-2xl">💰</span>
                </div>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full uppercase tracking-wide">
                  Best Value
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2">Writesonic</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">Powerful features at affordable pricing, perfect for small businesses</p>
              
              <div className="border-t border-slate-100 pt-4">
                <a href="#writesonic" className="btn btn-primary text-sm">Learn More →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Top AI Writing Tools - 现代化卡片布局 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Top AI Writing Tools 2026</h2>
          
          {/* Jasper AI */}
          <div id="jasper" className="card mb-8 hover-lift">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <span className="bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-bold mr-4">#1</span>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Jasper AI</h3>
                  <p className="text-slate-600">Best Overall AI Writer</p>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold mb-1">9.7/10</div>
                <div className="text-slate-600 text-sm">$29-59/month</div>
              </div>
            </div>
            
            <p className="text-lg text-slate-700 mb-6">
              Jasper (formerly Jarvis) leads the AI writing space with 50+ templates and advanced language models. 
              Our testing showed consistently high-quality output across all content types.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-slate-700 mb-3">✅ Pros:</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Excellent long-form content (3000+ words)</li>
                  <li>• 50+ templates for every content type</li>
                  <li>• Boss Mode for advanced users</li>
                  <li>• Supports 25+ languages</li>
                  <li>• Integration with Surfer SEO</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 mb-3">❌ Cons:</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Higher price point</li>
                  <li>• Learning curve for advanced features</li>
                  <li>• Credits can run out quickly</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold text-slate-900 mb-3">💰 Pricing:</h4>
              <div className="space-y-2 text-sm text-slate-700">
                <div>• <strong>Starter:</strong> $29/month (20K words)</div>
                <div>• <strong>Boss Mode:</strong> $59/month (50K words)</div>
                <div>• <strong>Business:</strong> Custom pricing</div>
              </div>
            </div>

            <a href="https://sitepilot.co/go/jasper" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Try Jasper AI Free 7-Day Trial →
            </a>
          </div>

          {/* Copy.ai */}
          <div id="copyai" className="card mb-8 hover-lift">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm font-bold mr-4">#2</span>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Copy.ai</h3>
                  <p className="text-slate-600">Best for Bloggers</p>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold mb-1">9.3/10</div>
                <div className="text-slate-600 text-sm">$36/month</div>
              </div>
            </div>
            
            <p className="text-lg text-slate-700 mb-6">
              Copy.ai excels at long-form blog content and provides excellent templates specifically designed for content marketers and bloggers.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-slate-700 mb-3">✅ Pros:</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Excellent blog post generator</li>
                  <li>• Strong social media content creation</li>
                  <li>• User-friendly interface</li>
                  <li>• Good free plan</li>
                  <li>• Fast content generation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 mb-3">❌ Cons:</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Limited advanced features</li>
                  <li>• Fewer integrations than competitors</li>
                  <li>• Can be repetitive with long content</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold text-slate-900 mb-3">💰 Pricing:</h4>
              <div className="space-y-2 text-sm text-slate-700">
                <div>• <strong>Free:</strong> 2,000 words/month</div>
                <div>• <strong>Pro:</strong> $36/month (unlimited words)</div>
                <div>• <strong>Team:</strong> $186/month (5 seats)</div>
              </div>
            </div>

            <a href="https://sitepilot.co/go/copyai" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Try Copy.ai Free →
            </a>
          </div>

          {/* Writesonic */}
          <div id="writesonic" className="card mb-8 hover-lift">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm font-bold mr-4">#3</span>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Writesonic</h3>
                  <p className="text-slate-600">Best Value</p>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold mb-1">9.0/10</div>
                <div className="text-slate-600 text-sm">$13-16/month</div>
              </div>
            </div>
            
            <p className="text-lg text-slate-700 mb-6">
              Writesonic offers powerful AI writing capabilities at an affordable price point, making it perfect for small businesses and solo entrepreneurs.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-slate-700 mb-3">✅ Pros:</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Very affordable pricing</li>
                  <li>• GPT-4 powered templates</li>
                  <li>• Bulk content generation</li>
                  <li>• API access available</li>
                  <li>• Chrome extension</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 mb-3">❌ Cons:</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Fewer templates than premium tools</li>
                  <li>• Quality can vary</li>
                  <li>• Limited customer support</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold text-slate-900 mb-3">💰 Pricing:</h4>
              <div className="space-y-2 text-sm text-slate-700">
                <div>• <strong>Free:</strong> 2,500 words/month</div>
                <div>• <strong>Small Team:</strong> $13/month (33,000 words)</div>
                <div>• <strong>Freelancer:</strong> $16/month (unlimited words)</div>
              </div>
            </div>

            <a href="https://sitepilot.co/go/writesonic" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Try Writesonic Free →
            </a>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full card">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left p-4 font-semibold text-slate-900">Tool</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Best For</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Starting Price</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Free Plan</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-medium text-slate-900">Jasper AI</td>
                  <td className="p-4 text-slate-700">Overall writing</td>
                  <td className="p-4 text-slate-700">$29/month</td>
                  <td className="p-4 text-slate-700">7-day trial</td>
                  <td className="p-4 text-green-600 font-semibold">9.7/10</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-medium text-slate-900">Copy.ai</td>
                  <td className="p-4 text-slate-700">Bloggers</td>
                  <td className="p-4 text-slate-700">$36/month</td>
                  <td className="p-4 text-slate-700">2K words</td>
                  <td className="p-4 text-green-600 font-semibold">9.3/10</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-900">Writesonic</td>
                  <td className="p-4 text-slate-700">Value seekers</td>
                  <td className="p-4 text-slate-700">$13/month</td>
                  <td className="p-4 text-slate-700">2.5K words</td>
                  <td className="p-4 text-green-600 font-semibold">9.0/10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
      
      <RelatedLinks links={aiToolsRelatedLinks} />
    </div>
  )
}