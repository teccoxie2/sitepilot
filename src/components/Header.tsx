"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Zap, Menu, X, ArrowRight } from 'lucide-react';

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

  const navLinks = [
    { name: "Hosting", href: "/web-hosting" },
    { name: "Builders", href: "/website-builders" },
    { name: "AI Tools", href: "/ai-tools" },
    { name: "Proxies", href: "/proxies" }
  ];

  const navHoverClasses = 'hover:text-[#635bff] hover:bg-indigo-50/40 rounded-full px-3 py-2 -mx-3';

  const headerClasses = scrolled
    ? 'bg-white/88 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_12px_28px_rgba(15,23,42,0.05)]'
    : 'bg-white/80 backdrop-blur-xl border-b border-slate-200/70';

  const logoTextClasses = 'text-slate-950 group-hover:text-[#635bff]';
  const logoBoxClasses = 'bg-gradient-to-br from-[#635bff]/8 to-sky-500/8 border border-[#635bff]/12 shadow-[0_8px_18px_rgba(99,91,255,0.06)]';
  const logoIconClasses = 'text-[#635bff]';
  const desktopNavBase = 'text-slate-600';
  const mobileButtonClasses = 'text-slate-500 hover:text-[#635bff]';
  const mobileMenuClasses = 'border-b border-slate-200/80 bg-white/82 backdrop-blur-xl shadow-[0_18px_36px_rgba(15,23,42,0.06)]';
  const mobileLinkClasses = 'text-slate-900';
  const ctaClasses = 'bg-[#635bff] text-white hover:bg-[#564ee8] shadow-[0_12px_24px_rgba(99,91,255,0.18)]';

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${headerClasses}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className={`w-10 h-10 rounded-xl mr-3 flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${logoBoxClasses}`}>
              <Zap className={`w-6 h-6 ${logoIconClasses}`} />
            </div>
            <span className={`text-2xl font-black tracking-tighter uppercase italic transition-colors ${logoTextClasses}`}>SITEPILOT</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className={`text-sm font-semibold tracking-[0.14em] ${desktopNavBase} ${navHoverClasses} transition-colors`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/web-hosting" 
              className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${ctaClasses}`}
            >
              GET STARTED <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden p-2 transition-colors ${mobileButtonClasses}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden p-8 space-y-4 animate-in slide-in-from-top duration-300 ${mobileMenuClasses}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className={`block rounded-2xl px-4 py-3 text-xl font-semibold tracking-tight transition-colors ${mobileLinkClasses} ${navHoverClasses}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/web-hosting" 
            className={`block w-full py-4 text-center rounded-2xl font-semibold ${ctaClasses}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            GET STARTED
          </Link>
        </div>
      )}
    </header>
  );
}
