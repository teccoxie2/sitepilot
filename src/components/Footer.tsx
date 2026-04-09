import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 上部分 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* 品牌区域 */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl mr-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-2xl font-bold">SitePilot</span>
            </div>
            <p className="text-slate-400 mb-4 max-w-md leading-relaxed">
              Independent technical audits, infrastructure benchmarks, and procurement frameworks for modern digital operators.
            </p>
            <p className="text-slate-500 text-sm max-w-md leading-relaxed">
              SitePilot is a brand owned and operated by Xentech Limited.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                100% Independent
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                No Sponsored Rankings
              </div>
            </div>
          </div>

          {/* Web Hosting */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Web Hosting</h3>
            <ul className="space-y-3">
              <li><Link href="/web-hosting" className="text-slate-400 hover:text-white transition-colors">Best Web Hosting 2026</Link></li>
              <li><Link href="/cheap-hosting" className="text-slate-400 hover:text-white transition-colors">Cheap Hosting</Link></li>
              <li><Link href="/hosting/wordpress-hosting" className="text-slate-400 hover:text-white transition-colors">WordPress Hosting</Link></li>
              <li><Link href="/cloud-hosting-vs-traditional-hosting-2026" className="text-slate-400 hover:text-white transition-colors">Cloud vs Traditional</Link></li>
            </ul>
          </div>

          {/* Website Builders */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Website Builders</h3>
            <ul className="space-y-3">
              <li><Link href="/website-builders" className="text-slate-400 hover:text-white transition-colors">Best Website Builders</Link></li>
              <li><Link href="/free-website-builders-2026" className="text-slate-400 hover:text-white transition-colors">Free Builders</Link></li>
              <li><Link href="/best-ecommerce-website-builders-2026" className="text-slate-400 hover:text-white transition-colors">E-commerce Builders</Link></li>
              <li><Link href="/website-builder-vs-wordpress-2026" className="text-slate-400 hover:text-white transition-colors">Builder vs WordPress</Link></li>
            </ul>
          </div>

          {/* AI Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">AI Tools</h3>
            <ul className="space-y-3">
              <li><Link href="/best-ai-seo-tools-2026" className="text-slate-400 hover:text-white transition-colors">AI SEO Tools</Link></li>
              <li><Link href="/best-ai-writing-tools-2026" className="text-slate-400 hover:text-white transition-colors">AI Writing Tools</Link></li>
              <li><Link href="/ai-content-generator-comparison" className="text-slate-400 hover:text-white transition-colors">Content Generators</Link></li>
              <li><Link href="/website-security-checklist-2026" className="text-slate-400 hover:text-white transition-colors">Security Guide</Link></li>
            </ul>
          </div>
        </div>

        {/* 分隔线 */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* 版权信息 */}
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} SitePilot. All rights reserved.
            </p>
            
            {/* 法律链接 */}
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          
          {/* 透明度声明 */}
          <div className="mt-6 p-4 bg-slate-800 rounded-lg">
            <p className="text-slate-400 text-xs leading-relaxed text-center">
              <strong className="text-slate-300">Transparency Notice:</strong> We may earn affiliate commissions when you 
              purchase through our links, but this never influences our ratings or recommendations. Products that 
              don't meet our standards don't get published. Learn more about our{' '}
              <Link href="/methodology" className="text-blue-400 hover:text-blue-300">testing methodology</Link>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
