import Link from 'next/link';

const PRODUCTS = [
  { slug: 'shift-advisor', name: 'Shift Advisor' },
  { slug: 'labor-planner', name: 'Labor Planner' },
  { slug: 'bridge-center', name: 'Bridge Center' },
  { slug: 'loss-intelligence', name: 'Loss Intelligence' },
  { slug: 'complete', name: 'OpsOS Complete' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-border bg-ink-canvas mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-md bg-accent flex items-center justify-center">
                <span className="text-ink-black font-bold text-sm">O</span>
              </div>
              <span className="font-bold text-ink-text tracking-tight">OpsOS</span>
            </div>
            <p className="text-ink-muted text-sm leading-relaxed max-w-xs">
              Your systems show what happened. OpsOS tells managers what to do next — before, during, and after every shift.
            </p>
          </div>

          <div>
            <p className="section-label mb-4">Products</p>
            <div className="flex flex-col gap-3">
              {PRODUCTS.map((p) => (
                <Link key={p.slug} href={`/products/${p.slug}`} className="text-ink-muted hover:text-ink-text text-sm transition-colors">{p.name}</Link>
              ))}
            </div>
          </div>

          <div>
            <p className="section-label mb-4">Company</p>
            <div className="flex flex-col gap-3">
              <Link href="/who-its-for" className="text-ink-muted hover:text-ink-text text-sm transition-colors">Who It&apos;s For</Link>
              <Link href="/how-it-works" className="text-ink-muted hover:text-ink-text text-sm transition-colors">How It Works</Link>
              <Link href="/pricing" className="text-ink-muted hover:text-ink-text text-sm transition-colors">Pricing</Link>
              <Link href="/blog" className="text-ink-muted hover:text-ink-text text-sm transition-colors">Blog</Link>
              <Link href="/request-demo" className="text-ink-muted hover:text-ink-text text-sm transition-colors">Request Demo</Link>
            </div>
          </div>

          <div>
            <p className="section-label mb-4">Legal</p>
            <div className="flex flex-col gap-3">
              <Link href="/privacy" className="text-ink-muted hover:text-ink-text text-sm transition-colors">Privacy</Link>
              <Link href="/terms" className="text-ink-muted hover:text-ink-text text-sm transition-colors">Terms</Link>
              <Link href="/security" className="text-ink-muted hover:text-ink-text text-sm transition-colors">Security</Link>
              <Link href="/contact" className="text-ink-muted hover:text-ink-text text-sm transition-colors">Contact</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-ink-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ink-subtle text-xs">
            © {year} OpsOS. All rights reserved.
          </p>
          <p className="text-ink-subtle text-xs">
            Built by <Link href="https://caliberwebstudio.com" className="text-ink-muted hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">Caliber Web Studio</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
