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
    { name: "Hosting", href: "/web-hosting", color: "hover:text-blue-400" },
    { name: "Builders", href: "/website-builders", color: "hover:text-purple-400" },
    { name: "AI Tools", href: "/ai-tools", color: "hover:text-green-400" },
    { name: "Proxies", href: "/proxies", color: "hover:text-cyan-400" }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 shadow-2xl' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl mr-3 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>
            <span className="text-2xl font-black text-white tracking-tighter uppercase italic group-hover:text-cyan-400 transition-colors">SITEPILOT</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className={`text-sm font-black uppercase tracking-widest text-slate-400 ${link.color} transition-all`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/web-hosting" 
              className="px-6 py-2 bg-blue-600 text-white rounded-xl text-sm font-black hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/40 flex items-center gap-2"
            >
              GET STARTED <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-slate-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0A] border-b border-white/10 p-8 space-y-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="block text-xl font-black text-white uppercase tracking-tighter"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/web-hosting" 
            className="block w-full py-4 bg-blue-600 text-center text-white rounded-2xl font-black"
            onClick={() => setMobileMenuOpen(false)}
          >
            GET STARTED
          </Link>
        </div>
      )}
    </header>
  );
}
