import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 2026">
      <p>
        This policy describes how OpsOS collects, uses, and protects information when you visit this
        website or use the OpsOS platform.
      </p>

      <h2>Information we collect</h2>
      <p>
        When you request a demo or contact us, we collect the information you provide directly — name,
        company, work email, and role. When you use the OpsOS platform, your organization&apos;s
        operational data (shift, staffing, and loss records) is stored under your organization&apos;s
        tenant and is not shared across organizations.
      </p>

      <h2>How we use information</h2>
      <p>
        We use demo-request information to respond to your inquiry and follow up about OpsOS. Platform
        data is used solely to operate the product for your organization — to render shift plans,
        recommendations, and evidence records for the account that submitted it.
      </p>

      <h2>Employee-level data</h2>
      <p>
        Skills and certification data tied to individual employees is access-controlled by default and
        exported only in aggregate form unless an authorized user has explicit HR-scope permission.
        Access to this data is audit-logged.
      </p>

      <h2>Data sharing</h2>
      <p>
        We do not sell personal information. We do not share your organization&apos;s operational data
        with other OpsOS customers or third parties, except service providers required to operate the
        platform (e.g. cloud hosting) under confidentiality obligations.
      </p>

      <h2>Your choices</h2>
      <p>
        You can request access to, correction of, or deletion of information you&apos;ve submitted by
        contacting us at the address on our <a href="/contact">Contact</a> page.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy can be directed through our <a href="/contact">Contact</a> page.
      </p>
    </LegalPage>
  );
}
