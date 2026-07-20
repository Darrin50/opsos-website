import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Practical insights on shift performance, labor planning, and operational loss for operations managers.',
};

const pillars = ['All', 'Throughput & Productivity', 'Waste Reduction & Lean', 'Bottleneck & Flow', 'Shift Management'];

export default function BlogPage() {
  return (
    <>
      <section className="border-b border-ink-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <span className="section-label">Operations Intelligence</span>
          <h1 className="text-4xl md:text-5xl font-bold text-ink-text mt-4 mb-4 tracking-tight">
            The OpsOS Blog
          </h1>
          <p className="text-ink-muted max-w-xl leading-relaxed">
            Practical insights on shift performance, pre-shift labor planning, and operational loss —
            for operations managers who want evidence, not theory.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-12">
            {pillars.map((p, i) => (
              <span key={p} className={`tag cursor-pointer ${i === 0 ? 'bg-accent-soft border-accent/40 text-accent' : ''}`}>
                {p}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="content-card p-6 hover:border-ink-border-strong transition-all group block">
                <div className="flex items-center justify-between mb-4">
                  <span className="tag text-xs">{post.pillar}</span>
                  <span className="font-mono text-ink-subtle text-xs">{post.readTime}</span>
                </div>

                <h2 className="font-bold text-ink-text mb-3 leading-tight group-hover:text-accent transition-colors line-clamp-3">
                  {post.title}
                </h2>

                <p className="text-ink-muted text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-ink-border">
                  <span className="font-mono text-ink-subtle text-xs">{post.date}</span>
                  <span className="text-accent text-sm group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 content-card p-8 text-center">
            <p className="section-label mb-3">More Coming</p>
            <p className="text-ink-muted text-sm max-w-lg mx-auto leading-relaxed">
              New articles publish regularly covering shift performance, labor planning, loss recovery,
              and evidence-backed operations reporting.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
