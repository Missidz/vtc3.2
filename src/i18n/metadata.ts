import type { Metadata } from 'next';
import { locales, type Locale } from './config';
import { site } from './site';

/** Titre, description, URL canonique et balises hreflang d'une page. */
export function pageMetadata(
  lang: Locale,
  path: string,
  { title, description }: { title: string; description: string },
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}${path}`,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])),
        'x-default': `/fr${path}`,
      },
    },
    openGraph: {
      type: 'website',
      siteName: site.name,
      title,
      description,
      url: `/${lang}${path}`,
      locale: lang === 'fr' ? 'fr_FR' : 'en_GB',
      alternateLocale: lang === 'fr' ? 'en_GB' : 'fr_FR',
    },
  };
}
