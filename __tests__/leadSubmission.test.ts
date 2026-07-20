import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  buildContactEmail,
  buildDemoEmail,
  isHoneypotTripped,
  isRateLimited,
  resetRateLimitStore,
  sendLeadEmail,
  validateContactInput,
  validateDemoInput,
} from '@/lib/leadSubmission';

const validDemo = { name: 'Jordan Smith', company: 'Acme Manufacturing', email: 'jordan@acme.com', role: 'Operations Manager' };
const validContact = { name: 'Jordan Smith', email: 'jordan@acme.com', message: 'Interested in a demo.' };

describe('validateDemoInput', () => {
  it('accepts a fully-populated submission', () => {
    expect(validateDemoInput(validDemo)).toBeNull();
  });

  it.each([
    ['name', { ...validDemo, name: '' }],
    ['company', { ...validDemo, company: '  ' }],
    ['email', { ...validDemo, email: 'not-an-email' }],
    ['role', { ...validDemo, role: undefined }],
  ])('rejects a missing/invalid %s', (_field, input) => {
    expect(validateDemoInput(input)).not.toBeNull();
  });

  it('rejects a non-object body', () => {
    expect(validateDemoInput(null)).not.toBeNull();
    expect(validateDemoInput('a string')).not.toBeNull();
  });
});

describe('validateContactInput', () => {
  it('accepts a fully-populated submission', () => {
    expect(validateContactInput(validContact)).toBeNull();
  });

  it.each([
    ['name', { ...validContact, name: '' }],
    ['email', { ...validContact, email: 'nope' }],
    ['message', { ...validContact, message: '' }],
  ])('rejects a missing/invalid %s', (_field, input) => {
    expect(validateContactInput(input)).not.toBeNull();
  });
});

describe('isHoneypotTripped', () => {
  it('is false when the honeypot field is absent or empty', () => {
    expect(isHoneypotTripped(validDemo)).toBe(false);
    expect(isHoneypotTripped({ ...validDemo, honeypot: '' })).toBe(false);
  });

  it('is true when a bot fills the honeypot field', () => {
    expect(isHoneypotTripped({ ...validDemo, honeypot: 'http://spam.example' })).toBe(true);
  });
});

describe('isRateLimited', () => {
  beforeEach(() => resetRateLimitStore());

  it('allows up to the per-window cap, then blocks', () => {
    const key = 'demo:1.2.3.4';
    const now = 1_000_000;
    for (let i = 0; i < 5; i++) {
      expect(isRateLimited(key, now + i)).toBe(false);
    }
    expect(isRateLimited(key, now + 5)).toBe(true);
  });

  it('resets once the window has passed', () => {
    const key = 'demo:5.6.7.8';
    const now = 1_000_000;
    for (let i = 0; i < 6; i++) isRateLimited(key, now + i);
    expect(isRateLimited(key, now + 61_000)).toBe(false);
  });

  it('tracks distinct keys independently', () => {
    const now = 1_000_000;
    for (let i = 0; i < 6; i++) isRateLimited('demo:1.1.1.1', now + i);
    expect(isRateLimited('demo:2.2.2.2', now)).toBe(false);
  });
});

describe('buildDemoEmail / buildContactEmail', () => {
  it('escapes HTML in submitted fields', () => {
    const { html } = buildDemoEmail({ ...validDemo, name: '<script>alert(1)</script>' });
    expect(html).not.toContain('<script>');
    expect(html).toContain('&lt;script&gt;');
  });

  it('preserves newlines in a contact message as <br/>', () => {
    const { html } = buildContactEmail({ ...validContact, message: 'line one\nline two' });
    expect(html).toContain('line one<br/>line two');
  });
});

describe('sendLeadEmail', () => {
  const originalEnv = { ...process.env };
  const originalFetch = global.fetch;

  beforeEach(() => {
    process.env.RESEND_API_KEY = 'test-key';
    process.env.RESEND_FROM_EMAIL = 'leads@opsos.pro';
    process.env.OPSOS_LEADS_TO = 'sales@opsos.pro';
  });

  afterEach(() => {
    process.env = { ...originalEnv };
    global.fetch = originalFetch;
    vi.restoreAllMocks();
  });

  it('returns EMAIL_NOT_CONFIGURED when env vars are missing, without calling fetch', async () => {
    delete process.env.RESEND_API_KEY;
    const fetchSpy = vi.fn();
    global.fetch = fetchSpy as unknown as typeof fetch;

    const result = await sendLeadEmail({ subject: 'x', html: '<p>x</p>', replyTo: 'a@b.com' });

    expect(result).toEqual({ ok: false, error: 'EMAIL_NOT_CONFIGURED' });
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('sends via the Resend REST API and never exposes the key to the response', async () => {
    const fetchSpy = vi.fn().mockResolvedValue({ ok: true, status: 200 });
    global.fetch = fetchSpy as unknown as typeof fetch;

    const result = await sendLeadEmail({ subject: 'Demo request: Acme', html: '<p>hi</p>', replyTo: 'jordan@acme.com' });

    expect(result).toEqual({ ok: true });
    expect(fetchSpy).toHaveBeenCalledTimes(1);
    const [url, init] = fetchSpy.mock.calls[0];
    expect(url).toBe('https://api.resend.com/emails');
    expect(init.headers.Authorization).toBe('Bearer test-key');
    const payload = JSON.parse(init.body);
    expect(payload.from).toBe('leads@opsos.pro');
    expect(payload.to).toEqual(['sales@opsos.pro']);
    expect(payload.reply_to).toBe('jordan@acme.com');
  });

  it('surfaces a non-2xx Resend response as a retryable error', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: false, status: 500 }) as unknown as typeof fetch;

    const result = await sendLeadEmail({ subject: 'x', html: '<p>x</p>', replyTo: 'a@b.com' });

    expect(result).toEqual({ ok: false, error: 'RESEND_ERROR_500' });
  });

  it('surfaces a network failure as a retryable error', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('network down')) as unknown as typeof fetch;

    const result = await sendLeadEmail({ subject: 'x', html: '<p>x</p>', replyTo: 'a@b.com' });

    expect(result).toEqual({ ok: false, error: 'RESEND_NETWORK_ERROR' });
  });
});
