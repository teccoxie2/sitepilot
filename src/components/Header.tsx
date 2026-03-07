"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm' 
        : 'bg-white border-b border-slate-100'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg mr-3 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
              SitePilot
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link href="/web-hosting" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
              Web Hosting
            </Link>
            <Link href="/website-builders" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all">
              Website Builders
            </Link>
            <Link href="/best-ai-seo-tools-2026" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all">
              AI SEO Tools
            </Link>
            <Link href="/best-ai-tools-small-business-2026" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
              AI for Business
            </Link>
            <Link href="/best-ai-writing-tools-2026" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all">
              AI Writing
            </Link>
            <Link href="/best-email-marketing-tools-2026" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-all">
              Email Marketing
            </Link>
          </div>

          {/* CTA Button + Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link href="/web-hosting" className="hidden sm:inline-flex btn btn-primary">
              Get Started
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-all"
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
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-100">
            <div className="flex flex-col space-y-1">
              <Link 
                href="/web-hosting" 
                className="px-3 py-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                🌐 Web Hosting
              </Link>
              <Link 
                href="/website-builders" 
                className="px-3 py-3 text-base font-medium text-slate-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                🔨 Website Builders
              </Link>
              <Link 
                href="/best-ai-seo-tools-2026" 
                className="px-3 py-3 text-base font-medium text-slate-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                🤖 AI SEO Tools
              </Link>
              <Link 
                href="/best-ai-tools-small-business-2026" 
                className="px-3 py-3 text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                💼 AI for Business
              </Link>
              <Link 
                href="/best-ai-writing-tools-2026" 
                className="px-3 py-3 text-base font-medium text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                ✍️ AI Writing
              </Link>
              <Link 
                href="/best-email-marketing-tools-2026" 
                className="px-3 py-3 text-base font-medium text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                📧 Email Marketing
              </Link>
              
              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link 
                  href="/web-hosting" 
                  className="btn btn-primary w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
