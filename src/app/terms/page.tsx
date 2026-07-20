import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = { title: 'Terms of Service' };

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="July 2026">
      <p>
        These terms govern your use of this website and, once your organization has an active
        subscription, the OpsOS platform. By using either, you agree to these terms.
      </p>

      <h2>Using the platform</h2>
      <p>
        Access to the OpsOS platform is provided to your organization under a separate order or
        subscription agreement. These website terms cover the marketing site; your organization&apos;s
        subscription agreement governs the platform itself where the two differ.
      </p>

      <h2>Accounts</h2>
      <p>
        You are responsible for the accuracy of information provided when requesting a demo and for
        maintaining the confidentiality of any credentials issued to access the platform.
      </p>

      <h2>Acceptable use</h2>
      <p>
        You agree not to misuse this website — including attempting to disrupt it, scrape it at scale,
        or use it to submit false or misleading demo requests.
      </p>

      <h2>Intellectual property</h2>
      <p>
        This website and the OpsOS platform, including their design, content, and underlying software,
        are the property of OpsOS and its licensors. Nothing in these terms grants you rights beyond
        what is expressly stated.
      </p>

      <h2>Changes</h2>
      <p>We may update these terms as the product and business evolve. Material changes will be reflected by an updated date on this page.</p>

      <h2>Contact</h2>
      <p>Questions about these terms can be directed through our <a href="/contact">Contact</a> page.</p>
    </LegalPage>
  );
}
