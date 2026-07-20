import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = { title: 'Security' };

export default function SecurityPage() {
  return (
    <LegalPage title="Security" updated="July 2026">
      <p>
        OpsOS is built for operations teams that depend on the platform daily. Security is built into
        the architecture, not layered on after.
      </p>

      <h2>Data isolation</h2>
      <p>
        Every organization&apos;s data is scoped to its own tenant. Operational records — shift plans,
        recommendations, and evidence — are never visible across organizations.
      </p>

      <h2>Encryption in transit</h2>
      <p>
        All traffic to the OpsOS platform is served over HTTPS with HTTP Strict Transport Security
        enforced, so connections cannot be silently downgraded.
      </p>

      <h2>Access control</h2>
      <p>
        Roles and permissions govern what each user can see and do. Employee-level skills and
        certification data is role-gated by default, and access to it is audit-logged.
      </p>

      <h2>Deterministic, evidence-backed calculations</h2>
      <p>
        Operational numbers come from deterministic engines, not from the AI layer — every figure
        traces back to the evidence behind it, which supports both operational trust and audit
        requirements.
      </p>

      <h2>AI provider boundary</h2>
      <p>
        AI calls run through a single server-side provider adapter. Credentials never reach the
        browser, and business rules, permissions, and evidence retrieval stay outside the model itself.
      </p>

      <h2>Report a concern</h2>
      <p>
        If you believe you&apos;ve found a security issue, please reach us through our{' '}
        <a href="/contact">Contact</a> page so we can investigate promptly.
      </p>
    </LegalPage>
  );
}
