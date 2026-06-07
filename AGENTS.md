# AGENTS.md

Demos:Cratos is civic software for French citizens. Keep the product clear,
sober, and operational. The long-term goal is to help people read constitutional
texts, build a Sixth Republic constitution collaboratively, and organize local
democratic participation at the municipality level.

Setup, scripts, CI, and project tree: `README.md`.

## Common Commands

- `pnpm run dev` starts the local Next.js dev server on port 3000.
- `pnpm run fix` runs Biome checks with write/unsafe fixes.
- `pnpm run check` runs fixes, ESLint, TypeScript, and a production build.
- `pnpm run build` creates a production build.

## Where To Edit

- Product area metadata: `src/lib/site-data.ts`
- Routes and page shells: `src/app/`
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
- Keep routes and data models explicit. Constitutional articles, drafts,
  proposals, reviews, municipalities, verified residents, votes, petitions, and
  debates should become first-class concepts as the product matures.
- Preserve accessibility: semantic HTML, visible focus states, readable
  contrast, and responsive layouts.

## Visual Direction

- Calm civic identity: white, cool gray, pale sage, navy-charcoal, thin borders.
- Use cards only for individual tools, mockups, tables, modals, or repeated
  items.
- Keep radii at 0.5rem or below unless the design system changes intentionally.
- Avoid loud gradients, decorative blobs, and marketing-heavy hero composition.

## Verify

```bash
pnpm run check
```
