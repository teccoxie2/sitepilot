import Link from "next/link";

const footerGroups = [
  {
    title: "Web Hosting",
    links: [
      { href: "/web-hosting", label: "Best Web Hosting 2026" },
      { href: "/cheap-hosting", label: "Cheap Hosting" },
      { href: "/hosting/wordpress-hosting", label: "WordPress Hosting" },
      { href: "/cloud-hosting-vs-traditional-hosting-2026", label: "Cloud vs Traditional" },
    ],
  },
  {
    title: "Website Builders",
    links: [
      { href: "/website-builders", label: "Best Website Builders" },
      { href: "/free-website-builders-2026", label: "Free Builders" },
      { href: "/best-ecommerce-website-builders-2026", label: "E-commerce Builders" },
      { href: "/website-builder-vs-wordpress-2026", label: "Builder vs WordPress" },
    ],
  },
  {
    title: "AI Tools",
    links: [
      { href: "/best-ai-seo-tools-2026", label: "AI SEO Tools" },
      { href: "/best-ai-writing-tools-2026", label: "AI Writing Tools" },
      { href: "/ai-content-generator-comparison", label: "Content Generators" },
      { href: "/website-security-checklist-2026", label: "Security Guide" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(248,250,255,0.95)_100%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr] mb-12">
          <div className="max-w-md">
            <div className="flex items-center mb-6">
              <div className="w-11 h-11 rounded-2xl mr-4 flex items-center justify-center bg-gradient-to-br from-[#635bff] to-sky-500 shadow-[0_12px_28px_rgba(99,91,255,0.24)]">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">SitePilot</span>
            </div>

            <p className="text-slate-600 leading-relaxed mb-4">
              Independent technical audits, infrastructure benchmarks, and procurement frameworks for modern digital operators.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              SitePilot is a brand owned and operated by Xentech Limited.
            </p>

            <div className="flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-slate-600 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#635bff]" />
                100% Independent
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-slate-600 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#635bff]" />
                No Sponsored Rankings
              </span>
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-base font-semibold text-slate-950 mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-slate-600 hover:text-[#635bff] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-sm text-slate-500 text-center md:text-left">
              © {new Date().getFullYear()} SitePilot. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-slate-500">
              <Link href="/privacy" className="hover:text-[#635bff] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#635bff] transition-colors">Terms of Service</Link>
              <Link href="/contact" className="hover:text-[#635bff] transition-colors">Contact</Link>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white/90 p-5 shadow-[0_10px_24px_rgba(15,23,42,0.035)]">
            <p className="text-sm text-slate-600 leading-relaxed text-center">
              <strong className="text-slate-900">Transparency Notice:</strong> We may earn affiliate commissions when you purchase through our links, but this never influences our ratings or recommendations. Products that do not meet our standards do not get published. Learn more about our{' '}
              <Link href="/methodology" className="text-[#635bff] hover:text-[#564ee8] font-medium">testing methodology</Link>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
