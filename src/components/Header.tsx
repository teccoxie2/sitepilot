"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">✈️</span>
            <span className="text-xl font-bold text-gray-900">SitePilot</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/hosting" className="text-gray-600 hover:text-blue-600 transition">
              Web Hosting
            </Link>
            <Link href="/builders" className="text-gray-600 hover:text-blue-600 transition">
              Website Builders
            </Link>
            <Link href="/ai-tools" className="text-gray-600 hover:text-blue-600 transition">
              AI Tools
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition">
              Blog
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link href="/hosting" className="text-gray-600 hover:text-blue-600 transition">
                Web Hosting
              </Link>
              <Link href="/builders" className="text-gray-600 hover:text-blue-600 transition">
                Website Builders
              </Link>
              <Link href="/ai-tools" className="text-gray-600 hover:text-blue-600 transition">
                AI Tools
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition">
                Blog
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
