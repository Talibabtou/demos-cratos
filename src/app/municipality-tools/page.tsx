import { defaultLocale, withLocale } from '@/i18n/routing';
import { redirect } from 'next/navigation';

export default function MunicipalityToolsPage() {
  redirect(withLocale(defaultLocale, '/municipality-tools'));
}
