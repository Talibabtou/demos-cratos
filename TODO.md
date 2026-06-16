# Demos:Cratos TODO

This list is ordered by implementation logic, not by timeline. The goal is to keep the project coherent as it grows from a public landing page into a civic software suite.

## Current State

- Foundation repo is in place: Next.js, pnpm, Tailwind 4, Biome, ESLint, TypeScript, GitHub CI, Vercel deployment, README, AGENTS, and project structure.
- Visual identity is usable for iteration: off-white/light and dark themes, French blue/red accents, local-storage preferences, and localized route structure.
- Public routes are organized around the three product sections: Constitution Reader, Constitution Workshop, and Municipal Democracy.
- Internationalization is structurally ready through `src/app/[locale]`, `src/i18n`, and `src/messages`, but content translation is intentionally postponed.
- Constitution Reader has a first real corpus: the current 1958 Constitution plus 14 official historical constitutional texts archived from the Conseil constitutionnel.
- Constitution Reader has a first scalable interface: horizontal timeline, selected constitution URL state, structured text rendering, contents sidebar, paragraph reading notes, margin notes, source links, and revision groups for the 1958 text.
- Research material exists in `public/research.md`, but it is not yet a real documentation section.
- Constitution Workshop and Municipal Democracy still exist as early placeholders.

## 1. Foundation

- Keep the project health loop strict: `pnpm run check` for normal verification, `npx fallow` after substantial features or broad refactors.
- Keep the current visual system restrained while adding dense interfaces: typography, color proportions, light/dark contrast, spacing, section rhythm, and reusable page primitives.
- Keep internationalization structurally ready with locale routes and message files, but postpone real translation work until core content is more stable.
- Decide the first durable data layer before accepting public submissions: database, migrations, backups, moderation states, audit timestamps, and ownership rules.

## 2. Constitution Reader

- Treat the Reader as MVP-complete.
- Keep later Reader work user-driven: citizens can add richer notes, context, examples, and citations through the contribution flow.
- Defer mobile-specific polish until the three product areas exist, so the responsive pass can handle the whole website at once.

## 3. Research And Doctrine

- Turn `public/research.md` into a proper documentation section under localized routes.
- Organize research by theme: digital democracy, civic tech, deliberation, constitutional drafting, municipal participation, identity, and anti-capture.
- Add bibliographic metadata for each source: title, authors, year, institution, link, and project relevance.
- Write a doctrine page that states the product principles clearly enough to guide feature decisions.
- Connect doctrine pages to concrete product decisions, especially around disagreement, moderation, identity, and municipal legitimacy.

## 4. Constitution Workshop

- Model a constitution draft as structured articles instead of one large document.
- Add version history for drafts, articles, proposals, comments, reviews, and decisions.
- Implement diff views for article-level changes.
- Design contribution workflows: propose, discuss, amend, review, accept, reject, fork, and merge.
- Add public reasoning records so every accepted change explains why it exists.
- Build a visual history map of drafts, branches, forks, and major decision points.
- Add moderation, rate limiting, anti-spam checks, and restore paths before opening public editing.

## 5. Municipal Democracy

- Define the municipality workspace information architecture: overview, debates, petitions, studies, votes, budgets, assemblies, official answers, and archives.
- Prototype municipality pages such as `/lyon` in public viewer mode first.
- Define verified resident mode separately from visitor mode.
- Model roles: resident, visitor, moderator, municipal staff, mayor assistant, mayor, and auditor.
- Add debate workflows with structured disagreement, evidence links, summaries, and decision follow-up.
- Add petition and proposal workflows with thresholds, status changes, and official response tracking.
- Add participatory budgeting workflows only after proposals, review, and legitimacy rules are clear.

## 6. Identity And Legitimacy

- Rework the account creation funnel into a familiar flow: sign-in state, consent, profile completion, role visibility, and clear next actions after first login.
- Polish the first user profile: clearer account state, public contribution identity, avatar handling, saved profile feedback, and the user's note-request history.
- Define what the platform must prove: municipality residence, uniqueness, eligibility, age if needed, and conflict-of-interest boundaries.
- Explore privacy-preserving identity options, including zero-knowledge proofs, without coupling the first version to one vendor too early.
- Separate identity proof from voting behavior so users can participate without exposing opinions.
- Add audit logs for system actions, moderation actions, vote setup, vote closure, and official responses.
- Define anti-capture protections: rate limits, reputation boundaries, sortition, delegation limits, transparent moderation, and appeal paths.

## 7. Governance And Operations

- Build an admin panel for the owner account: role assignment, moderator management, profile lookup, note-request review queues, and audit visibility.
- Define project governance before real public participation starts: maintainers, reviewers, moderators, escalation, and content policy.
- Add contribution guidelines for constitutional text, research notes, translations, and code.
- Add abuse handling: spam, coordinated brigading, malicious edits, harassment, legal takedown requests, and emergency rollback.
- Add observability for production: errors, performance, form abuse, suspicious traffic, and moderation queues.

## 8. Internationalization

- Keep English as the source language while content is unstable.
- Add French translations only when a section becomes stable enough to maintain.
- Add missing-key checks before relying on multiple languages in production.
- Add a visible `EN / FR` switcher when both languages have meaningful coverage.
- Later evaluate a translation workflow tool if community translation becomes useful.

## 9. Public Launch Readiness

- Add legal pages: privacy policy, terms of use, moderation policy, accessibility statement, and data retention policy.
- Add accessibility checks for keyboard navigation, focus visibility, color contrast, semantic structure, and screen-reader labels.
- Add SEO metadata and Open Graph images for stable public pages.
- Add security review before accepting identity, submissions, votes, or municipal administration.
- Define backups, export formats, and data portability so public work is never trapped inside the platform.

## Possible Ideas

These are not roadmap items yet. Keep them visible until the product direction is stable enough to accept or reject them properly.

- Add a petition aggregator in the introduction.
- Explore how the product can bring people together without trapping every debate in a left/right split.
- Add a political compass view: red/blue, progressive/conservative/reactionary.
- Build a glossary of political and constitutional terms.
- Explore a similar model for Switzerland.
