export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <span className="section-label">Legal</span>
        <h1 className="text-4xl font-bold text-ink-text mt-3 tracking-tight">{title}</h1>
        <p className="text-ink-subtle text-sm mt-2">Last updated {updated}</p>
        <div className="prose-measure mt-10 space-y-6 text-ink-muted leading-relaxed [&_h2]:text-ink-text [&_h2]:font-semibold [&_h2]:text-lg [&_h2]:pt-4 [&_a]:text-accent [&_a]:hover:underline">
          {children}
        </div>
      </div>
    </section>
  );
}
