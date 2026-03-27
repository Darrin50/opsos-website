import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ops-border bg-ops-dark mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border border-ops-blue flex items-center justify-center relative">
                <span className="font-mono text-ops-blue font-bold text-sm">OS</span>
                <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-ops-green rounded-full" />
              </div>
              <span className="font-bold text-ops-text tracking-wider">OpsOS</span>
            </div>
            <p className="text-ops-muted text-sm leading-relaxed max-w-xs">
              Warehouse operations intelligence for Tier 2–3 manufacturers, steel distributors, and distribution centers. Stop guessing. Start seeing.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="ops-status-dot" />
              <span className="font-mono text-ops-green text-xs">All systems operational</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <p className="section-label mb-4">Product</p>
            <div className="flex flex-col gap-3">
              <Link href="/features" className="text-ops-muted hover:text-ops-text text-sm transition-colors">Features</Link>
              <Link href="/pricing" className="text-ops-muted hover:text-ops-text text-sm transition-colors">Pricing</Link>
              <Link href="/blog" className="text-ops-muted hover:text-ops-text text-sm transition-colors">Blog</Link>
              <Link href="#demo" className="text-ops-muted hover:text-ops-text text-sm transition-colors">Request Demo</Link>
            </div>
          </div>

          {/* Modules */}
          <div>
            <p className="section-label mb-4">Modules</p>
            <div className="flex flex-col gap-3">
              {['OpsPulse', 'FlowAI', 'WasteWatch', 'ShiftAdvisor', 'Ask OpsOS', 'SafetyShield'].map((mod) => (
                <Link key={mod} href="/features" className="text-ops-muted hover:text-ops-text text-sm transition-colors">{mod}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-ops-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-ops-muted text-xs">
            © {year} OpsOS — Warehouse Intelligence Platform
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-ops-muted hover:text-ops-blue text-xs transition-colors">Privacy</Link>
            <Link href="#" className="text-ops-muted hover:text-ops-blue text-xs transition-colors">Terms</Link>
            <Link href="#" className="text-ops-muted hover:text-ops-blue text-xs transition-colors">Security</Link>
          </div>
          <p className="font-mono text-ops-subtle text-xs">
            Built by <Link href="https://caliberwebstudio.com" className="text-ops-blue hover:text-ops-blue/80 transition-colors" target="_blank" rel="noopener noreferrer">Caliber Web Studio</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
