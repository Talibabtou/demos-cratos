import { HomePage } from '@/components/home-page';
import { getMessages } from '@/i18n/messages';
import { isLocale, locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';

type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalizedHomePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <HomePage locale={locale} messages={getMessages(locale)} />;
}
