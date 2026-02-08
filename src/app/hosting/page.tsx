import Link from "next/link";

export const metadata = {
  title: "Web Hosting Reviews & Comparisons 2026 | SitePilot",
  description: "In-depth web hosting reviews based on real testing. Compare performance, pricing, and support across top providers.",
};

export default function HostingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Web Hosting Reviews
          </h1>
          <p className="text-lg text-gray-600">
            We test hosting providers with real websites, measuring uptime, speed, and support quality over months of use.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Guide */}
          <div className="mb-12">
            <span className="text-xs font-medium text-blue-700 uppercase tracking-wide">Featured Guide</span>
            <Link href="/hosting/best-web-hosting" className="group block mt-2">
              <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-700 mb-3">
                The Best Web Hosting Services for 2026
              </h2>
              <p className="text-gray-600 mb-4">
                After testing 23 hosting providers over 6 months—deploying real sites, monitoring uptime, and evaluating support—these are our recommendations for different needs and budgets.
              </p>
              <span className="text-sm font-medium text-blue-700">Read the full guide →</span>
            </Link>
          </div>

          {/* Divider */}
          <hr className="border-gray-200 mb-12" />

          {/* Reviews Grid */}
          <div className="space-y-10">
            <article>
              <Link href="/hosting/hostinger-review" className="group">
                <span className="text-xs font-medium text-gray-500 uppercase">Review</span>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 mt-1 mb-2">
                  Hostinger Review: Affordable, But Is It Good Enough?
                </h3>
                <p className="text-gray-600 text-sm">
                  Hostinger is one of the cheapest hosts on the market. We used it for 4 months to find out if the low price comes with compromises.
                </p>
              </Link>
            </article>

            <article>
              <Link href="/hosting/hostinger-vs-bluehost" className="group">
                <span className="text-xs font-medium text-gray-500 uppercase">Comparison</span>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 mt-1 mb-2">
                  Hostinger vs Bluehost: Which Budget Host Wins?
                </h3>
                <p className="text-gray-600 text-sm">
                  Two of the most popular budget hosting options compared on performance, features, and real-world usability.
                </p>
              </Link>
            </article>

            <article>
              <Link href="/hosting/cheap-hosting" className="group">
                <span className="text-xs font-medium text-gray-500 uppercase">Guide</span>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 mt-1 mb-2">
                  Best Cheap Web Hosting Under $5/month
                </h3>
                <p className="text-gray-600 text-sm">
                  Quality hosting doesn&apos;t have to be expensive. These providers offer solid performance without breaking the bank.
                </p>
              </Link>
            </article>

            <article>
              <Link href="/hosting/wordpress-hosting" className="group">
                <span className="text-xs font-medium text-gray-500 uppercase">Guide</span>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 mt-1 mb-2">
                  Best WordPress Hosting 2026
                </h3>
                <p className="text-gray-600 text-sm">
                  WordPress-optimized hosting can significantly improve your site&apos;s performance. Here are the hosts that do it best.
                </p>
              </Link>
            </article>

            <article>
              <Link href="/hosting/siteground-review" className="group">
                <span className="text-xs font-medium text-gray-500 uppercase">Review</span>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 mt-1 mb-2">
                  SiteGround Review: Premium Features at Mid-Range Prices
                </h3>
                <p className="text-gray-600 text-sm">
                  SiteGround positions itself between budget hosts and premium providers. We tested whether it delivers on that promise.
                </p>
              </Link>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
