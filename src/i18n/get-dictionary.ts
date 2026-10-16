import type { Locale } from './config';

const dictionaries = {
  fr: () => import('@/dictionaries/fr.json').then((m) => m.default),
  en: () => import('@/dictionaries/en.json').then((m) => m.default),
};

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)['fr']>>;

export const getDictionary = (locale: Locale): Promise<Dictionary> => dictionaries[locale]();
