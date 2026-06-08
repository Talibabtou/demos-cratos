# Demos:Cratos

Demos:Cratos is a civic software suite for French citizens. The project starts
with three public workspaces:

- Constitution Reader: consult, search, analyze, and annotate the
  current constitutional text.
- Constitution Workshop: collaboratively draft a citizen-centered constitution
  with versions, diffs, forks, and review workflows.
- Municipal Democracy: prepare future tools for local debates, petitions, votes,
  budgeting, local news, and transparent municipal participation.

## Stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js 16 App Router, React 19, TypeScript |
| Styling | Tailwind CSS 4, CSS-first tokens in `src/app/globals.css` |
| Quality | Biome 2, ESLint, TypeScript, production build, Fallow for larger changes |
| Package manager | pnpm 11.5.2 |
| Hosting | Vercel, deploy gated by GitHub Actions |

## Local Development

```bash
pnpm install
pnpm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
pnpm run dev        # Next.js dev server with Turbopack on port 3000
pnpm run fix        # Biome write/unsafe fixes
pnpm run lint       # ESLint with zero warnings
pnpm run typecheck  # TypeScript no-emit check
pnpm run build      # production build
pnpm run check      # fix, lint, typecheck, build
npx fallow          # review dead code and waste after substantial feature work
```

## Project Structure

```text
src/app/                 App Router pages, sitemap, layout
src/components/          Shared UI and page components
src/components/ui-mocks/ Static product mockups for early placeholders
src/lib/                 Shared project data
.github/workflows/       CI, smoke test, Vercel deploy jobs
```

## CI / Deployment

Every push and PR to `main` runs the same split checks as the portfolio repo:

- Format and Biome
- ESLint
- TypeScript
- Production build
- Production smoke test on `/` and `/sitemap.xml`

Automatic Vercel Git deploys are disabled in `vercel.json`. GitHub Actions owns
preview and production deployments through `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and
`VERCEL_PROJECT_ID` secrets.
