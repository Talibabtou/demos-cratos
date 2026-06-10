# AGENTS.md

Demos:Cratos is civic software for French citizens. Keep the product clear,
sober, and operational. The long-term goal is to help people read constitutional
texts, build a Sixth Republic constitution collaboratively, and organize local
democratic participation at the municipality level.

Setup, scripts, CI, and project tree: `README.md`.

## Common Commands

- `pnpm run dev` starts the local Next.js dev server on port 3000.
- Do not start the dev server yourself; the user runs it locally when needed.
- `pnpm run fix` runs Biome checks with write/unsafe fixes.
- `pnpm run check` runs fixes, ESLint, TypeScript, and a production build.
- `pnpm run build` creates a production build.
- `npx fallow` reviews dead code, wasteful patterns, and avoidable
  bundle/performance issues after substantial feature work.

## Where To Edit

- Localized routes and page shells: `src/app/[locale]/`
- Locale routing and messages: `src/i18n/`, `src/messages/`
- Feature code and structured product data: `src/features/`
- Shared UI: `src/components/`
- Early product mockups: `src/components/ui-mocks/`
- Civic visual tokens: `src/app/globals.css` via Tailwind 4 `@theme inline`
- CI and deployment: `.github/workflows/ci.yml`, `vercel.json`

## Rules

- Scoped changes only; do not edit unrelated local work.
- Never touch `.vercel/` or `.env*`; do not commit secrets.
- Use pnpm for scripts and `rg` for search.
- Match the portfolio repo development pattern: Next 16, Tailwind 4 CSS-first
  tokens, Biome 2, ESLint, typecheck, production build, smoke test, Vercel
  deploy through GitHub Actions.
- Prefer small focused components over monolithic page files.
- Respect the i18n structure. User-facing page routes live under
  `src/app/[locale]/`; shared locale helpers live in `src/i18n/`; visible copy
  that is not legal/source text should come from `src/messages/en.json` and
  `src/messages/fr.json` when it belongs to reusable navigation, metadata, or
  stable page content. Do not create duplicate non-localized page files for
  redirects; use `next.config.ts` redirects for legacy URLs.
- Keep original legal/source texts in their source language. Translate the
  interface around them, explanations, notes, labels, and navigation separately.
- Keep routes and data models explicit. Constitutional articles, drafts,
  proposals, reviews, municipalities, verified residents, votes, petitions, and
  debates should become first-class concepts as the product matures.
- Preserve accessibility: semantic HTML, visible focus states, readable
  contrast, and responsive layouts.
- Always use $anti-ai-slop-writing skill for website text content.

## Visual Direction

- Calm civic identity: white, cool gray, pale sage, navy-charcoal, thin borders.
- Use theme tokens for color choices; do not use one-off hard-coded colors in
  components because every UI must work in both light and dark mode.
- Store logo and brand icon assets in `public/` as SVG, PNG, or WebP instead of
  creating custom TypeScript icon components.
- Use cards only for individual tools, mockups, tables, modals, or repeated
  items.
- Keep radii at 0.5rem or below unless the design system changes intentionally.
- Avoid loud gradients, decorative blobs, and marketing-heavy hero composition.

## Verify

```bash
pnpm run check
```

After a substantial new feature or broad refactor, also run `npx fallow` and
review the report for dead code, wasteful patterns, and avoidable
bundle/performance issues. Do not make it part of every small copy or styling
change.
