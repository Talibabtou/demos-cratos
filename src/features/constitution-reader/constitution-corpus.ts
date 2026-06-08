import { constitution1958 } from '@/features/constitution-reader/constitution-1958';

export type ConstitutionNote = { title: string; text: string };
export type ConstitutionArticle = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  notes?: readonly ConstitutionNote[];
};
export type ConstitutionSection = {
  id: string;
  title: string;
  articles: readonly ConstitutionArticle[];
};
export type RevisionGroup = { years: string; title: string; text: string };
export type ConstitutionDocument = {
  id: string;
  year: string;
  shortLabel: string;
  title: string;
  sourceTitle: string;
  regime: string;
  date: string;
  summary: string;
  sourceUrl: string;
  localSourcePath?: string;
  revisionGroups: readonly RevisionGroup[];
  sections: readonly ConstitutionSection[];
  notes: readonly ConstitutionNote[];
};

const historicalConstitutionDocuments = [
  {
    id: 'constitution-de-1791',
    year: '1791',
    shortLabel: '1791',
    title: 'Constitution of 1791',
    sourceTitle: 'Constitution de 1791 - 3 et 4 septembre 1791',
    regime: 'Constitutional monarchy',
    date: '3 and 4 September 1791',
    sourceUrl:
      'https://www.conseil-constitutionnel.fr/les-constitutions-dans-l-histoire/constitution-de-1791',
    localSourcePath: '/constitution-archive/constitution-de-1791.html',
    summary:
      'Constitution of 1791 belongs to the Constitutional monarchy period. The original French text is preserved here as a source document for reading and comparison.',
    revisionGroups: [],
    sections: [
      {
        id: 'opening',
        title: 'Opening text',
        articles: [
          {
            id: 'p-1',
            title: 'Text',
            paragraphs: [
              "L'Assemblée nationale voulant établir la Constitution française sur les principes qu'elle vient de reconnaître et de déclarer, abolit irrévocablement les institutions qui blessaient la liberté et l'égalité des droits.",
              "- Il n'y a plus ni noblesse, ni pairie, ni distinctions héréditaires, ni distinctions d'ordres, ni régime féodal, ni justices patrimoniales, ni aucun des titres, dénominations et prérogatives qui en dérivaient, ni aucun ordre de chevalerie, ni aucune des corporations ou décorations, pour lesquelles on exigeait des preuves de noblesse, ou qui supposaient des distinctions de naissance, ni aucune autre supériorité, que celle des fonctionnaires publics dans l'exercice de leurs fonctions.",
              "- Il n'y a plus ni vénalité, ni hérédité d'aucun office public.",
              "- Il n'y a plus, pour aucune partie de la Nation, ni pour aucun individu, aucun privilège, ni exception au droit commun de tous les Français.",
              "- Il n'y a plus ni jurandes, ni corporations de professions, arts et métiers.",
              '- La loi ne reconnaît plus ni voeux religieux, ni aucun autre engagement qui serait contraire aux droits naturels ou à la Constitution.',
            ],
          },
        ],
      },
      {
        id: 'section-1-titre-premier-dispositions-fondament',
        title:
          'Titre Premier - Dispositions fondamentales garanties par la Constitution',
        articles: [
          {
            id: 'p-7',
            title: 'Text',
            paragraphs: [
              'La Constitution garantit, comme droits naturels et civils :',
              '1 ° Que tous les citoyens sont admissibles aux places et emplois, sans autre distinction que celle des vertus et des talents ;',
              '2 ° Que toutes les contributions seront réparties entre tous les citoyens également en proportion de leurs facultés ;',
              '3 ° Que les mêmes délits seront punis des mêmes peines, sans aucune distinction des personnes.',
              'La Constitution garantit pareillement, comme droits naturels et civils :',
              "- La liberté à tout homme d'aller, de rester, de partir, sans pouvoir être arrêté, ni détenu, que selon les formes déterminées par la Constitution ;",
              "- La liberté à tout homme de parler, d'écrire, d'imprimer et publier ses pensées, sans que les écrits puissent être soumis à aucune censure ni inspection avant leur publication, et d'exercer le culte religieux auquel il est attaché ;",
              "- La liberté aux citoyens de s'assembler paisiblement et sans armes, en satisfaisant aux lois de police ;",
              "- La liberté d'adresser aux autorités constituées des pétitions signées individuellement.",
              "Le Pouvoir législatif ne pourra faire aucunes lois qui portent atteinte et mettent obstacle à l'exercice des droits naturels et civils consignés dans le présent titre, et garantis par la Constitution ; mais comme la liberté ne consiste qu'à pouvoir faire tout ce qui ne nuit ni aux droits d'autrui, ni à la sûreté publique, la loi peut établir des peines contre les actes qui, attaquant ou la sûreté publique ou les droits d'autrui, seraient nuisibles à la société.",
              "La Constitution garantit l'inviolabilité des propriétés ou la juste et préalable indemnité de celles dont la nécessité publique, légalement constatée, exigerait le sacrifice. - Les biens destinés aux dépenses du culte et à tous services d'utilité publique, appartiennent à la Nation, et sont dans tous les temps à sa disposition.",
              'La Constitution garantit les aliénations qui ont été ou qui seront faites suivant les formes établies par la loi.',
              "Les citoyens ont le droit d'élire ou choisir les ministres de leurs cultes.",
              "Il sera créé et organisé un établissement général de Secours publics, pour élever les enfants abandonnés, soulager les pauvres infirmes, et fournir du travail aux pauvres valides qui n'auraient pu s'en procurer.",
              "Il sera créé et organisé une Instruction publique commune à tous les citoyens, gratuite à l'égard des parties d'enseignement indispensables pour tous les hommes et dont les établissements seront distribués graduellement, dans un rapport combiné avec la division du royaume. - Il sera établi des fêtes nationales pour conserver le souvenir de la Révolution française, entretenir la fraternité entre les citoyens, et les attacher à la Constitution, à la Patrie et aux lois.",
              'Il sera fait un Code de lois civiles communes à tout le Royaume.',
            ],
          },
        ],
      },
      {
        id: 'section-2-titre-ii-de-la-division-du-royaume-e',
        title:
          "Titre II - De la division du royaume, et de l'état des citoyens",
        articles: [
          {
            id: 'a-1',
            title: 'Article 1.',
            paragraphs: [
              'Le Royaume est un et indivisible : son territoire est distribué en quatre-vingt-trois départements, chaque département en districts, chaque district en cantons.',
            ],
          },
          {
            id: 'a-2',
            title: 'Article 2.',
            paragraphs: [
              "Sont citoyens français : - Ceux qui sont nés en France d'un père français ; - Ceux qui, nés en France d'un père étranger, ont fixé leur résidence dans le Royaume ; - Ceux qui, nés en pays étranger d'un père français, sont venus s'établir en France et ont prêté le serment civique ; - Enfin ceux qui, nés en pays étranger, et descendant, à quelque degré que ce soit, d'un Français ou d'une Française expatriés pour cause de religion, viennent demeurer en France et prêtent le serment civique.",
            ],
          },
          {
            id: 'a-3',
            title: 'Article 3.',
            paragraphs: [
              "Ceux qui, nés hors du Royaume de parents étrangers, résident en France, deviennent citoyens français, après cinq ans de domicile continu dans le Royaume, s'ils y ont, en outre, acquis des immeubles ou épousé une Française, ou formé un établissement d'agriculture ou de commerce, et s'ils ont prêté le serment civique.",
            ],
          },
          {
            id: 'a-4',
            title: 'Article 4.',
            paragraphs: [
              "Le Pouvoir législatif pourra, pour des considérations importantes, donner à un étranger un acte de naturalisation, sans autres conditions que de fixer son domicile en France et d'y prêter le serment civique.",
            ],
          },
          {
            id: 'a-5',
            title: 'Article 5.',
            paragraphs: [
              "Le serment civique est : Je jure d'être fidèle à la Nation à la loi et au roi et de maintenir de tout mon pouvoir la Constitution du Royaume, décrétée par l'Assemblée nationale constituante aux années 1789, 1790 et 1791.",
            ],
          },
          {
            id: 'a-6',
            title: 'Article 6.',
            paragraphs: [
              "La qualité de citoyen français se perd : 1 ° Par la naturalisation en pays étranger ; 2 ° Par la condamnation aux peines qui emportent la dégradation civique, tant que le condamné n'est pas réhabilité ; 3 ° Par un jugement de contumace, tant que le jugement n'est pas anéanti ; 4 ° Par l'affiliation à tout ordre de chevalerie étranger ou à toute corporation étrangère qui supposerait, soit des preuves de noblesse, soit des distinctions de naissance, ou qui exigerait des voeux religieux.",
            ],
          },
          {
            id: 'a-7',
            title: 'Article 7.',
            paragraphs: [
              'La loi ne considère le mariage que comme contrat civil. - Le Pouvoir législatif établira pour tous les habitants, sans distinction, le mode par lequel les naissances, mariages et décès seront constatés ; et il désignera les officiers publics qui en recevront et conserveront les actes.',
            ],
          },
          {
            id: 'a-8',
            title: 'Article 8.',
            paragraphs: [
              "Les citoyens français considérés sous le rapport des relations locales qui naissent de leurs réunions dans les villes et dans de certains arrondissements du territoire des campagnes, forment les Communes. - Le Pouvoir législatif pourra fixer l'étendue de l'arrondissement de chaque commune.",
            ],
          },
          {
            id: 'a-9',
            title: 'Article 9.',
            paragraphs: [
              "Les citoyens qui composent chaque commune, ont le droit d'élire à temps, suivant les formes déterminées par la loi, ceux d'entre eux qui, sous le titre d'Officiers municipaux, sont chargés de gérer les affaires particulières de la commune. - Il pourra être délégué aux officiers municipaux quelques fonctions relatives à l'intérêt général de l'Etat.",
            ],
          },
          {
            id: 'a-10',
            title: 'Article 10.',
            paragraphs: [
              "Les règles que les officiers municipaux seront tenus de suivre dans l'exercice des fonctions, tant municipales que de celles qui leur auront été déléguées pour l'intérêt général, seront fixées par les lois.",
            ],
          },
        ],
      },
      {
        id: 'section-3-titre-iii-des-pouvoirs-publics',
        title: 'Titre III - Des pouvoirs publics',
        articles: [
          {
            id: 'a-11',
            title: 'Article 1.',
            paragraphs: [
              "La Souveraineté est une, indivisible, inaliénable et imprescriptible. Elle appartient à la Nation ; aucune section du peuple, ni aucun individu, ne peut s'en attribuer l'exercice.",
            ],
          },
          {
            id: 'a-12',
            title: 'Article 2.',
            paragraphs: [
              'La Nation, de qui seule émanent tous les Pouvoirs, ne peut les exercer que par délégation. - La Constitution française est représentative : les représentants sont le Corps législatif et le roi.',
            ],
          },
          {
            id: 'a-13',
            title: 'Article 3.',
            paragraphs: [
              'Le Pouvoir législatif est délégué à une Assemblée nationale composée de représentants temporaires, librement élus par le peuple, pour être exercé par elle, avec la sanction du roi, de la manière qui sera déterminée ci-après.',
            ],
          },
          {
            id: 'a-14',
            title: 'Article 4.',
            paragraphs: [
              'Le Gouvernement est monarchique : le Pouvoir exécutif est délégué au roi, pour être exercé sous son autorité, par des ministres et autres agents responsables, de la manière qui sera déterminée ci-après.',
            ],
          },
          {
            id: 'a-15',
            title: 'Article 5.',
            paragraphs: [
              'Le Pouvoir Judiciaire est délégué à des juges élus à temps par le peuple.',
            ],
          },
        ],
      },
      {
        id: 'section-4-chapitre-premier-de-l-assembl-e-nati',
        title: "Chapitre premier - De l'Assemblée Nationale législative",
        articles: [
          {
            id: 'a-16',
            title: 'Article 1.',
            paragraphs: [
              "L'Assemblée nationale formant le corps législatif est permanente, et n'est composée que d'une Chambre.",
            ],
          },
          {
            id: 'a-17',
            title: 'Article 2.',
            paragraphs: [
              'Elle sera formée tous les deux ans par de nouvelles élections. - Chaque période de deux années formera une législature.',
            ],
          },
          {
            id: 'a-18',
            title: 'Article 3.',
            paragraphs: [
              "Les dispositions de l'article précédent n'auront pas lieu à l'égard du prochain Corps législatif, dont les pouvoirs cesseront le dernier jour d'avril 1793.",
            ],
          },
          {
            id: 'a-19',
            title: 'Article 4.',
            paragraphs: [
              'Le renouvellement du Corps législatif se fera de plein droit.',
            ],
          },
          {
            id: 'a-20',
            title: 'Article 5.',
            paragraphs: [
              'Le Corps législatif ne pourra être dissous par le roi.',
            ],
          },
        ],
      },
      {
        id: 'section-5-section-premi-re-nombre-des-repr-sen',
        title:
          'Section première. - Nombre des représentants. Bases de la représentation.',
        articles: [
          {
            id: 'a-21',
            title: 'Article 1.',
            paragraphs: [
              'Le nombre des représentants au Corps législatif est de sept cent quarante-cinq à raison des quatre-vingt-trois départements dont le Royaume est composé et indépendamment de ceux qui pourraient être accordés aux Colonies.',
            ],
          },
          {
            id: 'a-22',
            title: 'Article 2.',
            paragraphs: [
              'Les représentants seront distribués entre les quatre-vingt-trois départements, selon les trois proportions du territoire, de la population, et de la contribution directe.',
            ],
          },
          {
            id: 'a-23',
            title: 'Article 3.',
            paragraphs: [
              "Des sept cent quarante-cinq représentants, deux cent quarante-sept sont attachés au territoire. - Chaque département en nommera trois, à l'exception du département de Paris, qui n'en nommera qu'un.",
            ],
          },
          {
            id: 'a-24',
            title: 'Article 4.',
            paragraphs: [
              "Deux cent quarante-neuf représentants sont attribués à la population. - La masse totale de la population active du Royaume est divisée en deux cent quarante-neuf parts, et chaque département nomme autant de députés qu'il a de parts de population.",
            ],
          },
          {
            id: 'a-25',
            title: 'Article 5.',
            paragraphs: [
              "Deux cent quarante-neuf représentants sont attachés à la contribution directe. - La somme totale de la contribution directe du Royaume est de même divisée en deux cent quarante-neuf parts, et chaque département nomme autant de députés qu'il paie de parts de contribution.",
            ],
          },
        ],
      },
      {
        id: 'section-6-section-ii-assembl-es-primaires-nomi',
        title: 'Section II. - Assemblées primaires. Nomination des électeurs.',
        articles: [
          {
            id: 'a-26',
            title: 'Article 1.',
            paragraphs: [
              "Pour former l'Assemblée nationale législative, les citoyens actifs se réuniront tous les deux ans en Assemblées primaires dans les villes et dans les cantons. - Les Assemblées primaires se formeront de plein droit le second dimanche de mars, si elles n'ont pas été convoquées plus tôt par les fonctionnaires publics déterminés par la loi.",
            ],
          },
          {
            id: 'a-27',
            title: 'Article 2.',
            paragraphs: [
              "Pour être citoyen actif, il faut : - Être né ou devenu Français ; - Être âgé de vingt-cinq ans accomplis ; - Être domicilié dans la ville ou dans le canton depuis le temps déterminé par la loi ; - Payer, dans un lieu quelconque du Royaume, une contribution directe au moins égale à la valeur de trois journées de travail, et en représenter la quittance ; - N'être pas dans un état de domesticité, c'est-à-dire de serviteur à gages ; - Être inscrit dans la municipalité de son domicile au rôle des gardes nationales ; - Avoir prêté le serment civique.",
            ],
          },
          {
            id: 'a-28',
            title: 'Article 3.',
            paragraphs: [
              'Tous les six ans, le Corps législatif fixera le minimum et le maximum de la valeur de la journée de travail, et les administrateurs des départements en feront la détermination locale pour chaque district.',
            ],
          },
          {
            id: 'a-29',
            title: 'Article 4.',
            paragraphs: [
              "Nul ne pourra exercer les droits de citoyen actif dans plus d'un endroit, ni se faire représenter par un autre.",
            ],
          },
          {
            id: 'a-30',
            title: 'Article 5.',
            paragraphs: [
              "Sont exclus de l'exercice des droits de citoyen actif : - Ceux qui sont en état d'accusation ; - Ceux qui, après avoir été constitués en état de faillite ou d'insolvabilité, prouvé par pièces authentiques, ne rapportent pas un acquit général de leurs créanciers.",
            ],
          },
          {
            id: 'a-31',
            title: 'Article 6.',
            paragraphs: [
              "Les Assemblées primaires nommeront des électeurs en proportion du nombre des citoyens actifs domiciliés dans la ville ou le canton. - Il sera nommé un électeur à raison de cent citoyens actifs présents, ou non, à l'Assemblée. - Il en sera nommé deux depuis cent cinquante et un jusqu'à deux cent cinquante, et ainsi de suite.",
            ],
          },
          {
            id: 'a-32',
            title: 'Article 7.',
            paragraphs: [
              "Nul ne pourra être nommé électeur, s'il ne réunit aux conditions nécessaires pour être citoyen actif, savoir : - Dans les villes au-dessus de six mille âmes, celle d'être propriétaire ou usufruitier d'un bien évalué sur les rôles de contribution à un revenu égal à la valeur locale de deux cents journées de travail, ou d'être locataire d'une habitation évaluée sur les mêmes rôles, à un revenu égal à la valeur de cent cinquante journées de travail ; - Dans les villes au-dessous de six mille âmes, celle d'être propriétaire ou usufruitier d'un bien évalué sur les rôles de contribution à un revenu égal à la valeur locale de cent cinquante journées de travail, ou d'être locataire d'une habitation évaluée sur les mêmes rôles à un revenu égal à la valeur de cent journées de travail ; - Et dans les campagnes, celle d'être propriétaire ou usufruitier d'un bien évalué sur les rôles de contribution à un revenu égal à la valeur locale de cent cinquante journées de travail, ou d'être fermier ou métayer de biens évalués sur les mêmes rôles à la valeur de quatre cents journées de travail ; - A l'égard de ceux qui seront en même temps propriétaires ou usufruitiers d'une part, et locataires, fermiers ou métayers de l'autre, leurs facultés à ces divers titres seront cumulées jusqu'au taux nécessaire pour établir leur éligibilité.",
            ],
          },
        ],
      },
      {
        id: 'section-7-section-iii-assembl-es-lectorales-no',
        title:
          'Section III. - Assemblées électorales. Nomination des représentants.',
        articles: [
          {
            id: 'a-33',
            title: 'Article 1.',
            paragraphs: [
              "Les électeurs nommés en chaque département se réuniront pour élire le nombre des représentants dont la nomination sera attribuée à leur département, et un nombre de suppléants égal au tiers de celui des représentants. - Les Assemblées électorales se formeront de plein droit le dernier dimanche de mars, si elles n'ont pas été convoquées plus tôt par les fonctionnaires publics déterminés par la loi.",
            ],
          },
          {
            id: 'a-34',
            title: 'Article 2.',
            paragraphs: [
              'Les représentants et les suppléants seront élus à la pluralité absolue des suffrages, et ne pourront être choisis que parmi les citoyens actifs du département.',
            ],
          },
          {
            id: 'a-35',
            title: 'Article 3.',
            paragraphs: [
              'Tous les citoyens actifs, quel que soit leur état, profession ou contribution, pourront être élus représentants de la Nation.',
            ],
          },
          {
            id: 'a-36',
            title: 'Article 4.',
            paragraphs: [
              "Seront néanmoins obligés d'opter, les ministres et les autres agents du Pouvoir exécutif révocables à volonté, les commissaires de la Trésorerie nationale, les percepteurs et receveurs des contributions directes, les préposés à la perception et aux régies des contributions indirectes et des domaines nationaux, et ceux qui, sous quelque dénomination que ce soit, sont attachés à des emplois de la maison militaire et civile du roi. - Seront également tenus d'opter les administrateurs, sous-administrateurs, officiers municipaux, et commandants des gardes nationales.",
            ],
          },
          {
            id: 'a-37',
            title: 'Article 5.',
            paragraphs: [
              "L'exercice des fonctions judiciaires sera incompatible avec celles de représentant de la Nation, pendant toute la durée de la législature. - Les juges seront remplacés par leurs suppléants et le roi pourvoira par des brevets de commission au remplacement de ses commissaires auprès des tribunaux.",
            ],
          },
          {
            id: 'a-38',
            title: 'Article 6.',
            paragraphs: [
              "Les membres du Corps législatif pourront être réélus à la législature suivante, et ne pourront l'être ensuite qu'après l'intervalle d'une législature.",
            ],
          },
          {
            id: 'a-39',
            title: 'Article 7.',
            paragraphs: [
              "Les représentants nommés dans les départements, ne seront pas représentants d'un département particulier, mais de la Nation entière, et il ne pourra leur être donné aucun mandat.",
            ],
          },
        ],
      },
      {
        id: 'section-8-section-iv-tenue-et-r-gime-des-assem',
        title:
          'Section IV. - Tenue et régime des Assemblées primaires et électorales.',
        articles: [
          {
            id: 'a-40',
            title: 'Article 1.',
            paragraphs: [
              "Les fonctions des Assemblées primaires et électorales se bornent à élire ; elles se sépareront aussitôt après les élections faites, et ne pourront se former de nouveau que lorsqu'elles seront convoquées, si ce n'est au cas de l'article premier de la Section II et de l'article premier de la Section III ci-dessus.",
            ],
          },
          {
            id: 'a-41',
            title: 'Article 2.',
            paragraphs: [
              "Nul citoyen actif ne peut entrer ni donner son suffrage dans une assemblée, s'il est armé.",
            ],
          },
          {
            id: 'a-42',
            title: 'Article 3.',
            paragraphs: [
              "La force armée ne pourra être introduite dans l'intérieur sans le voeu exprès de l'Assemblée, si ce n'est qu'on y commît des violences ; auquel cas, l'ordre du président suffira pour appeler la force publique.",
            ],
          },
          {
            id: 'a-43',
            title: 'Article 4.',
            paragraphs: [
              "Tous les deux ans, il sera dressé, dans chaque district, des listes, par cantons, des citoyens actifs, et la liste de chaque canton y sera publiée et affichée deux mois avant l'époque de l'Assemblée primaire. - Les réclamations qui pourront avoir lieu, soit pour contester la qualité des citoyens employés sur la liste, soit de la part de ceux qui se prétendront omis injustement, seront portées aux tribunaux pour y être jugées sommairement. - La liste servira de règle pour l'admission des citoyens dans la prochaine Assemblée primaire, en tout ce qui n'aura pas été rectifié par des jugements rendus avant la tenue de l'Assemblée.",
            ],
          },
          {
            id: 'a-44',
            title: 'Article 5.',
            paragraphs: [
              "Les Assemblées électorales ont le droit de vérifier la qualité et les pouvoirs de ceux qui s'y présenteront, et leurs décisions seront exécutées provisoirement, sauf le jugement du Corps législatif lors de la vérification des pouvoirs des députés.",
            ],
          },
          {
            id: 'a-45',
            title: 'Article 6.',
            paragraphs: [
              'Dans aucun cas et sous aucun prétexte, le roi, ni aucun des agents nommés par lui, ne pourront prendre connaissance des questions relatives à la régularité des convocations, à la tenue des Assemblées, à la forme des élections, ni aux droits politiques des citoyens, sans préjudice des fonctions des commissaires du roi dans les cas déterminés par la loi, où les questions relatives aux droits politiques des citoyens doivent être portées dans les tribunaux.',
            ],
          },
        ],
      },
      {
        id: 'section-9-section-v-r-union-des-repr-sentants-',
        title:
          'Section V. - Réunion des représentants en Assemblée nationale législative.',
        articles: [
          {
            id: 'a-46',
            title: 'Article 1.',
            paragraphs: [
              'Les représentants se réuniront le premier lundi du mois de mai, au lieu des séances de la dernière législature.',
            ],
          },
          {
            id: 'a-47',
            title: 'Article 2.',
            paragraphs: [
              "Ils se formeront provisoirement en Assemblée, sous la présidence du doyen d'âge, pour vérifier les pouvoirs des représentants présents.",
            ],
          },
          {
            id: 'a-48',
            title: 'Article 3.',
            paragraphs: [
              "Dès qu'ils seront au nombre de trois cent soixante-treize membres vérifiés, ils se constitueront sous le titre d'Assemblée nationale législative : elle nommera un président, un vice-président et des secrétaires, et commencera l'exercice de ses fonctions.",
            ],
          },
          {
            id: 'a-49',
            title: 'Article 4.',
            paragraphs: [
              "Pendant tout le cours du mois de mai, si le nombre des représentants présents est au-dessous de trois cent soixante-treize, l'Assemblée ne pourra faire aucun acte législatif. - Elle pourra prendre un arrêté pour enjoindre aux membres absents de se rendre à leurs fonctions dans le délai de quinzaine au plus tard, à peine de trois mille livres d'amende, s'ils ne proposent pas une excuse qui soit jugée légitime par l'Assemblée.",
            ],
          },
          {
            id: 'a-50',
            title: 'Article 5.',
            paragraphs: [
              'Au dernier jour de mai, quel que soit le nombre des membres présents, ils se constitueront en Assemblée nationale législative.',
            ],
          },
          {
            id: 'a-51',
            title: 'Article 6.',
            paragraphs: [
              "Les représentants prononceront tous ensemble, au nom du peuple français, le serment de vivre libres ou mourir. - Ils prêteront ensuite individuellement le serment de maintenir de tout leur pouvoir la Constitution du royaume, décrétée par l'Assemblée nationale constituante, aux années 1789, I790 et 1791, de ne rien proposer ni consentir, dans le cours de la Législature, qui puisse y porter atteinte, et d'être en tout fidèles à la Nation, à la loi et au roi.",
            ],
          },
          {
            id: 'a-52',
            title: 'Article 7.',
            paragraphs: [
              "Les représentants de la Nation sont inviolables : ils ne pourront être recherchés, accusés ni jugés en aucun temps pour ce qu'ils auront dit, écrit ou fait dans l'exercice de leurs fonctions de représentants.",
            ],
          },
          {
            id: 'a-53',
            title: 'Article 8.',
            paragraphs: [
              "Ils pourront, pour faits criminels, être saisis en flagrant délit, ou en vertu d'un mandat d'arrêt ; mais il en sera donné avis, sans délai, au Corps législatif ; et la poursuite ne pourra être continuée qu'après que le Corps législatif aura décidé qu'il y a lieu à accusation.",
            ],
          },
        ],
      },
      {
        id: 'section-11-section-premi-re-de-la-royaut-et-du-',
        title: 'Section première. - De la Royauté et du roi.',
        articles: [
          {
            id: 'a-54',
            title: 'Article 1.',
            paragraphs: [
              "- La Royauté est indivisible, et déléguée héréditairement à la race régnante de mâle en mâle, par ordre de primogéniture, à l'exclusion perpétuelle des femmes et de leur descendance. - (Rien n'est préjugé sur l'effet des renonciations, dans la race actuellement régnante.)",
            ],
          },
          {
            id: 'a-55',
            title: 'Article 2.',
            paragraphs: [
              'La personne du roi est inviolable et sacrée ; son seul titre est Roi des Français.',
            ],
          },
          {
            id: 'a-56',
            title: 'Article 3.',
            paragraphs: [
              "Il n'y a point en France d'autorité supérieure à celle de la loi. Le roi ne règne que par elle, et ce n'est qu'au nom de la loi qu'il peut exiger l'obéissance.",
            ],
          },
          {
            id: 'a-57',
            title: 'Article 4.',
            paragraphs: [
              "Le roi, à son avènement au trône, ou dès qu'il aura atteint sa majorité, prêtera à la Nation, en présence du Corps législatif, le serment d'être fidèle à la Nation et à la loi, d'employer tout le pouvoir qui lui est délégué, à maintenir la Constitution décrétée par l'Assemblée nationale constituante, aux années 1789, 1790 et 1791, et à faire exécuter les lois. - Si le Corps législatif n'est pas assemblé, le roi fera publier une proclamation, dans laquelle seront exprimés ce serment et la promesse de le réitérer aussitôt que le Corps législatif sera réuni.",
            ],
          },
          {
            id: 'a-58',
            title: 'Article 5.',
            paragraphs: [
              "Si, un mois après l'invitation du Corps législatif, le roi n'a pas prêté ce serment, ou si, après l'avoir prêté, il le rétracte, il sera censé avoir abdiqué la royauté.",
            ],
          },
          {
            id: 'a-59',
            title: 'Article 6.',
            paragraphs: [
              "Si le roi se met à la tête d'une armée et en dirige les forces contre la Nation, ou s'il ne s'oppose pas par un acte formel à une telle entreprise, qui s'exécuterait en son nom, il sera censé avoir abdiqué la royauté.",
            ],
          },
          {
            id: 'a-60',
            title: 'Article 7.',
            paragraphs: [
              "Si le roi, étant sorti du royaume, n'y rentrait pas après l'invitation qui lui en serait faite par le Corps législatif, et dans le délai qui sera fixé par la proclamation, lequel ne pourra être moindre de deux mois, il serait censé avoir abdiqué la royauté. - Le délai commencera à courir du jour où la proclamation du Corps législatif aura été publiée dans le lieu de ses séances ; et les ministres seront tenus, sous leur responsabilité, de faire tous les actes du Pouvoir exécutif, dont l'exercice sera suspendu dans la main du roi absent.",
            ],
          },
          {
            id: 'a-61',
            title: 'Article 8.',
            paragraphs: [
              "Après l'abdication expresse ou légale, le roi sera dans la classe des citoyens, et pourra être accusé et jugé comme eux pour les actes postérieurs à son abdication.",
            ],
          },
          {
            id: 'a-62',
            title: 'Article 9.',
            paragraphs: [
              "Les biens particuliers que le roi possède à son avènement au trône, sont réunis irrévocablement au domaine de la Nation ; il a la disposition de ceux qu'il acquiert à titre singulier ; s'il n'en a pas disposé, ils sont pareillement réunis à la fin du règne.",
            ],
          },
          {
            id: 'a-63',
            title: 'Article 10.',
            paragraphs: [
              'La Nation pourvoit à la splendeur du trône par une liste civile, dont le Corps législatif déterminera la somme à chaque changement de règne pour toute la durée du règne.',
            ],
          },
          {
            id: 'a-64',
            title: 'Article 11.',
            paragraphs: [
              "Le roi nommera un administrateur de la liste civile, qui exercera les actions judiciaires du roi, et contre lequel toutes les actions à la charge du roi seront dirigées et les jugements prononcés. Les condamnations obtenues par les créanciers de la liste civile, seront exécutoires contre l'administrateur personnellement et sur ses propres biens.",
            ],
          },
          {
            id: 'a-65',
            title: 'Article 12.',
            paragraphs: [
              "Le roi aura, indépendamment de la garde d'honneur qui lui sera fournie par les citoyens gardes nationales du lieu de sa résidence, une garde payée sur les fonds de la liste civile ; elle ne pourra excéder le nombre de douze cents hommes à pied et de six cents hommes à cheval. - Les grades et les règles d'avancement y seront les mêmes que dans les troupes de ligne ; mais ceux qui composeront la garde du roi rouleront pour tous les grades exclusivement sur eux-mêmes, et ne pourront en obtenir aucun dans l'armée de ligne. - Le roi ne pourra choisir les hommes de sa garde que parmi ceux qui sont actuellement en activité de service dans les troupes de ligne, ou parmi les citoyens qui ont fait depuis un an le service de gardes nationales, pourvu qu'ils soient résidents dans le royaume, et qu'ils aient précédemment prêté le serment civique. - La garde du roi ne pourra être commandée ni requise pour aucun autre service public.",
            ],
          },
        ],
      },
      {
        id: 'section-12-section-ii-de-la-r-gence',
        title: 'Section II. - De la Régence.',
        articles: [
          {
            id: 'a-66',
            title: 'Article 1.',
            paragraphs: [
              "Le roi est mineur jusqu'à l'âge de dix-huit ans accomplis ; - et pendant sa minorité, il y a un régent du royaume.",
            ],
          },
          {
            id: 'a-67',
            title: 'Article 2.',
            paragraphs: [
              "La régence appartient au parent du roi, le plus proche en degré, suivant l'ordre de l'hérédité au trône, et âgé de vingt-cinq ans accomplis, pourvu qu'il soit Français et regnicole, qu'il ne soit pas héritier présomptif d'une autre couronne, et qu'il ait précédemment prêté le serment civique. - Les femmes sont exclues de la régence.",
            ],
          },
          {
            id: 'a-68',
            title: 'Article 3.',
            paragraphs: [
              "Si un roi mineur n'avait aucun parent réunissant les qualités ci-dessus exprimées, le régent du royaume sera élu ainsi qu'il va être dit aux articles suivants :",
            ],
          },
          {
            id: 'a-69',
            title: 'Article 4.',
            paragraphs: ['Le Corps législatif ne pourra élire le régent.'],
          },
          {
            id: 'a-70',
            title: 'Article 5.',
            paragraphs: [
              "Les électeurs de chaque district se réumiront au chef-lieu de district, d'après une proclamation qui sera faite dans la première semaine du nouveau règne, par le Corps législatif, s'il est réuni ; et s'il était séparé, le ministre de la justice sera tenu de faire cette proclamation dans la même semaine.",
            ],
          },
          {
            id: 'a-71',
            title: 'Article 6.',
            paragraphs: [
              "Les électeurs nommeront en chaque district, au scrutin individuel, et à la pluralité absolue des suffrages, un citoyen éligible et domicilié dans le district, auquel ils donneront, par le procès-verbal de l'élection, un mandat spécial borné à la seule fonction d'élire le citoyen qu'il jugera en son âme et conscience le plus digne d'être régent du royaume.",
            ],
          },
          {
            id: 'a-72',
            title: 'Article 7.',
            paragraphs: [
              "Les citoyens mandataires nommés dans les districts, seront tenus de se rassembler dans la ville où le Corps législatif tiendra sa séance, le quarantième jour, au plus tard, à partir de celui de l'avènement du roi mineur au trône ; et ils y formeront l'assemblée électorale, qui procédera à la nomination du régent.",
            ],
          },
          {
            id: 'a-73',
            title: 'Article 8.',
            paragraphs: [
              "L'élection du régent sera faite au scrutin individuel, et à la pluralité absolue des suffrages.",
            ],
          },
          {
            id: 'a-74',
            title: 'Article 9.',
            paragraphs: [
              "L'assemblée électorale ne pourra s'occuper que de l'élection, et se séparera aussitôt que l'élection sera terminée ; tout autre acte qu'elle entreprendrait de faire est déclaré inconstitutionnel et de nul effet.",
            ],
          },
          {
            id: 'a-75',
            title: 'Article 10.',
            paragraphs: [
              "L'assemblée électorale fera présenter, par son président, le procès-verbal de l'élection au Corps législatif, qui, après avoir vérifié la régularité de l'élection, la fera publier dans tout le royaume par une proclamation.",
            ],
          },
          {
            id: 'a-76',
            title: 'Article 11.',
            paragraphs: [
              "Le régent exerce, jusqu'à la majorité du roi, toutes les fonctions de la royauté, et n'est pas personnellement responsable des actes de son administration.",
            ],
          },
          {
            id: 'a-77',
            title: 'Article 12.',
            paragraphs: [
              "Le régent ne peut commencer l'exercice de ses fonctions qu'après avoir prêté à la Nation, en présence du Corps législatif, le serment d'être fidèle à la Nation, à la loi et au roi, d'employer tout le pouvoir délégué au roi, et dont l'exercice lui est confié pendant la minorité du roi, à maintenir la Constitution décrétée par l'Assemblée nationale constituante, aux années 1789, 1790 et 1791, et à faire exécuter les lois. - Si le Corps législatif n'est pas assemblé, le régent fera publier une proclamation, dans laquelle seront exprimés ce serment et la promesse de les réitérer aussitôt que le Corps législatif sera réuni.",
            ],
          },
          {
            id: 'a-78',
            title: 'Article 13.',
            paragraphs: [
              "Tant que le régent n'est pas entré en exercice de ses fonctions, la sanction des lois demeure suspendue ; les ministres continuent de faire, sous leur responsabilité, tous les actes du Pouvoir exécutif.",
            ],
          },
          {
            id: 'a-79',
            title: 'Article 14.',
            paragraphs: [
              'Aussitôt que le régent aura prêté le serment, le Corps législatif déterminera son traitement, lequel ne pourra être changé pendant la durée de la régence.',
            ],
          },
          {
            id: 'a-80',
            title: 'Article 15.',
            paragraphs: [
              "Si, à raison de la minorité d'âge du parent appelé à la régence, elle a été dévolue à un parent plus éloigné, ou déférée par élection, le régent qui sera entré en exercice continuera ses fonctions jusqu'à la majorité du roi.",
            ],
          },
          {
            id: 'a-81',
            title: 'Article 16.',
            paragraphs: [
              'La régence du royaume ne confère aucun droit sur la personne du roi mineur.',
            ],
          },
          {
            id: 'a-82',
            title: 'Article 17.',
            paragraphs: [
              "La garde du roi mineur sera confiée à sa mère ; et s'il n'a pas de mère, ou si elle est remariée au temps de l'avènement de son fils au trône, ou si elle se remarie pendant la minorité, la garde sera déférée par le Corps législatif. - Ne peuvent être élus pour la garde du roi mineur, ni le régent et ses descendants, ni les femmes.",
            ],
          },
          {
            id: 'a-83',
            title: 'Article 18.',
            paragraphs: [
              'En cas de démence du roi, notoirement reconnue, légalement constatée, et déclarée par le Corps législatif après trois délibérations successivement prises de mois en mois, il y a lieu à la régence, tant que la démence dure.',
            ],
          },
        ],
      },
      {
        id: 'section-13-section-iii-de-la-famille-du-roi',
        title: 'Section III. - De la famille du roi.',
        articles: [
          {
            id: 'a-84',
            title: 'Article 1.',
            paragraphs: [
              "L'héritier présomptif portera le nom de Prince royal. - Il ne peut sortir du royaume sans un décret du Corps législatif et le consentement du roi. - S'il en est sorti, et si, étant parvenu à l'âge de dix-huit ans, il ne rentre pas en France après avoir été requis par une proclamation du Corps législatif, il est censé avoir abdiqué le droit de succession au trône.",
            ],
          },
          {
            id: 'a-85',
            title: 'Article 2.',
            paragraphs: [
              "Si l'héritier présomptif est mineur, le parent majeur, premier appelé à la régence, est tenu de résider dans le royaume. - Dans le cas où il en serait sorti et n'y rentrerait pas sur la réquisition du Corps législatif, il sera censé avoir abdiqué son droit à la régence.",
            ],
          },
          {
            id: 'a-86',
            title: 'Article 3.',
            paragraphs: [
              "La mère du roi mineur ayant sa garde, ou le gardien élu, s'ils sortent du royaume, sont déchus de la garde. - Si la mère de l'héritier présomptif mineur sortait du royaume, elle ne pourrait, même après son retour, avoir la garde de son fils mineur devenu roi, que par un décret du Corps législatif.",
            ],
          },
          {
            id: 'a-87',
            title: 'Article 4.',
            paragraphs: [
              "Il sera fait une loi pour régler l'éducation du roi mineur, et celle de l'héritier présomptif mineur.",
            ],
          },
          {
            id: 'a-88',
            title: 'Article 5.',
            paragraphs: [
              "Les membres de la famille du roi appelés à la succession éventuelle au trône, jouissent des droits de citoyen actif, mais ne sont éligibles à aucune des places, emplois ou fonctions qui sont à la nomination du peuple. - A l'exception des départements du ministère, ils sont susceptibles des places et emplois à la nomination du roi : néanmoins, ils ne pourront commander en chef aucune armée de terre ou de mer, ni remplir les fonctions d'ambassadeurs, qu'avec le consentement du Corps législatif, accordé sur la proposition du roi.",
            ],
          },
          {
            id: 'a-89',
            title: 'Article 6.',
            paragraphs: [
              "Les membres de la famille du roi, appelés à la succession éventuelle au trône, ajouteront la dénomination de prince français, au nom qui leur aura été donné dans l'acte civil constatant leur naissance et ce nom ne pourra être ni patronymique, ni formé d'aucune des qualifications abolies par la présente Constitution. - La dénomination de prince ne pourra être donnée à aucun autre individu, et n'emportera aucun privilège, ni aucune exception au droit commun de tous les Français.",
            ],
          },
          {
            id: 'a-90',
            title: 'Article 7.',
            paragraphs: [
              'Les actes par lesquels seront légalement constatés les naissances, mariages et décès des princes français, seront présentés au Corps législatif, qui en ordonnera le dépôt dans ses archives.',
            ],
          },
          {
            id: 'a-91',
            title: 'Article 8.',
            paragraphs: [
              "Il ne sera accordé aux membres de la famille du roi aucun apanage réel. - Les fils puînés du roi recevront à l'âge de vingt-cinq ans accomplis, ou lors de leur mariage, une rente apanagère, laquelle sera fixée par le Corps législatif, et finira à l'extinction de leur postérité masculine.",
            ],
          },
        ],
      },
      {
        id: 'section-14-section-iv-des-ministres',
        title: 'Section IV. - Des ministres.',
        articles: [
          {
            id: 'a-92',
            title: 'Article 1.',
            paragraphs: [
              'Au roi seul appartiennent le choix et la révocation des ministres.',
            ],
          },
          {
            id: 'a-93',
            title: 'Article 2.',
            paragraphs: [
              "Les membres de l'Assemblée nationale actuelle et des législatures suivantes, les membres du Tribunal de cassation, et ceux qui serviront dans le haut-juré, ne pourront être promus au ministère, ni recevoir aucunes places, dons, pensions, traitements, ou commissions du Pouvoir exécutif ou de ses agents, pendant la durée de leurs fonctions, ni pendant deux ans après en avoir cessé l'exercice. - Il en sera de même de ceux qui seront seulement inscrits sur la liste du haut-juré, pendant tout le temps que durera leur inscription.",
            ],
          },
          {
            id: 'a-94',
            title: 'Article 3.',
            paragraphs: [
              "Nul ne peut entrer en exercice d'aucun emploi, soit dans les bureaux du ministère, soit dans ceux des régies ou administrations des revenus publics, ni en général d'aucun emploi à la nomination du Pouvoir exécutif, sans prêter le serment civique, ou sans justifier qu'il l'a prêté.",
            ],
          },
          {
            id: 'a-95',
            title: 'Article 4.',
            paragraphs: [
              "Aucun ordre du roi ne pourra être exécuté, s'il n'est signé par lui et contresigné par le ministre ou l'ordonnateur du département.",
            ],
          },
          {
            id: 'a-96',
            title: 'Article 5.',
            paragraphs: [
              'Les ministres sont responsables de tous les délits par eux commis contre la sûreté nationale et la Constitution ; - De tout attentat à la propriété et à la liberté individuelle ; - De toute dissipation des deniers destinés aux dépenses de leur département.',
            ],
          },
          {
            id: 'a-97',
            title: 'Article 6.',
            paragraphs: [
              "En aucun cas, l'ordre du roi, verbal ou par écrit, ne peut soustraire un ministre à la responsabilité.",
            ],
          },
          {
            id: 'a-98',
            title: 'Article 7.',
            paragraphs: [
              "Les ministres sont tenus de présenter chaque année au Corps législatif, à l'ouverture de la session, l'aperçu des dépenses à faire dans leur département, de rendre compte de l'emploi des sommes qui y étaient destinées, et d'indiquer les abus qui auraient pu s'introduire dans les différentes parties du gouvernement.",
            ],
          },
          {
            id: 'a-99',
            title: 'Article 8.',
            paragraphs: [
              'Aucun ministre en place, ou hors de place, ne peut être poursuivi en matière criminelle pour fait de son administration, sans un décret du Corps législatif.',
            ],
          },
        ],
      },
      {
        id: 'section-16-section-premi-re-pouvoirs-et-fonctio',
        title:
          "Section première. - Pouvoirs et fonctions de l'Assemblée nationale législative.",
        articles: [
          {
            id: 'a-100',
            title: 'Article 1.',
            paragraphs: [
              "La Constitution délègue exclusivement au Corps législatif les pouvoirs et fonctions ci-après : 1 ° De proposer et décréter les lois : le roi peut seulement inviter le Corps législatif à prendre un objet en considération ; 2 ° De fixer les dépenses publiques ; 3 ° D'établir les contributions publiques, d'en déterminer la nature, la quotité, la durée et le mode de perception ; 4 ° De faire la répartition de la contribution directe entre les départements du royaume, de surveiller l'emploi de tous les revenus publics, et de s'en faire rendre compte ; 5 ° De décréter la création ou la suppression des offices publics ; 6 ° De déterminer le titre, le poids, l'empreinte et la dénomination des monnaies ; 7 ° De permettre ou de défendre l'introduction des troupes étrangères sur le territoire français, et des forces navales étrangères dans les ports du royaume ; 8 ° De statuer annuellement, après la proposition du roi, sur le nombre d'hommes et de vaisseaux dont les armées de terre et de mer seront composées ; sur la solde et le nombre d'individus de chaque grade ; sur les règles d'admission et d'avancement, les formes de l'enrôlement et du dégagement, la formation des équipages de mer ; sur l'admission des troupes ou des forces navales étrangères au service de France, et sur le traitement des troupes en cas de licenciement ; 9 ° De statuer sur l'administration, et d'ordonner l'aliénation des domaines nationaux ; 10 ° De poursuivre devant la haute Cour nationale la responsabilité des ministres et des agents principaux du Pouvoir exécutif ; - D'accuser et de poursuivre devant la même Cour, ceux qui seront prévenus d'attentat et de complot contre la sûreté générale de l'Etat ou contre la Constitution ; 11 ° D'établir les lois d'après lesquelles les marques d'honneurs ou décorations purement personnelles seront accordées à ceux qui ont rendu des services à l'Etat ; 12 ° Le Corps législatif a seul le droit de décerner les honneurs publics à la mémoire des grands hommes.",
            ],
          },
          {
            id: 'a-101',
            title: 'Article 2.',
            paragraphs: [
              "La guerre ne peut être décidée que par un décret du Corps législatif, rendu sur la proposition formelle et nécessaire du roi, et sanctionné par lui. - Dans le cas d'hostilités imminentes ou commencées, d'un allié à soutenir, ou d'un droit à conserver par la force des armes, le roi en donnera, sans aucun délai, la notification au Corps législatif, et en fera connaître les motifs. Si le Corps législatif est en vacances, le roi le convoquera aussitôt. - Si le Corps législatif décide que la guerre ne doive pas être faite, le roi prendra sur-le-champ des mesures pour faire cesser ou prévenir toutes hostilités, les ministres demeurant responsables des délais. - Si le Corps législatif trouve que les hostilités commencées soient une agression coupable de la part des ministres ou de quelque autre agent du Pouvoir exécutif, l'auteur de l'agression sera poursuivi criminellement. - Pendant tout le cours de la guerre, le Corps législatif peut requérir le roi de négocier la paix ; et le roi est tenu de déférer à cette réquisition. - A l'instant où la guerre cessera, le Corps législatif fixera le délai dans lequel les troupes élevées au-dessus du pied de paix seront congédiées, et l'armée réduite à son état ordinaire.",
            ],
          },
          {
            id: 'a-102',
            title: 'Article 3.',
            paragraphs: [
              "Il appartient au Corps législatif de ratifier les traités de paix, d'alliance et de commerce ; et aucun traité n'aura d'effet que par cette ratification",
            ],
          },
          {
            id: 'a-103',
            title: 'Article 4.',
            paragraphs: [
              "Le Corps législatif a le droit de déterminer le lieu de ses séances, de les continuer autant qu'il le jugera nécessaire, et de s'ajourner. Au commencement de chaque règne, s'il n'est pas réuni, il sera tenu de se rassembler sans délai. - Il a le droit de police dans le lieu de ses séances, et dans l'enceinte extérieure qu'il aura déterminée. - Il a le droit de discipline sur ses membres ; mais il ne peut prononcer de punition plus forte que la censure, les arrêts pour huit jours, ou la prison pour trois jours. - Il a le droit de disposer, pour sa sûreté et pour le maintien du respect qui lui est dû, des forces qui, de son consentement, seront établies dans la ville où il tiendra ses séances.",
            ],
          },
          {
            id: 'a-104',
            title: 'Article 5.',
            paragraphs: [
              "Le Pouvoir exécutif ne peut faire passer ou séjourner aucun corps de troupes de ligne, dans la distance de trente mille toises du Corps législatif ; si ce n'est sur sa réquisition ou avec son autorisation.",
            ],
          },
        ],
      },
      {
        id: 'section-17-section-ii-tenue-des-s-ances-et-form',
        title: 'Section II. - Tenue des séances et forme de délibérer.',
        articles: [
          {
            id: 'a-105',
            title: 'Article 1.',
            paragraphs: [
              'Les délibérations du Corps législatif seront publiques, et les procès-verbaux de ses séances seront imprimés.',
            ],
          },
          {
            id: 'a-106',
            title: 'Article 2.',
            paragraphs: [
              "Le Corps législatif pourra cependant, en toute occasion, se former en Comité général. - Cinquante membres auront le droit de l'exiger. - Pendant la durée du Comité général, les assistants se retireront, le fauteuil du président sera vacant, l'ordre sera maintenu par le vice-président.",
            ],
          },
          {
            id: 'a-107',
            title: 'Article 3.',
            paragraphs: [
              'Aucun acte législatif ne pourra être délibéré et décrété que dans la forme suivante.',
            ],
          },
          {
            id: 'a-108',
            title: 'Article 4.',
            paragraphs: [
              'Il sera fait trois lectures du projet de décret, à trois intervalles, dont chacun ne pourra être moindre de huit jours.',
            ],
          },
          {
            id: 'a-109',
            title: 'Article 5.',
            paragraphs: [
              "La discussion sera ouverte après chaque lecture ; et néanmoins, après la première ou seconde lecture, le Corps législatif pourra déclarer qu'il y a lieu à l'ajournement ou qu'il n'y a pas lieu à délibérer ; dans ce dernier cas le projet de décret pourra être représenté dans la même session. - Tout projet de décret sera imprimé et distribué avant que la seconde lecture puisse en être faite.",
            ],
          },
          {
            id: 'a-110',
            title: 'Article 6.',
            paragraphs: [
              "Après la troisième lecture, le président sera tenu de mettre en délibération, et le Corps législatif décidera s'il se trouve en état de rendre un décret définitif, ou s'il veut renvoyer la décision à un autre temps, pour recueillir de plus amples éclaircissements.",
            ],
          },
          {
            id: 'a-111',
            title: 'Article 7.',
            paragraphs: [
              "Le Corps législatif ne peut délibérer, si la séance n'est composée de deux cents membres au moins, et aucun décret ne sera formé que par la pluralité absolue des suffrages.",
            ],
          },
          {
            id: 'a-112',
            title: 'Article 8.',
            paragraphs: [
              'Tout projet de loi qui, soumis à la discussion, aura été rejeté après la troisième lecture, ne pourra être représenté dans la même session.',
            ],
          },
          {
            id: 'a-113',
            title: 'Article 9.',
            paragraphs: [
              'Le préambule de tout décret définitif énoncera : 1 ° Les dates des séances auxquelles les trois lectures du projet auront été faites ; 2 ° Le décret par lequel il aura été arrêté, après la troisième lecture, de décider définitivement.',
            ],
          },
          {
            id: 'a-114',
            title: 'Article 10.',
            paragraphs: [
              "Le roi refusera sa sanction au décret dont le préambule n'attestera pas l'observation des formes ci-dessus : si quelqu'un de ces décrets était sanctionné, les ministres ne pourront le sceller ni le promulguer, et leur responsabilité à cet égard durera six années.",
            ],
          },
          {
            id: 'a-115',
            title: 'Article 11.',
            paragraphs: [
              'Sont exceptés des dispositions ci-dessus, les décrets reconnus et déclarés urgents par une délibération préalable du Corps législatif ; mais ils peuvent être modifiés ou révoqués dans le cours de la même session. - Le décret par lequel la matière aura été déclarée urgente en énoncera les motifs, et il sera fait mention de ce décret préalable dans le préambule du décret définitif.',
            ],
          },
        ],
      },
      {
        id: 'section-18-section-iii-de-la-sanction-royale',
        title: 'Section III. - De la sanction royale.',
        articles: [
          {
            id: 'a-116',
            title: 'Article 1.',
            paragraphs: [
              'Les décrets du Corps législatif sont présentés au roi, qui peut leur refuser son consentement.',
            ],
          },
          {
            id: 'a-117',
            title: 'Article 2.',
            paragraphs: [
              "Dans le cas où le roi refuse son consentement, ce refus n'est que suspensif. - Lorsque les deux législatures qui suivront celle qui aura présenté le décret, auront successivement représenté le même décret dans les mêmes termes, le roi sera censé avoir donné la sanction.",
            ],
          },
          {
            id: 'a-118',
            title: 'Article 3.',
            paragraphs: [
              'Le consentement du roi est exprimé sur chaque décret par cette formule signée du roi : Le roi consent et fera exécuter. - Le refus suspensif est exprimé par celle-ci : Le roi examinera.',
            ],
          },
          {
            id: 'a-119',
            title: 'Article 4.',
            paragraphs: [
              "Le roi est tenu d'exprimer son consentement ou son refus sur chaque décret, dans les deux mois de la présentation.",
            ],
          },
          {
            id: 'a-120',
            title: 'Article 5.',
            paragraphs: [
              'Tout décret auquel le roi a refusé son consentement, ne peut lui être présenté par la même législature.',
            ],
          },
          {
            id: 'a-121',
            title: 'Article 6.',
            paragraphs: [
              "Les décrets sanctionnés par le roi, et ceux qui lui auront été présentés par trois législatures consécutives, ont force de loi, et portent le nom et l'intitulé de lois.",
            ],
          },
          {
            id: 'a-122',
            title: 'Article 7.',
            paragraphs: [
              "Seront néanmoins exécutés comme lois, sans être sujets à la sanction, les actes du Corps législatif concernant sa constitution en Assemblée délibérante ; - Sa police intérieure, et celle qu'il pourra exercer dans l'enceinte extérieure qu'il aura déterminée ; - La vérification des pouvoirs de ses membres présents ; - Les injonctions aux membres absents ; - La convocation des Assemblées primaires en retard ; - L'exercice de la police constitutionnelle sur les administrateurs et sur les officiers municipaux ; - Les questions soit d'éligibilité, soit de validité des élections. - Ne sont pareillement sujets à la sanction, les actes relatifs à la responsabilité des ministres ni les décrets portant qu'il y a lieu à accusation.",
            ],
          },
          {
            id: 'a-123',
            title: 'Article 8.',
            paragraphs: [
              "Les décrets du Corps législatif concernant l'établissement, la prorogation et la perception des contributions publiques, porteront le nom et l'intitulé de lois. Ils seront promulgués et exécutés sans être sujets à la sanction, si ce n'est pour les dispositions qui établiraient des peines autres que des amendes et contraintes pécuniaires. - Ces décrets ne pourront être rendus qu'après l'observation des formalités prescrites par les articles 4, 5, 6, 7, 8, et 9 de la section II du présent chapitre ; et le Corps législatif ne pourra y insérer aucunes dispositions étrangères à leur objet.",
            ],
          },
        ],
      },
      {
        id: 'section-19-section-iv-relations-du-corps-l-gisl',
        title: 'Section IV. - Relations du Corps législatif avec le roi.',
        articles: [
          {
            id: 'a-124',
            title: 'Article 1.',
            paragraphs: [
              "Lorsque le Corps législatif est définitivement constitué, il envoie au roi une députation pour l'en instruire. Le roi peut chaque année faire l'ouverture de la session, et proposer les objets qu'il croit devoir être pris en considération pendant le cours de cette session, sans néanmoins que cette formalité puisse être considérée comme nécessaire à l'activité du Corps législatif.",
            ],
          },
          {
            id: 'a-125',
            title: 'Article 2.',
            paragraphs: [
              "Lorsque le Corps législatif veut s'ajourner au-delà de quinze jours, il est tenu d'en prévenir le roi par une députation, au moins huit jours d'avance.",
            ],
          },
          {
            id: 'a-126',
            title: 'Article 3.',
            paragraphs: [
              'Huitaine au moins avant la fin de chaque session, le Corps législatif envoie au roi une députation, pour lui annoncer le jour où il se propose de terminer ses séances : le roi peut venir faire la clôture de la session.',
            ],
          },
          {
            id: 'a-127',
            title: 'Article 4.',
            paragraphs: [
              "Si le roi trouve important au bien de l'Etat que la session soit continuée, ou que l'ajournement n'ait pas lieu, ou qu'il n'ait lieu que pour un temps moins long, il peut à cet effet envoyer un message, sur lequel le Corps législatif est tenu de délibérer.",
            ],
          },
          {
            id: 'a-128',
            title: 'Article 5.',
            paragraphs: [
              "Le roi convoquera le Corps législatif, dans l'intervalle de ses sessions, toutes les fois que l'intérêt de l'Etat lui paraîtra l'exiger, ainsi que dans les cas qui auront été prévus et déterminés par le Corps législatif avant de s'ajourner.",
            ],
          },
          {
            id: 'a-129',
            title: 'Article 6.',
            paragraphs: [
              "Toutes les fois que le roi se rendra au lieu des séances du Corps législatif, il sera reçu et reconduit par une députation ; il ne pourra être accompagné dans l'intérieur de la salle que par le prince royal et par les ministres.",
            ],
          },
          {
            id: 'a-130',
            title: 'Article 7.',
            paragraphs: [
              "Dans aucun cas, le président ne pourra faire partie d'une députation.",
            ],
          },
          {
            id: 'a-131',
            title: 'Article 8.',
            paragraphs: [
              "Le Corps législatif cessera d'être corps délibérant, tant que le roi sera présent.",
            ],
          },
          {
            id: 'a-132',
            title: 'Article 9.',
            paragraphs: [
              'Les actes de la correspondance du roi avec le Corps législatif seront toujours contre signés par un ministre.',
            ],
          },
          {
            id: 'a-133',
            title: 'Article 10.',
            paragraphs: [
              "Les ministres du roi auront entrée dans l'Assemblée nationale législative ; ils y auront une place marquée. - Ils seront entendus, toutes les fois qu'ils le demanderont sur les objets relatifs à leur administration, ou lorsqu'ils seront requis de donner des éclaircissements. - Ils seront également entendus sur les objets étrangers à leur administration, quand l'Assemblée nationale leur accordera la parole.",
            ],
          },
        ],
      },
      {
        id: 'section-20-chapitre-iv-de-l-exercice-du-pouvoir',
        title: "Chapitre IV - De l'exercice du pouvoir exécutif",
        articles: [
          {
            id: 'a-134',
            title: 'Article 1.',
            paragraphs: [
              "Le Pouvoir exécutif suprême réside exclusivement dans la main du roi. - Le roi est le chef suprême de l'administration générale du royaume : le soin de veiller au maintien de l'ordre et de la tranquillité publique lui est confiée. - Le roi est le chef suprême de l'armée de terre et de l'armée navale. - Au roi est délégué le soin de veiller à la sûreté extérieure du royaume, d'en maintenir les droits et les possessions.",
            ],
          },
          {
            id: 'a-135',
            title: 'Article 2.',
            paragraphs: [
              "Le roi nomme les ambassadeurs, et les autres agents des négociations politiques. - Il confère le commandement des armées et des flottes, et les grades de maréchal de France et d'amiral. - Il nomme les deux tiers des contre-amiraux, la moitié des lieutenants-généraux, maréchaux de camp, capitaines de vaisseau, et colonels de la gendarmerie nationale. - Il nomme le tiers des colonels et des lieutenants-colonels, et le sixième des lieutenants de vaisseau : - Le tout en se conformant aux lois sur l'avancement. - Il nomme, dans l'administration civile de la marine, les ordonnateurs, les contrôleurs, les trésoriers des arsenaux, les chefs des travaux, sous-chefs des bâtiments civils, la moitié des chefs d'administration et des sous-chefs de constructions. - Il nomme les commissaires auprès des tribunaux. - Il nomme les préposés en chef aux régies des contributions indirectes, et à l'administration des domaines nationaux. - Il surveille la fabrication des monnaies, et nomme les officiers chargés d'exercer cette surveillance dans la commission générale et dans les hôtels des monnaies. - L'effigie du roi est empreinte sur toutes les monnaies du royaume.",
            ],
          },
          {
            id: 'a-136',
            title: 'Article 3.',
            paragraphs: [
              'Le roi fait délivrer les lettres-patentes, brevets et commissions aux fonctionnaires publics ou autres qui doivent en recevoir.',
            ],
          },
          {
            id: 'a-137',
            title: 'Article 4.',
            paragraphs: [
              "Le roi fait dresser la liste des pensions et gratifications, pour être présentée au Corps législatif à chacune de ses sessions, et décrétée, s'il y a lieu.",
            ],
          },
        ],
      },
      {
        id: 'section-21-section-premi-re-de-la-promulgation-',
        title: 'Section première. - De la promulgation des lois.',
        articles: [
          {
            id: 'a-138',
            title: 'Article 1.',
            paragraphs: [
              "Le Pouvoir exécutif est chargé de faire sceller les lois du sceau de l'Etat, et de les faire promulguer. - Il est chargé également de faire promulguer et exécuter les actes du Corps législatif qui n'ont pas besoin de la sanction du roi.",
            ],
          },
          {
            id: 'a-139',
            title: 'Article 2.',
            paragraphs: [
              "Il sera fait deux expéditions originales de chaque loi, toutes deux signées du roi, contre-signées par le ministre de la justice, et scellées du sceau de l'Etat. - L'une restera déposée aux archives du Sceau et l'autre sera remise aux archives du Corps législatif.",
            ],
          },
          {
            id: 'a-140',
            title: 'Article 3.',
            paragraphs: [
              "La promulgation sera ainsi conçue - « N. (le nom du roi) par la grâce de Dieu, et par la loi constitutionnelle de 1'Etat, roi des Français, A tous présents et à venir, Salut. L'Assemblée nationale a décrété, et Nous voulons et ordonnons ce qui suit : » - (La copie littérale du décret sera insérée sans aucun changement.) - « Mandons et ordonnons à tous les corps administratifs et tribunaux, que les présentes ils fassent consigner dans leurs registres, lire, publier et afficher dans leurs départements et ressorts respectifs, et exécuter comme loi du royaume : en foi de quoi nous avons signé ces présentes, auxquelles nous avons fait apposer le sceau de l'Etat. »",
            ],
          },
          {
            id: 'a-141',
            title: 'Article 4.',
            paragraphs: [
              "Si le roi est mineur, les lois, proclamations et autres actes émanés de l'autorité royale, pendant la régence, seront conçus ainsi qu'il suit : - « N. (le nom du régent) régent du royaume, au nom de N. (le nom du roi) par la grâce de Dieu et par la loi constitutionnelle de l'Etat, roi des Français, etc. »",
            ],
          },
          {
            id: 'a-142',
            title: 'Article 5.',
            paragraphs: [
              "Le Pouvoir exécutif est tenu d'envoyer les lois aux corps administratifs et aux tribunaux, de faire certifier cet envoi, et d'en justifier au Corps législatif.",
            ],
          },
          {
            id: 'a-143',
            title: 'Article 6.',
            paragraphs: [
              "Le Pouvoir exécutif ne peut faire aucune loi, même provisoire, mais seulement des proclamations conformes aux lois, pour en ordonner ou en rappeler l'exécution.",
            ],
          },
        ],
      },
      {
        id: 'section-22-section-il-de-l-administration-int-r',
        title: "Section Il. - De l'administration intérieure.",
        articles: [
          {
            id: 'a-144',
            title: 'Article 1.',
            paragraphs: [
              'Il y a dans chaque département une administration supérieure, et dans chaque district une administration subordonnée.',
            ],
          },
          {
            id: 'a-145',
            title: 'Article 2.',
            paragraphs: [
              "Les administrateurs n'ont aucun caractère de représentation. - Ils sont des agents élus à temps par le peuple, pour exercer, sous la surveillance et l'autorité du roi, les fonctions administratives.",
            ],
          },
          {
            id: 'a-146',
            title: 'Article 3.',
            paragraphs: [
              "Ils ne peuvent, ni s'immiscer dans l'exercice du Pouvoir législatif, ou suspendre l'exécution des lois, ni rien entreprendre sur l'ordre judiciaire, ni sur les dispositions ou opérations militaires.",
            ],
          },
          {
            id: 'a-147',
            title: 'Article 4.',
            paragraphs: [
              "Les administrateurs sont essentiellement chargés de répartir les contributions directes, et de surveiller les deniers provenant de toutes les contributions et revenus publics dans leur territoire. - Il appartient au Pouvoir législatif de déterminer les règles et le mode de leurs fonctions, tant sur les objets ci-dessus exprimés, que sur toutes les autres parties de l'administration intérieure.",
            ],
          },
          {
            id: 'a-148',
            title: 'Article 5.',
            paragraphs: [
              "Le roi a le droit d'annuler les actes des administrateurs de département, contraires aux lois ou aux ordres qu'il leur aura adressés. - Il peut, dans le cas d'une désobéissance persévérante, ou s'ils compromettent par leurs actes la sûreté ou la tranquillité publique, les suspendre de leurs fonctions.",
            ],
          },
          {
            id: 'a-149',
            title: 'Article 6.',
            paragraphs: [
              "Les administrateurs de département ont de même le droit d'annuler les actes des sous-administrateurs de district, contraires aux lois ou aux arrêtés des administrateurs de département, ou aux ordres que ces derniers leur auront donnés ou transmis. - Ils peuvent également, dans le cas d'une désobéissance persévérante des sous-administrateurs, ou si ces derniers compromettent par leurs actes la sûreté ou la tranquillité publique, les suspendre de leurs fonctions, à la charge d'en instruire le roi, qui pourra lever ou confirmer la suspension.",
            ],
          },
          {
            id: 'a-150',
            title: 'Article 7.',
            paragraphs: [
              "Le roi peut, lorsque les administrateurs de département n'auront pas usé du pouvoir qui leur est délégué dans l'article ci-dessus, annuler directement les actes des sous-administrateurs, et les suspendre dans les mêmes cas.",
            ],
          },
          {
            id: 'a-151',
            title: 'Article 8.',
            paragraphs: [
              "Toutes les fois que le roi aura prononcé ou confirmé la suspension des administrateurs ou sous-administrateurs, il en instruira le Corps législatif. - Celui-ci pourra ou lever la suspension, ou la confirmer, ou même dissoudre l'administration coupable, et s'il y a lieu, renvoyer tous les administrateurs ou quelques-uns d'eux aux tribunaux criminels, ou porter contre eux le décret d'accusation.",
            ],
          },
        ],
      },
      {
        id: 'section-23-section-iii-des-relations-ext-rieure',
        title: 'Section III. - Des relations extérieures.',
        articles: [
          {
            id: 'a-152',
            title: 'Article 1.',
            paragraphs: [
              "Le roi seul peut entretenir des relations politiques au dehors, conduire les négociations, faire des préparatifs de guerre proportionnés à ceux des Etats voisins, distribuer les forces de terre et de mer ainsi qu'il le jugera convenable, et en régler la direction en cas de guerre.",
            ],
          },
          {
            id: 'a-153',
            title: 'Article 2.',
            paragraphs: [
              'Toute déclaration de guerre sera faite en ces termes : De la part du roi des Français, au nom de la Nation.',
            ],
          },
          {
            id: 'a-154',
            title: 'Article 3.',
            paragraphs: [
              "Il appartient au roi d'arrêter et de signer avec toutes les puissances étrangères, tous les traités de paix, d'alliance et de commerce, et autres conventions qu'il jugera nécessaire au bien de l'Etat, sauf la ratification du Corps législatif.",
            ],
          },
        ],
      },
      {
        id: 'section-24-chapitre-v-du-pouvoir-judiciaire',
        title: 'Chapitre V - Du pouvoir judiciaire',
        articles: [
          {
            id: 'a-155',
            title: 'Article 1.',
            paragraphs: [
              'Le Pouvoir judiciaire ne peut, en aucun cas, être exercé par le Corps législatif ni par le roi.',
            ],
          },
          {
            id: 'a-156',
            title: 'Article 2.',
            paragraphs: [
              "La justice sera rendue gratuitement par des juges élus à temps par le peuple, et institués par des lettres-patentes du roi qui ne pourra les refuser. - Ils ne pourront être, ni destitués que pour forfaiture dûment jugée, ni suspendus que pour une accusation admise. - L'Accusateur public sera nommé par le Peuple.",
            ],
          },
          {
            id: 'a-157',
            title: 'Article 3.',
            paragraphs: [
              "Les tribunaux ne peuvent, ni s'immiscer dans l'exercice du Pouvoir législatif, ou suspendre l'exécution des lois, ni entreprendre sur les fonctions administratives, ou citer devant eux les administrateurs pour raison de leurs fonctions.",
            ],
          },
          {
            id: 'a-158',
            title: 'Article 4.',
            paragraphs: [
              "Les citoyens ne peuvent être distraits des juges que la loi leur assigne, par aucune commission, ni par d'autres attributions et évocations que celles qui sont déterminées par les lois.",
            ],
          },
          {
            id: 'a-159',
            title: 'Article 5.',
            paragraphs: [
              "Le droit des citoyens, de terminer définitivement leurs contestations par la voie de l'arbitrage, ne peut recevoir aucune atteinte par les actes du Pouvoir législatif.",
            ],
          },
          {
            id: 'a-160',
            title: 'Article 6.',
            paragraphs: [
              "Les tribunaux ordinaires ne peuvent recevoir aucune action au civil, sans qu'il leur soit justifié que les parties ont comparu, ou que le demandeur a cité sa partie adverse devant des médiateurs pour parvenir à une conciliation.",
            ],
          },
          {
            id: 'a-161',
            title: 'Article 7.',
            paragraphs: [
              'Il y aura un ou plusieurs juges de paix dans les cantons et dans les villes. Le nombre en sera déterminé par le Pouvoir législatif.',
            ],
          },
          {
            id: 'a-162',
            title: 'Article 8.',
            paragraphs: [
              'Il appartient au Pouvoir législatif de régler le nombre et les arrondissements des tribunaux, et le nombre des juges dont chaque tribunal sera composé.',
            ],
          },
          {
            id: 'a-163',
            title: 'Article 9.',
            paragraphs: [
              "En matière criminelle, nul citoyen ne peut être jugé que sur une accusation reçue par des jurés, ou décrétée par le Corps législatif, dans les cas où il lui appartient de poursuivre l'accusation. - Après l'accusation admise, le fait sera reconnu et déclaré par des jurés. - L'accusé aura la faculté d'en récuser jusqu'à vingt, sans donner des motifs. - Les jurés qui déclareront le fait, ne pourront être au-dessous du nombre de douze. - L'application de la loi sera faite par des juges. - L'instruction sera publique, et l'on ne pourra refuser aux accusés le secours d'un conseil. - Tout homme acquitté par un juré légal, ne peut plus être repris ni accusé à raison du même fait.",
            ],
          },
          {
            id: 'a-164',
            title: 'Article 10.',
            paragraphs: [
              "Nul homme ne peut être saisi que pour être conduit devant l'officier de police ; et nul ne peut être mis en état d'arrestation ou détenu, qu'en vertu d'un mandat des officiers de police, d'une ordonnance de prise de corps d'un tribunal, d'un décret d'accusation du Corps législatif dans le cas où il lui appartient de le prononcer, ou d'un jugement de condamnation à prison ou détention correctionnelle.",
            ],
          },
          {
            id: 'a-165',
            title: 'Article 11.',
            paragraphs: [
              "Tout homme saisi et conduit devant l'officier de police, sera examiné sur-le-champ, ou au plus tard dans les vingt-quatre heures. - S'il résulte de l'examen qu'il n'y a aucun sujet d'inculpation contre lui, il sera remis aussitôt en liberté ; ou s'il y a lieu de l'envoyer à la maison d'arrêt, il y sera conduit dans le plus bref délai, qui, en aucun cas ne pourra excéder trois jours.",
            ],
          },
          {
            id: 'a-166',
            title: 'Article 12.',
            paragraphs: [
              "Nul homme arrêté ne peut être retenu s'il donne caution suffisante, dans tous les cas où la loi permet de rester libre sous cautionnement.",
            ],
          },
          {
            id: 'a-167',
            title: 'Article 13.',
            paragraphs: [
              "Nul homme, dans le cas où sa détention est autorisée par la loi, ne peut être conduit et détenu que dans les lieux légalement et publiquement désignés pour servir de maison d'arrêt, de maison de justice ou de prison.",
            ],
          },
          {
            id: 'a-168',
            title: 'Article 14.',
            paragraphs: [
              "Nul gardien ou geôlier ne peut recevoir ni retenir aucun homme qu'en vertu d'un mandat ou ordonnance de prise de corps, décret d'accusation, ou jugement mentionnés dans l'article 10 ci-dessus, et sans que la transcription en ait été faite sur son registre.",
            ],
          },
          {
            id: 'a-169',
            title: 'Article 15.',
            paragraphs: [
              "Tout gardien ou geôlier est tenu sans qu'aucun ordre puisse l'en dispenser, de représenter la personne du détenu à l'officier civil ayant la police de la maison de détention, toutes les fois qu'il en sera requis par lui. - La représentation de la personne du détenu ne pourra de même être refusée à ses parents et amis, porteurs de l'ordre de l'officier civil, qui sera toujours tenu de l'accorder, à moins que le gardien ou geôlier ne représente une ordonnance du juge, transcrite sur son registre pour tenir l'arrêté au secret.",
            ],
          },
          {
            id: 'a-170',
            title: 'Article 16.',
            paragraphs: [
              "Tout homme, quelle que soit sa place ou son emploi, autre que ceux à qui la loi donne le droit d'arrestation, qui donnera, signera, exécutera ou fera exécuter l'ordre d'arrêter un citoyen, ou quiconque, même dans les cas d'arrestation autorisée par la loi, conduira, recevra ou retiendra un citoyen dans un lieu de détention non publiquement et légalement désigné, et tout gardien ou geôlier qui contreviendra aux dispositions des articles 14 et 15 ci-dessus, seront coupables du crime de détention arbitraire.",
            ],
          },
          {
            id: 'a-171',
            title: 'Article 17.',
            paragraphs: [
              "Nul homme ne peut être recherché ni poursuivi pour raison des écrits qu'il aura fait imprimer ou publier sur quelque matière que ce soit, si ce n'est qu'il ait provoqué à dessein la désobéissance à la loi, l'avilissement des pouvoirs constitués, la résistance à leurs actes, ou quelques-unes des actions déclarées crimes ou délits par la loi. - La censure sur les actes des Pouvoirs constitués est permise ; mais les calomnies volontaires contre la probité des fonctionnaires publics et la droiture de leurs intentions dans l'exercice de leurs fonctions, pourront être poursuivies par ceux qui en sont l'objet. - Les calomnies et injures contre quelques personnes que ce soit relatives aux actions de leur vie privée, seront punies sur leur poursuite.",
            ],
          },
          {
            id: 'a-172',
            title: 'Article 18.',
            paragraphs: [
              "Nul ne peut être jugé, soit par la voie civile, soit par la voie criminelle, pour fait d'écrits imprimés ou publiés, sans qu'il ait été reconnu et déclaré par un juré : 1 ° S'il y a délit dans l'écrit dénoncé ; 2 ° Si la personne poursuivie en est coupable.",
            ],
          },
          {
            id: 'a-173',
            title: 'Article 19.',
            paragraphs: [
              "Il y aura pour tout le royaume un seul tribunal de cassation, établi auprès du Corps législatif. Il aura pour fonctions de prononcer - Sur les demandes en cassation contre les jugements rendus en derniers ressort par les tribunaux ; - Sur les demandes en renvoi d'un tribunal à un autre, pour cause de suspicion légitime ; - Sur les règlements de juges et les prises à partie contre un tribunal entier.",
            ],
          },
          {
            id: 'a-174',
            title: 'Article 20.',
            paragraphs: [
              'En matière de cassation, le tribunal de cassation ne pourra jamais connaître du fond des affaires ; mais après avoir cassé le jugement qui aura été rendu sur une procédure dans laquelle les formes auront été violées, ou qui contiendra une contravention expresse à la loi, il renverra le fond du procès au tribunal qui doit en connaître.',
            ],
          },
          {
            id: 'a-175',
            title: 'Article 21.',
            paragraphs: [
              'Lorsque après deux cassations le jugement du troisième tribunal sera attaqué par les mêmes moyens que les deux premiers, la question ne pourra plus être agitée au tribunal de cassation sans avoir été soumise au Corps législatif, qui portera un décret déclaratoire de la loi, auquel le tribunal de cassation sera tenu de se conformer.',
            ],
          },
          {
            id: 'a-176',
            title: 'Article 22.',
            paragraphs: [
              "Chaque année, le tribunal de cassation sera tenu d'envoyer à la barre du Corps législatif une députation de huit de ses membres, qui lui présenteront l'état des jugements rendus, à côté de chacun desquels seront la notice abrégée de l'affaire et le texte de la loi qui aura déterminé la décision.",
            ],
          },
          {
            id: 'a-177',
            title: 'Article 23.',
            paragraphs: [
              "Une haute Cour nationale, formée des membres du tribunal de cassation et de hauts-jurés, connaîtra des délits des ministres et agents principaux du Pouvoir exécutif, et des crimes qui attaqueront la sûreté générale de l'Etat, lorsque le Corps législatif aura rendu un décret d'accusation. - Elle ne se rassemblera que sur la proclamation du Corps législatif, et à une distance de trente mille toises au moins du lieu où la législature tiendra ses séances.",
            ],
          },
          {
            id: 'a-178',
            title: 'Article 24.',
            paragraphs: [
              "Les expéditions exécutoires des jugements des tribunaux seront conçues ainsi qu'il suit : - « N. (le nom du roi) par la grâce de Dieu et par la loi constitutionnelle de l'Etat, roi des Français. A tous présents et à venir, Salut. Le tribunal de... a rendu le jugement suivant : - (Ici sera copié le jugement dans lequel il sera fait mention du nom des juges.) - Mandons et ordonnons à tous huissiers sur ce requis, de mettre ledit jugement à exécution, à nos commissaires auprès des tribunaux, d'y tenir la main, et à tous commandants et officiers de la force publique, de prêter main-forte, lorsqu'ils en seront légalement requis. En foi de quoi, le présent jugement a été signé par le président du tribunal et par le greffier. »",
            ],
          },
          {
            id: 'a-179',
            title: 'Article 25.',
            paragraphs: [
              "Les fonctions des commissaires du roi auprès des tribunaux, seront de requérir l'observation des lois dans les jugements à rendre, et de faire exécuter les jugements rendus. - Ils ne seront point accusateurs publics mais ils seront entendus sur toutes les accusations, et requerront pendant le cours de l'instruction pour la régularité des formes, et avant le jugement pour l'application de la loi.",
            ],
          },
          {
            id: 'a-180',
            title: 'Article 26.',
            paragraphs: [
              "Les commissaires du roi auprès des tribunaux dénonceront au directeur du juré, soit d'office, soit d'après les ordres qui leur seront donnés par le roi ; - Les attentats contre la liberté individuelle des citoyens, contre la libre circulation des subsistances et autres objets de commerce, et contre la perception des contributions ; - Les délits par lesquels l'exécution des ordres donnés par le roi dans l'exercice des fonctions qui lui sont déléguées, serait troublée ou empêchée ; - Les attentats contre le droit des gens ; - Et les rébellions à l'exécution des jugements et de tous les actes exécutoires émanés des pouvoirs constitués.",
            ],
          },
          {
            id: 'a-181',
            title: 'Article 27.',
            paragraphs: [
              "Le ministre de la justice dénoncera au tribunal de cassation, par la voie du commissaire du roi, et sans préjudice du droit des parties intéressées, les actes par lesquels les juges auraient excédé les bornes de leur pouvoir. - Le tribunal les annulera ; et s'ils donnent lieu à la forfaiture, le fait sera dénoncé au Corps législatif, qui rendra le décret d'accusation, s'il y a lieu, et renverra les prévenus devant la haute Cour nationale.",
            ],
          },
        ],
      },
      {
        id: 'section-25-titre-iv-de-la-force-publique',
        title: 'Titre IV - De la force publique',
        articles: [
          {
            id: 'a-182',
            title: 'Article 1.',
            paragraphs: [
              "La force publique est instituée pour défendre l'Etat contre les ennemis du dehors, et assurer au dedans le maintien de l'ordre et de l'exécution des lois.",
            ],
          },
          {
            id: 'a-183',
            title: 'Article 2.',
            paragraphs: [
              "Elle est composée - De l'armée de terre et de mer ; - De la troupe spécialement destinée au service de l'intérieur ; - Et subsidiairement des citoyens actifs, et de leurs enfants en état de porter les armes, inscrits sur le rôle de la garde nationale.",
            ],
          },
          {
            id: 'a-184',
            title: 'Article 3.',
            paragraphs: [
              "Les gardes nationales ne forment ni un corps militaire, ni une institution dans l'Etat ; ce sont les citoyens eux-mêmes appelés au service de la force publique.",
            ],
          },
          {
            id: 'a-185',
            title: 'Article 4.',
            paragraphs: [
              "Les citoyens ne pourront jamais se former ni agir comme gardes nationales, qu'en vertu d'une réquisition ou d'une autorisation légale.",
            ],
          },
          {
            id: 'a-186',
            title: 'Article 5.',
            paragraphs: [
              "Ils sont soumis en cette qualité, à une organisation déterminée par la loi. - Ils ne peuvent avoir dans tout le royaume qu'une même discipline et un même uniforme. - Les distinctions de grade et la subordination ne subsistent que relativement au service et pendant sa durée.",
            ],
          },
          {
            id: 'a-187',
            title: 'Article 6.',
            paragraphs: [
              "Les officiers sont élus à temps, et ne peuvent être réélus qu'après un intervalle de service comme soldats. - Nul ne commandera la garde nationale de plus d'un district.",
            ],
          },
          {
            id: 'a-188',
            title: 'Article 7.',
            paragraphs: [
              "Toutes les parties de la force publique, employées pour la sûreté de l'Etat contre les ennemis du dehors, agiront sous les ordres du roi.",
            ],
          },
          {
            id: 'a-189',
            title: 'Article 8.',
            paragraphs: [
              "Aucun corps ou détachement de troupes de ligne ne peut agir dans l'intérieur du royaume sans une réquisition légale.",
            ],
          },
          {
            id: 'a-190',
            title: 'Article 9.',
            paragraphs: [
              "Aucun agent de la force publique ne peut entrer dans la maison d'un citoyen, si ce n'est pour l'exécution des mandements de police et de justice, ou dans les cas formellement prévus par la loi.",
            ],
          },
          {
            id: 'a-191',
            title: 'Article 10.',
            paragraphs: [
              "La réquisition de la force publique dans l'intérieur du royaume appartient aux officiers civils, suivant les règles déterminées par le Pouvoir législatif.",
            ],
          },
          {
            id: 'a-192',
            title: 'Article 11.',
            paragraphs: [
              "Si les troubles agitent tout un département, le roi donnera, sous la responsabilité de ses ministres, les ordres nécessaires pour l'exécution des lois et le rétablissement de l'ordre, mais à la charge d'en informer le Corps législatif, s'il est assemblé, et de le convoquer s'il est en vacance.",
            ],
          },
          {
            id: 'a-193',
            title: 'Article 12.',
            paragraphs: [
              'La force publique est essentiellement obéissante ; nul corps armé ne peut délibérer.',
            ],
          },
          {
            id: 'a-194',
            title: 'Article 13.',
            paragraphs: [
              "L'armée de terre et de mer, et la troupe destinée à la sûreté intérieure, sont soumises à des lois particulières, soit pour le maintien de la discipline, soit pour la forme des jugements et la nature des peines en matière de délits militaires.",
            ],
          },
        ],
      },
      {
        id: 'section-26-titre-v-des-contributions-publiques',
        title: 'Titre V - Des contributions publiques',
        articles: [
          {
            id: 'a-195',
            title: 'Article 1.',
            paragraphs: [
              "Les contributions publiques seront délibérées et fixées chaque année par le Corps législatif, et ne pourront subsister au-delà du dernier jour de la session suivante, si elles n'ont pas été expressément renouvelées.",
            ],
          },
          {
            id: 'a-196',
            title: 'Article 2.',
            paragraphs: [
              "Sous aucun prétexte, les fonds nécessaires à l'acquittement de la dette nationale et au paiement de la liste civile, ne pourront être ni refusés ni suspendus. - Le traitement des ministres du culte catholique pensionnés conservés, élus ou nommés en vertu des décrets de l'Assemblée nationale constituante, fait partie de la dette nationale. - Le Corps législatif ne pourra, en aucun cas, charger la Nation du paiement des dettes d'aucun individu.",
            ],
          },
          {
            id: 'a-197',
            title: 'Article 3.',
            paragraphs: [
              "Les comptes détaillés de la dépense des départements ministériels, signés et certifiés par les ministres ou ordonnateurs généraux, seront rendus publics par la voie de l'impression, au commencement des sessions de chaque législature. - Il en sera de même des états de recette des diverses contributions, et de tous les revenus publics. - Les états de ces dépenses et recettes seront distingués suivant leur nature, et exprimeront les sommes touchées et dépensées année par année dans chaque district. - Les dépenses particulières à chaque département, et relatives aux tribunaux, aux corps administratifs et autres établissements, seront également rendues publiques.",
            ],
          },
          {
            id: 'a-198',
            title: 'Article 4.',
            paragraphs: [
              'Les administrateurs de département et sous-administrateurs ne pourront ni établir aucune contribution publique, ni faire aucune répartition au delà du temps et des sommes fixées par le Corps législatif, ni délibérer ou permettre, sans y être autorisés par lui, aucun emprunt local à la charge des citoyens du département.',
            ],
          },
          {
            id: 'a-199',
            title: 'Article 5.',
            paragraphs: [
              'Le Pouvoir exécutif dirige et surveille la perception et le versement des contributions, et donne tous les ordres nécessaires à cet effet.',
            ],
          },
        ],
      },
      {
        id: 'section-27-titre-vi-des-rapports-de-la-nation-f',
        title:
          'Titre VI - Des rapports de la Nation française avec les Nations étrangères',
        articles: [
          {
            id: 'p-23',
            title: 'Text',
            paragraphs: [
              "La Nation française renonce à entreprendre aucune guerre dans la vue de faire des conquêtes, et n'emploiera jamais ses forces contre la liberté d'aucun peuple. - La Constitution n'admet point de droit d'aubaine. - Les étrangers établis ou non en France succèdent à leurs parents étrangers ou Français. - Ils peuvent contracter, acquérir et recevoir des biens situés en France, et en disposer, de même que tout citoyen français, par tous les moyens autorisés par les lois. - Les étrangers qui se trouvent en France sont soumis aux mêmes lois criminelles et de police que les citoyens français, sauf les conventions arrêtées par les Puissances étrangères ; leur personne, leurs biens, leur industrie, leur culte sont également protégés, par la loi.",
            ],
          },
        ],
      },
      {
        id: 'section-28-titre-vii-de-la-r-vision-des-d-crets',
        title: 'Titre VII - De la révision des décrets constitutionnels',
        articles: [
          {
            id: 'a-200',
            title: 'Article 1.',
            paragraphs: [
              "L'Assemblée nationale constituante déclare que la Nation a le droit imprescriptible de changer sa Constitution ; et néanmoins, considérant qu'il est plus conforme à l'intérêt national d'user seulement, par les moyens pris dans la Constitution même, du droit d'en réformer les articles dont l'expérience aurait fait sentir les inconvénients, décrète qu'il y sera procédé par une Assemblée de révision en la forme suivante :",
            ],
          },
          {
            id: 'a-201',
            title: 'Article 2.',
            paragraphs: [
              'Lorsque trois législatures consécutives auront émis un voeu uniforme pour le changement de quelque article constitutionnel, il y aura lieu à la révision demandée.',
            ],
          },
          {
            id: 'a-202',
            title: 'Article 3.',
            paragraphs: [
              "La prochaine législature et la suivante ne pourront proposer la réforme d'aucun article constitutionnel.",
            ],
          },
          {
            id: 'a-203',
            title: 'Article 4.',
            paragraphs: [
              "Des trois législatures qui pourront par la suite proposer quelques changements, les deux premières ne s'occuperont de cet objet que dans les deux derniers mois de leur dernière session, et la troisième à la fin de sa première session annuelle, ou au commencement de la seconde. - Leurs délibérations sur cette matière seront soumises aux mêmes formes que les actes législatifs ; mais les décrets par lesquels elles auront émis leur voeu ne seront pas sujets à la sanction du roi.",
            ],
          },
          {
            id: 'a-204',
            title: 'Article 5.',
            paragraphs: [
              "La quatrième législature, augmentée de deux cent quarante-neuf membres élus en chaque département, par doublement du nombre ordinaire qu'il fournit pour sa population, formera l'Assemblée de révision. - Ces deux cent quarante-neuf membres seront élus après que la nomination des représentants au Corps législatif aura été terminée, et il en sera fait un procès-verbal séparé. - L'Assemblée de révision ne sera composée que d'une chambre.",
            ],
          },
          {
            id: 'a-205',
            title: 'Article 6.',
            paragraphs: [
              "Les membres de la troisième législature qui aura demandé le changement, ne pourront être élus à l'Assemblée de révision.",
            ],
          },
          {
            id: 'a-206',
            title: 'Article 7.',
            paragraphs: [
              "Les membres de l'Assemblée de révision, après avoir prononcé tous ensemble le serment de vivre libres ou mourir, prêteront individuellement celui de se borner à statuer sur les objets qui leur auront été soumis par le voeu uniforme des trois législatures précédentes ; de maintenir, au surplus, de tout leur pouvoir la Constitution du royaume, décrétée par l'Assemblée nationale constituante, aux années 1789, 1790 et 1791, et d'être en tout fidèles à la Nation, à la loi et au roi.",
            ],
          },
          {
            id: 'a-207',
            title: 'Article 8.',
            paragraphs: [
              "L'Assemblée de révision sera tenue de s'occuper ensuite, et sans délai, des objets qui auront été soumis à son examen : aussitôt que son travail sera terminé, les deux cent quarante-neuf membres nommés en augmentation, se retireront sans pouvoir prendre part, en aucun cas, aux actes législatifs. Les colonies et possessions françaises dans l'Asie, l'Afrique et l'Amérique, quoiqu'elles fassent partie de l'Empire français, ne sont pas comprises dans la présente Constitution.",
              "Aucun des pouvoirs institués par la Constitution n'a le droit de la changer dans son ensemble ni dans ses parties, sauf les réformes qui pourront y être faites par la voie de la révision, conformément aux dispositions du titre VII ci-dessus.",
              "L'Assemblée nationale constituante en remet le dépôt à la fidélité du Corps législatif, du roi et des juges, à la vigilance des pères de famille, aux épouses et aux mères, à l'affection des jeunes citoyens, au courage de tous les Français.",
              "Les décrets rendus par l'Assemblée nationale constituante, qui ne sont pas compris dans l'Acte de Constitution, seront exécutés comme lois ; et les lois antérieures auxquelles elle n'a pas dérogé, seront également observées, tant que les uns ou les autres n'auront pas été révoqués ou modifiés par le Pouvoir législatif.",
              "L'Assemblée nationale, ayant entendu la lecture de l'Acte constitutionnel ci-dessus, et après l'avoir approuvé, déclare que la Constitution est terminée, et qu'elle ne peut y rien changer. - Il sera nommé à l'instant une députation de soixante membres pour offrir, dans le jour, l'Acte constitutionnel au roi.",
              "Inscription aux lettres d'information",
              "Abonnez vous à l'actualité du contentieux pour rester informé(e) des dernières saisines et décisions, ainsi qu'à Titre VII, la revue numérique et gratuite du Conseil constitutionnel.",
            ],
          },
        ],
      },
      {
        id: 'section-29-actualit-s',
        title: 'Actualités',
        articles: [
          {
            id: 'p-30',
            title: 'Text',
            paragraphs: ['Toutes les actualités', 'Agenda', 'Publications'],
          },
        ],
      },
      {
        id: 'section-30-les-d-cisions',
        title: 'Les décisions',
        articles: [
          {
            id: 'p-33',
            title: 'Text',
            paragraphs: [
              'Toutes les décisions',
              'QPC 360°',
              'Assister à une audience',
            ],
          },
        ],
      },
      {
        id: 'section-31-espace-presse',
        title: 'Espace presse',
        articles: [
          {
            id: 'p-36',
            title: 'Text',
            paragraphs: [
              'Communiqués',
              'Ressources',
              'Espace photo',
              'Accréditation',
            ],
          },
        ],
      },
      {
        id: 'section-32-mentions-l-gales',
        title: 'Mentions légales',
        articles: [
          {
            id: 'p-40',
            title: 'Text',
            paragraphs: [
              'Informations légales',
              'Précisions sur les informations à portée juridique',
              'Gestion des cookies',
            ],
          },
        ],
      },
      {
        id: 'section-33-le-conseil',
        title: 'Le Conseil',
        articles: [
          {
            id: 'p-43',
            title: 'Text',
            paragraphs: [
              'Recrutement',
              'Contacts',
              'Données ouvertes (open data)',
            ],
          },
        ],
      },
      {
        id: 'section-34-faq',
        title: 'FAQ',
        articles: [
          {
            id: 'p-46',
            title: 'Text',
            paragraphs: [
              'Guide du site internet',
              'Plan du site',
              'Accessibilité',
              'Application',
              'lien_bluesky',
              'lien_twitter',
              'lien_facebook',
              'lien_linkedin',
              'lien_dailymotion',
              'Flux RSS',
            ],
          },
        ],
      },
    ],
    notes: [
      {
        title: 'Reading context',
        text: 'This text comes from the Conseil constitutionnel historical archive. Notes here should help readers compare institutions, rights, and revision rules across French constitutional history.',
      },
    ],
  },
  {
    id: 'constitution-du-24-juin-1793',
    year: '1793',
    shortLabel: '1793',
    title: 'Constitution of Year I',
    sourceTitle: "Constitution de l'An I - Première République - 24 juin 1793",
    regime: 'First Republic',
    date: '24 June 1793',
    sourceUrl:
      'https://www.conseil-constitutionnel.fr/les-constitutions-dans-l-histoire/constitution-du-24-juin-1793',
    localSourcePath: '/constitution-archive/constitution-du-24-juin-1793.html',
    summary:
      'Constitution of Year I belongs to the First Republic period. The original French text is preserved here as a source document for reading and comparison.',
    revisionGroups: [],
    sections: [
      {
        id: 'section-1-d-cret-du-21-septembre-1792',
        title: 'Décret du 21 septembre 1792',
        articles: [
          {
            id: 'p-1',
            title: 'Text',
            paragraphs: [
              'La Convention nationale déclare :',
              "1 ° Qu'il ne peut y avoir de Constitution que celle qui est acceptée par le Peuple ;",
              '2 ° Que les personnes et les propriétés sont sous la sauvegarde de la Nation.',
            ],
          },
        ],
      },
      {
        id: 'section-2-d-cret-des-21-22-septembre-1792',
        title: 'Décret des 21-22 septembre 1792',
        articles: [
          {
            id: 'p-4',
            title: 'Text',
            paragraphs: [
              "La Convention nationale décrète à l'unanimité que la royauté est abolie en France.",
            ],
          },
        ],
      },
      {
        id: 'section-3-d-claration-du-25-septembre-1792',
        title: 'Déclaration du 25 septembre 1792',
        articles: [
          {
            id: 'p-5',
            title: 'Text',
            paragraphs: [
              'La Convention nationale déclare que la République française est une et indivisible.',
            ],
          },
        ],
      },
      {
        id: 'section-5-d-claration-des-droits-de-l-homme-et',
        title: "Déclaration des Droits de l'Homme et du Citoyen",
        articles: [
          {
            id: 'p-6',
            title: 'Text',
            paragraphs: [
              "Le peuple français, convaincu que l'oubli et le mépris des droits naturels de l'homme, sont les seules causes des malheurs du monde, a résolu d'exposer dans une déclaration solennelle, ces droits sacrés et inaliénables, afin que tous les citoyens pouvant comparer sans cesse les actes du gouvernement avec le but de toute institution sociale, ne se laissent jamais opprimer, avilir par la tyrannie ; afin que le peuple ait toujours devant les yeux les bases de sa liberté et de son bonheur ; le magistrat la règle de ses devoirs ; le législateur l'objet de sa mission. En conséquence, il proclame, en présence de l'Etre suprême, la déclaration suivante des droits de l'homme et du citoyen.",
            ],
          },
          {
            id: 'a-1',
            title: 'Article 1.',
            paragraphs: [
              "Le but de la société est le bonheur commun. Le gouvernement est institué pour garantir à l'homme la jouissance de ses droits naturels et imprescriptibles.",
            ],
          },
          {
            id: 'a-2',
            title: 'Article 2.',
            paragraphs: [
              "Ces droits sont l'égalité, la liberté, la sûreté, la propriété.",
            ],
          },
          {
            id: 'a-3',
            title: 'Article 3.',
            paragraphs: [
              'Tous les hommes sont égaux par la nature et devant la loi.',
            ],
          },
          {
            id: 'a-4',
            title: 'Article 4.',
            paragraphs: [
              "La loi est l'expression libre et solennelle de la volonté générale ; elle est la même pour tous, soit qu'elle protège, soit qu'elle punisse ; elle ne peut ordonner que ce qui est juste et utile à la société ; elle ne peut défendre que ce qui lui est nuisible.",
            ],
          },
          {
            id: 'a-5',
            title: 'Article 5.',
            paragraphs: [
              "Tous les citoyens sont également admissibles aux emplois publics. Les peuples libres ne connaissent d'autres motifs de préférence, dans leurs élections, que les vertus et les talents.",
            ],
          },
          {
            id: 'a-6',
            title: 'Article 6.',
            paragraphs: [
              "La liberté est le pouvoir qui appartient à l'homme de faire tout ce qui ne nuit pas aux droits d'autrui : elle a pour principe la nature ; pour règle la justice ; pour sauvegarde la loi ; sa limite morale est dans cette maxime : Ne fais pas à un autre ce que tu ne veux pas qu'il te soit fait.",
            ],
          },
          {
            id: 'a-7',
            title: 'Article 7.',
            paragraphs: [
              "Le droit de manifester sa pensée et ses opinions, soit par la voie de la presse, soit de toute autre manière, le droit de s'assembler paisiblement, le libre exercice des cultes, ne peuvent être interdits. - La nécessité d'énoncer ces droits suppose ou la présence ou le souvenir récent du despotisme.",
            ],
          },
          {
            id: 'a-8',
            title: 'Article 8.',
            paragraphs: [
              'La sûreté consiste dans la protection accordée par la société à chacun de ses membres pour la conservation de sa personne, de ses droits et de ses propriétés.',
            ],
          },
          {
            id: 'a-9',
            title: 'Article 9.',
            paragraphs: [
              "La loi doit protéger la liberté publique et individuelle contre l'oppression de ceux qui gouvernent.",
            ],
          },
          {
            id: 'a-10',
            title: 'Article 10.',
            paragraphs: [
              "Nul ne doit être accusé, arrêté ni détenu, que dans les cas déterminés par la loi et selon les formes qu'elle a prescrites. Tout citoyen, appelé ou saisi par l'autorité de la loi, doit obéir à l'instant ; il se rend coupable par la résistance.",
            ],
          },
          {
            id: 'a-11',
            title: 'Article 11.',
            paragraphs: [
              "Tout acte exercé contre un homme hors des cas et sans les formes que la loi détermine, est arbitraire et tyrannique ; celui contre lequel on voudrait l'exécuter par la violence a le droit de le repousser par la force.",
            ],
          },
          {
            id: 'a-12',
            title: 'Article 12.',
            paragraphs: [
              'Ceux qui solliciteraient, expédieraient, signeraient, exécuteraient ou feraient exécuter des actes arbitraires, seraient coupables, et doivent être punis.',
            ],
          },
          {
            id: 'a-13',
            title: 'Article 13.',
            paragraphs: [
              "Tout homme étant présumé innocent jusqu'à ce qu'il ait été déclaré coupable, s'il est jugé indispensable de l'arrêter, toute rigueur qui ne serait pas nécessaire pour s'assurer de sa personne doit être sévèrement réprimée par la loi.",
            ],
          },
          {
            id: 'a-14',
            title: 'Article 14.',
            paragraphs: [
              "Nul ne doit être jugé et puni qu'après avoir été entendu ou légalement appelé, et qu'en vertu d'une loi promulguée antérieurement au délit. La loi qui punirait les délits commis avant qu'elle existât serait une tyrannie ; l'effet rétroactif donné à la loi serait un crime.",
            ],
          },
          {
            id: 'a-15',
            title: 'Article 15.',
            paragraphs: [
              'La loi ne doit décerner que des peines strictement et évidemment nécessaires : les peines doivent être proportionnées au délit et utiles à la société.',
            ],
          },
          {
            id: 'a-16',
            title: 'Article 16.',
            paragraphs: [
              'Le droit de propriété est celui qui appartient à tout citoyen de jouir et de disposer à son gré de ses biens, de ses revenus, du fruit de son travail et de son industrie.',
            ],
          },
          {
            id: 'a-17',
            title: 'Article 17.',
            paragraphs: [
              "Nul genre de travail, de culture, de commerce, ne peut être interdit à l'industrie des citoyens.",
            ],
          },
          {
            id: 'a-18',
            title: 'Article 18.',
            paragraphs: [
              "Tout homme peut engager ses services, son temps ; mais il ne peut se vendre, ni être vendu ; sa personne n'est pas une propriété aliénable. La loi ne reconnaît point de domesticité ; il ne peut exister qu'un engagement de soins et de reconnaissance, entre l'homme qui travaille et celui qui l'emploie.",
            ],
          },
          {
            id: 'a-19',
            title: 'Article 19.',
            paragraphs: [
              "Nul ne peut être privé de la moindre portion de sa propriété sans son consentement, si ce n'est lorsque la nécessité publique légalement constatée l'exige, et sous la condition d'une juste et préalable indemnité.",
            ],
          },
          {
            id: 'a-20',
            title: 'Article 20.',
            paragraphs: [
              "Nulle contribution ne peut être établie que pour l'utilité générale. Tous les citoyens ont le droit de concourir à l'établissement des contributions, d'en surveiller l'emploi, et de s'en faire rendre compte.",
            ],
          },
          {
            id: 'a-21',
            title: 'Article 21.',
            paragraphs: [
              "Les secours publics sont une dette sacrée. La société doit la subsistance aux citoyens malheureux, soit en leur procurant du travail, soit en assurant les moyens d'exister à ceux qui sont hors d'état de travailler.",
            ],
          },
          {
            id: 'a-22',
            title: 'Article 22.',
            paragraphs: [
              "L'instruction est le besoin de tous. La société doit favoriser de tout son pouvoir les progrès de la raison publique, et mettre l'instruction à la portée de tous les citoyens.",
            ],
          },
          {
            id: 'a-23',
            title: 'Article 23.',
            paragraphs: [
              "La garantie sociale consiste dans l'action de tous, pour assurer à chacun la jouissance et la conservation de ses droits ; cette garantie repose sur la souveraineté nationale.",
            ],
          },
          {
            id: 'a-24',
            title: 'Article 24.',
            paragraphs: [
              "Elle ne peut exister, si les limites des fonctions publiques ne sont pas clairement déterminées par la loi, et si la responsabilité de tous les fonctionnaires n'est pas assurée.",
            ],
          },
          {
            id: 'a-25',
            title: 'Article 25.',
            paragraphs: [
              'La souveraineté réside dans le peuple ; elle est une et indivisible, imprescriptible et inaliénable.',
            ],
          },
          {
            id: 'a-26',
            title: 'Article 26.',
            paragraphs: [
              "Aucune portion du peuple ne peut exercer la puissance du peuple entier ; mais chaque section du souverain assemblée doit jouir du droit d'exprimer sa volonté avec une entière liberté.",
            ],
          },
          {
            id: 'a-27',
            title: 'Article 27.',
            paragraphs: [
              "Que tout individu qui usurperait la souveraineté soit à l'instant mis à mort par les hommes libres.",
            ],
          },
          {
            id: 'a-28',
            title: 'Article 28.',
            paragraphs: [
              'Un peuple a toujours le droit de revoir, de réformer et de changer sa Constitution. Une génération ne peut assujettir à ses lois les générations futures.',
            ],
          },
          {
            id: 'a-29',
            title: 'Article 29.',
            paragraphs: [
              'Chaque citoyen a un droit égal de concourir à la formation de la loi et à la nomination de ses mandataires ou de ses agents.',
            ],
          },
          {
            id: 'a-30',
            title: 'Article 30.',
            paragraphs: [
              'Les fonctions publiques sont essentiellement temporaires ; elles ne peuvent être considérées comme des distinctions ni comme des récompenses, mais comme des devoirs.',
            ],
          },
          {
            id: 'a-31',
            title: 'Article 3',
            paragraphs: [
              "1. - Les délits des mandataires du peuple et de ses agents ne doivent jamais être impunis. Nul n'a le droit de se prétendre plus inviolable que les autres citoyens.",
            ],
          },
          {
            id: 'a-32',
            title: 'Article 32.',
            paragraphs: [
              "Le droit de présenter des pétitions aux dépositaires de l'autorité publique ne peut, en aucun cas, être interdit, suspendu ni limité.",
            ],
          },
          {
            id: 'a-33',
            title: 'Article 33.',
            paragraphs: [
              "La résistance à l'oppression est la conséquence des autres Droits de l'homme.",
            ],
          },
          {
            id: 'a-34',
            title: 'Article 34.',
            paragraphs: [
              "Il y a oppression contre le corps social lorsqu'un seul de ses membres est opprimé.Il y a oppression contre chaque membre lorsque le corps social est opprimé.",
            ],
          },
          {
            id: 'a-35',
            title: 'Article 35.',
            paragraphs: [
              "Quand le gouvernement viole les droits du peuple, l'insurrection est, pour le peuple et pour chaque portion du peuple, le plus sacré des droits et le plus indispensable des devoirs.",
            ],
          },
        ],
      },
      {
        id: 'section-7-de-la-r-publique',
        title: 'De la République',
        articles: [
          {
            id: 'a-36',
            title: 'Article 1.',
            paragraphs: ['La République française est une et indivisible.'],
          },
        ],
      },
      {
        id: 'section-8-de-la-distribution-du-peuple',
        title: 'De la distribution du peuple',
        articles: [
          {
            id: 'a-37',
            title: 'Article 2.',
            paragraphs: [
              "Le peuple français est distribué, pour l'exercice de sa souveraineté, en Assemblées primaires de canton.",
            ],
          },
          {
            id: 'a-38',
            title: 'Article 3.',
            paragraphs: [
              "Il est distribué, pour l'administration et pour la justice, en départements, districts, municipalités.",
            ],
          },
        ],
      },
      {
        id: 'section-9-de-l-tat-des-citoyens',
        title: "De l'état des citoyens",
        articles: [
          {
            id: 'a-39',
            title: 'Article 4.',
            paragraphs: [
              "Tout homme né et domicilié en France, âgé de vingt et un ans accomplis ; - Tout étranger âgé de vingt et un ans accomplis, qui, domicilié en France depuis une année - Y vit de son travail - Ou acquiert une propriété - Ou épouse une Française - Ou adopte un enfant - Ou nourrit un vieillard ; - Tout étranger enfin, qui sera jugé par le Corps législatif avoir bien mérité de l'humanité - Est admis à l'exercice des Droits de citoyen français.",
            ],
          },
          {
            id: 'a-40',
            title: 'Article 5.',
            paragraphs: [
              "L'exercice des Droits de citoyen se perd - Par la naturalisation en pays étranger - Par l'acceptation de fonctions ou faveurs émanées d'un gouvernement non populaire ; -Par la condamnation à des peines infamantes ou afflictives, jusqu'à réhabilitation.",
            ],
          },
          {
            id: 'a-41',
            title: 'Article 6.',
            paragraphs: [
              "L'exercice des Droits de citoyen est suspendu - Par l'état d'accusation ; - Par un jugement de contumace, tant que le jugement n'est pas anéanti.",
            ],
          },
        ],
      },
      {
        id: 'section-10-de-la-souverainet-du-peuple',
        title: 'De la souveraineté du peuple',
        articles: [
          {
            id: 'a-42',
            title: 'Article 7.',
            paragraphs: [
              "Le peuple souverain est l'universalité des citoyens français.",
            ],
          },
          {
            id: 'a-43',
            title: 'Article 8.',
            paragraphs: ['Il nomme immédiatement ses députés.'],
          },
          {
            id: 'a-44',
            title: 'Article 9.',
            paragraphs: [
              'Il délègue à des électeurs le choix des administrateurs, des arbitres publics, des juges criminels et de cassation.',
            ],
          },
          {
            id: 'a-45',
            title: 'Article 10.',
            paragraphs: ['Il délibère sur les lois.'],
          },
        ],
      },
      {
        id: 'section-11-des-assembl-es-primaires',
        title: 'Des Assemblées primaires',
        articles: [
          {
            id: 'a-46',
            title: 'Article 11.',
            paragraphs: [
              'Les Assemblées primaires se composent des citoyens domiciliés depuis six mois dans chaque canton.',
            ],
          },
          {
            id: 'a-47',
            title: 'Article 12.',
            paragraphs: [
              'Elles sont composées de deux cents citoyens au moins, de six cents au plus, appelés à voter.',
            ],
          },
          {
            id: 'a-48',
            title: 'Article 13.',
            paragraphs: [
              "Elles sont constituées par la nomination d'un président, de secrétaires, de scrutateurs.",
            ],
          },
          {
            id: 'a-49',
            title: 'Article 14.',
            paragraphs: ['Leur police leur appartient.'],
          },
          {
            id: 'a-50',
            title: 'Article 15.',
            paragraphs: ["Nul n'y peut paraître en armes."],
          },
          {
            id: 'a-51',
            title: 'Article 16.',
            paragraphs: [
              'Les élections se font au scrutin, ou à haute voix, au choix de chaque votant.',
            ],
          },
          {
            id: 'a-52',
            title: 'Article 17.',
            paragraphs: [
              'Une Assemblée primaire ne peut, en aucun cas, prescrire un mode uniforme de voter.',
            ],
          },
          {
            id: 'a-53',
            title: 'Article 18.',
            paragraphs: [
              'Les scrutateurs constatent le vote des citoyens qui, ne sachant pas écrire, préfèrent de voter au scrutin.',
            ],
          },
          {
            id: 'a-54',
            title: 'Article 19.',
            paragraphs: [
              'Les suffrages sur les lois sont donnés par oui et par non.',
            ],
          },
          {
            id: 'a-55',
            title: 'Article 20.',
            paragraphs: [
              "Le voeu de l'Assemblée primaire est proclamé ainsi : Les citoyens réunis en Assemblée primaire de... au nombre de... votants, votent pour ou votent contre, à la majorité de...",
            ],
          },
        ],
      },
      {
        id: 'section-12-de-la-repr-sentation-nationale',
        title: 'De la Représentation nationale',
        articles: [
          {
            id: 'a-56',
            title: 'Article 21.',
            paragraphs: [
              'La population est la seule base de la représentation nationale.',
            ],
          },
          {
            id: 'a-57',
            title: 'Article 22.',
            paragraphs: [
              'Il y a un député en raison de quarante mille individus.',
            ],
          },
          {
            id: 'a-58',
            title: 'Article 23.',
            paragraphs: [
              "Chaque réunion d'Assemblées primaires, résultant d'une population de 39 000 à 41 000 âmes, nomme immédiatement un député.",
            ],
          },
          {
            id: 'a-59',
            title: 'Article 24.',
            paragraphs: [
              'La nomination se fait à la majorité absolue des suffrages.',
              'Article .25. - Chaque Assemblée fait le dépouillement des suffrages, et envoie un commissaire pour le recensement général au lieu désigné comme le plus central.',
            ],
          },
          {
            id: 'a-60',
            title: 'Article 26.',
            paragraphs: [
              'Si le premier recensement ne donne point de majorité absolue, il est procédé à un second appel, et on vote entre les deux citoyens qui ont réuni le plus de voix.',
            ],
          },
          {
            id: 'a-61',
            title: 'Article 27',
            paragraphs: [
              "En cas d'égalité de voix, le plus âgé a la préférence, soit pour être ballotté, soit pour être élu. En cas d'égalité d'âge, le sort décide.",
            ],
          },
          {
            id: 'a-62',
            title: 'Article 28.',
            paragraphs: [
              "Tout Français exerçant les droits de citoyen est éligible dans l'étendue de la République.",
            ],
          },
          {
            id: 'a-63',
            title: 'Article 29.',
            paragraphs: ['Chaque député appartient à la nation entière.'],
          },
          {
            id: 'a-64',
            title: 'Article 30.',
            paragraphs: [
              "En cas de non-acceptation, démission, déchéance ou mort d'un député, il est pourvu à son remplacement par les Assemblées primaires qui l'ont nommé.",
            ],
          },
          {
            id: 'a-65',
            title: 'Article 31.',
            paragraphs: [
              "Un député qui a donné sa démission ne peut quitter son poste qu'après l'admission de son successeur.",
            ],
          },
          {
            id: 'a-66',
            title: 'Article 32.',
            paragraphs: [
              "Le peuple français s'assemble tous les ans, le 1er mai, pour les élections.",
            ],
          },
          {
            id: 'a-67',
            title: 'Article 33.',
            paragraphs: [
              "Il y procède quel que soit le nombre de citoyens ayant droit d'y voter.",
            ],
          },
          {
            id: 'a-68',
            title: 'Article 34.',
            paragraphs: [
              "Les Assemblées primaires se forment extraordinairement, sur la demande du cinquième des citoyens qui ont droit d'y voter.",
            ],
          },
          {
            id: 'a-69',
            title: 'Article 35.',
            paragraphs: [
              'La convocation se fait, en ce cas, par la municipalité du lieu ordinaire du rassemblement.',
            ],
          },
          {
            id: 'a-70',
            title: 'Article 36.',
            paragraphs: [
              "Ces Assemblées extraordinaires ne délibèrent qu'autant que la moitié, plus un, des citoyens qui ont droit d'y voter, sont présents.",
            ],
          },
        ],
      },
      {
        id: 'section-13-des-assembl-es-lectorales',
        title: 'Des Assemblées électorales',
        articles: [
          {
            id: 'a-71',
            title: 'Article 37.',
            paragraphs: [
              "Les citoyens réunis en Assemblées primaires nomment un électeur à raison de 200 citoyens, présents ou non ; deux depuis 301 jusqu'à 400 ; trois depuis 501 jusqu'à 600.",
            ],
          },
          {
            id: 'a-72',
            title: 'Article 38.',
            paragraphs: [
              'La tenue des Assemblées électorales, et le mode des élections sont les mêmes que dans les Assemblées primaires.',
            ],
          },
        ],
      },
      {
        id: 'section-14-du-corps-l-gislatif',
        title: 'Du Corps législatif',
        articles: [
          {
            id: 'a-73',
            title: 'Article 39.',
            paragraphs: [
              'Le Corps législatif est un, indivisible et permanent.',
            ],
          },
          {
            id: 'a-74',
            title: 'Article 40.',
            paragraphs: ["Sa session est d'un an."],
          },
          {
            id: 'a-75',
            title: 'Article 41.',
            paragraphs: ['Il se réunit le 1er juillet.'],
          },
          {
            id: 'a-76',
            title: 'Article 42.',
            paragraphs: [
              "L'Assemblée nationale ne peut se constituer si elle n'est composée au moins de la moitié des députés, plus un.",
            ],
          },
          {
            id: 'a-77',
            title: 'Article 43.',
            paragraphs: [
              "Les députés ne peuvent être recherchés, accusés ni jugés en aucun temps, pour les opinions qu'ils ont énoncées dans le sein du Corps législatif.",
            ],
          },
          {
            id: 'a-78',
            title: 'Article 44.',
            paragraphs: [
              "Ils peuvent, pour fait criminel, être saisis en flagrant délit : mais le mandat d'arrêt ni le mandat d'amener ne peuvent être décernés contre eux qu'avec l'autorisation du Corps législatif.",
            ],
          },
        ],
      },
      {
        id: 'section-15-tenue-des-s-ances-du-corps-l-gislati',
        title: 'Tenue des séances du Corps législatif',
        articles: [
          {
            id: 'a-79',
            title: 'Article 45.',
            paragraphs: [
              "Les séances de l'Assemblée nationale sont publiques.",
            ],
          },
          {
            id: 'a-80',
            title: 'Article 46.',
            paragraphs: ['Les procès-verbaux de ses séances seront imprimés.'],
          },
          {
            id: 'a-81',
            title: 'Article 47.',
            paragraphs: [
              "Elle ne peut délibérer si elle n'est composée de deux cents membres au moins.",
            ],
          },
          {
            id: 'a-82',
            title: 'Article 48.',
            paragraphs: [
              "Elle ne peut refuser la parole à ses membres, dans l'ordre où ils l'ont réclamée.",
            ],
          },
          {
            id: 'a-83',
            title: 'Article 49.',
            paragraphs: ['Elle délibère à la majorité des présents.'],
          },
          {
            id: 'a-84',
            title: 'Article 50.',
            paragraphs: [
              "Cinquante membres ont le droit d'exiger l'appel nominal.",
            ],
          },
          {
            id: 'a-85',
            title: 'Article 51.',
            paragraphs: [
              'Elle a le droit de censure sur la conduite de ses membres dans son sein.',
            ],
          },
          {
            id: 'a-86',
            title: 'Article 52.',
            paragraphs: [
              "La police lui appartient dans le lieu de ses séances, et dans l'enceinte extérieure qu'elle a déterminée.",
            ],
          },
        ],
      },
      {
        id: 'section-16-des-fonctions-du-corps-l-gislatif',
        title: 'Des fonctions du Corps législatif',
        articles: [
          {
            id: 'a-87',
            title: 'Article 53.',
            paragraphs: [
              'Le Corps législatif propose des lois et rend des décrets.',
            ],
          },
          {
            id: 'a-88',
            title: 'Article 54.',
            paragraphs: [
              "Sont compris, sous le nom général de loi, les actes du Corps législatif, concernant : - La législation civile et criminelle ; - L'administration générale des revenus et des dépenses ordinaires de la République ; - Les domaines nationaux ; - Le titre, le poids, l'empreinte et la dénomination des monnaies ; - La nature, le montant et la perception des contributions ; - La déclaration de guerre ; - Toute nouvelle distribution générale du territoire français ; - L'instruction publique ; - Les honneurs publics à la mémoire des grands hommes.",
            ],
          },
          {
            id: 'a-89',
            title: 'Article 55.',
            paragraphs: [
              "Sont désignés, sous le nom particulier de décret, les actes du Corps législatif, concernant : - L'établissement annuel des forces de terre et de mer ; - La permission ou la défense du passage des troupes étrangères sur le territoire français ; - L'introduction des forces navales étrangères dans les ports de la République ; - Les mesures de sûreté et de tranquillité générales ; - La distribution annuelle et momentanée des secours et travaux publics ; - Les ordres pour la fabrication des monnaies de toute espèce ; - Les dépenses imprévues et extraordinaires ; - Les mesures locales et particulières à une administration une commune, à un genre de travaux publics ; - La défense du territoire ; - La ratification des traités ; - La nomination et la destitution des commandants en chef des armées ; - La poursuite et la responsabilité des membres du conseil, des fonctionnaires publics ; - L'accusation des prévenus de complots contre la sûreté générale de la République ; - Tout changement dans la distribution partielle du territoire français ; - Les récompenses nationales.",
            ],
          },
        ],
      },
      {
        id: 'section-17-de-la-formation-de-la-loi',
        title: 'De la formation de la loi',
        articles: [
          {
            id: 'a-90',
            title: 'Article 56.',
            paragraphs: ["Les projets de loi sont précédés d'un rapport."],
          },
          {
            id: 'a-91',
            title: 'Article 57.',
            paragraphs: [
              "La discussion ne peut s'ouvrir, et la loi ne peut être provisoirement arrêtée que quinze jours après le rapport.",
            ],
          },
          {
            id: 'a-92',
            title: 'Article 58.',
            paragraphs: [
              'Le projet est imprimé et envoyé à toutes les communes de la République, sous ce titre : loi proposée.',
            ],
          },
          {
            id: 'a-93',
            title: 'Article 59.',
            paragraphs: [
              "Quarante jours après l'envoi de la loi proposée, si, dans la moitié des départements, plus un, le dixième des Assemblées primaires de chacun d'eux, régulièrement formées, n'a pas réclamé, le projet est accepté et devient loi.",
            ],
          },
          {
            id: 'a-94',
            title: 'Article 60.',
            paragraphs: [
              "S'il y a réclamation, le Corps législatif convoque les Assemblées primaires.",
            ],
          },
        ],
      },
      {
        id: 'section-18-de-l-intitul-des-lois-et-des-d-crets',
        title: "De l'intitulé des lois et des décrets",
        articles: [
          {
            id: 'a-95',
            title: 'Article 61.',
            paragraphs: [
              "Les lois, les décrets, les jugements et tous les actes publics sont intitulés : Au nom du peuple français, l'an... de la République française.",
            ],
          },
        ],
      },
      {
        id: 'section-19-du-conseil-ex-cutif',
        title: 'Du Conseil exécutif',
        articles: [
          {
            id: 'a-96',
            title: 'Article 62.',
            paragraphs: [
              'Il y a un Conseil exécutif composé de vingt-quatre membres.',
            ],
          },
          {
            id: 'a-97',
            title: 'Article 63.',
            paragraphs: [
              "L'Assemblée électorale de chaque département nomme un candidat. Le Corps législatif choisit, sur la liste générale, les membres du Conseil.",
            ],
          },
          {
            id: 'a-98',
            title: 'Article 64.',
            paragraphs: [
              'Il est renouvelé par moitié à chaque législature, dans les derniers mois de sa session.',
            ],
          },
          {
            id: 'a-99',
            title: 'Article 65.',
            paragraphs: [
              "Le Conseil est chargé de la direction et de la surveillance de l'administration générale ; il ne peut agir qu'en exécution des lois et des décrets du Corps législatif.",
            ],
          },
          {
            id: 'a-100',
            title: 'Article 66.',
            paragraphs: [
              "Il nomme, hors de son sein, les agents en chef de l'administration générale de la République.",
            ],
          },
          {
            id: 'a-101',
            title: 'Article 67.',
            paragraphs: [
              'Le Corps législatif détermine le nombre et les fonctions de ces agents.',
            ],
          },
          {
            id: 'a-102',
            title: 'Article 68.',
            paragraphs: [
              "Ces agents ne forment point un conseil ; ils sont séparés, sans rapports immédiats entre eux ; ils n'exercent aucune autorité personnelle.",
            ],
          },
          {
            id: 'a-103',
            title: 'Article 69.',
            paragraphs: [
              'Le Conseil nomme, hors de son sein, les agents extérieurs de la République.',
            ],
          },
          {
            id: 'a-104',
            title: 'Article 70.',
            paragraphs: ['Il négocie les traités.'],
          },
          {
            id: 'a-105',
            title: 'Article 71.',
            paragraphs: [
              'Les membres du Conseil, en cas de prévarication, sont accusés par le Corps législatif.',
            ],
          },
          {
            id: 'a-106',
            title: 'Article 72.',
            paragraphs: [
              "Le Conseil est responsable de l'inexécution des lois et des décrets, et des abus qu'il ne dénonce pas.",
            ],
          },
          {
            id: 'a-107',
            title: 'Article 73.',
            paragraphs: ['Il révoque et remplace les agents à sa nomination.'],
          },
          {
            id: 'a-108',
            title: 'Article 74.',
            paragraphs: [
              "Il est tenu de les dénoncer, s'il y a lieu, devant les autorités judiciaires.",
            ],
          },
        ],
      },
      {
        id: 'section-20-des-relations-du-conseil-ex-cutif-av',
        title: 'Des relations du Conseil exécutif avec le Corps législatif',
        articles: [
          {
            id: 'a-109',
            title: 'Article 75.',
            paragraphs: [
              "Le Conseil exécutif réside auprès du Corps législatif ; il a l'entrée et une place séparée dans le lieu de ses séances.",
            ],
          },
          {
            id: 'a-110',
            title: 'Article 76.',
            paragraphs: [
              "Il est entendu toutes les fois qu'il a un compte à rendre.",
            ],
          },
          {
            id: 'a-111',
            title: 'Article 77.',
            paragraphs: [
              "Le Corps législatif l'appelle dans son sein, en tout ou en partie lorsqu'il le juge convenable.",
            ],
          },
        ],
      },
      {
        id: 'section-21-des-corps-administratifs-et-municipa',
        title: 'Des corps administratifs et municipaux',
        articles: [
          {
            id: 'a-112',
            title: 'Article 78.',
            paragraphs: [
              'Il y a dans chaque commune de la République une administration municipale ; - Dans chaque district, une administration intermédiaire ; - Dans chaque département, une administration centrale.',
            ],
          },
          {
            id: 'a-113',
            title: 'Article 79.',
            paragraphs: [
              'Les officiers municipaux sont élus par les Assemblées de commune.',
            ],
          },
          {
            id: 'a-114',
            title: 'Article 80.',
            paragraphs: [
              'Les administrateurs sont nommés par les assemblées électorales de département et de district.',
            ],
          },
          {
            id: 'a-115',
            title: 'Article 81.',
            paragraphs: [
              'Les municipalités et les administrations sont renouvelées tous les ans par moitié.',
            ],
          },
          {
            id: 'a-116',
            title: 'Article 82.',
            paragraphs: [
              "Les administrateurs et officiers municipaux n'ont aucun caractère de représentation. - Ils ne peuvent, en aucun cas, modifier les actes du Corps législatif, ni en suspendre l'exécution.",
            ],
          },
          {
            id: 'a-117',
            title: 'Article 83.',
            paragraphs: [
              "Le Corps législatif détermine les fonctions des officiers municipaux et des administrateurs, les règles de leur subordination, et les peines qu'ils pourront encourir.",
            ],
          },
          {
            id: 'a-118',
            title: 'Article 84.',
            paragraphs: [
              'Les séances de municipalités et des administrations sont publiques.',
            ],
          },
        ],
      },
      {
        id: 'section-22-de-la-justice-civile',
        title: 'De la Justice civile',
        articles: [
          {
            id: 'a-119',
            title: 'Article 85.',
            paragraphs: [
              'Le code des lois civiles et criminelles est uniforme pour toute la République.',
            ],
          },
          {
            id: 'a-120',
            title: 'Article 86.',
            paragraphs: [
              "Il ne peut être porté aucune atteinte au droit qu'ont les citoyens de faire prononcer sur leurs différends par des arbitres de leur choix.",
            ],
          },
          {
            id: 'a-121',
            title: 'Article 87.',
            paragraphs: [
              'La décision de ces arbitres est définitive, si les citoyens ne se sont pas réservé le droit de réclamer.',
            ],
          },
          {
            id: 'a-122',
            title: 'Article 88.',
            paragraphs: [
              'Il y a des juges de paix élus par les citoyens des arrondissements déterminés par la loi.',
            ],
          },
          {
            id: 'a-123',
            title: 'Article 89.',
            paragraphs: ['Ils concilient et jugent sans frais.'],
          },
          {
            id: 'a-124',
            title: 'Article 90.',
            paragraphs: [
              'Leur nombre et leur compétence sont réglés par le Corps législatif.',
            ],
          },
          {
            id: 'a-125',
            title: 'Article 91.',
            paragraphs: [
              'Il y a des arbitres publics élus par les Assemblées électorales.',
            ],
          },
          {
            id: 'a-126',
            title: 'Article 92.',
            paragraphs: [
              'Leur nombre et leurs arrondissements sont fixés par le Corps législatif.',
            ],
          },
          {
            id: 'a-127',
            title: 'Article 93.',
            paragraphs: [
              "Ils connaissent des contestations qui n'ont pas été terminées définitivement par les arbitres privés ou par les juges de paix.",
            ],
          },
          {
            id: 'a-128',
            title: 'Article 94.',
            paragraphs: [
              'Ils délibèrent en public. - Ils opinent à haute-voix. - Ils statuent en dernier ressort, sur défenses verbales, ou sur simple mémoire, sans procédures et sans frais. - Ils motivent leurs décisions.',
            ],
          },
          {
            id: 'a-129',
            title: 'Article 95.',
            paragraphs: [
              'Les juges de paix et les arbitres publics sont élus tous les ans.',
            ],
          },
        ],
      },
      {
        id: 'section-23-de-la-justice-criminelle',
        title: 'De la Justice criminelle',
        articles: [
          {
            id: 'a-130',
            title: 'Article 96.',
            paragraphs: [
              "En matière criminelle, nul citoyen ne peut être jugé que sur une accusation reçue par les jurés ou décrétée par le Corps législatif. - Les accusés ont des conseils choisis par eux, ou nommés d'office. - L'instruction est publique. - Le fait et l'intention sont déclarés par un juré de jugement. - La peine est appliquée par un tribunal criminel.",
            ],
          },
          {
            id: 'a-131',
            title: 'Article 97.',
            paragraphs: [
              'Les juges criminels sont élus tous les ans par les Assemblées électorales.',
            ],
          },
        ],
      },
      {
        id: 'section-24-du-tribunal-de-cassation',
        title: 'Du Tribunal de cassation',
        articles: [
          {
            id: 'a-132',
            title: 'Article 98.',
            paragraphs: [
              'Il y a pour toute la République un Tribunal de cassation.',
            ],
          },
          {
            id: 'a-133',
            title: 'Article 99.',
            paragraphs: [
              'Ce tribunal ne connaît point du fond des affaires. - Il prononce sur la violation des formes et sur les contraventions expresses à la loi.',
            ],
          },
          {
            id: 'a-134',
            title: 'Article 100.',
            paragraphs: [
              'Les membres de ce tribunal sont nommés tous les ans par les Assemblées électorales.',
            ],
          },
        ],
      },
      {
        id: 'section-25-des-contributions-publiques',
        title: 'Des Contributions publiques',
        articles: [
          {
            id: 'a-135',
            title: 'Article 101.',
            paragraphs: [
              "Nul citoyen n'est dispensé de l'honorable obligation de contribuer aux charges publiques.",
            ],
          },
        ],
      },
      {
        id: 'section-26-de-la-tr-sorerie-nationale',
        title: 'De la Trésorerie nationale',
        articles: [
          {
            id: 'a-136',
            title: 'Article 102.',
            paragraphs: [
              'La trésorerie nationale est le point central des recettes et dépenses de la République.',
            ],
          },
          {
            id: 'a-137',
            title: 'Article 103.',
            paragraphs: [
              'Elle est administrée par des agents comptables, nommés par le Conseil exécutif.',
            ],
          },
          {
            id: 'a-138',
            title: 'Article 104.',
            paragraphs: [
              "Ces agents sont surveillés par des commissaires nommés par le Corps législatif, pris hors de son sein, et responsables des abus qu'ils ne dénoncent pas.",
            ],
          },
        ],
      },
      {
        id: 'section-27-de-la-comptabilit',
        title: 'De la Comptabilité',
        articles: [
          {
            id: 'a-139',
            title: 'Article 105.',
            paragraphs: [
              'Les comptes des agents de la trésorerie nationale et des administrateurs des deniers publics, sont rendus annuellement à des commissaires responsables, nommés par le Conseil exécutif.',
            ],
          },
          {
            id: 'a-140',
            title: 'Article 106.',
            paragraphs: [
              "Ces vérificateurs sont surveillés par des commissaires à la nomination du Corps législatif, pris hors de son sein, et responsables des abus et des erreurs qu'ils ne dénoncent pas. - Le Corps législatif arrête les comptes.",
            ],
          },
        ],
      },
      {
        id: 'section-28-des-forces-de-la-r-publique',
        title: 'Des Forces de la République',
        articles: [
          {
            id: 'a-141',
            title: 'Article 107.',
            paragraphs: [
              'La force générale de la République est composée du peuple entier.',
            ],
          },
          {
            id: 'a-142',
            title: 'Article 108.',
            paragraphs: [
              'La République entretient à sa solde, même en temps de paix, une force armée de terre et de mer.',
            ],
          },
          {
            id: 'a-143',
            title: 'Article 109.',
            paragraphs: [
              'Tous les Français sont soldats ; ils sont tous exercés au maniement des armes.',
            ],
          },
          {
            id: 'a-144',
            title: 'Article 110.',
            paragraphs: ["Il n'y a point de généralissime."],
          },
          {
            id: 'a-145',
            title: 'Article 111.',
            paragraphs: [
              'La différence des grades, leurs marques distinctives et la subordination ne subsistent que relativement au service et pendant sa durée.',
            ],
          },
          {
            id: 'a-146',
            title: 'Article 112.',
            paragraphs: [
              "La force publique employée pour maintenir l'ordre et la paix dans l'intérieur, n'agit que sur la réquisition par écrit des autorités constituées.",
            ],
          },
          {
            id: 'a-147',
            title: 'Article 113.',
            paragraphs: [
              'La force publique employée contre les ennemis du dehors, agit sous les ordres du Conseil exécutif.',
            ],
          },
          {
            id: 'a-148',
            title: 'Article 114.',
            paragraphs: ['Nul corps armé ne peut délibérer.'],
          },
        ],
      },
      {
        id: 'section-29-des-conventions-nationales',
        title: 'Des Conventions nationales',
        articles: [
          {
            id: 'a-149',
            title: 'Article 115.',
            paragraphs: [
              "Si dans la moitié des départements, plus un, le dixième des Assemblées primaires de chacun d'eux, régulièrement formées, demande la révision de l'acte constitutionnel, ou le changement de quelques-uns de ces articles, le Corps législatif est tenu de convoquer toutes les Assemblées primaires de la République, pour savoir s'il y a lieu à une Convention nationale.",
            ],
          },
          {
            id: 'a-150',
            title: 'Article 116.',
            paragraphs: [
              'La Convention nationale est formée de la même manière que les législatures, et en réunit les pouvoirs.',
            ],
          },
          {
            id: 'a-151',
            title: 'Article 117.',
            paragraphs: [
              "Elle ne s'occupe, relativement à la Constitution, que des objets qui ont motivé sa convocation.",
            ],
          },
        ],
      },
      {
        id: 'section-30-des-rapports-de-la-r-publique-fran-a',
        title:
          'Des rapports de la République française avec les nations étrangères',
        articles: [
          {
            id: 'a-152',
            title: 'Article 118.',
            paragraphs: [
              "Le Peuple français est l'ami et l'allié naturel des peuples libres.",
            ],
          },
          {
            id: 'a-153',
            title: 'Article 119.',
            paragraphs: [
              "Il ne s'immisce point dans le gouvernement des autres nations ; il ne souffre pas que les autres nations s'immiscent dans le sien.",
            ],
          },
          {
            id: 'a-154',
            title: 'Article 120.',
            paragraphs: [
              'Il donne asile aux étrangers bannis de leur patrie pour la cause de la liberté. - Il le refuse aux tyrans.',
            ],
          },
          {
            id: 'a-155',
            title: 'Article 121.',
            paragraphs: [
              'Il ne fait point la paix avec un ennemi qui occupe son territoire.',
            ],
          },
        ],
      },
      {
        id: 'section-31-de-la-garantie-des-droits',
        title: 'De la Garantie des Droits',
        articles: [
          {
            id: 'a-156',
            title: 'Article 122.',
            paragraphs: [
              "La Constitution garantit à tous les Français l'égalité, la liberté, la sûreté, la propriété, la dette publique, le libre exercice des cultes, une instruction commune, des secours publics, la liberté indéfinie de la presse, le droit de pétition, le droit de se réunir en sociétés populaires, la jouissance de tous les Droits de l'homme.",
            ],
          },
          {
            id: 'a-157',
            title: 'Article 123.',
            paragraphs: [
              'La République française honore la loyauté, le courage, la vieillesse, la piété filiale, le malheur. Elle remet le dépôt de sa Constitution sous la garde de toutes les vertus.',
            ],
          },
          {
            id: 'a-158',
            title: 'Article 124.',
            paragraphs: [
              "La déclaration des Droits et l'acte constitutionnel sont gravés sur des tables au sein du Corps législatif et dans les places publiques.",
              "Inscription aux lettres d'information",
              "Abonnez vous à l'actualité du contentieux pour rester informé(e) des dernières saisines et décisions, ainsi qu'à Titre VII, la revue numérique et gratuite du Conseil constitutionnel.",
            ],
          },
        ],
      },
      {
        id: 'section-32-actualit-s',
        title: 'Actualités',
        articles: [
          {
            id: 'p-10',
            title: 'Text',
            paragraphs: ['Toutes les actualités', 'Agenda', 'Publications'],
          },
        ],
      },
      {
        id: 'section-33-les-d-cisions',
        title: 'Les décisions',
        articles: [
          {
            id: 'p-13',
            title: 'Text',
            paragraphs: [
              'Toutes les décisions',
              'QPC 360°',
              'Assister à une audience',
            ],
          },
        ],
      },
      {
        id: 'section-34-espace-presse',
        title: 'Espace presse',
        articles: [
          {
            id: 'p-16',
            title: 'Text',
            paragraphs: [
              'Communiqués',
              'Ressources',
              'Espace photo',
              'Accréditation',
            ],
          },
        ],
      },
      {
        id: 'section-35-mentions-l-gales',
        title: 'Mentions légales',
        articles: [
          {
            id: 'p-20',
            title: 'Text',
            paragraphs: [
              'Informations légales',
              'Précisions sur les informations à portée juridique',
              'Gestion des cookies',
            ],
          },
        ],
      },
      {
        id: 'section-36-le-conseil',
        title: 'Le Conseil',
        articles: [
          {
            id: 'p-23',
            title: 'Text',
            paragraphs: [
              'Recrutement',
              'Contacts',
              'Données ouvertes (open data)',
            ],
          },
        ],
      },
      {
        id: 'section-37-faq',
        title: 'FAQ',
        articles: [
          {
            id: 'p-26',
            title: 'Text',
            paragraphs: [
              'Guide du site internet',
              'Plan du site',
              'Accessibilité',
              'Application',
              'lien_bluesky',
              'lien_twitter',
              'lien_facebook',
              'lien_linkedin',
              'lien_dailymotion',
              'Flux RSS',
            ],
          },
        ],
      },
    ],
    notes: [
      {
        title: 'Reading context',
        text: 'This text comes from the Conseil constitutionnel historical archive. Notes here should help readers compare institutions, rights, and revision rules across French constitutional history.',
      },
    ],
  },
  {
    id: 'constitution-du-5-fructidor-an-iii',
    year: '1795',
    shortLabel: '1795',
    title: 'Constitution of Year III',
    sourceTitle:
      "Constitution de l'An III - Directoire - 5 fructidor An III - 22 août 1795",
    regime: 'Directory',
    date: '22 August 1795',
    sourceUrl:
      'https://www.conseil-constitutionnel.fr/les-constitutions-dans-l-histoire/constitution-du-5-fructidor-an-iii',
    localSourcePath:
      '/constitution-archive/constitution-du-5-fructidor-an-iii.html',
    summary:
      'Constitution of Year III belongs to the Directory period. The original French text is preserved here as a source document for reading and comparison.',
    revisionGroups: [],
    sections: [
      {
        id: 'section-1-d-claration-des-droits-et-des-devoir',
        title: "Déclaration des droits et des devoirs de l'homme et du citoyen",
        articles: [
          {
            id: 'p-1',
            title: 'Text',
            paragraphs: [
              "Le peuple français proclame, en présence de l'Être suprême, la Déclaration suivante des droits et des devoirs de l'homme et du citoyen.",
            ],
          },
        ],
      },
      {
        id: 'section-2-droits',
        title: 'DROITS',
        articles: [
          {
            id: 'a-1',
            title: 'Article 1.',
            paragraphs: [
              "Les droits de l'homme en société sont la liberté, l'égalité, la sûreté, la propriété.",
            ],
          },
          {
            id: 'a-2',
            title: 'Article 2.',
            paragraphs: [
              "La liberté consiste à pouvoir faire ce qui ne nuit pas aux droits d'autrui.",
            ],
          },
          {
            id: 'a-3',
            title: 'Article 3.',
            paragraphs: [
              "L'égalité consiste en ce que la loi est la même pour tous, soit qu'elle protège, soit qu'elle punisse. L'égalité n'admet aucune distinction de naissance, aucune hérédité de pouvoirs.",
            ],
          },
          {
            id: 'a-4',
            title: 'Article 4.',
            paragraphs: [
              'La sûreté résulte du concours de tous pour assurer les droits de chacun.',
            ],
          },
          {
            id: 'a-5',
            title: 'Article 5.',
            paragraphs: [
              'La propriété est le droit de jouir et de disposer de ses biens, de ses revenus, du fruit de son travail et de son industrie.',
            ],
          },
          {
            id: 'a-6',
            title: 'Article 6.',
            paragraphs: [
              'La loi est la volonté générale, exprimée par la majorité ou des citoyens ou de leurs représentants.',
            ],
          },
          {
            id: 'a-7',
            title: 'Article 7.',
            paragraphs: [
              "Ce qui n'est pas défendu par la loi ne peut être empêché. - Nul ne peut être contraint à faire ce qu'elle n'ordonne pas.",
            ],
          },
          {
            id: 'a-8',
            title: 'Article 8.',
            paragraphs: [
              "Nul ne peut être appelé en justice, accusé, arrêté ni détenu, que dans les cas déterminés par la loi, et selon les formes qu'elle a prescrites.",
            ],
          },
          {
            id: 'a-9',
            title: 'Article 9.',
            paragraphs: [
              'Ceux qui sollicitent, expédient, signent, exécutent ou font exécuter des actes arbitraires sont coupables et doivent être punis.',
            ],
          },
          {
            id: 'a-10',
            title: 'Article 10.',
            paragraphs: [
              "Toute rigueur qui ne serait pas nécessaire pour s'assurer de la personne d'un prévenu doit être sévèrement réprimée par la loi.",
            ],
          },
          {
            id: 'a-11',
            title: 'Article 11.',
            paragraphs: [
              "Nul ne peut être jugé qu'après avoir été entendu ou légalement appelé.",
            ],
          },
          {
            id: 'a-12',
            title: 'Article 12.',
            paragraphs: [
              'La loi ne doit décerner que des peines strictement nécessaires et proportionnées au délit.',
            ],
          },
          {
            id: 'a-13',
            title: 'Article 13.',
            paragraphs: [
              'Tout traitement qui aggrave la peine déterminée par la loi, est un crime.',
            ],
          },
          {
            id: 'a-14',
            title: 'Article 14.',
            paragraphs: [
              "Aucune loi, ni criminelle ni civile, ne peut avoir d'effet rétroactif",
            ],
          },
          {
            id: 'a-15',
            title: 'Article 15.',
            paragraphs: [
              "Tout homme peut engager son temps et ses services ; mais il ne peut se vendre ni être vendu ; sa personne n'est pas une propriété aliénable.",
            ],
          },
          {
            id: 'a-16',
            title: 'Article 16.',
            paragraphs: [
              "Toute contribution est établie pour l'utilité générale ; elle doit être répartie entre les contribuables, en raison de leurs facultés.",
            ],
          },
          {
            id: 'a-17',
            title: 'Article 17.',
            paragraphs: [
              "La souveraineté réside essentiellement dans l'universalité des citoyens.",
            ],
          },
          {
            id: 'a-18',
            title: 'Article 18.',
            paragraphs: [
              "Nul individu, nulle réunion partielle de citoyens ne peut s'attribuer la souveraineté.",
            ],
          },
          {
            id: 'a-19',
            title: 'Article 19.',
            paragraphs: [
              'Nul ne peut, sans une délégation légale, exercer aucune autorité, ni remplir aucune fonction publique.',
            ],
          },
          {
            id: 'a-20',
            title: 'Article 20.',
            paragraphs: [
              'Chaque citoyen a un droit égal de concourir, immédiatement ou médiatement, à la formation de la loi, à la nomination des représentants du peuple et des fonctionnaires publics.',
            ],
          },
          {
            id: 'a-21',
            title: 'Article 21.',
            paragraphs: [
              'Les fonctions publiques ne peuvent devenir la propriété de ceux qui les exercent.',
            ],
          },
          {
            id: 'a-22',
            title: 'Article 22.',
            paragraphs: [
              "La garantie sociale ne peut exister si la division des pouvoirs n'est pas établie, si leurs limites ne sont pas fixées, et si la responsabilité des fonctionnaires publics n'est pas assurée.",
            ],
          },
        ],
      },
      {
        id: 'section-3-devoirs',
        title: 'DEVOIRS',
        articles: [
          {
            id: 'a-23',
            title: 'Article 1.',
            paragraphs: [
              'La Déclaration des droits contient les obligations des législateurs : le maintien de la société demande que ceux qui la composent connaissent et remplissent également leurs devoirs.',
            ],
          },
          {
            id: 'a-24',
            title: 'Article 2.',
            paragraphs: [
              "Tous les devoirs de l'homme et du citoyen dérivent de ces deux principes, gravés par la nature dans tous les coeurs : - Ne faites pas à autrui ce que vous ne voudriez pas qu'on vous fît. - Faites constamment aux autres le bien que vous voudriez en recevoir.",
            ],
          },
          {
            id: 'a-25',
            title: 'Article 3.',
            paragraphs: [
              'Les obligations de chacun envers la société consistent à la défendre, à la servir, à vivre soumis aux lois, et à respecter ceux qui en sont les organes.',
            ],
          },
          {
            id: 'a-26',
            title: 'Article 4.',
            paragraphs: [
              "Nul n'est bon citoyen, s'il n'est bon fils, bon père, bon frère, bon ami, bon époux.",
            ],
          },
          {
            id: 'a-27',
            title: 'Article 5.',
            paragraphs: [
              "Nul n'est homme de bien, s'il n'est franchement et religieusement observateur des lois.",
            ],
          },
          {
            id: 'a-28',
            title: 'Article 6.',
            paragraphs: [
              'Celui qui viole ouvertement les lois se déclare en état de guerre avec la société.',
            ],
          },
          {
            id: 'a-29',
            title: 'Article 7.',
            paragraphs: [
              'Celui qui, sans enfreindre ouvertement les lois, les élude par ruse ou par adresse, blesse les intérêts de tous : il se rend indigne de leur bienveillance et de leur estime.',
            ],
          },
          {
            id: 'a-30',
            title: 'Article 8.',
            paragraphs: [
              "C'est sur le maintien des propriétés que reposent la culture des terres, toutes les productions, tout moyen de travail, et tout l'ordre social.",
            ],
          },
          {
            id: 'a-31',
            title: 'Article 9.',
            paragraphs: [
              "Tout citoyen doit ses services à la patrie et au maintien de la liberté, de l'égalité et de la propriété, toutes les fois que la loi l'appelle à les défendre.",
            ],
          },
        ],
      },
      {
        id: 'section-4-constitution',
        title: 'Constitution',
        articles: [
          {
            id: 'a-32',
            title: 'Article 1.',
            paragraphs: ['La République Française est une et indivisible.'],
          },
          {
            id: 'a-33',
            title: 'Article 2.',
            paragraphs: [
              "L'universalité des citoyens français est le souverain.",
            ],
          },
        ],
      },
      {
        id: 'section-5-titre-premier-division-du-territoire',
        title: 'TITRE PREMIER - Division du territoire',
        articles: [
          {
            id: 'a-34',
            title: 'Article 3.',
            paragraphs: [
              'La France est divisée en départements. - Ces départements sont : [liste des 89 départements de la métropole].',
            ],
          },
          {
            id: 'a-35',
            title: 'Article 4.',
            paragraphs: [
              "Les limites des départements peuvent être changées ou rectifiées par le Corps législatif ; mais, en ce cas, la surface d'un département ne peut excéder cent myriamètres carrés (quatre cents lieues carrées moyennes [lieue moyenne linéaire = 2 566 toises])",
            ],
          },
          {
            id: 'a-36',
            title: 'Article 5.',
            paragraphs: [
              "Chaque département est distribué en cantons, chaque canton en communes. - Les cantons conservent leurs circonscriptions actuelles. - Leurs limites pourront néanmoins être changées ou rectifiées par le Corps législatif ; mais, en ce cas, il ne pourra y avoir plus d'un myriamètre (deux lieues moyennes de deux mille cinq cent soixante-six toises chacune) de la commune la plus éloignée au chef-lieu du canton.",
            ],
          },
          {
            id: 'a-37',
            title: 'Article 6.',
            paragraphs: [
              'Les colonies françaises sont parties intégrantes de la République, et sont soumises à la même loi constitutionnelle.',
            ],
          },
          {
            id: 'a-38',
            title: 'Article 7.',
            paragraphs: [
              "Elles sont divisées en départements, ainsi qu'il suit ; - L'île de Saint-Domingue, dont le Corps législatif déterminera la division en quatre départements au moins, et en six au plus ; - La Guadeloupe, Marie-Galande, la Désirade, les Saintes, et la partie française de Saint-Martin ; - La Martinique ; - La Guyane française et Cayenne ; - Sainte-Lucie et Tabago ; - L'île de France, les Séchelles, Rodrigue, et les établissements de Madagascar ; - L'île de la Réunion ; - Les Indes-Orientales, Pondichéri, Chandernagor, Mahé, Karical et autres établissements.",
            ],
          },
        ],
      },
      {
        id: 'section-6-titre-ii-tat-politique-des-citoyens',
        title: 'TITRE II - État politique des citoyens',
        articles: [
          {
            id: 'a-39',
            title: 'Article 8.',
            paragraphs: [
              "Tout homme né et résidant en France, qui, âgé de vingt et un ans accomplis, s'est fait inscrire sur le registre civique de son canton, qui a demeuré depuis pendant une année sur le territoire de la République, et qui paie une contribution directe, foncière ou personnelle, est citoyen français.",
            ],
          },
          {
            id: 'a-40',
            title: 'Article 9.',
            paragraphs: [
              "Sont citoyens, sans aucune condition de contribution, les Français qui auront fait une ou plusieurs campagnes pour l'établissement de la République.",
            ],
          },
          {
            id: 'a-41',
            title: 'Article 10.',
            paragraphs: [
              "L'étranger devient citoyen français, lorsque après avoir atteint l'âge de vingt et un ans accomplis, et avoir déclaré l'intention de se fixer en France, il y a résidé pendant sept années consécutives, pourvu qu'il y paie une contribution directe, et qu'en outre il y possède une propriété foncière, ou un établissement d'agriculture ou de commerce, ou qu'il y ait épousé une femme française.",
            ],
          },
          {
            id: 'a-42',
            title: 'Article 11.',
            paragraphs: [
              'Les citoyens français peuvent seuls voter dans les Assemblées primaires, et être appelés aux fonctions établies par la Constitution.',
            ],
          },
          {
            id: 'a-43',
            title: 'Article 12.',
            paragraphs: [
              "L'exercice des Droits de citoyen se perd : 1 ° Par la naturalisation en pays étrangers ; 2 ° Par l'affiliation à toute corporation étrangère qui supposerait des distinctions de naissance, ou qui exigerait des voeux de religion ; 3 ° Par l'acceptation de fonctions ou de pensions offertes par un gouvernement étranger ; 4 ° Par la condamnation à des peines afflictives ou infamantes, jusqu'à réhabilitation.",
            ],
          },
          {
            id: 'a-44',
            title: 'Article 13.',
            paragraphs: [
              "L'exercice des Droits de citoyen est suspendu : 1 ° Par l'interdiction judiciaire pour cause de fureur, de démence ou d'imbécillité ; 2 ° Par l'état de débiteur failli, ou d'héritier immédiat ; détenteur à titre gratuit, de tout ou partie de la succession d'un failli ; 3 ° Par l'état de domestique à gage, attaché au service de la personne ou du ménage ; 4 ° Par l'état d'accusation ; 5 ° Par un jugement de contumace, tant que le jugement n'est pas anéanti.",
            ],
          },
          {
            id: 'a-45',
            title: 'Article 14.',
            paragraphs: [
              "L'exercice des Droits de citoyen n'est perdu ni suspendu que dans les cas exprimés dans les deux articles précédents.",
            ],
          },
          {
            id: 'a-46',
            title: 'Article 15.',
            paragraphs: [
              "Tout citoyen qui aura résidé sept années consécutives hors du territoire de la République, sans mission ou autorisation donnée au nom de la nation, est réputé étranger ; il ne redevient citoyen français qu'après avoir satisfait aux conditions prescrites par l'article dixième.",
            ],
          },
          {
            id: 'a-47',
            title: 'Article 16.',
            paragraphs: [
              "Les jeunes gens ne peuvent être inscrits sur le registre civique, s'ils ne prouvent qu'ils savent lire et écrire, et exercer une profession mécanique. Les opérations manuelles de l'agriculture appartiennent aux professions mécaniques. - Cet article n'aura d'exécution qu'à compter de l'an XII de la République.",
            ],
          },
        ],
      },
      {
        id: 'section-7-titre-iii-assembl-es-primaires',
        title: 'TITRE III - Assemblées primaires',
        articles: [
          {
            id: 'a-48',
            title: 'Article 17.',
            paragraphs: [
              "Les Assemblées primaires se composent des citoyens domiciliés dans le même canton. - Le domicile requis pour voter dans ces Assemblées, s'acquiert par la seule résidence pendant une année, et il ne se perd que par un an d'absence.",
            ],
          },
          {
            id: 'a-49',
            title: 'Article 18.',
            paragraphs: [
              "Nul ne peut se faire remplacer dans les Assemblées primaires, ni voter pour le même objet dans plus d'une de ces Assemblées.",
            ],
          },
          {
            id: 'a-50',
            title: 'Article 19.',
            paragraphs: [
              "Il y a au moins une Assemblée primaire par canton. - Lorsqu'il y en a plusieurs, chacune est composée de quatre cent cinquante citoyens au moins, de neuf cents au plus. - Ces nombres s'entendent des citoyens présents ou absents, ayant droit d'y voter.",
            ],
          },
          {
            id: 'a-51',
            title: 'Article 20.',
            paragraphs: [
              "Les Assemblées primaires se constituent provisoirement sous la présidence du plus ancien d'âge ; le plus jeune remplit provisoirement les fonctions de secrétaire.",
            ],
          },
          {
            id: 'a-52',
            title: 'Article 21.',
            paragraphs: [
              "Elles sont définitivement constituées par la nomination, au scrutin, d'un président, d'un secrétaire et de trois scrutateurs.",
            ],
          },
          {
            id: 'a-53',
            title: 'Article 22.',
            paragraphs: [
              "S'il s'élève des difficultés sur les qualités requises pour voter, l'Assemblée statue provisoirement, sauf le recours au tribunal civil du département.",
            ],
          },
          {
            id: 'a-54',
            title: 'Article 23.',
            paragraphs: [
              'En tout autre cas, le Corps législatif prononce seul sur la validité des opérations des Assemblées primaires.',
            ],
          },
          {
            id: 'a-55',
            title: 'Article 24.',
            paragraphs: [
              'Nul ne peut paraître en armes dans les Assemblées primaires.',
            ],
          },
          {
            id: 'a-56',
            title: 'Article 25.',
            paragraphs: ['Leur police leur appartient.'],
          },
          {
            id: 'a-57',
            title: 'Article 26.',
            paragraphs: [
              "Les Assemblées primaires se réunissent : 1 ° Pour accepter ou rejeter les changements à l'acte constitutionnel, proposés par les Assemblées de révision ; 2 ° Pour faire les élections qui leur appartiennent suivant l'acte constitutionnel.",
            ],
          },
          {
            id: 'a-58',
            title: 'Article 27.',
            paragraphs: [
              "Elles s'assemblent de plein droit le premier germinal de chaque année, et procèdent, selon qu'il y a lieu, à la nomination : 1 ° Des membres de l'Assemblée électorale ; 2 ° Du juge de paix et de ses assesseurs ; 3 ° Du président de l'administration du canton, ou des officiers municipaux dans les communes au-dessus de cinq mille habitants.",
            ],
          },
          {
            id: 'a-59',
            title: 'Article 28.',
            paragraphs: [
              'Immédiatement après ces élections, il se tient, dans les communes au-dessous de cinq mille habitants, des Assemblées communales qui élisent les agents de chaque commune et leurs adjoints.',
            ],
          },
          {
            id: 'a-60',
            title: 'Article 29.',
            paragraphs: [
              "Ce qui se fait dans une Assemblée primaire ou communale au-delà de l'objet de sa convocation, et contre les formes déterminées par la Constitution, est nul.",
            ],
          },
          {
            id: 'a-61',
            title: 'Article 30.',
            paragraphs: [
              "Les Assemblées, soit primaires, soit communales, ne font aucune autre élection que celles qui leur sont attribuées par l'acte constitutionnel.",
            ],
          },
          {
            id: 'a-62',
            title: 'Article 31.',
            paragraphs: ['Toutes les élections se font au scrutin secret.'],
          },
          {
            id: 'a-63',
            title: 'Article 32.',
            paragraphs: [
              "Tout citoyen qui est légalement convaincu d'avoir vendu ou acheté un suffrage, est exclu des Assemblées primaires et communales, et de toute fonction publique, pendant vingt ans ; en cas de récidive, il l'est pour toujours.",
            ],
          },
        ],
      },
      {
        id: 'section-8-titre-iv-assembl-es-lectorales',
        title: 'TITRE IV - Assemblées électorales',
        articles: [
          {
            id: 'a-64',
            title: 'Article 33.',
            paragraphs: [
              "Chaque Assemblée primaire nomme un électeur à raison de deux cents citoyens, présents ou absents, ayant droit de voter dans ladite Assemblée. Jusqu'au nombre de trois cents citoyens inclusivement, il n'est nommé qu'un électeur. - Il en est nommé deux depuis trois cent un jusqu'à cinq cents ; - Trois depuis cinq cent un jusqu'à sept cents ; - Quatre depuis sept cent un jusqu'à neuf cents.",
            ],
          },
          {
            id: 'a-65',
            title: 'Article 34.',
            paragraphs: [
              "Les membres des Assemblées électorales sont nommés chaque année, et ne peuvent être réélus qu'après un intervalle de deux ans.",
            ],
          },
          {
            id: 'a-66',
            title: 'Article 35.',
            paragraphs: [
              "Nul ne pourra être nommé électeur, s'il n'a vingt-cinq ans accomplis, et s'il ne réunit aux qualités nécessaires pour exercer les droits de citoyen français, l'une des conditions suivantes, savoir : - Dans les communes au-dessus de six mille habitants, celle d'être propriétaire ou usufruitier d'un bien évalué à un revenu égal à la valeur locale de deux cents journées de travail, ou d'être locataire, soit d'une habitation évaluée à un revenu égal à la valeur de cent cinquante journées de travail, soit d'un bien rural évalué à deux cents journées de travail ; Dans les communes au-dessous de six mille habitants, celle d'être propriétaire ou usufruitier d'un bien évalué à un revenu égal à la valeur locale de cent cinquante journées de travail, ou d'être locataire, soit d'une habitation évaluée à un revenu égal à la valeur de cent journées de travail, soit d'un bien rural évalué à cent journées de travail ; - Et dans les campagnes, celle d'être propriétaire ou usufruitier d'un bien évalué à un revenu égal à la valeur locale de cent cinquante journées de travail, ou d'être fermier ou métayer de biens évalués à la valeur de deux cents journées de travail. - A l'égard de ceux qui seront en même temps propriétaires ou usufruitiers d'une part, et locataires, fermiers ou métayers de l'autre, leurs facultés à ces divers titres seront cumulées jusqu'au taux nécessaire pour établir leur éligibilité.",
            ],
          },
          {
            id: 'a-67',
            title: 'Article 36.',
            paragraphs: [
              "L'Assemblée électorale de chaque département se réunit le 20 germinal de chaque année, et termine, en une seule session de dix jours au plus, et sans pouvoir s'ajourner, toutes les élections qui se trouvent à faire ; après quoi, elle est dissoute, de plein droit.",
            ],
          },
          {
            id: 'a-68',
            title: 'Article 37.',
            paragraphs: [
              "Les Assemblées électorales ne peuvent s'occuper d'aucun objet étranger aux élections dont elles sont chargées ; elles ne peuvent envoyer ni recevoir aucune adresse, aucune pétition, aucune députation.",
            ],
          },
          {
            id: 'a-69',
            title: 'Article 38.',
            paragraphs: [
              'Les Assemblées électorales ne peuvent correspondre entre elles.',
            ],
          },
          {
            id: 'a-70',
            title: 'Article 39.',
            paragraphs: [
              "Aucun citoyen, ayant été membre d'une Assemblée électorale, ne peut prendre le titre d'électeur, ni se réunir, en cette qualité, à ceux qui ont été avec lui membres de cette même Assemblée. - La contravention au présent article est un attentat à la sûreté générale.",
            ],
          },
          {
            id: 'a-71',
            title: 'Article 40.',
            paragraphs: [
              'Les articles 18, 20, 21, 23, 24, 25, 29, 30, 31 et 32 du titre précédent, sur les Assemblées primaires, sont communs aux Assemblées électorales.',
            ],
          },
          {
            id: 'a-72',
            title: 'Article 41.',
            paragraphs: [
              "Les Assemblées électorales élisent, selon qu'il y a lieu : 1 ° Les membres du Corps législatif, savoir : les membres du Conseil des Anciens, ensuite les membres du Conseil des Cinq-Cents ; 2 ° Les membres du Tribunal de cassation ; 3 ° Les hauts-jurés ; 4 ° Les administrateurs de département ; 5 ° Les président, accusateur public et greffier du tribunal criminel ; 6 ° Les juges des tribunaux civils.",
            ],
          },
          {
            id: 'a-73',
            title: 'Article 42.',
            paragraphs: [
              "Lorsqu'un citoyen est élu par les Assemblées électorales pour remplacer un fonctionnaire mort, démissionnaire ou destitué, ce citoyen n'est élu que pour le temps qui restait au fonctionnaire remplacé.",
            ],
          },
          {
            id: 'a-74',
            title: 'Article 43.',
            paragraphs: [
              "Le commissaire du Directoire exécutif près l'administration de chaque département est tenu, sous, peine de destitution, d'informer le Directoire de l'ouverture et de la clôture des Assemblées électorales : ce commissaire n'en peut arrêter ni suspendre les opérations, ni entrer dans le lieu des séances ; mais il a le droit de demander communication du procès-verbal de chaque séance dans les vingt-quatre heures qui la suivent ; et il est tenu de dénoncer au Directoire les infractions qui seraient faites à l'acte constitutionnel. - Dans tous les cas, le Corps législatif prononce seul sur la validité des opérations des Assemblées électorales.",
            ],
          },
        ],
      },
      {
        id: 'section-10-dispositions-g-n-rales',
        title: 'Dispositions générales',
        articles: [
          {
            id: 'a-75',
            title: 'Article 44.',
            paragraphs: [
              "Le Corps législatif est composé d'un Conseil des Anciens et d'un Conseil des Cinq-Cents.",
            ],
          },
          {
            id: 'a-76',
            title: 'Article 45.',
            paragraphs: [
              'En aucun cas, le Corps législatif ne peut déléguer à un ou plusieurs de ses membres, ni à qui que ce soit, aucune des fonctions qui lui sont attribuées par la présente Constitution.',
            ],
          },
          {
            id: 'a-77',
            title: 'Article 46.',
            paragraphs: [
              'Il ne peut exercer par lui-même, ni par des délégués, le Pouvoir exécutif, ni le Pouvoir judiciaire.',
            ],
          },
          {
            id: 'a-78',
            title: 'Article 47.',
            paragraphs: [
              "Il y a incompatibilité entre la qualité de membre du Corps législatif et l'exercice d'une autre fonction publique, excepté celle d'archiviste de la République.",
            ],
          },
          {
            id: 'a-79',
            title: 'Article 48.',
            paragraphs: [
              'La loi détermine le mode du remplacement définitif ou temporaire des fonctionnaires publics qui viennent à être élus membres du Corps législatif.',
            ],
          },
          {
            id: 'a-80',
            title: 'Article 49.',
            paragraphs: [
              'Chaque département concourt, à raison de sa population seulement, à la nomination des membres du Conseil des Anciens et des membres du Conseil des Cinq-Cents.',
            ],
          },
          {
            id: 'a-81',
            title: 'Article 50.',
            paragraphs: [
              "Tous les dix ans, le Corps législatif, d'après les états de population qui lui sont envoyés, détermine le nombre des membres de l'un et de l'autre Conseil que chaque département doit fournir.",
            ],
          },
          {
            id: 'a-82',
            title: 'Article 51.',
            paragraphs: [
              'Aucun changement ne peut être fait dans cette répartition, durant cet intervalle.',
            ],
          },
          {
            id: 'a-83',
            title: 'Article 52.',
            paragraphs: [
              'Les membres du Corps législatif ne sont pas représentants du département qui les a nommés, mais de la Nation entière, et il ne peut leur être donné aucun mandat.',
            ],
          },
          {
            id: 'a-84',
            title: 'Article 53.',
            paragraphs: [
              "L'un et l'autre Conseil est renouvelé tous les ans par tiers.",
            ],
          },
          {
            id: 'a-85',
            title: 'Article 54.',
            paragraphs: [
              "Les membres sortant après trois années peuvent être immédiatement réélus pour les trois années suivantes, après quoi il faudra un intervalle de deux ans pour qu'ils puissent être élus de nouveau.",
            ],
          },
          {
            id: 'a-86',
            title: 'Article 55.',
            paragraphs: [
              'Nul, en aucun cas, ne peut être membre du Corps législatif durant plus de six années consécutives.',
            ],
          },
          {
            id: 'a-87',
            title: 'Article 56.',
            paragraphs: [
              "Si, par des circonstances extraordinaires, l'un des deux Conseils se trouve réduit à moins des deux tiers de ses membres, il en donne avis au Directoire exécutif, lequel est tenu de convoquer, sans délai, les Assemblées primaires des départements qui ont des membres du Corps législatif à remplacer par l'effet de ces circonstances ; les Assemblées primaires nomment sur-le-champ les électeurs, qui procèdent aux remplacements nécessaires.",
            ],
          },
          {
            id: 'a-88',
            title: 'Article 57.',
            paragraphs: [
              "Les membres nouvellement élus pour l'un et pour l'autre Conseil, se réunissent, le premier prairial de chaque année, dans la commune qui a été indiquée par le Corps législatif précédent, ou dans la commune même où il a tenu ses dernières séances, s'il n'en a pas désigné une autre.",
            ],
          },
          {
            id: 'a-89',
            title: 'Article 58.',
            paragraphs: [
              'Les deux Conseils résident toujours dans la même commune.',
            ],
          },
          {
            id: 'a-90',
            title: 'Article 59.',
            paragraphs: [
              "Le Corps législatif est permanent ; il peut, néanmoins, s'ajourner à des termes qu'il désigne.",
            ],
          },
          {
            id: 'a-91',
            title: 'Article 60.',
            paragraphs: [
              'En aucun cas, les deux Conseils ne peuvent se réunir dans une même salle.',
            ],
          },
          {
            id: 'a-92',
            title: 'Article 61.',
            paragraphs: [
              "Les fonctions de président et de secrétaire ne peuvent excéder la durée d'un mois, ni dans le Conseil des Anciens, ni dans celui des Cinq-Cents.",
            ],
          },
          {
            id: 'a-93',
            title: 'Article 62.',
            paragraphs: [
              "Les deux Conseils ont respectivement les droit de police dans le lieu de leurs séances, et dans l'enceinte extérieure qu'ils ont déterminée.",
            ],
          },
          {
            id: 'a-94',
            title: 'Article 63.',
            paragraphs: [
              'Ils ont respectivement le droit de police sur leurs membres ; mais ils ne peuvent prononcer de peine plus forte que la censure, les arrêts pour huit jours, et la prison pour trois.',
            ],
          },
          {
            id: 'a-95',
            title: 'Article 64.',
            paragraphs: [
              "Les séances de l'un et de l'autre Conseil sont publiques ; les assistants ne peuvent excéder en nombre la moitié des membres respectifs de chaque Conseil. - Les procès-verbaux des séances sont imprimés.",
            ],
          },
          {
            id: 'a-96',
            title: 'Article 65.',
            paragraphs: [
              'Toute délibération se prend par assis et levé : en cas de doute, il se fait un appel nominal ; mais alors les votes sont secrets.',
            ],
          },
          {
            id: 'a-97',
            title: 'Article 66.',
            paragraphs: [
              'Sur la demande de cent de ses membres, chaque Conseil peut se former en comité général et secret, mais seulement pour discuter, et non pour délibérer.',
            ],
          },
          {
            id: 'a-98',
            title: 'Article 67.',
            paragraphs: [
              "Ni l'un ni l'autre de ces Conseils ne peut créer dans son sein aucun comité permanent. - Seulement chaque Conseil a la faculté, lorsqu'une matière lui paraît susceptible d'un examen préparatoire, de nommer parmi ses membres une commission spéciale, qui se renferme uniquement dans l'objet de sa formation. - Cette commission est dissoute aussitôt que le Conseil a statué sur l'objet dont elle était chargée.",
            ],
          },
          {
            id: 'a-99',
            title: 'Article 68.',
            paragraphs: [
              "Les membres du Corps législatif reçoivent une indemnité annuelle : elle est, dans l'un et l'autre Conseil, fixée à la valeur de trois mille myriagrammes de froment (six cent treize quintaux trente-deux livres).",
            ],
          },
          {
            id: 'a-100',
            title: 'Article 69.',
            paragraphs: [
              "Le Directoire exécutif ne peut faire passer ou séjourner aucun corps de troupes dans la distance de six myriamètres (douze lieues moyennes) de la commune où le Corps législatif tient ses séances, si ce n'est sur sa réquisition ou avec son autorisation.",
            ],
          },
          {
            id: 'a-101',
            title: 'Article 70.',
            paragraphs: [
              "Il y a près du Corps législatif une garde de citoyens pris dans la Garde nationale sédentaire de tous les départements, et choisis par leurs frères d'armes. Cette garde ne peut être au-dessous de quinze cents hommes en activité de service.",
            ],
          },
          {
            id: 'a-102',
            title: 'Article 71.',
            paragraphs: [
              'Le Corps législatif détermine le mode de ce service et sa durée.',
            ],
          },
          {
            id: 'a-103',
            title: 'Article 72.',
            paragraphs: [
              "Le Corps législatif n'assiste à aucune cérémonie publique, et n'y envoie point de députations.",
            ],
          },
        ],
      },
      {
        id: 'section-11-conseil-des-cinq-cents',
        title: 'Conseil des Cinq-Cents',
        articles: [
          {
            id: 'a-104',
            title: 'Article 73.',
            paragraphs: [
              'Le Conseil des Cinq-Cents est invariablement fixé à ce nombre.',
            ],
          },
          {
            id: 'a-105',
            title: 'Article 74.',
            paragraphs: [
              "Pour être élu membre du Conseil des Cinq-Cents, il faut être âgé de trente ans accomplis, et avoir été domicilié sur le territoire de la République pendant les dix années qui auront immédiatement précédé l'élection. - La condition de l'âge de trente ans ne sera point exigible avant l'an septième de la République ; jusqu'à cette époque, l'âge de vingt-cinq ans accomplis sera suffisant.",
            ],
          },
          {
            id: 'a-106',
            title: 'Article 75.',
            paragraphs: [
              "Le Conseil des Cinq-Cents ne peut délibérer, si la séance n'est composée de deux cents membres au moins.",
            ],
          },
          {
            id: 'a-107',
            title: 'Article 76.',
            paragraphs: [
              'La proposition des lois appartient exclusivement au Conseil des Cinq-Cents.',
            ],
          },
          {
            id: 'a-108',
            title: 'Article 77.',
            paragraphs: [
              "Aucune proposition ne peut être délibérée ni résolue dans le Conseil des Cinq-Cents, qu'en observant les formes suivantes. - Il se fait trois lectures de la proposition ; l'intervalle entre deux de ces lectures ne peut être moindre de dix jours. - La discussion est ouverte après chaque lecture ; et, néanmoins, après la première ou la seconde, le Conseil des Cinq-Cents peut déclarer qu'il y a lieu à l'ajournement, ou qu'il n'y a pas lieu à délibérer. - Toute proposition doit être imprimée et distribuée deux jours avant la seconde lecture. - Après la troisième lecture, le Conseil des Cinq-Cents décide s'il y a lieu ou non à l'ajournement.",
            ],
          },
          {
            id: 'a-109',
            title: 'Article 78.',
            paragraphs: [
              "Toute proposition qui, soumise à la discussion, a été définitivement rejetée après la troisième lecture, ne peut être reproduite qu'après une année révolue.",
            ],
          },
          {
            id: 'a-110',
            title: 'Article 79.',
            paragraphs: [
              "Les propositions adoptées par le Conseil des Cinq-Cents s'appellent résolutions.",
            ],
          },
          {
            id: 'a-111',
            title: 'Article 80.',
            paragraphs: [
              "Le préambule de toute résolution énonce : 1 ° Les dates des séances auxquelles les trois lectures de la proposition auront été faites ; 2 ° L'acte par lequel il a été déclaré, après la troisième lecture, qu'il n'y a pas lieu à l'ajournement.",
            ],
          },
          {
            id: 'a-112',
            title: 'Article 81.',
            paragraphs: [
              "Sont exemptes des formes prescrites par l'article 77, les propositions reconnues urgentes par une déclaration préalable du Conseil des Cinq-Cents. - Cette déclaration énonce les motifs de l'urgence, et il en est fait mention dans le préambule de la résolution.",
            ],
          },
        ],
      },
      {
        id: 'section-12-conseil-des-anciens',
        title: 'Conseil des anciens',
        articles: [
          {
            id: 'a-113',
            title: 'Article 82.',
            paragraphs: [
              'Le Conseil des Anciens est composé de deux cent cinquante membres.',
            ],
          },
          {
            id: 'a-114',
            title: 'Article 83.',
            paragraphs: [
              "Nul ne peut être élu membre du Conseil des Anciens : S'il n'est âgé de quarante ans accomplis ; Si, de plus, il n'est marié ou veuf ; - Et s'il n'a pas été domicilié sur le territoire de la République pendant les quinze années qui auront immédiatement précédé l'élection.",
            ],
          },
          {
            id: 'a-115',
            title: 'Article 84.',
            paragraphs: [
              "La condition de domicile exigée par le présent article, et celle prescrite par l'article 74, ne concernent point les citoyens qui sont sortis du territoire de la République avec mission du gouvernement.",
            ],
          },
          {
            id: 'a-116',
            title: 'Article 85.',
            paragraphs: [
              "Le Conseil des Anciens ne peut délibérer si la séance n'est composée de cent vingt-six membres au moins.",
            ],
          },
          {
            id: 'a-117',
            title: 'Article 86.',
            paragraphs: [
              "Il appartient exclusivement au Conseil des Anciens d'approuver ou de rejeter les résolutions du Conseil des Cinq-Cents.",
            ],
          },
          {
            id: 'a-118',
            title: 'Article 87.',
            paragraphs: [
              "Aussitôt qu'une résolution du Conseil des Cinq-Cents est parvenue au Conseil des Anciens, le président donne lecture du préambule.",
            ],
          },
          {
            id: 'a-119',
            title: 'Article 88.',
            paragraphs: [
              "Le Conseil des Anciens refuse d'approuver les résolutions du Conseil des Cinq-Cents qui n'ont point été prises dans les formes prescrites par la Constitution.",
            ],
          },
          {
            id: 'a-120',
            title: 'Article 89.',
            paragraphs: [
              "Si la proposition a été déclarée urgente par le Conseil des Cinq-Cents, le Conseil des Anciens délibère pour approuver ou rejeter l'acte d'urgence.",
            ],
          },
          {
            id: 'a-121',
            title: 'Article 90.',
            paragraphs: [
              "Si le Conseil des Anciens rejette l'acte d'urgence, il ne délibère point sur le fond de la résolution.",
            ],
          },
          {
            id: 'a-122',
            title: 'Article 91.',
            paragraphs: [
              "Si la résolution n'est pas précédée d'un acte d'urgence, il en est fait trois lectures : l'intervalle entre deux de ces lectures ne peut être moindre de cinq jours. - La discussion est ouverte après chaque lecture. - Toute résolution est imprimée et distribuée deux jours au moins avant la seconde lecture.",
            ],
          },
          {
            id: 'a-123',
            title: 'Article 92.',
            paragraphs: [
              "Les résolutions du Conseil des Cinq-Cents, adoptées par le Conseil des Anciens, s'appellent lois.",
            ],
          },
          {
            id: 'a-124',
            title: 'Article 93.',
            paragraphs: [
              'Le préambule des lois énonce les dates des séances du Conseil des Anciens auxquelles les trois lectures ont été faites.',
            ],
          },
          {
            id: 'a-125',
            title: 'Article 94.',
            paragraphs: [
              "Le décret par lequel le Conseil des Anciens reconnaît l'urgence d'une loi, est motivé et mentionné dans le préambule de cette loi.",
            ],
          },
          {
            id: 'a-126',
            title: 'Article 95.',
            paragraphs: [
              "La proposition de la loi, faite par le Conseil des Cinq-Cents, s'entend de tous les articles d'un même projet ; le Conseil des Anciens doit les rejeter tous, ou les approuver dans leur ensemble.",
            ],
          },
          {
            id: 'a-127',
            title: 'Article 96.',
            paragraphs: [
              "L'approbation du Conseil des Anciens est exprimée sur chaque proposition de loi par cette formule, signée du président et des secrétaires : Le Conseil des Anciens approuve...",
            ],
          },
          {
            id: 'a-128',
            title: 'Article 97.',
            paragraphs: [
              "Le refus d'adopter pour cause d'omission des formes indiquées dans l'article 77, est exprimé par cette formule, signée du président et des secrétaires : La Constitution annule...",
            ],
          },
          {
            id: 'a-129',
            title: 'Article 98.',
            paragraphs: [
              "Le refus d'approuver le fond de la loi proposée, est exprimé par cette formule, signée du président et des secrétaires : Le Conseil des Anciens ne peut adopter...",
            ],
          },
          {
            id: 'a-130',
            title: 'Article 99.',
            paragraphs: [
              "Dans le cas du précédent article, le projet de loi rejeté ne peut plus être présenté par le Conseil des Cinq-Cents qu'après une année révolue.",
            ],
          },
          {
            id: 'a-131',
            title: 'Article 100.',
            paragraphs: [
              "Le Conseil des Cinq-Cents peut néanmoins présenter, à quelque époque que ce soit, un projet de loi qui contienne des articles faisant partie d'un projet qui a été rejeté.",
            ],
          },
          {
            id: 'a-132',
            title: 'Article 101.',
            paragraphs: [
              "Le Conseil des Anciens envoie dans le jour les lois qu'il a adoptées, tant au Conseil des Cinq-Cents qu'au Directoire exécutif.",
            ],
          },
          {
            id: 'a-133',
            title: 'Article 102.',
            paragraphs: [
              "Le Conseil des Anciens peut changer la résidence du Corps législatif ; il indique, en ce cas, un nouveau lieu et l'époque à laquelle les deux Conseils sont tenus de s'y rendre. - Le décret du Conseil des Anciens sur cet objet est irrévocable.",
            ],
          },
          {
            id: 'a-134',
            title: 'Article 103.',
            paragraphs: [
              "Le jour même de ce décret, ni l'un ni l'autre des Conseils ne peuvent plus délibérer dans la commune où ils ont résidé jusqu'alors. - Les membres qui y continueraient leurs fonctions, se rendraient coupables d'attentat contre la sûreté de la République.",
            ],
          },
          {
            id: 'a-135',
            title: 'Article 104.',
            paragraphs: [
              'Les membres du Directoire exécutif qui retarderaient ou refuseraient de sceller, promulguer et envoyer le décret de translation du Corps législatif, seraient coupables du même délit.',
            ],
          },
          {
            id: 'a-136',
            title: 'Article 105.',
            paragraphs: [
              "Si, dans les vingt jours après celui fixé par le Conseil des Anciens, la majorité de chacun des deux Conseils n'a pas fait connaître à la République son arrivée au nouveau lieu indiqué, ou sa réunion dans un autre lieu quelconque, les administrateurs de département, ou, à leur défaut, les tribunaux civils de département convoquent les Assemblées primaires pour nommer des électeurs qui procèdent aussitôt à la formation d'un nouveau Corps législatif, par l'élection de deux cent cinquante députés pour le Conseil des Anciens, et de cinq cents pour l'autre Conseil.",
            ],
          },
          {
            id: 'a-137',
            title: 'Article 106.',
            paragraphs: [
              "Les administrateurs de département qui, dans le cas de l'article précédent, seraient en retard de convoquer les Assemblées primaires, se rendraient coupables de haute trahison et d'attentat contre la sûreté de la République.",
            ],
          },
          {
            id: 'a-138',
            title: 'Article 107.',
            paragraphs: [
              "Sont déclarés coupables du même délit tous citoyens qui mettraient obstacle à la convocation des Assemblées primaires et électorales, dans le cas de l'article 106.",
            ],
          },
          {
            id: 'a-139',
            title: 'Article 108.',
            paragraphs: [
              "Les membres du nouveau Corps législatif se rassemblent dans le lieu où le Conseil des Anciens avait transféré ses séances. - S'ils ne peuvent se réunir dans ce lieu, dans quelque endroit qu'ils se trouvent en majorité, là est le Corps législatif.",
            ],
          },
          {
            id: 'a-140',
            title: 'Article 109.',
            paragraphs: [
              "Excepté dans le cas de l'article 102, aucune proposition de loi ne peut prendre naissance dans le Conseil des Anciens.",
            ],
          },
        ],
      },
      {
        id: 'section-13-de-la-garantie-des-membres-du-corps-',
        title: 'De la garantie des membres du Corps législatif',
        articles: [
          {
            id: 'a-141',
            title: 'Article 110.',
            paragraphs: [
              "Les citoyens qui sont, ou ont été, membres du Corps législatif, ne peuvent être recherchés, accusés ni jugés en aucun temps, pour ce qu'ils ont dit ou écrit dans l'exercice de leurs fonctions.",
            ],
          },
          {
            id: 'a-142',
            title: 'Article 111.',
            paragraphs: [
              "Les membres du Corps législatif, depuis le moment de leur nomination jusqu'au trentième jour après l'expiration de leurs fonctions, ne peuvent être mis en jugement que dans les formes prescrites par les articles qui suivent.",
            ],
          },
          {
            id: 'a-143',
            title: 'Article 112.',
            paragraphs: [
              "Ils peuvent, pour faits criminels, être saisis en flagrant délit ; mais il en est donné avis, sans délai, au Corps législatif, et la poursuite ne pourra être continuée qu'après que le Conseil des Cinq-Cents aura proposé la mise en jugement que le Conseil des Anciens l'aura décrétée.",
            ],
          },
          {
            id: 'a-144',
            title: 'Article 113.',
            paragraphs: [
              "Hors le cas du flagrant-délit, les membres du Corps législatif ne peuplent être amenés devant les officiers de police, ni mis en état d'arrestation, avant que le Conseil des Cinq-Cents ait proposé la mise en jugement, et que le Conseil des Anciens l'ait décrétée.",
            ],
          },
          {
            id: 'a-145',
            title: 'Article 114.',
            paragraphs: [
              'Dans les cas des deux articles précédents, un membre du Corps législatif ne peut être traduit devant aucun autre tribunal que la Haute Cour de justice.',
            ],
          },
          {
            id: 'a-146',
            title: 'Article 115.',
            paragraphs: [
              "Ils sont traduits devant la même Cour pour les faits de trahison, de dilapidation, de manoeuvres pour renverser la Constitution, et d'attentat contre la sûreté intérieure de la République.",
            ],
          },
          {
            id: 'a-147',
            title: 'Article 116.',
            paragraphs: [
              "Aucune dénonciation contre un membre du Corps législatif ne peut donner lieu à poursuite, si elle n'est rédigée par écrit, signée et adressée au Conseil des Cinq-Cents.",
            ],
          },
          {
            id: 'a-148',
            title: 'Article 117.',
            paragraphs: [
              "Si, après y avoir délibéré en la forme prescrite par l'article 77, le Conseil des Cinq-Cents admet la dénonciation, il le déclare en ces termes : - La dénonciation contre... pour le fait de... datée... signée de... est admise.",
            ],
          },
          {
            id: 'a-149',
            title: 'Article 118.',
            paragraphs: [
              "L'inculpé est alors appelé : il a, pour comparaître, un délai de trois jours francs, et lorsqu'il comparaît, il est entendu dans l'intérieur du lieu des séances du Conseil des Cinq-Cents.",
            ],
          },
          {
            id: 'a-150',
            title: 'Article 119.',
            paragraphs: [
              "Soit que l'inculpé se soit présenté ou non, le Conseil des Cinq-Cents déclare, après ce délai, s'il y a lieu, ou non à l'examen de sa conduite.",
            ],
          },
          {
            id: 'a-151',
            title: 'Article 120.',
            paragraphs: [
              "S'il est déclaré par le Conseil des Cinq-Cents qu'il y a lieu à examen, le prévenu est appelé par le Conseil des Anciens ; il a pour comparaître, un délai de deux jours francs ; et s'il comparaît, il est entendu dans l'intérieur du lieu des séances du Conseil des Anciens.",
            ],
          },
          {
            id: 'a-152',
            title: 'Article 121.',
            paragraphs: [
              "Soit que le prévenu se soit présenté, ou non, le Conseil des Anciens, après ce délai, et après avoir délibéré dans les formes prescrites par l'article 91, prononce l'accusation, s'il y a lieu, et renvoie l'accusé devant la Haute Cour de justice, laquelle est tenue d'instruire le procès sans aucun délai.",
            ],
          },
          {
            id: 'a-153',
            title: 'Article 122.',
            paragraphs: [
              "Toute discussion, dans l'un et dans l'autre Conseil, relative à la prévention ou à l'accusation d'un membre du Corps législatif, se fait en Conseil général. Toute délibération sur les mêmes objets est prise à l'appel nominal et au scrutin secret.",
            ],
          },
          {
            id: 'a-154',
            title: 'Article 123.',
            paragraphs: [
              "L'accusation prononcée contre un membre du Corps législatif entraîne suspension. - S'il est acquitté par le jugement de la Haute Cour de justice, il reprend ses fonctions.",
            ],
          },
        ],
      },
      {
        id: 'section-14-promulgation-des-lois',
        title: 'Promulgation des lois',
        articles: [
          {
            id: 'a-155',
            title: 'Article 128.',
            paragraphs: [
              'Le Directoire exécutif fait sceller et publier les lois et les autres actes du Corps législatif, dans les deux jours après leur réception.',
            ],
          },
          {
            id: 'a-156',
            title: 'Article 129.',
            paragraphs: [
              "Il fait sceller, promulguer dans le jour, les lois et actes du Corps législatif qui sont précédés d'un décret d'urgence.",
            ],
          },
          {
            id: 'a-157',
            title: 'Article 130.',
            paragraphs: [
              "La publication de la loi et des actes du Corps législatif est ordonnée en la forme suivante : - Au nom de la République française (loi) ou (acte du Corps législatif) ... Le Directoire ordonne que la loi ou l'acte législatif ci-dessus sera publié, exécuté, et qu'il sera muni du sceau de la République.",
            ],
          },
          {
            id: 'a-158',
            title: 'Article 131.',
            paragraphs: [
              "Les lois dont le préambule n'atteste pas l'observation des formes prescrites par les articles 77 et 91, ne peuvent être promulguées par le Directoire exécutif, et sa responsabilité à cet égard dure six années. - Sont exceptées les lois pour lesquelles l'acte d'urgence a été approuvé par le Conseil des Anciens.",
            ],
          },
        ],
      },
      {
        id: 'section-15-titre-vi-pouvoir-ex-cutif',
        title: 'TITRE VI - Pouvoir exécutif',
        articles: [
          {
            id: 'a-159',
            title: 'Article 132.',
            paragraphs: [
              "Le Pouvoir exécutif est délégué à un Directoire de cinq membres, nommé par le Corps législatif, faisant alors les fonctions d'Assemblée électorale, au nom de la Nation.",
            ],
          },
          {
            id: 'a-160',
            title: 'Article 133.',
            paragraphs: [
              'Le Conseil des Cinq-Cents forme, au scrutin secret, une liste décuple du nombre des membres du Directoire qui sont à nommer, et la présente au Conseil des Anciens, qui choisit aussi au scrutin secret, dans cette liste.',
            ],
          },
          {
            id: 'a-161',
            title: 'Article 134.',
            paragraphs: [
              'Les membres du Directoire doivent être âgés de quarante ans au moins.',
            ],
          },
          {
            id: 'a-162',
            title: 'Article 135.',
            paragraphs: [
              "Ils ne peuvent être pris que parmi les citoyens qui ont été membres du Corps législatif, ou ministres. - La disposition du présent article ne sera observée qu'à commencer de l'an neuvième de la République.",
            ],
          },
          {
            id: 'a-163',
            title: 'Article 136.',
            paragraphs: [
              "A compter du premier jour de l'an V de la République, les membres du Corps législatif ne pourront être élus membres du Directoire ni ministres, soit pendant la durée de leurs fonctions législatives, soit pendant la première année après l'expiration de ces mêmes fonctions.",
            ],
          },
          {
            id: 'a-164',
            title: 'Article 137.',
            paragraphs: [
              "Le Directoire est partiellement renouvelé par l'élection d'un nouveau membre, chaque année. - Le sort décidera, pendant les quatre premières années, de la sortie successive de ceux qui auront été nommés la première fois.",
            ],
          },
          {
            id: 'a-165',
            title: 'Article 138.',
            paragraphs: [
              "Aucun des membres sortants ne peut être réélu qu'après un intervalle de cinq ans.",
            ],
          },
          {
            id: 'a-166',
            title: 'Article 139.',
            paragraphs: [
              "L'ascendant et le descendant en ligne directe, les frères, l'oncle et le neveu, les cousins au premier degré, et les alliés à ces divers degrés, ne peuvent être en même temps membres du Directoire, ni s'y succéder, qu'après un intervalle de cinq ans.",
            ],
          },
          {
            id: 'a-167',
            title: 'Article 140.',
            paragraphs: [
              "En cas de vacance par mort, démission ou autrement, d'un des membres du Directoire, son successeur est élu par le Corps législatif dans dix jours pour tout délai. - Le Conseil des Cinq-Cents est tenu de proposer les candidats dans les cinq premiers jours, et le Conseil des Anciens doit consommer l'élection dans les cinq derniers. - Le nouveau membre n'est élu que pour le temps d'exercice qui restait à celui qu'il remplace. - Si, néanmoins, ce temps n'excède pas six mois, celui qui est élu demeure en fonctions jusqu'à la fin de la cinquième année suivante.",
            ],
          },
          {
            id: 'a-168',
            title: 'Article 141.',
            paragraphs: [
              'Chaque membre du Directoire le préside à son tour durant trois mois seulement. - Le président a la signature et la garde du sceau. - Les lois et les actes du Corps législatif sont adressés au Directoire, en la personne de son président.',
            ],
          },
          {
            id: 'a-169',
            title: 'Article 142.',
            paragraphs: [
              "Le Directoire exécutif ne peut délibérer, s'il n'y a trois membres présents au moins.",
            ],
          },
          {
            id: 'a-170',
            title: 'Article 143.',
            paragraphs: [
              "Il se choisit, hors de son sein, un secrétaire qui contresigne les expéditions, et rédige les délibérations sur un registre où chaque membre a le droit de faire inscrire son avis motivé. - Le Directoire peut, quand il le juge à propos, délibérer sans l'assistance de son secrétaire ; en ce cas, les délibérations sont rédigées sur un registre particulier, par un des membres du Directoire.",
            ],
          },
          {
            id: 'a-171',
            title: 'Article 144.',
            paragraphs: [
              "Le Directoire pourvoit, d'après les lois, à la sûreté extérieure ou intérieure de la République. Il peut faire des proclamations conformes aux lois et pour leur exécution. - Il dispose de la force armée, sans qu'en aucun cas, le Directoire collectivement, ni aucun de ses membres, puisse la commander, ni pendant le temps de ses fonctions, ni pendant les deux années qui suivent immédiatement l'expiration de ces mêmes fonctions.",
            ],
          },
          {
            id: 'a-172',
            title: 'Article 145.',
            paragraphs: [
              "Si le Directoire est informé qu'il se trouve quelque conspiration contre la sûreté extérieure ou intérieure de l'Etat, il peut décerner des mandats d'amener et des mandats d'arrêt contre ceux qui en sont présumés les auteurs out les complices ; il peut les interroger ; mais il est obligé, sous les peines portées contre le crime de détention arbitraire, de les renvoyer par-devant l'officier de police, dans le délai de deux jours, pour procéder suivant les lois.",
            ],
          },
          {
            id: 'a-173',
            title: 'Article 146.',
            paragraphs: [
              "Le Directoire nomme les généraux en chef ; il ne peut les choisir parmi les parents ou alliés de ses membres, dans les degrés exprimés par l'article 139.",
            ],
          },
          {
            id: 'a-174',
            title: 'Article 147.',
            paragraphs: [
              "Il surveille et assure l'exécution des lois dans les administrations et tribunaux, par des commissaires à sa nomination.",
            ],
          },
          {
            id: 'a-175',
            title: 'Article 148.',
            paragraphs: [
              "Il nomme hors de son sein les ministres, et les révoque lorsqu'il le juge convenable. Il ne peut les choisir au-dessous de l'âge de trente ans, ni parmi les parents ou alliés de ses membres, aux degrés énoncés dans l'article 139.",
            ],
          },
          {
            id: 'a-176',
            title: 'Article 149.',
            paragraphs: [
              'Les ministres correspondent immédiatement avec les autorités qui leur sont subordonnées.',
            ],
          },
          {
            id: 'a-177',
            title: 'Article 150.',
            paragraphs: [
              'Le Corps législatif détermine les attributions et le nombre des ministres. - Ce nombre est de six au moins et de huit au plus.',
            ],
          },
          {
            id: 'a-178',
            title: 'Article 151.',
            paragraphs: ['Les ministres ne forment point un Conseil.'],
          },
          {
            id: 'a-179',
            title: 'Article 152.',
            paragraphs: [
              "Les ministres sont respectivement responsables, tant de l'inexécution des lois, que de l'inexécution des arrêtés du Directoire.",
            ],
          },
          {
            id: 'a-180',
            title: 'Article 153.',
            paragraphs: [
              'Le Directoire nomme le receveur des impositions directes de chaque département.',
            ],
          },
          {
            id: 'a-181',
            title: 'Article 154.',
            paragraphs: [
              "Il nomme les préposés en chef aux régies des contributions indirectes et à l'administration des domaines nationaux.",
            ],
          },
          {
            id: 'a-182',
            title: 'Article 155.',
            paragraphs: [
              "Tous les fonctionnaires publics dans les colonies françaises, excepté les départements des îles de France et de la Réunion, seront nommés par le Directoire jusqu'à la paix.",
            ],
          },
          {
            id: 'a-183',
            title: 'Article 156.',
            paragraphs: [
              "Le Corps législatif peut autoriser le Directoire à envoyer dans toutes les colonies françaises, suivant l'exigence des cas, un ou plusieurs agents particuliers nommés par lui pour un temps limité. - Les agents particuliers exerceront les mêmes fonctions que le Directoire, et lui seront subordonnés.",
            ],
          },
          {
            id: 'a-184',
            title: 'Article 157.',
            paragraphs: [
              'Aucun membre du Directoire ne peut sortir du territoire de la République, que deux ans après la cessation de ses fonctions.',
            ],
          },
          {
            id: 'a-185',
            title: 'Article 158.',
            paragraphs: [
              "Il est tenu, pendant cet intervalle, de justifier au Corps législatif de sa résidence. - L'article 112 et les suivants, jusqu'à l'article 123 inclusivement, relatifs à la garantie du Corps législatif, sont communs aux membres du Directoire.",
            ],
          },
          {
            id: 'a-186',
            title: 'Article 159.',
            paragraphs: [
              'Dans le cas où plus de deux membres du Directoire seraient mis en jugement, le Corps législatif pourvoiera dans les formes ordinaires, à leur remplacement provisoire durant le jugement.',
            ],
          },
          {
            id: 'a-187',
            title: 'Article 160.',
            paragraphs: [
              'Hors les cas des articles 119 et 120, le Directoire, ni aucun de ses membres, ne peut être appelé, ni par le Conseil des Cinq-Cents, ni par le Conseil des Anciens.',
            ],
          },
          {
            id: 'a-188',
            title: 'Article 161.',
            paragraphs: [
              "Les comptes et les éclaircissements demandés par l'un ou par l'autre Conseil au Directoire, sont fournis par écrit.",
            ],
          },
          {
            id: 'a-189',
            title: 'Article 162.',
            paragraphs: [
              "Le Directoire est tenu, chaque année, de présenter, par écrit, à l'un et à l'autre Conseil, l'aperçu des dépenses, la situation des finances, l'état des pensions existantes, ainsi que le projet de celles qu'il croit convenable d'établir. - Il doit indiquer les abus qui sont à sa connaissance.",
            ],
          },
          {
            id: 'a-190',
            title: 'Article 163.',
            paragraphs: [
              'Le Directoire peut, en tout cas, inviter, par écrit, le Conseil des Cinq-Cents à prendre un objet en considération ; il peut lui proposer des mesures, mais non des projets rédigés en forme de loi.',
            ],
          },
          {
            id: 'a-191',
            title: 'Article 164.',
            paragraphs: [
              "Aucun membre du Directoire ne peut s'absenter plus de cinq jours, ni s'éloigner au-delà de quatre myriamètres (huit lieues moyennes), du lieu de la résidence du Directoire, sans l'autorisation du Corps législatif.",
            ],
          },
          {
            id: 'a-192',
            title: 'Article 165.',
            paragraphs: [
              "Les membres du Directoire ne peuvent paraître, dans l'exercice de leurs fonctions, soit au-dehors, soit dans l'intérieur de leurs maisons, que revêtus du costume qui leur est propre.",
            ],
          },
          {
            id: 'a-193',
            title: 'Article 166.',
            paragraphs: [
              'Le Directoire a sa garde habituelle, et soldée aux frais de la République, composée de cent vingt hommes à pied, et de cent vingt hommes à cheval.',
            ],
          },
          {
            id: 'a-194',
            title: 'Article 167.',
            paragraphs: [
              'Le Directoire est accompagné de sa garde dans les cérémonies et marches publiques où il a toujours le premier rang.',
            ],
          },
          {
            id: 'a-195',
            title: 'Article 168.',
            paragraphs: [
              'Chaque membre du Directoire se fait accompagner au-dehors de deux gardes.',
            ],
          },
          {
            id: 'a-196',
            title: 'Article 169.',
            paragraphs: [
              'Tout poste de force armée doit au Directoire et à chacun de ses membres les honneurs militaires supérieurs.',
            ],
          },
          {
            id: 'a-197',
            title: 'Article 170.',
            paragraphs: [
              "Le Directoire a quatre messagers d'Etat, qu'il nomme et qu'il peut destituer. - Ils portent aux deux Conseils législatifs les lettres et les mémoires du Directoire ; ils ont entrée à cet effet dans le lieu des séances des Conseils législatifs. - Ils marchent précédés de deux huissiers.",
            ],
          },
          {
            id: 'a-198',
            title: 'Article 171.',
            paragraphs: [
              'Le Directoire réside dans la même commune que le Corps législatif.',
            ],
          },
          {
            id: 'a-199',
            title: 'Article 172.',
            paragraphs: [
              'Les membres du Directoire sont logés aux frais de la République, et dans un même édifice.',
            ],
          },
          {
            id: 'a-200',
            title: 'Article 173.',
            paragraphs: [
              "Le traitement de chacun d'eux est fixé, pour chaque année, à la valeur de cinquante mille myriagrammes de froment (dix mille deux cent vingt-deux quintaux).",
            ],
          },
        ],
      },
      {
        id: 'section-16-titre-vii-corps-administratifs-et-mu',
        title: 'TITRE VII - Corps administratifs et municipaux',
        articles: [
          {
            id: 'a-201',
            title: 'Article 174.',
            paragraphs: [
              'Il y a dans chaque département une administration centrale, et dans chaque canton une administration municipale au moins.',
            ],
          },
          {
            id: 'a-202',
            title: 'Article 175.',
            paragraphs: [
              "Tout membre d'une administration départementale ou municipale doit être âgé de vingt-cinq ans au moins.",
            ],
          },
          {
            id: 'a-203',
            title: 'Article 176.',
            paragraphs: [
              "L'ascendant et le descendant en ligne directe, les frères, l'oncle et le neveu, et les alliés aux mêmes degrés, ne peuvent simultanément être membres de la même administration, ni s'y succéder qu'après un intervalle de deux ans.",
            ],
          },
          {
            id: 'a-204',
            title: 'Article 177.',
            paragraphs: [
              'Chaque administration de département est composée de cinq membres ; elle est renouvelée par cinquième tous les ans.',
            ],
          },
          {
            id: 'a-205',
            title: 'Article 178.',
            paragraphs: [
              "Toute commune dont la population s'élève depuis cinq mille habitants jusqu'à cent mille, a pour elle seule une administration municipale.",
            ],
          },
          {
            id: 'a-206',
            title: 'Article 179.',
            paragraphs: [
              'Il y a dans chaque commune, dont la population est inférieure à cinq mille habitants, un agent municipal et un adjoint.',
            ],
          },
          {
            id: 'a-207',
            title: 'Article 180.',
            paragraphs: [
              'La réunion des agent municipaux de chaque commune forme la municipalité de canton.',
            ],
          },
          {
            id: 'a-208',
            title: 'Article 181.',
            paragraphs: [
              "Il y a de plus un président de l'administration municipale, choisi dans tout le canton.",
            ],
          },
          {
            id: 'a-209',
            title: 'Article 182.',
            paragraphs: [
              "Dans les communes, dont la population s'élève de cinq à dix mille habitants, il y a cinq officiers municipaux ; Sept, depuis dix mille jusqu'à cinquante mille ; Neuf, depuis cinquante mille jusqu'à cent mille.",
            ],
          },
          {
            id: 'a-210',
            title: 'Article 183.',
            paragraphs: [
              "Dans les communes, dont la population excède cent mille habitants, il y a au moins trois administrations municipales. - Dans ces communes, la division des municipalités se fait de manière que la population de l'arrondissement de chacune n'excède pas cinquante mille individus, et ne soit pas moindre de trente mille. La municipalité de chaque arrondissement est composée de sept membres.",
            ],
          },
          {
            id: 'a-211',
            title: 'Article 184.',
            paragraphs: [
              "Il y a, dans les communes divisées en municipalités, un bureau central pour les objets jugés indivisibles par le Corps législatif. - Ce bureau est composé de trois membres nommés par l'administration de département, et confirmé par le Pouvoir exécutif.",
            ],
          },
          {
            id: 'a-212',
            title: 'Article 185.',
            paragraphs: [
              'Les membres de toute administration municipale sont nommés pour deux ans, et renouvelés chaque année par moitié ou par partie la plus approximative de la moitié, et alternativement par la fraction la plus forte et par la fraction la plus faible.',
            ],
          },
          {
            id: 'a-213',
            title: 'Article 186.',
            paragraphs: [
              'Les administrateurs de département et les membres des administrations municipales peuvent être réélus une fois sans intervalle.',
            ],
          },
          {
            id: 'a-214',
            title: 'Article 187.',
            paragraphs: [
              "Tout citoyen qui a été deux fois de suite élu administrateur de département ou membre d'une administration municipale, et qui en a rempli les fonctions en vertu de l'une et l'autre élection, ne peut être élu de nouveau qu'après un intervalle de deux années.",
            ],
          },
          {
            id: 'a-215',
            title: 'Article 188.',
            paragraphs: [
              "Dans le cas où une Administration départementale ou municipale perdrait un ou plusieurs de ses membres par mort, démission ou autrement, les administrateurs restants peuvent s'adjoindre en remplacement des administrateurs temporaires, et qui exercent en cette qualité jusqu'aux élections suivantes.",
            ],
          },
          {
            id: 'a-216',
            title: 'Article 189.',
            paragraphs: [
              "Les administrations départementales et municipales ne peuvent modifier les actes du Corps législatif, ni ceux du Directoire exécutif, ni en suspendre l'exécution. - Elles ne peuvent s'immiscer dans les objets dépendant de l'ordre judiciaire.",
            ],
          },
          {
            id: 'a-217',
            title: 'Article 190.',
            paragraphs: [
              "Les administrateurs sont essentiellement chargés de la répartition des contributions directes et de la surveillance des deniers provenant des revenus publics dans leur territoire. - Le Corps législatif détermine les règles et le mode de leurs fonctions, tant sur ces objets, que sur les autres parties de l'Administration intérieure.",
            ],
          },
          {
            id: 'a-218',
            title: 'Article 191.',
            paragraphs: [
              "Le Directoire exécutif nomme, auprès de chaque administration départementale et municipale, un commissaire qu'il révoque lorsqu'il le juge convenable. - Ce commissaire surveille et requiert l'exécution des lois.",
            ],
          },
          {
            id: 'a-219',
            title: 'Article 192.',
            paragraphs: [
              'Le commissaire près de chaque administration locale, doit être pris parmi les citoyens domiciliés depuis un an dans le département où cette administration est établie. - Il doit être âgé de vingt-cinq ans au moins.',
            ],
          },
          {
            id: 'a-220',
            title: 'Article 193.',
            paragraphs: [
              'Les administrations municipales sont subordonnées aux administrations de département, et celles-ci aux ministres. - En conséquence, les ministres peuvent annuler, chacun dans sa partie, les actes des administrations de département ; et celles-ci, les actes des administrations municipales, lorsque ces actes sont contraires aux lois ou aux ordres des autorités supérieures.',
            ],
          },
          {
            id: 'a-221',
            title: 'Article 194.',
            paragraphs: [
              "Les ministres peuvent aussi suspendre les administrations de département qui ont contrevenu aux lois ou aux ordres des autorités supérieures ; et les administrations de département ont le même droit à l'égard des membres des administrations municipales.",
            ],
          },
          {
            id: 'a-222',
            title: 'Article 195.',
            paragraphs: [
              'Aucune suspension ni annulation ne devient définitive sans la confirmation formelle du Directoire exécutif.',
            ],
          },
          {
            id: 'a-223',
            title: 'Article 196.',
            paragraphs: [
              "Le Directoire peut aussi annuler immédiatement les actes des administrations départementales ou municipales. - Il peut suspendre ou destituer immédiatement, lorsqu'il le croit nécessaire, les administrateurs soit de département, soit de canton, et les envoyer devant les tribunaux de département lorsqu'il y a lieu.",
            ],
          },
          {
            id: 'a-224',
            title: 'Article 197.',
            paragraphs: [
              "Tout arrêté portant cassation d'actes, suspension ou destitution d'administrateur, doit être motivé.",
            ],
          },
          {
            id: 'a-225',
            title: 'Article 198.',
            paragraphs: [
              "Lorsque les cinq membres d'une administration départementale sont destitués, le Directoire exécutif pourvoit à leur remplacement jusqu'à l'élection suivante ; mais il ne peut choisir leurs suppléants provisoires, que parmi les anciens administrateurs du même département.",
            ],
          },
          {
            id: 'a-226',
            title: 'Article 199.',
            paragraphs: [
              'Les administrations, soit de département, soit de canton, ne peuvent correspondre entre elles que sur les affaires qui leur sont attribuées par la loi, et non sur les intérêts généraux de la République.',
            ],
          },
          {
            id: 'a-227',
            title: 'Article 200.',
            paragraphs: [
              'Toute administration doit annuellement le compte de sa gestion. - Les comptes rendus par les administrations départementales sont imprimés.',
            ],
          },
          {
            id: 'a-228',
            title: 'Article 201.',
            paragraphs: [
              "Tous les actes des corps administratifs sont rendus publics par le dépôt du registre où ils sont consignés, et qui est ouvert à tous les administrés. - Ce registre est clos tous les six mois, et n'est déposé que du jour qu'il a été clos. - Le Corps législatif peut proroger, selon les circonstances, le délai fixé pour ce dépôt.",
            ],
          },
        ],
      },
      {
        id: 'section-18-dispositions-g-n-rales',
        title: 'Dispositions générales',
        articles: [
          {
            id: 'a-229',
            title: 'Article 202.',
            paragraphs: [
              'Les fonctions judiciaires ne peuvent être exercées, ni par le Corps législatif, ni par le Pouvoir exécutif.',
            ],
          },
          {
            id: 'a-230',
            title: 'Article 203.',
            paragraphs: [
              "Les juges ne peuvent s'immiscer dans l'exercice du Pouvoir législatif, ni faire aucun règlement. - Ils ne peuvent arrêter ou suspendre l'exécution d'aucune loi, ni citer devant eux les administrateurs pour raison de leurs fonctions.",
            ],
          },
          {
            id: 'a-231',
            title: 'Article 204.',
            paragraphs: [
              "Nul ne peut être distrait des juges que la loi lui assigne, par aucune commission, ni par d'autres attributions que celles qui sont déterminées par une loi antérieure.",
            ],
          },
          {
            id: 'a-232',
            title: 'Article 205',
            paragraphs: ['La justice est rendue gratuitement.'],
          },
          {
            id: 'a-233',
            title: 'Article 206.',
            paragraphs: [
              'Les juges ne peuvent être destitués que pour forfaiture légalement jugée, ni suspendus que par une accusation admise.',
            ],
          },
          {
            id: 'a-234',
            title: 'Article 207.',
            paragraphs: [
              "L'ascendant et le descendant en ligne directe, les frères, l'oncle et le neveu, les cousins au premier degré, et les alliés à ces divers degrés, ne peuvent être simultanément membres du même tribunal.",
            ],
          },
          {
            id: 'a-235',
            title: 'Article 208.',
            paragraphs: [
              'Les séances des tribunaux sont publiques ; les juges délibèrent en secret ; les jugements sont prononcés à haute voix ; ils sont motivés, et on y énonce les termes de la loi appliquée.',
            ],
          },
          {
            id: 'a-236',
            title: 'Article 209.',
            paragraphs: [
              "Nul citoyen, s'il n'a l'âge de trente ans accomplis, ne peut être élu juge d'un tribunal de département, ni juge de paix, ni assesseur de juge de paix, ni juge d'un tribunal de commerce, ni membre du Tribunal de cassation, ni juré, ni commissaire du Directoire exécutif près les tribunaux.",
            ],
          },
        ],
      },
      {
        id: 'section-19-de-la-justice-civile',
        title: 'De la Justice civile',
        articles: [
          {
            id: 'a-237',
            title: 'Article 210.',
            paragraphs: [
              'Il ne petit être porté atteinte au droit de faire prononcer sur les différends par des arbitres du choix des parties.',
            ],
          },
          {
            id: 'a-238',
            title: 'Article 211.',
            paragraphs: [
              "La décision de ces arbitres est sans appel, et sans recours en cassation, si les parties ne l'ont expressément réservé.",
            ],
          },
          {
            id: 'a-239',
            title: 'Article 212.',
            paragraphs: [
              'Il y a, dans chaque arrondissement déterminé par la loi un juge de paix et ses assesseurs. - Ils sont tous élus pour deux ans, et peuvent être immédiatement et indéfiniment réélus.',
            ],
          },
          {
            id: 'a-240',
            title: 'Article 213.',
            paragraphs: [
              "La loi détermine les objets dont les juges de paix et leurs assesseurs connaissent en dernier ressort. - Elle leur en attribue d'autres qu'ils jugent à la charge de l'appel.",
            ],
          },
          {
            id: 'a-241',
            title: 'Article 214.',
            paragraphs: [
              'Il y a des tribunaux particuliers pour le commerce de terre et de mer ; la loi détermine les lieux où il est utile de les établir. - Leur pouvoir de juger en dernier ressort ne peut être étendu au-delà de la valeur de cinq cents myriagrammes de froment (cent deux quintaux, vingt-deux livres).',
            ],
          },
          {
            id: 'a-242',
            title: 'Article 215.',
            paragraphs: [
              "Les affaires dont le jugement n'appartient ni aux juges de paix ni aux tribunaux de commerce, soit en dernier ressort, soit à la charge d'appel, sont portées immédiatement devant le juge de paix et ses assesseurs, pour être conciliées. - Si le juge de paix ne peut les concilier, il les renvoie devant le tribunal civil.",
            ],
          },
          {
            id: 'a-243',
            title: 'Article 216.',
            paragraphs: [
              "Il y a un tribunal civil par département. - Chaque tribunal civil est composé de vingt juges au moins, d'un commissaire et d'un substitut nommés et destituables par le Directoire exécutif, et d'un greffier. - Tous les cinq ans on procède à l'élection de tous les membres du tribunal. - Les juges peuvent être réélus.",
            ],
          },
          {
            id: 'a-244',
            title: 'Article 217.',
            paragraphs: [
              "Lors de l'élection des juges, il est nommé cinq suppléants, dont trois sont pris parmi les citoyens résidant dans la commune où siège le tribunal.",
            ],
          },
          {
            id: 'a-245',
            title: 'Article 218.',
            paragraphs: [
              'Le tribunal civil prononce en dernier ressort, dans les cas déterminés par la loi, sur les appels des jugements soit des juges de paix, soit des arbitres, soit des tribunaux de commerce.',
            ],
          },
          {
            id: 'a-246',
            title: 'Article 219.',
            paragraphs: [
              "L'appel des jugements prononcés par le tribunal civil se porte au tribunal civil de l'un des trois départements les plus voisins, ainsi qu'il est déterminé par la loi.",
            ],
          },
          {
            id: 'a-247',
            title: 'Article 220.',
            paragraphs: [
              'Le tribunal civil se divise en sections. - Une section ne peut juger au-dessous du nombre de cinq juges.',
            ],
          },
          {
            id: 'a-248',
            title: 'Article 221.',
            paragraphs: [
              'Les juges réunis dans chaque tribunal nomment, entre eux, au scrutin secret le président de chaque section.',
            ],
          },
        ],
      },
      {
        id: 'section-20-de-la-justice-correctionnelle-et-cri',
        title: 'De la Justice correctionnelle et criminelle',
        articles: [
          {
            id: 'a-249',
            title: 'Article 222.',
            paragraphs: [
              "Nul ne peut être saisi que pour être conduit devant l'officier de police ; et nul ne peut être mis en arrestation ou détenu qu'en vertu, d'un mandat d'arrêt des officiers de police, ou du Directoire exécutif, dans le cas de l'article 145, ou d'une ordonnance de prise de corps, soit d'un tribunal, soit du directeur du jury d'accusation, ou d'un décret d'accusation du Corps législatif, dans le cas où il lui appartient de la prononcer, ou d'un jugement de condamnation à la prison ou détention correctionnelle.",
            ],
          },
          {
            id: 'a-250',
            title: 'Article 223.',
            paragraphs: [
              "Pour que l'acte qui ordonne l'arrestation puisse être exécuté, il faut : - 1 ° Qu'il exprime formellement le motif de l'arrestation, et la loi en conformité de laquelle elle est ordonnée ; 2 ° Qu'il ait été notifié à celui qui en est l'objet, et qu'il lui en ait été laissé copie.",
            ],
          },
          {
            id: 'a-251',
            title: 'Article 224.',
            paragraphs: [
              "Toute personne saisie et conduite devant l'officier de police sera examinée sur-le-champ, ou dans le jour au plus tard.",
            ],
          },
          {
            id: 'a-252',
            title: 'Article 225.',
            paragraphs: [
              "S'il résulte de l'examen qu'il n'y a aucun sujet d'inculpation contre elle, elle sera remise aussitôt en liberté ; ou, s'il y a lieu de l'envoyer à la maison d'arrêt, elle y sera conduite dans le plus bref délai, qui, en aucun cas, ne pourra excéder trois jours.",
            ],
          },
          {
            id: 'a-253',
            title: 'Article 226.',
            paragraphs: [
              'Nulle personne arrêtée ne peut être retenue, si elle donne caution suffisante, dans tous les cas où la loi permet de rester libre sous le cautionnement.',
            ],
          },
          {
            id: 'a-254',
            title: 'Article 227.',
            paragraphs: [
              "Nulle personne, dans le cas où sa détention est autorisée par la loi, ne peut être conduite on détenue que dans les lieux légalement et publiquement désignés pour servir de maison d'arrêt, de maison de justice ou de maison de détention.",
            ],
          },
          {
            id: 'a-255',
            title: 'Article 228.',
            paragraphs: [
              "Nul gardien ou geôlier ne peut recevoir ni retenir aucune personne qu'en vertu d'un mandat d'arrêt, selon les formes prescrites par les articles 222 et 223, d'une ordonnance de prise de corps, d'un décret d'accusation ou d'un jugement de condamnation à prison ou détention correctionnelle, et sans que la transcription en ait été faite sur son registre.",
            ],
          },
          {
            id: 'a-256',
            title: 'Article 229.',
            paragraphs: [
              "Tout gardien ou geôlier est tenu, sans qu'aucun ordre puisse l'en dispenser, de présenter la personne détenue à l'officier civil ayant la police de la maison de détention, toutes les fois qu'il en sera requis par cet officier.",
            ],
          },
          {
            id: 'a-257',
            title: 'Article 230.',
            paragraphs: [
              "La représentation de la personne détenue ne pourra être refusée à ses parents et amis porteurs de l'ordre de l'officier civil, lequel sera toujours tenu de l'accorder, à moins que le gardien ou geôlier ne représente une ordonnance du juge, transcrite sur son registre, pour tenir la personne arrêtée au secret.",
            ],
          },
          {
            id: 'a-258',
            title: 'Article 231.',
            paragraphs: [
              "Tout homme, quelle que soit sa place ou son emploi, autre que ceux à qui la loi donne le droit d'arrestation, qui donnera, signera, exécutera ou fera exécuter l'ordre d'arrêter un individu, recevra ou retiendra un individu dans un lieu de détention non publiquement et légalement désigné et tous les gardiens ou geôliers qui contreviendront aux dispositions des trois articles précédents, seront coupables du crime de détention arbitraire.",
            ],
          },
          {
            id: 'a-259',
            title: 'Article 232.',
            paragraphs: [
              'Toutes rigueurs employées dans les arrestations, détentions ou exécutions, autres que celles prescrites par la loi, sont des crimes.',
            ],
          },
          {
            id: 'a-260',
            title: 'Article 233.',
            paragraphs: [
              "Il y a dans chaque département, pour le jugement des délits dont la peine n'est ni afflictive ni infamante, trois tribunaux correctionnels au moins, et six au plus. - Ces tribunaux ne pourront prononcer de peines plus graves que l'emprisonnement pour deux années. - La connaissance des délits dont la peine n'excède pas, soit la valeur de trois journées de travail, soit un emprisonnement de trois jours, est déléguée au juge de paix, qui prononce en dernier ressort.",
            ],
          },
          {
            id: 'a-261',
            title: 'Article 234.',
            paragraphs: [
              "Chaque tribunal correctionnel est composé d'un président, de deux juges de paix ou assesseurs de juges de paix de la commune où il est établi, d'un commissaire du Pouvoir exécutif, nommé et destituable par le Directoire exécutif et d'un greffier.",
            ],
          },
          {
            id: 'a-262',
            title: 'Article 235.',
            paragraphs: [
              'Le président de chaque tribunal correctionnel est pris tous les six mois, et par tour, parmi les membres des sections du tribunal civil du département, les présidents exceptés.',
            ],
          },
          {
            id: 'a-263',
            title: 'Article 236.',
            paragraphs: [
              'Il y a appel des jugements du tribunal correctionnel par-devant le tribunal criminel du département.',
            ],
          },
          {
            id: 'a-264',
            title: 'Article 237.',
            paragraphs: [
              "En matière de délits emportant peine afflictive ou infamante, nulle personne ne peut être jugée que sur une accusation admise par les jurés ou décrétée par le Corps législatif, dans le cas où il lui appartient de décréter l'accusation.",
            ],
          },
          {
            id: 'a-265',
            title: 'Article 238.',
            paragraphs: [
              "Un premier jury déclare si l'accusation doit être admise, ou rejetée : le fait est reconnu par un second jury, et la peine déterminée par la loi est appliquée par des tribunaux criminels.",
            ],
          },
          {
            id: 'a-266',
            title: 'Article 239.',
            paragraphs: ['Les jurés ne votent que par scrutin secret.'],
          },
          {
            id: 'a-267',
            title: 'Article 240.',
            paragraphs: [
              "Il y a dans chaque département autant de jurys d'accusation que de tribunaux correctionnels. - Les présidents des tribunaux correctionnels en sont les directeurs, chacun dans son arrondissement. - Dans les communes au-dessus de cinquante mille âmes, il pourra être établi par la loi, outre le président du tribunal correctionnel, autant de directeurs de jurys d'accusation que l'expédition des affaires l'exigera.",
            ],
          },
          {
            id: 'a-268',
            title: 'Article 241.',
            paragraphs: [
              "Les fonctions de commissaire du Pouvoir exécutif et de greffier près le directeur du jury d'accusation, sont remplies par le commissaire et par le greffier du tribunal correctionnel.",
            ],
          },
          {
            id: 'a-269',
            title: 'Article 242.',
            paragraphs: [
              "Chaque directeur du jury d'accusation a la surveillance immédiate de tous les officiers de police de son arrondissement.",
            ],
          },
          {
            id: 'a-270',
            title: 'Article 243.',
            paragraphs: [
              "Le directeur du jury poursuit immédiatement, comme officier de police, sur les dénonciations que lui fait l'accusateur public, soit d'office, soit d'après les ordres du Directoire exécutif : 1 ° Les attentats contre la liberté ou la sûreté individuelle des citoyens ; 2 ° Ceux commis contre le droit des gens ; 3 ° La rébellion à l'exécution, soit des jugements, soit de tous les actes exécutoires émanés des autorités constituées ; 4 ° Les troubles occasionnés et les voies de fait commises pour entraver la perception des contributions, la libre circulation des subsistances et des autres objets de commerce.",
            ],
          },
          {
            id: 'a-271',
            title: 'Article 244.',
            paragraphs: [
              'Il y a un tribunal criminel pour chaque département.',
            ],
          },
          {
            id: 'a-272',
            title: 'Article 245.',
            paragraphs: [
              "Le tribunal criminel est composé d'un président, d'un accusateur public, de quatre juges pris dans le tribunal civil, du commissaire du Pouvoir exécutif près le même tribunal, ou de son substitut et d'un greffier. - Il y a dans le tribunal criminel du département de la Seine, un vice-président et un substitut de l'accusateur public : ce tribunal est divisé en deux sections ; huit membres du tribunal civil y exercent les fonctions de juges.",
            ],
          },
          {
            id: 'a-273',
            title: 'Article 246.',
            paragraphs: [
              'Les présidents des sections du tribunal civil ne peuvent remplir les fonctions de juges au tribunal criminel.',
            ],
          },
          {
            id: 'a-274',
            title: 'Article 247.',
            paragraphs: [
              "Les autres juges y font le service, chacun à son tour, pendant six mois, dans l'ordre de leur nomination, et ils ne peuvent pendant ce temps exercer aucune fonction au tribunal civil.",
            ],
          },
          {
            id: 'a-275',
            title: 'Article 248.',
            paragraphs: [
              "L'accusateur public est chargé : 1 ° De poursuivre les délits sur les actes d'accusation admis par les premiers jurés ; 2 ° De transmettre aux officiers de police les dénonciations qui lui sont adressées directement ; 3 ° De surveiller les officiers de police du département, et d'agir contre eux suivant la loi, en cas de négligence ou de faits plus graves.",
            ],
          },
          {
            id: 'a-276',
            title: 'Article 249.',
            paragraphs: [
              "Le commissaire du Pouvoir exécutif est chargé : 1 ° De requérir, dans le cours de l'instruction, pour la régularité des formes, et avant le jugement, pour l'application de la loi ; 2 ° De poursuivre l'exécution des jugements rendus par le tribunal criminel.",
            ],
          },
          {
            id: 'a-277',
            title: 'Article 250.',
            paragraphs: [
              'Les juges ne peuvent proposer aux jurés aucune question complexe.',
            ],
          },
          {
            id: 'a-278',
            title: 'Article 251.',
            paragraphs: [
              "Le jury de jugement est de douze jurés au moins : l'accusé a la faculté d'en récuser, sans donner de motifs, un nombre que la loi détermine.",
            ],
          },
          {
            id: 'a-279',
            title: 'Article 252.',
            paragraphs: [
              "L'instruction devant le jury de jugement est publique, et l'on ne peut refuser aux accusés le secours d'un conseil qu'ils ont la faculté de choisir, ou qui leur est nommé d'office.",
            ],
          },
          {
            id: 'a-280',
            title: 'Article 253.',
            paragraphs: [
              'Toute personne acquittée par un jury légal ne peut être reprise ni accusée pour le même fait.',
            ],
          },
        ],
      },
      {
        id: 'section-21-tribunal-de-cassation',
        title: 'Tribunal de cassation',
        articles: [
          {
            id: 'a-281',
            title: 'Article 254.',
            paragraphs: [
              "Il y a pour toute la République un Tribunal de cassation. - Il prononce : 1 ° Sur les demandes en cassation contre les jugements en dernier ressort rendus par les tribunaux ; 2 ° Sur les demandes en renvoi d'un tribunal à un autre, pour cause de suspicion légitime ou de sûreté publique ; 3 ° Sur les règlements de juges et les prises à partie contre un tribunal entier.",
            ],
          },
          {
            id: 'a-282',
            title: 'Article 255.',
            paragraphs: [
              'Le Tribunal de cassation ne peut jamais connaître du fond des affaires ; mais il casse les jugements rendus sur des procédures dans lesquelles les formes ont été violées, ou qui contiennent quelque contravention expresse à la loi, et il renvoie le fond du procès au tribunal qui doit en connaître.',
            ],
          },
          {
            id: 'a-283',
            title: 'Article 256.',
            paragraphs: [
              'Lorsque, après une cassation, le second jugement sur le fond est attaqué par les mêmes moyens que le premier, la question ne peut plus être agitée au Tribunal de cassation, sans avoir été soumise au Corps législatif, qui porte une loi à laquelle le Tribunal de cassation est tenu de se conformer.',
            ],
          },
          {
            id: 'a-284',
            title: 'Article 257.',
            paragraphs: [
              "Chaque année, le Tribunal de cassation est tenu d'envoyer à chacune des sections du Corps législatif une députation qui lui présente l'état des jugements rendus, avec la notice en marge, et le texte de la loi qui a déterminé le jugement.",
            ],
          },
          {
            id: 'a-285',
            title: 'Article 258.',
            paragraphs: [
              'Le nombre des juges du Tribunal de cassation ne peut excéder les trois quarts du nombre des départements.',
            ],
          },
          {
            id: 'a-286',
            title: 'Article 259.',
            paragraphs: [
              'Ce Tribunal est renouvelé par cinquième tous les ans. - Les Assemblées électorales des départements nomment successivement et alternativement les juges qui doivent remplacer ceux qui sortent du Tribunal de cassation. - Les juges de ce Tribunal peuvent toujours être réélus.',
            ],
          },
          {
            id: 'a-287',
            title: 'Article 260.',
            paragraphs: [
              'Chaque juge du Tribunal de cassation a un suppléant élu par la même Assemblée électorale.',
            ],
          },
          {
            id: 'a-288',
            title: 'Article 261.',
            paragraphs: [
              'Il y a près du Tribunal de cassation un commissaire et des substituts nommés et destituables par le Directoire exécutif.',
            ],
          },
          {
            id: 'a-289',
            title: 'Article 262.',
            paragraphs: [
              'Le Directoire exécutif dénonce au Tribunal de cassation, par la voie de son commissaire, et sans préjudice du droit des parties intéressées, les actes par lesquels les juges ont excédé leurs pouvoirs.',
            ],
          },
          {
            id: 'a-290',
            title: 'Article 263.',
            paragraphs: [
              "Le Tribunal annule ces actes ; et s'ils donnent lieu à la forfaiture, le fait est dénoncé au Corps législatif, qui rend le décret d'accusation, après avoir entendu ou appelé les prévenus.",
            ],
          },
          {
            id: 'a-291',
            title: 'Article 264.',
            paragraphs: [
              'Le Corps législatif ne peut annuler les jugements du Tribunal de cassation, sauf à poursuivre personnellement les juges qui auraient encouru la forfaiture.',
            ],
          },
        ],
      },
      {
        id: 'section-22-haute-cour-de-justice',
        title: 'Haute Cour de justice',
        articles: [
          {
            id: 'a-292',
            title: 'Article 265.',
            paragraphs: [
              'Il y a une Haute Cour de justice pour juger les accusations admises par le Corps législatif, soit contre ses propres membres, soit contre ceux du Directoire exécutif.',
            ],
          },
          {
            id: 'a-293',
            title: 'Article 266.',
            paragraphs: [
              'La Haute Cour de justice est composée de cinq juges et de deux accusateurs nationaux tirés du Tribunal de cassation, et de hauts jurés nommés par les assemblées électorales des départements.',
            ],
          },
          {
            id: 'a-294',
            title: 'Article 267.',
            paragraphs: [
              "La Haute Cour de justice ne se forme qu'en vertu d'une proclamation du Corps législatif, rédigée et publiée par le Conseil des Cinq-Cents.",
            ],
          },
          {
            id: 'a-295',
            title: 'Article 268.',
            paragraphs: [
              "Elle se forme et tient ses séances dans le lieu désigné par la proclamation du Conseil des Cinq-Cents. - Ce lieu ne peut être plus près qu'à douze myriamètres de celui où réside le Corps législatif.",
            ],
          },
          {
            id: 'a-296',
            title: 'Article 269.',
            paragraphs: [
              'Lorsque le Corps législatif a proclamé la formation de la Haute Cour de justice, le Tribunal de cassation tire au sort quinze de ses membres dans une séance publique ; il nomme de suite, dans la même séance, par la voie du scrutin secret, cinq de ces quinze : les cinq juges ainsi nommés sont les juges de la Haute Cour de justice ; ils choisissent entre eux un président.',
            ],
          },
          {
            id: 'a-297',
            title: 'Article 270.',
            paragraphs: [
              "Le Tribunal de cassation nomme, dans la même séance, par scrutin, à la majorité absolue, deux de ses membres pour remplir à la Haute Cour de justice les fonctions d'accusateurs nationaux.",
            ],
          },
          {
            id: 'a-298',
            title: 'Article 271.',
            paragraphs: [
              "Les actes d'accusation sont dressés et rédigés par le Conseil des Cinq-Cents.",
            ],
          },
          {
            id: 'a-299',
            title: 'Article 272.',
            paragraphs: [
              'Les Assemblées électorales de chaque département nomment, tous les ans, un jury pour la Haute Cour de justice.',
            ],
          },
          {
            id: 'a-300',
            title: 'Article 273.',
            paragraphs: [
              "Le Directoire exécutif fait imprimer et publier, un mois après l'époque des élections, la liste des jurés nommés par la Haute Cour de justice.",
            ],
          },
        ],
      },
      {
        id: 'section-23-titre-ix-de-la-force-arm-e',
        title: 'TITRE IX - De la force armée',
        articles: [
          {
            id: 'a-301',
            title: 'Article 274.',
            paragraphs: [
              "La force armée est instituée pour défendre l'Etat contre les ennemis du dehors, et pour assurer au-dedans le maintien de l'ordre et l'exécution des lois.",
            ],
          },
          {
            id: 'a-302',
            title: 'Article 275.',
            paragraphs: [
              'La force publique est essentiellement obéissante : nul corps armé ne peut délibérer.',
            ],
          },
          {
            id: 'a-303',
            title: 'Article 276.',
            paragraphs: [
              'Elle se distingue en garde nationale sédentaire et garde nationale en activité.',
            ],
          },
        ],
      },
      {
        id: 'section-24-de-la-garde-nationale-s-dentaire',
        title: 'De la garde nationale sédentaire',
        articles: [
          {
            id: 'a-304',
            title: 'Article 277.',
            paragraphs: [
              'La garde nationale sédentaire est composée de tous les citoyens et fils de citoyens en état de porter les armes.',
            ],
          },
          {
            id: 'a-305',
            title: 'Article 278.',
            paragraphs: [
              'Son organisation et sa discipline sont les mêmes pour toute la République ; elles sont déterminées par la loi.',
            ],
          },
          {
            id: 'a-306',
            title: 'Article 279.',
            paragraphs: [
              "Aucun Français ne peut exercer les droits de citoyen, s'il n'est inscrit au rôle de la garde nationale sédentaire.",
            ],
          },
          {
            id: 'a-307',
            title: 'Article 280.',
            paragraphs: [
              "Les distinctions de garde et la subordination n'y subsistent que relativement au service et pendant sa durée.",
            ],
          },
          {
            id: 'a-308',
            title: 'Article 281.',
            paragraphs: [
              "Les officiers de la garde nationale sédentaire sont élus à temps par les citoyens qui la composent et ne peuvent être réélus qu'après un intervalle.",
            ],
          },
          {
            id: 'a-309',
            title: 'Article 282.',
            paragraphs: [
              "Le commandement de la garde nationale d'un département entier ne peut être confié habituellement à un seul citoyen.",
            ],
          },
          {
            id: 'a-310',
            title: 'Article 283.',
            paragraphs: [
              "S'il est jugé nécessaire de rassembler toute la garde nationale d'un département, le Directoire exécutif peut nommer un commandement temporaire.",
            ],
          },
          {
            id: 'a-311',
            title: 'Article 284.',
            paragraphs: [
              'Le commandement de la garde nationale sédentaire, dans une ville de cent mille habitants et au-dessus, ne peut être habituellement confié à un seul homme.',
            ],
          },
        ],
      },
      {
        id: 'section-25-de-la-garde-nationale-en-activit',
        title: 'De la garde nationale en activité',
        articles: [
          {
            id: 'a-312',
            title: 'Article 285.',
            paragraphs: [
              'La République entretient à sa solde, même en temps de paix, sous le nom de gardes nationales en activité, une armée de terre et de mer.',
            ],
          },
          {
            id: 'a-313',
            title: 'Article 286.',
            paragraphs: [
              "L'armée se forme par enrôlements, volontaires, et, en cas de besoin, par le mode que la loi détermine.",
            ],
          },
          {
            id: 'a-314',
            title: 'Article 287.',
            paragraphs: [
              "Aucun étranger qui n'a point acquis les droits de citoyen français, ne peut être admis dans les armées françaises, à moins qu'il n'ait fait une ou plusieurs campagnes pour l'établissement de la République.",
            ],
          },
          {
            id: 'a-315',
            title: 'Article 288.',
            paragraphs: [
              "Les commandants en chef de terre et de mer ne sont nommés qu'en cas de guerre ; ils reçoivent du Directoire exécutif des commissions révocables à volonté. La durée de ces commissions se borne à une campagne ; mais elles peuvent être continuées.",
            ],
          },
          {
            id: 'a-316',
            title: 'Article 289.',
            paragraphs: [
              'Le commandement général des armées de la République ne peut être confié à un seul homme.',
            ],
          },
          {
            id: 'a-317',
            title: 'Article 290.',
            paragraphs: [
              "L'armée de terre et de mer est soumise à des lois particulières, pour la discipline, la forme des jugements et la nature des peines.",
            ],
          },
          {
            id: 'a-318',
            title: 'Article 291.',
            paragraphs: [
              "Aucune partie de la garde nationale sédentaire, ni de la garde nationale en activité, ne peut agir, pour le service intérieur de la République, que sur la réquisition par écrit de l'autorité civile, dans les formes prescrites par la loi.",
            ],
          },
          {
            id: 'a-319',
            title: 'Article 292.',
            paragraphs: [
              "La force publique ne peut être requise par les autorités civiles que dans l'étendue de leur territoire ; elle ne peut se transporter d'un canton dans un autre, sans y être autorisée par l'administration du département, ni d'un département dans un autre, sans les ordres du Directoire exécutif.",
            ],
          },
          {
            id: 'a-320',
            title: 'Article 293.',
            paragraphs: [
              "Néanmoins le Corps législatif détermine les moyens d'assurer par la force publique l'exécution des jugements et la poursuite des accusés sur le territoire français.",
            ],
          },
          {
            id: 'a-321',
            title: 'Article 294.',
            paragraphs: [
              "En cas de danger imminent, l'administration municipale d'un canton peut requérir la garde nationale des cantons voisins ; en ce cas, l'administration qui a requis et les chefs des gardes nationales qui ont été requises, sont également tenus d'en rendre compte au même instant à l'administration départementale.",
            ],
          },
          {
            id: 'a-322',
            title: 'Article 295.',
            paragraphs: [
              'Aucune troupe étrangère ne peut être introduite sur le territoire français, sans le consentement préalable du Corps législatif.',
            ],
          },
        ],
      },
      {
        id: 'section-26-titre-x-instruction-publique',
        title: 'TITRE X - Instruction publique',
        articles: [
          {
            id: 'a-323',
            title: 'Article 296.',
            paragraphs: [
              'Il y a dans la République des écoles primaires où les élèves apprennent à lire, à écrire, les éléments du calcul et ceux de la morale. La République pourvoit aux frais de logement des instituteurs préposés à ces écoles.',
            ],
          },
          {
            id: 'a-324',
            title: 'Article 297.',
            paragraphs: [
              "Il y a, dans les diverses parties de la République, des écoles supérieures aux écoles primaires, et dont le nombre sera tel, qu'il y en ait au moins une pour deux départements.",
            ],
          },
          {
            id: 'a-325',
            title: 'Article 298.',
            paragraphs: [
              'Il y a, pour toute la République, un institut national chargé de recueillir les découvertes, de perfectionner les arts et les sciences.',
            ],
          },
          {
            id: 'a-326',
            title: 'Article 299.',
            paragraphs: [
              "Les divers établissements d'instruction publique n'ont entre eux aucun rapport de subordination, ni de correspondance administrative.",
            ],
          },
          {
            id: 'a-327',
            title: 'Article 300.',
            paragraphs: [
              "Les citoyens ont le droit de former des établissements particuliers d'éducation et d'instruction, ainsi que des sociétés libres pour concourir aux progrès des sciences, des lettres et des arts.",
            ],
          },
          {
            id: 'a-328',
            title: 'Article 301.',
            paragraphs: [
              'Il sera établi des fêtes nationales, pour entretenir la fraternité entre les citoyens et les attacher à la Constitution, à la patrie et aux lois.',
            ],
          },
        ],
      },
      {
        id: 'section-28-contributions',
        title: 'Contributions',
        articles: [
          {
            id: 'a-329',
            title: 'Article 302.',
            paragraphs: [
              "Les contributions publiques sont délibérées et fixées chaque année par le Corps législatif. A lui seul apparient d'en établir. Elles ne peuvent subsister au-delà d'un an, si elles ne sont expressément renouvelées.",
            ],
          },
          {
            id: 'a-330',
            title: 'Article 303.',
            paragraphs: [
              "Le Corps législatif peut créer tel genre de contribution qu'il croira nécessaire ; mais il doit établir chaque année une imposition foncière et une imposition personnelle.",
            ],
          },
          {
            id: 'a-331',
            title: 'Article 304.',
            paragraphs: [
              "Tout individu qui, n'étant pas dans le cas des articles 12 et 13 de la Constitution, n'a pas été compris au rôle des contributions directes, a le droit de se présenter à l'administration municipale de sa commune, et de s'y inscrire pour une contribution personnelle égale à la valeur locale de trois journées de travail agricole.",
            ],
          },
          {
            id: 'a-332',
            title: 'Article 305.',
            paragraphs: [
              "L'inscription mentionnés dans l'article précédent ne peut se faire que durant le mois de messidor de chaque année.",
            ],
          },
          {
            id: 'a-333',
            title: 'Article 306.',
            paragraphs: [
              'Les contributions de toute nature sont réparties entre tous les contribuables à raison de leurs facultés.',
            ],
          },
          {
            id: 'a-334',
            title: 'Article 307.',
            paragraphs: [
              'Le Directoire exécutif dirige et surveille la perception et le versement des contributions, et donne à cet effet tous les ordres nécessaires.',
            ],
          },
          {
            id: 'a-335',
            title: 'Article 308.',
            paragraphs: [
              'Les comptes détaillés de la dépense des ministres, signés et certifiés par eux, sont rendus publics au commencement de chaque année. - Il en sera de même des états de recette des diverses contributions, et de tous les revenus publics.',
            ],
          },
          {
            id: 'a-336',
            title: 'Article 309.',
            paragraphs: [
              "Les états de ces dépenses et recettes sont distingués suivant leur nature ; ils expriment les sommes touchées et dépensées, année par année, dans chaque partie d'administration générale.",
            ],
          },
          {
            id: 'a-337',
            title: 'Article 310.',
            paragraphs: [
              'Sont également publiés les comptes des dépenses particulières aux départements, et relatives aux tribunaux, aux administrations, au progrès des sciences, à tous les travaux et établissements publics.',
            ],
          },
          {
            id: 'a-338',
            title: 'Article 311.',
            paragraphs: [
              'Les administrations de département et les municipalités ne peuvent faire aucune répartition au-delà des sommes fixées par le Corps législatif, ni délibérer ou permettre, sans être autorisées par lui, aucun emprunt local à la charge des citoyens du département, de la commune et du canton.',
            ],
          },
          {
            id: 'a-339',
            title: 'Article 312.',
            paragraphs: [
              "Au Corps législatif seul appartient le droit de régler la fabrication et l'émission de toute espèce de monnaies, d'en fixer la valeur et le poids, et d'en déterminer le type.",
            ],
          },
          {
            id: 'a-340',
            title: 'Article 313.',
            paragraphs: [
              "Le Directoire surveille la fabrication des monnaies, et nomme les officiers chargés d'exercer immédiatement cette inspection.",
            ],
          },
          {
            id: 'a-341',
            title: 'Article 314.',
            paragraphs: [
              'Le Corps législatif détermine les contributions des colonies et leurs rapports commerciaux avec la métropole.',
            ],
          },
        ],
      },
      {
        id: 'section-29-tr-sorerie-nationale-et-comptabilit',
        title: 'Trésorerie nationale et comptabilité',
        articles: [
          {
            id: 'a-342',
            title: 'Article 315.',
            paragraphs: [
              'Il y a cinq commissaires de la Trésorerie nationale, élus par le Conseil des Anciens, sur une liste triple présentée par celui des Cinq-Cents.',
            ],
          },
          {
            id: 'a-343',
            title: 'Article 316.',
            paragraphs: [
              "La durée de leurs fonctions est de cinq années : l'un d'eux est renouvelé tous les ans, et peut être réélu sans intervalle et indéfiniment.",
            ],
          },
          {
            id: 'a-344',
            title: 'Article 317.',
            paragraphs: [
              "Les commissaires de la Trésorerie sont chargés de surveiller la recette de tous les deniers nationaux ; - D'ordonner les mouvements de fonda et le paiement de toutes les dépenses publiques consenties par le Corps législatif ; - De tenir un compte ouvert de dépense et de recette avec le receveur des contributions directes de chaque département, avec les différentes régies nationales, et avec les payeurs qui seraient établis dans les départements ; - D'entretenir avec lesdits receveurs et payeurs, avec les régies et administrations, la correspondance nécessaire pour assurer la rentrée exacte et régulière des fonds.",
            ],
          },
          {
            id: 'a-345',
            title: 'Article 318.',
            paragraphs: [
              "Ils ne peuvent rien faire payer, sous peine de forfaiture, qu'en vertu : 1 ° D'un décret du Corps législatif, et jusqu'à concurrence des fonds décrétés par lui sur chaque objet ; 2 ° D'une décision du Directoire ; 3 ° De la signature du ministre qui ordonne la dépense.",
            ],
          },
          {
            id: 'a-346',
            title: 'Article 319.',
            paragraphs: [
              "Ils ne peuvent, aussi sous peine de forfaiture, approuver aucun paiement, si le mandat, signé par le ministre que ce genre de dépense concerne, n'énonce pas la date, tant de la décision du Directoire exécutif, que des décrets du Corps législatif, qui autorisent le paiement.",
            ],
          },
          {
            id: 'a-347',
            title: 'Article 320.',
            paragraphs: [
              'Les receveurs des contributions directes de chaque département, les différentes régies nationales, et les payeurs dans les départements, remettent à la Trésorerie nationale leurs comptes respectifs : la Trésorerie les vérifie et les arrête.',
            ],
          },
          {
            id: 'a-348',
            title: 'Article 321',
            paragraphs: [
              'Il y a cinq commissaires de la comptabilité nationale, élus par le Corps législatif, aux mêmes époques et selon les mêmes formes et conditions que les commissaires de la Trésorerie.',
            ],
          },
          {
            id: 'a-349',
            title: 'Article 322.',
            paragraphs: [
              "Le compte général des recettes et des dépenses de la République, appuyé des comptes particuliers et des pièces justificatives, est présenté par les commissaires de la Trésorerie aux commissaires de la comptabilité, qui le vérifient et l'arrêtent.",
            ],
          },
          {
            id: 'a-350',
            title: 'Article 323.',
            paragraphs: [
              "Les commissaires de la Comptabilité donnent connaissance au Corps législatif des abus, malversations, et de tous les cas de responsabilité qu'ils découvrent dans le cours de leurs opérations ; ils proposent dans leur partie les mesures convenables aux intérêts de la République.",
            ],
          },
          {
            id: 'a-351',
            title: 'Article 324.',
            paragraphs: [
              'Le résultat des comptes arrêtés par les commissaires de la Comptabilité est imprimé et rendu public.',
            ],
          },
          {
            id: 'a-352',
            title: 'Article 325.',
            paragraphs: [
              "Les commissaires, tant de la Trésorerie nationale que de la comptabilité, ne peuvent être suspendus ni destitués que par le Corps législatif. Mais, durant l'ajournement du Corps législatif, le Directoire exécutif peut suspendre et remplacer provisoirement les commissaires de la Trésorerie nationale au nombre de deux au plus, à charge d'en référer à l'un et l'autre Conseil du Corps législatif, aussitôt qu'ils ont repris leurs séances.",
            ],
          },
        ],
      },
      {
        id: 'section-30-titre-xii-relations-ext-rieures',
        title: 'TITRE XII - Relations extérieures',
        articles: [
          {
            id: 'a-353',
            title: 'Article 326.',
            paragraphs: [
              'La guerre ne peut être décidée que par un décret du Corps législatif, sur la proposition formelle et nécessaire du Directoire exécutif.',
            ],
          },
          {
            id: 'a-354',
            title: 'Article 327.',
            paragraphs: [
              'Les deux Conseils législatifs concourent, dans les formes ordinaires, au décret par lequel la guerre est décidée.',
            ],
          },
          {
            id: 'a-355',
            title: 'Article 328.',
            paragraphs: [
              "En cas d'hostilités imminentes ou commencées, de menaces ou de préparatifs de guerre contre la République française, le Directoire exécutif est tenu d'employer, pour la défense de l'Etat, les moyens mis à sa disposition, à la charge d'en prévenir sans délai le Corps législatif. - Il peut même indiquer, en ce cas, les augmentations de force et les nouvelles dispositions législatives que les circonstances pourraient exiger.",
            ],
          },
          {
            id: 'a-356',
            title: 'Article 329.',
            paragraphs: [
              "Le Directoire seul peut entretenir des relations politiques au-dehors, conduire les négociations, distribuer les forces de terre et de mer, ainsi qu'il le juge convenable, et en régler la direction en cas de guerre.",
            ],
          },
          {
            id: 'a-357',
            title: 'Article 330.',
            paragraphs: [
              'Il est autorisé à faire les stipulations préliminaires, telles que des armistices, des neutralisations ; il peut arrêter aussi des conventions secrètes.',
            ],
          },
          {
            id: 'a-358',
            title: 'Article 331.',
            paragraphs: [
              "Le Directoire exécutif arrête, signe ou fait signer avec les puissances étrangères, tous les traités de paix, d'alliance, de trêve, de neutralité, de commerce, et autres conventions qu'il juge nécessaires au bien de l'Etat. - Ces traités et conventions sont négociés au nom de la République française, par des agents diplomatiques nommés par le Directoire exécutif, et chargés de ses instructions.",
            ],
          },
          {
            id: 'a-359',
            title: 'Article 332.',
            paragraphs: [
              'Dans le cas où un traité renferme des articles secrets, les dispositions de ces articles ne peuvent être destructives des articles patents, ni contenir aucune aliénation du territoire de la République.',
            ],
          },
          {
            id: 'a-360',
            title: 'Article 333.',
            paragraphs: [
              "Les traités ne sont valables qu'après avoir été examinés et ratifiés par le Corps législatif ; néanmoins les conditions secrètes peuvent recevoir provisoirement leur exécution dès l'instant même où elles sont arrêtées par le Directoire.",
            ],
          },
          {
            id: 'a-361',
            title: 'Article 334.',
            paragraphs: [
              "L'un et l'autre Conseils législatifs ne délibèrent sur la guerre ni sur la paix, qu'en comité général.",
            ],
          },
          {
            id: 'a-362',
            title: 'Article 335.',
            paragraphs: [
              'Les étrangers établis ou non en France, succèdent à leurs parents étrangers ou français ; ils peuvent contracter, acquérir et recevoir des biens situés en France, et en disposer, de même que les citoyens français, par tous les moyens autorisés par les lois.',
            ],
          },
        ],
      },
      {
        id: 'section-31-titre-xiii-r-vision-de-la-constituti',
        title: 'TITRE XIII - Révision de la Constitution',
        articles: [
          {
            id: 'a-363',
            title: 'Article 336.',
            paragraphs: [
              "Si l'expérience faisait sentir les inconvénients de quelques articles de la Constitution, le Conseil des Anciens en proposerait la révision.",
            ],
          },
          {
            id: 'a-364',
            title: 'Article 337.',
            paragraphs: [
              'La proposition du Conseil des Anciens est, en ce cas, soumise à la ratification du Conseil des Cinq-Cents.',
            ],
          },
          {
            id: 'a-365',
            title: 'Article 338.',
            paragraphs: [
              "Lorsque, dans un espace de neuf années, la proposition du Conseil des Anciens, ratifiée par le Conseil des Cinq-Cents, a été faite à trois époques éloignées l'une de l'autre de trois années au moins, une Assemblée de révision est convoquée.",
            ],
          },
          {
            id: 'a-366',
            title: 'Article 339.',
            paragraphs: [
              'Cette Assemblée est formée de deux membres par département, tous élus de la même manière que les membres du Corps législatif, et réunissant les mêmes conditions que celles exigées par le Conseil des Anciens.',
            ],
          },
          {
            id: 'a-367',
            title: 'Article 340.',
            paragraphs: [
              "Le Conseil des Anciens désigne, pour la réunion de l'Assemblée de révision, un lieu distant de 20 myriamètres au moins de celui où siège le Corps législatif.",
            ],
          },
          {
            id: 'a-368',
            title: 'Article 341.',
            paragraphs: [
              "L'Assemblée de révision a le droit de changer le lieu de sa résidence, en observant la distance prescrite par l'article précédent.",
            ],
          },
          {
            id: 'a-369',
            title: 'Article 342.',
            paragraphs: [
              "L'Assemblée de révision n'exerce aucune fonction législative ni de gouvernement ; elle se borne à la révision des seuls articles constitutionnels qui lui ont été désignée par le Corps législatif.",
            ],
          },
          {
            id: 'a-370',
            title: 'Article 343.',
            paragraphs: [
              "Tous les articles de la Constitution, sans exception, continuent d'être en vigueur tant que les changements proposés par l'Assemblée de révision n'ont pas été acceptés par le peuple.",
            ],
          },
          {
            id: 'a-371',
            title: 'Article 344.',
            paragraphs: [
              "Les membres de l'Assemblée de révision délibèrent en commun.",
            ],
          },
          {
            id: 'a-372',
            title: 'Article 345.',
            paragraphs: [
              'Les citoyens qui sont membres du Corps législatif au moment où une Assemblée de révision est convoquée, ne peuvent être élus membres de cette Assemblée.',
            ],
          },
          {
            id: 'a-373',
            title: 'Article 346.',
            paragraphs: [
              "L'Assemblée de révision adresse immédiatement aux Assemblées primaires le projet de réforme qu'elle a arrêté. - Elle est dissoute dès que ce projet leur a été adressé.",
            ],
          },
          {
            id: 'a-374',
            title: 'Article 347.',
            paragraphs: [
              "En aucun cas, la durée de l'Assemblée de révision ne peut excéder trois mois.",
            ],
          },
          {
            id: 'a-375',
            title: 'Article 348.',
            paragraphs: [
              "Les membres de l'Assemblée de révision ne peuvent être recherchés, accusés ni jugés, en aucun temps, pour ce qu'ils ont dit ou écrit dans l'exercice de leurs fonctions. - Pendant la durée de ces fonctions, ils ne peuvent être mis en jugement, si ce n'est par une décision des membres mêmes de l'Assemblée de révision.",
            ],
          },
          {
            id: 'a-376',
            title: 'Article 349.',
            paragraphs: [
              "L'Assemblée de révision n'assiste à aucune cérémonie publique ; ses membres reçoivent la même indemnité que celle des membres du Corps législatif.",
            ],
          },
          {
            id: 'a-377',
            title: 'Article 350.',
            paragraphs: [
              "L'Assemblée de révision a le droit d'exercer ou faire exercer la police dans la commune où elle réside.",
            ],
          },
        ],
      },
      {
        id: 'section-32-titre-xiv-dispositions-g-n-rales',
        title: 'TITRE XIV - Dispositions générales',
        articles: [
          {
            id: 'a-378',
            title: 'Article 351.',
            paragraphs: [
              "Il n'existe entre les citoyens d'autre supériorité que celle des fonctionnaires publics, et relativement à l'exercice de leurs fonctions.",
            ],
          },
          {
            id: 'a-379',
            title: 'Article 352.',
            paragraphs: [
              "La loi ne reconnaît ni voeux religieux, ni aucun engagement contraire aux droits naturels de l'homme.",
            ],
          },
          {
            id: 'a-380',
            title: 'Article 353.',
            paragraphs: [
              "Nul ne peut être empêché de dire, écrire, imprimer et publier sa pensée. - Les écrits ne peuvent être soumis à aucune censure avant leur publication. - Nul ne peut être responsable de ce qu'il a écrit ou publié, que dans les cas prévus par la loi.",
            ],
          },
          {
            id: 'a-381',
            title: 'Article 354.',
            paragraphs: [
              "Nul ne peut être empêché d'exercer, en se conformant aux lois, le culte qu'il a choisi. - Nul ne peut être forcé de contribuer aux dépenses d'un culte. La République n'en salarie aucun.",
            ],
          },
          {
            id: 'a-382',
            title: 'Article 355.',
            paragraphs: [
              "Il n'y a ni privilège, ni maîtrise, ni jurande, ni limitation à la liberté de la presse, du commerce, et à l'exercice de l'industrie et des arts de toute espèce. - Toute loi prohibitive en ce genre, quand les circonstances la rendent nécessaire, est essentiellement provisoire, et n'a d'effet que pendant un an au plus, à moins qu'elle ne soit formellement renouvelée.",
            ],
          },
          {
            id: 'a-383',
            title: 'Article 356.',
            paragraphs: [
              "La loi surveille particulièrement les professions qui intéressent les moeurs publiques, la sûreté et la santé des citoyens ; mais on ne peut faire dépendre l'admission à l'exercice de ces professions, d'aucune prestation pécuniaire.",
            ],
          },
          {
            id: 'a-384',
            title: 'Article 357.',
            paragraphs: [
              'La loi doit pourvoir à la récompense des inventeurs ou au maintien de la propriété exclusive de leurs découvertes ou de leurs productions.',
            ],
          },
          {
            id: 'a-385',
            title: 'Article 358.',
            paragraphs: [
              "La Constitution garantit l'inviolabilité de toutes les propriétés, ou la juste indemnité de celles dont la nécessité publique, légalement constatée, exigerait le sacrifice.",
            ],
          },
          {
            id: 'a-386',
            title: 'Article 359.',
            paragraphs: [
              "La maison de chaque citoyen est un asile inviolable : pendant la nuit, nul n'a le droit d'y entrer que dans le cas d'incendie, d'inondation, ou de réclamation venant de l'intérieur de la maison. - Pendant le jour, on peut y exécuter les ordres des autorités constituées. - Aucune visite domiciliaire ne peut avoir lieu qu'en vertu d'une loi, et pour la personne ou l'objet expressément désigné dans l'acte qui ordonne la visite.",
            ],
          },
          {
            id: 'a-387',
            title: 'Article 360.',
            paragraphs: [
              "Il ne peut être formé de corporations ni d'associations contraires, à l'ordre public.",
            ],
          },
          {
            id: 'a-388',
            title: 'Article 361.',
            paragraphs: [
              'Aucune assemblée de citoyens ne peut se qualifier de société populaire.',
            ],
          },
          {
            id: 'a-389',
            title: 'Article 362.',
            paragraphs: [
              "Aucune société particulière, s'occupant de questions politiques, ne peut correspondre avec une autre, ni s'affilier à elle, ni tenir des séances publiques, composées de sociétaires et d'assistants distingués les uns des autres, ni imposer des conditions d'admission et d'éligibilité, ni s'arroger des droits d'exclusion, ni faire porter à ses membres aucun signe extérieur de leur association.",
            ],
          },
          {
            id: 'a-390',
            title: 'Article 363.',
            paragraphs: [
              'Les citoyens ne peuvent exercer leurs droits politiques que dans les Assemblées primaires ou communales',
            ],
          },
          {
            id: 'a-391',
            title: 'Article 364.',
            paragraphs: [
              "Tous les citoyens sont libres d'adresser aux autorités publiques des pétitions, mais elles doivent être individuelles ; nulle association ne peut en présenter de collectives, si ce n'est les autorités constituées, et pour des objets propres à leur attribution. - Les pétitionnaires ne doivent jamais oublier le respect dû aux autorités constituées.",
            ],
          },
          {
            id: 'a-392',
            title: 'Article 365.',
            paragraphs: [
              'Tout attroupement armé est un attentat à la Constitution ; il doit être dissipé sur-le-champ par la force.',
            ],
          },
          {
            id: 'a-393',
            title: 'Article 366.',
            paragraphs: [
              "Tout attroupement non armé doit être également dissipé, d'abord par voie de commandement verbal, et, s'il est nécessaire, par le développement de la force armée.",
            ],
          },
          {
            id: 'a-394',
            title: 'Article 367.',
            paragraphs: [
              "Plusieurs autorités constituées ne peuvent jamais se réunir pour délibérer ensemble ; aucun acte émané d'une telle réunion ne peut être exécuté.",
            ],
          },
          {
            id: 'a-395',
            title: 'Article 368.',
            paragraphs: [
              'Nul ne peut porter des marques distinctives qui rappellent des fonctions antérieurement exercées, ni des services rendus.',
            ],
          },
          {
            id: 'a-396',
            title: 'Article 369.',
            paragraphs: [
              "Les membres du Corps législatif, et tous les Fonctionnaires publics, portent, dans l'exercice de leurs l'onctions, le costume ou le signe de l'autorité dont ils sont revêtus : la loi en détermine la forme.",
            ],
          },
          {
            id: 'a-397',
            title: 'Article 370.',
            paragraphs: [
              "Nul citoyen ne peut renoncer, ni en tout ni en partie, à l'indemnité ou au traitement qui lui est attribué par la loi, à raison de fonctions publiques.",
            ],
          },
          {
            id: 'a-398',
            title: 'Article 371.',
            paragraphs: [
              'Il y a dans la République uniformité de poids et de mesures.',
            ],
          },
          {
            id: 'a-399',
            title: 'Article 372.',
            paragraphs: [
              "L'ère française commence au 22 septembre 1792, jour de la fondation de la République.",
            ],
          },
          {
            id: 'a-400',
            title: 'Article 373.',
            paragraphs: [
              "La Nation française déclare qu'en aucun cas elle ne souffrira le retour des Français qui, ayant abandonné leur patrie depuis le 15 juillet 1789, ne sont pas compris dans les exceptions portées aux lois rendues contre les émigrés ; et elle interdit au Corps législatif de créer de nouvelles exceptions sur ce point. - Les biens des émigrés sont irrévocablement acquis au profit de la République.",
            ],
          },
          {
            id: 'a-401',
            title: 'Article 374.',
            paragraphs: [
              "La Nation française proclame pareillement, comme garantie de la foi publique, qu'après une adjudication légalement consommée de biens nationaux, quelle qu'en soit l'origine, l'acquéreur légitime ne peut en être dépossédé, sauf aux tiers réclamants à être, s'il y a lieu, indemnisés par le Trésor national.",
            ],
          },
          {
            id: 'a-402',
            title: 'Article 375.',
            paragraphs: [
              "Aucun des pouvoirs institués par la Constitution, n'a le droit de la changer dans son ensemble ni dans aucune de ses parties, sauf les réformes qui pourront y être faites par la voie de la révision, conformément aux dispositions du titre XIII.",
            ],
          },
          {
            id: 'a-403',
            title: 'Article 376.',
            paragraphs: [
              "Les citoyens se rappelleront sans cesse que c'est de la sagesse des choix dans les Assemblées primaires et électorales, que dépendent principalement la durée, la conservation et la prospérité de la République.",
            ],
          },
          {
            id: 'a-404',
            title: 'Article 377.',
            paragraphs: [
              "Le peuple français remet le dépôt de la présente Constitution à la fidélité du Corps législatif, du Directoire exécutif, des administrateurs et des juges ; à la vigilance des pères de famille, aux épouses et aux mères, à l'affection des jeunes citoyens, au courage de tous les Français.",
              "Inscription aux lettres d'information",
              "Abonnez vous à l'actualité du contentieux pour rester informé(e) des dernières saisines et décisions, ainsi qu'à Titre VII, la revue numérique et gratuite du Conseil constitutionnel.",
            ],
          },
        ],
      },
      {
        id: 'section-33-actualit-s',
        title: 'Actualités',
        articles: [
          {
            id: 'p-4',
            title: 'Text',
            paragraphs: ['Toutes les actualités', 'Agenda', 'Publications'],
          },
        ],
      },
      {
        id: 'section-34-les-d-cisions',
        title: 'Les décisions',
        articles: [
          {
            id: 'p-7',
            title: 'Text',
            paragraphs: [
              'Toutes les décisions',
              'QPC 360°',
              'Assister à une audience',
            ],
          },
        ],
      },
      {
        id: 'section-35-espace-presse',
        title: 'Espace presse',
        articles: [
          {
            id: 'p-10',
            title: 'Text',
            paragraphs: [
              'Communiqués',
              'Ressources',
              'Espace photo',
              'Accréditation',
            ],
          },
        ],
      },
      {
        id: 'section-36-mentions-l-gales',
        title: 'Mentions légales',
        articles: [
          {
            id: 'p-14',
            title: 'Text',
            paragraphs: [
              'Informations légales',
              'Précisions sur les informations à portée juridique',
              'Gestion des cookies',
            ],
          },
        ],
      },
      {
        id: 'section-37-le-conseil',
        title: 'Le Conseil',
        articles: [
          {
            id: 'p-17',
            title: 'Text',
            paragraphs: [
              'Recrutement',
              'Contacts',
              'Données ouvertes (open data)',
            ],
          },
        ],
      },
      {
        id: 'section-38-faq',
        title: 'FAQ',
        articles: [
          {
            id: 'p-20',
            title: 'Text',
            paragraphs: [
              'Guide du site internet',
              'Plan du site',
              'Accessibilité',
              'Application',
              'lien_bluesky',
              'lien_twitter',
              'lien_facebook',
              'lien_linkedin',
              'lien_dailymotion',
              'Flux RSS',
            ],
          },
        ],
      },
    ],
    notes: [
      {
        title: 'Reading context',
        text: 'This text comes from the Conseil constitutionnel historical archive. Notes here should help readers compare institutions, rights, and revision rules across French constitutional history.',
      },
    ],
  },
  {
    id: 'constitution-du-22-frimaire-an-viii',
    year: '1799',
    shortLabel: '1799',
    title: 'Constitution of Year VIII',
    sourceTitle:
      "Constitution de l'An VIII - Consulat - 22 frimaire An VIII - 13 décembre 1799",
    regime: 'Consulate',
    date: '13 December 1799',
    sourceUrl:
      'https://www.conseil-constitutionnel.fr/les-constitutions-dans-l-histoire/constitution-du-22-frimaire-an-viii',
    localSourcePath:
      '/constitution-archive/constitution-du-22-frimaire-an-viii.html',
    summary:
      'Constitution of Year VIII belongs to the Consulate period. The original French text is preserved here as a source document for reading and comparison.',
    revisionGroups: [],
    sections: [
      {
        id: 'section-1-titre-i-de-l-exercice-des-droits-de-',
        title: "Titre I - De l'exercice des droits de cité",
        articles: [
          {
            id: 'a-1',
            title: 'Article 1.',
            paragraphs: [
              'La République française est une et indivisible. - Son territoire européen est distribué en départements et arrondissements communaux.',
            ],
          },
          {
            id: 'a-2',
            title: 'Article 2.',
            paragraphs: [
              "Tout homme né et résidant en France qui, âgé de vingt et un ans accomplis, s'est fait inscrire sur le registre civique de son arrondissement communal, et qui a demeuré depuis pendant un an sur le territoire de la République, est citoyen français.",
            ],
          },
          {
            id: 'a-3',
            title: 'Article 3.',
            paragraphs: [
              "Un étranger devient citoyen français, lorsqu'après avoir atteint l'âge de vingt et un ans accomplis, et avoir déclaré l'intention de se fixer en France, il y a résidé pendant dix années consécutives.",
            ],
          },
          {
            id: 'a-4',
            title: 'Article 4.',
            paragraphs: [
              "La qualité de citoyen français se perd : -Par la naturalisation en pays étranger ; - Par l'acceptation de fonctions ou de pensions offertes par un gouvernement étranger ; - Par l'affiliation à toute corporation étrangère qui supposerait des distinctions de naissance ; - Par la condamnation à des peines afflictives ou infamantes.",
            ],
          },
          {
            id: 'a-5',
            title: 'Article 5.',
            paragraphs: [
              "L'exercice des droits de citoyen français est suspendu, par l'état de débiteur failli, ou d'héritier immédiat, détenteur à titre gratuit de la succession totale ou partielle d'un failli ; - Par l'état de domestique à gages, attaché au service de la personne ou du ménage ; - Par l'état d'interdiction judiciaire, d'accusation ou de contumace.",
            ],
          },
          {
            id: 'a-6',
            title: 'Article 6.',
            paragraphs: [
              "Pour exercer les droits de cité dans un arrondissement communal, il faut y avoir acquis domicile par une année de résidence, et ne l'avoir pas perdu par une année d'absence.",
            ],
          },
          {
            id: 'a-7',
            title: 'Article 7.',
            paragraphs: [
              "Les citoyens de chaque arrondissement communal désignent par leurs suffrages ceux d'entre eux qu'ils croient les plus propres à gérer les affaires publiques. Il en résulte une liste de confiance, contenant un nombre de noms égal au dixième du nombre des citoyens ayant droit d'y coopérer. C'est dans cette première liste communale que doivent être pris les fonctionnaires publics de l'arrondissement.",
            ],
          },
          {
            id: 'a-8',
            title: 'Article 8.',
            paragraphs: [
              "Les citoyens compris dans les listes communales d'un département désignent également un dixième d'entre eux. Il en résulte une seconde liste dite départementale, dans laquelle doivent être pris les fonctionnaires publics du département.",
            ],
          },
          {
            id: 'a-9',
            title: 'Article 9.',
            paragraphs: [
              "Les citoyens portés dans la liste départementale désignent pareillement un dixième d'entre eux : il en résulte une troisième liste qui comprend les citoyens de ce département éligibles aux fonctions publiques nationales.",
            ],
          },
          {
            id: 'a-10',
            title: 'Article 10.',
            paragraphs: [
              "Les citoyens, ayant droit de coopérer à la formation de l'une des listes mentionnées aux trois articles précédents, sont appelés tous les trois ans à pourvoir au remplacement des inscrits décédés, ou absents pour toute autre cause que l'exercice d'une fonction publique.",
            ],
          },
          {
            id: 'a-11',
            title: 'Article 11.',
            paragraphs: [
              "Ils peuvent, en même temps, retirer de la liste des inscrits qu'ils ne jugent pas à propos d'y maintenir, et les remplacer par d'autres citoyens dans lesquels ils ont une plus grande confiance.",
            ],
          },
          {
            id: 'a-12',
            title: 'Article 12.',
            paragraphs: [
              "Nul n'est retiré d'une liste que par les votes de la majorité absolue des citoyens ayant droit de coopérer à sa formation.",
            ],
          },
          {
            id: 'a-13',
            title: 'Article 13.',
            paragraphs: [
              "On n'est point retiré d'une liste d'éligibles par cela seul qu'on n'est pas maintenu sur une autre liste d'un degré inférieur ou supérieur.",
            ],
          },
          {
            id: 'a-14',
            title: 'Article 14.',
            paragraphs: [
              "L'inscription sur une liste d'éligibles n'est nécessaire qu'à l'égard de celles des fonctions publiques par lesquelles cette condition est expressément exigée par la Constitution ou par la loi. Les listes d'éligibles seront formées pour la première fois dans le cours de l'an IX - Les citoyens qui seront nommés pour la première formation des autorités constituées, feront partie nécessaire des premières listes d'éligibles.",
            ],
          },
        ],
      },
      {
        id: 'section-2-titre-ii-du-s-nat-conservateur',
        title: 'Titre II - Du Sénat conservateur',
        articles: [
          {
            id: 'a-15',
            title: 'Article 15.',
            paragraphs: [
              "Le Sénat conservateur est composé de quatre-vingts membres, inamovibles et à vie, âgés de quarante ans au moins. - Pour la formation du Sénat, il sera d'abord nommé soixante membres : ce nombre sera porté à soixante-deux dans le cours de l'an VIII, à soixante-quatre en l'an IX, et s'élèvera ainsi graduellement à quatre-vingts par l'addition de deux membres en chacune des dix premières années.",
            ],
          },
          {
            id: 'a-16',
            title: 'Article 16.',
            paragraphs: [
              "La nomination à une place de sénateur se fait par le Sénat, qui choisit entre trois candidats présentés, le premier par le Corps législatif ; le second, par le Tribunat ; et le troisième par le Premier consul. - Il ne choisit qu'entre deux candidats, si l'un d'eux est proposé par deux des trois autorités présentantes : il est tenu d'admettre celui qui serait proposé à la fois par les trois autorités.",
            ],
          },
          {
            id: 'a-17',
            title: 'Article 17.',
            paragraphs: [
              "Le Premier consul sortant de place, soit par l'expiration de ses fonctions, soit par démission, devient sénateur de plein droit et nécessairement. - Les deux autres consuls, durant le mois qui suit l'expiration de leurs fonctions, peuvent prendre place dans le Sénat, et ne sont pas obligés d'user de ce droit. - Ils ne l'ont point quand ils quittent leurs fonctions consulaires par démission.",
            ],
          },
          {
            id: 'a-18',
            title: 'Article 18.',
            paragraphs: [
              'Un sénateur est à jamais inéligible à toute autre fonction publique.',
            ],
          },
          {
            id: 'a-19',
            title: 'Article 19.',
            paragraphs: [
              "Toutes les listes faites dans les départements en vertu de l'article 9, sont adressées au Sénat : elles composent la liste nationale.",
            ],
          },
          {
            id: 'a-20',
            title: 'Article 20.',
            paragraphs: [
              'Il élit dans cette liste les législateurs, les tribuns, les consuls, les juges de cassation, et les commissaires à la comptabilité.',
            ],
          },
          {
            id: 'a-21',
            title: 'Article 21.',
            paragraphs: [
              "Il maintient ou annule tous les actes qui lui sont déférés comme inconstitutionnels par le Tribunat ou par le gouvernement : les listes d'éligibles sont comprises parmi ces actes.",
            ],
          },
          {
            id: 'a-22',
            title: 'Article 22.',
            paragraphs: [
              'Des revenus de domaines nationaux déterminés sont affectés aux dépenses du Sénat. Le traitement annuel de chacun de ses membres se prend sur ces revenus, et il est égal au vingtième de celui du Premier consul.',
            ],
          },
          {
            id: 'a-23',
            title: 'Article 23.',
            paragraphs: ['Les séances du Sénat ne sont pas publiques.'],
          },
          {
            id: 'a-24',
            title: 'Article 24.',
            paragraphs: [
              'Les citoyens Sieyès et Roger-Ducos, consuls sortants, sont nommés membres du Sénat conservateur : ils se réuniront avec le second et le troisième consuls nommés par la présente Constitution. Ces quatre citoyens nomment la majorité du Sénat, qui se complète ensuite lui-même, et procède aux élections qui lui sont confiées.',
            ],
          },
        ],
      },
      {
        id: 'section-3-titre-iii-du-pouvoir-l-gislatif',
        title: 'Titre III - Du pouvoir législatif',
        articles: [
          {
            id: 'a-25',
            title: 'Article 25.',
            paragraphs: [
              'Il ne sera promulgué de lois nouvelles que lorsque le projet en aura été proposé par le gouvernement, communiqué au Tribunat et décrété par le Corps législatif.',
            ],
          },
          {
            id: 'a-26',
            title: 'Article 26.',
            paragraphs: [
              'Les projets que le gouvernement propose sont rédigés en articles. En tout état de la discussion de ces projets, le gouvernement peut les retirer ; il peut les reproduire modifiés.',
            ],
          },
          {
            id: 'a-27',
            title: 'Article 27.',
            paragraphs: [
              "Le Tribunat est composé de cent membres âgés de vingt-cinq ans au moins ; ils sont renouvelés par cinquième tous les ans, et indéfiniment rééligibles tant qu'ils demeurent sur la liste nationale.",
            ],
          },
          {
            id: 'a-28',
            title: 'Article 28.',
            paragraphs: [
              "Le Tribunat discute les projets de loi ; il en vote l'adoption ou le rejet. - Il envoie trois orateurs pris dans son sein, par lesquels les motifs du voeu qu'il a exprimé sur chacun de ces projets sont exposés et défendus devant le Corps législatif. - Il défère au Sénat, pour cause d'inconstitutionnalité seulement, les listes d'éligibles, les actes du Corps législatif et ceux du gouvernement.",
            ],
          },
          {
            id: 'a-29',
            title: 'Article 29.',
            paragraphs: [
              "Il exprime son voeu sur les lois faites et à faire, sur les abus à corriger, sur les améliorations à entreprendre dans toutes les parties de l'administration publique, mais jamais sur les affaires civiles ou criminelles portées devant les tribunaux. - Les voeux qu'il manifeste en vertu du présent article, n'ont aucune suite nécessaire, et n'obligent aucune autorité constituée à une délibération.",
            ],
          },
          {
            id: 'a-30',
            title: 'Article 30.',
            paragraphs: [
              "Quand le Tribunat s'ajourne, il peut nommer une commission de dix à quinze de ses membres, chargée de le convoquer si elle le juge convenable.",
            ],
          },
          {
            id: 'a-31',
            title: 'Article 31.',
            paragraphs: [
              "Le Corps législatif est composé de trois cents membres, âgés de trente ans au moins ; ils sont renouvelés par cinquième tous les ans. - Il doit toujours s'y trouver un citoyen au moins de chaque département de la République.",
            ],
          },
          {
            id: 'a-32',
            title: 'Article 32.',
            paragraphs: [
              "Un membre sortant du Corps législatif ne peut y rentrer qu'après un an d'intervalle ; mais il peut être immédiatement élu à toute autre fonction publique, y compris celle de tribun, s'il y est d'ailleurs éligible.",
            ],
          },
          {
            id: 'a-33',
            title: 'Article 33.',
            paragraphs: [
              'La session du Corps législatif commence chaque année le 1er frimaire, et ne dure que quatre mois ; il peut être extraordinairement convoqué durant les huit autres par le Gouvernement.',
            ],
          },
          {
            id: 'a-34',
            title: 'Article 34.',
            paragraphs: [
              'Le Corps législatif fait la loi en statuant par scrutin secret, et sans aucune discussion de la part de ses membres, sur les projets de loi débattus devant lui par les orateurs du Tribunat et du gouvernement.',
            ],
          },
          {
            id: 'a-35',
            title: 'Article 35.',
            paragraphs: [
              'Les séances du Tribunat et celles du Corps législatif sont publiques ; le nombre des assistants soit aux unes, soit aux autres, ne peut excéder deux cents.',
            ],
          },
          {
            id: 'a-36',
            title: 'Article 36.',
            paragraphs: [
              "Le traitement annuel d'un tribun est de quinze mille francs ; celui d'un législateur, de dix mille francs.",
            ],
          },
          {
            id: 'a-37',
            title: 'Article 37.',
            paragraphs: [
              "Tout décret du Corps législatif, le dixième jour après son émission, est promulgué par le Premier consul, à moins que, dans ce délai, il n'y ait eu recours au Sénat pour cause d'inconstitutionnalité. Ce recours n'a point lieu contre les lois promulguées.",
            ],
          },
          {
            id: 'a-38',
            title: 'Article 38.',
            paragraphs: [
              "Le premier renouvellement du Corps législatif et du Tribunat n'aura lieu que dans le cours de l'an X.",
            ],
          },
        ],
      },
      {
        id: 'section-4-titre-iv-du-gouvernement',
        title: 'Titre IV - Du gouvernement',
        articles: [
          {
            id: 'a-39',
            title: 'Article 39.',
            paragraphs: [
              "Le gouvernement est confié à trois consuls nommés pour dix ans, et indéfiniment rééligibles. - Chacun d'eux est élu individuellement, avec la qualité distincte ou de premier, ou de second, ou de troisième consul. - La Constitution nomme Premier consul le citoyen Bonaparte, ex-consul provisoire ; second consul, le citoyen Cambacérès, ex-ministre de la Justice ; et troisième consul, le citoyen Lebrun, ex-membre de la commission du Conseil des Anciens. - Pour cette fois, le troisième consul n'est nommé que pour cinq ans.",
            ],
          },
          {
            id: 'a-40',
            title: 'Article 40.',
            paragraphs: [
              'Le Premier consul a des fonctions et des attributions particulières, dans lesquelles il est momentanément suppléé, quand il y a lieu, par un de ses collègues.',
            ],
          },
          {
            id: 'a-41',
            title: 'Article 41.',
            paragraphs: [
              "Le Premier consul promulgue les lois ; il nomme et révoque à volonté les membres du Conseil d'État, les ministres, les ambassadeurs et autres agents extérieurs en chef, les officiers de l'armée de terre et de mer, les membres des administrations locales et les commissaires du gouvernement près les tribunaux. Il nomme tous les juges criminels et civils autres que les juges de paix et les juges de cassation, sans pouvoir les révoquer.",
            ],
          },
          {
            id: 'a-42',
            title: 'Article 42.',
            paragraphs: [
              "Dans les autres actes du gouvernement, le second et le troisième consuls ont voix consultative : ils signent le registre de ces actes pour constater leur présence ; et s'ils le veulent, y consignent leurs opinions ; après quoi, la décision du Premier consul suffit.",
            ],
          },
          {
            id: 'a-43',
            title: 'Article 43.',
            paragraphs: [
              "Le traitement du Premier consul sera de cinq cent mille francs en l'an VIII. Le traitement de chacun des deux autres consuls est égal aux trois dixièmes de celui du premier.",
            ],
          },
          {
            id: 'a-44',
            title: 'Article 44.',
            paragraphs: [
              'Le gouvernement propose les lois, et fait les règlements nécessaires pour assurer leur exécution.',
            ],
          },
          {
            id: 'a-45',
            title: 'Article 45.',
            paragraphs: [
              "Le gouvernement dirige les recettes et les dépenses de l'État, conformément à la loi annuelle qui détermine le montant des unes et des autres ; il surveille la fabrication des monnaies, dont la loi seule ordonne l'émission, fixe le titre, le poids et le type.",
            ],
          },
          {
            id: 'a-46',
            title: 'Article 46.',
            paragraphs: [
              "Si le gouvernement est informé qu'il se trame quelque conspiration contre l'État, il peut décerner des mandats d'amener et des mandats d'arrêt contre les personnes qui en sont présumées les auteurs ou les complices ; mais si, dans un délai de dix jours après leur arrestation, elles ne sont mises en liberté ou en réglée, il y a, de la part du ministre signataire du mandat, crime de détention arbitraire.",
            ],
          },
          {
            id: 'a-47',
            title: 'Article 47.',
            paragraphs: [
              "Le gouvernement pourvoit à la sûreté intérieure et à la défense extérieure de l'État ; il distribue les forces de terre et de mer, et en règle la direction.",
            ],
          },
          {
            id: 'a-48',
            title: 'Article 48.',
            paragraphs: [
              "La garde nationale en activité est soumise aux règlements d'administration publique ; la garde nationale sédentaire n'est soumise qu'à la loi.",
            ],
          },
          {
            id: 'a-49',
            title: 'Article 49.',
            paragraphs: [
              "Le gouvernement entretient des relations politiques au-dehors, conduit les négociations, fait les stipulations préliminaires, signe, fait signer et conclut tous les traités de paix, d'alliance, de trêve, de neutralité, de commerce, et autres conventions.",
            ],
          },
          {
            id: 'a-50',
            title: 'Article 50',
            paragraphs: [
              "Les déclarations de guerre et les traités de paix, d'alliance et de commerce, sont proposés, discutés, décrétés et promulgués comme des lois. - Seulement, les discussions et délibérations sur ces objets, tant dans le Tribunat que dans le Corps législatif, se font en comité secret quand le gouvernement le demande.",
            ],
          },
          {
            id: 'a-51',
            title: 'Article 51.',
            paragraphs: [
              "Les articles secrets d'un traité ne peuvent être destructifs des articles patents.",
            ],
          },
          {
            id: 'a-52',
            title: 'Article 52.',
            paragraphs: [
              "Sous la direction des consuls, un Conseil d'État est chargé de rédiger les projets de lois et les règlements d'administration publique, et de résoudre les difficultés qui s'élèvent en matière administrative.",
            ],
          },
          {
            id: 'a-53',
            title: 'Article 53.',
            paragraphs: [
              "C'est parmi les membres du Conseil d'État que sont toujours pris les orateurs chargés de porter la parole au nom du gouvernement devant le Corps législatif - Ces orateurs ne sont jamais envoyés au nombre de plus de trois pour la défense d'un même projet de loi.",
            ],
          },
          {
            id: 'a-54',
            title: 'Article 54.',
            paragraphs: [
              "Les ministres procurent l'exécution des lois et des règlements d'administration publique.",
            ],
          },
          {
            id: 'a-55',
            title: 'Article 55.',
            paragraphs: [
              "Aucun acte du gouvernement ne peut avoir d'effet s'il n'est signé par un ministre.",
            ],
          },
          {
            id: 'a-56',
            title: 'Article 56.',
            paragraphs: [
              "L'un des ministres est spécialement chargé de l'administration du Trésor public : il assure les recettes, ordonne les mouvements de fonds et les paiements autorisés par la loi. Il ne peut rien faire payer qu'en vertu : 1 ° D'une loi, et jusqu'à la concurrence des fonds qu'elle a déterminés pour un genre de dépenses ; 2 ° D'un arrêté du gouvernement ; 3 ° D'un mandat signé par un ministre.",
            ],
          },
          {
            id: 'a-57',
            title: 'Article 57.',
            paragraphs: [
              'Les comptes détaillés de la dépense de chaque ministre, signés et certifiés par lui, sont rendus publics.',
            ],
          },
          {
            id: 'a-58',
            title: 'Article 58.',
            paragraphs: [
              "Le gouvernement ne peut élire ou conserver pour conseillers d'État, pour ministres, que des citoyens dont les noms se trouvent inscrits sur la liste nationale.",
            ],
          },
          {
            id: 'a-59',
            title: 'Article 59.',
            paragraphs: [
              "Les administrations locales établies soit pour chaque arrondissement communal, soit pour des portions plus étendues du territoire, sont subordonnées aux ministres. Nul ne peut devenir ou rester membre de ces administrations, s'il n'est porté ou maintenu sur l'une des listes mentionnées aux articles 7 et 8.",
            ],
          },
        ],
      },
      {
        id: 'section-5-titre-v-des-tribunaux',
        title: 'Titre V - Des tribunaux',
        articles: [
          {
            id: 'a-60',
            title: 'Article 60.',
            paragraphs: [
              "Chaque arrondissement communal a un ou plusieurs juges de paix, élus immédiatement par les citoyens pour trois années. - Leur principale fonction consiste à concilier les parties, qu'ils invitent, dans le cas de non-conciliation, à se faire juger par des arbitres.",
            ],
          },
          {
            id: 'a-61',
            title: 'Article 61.',
            paragraphs: [
              "En matière civile, il y a des tribunaux de première instance et des tribunaux d'appel. La loi détermine l'organisation des uns et des autres, leur compétence, et le territoire formant le ressort de chacun.",
            ],
          },
          {
            id: 'a-62',
            title: 'Article 62.',
            paragraphs: [
              "En matière de délits emportant peine afflictive ou infamante, un premier jury admet ou rejette l'accusation : si elle est admise, un second jury reconnaît le fait ; et les juges, formant un tribunal criminel, appliquent la peine. Leur jugement est sans appel.",
            ],
          },
          {
            id: 'a-63',
            title: 'Article 63.',
            paragraphs: [
              "La fonction d'accusateur public près un tribunal criminel, est remplie par le commissaire du gouvernement.",
            ],
          },
          {
            id: 'a-64',
            title: 'Article 64.',
            paragraphs: [
              "Les délits qui n'emportent pas peine afflictive ou infamante, sont jugés par des tribunaux de police correctionnelle, sauf l'appel aux tribunaux criminels.",
            ],
          },
          {
            id: 'a-65',
            title: 'Article 65.',
            paragraphs: [
              "Il y a, pour toute la République, un Tribunal de cassation, qui prononce sur les demandes en cassation contre les jugements en dernier ressort rendus par les tribunaux ; sur les demandes en renvoi d'un tribunal à un autre pour cause de suspicion légitime ou de sûreté publique ; sur les prises à partie contre un tribunal entier.",
            ],
          },
          {
            id: 'a-66',
            title: 'Article 66.',
            paragraphs: [
              'Le Tribunal de cassation ne connaît point du fond des affaires ; mais il casse les jugements rendus sur des procédures dans lesquelles les formes ont été violées, ou qui contiennent quelque contravention expresse à la loi ; et il renvoie le fond du procès au tribunal qui doit en connaître.',
            ],
          },
          {
            id: 'a-67',
            title: 'Article 67.',
            paragraphs: [
              "Les juges composant les tribunaux de première instance, et les commissaires du gouvernement établis près ces tribunaux, sont pris dans la liste communale ou dans la liste départementale. - Les juges formant les tribunaux d'appel, et les commissaires placés près d'eux, sont pris dans la liste départementale. - Les juges composant le Tribunal de cassation, et les commissaires établis près ce Tribunal, sont pris dans la liste nationale.",
            ],
          },
          {
            id: 'a-68',
            title: 'Article 68.',
            paragraphs: [
              "Les juges, autres que les juges de paix, conservent leurs fonctions toute leur vie, à moins qu'ils ne soient condamnés pour forfaiture, ou qu'ils ne soient pas maintenus sur les listes d'éligibles.",
            ],
          },
        ],
      },
      {
        id: 'section-6-titre-vi-de-la-responsabilit-des-fon',
        title: 'Titre VI - De la responsabilité des fonctionnaires publics',
        articles: [
          {
            id: 'a-69',
            title: 'Article 69.',
            paragraphs: [
              "Les fonctions des membres soit du Sénat, soit du Corps législatif, soit du Tribunat, celles des consuls et des conseillers d'État ne donnent lieu à aucune responsabilité.",
            ],
          },
          {
            id: 'a-70',
            title: 'Article 70.',
            paragraphs: [
              "Les délits personnels emportant peine afflictive ou infamante, commis par un membre soit du Sénat, soit du Tribunat, soit du Corps législatif, soit du Conseil d'État, sont poursuivis devant les tribunaux ordinaires, après qu'une délibération du Corps auquel le prévenu appartient, a autorisé cette poursuite.",
            ],
          },
          {
            id: 'a-71',
            title: 'Article 71.',
            paragraphs: [
              "Les ministres prévenus de délits privés emportant peine afflictive ou infamante, sont considérés comme membres du Conseil d'État.",
            ],
          },
          {
            id: 'a-72',
            title: 'Article 72.',
            paragraphs: [
              "Les ministres sont responsables : 1 ° De tout acte de gouvernement signé par eux, et déclaré inconstitutionnel par le Sénat ; 2 ° De l'inexécution des lois et des règlements d'administration publique ; 3 ° Des ordres particuliers qu'ils ont donnés, si ces ordres sont contraires à la Constitution, aux lois et aux règlements.",
            ],
          },
          {
            id: 'a-73',
            title: 'Article 73.',
            paragraphs: [
              "Dans les cas de l'article précédent, le Tribunat dénonce le ministre par un acte sur lequel le Corps législatif délibère dans les formes ordinaires, après avoir entendu ou appelé le dénoncé. Le ministre mis en jugement par un décret du Corps législatif, est jugé par une Haute Cour, sans appel et sans recours en cassation. - La Haute Cour est composée de juges et de jurés. Les juges sont choisis par le Tribunal de cassation, et dans son sein ; les jurés sont pris dans la liste nationale ; le tout suivant les formes que la loi détermine.",
            ],
          },
          {
            id: 'a-74',
            title: 'Article 74.',
            paragraphs: [
              'Les juges civils et criminels sont, pour les délits relatifs à leurs fonctions poursuivis devant les tribunaux auxquels celui de cassation les renvoie après avoir annulé leurs actes.',
            ],
          },
          {
            id: 'a-75',
            title: 'Article 75.',
            paragraphs: [
              "Les agents du Gouvernement, autres que les ministres, ne peuvent être poursuivis pour des faits relatifs à leurs fonctions, qu'en vertu d'une décision du Conseil d'Etat : en ce cas, la poursuite a lieu devant les tribunaux ordinaires.",
            ],
          },
        ],
      },
      {
        id: 'section-7-titre-vii-dispositions-g-n-rales',
        title: 'Titre VII - Dispositions générales',
        articles: [
          {
            id: 'a-76',
            title: 'Article 76.',
            paragraphs: [
              "La maison de toute personne habitant le territoire français, est un asile inviolable. - Pendant la nuit, nul n'a le droit d'y entrer que dans le cas d'incendie, d'inondation, ou de réclamation faite de l'intérieur de la maison. - Pendant le jour, on peut y entrer pour un objet spécial déterminé ou par une loi, ou par un ordre émané d'une autorité publique.",
            ],
          },
          {
            id: 'a-77',
            title: 'Article 77.',
            paragraphs: [
              "Pour que l'acte qui ordonne l'arrestation d'une personne puisse être exécuté, il faut : 1 ° Qu'il exprime formellement le motif de l'arrestation, et la loi en exécution de laquelle elle est ordonnée ; 2 ° Qu'il émane d'un fonctionnaire à qui la loi ait donné formellement ce pouvoir ; 3 ° Qu'il soit notifié à la personne arrêtée, et qu'il lui en soit laissé copie.",
            ],
          },
          {
            id: 'a-78',
            title: 'Article 78.',
            paragraphs: [
              "Un gardien ou geôlier ne peut recevoir ou détenir aucune personne qu'après avoir transcrit sur son registre l'acte qui ordonne l'arrestation : cet acte doit être un mandat donné dans les formes prescrites par l'article précédent, ou une ordonnance de prise de corps, ou un décret d'accusation ou un jugement.",
            ],
          },
          {
            id: 'a-79',
            title: 'Article 79.',
            paragraphs: [
              "Tout gardien ou geôlier est tenu, sans qu'aucun ordre puisse l'en dispenser, de représenter la personne détenue à l'officier civil ayant la police de la maison de détention, toutes les fois qu'il en sera requis par cet officier.",
            ],
          },
          {
            id: 'a-80',
            title: 'Article 80.',
            paragraphs: [
              "La représentation de la personne détenue ne pourra être refusée à ses parents et amis porteurs de l'ordre de l'officier civil, lequel sera toujours tenu de l'accorder, à moins que le gardien ou geôlier ne représente une ordonnance du juge pour tenir la personne au secret.",
            ],
          },
          {
            id: 'a-81',
            title: 'Article 81.',
            paragraphs: [
              "Tous ceux qui, n'ayant point reçu de la loi le pouvoir de faire arrêter, donneront, signeront, exécuteront l'arrestation d'une personne quelconque ; tous ceux qui, même dans le cas de l'arrestation autorisée par la loi, recevront ou retiendront la personne arrêtée, dans un lieu de détention non publiquement et légalement désigné comme tel, et tous les gardiens ou geôliers qui contreviendront aux dispositions des trois articles précédents, seront coupables du crime de détention arbitraire.",
            ],
          },
          {
            id: 'a-82',
            title: 'Article 82.',
            paragraphs: [
              'Toutes rigueurs employées dans les arrestations, détentions ou exécutions, autres que celles autorisées par les lois, sont des crimes.',
            ],
          },
          {
            id: 'a-83',
            title: 'Article 83.',
            paragraphs: [
              "Toute personne a le droit d'adresser des pétitions individuelles à toute autorité constituée, et spécialement au Tribunat.",
            ],
          },
          {
            id: 'a-84',
            title: 'Article 84.',
            paragraphs: [
              'La force publique est essentiellement obéissante : nul corps armé ne peut délibérer.',
            ],
          },
          {
            id: 'a-85',
            title: 'Article 85.',
            paragraphs: [
              'Les délits des militaires sont soumis à des tribunaux spéciaux, et à des formes particulières de jugement.',
            ],
          },
          {
            id: 'a-86',
            title: 'Article 86.',
            paragraphs: [
              "La Nation française déclare qu'il sera accordé des pensions à tous les militaires blessés à la défense de la patrie, ainsi qu'aux veuves et aux enfants des militaires morts sur le champ de bataille ou des suites de leurs blessures.",
            ],
          },
          {
            id: 'a-87',
            title: 'Article 87.',
            paragraphs: [
              'Il sera décerné des récompenses nationales aux guerriers qui auront rendu des services éclatants en combattant pour la République.',
            ],
          },
          {
            id: 'a-88',
            title: 'Article 88.',
            paragraphs: [
              'Un Institut national est chargé de recueillir les découvertes, de perfectionner les sciences et les arts.',
            ],
          },
          {
            id: 'a-89',
            title: 'Article 89.',
            paragraphs: [
              'Une commission de comptabilité nationale règle et vérifie les comptes des recettes et des dépenses de la République. Cette commission est composée de sept membres choisis par le Sénat dans la liste nationale.',
            ],
          },
          {
            id: 'a-90',
            title: 'Article 90.',
            paragraphs: [
              'Un corps constitué ne peut prendre de délibération que dans une séance où les deux tiers au moins de ses membres se trouvent présents.',
            ],
          },
          {
            id: 'a-91',
            title: 'Article 91.',
            paragraphs: [
              'Le régime des colonies françaises est déterminé par des lois spéciales.',
            ],
          },
          {
            id: 'a-92',
            title: 'Article 92.',
            paragraphs: [
              "Dans le cas de révolte à main armée, ou de troubles qui menacent la sûreté de l'Etat, la loi peut suspendre, dans les lieux et pour le temps qu'elle détermine, l'empire de la Constitution. - Cette suspension peut être provisoirement déclarée dans les mêmes cas, par un arrêté du gouvernement, le Corps législatif étant en vacance, pourvu que ce Corps soit convoqué au plus court terme par un article du même arrêté.",
            ],
          },
          {
            id: 'a-93',
            title: 'Article 93.',
            paragraphs: [
              "La Nation française déclare qu'en aucun cas elle ne souffrira le retour des Français qui, ayant abandonné leur patrie depuis le 14 juillet 1789, ne sont pas compris dans les exceptions portées aux lois rendues contre les émigrés ; elle interdit toute exception nouvelle sur ce point. - Les biens des émigrés sont irrévocablement acquis au profit de la République.",
            ],
          },
          {
            id: 'a-94',
            title: 'Article 94.',
            paragraphs: [
              "La Nation française déclare qu'après une vente légalement consommée de biens nationaux, quelle qu'en soit l'origine, l'acquéreur légitime ne peut en être dépossédé, sauf aux tiers réclamants à être, s'il y a lieu, indemnisés par le Trésor public.",
            ],
          },
          {
            id: 'a-95',
            title: 'Article 95.',
            paragraphs: [
              "La présente Constitution sera offerte de suite à l'acceptation du peuple français.",
            ],
          },
        ],
      },
      {
        id: 'section-8-proclamation-des-consuls-de-la-r-pub',
        title:
          'Proclamation des Consuls de la République du 24 frimaire an VIII (15 décembre 1799)',
        articles: [
          {
            id: 'p-1',
            title: 'Text',
            paragraphs: [
              "Les consuls de la République aux Français : Une Constitution vous est présentée. - Elle fait cesser les incertitudes que le Gouvernement provisoire mettait dans les relations extérieures, dans la situation intérieure et militaire de la République. - Elle place dans les institutions qu'elle établit les premiers magistrats dont le dévouement a paru nécessaire à son activité. - La Constitution est fondée sur les vrais principes du Gouvernement représentatif, sur les droits sacrés de la propriété, de l'égalité, de la liberté. - Les pouvoirs qu'elle institue seront forts et stables, tels qu'ils doivent être pour garantir les droits des citoyens et les intérêts de l'État. - Citoyens, la Révolution est fixée aux principes qui l'ont commencée : elle est finie.",
            ],
          },
        ],
      },
    ],
    notes: [
      {
        title: 'Reading context',
        text: 'This text comes from the Conseil constitutionnel historical archive. Notes here should help readers compare institutions, rights, and revision rules across French constitutional history.',
      },
    ],
  },
  {
    id: 'constitution-du-16-thermidor-an-x',
    year: '1802',
    shortLabel: '1802',
    title: 'Constitution of Year X',
    sourceTitle:
      "Constitution de l'An X - Consulat à vie - 16 thermidor An X - 4 août 1802",
    regime: 'Consulate for life',
    date: '4 August 1802',
    sourceUrl:
      'https://www.conseil-constitutionnel.fr/les-constitutions-dans-l-histoire/constitution-du-16-thermidor-an-x',
    localSourcePath:
      '/constitution-archive/constitution-du-16-thermidor-an-x.html',
    summary:
      'Constitution of Year X belongs to the Consulate for life period. The original French text is preserved here as a source document for reading and comparison.',
    revisionGroups: [],
    sections: [
      {
        id: 'section-1-arr-t-des-consuls-du-20-flor-al-an-x',
        title: 'Arrêté des Consuls du 20 floréal an X (10 mai 1802)',
        articles: [
          {
            id: 'a-1',
            title: 'Article 2.',
            paragraphs: [
              'Il sera ouvert, dans chaque commune, des registres où les citoyens seront invités à consigner leur voeu sur cette question.',
            ],
          },
          {
            id: 'a-2',
            title: 'Article 3.',
            paragraphs: [
              'Ces registres seront ouverts aux secrétariats de toutes les administrations, aux greffes de tous les tribunaux, chez tous les maires et tous les notaires.',
            ],
          },
          {
            id: 'a-3',
            title: 'Article 4.',
            paragraphs: [
              "Le délai pour voter dans chaque département sera de trois semaines, à compter du jour où cet arrêté sera parvenu à la préfecture ; et de sept jours, à compter de celui où l'expédition sera parvenue à chaque commune.",
            ],
          },
        ],
      },
      {
        id: 'section-2-s-natus-consulte-du-14-thermidor-an-',
        title:
          'Sénatus-consulte du 14 thermidor an X (2 août 1802), qui proclame Napoléon Bonaparte Premier Consul à vie',
        articles: [
          {
            id: 'a-4',
            title: 'Article 1.',
            paragraphs: [
              'Le Peuple français nomme, et le Sénat proclame Napoléon Bonaparte Premier Consul à vie.',
            ],
          },
          {
            id: 'a-5',
            title: 'Article 2.',
            paragraphs: [
              "Une statue de la Paix, tenant d'une main le laurier de la Victoire, et de l'autre le décret du Sénat, attestera à la postérité la reconnaissance de la Nation.",
            ],
          },
          {
            id: 'a-6',
            title: 'Article 3.',
            paragraphs: [
              "Le Sénat portera au Premier consul l'expression de la confiance, de l'amour et de l'admiration du peuple français.",
            ],
          },
        ],
      },
      {
        id: 'section-4-titre-i',
        title: 'Titre I',
        articles: [
          {
            id: 'a-7',
            title: 'Article 1.',
            paragraphs: [
              'Chaque ressort de justice de paix a une Assemblée de canton.',
            ],
          },
          {
            id: 'a-8',
            title: 'Article 2.',
            paragraphs: [
              "Chaque arrondissement communal ou district de sous-préfecture, a un collège électoral d'arrondissement.",
            ],
          },
          {
            id: 'a-9',
            title: 'Article 3.',
            paragraphs: [
              'Chaque département a un collège électoral de département.',
            ],
          },
        ],
      },
      {
        id: 'section-5-titre-ii-des-assembl-es-de-canton',
        title: 'Titre II - Des assemblées de canton',
        articles: [
          {
            id: 'a-10',
            title: 'Article 4.',
            paragraphs: [
              "L'assemblée de canton se compose de tous les citoyens domiciliés dans le canton, et qui y sont inscrits sur la liste communale d'arrondissement. - A dater de l'époque où, aux termes de la Constitution, les listes communales doivent être renouvelées, l'assemblée de canton sera composée de tous les citoyens domiciliés dans le canton, et qui y jouissent des droits de citoyen.",
            ],
          },
          {
            id: 'a-11',
            title: 'Article 5.',
            paragraphs: [
              "Le Premier consul nomme le président de l'assemblée de canton ; - Ses fonctions durent cinq ans : il peut être renommé indéfiniment. - Il est assisté de quatre scrutateurs, dont deux sont les plus âgés, et les deux autres les plus imposés des citoyens ayant droit de voter dans l'assemblée de canton. - Le président et les quatre scrutateurs nomment le secrétaire.",
            ],
          },
          {
            id: 'a-12',
            title: 'Article 6.',
            paragraphs: [
              "L'assemblée de canton se divise en sections pour faire les opérations qui lui appartiennent. - Lors de la première convocation de chaque assemblée, l'organisation et les formes en seront déterminées par un règlement émané du gouvernement.",
            ],
          },
          {
            id: 'a-13',
            title: 'Article 7.',
            paragraphs: [
              "Le président de l'assemblée de canton nomme les présidents des sections. - Leurs fonctions finissent avec chaque assemblée sectionnaire. - Ils sont assistés chacun de deux scrutateurs, dont l'un est le plus âgé, et l'autre le plus imposé des citoyens ayant droit de voter dans la section.",
            ],
          },
          {
            id: 'a-14',
            title: 'Article 8.',
            paragraphs: [
              "L'assemblée de canton désigne deux citoyens sur lesquels le Premier consul choisit le juge de paix du canton. - Elle désigne pareillement deux citoyens pour chaque place vacante de suppléant de juge de paix.",
            ],
          },
          {
            id: 'a-15',
            title: 'Article 9.',
            paragraphs: [
              'Les juges de paix et leurs suppléants sont nommés pour dix ans.',
            ],
          },
          {
            id: 'a-16',
            title: 'Article 10.',
            paragraphs: [
              "Dans les villes de cinq mille âmes, l'assemblée de canton présente deux citoyens pour chacune des places du conseil municipal. Dans les villes où il y aura plusieurs justices de paix ou plusieurs assemblées de canton, chaque assemblée présentera pareillement deux citoyens pour chaque place du conseil municipal.",
            ],
          },
          {
            id: 'a-17',
            title: 'Article 11.',
            paragraphs: [
              'Les membres des conseils municipaux sont pris par chaque assemblée de canton, sur la liste des cent plus imposés du canton. Cette liste sera arrêtée et imprimée par ordre du préfet.',
            ],
          },
          {
            id: 'a-18',
            title: 'Article 12.',
            paragraphs: [
              'Les conseils municipaux se renouvellent tous les dix ans par moitié.',
            ],
          },
          {
            id: 'a-19',
            title: 'Article 13.',
            paragraphs: [
              'Le Premier consul choisit les maires et adjoints dans les conseils municipaux ; ils sont cinq ans en place : ils peuvent être renommés.',
            ],
          },
          {
            id: 'a-20',
            title: 'Article 14.',
            paragraphs: [
              "L'assemblée de canton nomme au collège électoral d'arrondissement, le nombre de membres qui lui est assigné, en raison du nombre de citoyens dont elle se compose.",
            ],
          },
          {
            id: 'a-21',
            title: 'Article 15.',
            paragraphs: [
              'Elle nomme au collège électoral de département, sur une liste dont il sera parlé ci-après, le nombre de membres qui lui est attribué.',
            ],
          },
          {
            id: 'a-22',
            title: 'Article 16.',
            paragraphs: [
              'Les membres des collèges électoraux doivent être domiciliés dans les arrondissements et départements respectifs.',
            ],
          },
          {
            id: 'a-23',
            title: 'Article 17.',
            paragraphs: [
              "Le gouvernement convoque les assemblées de canton, fixe le temps de leur durée et l'objet de leur réunion.",
            ],
          },
        ],
      },
      {
        id: 'section-6-titre-iii-des-coll-ges-lectoraux',
        title: 'Titre III - Des collèges électoraux',
        articles: [
          {
            id: 'a-24',
            title: 'Article 18.',
            paragraphs: [
              "Les collèges électoraux d'arrondissement ont un membre pour cinq cents habitants domiciliés dans l'arrondissement. - Le nombre des membres ne peut néanmoins excéder deux cents, ni être au-dessous de cent vingt.",
            ],
          },
          {
            id: 'a-25',
            title: 'Article 19.',
            paragraphs: [
              'Les collèges électoraux de département ont un membre par mille habitants domiciliés dans le département ; et néanmoins ces membres ne peuvent excéder trois cents, ni être au-dessous de deux cents.',
            ],
          },
          {
            id: 'a-26',
            title: 'Article 20.',
            paragraphs: ['Les membres des collèges électoraux sont à vie.'],
          },
          {
            id: 'a-27',
            title: 'Article 21.',
            paragraphs: [
              "Si un membre d'un collège électoral est dénoncé au gouvernement, comme s'étant permis quelque acte contraire à l'honneur ou à la patrie, le gouvernement invite le collège à manifester son voeu : il faut les trois quarts des voix pour faire perdre au membre dénoncé sa place dans le collège.",
            ],
          },
          {
            id: 'a-28',
            title: 'Article 22.',
            paragraphs: [
              "On perd sa place dans les collèges électoraux pour les mêmes causes qui font perdre le droit de citoyen. - On la perd également, lorsque, sans empêchement légitime, on n'a point assisté à trois réunions successives.",
            ],
          },
          {
            id: 'a-29',
            title: 'Article 23.',
            paragraphs: [
              "Le Premier consul nomme les présidents des collèges électoraux à chaque session. - Le président a seul la police du collège électoral, lorsqu'il est assemblé.",
            ],
          },
          {
            id: 'a-30',
            title: 'Article 24.',
            paragraphs: [
              'Les collèges électoraux nomment, à chaque session, deux scrutateurs et un secrétaire.',
            ],
          },
          {
            id: 'a-31',
            title: 'Article 25.',
            paragraphs: [
              "Pour parvenir à la formation des collèges électoraux de département, il sera dressé dans chaque département, sous les ordres du ministre des Finances, une liste des six cents citoyens les plus imposés aux rôles des contributions foncière, mobilière et somptuaire, et au rôle des patentes. - On ajoute à la somme de la contribution, dans le domicile du département, celle qu'on peut justifier payer dans les autres parties du territoire de la France et de ses colonies. - Cette liste sera imprimée.",
            ],
          },
          {
            id: 'a-32',
            title: 'Article 26.',
            paragraphs: [
              "L'assemblée de canton prendra sur cette liste les membres qu'elle devra nommer au collège électoral du département.",
            ],
          },
          {
            id: 'a-33',
            title: 'Article 27.',
            paragraphs: [
              "Le Premier consul peut ajouter aux collèges électoraux d'arrondissement dix membres pris parmi les citoyens appartenant à la Légion d'honneur, ou qui ont rendu des services. - Il peut ajouter à chaque collège électoral de département vingt citoyens, dont dix pris parmi les trente plus imposés du département, et les dix autres, soit parmi les membres de la Légion d'honneur, soit parmi les citoyens qui ont rendu des services. Il n'est point assujetti, pour ces nominations, à des époques déterminées.",
            ],
          },
          {
            id: 'a-34',
            title: 'Article 28.',
            paragraphs: [
              "Les collèges électoraux d'arrondissement présentent au Premier consul deux citoyens domiciliés dans l'arrondissement, pour chaque place vacante dans le conseil d'arrondissement. - Un au moins de ces citoyens doit être pris hors du collège électoral qui le désigne. - Les conseils d'arrondissement se renouvellent par tiers tous les cinq ans.",
            ],
          },
          {
            id: 'a-35',
            title: 'Article 29.',
            paragraphs: [
              "Les collèges électoraux d'arrondissement présentent, à chaque réunion, deux citoyens pour faire partie de la liste sur laquelle doivent être choisis les membres du Tribunat. - Un au moins de ces citoyens doit être pris nécessairement hors du collège qui le présente. - Tous deux peuvent être pris hors du département.",
            ],
          },
          {
            id: 'a-36',
            title: 'Article 30.',
            paragraphs: [
              'Les collèges électoraux de département présentent au Premier consul deux citoyens domiciliés dans le département pour chaque place vacante dans le conseil général du département. - Un de ces citoyens au moins doit être pris nécessairement hors du collège électoral qui le présente. - Les conseils généraux de département se renouvellent par tiers tous les cinq ans.',
            ],
          },
          {
            id: 'a-37',
            title: 'Article 31.',
            paragraphs: [
              "Les collèges électoraux de département présentent, à chaque réunion, deux citoyens pour former la liste sur laquelle sont nommés les membres du Sénat. - Un au moins doit être nécessairement pris hors du collège qui le présente, et tous deux peuvent être pris hors du département. - Ils doivent avoir l'âge et les qualités exigés par la Constitution.",
            ],
          },
          {
            id: 'a-38',
            title: 'Article 32.',
            paragraphs: [
              "Les collèges électoraux de département et d'arrondissement présentent chacun deux citoyens domiciliés dans le département, pour former la liste sur laquelle doivent être nommés les membres de la députation au Corps législatif. - Un de ces citoyens doit être pris nécessairement hors du collège qui le présente. - Il doit y avoir trois fois autant de candidats différents sur la liste formée par la réunion des présentations des collèges électoraux de département et d'arrondissement, qu'il y a de places vacantes.",
            ],
          },
          {
            id: 'a-39',
            title: 'Article 33.',
            paragraphs: [
              "On peut être membre d'un conseil de commune et d'un collège électoral d'arrondissement ou de département. - On ne peut être à la fois membre d'un collège d'arrondissement et d'un collège de département.",
            ],
          },
          {
            id: 'a-40',
            title: 'Article 34.',
            paragraphs: [
              "Les membres du Corps législatif et du Tribunat ne peuvent assister aux séances du collège électoral dont ils feront partie. Tous les autres fonctionnaires publics ont droit d'y assister et d'y voter.",
            ],
          },
          {
            id: 'a-41',
            title: 'Article 35.',
            paragraphs: [
              "Il n'est procédé par aucune assemblée de canton, à la nomination des places qui lui appartiennent dans un collège électoral, que quand ces places sont réduites aux deux tiers.",
            ],
          },
          {
            id: 'a-42',
            title: 'Article 36.',
            paragraphs: [
              "Les collèges électoraux ne s'assemblent qu'en vertu d'un acte de convocation émané du gouvernement, et dans le lieu qui leur est assigné. - Ils ne peuvent s'occuper que des opérations pour lesquelles ils sont convoqués, ni continuer leurs séances au-delà du terme fixé par l'acte de convocation. - S'ils sortent de ces bornes, le gouvernement a le droit de les dissoudre.",
            ],
          },
          {
            id: 'a-43',
            title: 'Article 37.',
            paragraphs: [
              'Les collèges électoraux ne peuvent ni directement ni indirectement, sous quelque prétexte que ce soit, correspondre entre eux.',
            ],
          },
          {
            id: 'a-44',
            title: 'Article 38.',
            paragraphs: [
              "La dissolution d'un corps électoral opère le renouvellement de tous ses membres.",
            ],
          },
        ],
      },
      {
        id: 'section-7-titre-iv-des-consuls',
        title: 'Titre IV - Des Consuls',
        articles: [
          {
            id: 'a-45',
            title: 'Article 39.',
            paragraphs: [
              'Les consuls sont à vie : - Ils sont membres du Sénat, et le président.',
            ],
          },
          {
            id: 'a-46',
            title: 'Article 40.',
            paragraphs: [
              'Le second et le troisième consuls sont nommés par le Sénat, sur la présentation du premier.',
            ],
          },
          {
            id: 'a-47',
            title: 'Article 41.',
            paragraphs: [
              "A cet effet, lorsque l'une des deux places vient à vaquer, le Premier consul présente au Sénat un premier sujet ; s'il n'est pas nommé, il en présente un second ; si le second n'est pas accepté, il en présente un troisième qui est nécessairement nommé.",
            ],
          },
          {
            id: 'a-48',
            title: 'Article 42.',
            paragraphs: [
              "Lorsque le Premier consul le juge convenable, il présente un citoyen pour lui succéder après sa mort, dans les formes indiquées par l'article précédent.",
            ],
          },
          {
            id: 'a-49',
            title: 'Article 43.',
            paragraphs: [
              "Le citoyen nommé pour succéder au Premier consul, prête serment à la République, entre les mains du Premier consul, assisté des second et troisième consuls, en présence du Sénat, des ministres, du Conseil d'État, du Corps législatif, du Tribunat, du Tribunal de cassation, des archevêques, des évêques, des présidents des tribunaux d'appel, des présidents des collèges électoraux, des présidents des assemblées de canton, des grands officiers de la Légion d'honneur, et des maires des vingt-quatre principales villes de la République. - Le secrétaire d'État dresse le procès-verbal de la prestation de serment.",
            ],
          },
          {
            id: 'a-50',
            title: 'Article 44.',
            paragraphs: [
              "Le serment est ainsi conçu : - « Je jure de maintenir la Constitution, de respecter la liberté des consciences, de m'opposer au retour des institutions féodales, de ne jamais faire la guerre que pour la défense et la gloire de la République, et de n'employer le pouvoir dont je serai revêtu que pour le bonheur du peuple, de qui et pour qui je l'aurai reçu. »",
            ],
          },
          {
            id: 'a-51',
            title: 'Article 45.',
            paragraphs: [
              'Le serment prêté, il prend séance au Sénat, immédiatement après le troisième consul.',
            ],
          },
          {
            id: 'a-52',
            title: 'Article 46.',
            paragraphs: [
              'Le Premier consul peut déposer aux archives du gouvernement son voeu sur la nomination de son successeur, pour être présenté au Sénat après sa mort.',
            ],
          },
          {
            id: 'a-53',
            title: 'Article 47.',
            paragraphs: [
              "Dans ce cas, il appelle le second et le troisième consuls, les ministres, et les présidents des sections du Conseil d'État. - En leur présence, il remet au secrétaire d'État le papier scellé de son sceau, dans lequel est consigné son voeu. Ce papier est souscrit par tous ceux qui sont présents à l'acte. - Le secrétaire d'Etat le dépose aux archives du gouvernement, en présence des ministres et des présidents des sections du Conseil d'État.",
            ],
          },
          {
            id: 'a-54',
            title: 'Article 48.',
            paragraphs: [
              "Le Premier consul peut retirer ce dépôt en observant les formalités prescrites dans l'article précédent.",
            ],
          },
          {
            id: 'a-55',
            title: 'Article 49.',
            paragraphs: [
              "Après la mort du Premier consul, si son voeu est resté déposé, le papier qui le renferme est retiré des archives du gouvernement par le secrétaire d'État, en présence des ministres et des présidents des sections du Conseil d'État. L'intégrité et l'identité en sont reconnues en présence des second et troisième consuls. Il est adressé au Sénat par un message du gouvernement, avec expédition des procès-verbaux qui en ont constaté le dépôt, l'identité et l'intégrité.",
            ],
          },
          {
            id: 'a-56',
            title: 'Article 50.',
            paragraphs: [
              "Si le sujet présenté par le Premier consul n'est pas nommé, le second et le troisième consuls en présentent chacun un : en cas de non-nomination, ils en présentent chacun un autre, et l'un des deux est nécessairement nommé.",
            ],
          },
          {
            id: 'a-57',
            title: 'Article 51.',
            paragraphs: [
              "Si le Premier consul n'a point laissé de présentation, les second et troisième consuls font leurs présentations séparées ; une première, une seconde ; et si ni l'une ni l'autre n'a obtenu de nomination, une troisième. Le Sénat nomme nécessairement sur la troisième.",
            ],
          },
          {
            id: 'a-58',
            title: 'Article 52.',
            paragraphs: [
              'Dans tous les cas, les présentations et la nomination devront être consommées dans les vingt-quatre heures qui suivront la mort du Premier consul.',
            ],
          },
          {
            id: 'a-59',
            title: 'Article 53.',
            paragraphs: [
              "La loi fixe pour la vie de chaque Premier consul l'état des dépenses du gouvernement.",
            ],
          },
        ],
      },
      {
        id: 'section-8-titre-v-du-s-nat',
        title: 'Titre V - Du Sénat',
        articles: [
          {
            id: 'a-60',
            title: 'Article 54.',
            paragraphs: [
              "Le Sénat règle par un sénatus-consulte organique, - 1 ° La constitution des colonies ; - 2 ° Tout ce qui n'a pas été prévu par la Constitution, et qui est nécessaire à sa marche ; - 3 ° Il explique les articles de la Constitution qui donnent lieu à différentes interprétations.",
            ],
          },
          {
            id: 'a-61',
            title: 'Article 55.',
            paragraphs: [
              "Le Sénat, par des actes intitulés sénatus-consultes, - 1 ° Suspend pour cinq ans les fonctions de jurés dans les départements où cette mesure est nécessaire ; - 2 ° Déclare, quand les circonstances l'exigent, des départements hors de la Constitution ; - 3 ° Détermine le temps dans lequel des individus arrêtés en vertu de l'article 46 de la Constitution, doivent être traduits devant les tribunaux, lorsqu'ils ne l'ont pas été dans les dix jours de leur arrestation ; - 4 ° Annule les jugements des tribunaux, lorsqu'ils sont attentatoires à la sûreté de l'État ; - 5 ° Dissout le Corps législatif et le Tribunat ; - 6 ° Nomme les consuls.",
            ],
          },
          {
            id: 'a-62',
            title: 'Article 56.',
            paragraphs: [
              "Les sénatus-consultes organiques et les sénatus-consultes sont délibérés par le Sénat, sur l'initiative du gouvernement. - Une simple majorité suffit pour les sénatus-consultes ; il faut les deux tiers des voix des membres présents pour un sénatus-consulte organique.",
            ],
          },
          {
            id: 'a-63',
            title: 'Article 57.',
            paragraphs: [
              "Les projets de sénatus-consultes pris en conséquence des articles 54 et 55, sont discutés dans un conseil privé, composé des consuls, de deux ministres, de deux sénateurs, de deux conseillers d'État, et de deux grands officiers de la Légion d'honneur. - Le Premier consul désigne, à chaque tenue, les membres qui doivent composer le conseil privé.",
            ],
          },
          {
            id: 'a-64',
            title: 'Article 58.',
            paragraphs: [
              "Le Premier consul ratifie les traités de paix et d'alliance, après avoir pris l'avis du conseil privé. - Avant de les promulguer, il en donne connaissance au Sénat.",
            ],
          },
          {
            id: 'a-65',
            title: 'Article 59.',
            paragraphs: [
              "L'acte de nomination d'un membre du Corps législatif, du Tribunat et du Tribunal de cassation, s'intitule Arrêté.",
            ],
          },
          {
            id: 'a-66',
            title: 'Article 60.',
            paragraphs: [
              "Les actes du Sénat relatifs à sa police et à son administration intérieure, s'intitulent Délibérations.",
            ],
          },
          {
            id: 'a-67',
            title: 'Article 61.',
            paragraphs: [
              "Dans le courant de l'an XI, il sera procédé à la nomination de quatorze citoyens pour compléter le nombre de quatre-vingts sénateurs, déterminé par l'article 15 de la Constitution. - Cette nomination sera faite par le Sénat, sur la présentation du Premier consul, qui, pour cette présentation, et pour les présentations ultérieures dans le nombre de quatre-vingts, prend trois sujets sur la liste des citoyens désignés par les collèges électoraux.",
            ],
          },
          {
            id: 'a-68',
            title: 'Article 62.',
            paragraphs: [
              "Les membres du grand conseil de la Légion d'honneur sont membres du Sénat, quel que soit leur âge.",
            ],
          },
          {
            id: 'a-69',
            title: 'Article 63.',
            paragraphs: [
              "Le Premier consul peut, en outre, nommer au Sénat, sans présentation préalable par les collèges électoraux de département, des citoyens distingués par leurs services et leurs talents, à condition néanmoins qu'ils auront l'âge requis par la Constitution, et que le nombre des sénateurs ne pourra, en aucun cas, excéder cent vingt.",
            ],
          },
          {
            id: 'a-70',
            title: 'Article 64.',
            paragraphs: [
              "Les sénateurs pourront être consuls, ministres, membres de la Légion d'honneur, inspecteurs de l'Instruction publique, et employés dans des missions extraordinaires et temporaires. - Le Sénat nomme, chaque année, deux de ses membres pour remplir les fonctions de secrétaires.",
            ],
          },
          {
            id: 'a-71',
            title: 'Article 65.',
            paragraphs: [
              "Les ministres ont séance au Sénat, mais sans voix délibérative, s'ils ne sont sénateurs.",
            ],
          },
        ],
      },
      {
        id: 'section-9-titre-vi-des-conseillers-d-tat',
        title: "Titre VI - Des conseillers d'État",
        articles: [
          {
            id: 'a-72',
            title: 'Article 66.',
            paragraphs: [
              "Les conseillers d'État n'excéderont jamais le nombre de cinquante.",
            ],
          },
          {
            id: 'a-73',
            title: 'Article 67.',
            paragraphs: ["Le Conseil d'État se divise en sections."],
          },
          {
            id: 'a-74',
            title: 'Article 68.',
            paragraphs: [
              "Les ministres ont rang, séance et voix délibérative au Conseil d'État.",
            ],
          },
        ],
      },
      {
        id: 'section-10-titre-vii-du-corps-l-gislatif',
        title: 'Titre VII - Du Corps législatif',
        articles: [
          {
            id: 'a-75',
            title: 'Article 69.',
            paragraphs: [
              "Chaque département aura dans le Corps législatif un nombre de membres proportionné à l'étendue de sa population, conformément au tableau ci-joint.",
            ],
          },
          {
            id: 'a-76',
            title: 'Article 70.',
            paragraphs: [
              'Tous les membres du Corps législatif appartenant à la même députation sont nommés à la fois.',
            ],
          },
          {
            id: 'a-77',
            title: 'Article 71.',
            paragraphs: [
              'Les départements de la République sont divisés en cinq séries, conformément au tableau ci-joint.',
            ],
          },
          {
            id: 'a-78',
            title: 'Article 72.',
            paragraphs: [
              'Les députés actuels sont classés dans les cinq séries.',
            ],
          },
          {
            id: 'a-79',
            title: 'Article 73.',
            paragraphs: [
              "Ils seront renouvelés dans l'année à laquelle appartiendra la série où sera placé le département auquel ils auront été attachés.",
            ],
          },
          {
            id: 'a-80',
            title: 'Article 74.',
            paragraphs: [
              "Néanmoins les députés qui ont été nommés en l'an X, rempliront leurs cinq années.",
            ],
          },
          {
            id: 'a-81',
            title: 'Article 75.',
            paragraphs: [
              'Le gouvernement convoque, ajourne et proroge le Corps législatif',
            ],
          },
        ],
      },
      {
        id: 'section-11-titre-viii-du-tribunat',
        title: 'Titre VIII - Du Tribunat',
        articles: [
          {
            id: 'a-82',
            title: 'Article 76.',
            paragraphs: [
              "A dater de l'an XIII, le Tribunat sera réduit à cinquante membres. - Moitié des cinquante sortira tous les trois ans. Jusqu'à cette réduction, les membres sortants ne seront pas remplacés. - Le Tribunat se divise en sections.",
            ],
          },
          {
            id: 'a-83',
            title: 'Article 77.',
            paragraphs: [
              'Le Corps législatif et le Tribunat sont renouvelés dans tous leurs membres quand le Sénat en a prononcé la dissolution.',
            ],
          },
        ],
      },
      {
        id: 'section-12-titre-ix-de-la-justice-et-des-tribun',
        title: 'Titre IX - De la justice et des tribunaux',
        articles: [
          {
            id: 'a-84',
            title: 'Article 78.',
            paragraphs: ['Il y a un grand-juge ministre de la Justice.'],
          },
          {
            id: 'a-85',
            title: 'Article 79.',
            paragraphs: [
              "Il a une place distinguée au Sénat et au Conseil d'État.",
            ],
          },
          {
            id: 'a-86',
            title: 'Article 8',
            paragraphs: [
              "o. - Il préside le Tribunal de cassation et les tribunaux d'appel, quand le Gouvernement le juge convenable",
            ],
          },
          {
            id: 'a-87',
            title: 'Article 8',
            paragraphs: [
              'I. - Il a sur les tribunaux, les justices de paix et les membres qui les composent, le droit de les surveiller, et de les reprendre.',
            ],
          },
          {
            id: 'a-88',
            title: 'Article 82.',
            paragraphs: [
              "Le Tribunal de cassation, présidé par lui, a droit de censure et de discipline sur les tribunaux d'appel et les tribunaux criminels ; il peut, pour cause grave, suspendre les juges de leurs fonctions, les mander près du grand-juge, pour y rendre compte de leur conduite.",
            ],
          },
          {
            id: 'a-89',
            title: 'Article 83.',
            paragraphs: [
              "Les tribunaux d'appel ont droit de surveillance sur les tribunaux civils de leur ressort, et les tribunaux civils sur les Juges de paix de leur arrondissement.",
            ],
          },
          {
            id: 'a-90',
            title: 'Article 84.',
            paragraphs: [
              "Le commissaire du gouvernement près le Tribunal de cassation surveille les commissaires près les tribunaux d'appel et les tribunaux criminels. - Les commissaires près les tribunaux d'appel surveillent les commissaires près les tribunaux civils.",
            ],
          },
          {
            id: 'a-91',
            title: 'Article 85.',
            paragraphs: [
              'Les membres du Tribunal de cassation sont nommés par le Sénat, sur la présentation du Premier consul. - Le Premier consul présente trois sujets pour chaque place vacante.',
            ],
          },
        ],
      },
      {
        id: 'section-13-titre-x-droit-de-faire-gr-ce',
        title: 'Titre X - Droit de faire grâce',
        articles: [
          {
            id: 'a-92',
            title: 'Article 86.',
            paragraphs: [
              "Le Premier Consul a droit de faire grâce. - Il l'exerce après avoir entendu, dans un conseil privé, le grand-juge, deux ministres, deux sénateurs, deux conseillers d'État et deux juges du Tribunal de cassation.",
              'Suivent les tableaux annoncés dans les articles 69 et 71.',
            ],
          },
        ],
      },
    ],
    notes: [
      {
        title: 'Reading context',
        text: 'This text comes from the Conseil constitutionnel historical archive. Notes here should help readers compare institutions, rights, and revision rules across French constitutional history.',
      },
    ],
  },
  {
    id: 'constitution-de-l-an-xii-empire-28-floreal-an-xii',
    year: '1804',
    shortLabel: '1804',
    title: 'Constitution of Year XII',
    sourceTitle:
      "Constitution de l'An XII - Empire - 28 floréal An XII - 18 mai 1804",
    regime: 'Empire',
    date: '18 May 1804',
    sourceUrl:
      'https://www.conseil-constitutionnel.fr/les-constitutions-dans-l-histoire/constitution-de-l-an-xii-empire-28-floreal-an-xii',
    localSourcePath:
      '/constitution-archive/constitution-de-l-an-xii-empire-28-floreal-an-xii.html',
    summary:
      'Constitution of Year XII belongs to the Empire period. The original French text is preserved here as a source document for reading and comparison.',
    revisionGroups: [],
    sections: [
      {
        id: 'section-1-titre-i',
        title: 'Titre I',
        articles: [
          {
            id: 'a-1',
            title: 'Article 1.',
            paragraphs: [
              "Le Gouvernement de la République est confié à un Empereur, qui prend le titre d'Empereur des Français. - La justice se rend, au nom de l'Empereur, par les officiers qu'il institue.",
            ],
          },
          {
            id: 'a-2',
            title: 'Article 2.',
            paragraphs: [
              'Napoléon Bonaparte, Premier consul actuel de la République, est Empereur des Français.',
            ],
          },
        ],
      },
      {
        id: 'section-2-titre-ii-de-l-h-r-dit',
        title: "Titre II - De l'hérédité",
        articles: [
          {
            id: 'a-3',
            title: 'Article 3.',
            paragraphs: [
              "La dignité impériale est héréditaire dans la descendance directe, naturelle et légitime de Napoléon Bonaparte, de mâle en mâle, par ordre de primogéniture, et à l'exclusion perpétuelle des femmes et de leur descendance.",
            ],
          },
          {
            id: 'a-4',
            title: 'Article 4.',
            paragraphs: [
              "Napoléon Bonaparte peut adopter les enfants ou petits-enfants de ses frères, pourvu qu'ils aient atteint l'âge de dix-huit ans accomplis, et que lui-même n'ait point d'enfants mâles au moment de l'adoption. - Ses fils adoptifs entrent dans la ligne de sa descendance directe. - Si, postérieurement à l'adoption, il lui survient des enfants mâles, ses fils adoptifs ne peuvent être appelés qu'après les descendants naturels et légitimes. - L'adoption est interdite aux successeurs de Napoléon Bonaparte et à leurs descendants.",
            ],
          },
          {
            id: 'a-5',
            title: 'Article 5.',
            paragraphs: [
              "A défaut d'héritier naturel et légitime ou d'héritier adoptif de Napoléon Bonaparte, la dignité impériale est dévolue et déférée à Joseph Bonaparte et à ses descendants naturels et légitimes, par ordre de primogéniture, et de mâle en mâle, à l'exclusion perpétuelle des femmes et de leur descendance.",
            ],
          },
          {
            id: 'a-6',
            title: 'Article 6.',
            paragraphs: [
              "A défaut de Joseph Bonaparte et de ses descendants mâles, la dignité impériale est dévolue et déférée à Louis Bonaparte et à ses descendants naturels et légitimes, par ordre de primogéniture, et de mâle en mâle, à l'exclusion perpétuelle des femmes et de leur descendance.",
            ],
          },
          {
            id: 'a-7',
            title: 'Article 7.',
            paragraphs: [
              "A défaut d'héritier naturel et légitime et d'héritier adoptif de Napoléon Bonaparte ; - A défaut d'héritiers naturels et légitimes de Joseph Bonaparte et de ses descendants mâles ; - De Louis Bonaparte et de ses descendants mâles ; - Un sénatus-consulte organique, proposé au Sénat par les titulaires des grandes dignités de l'Empire, et soumis à l'acceptation du peuple, nomme l'Empereur, et règle dans sa famille l'ordre de l'hérédité, de mâle en mâle, à l'exclusion perpétuelle des femmes et de leur descendance.",
            ],
          },
          {
            id: 'a-8',
            title: 'Article 8.',
            paragraphs: [
              "Jusqu'au moment où l'élection du nouvel Empereur est consommée, les affaires de l'État sont gouvernées par les ministres, qui se forment en conseil de gouvernement, et qui délibèrent à la majorité des voix. Le secrétaire d'État tient le registre des délibérations.",
            ],
          },
        ],
      },
      {
        id: 'section-3-titre-iii-de-la-famille-imp-riale',
        title: 'Titre III - De la famille impériale',
        articles: [
          {
            id: 'a-9',
            title: 'Article 9.',
            paragraphs: [
              "Les membres de la famille impériale, dans l'ordre de l'hérédité, portent le titre de Princes français. - Le fils aîné de l'Empereur porte celui de Prince impérial.",
            ],
          },
          {
            id: 'a-10',
            title: 'Article 10.',
            paragraphs: [
              "Un sénatus-consulte règle le mode de l'éducation des princes français.",
            ],
          },
          {
            id: 'a-11',
            title: 'Article 11.',
            paragraphs: [
              "Ils sont membres du Sénat et du Conseil d'État, lorsqu'ils ont atteint leur dix-huitième année.",
            ],
          },
          {
            id: 'a-12',
            title: 'Article 12.',
            paragraphs: [
              "Ils ne peuvent se marier sans l'autorisation de l'Empereur. - Le mariage d'un prince Français, fait sans l'autorisation de l'Empereur, emporte privation de tout droit à l'hérédité, tant pour celui qui l'a contracté que pour ses descendants. - Néanmoins, s'il n'existe point d'enfant de ce mariage, et qu'il vienne à se dissoudre, le prince qui l'avait contracté recouvre ses droits à l'hérédité.",
            ],
          },
          {
            id: 'a-13',
            title: 'Article 13.',
            paragraphs: [
              "Les actes qui constatent la naissance, les mariages et les décès des membres de la famille impériale, sont transmis sur un ordre de l'Empereur, au Sénat, qui en ordonne la transcription sur ses registres et le dépôt dans ses archives.",
            ],
          },
          {
            id: 'a-14',
            title: 'Article 14.',
            paragraphs: [
              "Napoléon Bonaparte établit par des statuts auxquels ses successeurs sont tenus de se conformer, - 1 ° Les devoirs des individus de tout sexe, membres de la famille impériale, envers l'Empereur ; - 2 ° Une organisation du palais impérial conforme à la dignité du trône et à la grandeur de la nation.",
            ],
          },
          {
            id: 'a-15',
            title: 'Article 15.',
            paragraphs: [
              "La liste civile reste réglée ainsi qu'elle l'a été par les articles 1 et 4 du décret du 16 mai 1791. - Les princes français Joseph et Louis Bonaparte, et à l'avenir les fils puînés naturels et légitimes de l'Empereur, seront traités conformément aux articles 1, 10, 11, 12 et 13 du décret du 21 décembre 1790. - L'Empereur pourra fixer le douaire de l'impératrice et l'assigner sur la liste civile ; ses successeurs ne pourront rien changer aux dispositions qu'il aura faites à cet égard.",
            ],
          },
          {
            id: 'a-16',
            title: 'Article 16.',
            paragraphs: [
              "L'Empereur visite les départements : en conséquence, des palais impériaux sont établis aux quatre points principaux de l'Empire. - Ces palais sont désignés et leurs dépendances déterminées par une loi.",
            ],
          },
        ],
      },
      {
        id: 'section-4-titre-iv-de-la-r-gence',
        title: 'Titre IV - De la régence',
        articles: [
          {
            id: 'a-17',
            title: 'Article 17.',
            paragraphs: [
              "L'Empereur est mineur jusqu'à l'âge de dix-huit ans accomplis ; pendant sa minorité, il y a un régent de l'Empire.",
            ],
          },
          {
            id: 'a-18',
            title: 'Article 18.',
            paragraphs: [
              'Le régent doit être âgé au moins de vingt-cinq ans accompli. - Les femmes sont exclues de la régence.',
            ],
          },
          {
            id: 'a-19',
            title: 'Article 19.',
            paragraphs: [
              "l'Empereur désigne le régent parmi les princes français, avant l'âge exigé par l'article précédent ; et à leur défaut, parmi les titulaires des grandes dignités de l'Empire.",
            ],
          },
          {
            id: 'a-20',
            title: 'Article 20.',
            paragraphs: [
              "A défaut de désignation de la part de l'Empereur, la régence est déférée au prince le plus proche en degré, dans l'ordre de l'hérédité, ayant vingt-cinq ans accomplis.",
            ],
          },
          {
            id: 'a-21',
            title: 'Article 21.',
            paragraphs: [
              "Si, l'Empereur n'ayant pas désigné le régent, aucun des princes français n'est âgé de vingt-cinq ans accomplis, le Sénat élit le régent parmi les titulaires des grandes dignités de l'Empire.",
            ],
          },
          {
            id: 'a-22',
            title: 'Article 22.',
            paragraphs: [
              "Si, à raison de la minorité d'âge du prince appelé à la régence dans l'ordre de l'hérédité, elle a été déférée à un parent plus éloigné, ou à l'un des titulaires des grandes dignités de l'Empire, le régent entré en exercice continue ses fonctions jusqu'à la majorité de l'Empereur.",
            ],
          },
          {
            id: 'a-23',
            title: 'Article 23.',
            paragraphs: [
              'Aucun sénatus-consulte organique ne peut être rendu pendant la régence, ni avant la fin de la troisième année qui suit la majorité.',
            ],
          },
          {
            id: 'a-24',
            title: 'Article 24.',
            paragraphs: [
              "Le régent exerce Jusqu'à la majorité de l'Empereur toutes les attributions de la dignité impériale. - Néanmoins il ne peut nommer ni aux grandes dignités de l'Empire, ni aux places de grands officiers qui se trouveraient vacantes à l'époque de la régence, ou qui viendraient à vaquer pendant la minorité, ni user de la prérogative réservée à l'Empereur d'élever des citoyens au rang de sénateur. - Il ne peut révoquer ni le grand-juge, ni le secrétaire d'État.",
            ],
          },
          {
            id: 'a-25',
            title: 'Article 25.',
            paragraphs: [
              "Il n'est pas personnellement responsable des actes de son administration.",
            ],
          },
          {
            id: 'a-26',
            title: 'Article 26.',
            paragraphs: [
              "Tous les actes de la régence sont au nom de l'Empereur mineur.",
            ],
          },
          {
            id: 'a-27',
            title: 'Article 27.',
            paragraphs: [
              "Le régent ne propose aucun projet de loi ou de sénatus-consulte, et n'adopte aucun règlement d'administration publique, qu'après avoir pris l'avis du conseil de régence, composé des titulaires des grandes dignités de l'Empire. - Il ne peut déclarer la guerre, ni signer des traités de paix, d'alliance ou de commerce, qu'après en avoir délibéré dans le conseil de régence, dont les membres, pour ce seul cas, ont voix délibérative. La délibération a lieu à la majorité des voix ; et s'il y a partage, elle passe à l'avis du régent. - Le ministre des Relations extérieures prend séance au conseil de régence, lorsque ce conseil délibère sur des objets relatifs à son département. - Le grand-juge, ministre de la justice, y peut être appelé par l'ordre du régent. - Le secrétaire d'État tient le registre des délibérations.",
            ],
          },
          {
            id: 'a-28',
            title: 'Article 28.',
            paragraphs: [
              "La régence ne confère aucun droit sur la personne de l'Empereur mineur.",
            ],
          },
          {
            id: 'a-29',
            title: 'Article 29.',
            paragraphs: [
              'Le traitement du régent est fixé au quart du montant de la liste civile.',
            ],
          },
          {
            id: 'a-30',
            title: 'Article 30.',
            paragraphs: [
              "La garde de l'Empereur mineur est confiée à sa mère et à son défaut au prince désigné à cet effet par le prédécesseur de l'Empereur mineur. - A défaut de la mère de l'Empereur mineur, et d'un prince désigné par l'Empereur, le Sénat confie la garde de l'Empereur mineur à l'un des titulaires des grandes dignités de l'Empire. - Ne peuvent être élus pour la garde de l'Empereur mineur, ni le régent et ses descendants, ni les femmes.",
            ],
          },
          {
            id: 'a-31',
            title: 'Article 31.',
            paragraphs: [
              "Dans le cas où Napoléon Bonaparte usera de la faculté qui lui est conférée par l'article 4, titre II, l'acte d'adoption sera fait en présence des titulaires des grandes dignités de l'Empire, reçu par le secrétaire d'État, et transmis aussitôt au Sénat pour être transcrit sur ses registres et déposé dans ses archives. - Lorsque l'Empereur désigne, soit un régent pour la minorité, soit un prince pour la garde d'un Empereur mineur, les mêmes formalités sont observées. - Les actes de désignation, soit d'un régent pour la minorité, soit d'un prince pour la garde d'un Empereur mineur, sont révocables à volonté par l'Empereur. - Tout acte d'adoption, de désignation, ou de révocation de désignation, qui n'aura pas été transcrit sur les registres du Sénat avant le décès de l'Empereur, sera nul et de nul effet.",
            ],
          },
        ],
      },
      {
        id: 'section-5-titre-v-des-grandes-dignit-s-de-l-em',
        title: "Titre V - Des grandes dignités de l'Empire",
        articles: [
          {
            id: 'a-32',
            title: 'Article 32.',
            paragraphs: [
              "Les grandes dignités de l'Empire sont celles, - De grand-électeur, - D'archichancelier de l'Empire, - D'archichancelier d'État, - D'architrésorier, - De connétable, - De grand-amiral.",
            ],
          },
          {
            id: 'a-33',
            title: 'Article 33.',
            paragraphs: [
              "Les titulaires des grandes dignités de l'Empire sont nommés par l'Empereur. - Ils jouissent des mêmes honneurs que les princes français, et prennent rang immédiatement après eux. - L'époque de leur réception détermine le rang qu'ils occupent respectivement.",
            ],
          },
          {
            id: 'a-34',
            title: 'Article 34.',
            paragraphs: ["Les grandes dignités de l'Empire sont inamovibles."],
          },
          {
            id: 'a-35',
            title: 'Article 35.',
            paragraphs: [
              "Les titulaires des grandes dignités de l'Empire sont sénateurs et conseillers d'Etat.",
            ],
          },
          {
            id: 'a-36',
            title: 'Article 36.',
            paragraphs: [
              "Ils forment le grand conseil de l'Empereur ; - Ils sont membres du conseil privé ; - Ils composent le grand conseil de la Légion d'honneur. - Les membres actuels du grand conseil de la Légion d'honneur conservent, pour la durée de leur vie, leurs titres, fonctions et prérogatives.",
            ],
          },
          {
            id: 'a-37',
            title: 'Article 37.',
            paragraphs: [
              "Le Sénat et le Conseil d'État sont présidés par l'Empereur. - Lorsque l'Empereur ne préside pas le Sénat ou le Conseil d'État, il désigne celui des titulaires des grandes dignités de l'Empire qui doit présider.",
            ],
          },
          {
            id: 'a-38',
            title: 'Article 38.',
            paragraphs: [
              "Tous les actes du Sénat et du Corps législatif sont rendus au nom de l'Empereur, et promulgués ou publiés sous le sceau impérial.",
            ],
          },
          {
            id: 'a-39',
            title: 'Article 39.',
            paragraphs: [
              "Le grand-électeur fait les fonctions de chancelier : - 1 ° Pour la convocation du Corps législatif, des collèges électoraux et des assemblées de canton ; 2 ° pour la promulgation des sénatus-consultes portant dissolution, soit du Corps législatif, soit des collèges électoraux. - Le grand-électeur préside en l'absence de l'Empereur, lorsque le Sénat procède aux nominations des sénateurs, des législateurs et des tribuns. - Il peut résider au palais du Sénat. - Il porte à la connaissance de l'Empereur les réclamations formées par les collèges électoraux ou par les assemblées de canton pour la conservation de leurs prérogatives. - Lorsqu'un membre d'un collège électoral est dénoncé, conformément à l'article 21 du sénatus-consulte organique du 16 thermidor an X, comme s'étant permis quelque acte contraire à l'honneur ou à la patrie, le grand-électeur invite le collège à manifester son voeu. Il porte le voeu du collège à la connaissance de l'Empereur. - Le grand-électeur présente les membres du Sénat, du Conseil d'État, du Corps législatif et du Tribunat, au serment qu'ils prêtent entre les mains de l'Empereur. - Il reçoit le serment des présidents des collèges électoraux de département et des assemblées de canton. - Il présente les députations solennelles du Sénat, du Conseil d'État, du Corps législatif, du Tribunat et des collèges électoraux, lorsqu'elles sont admises à l'audience de l'Empereur.",
            ],
          },
          {
            id: 'a-40',
            title: 'Article 40.',
            paragraphs: [
              "L'archichancelier de l'Empire fait les fonctions de chancelier pour la promulgation des sénatus-consultes organiques et des lois. - Il fait également celles de chancelier du palais impérial. - Il est présent au travail annuel dans lequel le grand-juge ministre de la Justice rend compte à l'Empereur, des abus qui peuvent s'être introduits dans l'administration de la justice soit civile, soit criminelle. - Il préside la Haute Cour impériale. - Il préside les sections réunies du Conseil d'État et du Tribunat conformément à l'article 95, titre XI. - Il est présent à la célébration des mariages et à la naissance des princes ; au couronnement et aux obsèques de l'Empereur. Il signe le procès-verbal que dresse le secrétaire d'État. - Il présente les titulaires des grandes dignités de l'Empire, les ministres et le secrétaire d'État, les grands officiers civils de la couronne et le premier président de la Cour de cassation, au serment qu'ils prêtent entre les mains de l'Empereur. - Il reçoit le serment des membres et du parquet de la Cour de cassation, des présidents et procureurs généraux des cours d'appel et des cours criminelles. - Il présente les députations solennelles et les membres des cours de justice admis à l'audience de l'Empereur. - Il signe et scelle les commissions et brevets des membres des cours de justice et des officiers ministériels ; il scelle les commissions et brevets des fonctions civiles administratives et les autres actes qui seront désignés dans le règlement portant organisation du sceau.",
            ],
          },
          {
            id: 'a-41',
            title: 'Article 41.',
            paragraphs: [
              "L'archichancelier d'État fait les fonctions de chancelier pour la promulgation des traités de paix et d'alliance et pour les déclarations de guerre. - Il présente à l'Empereur et signe les lettres de créance et la correspondance d'étiquette avec les différentes cours de l'Europe, rédigées suivant les formes du protocole impérial, dont il est le gardien. - Il est présent au travail annuel dans lequel le ministre des Relations extérieures rend compte à l'Empereur de la situation politique de l'État. - Il présente les ambassadeurs et ministres de l'Empereur dans les cours étrangères, au serment qu'ils prêtent entre les mains de sa Majesté impériale. - Il reçoit le serment des résidents, chargés d'affaires, secrétaires d'ambassade et de légation et des commissaires généraux et commissaires des relations commerciales. - Il présente les ambassades extraordinaires et les ambassadeurs et ministres français et étrangers.",
            ],
          },
          {
            id: 'a-42',
            title: 'Article 42.',
            paragraphs: [
              "L'architrésorier est présent au travail annuel dans lequel les ministres des Finances et du Trésor public rendent à l'Empereur les comptes des recettes et des dépenses de L'État, et exposent leurs vues sur les besoins des finances de l'Empire. - Les comptes des recettes et des dépenses annuelles, avant d'être présentés à l'Empereur, sont revêtus de son visa. - Il reçoit, tous les trois mois, le compte des travaux de la comptabilité nationale, et tous les ans le résultat général et les vues de réforme et d'amélioration dans les différentes parties de la comptabilité ; il les porte à la connaissance de l'Empereur. - Il arrête, tous les ans, le grand-livre de la dette publique. - Il signe les brevets des pensions civiles. - Il préside les sections réunies du Conseil d'État et du Tribunat, conformément à l'article 95, titre XI. - Il reçoit le serment des membres de la comptabilité nationale, des administrations de finances, et des principaux agents du trésor public. - Il présente les députations de la comptabilité nationale et des administrations de finances admises à l'audience de l'Empereur.",
            ],
          },
          {
            id: 'a-43',
            title: 'Article 43.',
            paragraphs: [
              "Le connétable est présent au travail annuel dans lequel le ministre de la Guerre et le directeur de l'administration de la guerre rendent compte à l'Empereur, des dispositions à prendre pour compléter le système de défense des frontières, l'entretien, la réparation et l'approvisionnement des places. - Il pose la première pierre des places fortes dont la construction est ordonnée. - Il est gouverneur des écoles militaires. - Lorsque l'Empereur ne remet pas en personne les drapeaux aux corps de l'armée, ils leur sont remis en son nom par le connétable. - En l'absence de l'Empereur, le connétable passe les grandes revues de la garde impériale. - Lorsqu'un général d'armée est prévenu d'un délit spécifié au code pénal militaire, le connétable peut présider le conseil de guerre qui doit juger. - Il présente les maréchaux de l'Empire, les colonels généraux, les inspecteurs généraux, les officiers généraux et les colonels de toutes les armes, au serment qu'ils prêtent entre les mains de l'Empereur. - Il reçoit le serment des majors, chefs de bataillon et d'escadron de toutes armes. - Il installe les maréchaux de l'Empire. - Il présente les officiers généraux et les colonels, majors, chefs de bataillon et d'escadron de toutes les armes, lorsqu'ils sont admis à l'audience de l'Empereur. Il signe les brevets de l'armée et ceux des militaires pensionnaires de l'Etat.",
            ],
          },
          {
            id: 'a-44',
            title: 'Article 44.',
            paragraphs: [
              "Le grand-amiral est présent au travail annuel dans lequel le ministre de la marine rend compte à l'Empereur, de l'état des constructions navales, des arsenaux et des approvisionnements. - Il reçoit annuellement et présente à l'Empereur les comptes de la caisse des invalides de la marine. - Lorsqu'un amiral, vice-amiral ou contre-amiral commandant en chef une armée navale, est prévenu d'un délit spécifié au code pénal maritime, le grand-amiral peut présider la cour martiale qui doit juger. - Il présente les amiraux, les vice-amiraux, les contre-amiraux et les capitaines de vaisseau, au serment qu'ils prêtent entre les mains de l'Empereur. - Il reçoit le serment des membres du conseil des prises et des capitaines de frégate. - Il présente les amiraux, les vice-amiraux, les contre-amiraux, les capitaines de vaisseau et de frégate, et les membres du conseil des prises, lorsqu'ils sont admis à l'audience de l'Empereur. - Il signe les brevets des officiers de l'armée navale et ceux des marins pensionnaires de l'État.",
            ],
          },
          {
            id: 'a-45',
            title: 'Article 45.',
            paragraphs: [
              "Chaque titulaire des grandes dignités de l'Empire préside un collège électoral de département. - Le collège électoral séant à Bruxelles est présidé par le grand-électeur. - Le collège électoral séant à Bordeaux est présidé par l'archichancelier de l'Empire. - Le collège électoral séant à Nantes est présidé par l'archichancelier d'État. - Le collège électoral séant à Lyon est présidé par l'architrésorier de l'Empire. - Le collège électoral séant à Turin est présidé par le connétable. - Le collège électoral séant à Marseille est présidé par le grand-amiral.",
            ],
          },
          {
            id: 'a-46',
            title: 'Article 46.',
            paragraphs: [
              "Chaque titulaire des grandes dignités de l'Empire reçoit annuellement, à titre de traitement fixe, le tiers de la somme affectée aux princes, conformément au décret du 21 décembre 1790.",
            ],
          },
          {
            id: 'a-47',
            title: 'Article 47.',
            paragraphs: [
              "Un statut de l'Empereur règle les fonctions des titulaires des grandes dignités de l'Empire auprès de l'Empereur, et détermine leur costume dans les grandes cérémonies. Les successeurs de l'Empereur ne peuvent déroger à ce statut que par un sénatus-consulte.",
            ],
          },
        ],
      },
      {
        id: 'section-6-titre-vi-des-grands-officiers-de-l-e',
        title: "Titre VI - Des grands officiers de l'Empire",
        articles: [
          {
            id: 'a-48',
            title: 'Article 48.',
            paragraphs: [
              "Les grands officiers de l'Empire sont - 1 ° Des maréchaux de l'Empire, choisis parmi les généraux les plus distingués. - Leur nombre n'excède pas celui de seize. - Ne font point partie de ce nombre les maréchaux de l'Empire qui sont sénateurs. - 2 ° Huit inspecteurs et colonels généraux de l'artillerie et du génie, des troupes à cheval et de la marine. - 3 ° Des grands officiers civils de la couronne, tels qu'ils seront institués par les statuts de l'Empereur.",
            ],
          },
          {
            id: 'a-49',
            title: 'Article 49.',
            paragraphs: ['Les places des grands officiers sont inamovibles.'],
          },
          {
            id: 'a-50',
            title: 'Article 50.',
            paragraphs: [
              "Chacun des grands officiers de l'Empire préside un collège électoral qui lui est spécialement affecté au moment de sa nomination.",
            ],
          },
          {
            id: 'a-51',
            title: 'Article 51.',
            paragraphs: [
              "Si, par un ordre de l'Empereur, ou par toute autre cause que ce puisse être, un titulaire d'une grande dignité de l'Empire ou un grand officier vient à cesser ses fonctions, il conserve son titre, son rang, ses prérogatives, et la moitié de son traitement : il ne les perd que par un jugement de la Haute Cour impériale.",
            ],
          },
        ],
      },
      {
        id: 'section-7-titre-vii-des-serments',
        title: 'Titre VII - Des serments',
        articles: [
          {
            id: 'a-52',
            title: 'Article 52.',
            paragraphs: [
              "Dans les deux ans qui suivent son avènement, ou sa majorité, l'Empereur, accompagné - Des titulaires des grandes dignités de l'Empire, - Des ministres, - Des grands officiers de l'Empire, - Prête serment au peuple français sur l'Evangile, et en présence - Du Sénat, - Du Conseil d'État, - Du Corps législatif, - Du Tribunat, - De la Cour de cassation, - Des archevêques, - Des évêques, - Des grands officiers de la Légion d'honneur, - De la comptabilité nationale, - Des présidents des cours d'appel, - Des présidents des collèges électoraux, - Des présidents des consistoires, - Et des maires des trente-six principales villes de l'Empire. - Le secrétaire d'Etat dresse procès-verbal de la prestation du serment.",
            ],
          },
          {
            id: 'a-53',
            title: 'Article 53.',
            paragraphs: [
              "Le serment de l'Empereur est ainsi conçu : - « Je jure de maintenir l'intégrité du territoire de la République, de respecter et de faire respecter les lois du concordat et la liberté des cultes ; de respecter et faire respecter l'égalité des droits, la liberté politique et civile, l'irrévocabilité des ventes des biens nationaux ; de ne lever aucun impôt, de n'établir aucune taxe qu'en vertu de la loi ; de maintenir l'institution de la Légion d'honneur ; de gouverner dans la seule vue de l'intérêt, du bonheur et de la gloire du peuple français. »",
            ],
          },
          {
            id: 'a-54',
            title: 'Article 54.',
            paragraphs: [
              "Avant de commencer l'exercice de ses fonctions, le régent accompagné - Des titulaires des grandes dignités de l'Empire, - Des ministres, - Des grands officiers de l'Empire, - Prête serment sur l'Evangile, et en présence - Du Sénat, - Du Conseil d'État, - Du président et des questeurs du Corps législatif, - Du président et des questeurs du Tribunat, - Et des grands officiers de la Légion d'honneur. - Le secrétaire d'État dresse procès-verbal de la prestation du serment.",
            ],
          },
          {
            id: 'a-55',
            title: 'Article 55.',
            paragraphs: [
              "Le serment du régent est conçu en ces termes : « Je jure d'administrer les affaires de l'État, conformément aux constitutions de l'Empire, aux sénatus-consultes et aux lois ; de maintenir dans toute leur intégrité le territoire de la République, les droits de la nation et ceux de la dignité impériale, et de remettre fidèlement à l'Empereur, au moment de sa majorité, le pouvoir dont l'exercice m'est confié. »",
            ],
          },
          {
            id: 'a-56',
            title: 'Article 56.',
            paragraphs: [
              "Les titulaires des grandes dignités de l'Empire, les ministres et le secrétaire d'État, les grands officiers, les membres du Sénat, du Conseil d'État, du Corps législatif, du Tribunat, des collèges électoraux et des assemblées de canton, prêtent serment en ces termes : - « Je jure obéissance aux constitutions de l'Empire et fidélité à l'Empereur. » - Les fonctionnaires publics civils et judiciaires, et les officiers et les soldats de l'armée de terre et de mer, prêtent le même serment.",
            ],
          },
        ],
      },
      {
        id: 'section-8-titre-viii-du-s-nat',
        title: 'Titre VIII - Du Sénat',
        articles: [
          {
            id: 'a-57',
            title: 'Article 57.',
            paragraphs: [
              "Le Sénat se compose, - 1 ° Des princes français ayant atteint leur dix-huitième année ; - 2 ° Des titulaires des grandes dignités de l'Empire ; - 3 ° Des quatre-vingts membres nommés sur la présentation de candidats choisis par l'Empereur sur les listes formées par les collèges électoraux de département ; - 4 ° Des citoyens que l'Empereur juge convenable d'élever à la dignité de sénateur. - Dans le cas où le nombre de sénateurs excédera celui qui a été fixé par l'article 63 du sénatus-consulte organique du 16 thermidor an X, il sera, à cet égard, pourvu par une loi à l'exécution de l'article 17 du sénatus-consulte du 14 nivôse an XI.",
            ],
          },
          {
            id: 'a-58',
            title: 'Article 58.',
            paragraphs: [
              "Le président du Sénat est nommé par l'Empereur, et choisi parmi les sénateurs. - Ses fonctions durent un an.",
            ],
          },
          {
            id: 'a-59',
            title: 'Article 59.',
            paragraphs: [
              "Il convoque le Sénat sur un ordre du propre mouvement de l'Empereur, et sur la demande, ou des commissions dont il sera parlé ci-après, articles 60 et 64, ou d'un sénateur conformément aux dispositions de l'article 70, ou d'un officier du Sénat, pour les affaires intérieures du corps. - Il rend compte à l'Empereur des convocations faites sur la demande des commissions ou d'un sénateur, de leur objet, et des résultats des délibérations du Sénat.",
            ],
          },
          {
            id: 'a-60',
            title: 'Article 60.',
            paragraphs: [
              "Une commission de sept membres nommés par le Sénat, et choisis dans son sein, prend connaissance, sur la communication qui lui en est donnée par les ministres, des arrestations effectuées conformément à l'article 46 de la Constitution lorsque les personnes arrêtées n'ont pas été traduites devant les tribunaux dans les dix jours de leur arrestation. - Cette commission est appelée commission sénatoriale de la liberté individuelle.",
            ],
          },
          {
            id: 'a-61',
            title: 'Article 61.',
            paragraphs: [
              'Toutes les personnes arrêtées et non mises en jugement après les dix jours de leur arrestation, peuvent recourir directement, par elles, leurs parents ou leurs représentants, et par voie de pétition, à la commission sénatoriale de la liberté individuelle.',
            ],
          },
          {
            id: 'a-62',
            title: 'Article 62.',
            paragraphs: [
              "Lorsque la commission estime que la détention prolongée au-delà des dix jours de l'arrestation n'est pas justifiée par l'intérêt de l'État, elle invite le ministre qui a ordonné l'arrestation à faire mettre en liberté la personne détenue, ou à la renvoyer devant les tribunaux ordinaires.",
            ],
          },
          {
            id: 'a-63',
            title: 'Article 63.',
            paragraphs: [
              "Si, après trois invitations consécutives, renouvelées dans l'espace d'un mois, la personne détenue n'est pas mise en liberté ou renvoyée devant les tribunaux ordinaires, la commission demande une assemblée du Sénat, qui est convoqué par le président, et qui rend, s'il y a lieu, la déclaration suivante : - « Il y a de fortes présomptions que N. est détenu arbitrairement. » - On procède ensuite conformément aux dispositions de l'article 112, titre XIII, de la Haute Cour impériale.",
            ],
          },
          {
            id: 'a-64',
            title: 'Article 64.',
            paragraphs: [
              "Une commission de sept membres nommés par le Sénat et choisis dans son sein, est chargée de veiller à la liberté de la presse. - Ne sont point compris dans son attribution les ouvrages qui s'impriment et se distribuent par abonnement et à des époques périodiques. - Cette commission est appelée commission sénatoriale de la liberté de la presse.",
            ],
          },
          {
            id: 'a-65',
            title: 'Article 65.',
            paragraphs: [
              "Les auteurs, imprimeurs ou libraires qui se croient fondés à se plaindre d'empêchements mis à l'impression ou à la circulation d'un ouvrage, peuvent recourir directement et par voie de pétition à la commission sénatoriale de la liberté de la presse.",
            ],
          },
          {
            id: 'a-66',
            title: 'Article 66.',
            paragraphs: [
              "Lorsque la commission estime que les empêchements ne sont pas justifiés par l'intérêt de l'État, elle invite le ministre qui a donné l'ordre à le révoquer.",
            ],
          },
          {
            id: 'a-67',
            title: 'Article 67.',
            paragraphs: [
              "Si, après trois invitations consécutives, renouvelées dans l'espace d'un mois, les empêchements subsistent, la commission demande une assemblée du Sénat, qui est convoqué par le président, et qui rend, s'il y a lieu, la déclaration suivante : - « Il y a de fortes présomptions que la liberté de la presse a été violée. » - On procède ensuite conformément à la disposition de l'article 112, titre XIII, de la Haute Cour impériale.",
            ],
          },
          {
            id: 'a-68',
            title: 'Article 68.',
            paragraphs: [
              'Un membre de chacune des commissions sénatoriales cesse ses fonctions tous les quatre mois.',
            ],
          },
          {
            id: 'a-69',
            title: 'Article 69.',
            paragraphs: [
              'Les projets de loi décrétés par le Corps législatif sont transmis, le jour même de leur adoption, au Sénat, et déposés dans ses archives.',
            ],
          },
          {
            id: 'a-70',
            title: 'Article 70.',
            paragraphs: [
              "Tout décret rendu par le Corps législatif peut être dénoncé au Sénat par un sénateur, 1 ° comme tendant au rétablissement du régime féodal ; 2 ° comme contraire à l'irrévocabilité des ventes des domaines nationaux ; 3 ° comme n'ayant pas été délibéré dans les formes prescrites par les constitutions de l'Empire, les règlements et les lois ; 4 ° comme portant atteinte aux prérogatives de la dignité impériale et à celles du Sénat : sans préjudice de l'exécution des articles 21 et 37 de l'acte des constitutions de l'Empire, en date du 22 frimaire an VIII.",
            ],
          },
          {
            id: 'a-71',
            title: 'Article 71.',
            paragraphs: [
              "Le Sénat, dans les six jours qui suivent l'adoption du projet de loi, délibérant sur le rapport d'une commission spéciale, et après avoir entendu trois lectures du décret dans trois séances tenues à des jours différents, peut exprimer l'opinion qu'il n'y a pas lieu à promulguer la loi. - Le président porte à l'Empereur la délibération motivée du Sénat.",
            ],
          },
          {
            id: 'a-72',
            title: 'Article 72.',
            paragraphs: [
              "L'Empereur, après avoir entendu le Conseil d'État, ou déclare par un décret son adhésion à la délibération du Sénat, ou fait promulguer la loi.",
            ],
          },
          {
            id: 'a-73',
            title: 'Article 73.',
            paragraphs: [
              "Toute loi dont la promulgation, dans cette circonstance, n'a pas été faite avant l'expiration du délai de dix jours, ne peut plus être promulguée si elle n'a été de nouveau délibérée et adoptée par le Corps législatif.",
            ],
          },
          {
            id: 'a-74',
            title: 'Article 74.',
            paragraphs: [
              "Les opérations entières d'un collège électoral, et les opérations partielles qui sont relatives à la présentation des candidats au Sénat, au Corps législatif et au Tribunat ne peuvent être annulées pour cause d'inconstitutionnalité, que par un sénatus-consulte.",
            ],
          },
        ],
      },
      {
        id: 'section-9-titre-ix-du-conseil-d-tat',
        title: "Titre IX - Du Conseil d'État",
        articles: [
          {
            id: 'a-75',
            title: 'Article 75.',
            paragraphs: [
              "Lorsque le Conseil d'État délibère sur les projets de lois ou sur les règlements d'administration publique, les deux tiers des membres du Conseil en service ordinaire doivent être présents. - Le nombre des conseillers d'État présents ne peut être moindre de vingt-cinq.",
            ],
          },
          {
            id: 'a-76',
            title: 'Article 76.',
            paragraphs: [
              "Le Conseil d'État se divise en six sections ; savoir : - Section de la législation, - Section de l'intérieur, Section des finances, - Section de la guerre, - Section de la marine, - Et section du commerce.",
            ],
          },
          {
            id: 'a-77',
            title: 'Article 77.',
            paragraphs: [
              "Lorsqu'un membre du Conseil d'État a été porté pendant cinq années sur la liste des membres du Conseil en service ordinaire, il reçoit un brevet de conseiller d'Etat à vie. - Lorsqu'il cesse d'être porté sur la liste du Conseil d'État en service ordinaire ou extraordinaire, il n'a droit qu'au tiers du traitement de conseiller d'État. - Il ne perd son titre et ses droits que par un jugement de la Haute Cour impériale, emportant peine afflictive ou infamante.",
            ],
          },
        ],
      },
      {
        id: 'section-10-titre-x-du-corps-l-gislatif',
        title: 'Titre X - Du Corps législatif',
        articles: [
          {
            id: 'a-78',
            title: 'Article 78.',
            paragraphs: [
              'Les membres sortants du Corps législatif peuvent être réélus sans intervalle.',
            ],
          },
          {
            id: 'a-79',
            title: 'Article 79.',
            paragraphs: [
              'Les projets de lois présentés au Corps législatif sont renvoyés aux trois sections du Tribunat.',
            ],
          },
          {
            id: 'a-80',
            title: 'Article 8',
            paragraphs: [
              'o. - Les séances du Corps législatif se distinguent en séances ordinaires et en comités généraux.',
            ],
          },
          {
            id: 'a-81',
            title: 'Article 81.',
            paragraphs: [
              "Les séances ordinaires sont composées des membres du Corps législatif, des orateurs du Conseil d'État, des orateurs des trois sections du Tribunat. - Les comités généraux ne sont composés que des membres du Corps législatif. - Le président du Corps législatif préside les séances ordinaires et les comités généraux.",
            ],
          },
          {
            id: 'a-82',
            title: 'Article 82.',
            paragraphs: [
              "En séance ordinaire, le Corps législatif entend les orateurs du Conseil d'État et ceux des trois sections du Tribunat, et vote sur le projet de loi. - En comité général, les membres du Corps législatif discutent entre eux les avantages et les inconvénients du projet de loi.",
            ],
          },
          {
            id: 'a-83',
            title: 'Article 83.',
            paragraphs: [
              "Le Corps législatif se forme en comité général, - 1 ° Sur l'invitation du président pour les affaires intérieures du corps ; - 2 ° Sur une demande faite au président et signée par cinquante membres présents ; - Dans ces deux cas, le comité général est secret, et les discussions ne doivent être ni imprimées ni divulguées ; - 3 ° Sur la demande des orateurs du Conseil d'État, spécialement autorisés à cet effet, - Dans ce cas, le comité général est nécessairement public. - Aucune délibération ne peut être prise dans les comités généraux.",
            ],
          },
          {
            id: 'a-84',
            title: 'Article 84.',
            paragraphs: [
              'Lorsque la discussion en comité général est fermée, la délibération est ajournée au lendemain en séance ordinaire.',
            ],
          },
          {
            id: 'a-85',
            title: 'Article 85.',
            paragraphs: [
              "Le Corps législatif, le jour où il doit voter sur le projet de loi, entend, dans la même séance, le résumé que font les orateurs du Conseil d'État.",
            ],
          },
          {
            id: 'a-86',
            title: 'Article 86.',
            paragraphs: [
              "La délibération d'un projet de loi ne peut, dans aucun cas, être différée de plus de trois jours au-delà de celui qui avait été fixé pour la clôture de la discussion.",
            ],
          },
          {
            id: 'a-87',
            title: 'Article 87.',
            paragraphs: [
              "Les sections du Tribunat constituent les seules commissions du Corps législatif, qui ne peut en former d'autres que dans le cas énoncé article 113, titre XIII, de la Haute Cour impériale.",
            ],
          },
        ],
      },
      {
        id: 'section-11-titre-xi-du-tribunat',
        title: 'Titre XI - Du Tribunat',
        articles: [
          {
            id: 'a-88',
            title: 'Article 88.',
            paragraphs: [
              'Les fonctions des membres du Tribunat durent dix ans.',
            ],
          },
          {
            id: 'a-89',
            title: 'Article 89.',
            paragraphs: [
              "Le Tribunat est renouvelé par moitié tous les cinq ans. - Le premier renouvellement aura lieu, pour la session de l'an XVII, conformément au sénatus-consulte organique du 16 thermidor an X.",
            ],
          },
          {
            id: 'a-90',
            title: 'Article 90.',
            paragraphs: [
              "Le président du Tribunat est nommé par l'Empereur, sur une présentation de trois candidats faite par le Tribunat au scrutin secret et à la majorité absolue.",
            ],
          },
          {
            id: 'a-91',
            title: 'Article 91.',
            paragraphs: [
              'Les fonctions du président du Tribunat durent deux ans.',
            ],
          },
          {
            id: 'a-92',
            title: 'Article 92.',
            paragraphs: [
              "Le Tribunat a deux questeurs. - Ils sont nommés par l'Empereur, sur une liste triple de candidats choisis par le Tribunat au scrutin secret et à la majorité absolue. - Leurs fonctions sont les mêmes que celles attribuées aux questeurs du Corps législatif, par les articles 19, 20, 21, 22, 23, 24 et 25 du sénatus-consulte organique du 28 frimaire an XII. - Un des questeurs est renouvelé chaque année.",
            ],
          },
          {
            id: 'a-93',
            title: 'Article 93.',
            paragraphs: [
              "Le Tribunat est divisé en trois sections ; savoir : - Section de la législation, - Section de l'intérieur, - Section des finances.",
            ],
          },
          {
            id: 'a-94',
            title: 'Article 94.',
            paragraphs: [
              'Chaque section forme une liste de trois de ses membres, parmi lesquels le président du Tribunat désigne le président de la section. - Les fonctions de président de section durent un an.',
            ],
          },
          {
            id: 'a-95',
            title: 'Article 95.',
            paragraphs: [
              "Lorsque les sections respectives du Conseil d'État et du Tribunat demandent à se réunir, les conférences ont lieu sous la présidence de l'archichancelier de l'Empire ou de l'architrésorier, suivant la nature des objets à examiner.",
            ],
          },
          {
            id: 'a-96',
            title: 'Article 96.',
            paragraphs: [
              'Chaque section discute séparément et en assemblée de section, les projets de lois qui lui sont transmis par le Corps législatif - Deux orateurs de chacune des trois sections portent au Corps législatif le voeu de leur section, et en développement les motifs.',
            ],
          },
          {
            id: 'a-97',
            title: 'Article 97.',
            paragraphs: [
              "En aucun cas les projets de lois ne peuvent être discutés par le Tribunat en assemblée générale. - Il se réunit en assemblée générale, sous la présidence de son président, pour l'exercice de ses autres attributions.",
            ],
          },
        ],
      },
      {
        id: 'section-12-titre-xii-des-coll-ges-lectoraux',
        title: 'Titre XII - Des collèges électoraux',
        articles: [
          {
            id: 'a-98',
            title: 'Article 98.',
            paragraphs: [
              "Toutes les fois qu'un collège électoral de département est réuni pour la formation de la liste des candidats au Corps législatif, les listes de candidats pour le Sénat sont renouvelées. - Chaque renouvellement rend les présentations antérieures de nul effet.",
            ],
          },
          {
            id: 'a-99',
            title: 'Article 99.',
            paragraphs: [
              "Les grands officiers, les commandants et les officiers de la Légion d'honneur sont membres du collège électoral du département dans lequel ils ont leur domicile, ou de l'un des départements de la cohorte à laquelle ils appartiennent. - Les légionnaires sont membres du collège électoral de leur arrondissement. - Les membres de la Légion d'honneur sont admis au collège électoral dont ils doivent faire partie, sur la présentation d'un brevet qui leur est délivré à cet effet par le grand-électeur.",
            ],
          },
          {
            id: 'a-100',
            title: 'Article 100.',
            paragraphs: [
              'Les préfets et les commandants militaires des départements ne peuvent être élus candidats au Sénat par les collèges électoraux des départements dans lesquels ils exercent leurs fonctions.',
            ],
          },
        ],
      },
      {
        id: 'section-13-titre-xiii-de-la-haute-cour-imp-rial',
        title: 'Titre XIII - De la Haute Cour impériale',
        articles: [
          {
            id: 'a-101',
            title: 'Article 101.',
            paragraphs: [
              "Une Haute Cour impériale connaît, - 1 ° Des délits personnels commis par des membres de la famille impériale, par des titulaires des grandes dignités de l'Empire, par des ministres et par le secrétaire d'État, par de grands officiers, par des sénateurs, par des conseillers d'Etat ; - 2 ° Des crimes, attentats et complots contre la sûreté intérieure et extérieure de l'État, la personne de l'Empereur et celle de l'héritier présomptif de l'Empire ; - 3 ° Des délits de responsabilité d'office commis par les ministres et les conseillers d'État chargés spécialement d'une partie d'administration publique ; - 4 ° Des prévarications et abus de pouvoir, commis, soit par des capitaines généraux des colonies, des préfets coloniaux et des commandants des établissements français hors du continent, soit par des administrateurs généraux employés extraordinairement, soit par des généraux de terre ou de mer ; sans préjudice, à l'égard de ceux-ci, des poursuites de la juridiction militaire, dans les cas déterminés par les lois ; - 5 ° Du fait de désobéissance des généraux de terre ou de mer qui contreviennent à leurs instructions ; - 6 ° Des concussions et dilapidations dont les préfets de l'intérieur se rendent coupables dans l'exercice de leurs fonctions ; - 7 ° Des forfaitures ou prises à partie qui peuvent être encourues par une cour d'appel, ou par une cour de justice criminelle, ou par des membres de la Cour de cassation ; - 8 ° Des dénonciations pour cause de détention arbitraire et de violation de la liberté de la presse.",
            ],
          },
          {
            id: 'a-102',
            title: 'Article 102.',
            paragraphs: [
              'Le siège de la Haute Cour impériale est dans le Sénat.',
            ],
          },
          {
            id: 'a-103',
            title: 'Article 103.',
            paragraphs: [
              "Elle est présidée par L'archichancelier de l'Empire. - S'il est malade, absent ou légitimement empêché, elle est présidée par un autre titulaire d'une grande dignité de l'Empire.",
            ],
          },
          {
            id: 'a-104',
            title: 'Article 104.',
            paragraphs: [
              "La Haute Cour impériale est composée des princes, des titulaires des grandes dignités et grands officiers de l'Empire, du grand-juge ministre de la Justice, de soixante sénateurs, des six présidents des sections du Conseil d'État, de quatorze conseillers d'État et de vingt membres de la Cour de cassation. - Les sénateurs, conseillers d'État et les membres de la Cour de cassation sont appelés par ordre d'ancienneté.",
            ],
          },
          {
            id: 'a-105',
            title: 'Article 105.',
            paragraphs: [
              "Il y a auprès de la Haute Cour impériale un procureur général, nommé à vie par l'Empereur. - Il exerce le ministère public, étant assisté de trois tribuns, nommés chaque année par le Corps législatif, sur une liste de neuf candidats présentés par le Tribunat, et de trois magistrats que l'Empereur nomme aussi, chaque année, parmi les officiers des cours d'appel ou de justice criminelle.",
            ],
          },
          {
            id: 'a-106',
            title: 'Article 106.',
            paragraphs: [
              "Il y a auprès de la Haute Cour impériale un greffier en chef nommé à vie par l'Empereur.",
            ],
          },
          {
            id: 'a-107',
            title: 'Article 107.',
            paragraphs: [
              "Le président de la Haute Cour impériale ne peut jamais être récusé ; il peut s'abstenir pour des causes légitimes.",
            ],
          },
          {
            id: 'a-108',
            title: 'Article 108.',
            paragraphs: [
              "La Haute Cour impériale ne peut agir que sur les poursuites du ministère public, dans les délits commis par ceux que leur qualité rend justiciables de la Cour impériale ; s'il y a un plaignant, le ministère public devient nécessairement partie jointe et poursuivante et procède ainsi qu'il est réglé ci-après. Le ministère public est également partie jointe et poursuivante dans les cas de forfaiture ou de prise à partie.",
            ],
          },
          {
            id: 'a-109',
            title: 'Article 109.',
            paragraphs: [
              "Les magistrats de sûreté et les directeurs de jury sont tenus de s'arrêter, et de renvoyer, dans le délai de huitaine, au procureur général près la Haute Cour impériale, toutes les pièces de la procédure, lorsque, dans les délits dont ils poursuivent la réparation, il résulte, soit de la qualité des personnes, soit du titre de l'accusation, soit des circonstances, que le fait est de la compétence de la Haute Cour impériale. - Néanmoins les magistrats de sûreté continuent à recueillir les preuves et les traces du délit.",
            ],
          },
          {
            id: 'a-110',
            title: 'Article 110.',
            paragraphs: [
              "Les ministres ou les conseillers d'État chargés d'une partie quelconque d'administration publique, peuvent être dénoncés par le Corps législatif, s'ils ont donné des ordres contraires aux constitutions et aux lois de l'Empire.",
            ],
          },
          {
            id: 'a-111',
            title: 'Article 111.',
            paragraphs: [
              "Peuvent être également dénoncés par le Corps législatif, - Les capitaines généraux des colonies, les préfets coloniaux, les commandants des établissements français hors du continent, les administrateurs généraux, lorsqu'ils ont prévariqué ou abusé de leur pouvoir ; - Les généraux de terre ou de mer qui ont désobéi à leurs instructions ; - Les préfets de l'intérieur qui se sont rendus coupables de dilapidation ou de concussion.",
            ],
          },
          {
            id: 'a-112',
            title: 'Article 112.',
            paragraphs: [
              "Le Corps législatif dénonce pareillement les ministres ou agents de l'autorité, lorsqu'il y a eu, de la part du Sénat, déclaration de fortes présomptions de détention arbitraire ou de violation de la liberté de la presse.",
            ],
          },
          {
            id: 'a-113',
            title: 'Article 113.',
            paragraphs: [
              "La dénonciation du Corps législatif ne peut être arrêtée que sur la demande du Tribunat, ou sur la réclamation de cinquante membres du Corps législatif, qui requièrent un comité secret à l'effet de faire désigner, par la vole du scrutin, dix d'entre eux pour rédiger le projet de dénonciation.",
            ],
          },
          {
            id: 'a-114',
            title: 'Article 114.',
            paragraphs: [
              "Dans l'un et l'autre cas, la demande ou la réclamation doit être faite par écrit, signée par le président et les secrétaires du Tribunat, ou par les dix membres du Corps législatif. - Si elle est dirigée contre un ministre ou contre un conseiller d'État chargé d'une partie d'administration publique, elle leur est communiquée dans le délai d'un mois.",
            ],
          },
          {
            id: 'a-115',
            title: 'Article 115.',
            paragraphs: [
              "Le ministre ou le conseiller d'État dénoncé ne comparaît point pour y répondre. - L'Empereur nomme trois conseillers d'État pour se rendre au Corps législatif le jour qui est indiqué, et donner des éclaircissements sur les faits de la dénonciation.",
            ],
          },
          {
            id: 'a-116',
            title: 'Article 116.',
            paragraphs: [
              'Le Corps législatif discute en comité secret les faits compris dans la demande ou dans la réclamation, et il délibère par la voie du scrutin.',
            ],
          },
          {
            id: 'a-117',
            title: 'Article 117.',
            paragraphs: [
              "L'acte de dénonciation doit être circonstancié, signé par le président et par les secrétaires du Corps législatif. - Il est adressé par un message à l'archichancelier de l'Empire, qui le transmet au procureur général près la Haute Cour impériale.",
            ],
          },
          {
            id: 'a-118',
            title: 'Article 118.',
            paragraphs: [
              'Les prévarications ou abus de pouvoir des capitaines généraux des colonies, des préfets coloniaux, des commandants des établissements hors du continent, des administrateurs généraux, les faits de désobéissance de la part des généraux de terre ou de mer aux instructions qui leur ont été données, les dilapidations et concussions des préfets, sont aussi dénoncés par les ministres, chacun dans ses attributions, aux officiers chargés du ministère public. - Si la dénonciation est faite par le grand-juge ministre de la justice, il ne peut point assister ni prendre part aux jugements qui interviennent sur sa dénonciation.',
            ],
          },
          {
            id: 'a-119',
            title: 'Article 119.',
            paragraphs: [
              "Dans les cas déterminée par les articles 110, 111, 112 et 118, le procureur général informe sous trois jours l'archichancelier de l'Empire, qu'il y a lieu de réunir la Haute Cour impériale. - L'archichancelier, après avoir pris les ordres de l'Empereur, fixe dans la huitaine l'ouverture des séances.",
            ],
          },
          {
            id: 'a-120',
            title: 'Article 120.',
            paragraphs: [
              'Dans la première séance de la Haute Cour impériale, elle doit juger sa compétence.',
            ],
          },
          {
            id: 'a-121',
            title: 'Article 121.',
            paragraphs: [
              "Lorsqu'il y a dénonciation ou plainte, le procureur général, de concert avec les tribuns et les trois magistrats officiers du parquet, examine s'il y a lieu à poursuites. - La décision lui appartient ; l'un des magistrats du parquet, peut être chargé par le procureur général, de diriger les poursuites. - Si le ministère public estime que la plainte ou la dénonciation ne doit pas être admise, il motive les conclusions sur lesquelles la Haute Cour impériale prononce, après avoir entendu le magistrat chargé du rapport.",
            ],
          },
          {
            id: 'a-122',
            title: 'Article 122.',
            paragraphs: [
              "Lorsque les conclusions sont adoptées, la Haute Cour impériale termine l'affaire par un jugement définitif - Lorsqu'elles sont rejetées, le ministère public est tenu de continuer les poursuites.",
            ],
          },
          {
            id: 'a-123',
            title: 'Article 123.',
            paragraphs: [
              "Dans le second des cas prévus par l'article précédent, et aussi lorsque le ministère public estime que la plainte ou la dénonciation doit être admise, il est tenu de dresser l'acte d'accusation dans la huitaine, et de le communiquer au commissaire et au suppléant que l'archichancelier de l'Empire nomme parmi les juges de la Cour de cassation qui sont membres de la Haute Cour impériale. Les fonctions de ce commissaire, et, à son défaut, du suppléant, consistent à faire l'instruction et le rapport.",
            ],
          },
          {
            id: 'a-124',
            title: 'Article 124.',
            paragraphs: [
              "Le rapporteur ou son suppléant soumet l'acte d'accusation à douze commissaires de la Haute Cour impériale choisis par l'archichancelier de l'Empire, six parmi les sénateurs ; et six parmi les autres membres de la Haute Cour impériale. Les membres choisis ne concourent point au jugement de la Haute Cour impériale.",
            ],
          },
          {
            id: 'a-125',
            title: 'Article 125.',
            paragraphs: [
              "Si les douze commissaires jugent qu'il y a lieu à accusation, le commissaire rapporteur rend une ordonnance conforme, décerne les mandats d'arrêt, et procède à l'instruction.",
            ],
          },
          {
            id: 'a-126',
            title: 'Article 126.',
            paragraphs: [
              "Si les commissaires estiment au contraire qu'il n'y a pas lieu à accusation, il en est référé par le rapporteur à la Haute Cour impériale, qui prononce définitivement.",
            ],
          },
          {
            id: 'a-127',
            title: 'Article 127.',
            paragraphs: [
              "La Haute Cour impériale ne peut juger à moins de soixante membres. Dix de la totalité des membres qui sont appelés à la composer, peuvent être récusés sans motifs déterminés par l'accusé, et dix par la partie publique. L'arrêt est rendu à la majorité absolue des voix.",
            ],
          },
          {
            id: 'a-128',
            title: 'Article 128.',
            paragraphs: ['Les débats et le jugement ont lieu en public.'],
          },
          {
            id: 'a-129',
            title: 'Article 129.',
            paragraphs: [
              "Les accusés ont des défenseurs ; s'ils n'en présentent point, l'archichancelier de l'Empire leur en donne d'office.",
            ],
          },
          {
            id: 'a-130',
            title: 'Article 130.',
            paragraphs: [
              "La Haute Cour impériale ne peut prononcer que des peines portées par le code pénal. - Elle prononce, s'il y a lieu, la condamnation aux dommages et intérêts civils.",
            ],
          },
          {
            id: 'a-131',
            title: 'Article 131.',
            paragraphs: [
              "Lorsqu'elle acquitte, elle peut mettre ceux qui sont absous, sous la surveillance ou à la disposition de la haute police de l'Etat, pour le temps qu'elle détermine.",
            ],
          },
          {
            id: 'a-132',
            title: 'Article 132.',
            paragraphs: [
              "Les arrêts rendus par la Haute Cour impériale ne sont soumis à aucun recours ; - Ceux qui prononcent une condamnation à une peine afflictive ou infamante, ne peuvent être exécutés que lorsqu'ils ont été signés par l'Empereur.",
            ],
          },
          {
            id: 'a-133',
            title: 'Article 133.',
            paragraphs: [
              "Un sénatus-consulte particulier contient le surplus des dispositions relatives à l'organisation et à l'action de la Haute Cour impériale.",
            ],
          },
        ],
      },
      {
        id: 'section-14-titre-xiv-de-l-ordre-judiciaire',
        title: "Titre XIV - De l'ordre judiciaire",
        articles: [
          {
            id: 'a-134',
            title: 'Article 134.',
            paragraphs: [
              'Les jugements des cours de justice sont intitulés arrêts.',
            ],
          },
          {
            id: 'a-135',
            title: 'Article 135.',
            paragraphs: [
              "Les présidents de la Cour de cassation, des cours d'appel et de justice criminelle, sont nommés à vie par l'Empereur, et peuvent être choisis hors des cours qu'ils doivent présider.",
            ],
          },
          {
            id: 'a-136',
            title: 'Article 136.',
            paragraphs: [
              "Le Tribunal de cassation prend la dénomination de Cour de cassation. - Les tribunaux d'appel prennent celle de cours d'appel. - Les tribunaux criminels, celle de cours de justice criminelle. - Le président de la Cour de cassation et celui des cours d'appel divisées en section, prennent le titre de premier président. - Les vice-présidents prennent celui de présidents. - Les commissaires du gouvernement près de la Cour de cassation, des cours d'appel et des cours de justice criminelle, prennent le titre de procureurs généraux impériaux. - Les commissaires du gouvernement auprès des autres tribunaux, prennent le titre de procureurs impériaux.",
            ],
          },
        ],
      },
      {
        id: 'section-15-titre-xv-de-la-promulgation',
        title: 'Titre XV - De la promulgation',
        articles: [
          {
            id: 'a-137',
            title: 'Article 137.',
            paragraphs: [
              "L'Empereur fait sceller et fait promulguer les sénatus-consultes organiques, - Les sénatus-consultes, - Les actes du Sénat, - Les lois. - Les sénatus-consultes organiques, les sénatus-consultes, les actes du Sénat, sont promulgués au plus tard le dixième jour qui suit leur émission.",
            ],
          },
          {
            id: 'a-138',
            title: 'Article 138.',
            paragraphs: [
              "Il est fait deux expéditions originales de chacun des actes mentionnés en l'article précédent. - Toutes deux sont signées par l'Empereur, visées par l'un des titulaires des grandes dignités, chacun suivant leurs droits et leurs attributions, contresignées par le secrétaire d'État et le ministre de la justice, et scellées du grand sceau de L'Etat.",
            ],
          },
          {
            id: 'a-139',
            title: 'Article 139.',
            paragraphs: [
              "L'une de ces expéditions est déposée aux archives du sceau, et l'autre est remise aux archives de l'autorité publique de laquelle l'acte est émané.",
            ],
          },
          {
            id: 'a-140',
            title: 'Article 140.',
            paragraphs: [
              'La promulgation est ainsi conçue :',
              "« N. (le prénom de l'Empereur), par la grâce de Dieu et les constitutions de la République, Empereur des Français, à tous présents et à venir, SALUT. - Le Sénat, après avoir entendu les orateurs du Conseil d'État, a décrété ou arrêté, et nous ordonnons ce qui suit : - (Et s'il s'agit d'une loi) Le Corps législatif a rendu, le ... (la date), le décret suivant, conformément à la proposition faite au nom de l'Empereur, et après avoir entendu les orateurs du Conseil d'État et des sections du Tribunat, le ... - Mandons et ordonnons que les présentes, revêtues des sceaux de l'État, insérées au Bulletin des lois, soient adressées aux cours, aux tribunaux et aux autorités administratives, pour qu'ils les inscrivent dans leurs registres, les observent et les fassent observer, et le grand-juge, ministre de la justice, est chargé d'en surveiller la publication. »",
            ],
          },
          {
            id: 'a-141',
            title: 'Article 141.',
            paragraphs: [
              "Les expéditions exécutoires des jugements sont rédigées ainsi qu'il suit :",
              "« N. (le prénom de l'Empereur), par la grâce de Dieu et les constitutions de la République, Empereur des Français, à tous présents et à venir, Salut. - La cour de... ou le tribunal de... (si c'est un tribunal de Première Instance) a rendu le jugement suivant : (Ici copier l'arrêt ou le jugement). Mandons et ordonnons à tous huissiers sur ce requis, de mettre ledit jugement à exécution ; à nos procureurs généraux, et à nos procureurs près les tribunaux de première instance, d'y tenir la main ; à tous commandants et officiers de la force publique, de prêter main-forte lorsqu'ils en seront légalement requis. - En foi de quoi le présent jugement a été signé par le président de la cour ou du tribunal, et par le greffier. »",
            ],
          },
        ],
      },
      {
        id: 'section-16-titre-xvi-et-dernier',
        title: 'Titre XVI et dernier',
        articles: [
          {
            id: 'a-142',
            title: 'Article 142.',
            paragraphs: [
              "La proposition suivante sera présentée à l'acceptation du peuple, dans les formes déterminées par l'arrêté du 20 floréal an X : - « Le peuple veut l'hérédité de la dignité impériale dans la descendance directe, naturelle, légitime et adoptive de Napoléon Bonaparte, et dans la descendance directe, naturelle et légitime de Joseph Bonaparte et de Louis Bonaparte, ainsi qu'il est réglé par le sénatus-consulte organique de ce jour. »",
            ],
          },
        ],
      },
    ],
    notes: [
      {
        title: 'Reading context',
        text: 'This text comes from the Conseil constitutionnel historical archive. Notes here should help readers compare institutions, rights, and revision rules across French constitutional history.',
      },
    ],
  },
  {
    id: 'charte-constitutionnelle-du-4-juin-1814',
    year: '1814',
    shortLabel: '1814',
    title: 'Charter of 1814',
    sourceTitle: 'Charte de 1814 - 1ère Restauration - 4 juin 1814',
    regime: 'Restoration',
    date: '4 June 1814',
    sourceUrl:
      'https://www.conseil-constitutionnel.fr/les-constitutions-dans-l-histoire/charte-constitutionnelle-du-4-juin-1814',
    localSourcePath:
      '/constitution-archive/charte-constitutionnelle-du-4-juin-1814.html',
    summary:
      'Charter of 1814 belongs to the Restoration period. The original French text is preserved here as a source document for reading and comparison.',
    revisionGroups: [],
    sections: [
      {
        id: 'opening',
        title: 'Opening text',
        articles: [
          {
            id: 'p-1',
            title: 'Text',
            paragraphs: [
              "La divine Providence, en nous rappelant dans nos Etats après une longue absence, nous a imposé de grandes obligations. La paix était le premier besoin de nos sujets : nous nous en sommes occupés sans relâche ; et cette paix si nécessaire à la France comme au reste de l'Europe, est signée.",
              "Une Charte constitutionnelle était sollicitée par l'état actuel du royaume, nous l'avons promise, et nous la publions. Nous avons considéré que, bien que l'autorité tout entière résidât en France dans la personne du roi, ses prédécesseurs n'avaient point hésité à en modifier l'exercice, suivant la différence des temps ; que c'est ainsi que les communes ont dû leur affranchissement à Louis le Gros, la confirmation et l'extension de leurs droits à Saint Louis et à Philippe le Bel ; que l'ordre judiciaire a été établi et développé par les lois de Louis XI, de Henri Il et de Charles IX ; enfin, que Louis XIV a réglé presque toutes les parties de l'administration publique par différentes ordonnances dont rien encore n'avait surpassé la sagesse.",
              "Nous avons dû, à l'exemple des rois nos prédécesseurs, apprécier les effets des progrès toujours croissants des lumières, les rapports nouveaux que ces progrès ont introduits dans la société, la direction imprimée aux esprits depuis un demi-siècle, et les graves altérations qui en sont résultées : nous avons reconnu que le voeu de nos sujets pour une Charte constitutionnelle était l'expression d'un besoin réel ; mais en cédant à ce voeu, nous avons pris toutes les précautions pour que cette Charte fût digne de nous et du peuple auquel nous sommes fiers de commander. Des hommes sages, pris dans les premiers corps de l'Etat, se sont réunis à des commissions de notre Conseil, pour travailler à cet important ouvrage.",
              "En même temps que nous reconnaissions qu'une Constitution libre et monarchique devait remplir l'attente de l'Europe éclairée, nous avons dû nous souvenir aussi que notre premier devoir envers nos peuples était de conserver, pour leur propre intérêt, les droits et les prérogatives de notre couronne. Nous avons espéré qu'instruits par l'expérience, ils seraient convaincus que l'autorité suprême peut seule donner aux institutions qu'elle établit, la force, la permanence et la majesté dont elle est elle-même revêtue ; qu'ainsi lorsque la sagesse des rois s'accorde librement avec le voeu des peuples, une Charte constitutionnelle peut être de longue durée ; mais que quand la violence arrache des concessions à la faiblesse du gouvernement, la liberté publique n'est pas moins en danger que le trône même.",
              'Nous avons enfin cherché les principes de la Charte constitutionnelle dans le caractère français, et dans les monuments vénérables des siècles passés. Ainsi, nous avons vu dans le renouvellement de la pairie une institution vraiment nationale, et qui doit lier tous les souvenirs à toutes les espérances, en réunissant les temps anciens et les temps modernes.',
              "Nous avons remplacé, par la Chambre des députés, ces anciennes Assemblées des Champs de Mars et de Mai, et ces Chambres du tiers-état, qui ont si souvent donné tout à fois des preuves de zèle pour les intérêts du peuple, de fidélité et de respect pour l'autorité des rois. En cherchant ainsi à renouer la chaîne des temps, que de funestes écarts avaient interrompue, nous avons effacé de notre souvenir, comme nous voudrions qu'on pût les effacer de l'histoire, tous les maux qui ont affligé la patrie durant notre absence. Heureux de nous retrouver au sein de la grande famille, nous n'avons su répondre à l'amour dont nous recevons tant de témoignages, qu'en prononçant des paroles de paix et de consolation. Le voeu le plus cher à notre coeur, c'est que tous les Français vivent en frères, et que jamais aucun souvenir amer ne trouble la sécurité qui doit suivre l'acte solennel que nous leur accordons aujourd'hui.",
              "Sûrs de nos intentions, forts de notre conscience, nous nous engageons, devant l'Assemblée qui nous écoute, à être fidèles à cette Charte constitutionnelle, nous réservant d'en juger le maintien, avec une nouvelle solennité, devant les autels de celui qui pèse dans la même balance les rois et les nations.",
              'A CES CAUSES - NOUS AVONS volontairement, et par le libre exercice de notre autorité royale, ACCORDÉ ET ACCORDONS. FAIT CONCESSION ET OCTROI à nos sujets, tant pour nous que pour nos successeurs, et à toujours, de la Charte constitutionnelle qui suit :',
            ],
          },
        ],
      },
      {
        id: 'section-1-droit-public-des-fran-ais',
        title: 'Droit public des Français',
        articles: [
          {
            id: 'a-1',
            title: 'Article 1.',
            paragraphs: [
              "Les Français sont égaux devant la loi, quels que soient d'ailleurs leurs titres et leurs rangs.",
            ],
          },
          {
            id: 'a-2',
            title: 'Article 2.',
            paragraphs: [
              "Ils contribuent indistinctement, dans la proportion de leur fortune, aux charges de l'Etat.",
            ],
          },
          {
            id: 'a-3',
            title: 'Article 3.',
            paragraphs: [
              'Ils sont tous également admissibles aux emplois civils et militaires.',
            ],
          },
          {
            id: 'a-4',
            title: 'Article 4.',
            paragraphs: [
              "Leur liberté individuelle est également garantie, personne ne pouvant être poursuivi ni arrêté que dans les cas prévus par la loi, et dans la forme qu'elle prescrit.",
            ],
          },
          {
            id: 'a-5',
            title: 'Article 5.',
            paragraphs: [
              'Chacun professe sa religion avec une égale liberté, et obtient pour son culte la même protection.',
            ],
          },
          {
            id: 'a-6',
            title: 'Article 6.',
            paragraphs: [
              "Cependant la religion catholique, apostolique et romaine est la religion de l'Etat.",
            ],
          },
          {
            id: 'a-7',
            title: 'Article 7.',
            paragraphs: [
              'Les ministres de la religion catholique, apostolique et romaine, et ceux des autres cultes chrétiens, reçoivent seuls des traitements du Trésor royal.',
            ],
          },
          {
            id: 'a-8',
            title: 'Article 8.',
            paragraphs: [
              'Les Français ont le droit de publier et de faire imprimer leurs opinions, en se conformant aux lois qui doivent réprimer les abus de cette liberté.',
            ],
          },
          {
            id: 'a-9',
            title: 'Article 9.',
            paragraphs: [
              "Toutes les propriétés sont inviolables, sans aucune exception de celles qu'on appelle nationales, la loi ne mettant aucune différence entre elles.",
            ],
          },
          {
            id: 'a-10',
            title: 'Article 10.',
            paragraphs: [
              "L'Etat peut exiger le sacrifice d'une propriété, pour cause d'intérêt public légalement constaté, mais avec une indemnité préalable.",
            ],
          },
          {
            id: 'a-11',
            title: 'Article 11.',
            paragraphs: [
              "Toutes recherches des opinions et votes émis jusqu'à la restauration sont interdites. Le même oubli est commandé aux tribunaux et aux citoyens.",
            ],
          },
          {
            id: 'a-12',
            title: 'Article 12.',
            paragraphs: [
              "La conscription est abolie. Le mode de recrutement de l'armée de terre et de mer est déterminé par une loi.",
            ],
          },
        ],
      },
      {
        id: 'section-2-formes-du-gouvernement-du-roi',
        title: 'Formes du gouvernement du Roi',
        articles: [
          {
            id: 'a-13',
            title: 'Article 13.',
            paragraphs: [
              'La personne du roi est inviolable et sacrée. Ses ministres sont responsables. Au roi seul appartient la puissance exécutive.',
            ],
          },
          {
            id: 'a-14',
            title: 'Article 14.',
            paragraphs: [
              "Le roi est le chef suprême de l'Etat, il commande les forces de terre et de mer, déclare la guerre, fait les traités de paix, d'alliance et de commerce, nomme à tous les emplois d'administration publique, et fait les règlements et ordonnances nécessaires pour l'exécution des lois et la sûreté de l'Etat.",
            ],
          },
          {
            id: 'a-15',
            title: 'Article 15.',
            paragraphs: [
              "La puissance législative s'exerce collectivement par le roi, la Chambre des pairs, et la Chambre des députés des départements.",
            ],
          },
          {
            id: 'a-16',
            title: 'Article 16.',
            paragraphs: ['Le roi propose la loi.'],
          },
          {
            id: 'a-17',
            title: 'Article 17',
            paragraphs: [
              "La proposition de la loi est portée, au gré du roi, à la Chambre des pairs ou à celle des députés, excepté la loi de l'impôt, qui doit être adressée d'abord à la Chambre des députés.",
            ],
          },
          {
            id: 'a-18',
            title: 'Article 18.',
            paragraphs: [
              'Toute la loi doit être discutée et votée librement par la majorité de chacune des deux chambres.',
            ],
          },
          {
            id: 'a-19',
            title: 'Article 19.',
            paragraphs: [
              "Les chambres ont la faculté de supplier le roi de proposer une loi sur quelque objet que ce soit, et d'indiquer ce qu'il leur paraît convenable que la loi contienne.",
            ],
          },
          {
            id: 'a-20',
            title: 'Article 20.',
            paragraphs: [
              "Cette demande pourra être faite par chacune des deux chambres, mais après avoir été discutée en comité secret : elle ne sera envoyée à l'autre Chambre par celle qui l'aura proposée, qu'après un délai de dix jours.",
            ],
          },
          {
            id: 'a-21',
            title: 'Article 21.',
            paragraphs: [
              "Si la proposition est adoptée par l'autre Chambre, elle sera mise sous les yeux du roi ; si elle est rejetée, elle ne pourra être représentée dans la même session.",
            ],
          },
          {
            id: 'a-22',
            title: 'Article 22.',
            paragraphs: ['Le roi seul sanctionne et promulgue les lois.'],
          },
          {
            id: 'a-23',
            title: 'Article 23.',
            paragraphs: [
              "La liste civile est fixée pour toute la durée du règne, par la première législature assemblée depuis l'avènement du roi.",
            ],
          },
        ],
      },
      {
        id: 'section-3-de-la-chambre-des-pairs',
        title: 'De la Chambre des Pairs',
        articles: [
          {
            id: 'a-24',
            title: 'Article 24.',
            paragraphs: [
              'La Chambre des pairs est une portion essentielle de la puissance législative.',
            ],
          },
          {
            id: 'a-25',
            title: 'Article 25.',
            paragraphs: [
              "Elle est convoquée par le roi en même temps que la Chambre des députés des départements. La session de l'une commence et finit en même temps que celle de l'autre.",
            ],
          },
          {
            id: 'a-26',
            title: 'Article 26.',
            paragraphs: [
              'Toute assemblée de la Chambre des pairs qui serait tenue hors du temps de la session de la Chambre des députés, ou qui ne serait pas ordonnée par le roi, est illicite et nulle de plein droit.',
            ],
          },
          {
            id: 'a-27',
            title: 'Article 27.',
            paragraphs: [
              'La nomination des pairs de France appartient au roi. Leur nombre est illimité ; il peut en varier les dignités, les nommer à vie ou les rendre héréditaires, selon sa volonté.',
            ],
          },
          {
            id: 'a-28',
            title: 'Article 28.',
            paragraphs: [
              'Les pairs ont entrée dans la Chambre à vingt-cinq ans, et voix délibérative à trente ans seulement.',
            ],
          },
          {
            id: 'a-29',
            title: 'Article 29.',
            paragraphs: [
              'La Chambre des pairs est présidée par le chancelier de France, et, en son absence, par un pair nommé par le roi.',
            ],
          },
          {
            id: 'a-30',
            title: 'Article 30.',
            paragraphs: [
              "Les membres de la famille royale et les princes du sang sont pairs par le droit de leur naissance. Ils siègent immédiatement après le président ; mais ils n'ont voix délibérative qu'à vingt-cinq ans.",
            ],
          },
          {
            id: 'a-31',
            title: 'Article 31.',
            paragraphs: [
              "Les princes ne peuvent prendre séance à la Chambre que de l'ordre du roi, exprimé pour chaque session par un message, à peine de nullité de tout ce qui aurait été fait en leur présence.",
            ],
          },
          {
            id: 'a-32',
            title: 'Article 32.',
            paragraphs: [
              'Toutes les délibérations de la Chambre des pairs sont secrètes.',
            ],
          },
          {
            id: 'a-33',
            title: 'Article 33.',
            paragraphs: [
              "La Chambre des pairs connaît des crimes de haute trahison et des attentats à la sûreté de l'Etat qui seront définis par la loi.",
            ],
          },
          {
            id: 'a-34',
            title: 'Article 34.',
            paragraphs: [
              "Aucun pair ne peut être arrêté que de l'autorité de la Chambre, et jugé que par elle en matière criminelle.",
            ],
          },
        ],
      },
      {
        id: 'section-4-de-la-chambre-des-d-put-s-des-d-part',
        title: 'De la Chambre des députés des départements',
        articles: [
          {
            id: 'a-35',
            title: 'Article 35.',
            paragraphs: [
              "La Chambre des députés sera composée des députés par les collèges électoraux dont l'organisation sera déterminée par des lois.",
            ],
          },
          {
            id: 'a-36',
            title: 'Article 36.',
            paragraphs: [
              "Chaque département aura le même nombre de députés qu'il a eu jusqu'à présent.",
            ],
          },
          {
            id: 'a-37',
            title: 'Article 37.',
            paragraphs: [
              'Les députés seront élus pour cinq ans, et de manière que la Chambre soit renouvelée chaque année par cinquième.',
            ],
          },
          {
            id: 'a-38',
            title: 'Article 38.',
            paragraphs: [
              "Aucun député ne peut être admis dans la Chambre, s'il n'est âgé de quarante ans, et s'il ne paie une contribution directe de mille francs.",
            ],
          },
          {
            id: 'a-39',
            title: 'Article 39.',
            paragraphs: [
              "Si néanmoins il ne se trouvait pas dans le département cinquante personnes de l'âge indiqué, payant au moins mille francs de contributions directes, leur nombre sera complété par les plus imposés au-dessous de mille francs, et ceux-ci pourront être élus concurremment avec les premiers.",
            ],
          },
          {
            id: 'a-40',
            title: 'Article 40.',
            paragraphs: [
              "Les électeurs qui concourent à la nomination des députés, ne peuvent avoir droit de suffrage s'ils ne paient une contribution directe de trois cent francs, et s'ils ont moins de trente ans.",
            ],
          },
          {
            id: 'a-41',
            title: 'Article 41.',
            paragraphs: [
              'Les présidents des collèges électoraux seront nommés par le roi et de droit membres du collège.',
            ],
          },
          {
            id: 'a-42',
            title: 'Article 42.',
            paragraphs: [
              'La moitié au moins des députés sera choisie parmi les éligibles qui ont leur domicile politique dans le département.',
            ],
          },
          {
            id: 'a-43',
            title: 'Article 43.',
            paragraphs: [
              'Le président de la Chambre des députés est nommé par le roi, sur une liste de cinq membres présentée par la Chambre.',
            ],
          },
          {
            id: 'a-44',
            title: 'Article 44.',
            paragraphs: [
              "Les séances de la Chambre sont publiques ; mais la demande de cinq membres suffit pour qu'elle se forme en comité secret.",
            ],
          },
          {
            id: 'a-45',
            title: 'Article 45.',
            paragraphs: [
              'La Chambre se partage en bureaux pour discuter les projets qui lui ont été présentés de la part du roi.',
            ],
          },
          {
            id: 'a-46',
            title: 'Article 46.',
            paragraphs: [
              "Aucun amendement ne peut être fait à une loi, s'il n'a été proposé ou consenti par le roi, et s'il n'a été renvoyé et discuté dans les bureaux.",
            ],
          },
          {
            id: 'a-47',
            title: 'Article 47.',
            paragraphs: [
              "La Chambre des députés reçoit toutes les propositions d'impôts ; ce n'est qu'après que ces propositions ont été admises, qu'elles peuvent être portées à la Chambre des pairs.",
            ],
          },
          {
            id: 'a-48',
            title: 'Article 48.',
            paragraphs: [
              "Aucun impôt ne peut être établi ni perçu, s'il n'a été consenti par les deux Chambres et sanctionné par le roi.",
            ],
          },
          {
            id: 'a-49',
            title: 'Article 49.',
            paragraphs: [
              "L'impôt foncier n'est consenti que pour un an. Les impositions indirectes peuvent l'être pour plusieurs années.",
            ],
          },
          {
            id: 'a-50',
            title: 'Article 50.',
            paragraphs: [
              'Le roi convoque chaque année les deux Chambres ; il les proroge, et peut dissoudre celle des députés des départements ; mais, dans ce cas, il doit en convoquer une nouvelle dans le délai de trois mois.',
            ],
          },
          {
            id: 'a-51',
            title: 'Article 51.',
            paragraphs: [
              "Aucune contrainte par corps ne peut être exercée contre un membre de la Chambre, durant la session, et dans les six semaines qui l'auront précédée ou suivie.",
            ],
          },
          {
            id: 'a-52',
            title: 'Article 52.',
            paragraphs: [
              "Aucun membre de la Chambre ne peut, pendant la durée de la session, être poursuivi ni arrêté en matière criminelle, sauf le cas de flagrant délit, qu'après que la Chambre a permis sa poursuite.",
            ],
          },
          {
            id: 'a-53',
            title: 'Article 53.',
            paragraphs: [
              "Toute pétition à l'une ou l'autre des Chambres ne peut être faite et présentée que par écrit. La loi interdit d'en apporter en personne et à la barre.",
            ],
          },
        ],
      },
      {
        id: 'section-5-des-ministres',
        title: 'Des ministres',
        articles: [
          {
            id: 'a-54',
            title: 'Article 54.',
            paragraphs: [
              "Les ministres peuvent être membres de la Chambre des pairs ou de la Chambre des députés. Ils ont en outre leur entrée dans l'une ou l'autre Chambre, et doivent être entendus quand ils le demandent.",
            ],
          },
          {
            id: 'a-55',
            title: 'Article 55.',
            paragraphs: [
              "La Chambre des députés a le droit d'accuser les ministres, et de les traduire devant la Chambre des pairs qui seule a celui de les juger.",
            ],
          },
          {
            id: 'a-56',
            title: 'Article 56',
            paragraphs: [
              'Ils ne peuvent être accusés que pour fait de trahison ou de concussion. Des lois particulières spécifieront cette nature de délits, et en détermineront la poursuite.',
            ],
          },
        ],
      },
      {
        id: 'section-6-de-l-ordre-judiciaire',
        title: "De l'ordre judiciaire",
        articles: [
          {
            id: 'a-57',
            title: 'Article 57.',
            paragraphs: [
              "Toute justice émane du roi. Elle s'administre en son nom par des juges qu'il nomme et qu'il institue.",
            ],
          },
          {
            id: 'a-58',
            title: 'Article 58.',
            paragraphs: ['Les juges nommés par le roi sont inamovibles.'],
          },
          {
            id: 'a-59',
            title: 'Article 59.',
            paragraphs: [
              "Les cours et tribunaux ordinaires actuellement existants sont maintenus. Il n'y sera rien changé qu'en vertu d'une loi.",
            ],
          },
          {
            id: 'a-60',
            title: 'Article 60.',
            paragraphs: [
              "L'institution actuelle des juges de commerce est conservée.",
            ],
          },
          {
            id: 'a-61',
            title: 'Article 61.',
            paragraphs: [
              'La justice de paix est également conservée. Les juges de paix, quoique nommés par le roi, ne sont point inamovibles.',
            ],
          },
          {
            id: 'a-62',
            title: 'Article 62.',
            paragraphs: ['Nul ne pourra être distrait de ses juges naturels.'],
          },
          {
            id: 'a-63',
            title: 'Article 63.',
            paragraphs: [
              'Il ne pourra en conséquence être créé de commissions et tribunaux extraordinaires. Ne sont pas comprises sous cette dénomination les juridictions prévôtales, si leur rétablissement est jugé nécessaire.',
            ],
          },
          {
            id: 'a-64',
            title: 'Article 64.',
            paragraphs: [
              "Les débats seront publics en matière criminelle, à moins que cette publicité ne soit dangereuse pour l'ordre et les moeurs ; et, dans ce cas, le tribunal le déclare par un jugement.",
            ],
          },
          {
            id: 'a-65',
            title: 'Article 65.',
            paragraphs: [
              "L'institution des jurés est conservée. Les changements qu'une plus longue expérience ferait juger nécessaires, ne peuvent être effectués que par une loi.",
            ],
          },
          {
            id: 'a-66',
            title: 'Article 66.',
            paragraphs: [
              'La peine de la confiscation des biens est abolie, et ne pourra pas être rétablie.',
            ],
          },
          {
            id: 'a-67',
            title: 'Article 67.',
            paragraphs: [
              'Le roi a le droit de faire grâce, et celui de commuer les peines.',
            ],
          },
          {
            id: 'a-68',
            title: 'Article 68.',
            paragraphs: [
              "Le Code civil et les lois actuellement existantes qui ne sont pas contraires à la présente Charte, restent en vigueur jusqu'à ce qu'il y soit légalement dérogé.",
            ],
          },
        ],
      },
      {
        id: 'section-7-droits-particuliers-garantis-par-l-t',
        title: "Droits particuliers garantis par l'État",
        articles: [
          {
            id: 'a-69',
            title: 'Article 69.',
            paragraphs: [
              'Les militaires en activité de service, les officiers et soldats en retraite, les veuves, les officiers et soldats pensionnés, conserveront leurs grades, honneurs et pensions.',
            ],
          },
          {
            id: 'a-70',
            title: 'Article 70.',
            paragraphs: [
              "La dette publique est garantie. Toute espèce d'engagement pris par l'Etat avec ses créanciers est inviolable.",
            ],
          },
          {
            id: 'a-71',
            title: 'Article 71.',
            paragraphs: [
              'La noblesse ancienne reprend ses titres. La nouvelle conserve les siens. Le roi fait des nobles à volonté ; mais il ne leur accorde que des rangs et des honneurs, sans aucune exemption des charges et des devoirs de la société.',
            ],
          },
          {
            id: 'a-72',
            title: 'Article 72.',
            paragraphs: [
              "La Légion d'honneur est maintenue. Le roi déterminera les règlements intérieurs et la décoration.",
            ],
          },
          {
            id: 'a-73',
            title: 'Article 73.',
            paragraphs: [
              'Les colonies sont régies par des lois et des règlements particuliers.',
            ],
          },
          {
            id: 'a-74',
            title: 'Article 74.',
            paragraphs: [
              "Le roi et ses successeurs jureront, dans la solennité de leur sacre, d'observer fidèlement la présente Charte constitutionnelle.",
            ],
          },
        ],
      },
      {
        id: 'section-8-articles-transitoires',
        title: 'Articles transitoires',
        articles: [
          {
            id: 'a-75',
            title: 'Article 75.',
            paragraphs: [
              "Les députés des départements de France qui siégeaient au Corps législatif lors du dernier ajournement, continueront de siéger à la Chambre des députés jusqu'à remplacement.",
            ],
          },
          {
            id: 'a-76',
            title: 'Article 76.',
            paragraphs: [
              "Le premier renouvellement d'un cinquième de la Chambre des députés aura lieu au plus tard en l'année 1816, suivant l'ordre établi entre les séries.",
            ],
          },
        ],
      },
    ],
    notes: [
      {
        title: 'Reading context',
        text: 'This text comes from the Conseil constitutionnel historical archive. Notes here should help readers compare institutions, rights, and revision rules across French constitutional history.',
      },
    ],
  },
  {
    id: 'acte-additionnel-aux-constitutions-de-l-empire-du-22-avril-1815',
    year: '1815',
    shortLabel: '1815',
    title: 'Additional Act to the Constitutions of the Empire',
    sourceTitle:
      "Acte additionnel aux Constitutions de l'Empire - Cent-jours - 22 avril 1815",
    regime: 'Hundred Days',
    date: '22 April 1815',
    sourceUrl:
      'https://www.conseil-constitutionnel.fr/les-constitutions-dans-l-histoire/acte-additionnel-aux-constitutions-de-l-empire-du-22-avril-1815',
    localSourcePath:
      '/constitution-archive/acte-additionnel-aux-constitutions-de-l-empire-du-22-avril-1815.html',
    summary:
      'Additional Act to the Constitutions of the Empire belongs to the Hundred Days period. The original French text is preserved here as a source document for reading and comparison.',
    revisionGroups: [],
    sections: [
      {
        id: 'opening',
        title: 'Opening text',
        articles: [
          {
            id: 'p-1',
            title: 'Text',
            paragraphs: [
              "Depuis que nous avons été appelé, il y a quinze années, par le voeu de la France, au gouvernement de l'Etat, nous avons cherché à perfectionner, à diverses époques, les formes constitutionnelles, suivant les besoins et les désirs de la nation, et en profitant des leçons de l'expérience. Les constitutions de l'Empire se sont ainsi formées d'une série d'actes qui ont été revêtus de l'acceptation du peuple. Nous avions alors pour but d'organiser un grand système fédératif européen, que nous avions, adopté comme conforme à l'esprit du siècle, et favorable aux progrès de la civilisation. Pour parvenir à le compléter et à lui donner toute l'étendue et toute la stabilité dont il était susceptible, nous avions ajourné l'établissement de plusieurs institutions intérieures, plus spécialement destinées à protéger la liberté des citoyens. Notre but n'est plus désormais que d'accroître la prospérité de la France par l'affermissement de la liberté publique. De là résulte la nécessité de plusieurs modifications importantes dans les constitutions, sénatus-consultes et autres actes qui régissent cet empire.",
              "A CES CAUSES, voulant, d'un côté, conserver du passé ce qu'il y a de bon et de salutaire, et, de l'autre, rendre les constitutions de notre Empire conformes en tout aux voeux et aux besoins nationaux, ainsi qu'à l'état de paix que nous désirons maintenir avec l'Europe, nous avons résolu de proposer au peuple une suite de dispositions tendant à modifier et perfectionner ses actes constitutionnels, à entourer les droits des citoyens de toutes leurs garanties, à donner au système représentatif toute son extension, à investir les corps intermédiaires de la considération et du pouvoir désirables ; en un mot, a combiner le plus haut point de liberté politique et de sûreté individuelle avec la force et la centralisation nécessaires pour faire respecter par l'étranger l'indépendance du peuple français et la dignité de notre couronne.",
              "En conséquence les articles suivants, formant un acte supplémentaire aux constitutions de l'Empire, seront soumis à l'acceptation libre et solennelle de tous les citoyens, dans toute l'étendue de la France.",
            ],
          },
        ],
      },
      {
        id: 'section-1-titre-premier-dispositions-g-n-rales',
        title: 'Titre Premier - Dispositions générales',
        articles: [
          {
            id: 'a-1',
            title: 'Article 1.',
            paragraphs: [
              "Les constitutions de l'Empire, nommément l'acte constitutionnel du 22 frimaire an VIII, les sénatus-consultes des 14 et 16 thermidor an X, et celui du 28 floréal an XII, seront modifiés par les dispositions qui suivent. Toutes leurs autres dispositions sont confirmées et maintenues.",
            ],
          },
          {
            id: 'a-2',
            title: 'Article 2.',
            paragraphs: [
              "Le Pouvoir législatif est exercé par l'Empereur et par deux Chambres.",
            ],
          },
          {
            id: 'a-3',
            title: 'Article 3.',
            paragraphs: [
              'La première Chambre, nommée Chambre des pairs, est héréditaire.',
            ],
          },
          {
            id: 'a-4',
            title: 'Article 4.',
            paragraphs: [
              "L'Empereur en nomme les membres, qui sont irrévocables, eux et leurs descendants mâles, d'aîné en aîné en ligne directe. Le nombre des pairs est illimité. L'adoption ne transmet point la dignité de pair à celui qui en est l'objet. - Les pairs prennent séance à vingt et un ans, mais n'ont voix délibérative qu'à vingt-cinq.",
            ],
          },
          {
            id: 'a-5',
            title: 'Article 5.',
            paragraphs: [
              "La Chambre des pairs est présidée par l'archichancelier de l'Empire, ou, dans le cas prévu par l'article 51 du sénatus-consulte du 28 floréal an XII, par un des membres de cette Chambre désigné spécialement par l'Empereur.",
            ],
          },
          {
            id: 'a-6',
            title: 'Article 6.',
            paragraphs: [
              "Les membres de la famille impériale, dans l'ordre de l'hérédité, sont pairs, de droit. Ils siègent après le président. Ils prennent séance à dix-huit ans, mais n'ont voix délibérative qu'à vingt et un.",
            ],
          },
          {
            id: 'a-7',
            title: 'Article 7.',
            paragraphs: [
              'La seconde Chambre, nommée Chambre des représentants est élue par le peuple.',
            ],
          },
          {
            id: 'a-8',
            title: 'Article 8.',
            paragraphs: [
              'Les membres de cette Chambre sont au nombre de six cent vingt-neuf. Ils doivent être âgés de vingt-cinq ans au moins.',
            ],
          },
          {
            id: 'a-9',
            title: 'Article 9.',
            paragraphs: [
              "Le président de la Chambre des représentants est nommé par la Chambre à l'ouverture de la première session. Il reste en fonctions jusqu'au renouvellement de la Chambre. Sa nomination est soumise à l'approbation de l'Empereur.",
            ],
          },
          {
            id: 'a-10',
            title: 'Article 10.',
            paragraphs: [
              'La Chambre des représentants vérifie les pouvoirs de ses membres, et prononce sur la validité des élections contestées.',
            ],
          },
          {
            id: 'a-11',
            title: 'Article 11.',
            paragraphs: [
              "Les membres de la Chambre des représentants reçoivent pour frais de voyage, et durant la session, l'indemnité décrétée par l'Assemblée constituante.",
            ],
          },
          {
            id: 'a-12',
            title: 'Article 12.',
            paragraphs: ['Ils sont indéfiniment rééligibles.'],
          },
          {
            id: 'a-13',
            title: 'Article 13.',
            paragraphs: [
              'La Chambre des représentants est renouvelée de droit en entier tous les cinq ans.',
            ],
          },
          {
            id: 'a-14',
            title: 'Article 14.',
            paragraphs: [
              "Aucun membre de l'une ou de l'autre Chambre ne peut être arrêté, sauf le cas de flagrant délit, ni poursuivi en matière criminelle et correctionnelle, pendant les sessions, qu'en vertu d'une résolution de la Chambre dont il fait partie.",
            ],
          },
          {
            id: 'a-15',
            title: 'Article 15.',
            paragraphs: [
              'Aucun ne peut être arrêté ni détenu pour dettes, à partir de la convocation, ni quarante jours après la session.',
            ],
          },
          {
            id: 'a-16',
            title: 'Article 16.',
            paragraphs: [
              'Les pairs sont jugés par leur Chambre, en matière criminelle et correctionnelle, dans les formes qui seront réglées par la loi.',
            ],
          },
          {
            id: 'a-17',
            title: 'Article 17.',
            paragraphs: [
              "La qualité de pair et de représentant est compatible avec toute fonction publique, hors celles de comptables. - Toutefois les préfets et sous-préfets ne sont pas éligibles par le collège électoral du département ou de l'arrondissement qu'ils administrent.",
            ],
          },
          {
            id: 'a-18',
            title: 'Article 18.',
            paragraphs: [
              "L'Empereur envoie dans les Chambres des ministres d'Etat et des conseillers d'Etat, qui y siègent et prennent part aux discussions, mais qui n'ont voix délibérative que dans le cas où ils sont membres de la Chambre comme pairs ou élus du peuple.",
            ],
          },
          {
            id: 'a-19',
            title: 'Article 19.',
            paragraphs: [
              "Les ministres qui sont membres de la Chambre des pairs ou de celle des représentants, ou qui siègent par mission du gouvernement, donnent aux Chambres les éclaircissements qui sont jugés nécessaires, quand leur publicité ne compromet pas l'intérêt de l'Etat.",
            ],
          },
          {
            id: 'a-20',
            title: 'Article 20.',
            paragraphs: [
              "Les séances des deux Chambres sont publiques. Elles peuvent néanmoins se former en comité secret, la Chambre des pairs sur la demande de dix membres, celle des représentants sur la demande de vingt-cinq. Le gouvernement peut également requérir des comités secrets pour des communications à faire. Dans tous les cas, les délibérations et les votes ne peuvent avoir lieu qu'en séance publique.",
            ],
          },
          {
            id: 'a-21',
            title: 'Article 21.',
            paragraphs: [
              "L'Empereur peut proroger, ajourner et dissoudre la Chambre des représentants. La proclamation qui prononce la dissolution, convoque les collèges électoraux pour une élection nouvelle, et indique la réunion des représentants, dans six mois au plus tard.",
            ],
          },
          {
            id: 'a-22',
            title: 'Article 22.',
            paragraphs: [
              "Durant l'intervalle des sessions de la Chambre des représentants, ou en cas de dissolution de cette Chambre, la Chambre des pairs ne peut s'assembler.",
            ],
          },
          {
            id: 'a-23',
            title: 'Article 23.',
            paragraphs: [
              "Le gouvernement a la proposition de la loi ; les Chambres peuvent proposer des amendements : si ces amendements ne sont pas adoptés par le gouvernement, les Chambres sont tenues de voter sur la loi, telle qu'elle a été proposée.",
            ],
          },
          {
            id: 'a-24',
            title: 'Article 24.',
            paragraphs: [
              "Les Chambres ont la faculté d'inviter le gouvernement à proposer une loi sur un objet déterminé, et de rédiger ce qui leur paraît convenable d'insérer dans la loi. Cette demande peut être faite par chacune des deux Chambres.",
            ],
          },
          {
            id: 'a-25',
            title: 'Article 25.',
            paragraphs: [
              "Lorsqu'une rédaction est adoptée dans l'une des deux Chambres, elle est portée à l'autre ; et si elle y est approuvée, elle est portée à l'Empereur.",
            ],
          },
          {
            id: 'a-26',
            title: 'Article 26.',
            paragraphs: [
              "Aucun discours écrit, excepté les rapports des commissions, les rapports des ministres sur les lois qui sont présentées, et les comptes qui sont rendus, ne peut être lu dans l'une ou l'autre des Chambres.",
            ],
          },
        ],
      },
      {
        id: 'section-2-titre-ii-des-coll-ges-lectoraux-et-d',
        title: "Titre II - Des collèges électoraux et du mode d'élection",
        articles: [
          {
            id: 'a-27',
            title: 'Article 27.',
            paragraphs: [
              "Les collèges électoraux de département et d'arrondissement sont maintenus, conformément au sénatus-consulte du 16 thermidor an X, sauf les modifications qui suivent.",
            ],
          },
          {
            id: 'a-28',
            title: 'Article 28.',
            paragraphs: [
              'Les assemblées de canton rempliront chaque année, par des élections annuelles, toutes les vacances dans les collèges électoraux.',
            ],
          },
          {
            id: 'a-29',
            title: 'Article 29.',
            paragraphs: [
              "A dater de l'an 1816, un membre de la Chambre des pairs, désigné par l'Empereur, sera président à vie et inamovible de chaque collège électoral de département.",
            ],
          },
          {
            id: 'a-30',
            title: 'Article 30.',
            paragraphs: [
              "A dater de la même époque, le collège électoral de chaque département nommera, parmi les membres de chaque collège d'arrondissement, le président et deux vice-présidents. A cet effet, l'assemblée du collège de département précédera de quinze jours celle du collège d'arrondissement.",
            ],
          },
          {
            id: 'a-31',
            title: 'Article 31.',
            paragraphs: [
              "Les collèges de département et d'arrondissement nommeront le nombre de représentants établi pour chacun par l'acte et le tableau ci-annexé, n° 1.",
            ],
          },
          {
            id: 'a-32',
            title: 'Article 32.',
            paragraphs: [
              "Les représentants peuvent être choisis indifféremment dans toute l'étendue de la France. - Chaque collège de département ou d'arrondissement qui choisira un représentant hors du département ou de l'arrondissement, nommera un suppléant qui sera pris nécessairement dans le département ou l'arrondissement.",
            ],
          },
          {
            id: 'a-33',
            title: 'Article 33.',
            paragraphs: [
              "L'industrie et la propriété manufacturière et commerciale auront une représentation spéciale. - L'élection des représentants commerciaux et manufacturiers sera faite par le collège électoral de département, sur une liste d'éligibles dressée par les chambres de commerce et les chambres consultatives réunies, suivant l'acte et le tableau ci-annexé, n° 2.",
            ],
          },
        ],
      },
      {
        id: 'section-3-titre-iii-de-la-loi-de-l-imp-t',
        title: "Titre III - De la loi de l'impôt",
        articles: [
          {
            id: 'a-34',
            title: 'Article 34.',
            paragraphs: [
              "L'impôt général direct, soit foncier, soit mobilier, n'est voté que pour un an ; les impôts indirects peuvent être votés pour plusieurs années. - Dans le cas de la dissolution de la Chambre des représentants, les impositions votées dans la session précédente sont continuées jusqu'à la nouvelle réunion de la Chambre.",
            ],
          },
          {
            id: 'a-35',
            title: 'Article 35.',
            paragraphs: [
              "Aucun impôt direct ou indirect en argent ou en nature ne peut être perçu, aucun emprunt ne peut avoir lieu, aucune inscription de créances au grand-livre de la dette publique ne peut être faite, aucun domaine ne peut être aliéné ni échangé, aucune levée d'hommes pour l'armée ne peut être ordonnée, aucune portion du territoire ne peut être changée qu'en vertu d'une loi.",
            ],
          },
          {
            id: 'a-36',
            title: 'Article 36.',
            paragraphs: [
              "Toute proposition d'impôt, d'emprunt, ou de levée d'hommes, ne peut être faite qu'à la Chambre des représentants.",
            ],
          },
          {
            id: 'a-37',
            title: 'Article 37.',
            paragraphs: [
              "C'est aussi à la Chambre des représentants qu'est porté d'abord, 1 ° le budget général de l'Etat, contenant l'aperçu des recettes et la proposition des fonds assignés pour l'année à chaque département du ministère ; 2 ° le compte des recettes et dépenses de l'année ou des années précédentes.",
            ],
          },
        ],
      },
      {
        id: 'section-4-titre-iv-des-ministres-et-de-la-resp',
        title: 'Titre IV - Des ministres, et de la responsabilité',
        articles: [
          {
            id: 'a-38',
            title: 'Article 38.',
            paragraphs: [
              'Tous les actes du gouvernement doivent être contresignés par un ministre ayant département.',
            ],
          },
          {
            id: 'a-39',
            title: 'Article 39.',
            paragraphs: [
              "Les ministres sont responsables des actes du gouvernement signés par eux, ainsi que de l'exécution des lois.",
            ],
          },
          {
            id: 'a-40',
            title: 'Article 40.',
            paragraphs: [
              'Ils peuvent être accusés par la Chambre des représentants, et sont jugés par celle des pairs.',
            ],
          },
          {
            id: 'a-41',
            title: 'Article 41.',
            paragraphs: [
              "Tout ministre, tout commandant d'armée de terre ou de mer, peut être accusé par la Chambre des représentants et jugé par la Chambre des pairs, pour avoir compromis la sûreté ou l'honneur de la nation.",
            ],
          },
          {
            id: 'a-42',
            title: 'Article 42.',
            paragraphs: [
              'La Chambre des pairs, en ce cas, exerce, soit pour caractériser le délit, soit pour infliger la peine, un pouvoir discrétionnaire.',
            ],
          },
          {
            id: 'a-43',
            title: 'Article 43.',
            paragraphs: [
              "Avant de prononcer la mise en accusation d'un ministre, la Chambre des représentants doit déclarer qu'il y a lieu à examiner la proposition d'accusation.",
            ],
          },
          {
            id: 'a-44',
            title: 'Article 44.',
            paragraphs: [
              "Cette déclaration ne peut se faire qu'après le rapport d'une commission de soixante membres tirés au sort. Cette commission ne fait son rapport que dix jours au plus tôt après sa nomination.",
            ],
          },
          {
            id: 'a-45',
            title: 'Article 45.',
            paragraphs: [
              "Quand la Chambre a déclaré qu'il y a lieu à examen, elle peut appeler le ministre dans son sein pour lui demander des explications. Cet appel ne peut avoir lieu que dix jours après le rapport de la commission.",
            ],
          },
          {
            id: 'a-46',
            title: 'Article 46.',
            paragraphs: [
              'Dans tout autre cas, les ministres ayant département ne peuvent être appelés ni mandés par les Chambres.',
            ],
          },
          {
            id: 'a-47',
            title: 'Article 47.',
            paragraphs: [
              "Lorsque la Chambre des représentants a déclaré qu'il y a lieu à examen contre un ministre, il est formé une nouvelle commission de soixante membres tirés au sort, comme la première ; et il est fait, par cette commission, un nouveau rapport sur la mise en accusation. Cette commission ne fait son rapport que dix jours après sa nomination.",
            ],
          },
          {
            id: 'a-48',
            title: 'Article 48.',
            paragraphs: [
              'La mise en accusation ne peut être prononcée que dix jours après la lecture et la distribution du rapport.',
            ],
          },
          {
            id: 'a-49',
            title: 'Article 49.',
            paragraphs: [
              "L'accusation étant prononcée, la Chambre des représentants nomme cinq commissaires pris dans son sein, pour poursuivre l'accusation devant la Chambre des pairs.",
            ],
          },
          {
            id: 'a-50',
            title: 'Article 50.',
            paragraphs: [
              "L'article 75 du titre VIII de 1'acte constitutionnel du 22 frimaire an VIII, portant que les agents du gouvernement ne peuvent être poursuivis qu'en vertu d'une décision du Conseil d'Etat, sera modifié par une loi.",
            ],
          },
        ],
      },
      {
        id: 'section-5-titre-v-du-pouvoir-judiciaire',
        title: 'Titre V - Du pouvoir Judiciaire',
        articles: [
          {
            id: 'a-51',
            title: 'Article 51.',
            paragraphs: [
              "L'Empereur nomme tous les juges. Ils sont inamovibles et à vie dès l'instant de leur nomination, sauf la nomination des juges de paix et des juges de commerce, qui aura lieu comme par le passé. Les juges actuels nommés par l'Empereur, aux termes du sénatus-consulte du 12 octobre 1807, et qu'il jugera convenable de conserver, recevront des provisions à vie avant le 1er janvier prochain.",
            ],
          },
          {
            id: 'a-52',
            title: 'Article 52.',
            paragraphs: ["L'institution des jurés est maintenue."],
          },
          {
            id: 'a-53',
            title: 'Article 53.',
            paragraphs: ['Les débats en matière criminelle sont publics.'],
          },
          {
            id: 'a-54',
            title: 'Article 54.',
            paragraphs: [
              'Les délits militaires seuls sont du ressort des tribunaux militaires.',
            ],
          },
          {
            id: 'a-55',
            title: 'Article 55.',
            paragraphs: [
              'Tous les autres délits, même commis par les militaires, sont de la compétence des tribunaux civils.',
            ],
          },
          {
            id: 'a-56',
            title: 'Article 56.',
            paragraphs: [
              "Tous les crimes et délits qui étaient attribués à la Haute Cour impériale et dont le jugement n'est pas réservé par le présent acte à la Chambre des pairs, seront portés devant les tribunaux ordinaires.",
            ],
          },
          {
            id: 'a-57',
            title: 'Article 57.',
            paragraphs: [
              "L'Empereur a le droit de faire grâce, même en matière correctionnelle, et d'accorder des amnisties.",
            ],
          },
          {
            id: 'a-58',
            title: 'Article 58.',
            paragraphs: [
              "Les interprétations des lois, demandées par la Cour de cassation, seront données dans la forme d'une loi.",
            ],
          },
        ],
      },
      {
        id: 'section-6-titre-vi-droits-des-citoyens',
        title: 'Titre VI - Droits des citoyens',
        articles: [
          {
            id: 'a-59',
            title: 'Article 59.',
            paragraphs: [
              "Les Français sont égaux devant la loi, soit pour la contribution aux impôts et charges publiques, soit pour l'admission aux emplois civils et militaires.",
            ],
          },
          {
            id: 'a-60',
            title: 'Article 60.',
            paragraphs: [
              'Nul ne peut, sous aucun prétexte, être distrait des juges qui lui sont assignés par la loi.',
            ],
          },
          {
            id: 'a-61',
            title: 'Article 61.',
            paragraphs: [
              'Nul ne peut être poursuivi, arrêté, détenu ni exilé, que dans les cas prévus par la loi et suivant les formes prescrites.',
            ],
          },
          {
            id: 'a-62',
            title: 'Article 62.',
            paragraphs: ['La liberté des cultes est garantie à tous.'],
          },
          {
            id: 'a-63',
            title: 'Article 63.',
            paragraphs: [
              "Toutes les propriétés possédées ou acquises en vertu des lois et toutes les créances sur l'Etat, sont inviolables.",
            ],
          },
          {
            id: 'a-64',
            title: 'Article 64.',
            paragraphs: [
              "Tout citoyen a le droit d'imprimer et de publier ses pensées, en les signant, sans aucune censure préalable, sauf la responsabilité légale, après la publication, par jugement par jurés, quand même il n'y aurait lieu qu'à l'application d'une peine correctionnelle.",
            ],
          },
          {
            id: 'a-65',
            title: 'Article 65.',
            paragraphs: [
              "Le droit de pétition est assuré à tous les citoyens. Toute pétition est individuelle. Ces pétitions peuvent être adressées, soit au gouvernement, soit aux deux Chambres : néanmoins ces dernières même doivent porter l'intitulé : A Sa Majesté l'Empereur. Elles seront présentées aux Chambres sous la garantie d'un membre qui recommande la pétition. Elles sont lues publiquement, et si la Chambre les prend en considération, elles sont portées à l'Empereur par le président.",
            ],
          },
          {
            id: 'a-66',
            title: 'Article 66.',
            paragraphs: [
              "Aucune place, aucune partie du territoire, ne peut être déclarée en état de siège, que dans le cas d'invasion de la part d'une force étrangère, ou de troubles civils. - Dans le premier cas, la déclaration est faite par un acte du gouvernement. - Dans le second cas, elle ne peut l'être que par la loi. Toutefois, si, le cas arrivant, les Chambres ne sont pas assemblées, l'acte du gouvernement déclarant l'état de siège doit être converti en une proposition de loi dans les quinze premiers jours de la réunion des Chambres.",
            ],
          },
          {
            id: 'a-67',
            title: 'Article 67.',
            paragraphs: [
              "Le peuple français déclare que, dans la délégation qu'il a faite et qu'il fait de ses pouvoirs, il n'a pas entendu et n'entend pas donner le droit de proposer le rétablissement des Bourbons ou d'aucun prince de cette famille sur le trône, même en cas d'extinction de la dynastie impériale, ni le droit de rétablir soit l'ancienne noblesse féodale, soit les droits féodaux et seigneuriaux, soit les dîmes, soit aucun culte privilégié et dominant, ni la faculté de porter aucune atteinte à l'irrévocabilité de la vente des domaines nationaux ; il interdit formellement au gouvernement, aux Chambres et aux citoyens toute proposition à cet égard.",
              "Suivent l'acte et les tableaux fixant le nombre des députés à élire pour la Chambre des représentants.",
            ],
          },
        ],
      },
    ],
    notes: [
      {
        title: 'Reading context',
        text: 'This text comes from the Conseil constitutionnel historical archive. Notes here should help readers compare institutions, rights, and revision rules across French constitutional history.',
      },
    ],
  },
  {
    id: 'charte-constitutionnelle-du-14-aout-1830',
    year: '1830',
    shortLabel: '1830',
    title: 'Charter of 1830',
    sourceTitle: 'Charte de 1830, monarchie de Juillet - 14 août 1830',
    regime: 'July Monarchy',
    date: '14 August 1830',
    sourceUrl:
      'https://www.conseil-constitutionnel.fr/les-constitutions-dans-l-histoire/charte-constitutionnelle-du-14-aout-1830',
    localSourcePath:
      '/constitution-archive/charte-constitutionnelle-du-14-aout-1830.html',
    summary:
      'Charter of 1830 belongs to the July Monarchy period. The original French text is preserved here as a source document for reading and comparison.',
    revisionGroups: [],
    sections: [
      {
        id: 'opening',
        title: 'Opening text',
        articles: [
          {
            id: 'p-1',
            title: 'Text',
            paragraphs: [
              'LOUIS-PHILIPPE, ROI DES FRANÇAIS, à tous présents et à venir, SALUT.',
              "NOUS AVONS ORDONNÉ ET ORDONNONS que la Charte constitutionnelle de 1814, telle qu'elle a été amendée par les deux Chambres le 7 août et acceptée par nous le 9, sera de nouveau publiée dans les termes suivants :",
            ],
          },
        ],
      },
      {
        id: 'section-1-droit-public-des-fran-ais',
        title: 'Droit public des Français',
        articles: [
          {
            id: 'a-1',
            title: 'Article 1.',
            paragraphs: [
              "Les Français sont égaux devant la loi, quels que soient d'ailleurs leurs titres et leurs rangs.",
            ],
          },
          {
            id: 'a-2',
            title: 'Article 2.',
            paragraphs: [
              "Ils contribuent indistinctement, dans la proportion de leur fortune, aux charges de l'Etat.",
            ],
          },
          {
            id: 'a-3',
            title: 'Article 3.',
            paragraphs: [
              'Ils sont tous également admissibles aux emplois civils et militaires.',
            ],
          },
          {
            id: 'a-4',
            title: 'Article 4.',
            paragraphs: [
              "Leur liberté individuelle est également garantie, personne ne pouvant être poursuivi ni arrêté que dans les cas prévus par la loi et dans la forme qu'elle prescrit.",
            ],
          },
          {
            id: 'a-5',
            title: 'Article 5.',
            paragraphs: [
              'Chacun professe sa religion avec une égale liberté, et obtient pour son culte la même protection.',
            ],
          },
          {
            id: 'a-6',
            title: 'Article 6.',
            paragraphs: [
              'Les ministres de la religion catholique, apostolique et romaine, professée par la majorité des Français, et ceux des autres cultes chrétiens, reçoivent des traitements du Trésor public.',
            ],
          },
          {
            id: 'a-7',
            title: 'Article 7.',
            paragraphs: [
              'Les Français ont le droit de publier et de faire imprimer leurs opinions en se conformant aux lois. - La censure ne pourra jamais être rétablie.',
            ],
          },
          {
            id: 'a-8',
            title: 'Article 8.',
            paragraphs: [
              "Toutes les propriétés sont inviolables, sans aucune exception de celles qu'on appelle nationales, la loi ne mettant aucune différence entre elles.",
            ],
          },
          {
            id: 'a-9',
            title: 'Article 9.',
            paragraphs: [
              "L'Etat peut exiger le sacrifice d'une propriété pour cause d'intérêt public légalement constaté, mais avec une indemnité préalable.",
            ],
          },
          {
            id: 'a-10',
            title: 'Article 10.',
            paragraphs: [
              "Toutes recherches des opinions et des votes émis jusqu'à la Restauration sont interdites : le même oubli est commandé aux tribunaux et aux citoyens.",
            ],
          },
          {
            id: 'a-11',
            title: 'Article 11.',
            paragraphs: [
              "La conscription est abolie. Le mode de recrutement de l'armée de terre et de mer est déterminé par une loi.",
            ],
          },
        ],
      },
      {
        id: 'section-2-formes-du-gouvernement-du-roi',
        title: 'Formes du gouvernement du Roi',
        articles: [
          {
            id: 'a-12',
            title: 'Article 12.',
            paragraphs: [
              'La personne du roi est inviolable et sacrée. Ses ministres sont responsables. Au roi seul appartient la puissance exécutive.',
            ],
          },
          {
            id: 'a-13',
            title: 'Article 13.',
            paragraphs: [
              "Le roi est le chef suprême de l'Etat ; il commande les forces de terre et de mer, déclare la guerre, fait les traités de paix, d'alliance et de commerce, nomme à tous les emplois d'administration publique, et fait les règlements et ordonnances nécessaires pour l'exécution des lois, sans pouvoir jamais ni suspendre les lois elles-mêmes ni dispenser de leur exécution. - Toutefois aucune troupe étrangère ne pourra être admise au service de l'Etat qu'en vertu d'une loi.",
            ],
          },
          {
            id: 'a-14',
            title: 'Article 14.',
            paragraphs: [
              "La puissance législative s'exerce collectivement par le roi, la Chambre des pairs et la Chambre des députés.",
            ],
          },
          {
            id: 'a-15',
            title: 'Article 15.',
            paragraphs: [
              "La proposition des lois appartient au roi, à la Chambre des pairs et à la Chambre des députés. - Néanmoins toute loi d'impôt doit être d'abord votée par la Chambre des députés.",
            ],
          },
          {
            id: 'a-16',
            title: 'Article 16.',
            paragraphs: [
              'Toute loi doit être discutée et votée librement par la majorité de chacune des deux Chambres.',
            ],
          },
          {
            id: 'a-17',
            title: 'Article 17.',
            paragraphs: [
              "Si une proposition de loi a été rejetée par l'un des trois pouvoirs, elle ne pourra être représentée dans la même session.",
            ],
          },
          {
            id: 'a-18',
            title: 'Article 18.',
            paragraphs: ['Le roi seul sanctionne et promulgue les lois.'],
          },
          {
            id: 'a-19',
            title: 'Article 19.',
            paragraphs: [
              "La liste civile est fixée pour toute la durée du règne par la première législature assemblée depuis l'avènement du roi.",
            ],
          },
        ],
      },
      {
        id: 'section-3-de-la-chambre-des-pairs',
        title: 'De la Chambre des Pairs',
        articles: [
          {
            id: 'a-20',
            title: 'Article 20.',
            paragraphs: [
              'La Chambre des pairs est une portion essentielle de la puissance législative.',
            ],
          },
          {
            id: 'a-21',
            title: 'Article 21.',
            paragraphs: [
              "Elle est convoquée par le roi en même temps que la Chambre des députés. La session de l'une commence et finit en même temps que celle de l'autre.",
            ],
          },
          {
            id: 'a-22',
            title: 'Article 22.',
            paragraphs: [
              'Toute assemblée de la Chambre des pairs qui serait tenue hors du temps de la session de la Chambre des députés, est illicite et nulle de plein droit, sauf le seul cas où elle est réunie comme cour de justice, et alors elle ne peut exercer que des fonctions judiciaires.',
            ],
          },
          {
            id: 'a-23',
            title: 'Article 23.',
            paragraphs: [
              'La nomination des pairs de France appartient au roi. Leur nombre est illimité : il peut en varier les dignités, les nommer à vie ou les rendre héréditaires, selon sa volonté.',
            ],
          },
          {
            id: 'a-24',
            title: 'Article 24.',
            paragraphs: [
              'Les pairs ont entrée dans la Chambre à vingt-cinq ans, et voix délibérative à trente ans seulement.',
            ],
          },
          {
            id: 'a-25',
            title: 'Article 25.',
            paragraphs: [
              'La Chambre des pairs est présidée par le chancelier de France, et, en son absence, par un pair nommé par le roi.',
            ],
          },
          {
            id: 'a-26',
            title: 'Article 26.',
            paragraphs: [
              'Les princes du sang sont pairs par droit de naissance : ils siègent immédiatement après le président.',
            ],
          },
          {
            id: 'a-27',
            title: 'Article 27.',
            paragraphs: [
              'Les séances de la Chambre des pairs sont publiques, comme celles de la Chambre des députés.',
            ],
          },
          {
            id: 'a-28',
            title: 'Article 28.',
            paragraphs: [
              "La Chambre des pairs connaît des crimes de haute trahison et des attentats à la sûreté de l'Etat, qui seront définis par la loi.",
            ],
          },
          {
            id: 'a-29',
            title: 'Article 29.',
            paragraphs: [
              "Aucun pair ne peut être arrêté que de l'autorité de la Chambre et jugé que par elle en matière criminelle.",
            ],
          },
        ],
      },
      {
        id: 'section-4-de-la-chambre-des-d-put-s',
        title: 'De la Chambre des députés',
        articles: [
          {
            id: 'a-30',
            title: 'Article 30.',
            paragraphs: [
              "La Chambre des députés sera composée des députés élus par les collèges électoraux dont l'organisation sera déterminée par des lois.",
            ],
          },
          {
            id: 'a-31',
            title: 'Article 31.',
            paragraphs: ['Les députés sont élus pour cinq ans.'],
          },
          {
            id: 'a-32',
            title: 'Article 32.',
            paragraphs: [
              "Aucun député ne peut être admis dans la Chambre, s'il n'est âgé de trente ans et s'il ne réunit les autres conditions déterminées par la loi.",
            ],
          },
          {
            id: 'a-33',
            title: 'Article 33.',
            paragraphs: [
              "Si néanmoins il ne se trouvait pas dans le département cinquante personnes de l'âge indiqué payant le cens d'éligibilité déterminé par la loi, leur nombre sera complété par les plus imposés au-dessous du taux de ce cens, et ceux-ci pourront être élus concurremment avec les premiers.",
            ],
          },
          {
            id: 'a-34',
            title: 'Article 34.',
            paragraphs: [
              "Nul n'est électeur, s'il a moins de vingt-cinq ans, et s'il ne réunit les autres conditions déterminées par la loi.",
            ],
          },
          {
            id: 'a-35',
            title: 'Article 35.',
            paragraphs: [
              'Les présidents des collèges électoraux sont nommés par les électeurs.',
            ],
          },
          {
            id: 'a-36',
            title: 'Article 36.',
            paragraphs: [
              'La moitié au moins des députés sera choisie parmi les éligibles qui ont leur domicile dans le département.',
            ],
          },
          {
            id: 'a-37',
            title: 'Article 37.',
            paragraphs: [
              "Le président de la Chambre des députés est élu par elle à l'ouverture de chaque session.",
            ],
          },
          {
            id: 'a-38',
            title: 'Article 38.',
            paragraphs: [
              "Les séances de la Chambre sont publiques mais la demande de cinq membres suffit pour qu'elle se forme en Comité secret.",
            ],
          },
          {
            id: 'a-39',
            title: 'Article 39.',
            paragraphs: [
              'La Chambre se partage en bureaux pour discuter les projets qui lui ont été présentés de la part du roi.',
            ],
          },
          {
            id: 'a-40',
            title: 'Article 40.',
            paragraphs: [
              "Aucun impôt ne peut être établi ni perçu, s'il n'a été consenti par les deux Chambres et sanctionné par le roi.",
            ],
          },
          {
            id: 'a-41',
            title: 'Article 41.',
            paragraphs: [
              "L'impôt foncier n'est consenti que pour un an. Les impositions indirectes peuvent l'être pour plusieurs années.",
            ],
          },
          {
            id: 'a-42',
            title: 'Article 42.',
            paragraphs: [
              'Le roi convoque chaque année les deux Chambres : il les proroge et peut dissoudre celle des députés ; mais, dans ce cas, il doit en convoquer une nouvelle dans le délai de trois mois.',
            ],
          },
          {
            id: 'a-43',
            title: 'Article 43.',
            paragraphs: [
              "Aucune contrainte par corps ne peut être exercée contre un membre de la Chambre durant la session et dans les six semaines qui l'auront précédée ou suivie.",
            ],
          },
          {
            id: 'a-44',
            title: 'Article 44.',
            paragraphs: [
              "Aucun membre de la Chambre ne peut, pendant la durée de la session, être poursuivi ni arrêté en matière criminelle, sauf le cas de flagrant délit, qu'après que la Chambre a permis sa poursuite.",
            ],
          },
          {
            id: 'a-45',
            title: 'Article 45.',
            paragraphs: [
              "Toute pétition à l'une ou à l'autre des Chambres ne peut être faite et présentée que par écrit : la loi interdit d'en apporter en personne et à la barre.",
            ],
          },
        ],
      },
      {
        id: 'section-5-des-ministres',
        title: 'Des ministres',
        articles: [
          {
            id: 'a-46',
            title: 'Article 46.',
            paragraphs: [
              "Les ministres peuvent être membres de la Chambre des pairs ou de la Chambre des députés. - Ils ont en outre leur entrée dans l'une ou l'autre Chambre et doivent être entendus quand ils le demandent.",
            ],
          },
          {
            id: 'a-47',
            title: 'Article 47.',
            paragraphs: [
              "La Chambre des députés a le droit d'accuser les ministres et de les traduire devant la Chambre des pairs qui seule a celui de les juger.",
            ],
          },
        ],
      },
      {
        id: 'section-6-de-l-ordre-judiciaire',
        title: "De l'Ordre judiciaire",
        articles: [
          {
            id: 'a-48',
            title: 'Article 48.',
            paragraphs: [
              "Toute justice émane du roi ; elle s'administre en son nom par des juges qu'il nomme et qu'il institue.",
            ],
          },
          {
            id: 'a-49',
            title: 'Article 49.',
            paragraphs: ['Les juges nommés par le roi sont inamovibles.'],
          },
          {
            id: 'a-50',
            title: 'Article 50.',
            paragraphs: [
              "Les cours et tribunaux ordinaires actuellement existants sont maintenus. Il n'y sera rien changé qu'en vertu d'une loi.",
            ],
          },
          {
            id: 'a-51',
            title: 'Article 51.',
            paragraphs: [
              "L'institution actuelle des juges de commerce est conservée.",
            ],
          },
          {
            id: 'a-52',
            title: 'Article 52.',
            paragraphs: [
              'La justice de paix est également conservée. Les juges de paix, quoique nommés par le roi, ne sont point inamovibles.',
            ],
          },
          {
            id: 'a-53',
            title: 'Article 53.',
            paragraphs: ['Nul ne pourra être distrait de ses juges naturels.'],
          },
          {
            id: 'a-54',
            title: 'Article 54.',
            paragraphs: [
              'Il ne pourra en conséquence être créé de commissions et de tribunaux extraordinaires, à quelque titre et sous quelque dénomination que ce puisse être.',
            ],
          },
          {
            id: 'a-55',
            title: 'Article 55.',
            paragraphs: [
              "Les débats seront publics en matière criminelle, à moins que cette publicité ne soit dangereuse pour l'ordre et les moeurs ; et, dans ce cas, le tribunal le déclare par un jugement.",
            ],
          },
          {
            id: 'a-56',
            title: 'Article 56.',
            paragraphs: [
              "L'institution des jurés est conservée. Les changements qu'une plus longue expérience ferait juger nécessaires, ne peuvent être effectués que par une loi.",
            ],
          },
          {
            id: 'a-57',
            title: 'Article 57.',
            paragraphs: [
              'La peine de la confiscation des biens est abolie et ne pourra pas être rétablie.',
            ],
          },
          {
            id: 'a-58',
            title: 'Article 58.',
            paragraphs: [
              'Le roi a le droit de faire grâce et celui de commuer les peines.',
            ],
          },
          {
            id: 'a-59',
            title: 'Article 59.',
            paragraphs: [
              "Le Code civil et les lois actuellement existantes qui ne sont pas contraires à la présente charte restent en vigueur jusqu'à ce qu'il y soit légalement dérogé.",
            ],
          },
        ],
      },
      {
        id: 'section-7-droits-particuliers-garantis-par-l-t',
        title: "Droits particuliers garantis par l'État",
        articles: [
          {
            id: 'a-60',
            title: 'Article 6',
            paragraphs: [
              'o. - Les militaires en activité de service, les officiers et soldats en retraite, les veuves, les officiers, et soldats pensionnés, conserveront leurs grades, honneurs et pensions.',
            ],
          },
          {
            id: 'a-61',
            title: 'Article 61.',
            paragraphs: [
              "La dette publique est garantie. Toute espèce d'engagement pris par l'Etat avec ses créanciers est inviolable.",
            ],
          },
          {
            id: 'a-62',
            title: 'Article 62.',
            paragraphs: [
              'La noblesse ancienne reprend ses titres, la nouvelle conserve les siens. Le roi fait des nobles à volonté ; mais il ne leur accorde que des rangs et des honneurs, sans aucune exemption des charges et des devoirs de la société.',
            ],
          },
          {
            id: 'a-63',
            title: 'Article 63.',
            paragraphs: [
              "La Légion d'honneur est maintenue. Le roi déterminera les règlements intérieurs et la décoration.",
            ],
          },
          {
            id: 'a-64',
            title: 'Article 64.',
            paragraphs: [
              'Les colonies sont régies par des lois particulières.',
            ],
          },
          {
            id: 'a-65',
            title: 'Article 65.',
            paragraphs: [
              "Le roi et ses successeurs jureront à leur avènement, en présence des Chambres réunies, d'observer fidèlement la Charte constitutionnelle.",
            ],
          },
          {
            id: 'a-66',
            title: 'Article 66.',
            paragraphs: [
              "La présente Charte et tous les droits qu'elle consacre demeurent confiés au patriotisme et au courage des gardes nationales et de tous les citoyens français.",
            ],
          },
          {
            id: 'a-67',
            title: 'Article 67.',
            paragraphs: [
              "La France reprend ses couleurs. A l'avenir, il ne sera plus porté d'autre cocarde que la cocarde tricolore.",
            ],
          },
        ],
      },
      {
        id: 'section-8-dispositions-particuli-res',
        title: 'Dispositions particulières',
        articles: [
          {
            id: 'a-68',
            title: 'Article 68.',
            paragraphs: [
              "Toutes les nominations et créations nouvelles de pairs faites sous le règne du roi Charles X sont déclarées nulles et non avenues. - L'article 23 de la charte sera soumis à un nouvel examen dans la session de 1831.",
            ],
          },
          {
            id: 'a-69',
            title: 'Article 69.',
            paragraphs: [
              "Il sera pourvu successivement par des lois séparées et dans le plus court délai possible aux objets qui suivent : 1 ° L'application du jury aux délits de la presse et aux délits politiques ; 2 ° La responsabilité des ministres et des autres agents du pouvoir ; 3 ° La réélection des députés promus à des fonctions publiques salariées ; 4 ° Le vote annuel du contingent de l'armée ; 5 ° L'organisation de la garde nationale, avec intervention des gardes nationaux dans le choix de leurs officiers ; 6 ° Des dispositions qui assurent d'une manière légale l'état des officiers de tout grade de terre et de mer ; 7 ° Des institutions départementales et municipales fondées sur un système électif ; 8 ° L'instruction publique et la liberté de l'enseignements ; 9 ° L'abolition du double vote et la fixation des conditions électorales et d'éligibilité.",
            ],
          },
          {
            id: 'a-70',
            title: 'Article 70.',
            paragraphs: [
              "Toutes les lois et ordonnances, en ce qu'elles ont de contraire aux dispositions adoptées pour la réforme de la Charte, sont dès à présent et demeurent annulées et abrogées.",
            ],
          },
        ],
      },
    ],
    notes: [
      {
        title: 'Reading context',
        text: 'This text comes from the Conseil constitutionnel historical archive. Notes here should help readers compare institutions, rights, and revision rules across French constitutional history.',
      },
    ],
  },
  {
    id: 'constitution-de-1848-iie-republique',
    year: '1848',
    shortLabel: '1848',
    title: 'Constitution of 1848',
    sourceTitle: 'Constitution de 1848, IIe République - 4 novembre 1848',
    regime: 'Second Republic',
    date: '4 November 1848',
    sourceUrl:
      'https://www.conseil-constitutionnel.fr/les-constitutions-dans-l-histoire/constitution-de-1848-iie-republique',
    localSourcePath:
      '/constitution-archive/constitution-de-1848-iie-republique.html',
    summary:
      'Constitution of 1848 belongs to the Second Republic period. The original French text is preserved here as a source document for reading and comparison.',
    revisionGroups: [],
    sections: [
      {
        id: 'opening',
        title: 'Opening text',
        articles: [
          {
            id: 'p-1',
            title: 'Text',
            paragraphs: [
              "AU NOM DU PEUPLE FRANÇAIS, L'ASSEMBLÉE NATIONALE a adopté, et, conformément à l'article 6 du décret du 28 octobre 1848, le Président de l'Assemblée nationale promulgue la CONSTITUTION dont la teneur suit :",
            ],
          },
        ],
      },
      {
        id: 'section-1-pr-ambule',
        title: 'Préambule',
        articles: [
          {
            id: 'p-2',
            title: 'Text',
            paragraphs: [
              "En présence de Dieu et au nom du Peuple français, l'Assemblée nationale proclame :",
              "I. - La France s'est constituée en République. En adoptant cette forme définitive de gouvernement, elle s'est proposé pour but de marcher plus librement dans la voie du progrès et de la civilisation, d'assurer une répartition de plus en plus équitable des charges et des avantages de la société, d'augmenter l'aisance de chacun par la réduction graduée des dépenses publiques et des impôts, et de faire parvenir tous les citoyens, sans nouvelle commotion, par l'action successive et constante des institutions et des lois, à un degré toujours plus élevé de moralité, de lumières et de bien-être.",
              'II. - La République française est démocratique, une et indivisible.',
              'III. - Elle reconnaît des droits et des devoirs antérieurs et supérieurs aux lois positives.',
              "IV. - Elle a pour principe la Liberté, l'Egalité et la Fraternité. Elle a pour base la Famille, le Travail, la Propriété, l'Ordre public.",
              "V. - Elle respecte les nationalités étrangères, comme elle entend faire respecter la sienne ; n'entreprend aucune guerre dans des vues de conquête, et n'emploie jamais ses forces contre la liberté d'aucun peuple.",
              'VI. - Des devoirs réciproques obligent les citoyens envers la République, et la République envers les citoyens.',
              "VII. - Les citoyens doivent aimer la Patrie, servir la République, la défendre au prix de leur vie, participer aux charges de l'Etat en proportion de leur fortune ; ils doivent s'assurer, par le travail, des moyens d'existence, et, par la prévoyance, des ressources pour l'avenir ; ils doivent concourir au bien-être commun en s'entraidant fraternellement les uns les autres, et à l'ordre général en observant les lois morales et les lois écrites qui régissent la société, la famille et l'individu.",
              "VIII. - La République doit protéger le citoyen dans sa personne, sa famille, sa religion, sa propriété, son travail, et mettre à la portée de chacun l'instruction indispensable à tous les hommes ; elle doit, par une assistance fraternelle, assurer l'existence des citoyens nécessiteux, soit en leur procurant du travail dans les limites de ses ressources, soit en donnant, à défaut de la famille, des secours à ceux qui sont hors d'état de travailler. - En vue de l'accomplissement de tous ces devoirs, et pour la garantie de tous ces droits, l'Assemblée nationale, fidèle aux traditions des grandes Assemblées qui ont inauguré la Révolution française, décrète, ainsi qu'il suit, la Constitution de la République.",
            ],
          },
        ],
      },
      {
        id: 'section-3-chapitre-premier-de-la-souverainet-n',
        title: 'Chapitre premier - De la Souveraineté nationale',
        articles: [
          {
            id: 'a-1',
            title: 'Article 1.',
            paragraphs: [
              "La souveraineté réside dans l'universalité des citoyens français. - Elle est inaliénable et imprescriptible. - Aucun individu, aucune fraction du peuple ne peut s'en attribuer l'exercice.",
            ],
          },
        ],
      },
      {
        id: 'section-4-chapitre-ii-droits-des-citoyens-gara',
        title: 'Chapitre II - Droits des citoyens garantis par la Constitution',
        articles: [
          {
            id: 'a-2',
            title: 'Article 2.',
            paragraphs: [
              'Nul ne peut être arrêté ou détenu que suivant les prescriptions de la loi.',
            ],
          },
          {
            id: 'a-3',
            title: 'Article 3.',
            paragraphs: [
              "La demeure de toute personne habitant le territoire français est inviolable ; il n'est permis d'y pénétrer que selon les formes et dans les cas prévus par la loi.",
            ],
          },
          {
            id: 'a-4',
            title: 'Article 4.',
            paragraphs: [
              'Nul ne sera distrait de ses juges naturels. - Il ne pourra être créé de commissions et de tribunaux extraordinaires, à quelque titre et sous quelque dénomination que ce soit.',
            ],
          },
          {
            id: 'a-5',
            title: 'Article 5.',
            paragraphs: ['La peine de mort est abolie en matière politique.'],
          },
          {
            id: 'a-6',
            title: 'Article 6.',
            paragraphs: [
              "L'esclavage ne peut exister sur aucune terre française.",
            ],
          },
          {
            id: 'a-7',
            title: 'Article 7.',
            paragraphs: [
              "Chacun professe librement sa religion, et reçoit de l'Etat, pour l'exercice de son culte, une égale protection. - Les ministres, soit des cultes actuellement reconnus par la loi, soit de ceux qui seraient reconnus à l'avenir, ont le droit de recevoir un traitement de l'Etat.",
            ],
          },
          {
            id: 'a-8',
            title: 'Article 8.',
            paragraphs: [
              "Les citoyens ont le droit de s'associer, de s'assembler paisiblement et sans armes, de pétitionner, de manifester leurs pensées par la voie de la presse ou autrement. - L'exercice de ces droits n'a pour limites que les droits ou la liberté d'autrui et la sécurité publique. - La presse ne peut, en aucun cas, être soumise à la censure.",
            ],
          },
          {
            id: 'a-9',
            title: 'Article 9.',
            paragraphs: [
              "L'enseignement est libre. - La liberté d'enseignement s'exerce selon les conditions de capacité et de moralité déterminées par les lois, et sous la surveillance de l'Etat. - Cette surveillance s'étend à tous les établissements d'éducation et d'enseignement, sans aucune exception.",
            ],
          },
          {
            id: 'a-10',
            title: 'Article 10.',
            paragraphs: [
              'Tous les citoyens sont également admissibles à tous les emplois publics, sans autre motif de préférence que leur mérite, et suivant les conditions qui seront fixées par les lois. - Sont abolis à toujours tout titre nobiliaire, toute distinction de naissance, de classe ou de caste.',
            ],
          },
          {
            id: 'a-11',
            title: 'Article 11.',
            paragraphs: [
              "Toutes les propriétés sont inviolables. Néanmoins l'Etat peut exiger le sacrifice d'une propriété pour cause d'utilité publique légalement constatée, et moyennant une juste et préalable indemnité.",
            ],
          },
          {
            id: 'a-12',
            title: 'Article 12.',
            paragraphs: [
              'La confiscation des biens ne pourra jamais être rétablie.',
            ],
          },
          {
            id: 'a-13',
            title: 'Article 13.',
            paragraphs: [
              "La Constitution garantit aux citoyens la liberté du travail et de l'industrie. La société favorise et encourage le développement du travail par l'enseignement primaire gratuit, l'éducation professionnelle, l'égalité de rapports, entre le patron et l'ouvrier, les institutions de prévoyance et de crédit, les institutions agricoles, les associations volontaires, et l'établissement, par l'Etat, les départements et les communes, de travaux publics propres à employer les bras inoccupés ; elle fournit l'assistance aux enfants abandonnés, aux infirmes et aux vieillards sans ressources, et que leurs familles ne peuvent secourir.",
            ],
          },
          {
            id: 'a-14',
            title: 'Article 14.',
            paragraphs: [
              "La dette publique est garantie. - Toute espèce d'engagement pris par l'Etat avec ses créanciers est inviolable.",
            ],
          },
          {
            id: 'a-15',
            title: 'Article 15.',
            paragraphs: [
              "Tout impôt est établi pour l'utilité commune. - Chacun y contribue en proportion de ses facultés et de sa fortune.",
            ],
          },
          {
            id: 'a-16',
            title: 'Article 16.',
            paragraphs: [
              "Aucun impôt ne peut être établi ni perçu qu'en vertu de la loi.",
            ],
          },
          {
            id: 'a-17',
            title: 'Article 17.',
            paragraphs: [
              "L'impôt direct n'est consenti que pour un an. - Les impositions indirectes peuvent être consenties pour plusieurs années.",
            ],
          },
        ],
      },
      {
        id: 'section-5-chapitre-iii-des-pouvoir-publics',
        title: 'Chapitre III - Des pouvoir publics',
        articles: [
          {
            id: 'a-18',
            title: 'Article 18.',
            paragraphs: [
              "Tous les pouvoirs publics, quels qu'ils soient, émanent du peuple. - Ils ne peuvent être délégués héréditairement.",
            ],
          },
          {
            id: 'a-19',
            title: 'Article 19.',
            paragraphs: [
              "La séparation des pouvoirs est la première condition d'un gouvernement libre.",
            ],
          },
        ],
      },
      {
        id: 'section-6-chapitre-iv-du-pouvoir-l-gislatif',
        title: 'Chapitre IV - Du pouvoir législatif',
        articles: [
          {
            id: 'a-20',
            title: 'Article 20.',
            paragraphs: [
              'Le peuple français délègue le pouvoir législatif à une Assemblée unique.',
            ],
          },
          {
            id: 'a-21',
            title: 'Article 21.',
            paragraphs: [
              "Le nombre total des représentants du peuple sera de sept cent cinquante, y compris les représentants de l'Algérie et des colonies françaises.",
            ],
          },
          {
            id: 'a-22',
            title: 'Article 22.',
            paragraphs: [
              "Ce nombre s'élèvera à neuf cents pour les Assemblées qui seront appelées à réviser la Constitution.",
            ],
          },
          {
            id: 'a-23',
            title: 'Article 23.',
            paragraphs: ["L'élection a pour base la population."],
          },
          {
            id: 'a-24',
            title: 'Article 24.',
            paragraphs: [
              'Le suffrage est direct et universel. Le scrutin est secret.',
            ],
          },
          {
            id: 'a-25',
            title: 'Article 25.',
            paragraphs: [
              'Sont électeurs, sans condition de cens, tous les Français âgés de vingt et un ans, et jouissant de leurs droits civils et politiques.',
            ],
          },
          {
            id: 'a-26',
            title: 'Article 26.',
            paragraphs: [
              'Sont éligibles, sans condition de domicile, tous les électeurs âgés de vingt-cinq ans.',
            ],
          },
          {
            id: 'a-27',
            title: 'Article 27.',
            paragraphs: [
              "La loi électorale déterminera les causes qui peuvent priver un citoyen français du droit d'élire et d'être élu. - Elle désignera les citoyens qui, exerçant ou ayant exercé des fonctions dans un département ou un ressort territorial, ne pourront y être élus.",
            ],
          },
          {
            id: 'a-28',
            title: 'Article 28.',
            paragraphs: [
              "Toute fonction publique rétribuée est incompatible avec le mandat de représentant du peuple. - Aucun membre de l'Assemblée nationale ne peut, pendant la durée de la législature, être nommé ou promu à des fonctions publiques salariées dont les titulaires sont choisis à volonté par le pouvoir exécutif. - Les exceptions aux dispositions des deux paragraphes précédents seront déterminés par la loi électorale organique.",
            ],
          },
          {
            id: 'a-29',
            title: 'Article 29.',
            paragraphs: [
              "Les dispositions de l'article précédent ne sont pas applicables aux assemblées élues pour la révision de la Constitution.",
            ],
          },
          {
            id: 'a-30',
            title: 'Article 30.',
            paragraphs: [
              "L'élection des représentants se fera par département, et au scrutin de liste. - Les électeurs voteront au chef-lieu du canton ; néanmoins, en raison des circonstances locales, le canton pourra être divisé en plusieurs circonscriptions, dans la forme et aux conditions qui seront déterminées par la loi électorale.",
            ],
          },
          {
            id: 'a-31',
            title: 'Article 31.',
            paragraphs: [
              "L'Assemblée nationale est élue pour trois ans, et se renouvelle intégralement. - Quarante-cinq jours au plus tard avant la fin de la législature, une loi détermine l'époque des nouvelles élections. - Si aucune loi n'est intervenue dans le délai fixé par le paragraphe précédent, les électeurs se réunissent de plein droit le trentième jour qui précède la fin de la législature. - La nouvelle Assemblée est convoquée de plein droit pour le lendemain du jour où finit le mandat de l'Assemblée précédente.",
            ],
          },
          {
            id: 'a-32',
            title: 'Article 32.',
            paragraphs: [
              "Elle est permanente. - Néanmoins, elle peut s'ajourner à un terme qu'elle fixe. - Pendant la durée de la prorogation, une commission, composée des membres du bureau et de vingt-cinq représentants nommés par l'Assemblée au scrutin secret et à la majorité absolue, a le droit de la convoquer en cas d'urgence. - Le président de la République a aussi le droit de convoquer l'Assemblée. - L'Assemblée nationale détermine le lieu de ses séances. - Elle fixe l'importance des forces militaires établies pour sa sûreté, et elle en dispose.",
            ],
          },
          {
            id: 'a-33',
            title: 'Article 33.',
            paragraphs: ['Les représentants sont toujours rééligibles.'],
          },
          {
            id: 'a-34',
            title: 'Article 34.',
            paragraphs: [
              "Les membres de l'Assemblée nationale sont les représentants, non du département qui les nomme, mais de la France entière.",
            ],
          },
          {
            id: 'a-35',
            title: 'Article 35.',
            paragraphs: ['Ils ne peuvent recevoir de mandat impératif.'],
          },
          {
            id: 'a-36',
            title: 'Article 36.',
            paragraphs: [
              "Les représentants du peuple sont inviolables. - Ils ne pourront être recherchés, accusés, ni jugés, en aucun temps, pour les opinions qu'ils auront émises dans le sein de l'Assemblée nationale.",
            ],
          },
          {
            id: 'a-37',
            title: 'Article 37.',
            paragraphs: [
              "Ils ne peuvent être arrêtés en matière criminelle, sauf le cas de flagrant délit, ni poursuivis qu'après que l'Assemblée a permis la poursuite. - En cas d'arrestation pour flagrant délit, il en sera immédiatement référé à l'Assemblée, qui autorisera ou refusera la continuation des poursuites. Cette disposition s'applique au cas où un citoyen détenu est nommé représentant.",
            ],
          },
          {
            id: 'a-38',
            title: 'Article 38.',
            paragraphs: [
              'Chaque représentant du peuple reçoit une indemnité, à laquelle il ne peut renoncer.',
            ],
          },
          {
            id: 'a-39',
            title: 'Article 39.',
            paragraphs: [
              "Les séances de l'Assemblée sont publiques. - Néanmoins, l'Assemblée peut se former en comité secret, sur la demande du nombre de représentants fixé par le règlement. - Chaque représentant a le droit d'initiative parlementaire ; il l'exercera selon les formes déterminées par le règlement.",
            ],
          },
          {
            id: 'a-40',
            title: 'Article 40.',
            paragraphs: [
              "La présence de la moitié plus un des membres de l'Assemblée est nécessaire pour la validité du vote des lois.",
            ],
          },
          {
            id: 'a-41',
            title: 'Article 41.',
            paragraphs: [
              "Aucun projet de loi, sauf les cas d'urgence, ne sera voté définitivement qu'après trois délibérations, à des intervalles qui ne peuvent pas être moindres de cinq jours.",
            ],
          },
          {
            id: 'a-42',
            title: 'Article 42.',
            paragraphs: [
              "Toute proposition ayant pour objet de déclarer l'urgence est précédée d'un exposé des motifs. - Si l'Assemblée est d'avis de donner suite à la proposition d'urgence, elle en ordonne le renvoi dans les bureaux et fixe le moment où le rapport sur l'urgence lui sera présenté. - Sur ce rapport, si l'Assemblée reconnaît l'urgence, elle le déclare, et fixe le moment de la discussion. - Si elle décide qu'il n'y a pas urgence, le projet suit le cours des propositions ordinaires.",
            ],
          },
        ],
      },
      {
        id: 'section-7-chapitre-v-du-pouvoir-ex-cutif',
        title: 'Chapitre V - Du pouvoir exécutif',
        articles: [
          {
            id: 'a-43',
            title: 'Article 43',
            paragraphs: [
              'Le peuple français délègue le Pouvoir exécutif à un citoyen qui reçoit le titre de président de la République.',
            ],
          },
          {
            id: 'a-44',
            title: 'Article 44.',
            paragraphs: [
              "Le président doit être né Français, âgé de trente ans au moins, et n'avoir jamais perdu la qualité de Français.",
            ],
          },
          {
            id: 'a-45',
            title: 'Article 45.',
            paragraphs: [
              "Le président de la République est élu pour quatre ans, et n'est rééligible qu'après un intervalle de quatre années. - Ne peuvent, non plus, être élus après lui, dans le même intervalle, ni le vice-président, ni aucun des parents ou alliés du président jusqu'au sixième degré inclusivement.",
            ],
          },
          {
            id: 'a-46',
            title: 'Article 46.',
            paragraphs: [
              "L'élection a lieu de plein droit le deuxième dimanche du mois de mai. - Dans le cas où, par suite de décès, de démission ou de toute autre cause, le président serait élu à une autre époque, ses pouvoirs expireront le deuxième dimanche du mois de mai de la quatrième année qui suivra son élection. - Le président est nommé, au scrutin secret et à la majorité absolue des votants, par le suffrage direct de tous les électeurs des départements français et de l'Algérie.",
            ],
          },
          {
            id: 'a-47',
            title: 'Article 47.',
            paragraphs: [
              "Les procès-verbaux des opérations électorales sont transmis immédiatement à l'Assemblée nationale, qui statue sans délai sur la validité de l'élection et proclame le président de la République. - Si aucun candidat n'a obtenu plus de la moitié des suffrages exprimés, et au moins deux millions de voix, ou si les conditions exigées par l'article 44 ne sont pas remplies, l'Assemblée nationale élit le président de la République, à la majorité absolue et au scrutin secret, parmi les cinq candidats éligibles qui ont obtenu le plus de voix.",
            ],
          },
          {
            id: 'a-48',
            title: 'Article 48.',
            paragraphs: [
              "Avant d'entrer en fonctions, le président de la République prête au sein de l'Assemblée nationale le serment dont la teneur suit : - En présence de Dieu et devant le Peuple français, représenté par l'Assemblée nationale, je jure de rester fidèle à la République démocratique, une et indivisible, et de remplir tous les devoirs que m'impose la Constitution.",
            ],
          },
          {
            id: 'a-49',
            title: 'Article 49.',
            paragraphs: [
              "Il a le droit de faire présenter des projets de loi à l'Assemblée nationale par les ministres. - Il surveille et assure l'exécution des lois.",
            ],
          },
          {
            id: 'a-50',
            title: 'Article 50.',
            paragraphs: [
              'Il dispose de la force armée, sans pouvoir jamais la commander en personne.',
            ],
          },
          {
            id: 'a-51',
            title: 'Article 51.',
            paragraphs: [
              "Il ne peut céder aucune portion du territoire, ni dissoudre ni proroger l'Assemblée nationale, ni suspendre, en aucune manière, l'empire de la Constitution et des lois.",
            ],
          },
          {
            id: 'a-52',
            title: 'Article 52.',
            paragraphs: [
              "Il présente, chaque année, par un message, à l'Assemblée nationale, l'exposé de l'état général des affaires de la République.",
            ],
          },
          {
            id: 'a-53',
            title: 'Article 53.',
            paragraphs: [
              "Il négocie et ratifie les traités. - Aucun traité n'est définitif qu'après avoir été approuvé par l'Assemblée nationale.",
            ],
          },
          {
            id: 'a-54',
            title: 'Article 54.',
            paragraphs: [
              "Il veille à la défense de l'État, mais il ne peut entreprendre aucune guerre sans le consentement de l'Assemblée nationale.",
            ],
          },
          {
            id: 'a-55',
            title: 'Article 55.',
            paragraphs: [
              "Il a le droit de faire grâce, mais il ne peut exercer ce droit qu'après avoir pris l'avis du Conseil d'Etat. - Les amnisties ne peuvent être accordées que par une loi. - Le président de la République, les ministres, ainsi que toutes autres personnes condamnées par la Haute Cour de justice, ne peuvent être graciés que par l'Assemblée nationale.",
            ],
          },
          {
            id: 'a-56',
            title: 'Article 56.',
            paragraphs: [
              'Le président de la République promulgue les lois au nom du peuple français.',
            ],
          },
          {
            id: 'a-57',
            title: 'Article 57.',
            paragraphs: [
              "Les lois d'urgence sont promulguées dans le délai de trois jours, et les autres lois dans le délai d'un mois, à partir du jour où elles auront été adoptées par l'Assemblée nationale.",
            ],
          },
          {
            id: 'a-58',
            title: 'Article 58.',
            paragraphs: [
              "Dans le délai fixé pour la promulgation, le président de la République peut, par un message motivé, demander une nouvelle délibération. - L'Assemblée délibère : sa résolution devient définitive ; elle est transmise au président de la République. - En ce cas, la promulgation a lieu dans le délai fixé pour les lois d'urgence.",
            ],
          },
          {
            id: 'a-59',
            title: 'Article 59.',
            paragraphs: [
              "A défaut de promulgation par le président de la République, dans les délais déterminés par les articles précédents, il y serait pourvu par le président de l'Assemblée nationale.",
            ],
          },
          {
            id: 'a-60',
            title: 'Article 60.',
            paragraphs: [
              'Les envoyés et les ambassadeurs des puissances étrangères sont accrédités auprès du président de la République.',
            ],
          },
          {
            id: 'a-61',
            title: 'Article 61.',
            paragraphs: ['Il préside aux solennités nationales.'],
          },
          {
            id: 'a-62',
            title: 'Article 62.',
            paragraphs: [
              'Il est logé aux frais de la République, et reçoit un traitement de six cent mille francs par an.',
            ],
          },
          {
            id: 'a-63',
            title: 'Article 63.',
            paragraphs: [
              "Il réside au lieu où siège l'Assemblée nationale, et ne peut sortir du territoire continental de la République sans y être autorisé par une loi.",
            ],
          },
          {
            id: 'a-64',
            title: 'Article 64.',
            paragraphs: [
              "Le président de la République nomme et révoque les ministres. - Il nomme et révoque, en Conseil des Ministres, les agents diplomatiques, les commandants en chef des armées de terre et de mer, les préfets, le commandant supérieur des gardes nationales de la Seine, les gouverneurs de l'Algérie et des colonies, les procureurs généraux et autres fonctionnaires d'un ordre supérieurs - Il nomme et révoque, sur la proposition du ministre compétent, dans les conditions réglementaires déterminées par la loi, les agents secondaires du gouvernement.",
            ],
          },
          {
            id: 'a-65',
            title: 'Article 65.',
            paragraphs: [
              "Il a le droit de suspendre, pour un terme qui ne pourra excéder trois mois, les agents du pouvoir exécutif élus par les citoyens. - Il ne peut les révoquer que de l'avis du Conseil d'Etat. - La loi détermine les cas où les agents révoqués peuvent être déclarés inéligibles aux mêmes fonctions. - Cette déclaration d'inéligibilité ne pourra être prononcée que par un jugement.",
            ],
          },
          {
            id: 'a-66',
            title: 'Article 66.',
            paragraphs: [
              'Le nombre des ministres et leurs attributions sont fixés par le pouvoir législatif.',
            ],
          },
          {
            id: 'a-67',
            title: 'Article 67.',
            paragraphs: [
              "Les actes du président de la République, autres que ceux par lesquels il nomme et révoque les ministres, n'ont d'effet que s'ils sont contresignés par un ministre.",
            ],
          },
          {
            id: 'a-68',
            title: 'Article 68.',
            paragraphs: [
              "Le président de la République, les ministres, les agents et dépositaires de l'autorité publique, sont responsables, chacun en ce qui le concerne, de tous les actes du gouvernement et de l'administration. - Toute mesure par laquelle le président de la République dissout l'Assemblée nationale, la proroge ou met obstacle à l'exercice de son mandat, est un crime de haute trahison. - Par ce seul fait, le président est déchu de ses fonctions ; les citoyens sont tenus de lui refuser obéissance ; le pouvoir exécutif passe de plein droit à l'Assemblée nationale. Les juges de la Haute Cour de justice se réunissent immédiatement à peine de forfaiture : ils convoquent les jurés dans le lieu qu'ils désignent, pour procéder au jugement du président et de ses complices ; ils nomment eux-mêmes les magistrats chargés de remplir les fonctions du ministère public. - Une loi déterminera les autres cas de responsabilité, ainsi que les formes et les conditions de la poursuite.",
            ],
          },
          {
            id: 'a-69',
            title: 'Article 69.',
            paragraphs: [
              "Les ministres ont entrée dans le sein de l'Assemblée nationale ; ils sont entendus toutes les fois qu'ils le demandent, et peuvent se faire assister par des commissaires nommés par un décret du président de la République.",
            ],
          },
          {
            id: 'a-70',
            title: 'Article 70.',
            paragraphs: [
              "Il y a un vice-président de la République nommé par l'Assemblée nationale, sur la présentation de trois candidats faite par le président dans le mois qui suit son élection. - Le vice-président prête le même serment que le président. - Le vice-président ne pourra être choisi parmi les parents et alliés du président jusqu'au sixième degré inclusivement. - En cas d'empêchement du président, le vice-président le remplace. - Si la présidence devient vacante, par décès, démission du président, ou autrement, il est procédé, dans le mois, à l'élection d'un président.",
            ],
          },
        ],
      },
      {
        id: 'section-8-chapitre-vi-du-conseil-d-tat',
        title: "Chapitre VI - Du Conseil d'État",
        articles: [
          {
            id: 'a-71',
            title: 'Article 71.',
            paragraphs: [
              "Il y aura un Conseil d'État, dont le vice-président de la République sera de droit président.",
            ],
          },
          {
            id: 'a-72',
            title: 'Article 72.',
            paragraphs: [
              "Les membres de ce Conseil sont nommés pour six ans par l'Assemblée nationale. Ils sont renouvelés par moitié, dans les deux premiers mois de chaque législature, au scrutin secret et à la majorité absolue. - Ils sont indéfiniment rééligibles.",
            ],
          },
          {
            id: 'a-73',
            title: 'Article 73.',
            paragraphs: [
              "Ceux des membres du Conseil d'État qui auront été pris dans le sein de l'Assemblée nationale seront immédiatement remplacés comme représentants du peuple.",
            ],
          },
          {
            id: 'a-74',
            title: 'Article 74.',
            paragraphs: [
              "Les membres du Conseil d'État ne peuvent être révoqués que par l'Assemblée, et sur la proposition du président de la République.",
            ],
          },
          {
            id: 'a-75',
            title: 'Article 75.',
            paragraphs: [
              "Le Conseil d'État est consulté sur les projets de loi du Gouvernement qui, d'après la loi, devront être soumis à son examen préalable, et sur les projets d'initiative parlementaire que l'Assemblée lui aura renvoyés. - Il prépare les règlements d'administration publique ; il fait seul ceux de ces règlements à l'égard desquels l'Assemblée nationale lui a donné une délégation spéciale. - Il exerce, à l'égard des administrations publiques, tous les pouvoirs de contrôle et de surveillance qui lui sont déférés par la loi. - La loi règlera ses autres attributions.",
            ],
          },
        ],
      },
      {
        id: 'section-9-chapitre-vii-de-l-administration-int',
        title: "Chapitre VII - De l'administration intérieure",
        articles: [
          {
            id: 'a-76',
            title: 'Article 76.',
            paragraphs: [
              'La division du territoire en départements, arrondissements, cantons et communes est maintenue. Les circonscriptions actuelles ne pourront être changées que par la loi.',
            ],
          },
          {
            id: 'a-77',
            title: 'Article 77.',
            paragraphs: [
              "Il y a : 1 ° Dans chaque département, une administration composée d'un préfet, d'un conseil général, d'un conseil de préfecture ; 2 ° Dans chaque arrondissement, un sous-préfet ; 3 ° Dans chaque canton, un conseil cantonal ; néanmoins, un seul conseil cantonal sera établi dans les villes divisées en plusieurs cantons ; 4 ° Dans chaque commune, une administration, composée d'un maire, d'adjoints et d'un conseil municipal.",
            ],
          },
          {
            id: 'a-78',
            title: 'Article 78.',
            paragraphs: [
              'Une loi déterminera la composition et les attributions des conseils généraux, des conseils cantonaux, des conseils municipaux, et le mode de nomination des maires et des adjoints.',
            ],
          },
          {
            id: 'a-79',
            title: 'Article 79.',
            paragraphs: [
              "Les conseils généraux et les conseils municipaux sont élus par le suffrage direct de tous les citoyens domiciliés dans le département ou dans la commune. Chaque canton élit un membre du conseil général. - Une loi spéciale réglera le mode d'élection dans le département de la Seine, dans la ville de Paris et dans les villes de plus de vingt mille âmes.",
            ],
          },
          {
            id: 'a-80',
            title: 'Article 80.',
            paragraphs: [
              "Les conseils généraux, les conseils cantonaux et les conseils municipaux peuvent être dissous par le président de la République, de l'avis du Conseil d'État. - La loi fixera le délai dans lequel il sera procédé à la réélection.",
            ],
          },
        ],
      },
      {
        id: 'section-10-chapitre-viii-du-pouvoir-judiciaire',
        title: 'Chapitre VIII - Du pouvoir judiciaire',
        articles: [
          {
            id: 'a-81',
            title: 'Article 81.',
            paragraphs: [
              "La justice est rendue gratuitement au nom du peuple français. - Les débats sont publics, à moins que la publicité ne soit dangereuse pour l'ordre ou les moeurs ; et, dans ce cas, le tribunal le déclare par un jugement.",
            ],
          },
          {
            id: 'a-82',
            title: 'Article 82.',
            paragraphs: [
              "Le jury continuera d'être appliqué en matière criminelle.",
            ],
          },
          {
            id: 'a-83',
            title: 'Article 83.',
            paragraphs: [
              "La connaissance de tous les délits politiques et de tous les délits commis par la voie de la presse appartient exclusivement au jury. - Les lois organiques détermineront la compétence en matière de délits d'injures et de diffamation contre les particuliers.",
            ],
          },
          {
            id: 'a-84',
            title: 'Article 84.',
            paragraphs: [
              'Le jury statue seul sur les dommages-intérêts réclamés pour faits ou délits de presse.',
            ],
          },
          {
            id: 'a-85',
            title: 'Article 85.',
            paragraphs: [
              "Les juges de paix et leurs suppléants, les juges de première instance et d'appel, les membres de la Cour de cassation et de la Cour des comptes, sont nommés par le président de la République, d'après un ordre de candidature ou d'après les conditions qui seront réglées par les lois organiques.",
            ],
          },
          {
            id: 'a-86',
            title: 'Article 86.',
            paragraphs: [
              'Les magistrats du ministère public sont nommés par le président de la République.',
            ],
          },
          {
            id: 'a-87',
            title: 'Article 87.',
            paragraphs: [
              "Les juges de première instance et d'appel, les membres de la Cour de cassation, et de la Cour des comptes, sont nommés à vie. - Ils ne peuvent être révoqués ou suspendus que par un jugement, ni mis à la retraite que pour les causes et dans les formes déterminées par les lois.",
            ],
          },
          {
            id: 'a-88',
            title: 'Article 88.',
            paragraphs: [
              "Les conseils de guerre et de révision des armées de terre et de mer, les tribunaux maritimes, les tribunaux de commerce, les prud'hommes et autres tribunaux spéciaux, conservent leur organisation et leurs attributions actuelles jusqu'à ce qu'il y ait été dérogé par une loi.",
            ],
          },
          {
            id: 'a-89',
            title: 'Article 89.',
            paragraphs: [
              "Les conflits d'attributions entre l'autorité administrative et l'autorité judiciaire seront réglés par un tribunal spécial de membres de la Cour de cassation et de conseillers d'Etat, désignés tous les trois ans en nombre égal par leur corps respectif. - Ce tribunal sera présidé par le ministre de la Justice.",
            ],
          },
          {
            id: 'a-90',
            title: 'Article 90.',
            paragraphs: [
              'Les recours pour incompétence et excès de pouvoirs contre les arrêts de la Cour des comptes seront portés devant la juridiction des conflits.',
            ],
          },
          {
            id: 'a-91',
            title: 'Article 91.',
            paragraphs: [
              "Une Haute Cour de justice juge, sans appel ni recours en cassation, les accusations portées par l'Assemblée nationale contre le président de la République ou les ministres. - Elle juge également toutes personnes prévenues de crimes, attentats ou complots contre la sûreté intérieure ou extérieure de l'Etat, que l'Assemblée nationale aura renvoyées devant elle. - Sauf le cas prévu par l'article 68, elle ne peut être saisie qu'en vertu d'un décret de l'Assemblée nationale, qui désigne la ville où la Cour tiendra ses séances.",
            ],
          },
          {
            id: 'a-92',
            title: 'Article 92.',
            paragraphs: [
              "La Haute Cour est composée de cinq juges et de trente-six jurés. - Chaque année, dans les quinze premiers jours du mois de novembre, la Cour de cassation nomme, parmi ses membres, au scrutin secret et à la majorité absolue, les juges de la Haute Cour, au nombre de cinq, et deux suppléants. Les cinq juges appelés à siéger feront choix de leur président. - Les magistrats remplissant les fonctions du ministère public sont désignés par le président de la République, et, en cas d'accusation du président ou des ministres, par l'Assemblée nationale. - Les jurés, au nombre de trente-six, et quatre jurés suppléants, sont pris parmi les membres des conseils généraux des départements. - Les représentants du peuple n'en peuvent faire partie.",
            ],
          },
          {
            id: 'a-93',
            title: 'Article 93.',
            paragraphs: [
              "Lorsqu'un décret de l'Assemblée nationale a ordonné la formation de la Haute Cour de justice, et, dans le cas prévu par l'article 68, sur la réquisition du président ou de l'un des juges, le président de la cour d'appel et, à défaut de cour d'appel, le président du tribunal de première instance du chef-lieu judiciaire du département, tire au sort, en audience publique, le nom d'un membre du conseil général.",
            ],
          },
          {
            id: 'a-94',
            title: 'Article 94.',
            paragraphs: [
              "Au jour indiqué pour le jugement, s'il y a moins de soixante jurés présents, ce nombre sera complété par des jurés supplémentaires tirés au sort, par le président de la Haute Cour parmi les membres du conseil général du département où siégera la Cour.",
            ],
          },
          {
            id: 'a-95',
            title: 'Article 95.',
            paragraphs: [
              "Les jurés qui n'auront pas produit d'excuse valable seront condamnés à une amende de mille à dix mille francs, et à la privation des droits politiques pendant cinq ans au plus.",
            ],
          },
          {
            id: 'a-96',
            title: 'Article 96.',
            paragraphs: [
              "L'accusé et le ministère public exercent le droit de récusation comme en matière ordinaire.",
            ],
          },
          {
            id: 'a-97',
            title: 'Article 97.',
            paragraphs: [
              "La déclaration du jury portant que l'accusé est coupable ne peut être rendue qu'à la majorité des deux tiers des voix.",
            ],
          },
          {
            id: 'a-98',
            title: 'Article 98.',
            paragraphs: [
              "Dans tous les cas de responsabilités des ministres, l'Assemblée nationale peut, selon les circonstances, renvoyer le ministre inculpé, soit devant la Haute Cour de justice, soit devant les tribunaux ordinaires, pour les réparations civiles.",
            ],
          },
          {
            id: 'a-99',
            title: 'Article 99.',
            paragraphs: [
              "L'Assemblée nationale et le président de la République peuvent, dans tous les cas, déférer l'examen des actes de tout fonctionnaire, autre que le président de la République, au Conseil d'État, dont le rapport est rendu public.",
            ],
          },
          {
            id: 'a-100',
            title: 'Article 100.',
            paragraphs: [
              "Le président de la République n'est justiciable que de la Haute Cour de justice. - Il ne peut, à l'exception du cas prévu par l'article 68, être poursuivi que sur l'accusation portée par l'Assemblée nationale, et pour crimes et délits qui seront déterminés par la loi.",
            ],
          },
        ],
      },
      {
        id: 'section-11-chapitre-ix-de-la-force-publique',
        title: 'Chapitre IX - De la force publique',
        articles: [
          {
            id: 'a-101',
            title: 'Article 101.',
            paragraphs: [
              "La force publique est instituée pour défendre l'État contre les ennemis du dehors, et pour assurer au-dedans le maintien de l'ordre et l'exécution des lois. - Elle se compose de la garde nationale et de l'armée de terre et de mer.",
            ],
          },
          {
            id: 'a-102',
            title: 'Article 102.',
            paragraphs: [
              'Tout Français, sauf les exceptions fixées par la loi, doit le service militaire et celui de la garde nationale. - La faculté pour chaque citoyen de se libérer du service militaire personnel sera réglée par la loi du recrutement.',
            ],
          },
          {
            id: 'a-103',
            title: 'Article 103.',
            paragraphs: [
              "L'organisation de la garde nationale et la Constitution de l'armée seront réglées par la loi.",
            ],
          },
          {
            id: 'a-104',
            title: 'Article 104.',
            paragraphs: [
              'La force publique est essentiellement obéissante. - Nul corps armé ne peut délibérer.',
            ],
          },
          {
            id: 'a-105',
            title: 'Article 105.',
            paragraphs: [
              "La force publique, employée pour maintenir l'ordre à l'intérieur, n'agit que sur la réquisition des autorités constituées, suivant les règles déterminées par le pouvoir législatif.",
            ],
          },
          {
            id: 'a-106',
            title: 'Article 106.',
            paragraphs: [
              "Une loi déterminera les cas dans lesquels l'état de siège pourra être déclaré, et réglera les formes et les effets de cette mesure.",
            ],
          },
          {
            id: 'a-107',
            title: 'Article 107.',
            paragraphs: [
              "Aucune troupe étrangère ne peut être introduite sur le territoire français sans le consentement préalable de l'Assemblée nationale.",
            ],
          },
        ],
      },
      {
        id: 'section-12-chapitre-x-dispositions-particuli-re',
        title: 'Chapitre X - Dispositions particulières',
        articles: [
          {
            id: 'a-108',
            title: 'Article 108.',
            paragraphs: [
              "La Légion d'honneur est maintenue ; ses statuts seront révisés et mis en harmonie avec la Constitution.",
            ],
          },
          {
            id: 'a-109',
            title: 'Article 109.',
            paragraphs: [
              "Le territoire de l'Algérie et des colonies est déclaré territoire français, et sera régi par des lois particulières jusqu'à ce qu'une loi spéciale les place sous le régime de la présente Constitution.",
            ],
          },
          {
            id: 'a-110',
            title: 'Article 110.',
            paragraphs: [
              "L'Assemblée nationale confie le dépôt de la présente Constitution, et des droits qu'elle consacre, à la garde et au patriotisme de tous les Français.",
            ],
          },
        ],
      },
      {
        id: 'section-13-chapitre-xi-de-la-r-vision-de-la-con',
        title: 'CHAPITRE XI - De la révision de la Constitution',
        articles: [
          {
            id: 'a-111',
            title: 'Article 111.',
            paragraphs: [
              "Lorsque, dans la dernière année d'une législature, l'Assemblée nationale aura émis le voeu que la Constitution soit modifiée en tout ou en partie, il sera procédé à cette révision de la manière suivante : - Le voeu exprimé par l'Assemblée ne sera converti en résolution définitive qu'après trois délibérations consécutives, prises chacune à un mois d'intervalle et aux trois quarts des suffrages exprimés. Le nombre des votants devra être de cinq cents au moins. - L'Assemblée de révision ne sera nommée que pour trois mois. - Elle ne devra s'occuper que de la révision pour laquelle elle aura été convoquée. - Néanmoins, elle pourra, en cas d'urgence, pourvoir aux nécessités législatives.",
            ],
          },
        ],
      },
      {
        id: 'section-14-chapitre-xii-dispositions-transitoir',
        title: 'CHAPITRE XII - Dispositions transitoires',
        articles: [
          {
            id: 'a-112',
            title: 'Article 112.',
            paragraphs: [
              "Les dispositions des codes, lois et règlements existants qui ne sont pas contraires à la présente Constitution, restent en vigueur jusqu'à ce qu'il y soit légalement dérogé.",
            ],
          },
          {
            id: 'a-113',
            title: 'Article 113.',
            paragraphs: [
              "Toutes les autorités constituées par les lois actuelles demeurent en exercice jusqu'à la promulgation des lois organiques qui les concernent.",
            ],
          },
          {
            id: 'a-114',
            title: 'Article 114.',
            paragraphs: [
              "La loi d'organisation judiciaire déterminera le mode spécial de nomination pour la première composition des nouveaux tribunaux.",
            ],
          },
          {
            id: 'a-115',
            title: 'Article 115.',
            paragraphs: [
              "Après le vote de la Constitution, il sera procédé, par l'Assemblée nationale constituante, à la rédaction des lois organiques dont l'énumération sera déterminée par une loi spéciale.",
            ],
          },
          {
            id: 'a-116',
            title: 'Article 116.',
            paragraphs: [
              "Il sera procédé à la première élection du président de la République conformément à la loi spéciale rendue par l'Assemblée nationale le 28 octobre 1848.",
            ],
          },
        ],
      },
    ],
    notes: [
      {
        title: 'Reading context',
        text: 'This text comes from the Conseil constitutionnel historical archive. Notes here should help readers compare institutions, rights, and revision rules across French constitutional history.',
      },
    ],
  },
  {
    id: 'constitution-de-1852-second-empire',
    year: '1852',
    shortLabel: '1852',
    title: 'Constitution of 1852',
    sourceTitle: 'Constitution de 1852, Second Empire - 14 janvier 1852',
    regime: 'Second Empire',
    date: '14 January 1852',
    sourceUrl:
      'https://www.conseil-constitutionnel.fr/les-constitutions-dans-l-histoire/constitution-de-1852-second-empire',
    localSourcePath:
      '/constitution-archive/constitution-de-1852-second-empire.html',
    summary:
      'Constitution of 1852 belongs to the Second Empire period. The original French text is preserved here as a source document for reading and comparison.',
    revisionGroups: [],
    sections: [
      {
        id: 'section-1-proclamation-du-14-janvier-1852',
        title: 'Proclamation du 14 janvier 1852',
        articles: [
          {
            id: 'p-1',
            title: 'Text',
            paragraphs: [
              'Louis Napoléon, Président de la République, au Peuple Français :',
              'FRANÇAIS !',
              "Lorsque, dans ma proclamation du 2 décembre, je vous exprimai loyalement quelles étaient, à mon sens, les conditions vitales du Pouvoir en France, je n'avais pas la prétention, si commune de nos jours, de substituer une théorie personnelle à l'expérience des siècles. J'ai cherché, au contraire, quels étaient dans le passé les exemples les meilleurs à suivre, quels hommes les avaient donnés, et quel bien en était résulté.",
              "Dès lors, j'ai cru logique de préférer les préceptes du génie aux doctrines spécieuses d'hommes à idées abstraites. J'ai pris comme modèle les institutions politiques qui déjà, au commencement de ce siècle, dans des circonstances analogues, ont raffermi la société ébranlée et élevé la France à un haut degré de prospérité et de grandeur.",
              "J'ai pris comme modèle les institutions qui, au lieu de disparaître au premier souffle des agitations populaires, n'ont été renversées que par l'Europe entière coalisée contre nous.",
              "En un mot, je me suis dit : puisque la France ne marche depuis cinquante ans qu'en vertu de l'organisation administrative, militaire, judiciaire, religieuse, financière, du Consulat et de l'Empire, pourquoi n'adopterions-nous pas aussi les institutions politiques de cette époque ? Créées par la même pensée, elles doivent porter en elles le même caractère de nationalité et d'utilité pratique.",
              "En effet, ainsi que je l'ai rappelé dans ma proclamation, notre société actuelle, il est essentiel de le constater, n'est pas autre chose que la France régénérée par la Révolution de 89 et organisée par l'Empereur. Il ne reste plus rien de l'Ancien Régime que de grands souvenirs et de grands bienfaits. Mais tout ce qui alors était organisé a été détruit par la Révolution, et tout ce qui a été organisé depuis la Révolution et qui existe encore l'a été par Napoléon.",
              "Nous n'avons plus ni provinces, ni pays d'Etat, ni parlements, ni intendants, ni fermiers généraux, ni coutumes diverses, ni droits féodaux, ni classes privilégiées en possession exclusive des emplois civils et militaires, ni juridictions religieuses différentes.",
              "À tant de choses incompatibles avec elle, la Révolution avait fait subir une réforme radicale, mais elle n'avait rien fondé de définitif. Seul, le Premier consul rétablit l'unité, la hiérarchie et les véritables principes du gouvernement. Ils sont encore en vigueur.",
              "Ainsi, l'administration de la France confiée à des préfets, à des sous-préfets, à des maires, qui substituaient l'unité aux commissions directoriales ; la décision des affaires, au contraire, donnée à des conseils, depuis la commune jusqu'au département. Ainsi, la magistrature affermie par l'inamovibilité des juges, par la hiérarchie des tribunaux ; la justice rendue plus facile par la délimitation des attributions, depuis la justice de paix jusqu'à la Cour de cassation. Tout cela est encore debout.",
              "De même, notre admirable système financier, la Banque de France, l'établissement des budgets, la Cour des comptes, l'organisation de la police, nos règlements militaires datent de cette époque.",
              "Depuis cinquante ans, c'est le Code Napoléon qui règle les intérêts des citoyens entre eux ; c'est encore le Concordat qui règle les rapports de l'Etat avec l'Eglise.",
              "Enfin la plupart des mesures qui concernent les progrès de l'industrie, du commerce, des lettres, des sciences, des arts, depuis les règlements du Théâtre-Français jusqu'à ceux de l'Institut, depuis l'institution des prud'hommes jusqu'à la création de la Légion d'honneur, ont été fixées par les décrets de ce temps.",
              "On peut donc l'affirmer, la charpente de notre édifice social est l'oeuvre de l'Empereur, et elle a résisté à sa chute et à trois révolutions.",
              "Pourquoi, avec la même origine, les institutions politiques n'auraient-elles pas les mêmes chances de durée ?",
              "Ma conviction était formée depuis longtemps, et c'est pour cela que j'ai soumis à votre jugement les bases principales d'une constitution empruntée à celle de l'an VIII. Approuvées par vous, elles vont devenir le fondement de notre Constitution politique.",
              "Examinons quel en est l'esprit :",
              "Dans notre pays, monarchique depuis huit cents ans, le pouvoir central a toujours été en s'augmentant. La royauté a détruit les grands vassaux ; les révolutions elles-mêmes ont fait disparaître les obstacles qui s'opposaient à l'exercice rapide et uniforme de l'autorité. Dans ce pays de centralisation, l'opinion publique a sans cesse tout rapporté au chef du gouvernement, le bien comme le mal. Aussi, écrire en tête d'une charte que ce chef est irresponsable, c'est mentir au sentiment public, c'est vouloir établir une fonction qui s'est trois fois évanouie au bruit des révolutions.",
              "La Constitution actuelle proclame, au contraire, que le chef que vous avez élu est responsable devant vous ; qu'il a toujours le droit de faire appel à votre jugement souverain, afin que, dans les circonstances solennelles, vous puissiez lui continuer ou lui retirer votre confiance.",
              "Étant responsable, il faut que son action soit libre et sans entraves. De là l'obligation d'avoir des ministres qui soient les auxiliaires honorés et puissants de sa pensée, mais qui ne forment plus un Conseil responsable, composé de membres solidaires, obstacle journalier à l'impulsion particulière du chef de l'Etat, expression d'une politique émanée des Chambres, et par là même exposée à des changements fréquents, qui empêchent tout esprit de suite, toute application d'un système régulier.",
              "Néanmoins, plus un homme est haut placé, plus il est indépendant, plus la confiance que le Peuple a mise en lui est grande, plus il a besoin de conseils éclairés, consciencieux. De là la création d'un Conseil d'Etat, désormais véritable Conseil du gouvernement, premier rouage de notre organisation nouvelle, réunion d'hommes pratiques élaborant les projets de loi dans des commission spéciales, les discutant à huis clos, sans ostentation oratoire, en assemblée générale, et les présentant ensuite à l'acceptation du Corps législatif.",
              'Ainsi le pouvoir est libre dans ses mouvements, éclairé dans sa marche.',
              'Quel sera maintenant le contrôle exercé par les Assemblées ?',
              "Une Chambre, qui prend le titre de Corps législatif, vote les lois et l'impôt. Elle est élue par le suffrage universel, sans scrutin de liste. Le Peuple, choisissant isolément chaque candidat, peut plus facilement apprécier le mérite de chacun d'eux.",
              "La Chambre n'est plus composée que d'environ deux cent soixante membres. C'est là une première garantie du calme des délibérations, car trop souvent on a vu dans les Assemblées la mobilité et l'ardeur des passions croître en raison du nombre.",
              "Le compte rendu des séances qui doit instruire la Nation n'est plus livré, comme autrefois, à l'esprit de parti de chaque journal ; une publication officielle, rédigée par les soins du président de la Chambre, en est seule permise.",
              "Le Corps législatif discute librement la loi, l'adopte ou la repousse ; mais il n'y introduit pas à l'improviste de ces amendements qui dérangent souvent toute l'économie d'un système et l'ensemble du projet primitif. A plus forte raison n'a-t-il pas cette initiative parlementaire qui était la source de si graves abus, et qui permettrait à chaque député de se substituer à tout propos au Gouvernement en présentant les projets les moins étudiés, les moins approfondis.",
              "La Chambre n'étant plus en présence des ministres, et les projets de loi étant soutenus par les orateurs du Conseil d'Etat, le temps ne se perd pas en vaines interpellations, en accusations frivoles, en luttes passionnées dont l'unique but était de renverser les ministres pour les remplacer.",
              "Ainsi donc, les délibérations du Corps législatif seront indépendantes ; mais les causes d'agitations stériles auront été supprimées, des lenteurs salutaires apportées à toute modification de la loi. Les mandataires de la Nation feront mûrement les choses sérieuses.",
              'Une autre Assemblée prend le nom de Sénat. Elle sera composée des éléments qui, dans tout pays, créent les influences légitimes : le nom illustre, la fortune, le talent et les services rendus.',
              "Le Sénat n'est plus, comme la Chambre des pairs, le pâle reflet de la Chambre des députés, répétant, à quelques jours d'intervalle, les mêmes discussions sur un autre ton. Il est le dépositaire du pacte fondamental et des libertés compatibles avec la Constitution ; et c'est uniquement sous le rapport des grands principes sur lesquels repose notre société, qu'il examine toutes les lois et qu'il en propose de nouvelles au pouvoir exécutif. Il intervient, soit pour résoudre toute difficulté grave qui pourrait s'élever pendant l'absence du Corps législatif, soit pour expliquer le texte de la Constitution et assurer ce qui est nécessaire à sa marche. Il a le droit d'annuler tout acte arbitraire et illégal, et, jouissant ainsi de cette considération qui s'attache à un corps exclusivement occupé de l'examen de grands intérêts ou de l'application de grands principes, il remplit dans l'Etat le rôle indépendant, salutaire, conservateur, des anciens parlements.",
              "Le Sénat ne sera pas, comme la Chambre des pairs, transformé en Cour de justice : il conservera son caractère de modérateur suprême, car la défaveur atteint toujours les corps politiques lorsque le sanctuaire des législateurs devient un tribunal criminel. L'impartialité du juge est trop souvent mise en doute, et il perd son prestige devant l'opinion, qui va quelquefois jusqu'à l'accuser d'être l'instrument de la passion ou de la haine.",
              "Une Haute Cour de justice, choisie dans la haute magistrature, ayant pour jurés des membres des conseils généraux de toute la France, réprimera seule les attentats contre le chef de l'Etat et la sûreté publique.",
              "L'Empereur disait au Conseil d'Etat : \" Une Constitution est l'oeuvre du temps ; on ne saurait laisser une trop large voie aux améliorations. \" Aussi la Constitution présente n'a-t-elle fixé que ce qu'il était impossible de laisser incertain. Elle n'a pas enfermé dans un cercle infranchissable les destinées d'un grand peuple, elle a laissé aux changements une assez large voie pour qu'il y ait, dans les grandes crises, d'autres moyens de salut que l'expédient désastreux des révolutions.",
              "Le Sénat peut, de concert avec le gouvernement, modifier tout ce qui n'est pas fondamental dans la Constitution ; mais quant aux modifications à apporter aux bases premières, sanctionnées par vos suffrages, elles ne peuvent devenir définitives qu'après avoir reçu votre ratification.",
              'Ainsi, le Peuple reste toujours maître de sa destinée. Rien de fondamental ne se fait en dehors de sa volonté.',
              "Telles sont les idées, tels sont les principes dont vous m'avez autorisé à faire l'application. Puisse cette constitution donner à notre patrie des jours calmes et prospères ! Puisse-t-elle prévenir le retour de ces luttes intestines où la victoire, quelque légitime qu'elle soit, est toujours chèrement achetée ! Puisse la sanction que vous avez donnée à mes efforts être bénie du ciel ! Alors la paix sera assurée au-dedans et au-dehors, mes voeux seront comblés, ma mission sera accomplis.",
            ],
          },
        ],
      },
      {
        id: 'section-2-constitution-du-14-janvier-1852',
        title: 'Constitution du 14 janvier 1852',
        articles: [
          {
            id: 'p-38',
            title: 'Text',
            paragraphs: [
              '(faite en vertu des pouvoirs délégués par le peuple français à Louis Napoléon Bonaparte par le vote des 20 et 21 décembre 1851.)',
              'Le Président de la République, considérant que le Peuple français a été appelé à se prononcer sur la résolution suivante :',
              "« Le peuple veut le maintien de l'autorité de Louis Napoléon Bonaparte, et lui donne les pouvoirs nécessaires pour faire une Constitution d'après les bases établies dans sa proclamation du 2 décembre » ;",
              "Considérant que les bases proposées à l'acceptation du Peuple étaient :",
              '" 1 ° Un chef responsable nommé pour dix ans ;',
              '" 2 ° Des ministres dépendant du pouvoir exécutif seul ;',
              '" 3 ° Un Conseil d\'Etat formé des hommes les plus distingués, préparant les lois et en soutenant la discussion devant le Corps législatif ;',
              '" 4 ° Un Corps législatif discutant et votant les lois, nommé par le suffrage Universel sans scrutin de liste qui fausse l\'élection ;',
              '« 5 ° Une seconde Assemblée formée de toutes les illustrations du pays, pouvoir pondérateur, gardien du pacte fondamental et des libertés publiques. »',
              'Considérant que le Peuple a répondu affirmativement par sept millions cinq cent mille suffrages.',
              'promulgue la Constitution dont la teneur suit :',
            ],
          },
        ],
      },
      {
        id: 'section-3-titre-premier',
        title: 'TITRE PREMIER',
        articles: [
          {
            id: 'a-1',
            title: 'Article 1.',
            paragraphs: [
              'La Constitution reconnaît, confirme et garantit les grands principes proclamés en 1789, et qui sont la base du droit public des Français.',
            ],
          },
        ],
      },
      {
        id: 'section-4-titre-ii-formes-du-gouvernement-de-l',
        title: 'TITRE II - Formes du gouvernement de la République',
        articles: [
          {
            id: 'a-2',
            title: 'Article 2.',
            paragraphs: [
              'Le Gouvernement de la République française est confié pour dix ans au prince Louis Napoléon Bonaparte, président actuel de la République.',
            ],
          },
          {
            id: 'a-3',
            title: 'Article 3.',
            paragraphs: [
              "Le président de la République gouverne au moyen des ministres, du Conseil d'Etat, du Sénat et du Corps législatif.",
            ],
          },
          {
            id: 'a-4',
            title: 'Article 4.',
            paragraphs: [
              "La puissance législative s'exerce collectivement par le président de la République, le Sénat et le Corps législatif.",
            ],
          },
        ],
      },
      {
        id: 'section-5-titre-iii-du-pr-sident-de-la-r-publi',
        title: 'TITRE III - Du président de la République',
        articles: [
          {
            id: 'a-5',
            title: 'Article 5.',
            paragraphs: [
              'Le président de la République est responsable devant le Peuple français, auquel il a toujours le droit de faire appel.',
            ],
          },
          {
            id: 'a-6',
            title: 'Article 6.',
            paragraphs: [
              "Le président de la République est le chef de l'État ; il commande les forces de terre et de mer, déclare la guerre, fait les traités de paix, d'alliance et de commerce, nomme à tous les emplois, fait les règlements et décrets nécessaires pour l'exécution des lois.",
            ],
          },
          {
            id: 'a-7',
            title: 'Article 7.',
            paragraphs: ['La justice se rend en son nom.'],
          },
          {
            id: 'a-8',
            title: 'Article 8.',
            paragraphs: ["Il a seul l'initiative des lois."],
          },
          {
            id: 'a-9',
            title: 'Article 9.',
            paragraphs: ['Il a le droit de faire grâce.'],
          },
          {
            id: 'a-10',
            title: 'Article 10.',
            paragraphs: [
              'Il sanctionne et promulgue les lois et les sénatus-consultes.',
            ],
          },
          {
            id: 'a-11',
            title: 'Article 11.',
            paragraphs: [
              "Il présente, tous les ans, au Sénat et au Corps législatif, par un message, l'état des affaires de la République.",
            ],
          },
          {
            id: 'a-12',
            title: 'Article 12.',
            paragraphs: [
              "Il a le droit de déclarer l'état de siège dans un ou plusieurs départements, sauf à en référer au Sénat dans le plus bref délai. - Les conséquences de l'état de siège sont réglées par la loi.",
            ],
          },
          {
            id: 'a-13',
            title: 'Article 13.',
            paragraphs: [
              "Les ministres ne dépendent que du chef de l'État ; ils ne sont responsables que, chacun en ce qui le concerne, des actes du gouvernement ; il n'y a point de solidarité entre eux ; ils ne peuvent être mis en accusation que par le Sénat.",
            ],
          },
          {
            id: 'a-14',
            title: 'Article 14.',
            paragraphs: [
              'Les ministres, les membres du Sénat, du Corps législatif et du Conseil d\'Etat, les officiers de terre et de mer, les magistrats et les fonctionnaires publics prêtent le serment ainsi conçu : " Je jure obéissance à la Constitution et fidélité au président. "',
            ],
          },
          {
            id: 'a-15',
            title: 'Article 15.',
            paragraphs: [
              'Un sénatus-consulte fixe la somme allouée annuellement au président de la République pour toute la durée de ses fonctions.',
            ],
          },
          {
            id: 'a-16',
            title: 'Article 16.',
            paragraphs: [
              "Si le président de la République meurt avant l'expiration de son mandat, le Sénat convoque la Nation pour procéder à une nouvelle élection.",
            ],
          },
          {
            id: 'a-17',
            title: 'Article 17.',
            paragraphs: [
              "Le chef de l'État a le droit, par un acte secret et déposé aux archives du Sénat, de désigner le nom du citoyen qu'il recommande, dans l'intérêt de la France, à la confiance du Peuple et à ses suffrages.",
            ],
          },
          {
            id: 'a-18',
            title: 'Article 18.',
            paragraphs: [
              "Jusqu'à l'élection du nouveau président de la République, le président du Sénat gouverne avec le concours des ministres en fonctions, qui se forment en Conseil de gouvernement, et délibèrent à la majorité des voix.",
            ],
          },
        ],
      },
      {
        id: 'section-6-titre-iv-du-s-nat',
        title: 'TITRE IV - Du Sénat',
        articles: [
          {
            id: 'a-19',
            title: 'Article 19.',
            paragraphs: [
              'Le nombre des sénateurs ne pourra excéder cent cinquante : il est fixé pour la première année, à quatre-vingts.',
            ],
          },
          {
            id: 'a-20',
            title: 'Article 20.',
            paragraphs: [
              "Le Sénat se compose : 1 ° Des cardinaux, des maréchaux, des amiraux ; 2 ° Des citoyens que le président de la République juge convenable d'élever à la dignité de sénateur.",
            ],
          },
          {
            id: 'a-21',
            title: 'Article 21.',
            paragraphs: ['Les sénateurs sont inamovibles et à vie.'],
          },
          {
            id: 'a-22',
            title: 'Article 22.',
            paragraphs: [
              'Les fonctions de sénateur sont gratuites ; néanmoins le président de la République pourra accorder à des sénateurs, en raison de services rendus et de leur position de fortune, une dotation personnelle, qui ne pourra excéder trente mille francs par an.',
            ],
          },
          {
            id: 'a-23',
            title: 'Article 23.',
            paragraphs: [
              'Le président et les vice-présidents du Sénat sont nommés par le président de la République et choisis parmi les sénateurs. - Ils sont nommés pour un an. - Le traitement du président du Sénat est fixé par un décret.',
            ],
          },
          {
            id: 'a-24',
            title: 'Article 24.',
            paragraphs: [
              'Le président de la République convoque et proroge le Sénat. Il fixe la durée de ses sessions par un décret. - Les séances du Sénat ne sont pas publiques.',
            ],
          },
          {
            id: 'a-25',
            title: 'Article 25.',
            paragraphs: [
              'Le Sénat est le gardien du pacte fondamental et des libertés publiques. Aucune loi ne peut être promulguée avant de lui avoir été soumise.',
            ],
          },
          {
            id: 'a-26',
            title: 'Article 26.',
            paragraphs: [
              "Le Sénat s'oppose à la promulgation. - 1 ° Des lois qui seraient contraires ou qui porteraient atteinte à la Constitution, à la religion, à la morale, à la liberté des cultes, à la liberté individuelle, à l'égalité des citoyens devant la loi, à l'inviolabilité de la propriété et au principe de l'inamovibilité de la magistrature ; 2 ° De celles qui pourraient compromettre la défense du territoire.",
            ],
          },
          {
            id: 'a-27',
            title: 'Article 27.',
            paragraphs: [
              "Le Sénat règle par un sénatus-consulte : 1 ° La constitution des colonies et de l'Algérie ; 2 ° Tout ce qui n'a pas été prévu par la Constitution et qui est nécessaire à sa marche ; 3 ° Le sens des articles de la Constitution qui donnent lieu à différentes interprétations.",
            ],
          },
          {
            id: 'a-28',
            title: 'Article 28.',
            paragraphs: [
              'Ces sénatus-consultes seront soumis à la sanction du président de la République et promulgués par lui.',
            ],
          },
          {
            id: 'a-29',
            title: 'Article 29.',
            paragraphs: [
              'Le Sénat maintient ou annule tous les actes qui lui sont déférés comme inconstitutionnels par le gouvernement, ou dénoncés, pour la même cause, par les pétitions des citoyens.',
            ],
          },
          {
            id: 'a-30',
            title: 'Article 30.',
            paragraphs: [
              "Le Sénat peut, dans un rapport adressé au président de la République, poser les bases de projets de loi d'un grand intérêt national.",
            ],
          },
          {
            id: 'a-31',
            title: 'Article 31.',
            paragraphs: [
              'Il peut également proposer des modifications à la Constitution. Si la proposition est adoptée par le pouvoir exécutif, il y est statué par un sénatus-consulte.',
            ],
          },
          {
            id: 'a-32',
            title: 'Article 32.',
            paragraphs: [
              "Néanmoins, sera soumise au suffrage universel toute modification aux bases fondamentales de la Constitution, telles qu'elles ont été posées dans la proclamation du 2 décembre et adoptées par le Peuple français.",
            ],
          },
          {
            id: 'a-33',
            title: 'Article 33.',
            paragraphs: [
              "En cas de dissolution du Corps législatif, et jusqu'à une nouvelle convocation, le Sénat, sur la proposition du président de la République, pourvoit, par des mesures d'urgence, à tout ce qui est nécessaire à la marche du gouvernement.",
            ],
          },
        ],
      },
      {
        id: 'section-7-titre-v-du-corps-l-gislatif',
        title: 'TITRE V - Du Corps législatif',
        articles: [
          {
            id: 'a-34',
            title: 'Article 34.',
            paragraphs: ["L'élection a pour base la population."],
          },
          {
            id: 'a-35',
            title: 'Article 35.',
            paragraphs: [
              'Il y aura un député au Corps législatif à raison de trente-cinq mille électeurs.',
            ],
          },
          {
            id: 'a-36',
            title: 'Article 36.',
            paragraphs: [
              'Les députés sont élus par le suffrage universel, sans scrutin de liste.',
            ],
          },
          {
            id: 'a-37',
            title: 'Article 37.',
            paragraphs: ['Ils ne reçoivent aucun traitement.'],
          },
          {
            id: 'a-38',
            title: 'Article 38.',
            paragraphs: ['Ils sont nommés pour six ans.'],
          },
          {
            id: 'a-39',
            title: 'Article 39.',
            paragraphs: [
              "Le Corps législatif discute et vote les projets de loi et l'impôt.",
            ],
          },
          {
            id: 'a-40',
            title: 'Article 40.',
            paragraphs: [
              "Tout amendement adopté par la commission chargée d'examiner un projet de loi sera renvoyé, sans discussion, au Conseil d'Etat par le président du Corps législatif. - Si l'amendement n'est pas adopté par le Conseil d'Etat, il ne pourra pas être soumis à la délibération du Corps législatif.",
            ],
          },
          {
            id: 'a-41',
            title: 'Article 41.',
            paragraphs: [
              "Les sessions ordinaires du Corps législatif durent trois mois ; ses séances sont publiques, mais la demande de cinq membres suffit pour qu'il se forme en Comité secret.",
            ],
          },
          {
            id: 'a-42',
            title: 'Article 42.',
            paragraphs: [
              "Le compte rendu des séances du Corps législatif par les journaux ou tout autre moyen de publication, ne consistera que dans la reproduction du procès-verbal, dressé, à l'issue de chaque séance, par les soins du président du Corps législatif.",
            ],
          },
          {
            id: 'a-43',
            title: 'Article 43.',
            paragraphs: [
              'Le président et les vice-présidents du Corps législatif sont nommés par le président de la République pour un an ; ils sont choisis parmi les députés. Le traitement du président du Corps législatif est fixé par un décret.',
            ],
          },
          {
            id: 'a-44',
            title: 'Article 44.',
            paragraphs: [
              'Les ministres ne peuvent être membres du Corps législatif.',
            ],
          },
          {
            id: 'a-45',
            title: 'Article 45.',
            paragraphs: [
              "Le droit de pétition s'exerce auprès du Sénat. Aucune pétition ne peut être adressée au Corps législatif.",
            ],
          },
          {
            id: 'a-46',
            title: 'Article 46.',
            paragraphs: [
              'Le président de la République convoque, ajourne, proroge et dissout le Corps législatif. En cas de dissolution, le président de la République doit en convoquer un nouveau dans le délai de six mois.',
            ],
          },
        ],
      },
      {
        id: 'section-8-titre-vi-du-conseil-d-tat',
        title: "TITRE VI - Du Conseil d'État",
        articles: [
          {
            id: 'p-49',
            title: 'Text',
            paragraphs: [
              "ART 47. - Le nombre des conseillers d'État en service ordinaire est de quarante à cinquante.",
            ],
          },
          {
            id: 'a-47',
            title: 'Article 48.',
            paragraphs: [
              "Les conseillers d'État sont nommés par le président de la République, et révocables par lui.",
            ],
          },
          {
            id: 'a-48',
            title: 'Article 49.',
            paragraphs: [
              "Le Conseil d'État est présidé par le président de la République, et, en son absence, par la personne qu'il désigne comme vice-président du Conseil d'État.",
            ],
          },
          {
            id: 'a-49',
            title: 'Article 50.',
            paragraphs: [
              "Le Conseil d'État est chargé, sous la direction du président de la République, de rédiger les projets de loi et les règlements d'administration publique, et de résoudre les difficultés qui s'élèvent en matière d'administration.",
            ],
          },
          {
            id: 'a-50',
            title: 'Article 51.',
            paragraphs: [
              "Il soutient au nom du gouvernement, la discussion des projets de loi devant le Sénat et le Corps législatif. - Les conseillers d'État chargés de porter la parole au nom du gouvernement sont désignés par le président de la République.",
            ],
          },
          {
            id: 'a-51',
            title: 'Article 52.',
            paragraphs: [
              "Le traitement de chaque conseiller d'État est de vingt-cinq mille francs.",
            ],
          },
          {
            id: 'a-52',
            title: 'Article 53.',
            paragraphs: [
              "Les ministres ont rang, séance et voix délibérative au Conseil d'État.",
            ],
          },
        ],
      },
      {
        id: 'section-9-titre-vii-de-la-haute-cour-de-justic',
        title: 'TITRE VII - De la Haute Cour de justice',
        articles: [
          {
            id: 'a-53',
            title: 'Article 54.',
            paragraphs: [
              "Une Haute Cour de justice juge, sans appel ni recours en cassation, toutes personnes qui ont été renvoyées devant elle comme prévenues de crimes, attentats ou complots contre le président de la République et contre la sûreté intérieure ou extérieure de l'Etat. - Elle ne peut être saisie qu'en vertu d'un décret du président de la République.",
            ],
          },
          {
            id: 'a-54',
            title: 'Article 55.',
            paragraphs: [
              "Un sénatus-consulte déterminera l'organisation de cette Haute Cour.",
            ],
          },
        ],
      },
      {
        id: 'section-10-titre-viii-dispositions-g-n-rales-et',
        title: 'TITRE VIII - Dispositions générales et transitoires',
        articles: [
          {
            id: 'a-55',
            title: 'Article 56.',
            paragraphs: [
              "Les dispositions des codes, lois et règlements existants, qui ne sont pas contraires à la présente Constitution, restent en vigueur jusqu'à ce qu'il y soit légalement dérogé.",
            ],
          },
          {
            id: 'a-56',
            title: 'Article 57.',
            paragraphs: [
              "Une loi déterminera l'organisation municipale. Les maires seront nommés par le pouvoir exécutif, et pourront être pris hors du conseil municipal.",
            ],
          },
          {
            id: 'a-57',
            title: 'Article 58.',
            paragraphs: [
              "La présente Constitution sera en vigueur à dater du jour où les grands Corps de l'État qu'elle organise seront constitués. - Les décrets rendus par le président de la République, à partir du 2 décembre jusqu'à cette époque, auront force de loi.",
            ],
          },
        ],
      },
      {
        id: 'section-11-s-natus-consulte-du-7-novembre-1852',
        title: 'Sénatus-consulte du 7 novembre 1852',
        articles: [
          {
            id: 'p-50',
            title: 'Text',
            paragraphs: ['portant modification à la Constitution.'],
          },
          {
            id: 'a-58',
            title: 'Article 1.',
            paragraphs: [
              'La dignité impériale est rétablie. - Louis Napoléon Bonaparte est Empereur des Français, sous le nom de Napoléon III.',
            ],
          },
          {
            id: 'a-59',
            title: 'Article 2.',
            paragraphs: [
              "La dignité impériale est héréditaire dans la descendance directe et légitime de Louis Napoléon Bonaparte, de mâle en mâle, par ordre de primogéniture, et à l'exclusion perpétuelle des femmes et de leur descendance.",
            ],
          },
          {
            id: 'a-60',
            title: 'Article 3.',
            paragraphs: [
              "Louis Napoléon Bonaparte, s'il n'a pas d'enfants mâles, peut adopter les enfants et descendants légitimes, dans la ligne masculine des frères de l'Empereur Napoléon Ier. - Les formes de l'adoption sont réglées par un sénatus-consulte. - Si, postérieurement à l'adoption, il survient à Louis Napoléon des enfants mâles, ses fils adoptifs ne pourront être appelés à lui succéder qu'après ses descendants légitimes. - L'adoption est interdite aux successeurs de Louis Napoléon et à leur descendance.",
            ],
          },
          {
            id: 'a-61',
            title: 'Article 4.',
            paragraphs: [
              "Louis Napoléon Bonaparte règle, par un décret organique adressé au Sénat et déposé dans ses archives, l'ordre de succession au trône dans la famille Bonaparte, pour le cas où il ne laisserait aucun héritier direct, légitime ou adoptif.",
            ],
          },
          {
            id: 'a-62',
            title: 'Article 5.',
            paragraphs: [
              "A défaut d'héritier légitime ou d'héritier adoptif de Louis Napoléon Bonaparte, et des successeurs en ligne collatérale qui prendront leur droit dans le décret organique sus-mentionné, un sénatus-consulte proposé au Sénat par les ministres formés en Conseil de gouvernement, avec l'adjonction des présidents en exercice du Sénat, du Corps législatif et du Conseil d'Etat, et soumis à l'acceptation du Peuple, nomme l'Empereur et règle dans sa famille l'ordre héréditaire de mâle en mâle, à l'exclusion perpétuelle des femmes et de leur descendance. - Jusqu'au moment où l'élection du nouvel empereur est consommée, les affaires de l'Etat sont gouvernées par les ministres en fonctions, qui se forment en Conseil de gouvernement et délibèrent à la majorité des voix.",
            ],
          },
          {
            id: 'a-63',
            title: 'Article 6.',
            paragraphs: [
              "Les membres de la famille de Louis Napoléon Bonaparte appelés éventuellement à l'hérédité, et leur descendance des deux sexes, font partie de la famille impériale. Un sénatus-consulte règle leur position. Ils ne peuvent se marier sans l'autorisation de l'Empereur. Leur mariage fait sans cette autorisation emporte privation de tout droit à l'hérédité, tant pour celui qui l'a contracté que pour ses descendants. - Néanmoins, s'il n'existe pas d'enfants de ce mariage, en cas de dissolution pour cause de décès, le prince qui l'aurait contracté recouvre ses droits à l'hérédité. - Louis Napoléon Bonaparte fixe les titres et la condition des autres membres de sa famille. - L'empereur a pleine autorité sur tous les membres de sa famille ; il règle leurs devoirs et leurs obligations par des statuts qui ont force de loi.",
            ],
          },
          {
            id: 'a-64',
            title: 'Article 7.',
            paragraphs: [
              "La Constitution du 14 janvier 1852 est maintenue dans toutes celles de ses dispositions qui ne sont pas contraires au présent sénatus-consulte ; il ne pourra y être apporté de modifications que dans les formes et par les moyens qu'elle a prévus.",
            ],
          },
          {
            id: 'a-65',
            title: 'Article 8.',
            paragraphs: [
              "La proposition suivante sera présentée à l'acceptation du Peuple français dans les formes déterminées par les décrets des 2 et 4 décembre 1851 :",
              "« Le Peuple français veut le rétablissement de la dignité impériale dans la personne de Louis Napoléon Bonaparte, avec hérédité dans sa descendance directe, légitime ou adoptive, et lui donne le droit de régler l'ordre de succession au trône dans la famille Bonaparte, ainsi qu'il est prévu par le sénatus-consulte du 7 novembre 1852. »",
            ],
          },
        ],
      },
      {
        id: 'section-12-d-cret-imp-rial-du-2-d-cembre-1852',
        title: 'Décret impérial du 2 décembre 1852',
        articles: [
          {
            id: 'p-52',
            title: 'Text',
            paragraphs: [
              "qui promulgue et déclare Loi de l'Etat le sénatus-consulte du 7 novembre 1852, ratifié par le plébiscite des 21 et 22 novembre.",
              'Vu le sénatus-consulte, en date du 7 novembre 1852, qui soumet au peuple le plébiscite dont la teneur suit :',
              "« Le peuple veut le rétablissement de la dignité impériale dans la personne de Louis Napoléon Bonaparte, avec hérédité dans sa descendance directe, légitime ou adoptive, et lui donne le droit de régler l'ordre de succession au trône dans la famille Bonaparte, ainsi qu'il est prévu par le sénatus-consulte du 7 novembre 1852. »",
              'Vu la déclaration du Corps législatif qui constate :',
              'Que les opérations du vote ont été partout librement et régulièrement accomplies ;',
              'Que le recensement général des suffrages émis sur le projet de plébiscite a donné sept millions huit cent vingt-quatre mille cent quatre-vingt-neuf (7 824 189) bulletins portant le mot oui ;',
              'Deux cent cinquante-trois mille cent quarante-cinq (253 145) bulletins portant le mot non ;',
              'Soixante-trois mille trois cent vingt-six (63 326) bulletins nuls ; - Avons décrété et décrétons ce qui suit :',
            ],
          },
          {
            id: 'a-66',
            title: 'Article 1.',
            paragraphs: [
              "Le sénatus-consulte du 7 novembre 1852, ratifié par le plébiscite des 21 et 22 novembre, est promulgué et devient loi de l'Etat.",
            ],
          },
          {
            id: 'a-67',
            title: 'Article 2.',
            paragraphs: [
              'Louis Napoléon Bonaparte est Empereur des Français sous le nom de Napoléon III.',
            ],
          },
        ],
      },
      {
        id: 'section-13-s-natus-consulte-du-12-d-cembre-1852',
        title: 'Sénatus-consulte du 12 décembre 1852',
        articles: [
          {
            id: 'p-60',
            title: 'Text',
            paragraphs: ['sur la liste civile et la dotation de la couronne.'],
          },
        ],
      },
      {
        id: 'section-14-titre-premier',
        title: 'TITRE PREMIER',
        articles: [
          {
            id: 'p-61',
            title: 'Text',
            paragraphs: [
              "Section première. - De la liste civile de l'empereur et de la dotation de la couronne.",
            ],
          },
          {
            id: 'a-68',
            title: 'Article 1.',
            paragraphs: [
              "La liste civile de l'empereur est fixée, à partir du 1er décembre 1852, pour toute la durée du règne, conformément à l'article 15 du sénatus-consulte du 28 floréal an XII.",
            ],
          },
          {
            id: 'a-69',
            title: 'Article 2.',
            paragraphs: [
              'La dotation immobilière de la couronne comprend les palais, châteaux, maisons, domaines et manufactures énumérés dans le tableau annexé au présent sénatus-consulte.',
            ],
          },
          {
            id: 'a-70',
            title: 'Article 3.',
            paragraphs: [
              "Les biens particuliers appartenant à l'empereur au moment de son avènement au trône sont, de plein droit, réunis au domaine de l'Etat, et font partie de la dotation de la couronne.",
            ],
          },
          {
            id: 'a-71',
            title: 'Article 4.',
            paragraphs: [
              "La dotation mobilière comprend les diamants, perles, pierreries, statues, tableaux, pierres gravées, musées, bibliothèques et autres monuments des arts, ainsi que les meubles meublants contenue dans l'hôtel du Garde-meuble et les divers palais et établissements impériaux.",
            ],
          },
          {
            id: 'a-72',
            title: 'Article 5.',
            paragraphs: [
              "Il est dressé par récolement, aux frais du trésor, un état et des plans des immeubles, ainsi qu'un inventaire descriptif de tous les meubles ; ceux de ces meubles susceptibles de se détériorer par l'usage seront estimés. Des doubles de ces actes seront déposés dans les archives du Sénat.",
            ],
          },
          {
            id: 'a-73',
            title: 'Article 6.',
            paragraphs: [
              "Les monuments et objets d'art qui seront placés dans les maisons impériales, soit aux frais de l'Etat, soit aux frais de la couronne, seront et demeureront, dès ce moment, propriété de la couronne.",
              'Section 2. - Conditions de la jouissance des biens formant la dotation de la couronne.',
            ],
          },
          {
            id: 'a-74',
            title: 'Article 7.',
            paragraphs: [
              "Les biens meubles et immeubles de la couronne sont inaliénables et imprescriptibles. - Ils ne peuvent être donnés, vendus, engagés ni grevés d'hypothèques. - Néanmoins, les objets inventoriés avec estimation aux termes de l'article 5, peuvent être aliénés moyennant remplacement.",
            ],
          },
          {
            id: 'a-75',
            title: 'Article 8.',
            paragraphs: [
              "L'échange de biens composant la dotation de la couronne ne peut être autorisé que par un sénatus-consulte.",
            ],
          },
          {
            id: 'a-76',
            title: 'Article 9',
            paragraphs: [
              "Les biens de la couronne et le trésor public ne sont jamais grevés des dettes de l'empereur ou des pensions par lui accordées.",
            ],
          },
          {
            id: 'a-77',
            title: 'Article 10.',
            paragraphs: [
              "La durée des baux, à moins qu'un sénatus-consulte ne l'autorise, ne peut pas excéder vingt et un ans ; ils ne peuvent être renouvelés plus de trois ans avant leur expiration.",
            ],
          },
          {
            id: 'a-78',
            title: 'Article 11.',
            paragraphs: [
              "Les forêts de la couronne sont soumises aux dispositions du Code forestier, en ce qui les concerne - elles sont assujetties à un aménagement régulier. - Il ne peut y être fait aucune coupe extraordinaire quelconque, ni aucune coupe des quarts en réserve ou de massifs réservés par l'aménagement pour croître en futaie, si ce n'est en vertu d'un sénatus-consulte. - Les dispositions des articles 2 et 3 du sénatus-consulte du 3 juillet 1852 sont applicables aux biens de la couronne.",
            ],
          },
          {
            id: 'a-79',
            title: 'Article 12.',
            paragraphs: [
              "Les propriétés de la couronne ne sont pas soumises à l'impôt ; elles supportent néanmoins toutes les charges communales et départementales. - Afin de fixer leurs portions contributives dans ces charges, elles sont portées sur les rôles, et pour leurs revenus estimatifs, de la même manière que les propriétés privées.",
            ],
          },
          {
            id: 'a-80',
            title: 'Article 13.',
            paragraphs: [
              "L'empereur peut faire aux palais, bâtiments et domaines de la couronne, tous les changements, additions et démolitions qu'il juge utiles à leur conservation ou à leur embellissement.",
            ],
          },
          {
            id: 'a-81',
            title: 'Article 14.',
            paragraphs: [
              "L'entretien et les réparations de toute nature de meubles et immeubles de la couronne sont à la charge de la liste civile.",
            ],
          },
          {
            id: 'a-82',
            title: 'Article 15.',
            paragraphs: [
              "Sauf les conditions qui précèdent, et l'obligation de fournir caution dont l'empereur est affranchi, toutes les autres règles du droit civil régissent les propriétés de la couronne.",
            ],
          },
        ],
      },
      {
        id: 'section-15-titre-ii-du-douaire-de-l-imp-ratrice',
        title:
          "TITRE II - Du douaire de l'impératrice et de la dotation des princes de la famille impériale",
        articles: [
          {
            id: 'a-83',
            title: 'Article 16.',
            paragraphs: [
              "Le douaire de l'impératrice est fixé par un sénatus-consulte, lors du mariage de l'empereur.",
            ],
          },
          {
            id: 'a-84',
            title: 'Article 17.',
            paragraphs: [
              "Une dotation annuelle de quinze cent mille francs est affectée aux princes et princesses de la famille impériale. La répartition de cette dotation est faite par décret de l'empereur.",
            ],
          },
        ],
      },
      {
        id: 'section-16-titre-iii-du-domaine-priv',
        title: 'TITRE III - Du domaine privé',
        articles: [
          {
            id: 'a-85',
            title: 'Article 18.',
            paragraphs: [
              "Le domaine privé de l'empereur se compose des biens qu'il acquiert à titre gratuit ou onéreux pendant son règne.",
            ],
          },
          {
            id: 'a-86',
            title: 'Article 19.',
            paragraphs: [
              "L'empereur peut disposer de son domaine privé sans être assujetti aux règles du Code Napoléon sur la quotité disponible. - S'il n'en a pas disposé, les propriétés du domaine privé font retour au domaine de l'État et font partie de la dotation de la couronne.",
            ],
          },
          {
            id: 'a-87',
            title: 'Article 20.',
            paragraphs: [
              "Les propriétés du domaine privé sont, sauf l'exception portée en l'article précédent, soumises à toutes les règles du Code Napoléon ; elles sont imposées et cadastrées.",
            ],
          },
        ],
      },
      {
        id: 'section-17-titre-iv-des-droits-des-cr-anciers-e',
        title: 'TITRE IV - Des droits des créanciers et des actes judiciaires',
        articles: [
          {
            id: 'a-88',
            title: 'Article 21.',
            paragraphs: [
              "Demeurent toujours réservés sur le domaine privé délaissé par l'empereur, les droits de ses créanciers et les droits des employés de sa maison à qui des pensions de retraite ont été accordées ou sont dues par imputation sur un fonds de retenues faites sur leurs appointements.",
            ],
          },
          {
            id: 'a-89',
            title: 'Article 22.',
            paragraphs: [
              "Les actions concernant la dotation de la couronne et le domaine privé sont dirigées par ou contre l'administrateur de ce domaine. - Les unes et les autres sont d'ailleurs instruites et jugées dans les formes ordinaires, sauf la présente dérogation à l'article 69 du Code de procédure civile.",
            ],
          },
          {
            id: 'a-90',
            title: 'Article 23.',
            paragraphs: [
              'Les titres sont exécutoires seulement sur tous les biens meubles et immeubles composant le domaine privé. - Ils ne le sont jamais sur les effets mobiliers renfermés dans les palais, manufactures et maisons impériales, ni les deniers de la liste civile.',
              '[Suit le tableau des immeubles affectés à la dotation de la couronne]',
            ],
          },
        ],
      },
      {
        id: 'section-18-s-natus-consulte-du-25-d-cembre-1852',
        title: 'Sénatus-consulte du 25 décembre 1852',
        articles: [
          {
            id: 'p-64',
            title: 'Text',
            paragraphs: [
              'portant interprétation et modification de la Constitution du 14 janvier 1852.',
            ],
          },
          {
            id: 'a-91',
            title: 'Article 1.',
            paragraphs: [
              "L'empereur a le droit de faire grâce et d'accorder des amnisties.",
            ],
          },
          {
            id: 'a-92',
            title: 'Article 2.',
            paragraphs: [
              "L'empereur préside, quand il le juge convenable, le Sénat et le Conseil d'Etat.",
            ],
          },
          {
            id: 'a-93',
            title: 'Article 3.',
            paragraphs: [
              "Les traités de commerce faits en vertu de l'article 6 de la Constitution ont force de loi pour les modification de tarif qui y sont stipulées.",
            ],
          },
          {
            id: 'a-94',
            title: 'Article 4.',
            paragraphs: [
              "Tous les travaux d'utilité publique, notamment ceux désignés par l'article 10 de la loi du 21 avril 1832 et l'article 3 de la loi du 3 mai 1841, toutes les entreprises d'intérêt général, sont ordonnés ou autorisés par décrets de l'Empereur. - Ces décrets sont rendus dans les formes prescrites pour les règlements d'administration publique. - Néanmoins, si ces travaux et entreprises ont pour condition des engagements ou des subsides du Trésor, le crédit devra être accordé ou l'engagement ratifié par une loi avant la mise à exécution. - Lorsqu'il s'agit de travaux exécutés pour le compte de l'Etat, et qui ne sont pas de nature à devenir l'objet de concessions, les crédits peuvent être ouverts, en cas d'urgence, suivant les formes prescrites pour les crédits extraordinaires : ces crédits seront soumis au Corps législatif dans sa plus prochaine session.",
            ],
          },
          {
            id: 'a-95',
            title: 'Article 5.',
            paragraphs: [
              "Les dispositions du décret organique du 22 mars 1852 peuvent être modifiées par des décrets de l'empereur.",
            ],
          },
          {
            id: 'a-96',
            title: 'Article 6.',
            paragraphs: [
              "Les membres de la famille impériale appelés éventuellement à l'hérédité et leurs descendants, portent le nom de princes français. - Le fils aîné de l'empereur porte le titre de prince impérial.",
            ],
          },
          {
            id: 'a-97',
            title: 'Article 7.',
            paragraphs: [
              "Les princes français sont membres du Sénat et du Conseil d'Etat quand ils ont atteint l'âge de dix-huit ans accomplis. - Ils ne peuvent y siéger qu'avec l'agrément de l'empereur.",
            ],
          },
          {
            id: 'a-98',
            title: 'Article 8.',
            paragraphs: [
              "Les actes de l'état civil de la famille impériale sont reçus par le ministre d'Etat, et transmis, sur un ordre de l'empereur, au Sénat, qui en ordonne la transcription sur ses registres et le dépôt dans ses archives.",
            ],
          },
          {
            id: 'a-99',
            title: 'Article 9.',
            paragraphs: [
              "La dotation de la couronne et la liste civile de l'empereur sont réglées, pour la durée de chaque règne, par un sénatus-consulte spécial.",
            ],
          },
          {
            id: 'a-100',
            title: 'Article 10.',
            paragraphs: [
              "Le nombre de sénateurs nommés directement par l'empereur ne peut excéder cent cinquante.",
            ],
          },
          {
            id: 'a-101',
            title: 'Article 11.',
            paragraphs: [
              'Une dotation annuelle et viagère de trente mille francs est affectée à la dignité de sénateur.',
            ],
          },
          {
            id: 'a-102',
            title: 'Article 12.',
            paragraphs: [
              "Le budget des dépenses est présenté au Corps législatif avec ses subdivisions administratives, par chapitres et par articles. - Il est voté par ministère. - La répartition par chapitres du crédit accordé pour chaque ministère est réglée par décret de l'empereur, rendu en Conseil d'Etat. - Des décrets spéciaux, rendus dans la même forme, peuvent autoriser des virements d'un chapitre à un autre. Cette disposition est applicable au budget de l'année 1853.",
            ],
          },
          {
            id: 'a-103',
            title: 'Article 13.',
            paragraphs: [
              "Le compte rendu prescrit par l'article 42 de la Constitution est soumis, avant sa publication, à une commission composée du président du Corps législatif et des présidents de chaque bureau. En cas de partage d'opinions, la voix du président du Corps législatif est prépondérante. - Le procès-verbal de la séance, lu à l'Assemblée, constate seulement les opérations et les votes du Corps législatif.",
            ],
          },
          {
            id: 'a-104',
            title: 'Article 14.',
            paragraphs: [
              'Les députés au Corps législatif reçoivent une indemnité qui est fixée à deux mille cinq cents francs par mois pendant la durée de chaque session ordinaire ou extraordinaire.',
            ],
          },
          {
            id: 'a-105',
            title: 'Article 15.',
            paragraphs: [
              "Les officiers généraux placés dans le cadre de réserve peuvent être membres du Corps législatif. Ils sont réputés démissionnaires, s'ils sont employés activement, conformément à l'article 5 du décret du 1er décembre 1852, et à l'article 3 de la loi du 4 août 1839.",
            ],
          },
          {
            id: 'a-106',
            title: 'Article 16.',
            paragraphs: [
              'Le serment prescrit par l\'article 14 de la Constitution est ainsi conçu : " Je jure obéissance à la Constitution et fidélité à l\'empereur. "',
            ],
          },
          {
            id: 'a-107',
            title: 'Article 17.',
            paragraphs: [
              'Les articles 2, 9, 11, 15, 16, 17, 18, 19, 22 et 37 de la Constitution du 14 janvier 1852 sont abrogés.',
            ],
          },
        ],
      },
      {
        id: 'section-19-s-natus-consulte-du-23-avril-1856',
        title: 'Sénatus-consulte du 23 avril 1856',
        articles: [
          {
            id: 'p-65',
            title: 'Text',
            paragraphs: [
              "interprétatif de l'article 22 du sénatus-consulte du 12 décembre 1852, sur la liste civile et la dotation de la couronne.",
            ],
          },
          {
            id: 'a-108',
            title: 'Article unique.',
            paragraphs: [
              "L'administrateur de la dotation de la couronne a seul qualité pour procéder en justice, soit en demandant, soit en défendant, dans les instances relatives à la propriété des biens faisant partie de cette dotation ou du domaine privé. - Il a seul qualité pour préparer et consentir les actes relatifs aux échanges du domaine de la couronne, et tous autres actes conformes aux prescriptions du sénatus-consulte du 12 décembre 1852. - Il a pareillement qualité, dans les cas prévus par les articles 13 et 26 de la loi du 3 mai 1841, pour consentir seul les expropriations et recevoir les indemnités, sous la condition de faire emploi desdites indemnités, soit en immeubles, soit en rentes sur l'État, sans toutefois que le débiteur soit tenu de surveiller le remploi.",
            ],
          },
        ],
      },
      {
        id: 'section-20-s-natus-consulte-du-17-juillet-1856',
        title: 'Sénatus-consulte du 17 juillet 1856',
        articles: [
          {
            id: 'p-66',
            title: 'Text',
            paragraphs: ["sur la régence de l'Empire."],
          },
        ],
      },
      {
        id: 'section-21-titre-i-de-la-r-gence',
        title: 'TITRE I - De la régence',
        articles: [
          {
            id: 'a-109',
            title: 'Article 1.',
            paragraphs: [
              "L'empereur est mineur jusqu'à l'âge de dix-huit ans accomplis.",
            ],
          },
          {
            id: 'a-110',
            title: 'Article 2.',
            paragraphs: [
              "Si l'empereur monte sur le trône sans que l'empereur son père ait disposé, par acte rendu public avant son décès, de la régence de l'Empire, l'impératrice mère est régente et a la garde de son fils mineur.",
            ],
          },
          {
            id: 'a-111',
            title: 'Article 3.',
            paragraphs: [
              "L'impératrice-régente qui convole à de secondes noces perd de plein droit la régence et la garde de son fils mineur.",
            ],
          },
          {
            id: 'a-112',
            title: 'Article 4.',
            paragraphs: [
              "A défaut de l'impératrice, qu'elle ait ou non exercé la régence, et si l'empereur n'en a autrement disposé par acte rendu public ou secret, la régence appartient au premier prince français, et, à son défaut, à l'un des autres princes français dans l'ordre de l'hérédité de la couronne. - L'empereur peut, par acte public ou secret, pourvoir aux vacances qui pourraient se produire dans l'exercice de la régence pendant la minorité.",
            ],
          },
          {
            id: 'a-113',
            title: 'Article 5.',
            paragraphs: [
              "S'il n'existe aucun prince français habile à exercer la régence, les ministres en fonctions se forment en Conseil et gouvernent les affaires de l'Etat jusqu'au moment où le régent est nommé. - Ils délibèrent à la majorité des voix. - Immédiatement après la mort de l'empereur, le Sénat est convoqué par le Conseil de régence. - Sur la proposition du Conseil de régence, le Sénat élit le régent parmi les candidats qui lui sont présentés. - Dans le cas où le Conseil de régence n'aurait pas été nommé par l'empereur, la convocation et la proposition sont faites par les ministres formés en Conseil, avec l'adjonction des présidents en exercice du Sénat, du Corps législatif et du Conseil d'État.",
            ],
          },
          {
            id: 'a-114',
            title: 'Article 6.',
            paragraphs: [
              'Le régent et les membres du Conseil de régence doivent être français et âgés de vingt et un ans accomplis.',
            ],
          },
          {
            id: 'a-115',
            title: 'Article 7.',
            paragraphs: [
              "Les actes par lesquels l'empereur dispose de la régence ou nomme les membres du Conseil de régence sont adressés au Sénat et déposés dans ses archives. - Si l'empereur a disposé de la régence ou nommé les membres du Conseil de régence par un acte secret, l'ouverture de cet acte est faite immédiatement après la mort de l'empereur, au Sénat, par le président du Sénat, en présence des sénateurs qui auront pu répondre à la convocation, et en présence des ministres et des présidents du Corps législatif et du Conseil d'Etat dûment appelés.",
            ],
          },
          {
            id: 'a-116',
            title: 'Article 8.',
            paragraphs: [
              "Tous les actes de la régence sont au nom de l'empereur mineur.",
            ],
          },
          {
            id: 'a-117',
            title: 'Article 9.',
            paragraphs: [
              "Jusqu'à la majorité de l'empereur, l'impératrice-régente ou le régent exerce pour l'empereur mineur l'autorité impériale dans toute sa plénitude, sauf les droits attribués au Conseil de régence. - Toutes dispositions législatives qui protègent la personne de l'empereur sont applicables à l'impératrice-régente et au régent.",
            ],
          },
          {
            id: 'a-118',
            title: 'Article 10.',
            paragraphs: [
              "Les fonctions de l'impératrice-régente ou du régent commencent au moment du décès de l'empereur. - Mais si un acte secret concernant la régence a été adressé au Sénat et déposé dans ses archives, les fonctions du régent ne commencent qu'après l'ouverture de cet acte. Jusqu'à ce qu'il y ait été procédé, le gouvernement des affaires de l'État reste entre les mains des ministres en fonctions, conformément à l'article 5.",
            ],
          },
          {
            id: 'a-119',
            title: 'Article 11.',
            paragraphs: [
              "Si l'empereur mineur décède, laissant un frère héritier du trône, la régence de l'impératrice ou celle du régent continue sans aucune formalité nouvelle.",
            ],
          },
          {
            id: 'a-120',
            title: 'Article 12.',
            paragraphs: [
              "La régence de l'impératrice cesse si l'ordre d'hérédité appelle au trône un prince mineur qui ne soit pas son fils. Il est pourvu dans ce cas, à la régence, conformément à l'article 4 ou à l'article 5 du présent sénatus-consulte.",
            ],
          },
          {
            id: 'a-121',
            title: 'Article 13.',
            paragraphs: [
              "Si l'empereur mineur décède, laissant la couronne à un empereur mineur d'une autre branche, le régent reste en fonctions jusqu'à la majorité du nouvel empereur.",
            ],
          },
          {
            id: 'a-122',
            title: 'Article 14.',
            paragraphs: [
              "Lorsque le prince français désigné par le présent sénatus-consulte s'est trouvé empêché par défaut d'âge ou par toute autre cause légale, d'exercer la régence, au moment du décès de l'empereur, le régent en exercice conservera la régence jusqu'à la majorité de l'empereur.",
            ],
          },
          {
            id: 'a-123',
            title: 'Article 15.',
            paragraphs: [
              "La régence, autre que celle de l'impératrice, ne confère aucun droit sur la personne de l'empereur mineur. - La garde de l'empereur mineur, la surintendance de sa maison, la surveillance de son éducation sont confiés, à sa mère. - A défaut de la mère ou d'une personne désignée par l'empereur, la garde de l'empereur mineur est confiée à la personne nommée par le Conseil de régence. - Ne peuvent être nommés ou désignés, ni le régent, ni ses descendants.",
            ],
          },
          {
            id: 'a-124',
            title: 'Article 16.',
            paragraphs: [
              "Si l'impératrice-régente ou le régent n'ont pas prêté serment du vivant de l'empereur pour l'exercice de la régence, ils le prêtent, sur l'Evangile, à l'empereur mineur assis sur le trône, assisté des princes français des membres du Conseil de régence, des ministres, des grands officiers de la couronne et des grands-croix de la Légion d'honneur, en présence du Sénat, du Corps législatif et du Conseil d'État. - Le serment peut aussi être prêté à l'empereur mineur en présence des membres du Conseil de régence, des ministres et des présidents du Sénat, du Corps législatif et du Conseil d'État. - Dans ce cas, la prestation de serment est rendue publique par une proclamation de l'impératrice-régente ou du régent.",
            ],
          },
          {
            id: 'a-125',
            title: 'Article 17.',
            paragraphs: [
              "Le serment prêté par l'impératrice-régente ou le régent est conçu en ces termes : - « Je jure fidélité à l'empereur ; je jure de gouverner conformément à la Constitution, aux sénatus-consultes et aux lois de l'Empire ; de maintenir dans leur intégrité les droits de la nation et ceux de la dignité impériale ; de ne consulter, dans l'emploi de mon autorité, que mon dévouement pour l'empereur et pour la France, et de remettre fidèlement à l'empereur, au moment de sa majorité, le pouvoir dont l'exercice m'est confié » Procès-verbal de cette prestation de serment est dressé par le ministre d'État. Ce procès-verbal est adressé au Sénat et déposé dans ses archives. - L'acte est signé par l'impératrice-régente ou le régent, par les princes de la famille impériale, par les membres du Conseil de régence, par les ministres et par les présidents du Sénat, du Corps législatif et du Conseil d'État.",
            ],
          },
        ],
      },
      {
        id: 'section-22-titre-ii-du-conseil-de-r-gence',
        title: 'TITRE II - Du Conseil de régence',
        articles: [
          {
            id: 'a-126',
            title: 'Article 18.',
            paragraphs: [
              "Un Conseil de Régence est constitué pour toute la durée de la minorité de l'empereur. - Il se compose : - 1 ° Des princes français désignés par l'empereur ; - A défaut de désignation par l'empereur, des deux princes français les plus proches dans l'ordre d'hérédité ; - 2 ° Des personnes que l'empereur a désignées par acte public ou secret. - Si l'empereur n'a fait aucune désignation, le Sénat nomme cinq personnes pour faire partie du Conseil de régence. - En cas de mort ou de démission d'un ou plusieurs membres du Conseil de régence, autres que les princes français, le Sénat pourvoit à leur remplacement.",
            ],
          },
          {
            id: 'a-127',
            title: 'Article 19.',
            paragraphs: [
              "Aucun membre du Conseil de régence ne peut être éloigné de ses fonctions par l'impératrice-régente ou le régent.",
            ],
          },
          {
            id: 'a-128',
            title: 'Article 20.',
            paragraphs: [
              "Le Conseil de régence est convoqué et présidé par l'impératrice-régente ou le régent. - L'impératrice-régente ou le régent peuvent déléguer, pour présider à leur place, l'un des princes français faisant partie du Conseil de régence ou l'un des autres membres de ce Conseil.",
            ],
          },
          {
            id: 'a-129',
            title: 'Article 21.',
            paragraphs: [
              "Le Conseil de régence délibère nécessairement, et à la majorité absolue des voix : - 1 ° Sur le mariage de l'empereur ; - 2 ° Sur les déclarations de guerre, la signature des traités de paix, d'alliance ou de commerce ; - 3 ° Sur les projets de sénatus-consultes organiques. - En cas de partage, la voix de l'impératrice-régente ou du régent est prépondérante. Si la présidence est exercée par délégation, l'impératrice-régente ou le régent décident.",
            ],
          },
          {
            id: 'a-130',
            title: 'Article 22.',
            paragraphs: [
              "Le Conseil de régence a seulement voix consultative sur toutes les autres questions qui lui sont soumises par l'impératrice-régente ou le régent.",
            ],
          },
        ],
      },
      {
        id: 'section-23-titre-iii-dispositions-diverses',
        title: 'TITRE III - Dispositions diverses',
        articles: [
          {
            id: 'a-131',
            title: 'Article 23.',
            paragraphs: [
              "Durant la régence, l'administration de la dotation de la couronne continue selon les règles établies. - L'emploi des revenus est déterminé dans les formes accoutumées, sous l'autorité de l'impératrice-régente ou du régent.",
            ],
          },
          {
            id: 'a-132',
            title: 'Article 24.',
            paragraphs: [
              "Les dépenses personnelles de l'impératrice-régente ou du régent et l'entretien de leur maison font partie du budget de la couronne. La quotité en est fixée par le Conseil de régence.",
            ],
          },
          {
            id: 'a-133',
            title: 'Article 25.',
            paragraphs: [
              "En cas d'absence du régent au commencement d'une minorité, sans qu'il y ait été pourvu par l'empereur avant son décès, les affaires de l'État sont gouvernées, jusqu'à l'arrivée du régent, conformément aux dispositions de l'article 5 du présent sénatus-consulte.",
            ],
          },
        ],
      },
      {
        id: 'section-24-s-natus-consulte-du-2-f-vrier-1861',
        title: 'Sénatus-consulte du 2 février 1861',
        articles: [
          {
            id: 'p-67',
            title: 'Text',
            paragraphs: [
              "qui modifie l'article 42 de la Constitution",
              "L'article 42 de la Constitution est modifié ainsi qu'il suit :",
              "Les débats des séances du Sénat et du Corps législatif sont reproduits par la sténographie et insérés in extenso dans le Journal officiel du lendemain. - En outre, les comptes rendus de ces séances, rédigés par des secrétaires-rédacteurs placés sous l'autorité du président de chaque Assemblée, sont mis, chaque soir, à la disposition de tous les journaux. - Le compte rendu des séances du Sénat et du Corps législatif par les journaux, ou tout autre moyen de publication, ne consistera que dans la reproduction des débats insérés in extenso dans le Journal officiel, ou du compte rendu rédigé sous l'autorité du président, conformément aux paragraphes précédents. - Néanmoins, lorsque plusieurs projets ou pétitions auront été discutés dans une séance, il sera permis de ne reproduire que les débats relatifs à un seul de ces projets ou à une seule de ces pétitions. Dans ce cas, si la discussion se prolonge pendant plusieurs séances, la publication devra être continuée jusqu'au vote et y compris le vote. - Le Sénat, sur la demande de cinq membres, pourra décider qu'il se forme en comité secret. - L'article 13 du sénatus-consulte du 25 décembre 1852 est abrogé en ce qu'il a de contraire au présent sénatus-consulte.",
            ],
          },
        ],
      },
      {
        id: 'section-25-s-natus-consulte-du-18-juillet-1866',
        title: 'Sénatus-consulte du 18 juillet 1866',
        articles: [
          {
            id: 'p-70',
            title: 'Text',
            paragraphs: [
              'qui modifie la Constitution et notamment les articles 40 et 41.',
            ],
          },
          {
            id: 'a-134',
            title: 'Article 1.',
            paragraphs: [
              "La Constitution ne peut être discutée par aucun pouvoir public autre que le Sénat procédant dans les formes qu'elle détermine. - Une pétition ayant pour objet une modification quelconque ou une interprétation de la Constitution ne peut être rapportée en séance générale que si l'examen en a été autorisé par trois au moins des cinq bureaux du Sénat.",
            ],
          },
          {
            id: 'a-135',
            title: 'Article 2.',
            paragraphs: [
              "Est interdite toute discussion ayant pour objet la critique ou la modification de la Constitution, et publiée ou reproduite soit par la presse périodique, soit par des affiches, soit par des écrits non périodiques des dimensions déterminées par le paragraphe 1er de l'article 9 du décret du 17 février 1852. - Les pétitions ayant pour objet une modification ou une interprétation de la Constitution ne peuvent être rendues publiques que par la publication du compte rendu officiel de la séance dans laquelle elles ont été rapportées. - Toute infraction aux prescriptions du présent article constitue une contravention punie d'une amende de cinq cents à dix mille francs.",
            ],
          },
          {
            id: 'a-136',
            title: 'Article 3.',
            paragraphs: [
              "L'article 40 de la Constitution du 14 janvier 1852 est modifié ainsi qu'il suit : - Art. 40. Les amendements adoptés par la commission chargée d'examiner un projet de loi sont renvoyés au Conseil d'Etat par le président du Corps législatif. - Les amendements non adoptés par la commission ou par le Conseil d'Etat, peuvent être pris en considération par le Corps législatif et renvoyés à un nouvel examen de la commission. - Si la commission ne propose pas de rédaction nouvelle, ou si celle qu'elle propose n'est pas adoptée par le Conseil d'Etat, le texte primitif du projet est seul mis en délibération.",
            ],
          },
          {
            id: 'a-137',
            title: 'Article 4.',
            paragraphs: [
              "La disposition de l'article 41 de la Constitution du 14 janvier 1852, qui limite à trois mois la durée des sessions ordinaires du Corps législatif, est abrogée. Un décret de l'Empereur prononce la clôture de la session. - L'indemnité attribuée aux députés au Corps législatif est fixée à douze mille cinq cents francs pour chaque session ordinaire, quelle qu'en soit la durée. - En cas de session extraordinaire, l'indemnité continue à être réglée conformément à l'article 14 du sénatus-consulte du 25 décembre 1852.",
            ],
          },
        ],
      },
      {
        id: 'section-26-s-natus-consulte-du-14-mars-1867',
        title: 'Sénatus-consulte du 14 mars 1867',
        articles: [
          {
            id: 'p-71',
            title: 'Text',
            paragraphs: [
              "qui modifie l'article 26 de la Constitution.",
              "L'article 26 de la Constitution est modifié de la manière suivante :",
            ],
          },
          {
            id: 'a-138',
            title: 'Article 26.',
            paragraphs: [
              "Le Sénat s'oppose à la promulgation : - 1 ° Des lois qui seraient contraires ou qui porteraient atteinte à la Constitution, à la religion, à la morale, à la liberté des cultes, à la liberté individuelle, à l'égalité des citoyens devant la loi, à l'inviolabilité de la propriété et au principe de l'inamovibilité de la magistrature ; - 2 ° De celles qui pourraient compromettre la défense du territoire. - Le Sénat peut en outre avant de se prononcer sur la promulgation d'une loi, décider, par une résolution motivée, que cette loi sera soumise à une nouvelle délibération du Corps législatif. - Cette nouvelle délibération n'aura lieu que dans une session suivante, à moins que le Sénat n'ait reconnu qu'il y a urgence. - Lorsque, dans une seconde délibération, le Corps législatif a adopté la loi sans changements, le Sénat, saisi de nouveau, délibère uniquement sur la question de savoir s'il s'oppose ou non à la promulgation de la loi conformément aux nos 1 et 2 du présent article.",
            ],
          },
        ],
      },
      {
        id: 'section-27-s-natus-consulte-du-8-septembre-1869',
        title: 'Sénatus-consulte du 8 septembre 1869',
        articles: [
          {
            id: 'p-73',
            title: 'Text',
            paragraphs: [
              "qui modifie divers articles de la Constitution, les articles 3 et 5 du sénatus-consulte du 22 décembre 1852 et l'article 1er du sénatus-consulte du 31 décembre 1861.",
            ],
          },
          {
            id: 'a-139',
            title: 'Article 1.',
            paragraphs: [
              "L'empereur et le Corps législatif ont l'initiative des lois.",
            ],
          },
          {
            id: 'a-140',
            title: 'Article 2.',
            paragraphs: [
              "Les ministres ne dépendent que de l'empereur. - Ils délibèrent en Conseil sous sa présidence. - Ils sont responsables. - Ils ne peuvent être mis en accusation que par le Sénat.",
            ],
          },
          {
            id: 'a-141',
            title: 'Article 3.',
            paragraphs: [
              "Les ministres peuvent être membres du Sénat ou du Corps législatif. - Ils ont entrée dans l'une et l'autre assemblées, et doivent être entendus toutes les fois qu'ils le demandent.",
            ],
          },
          {
            id: 'a-142',
            title: 'Article 4.',
            paragraphs: [
              "Les séances du Sénat sont publiques. La demande de cinq membres suffit pour qu'il se forme en comité secret.",
            ],
          },
          {
            id: 'a-143',
            title: 'Article 5.',
            paragraphs: [
              "Le Sénat peut, en indiquant les modifications dont une loi lui paraît susceptible, décider qu'elle sera renvoyée à une nouvelle délibération du Corps législatif. - Il peut, dans tous les cas, s'opposer à la promulgation de la loi. - La loi à la promulgation de laquelle le Sénat s'est opposé ne peut être présentée de nouveau au Corps législatif dans la même session.",
            ],
          },
          {
            id: 'a-144',
            title: 'Article 6.',
            paragraphs: [
              "A l'ouverture de chaque session, le Corps législatif nomme son président, ses vice-présidents et ses secrétaires. - Il nomme ses questeurs.",
            ],
          },
          {
            id: 'a-145',
            title: 'Article 7.',
            paragraphs: [
              "Tout membre du Sénat ou du Corps législatif a le droit d'adresser une interpellation au gouvernement. - Des ordres du jour motivés peuvent être adoptés. - Le renvoi aux bureaux de l'ordre du jour motivé est de droit quand il est demandé par le gouvernement. - Les bureaux nomment une commission sur le rapport sommaire de laquelle l'Assemblée prononce.",
            ],
          },
          {
            id: 'a-146',
            title: 'Article 8.',
            paragraphs: [
              "Aucun amendement ne peut être mis en délibération s'il n'a été envoyé à la commission chargée d'examiner le projet de loi et communiqué au gouvernement. - Lorsque le gouvernement et la commission ne sont pas d'accord, le Conseil d'Etat donne son avis et le Corps législatif prononce.",
            ],
          },
          {
            id: 'a-147',
            title: 'Article 9.',
            paragraphs: [
              'Le budget des dépenses est présenté au Corps législatif par chapitres et articles. - Le budget de chaque ministère est voté par chapitres, conformément à la nomenclature annexée au présent sénatus-consulte.',
            ],
          },
          {
            id: 'a-148',
            title: 'Article 10.',
            paragraphs: [
              "Les modifications apportées à l'avenir à des tarifs de douanes ou de postes par des traités internationaux ne seront obligatoires qu'en vertu d'une loi.",
            ],
          },
          {
            id: 'a-149',
            title: 'Article 11.',
            paragraphs: [
              "Les rapports constitutionnels actuellement établis entre le gouvernement de l'empereur, le Sénat et le Corps législatif ne peuvent être modifiés que par un sénatus-consulte. - Les rapports réglementaires entre ces pouvoirs sont établis par décret impérial. - Le Sénat et le Corps législatif font leur règlement intérieur.",
            ],
          },
          {
            id: 'a-150',
            title: 'Article 12.',
            paragraphs: [
              "Sont abrogées toutes dispositions contraires au présent sénatus-consulte, et notamment les articles 8 et 13, le deuxième paragraphe de l'article 24, les articles 26 et 40, le cinquième paragraphe de l'article 42, le premier paragraphe de l'article 43, l'article 44 de la Constitution, les articles 3 et 5 du sénatus-consulte du 25 décembre 1852 et l'article 1er du sénatus-consulte du 31 décembre 1861.",
              "[Suit la nomenclature annoncée par l'article 9 § 2]",
            ],
          },
        ],
      },
      {
        id: 'section-28-s-natus-consulte-du-21-mai-1870',
        title: 'Sénatus-consulte du 21 mai 1870',
        articles: [
          {
            id: 'p-75',
            title: 'Text',
            paragraphs: [
              "fixant la Constitution de l'Empire.",
              'Napoléon, par la grâce de Dieu et la volonté nationale, Empereur des Français, à tous présents et à venir, salut.',
              'Vu notre décret du 23 avril dernier, qui convoque le Peuple français dans ses comices pour accepter ou rejeter le projet de plébiscite suivant :',
              "- « Le Peuple approuve les réformes libérales opérées dans la Constitution depuis 1860, par l'empereur, avec le concours des grands Corps de l'Etat, et ratifie le sénatus-consulte du 20 avril 1870 » ;",
              "- Vu la déclaration du Corps législatif qui constate : - Que les opérations du vote ont été régulièrement accomplies ; - Que le recensement général des suffrages émis sur le projet de plébiscite a donné : - Sept millions trois cent cinquante mille cent quarante-deux (7 350 142) bulletins portant le mot oui ; - Quinze cent trente-huit mille huit cent vingt-cinq (1 538 825) bulletins portant le mot non ; - Cent douze mille neuf cent soixante-quinze (112 975) bulletins nuls. - Avons sanctionné et sanctionnons, promulgué et promulguons comme loi de l'Etat le sénatus-consulte adopté par le Sénat, le 20 avril 1870, et dont la teneur suit :",
            ],
          },
        ],
      },
      {
        id: 'section-29-titre-premier',
        title: 'TITRE PREMIER',
        articles: [
          {
            id: 'a-151',
            title: 'Article 1.',
            paragraphs: [
              'La Constitution reconnaît, confirme et garantit les grands principes proclamés en 1789, et qui sont la base du droit public des Français.',
            ],
          },
        ],
      },
      {
        id: 'section-30-titre-ii-de-la-dignit-imp-riale-et-d',
        title: 'TITRE II - De la dignité impériale et de la régence',
        articles: [
          {
            id: 'a-152',
            title: 'Article 2.',
            paragraphs: [
              "La dignité impériale, rétablie dans la personne de Napoléon III par le plébiscite des 21-22 novembre 1852, est héréditaire dans la descendance directe et légitime de Louis Napoléon Bonaparte, de mâle en mâle, par ordre de primogéniture, et à l'exclusion perpétuelle des femmes et de leur descendance.",
            ],
          },
          {
            id: 'a-153',
            title: 'Article 3.',
            paragraphs: [
              "Napoléon III, s'il n'a pas d'enfant mâle, peut adopter les enfants et descendants légitimes dans la ligne masculine des frères de l'empereur Napoléon 1er. - Les formes de l'adoption sont réglées par une loi. - Si, postérieurement à l'adoption, il survient à Napoléon III des enfants mâles, ses fils adoptifs ne pourront être appelés à lui succéder qu'après ses descendants légitimes. - L'adoption est interdite aux successeurs de Napoléon III et à leur descendance.",
            ],
          },
          {
            id: 'a-154',
            title: 'Article 4.',
            paragraphs: [
              "A défaut d'héritier légitime direct ou adoptif, sont appelés au trône le prince Napoléon (Joseph Charles Paul) et sa descendance directe et légitime, de mâle en mâle, par ordre de primogéniture, et à l'exclusion perpétuelle des femmes et de leur descendance.",
            ],
          },
          {
            id: 'a-155',
            title: 'Article 5.',
            paragraphs: [
              "A défaut d'héritier légitime ou d'héritier adoptif de Napoléon III et des successeurs en ligne collatérale qui prennent leurs droits dans l'article précédent, le Peuple nomme l'empereur et règle, dans sa famille, l'ordre héréditaire, de mâle en mâle, à l'exclusion perpétuelle des femmes et de leur descendance. - Le projet de plébiscite est successivement délibéré par le Sénat et par le Corps législatif, sur la proposition des ministres formés en Conseil de gouvernement. - Jusqu'au moment où l'élection du nouvel empereur est consommée, les affaires de l'Etat sont gouvernées par les ministres en fonctions, qui se forment en Conseil de gouvernement et délibèrent à la majorité des voix.",
            ],
          },
          {
            id: 'a-156',
            title: 'Article 6.',
            paragraphs: [
              "Les membres de la famille de Napoléon III appelés éventuellement à l'hérédité et leur descendance des deux sexes font partie de la famille impériale. - Ils ne peuvent se marier sans l'autorisation de l'empereur. Le mariage fait sans cette autorisation emporte privation de tout droit à l'hérédité, tant pour celui qui l'a contracté que pour ses descendants. - Néanmoins, s'il n'existe pas d'enfants de ce mariage, en cas de dissolution pour cause de décès, le prince qui l'aurait contracté recouvre ses droits à l'hérédité. - L'empereur fixe les titres et les conditions des autres membres de sa famille. - Il a pleine autorité sur eux ; il règle leurs devoirs et leurs droits par des statuts qui ont force de loi.",
            ],
          },
          {
            id: 'a-157',
            title: 'Article 7.',
            paragraphs: [
              "La régence de l'Empire est réglée par le sénatus-consulte du 17 juillet 1856.",
            ],
          },
          {
            id: 'a-158',
            title: 'Article 8.',
            paragraphs: [
              "Les membres de la famille impériale appelés éventuellement à l'hérédité prennent le titre de princes français. - Le fils aîné de l'empereur porte le titre de prince impérial",
            ],
          },
          {
            id: 'a-159',
            title: 'Article 9.',
            paragraphs: [
              "Les princes français sont membres du Sénat et du Conseil d'Etat quand ils ont atteint l'âge de dix-huit ans accomplis. Ils ne peuvent y siéger qu'avec l'agrément de l'empereur.",
            ],
          },
        ],
      },
      {
        id: 'section-31-titre-iii-formes-du-gouvernement-de-',
        title: "TITRE III - Formes du gouvernement de l'empereur",
        articles: [
          {
            id: 'a-160',
            title: 'Article 10.',
            paragraphs: [
              "L'empereur gouverne avec le concours des ministres, du Sénat, du Corps législatif et du Conseil d'Etat.",
              "ART. 11. - La puissance législative s'exerce collectivement par l'empereur, le Sénat et le Corps législatif.",
            ],
          },
          {
            id: 'a-161',
            title: 'Article 12.',
            paragraphs: [
              "L'initiative des lois appartient à l'empereur, au Sénat et au Corps législatif. - Les projets de loi émanés de l'initiative de l'empereur peuvent, à son choix, être portés, soit au Sénat, soit au Corps législatif - Néanmoins, toute loi d'impôt doit être d'abord votée par le Corps législatif.",
            ],
          },
        ],
      },
      {
        id: 'section-32-titre-iv-de-l-empereur',
        title: "TITRE IV - De l'Empereur",
        articles: [
          {
            id: 'a-162',
            title: 'Article 13.',
            paragraphs: [
              "L'empereur est responsable devant le Peuple français, auquel il a toujours le droit de faire appel.",
            ],
          },
          {
            id: 'a-163',
            title: 'Article 14.',
            paragraphs: [
              "L'empereur est le chef de l'Etat. Il commande les forces de terre et de mer, déclare la guerre, fait les traités de paix, d'alliance et de commerce, nomme à tous les emplois, fait les règlements et décrets nécessaires pour l'exécution des lois.",
            ],
          },
          {
            id: 'a-164',
            title: 'Article 15.',
            paragraphs: [
              "La justice se rend en son nom. - L'inamovibilité de la magistrature est maintenue.",
            ],
          },
          {
            id: 'a-165',
            title: 'Article 16.',
            paragraphs: [
              "L'empereur a le droit de faire grâce et d'accorder des amnisties.",
            ],
          },
          {
            id: 'a-166',
            title: 'Article 17.',
            paragraphs: ['Il sanctionne et promulgue les lois.'],
          },
          {
            id: 'a-167',
            title: 'Article 18.',
            paragraphs: [
              "Les modifications apportées à l'avenir à des tarifs de douanes ou de poste par des traités internationaux ne seront obligatoires qu'en vertu d'une loi.",
            ],
          },
          {
            id: 'a-168',
            title: 'Article 19.',
            paragraphs: [
              "L'empereur nomme et révoque les ministres. - Les ministres délibèrent en conseil sous la présidence de l'empereur. - Ils sont responsables.",
            ],
          },
          {
            id: 'a-169',
            title: 'Article 20.',
            paragraphs: [
              "Les ministres peuvent être membre du Sénat et du Corps législatif. - Ils ont entrée dans l'une et dans l'autre assemblée, et doivent être entendus toutes les fois qu'ils le demandent.",
            ],
          },
          {
            id: 'a-170',
            title: 'Article 21.',
            paragraphs: [
              'Les ministres, les membres du Sénat, du Corps législatif et du Conseil d\'Etat, les officiers de terre et de mer, les magistrats et les fonctionnaires publics prêtent le serment ainsi conçu : " Je jure obéissance à la Constitution et fidélité à l\'empereur. "',
            ],
          },
          {
            id: 'a-171',
            title: 'Article 22.',
            paragraphs: [
              "Les sénatus-consultes, sur la dotation de la couronne et la liste civile, des 12 décembre 1852 et 23 avril 1856, demeurent en vigueur. - Toutefois, il sera statué par une loi dans les cas prévus par les articles 8, 11 et 16 du sénatus-consulte du 12 décembre 1852. - A l'avenir, la dotation de la couronne et la liste civile seront fixées, pour toute la durée du règne, par la législature qui se réunira après l'avènement de l'empereur.",
            ],
          },
        ],
      },
      {
        id: 'section-33-titre-v-du-s-nat',
        title: 'TITRE V - Du Sénat',
        articles: [
          {
            id: 'a-172',
            title: 'Article 23.',
            paragraphs: [
              "Le Sénat se compose : - 1 ° Des cardinaux, des maréchaux, des amiraux ; - 2 ° Des citoyens que l'empereur élève à la dignité de sénateur.",
            ],
          },
          {
            id: 'a-173',
            title: 'Article 24.',
            paragraphs: [
              "Les décrets de nomination des sénateurs sont individuels. Ils mentionnent les services et indiquent les titres sur lesquels la nomination est fondée. - Aucune autre condition ne peut être imposée au choix de l'empereur.",
            ],
          },
          {
            id: 'a-174',
            title: 'Article 25.',
            paragraphs: ['Les sénateurs sont inamovibles et à vie.'],
          },
          {
            id: 'a-175',
            title: 'Article 26.',
            paragraphs: [
              "Le nombre des sénateurs peut être porté aux deux tiers de celui des membres du Corps législatif, y compris les sénateurs de droit. - L'empereur ne peut nommer plus de 20 sénateurs par an.",
            ],
          },
          {
            id: 'a-176',
            title: 'Article 27.',
            paragraphs: [
              "Le président et les vice-présidents du Sénat sont nommés par l'empereur et choisis parmi les sénateurs. - Ils sont nommés pour un an.",
            ],
          },
          {
            id: 'a-177',
            title: 'Article 28.',
            paragraphs: [
              "L'empereur convoque et proroge le Sénat. - Il prononce la clôture des sessions.",
            ],
          },
          {
            id: 'a-178',
            title: 'Article 29.',
            paragraphs: [
              'Les séances du Sénat sont publiques. - Néanmoins, le Sénat pourra se former en comité secret dans les cas et suivant les conditions déterminées par son règlement.',
            ],
          },
          {
            id: 'a-179',
            title: 'Article 30.',
            paragraphs: ['Le Sénat discute et vote les projets de lois.'],
          },
        ],
      },
      {
        id: 'section-34-titre-vi-du-corps-l-gislatif',
        title: 'TITRE VI - Du Corps législatif',
        articles: [
          {
            id: 'a-180',
            title: 'Article 31.',
            paragraphs: [
              'Les députés sont élus par le suffrage universel, sans scrutin de liste.',
            ],
          },
          {
            id: 'a-181',
            title: 'Article 32.',
            paragraphs: [
              'Ils sont nommés pour une durée qui ne peut être moindre de six ans.',
            ],
          },
          {
            id: 'a-182',
            title: 'Article 33.',
            paragraphs: [
              'Le Corps législatif discute et vote les projets de lois.',
            ],
          },
          {
            id: 'a-183',
            title: 'Article 34.',
            paragraphs: [
              "Le Corps législatif élit, à l'ouverture de chaque session, les membres qui composent son bureau.",
            ],
          },
          {
            id: 'a-184',
            title: 'Article 35.',
            paragraphs: [
              "L'empereur convoque, ajourne, proroge et dissout le Corps législatif - En cas de dissolution, l'empereur doit en convoquer un nouveau dans un délai de six mois. - L'empereur prononce la clôture des sessions du Corps législatif.",
            ],
          },
          {
            id: 'a-185',
            title: 'Article 36.',
            paragraphs: [
              'Les séances du Corps législatif sont publiques. - Néanmoins, le Corps législatif pourra se former en comité secret dans les cas et suivant les conditions déterminées par son règlement.',
            ],
          },
        ],
      },
      {
        id: 'section-35-titre-vii-du-conseil-d-tat',
        title: "TITRE VII - Du Conseil d'État",
        articles: [
          {
            id: 'a-186',
            title: 'Article 37.',
            paragraphs: [
              "Le Conseil d'État est chargé, sous la direction de l'empereur, de rédiger les projets de lois et les règlements d'administration publique, et de résoudre les difficultés qui s'élèvent en matière d'administration.",
            ],
          },
          {
            id: 'a-187',
            title: 'Article 38.',
            paragraphs: [
              'Le Conseil soutient, au nom du gouvernement, la discussion des projets de loi devant le Sénat et le Corps législatif.',
            ],
          },
          {
            id: 'a-188',
            title: 'Article 39.',
            paragraphs: [
              "Les conseillers d'État sont nommés par l'empereur et révocables par lui.",
            ],
          },
          {
            id: 'a-189',
            title: 'Article 40.',
            paragraphs: [
              "Les ministres ont rang, séance et voix délibérative au Conseil d'État.",
            ],
          },
        ],
      },
      {
        id: 'section-36-titre-viii-dispositions-g-n-rales',
        title: 'TITRE VIII - Dispositions générales',
        articles: [
          {
            id: 'a-190',
            title: 'Article 41.',
            paragraphs: [
              "Le droit de pétition s'exerce auprès du Sénat et du Corps législatif.",
            ],
          },
          {
            id: 'a-191',
            title: 'Article 42.',
            paragraphs: [
              "Sont abrogés les articles 19, 25, 27, 28, 29, 30, 31, 32, 33 de la Constitution du 14 janvier 1852 ; l'article 2 du sénatus-consulte du 25 décembre 1852 ; les articles 5 et 8 du sénatus-consulte du 8 septembre 1869, et toutes les dispositions contraires à la présente Constitution.",
            ],
          },
          {
            id: 'a-192',
            title: 'Article 43.',
            paragraphs: [
              "Les dispositions de la Constitution du 14 janvier 1852 et celles des sénatus-consultes promulgués depuis cette époque qui ne sont pas comprises dans la présente Constitution et qui ne sont pas abrogées par l'article précédent ont force de loi.",
            ],
          },
          {
            id: 'a-193',
            title: 'Article 44.',
            paragraphs: [
              "La Constitution ne peut être modifiée que par le Peuple, sur la proposition de l'empereur.",
            ],
          },
          {
            id: 'a-194',
            title: 'Article 45.',
            paragraphs: [
              "Les changements et additions apportés au plébiscite des 20 et 21 décembre 1851, par la présente Constitution, seront soumis à l'approbation du Peuple, dans les formes déterminées par les décrets des 2 et 4 décembre 1851 et 7 novembre 1852. - Toutefois, le scrutin ne durera qu'un seul jour.",
              "Inscription aux lettres d'information",
              "Abonnez vous à l'actualité du contentieux pour rester informé(e) des dernières saisines et décisions, ainsi qu'à Titre VII, la revue numérique et gratuite du Conseil constitutionnel.",
            ],
          },
        ],
      },
      {
        id: 'section-37-actualit-s',
        title: 'Actualités',
        articles: [
          {
            id: 'p-83',
            title: 'Text',
            paragraphs: ['Toutes les actualités', 'Agenda', 'Publications'],
          },
        ],
      },
      {
        id: 'section-38-les-d-cisions',
        title: 'Les décisions',
        articles: [
          {
            id: 'p-86',
            title: 'Text',
            paragraphs: [
              'Toutes les décisions',
              'QPC 360°',
              'Assister à une audience',
            ],
          },
        ],
      },
      {
        id: 'section-39-espace-presse',
        title: 'Espace presse',
        articles: [
          {
            id: 'p-89',
            title: 'Text',
            paragraphs: [
              'Communiqués',
              'Ressources',
              'Espace photo',
              'Accréditation',
            ],
          },
        ],
      },
      {
        id: 'section-40-mentions-l-gales',
        title: 'Mentions légales',
        articles: [
          {
            id: 'p-93',
            title: 'Text',
            paragraphs: [
              'Informations légales',
              'Précisions sur les informations à portée juridique',
              'Gestion des cookies',
            ],
          },
        ],
      },
      {
        id: 'section-41-le-conseil',
        title: 'Le Conseil',
        articles: [
          {
            id: 'p-96',
            title: 'Text',
            paragraphs: [
              'Recrutement',
              'Contacts',
              'Données ouvertes (open data)',
            ],
          },
        ],
      },
      {
        id: 'section-42-faq',
        title: 'FAQ',
        articles: [
          {
            id: 'p-99',
            title: 'Text',
            paragraphs: [
              'Guide du site internet',
              'Plan du site',
              'Accessibilité',
              'Application',
              'lien_bluesky',
              'lien_twitter',
              'lien_facebook',
              'lien_linkedin',
              'lien_dailymotion',
              'Flux RSS',
            ],
          },
        ],
      },
    ],
    notes: [
      {
        title: 'Reading context',
        text: 'This text comes from the Conseil constitutionnel historical archive. Notes here should help readers compare institutions, rights, and revision rules across French constitutional history.',
      },
    ],
  },
  {
    id: 'constitution-de-1875-iiie-republique',
    year: '1875',
    shortLabel: '1875',
    title: 'Constitutional Laws of 1875',
    sourceTitle:
      'Lois constitutionnelles de 1875, IIIe République - 24, 25 février et 16 juillet 1875',
    regime: 'Third Republic',
    date: '24, 25 February and 16 July 1875',
    sourceUrl:
      'https://www.conseil-constitutionnel.fr/les-constitutions-dans-l-histoire/constitution-de-1875-iiie-republique',
    localSourcePath:
      '/constitution-archive/constitution-de-1875-iiie-republique.html',
    summary:
      'Constitutional Laws of 1875 belongs to the Third Republic period. The original French text is preserved here as a source document for reading and comparison.',
    revisionGroups: [],
    sections: [
      {
        id: 'section-1-loi-du-25-f-vrier-1875-relative-l-or',
        title:
          "Loi du 25 février 1875 relative à l'organisation des pouvoirs publics",
        articles: [
          {
            id: 'a-1',
            title: 'Article 1.',
            paragraphs: [
              "Le pouvoir législatif s'exerce par deux assemblées : la Chambre des députés et le Sénat. - La Chambre des Députés est nommée par le suffrage universel, dans les conditions déterminées par la loi électorale. - La composition, le mode de nomination et les attributions du Sénat seront réglés par une loi spéciale.",
            ],
          },
          {
            id: 'a-2',
            title: 'Article 2.',
            paragraphs: [
              'Le Président de la République est élu à la majorité absolue des suffrages par le Sénat et par la Chambre des députés réunis en Assemblée nationale. Il est nommé pour sept ans. Il est rééligible.',
            ],
          },
          {
            id: 'a-3',
            title: 'Article 3.',
            paragraphs: [
              "Le président de la République a l'initiative des lois, concurremment avec les membres des deux chambres. Il promulgue les lois lorsqu'elles ont été votées par les deux chambres ; il en surveille et en assure l'exécution. - Il a le droit de faire grâce ; les amnisties ne peuvent être accordées que par une loi. - Il dispose de la force armée. - Il nomme à tous les emplois civils et militaires. - Il préside aux solennités nationales ; les envoyés et les ambassadeurs des puissances étrangères sont accrédités auprès de lui. - Chacun des actes du président de la République doit être contresigné par un ministre.",
            ],
          },
          {
            id: 'a-4',
            title: 'Article 4.',
            paragraphs: [
              "Au fur et à mesure des vacances qui se produiront à partir de la promulgation de la présente loi, le président de la République nomme, en Conseil des ministres, les conseillers d'Etat en service ordinaire. - Les conseillers d'Etat ainsi nommés ne pourront être révoqués que par décret rendu en Conseil des ministres. - Les conseillers d'Etat nommés en vertu de la loi du 24 mai 1872 ne pourront, jusqu'à l'expiration de leurs pouvoirs, être révoqués que dans la forme déterminée par cette loi. - Après la séparation de l'Assemblée nationale, la révocation ne pourra être prononcée que par une résolution du Sénat.",
            ],
          },
          {
            id: 'a-5',
            title: 'Article 5.',
            paragraphs: [
              "Le Président de la République peut, sur l'avis conforme du Sénat, dissoudre la Chambre des députés avant l'expiration légale de son mandat. - En ce cas, les collèges électoraux sont convoqués pour de nouvelles élections dans le délai de trois mois.",
            ],
          },
          {
            id: 'a-6',
            title: 'Article 6.',
            paragraphs: [
              "Les ministres sont solidairement responsables devant les chambres de la politique générale du Gouvernement, et individuellement de leurs actes personnels. - Le Président de la République n'est responsable que dans le cas de haute trahison.",
            ],
          },
          {
            id: 'a-7',
            title: 'Article 7.',
            paragraphs: [
              "En cas de vacance par décès ou pour toute autre cause, les deux chambres procèdent immédiatement à l'élection d'un nouveau Président. - Dans l'intervalle, le Conseil des ministres est investi du pouvoir exécutif.",
            ],
          },
          {
            id: 'a-8',
            title: 'Article 8.',
            paragraphs: [
              "Les chambres auront le droit, par délibérations séparées prises dans chacune à la majorité absolue des voix, soit spontanément, soit sur la demande du Président de la République, de déclarer qu'il y a lieu de réviser les lois constitutionnelles. - Après que chacune des deux chambres aura pris cette résolution, elles se réuniront en Assemblée nationale pour procéder à la révision. - Les délibérations portant révision des lois constitutionnelles, en tout ou en partie, devront être prises à la majorité absolue des membres composant l'Assemblée nationale. - Toutefois, pendant la durée des pouvoirs conférés par la loi du 20 novembre 1873 à M. le maréchal de Mac-Mahon, cette révision ne peut avoir lieu que sur proposition du Président de la République.",
            ],
          },
          {
            id: 'a-9',
            title: 'Article 9.',
            paragraphs: [
              'Le siège du pouvoir exécutif et des deux chambres est à Versailles.',
            ],
          },
        ],
      },
      {
        id: 'section-2-loi-du-24-f-vrier-1875-relative-l-or',
        title: "Loi du 24 février 1875 relative à l'organisation du Sénat",
        articles: [
          {
            id: 'a-10',
            title: 'Article 1.',
            paragraphs: [
              "Le Sénat se compose de trois cents membres : deux cent vingt-cinq élus par les départements et les colonies, et soixante-quinze élus par l'Assemblée nationale.",
            ],
          },
          {
            id: 'a-11',
            title: 'Article 2.',
            paragraphs: [
              "Les départements de la Seine et du Nord éliront chacun cinq sénateurs ; - Les départements de la Seine-Inférieure, Pas-de-Calais, Gironde, Rhône, Finistère, Côtes-du-Nord, chacun quatre sénateurs ; - La Loire-Inférieure, Saône-et-Loire, Ille-et-Vilaine, Seine-et-Oise, Isère, Puy-de-Dôme, Somme, Bouches-du-Rhône, Aisne, Loire, Manche, Maine-et-Loire, Morbihan, Dordogne, Haute-Garonne, Charente-Inférieure, Calvados, Sarthe, Hérault, Basses-Pyrénées, Gard, Aveyron, Vendée, Orne, Oise, Vosges, Allier, chacun trois sénateurs ; - Tous les autres départements, chacun deux sénateurs. - Le territoire de Belfort, les trois départements de l'Algérie, les quatre colonies de la Martinique, de la Guadeloupe, de la Réunion et des Indes françaises éliront chacun un sénateur.",
            ],
          },
          {
            id: 'a-12',
            title: 'Article 3.',
            paragraphs: [
              "Nul ne peut être sénateur s'il n'est Français, âgé de quarante ans au moins et s'il ne jouit de ses droits civils et politiques.",
            ],
          },
          {
            id: 'a-13',
            title: 'Article 4.',
            paragraphs: [
              "Les sénateurs des départements et des colonies sont élus à la majorité absolue, et, quand il y a lieu, au scrutin de liste, par un collège réuni au chef-lieu du département ou de la colonie, et composé : 1 ° des députés ; 2 ° des conseillers généraux ; 3 ° des conseillers d'arrondissement ; 4 ° des délégués élus, un par chaque conseil municipal, parmi les électeurs de la commune. - Dans l'Inde française, les membres du Conseil colonial ou des conseils locaux sont substitués aux conseillers généraux, aux conseillers d'arrondissement et aux délégués des conseils municipaux. - Ils votent au chef-lieu de chaque établissement.",
            ],
          },
          {
            id: 'a-14',
            title: 'Article 5.',
            paragraphs: [
              "Les sénateurs nommés par l'Assemblée sont élus au scrutin de liste et à la majorité absolue des suffrages.",
            ],
          },
          {
            id: 'a-15',
            title: 'Article 6.',
            paragraphs: [
              "Les sénateurs des départements et des colonies sont élus pour neuf années et renouvelables par tiers, tous les trois ans. - Au début de la première session, les départements seront divisés en trois séries, contenant chacune un égal nombre de sénateurs. Il sera procédé, par la voie du tirage au sort, à la désignation des séries qui devront être renouvelées à l'expiration de la première et de la deuxième période triennale.",
            ],
          },
          {
            id: 'a-16',
            title: 'Article 7.',
            paragraphs: [
              "Les sénateurs élus par l'Assemblée sont inamovibles. - En cas de vacance par décès, démission ou autre cause, il sera, dans les deux mois, pourvu au remplacement par le Sénat lui-même.",
            ],
          },
          {
            id: 'a-17',
            title: 'Article 8.',
            paragraphs: [
              "Le Sénat a, concurremment avec la Chambre des députés, l'initiative et la confection des lois. - Toutefois, les lois de finances doivent être, en premier lieu, déposées à la Chambre des députés et votées par elle.",
            ],
          },
          {
            id: 'a-18',
            title: 'Article 9.',
            paragraphs: [
              "Le Sénat peut être constitué en Cour de justice pour juger, soit le Président de la République, soit les ministres, et pour connaître des attentats commis contre la sûreté de l'Etat.",
            ],
          },
          {
            id: 'a-19',
            title: 'Article 10.',
            paragraphs: [
              "Il sera procédé à l'élection du Sénat un mois avant l'époque fixée par l'Assemblée nationale pour sa séparation. - Le Sénat entrera en fonctions et se constituera le jour même où l'Assemblée nationale se séparera.",
            ],
          },
          {
            id: 'a-20',
            title: 'Article 11.',
            paragraphs: [
              "La présente loi ne pourra être promulguée qu'après le vote définitif de la loi sur les pouvoirs publics.",
            ],
          },
        ],
      },
      {
        id: 'section-3-loi-constitutionnelle-du-16-juillet-',
        title:
          'Loi constitutionnelle du 16 juillet 1875 sur les rapports des pouvoirs publics',
        articles: [
          {
            id: 'a-21',
            title: 'Article 1.',
            paragraphs: [
              "Le Sénat et la Chambre des députés se réunissent chaque année le second mardi de janvier, à moins d'une convocation antérieure faite par le Président de la République. - Les deux chambres doivent être réunies en session cinq mois au moins chaque année. La session de l'une commence et finit en même temps que celle de l'autre. - Le dimanche qui suivra la rentrée, des prières publiques seront adressées à Dieu dans les églises et dans les temples pour appeler son secours sur les travaux des assemblées.",
            ],
          },
          {
            id: 'a-22',
            title: 'Article 2.',
            paragraphs: [
              "Le Président de la République prononce la clôture de la session. Il a le droit de convoquer extraordinairement les chambres. Il devra les convoquer si la demande en est faite, dans l'intervalle des sessions, par la majorité absolue des membres composant chaque chambre. - Le Président peut ajourner les chambres. Toutefois, l'ajournement ne peut excéder le terme d'un mois ni avoir lieu plus de deux fois dans la même session.",
            ],
          },
          {
            id: 'a-23',
            title: 'Article 3.',
            paragraphs: [
              "Un mois avant le terme légal des pouvoirs du Président de la République, les chambres devront être réunies en Assemblée nationale pour procéder à l'élection du nouveau Président. - A défaut de convocation, cette réunion aurait lieu de plein droit le quinzième jour avant l'expiration de ces pouvoirs. - En cas de décès ou de démission du Président de la République, les deux chambres se réunissent immédiatement et de plein droit. - Dans le cas où, par application de l'article 5 de la loi du 25 février 1875, la Chambre des députés se trouverait dissoute au moment où la présidence de la République deviendrait vacante, les collèges électoraux seraient convoqués, et le Sénat se réunirait de plein droit.",
            ],
          },
          {
            id: 'a-24',
            title: 'Article 4.',
            paragraphs: [
              "Toute assemblée de l'une des deux chambres qui serait tenue hors du temps de la session commune est illicite et nulle de plein droit, sauf le cas prévu par l'article précédent et celui où le Sénat est réuni comme Cour de justice ; et, dans ce dernier cas, il ne peut exercer que des fonctions judiciaires.",
            ],
          },
          {
            id: 'a-25',
            title: 'Article 5.',
            paragraphs: [
              "Les séances du Sénat et celles de la Chambre des députés sont publiques. - Néanmoins, chaque chambre peut se former en comité secret, sur la demande d'un certain nombre de ses membres, fixé par le règlement. - Elle décide ensuite, à la majorité absolue, si la séance doit être reprise en public sur le même sujet.",
            ],
          },
          {
            id: 'a-26',
            title: 'Article 6.',
            paragraphs: [
              "Le Président de la République communique avec les chambres par des messages qui sont lus à la tribune par un ministre. - Les ministres ont leur entrée dans les deux chambres et doivent être entendus quand ils le demandent. Ils peuvent se faire assister par des commissaires désignés, pour la discussion d'un projet de loi déterminé, par décret du Président de la République.",
            ],
          },
          {
            id: 'a-27',
            title: 'Article 7.',
            paragraphs: [
              "Le Président de la République promulgue les lois dans le mois qui suit la transmission au Gouvernement de la loi définitivement adoptée. Il doit promulguer dans les trois jours les lois dont la promulgation, par un vote exprès de l'une et l'autre chambres, aura été déclarée urgente. - Dans le délai fixé par la promulgation, le Président de la République peut, par un message motivé, demander aux deux chambres une nouvelle délibération qui ne peut être refusée.",
            ],
          },
          {
            id: 'a-28',
            title: 'Article 8.',
            paragraphs: [
              "Le Président de la République négocie et ratifie les traités. Il en donne connaissance aux Chambres aussitôt que l'intérêt et la sûreté de l'Etat le permettent. - Les traités de paix, de commerce, les traités qui engagent les finances de l'Etat, ceux qui sont relatifs à l'état des personnes et au droit de propriété des Français à l'étranger, ne sont définitifs qu'après avoir été votés par les deux chambres. Nulle cession, nul échange, nulle adjonction de territoire ne peut avoir lieu qu'en vertu d'une loi.",
            ],
          },
          {
            id: 'a-29',
            title: 'Article 9.',
            paragraphs: [
              "Le Président de la République ne peut déclarer la guerre sans l'assentiment préalable des deux chambres.",
            ],
          },
          {
            id: 'a-30',
            title: 'Article 10.',
            paragraphs: [
              "Chacune des chambres est juge de l'éligibilité de ses membres et de la régularité de l'élection ; elle peut, seule, recevoir leur démission.",
            ],
          },
          {
            id: 'a-31',
            title: 'Article 11.',
            paragraphs: [
              "Le bureau de chacune des deux chambres est élu chaque année pour la durée de la session, et pour toute session extraordinaire qui aurait lieu avant la session ordinaire de l'année suivante. - Lorsque les deux chambres se réunissent en Assemblée nationale, leur bureau se compose du président, des vice-présidents et secrétaires du Sénat.",
            ],
          },
          {
            id: 'a-32',
            title: 'Article 12.',
            paragraphs: [
              "Le Président de la République ne peut être mis en accusation que par la Chambre des députés, et ne peut être jugé que par le Sénat. - Les ministres peuvent être mis en accusation par la Chambre des députés pour crimes commis dans l'exercice de leurs fonctions. En ce cas, ils sont jugés par le Sénat. - Le Sénat peut être constitué en Cour de justice par un décret du Président de la République, rendu en Conseil des ministres, pour juger toute personne prévenue d'attentat contre la sûreté de l'Etat. - Si l'instruction est commencée par la justice ordinaire, le décret de convocation du Sénat peut être rendu jusqu'à l'arrêt de renvoi. - Une loi déterminera le mode de procéder pour l'accusation, l'instruction et le jugement.",
            ],
          },
          {
            id: 'a-33',
            title: 'Article 13.',
            paragraphs: [
              "Aucun membre de l'une ou de l'autre chambre ne peut être poursuivi ou recherché à l'occasion des opinions ou votes émis par lui dans l'exercice de ses fonctions.",
            ],
          },
          {
            id: 'a-34',
            title: 'Article 14.',
            paragraphs: [
              "Aucun membre de l'une ou de l'autre chambre ne peut, pendant la durée de la session, être poursuivi ou arrêté en matière criminelle ou correctionnelle qu'avec l'autorisation de la chambre dont il fait partie, sauf le cas de flagrant délit. - La détention ou la poursuite d'un membre de l'une ou de l'autre chambre est suspendue pendant la session, et pour toute sa durée, si la chambre le requiert.",
            ],
          },
        ],
      },
      {
        id: 'section-5-loi-du-21-juin-1879-portant-abrogati',
        title:
          "Loi du 21 juin 1879, portant abrogation de l'article 9 de la loi constitutionnelle du 25 février 1875",
        articles: [
          {
            id: 'a-35',
            title: 'Article unique.',
            paragraphs: [
              "L'article 9 de la loi constitutionnelle du 25 février 1875 est abrogé",
            ],
          },
        ],
      },
      {
        id: 'section-6-loi-du-14-ao-t-1884-portant-r-vision',
        title:
          'Loi du 14 août 1884, portant révision partielle des lois constitutionnelles',
        articles: [
          {
            id: 'a-36',
            title: 'Article 1.',
            paragraphs: [
              "Le paragraphe 2 de l'article 5 de la loi constitutionnelle du 25 février 1875, relative à l'organisation des pouvoirs publics, est modifié ainsi qu'il suit : - « En ce cas, les collèges électoraux sont réunis pour de nouvelles élections dans le délai de deux mois et la Chambre dans les dix jours qui suivront la clôture des opérations électorales. »",
            ],
          },
          {
            id: 'a-37',
            title: 'Article 2.',
            paragraphs: [
              "Le paragraphe 3 de l'article 8 de la même loi est complété ainsi qu'il suit : - « La forme républicaine du gouvernement ne peut faire l'objet d'une proposition de révision. - » Les membres des familles ayant régné sur la France sont inéligibles à la présidence de la République. \"",
            ],
          },
          {
            id: 'a-38',
            title: 'Article 3.',
            paragraphs: [
              "Les articles 1 à 7 de la loi constitutionnelle du 24 février 1875, relatifs à l'organisation du Sénat, n'auront plus le caractère constitutionnel.",
            ],
          },
          {
            id: 'a-39',
            title: 'Article 4.',
            paragraphs: [
              "Le paragraphe 3 de l'article premier de la loi constitutionnelle du 16 juillet 1875, sur les rapports des pouvoirs publics, est abrogé.",
            ],
          },
        ],
      },
      {
        id: 'section-7-loi-constitutionnelle-du-10-ao-t-192',
        title:
          'Loi constitutionnelle du 10 août 1926, complétant la loi constitutionnelle du 25 février 1875',
        articles: [
          {
            id: 'a-40',
            title: 'Article unique.',
            paragraphs: [
              "La loi constitutionnelle du 25 février 1875, relative à l'organisation des pouvoirs publics est complétée par un article ainsi conçu : - \" L'autonomie de la caisse de gestion des bons de la défense nationale et d'amortissement de la dette publique a le caractère constitutionnel.",
              "Seront affectés à cette caisse, jusqu'à l'amortissement complet des bons de la défense nationale et des titres créés par la caisse :",
              '1 ° Les recettes nettes de la vente des tabacs ;',
              '2 ° Le produit de la taxe complémentaire et exceptionnelle sur la première mutation des droits de succession et les contributions volontaires ;',
              "Le produit des ressources ci-dessus énumérées au cours du premier exercice qui suivra la promulgation de la présente loi, constitue la dotation annuelle minimum de la caisse d'amortissement.",
              '3 ° En cas d\'insuffisance des ressources ci-dessus pour assurer le service des bons gérés par la caisse et des titres créés par elle, une annuité au moins égale, inscrite au budget. "',
            ],
          },
        ],
      },
    ],
    notes: [
      {
        title: 'Reading context',
        text: 'This text comes from the Conseil constitutionnel historical archive. Notes here should help readers compare institutions, rights, and revision rules across French constitutional history.',
      },
    ],
  },
  {
    id: 'loi-du-2-novembre-1945-portant-organisation-provisoire-des-pouvoirs-publics',
    year: '1945',
    shortLabel: '1945',
    title: 'Constitutional Law of 2 November 1945',
    sourceTitle:
      'Loi constitutionnelle du 2 nov. 1945 - Gouvernement provisoire',
    regime: 'Provisional Government',
    date: '2 November 1945',
    sourceUrl:
      'https://www.conseil-constitutionnel.fr/les-constitutions-dans-l-histoire/loi-du-2-novembre-1945-portant-organisation-provisoire-des-pouvoirs-publics',
    localSourcePath:
      '/constitution-archive/loi-du-2-novembre-1945-portant-organisation-provisoire-des-pouvoirs-publics.html',
    summary:
      'Constitutional Law of 2 November 1945 belongs to the Provisional Government period. The original French text is preserved here as a source document for reading and comparison.',
    revisionGroups: [],
    sections: [
      {
        id: 'opening',
        title: 'Opening text',
        articles: [
          {
            id: 'p-1',
            title: 'Text',
            paragraphs: [
              'Le peuple français a adopté,',
              'Le Gouvernement provisoire de la République française promulgue la loi dont la teneur suit :',
            ],
          },
        ],
      },
      {
        id: 'section-1-article-1er',
        title: 'Article 1er',
        articles: [
          {
            id: 'p-3',
            title: 'Text',
            paragraphs: [
              "L'assemblée constituante, issue du scrutin du 21 octobre 1945, élit aussitôt, au scrutin public et à la majorité absolue des membres la composant, le Président du Gouvernement provisoire de la République. Celui-ci constitue son Gouvernement et le soumet à l'approbation de l'Assemblée, en même temps que le programme du Gouvernement.",
              "Le Gouvernement est responsable devant l'Assemblée ; mais le rejet d'un texte ou d'un crédit n'entraine pas sa démission. Celle-ci n'est obligatoire qu'à la suite du vote distinct d'une motion de censure intervenant au plus tôt deux jours après son dépôt sur le bureau de l'Assemblée et adoptée au moyen d'un scrutin à la tribune par la majorité absolue des membres composant l'Assemblée.",
            ],
          },
        ],
      },
      {
        id: 'section-2-article-2',
        title: 'Article 2',
        articles: [
          {
            id: 'p-5',
            title: 'Text',
            paragraphs: ["L'Assemblée établit la Constitution nouvelle."],
          },
        ],
      },
      {
        id: 'section-3-article-3',
        title: 'Article 3',
        articles: [
          {
            id: 'p-6',
            title: 'Text',
            paragraphs: [
              "La Constitution adoptée par l'assemblée sera soumise à l'approbation du corps électoral des citoyens français, par voie de referendum, dans le mois qui suivra son adoption par l'assemblée.",
            ],
          },
        ],
      },
      {
        id: 'section-4-article-4',
        title: 'Article 4',
        articles: [
          {
            id: 'p-7',
            title: 'Text',
            paragraphs: [
              "L'Assemblée a le pouvoir législatif. Elle a l'initiative des lois, concurremment avec le Gouvernement.",
              "Dans le délai d'un mois imparti pour la promulgation des lois, le Gouvernement a le droit de demander une seconde délibération. Si, à la suite de celle-ci, le premier vote est confirmé à la majorité absolue des membres composant l'Assemblée, la loi est promulguée dans les trois jours.",
            ],
          },
        ],
      },
      {
        id: 'section-5-article-5',
        title: 'Article 5',
        articles: [
          {
            id: 'p-9',
            title: 'Text',
            paragraphs: [
              "L'Assemblée vote le budget, mais elle ne peut prendre l'initiative des dépenses.",
            ],
          },
        ],
      },
      {
        id: 'section-6-article-6',
        title: 'Article 6',
        articles: [
          {
            id: 'p-10',
            title: 'Text',
            paragraphs: [
              "Les pouvoirs de l'Assemblée expireront le jour de la mise en application de la nouvelle Constitution et, au plus tard, sept mois après la première réunion de l'Assemblée.",
            ],
          },
        ],
      },
      {
        id: 'section-7-article-7',
        title: 'Article 7',
        articles: [
          {
            id: 'p-11',
            title: 'Text',
            paragraphs: [
              "Au cas où le corps électoral rejetterait la Constitution établit par l'Assemblée, ou au cas où celle-ci n'en aurait établi aucune dans le délai fixé à l'article 6, il serait procédé aussitôt, et dans les mêmes formes, à l'élection d'une nouvelle Assemblée constituante jouissant des mêmes pouvoirs, qui se réunirait de plein droit le deuxième mardi après son élection.",
            ],
          },
        ],
      },
      {
        id: 'section-8-article-8',
        title: 'Article 8',
        articles: [
          {
            id: 'p-12',
            title: 'Text',
            paragraphs: [
              "La présente loi, adoptée par le peuple français, aura force constitutionnelle et sera exécutée comme loi de l'État.",
              'Fait à Paris, le 2 novembre 1945.',
            ],
          },
        ],
      },
    ],
    notes: [
      {
        title: 'Reading context',
        text: 'This text comes from the Conseil constitutionnel historical archive. Notes here should help readers compare institutions, rights, and revision rules across French constitutional history.',
      },
    ],
  },
  {
    id: 'constitution-de-1946-ive-republique',
    year: '1946',
    shortLabel: '1946',
    title: 'Constitution of 1946',
    sourceTitle: 'Constitution de 1946, IVe République - 27 octobre 1946',
    regime: 'Fourth Republic',
    date: '27 October 1946',
    sourceUrl:
      'https://www.conseil-constitutionnel.fr/les-constitutions-dans-l-histoire/constitution-de-1946-ive-republique',
    localSourcePath:
      '/constitution-archive/constitution-de-1946-ive-republique.html',
    summary:
      'Constitution of 1946 belongs to the Fourth Republic period. The original French text is preserved here as a source document for reading and comparison.',
    revisionGroups: [],
    sections: [
      {
        id: 'section-1-pr-ambule',
        title: 'Préambule',
        articles: [
          {
            id: 'p-1',
            title: 'Text',
            paragraphs: [
              "Au lendemain de la victoire remportée par les peuples libres sur les régimes qui ont tenté d'asservir et de dégrader la personne humaine, le peuple français proclame à nouveau que tout être humain, sans distinction de race, de religion ni de croyance, possède des droits inaliénables et sacrés. Il réaffirme solennellement les droits et libertés de l'homme et du citoyen consacrés par la Déclaration des droits de 1789 et les principes fondamentaux reconnus par les lois de la République.",
              'Il proclame, en outre, comme particulièrement nécessaires à notre temps, les principes politiques, économiques et sociaux ci-après :',
              "La loi garantit à la femme, dans tous les domaines, des droits égaux à ceux de l'homme.",
              "Tout homme persécuté en raison de son action en faveur de la liberté a droit d'asile sur les territoires de la République.",
              "Chacun a le devoir de travailler et le droit d'obtenir un emploi. Nul ne peut être lésé, dans son travail ou son emploi, en raison de ses origines, de ses opinions ou de ses croyances.",
              "Tout homme peut défendre ses droits et ses intérêts par l'action syndicale et adhérer au syndicat de son choix.",
              "Le droit de grève s'exerce dans le cadre des lois qui le réglementent.",
              "Tout travailleur participe, par l'intermédiaire de ses délégués, à la détermination collective des conditions de travail ainsi qu'à la gestion des entreprises.",
              "Tout bien, toute entreprise, dont l'exploitation a ou acquiert les caractères d'un service public national ou d'un monopole de fait, doit devenir la propriété de la collectivité.",
              "La Nation assure à l'individu et à la famille les conditions nécessaires à leur développement.",
              "Elle garantit à tous, notamment à l'enfant, à la mère et aux vieux travailleurs, la protection de la santé, la sécurité matérielle, le repos et les loisirs. Tout être humain qui, en raison de son âge, de son état physique ou mental, de la situation économique, se trouve dans l'incapacité de travailler a le droit d'obtenir de la collectivité des moyens convenables d'existence.",
              "La Nation proclame la solidarité et l'égalité de tous les Français devant les charges qui résultent des calamités nationales.",
              "La Nation garantit l'égal accès de l'enfant et de l'adulte à l'instruction, à la formation professionnelle et à la culture. L'organisation de l'enseignement public gratuit et laïque à tous les degrés est un devoir de l'Etat.",
              "La République française, fidèle à ses traditions, se conforme aux règles du droit public international. Elle n'entreprendra aucune guerre dans des vues de conquête et n'emploiera jamais ses forces contre la liberté d'aucun peuple.",
              "Sous réserve de réciprocité, la France consent aux limitations de souveraineté nécessaires à l'organisation et à la défense de la paix.",
              "La France forme avec les peuples d'outre-mer une Union fondée sur l'égalité des droits et des devoirs, sans distinction de race ni de religion.",
              "L'Union française est composée de nations et de peuples qui mettent en commun ou coordonnent leurs ressources et leurs efforts pour développer leurs civilisations respectives, accroître leur bien-être et assurer leur sécurité.",
              "Fidèle à sa mission traditionnelle, la France entend conduire les peuples dont elle a pris la charge à la liberté de s'administrer eux-mêmes et de gérer démocratiquement leurs propres affaires ; écartant tout système de colonisation fondé sur l'arbitraire, elle garantit à tous l'égal accès aux fonctions publiques et l'exercice individuel ou collectif des droits et libertés proclamés ou confirmés ci-dessus.",
            ],
          },
        ],
      },
      {
        id: 'section-3-titre-i-de-la-souverainet',
        title: 'Titre I - De la Souveraineté',
        articles: [
          {
            id: 'a-1',
            title: 'Article 1.',
            paragraphs: [
              'La France est une République indivisible, laïque, démocratique et sociale.',
            ],
          },
          {
            id: 'a-2',
            title: 'Article 2.',
            paragraphs: [
              "L'emblème national est le drapeau tricolore, bleu, blanc, rouge à trois bandes verticales d'égales dimensions.",
              "L'hymne national est la Marseillaise.",
              'La devise de la République est : « Liberté, Egalité, Fraternité. »',
              'Son principe est : gouvernement du peuple, pour le peuple et par le peuple.',
            ],
          },
          {
            id: 'a-3',
            title: 'Article 3.',
            paragraphs: [
              'La souveraineté nationale appartient au peuple français.',
              "Aucune section du peuple ni aucun individu ne peut s'en attribuer l'exercice.",
              "Le peuple l'exerce, en matière constitutionnelle, par le vote de ses représentants et par le référendum.",
              "En toutes autres matières, il l'exerce par ses députés à l'Assemblée nationale, élus au suffrage universel, égal, direct et secret.",
            ],
          },
          {
            id: 'a-4',
            title: 'Article 4.',
            paragraphs: [
              'Sont électeurs, dans les conditions déterminées par la loi, tous les nationaux et ressortissants français majeurs des deux sexes, jouissant de leurs droits civils et politiques.',
            ],
          },
        ],
      },
      {
        id: 'section-4-titre-ii-du-parlement',
        title: 'Titre II - Du Parlement',
        articles: [
          {
            id: 'a-5',
            title: 'Article 5.',
            paragraphs: [
              "Le Parlement se compose de l'Assemblée nationale et du Conseil de la République.",
            ],
          },
          {
            id: 'a-6',
            title: 'Article 6.',
            paragraphs: [
              "La durée des pouvoirs de chaque assemblée, son mode d'élection, les conditions d'éligibilité, le régime des inéligibilités et incompatibilités sont déterminés par la loi.",
              "Toutefois, les deux Chambres sont élues sur une base territoriale, l'Assemblée nationale au suffrage universel direct, le Conseil de la République par les collectivités communales et départementales, au suffrage universel indirect. Le Conseil de la République est renouvelable par moitié.",
              "Néanmoins, l'Assemblée nationale peut élire elle-même à la représentation proportionnelle des conseillers dont le nombre ne doit pas excéder le sixième du nombre total des membres du Conseil de la République.",
              'Le nombre des membres du Conseil de la République ne peut être inférieur à deux cent cinquante ni supérieur à trois cent vingt.',
            ],
          },
          {
            id: 'a-7',
            title: 'Article 7.',
            paragraphs: [
              "La guerre ne peut être déclarée sans un vote de l'Assemblée nationale et l'avis préalable du Conseil de la République.",
            ],
          },
          {
            id: 'a-8',
            title: 'Article 8.',
            paragraphs: [
              "Chacune des deux Chambres est juge de l'éligibilité de ses membres et de la régularité de leur élection ; elle peut seule recevoir leur démission.",
            ],
          },
          {
            id: 'a-9',
            title: 'Article 9.',
            paragraphs: [
              "L'Assemblée nationale se réunit de plein droit en session annuelle le second mardi de janvier.",
              'La durée totale des interruptions de la session ne peut excéder quatre mois. Sont considérés comme interruptions de séances les ajournements de session supérieurs à dix jours.',
              "Le Conseil de la République siège en même temps que l'Assemblée nationale.",
            ],
          },
          {
            id: 'a-10',
            title: 'Article 10.',
            paragraphs: [
              'Les séances des deux Chambres sont publiques. Les comptes rendus in extenso des débats ainsi que les documents parlementaires sont publiés au Journal officiel.',
              'Chacune des deux Chambres peut se constituer en comité secret.',
            ],
          },
          {
            id: 'a-11',
            title: 'Article 11.',
            paragraphs: [
              'Chacune des deux Chambres élit son bureau chaque année, au début de la session, à la représentation proportionnelle des groupes.',
              "Lorsque les deux Chambres se réunissent pour l'élection du président de la République, leur bureau est celui de l'Assemblée nationale.",
            ],
          },
          {
            id: 'a-12',
            title: 'Article 12.',
            paragraphs: [
              "Quand l'Assemblée nationale ne siège pas, son bureau, contrôlant l'action du Cabinet, peut convoquer le Parlement ; il doit le faire à la demande du tiers des députés ou à celle du président du Conseil des ministres.",
            ],
          },
          {
            id: 'a-13',
            title: 'Article 13.',
            paragraphs: [
              "L'Assemblée nationale vote seule la loi. Elle ne peut déléguer ce droit.",
            ],
          },
          {
            id: 'a-14',
            title: 'Article 14.',
            paragraphs: [
              "Le président du Conseil des ministres et les membres du Parlement ont l'initiative des lois.",
              "Les projets de loi et les propositions de loi formulés par les membres de l'Assemblée nationale sont déposés sur le bureau de celle-ci.",
              "Les propositions de loi formulées par les membres du Conseil de la République sont déposées sur le bureau de celui-ci et transmises sans débat au bureau de l'Assemblée nationale. Elles ne sont pas recevables lorsqu'elles auraient pour conséquence une diminution de recettes ou une création de dépenses.",
            ],
          },
          {
            id: 'a-15',
            title: 'Article 15.',
            paragraphs: [
              "L'Assemblée nationale étudie les projets et propositions de loi dont elle est saisie, dans des commissions dont elle fixe le nombre, la composition et la compétence.",
            ],
          },
          {
            id: 'a-16',
            title: 'Article 16.',
            paragraphs: [
              "L'Assemblée nationale est saisie du projet de budget.",
              'Cette loi ne pourra comprendre que les dispositions strictement financières.',
              'Une loi organique réglera le mode de présentation du budget.',
            ],
          },
          {
            id: 'a-17',
            title: 'Article 17.',
            paragraphs: [
              "Les députés à l'Assemblée nationale possèdent l'initiative des dépenses.",
              'Toutefois, aucune proposition tendant à augmenter les dépenses prévues ou à créer des dépenses nouvelles ne pourra être présentée lors de la discussion du budget, des crédits prévisionnels et supplémentaires.',
            ],
          },
          {
            id: 'a-18',
            title: 'Article 18.',
            paragraphs: [
              "L'Assemblée nationale règle les comptes de la Nation.",
              'Elle est, à cet effet, assistée par la Cour des comptes.',
              "L'Assemblée nationale peut charger la Cour des comptes de toutes enquêtes et études se rapportant à l'exécution des recettes et des dépenses publiques ou à la gestion de la Trésorerie.",
            ],
          },
          {
            id: 'a-19',
            title: 'Article 19.',
            paragraphs: ["L'amnistie ne peut être accordée que par une loi."],
          },
          {
            id: 'a-20',
            title: 'Article 20.',
            paragraphs: [
              "Le Conseil de la République examine, pour avis, les projets et propositions de loi votés en première lecture par l'Assemblée nationale.",
              "Il donne son avis au plus tard dans les deux mois qui suivent la transmission par l'Assemblée nationale. Quand il s'agit de la loi du budget, ce délai est abrégé, le cas échéant, de façon à ne pas excéder le temps utilisé par l'Assemblée nationale pour son examen et son vote. Quand l'Assemblée nationale décide l'adoption d'une procédure d'urgence, le Conseil de la République donne son avis dans le même délai que celui prévu pour les débats de l'Assemblée nationale par le règlement de celle-ci. Les délais prévus au présent article sont suspendus pendant les interruptions de session. Ils peuvent être prolongés par décision de l'Assemblée nationale.",
              "Si l'avis du Conseil de la République est conforme ou s'il n'a pas été donné dans les délais prévus à l'alinéa précédent, la loi est promulguée dans le texte voté par l'Assemblée nationale.",
              "Si l'avis n'est pas conforme, l'Assemblée nationale examine le projet ou la proposition de loi en seconde lecture. Elle statue définitivement et souverainement sur les seuls amendements proposés par le Conseil de la République, en les acceptant ou en les rejetant en tout ou en partie. En cas de rejet total ou partiel de ces amendements, le vote en seconde lecture de la loi a lieu au scrutin public, à la majorité absolue des membres composant l'Assemblée nationale, lorsque le vote sur l'ensemble a été émis par le Conseil de la République dans les mêmes conditions.",
            ],
          },
          {
            id: 'a-21',
            title: 'Article 21.',
            paragraphs: [
              "Aucun membre du Parlement ne peut être poursuivi, recherché, arrêté, détenu ou jugé à l'occasion des opinions ou votes émis par lui dans l'exercice de ses fonctions.",
            ],
          },
          {
            id: 'a-22',
            title: 'Article 22.',
            paragraphs: [
              "Aucun membre du Parlement ne peut, pendant la durée de son mandat, être poursuivi ou arrêté en matière criminelle ou correctionnelle qu'avec l'autorisation de la Chambre dont il fait partie, sauf le cas de flagrant délit. La détention ou la poursuite d'un membre du Parlement est suspendue si la Chambre dont il fait partie le requiert.",
            ],
          },
          {
            id: 'a-23',
            title: 'Article 23.',
            paragraphs: [
              "Les membres du Parlement perçoivent une indemnité fixée par référence au traitement d'une catégorie de fonctionnaires.",
            ],
          },
          {
            id: 'a-24',
            title: 'Article 24.',
            paragraphs: [
              "Nul ne peut appartenir à la fois à l'Assemblée nationale et au Conseil de la République.",
              "Les membres du Parlement ne peuvent faire partie du Conseil économique, ni de l'Assemblée de l'Union française.",
            ],
          },
        ],
      },
      {
        id: 'section-5-titre-iii-du-conseil-conomique',
        title: 'Titre III - Du Conseil économique',
        articles: [
          {
            id: 'a-25',
            title: 'Article 25.',
            paragraphs: [
              "Un Conseil économique, dont le statut est réglé par la loi, examine, pour avis, les projets et propositions de loi de sa compétence. Ces projets lui sont soumis par l'Assemblée nationale avant qu'elle n'en délibère.",
              "Le Conseil économique peut, en outre, être consulté par le Conseil des ministres. Il l'est obligatoirement sur l'établissement d'un plan économique national ayant pour objet le plein emploi des hommes et l'utilisation rationnelle des ressources matérielles.",
            ],
          },
        ],
      },
      {
        id: 'section-6-titre-iv-des-trait-s-diplomatiques',
        title: 'Titre IV - Des traités diplomatiques',
        articles: [
          {
            id: 'a-26',
            title: 'Article 26.',
            paragraphs: [
              "Les traités diplomatiques régulièrement ratifiés et publiés ont force de loi dans le cas même où ils seraient contraires à des lois françaises, sans qu'il soit besoin pour en assurer l'application d'autres dispositions législatives que celles qui auraient été nécessaires pour assurer leur ratification.",
            ],
          },
          {
            id: 'a-27',
            title: 'Article 27.',
            paragraphs: [
              "Les traités relatifs à l'organisation internationale, les traités de paix, de commerce, les traités qui engagent les finances de l'Etat, ceux qui sont relatifs à l'état des personnes et au droit de propriété des Français à l'étranger, ceux qui modifient les lois internes françaises, ainsi que ceux qui comportent cession, échange, adjonction de territoire, ne sont définitifs qu'après avoir été ratifiés en vertu d'une loi.",
              "Nulle cession, nul échange, nulle adjonction de territoire n'est valable sans le consentement des populations intéressées.",
            ],
          },
          {
            id: 'a-28',
            title: 'Article 28.',
            paragraphs: [
              "Les traités diplomatiques régulièrement ratifiés et publiés ayant une autorité supérieure à celle des lois internes, leurs dispositions ne peuvent être abrogées, modifiées ou suspendues qu'à la suite d'une dénonciation régulière, notifiée par voie diplomatique. Lorsqu'il s'agit d'un des traités visés à l'article 27, la dénonciation doit être autorisée par l'Assemblée nationale, exception faite pour les traités de commerce.",
            ],
          },
        ],
      },
      {
        id: 'section-7-titre-v-du-pr-sident-de-la-r-publiqu',
        title: 'Titre V - Du Président de la République',
        articles: [
          {
            id: 'a-29',
            title: 'Article 29.',
            paragraphs: [
              'Le président de la République est élu par le Parlement.',
              "Il est élu pour sept ans. Il n'est rééligible qu'une fois.",
            ],
          },
          {
            id: 'a-30',
            title: 'Article 30.',
            paragraphs: [
              "Le président de la République nomme en Conseil des ministres les conseillers d'Etat, le grand chancelier de la Légion d'honneur, les ambassadeurs et les envoyés extraordinaires, les membres du Conseil supérieur et du Comité de la défense nationale, les recteurs des universités, les préfets, les directeurs des administrations centrales, les officiers généraux, les représentants du Gouvernement dans les territoires d'outre-mer.",
            ],
          },
          {
            id: 'a-31',
            title: 'Article 31.',
            paragraphs: [
              'Le président de la République est tenu informé des négociations internationales. Il signe et ratifie les traités.',
              'Le président de la République accrédite les ambassadeurs et les envoyés extraordinaires auprès des puissances étrangères ; les ambassadeurs et les envoyés extraordinaires étrangers sont accrédités auprès de lui.',
            ],
          },
          {
            id: 'a-32',
            title: 'Article 32.',
            paragraphs: [
              'Le président de la République préside le Conseil des ministres. Il fait établir et conserve les procès-verbaux des séances.',
            ],
          },
          {
            id: 'a-33',
            title: 'Article 33.',
            paragraphs: [
              'Le président de la République préside, avec les mêmes attributions, le Conseil supérieur et le Comité de la défense nationale et prend le titre de chef des armées.',
            ],
          },
          {
            id: 'a-34',
            title: 'Article 34.',
            paragraphs: [
              'Le président de la République préside le Conseil supérieur de la magistrature.',
            ],
          },
          {
            id: 'a-35',
            title: 'Article 35.',
            paragraphs: [
              'Le président de la République exerce le droit de grâce en Conseil supérieur de la magistrature.',
            ],
          },
          {
            id: 'a-36',
            title: 'Article 36.',
            paragraphs: [
              "Le président de la République promulgue les lois dans les dix jours qui suivent la transmission au Gouvernement de la loi définitivement adoptée. Ce délai est réduit à cinq jours en cas d'urgence déclarée par l'Assemblée nationale.",
              'Dans le délai fixé pour la promulgation, le président de la République peut, par un message motivé, demander aux deux Chambres une nouvelle délibération, qui ne peut être refusée.',
              "A défaut de promulgation par le président de la République dans les délais fixés par la présente Constitution, il y sera pourvu par le président de l'Assemblée nationale.",
            ],
          },
          {
            id: 'a-37',
            title: 'Article 37.',
            paragraphs: [
              "Le président de la République communique avec le Parlement par des messages adressés à l'Assemblée nationale.",
            ],
          },
          {
            id: 'a-38',
            title: 'Article 38.',
            paragraphs: [
              'Chacun des actes du président de la République doit être contresigné par le président du Conseil des ministres et par un ministre.',
            ],
          },
          {
            id: 'a-39',
            title: 'Article 39.',
            paragraphs: [
              "Trente jours au plus, quinze jours au moins avant l'expiration des pouvoirs du président de la République, le Parlement procède à l'élection du nouveau président.",
            ],
          },
          {
            id: 'a-40',
            title: 'Article 40.',
            paragraphs: [
              "Si, en application de l'article précédent, l'élection doit avoir lieu dans une période où l'Assemblée nationale est dissoute conformément à l'article 51, les pouvoirs du président de la République en exercice sont prorogés jusqu'à l'élection du nouveau président. Le Parlement procède à l'élection de ce nouveau président dans les dix jours de l'élection de la nouvelle Assemblée nationale.",
              "Dans ce cas, la désignation du président du Conseil des ministres a lieu dans les quinze jours qui suivent l'élection du nouveau président de la République.",
            ],
          },
          {
            id: 'a-41',
            title: 'Article 41.',
            paragraphs: [
              "En cas d'empêchement dûment constaté par un vote du Parlement, en cas de vacance par décès, démission ou toute autre cause, le président de l'Assemblée nationale assure provisoirement l'intérim des fonctions de président de la République ; il sera remplacé dans ses fonctions par un vice-président.",
              "Le nouveau président de la République est élu dans les dix jours, sauf ce qui est dit à l'article précédent.",
            ],
          },
          {
            id: 'a-42',
            title: 'Article 42.',
            paragraphs: [
              "Le président de la République n'est responsable que dans le cas de haute trahison.",
              "Il peut être mis en accusation par l'Assemblée nationale et renvoyé devant la Haute Cour de justice dans les conditions prévues à l'article 57 ci-dessous.",
            ],
          },
          {
            id: 'a-43',
            title: 'Article 43.',
            paragraphs: [
              'La charge de président de la République est incompatible avec toute autre fonction publique.',
            ],
          },
          {
            id: 'a-44',
            title: 'Article 44.',
            paragraphs: [
              'Les membres des familles ayant régné sur la France sont inéligibles à la Présidence de la République.',
            ],
          },
        ],
      },
      {
        id: 'section-8-titre-vi-du-conseil-des-ministres',
        title: 'Titre VI - Du Conseil des ministres',
        articles: [
          {
            id: 'a-45',
            title: 'Article 45.',
            paragraphs: [
              "Au début de chaque législature, le président de la République, après les consultations d'usage, désigne le président du Conseil.",
              "Celui-ci soumet à l'Assemblée nationale le programme et la politique du Cabinet qu'il se propose de constituer.",
              "Le président du Conseil et les ministres ne peuvent être nommés qu'après que le président du Conseil ait été investi de la confiance de l'Assemblée au scrutin public et à la majorité absolue des députés, sauf cas de force majeure empêchant la réunion de l'Assemblée nationale.",
              "Il en est de même au cours de la législature, en cas de vacance par décès, démission ou toute autre cause, sauf en ce qui est dit à l'article 52 ci-dessous.",
              "Aucune crise ministérielle intervenant dans le délai de quinze jours de la nomination des ministres ne compte pour l'application de l'article 51.",
            ],
          },
          {
            id: 'a-46',
            title: 'Article 46.',
            paragraphs: [
              'Le président du Conseil et les ministres choisis par lui sont nommés par décret du président de la République.',
            ],
          },
          {
            id: 'a-47',
            title: 'Article 47.',
            paragraphs: [
              "Le président du Conseil des ministres assure l'exécution des lois.",
              'Il nomme à tous les emplois civils et militaires, sauf ceux prévus par les articles 30, 46 et 84.',
              'Le président du Conseil assure la direction des forces armées et coordonne la mise en oeuvre de la défense nationale.',
              'Les actes du président du Conseil des ministres prévus au présent article sont contresignés par les ministres intéressés.',
            ],
          },
          {
            id: 'a-48',
            title: 'Article 48.',
            paragraphs: [
              "Les ministres sont collectivement responsables devant l'Assemblée nationale de la politique générale du Cabinet et individuellement de leurs actes personnels.",
              'Ils ne sont pas responsables devant le Conseil de la République.',
            ],
          },
          {
            id: 'a-49',
            title: 'Article 49.',
            paragraphs: [
              "La question de confiance ne peut être posée qu'après délibération du Conseil des ministres ; elle ne peut l'être que par le président du Conseil.",
              "Le vote sur la question de confiance ne peut intervenir qu'un jour franc après qu'elle a été posée devant l'Assemblée. Il a lieu au scrutin public.",
              "La confiance ne peut être refusée au Cabinet qu'à la majorité absolue des députés à l'Assemblée.",
              'Ce refus entraîne la démission collective du Cabinet.',
            ],
          },
          {
            id: 'a-50',
            title: 'Article 50.',
            paragraphs: [
              "Le vote par l'Assemblée nationale d'une motion de censure entraîne la démission collective du Cabinet.",
              "Ce vote ne peut intervenir qu'un jour franc après le dépôt de la motion. Il a lieu au scrutin public.",
              "La motion de censure ne peut être adoptée qu'à la majorité absolue des députés à l'Assemblée.",
            ],
          },
          {
            id: 'a-51',
            title: 'Article 51.',
            paragraphs: [
              "Si, au cours d'une même période de dix-huit mois, deux crises ministérielles surviennent dans les conditions prévues aux articles 49 et 50, la dissolution de l'Assemblée nationale pourra être décidée en Conseil des ministres, après avis du président de l'Assemblée. La dissolution sera prononcée, conformément à cette décision, par décret du président de la République.",
              "Les dispositions de l'alinéa précédent ne sont applicables qu'à l'expiration des dix-huit premiers mois de la législature.",
            ],
          },
          {
            id: 'a-52',
            title: 'Article 52.',
            paragraphs: [
              "En cas de dissolution, le Cabinet, à l'exception du président du Conseil et du ministre de l'intérieur, reste en fonction pour expédier les affaires courantes.",
              "Le président de la République désigne le président de l'Assemblée nationale comme président du Conseil. Celui-ci désigne le nouveau ministre de l'intérieur en accord avec le bureau de l'Assemblée nationale. Il désigne comme ministres d'Etat des membres des groupes non représentés au Gouvernement.",
              'Les élections générales ont lieu vingt jours au moins, trente jours au plus après la dissolution.',
              "L'Assemblée nationale se réunit de plein droit le troisième jeudi qui suit son élection.",
            ],
          },
          {
            id: 'a-53',
            title: 'Article 53.',
            paragraphs: [
              'Les ministres ont accès aux deux Chambres et à leurs commissions. Ils doivent être entendus quand ils le demandent.',
              'Ils peuvent se faire assister dans les discussions devant les Chambres par des commissaires désignés par décret.',
            ],
          },
          {
            id: 'a-54',
            title: 'Article 54.',
            paragraphs: [
              'Le président du Conseil des ministres peut déléguer ses pouvoirs à un ministre.',
            ],
          },
          {
            id: 'a-55',
            title: 'Article 55.',
            paragraphs: [
              "En cas de vacance par décès ou pour toute autre cause, le Conseil des ministres charge un de ses membres d'exercer provisoirement les fonctions de président du Conseil des ministres.",
            ],
          },
        ],
      },
      {
        id: 'section-9-titre-vii-de-la-responsabilit-p-nale',
        title: 'Titre VII - De la responsabilité pénale des ministres',
        articles: [
          {
            id: 'a-56',
            title: 'Article 56.',
            paragraphs: [
              "Les ministres sont pénalement responsables des crimes et délits commis dans l'exercice de leurs fonctions.",
            ],
          },
          {
            id: 'a-57',
            title: 'Article 57.',
            paragraphs: [
              "Les ministres peuvent être mis en accusation par l'Assemblée nationale et renvoyés devant la Haute Cour de justice.",
              "L'Assemblée nationale statue au scrutin secret et à la majorité absolue des membres la composant, à l'exception de ceux qui seraient appelés à participer à la poursuite, à l'instruction et au jugement.",
            ],
          },
          {
            id: 'a-58',
            title: 'Article 58.',
            paragraphs: [
              "La Haute Cour est élue par l'Assemblée nationale au début de chaque législature.",
            ],
          },
          {
            id: 'a-59',
            title: 'Article 59.',
            paragraphs: [
              "L'organisation de la Haute Cour de justice et la procédure suivie sont déterminées par une loi spéciale.",
            ],
          },
        ],
      },
      {
        id: 'section-11-section-i-principes',
        title: 'Section I. - Principes.',
        articles: [
          {
            id: 'a-60',
            title: 'Article 60.',
            paragraphs: [
              "L'Union française est formée, d'une part, de la République française qui comprend la France métropolitaine, les départements et territoires d'outre-mer, d'autre part, des territoires et Etats associés.",
            ],
          },
          {
            id: 'a-61',
            title: 'Article 61.',
            paragraphs: [
              "La situation des États associés dans l'Union française résulte pour chacun d'eux de l'acte qui définit ses rapports avec la France.",
            ],
          },
          {
            id: 'a-62',
            title: 'Article 62.',
            paragraphs: [
              "Les membres de l'Union française mettent en commun la totalité de leurs moyens pour garantir la défense de l'ensemble de l'Union. Le Gouvernement de la République assume la coordination de ces moyens et la direction de la politique propre à préparer et à assurer cette défense.",
            ],
          },
        ],
      },
      {
        id: 'section-12-section-ii-organisation',
        title: 'Section II. - Organisation.',
        articles: [
          {
            id: 'a-63',
            title: 'Article 63.',
            paragraphs: [
              "Les organes centraux de l'Union française sont la présidence, le Haut Conseil et l'Assemblée.",
            ],
          },
          {
            id: 'a-64',
            title: 'Article 64.',
            paragraphs: [
              "Le président de la République française est président de l'Union française, dont il représente les intérêts permanents.",
            ],
          },
          {
            id: 'a-65',
            title: 'Article 65.',
            paragraphs: [
              "Le Haut Conseil de l'Union française est composé, sous la présidence du président de l'Union, d'une délégation du Gouvernement français et de la représentation que chacun des Etats associés a la faculté de désigner auprès du président de l'Union.",
              "Il a pour fonction d'assister le Gouvernement dans la conduite générale de l'Union.",
            ],
          },
          {
            id: 'a-66',
            title: 'Article 66.',
            paragraphs: [
              "L'Assemblée de l'Union française est composée, pour moitié, de membres représentant la France métropolitaine et, par moitié, de membres représentant les départements et territoires d'outre-mer et les Etats associés.",
              'Une loi organique déterminera dans quelles conditions pourront être représentées les diverses parties de la population.',
            ],
          },
          {
            id: 'a-67',
            title: 'Article 67.',
            paragraphs: [
              "Les membres de l'Assemblée de l'Union sont élus par les assemblées territoriales en ce qui concerne les départements et territoires d'outre-mer ; ils sont élus, en ce qui concerne la France métropolitaine, à raison de deux tiers par les membres de l'Assemblée nationale représentant la métropole et d'un tiers par les membres du Conseil de la République représentant la métropole.",
            ],
          },
          {
            id: 'a-68',
            title: 'Article 68.',
            paragraphs: [
              "Les Etats associés peuvent désigner les délégués à l'Assemblée de l'Union dans des limites et des conditions fixées par une loi et un acte intérieur de chaque Etat.",
            ],
          },
          {
            id: 'a-69',
            title: 'Article 69.',
            paragraphs: [
              "Le président de l'Union française convoque l'Assemblée de l'Union française et en clôt les sessions. Il doit la convoquer à la demande de la moitié de ses membres.",
              "L'Assemblée de l'Union française ne peut siéger pendant les interruptions de session du Parlement.",
            ],
          },
          {
            id: 'a-70',
            title: 'Article 70.',
            paragraphs: [
              "Les règles des articles 8, 10, 21, 22, et 23 sont applicables à l'Assemblée de l'Union française dans les mêmes conditions qu'au Conseil de la République.",
            ],
          },
          {
            id: 'a-71',
            title: 'Article 71.',
            paragraphs: [
              "L'Assemblée de l'Union française connaît des projets ou propositions qui lui sont soumis pour avis par l'Assemblée nationale ou le Gouvernement de la République française ou les gouvernements des Etats associés.",
              "L'Assemblée a qualité pour se prononcer sur les propositions de résolution qui lui sont présentées par l'un de ses membres et, si elle les prend en considération, pour charger son bureau de les transmettre à l'Assemblée nationale. Elle peut faire des propositions au Gouvernement français et au Haut Conseil de l'Union française.",
              "Pour être recevables, les propositions de résolution visées à l'alinéa précédent doivent avoir trait à la législation relative aux territoires d'outre-mer.",
            ],
          },
          {
            id: 'a-72',
            title: 'Article 72.',
            paragraphs: [
              "Dans les territoires d'outre-mer, le pouvoir législatif appartient au Parlement en ce qui concerne la législation criminelle, le régime des libertés publiques et l'organisation politique et administrative.",
              "En toutes autres matières, la loi française n'est applicable dans les territoires d'outre-mer que par disposition expresse ou si elle a été étendue par décret aux territoires d'outre-mer après avis de l'Assemblée de l'Union.",
              "En outre, par dérogation à l'article 13, des dispositions particulières à chaque territoire pourront être édictées par le président de la République en Conseil des ministres sur avis préalable de l'Assemblée de l'Union.",
            ],
          },
        ],
      },
      {
        id: 'section-13-section-iii-des-d-partements-et-terr',
        title: "Section III. - Des départements et territoires d'outre-mer.",
        articles: [
          {
            id: 'a-73',
            title: 'Article 73.',
            paragraphs: [
              "Le régime législatif des départements d'outre-mer est le même que celui des départements métropolitains, sauf exceptions déterminées par la loi.",
            ],
          },
          {
            id: 'a-74',
            title: 'Article 74.',
            paragraphs: [
              "Les territoires d'outre-mer sont dotés d'un statut particulier tenant compte de leurs intérêts propres dans l'ensemble des intérêts de la République.",
              "Ce statut et l'organisation intérieure de chaque territoire d'outre-mer ou de chaque groupe de territoires sont fixés par la loi, après avis de l'Assemblée de l'Union française et consultation des assemblées territoriales.",
            ],
          },
          {
            id: 'a-75',
            title: 'Article 75.',
            paragraphs: [
              "Les statuts respectifs des membres de la République et de l'Union française sont susceptibles d'évolution.",
              "Les modifications de statut et les passages d'une catégorie à l'autre, dans le cadre fixé par l'article 60, ne peuvent résulter que d'une loi votée par le Parlement, après consultation des assemblées territoriales et de l'Assemblée de l'Union.",
            ],
          },
          {
            id: 'a-76',
            title: 'Article 76.',
            paragraphs: [
              "Le représentant du Gouvernement dans chaque territoire ou groupe de territoires est le dépositaire des pouvoirs de la République. Il est le chef de l'administration du territoire.",
              'Il est responsable de ses actes devant le Gouvernement.',
            ],
          },
          {
            id: 'a-77',
            title: 'Article 77.',
            paragraphs: [
              'Dans chaque territoire est instituée une assemblée élue. Le régime électoral, la composition et la compétence de cette assemblée sont déterminés par la loi.',
            ],
          },
          {
            id: 'a-78',
            title: 'Article 78.',
            paragraphs: [
              'Dans les groupes de territoires, la gestion des intérêts communs est confiée à une assemblée composée de membres élus par les assemblées territoriales.',
              'Sa composition et ses pouvoirs sont fixés par la loi.',
            ],
          },
          {
            id: 'a-79',
            title: 'Article 79.',
            paragraphs: [
              "Les territoires d'outre-mer élisent des représentants à l'Assemblée nationale et au Conseil de la République dans les conditions prévues par la loi.",
            ],
          },
          {
            id: 'a-80',
            title: 'Article 80.',
            paragraphs: [
              "Tous les ressortissants des territoires d'outre-mer ont la qualité de citoyen, au même titre que les nationaux français de la métropole ou des territoires d'outre-mer. Des lois particulières établiront les conditions dans lesquelles ils exercent leurs droits de citoyens.",
            ],
          },
          {
            id: 'a-81',
            title: 'Article 81.',
            paragraphs: [
              "Tous les nationaux français et les ressortissants de l'Union française ont la qualité de citoyen de l'Union française qui leur assure la jouissance des droits et libertés garantis par le préambule de la présente Constitution.",
            ],
          },
          {
            id: 'a-82',
            title: 'Article 82.',
            paragraphs: [
              "Les citoyens qui n'ont pas le statut civil français conservent leur statut personnel tant qu'ils n'y ont pas renoncé.",
              'Ce statut ne peut en aucun cas constituer un motif pour refuser ou limiter les droits et libertés attachés à la qualité de citoyen français.',
            ],
          },
        ],
      },
      {
        id: 'section-14-titre-ix-du-conseil-sup-rieur-de-la-',
        title: 'Titre IX - Du Conseil supérieur de la magistrature',
        articles: [
          {
            id: 'a-83',
            title: 'Article 83.',
            paragraphs: [
              'Le Conseil supérieur de la magistrature est composé de quatorze membres :',
              '- le président de la République, président ;',
              '- le garde des sceaux, ministre de la justice, vice-président ;',
              "- six personnalités élues pour six ans par l'Assemblée nationale, à la majorité des deux tiers, en dehors de ses membres, six suppléants étant élus dans les mêmes conditions ;",
              '- six personnalités désignées comme suit :',
              'Quatre magistrats élus pour six ans, représentant chacune des catégories de magistrats, dans les conditions prévues par la loi, quatre suppléants étant élus dans les mêmes conditions ;',
              'Deux membres désignés pour six ans par le président de la République en dehors du Parlement et de la magistrature, mais au sein des professions judiciaires, deux suppléants étant élus dans les mêmes conditions.',
              'Les décisions du Conseil supérieur de la magistrature sont prises à la majorité des suffrages. En cas de partage des voix, celle du président est prépondérante.',
            ],
          },
          {
            id: 'a-84',
            title: 'Article 84.',
            paragraphs: [
              "Le président de la République nomme, sur présentation du Conseil supérieur de la magistrature, les magistrats, à l'exception de ceux du parquet.",
              "Le Conseil supérieur de la magistrature assure, conformément à la loi, la discipline de ces magistrats, leur indépendance et l'administration des tribunaux judiciaires.",
              'Les magistrats du siège sont inamovibles.',
            ],
          },
        ],
      },
      {
        id: 'section-15-titre-x-des-collectivit-s-territoria',
        title: 'Titre X - Des collectivités territoriales',
        articles: [
          {
            id: 'a-85',
            title: 'Article 85.',
            paragraphs: [
              "La République française, une et indivisible, reconnaît l'existence de collectivités territoriales.",
              "Ces collectivités sont les communes et départements, les territoires d'outre-mer.",
            ],
          },
          {
            id: 'a-86',
            title: 'Article 86.',
            paragraphs: [
              "Le cadre, l'étendue, le regroupement éventuel et l'organisation des communes et départements, territoires d'outre-mer, sont fixés par la loi.",
            ],
          },
          {
            id: 'a-87',
            title: 'Article 87.',
            paragraphs: [
              "Les collectivités territoriales s'administrent librement par des conseils élus au suffrage universel.",
              "L'exécution des décisions de ces conseils est assurée par leur maire ou leur président.",
            ],
          },
          {
            id: 'a-88',
            title: 'Article 88.',
            paragraphs: [
              "La coordination de l'activité des fonctionnaires de l'Etat, la représentation des intérêts nationaux et le contrôle administratif des collectivités territoriales sont assurés, dans le cadre départemental, par les délégués du Gouvernement, désignés en Conseil des ministres.",
            ],
          },
          {
            id: 'a-89',
            title: 'Article 89.',
            paragraphs: [
              "Des lois organiques étendront les libertés départementales et municipales ; elles pourront prévoir, pour certaines grandes villes, des règles de fonctionnement et des structures différentes de celles des petites communes et comporter des dispositions spéciales pour certains départements ; elles déterminent les conditions d'application des articles 85 à 88 ci-dessus.",
              "Des lois détermineront également les conditions dans lesquelles fonctionneront les services locaux des administrations centrales, de manière à rapprocher l'administration des administrés.",
            ],
          },
        ],
      },
      {
        id: 'section-16-titre-xi-de-la-r-vision-de-la-consti',
        title: 'Titre XI - De la révision de la Constitution',
        articles: [
          {
            id: 'a-90',
            title: 'Article 90.',
            paragraphs: [
              'La révision a lieu dans les formes suivantes.',
              "La révision doit être décidée par une résolution adoptée à la majorité absolue des membres composant l'Assemblée nationale.",
              "La résolution précise l'objet de la révision.",
              "Elle est soumise, dans le délai minimum de trois mois, à une deuxième lecture, à laquelle il doit être procédé dans les mêmes conditions qu'à la première, à moins que le Conseil de la République, saisi par l'Assemblée nationale, n'ait adopté à la majorité absolue la même résolution.",
              "Après cette seconde lecture, l'Assemblée nationale élabore un projet de loi portant révision de la Constitution. Ce projet est soumis au Parlement et voté à la majorité et dans les mêmes formes prévues pour la loi ordinaire.",
              "Il est soumis au référendum, sauf s'il a été adopté en seconde lecture par l'Assemblée nationale à la majorité des deux tiers ou s'il a été voté à la majorité des trois cinquièmes par chacune des deux assemblées.",
              'Le projet est promulgué comme loi constitutionnelle par le président de la République dans les huit jours de son adoption.',
              "Aucune révision constitutionnelle relative à l'existence du Conseil de la République ne pourra être réalisée sans l'accord de ce Conseil ou le recours à la procédure de référendum.",
            ],
          },
          {
            id: 'a-91',
            title: 'Article 91.',
            paragraphs: [
              'Le Comité constitutionnel est présidé par le président de la République.',
              "Il comprend le président de l'Assemblée nationale, le président du Conseil de la République, sept membres élus par l'Assemblée nationale au début de chaque session annuelle à la représentation proportionnelle des groupes, et choisis en dehors de ses membres, trois membres élus dans les mêmes conditions par le Conseil de la République.",
              "Le Comité constitutionnel examine si les lois votées par l'Assemblée nationale supposent une révision de la Constitution.",
            ],
          },
          {
            id: 'a-92',
            title: 'Article 92.',
            paragraphs: [
              'Dans le délai de promulgation de la loi, le Comité est saisi par une demande émanant conjointement du président de la République et du président du Conseil de la République, le Conseil ayant statué à la majorité absolue des membres le composant.',
              "Le Comité examine la loi, s'efforce de provoquer un accord entre l'Assemblée nationale et le Conseil de la République et, s'il n'y parvient pas, statue dans les cinq jours de la saisie. Ce délai est ramené à deux jours en cas d'urgence.",
              "Il n'est compétent que pour statuer sur la possibilité de révision des dispositions des titres Ier à X de la présente Constitution.",
            ],
          },
          {
            id: 'a-93',
            title: 'Article 93.',
            paragraphs: [
              "La loi qui, de l'avis du Comité, implique une révision de la Constitution est renvoyée à l'Assemblée nationale pour nouvelle délibération.",
              "Si le Parlement maintient son premier vote, la loi ne peut être promulguée avant que la présente Constitution n'ait été révisée dans les formes prévues à l'article 90.",
              "Si la loi est jugée conforme aux dispositions des titres Ier à X de la présente Constitution, elle est promulguée dans le délai prévu à l'article 36, celui-ci étant prolongé de la durée des délais prévus à l'article 92 ci-dessus.",
            ],
          },
          {
            id: 'a-94',
            title: 'Article 94.',
            paragraphs: [
              "Au cas d'occupation de tout ou partie du territoire métropolitain par des forces étrangères, aucune procédure de révision ne peut être engagée ou poursuivie.",
            ],
          },
          {
            id: 'a-95',
            title: 'Article 95.',
            paragraphs: [
              "La forme républicaine du gouvernement ne peut faire l'objet d'une proposition de révision.",
            ],
          },
        ],
      },
      {
        id: 'section-17-titre-xii-dispositions-transitoires',
        title: 'Titre XII - Dispositions transitoires',
        articles: [
          {
            id: 'a-96',
            title: 'Article 96.',
            paragraphs: [
              "Le bureau de l'Assemblée nationale constituante est chargé d'assurer la permanence de la représentation nationale jusqu'à la réunion des députés à la nouvelle Assemblée nationale.",
            ],
          },
          {
            id: 'a-97',
            title: 'Article 97.',
            paragraphs: [
              "Dans le cas de circonstances exceptionnelles, les députés en fonction à l'Assemblée nationale constituante pourront, jusqu'à la date prévue à l'article précédent, être réunis par le bureau de l'Assemblée, soit de sa propre initiative, soit à la demande du Gouvernement.",
            ],
          },
          {
            id: 'a-98',
            title: 'Article 98.',
            paragraphs: [
              "L'Assemblée nationale se réunira de plein droit le troisième jeudi qui suivra les élections générales.",
              'Le Conseil de la République se réunira le troisième mardi suivant son élection. La présente Constitution entrera en vigueur à partir de cette date.',
              "Jusqu'à la réunion du Conseil de la République, l'organisation des pouvoirs publics sera régie par la loi du 2 novembre 1945, l'Assemblée nationale ayant les attributions conférées par cette loi à l'Assemblée nationale constituante.",
            ],
          },
          {
            id: 'a-99',
            title: 'Article 99.',
            paragraphs: [
              "Le Gouvernement provisoire constitué en vertu de l'article 98 remettra sa démission au président de la République dès son élection par le Parlement dans les conditions fixées par l'article 29 ci-dessus.",
            ],
          },
          {
            id: 'a-100',
            title: 'Article 100.',
            paragraphs: [
              "Le bureau de l'Assemblée nationale constituante est chargé de préparer la réunion des assemblées instituées par la présente Constitution et, notamment, de leur assurer, dès avant la réunion de leurs bureaux respectifs, les locaux et les moyens administratifs nécessaires à leur fonctionnement.",
            ],
          },
          {
            id: 'a-101',
            title: 'Article 101.',
            paragraphs: [
              "Pendant un délai maximum d'un an à compter de la réunion de l'Assemblée nationale, le Conseil de la République pourra valablement délibérer dès que les deux tiers de ses membres auront été proclamés élus.",
            ],
          },
          {
            id: 'a-102',
            title: 'Article 102.',
            paragraphs: [
              "Le premier Conseil de la République sera renouvelé intégralement dans l'année qui suivra le renouvellement des conseils municipaux, qui devra intervenir dans le délai d'un an à compter de la promulgation de la Constitution.",
            ],
          },
          {
            id: 'a-103',
            title: 'Article 103.',
            paragraphs: [
              "Jusqu'à l'organisation du Conseil économique, et pendant un délai maximum de trois mois à compter de la réunion de l'Assemblée nationale, il sera sursis à l'application de l'article 25 de la présente Constitution.",
            ],
          },
          {
            id: 'a-104',
            title: 'Article 104.',
            paragraphs: [
              "Jusqu'à la réunion de l'Assemblée de l'Union française, et pendant un délai maximum d'un an mois à compter de la réunion de l'Assemblée nationale, il sera sursis à l'application des articles 71 et 72 de la présente Constitution.",
            ],
          },
          {
            id: 'a-105',
            title: 'Article 105.',
            paragraphs: [
              "Jusqu'à la promulgation des lois prévues à l'article 89 de la présente Constitution et sous réserve des dispositions fixant le statut des divers départements et territoires d'outre-mer, les départements et communes de la République française seront administrés conformément aux textes en vigueur, sauf en ce qui concerne les paragraphes 2 et 3 de l'article 97 de la loi du 5 avril 1884 pour l'application desquels la police d'Etat sera mise à la disposition du maire.",
              "Toutefois, les actes accomplis par le préfet, en sa qualité de représentant du département, seront exécutés par lui sous le contrôle permanent du président de l'assemblée départementale.",
              "Les dispositions de l'alinéa qui précède ne sont pas applicables au département de la Seine.",
            ],
          },
          {
            id: 'a-106',
            title: 'Article 106.',
            paragraphs: [
              'La présente Constitution sera promulguée par le président du Gouvernement provisoire de la République dans les deux jours qui suivront la date de la promulgation des résultats du référendum et dans la forme suivante :',
              '" L\'Assemblée nationale constituante a adopté,',
              '" Le peuple français a adopté,',
              '" Le président du Gouvernement provisoire de la République promulgue la Constitution dont la teneur suit :',
              '" (Texte de la Constitution)',
              "« La présente Constitution, délibérée et adoptée par l'Assemblée nationale constituante, approuvée par le peuple français, sera exécutée comme loi de l'Etat ».",
            ],
          },
        ],
      },
      {
        id: 'section-18-loi-constitutionnelle-du-7-d-cembre-',
        title: 'Loi constitutionnelle du 7 décembre 1954',
        articles: [
          {
            id: 'p-117',
            title: 'Text',
            paragraphs: [
              'tendant à la révision des articles 7 (addition), 9 (1er et 2e alinéas), 11 (1er alinéa), 12, 14 (2e et 3e alinéas), 20, 22 (1re phrase), 45 (2e, 3e et 4e alinéas), 49 (2e et 3e alinéas), 50 (2e alinéa) et 52 (1er et 2e alinéas) de la Constitution_',
              "L'Assemblée nationale et le Conseil de la République ont délibéré,",
              "L'Assemblée nationale a adopté,",
              'Le président de la République promulgue la loi constitutionnelle dont la teneur suit :',
            ],
          },
          {
            id: 'a-107',
            title: 'Article 1.',
            paragraphs: [
              "L'article 7 de la Constitution est ainsi complété : - « L'état de siège est déclaré dans les conditions prévues par la loi. »",
            ],
          },
          {
            id: 'a-108',
            title: 'Article 2.',
            paragraphs: [
              "Les premiers et deuxième alinéas de l'article 9 de la Constitutions sont abrogés et remplacés par les dispositions suivantes : - « L'Assemblée nationale se réunit de plein droit le premier mardi d'octobre. - Lorsque cette session a duré sept mois au moins, le président du conseil peut en prononcer la clôture par décret pris en conseil des ministres. Dans cette durée de sept mois ne sont pas comprises les interruptions de sessions. Sont considérés comme interruptions de séances les ajournements de séance supérieurs à huit jours francs. »",
            ],
          },
          {
            id: 'a-109',
            title: 'Article 3.',
            paragraphs: [
              "Le premier alinéa de l'article 11 de la Constitution est modifié ainsi qu'il suit : « Chacune des deux Chambres élit son bureau chaque année au début de la session ordinaire et dans les conditions prévues par son règlement. »",
            ],
          },
          {
            id: 'a-110',
            title: 'Article 4.',
            paragraphs: [
              "L'article 12 de la Constitution est abrogé et remplacé par les dispositions suivantes : - « Quand l'Assemblée nationale ne siège pas, son bureau peut convoquer le Parlement en session extraordinaire ; le président de l'Assemblée nationale doit le faire à la demande du président du conseil des ministres ou à celle de la majorité des membres composant l'Assemblée nationale. - Le président du conseil prononce la clôture de la session extraordinaire dans les formes prévues à l'article 9. - Lorsque la session extraordinaire a lieu à la demande de la majorité de l'Assemblée nationale ou de son bureau, le décret de clôture ne peut être pris avant que le Parlement n'ait épuisé l'ordre du jour limité pour lequel il a été convoqué. »",
            ],
          },
          {
            id: 'a-111',
            title: 'Article 5.',
            paragraphs: [
              "Les deuxième et troisième alinéas de l'article 14 de la Consitution sont abrogés et remplacés par les dispositions suivantes : - « Les projets de loi sont déposés sur le bureau de l'Assemblée nationale ou sur le bureau du Conseil de la République. Toutefois, les projets de loi tendant à autoriser la ratification des traités prévus à l'article 27, les projets de loi budgétaires ou de finances et les projets comportant diminution de recettes ou création de dépenses doivent être déposées au bureau de l'Assemblée nationale. - Les propositions de loi formulées par les membres du Parlement sont déposées sur le bureau de la Chambre dont ils font partie, et transmises après adoption à l'autre Chambre. Les propositions de loi formulées par les membres du Conseil de la République ne sont pas recevables lorsqu'elles auraient pour conséquence une diminution de recettes ou une création de dépenses. »",
            ],
          },
          {
            id: 'a-112',
            title: 'Article 6.',
            paragraphs: [
              "L'article 20 de la Constitution est abrogé et remplacé par les dispositions suivantes : « Tout projet ou proposition de loi est examiné successivement par les deux Chambres du Parlement en vue de parvenir à l'adoption d'un texte identique. - A moins que le projet ou la proposition n'ait été examiné par lui en première lecture, le Conseil de la République se prononce au plus tard dans les deux mois qui suivent la transmission du texte adopté en première lecture par l'Assemblée nationale. - En ce qui concerne les textes budgétaires et la loi de finances, le délai imparti au Conseil de la République ne doit pas excéder le temps précédemment utilisé par l'Assemblée nationale pour leur examen et leur vote. En cas de procédure d'urgence déclarée par l'Assemblée nationale, le délai est le double de celui prévu pour les débats de l'Assemblée nationale par le règlement de celle-ci. - Si le Conseil de la République ne s'est pas prononcé dans les délais prévus au précédents alinéas, la loi est en état d'être promulguée dans le texte voté par l'Assemblée nationale. - Si l'accord n'est pas intervenu, l'examen se poursuit devant chacune des deux Chambres. Après deux lectures par le Conseil de la République, chaque Chambre dispose, à cet effet, du délai utilisé par l'autre Chambre lors de la lecture précédente, sans que ce délai puisse être inférieur à sept jours ou à un jour pour les textes visés au troisième alinéa. - A défaut d'accord dans un délai de cent jours à compter de la transmission du texte au Conseil de la République pour deuxième lecture, ramené à un mois pour les textes budgétaires et la loi de finances et à quinze jours en cas de procédure applicable aux affaires urgentes, l'Assemblée nationale peut statuer définitivement en reprenant le dernier texte voté par elle ou en le modifiant par l'adoption d'un ou plusieurs amendements proposés à ce texte par le Conseil de la République. - Si l'Assemblée nationale dépasse ou prolonge les délais d'examen dont elle dispose, le délai prévu pour l'accord des deux Chambres est augmenté d'autant. - Les délais au présent article sont suspendus pendant les interruptions de session. Ils peuvent être prolongés par décision de l'Assemblée nationale. »",
            ],
          },
          {
            id: 'a-113',
            title: 'Article 7.',
            paragraphs: [
              "La première phrase de l'article 22 de la Constitution est abrogée et remplacée par les dispositions suivantes : - « Aucun membre du Parlement ne peut, pendant la durée des sessions, être poursuivi ou arrêté en matière criminelle ou correctionnelle qu'avec l'autorisation de la Chambre dont il fait partie, sauf en cas de flagrant délit. Tout parlementaire arrêté hors session peut voter par délégation tant que la Chambre dont il fait partie ne s'est pas prononcée sur la levée de son immunité parlementaire. Si elle ne s'est pas prononcée dans les trente jours qui suivront l'ouverture de la session, le parlementaire arrêté sera libéré de plein droit. Sauf les cas de flagrant délit, de poursuites autorisées ou de condamnation définitive, aucun membre du Parlement ne peut, hors session, être arrêté qu'avec l'autorisation du bureau de la Chambre dont il fait partie. »",
            ],
          },
          {
            id: 'a-114',
            title: 'Article 8.',
            paragraphs: [
              "Les deuxième et troisième alinéas de l'article 45 de la Constitution sont abrogés et remplacés par les dispositions suivantes : « Celui-ci choisit les membres de son Cabinet et en fait connaître la liste à l'Assemblée nationale devant laquelle il se présente afin d'obtenir sa confiance sur le programme et la politique qu'il compte poursuivre, sauf en cas de force majeure empêchant la réunion de l'Assemblée nationale. - Le vote a lieu au scrutin secret et à la majorité simple. - Il en est de même au cours de la législature, en cas de vacance de la présidence du Conseil, sauf ce qui est dit à l'article 52. »",
            ],
          },
          {
            id: 'a-115',
            title: 'Article 9.',
            paragraphs: [
              "Les deuxième et troisième alinéas de l'article 49 de la Constitution sont abrogés et remplacés par les dispositions suivantes : « Le vote sur la question de confiance ne peut intervenir que vingt-quatre heures après qu'elle a été posée devant l'Assemblée. Il a lieu au scrutin public. - La confiance est refusée au Cabinet à la majorité absolue des députés à l'Assemblée. »",
            ],
          },
          {
            id: 'a-116',
            title: 'Article 10.',
            paragraphs: [
              "Le deuxième alinéa de l'article 50 de la Constitution est abrogé et remplacé par la disposition suivante : « Le vote sur la motion de censure a lieu dans les mêmes conditions et les mêmes formes que le scrutin sur la question de confiance. »",
            ],
          },
          {
            id: 'a-117',
            title: 'Article 11.',
            paragraphs: [
              "Les premier et deuxième alinéas de l'article 52 de la Constitution sont abrogés et remplacés par les dispositions suivantes : - « En cas de dissolution, le Cabinet reste en fonction. - Toutefois, si la dissolution a été précédée de l'adoption d'une motion de censure, le président de la République nomme le président de l'Assemblée nationale président du conseil et ministre de l'intérieur. »",
            ],
          },
          {
            id: 'a-118',
            title: 'Article 12.',
            paragraphs: [
              "Les nouvelles dispositions de l'article 9 de la Constitution n'entreront en vigueur qu'à partir du premier mardi d'octobre suivant la promulgation de la loi constitutionnelle de révision.",
            ],
          },
        ],
      },
    ],
    notes: [
      {
        title: 'Reading context',
        text: 'This text comes from the Conseil constitutionnel historical archive. Notes here should help readers compare institutions, rights, and revision rules across French constitutional history.',
      },
    ],
  },
] satisfies readonly ConstitutionDocument[];

const notesByArticle = constitution1958.notes as Record<
  string,
  readonly ConstitutionNote[]
>;

const constitution1958Document = {
  id: 'constitution-1958',
  year: '1958',
  shortLabel: '1958',
  title: 'Constitution of 1958',
  sourceTitle: constitution1958.source.title,
  regime: 'Fifth Republic',
  date: '4 October 1958',
  sourceUrl: constitution1958.source.officialUrl,
  localSourcePath: constitution1958.source.localPdf,
  summary:
    'The current Constitution organizes the Fifth Republic. It concentrates presidential arbitration, parliamentary lawmaking, constitutional review, and the revision procedure in one living text.',
  revisionGroups: [
    {
      years: '1960-1976',
      title: 'Set-up and presidential power',
      text: 'The first revisions adjusted the Community, presidential elections, the parliamentary calendar, and interim rules.',
    },
    {
      years: '1992-1999',
      title: 'Europe, justice, parity',
      text: 'The 1990s brought Maastricht, the Court of Justice of the Republic, asylum rules, the International Criminal Court, and equal access for women and men into the constitutional text.',
    },
    {
      years: '2000-2008',
      title: 'Five-year term and institutional repair',
      text: 'This period introduced the five-year presidential term, the Environmental Charter, several European adjustments, and the large 2008 institutional revision.',
    },
    {
      years: '2010-2024',
      title: 'Rights, territories, environment',
      text: 'Recent changes brought the QPC into constitutional practice and added abortion freedom to the Constitution in 2024.',
    },
  ],
  sections: [
    {
      id: constitution1958.preamble.id,
      title: constitution1958.preamble.title,
      articles: [
        {
          id: 'preamble',
          title: constitution1958.preamble.title,
          paragraphs: constitution1958.preamble.paragraphs,
          notes: notesByArticle.preamble,
        },
      ],
    },
    {
      id: 'opening-article',
      title: 'Opening provisions',
      articles: constitution1958.articles
        .filter((article) => article.titleId === 'preamble')
        .map((article) => ({
          id: article.id,
          title: article.title,
          paragraphs: article.paragraphs,
          notes: notesByArticle[article.id],
        })),
    },
    ...constitution1958.titles.map((title) => ({
      id: title.id,
      title: title.name,
      articles: constitution1958.articles
        .filter((article) => article.titleId === title.id)
        .map((article) => ({
          id: article.id,
          title: article.title,
          paragraphs: article.paragraphs,
          notes: notesByArticle[article.id],
        })),
    })),
  ],
  notes: [
    { title: 'Current text', text: constitution1958.source.version },
    {
      title: 'Revision rule',
      text: 'Article 89 sets the ordinary path for revising the Constitution.',
    },
  ],
} satisfies ConstitutionDocument;

export const constitutionDocuments = [
  ...historicalConstitutionDocuments,
  constitution1958Document,
] as const;
export const defaultConstitutionId = constitution1958Document.id;
