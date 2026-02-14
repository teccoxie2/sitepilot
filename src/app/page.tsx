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
      
      {/* Hero Section - Clean & Professional */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Independent reviews to help you choose the right tools for your website
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            We spend hundreds of hours testing web hosting, site builders, and software so you can make informed decisions. No sponsored rankings.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/web-hosting"
              className="px-6 py-3 bg-gray-900 text-white font-medium rounded hover:bg-gray-800 transition"
            >
              Web Hosting Reviews
            </Link>
            <Link
              href="/ai-tools"
              className="px-6 py-3 text-gray-700 font-medium rounded border border-gray-300 hover:border-gray-400 transition"
            >
              AI Writing Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-8">
            Popular Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/web-hosting" className="group">
              <article className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition h-full">
                <span className="text-xs font-medium text-gray-500 uppercase">Hosting</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-3 group-hover:text-blue-700">
                  The Best Web Hosting Services for 2026
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  After testing 30+ providers over 6 months, these are our top recommendations for different needs and budgets.
                </p>
              </article>
            </Link>

            <Link href="/ai-tools" className="group">
              <article className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition h-full">
                <span className="text-xs font-medium text-gray-500 uppercase">AI Tools</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-3 group-hover:text-blue-700">
                  Best AI Writing Tools for Content Creators
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We tested 25+ AI writing platforms with real projects. Here&apos;s what actually works.
                </p>
              </article>
            </Link>

            <Link href="/website-builders" className="group">
              <article className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition h-full">
                <span className="text-xs font-medium text-gray-500 uppercase">Builders</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-3 group-hover:text-blue-700">
                  Best Website Builders 2026
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Professional websites made easy. We built 40+ test sites to find the best builders for every need.
                </p>
              </article>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Web Hosting
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/hosting/best-web-hosting" className="text-gray-600 hover:text-gray-900 text-sm">
                    Best Web Hosting 2026
                  </Link>
                </li>
                <li>
                  <Link href="/cheap-hosting" className="text-gray-600 hover:text-gray-900 text-sm">
                    Best Cheap Hosting Under $5/mo
                  </Link>
                </li>
                <li>
                  <Link href="/hosting/wordpress-hosting" className="text-gray-600 hover:text-gray-900 text-sm">
                    Best WordPress Hosting
                  </Link>
                </li>
                <li>
                  <Link href="/hosting/hostinger-vs-bluehost" className="text-gray-600 hover:text-gray-900 text-sm">
                    Hostinger vs Bluehost
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Website Builders
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/builders/best-website-builders" className="text-gray-600 hover:text-gray-900 text-sm">
                    Best Website Builders 2026
                  </Link>
                </li>
                <li>
                  <Link href="/builders/elementor-review" className="text-gray-600 hover:text-gray-900 text-sm">
                    Elementor Review
                  </Link>
                </li>
                <li>
                  <Link href="/builders/webflow-review" className="text-gray-600 hover:text-gray-900 text-sm">
                    Webflow Review
                  </Link>
                </li>
                <li>
                  <Link href="/builders/wix-vs-squarespace" className="text-gray-600 hover:text-gray-900 text-sm">
                    Wix vs Squarespace
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                AI Tools
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/ai-tools/best-ai-writing-tools" className="text-gray-600 hover:text-gray-900 text-sm">
                    Best AI Writing Tools
                  </Link>
                </li>
                <li>
                  <Link href="/ai-tools/jasper-review" className="text-gray-600 hover:text-gray-900 text-sm">
                    Jasper AI Review
                  </Link>
                </li>
                <li>
                  <Link href="/ai-tools/chatgpt-vs-jasper" className="text-gray-600 hover:text-gray-900 text-sm">
                    ChatGPT vs Jasper
                  </Link>
                </li>
                <li>
                  <Link href="/ai-tools/copy-ai-review" className="text-gray-600 hover:text-gray-900 text-sm">
                    Copy.ai Review
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Credibility */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            How we test
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Every product we review goes through hands-on testing. For web hosts, we deploy real websites and monitor uptime, speed, and support response times over several months. For software, we use it on actual projects before forming opinions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We may earn affiliate commissions when you purchase through our links, but this never influences our ratings or recommendations. Products that don&apos;t meet our standards don&apos;t make it to publication.
          </p>
        </div>
      </section>
    </>
  );
}
