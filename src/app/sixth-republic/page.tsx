import { defaultLocale, withLocale } from '@/i18n/routing';
import { redirect } from 'next/navigation';

export default function SixthRepublicPage() {
  redirect(withLocale(defaultLocale, '/sixth-republic'));
}
