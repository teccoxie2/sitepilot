import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

export default function Home() {
  return (
    <>
      <SchemaMarkup 
        type="website"
        title="SitePilot - Your Guide to Building Websites That Work"
        description="Expert reviews and guides on web hosting, AI tools, and website builders. Launch your website with confidence."
        url="https://sitepilot.co"
      />

      {/* Impact Site Verification */}
      <div style={{ display: 'none' }}>Impact-Site-Verification: ebd73b69-ae33-44b8-bd16-7c33c5b521d9</div>
      
      {/* Hero Section - Professional & Technical */}
      <section className="relative bg-[#0A0A0A] py-24 md:py-32 overflow-hidden border-b border-white/5">
        {/* 背景装饰元素 */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-br from-blue-50/30 to-transparent"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* 标题区域 */}
            <div className="mb-8 fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Trusted by 100,000+ Website Owners
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                Build Your Perfect
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Website</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Independent reviews and expert guidance on web hosting, AI tools, and website builders. 
                <strong className="text-slate-700"> No sponsored rankings.</strong> Just honest recommendations.
              </p>
            </div>

            {/* CTA 按钮组 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                href="/web-hosting"
                className="btn btn-accent group w-full sm:w-auto"
              >
                <svg className="w-5 h-5 mr-2 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Find My Perfect Hosting
              </Link>
              <Link
                href="/best-ai-seo-tools-2026"
                className="btn btn-secondary w-full sm:w-auto"
              >
                Explore AI Tools
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* 信任指标 */}
            <div className="grid grid-cols-3 gap-8 text-center opacity-75">
              <div>
                <div className="text-2xl font-bold text-slate-900">500+</div>
                <div className="text-sm text-slate-600">Hours Testing</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">30+</div>
                <div className="text-sm text-slate-600">Providers Reviewed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">100%</div>
                <div className="text-sm text-slate-600">Independent</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guides - Modern Card Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Expert Reviews & Guides
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              In-depth testing and analysis to help you make the right choice for your website
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/web-hosting" className="group hover-lift">
              <article className="card h-full relative overflow-hidden">
                {/* 图标区域 */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full uppercase tracking-wide">
                    Top Rated
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Best Web Hosting 2026
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  After testing 30+ providers over 6 months, these are our top recommendations for different needs and budgets.
                </p>
                
                {/* 统计信息 */}
                <div className="flex items-center gap-4 text-sm text-slate-500 border-t border-slate-100 pt-4">
                  <span>✓ 30+ Tested</span>
                  <span>✓ 6 Months Data</span>
                </div>
              </article>
            </Link>

            <Link href="/best-ai-seo-tools-2026" className="group hover-lift">
              <article className="card h-full relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-full uppercase tracking-wide">
                    AI Powered
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                  Best AI SEO Tools 2026
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  8 months testing 27 AI SEO tools across 450+ articles. Real ROI data and performance results.
                </p>
                
                <div className="flex items-center gap-4 text-sm text-slate-500 border-t border-slate-100 pt-4">
                  <span>✓ 27 Tools Tested</span>
                  <span>✓ Real ROI Data</span>
                </div>
              </article>
            </Link>

            <Link href="/website-builders" className="group hover-lift">
              <article className="card h-full relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-green-100 text-green-600 rounded-xl">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full uppercase tracking-wide">
                    Beginner Friendly
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">
                  Best Website Builders 2026
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Professional websites made easy. We built 40+ test sites to find the best builders for every need.
                </p>
                
                <div className="flex items-center gap-4 text-sm text-slate-500 border-t border-slate-100 pt-4">
                  <span>✓ 40+ Test Sites</span>
                  <span>✓ All Budgets</span>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Navigation - Modern Category Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Explore All Categories
            </h2>
            <p className="text-slate-600">
              Find exactly what you need with our comprehensive guides and reviews
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Web Hosting Category */}
            <div className="card hover-lift group">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Web Hosting
                </h3>
              </div>
              
              <div className="space-y-3">
                <Link href="/hosting/best-web-hosting" className="block p-3 rounded-lg hover:bg-slate-50 group/item">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 group-hover/item:text-blue-600 font-medium">Best Web Hosting 2026</span>
                    <svg className="w-4 h-4 text-slate-400 group-hover/item:text-blue-500 group-hover/item:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
                <Link href="/cheap-hosting" className="block p-3 rounded-lg hover:bg-slate-50 group/item">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 group-hover/item:text-blue-600 font-medium">Cheap Hosting Under $5/mo</span>
                    <svg className="w-4 h-4 text-slate-400 group-hover/item:text-blue-500 group-hover/item:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
                <Link href="/hosting/wordpress-hosting" className="block p-3 rounded-lg hover:bg-slate-50 group/item">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 group-hover/item:text-blue-600 font-medium">WordPress Hosting</span>
                    <svg className="w-4 h-4 text-slate-400 group-hover/item:text-blue-500 group-hover/item:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>

            {/* Website Builders Category */}
            <div className="card hover-lift group">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 text-purple-600 rounded-xl mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                  Website Builders
                </h3>
              </div>
              
              <div className="space-y-3">
                <Link href="/website-builders" className="block p-3 rounded-lg hover:bg-slate-50 group/item">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 group-hover/item:text-purple-600 font-medium">Best Website Builders 2026</span>
                    <svg className="w-4 h-4 text-slate-400 group-hover/item:text-purple-500 group-hover/item:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
                <Link href="/free-website-builders-2026" className="block p-3 rounded-lg hover:bg-slate-50 group/item">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 group-hover/item:text-purple-600 font-medium">Free Website Builders</span>
                    <svg className="w-4 h-4 text-slate-400 group-hover/item:text-purple-500 group-hover/item:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
                <Link href="/best-ecommerce-website-builders-2026" className="block p-3 rounded-lg hover:bg-slate-50 group/item">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 group-hover/item:text-purple-600 font-medium">E-commerce Builders</span>
                    <svg className="w-4 h-4 text-slate-400 group-hover/item:text-purple-500 group-hover/item:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>

            {/* AI Tools Category */}
            <div className="card hover-lift group">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 text-green-600 rounded-xl mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                  AI Tools
                </h3>
              </div>
              
              <div className="space-y-3">
                <Link href="/best-ai-seo-tools-2026" className="block p-3 rounded-lg hover:bg-slate-50 group/item">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 group-hover/item:text-green-600 font-medium">Best AI SEO Tools 2026</span>
                    <svg className="w-4 h-4 text-slate-400 group-hover/item:text-green-500 group-hover/item:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
                <Link href="/best-ai-writing-tools-2026" className="block p-3 rounded-lg hover:bg-slate-50 group/item">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 group-hover/item:text-green-600 font-medium">AI Writing Tools 2026</span>
                    <svg className="w-4 h-4 text-slate-400 group-hover/item:text-green-500 group-hover/item:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
                <Link href="/ai-content-generator-comparison" className="block p-3 rounded-lg hover:bg-slate-50 group/item">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 group-hover/item:text-green-600 font-medium">AI Content Generators</span>
                    <svg className="w-4 h-4 text-slate-400 group-hover/item:text-green-500 group-hover/item:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* 左侧内容 */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                100% Independent Reviews
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Our Rigorous Testing Process
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Every product we review goes through hands-on testing. For web hosts, we deploy real websites and monitor 
                uptime, speed, and support response times over several months. For software, we use it on actual projects 
                before forming opinions.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 mb-1">6+</div>
                  <div className="text-sm text-slate-600">Months Testing Each Host</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
                  <div className="text-sm text-slate-600">Uptime Monitoring</div>
                </div>
              </div>
              
              {/* 透明度声明 */}
              <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl">
                <div className="flex items-start">
                  <div className="p-2 bg-amber-100 rounded-lg mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Full Transparency</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      We may earn affiliate commissions when you purchase through our links, but this never influences 
                      our ratings or recommendations. Products that don't meet our standards don't get published.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 右侧测试流程 */}
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Initial Evaluation</h4>
                  <p className="text-slate-600 text-sm">Sign up, test core features, and assess user experience across all devices.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Long-term Testing</h4>
                  <p className="text-slate-600 text-sm">Deploy real websites, monitor performance, test customer support, and document issues.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Data Analysis</h4>
                  <p className="text-slate-600 text-sm">Compile performance metrics, compare against competitors, and verify results.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center font-bold mr-4">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Expert Review</h4>
                  <p className="text-slate-600 text-sm">Write comprehensive analysis with pros, cons, and honest recommendations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
