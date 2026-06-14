import { signInWithGoogle, signOut } from '@/app/auth/actions';
import type { Messages } from '@/i18n/messages';
import type { Locale } from '@/i18n/routing';
import { withLocale } from '@/i18n/routing';
import { createSupabaseServerClient } from '@api/supabase/server';
import { LogIn, LogOut, UserCircle } from 'lucide-react';
import Link from 'next/link';

type AuthButtonProps = {
  locale: Locale;
  messages: Pick<
    Messages['navigation'],
    'profile' | 'signInWithGoogle' | 'signOut'
  >;
};

export async function AuthButton({ locale, messages }: AuthButtonProps) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <form action={signInWithGoogle.bind(null, locale)}>
        <button
          aria-label={messages.signInWithGoogle}
          className="focus-ring inline-flex size-10 items-center justify-center rounded-full text-civic-ink transition hover:text-civic-blue"
          title={messages.signInWithGoogle}
          type="submit"
        >
          <LogIn aria-hidden="true" size={18} strokeWidth={1.9} />
        </button>
      </form>
    );
  }

  const signOutLabel = user.email
    ? `${messages.signOut}: ${user.email}`
    : messages.signOut;

  return (
    <>
      <Link
        aria-label={messages.profile}
        className="focus-ring inline-flex size-10 items-center justify-center rounded-full text-civic-ink transition hover:text-civic-blue"
        href={withLocale(locale, '/profile')}
        title={messages.profile}
      >
        <UserCircle aria-hidden="true" size={19} strokeWidth={1.9} />
      </Link>
      <form action={signOut.bind(null, locale)}>
        <button
          aria-label={signOutLabel}
          className="focus-ring inline-flex size-10 items-center justify-center rounded-full text-civic-ink transition hover:text-civic-blue"
          title={signOutLabel}
          type="submit"
        >
          <LogOut aria-hidden="true" size={18} strokeWidth={1.9} />
        </button>
      </form>
    </>
  );
}
