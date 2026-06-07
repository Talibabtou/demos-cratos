# Demos:Cratos

Demos:Cratos is a civic software suite for French citizens. The project starts
with three public workspaces:

- Fifth Republic Constitution: consult, search, analyze, and annotate the
  current constitutional text.
- Sixth Republic Workshop: collaboratively draft a citizen-centered constitution
  with versions, diffs, forks, and review workflows.
- Municipality Tools: prepare future tools for local debates, petitions, votes,
  resident access, and transparent municipal participation.

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

`npx fallow` is intentionally not part of every small change. Use it after a
substantial new feature or broad refactor, then review the report before
cleaning up unused code or avoidable bundle/performance costs.

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

## Product Direction

The first version stays intentionally sharp and calm. It should make the
democratic work legible before it becomes feature-heavy: constitutional reading
first, public drafting second, municipal organization third.

## Inspirational Sources

These initiatives are worth studying while Demos:Cratos evolves. The goal is not
to copy them, but to understand what has already worked, failed, or matured in
digital democracy.

- [Decidim](https://decidim.org/?lang=en) — Free/libre participatory democracy
  platform born in Barcelona. Strong reference for participatory processes,
  proposals, assemblies, budgeting, transparency, traceability, and community
  governance through [Metadecidim](https://meta.decidim.org/pages/faq).
- [CONSUL Democracy](https://consuldemocracy.org/) — Open-source citizen
  participation software used for open government, debates, proposals, voting,
  and participatory budgeting. Useful reference for a complete municipal
  participation suite.
- [vTaiwan](https://www.designingopendemocracy.com/organisations/vtaiwan/) and
  Taiwan's [JOIN platform](https://join.gov.tw/) — Inspiration for hybrid
  digital/in-person deliberation, especially the use of structured consensus
  finding instead of normal comment-thread polarization.
- [Pol.is](https://pol.is/) — Open-source opinion-mapping and deliberation tool
  used by vTaiwan and others. Important reference for surfacing areas of
  agreement across large groups.
- [LiquidFeedback](https://liquidfeedback.com/en/open-source.html) — Open-source
  liquid democracy software with PostgreSQL-backed delegation, feedback, and
  voting procedures. Useful for thinking about delegation models and formal
  decision mechanics.
- [Better Reykjavík / Your Priorities](https://www.nesta.org.uk/feature/10-people-centred-smart-city-initiatives/better-reykjavik/)
  — Icelandic municipal participation model built on Citizens Foundation's
  [Your Priorities](https://www.citizens.is/digital-democracy-home/). Strong
  inspiration for local idea collection, prioritization, and a recurring
  commitment from city council to consider popular proposals.
- [Stanford Participatory Budgeting Platform](https://pbstanford.org/) —
  Open-source participatory budgeting platform for cities, states, foundations,
  and other organizations. Relevant for the future municipality tools pillar.
- [Loomio](https://www.loomio.com/) — Collaborative discussion and
  decision-making platform with transparent records, outcomes, quorum, delegated
  voters, and governance memory. Useful for smaller groups, assemblies, and
  internal civic organization workflows.
