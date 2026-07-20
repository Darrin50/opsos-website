'use client';

import Link from 'next/link';
import type { ComponentProps, MouseEvent, ReactNode } from 'react';
import { trackEvent } from '@/lib/analytics';

type Props = ComponentProps<typeof Link> & {
  location: string;
  children: ReactNode;
};

// Thin client wrapper around next/link for CTAs that need a click event —
// keeps every server-component page free of 'use client' just to track a button.
export default function CtaLink({ location, onClick, children, ...rest }: Props) {
  const label = typeof children === 'string' ? children : String(rest.href);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    trackEvent({ name: 'cta_click', location, label });
    onClick?.(e);
  };

  return (
    <Link {...rest} onClick={handleClick}>
      {children}
    </Link>
  );
}
