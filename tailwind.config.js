/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Neutral scale — premium dark editorial, not terminal-black.
        'ink-black': '#0B0C0E',
        'ink-canvas': '#0F1113',
        'ink-surface': '#15171B',
        'ink-border': '#24272C',
        'ink-border-strong': '#33373E',
        'ink-text': '#F3F4F6',
        'ink-muted': '#9CA3AF',
        // #7B8695 not #6B7280 — the darker value computed to ~4.05:1 against
        // ink-black, below the WCAG AA 4.5:1 body-text minimum, and this tier
        // is used for genuinely-read text (footer copyright, "last updated",
        // date/readtime labels). This value holds ~4.9:1 on ink-surface cards
        // and ~5.3:1 on ink-black/ink-canvas.
        'ink-subtle': '#7B8695',
        // One primary accent. No competing accents in marketing copy —
        // status colors below are semantic-only (used inside framed product
        // demonstrations, never as decoration).
        'accent': '#4C7CF5',
        'accent-dim': '#3B63D6',
        'accent-soft': 'rgba(76, 124, 245, 0.12)',
        // Semantic (product-demo panels only — see FORBIDDEN.md "one accent
        // competing" rule; these never appear as marketing decoration).
        'signal-success': '#34D399',
        'signal-warning': '#F5B942',
        'signal-danger': '#F2555A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        // Reserved for genuine data readouts inside framed product-demo
        // panels only — never for marketing body copy or headings.
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
