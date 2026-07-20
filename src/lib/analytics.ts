// Vendor-agnostic event plumbing (OpsOS#148 §6: analytics events for primary
// CTA, product-page visits, sign-in, and demo submission). Pushes to
// window.dataLayer using the standard GTM convention so a real analytics
// provider can be wired up later by adding its container script/ID to
// layout.tsx — no provider credential is required for the events themselves
// to fire correctly today.
export type AnalyticsEvent =
  | { name: 'cta_click'; location: string; label: string }
  | { name: 'page_view'; path: string }
  | { name: 'product_page_view'; product: string }
  | { name: 'sign_in_click' }
  | { name: 'demo_submit' }
  | { name: 'contact_submit' };

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(event: AnalyticsEvent): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: event.name, ...event });
}
