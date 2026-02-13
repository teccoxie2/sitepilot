"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight">
            SitePilot
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/web-hosting" className="text-sm text-gray-600 hover:text-gray-900 transition">
              Web Hosting
            </Link>
            <Link href="/website-builders" className="text-sm text-gray-600 hover:text-gray-900 transition">
              Website Builders
            </Link>
            <Link href="/ai-tools" className="text-sm text-gray-600 hover:text-gray-900 transition">
              AI Tools
            </Link>
            <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition">
              Blog
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -mr-2 rounded text-gray-500 hover:text-gray-700"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <Link href="/web-hosting" className="text-sm text-gray-600 hover:text-gray-900">
                Web Hosting
              </Link>
              <Link href="/website-builders" className="text-sm text-gray-600 hover:text-gray-900">
                Website Builders
              </Link>
              <Link href="/ai-tools" className="text-sm text-gray-600 hover:text-gray-900">
                AI Tools
              </Link>
              <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900">
                Blog
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
