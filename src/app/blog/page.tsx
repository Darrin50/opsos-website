import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog — OpsOS',
  description: 'Operations intelligence insights for warehouse managers, plant managers, and ops directors. Throughput tracking, OEE, bottleneck analysis, and Lean operations.',
};

const pillars = ['All', 'Throughput & Productivity', 'Waste Reduction & Lean', 'Bottleneck & Flow', 'Shift Management'];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 ops-grid-bg relative">
        <div className="absolute inset-0 bg-gradient-to-b from-ops-black to-ops-dark" />
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="section-label">Operations Intelligence</span>
          <h1 className="text-4xl md:text-5xl font-bold text-ops-text mt-4 mb-4">
            The OpsOS Blog
          </h1>
          <p className="text-ops-muted max-w-xl">
            Practical insights on throughput tracking, OEE improvement, bottleneck analysis, and waste reduction — for operations managers who want data, not theory.
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-16 bg-ops-dark">
        <div className="max-w-7xl mx-auto px-6">
          {/* Pillar filters (visual only) */}
          <div className="flex flex-wrap gap-2 mb-12">
            {pillars.map((p, i) => (
              <span key={p} className={`ops-tag cursor-pointer ${i === 0 ? 'bg-ops-blue/15 border-ops-blue/40 text-ops-blue' : 'text-ops-muted'}`}>
                {p}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="ops-panel p-6 hover:border-ops-blue/30 transition-all group block">
                <div className="flex items-center justify-between mb-4">
                  <span className="ops-tag text-xs">{post.pillar}</span>
                  <span className="font-mono text-ops-subtle text-xs">{post.readTime}</span>
                </div>

                <h2 className="font-bold text-ops-text mb-3 leading-tight group-hover:text-ops-blue transition-colors line-clamp-3">
                  {post.title}
                </h2>

                <p className="text-ops-muted text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-ops-border">
                  <span className="font-mono text-ops-subtle text-xs">{post.date}</span>
                  <span className="text-ops-blue text-sm group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Coming soon */}
          <div className="mt-12 ops-panel p-8 text-center">
            <p className="section-label mb-3">More Coming</p>
            <p className="text-ops-muted text-sm max-w-lg mx-auto">
              New articles publish weekly covering throughput optimization, OEE improvement, bottleneck analysis, shift management, and Lean operations for manufacturers and distributors.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
