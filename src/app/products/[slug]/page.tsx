import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCTS, getProduct } from '@/lib/products';

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.promise,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const otherProducts = PRODUCTS.filter((p) => p.slug !== product.slug);

  return (
    <>
      <section className="border-b border-ink-border">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <Link href="/products" className="text-ink-muted hover:text-ink-text text-sm inline-flex items-center gap-1.5 mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All products
          </Link>
          <span className="tag mb-4 inline-flex">{product.eyebrow}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-ink-text mt-3 tracking-tight max-w-2xl">
            {product.headline}
          </h1>
          <p className="text-lg text-ink-muted mt-4 max-w-2xl leading-relaxed">
            {product.promise}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link href="/request-demo" className="btn-primary">Request a Demo</Link>
            <Link href="/pricing" className="btn-secondary">View Pricing</Link>
          </div>
        </div>
      </section>

      {product.example && (
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="demo-frame p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="section-label">{product.name} &middot; {product.example.label}</span>
                <span className="tag">{product.time}</span>
              </div>
              <p className="demo-readout text-ink-text text-lg leading-relaxed">{product.example.sentence}</p>
            </div>
          </div>
        </section>
      )}

      <section className={`py-20 ${product.example ? 'border-t border-ink-border' : ''}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="section-label">Who It&apos;s For</span>
            <p className="text-xl text-ink-text mt-3 leading-relaxed">{product.forWho}</p>
          </div>

          <div className="max-w-2xl mb-4">
            <span className="section-label">What It Does</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.capabilities.map((c) => (
              <div key={c.title} className="content-card p-6">
                <h3 className="text-ink-text font-semibold mb-2">{c.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-ink-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-ink-text tracking-tight">The rest of the loop</h2>
            <Link href="/products" className="text-accent text-sm font-semibold hover:underline">All products</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherProducts.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="content-card p-5 hover:border-ink-border-strong transition-colors">
                <span className="tag mb-3 inline-flex">{p.time}</span>
                <h3 className="text-ink-text font-semibold text-sm">{p.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-ink-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink-text tracking-tight">See {product.name} on your operation</h2>
          <p className="text-ink-muted mt-4 leading-relaxed">A guided walkthrough with your own shift structure.</p>
          <Link href="/request-demo" className="btn-primary mt-8 inline-flex">Request a Demo</Link>
        </div>
      </section>
    </>
  );
}
