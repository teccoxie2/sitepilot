import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Web Hosting */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Web Hosting</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/hosting/best-web-hosting" className="text-gray-500 hover:text-gray-700">Best Web Hosting</Link></li>
              <li><Link href="/hosting/cheap-hosting" className="text-gray-500 hover:text-gray-700">Cheap Hosting</Link></li>
              <li><Link href="/hosting/wordpress-hosting" className="text-gray-500 hover:text-gray-700">WordPress Hosting</Link></li>
              <li><Link href="/hosting/vps-hosting" className="text-gray-500 hover:text-gray-700">VPS Hosting</Link></li>
            </ul>
          </div>

          {/* Website Builders */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Website Builders</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/builders/best-website-builders" className="text-gray-500 hover:text-gray-700">Best Builders</Link></li>
              <li><Link href="/builders/elementor-review" className="text-gray-500 hover:text-gray-700">Elementor</Link></li>
              <li><Link href="/builders/webflow-review" className="text-gray-500 hover:text-gray-700">Webflow</Link></li>
              <li><Link href="/builders/squarespace-review" className="text-gray-500 hover:text-gray-700">Squarespace</Link></li>
            </ul>
          </div>

          {/* AI Tools */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">AI Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ai-tools/best-ai-writing-tools" className="text-gray-500 hover:text-gray-700">AI Writing Tools</Link></li>
              <li><Link href="/ai-tools/jasper-review" className="text-gray-500 hover:text-gray-700">Jasper</Link></li>
              <li><Link href="/ai-tools/copy-ai-review" className="text-gray-500 hover:text-gray-700">Copy.ai</Link></li>
              <li><Link href="/ai-tools/chatgpt-vs-jasper" className="text-gray-500 hover:text-gray-700">ChatGPT vs Jasper</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-500 hover:text-gray-700">About</Link></li>
              <li><Link href="/contact" className="text-gray-500 hover:text-gray-700">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-500 hover:text-gray-700">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-500 hover:text-gray-700">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} SitePilot. All rights reserved. Some links on this site are affiliate links—we may earn a commission if you make a purchase, at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
