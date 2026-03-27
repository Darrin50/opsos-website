'use client';

import { useState } from 'react';

export default function DemoSection() {
  const [formState, setFormState] = useState({ name: '', company: '', email: '', role: '', submitted: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, submitted: true }));
  };

  return (
    <section id="demo" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-ops-blue/5 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <span className="section-label">Request Access</span>
          <h2 className="text-3xl md:text-4xl font-bold text-ops-text mt-3">
            See OpsOS on Your Operation
          </h2>
          <p className="text-ops-muted mt-4 max-w-xl mx-auto">
            30-minute live demo. We connect to your data. You see your actual throughput, bottlenecks, and waste — not a generic slideshow.
          </p>
        </div>

        {formState.submitted ? (
          <div className="ops-panel p-12 text-center ops-glow">
            <div className="w-12 h-12 border border-ops-green rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-ops-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-ops-text mb-2">Request Received</h3>
            <p className="text-ops-muted text-sm">We'll reach out within 24 hours to schedule your demo.</p>
            <p className="font-mono text-ops-green text-xs mt-4">STATUS: CONFIRMED ✓</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="ops-panel p-8 ops-glow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="section-label text-xs mb-2 block">Your Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="John Smith"
                  className="w-full bg-ops-black border border-ops-border rounded px-4 py-3 text-ops-text text-sm placeholder-ops-subtle focus:outline-none focus:border-ops-blue transition-colors"
                />
              </div>
              <div>
                <label className="section-label text-xs mb-2 block">Company</label>
                <input
                  type="text"
                  required
                  value={formState.company}
                  onChange={e => setFormState(prev => ({ ...prev, company: e.target.value }))}
                  placeholder="Acme Manufacturing"
                  className="w-full bg-ops-black border border-ops-border rounded px-4 py-3 text-ops-text text-sm placeholder-ops-subtle focus:outline-none focus:border-ops-blue transition-colors"
                />
              </div>
              <div>
                <label className="section-label text-xs mb-2 block">Work Email</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={e => setFormState(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="john@company.com"
                  className="w-full bg-ops-black border border-ops-border rounded px-4 py-3 text-ops-text text-sm placeholder-ops-subtle focus:outline-none focus:border-ops-blue transition-colors"
                />
              </div>
              <div>
                <label className="section-label text-xs mb-2 block">Your Role</label>
                <select
                  required
                  value={formState.role}
                  onChange={e => setFormState(prev => ({ ...prev, role: e.target.value }))}
                  className="w-full bg-ops-black border border-ops-border rounded px-4 py-3 text-ops-text text-sm focus:outline-none focus:border-ops-blue transition-colors"
                >
                  <option value="">Select role...</option>
                  <option>Operations Manager</option>
                  <option>Plant Manager</option>
                  <option>Warehouse Manager</option>
                  <option>Supply Chain Manager</option>
                  <option>Owner / CEO</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <button type="submit" className="btn-primary w-full sm:w-auto justify-center">
                Request My Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <p className="text-ops-muted text-xs text-center">
                No credit card. No contract. 30 days free.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
