import type { Locale } from './config';
import type { Dictionary } from './get-dictionary';
import { href, type PageKey } from './routes';
import { site } from './site';

const businessId = `${site.url}/#business`;
const abs = (path: string) => `${site.url}${path}`;

const areaServed = [
  { '@type': 'City', name: 'Tours' },
  { '@type': 'AdministrativeArea', name: 'Indre-et-Loire' },
  { '@type': 'AdministrativeArea', name: 'Centre-Val de Loire' },
];

/** Fiche entreprise locale (présente sur toutes les pages). */
export function businessSchema(lang: Locale, dict: Dictionary) {
  const { services } = dict;
  const offered: [PageKey, { title: string; text: string }][] = [
    ['pmr', services.pmr],
    ['tourism', services.tourism],
    ['contact', services.disposal],
    ['contact', services.longDistance],
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': businessId,
    name: site.name,
    description: dict.meta.home.description,
    url: abs(href(lang, 'home')),
    telephone: '+33666144197',
    email: site.email,
    logo: abs('/logo-mark.png'),
    image: abs(`/${lang}/opengraph-image`),
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tours',
      postalCode: '37000',
      addressRegion: 'Centre-Val de Loire',
      addressCountry: 'FR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 47.39, longitude: 0.6892 },
    areaServed,
    knowsLanguage: ['fr', 'en'],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: [site.snapchatHref],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: dict.servicesSection.title,
      itemListElement: offered.map(([key, s]) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, description: s.text, url: abs(href(lang, key)) },
      })),
    },
  };
}

/** Page de service. */
export function serviceSchema(lang: Locale, key: PageKey, { title, description }: { title: string; description: string }, extra = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description,
    url: abs(href(lang, key)),
    provider: { '@id': businessId },
    areaServed,
    availableLanguage: ['fr', 'en'],
    ...extra,
  };
}

/** Fil d'Ariane : Accueil › … › page courante. */
export function breadcrumbSchema(lang: Locale, homeLabel: string, trail: { key: PageKey; name: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ key: 'home' as PageKey, name: homeLabel }, ...trail].map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(href(lang, item.key)),
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}
