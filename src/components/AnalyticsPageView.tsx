'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

// Mounted once in RootLayout. Fires on every route change (App Router
// navigations don't trigger a full page load, so a standard onload-based
// pageview never fires) — plus a dedicated product_page_view for /products/*
// per OpsOS#148 §6's explicit "product-page visits" requirement.
export default function AnalyticsPageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    trackEvent({ name: 'page_view', path: pathname });

    const productMatch = pathname.match(/^\/products\/([^/]+)$/);
    if (productMatch) {
      trackEvent({ name: 'product_page_view', product: productMatch[1] });
    }
  }, [pathname]);

  return null;
}
