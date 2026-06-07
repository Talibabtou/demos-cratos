import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { STORAGE_KEYS } from '@/lib/storage';
import { THEME_CLASS, THEME_STORAGE_KEY, THEME_VALUES } from '@/lib/theme';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Demos:Cratos',
    template: '%s | Demos:Cratos',
  },
  description:
    'A civic software suite for consulting constitutional texts, drafting democratic reforms, and preparing municipality-level participation tools.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: this prevents a theme flash before hydration.
          dangerouslySetInnerHTML={{
            __html: `
try {
  var state = JSON.parse(localStorage.getItem('${STORAGE_KEYS.localState}') || '{}');
  var theme = state && state.values && state.values['preferences.${THEME_STORAGE_KEY}'];
  document.documentElement.classList.toggle('${THEME_CLASS}', theme === '${THEME_VALUES.dark}');
} catch (_) {}
            `.trim(),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
