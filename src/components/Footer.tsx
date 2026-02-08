import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">✈️</span>
              <span className="text-xl font-bold text-gray-900">SitePilot</span>
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              Your trusted guide to building websites that work. Expert reviews, honest comparisons.
            </p>
          </div>

          {/* Web Hosting */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Web Hosting</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/hosting/best-web-hosting" className="text-gray-600 hover:text-blue-600">Best Web Hosting</Link></li>
              <li><Link href="/hosting/cheap-hosting" className="text-gray-600 hover:text-blue-600">Cheap Hosting</Link></li>
              <li><Link href="/hosting/wordpress-hosting" className="text-gray-600 hover:text-blue-600">WordPress Hosting</Link></li>
              <li><Link href="/hosting/vps-hosting" className="text-gray-600 hover:text-blue-600">VPS Hosting</Link></li>
            </ul>
          </div>

          {/* Website Builders */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Website Builders</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/builders/best-website-builders" className="text-gray-600 hover:text-blue-600">Best Website Builders</Link></li>
              <li><Link href="/builders/elementor-review" className="text-gray-600 hover:text-blue-600">Elementor Review</Link></li>
              <li><Link href="/builders/webflow-review" className="text-gray-600 hover:text-blue-600">Webflow Review</Link></li>
              <li><Link href="/builders/wix-vs-squarespace" className="text-gray-600 hover:text-blue-600">Wix vs Squarespace</Link></li>
            </ul>
          </div>

          {/* AI Tools */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">AI Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ai-tools/best-ai-writing-tools" className="text-gray-600 hover:text-blue-600">Best AI Writing Tools</Link></li>
              <li><Link href="/ai-tools/jasper-review" className="text-gray-600 hover:text-blue-600">Jasper AI Review</Link></li>
              <li><Link href="/ai-tools/chatgpt-vs-jasper" className="text-gray-600 hover:text-blue-600">ChatGPT vs Jasper</Link></li>
              <li><Link href="/ai-tools/ai-for-blogging" className="text-gray-600 hover:text-blue-600">AI for Blogging</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} SitePilot. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/about" className="text-gray-500 hover:text-gray-700 text-sm">About</Link>
              <Link href="/contact" className="text-gray-500 hover:text-gray-700 text-sm">Contact</Link>
              <Link href="/privacy" className="text-gray-500 hover:text-gray-700 text-sm">Privacy</Link>
              <Link href="/terms" className="text-gray-500 hover:text-gray-700 text-sm">Terms</Link>
            </div>
          </div>
          <p className="text-gray-400 text-xs mt-4 text-center md:text-left">
            Disclosure: Some links on this site are affiliate links. We may earn a commission if you make a purchase through our links, at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
