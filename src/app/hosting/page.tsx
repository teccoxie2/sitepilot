import Link from "next/link";

export const metadata = {
  title: "Best Web Hosting 2026 - Expert Reviews & Comparisons | SitePilot",
  description: "Find the perfect web hosting for your website. We test and compare top hosts including Hostinger, Bluehost, SiteGround, and more.",
};

export default function HostingPage() {
  const hostingArticles = [
    {
      slug: "best-web-hosting",
      title: "Best Web Hosting for Beginners 2026",
      description: "Our top picks for those just starting out. Affordable, reliable, and easy to use.",
      category: "Guide",
    },
    {
      slug: "hostinger-vs-bluehost",
      title: "Hostinger vs Bluehost: Which is Better?",
      description: "Two budget-friendly hosts compared. See which one wins in our detailed test.",
      category: "Comparison",
    },
    {
      slug: "cheap-hosting",
      title: "Best Cheap Web Hosting Under $5/month",
      description: "Quality hosting doesn't have to break the bank. Our top budget picks.",
      category: "Guide",
    },
    {
      slug: "wordpress-hosting",
      title: "Best WordPress Hosting 2026",
      description: "Optimized hosting for WordPress sites. Speed, security, and support compared.",
      category: "Guide",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-5xl mb-4 block">🖥️</span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Web Hosting Reviews
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real tests, honest reviews. Find the perfect host for your website.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hostingArticles.map((article) => (
              <Link key={article.slug} href={`/hosting/${article.slug}`} className="group">
                <article className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition h-full">
                  <span className="text-sm text-blue-600 font-medium">{article.category}</span>
                  <h2 className="text-xl font-semibold text-gray-900 mt-2 mb-3 group-hover:text-blue-600">
                    {article.title}
                  </h2>
                  <p className="text-gray-600">{article.description}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Recommendations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Quick Recommendations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="font-semibold text-gray-900">Best Overall</h3>
              <p className="text-blue-600 font-medium mt-2">Hostinger</p>
              <p className="text-gray-500 text-sm mt-1">From $2.99/mo</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-semibold text-gray-900">Best Value</h3>
              <p className="text-blue-600 font-medium mt-2">Hostinger</p>
              <p className="text-gray-500 text-sm mt-1">Most features for price</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-gray-900">Best Speed</h3>
              <p className="text-blue-600 font-medium mt-2">Kinsta</p>
              <p className="text-gray-500 text-sm mt-1">Premium performance</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
