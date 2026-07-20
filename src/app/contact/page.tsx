'use client';

import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '', submitted: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent({ name: 'contact_submit' });
    setFormState((prev) => ({ ...prev, submitted: true }));
  };

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-label">Contact</span>
          <h1 className="text-4xl font-bold text-ink-text mt-3 tracking-tight">Get in touch</h1>
          <p className="text-ink-muted mt-4 leading-relaxed">
            Questions about the product, security, or a partnership — reach out and we&apos;ll respond
            directly.
          </p>
        </div>

        {formState.submitted ? (
          <div className="content-card p-12 text-center" role="status">
            <div className="w-12 h-12 rounded-full bg-signal-success/15 border border-signal-success/40 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-signal-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-ink-text mb-2">Message sent</h2>
            <p className="text-ink-muted text-sm">We&apos;ll get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="content-card p-8">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-ink-text mb-2">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full min-h-[44px] bg-ink-canvas border border-ink-border rounded-lg px-4 py-3 text-ink-text text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-ink-text mb-2">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full min-h-[44px] bg-ink-canvas border border-ink-border rounded-lg px-4 py-3 text-ink-text text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-ink-text mb-2">Message</label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full bg-ink-canvas border border-ink-border rounded-lg px-4 py-3 text-ink-text text-sm focus:outline-none focus:border-accent transition-colors resize-y"
                />
              </div>
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto mt-8">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
