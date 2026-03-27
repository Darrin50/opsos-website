'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-ops-border bg-ops-black/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 border border-ops-blue flex items-center justify-center relative">
            <span className="font-mono text-ops-blue font-bold text-sm">OS</span>
            <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-ops-green rounded-full animate-pulse" />
          </div>
          <div>
            <span className="font-bold text-ops-text tracking-wider text-sm">OpsOS</span>
            <span className="block font-mono text-ops-muted text-[9px] tracking-widest uppercase">Warehouse Intelligence</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-ops-muted hover:text-ops-text text-sm tracking-wide transition-colors">Features</Link>
          <Link href="/who-its-for" className="text-ops-muted hover:text-ops-text text-sm tracking-wide transition-colors">Who It's For</Link>
          <Link href="/pricing" className="text-ops-muted hover:text-ops-text text-sm tracking-wide transition-colors">Pricing</Link>
          <Link href="/blog" className="text-ops-muted hover:text-ops-text text-sm tracking-wide transition-colors">Blog</Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/pricing" className="btn-secondary text-xs py-2 px-4">Sign In</Link>
          <Link href="#demo" className="btn-primary text-xs py-2 px-5">Request Demo</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-ops-text transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-ops-text transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-ops-text transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-ops-border bg-ops-dark px-6 py-4 flex flex-col gap-4">
          <Link href="/features" className="text-ops-muted hover:text-ops-text text-sm" onClick={() => setMenuOpen(false)}>Features</Link>
          <Link href="/who-its-for" className="text-ops-muted hover:text-ops-text text-sm" onClick={() => setMenuOpen(false)}>Who It's For</Link>
          <Link href="/pricing" className="text-ops-muted hover:text-ops-text text-sm" onClick={() => setMenuOpen(false)}>Pricing</Link>
          <Link href="/blog" className="text-ops-muted hover:text-ops-text text-sm" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="#demo" className="btn-primary text-xs py-2 px-5 text-center" onClick={() => setMenuOpen(false)}>Request Demo</Link>
        </div>
      )}
    </nav>
  );
}
