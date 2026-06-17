with upserted_page as (
  insert into public.research_pages (
    locale,
    slug,
    title,
    description,
    status,
    published_at
  )
  values (
    'en',
    'reading-list',
    'Reading List',
    'A working bibliography for Demos:Cratos research on digital democracy, civic tech, deliberation, constitutional drafting, and municipal participation.',
    'published',
    now()
  )
  on conflict (locale, slug)
  do update set
    title = excluded.title,
    description = excluded.description,
    status = excluded.status,
    published_at = coalesce(public.research_pages.published_at, excluded.published_at)
  returning id
),
cleared_blocks as (
  delete from public.research_blocks
  where page_id = (select id from upserted_page)
)
insert into public.research_blocks (page_id, position, kind, content)
select
  (select id from upserted_page),
  block.position,
  block.kind::public.research_block_kind,
  block.content
from (
  values
    (
      0,
      'paragraph',
      '{"text": "This page starts from the current research notebook and turns its bibliography into editable CMS blocks. It is intentionally a working list, not a finished doctrine."}'::jsonb
    ),
    (
      1,
      'heading',
      '{"text": "Academic And Institutional"}'::jsonb
    ),
    (
      2,
      'source',
      '{"title": "Deliberative Platform Design: The case study of the online discussions in Decidim Barcelona", "url": "https://arxiv.org/abs/1707.06526", "relevance": "Useful for thinking about structured disagreement and discussion mechanics."}'::jsonb
    ),
    (
      3,
      'source',
      '{"title": "Enabling the Digital Democratic Revival: A Research Program for Digital Democracy", "url": "https://arxiv.org/abs/2401.16863", "relevance": "A high-level research roadmap for legitimate digital democracy."}'::jsonb
    ),
    (
      4,
      'source',
      '{"title": "Programmable Participatory Governance", "url": "https://arxiv.org/abs/2605.20261", "relevance": "Close to the long-term architecture question: transparent, accountable, citizen-responsive systems."}'::jsonb
    ),
    (
      5,
      'source',
      '{"title": "OECD Guidelines for Citizen Participation Processes", "url": "https://www.oecd.org/en/publications/2022/09/oecd-guidelines-for-citizen-participation-processes_63b34541.html", "institution": "OECD", "relevance": "Practical guidance on process design, implementation, evaluation, and legitimacy."}'::jsonb
    ),
    (
      6,
      'source',
      '{"title": "OECD Innovative Citizen Participation", "url": "https://www.oecd.org/governance/innovative-citizen-participation/", "institution": "OECD", "relevance": "Reference work on connecting participation to representative institutions."}'::jsonb
    ),
    (
      7,
      'source',
      '{"title": "Dialectical approach to unpacking knowledge-making for digital urban democracy", "url": "https://journals.sagepub.com/doi/10.1177/00420980231175247", "relevance": "Useful for municipal participation and urban democratic process design."}'::jsonb
    ),
    (
      8,
      'source',
      '{"title": "Embedding digital participatory budgeting within local government", "url": "https://arxiv.org/abs/2209.12598", "relevance": "Important for understanding why participatory budgeting is also an administrative problem."}'::jsonb
    ),
    (
      9,
      'source',
      '{"title": "Participatory Budgeting: Models and Approaches", "url": "https://arxiv.org/abs/2003.00606", "relevance": "Useful for voting models, rule design, and budgeting legitimacy."}'::jsonb
    ),
    (
      10,
      'source',
      '{"title": "Designing Digital Voting Systems for Citizens", "url": "https://arxiv.org/abs/2310.03501", "relevance": "Relevant to future voting interfaces and democratic usability."}'::jsonb
    ),
    (
      11,
      'heading',
      '{"text": "Platforms And Initiatives"}'::jsonb
    ),
    (
      12,
      'source',
      '{"title": "Decidim", "url": "https://decidim.org/?lang=en", "relevance": "A major reference for participatory democracy software as civic infrastructure."}'::jsonb
    ),
    (
      13,
      'source',
      '{"title": "Decidim features", "url": "https://decidim.org/features", "relevance": "Reference list for participatory processes, assemblies, initiatives, voting, meetings, surveys, proposals, and follow-up."}'::jsonb
    ),
    (
      14,
      'source',
      '{"title": "Decidim documentation", "url": "https://docs.decidim.org/en/develop/understand/about.html", "relevance": "Useful for studying how a mature civic platform documents concepts and modules."}'::jsonb
    ),
    (
      15,
      'source',
      '{"title": "Metadecidim", "url": "https://meta.decidim.org/", "relevance": "Reference for making the platform itself governable and discussable."}'::jsonb
    ),
    (
      16,
      'source',
      '{"title": "CONSUL Democracy", "url": "https://consuldemocracy.org/", "relevance": "Municipal reference for debates, proposals, voting, and participatory budgeting."}'::jsonb
    ),
    (
      17,
      'source',
      '{"title": "CONSUL use guide", "url": "https://docs.consuldemocracy.org/use_guide", "relevance": "Practical reference for citizen participation workflows."}'::jsonb
    ),
    (
      18,
      'source',
      '{"title": "vTaiwan", "url": "https://www.vtaiwan.tw/", "relevance": "Reference for consensus discovery, expert input, and government response."}'::jsonb
    ),
    (
      19,
      'source',
      '{"title": "Taiwan JOIN platform", "url": "https://join.gov.tw/", "relevance": "Official policy participation portal reference."}'::jsonb
    ),
    (
      20,
      'source',
      '{"title": "Pol.is", "url": "https://pol.is/", "relevance": "Important reference for opinion mapping and cross-group agreement."}'::jsonb
    ),
    (
      21,
      'source',
      '{"title": "Better Reykjavík", "url": "https://www.nesta.org.uk/feature/10-people-centred-smart-city-initiatives/better-reykjavik/", "relevance": "Municipal precedent where popular ideas connect to council consideration."}'::jsonb
    ),
    (
      22,
      'source',
      '{"title": "Your Priorities / Citizens Foundation", "url": "https://www.citizens.is/digital-democracy-home/", "relevance": "Reference for idea collection and prioritisation."}'::jsonb
    ),
    (
      23,
      'source',
      '{"title": "Stanford Participatory Budgeting Platform", "url": "https://pbstanford.org/", "relevance": "Reference for participatory budgeting elections and rule design."}'::jsonb
    ),
    (
      24,
      'source',
      '{"title": "Loomio", "url": "https://www.loomio.com/", "relevance": "Reference for small-group discussions, decisions, outcomes, quorum, and delegation."}'::jsonb
    ),
    (
      25,
      'source',
      '{"title": "LiquidFeedback", "url": "https://liquidfeedback.com/en/open-source.html", "relevance": "Reference for liquid democracy and delegation risks."}'::jsonb
    ),
    (
      26,
      'heading',
      '{"text": "Other Leads"}'::jsonb
    ),
    (
      27,
      'source',
      '{"title": "Video lead", "url": "https://www.youtube.com/watch?v=5NrDXZ78oCU"}'::jsonb
    ),
    (
      28,
      'source',
      '{"title": "Portail Municipal", "url": "https://portail-municipal.fr/"}'::jsonb
    ),
    (
      29,
      'source',
      '{"title": "Elinor Ostrom", "url": "https://fr.wikipedia.org/wiki/Elinor_Ostrom", "relevance": "Governance reference to study further."}'::jsonb
    )
) as block(position, kind, content);
