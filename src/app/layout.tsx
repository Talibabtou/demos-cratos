import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { ScrollToTopButton } from '@/components/scroll-to-top-button';
import { SiteFooter } from '@/components/site-footer';
import { ToasterProvider } from '@/components/toaster';
import { getPreferencesHydrationScript } from '@/lib/preferences';
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
    <html data-scroll-behavior="smooth" lang="en" suppressHydrationWarning>
      <head>
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: this prevents a theme flash before hydration.
          dangerouslySetInnerHTML={{
            __html: getPreferencesHydrationScript(),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <div
          aria-hidden="true"
          className="fixed inset-y-0 left-0 z-50 w-1 bg-civic-blue"
        />
        <div
          aria-hidden="true"
          className="fixed inset-y-0 right-0 z-50 w-1 bg-civic-red"
        />
        <ToasterProvider>
          {children}
          <SiteFooter />
          <ScrollToTopButton />
          <Analytics />
          <SpeedInsights />
        </ToasterProvider>
      </body>
    </html>
  );
}
