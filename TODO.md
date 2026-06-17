# TODO

## P0 — Now

- [ ] Merge Research work from other Codex session.
- [ ] Add `/[locale]/research` routes if missing.
- [ ] Replace `/research.md` links with localized Research pages.
- [ ] Seed first doctrine / research pages.
- [ ] Verify Research public read access and admin-only editing.
- [ ] Add success / error feedback to Reader note requests.
- [ ] Let moderators accept, reject, or comment on note requests.
- [ ] Add profile save feedback.
- [ ] Make first login path clearer.
- [ ] Run `pnpm run check` after Research merge.

## Constitution Reader — Done

- [x] Corpus reader.
- [x] Navigation and anchors.
- [x] Supabase with user data, constitutions and notes storage
- [x] User profile with authority level
- [x] Margin notes.
- [x] Note requests.
- [x] Profile note activity.
- [x] Moderator queue.

## Research And Doctrine — In Progress

- [x] Add localized Research routes.
- [x] Add simple admin CMS for research pages and blocks.
- [x] Seed the first Reading List from `public/research.md`.
- [ ] Add Supabase Storage image uploads for image blocks.
- [ ] Write the first doctrine page: what Demos:Cratos believes democracy software should do.
- [ ] Turn the strongest research notes into clean pages over time.
- [ ] Keep English as the first writing language, then add French versions later.
- [ ] Later: add AI-assisted imports for long research reports.

## Constitution Workshop — Next Feature

- [ ] Model drafts as structured articles.
- [ ] Add draft, article, proposal, comment, review, decision tables.
- [ ] Build first workflow: propose, discuss, review, accept / reject.
- [ ] Add article diff view.
- [ ] Record public reasoning for accepted changes.
- [ ] Later: forks, branch maps, visual history.

## Municipal Democracy — Next Feature

- [ ] Build first real municipality page, likely `/lyon`.
- [ ] Define visitor view before verified resident mode.
- [ ] Add municipality, debate, proposal, petition, official response entities.
- [ ] Add debate workflow with evidence links and follow-up status.
- [ ] Add petition thresholds and status changes.
- [ ] Later: participatory budgeting.

## Identity And Legitimacy

- [ ] Merge profile and admin dashboard into one account area.
- [ ] Define account levels: user, on-chain verified user, moderator, admin.
- [ ] Define proof needs: residence, uniqueness, eligibility, age, conflicts.
- [ ] Keep identity proof separate from votes and opinions.
- [ ] Add audit logs for moderation, role changes, votes, official responses.
- [ ] Research privacy-preserving identity and zero-knowledge proofs.

## Governance And Operations

- [ ] Add admin dashboard views inside account area when queues need them.
- [ ] Write maintainer, reviewer, moderator, appeal, and content rules.
- [ ] Add abuse handling: spam, brigading, malicious edits, harassment, takedowns, rollback.
- [ ] Add production monitoring for errors, performance, abuse, suspicious traffic, queues.

## Launch Readiness

- [ ] Add privacy policy, terms, moderation policy, accessibility statement, data retention.
- [ ] Run accessibility review.
- [ ] Add SEO metadata and Open Graph images.
- [ ] Run security review before identity proofs, public submissions, votes, or municipal admin.
- [ ] Define backups, exports, and data portability.

## Whole Website Pass

- [ ] Make full mobile version once core product areas exist.
- [ ] Translate full website when English content stabilizes.
- [ ] Add `EN / FR` switcher when both languages have enough coverage.

## Parking Lot

- [ ] Petition aggregator in introduction.
- [ ] Political compass view.
- [ ] Glossary.
- [ ] Switzerland version.
- [ ] Constitution draft history map.
- [ ] Delegation, sortition, and anti-capture mechanics.
