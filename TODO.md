# Demos:Cratos TODO

This list is ordered by implementation logic, not by timeline. The goal is to keep the project coherent as it grows from a public landing page into a civic software suite.

## 1. Foundation

- Keep the project health loop strict: `pnpm run check` for normal verification, `npx fallow` after substantial features or broad refactors.
- Stabilize the visual system before adding dense interfaces: typography, color proportions, light/dark contrast, spacing, section rhythm, and reusable page primitives.
- Keep internationalization structurally ready with locale routes and message files, but postpone real translation work until core content is more stable.
- Decide the first durable data layer before accepting public submissions: database, migrations, backups, moderation states, audit timestamps, and ownership rules.

## 2. Public Knowledge Base

- Import the official French Fifth Republic Constitution as structured data.
- Split constitutional text by title, article, paragraph, amendment history, and source reference.
- Build the article reader with search, anchors, table of contents, copyable links, and stable URLs.
- Add plain-language notes, practical examples, strengths, weaknesses, historical context, and source citations.
- Define an editorial review workflow before accepting external notes.

## 3. Sixth Republic Workshop

- Model a constitution draft as structured articles instead of one large document.
- Add version history for drafts, articles, proposals, comments, reviews, and decisions.
- Implement diff views for article-level changes.
- Design contribution workflows: propose, discuss, amend, review, accept, reject, fork, and merge.
- Add public reasoning records so every accepted change explains why it exists.
- Build a visual history map of drafts, branches, forks, and major decision points.
- Add moderation, rate limiting, anti-spam checks, and restore paths before opening public editing.

## 4. Research And Doctrine

- Turn `public/research.md` into a proper documentation section.
- Organize research by theme: digital democracy, civic tech, deliberation, constitutional drafting, municipal participation, identity, and anti-capture.
- Add bibliographic metadata for each source: title, authors, year, institution, link, and project relevance.
- Write a doctrine page that states the product principles clearly enough to guide feature decisions.

## 5. Municipality Tools

- Define the municipality workspace information architecture: overview, debates, petitions, studies, votes, budgets, assemblies, official answers, and archives.
- Prototype municipality pages such as `/lyon` in public viewer mode first.
- Define verified resident mode separately from visitor mode.
- Model roles: resident, visitor, moderator, municipal staff, mayor assistant, mayor, and auditor.
- Add debate workflows with structured disagreement, evidence links, summaries, and decision follow-up.
- Add petition and proposal workflows with thresholds, status changes, and official response tracking.
- Add participatory budgeting workflows only after proposals, review, and legitimacy rules are clear.

## 6. Identity And Legitimacy

- Define what the platform must prove: municipality residence, uniqueness, eligibility, age if needed, and conflict-of-interest boundaries.
- Explore privacy-preserving identity options, including zero-knowledge proofs, without coupling the first version to one vendor too early.
- Separate identity proof from voting behavior so users can participate without exposing opinions.
- Add audit logs for system actions, moderation actions, vote setup, vote closure, and official responses.
- Define anti-capture protections: rate limits, reputation boundaries, sortition, delegation limits, transparent moderation, and appeal paths.

## 7. Governance And Operations

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
