import type { Locale } from './config';

/**
 * Adresses publiques de chaque page, traduites pour le référencement.
 * `internal` est le dossier réel sous src/app/[lang] ; le middleware fait la correspondance.
 */
export const pages = {
  home: { internal: '', fr: '', en: '' },
  services: { internal: '/services', fr: '/services', en: '/services' },
  tourism: {
    internal: '/services/tourisme',
    fr: '/services/visite-chateaux-de-la-loire-caves-a-vin',
    en: '/services/loire-valley-chateau-wine-tours',
  },
  pmr: {
    internal: '/transport-pmr',
    fr: '/transport-pmr-handicap',
    en: '/reduced-mobility-disability-transport',
  },
  vehicle: { internal: '/vehicule', fr: '/vehicule-byd-seal', en: '/byd-seal-electric-car' },
  rates: { internal: '/tarifs', fr: '/tarifs', en: '/rates' },
  about: { internal: '/about', fr: '/a-propos', en: '/about' },
  contact: { internal: '/contact', fr: '/contact', en: '/contact' },
} as const;

export type PageKey = keyof typeof pages;

/** Lien public d'une page, ex. href('en', 'rates') → '/en/rates'. */
export const href = (lang: Locale, key: PageKey) => `/${lang}${pages[key][lang]}`;

/** Retrouve une page à partir d'un chemin (sans préfixe de langue), public ou interne, toutes langues confondues. */
export function findPage(path: string): PageKey | undefined {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  return (Object.keys(pages) as PageKey[]).find((key) => {
    const p = pages[key];
    return p.internal === clean || p.fr === clean || p.en === clean;
  });
}
