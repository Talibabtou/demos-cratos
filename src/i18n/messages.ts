import en from '@/messages/en.json';
import fr from '@/messages/fr.json';
import { defaultLocale, isLocale, type Locale } from '@/i18n/routing';

const messages = {
  en,
  fr,
} satisfies Record<Locale, typeof en>;

export type Messages = typeof en;

export function getMessages(locale: string): Messages {
  return messages[isLocale(locale) ? locale : defaultLocale];
}
