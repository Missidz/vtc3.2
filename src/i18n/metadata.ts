import type { Metadata } from 'next';
import { locales, type Locale } from './config';
import { href, pages, type PageKey } from './routes';
import { site } from './site';

/** Titre, description, URL canonique, balises hreflang et Open Graph d'une page. */
export function pageMetadata(
  lang: Locale,
  key: PageKey,
  { title, description }: { title: string; description: string },
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: href(lang, key),
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, href(l, key)])),
        // Sans préfixe : le visiteur est redirigé selon la langue de son navigateur
        'x-default': pages[key].fr || '/',
      },
    },
    openGraph: {
      type: 'website',
      siteName: site.name,
      title,
      description,
      url: href(lang, key),
      locale: lang === 'fr' ? 'fr_FR' : 'en_GB',
      alternateLocale: lang === 'fr' ? 'en_GB' : 'fr_FR',
      images: [{ url: `/${lang}/opengraph-image`, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [`/${lang}/opengraph-image`] },
  };
}
