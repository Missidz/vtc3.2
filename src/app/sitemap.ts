import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';
import { routes, site } from '@/i18n/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) =>
    locales.map((lang) => ({
      url: `${site.url}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    })),
  );
}
