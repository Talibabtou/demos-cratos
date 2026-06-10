import additionalAct1815 from './data/acte-additionnel-aux-constitutions-de-l-empire-du-22-avril-1815.json';
import charter1814 from './data/charte-constitutionnelle-du-4-juin-1814.json';
import charter1830 from './data/charte-constitutionnelle-du-14-aout-1830.json';
import constitution1958 from './data/constitution-1958.json';
import constitution1791 from './data/constitution-de-1791.json';
import constitution1848 from './data/constitution-de-1848-iie-republique.json';
import constitution1852 from './data/constitution-de-1852-second-empire.json';
import constitutionalLaws1875 from './data/constitution-de-1875-iiie-republique.json';
import constitution1946 from './data/constitution-de-1946-ive-republique.json';
import constitutionYearXii from './data/constitution-de-l-an-xii-empire-28-floreal-an-xii.json';
import constitutionYearX from './data/constitution-du-16-thermidor-an-x.json';
import constitutionYearViii from './data/constitution-du-22-frimaire-an-viii.json';
import constitution1793 from './data/constitution-du-24-juin-1793.json';
import constitutionYearIii from './data/constitution-du-5-fructidor-an-iii.json';
import provisionalPowers1945 from './data/loi-du-2-novembre-1945-portant-organisation-provisoire-des-pouvoirs-publics.json';

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

export const constitutionDocuments = [
  constitution1791,
  constitution1793,
  constitutionYearIii,
  constitutionYearViii,
  constitutionYearX,
  constitutionYearXii,
  charter1814,
  additionalAct1815,
  charter1830,
  constitution1848,
  constitution1852,
  constitutionalLaws1875,
  provisionalPowers1945,
  constitution1946,
  constitution1958,
] satisfies readonly ConstitutionDocument[];

export const defaultConstitutionId = constitution1958.id;
