'use client';

import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function DemoSection() {
  const [formState, setFormState] = useState({ name: '', company: '', email: '', role: '', honeypot: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong — please try again.');
        return;
      }

      trackEvent({ name: 'demo_submit' });
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong — please try again.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {status === 'success' ? (
        <div className="content-card p-12 text-center" role="status">
          <div className="w-12 h-12 rounded-full bg-signal-success/15 border border-signal-success/40 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-signal-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-ink-text mb-2">Request received</h3>
          <p className="text-ink-muted text-sm">We&apos;ll reach out within 24 hours to schedule your demo.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="content-card p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="demo-name" className="block text-sm font-medium text-ink-text mb-2">Your name</label>
              <input
                id="demo-name"
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="Jordan Smith"
                className="w-full min-h-[44px] bg-ink-canvas border border-ink-border rounded-lg px-4 py-3 text-ink-text text-sm placeholder-ink-subtle focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="demo-company" className="block text-sm font-medium text-ink-text mb-2">Company</label>
              <input
                id="demo-company"
                type="text"
                required
                value={formState.company}
                onChange={(e) => setFormState((prev) => ({ ...prev, company: e.target.value }))}
                placeholder="Acme Manufacturing"
                className="w-full min-h-[44px] bg-ink-canvas border border-ink-border rounded-lg px-4 py-3 text-ink-text text-sm placeholder-ink-subtle focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="demo-email" className="block text-sm font-medium text-ink-text mb-2">Work email</label>
              <input
                id="demo-email"
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
                placeholder="jordan@company.com"
                className="w-full min-h-[44px] bg-ink-canvas border border-ink-border rounded-lg px-4 py-3 text-ink-text text-sm placeholder-ink-subtle focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="demo-role" className="block text-sm font-medium text-ink-text mb-2">Your role</label>
              <select
                id="demo-role"
                required
                value={formState.role}
                onChange={(e) => setFormState((prev) => ({ ...prev, role: e.target.value }))}
                className="w-full min-h-[44px] bg-ink-canvas border border-ink-border rounded-lg px-4 py-3 text-ink-text text-sm focus:outline-none focus:border-accent transition-colors"
              >
                <option value="">Select role&hellip;</option>
                <option>Operations Manager</option>
                <option>Plant Manager</option>
                <option>Shift Supervisor</option>
                <option>Supply Chain Manager</option>
                <option>Owner / CEO</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Honeypot: real users never see or fill this in. */}
          <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
            <label htmlFor="demo-website">Website</label>
            <input
              id="demo-website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={formState.honeypot}
              onChange={(e) => setFormState((prev) => ({ ...prev, honeypot: e.target.value }))}
            />
          </div>

          {status === 'error' && (
            <p className="text-signal-danger text-sm mt-4" role="alert">{errorMessage}</p>
          )}

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed">
              {status === 'submitting' ? 'Sending…' : 'Request My Demo'}
              {status !== 'submitting' && (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              )}
            </button>
            <p className="text-ink-subtle text-xs text-center sm:text-left">
              We&apos;ll reach out to schedule a time — no account required to ask.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
