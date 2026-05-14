"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Zap, Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsMenuOpen, setToolsMenuOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toolsMenuCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (toolsMenuCloseTimeoutRef.current) {
        clearTimeout(toolsMenuCloseTimeoutRef.current);
      }
    };
  }, []);

  const navLinks = [
    { name: "Hosting", href: "/web-hosting" },
    { name: "Builders", href: "/website-builders" },
    { name: "AI Tools", href: "/ai-tools" },
    { name: "Proxies", href: "/proxies" }
  ];

  const toolsDropdownLinks = [
    {
      name: "IP Reputation Checker",
      href: "/ip-reputation-checker",
      description: "Check purity, VPN, hosting, and network signals.",
    },
    {
      name: "IP Leak Test",
      href: "/ip-leak-test",
      description: "Probe WebRTC exposure and surface rDNS context.",
    },
  ];

  const navHoverClasses = 'hover:text-[#635bff] hover:bg-indigo-50/55 rounded-full px-4 py-2.5';

  const headerClasses = scrolled
    ? 'bg-white/88 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_12px_28px_rgba(15,23,42,0.05)]'
    : 'bg-white/80 backdrop-blur-xl border-b border-slate-200/70';

  const logoTextClasses = 'text-slate-950 group-hover:text-[#635bff]';
  const logoBoxClasses = 'bg-gradient-to-br from-[#635bff]/8 to-sky-500/8 border border-[#635bff]/12 shadow-[0_8px_18px_rgba(99,91,255,0.06)]';
  const logoIconClasses = 'text-[#635bff]';
  const desktopNavBase = 'text-[15px] font-medium tracking-[0.01em] text-slate-600';
  const mobileButtonClasses = 'text-slate-500 hover:text-[#635bff]';
  const mobileMenuClasses = 'border-b border-slate-200/80 bg-white/82 backdrop-blur-xl shadow-[0_18px_36px_rgba(15,23,42,0.06)]';
  const mobileLinkClasses = 'text-slate-900';
  const ctaClasses = 'bg-[#635bff] text-white hover:bg-[#564ee8] shadow-[0_12px_24px_rgba(99,91,255,0.18)]';

  const openToolsMenu = () => {
    if (toolsMenuCloseTimeoutRef.current) {
      clearTimeout(toolsMenuCloseTimeoutRef.current);
      toolsMenuCloseTimeoutRef.current = null;
    }

    setToolsMenuOpen(true);
  };

  const closeToolsMenu = () => {
    if (toolsMenuCloseTimeoutRef.current) {
      clearTimeout(toolsMenuCloseTimeoutRef.current);
    }

    toolsMenuCloseTimeoutRef.current = setTimeout(() => {
      setToolsMenuOpen(false);
      toolsMenuCloseTimeoutRef.current = null;
    }, 320);
  };

  return (
    <header data-nosnippet className={`fixed w-full top-0 z-50 transition-all duration-300 ${headerClasses}`}>
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
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className={`${desktopNavBase} ${navHoverClasses} transition-all duration-200`}
              >
                {link.name}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={openToolsMenu}
              onMouseLeave={closeToolsMenu}
            >
              <button
                type="button"
                className={`${desktopNavBase} ${navHoverClasses} transition-all duration-200 inline-flex items-center gap-2`}
                onClick={() => {
                  if (toolsMenuOpen) {
                    closeToolsMenu();
                    return;
                  }

                  openToolsMenu();
                }}
                onFocus={openToolsMenu}
              >
                Tools
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${toolsMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {toolsMenuOpen && (
                <div className="absolute left-0 top-full pt-2">
                  <div aria-hidden="true" className="absolute inset-x-0 -top-2 h-4" />
                  <div className="w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-[0_18px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                    {toolsDropdownLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block rounded-xl px-4 py-3 transition-colors hover:bg-slate-50"
                      >
                        <div className="text-sm font-semibold text-slate-950">{link.name}</div>
                        <div className="mt-1 text-sm leading-5 text-slate-500">{link.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/web-hosting" 
              className={`ml-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${ctaClasses}`}
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

          <div className="rounded-2xl border border-slate-200 bg-white/80">
            <button
              type="button"
              className="flex w-full items-center justify-between px-4 py-3 text-left text-xl font-semibold tracking-tight text-slate-900"
              onClick={() => setMobileToolsOpen((open) => !open)}
            >
              Tools
              <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${mobileToolsOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileToolsOpen && (
              <div className="space-y-2 px-3 pb-3">
                {toolsDropdownLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block rounded-2xl bg-slate-50 px-4 py-3 text-base font-semibold text-slate-900 transition-colors hover:bg-indigo-50"
                    onClick={() => {
                      setMobileToolsOpen(false);
                      setMobileMenuOpen(false);
                    }}
                  >
                    <div>{link.name}</div>
                    <div className="mt-1 text-sm font-normal leading-5 text-slate-500">{link.description}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

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
