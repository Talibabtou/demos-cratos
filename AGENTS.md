# AGENTS.md

Demos:Cratos is civic software for French citizens. Keep it sober, readable,
and operational. The product helps people read constitutional texts, draft a
Sixth Republic constitution together, and later organize local democratic work
at the municipality level.

Setup, scripts, CI, and project tree: `README.md`.

## Operating Mode

- Use Ponytail judgment by default: smallest diff, delete first, platform before
  custom code, no speculative abstraction. Do not remove security, validation,
  accessibility, or data-loss protection.
- Use Caveman communication for agent-to-user messages: terse, exact technical
  names, no filler. Relax it when compression would make a risky action unclear.
- Use $anti-ai-slop-writing for website text, documentation, public pages,
  emails, and product copy. Product writing should sound human, concrete, and
  easy to read.
- Infer scope from the request:
  - Quick fix: inspect touched file plus direct imports; run the smallest check.
  - Feature work: inspect route, feature folder, actions/server code, types,
    constants, and related migration.
  - Audit/refactor: broad scans only when user asks for architecture, cleanup,
    duplication, security, or repo-wide review.
- If the user asks architecture questions during implementation, answer the
  point but keep the current task scoped unless they ask for cleanup.
- Do not inspect `monorepo/` unless user explicitly asks for comparison.
- Do not start the dev server; user runs it locally.

## Commands

- `pnpm run dev`: local Next.js dev server on port 3000.
- `pnpm run fix`: Biome check with write/unsafe fixes.
- `pnpm run lint`: ESLint with zero warnings.
- `pnpm run typecheck`: TypeScript no-emit check.
- `pnpm run build`: production build.
- `pnpm run check`: fix, lint, typecheck, and production build.
- `npx fallow`: dead-code and waste review after broad feature work, refactors,
  or explicit audit requests.

## Tooling

| Purpose | Tool |
| --- | --- |
| App | Next 16 App Router |
| Styling | Tailwind 4 CSS-first tokens |
| Database / auth | Supabase |
| Formatting | Biome 2 |
| Linting | ESLint + Biome |
| Type checking | TypeScript |
| Package manager | pnpm 11 |
| Deployment | Vercel through GitHub Actions |

## Project Boundaries

- Localized routes and page shells: `src/app/[locale]/`
- API route handlers: `src/app/api/`
- Auth callback route: `src/app/auth/callback/`
- Feature capsules: `src/features/<feature>/`
- Feature server reads: `src/features/<feature>/server/`
- Feature mutations: `src/features/<feature>/actions.ts`
- Locale helpers and messages: `src/i18n/`, `src/messages/`
- Shared UI: `src/components/`
- Shared UI primitives: `src/components/ui/`
- App-wide server infrastructure: `src/server/`
- App-wide constants/types only after real reuse: `src/constants.ts`,
  `src/types.ts`
- Visual tokens: `src/app/globals.css` via Tailwind 4 `@theme inline`
- CI/deploy: `.github/workflows/ci.yml`, `vercel.json`

## Architecture Rules

- Keep routes thin. Route files compose pages and metadata; durable product
  logic belongs in feature capsules.
- Keep feature code local until at least two unrelated features need it.
- Shared components must not import feature code.
- Avoid cross-feature imports unless the product concept is genuinely shared.
- Supabase access stays in server code, route handlers, or auth plumbing.
- Client components can submit forms or call safe actions, but they do not own
  database authorization.
- Server actions stay small: parse input, authorize, mutate, revalidate or
  redirect.
- RLS and server-side role checks must match. UI permissions are presentation,
  not security.
- Supabase is the source of truth for notes, research CMS content, profiles,
  roles, and future product data.
- Public readers see the published view by default. Admin tools stay hidden
  unless the task is editing.

## Code Rules

- Scoped changes only. Do not edit unrelated local work.
- Never touch `.vercel/` or `.env*`; do not commit secrets.
- Use `pnpm` for scripts and `rg` for search.
- Prefer `type` for object shapes and unions.
- Use explicit constants for reused statuses, kinds, roles, route segments,
  limits, and magic numbers.
- Keep original legal/source texts in their source language. Translate UI,
  explanations, notes, labels, and navigation separately.
- Visible copy that belongs to stable navigation, metadata, or reusable UI
  should live in `src/messages/en.json` and `src/messages/fr.json`.
- Do not create duplicate non-localized pages for redirects; use
  `next.config.ts` redirects for legacy URLs.
- Keep data models explicit. Constitutional articles, drafts, proposals,
  reviews, municipalities, verified residents, votes, petitions, and debates
  should become first-class concepts as the product grows.
- Preserve accessibility: semantic HTML, visible focus states, readable
  contrast, and responsive layouts.

## Visual Rules

- Civic identity: white, cool gray, pale sage, navy-charcoal, thin borders.
- Use theme tokens for colors. Do not hard-code one-off component colors.
- Store logo and brand assets in `public/` as SVG, PNG, or WebP.
- Use cards only for individual tools, mockups, tables, modals, or repeated
  items.
- Keep radii at `0.5rem` or below unless the design system changes.
- Avoid loud gradients, decorative blobs, and marketing-heavy hero composition.

## Verification

Pick the shortest check that fits the risk.

- No check: docs-only edits, TODO wording, comments, inert copy.
- `pnpm run typecheck`: TypeScript, imports, route props, server actions, data
  shapes, DB client usage.
- `pnpm run lint`: JSX/React structure, hooks, accessibility-prone components.
- `pnpm run fix`: formatting-heavy edits or likely Biome import/class rewrites.
- `pnpm run build`: routing, metadata, dynamic/static rendering, Next config,
  deployment-risk changes.
- `pnpm run check`: broad refactors, substantial feature completion, before
  push, or multiple risk areas changed.

Before push, prefer `pnpm run check` unless user says they already ran it.
Do not run `npx fallow` by default.
