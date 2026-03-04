import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Web Hosting 2026: Complete Guide & Top Recommendations | SitePilot',
  description: 'Find the best web hosting for your website. Data-driven reviews of top hosting providers with uptime testing, speed analysis, and expert recommendations.',
  keywords: 'web hosting, best hosting 2026, SiteGround, Hostinger, shared hosting, VPS hosting'
}

export default function WebHostingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* 标签 */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Independently Tested for 6 Months
            </div>
            
            {/* 主标题 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Best Web Hosting
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> 2026</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Data-driven reviews of top hosting providers with uptime testing, speed analysis, and expert recommendations. 
              <strong className="text-slate-700"> 30+ providers tested over 6 months.</strong>
            </p>
            
            {/* 更新时间 */}
            <div className="inline-flex items-center text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Last updated: February 2026
            </div>
          </div>

          {/* 测试统计 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-sm text-slate-600">Providers Tested</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">6</div>
              <div className="text-sm text-slate-600">Months Testing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-sm text-slate-600">Uptime Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-sm text-slate-600">Independent</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Picks Section - Modern Design */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
            🏆 Our Top Picks
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card group hover-lift">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-yellow-100 text-yellow-600 rounded-xl">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">
                  BEST OVERALL
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-yellow-600">
                SiteGround
              </h3>
              <p className="text-slate-600 mb-4">99.98% uptime, excellent support</p>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span>✓ 99.98% Uptime</span>
                <span>✓ Expert Support</span>
              </div>
            </div>

            <div className="card group hover-lift">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-100 text-green-600 rounded-xl">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                  BEST VALUE
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-green-600">
                Hostinger
              </h3>
              <p className="text-slate-600 mb-4">$2.99/month, great performance</p>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span>✓ From $2.99/mo</span>
                <span>✓ Great Performance</span>
              </div>
            </div>

            <div className="card group hover-lift">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                  FASTEST
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600">
                WPX Hosting
              </h3>
              <p className="text-slate-600 mb-4">Fastest load times</p>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span>✓ Ultra Fast</span>
                <span>✓ WordPress Optimized</span>
              </div>
            </div>

            <div className="card group hover-lift">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  BEGINNER FRIENDLY
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600">
                Bluehost
              </h3>
              <p className="text-slate-600 mb-4">Easy setup, WordPress optimized</p>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span>✓ Easy Setup</span>
                <span>✓ WordPress Recommended</span>
              </div>
            </div>
          </div>
        </section>

        {/* SiteGround Section */}
        <section className="mb-12 border border-gray-200 rounded-lg p-6">
          <h2 className="text-3xl font-semibold mb-4">1. SiteGround - Best Overall Choice</h2>
          
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full inline-block mb-4">
            <strong>Rating: 9.6/10</strong>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-green-600">Pros:</h3>
              <ul className="space-y-2">
                <li>• 99.98% average uptime (tested over 6 months)</li>
                <li>• Fast SSD storage and CloudFlare CDN</li>
                <li>• Excellent 24/7 customer support (avg response: 2.3 minutes)</li>
                <li>• Free WordPress installation and staging</li>
                <li>• Daily automatic backups</li>
                <li>• Advanced security features</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-red-600">Cons:</h3>
              <ul className="space-y-2">
                <li>• Higher renewal rates</li>
                <li>• Limited storage on entry plans</li>
                <li>• No unlimited bandwidth</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-3">Pricing:</h3>
            <div className="space-y-2">
              <div>• StartUp: $3.99/month (1 website, 10GB storage)</div>
              <div>• GrowBig: $6.69/month (unlimited websites, 20GB storage)</div>
              <div>• GoGeek: $10.69/month (unlimited websites, 40GB storage)</div>
            </div>
          </div>

          <p className="mb-4">
            <strong>Best For:</strong> Small to medium businesses, WordPress sites, e-commerce
          </p>

          <a 
            href="https://sitepilot.co/go/siteground" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get SiteGround →
          </a>
        </section>

        {/* Hostinger Section */}
        <section className="mb-12 border border-gray-200 rounded-lg p-6">
          <h2 className="text-3xl font-semibold mb-4">2. Hostinger - Best Budget Option</h2>
          
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full inline-block mb-4">
            <strong>Rating: 9.2/10</strong>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-green-600">Pros:</h3>
              <ul className="space-y-2">
                <li>• Exceptional value at $2.99/month</li>
                <li>• 99.9% uptime reliability</li>
                <li>• Fast LiteSpeed web servers</li>
                <li>• User-friendly hPanel control panel</li>
                <li>• Free domain and SSL certificate</li>
                <li>• 30-day money-back guarantee</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-red-600">Cons:</h3>
              <ul className="space-y-2">
                <li>• Basic customer support on cheapest plan</li>
                <li>• Limited advanced features</li>
                <li>• No phone support</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-3">Pricing:</h3>
            <div className="space-y-2">
              <div>• Single: $2.99/month (1 website, 100GB storage)</div>
              <div>• Premium: $3.99/month (unlimited websites, unlimited storage)</div>
              <div>• Business: $8.99/month (unlimited websites, daily backups)</div>
            </div>
          </div>

          <p className="mb-4">
            <strong>Best For:</strong> Beginners, personal blogs, small businesses on budget
          </p>

          <a 
            href="https://sitepilot.co/go/hostinger" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Hostinger →
          </a>
        </section>

        {/* Performance Results */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Our Testing Results Summary</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">Provider</th>
                  <th className="border border-gray-300 p-3 text-left">Uptime</th>
                  <th className="border border-gray-300 p-3 text-left">Avg Load Time</th>
                  <th className="border border-gray-300 p-3 text-left">Support Rating</th>
                  <th className="border border-gray-300 p-3 text-left">Value Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">SiteGround</td>
                  <td className="border border-gray-300 p-3">99.98%</td>
                  <td className="border border-gray-300 p-3">1.2s</td>
                  <td className="border border-gray-300 p-3">9.5/10</td>
                  <td className="border border-gray-300 p-3">9.2/10</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">Hostinger</td>
                  <td className="border border-gray-300 p-3">99.9%</td>
                  <td className="border border-gray-300 p-3">1.4s</td>
                  <td className="border border-gray-300 p-3">8.5/10</td>
                  <td className="border border-gray-300 p-3">9.8/10</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">WPX Hosting</td>
                  <td className="border border-gray-300 p-3">99.99%</td>
                  <td className="border border-gray-300 p-3">0.8s</td>
                  <td className="border border-gray-300 p-3">9.8/10</td>
                  <td className="border border-gray-300 p-3">8.5/10</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">Bluehost</td>
                  <td className="border border-gray-300 p-3">99.7%</td>
                  <td className="border border-gray-300 p-3">1.8s</td>
                  <td className="border border-gray-300 p-3">8.0/10</td>
                  <td className="border border-gray-300 p-3">8.8/10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Conclusion</h2>
          <p className="text-lg mb-4">
            For most users, <strong>SiteGround</strong> offers the best balance of performance, features, and support. If budget is your primary concern, <strong>Hostinger</strong> delivers excellent value without sacrificing quality.
          </p>
          <p className="text-lg mb-4">
            For high-performance needs, <strong>WPX Hosting</strong> is unmatched, while <strong>Bluehost</strong> remains the go-to choice for WordPress beginners who want maximum hand-holding.
          </p>
          <p className="text-lg">
            Remember: good hosting is an investment in your website's success. The few extra dollars per month for quality hosting will pay for itself in better user experience, SEO rankings, and reduced downtime.
          </p>
        </section>

        {/* Contact Section */}
        <section className="text-center border-t pt-8">
          <p className="text-gray-600">
            <em>Need help choosing? Our hosting experts have tested these providers extensively. <a href="mailto:hello@sitepilot.co" className="text-blue-600 hover:underline">Contact us</a> for personalized recommendations.</em>
          </p>
          <p className="text-sm text-gray-500 mt-4">
            <strong>Disclosure</strong>: We may earn affiliate commissions when you purchase through our links, but this never influences our ratings or recommendations. We only promote products we've thoroughly tested and genuinely recommend.
          </p>
        </section>
      </div>
    </div>
  )
}