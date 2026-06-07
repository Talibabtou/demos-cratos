import { defaultLocale, withLocale } from '@/i18n/routing';
import { redirect } from 'next/navigation';

export default function FifthConstitutionPage() {
  redirect(withLocale(defaultLocale, '/fifth-constitution'));
}
