import { NextRequest, NextResponse } from 'next/server';
import {
  buildContactEmail,
  isHoneypotTripped,
  isRateLimited,
  sendLeadEmail,
  validateContactInput,
  type ContactLeadInput,
} from '@/lib/leadSubmission';

export const runtime = 'nodejs';

function clientKey(req: NextRequest): string {
  const forwardedFor = req.headers.get('x-forwarded-for');
  const ip = forwardedFor?.split(',')[0]?.trim() || 'unknown';
  return `contact:${ip}`;
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'invalid request body' }, { status: 400 });
  }

  // Bots that fill the honeypot get a fake success — never signal the catch.
  if (isHoneypotTripped(body)) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const validationError = validateContactInput(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  if (isRateLimited(clientKey(req))) {
    return NextResponse.json({ error: 'too many requests — please try again in a minute' }, { status: 429 });
  }

  const input = body as ContactLeadInput;
  const { subject, html } = buildContactEmail(input);
  const result = await sendLeadEmail({ subject, html, replyTo: input.email });

  if (!result.ok) {
    return NextResponse.json(
      { error: 'we could not send your message — please try again' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
