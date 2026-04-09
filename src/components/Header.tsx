"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Shield, Menu, X, Terminal } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Infrastructure', href: '/web-hosting' },
    { name: 'AI Tools', href: '/ai-tools' },
    { name: 'Methodology', href: '/methodology' },
    { name: 'Proxies', href: '/proxies' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Shield className="w-8 h-8 text-blue-500 transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-xl font-black text-white tracking-tighter">
            SITE<span className="text-blue-500">PILOT</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-bold text-slate-400 hover:text-white transition-colors tracking-widest uppercase"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/apply-for-audit"
            className="px-5 py-2 rounded-full bg-blue-600 text-white text-xs font-black tracking-widest uppercase hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/40 border border-blue-400/20"
          >
            Audit Lab
          </Link>
        </nav>

        {/* Mobile Trigger */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0A0A0A] border-b border-white/10 py-8 px-6 md:hidden animate-in fade-in slide-in-from-top-5">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-lg font-bold text-slate-300 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/apply-for-audit"
              className="text-lg font-bold text-blue-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Audit Lab →
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
