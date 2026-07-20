// Server-side only. Backs POST /api/demo and POST /api/contact (Darrin
// decision, control-plane issue #58, 2026-07-20 — approved provider: Resend).
// Kept framework-free (no next/server import) so it can be unit-tested
// directly with a mocked fetch, without spinning up a Route Handler.

export interface DemoLeadInput {
  name: string;
  company: string;
  email: string;
  role: string;
  honeypot?: string;
}

export interface ContactLeadInput {
  name: string;
  email: string;
  message: string;
  honeypot?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function isValidEmail(value: unknown): value is string {
  return isNonEmptyString(value) && EMAIL_RE.test(value);
}

export function validateDemoInput(input: unknown): string | null {
  const body = (input ?? {}) as Partial<DemoLeadInput>;
  if (!isNonEmptyString(body.name)) return 'name is required';
  if (!isNonEmptyString(body.company)) return 'company is required';
  if (!isValidEmail(body.email)) return 'a valid email is required';
  if (!isNonEmptyString(body.role)) return 'role is required';
  return null;
}

export function validateContactInput(input: unknown): string | null {
  const body = (input ?? {}) as Partial<ContactLeadInput>;
  if (!isNonEmptyString(body.name)) return 'name is required';
  if (!isValidEmail(body.email)) return 'a valid email is required';
  if (!isNonEmptyString(body.message)) return 'message is required';
  return null;
}

// A non-empty honeypot field means a bot filled in a field real users never
// see. Callers should respond as if the submission succeeded (never tip a
// bot off that it was caught) while skipping the actual send.
export function isHoneypotTripped(input: unknown): boolean {
  const body = (input ?? {}) as { honeypot?: unknown };
  return isNonEmptyString(body.honeypot);
}

// Basic in-memory sliding-window rate limit, keyed by caller (e.g. `demo:<ip>`).
// Best-effort: a serverless instance's memory is not shared or guaranteed to
// persist across invocations, so this slows down abuse from one warm
// instance rather than guaranteeing a global cap — acceptable for the "basic
// abuse protection" bar this slice targets, not a substitute for an edge/WAF
// rate limiter if abuse becomes a real problem.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_PER_WINDOW = 5;
const rateLimitHits = new Map<string, number[]>();

export function isRateLimited(key: string, now: number = Date.now()): boolean {
  const recent = (rateLimitHits.get(key) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  rateLimitHits.set(key, recent);
  return recent.length > RATE_LIMIT_MAX_PER_WINDOW;
}

// Test-only reset so cases don't leak state into each other.
export function resetRateLimitStore(): void {
  rateLimitHits.clear();
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function buildDemoEmail(input: DemoLeadInput): { subject: string; html: string } {
  const subject = `Demo request: ${input.company}`;
  const html = [
    `<p><strong>Name:</strong> ${escapeHtml(input.name)}</p>`,
    `<p><strong>Company:</strong> ${escapeHtml(input.company)}</p>`,
    `<p><strong>Role:</strong> ${escapeHtml(input.role)}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(input.email)}</p>`,
  ].join('\n');
  return { subject, html };
}

export function buildContactEmail(input: ContactLeadInput): { subject: string; html: string } {
  const subject = `Contact form: ${input.name}`;
  const html = [
    `<p><strong>Name:</strong> ${escapeHtml(input.name)}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(input.email)}</p>`,
    `<p><strong>Message:</strong></p>`,
    `<p>${escapeHtml(input.message).replace(/\n/g, '<br/>')}</p>`,
  ].join('\n');
  return { subject, html };
}

export type SendLeadEmailResult = { ok: true } | { ok: false; error: string };

// Never logs `subject`/`html` (may carry the lead's message body / PII) —
// only the opaque error code on failure, per the Resend decision's
// "do not log full lead messages or unnecessary PII" requirement.
export async function sendLeadEmail(params: {
  subject: string;
  html: string;
  replyTo: string;
}): Promise<SendLeadEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.OPSOS_LEADS_TO;

  if (!apiKey || !from || !to) {
    return { ok: false, error: 'EMAIL_NOT_CONFIGURED' };
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: params.replyTo,
        subject: params.subject,
        html: params.html,
      }),
    });

    if (!response.ok) {
      return { ok: false, error: `RESEND_ERROR_${response.status}` };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: 'RESEND_NETWORK_ERROR' };
  }
}
