import type { Metadata } from 'next';
import DemoSection from '@/components/DemoSection';

export const metadata: Metadata = {
  title: 'Request a Demo',
  description: 'See OpsOS on your own shift structure — a guided walkthrough, not a generic slideshow.',
};

export default function RequestDemoPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-label">Request a Demo</span>
          <h1 className="text-3xl md:text-5xl font-bold text-ink-text mt-3 tracking-tight">
            See OpsOS on your operation
          </h1>
          <p className="text-ink-muted mt-4 max-w-xl mx-auto leading-relaxed">
            A guided walkthrough built around how your shifts actually run — not a generic slideshow.
          </p>
        </div>
        <DemoSection />
      </div>
    </section>
  );
}
