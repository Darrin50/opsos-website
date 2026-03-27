import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPost, getAllBlogSlugs, blogPosts } from '@/lib/blog';
import DemoSection from '@/components/DemoSection';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'OpsOS' },
    publisher: {
      '@type': 'Organization',
      name: 'OpsOS',
      logo: { '@type': 'ImageObject', url: 'https://opsos.io/logo.png' },
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  // Parse content sections
  const sections = post.content.trim().split(/\n(?=## )/);

  const relatedPosts = blogPosts.filter(p => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <section className="py-20 ops-grid-bg relative">
        <div className="absolute inset-0 bg-gradient-to-b from-ops-black to-ops-dark" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/blog" className="text-ops-muted hover:text-ops-blue text-sm transition-colors">← Blog</Link>
            <span className="text-ops-border">/</span>
            <span className="ops-tag text-xs">{post.pillar}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-ops-text leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-ops-muted text-lg mb-6 leading-relaxed">{post.description}</p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-ops-subtle text-xs">{post.date}</span>
            <span className="text-ops-border">·</span>
            <span className="font-mono text-ops-subtle text-xs">{post.readTime}</span>
            <span className="text-ops-border">·</span>
            <span className="font-mono text-ops-blue text-xs">OpsOS Blog</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-ops-dark">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Article */}
            <article className="lg:col-span-3">
              <div className="prose-ops">
                {sections.map((section, i) => {
                  const lines = section.trim().split('\n');
                  const heading = lines[0].startsWith('## ') ? lines[0].replace('## ', '') : null;
                  const body = heading ? lines.slice(1).join('\n') : section;

                  return (
                    <div key={i} className="mb-10">
                      {heading && (
                        <h2 className="text-xl font-bold text-ops-text mb-4 pb-2 border-b border-ops-border">
                          {heading}
                        </h2>
                      )}
                      {body.split('\n\n').map((para, j) => {
                        if (para.trim().startsWith('- ') || para.trim().startsWith('1. ') || para.trim().startsWith('* ')) {
                          const items = para.trim().split('\n').filter(Boolean);
                          return (
                            <ul key={j} className="space-y-2 mb-4 ml-4">
                              {items.map((item, k) => (
                                <li key={k} className="flex items-start gap-2">
                                  <span className="text-ops-blue mt-1 flex-shrink-0">◆</span>
                                  <span className="text-ops-muted text-sm leading-relaxed">{item.replace(/^[-*\d+.]\s*/, '')}</span>
                                </li>
                              ))}
                            </ul>
                          );
                        }
                        if (para.includes('|') && para.includes('---')) {
                          return null; // Skip table markdown for simplicity
                        }
                        if (para.trim().startsWith('**')) {
                          const [bold, ...rest] = para.split('** — ');
                          return (
                            <div key={j} className="mb-4">
                              <p className="text-ops-text font-semibold mb-1">{bold.replace(/\*\*/g, '')}</p>
                              <p className="text-ops-muted text-sm leading-relaxed">{rest.join(' — ')}</p>
                            </div>
                          );
                        }
                        if (para.trim()) {
                          return <p key={j} className="text-ops-muted leading-relaxed mb-4 text-sm">{para.trim()}</p>;
                        }
                        return null;
                      })}
                    </div>
                  );
                })}
              </div>

              {/* FAQ Section */}
              {post.faqs.length > 0 && (
                <div className="mt-16 border-t border-ops-border pt-12">
                  <h2 className="text-xl font-bold text-ops-text mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {post.faqs.map((faq, i) => (
                      <div key={i} className="ops-panel p-5">
                        <h3 className="font-semibold text-ops-text mb-2 flex items-start gap-3">
                          <span className="font-mono text-ops-blue text-sm mt-0.5">Q</span>
                          {faq.q}
                        </h3>
                        <p className="text-ops-muted text-sm leading-relaxed pl-7">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Demo CTA */}
              <div className="ops-panel p-5 ops-glow sticky top-24">
                <p className="section-label text-xs mb-3">See OpsOS Live</p>
                <p className="text-ops-muted text-xs mb-4 leading-relaxed">
                  30-minute demo on your actual operation. No slides.
                </p>
                <Link href="/#demo" className="btn-primary text-xs py-2 px-4 w-full justify-center block text-center">
                  Request Demo
                </Link>
                <p className="font-mono text-ops-subtle text-xs text-center mt-3">30 days free • No card</p>
              </div>

              {/* Related */}
              {relatedPosts.length > 0 && (
                <div>
                  <p className="section-label text-xs mb-4">Related Posts</p>
                  <div className="space-y-3">
                    {relatedPosts.map((related) => (
                      <Link key={related.slug} href={`/blog/${related.slug}`} className="ops-panel p-4 block hover:border-ops-blue/30 transition-colors group">
                        <p className="text-ops-text text-xs font-medium leading-tight group-hover:text-ops-blue transition-colors">{related.title}</p>
                        <p className="font-mono text-ops-subtle text-xs mt-2">{related.readTime}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <DemoSection />
    </>
  );
}
