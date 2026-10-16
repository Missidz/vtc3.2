import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';
import { href, pages, type PageKey } from '@/i18n/routes';
import { site } from '@/i18n/site';

const priority: Partial<Record<PageKey, number>> = { home: 1, services: 0.9, tourism: 0.9, health: 0.9, contact: 0.8 };

export default function sitemap(): MetadataRoute.Sitemap {
  return (Object.keys(pages) as PageKey[]).flatMap((key) =>
    locales.map((lang) => ({
      url: `${site.url}${href(lang, key)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: priority[key] ?? 0.7,
      // Balises hreflang : chaque page déclare sa version dans l'autre langue
      alternates: { languages: Object.fromEntries(locales.map((l) => [l, `${site.url}${href(l, key)}`])) },
    })),
  );
}
