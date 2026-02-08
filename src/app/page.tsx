import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Build Your Website <br className="hidden md:block" />
              <span className="text-blue-600">With Confidence</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Expert reviews and honest comparisons of web hosting, website builders, and AI tools. 
              We test everything so you don&apos;t have to.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/hosting"
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Find Best Hosting
              </Link>
              <Link
                href="/ai-tools"
                className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition"
              >
                Explore AI Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Are You Looking For?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Web Hosting */}
            <Link href="/hosting" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition">
                <div className="text-4xl mb-4">🖥️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  Web Hosting
                </h3>
                <p className="text-gray-600 mb-4">
                  Find the perfect hosting for your website. From shared to VPS, we&apos;ve tested them all.
                </p>
                <span className="text-blue-600 font-medium">
                  Compare Hosts →
                </span>
              </div>
            </Link>

            {/* Website Builders */}
            <Link href="/builders" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  Website Builders
                </h3>
                <p className="text-gray-600 mb-4">
                  No coding required. Build beautiful websites with drag-and-drop builders.
                </p>
                <span className="text-blue-600 font-medium">
                  See Builders →
                </span>
              </div>
            </Link>

            {/* AI Tools */}
            <Link href="/ai-tools" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  AI Tools
                </h3>
                <p className="text-gray-600 mb-4">
                  Write content faster, create images, automate tasks. AI tools for every need.
                </p>
                <span className="text-blue-600 font-medium">
                  Discover AI →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Latest Reviews
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            In-depth reviews based on real testing. No fluff, just facts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review Card 1 */}
            <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
                <span className="text-6xl">🚀</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">Web Hosting</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2">
                  Best Web Hosting for Beginners 2026
                </h3>
                <p className="text-gray-600 text-sm">
                  We tested 15+ hosts to find the best options for those just starting out.
                </p>
              </div>
            </article>

            {/* Review Card 2 */}
            <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
                <span className="text-6xl">⚡</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">AI Tools</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2">
                  Jasper vs ChatGPT: Which is Better?
                </h3>
                <p className="text-gray-600 text-sm">
                  A detailed comparison of two AI writing giants for content creators.
                </p>
              </div>
            </article>

            {/* Review Card 3 */}
            <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                <span className="text-6xl">🎯</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">Website Builders</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2">
                  Elementor vs Webflow: The Ultimate Guide
                </h3>
                <p className="text-gray-600 text-sm">
                  Two powerful builders compared. Which one suits your needs?
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Trust SitePilot?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              We&apos;re not just another review site. We actually test everything we recommend.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="font-semibold text-gray-900 mb-2">Real Testing</h3>
              <p className="text-gray-600 text-sm">
                We sign up, pay, and use every product we review. No fake reviews.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💯</div>
              <h3 className="font-semibold text-gray-900 mb-2">Honest Opinions</h3>
              <p className="text-gray-600 text-sm">
                We tell you the pros AND cons. If something sucks, we&apos;ll say so.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="font-semibold text-gray-900 mb-2">Always Updated</h3>
              <p className="text-gray-600 text-sm">
                Products change. We re-test and update our reviews regularly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Launch Your Website?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Start with our top-rated hosting pick and get online in minutes.
          </p>
          <Link
            href="/hosting/best-web-hosting"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            See Our #1 Pick
          </Link>
        </div>
      </section>
    </>
  );
}
