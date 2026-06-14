import { signInWithGoogle } from '@/app/auth/actions';
import { updateProfile } from '@/app/account/actions';
import { SiteHeader } from '@/components/site-header';
import { getMessages } from '@/i18n/messages';
import { isLocale, locales, type Locale } from '@/i18n/routing';
import { getCurrentAccount } from '@api/supabase/account';
import { Clock3, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type ProfilePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: ProfilePageProps): Promise<Metadata> {
  const { locale } = await params;
  const messages = getMessages(locale);

  return {
    title: messages.profile.metadataTitle,
  };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam;
  const messages = getMessages(locale);
  const account = await getCurrentAccount();

  return (
    <main>
      <SiteHeader locale={locale} messages={messages.navigation} />
      {account ? (
        <SignedInProfile
          account={account}
          locale={locale}
          messages={messages.profile}
        />
      ) : (
        <SignedOutProfile locale={locale} messages={messages.profile} />
      )}
    </main>
  );
}

function SignedOutProfile({
  locale,
  messages,
}: {
  locale: Locale;
  messages: ReturnType<typeof getMessages>['profile'];
}) {
  return (
    <section className="civic-section min-h-[calc(100svh-73px)] bg-civic-paper">
      <div className="civic-container max-w-3xl">
        <p className="font-semibold text-civic-blue text-sm uppercase tracking-[0.12em]">
          Demos:Cratos
        </p>
        <h1 className="mt-4 font-semibold font-serif text-4xl text-civic-ink leading-tight sm:text-5xl">
          {messages.signedOutTitle}
        </h1>
        <p className="mt-5 max-w-2xl text-civic-text text-lg leading-8">
          {messages.signedOutBody}
        </p>
        <form action={signInWithGoogle.bind(null, locale)} className="mt-8">
          <button
            className="focus-ring inline-flex h-12 items-center justify-center rounded-panel bg-civic-action px-6 font-semibold text-civic-action-text text-sm shadow-quiet transition hover:bg-civic-action-hover"
            type="submit"
          >
            {messages.signedOutAction}
          </button>
        </form>
      </div>
    </section>
  );
}

function SignedInProfile({
  account,
  locale,
  messages,
}: {
  account: NonNullable<Awaited<ReturnType<typeof getCurrentAccount>>>;
  locale: Locale;
  messages: ReturnType<typeof getMessages>['profile'];
}) {
  const profile = account.profile;

  return (
    <section className="civic-section bg-civic-paper">
      <div className="civic-container">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="font-semibold text-civic-blue text-sm uppercase tracking-[0.12em]">
              {messages.identity}
            </p>
            <h1 className="mt-4 font-semibold font-serif text-5xl text-civic-ink leading-tight">
              {messages.title}
            </h1>
            <p className="mt-5 max-w-md text-base text-civic-text leading-7">
              {messages.subtitle}
            </p>

            <dl className="mt-10 space-y-6 border-civic-line border-l pl-5">
              <div>
                <dt className="font-semibold text-civic-muted text-xs uppercase tracking-[0.12em]">
                  {messages.email}
                </dt>
                <dd className="mt-2 break-words text-civic-ink text-sm">
                  {account.email}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-civic-muted text-xs uppercase tracking-[0.12em]">
                  {messages.roles}
                </dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {account.roles.length > 0 ? (
                    account.roles.map((role) => (
                      <span
                        className="inline-flex items-center gap-1 rounded-panel border border-civic-line px-2.5 py-1 font-medium text-civic-text text-xs"
                        key={role}
                      >
                        <ShieldCheck
                          aria-hidden="true"
                          size={13}
                          strokeWidth={2}
                        />
                        {role}
                      </span>
                    ))
                  ) : (
                    <span className="text-civic-muted text-sm">
                      {messages.noRoles}
                    </span>
                  )}
                </dd>
              </div>
            </dl>
          </div>

          <div className="grid gap-8">
            <form
              action={updateProfile.bind(null, locale)}
              className="rounded-panel border border-civic-line bg-civic-wash p-5 shadow-quiet sm:p-6"
            >
              <h2 className="font-semibold font-serif text-2xl text-civic-ink">
                {messages.settings}
              </h2>
              <div className="mt-6 grid gap-5">
                <label className="grid gap-2">
                  <span className="font-semibold text-civic-text text-sm">
                    {messages.displayName}
                  </span>
                  <input
                    className="focus-ring min-h-11 rounded-panel border border-civic-line bg-civic-paper px-3 text-civic-ink text-sm"
                    defaultValue={profile?.display_name ?? ''}
                    maxLength={80}
                    name="displayName"
                    placeholder={messages.displayNamePlaceholder}
                    type="text"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="font-semibold text-civic-text text-sm">
                    {messages.bio}
                  </span>
                  <textarea
                    className="focus-ring min-h-32 resize-y rounded-panel border border-civic-line bg-civic-paper px-3 py-3 text-civic-ink text-sm leading-6"
                    defaultValue={profile?.bio ?? ''}
                    maxLength={420}
                    name="bio"
                    placeholder={messages.bioPlaceholder}
                  />
                </label>
              </div>
              <button
                className="focus-ring mt-6 inline-flex h-11 items-center justify-center rounded-panel bg-civic-action px-5 font-semibold text-civic-action-text text-sm transition hover:bg-civic-action-hover"
                type="submit"
              >
                {messages.save}
              </button>
            </form>

            <section className="rounded-panel border border-civic-line bg-civic-wash p-5 shadow-quiet sm:p-6">
              <h2 className="font-semibold font-serif text-2xl text-civic-ink">
                {messages.pendingRequests}
              </h2>
              {account.noteRequests.length > 0 ? (
                <div className="mt-6 grid gap-4">
                  {account.noteRequests.map((request) => (
                    <article
                      className="rounded-panel border border-civic-line bg-civic-paper p-4"
                      key={request.id}
                    >
                      <div className="flex flex-wrap items-center gap-3 text-civic-muted text-xs">
                        <span className="inline-flex items-center gap-1">
                          <Clock3
                            aria-hidden="true"
                            size={13}
                            strokeWidth={2}
                          />
                          {formatDate(request.created_at, locale)}
                        </span>
                        <span>
                          {messages.requestStatus}: {request.status}
                        </span>
                        <span>
                          {messages.requestKind}: {request.kind}
                        </span>
                      </div>
                      <p className="mt-3 font-semibold text-civic-ink text-sm">
                        {messages.requestLocation}: {request.document_slug} /{' '}
                        {request.article_id}
                      </p>
                      <p className="mt-3 line-clamp-3 text-civic-text text-sm leading-6">
                        {request.proposed_text}
                      </p>
                      {request.moderator_comment ? (
                        <p className="mt-3 border-civic-line border-l pl-3 text-civic-muted text-sm leading-6">
                          {messages.moderatorComment}:{' '}
                          {request.moderator_comment}
                        </p>
                      ) : null}
                    </article>
                  ))}
                </div>
              ) : (
                <p className="mt-5 text-civic-text text-sm leading-7">
                  {messages.emptyRequests}
                </p>
              )}
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

function formatDate(value: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(value));
}
