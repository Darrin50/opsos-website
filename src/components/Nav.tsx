'use client';

import Link from 'next/link';
import { useState } from 'react';

const PRODUCTS = [
  { slug: 'shift-advisor', name: 'Shift Advisor', tagline: 'Now' },
  { slug: 'labor-planner', name: 'Labor Planner', tagline: 'Ahead' },
  { slug: 'bridge-center', name: 'Bridge Center', tagline: 'Explain' },
  { slug: 'loss-intelligence', name: 'Loss Intelligence', tagline: 'Recover' },
  { slug: 'complete', name: 'OpsOS Complete', tagline: 'Suite' },
];

// The SaaS app is served at opsos.pro/app/* via the Vercel rewrite defined in
// vercel.json — see OpsOS repo next.config.js basePath. Sign In must land the
// visitor directly in product auth, never on a marketing page.
const APP_SIGN_IN_URL = '/app/sign-in';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-ink-border bg-ink-black/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5" aria-label="OpsOS home">
          <div className="w-8 h-8 rounded-md bg-accent flex items-center justify-center">
            <span className="text-ink-black font-bold text-sm">O</span>
          </div>
          <span className="font-bold text-ink-text tracking-tight text-base">OpsOS</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              className="flex items-center gap-1 px-4 py-2 text-ink-muted hover:text-ink-text text-sm font-medium transition-colors"
              aria-expanded={productsOpen}
              aria-haspopup="true"
              onClick={() => setProductsOpen((v) => !v)}
            >
              Products
              <svg className={`w-3.5 h-3.5 transition-transform ${productsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {productsOpen && (
              <div className="absolute top-full left-0 pt-2 w-72">
                <div className="content-card p-2 shadow-2xl">
                  <Link
                    href="/products"
                    className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-ink-text hover:bg-ink-border/60 transition-colors"
                  >
                    All products
                  </Link>
                  <div className="h-px bg-ink-border my-1" />
                  {PRODUCTS.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="flex items-center justify-between px-4 py-2.5 rounded-lg text-sm text-ink-muted hover:text-ink-text hover:bg-ink-border/60 transition-colors"
                    >
                      <span>{p.name}</span>
                      <span className="text-xs text-ink-subtle">{p.tagline}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/who-its-for" className="px-4 py-2 text-ink-muted hover:text-ink-text text-sm font-medium transition-colors">Who It&apos;s For</Link>
          <Link href="/how-it-works" className="px-4 py-2 text-ink-muted hover:text-ink-text text-sm font-medium transition-colors">How It Works</Link>
          <Link href="/pricing" className="px-4 py-2 text-ink-muted hover:text-ink-text text-sm font-medium transition-colors">Pricing</Link>
          <Link href="/blog" className="px-4 py-2 text-ink-muted hover:text-ink-text text-sm font-medium transition-colors">Blog</Link>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link href={APP_SIGN_IN_URL} className="text-ink-muted hover:text-ink-text text-sm font-medium px-3 py-2 transition-colors">Sign In</Link>
          <Link href="/request-demo" className="btn-primary text-sm py-2.5 px-5">Request Demo</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 min-w-[44px] min-h-[44px] items-center justify-center"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-0.5 bg-ink-text transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-ink-text transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-ink-text transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-ink-border bg-ink-black px-6 py-4 flex flex-col gap-1 max-h-[calc(100vh-64px)] overflow-y-auto">
          <p className="section-label px-2 pt-2 pb-1">Products</p>
          {PRODUCTS.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`} className="px-2 py-2.5 text-ink-muted hover:text-ink-text text-sm" onClick={() => setMenuOpen(false)}>{p.name}</Link>
          ))}
          <div className="h-px bg-ink-border my-2" />
          <Link href="/who-its-for" className="px-2 py-2.5 text-ink-muted hover:text-ink-text text-sm" onClick={() => setMenuOpen(false)}>Who It&apos;s For</Link>
          <Link href="/how-it-works" className="px-2 py-2.5 text-ink-muted hover:text-ink-text text-sm" onClick={() => setMenuOpen(false)}>How It Works</Link>
          <Link href="/pricing" className="px-2 py-2.5 text-ink-muted hover:text-ink-text text-sm" onClick={() => setMenuOpen(false)}>Pricing</Link>
          <Link href="/blog" className="px-2 py-2.5 text-ink-muted hover:text-ink-text text-sm" onClick={() => setMenuOpen(false)}>Blog</Link>
          <div className="h-px bg-ink-border my-2" />
          <Link href={APP_SIGN_IN_URL} className="px-2 py-2.5 text-ink-text text-sm font-medium" onClick={() => setMenuOpen(false)}>Sign In</Link>
          <Link href="/request-demo" className="btn-primary text-sm py-3 justify-center mt-2" onClick={() => setMenuOpen(false)}>Request Demo</Link>
        </div>
      )}
    </nav>
  );
}
