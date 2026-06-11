# Demos:Cratos Research Notebook

Last updated: 2026-06-08

This document is not the manifesto yet. It is the pile of wood before the fire:
papers, civic platforms, awkward lessons, and design questions that should shape
Demos:Cratos before the product becomes too sure of itself.

The starting intuition is simple enough. France does not lack political talk. It
lacks civic instruments that let normal citizens read power, contest it, rewrite
it, and practice self-government close to where they live. A website cannot fix
that alone. Bad civic software can even make the situation worse by producing
fake participation: comments nobody reads, votes with no consequence, dashboards
that display activity instead of responsibility.

Demos:Cratos should take the opposite path. The software has to make democratic
work slower where slowness matters, clearer where confusion protects power, and
more binding where institutions usually ask citizens for input and then move on.

## Search Terms Worth Keeping

The useful academic vocabulary is not usually "constitutional technology". The
field hides under several names:

- Digital democracy
- Civic tech
- Participatory governance
- Deliberative democracy
- E-participation
- Digital constitutionalism
- Democratic innovations
- Participatory budgeting
- GovTech
- Civic infrastructure
- Computational democracy
- Collective intelligence
- Liquid democracy
- Sortition

These terms point to different tribes. Some researchers study public
administration. Some come from computer science or computational social choice.
Some come from democratic theory and worry, correctly, that participation can
turn into theatre if no institution has to answer.

## The Product Thesis

Demos:Cratos should not start from "more participation is always better." That
sentence sounds democratic, but it is not true.

More participation can mean louder factions, exhausted citizens, captured
procedures, unreadable comment threads, or a mayor using consultation as a
shield. Better democracy starts with a harder question: how do ordinary people
turn disagreement into legitimate decisions without being treated like children?

The project has four working surfaces.

First, a reader for the Fifth Republic Constitution. Citizens need to see the
current machine before proposing a new one. This reader should not be a PDF with
a search box. Each article should become a civic object: text, source, history,
plain-language reading, examples, weak points, institutional consequences.

Second, a Sixth Republic workshop. The original direction here is strong:
treat constitutional drafting like a public codebase. Article changes need
versions, diffs, forks, arguments, review, and visible lineage. A constitution
is not code, but software development has one thing politics often lacks:
disciplined change tracking.

Third, municipal tools. This will become the practical core: debates, petitions,
studies, votes, citizen assemblies, participatory budgeting, resident
verification, and public follow-up. The municipality is the right scale for
repoliticisation because consequences are visible. A bad crosswalk, a closed
library, a housing project, a school budget: these are not abstractions.

Fourth, a governance layer. The platform itself needs rules against capture,
spam, elite domination, fake consensus, and administrative neglect. If the tool
claims to serve democracy, its own procedures need to be inspectable.

## What Existing Projects Already Teach Us

### Decidim

[Decidim](https://decidim.org/?lang=en) is probably the most serious reference
for Demos:Cratos. It came out of Barcelona and describes itself as free software
for participatory democracy. Its official feature set includes participatory
processes, assemblies, initiatives, voting, meetings, surveys, proposals,
comments, and follow-up of results.

The part worth copying is not the interface. It is the idea that civic software
is also an institution. Decidim has software, documentation, community
governance, modules, training, and a political theory around democratic
infrastructure. [Metadecidim](https://meta.decidim.org/) matters here: the tool
used for participation also becomes a place where the tool itself can be
discussed.

The 2017 paper
[Deliberative Platform Design: The case study of the online discussions in Decidim Barcelona](https://arxiv.org/abs/1707.06526)
is useful because it studies discussion mechanics rather than making vague
claims about participation. The researchers found that comments marked as
negative toward a proposal were more likely to generate discussion cascades. For
Demos:Cratos, the lesson is uncomfortable and useful: disagreement should not be
hidden. It should be structured.

Design notes for Demos:Cratos:

- Do not build generic comment threads as the main deliberation tool.
- Let users classify their relation to a proposal: support, oppose, amend,
question, source request.
- Track whether proposals become decisions, rejections, or abandoned work.
- Make public follow-up a first-class feature. Participation without follow-up
teaches citizens that participation is decorative.

### CONSUL Democracy

[CONSUL Democracy](https://consuldemocracy.org/) began in Madrid and provides
free software for citizen participation. Its documentation presents it as a tool
for debates, proposals, voting, participatory budgeting, and collaborative
public decision-making.

CONSUL is useful as a municipal reference because it feels closer to local
administration than to political theory. It asks a plain product question: what
does a city need to let citizens propose, debate, support, and decide?

Design notes:

- Keep the municipality workspace concrete: active proposals, current votes,
meetings, budgets, petitions, studies.
- Separate public visibility from resident rights. Anyone can read Lyon. Only
verified residents should perform certain actions.
- Do not hide administration work. Citizens need to see who answered, when, and
what changed.

### vTaiwan and JOIN

[vTaiwan](https://www.vtaiwan.tw/) is one of the best-known digital democracy
experiments of the last decade. It mixes online participation, expert input,
citizen deliberation, consensus mapping, and government response. Taiwan also
has the official [JOIN platform](https://join.gov.tw/), a public policy
participation portal launched in 2015.

vTaiwan matters because its goal is not raw majority voting. It tries to find
statements that different groups can accept, then move those areas of agreement
into policy discussion. This is much closer to democratic intelligence than a
poll.

Design notes:

- Build for consensus discovery before building for voting.
- Do not ask for a vote when the real need is shared diagnosis.
- Keep expert input visible but not sovereign. Experts should clarify facts,
constraints, and consequences; citizens still own the political question.
- Treat online and offline processes as one process. A town-hall meeting should
not disappear from the digital record.

### Pol.is

[Pol.is](https://pol.is/) is the opinion-mapping tool often associated with
vTaiwan. Its value is that it does not reward the loudest reply. It maps groups
of opinion and highlights statements that gather support across divides.

For Demos:Cratos, Pol.is is more than an inspiration for one feature. It points
to a principle: the platform should search for agreement without erasing
conflict. Those two things are not opposites. In a healthy process, citizens can
see where they disagree, where they misunderstand each other, and where a shared
position exists despite conflict.

Design notes:

- Avoid ranking content only by popularity or recency.
- Show cross-group agreement.
- Make minority positions legible without letting small groups block the whole
process.
- Use clustering carefully; citizens should not feel sorted into boxes by a
machine they cannot question.

### Better Reykjavík and Your Priorities

[Better Reykjavík](https://www.nesta.org.uk/feature/10-people-centred-smart-city-initiatives/better-reykjavik/)
is a strong municipal precedent. Citizens Foundation's
[Your Priorities](https://www.citizens.is/digital-democracy-home/) supplied the
software model behind idea collection and prioritisation.

The interesting part is the city commitment: popular ideas were not just
displayed. The city council had a recurring obligation to consider them. That
small institutional bridge changes the whole meaning of the platform.

Design notes:

- A proposal system needs a response duty. Otherwise it becomes a suggestion
box.
- The municipality page should show the full path: idea, support, review,
answer, implementation, delay, rejection.
- Rejection is acceptable if reasons are public and contestable.

### Stanford Participatory Budgeting Platform

The [Stanford Participatory Budgeting Platform](https://pbstanford.org/) lets
cities and other organizations run participatory budgeting elections. The
research program behind participatory budgeting is useful for Demos:Cratos
because it forces the question of rule design: approval voting, rankings,
points, constraints, project eligibility, ballot design, fairness, and perceived
legitimacy.

Participatory budgeting looks simple from far away: let people vote on spending.
It is not simple. The ballot format changes who feels represented. The project
list changes the outcome. Eligibility rules can include or exclude entire parts
of the city.

Design notes:

- Budget tools need plain explanations of constraints.
- Let people inspect rejected projects and reasons.
- Keep accessibility high; a budgeting vote that only works for already
comfortable digital users is not democratic enough.

### Loomio

[Loomio](https://www.loomio.com/) is more useful for assemblies, associations,
and working groups than for mass municipal participation. It keeps discussions,
decisions, outcomes, quorum, and delegation in one place.

Demos:Cratos may need this layer for citizen groups, review committees, local
assemblies, or constitutional drafting teams. Not every democratic process is a
mass vote. Some work happens in small groups that need records, roles, and
decisions that survive memory.

Design notes:

- Give small groups durable decision records.
- Separate discussion from decision.
- Record who can decide, who can advise, and who can observe.

### LiquidFeedback

[LiquidFeedback](https://liquidfeedback.com/en/open-source.html) is a reference
for liquid democracy and delegation. It matters because Demos:Cratos will
eventually have to answer a difficult question: can citizens delegate attention
without abandoning power?

Delegation can help when people lack time. It can also recreate political
classes inside the platform. That is the danger.

Design notes:

- Delegation should be visible, revocable, scoped, and time-limited.
- Never make delegation the default.
- Show concentration of delegated power.
- Let citizens delegate by topic, not only globally.

## Research Anchors

### Enabling the Digital Democratic Revival

[Enabling the Digital Democratic Revival: A Research Program for Digital Democracy](https://arxiv.org/abs/2401.16863)
is one of the best high-level research roadmaps for this project. It asks
whether digital-democracy technology can support a participatory renewal without
losing democratic legitimacy. The authors argue for a long-term scientific
program combining democratic theory, empirical research, and computational
methods.

For Demos:Cratos, the central lesson is restraint. Digital democracy cannot be a
pile of features. It needs research discipline, feedback from real use, and a
clear idea of what legitimacy means.

Questions to keep:

- What counts as a legitimate outcome?
- Who was missing from the process?
- Did participation change an institution, or only produce input?
- Can citizens audit the rules?

### Programmable Participatory Governance

[Programmable Participatory Governance](https://arxiv.org/abs/2605.20261) is a
recent 2026 thesis proposing a formal architecture for transparent,
accountable, citizen-responsive democratic systems. It connects deliberative and
participatory democracy, institutional economics, direct governance, and
cryptographically verifiable distributed systems.

This is close to the long-term Demos:Cratos vision, especially the municipality
tools with verified residents, audit trails, and possibly zero-knowledge
identity. The warning is equally strong: once the system becomes formal, every
design choice becomes political. A bad verification layer can exclude people. A
bad audit layer can expose people. A bad voting rule can look neutral while
shaping outcomes.

Questions to keep:

- What needs cryptographic verification, and what needs human judgment?
- How can residents prove eligibility without exposing their political behavior?
- Which records must stay public forever, and which should expire?
- Can auditability protect citizens rather than only protect administrators?

### OECD Citizen Participation Work

The [OECD Guidelines for Citizen Participation Processes](https://www.oecd.org/en/publications/2022/09/oecd-guidelines-for-citizen-participation-processes_63b34541.html)
are practical. They cover process design, planning, implementation, evaluation,
and methods such as consultations, open meetings, citizen science, civic
monitoring, participatory budgeting, and representative deliberative processes.

The OECD's work on
[innovative citizen participation](https://www.oecd.org/governance/innovative-citizen-participation/)
also makes a point Demos:Cratos should take seriously: participation works
better when it connects to existing representative institutions instead of
floating beside them. The goal is not to pretend mayors and councils do not
exist. The goal is to force a better relationship between citizens and public
authority.

Design notes:

- Every process needs a mandate before it starts.
- Citizens should know what can change and what cannot.
- Selection methods matter. Civic lotteries and sortition deserve real study.
- Evaluation should be public: who participated, who did not, what changed.

### Digital Urban Democracy and Participatory Budgeting

Research on digital participatory budgeting is useful because it studies actual
municipal friction. Helsinki's OmaStadi, Scottish local councils, Medellín, and
older Brazilian cases all point to the same truth: digital tools can widen
access, but they can also reproduce exclusion if the process depends on time,
confidence, language, paperwork, or administrative familiarity.

The paper
[Embedding digital participatory budgeting within local government](https://arxiv.org/abs/2209.12598)
is useful for Demos:Cratos because it looks at councils trying to make PB fit
inside local government. The problem is not only software. It is motivation,
strategy, staffing, legal procedure, and public trust.

Design notes:

- Do not treat digital access as political access.
- Keep non-digital participation in the record.
- Budget processes need staff workflows, not just citizen screens.
- A good system should reveal administrative bottlenecks instead of hiding them.

## The Four Research Tracks For Demos:Cratos

### Constitution Workspace

Question: how do citizens collaboratively write constitutional text without
turning the document into a chaotic wiki?

Study:

- Constitutional conventions
- Citizens' assemblies
- Version control of legislation
- Argument mapping
- Public legal annotation
- Editorial rights and review rules

Product direction:

- Article-level source control
- Diffs between drafts
- Forks for alternative constitutional models
- Review queues
- Public reasoning attached to every change
- A history graph that shows political evolution, not just file changes

### Municipality Workspace

Question: how do cities collect citizen input and turn it into visible public
work?

Study:

- Decidim
- CONSUL Democracy
- Participatory budgeting
- Better Reykjavík / Your Priorities
- OECD participation guidelines
- Digital urban democracy case studies

Product direction:

- Public municipality pages such as `/lyon`
- Viewer mode for visitors
- Verified resident mode for local rights
- Debates, petitions, studies, votes, and participatory budgets
- Administrative answers with timestamps and responsible offices
- Follow-up pages showing implementation, delay, or rejection

### Consensus Engine

Question: how do groups find agreement without flattening real disagreement?

Study:

- vTaiwan
- Pol.is
- Deliberative democracy
- Collective intelligence
- Consensus conferences
- Argument mapping

Product direction:

- Opinion mapping
- Cross-group agreement detection
- Structured disagreement
- Statement testing before voting
- Human-readable summaries with traceable sources

### Governance Layer

Question: how do we prevent capture?

Study:

- Liquid democracy
- Delegation systems
- Sortition
- Constitutional safeguards
- Civic identity
- Zero-knowledge proofs
- Auditability and privacy

Product direction:

- Scoped delegation
- Public moderation records
- Anti-spam review without opaque censorship
- Resident verification without public political exposure
- Process rules that can be inspected before participation starts

## Early Principles

The platform should not ask citizens to trust it. It should make trust less
necessary.

The current constitution should be readable before the new one is proposed.
People cannot rewrite what they cannot inspect.

Municipal participation should end with an answer. The answer can be yes, no,
not now, illegal, too expensive, already planned, or merged with another
proposal. Silence is the problem.

Voting should come late. Before voting, citizens need shared facts, visible
constraints, competing arguments, and time to see whether a better formulation
exists.

Identity should prove rights, not expose opinions.

The software should remember. Governments often survive citizen anger by waiting
for attention to move elsewhere. Demos:Cratos should keep the receipt.

## A Thesis Worth Stealing From Ourselves

"Git for Democracy: Applying Version Control and Collaborative Software
Development Workflows to Constitutional Drafting and Municipal Deliberation"

There is plenty of work on digital democracy. There is plenty of work on
collaborative software engineering. There is much less work that treats
constitutions, municipal decisions, and public proposals as versioned civic
objects.

That is one of the original directions of Demos:Cratos. A constitution is not a
repository, but a republic needs some of the habits good repositories enforce:
public history, review before merge, named changes, forks when disagreement is
real, and the right to inspect how the current version came to be.

## Reading List

### Academic And Institutional

- [Deliberative Platform Design: The case study of the online discussions in Decidim Barcelona](https://arxiv.org/abs/1707.06526)
- [Enabling the Digital Democratic Revival: A Research Program for Digital Democracy](https://arxiv.org/abs/2401.16863)
- [Programmable Participatory Governance](https://arxiv.org/abs/2605.20261)
- [OECD Guidelines for Citizen Participation Processes](https://www.oecd.org/en/publications/2022/09/oecd-guidelines-for-citizen-participation-processes_63b34541.html)
- [OECD Innovative Citizen Participation](https://www.oecd.org/governance/innovative-citizen-participation/)
- [Dialectical approach to unpacking knowledge-making for digital urban democracy](https://journals.sagepub.com/doi/10.1177/00420980231175247)
- [Embedding digital participatory budgeting within local government](https://arxiv.org/abs/2209.12598)
- [Participatory Budgeting: Models and Approaches](https://arxiv.org/abs/2003.00606)
- [Designing Digital Voting Systems for Citizens](https://arxiv.org/abs/2310.03501)

### Platforms And Initiatives

- [Decidim](https://decidim.org/?lang=en)
- [Decidim features](https://decidim.org/features)
- [Decidim documentation](https://docs.decidim.org/en/develop/understand/about.html)
- [Metadecidim](https://meta.decidim.org/)
- [CONSUL Democracy](https://consuldemocracy.org/)
- [CONSUL use guide](https://docs.consuldemocracy.org/use_guide)
- [vTaiwan](https://www.vtaiwan.tw/)
- [Taiwan JOIN platform](https://join.gov.tw/)
- [Pol.is](https://pol.is/)
- [Better Reykjavík](https://www.nesta.org.uk/feature/10-people-centred-smart-city-initiatives/better-reykjavik/)
- [Your Priorities / Citizens Foundation](https://www.citizens.is/digital-democracy-home/)
- [Stanford Participatory Budgeting Platform](https://pbstanford.org/)
- [Loomio](https://www.loomio.com/)
- [LiquidFeedback](https://liquidfeedback.com/en/open-source.html)

- https://www.youtube.com/watch?v=5NrDXZ78oCU
- https://portail-municipal.fr/
