import { Metadata } from 'next';

const baseUrl = 'https://monvtc37.fr';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: baseUrl,
    siteName: 'Mon VTC 37',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@monvtc37',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const pagesMetadata: Record<string, Metadata> = {
  '/': {
    title: 'Mon VTC 37 - Service de Transport Professionnel en Touraine',
    description: 'Service de transport VTC professionnel de qualité en Touraine. Transferts aéroport, gares, événements. Chauffeur privé disponible 24/7.',
    openGraph: {
      title: 'Mon VTC 37 - Service de Transport Professionnel en Touraine',
      description: 'Service de transport VTC professionnel de qualité en Touraine. Transferts aéroport, gares, événements.',
    },
  },
  '/about': {
    title: 'À propos - Mon VTC 37',
    description: 'Découvrez Mon VTC 37, votre service de transport professionnel en Touraine. Qualité, fiabilité et confort pour tous vos déplacements.',
    openGraph: {
      title: 'À propos - Mon VTC 37',
      description: 'Découvrez Mon VTC 37, votre service de transport professionnel en Touraine.',
    },
  },
  '/contact': {
    title: 'Contact - Mon VTC 37',
    description: 'Contactez Mon VTC 37 pour vos besoins de transport. Service client disponible 24/7 pour répondre à toutes vos demandes.',
    openGraph: {
      title: 'Contact - Mon VTC 37',
      description: 'Contactez Mon VTC 37 pour vos besoins de transport.',
    },
  },
  '/tarifs': {
    title: 'Tarifs - Mon VTC 37',
    description: 'Consultez nos tarifs pour tous nos services de transport VTC. Des prix transparents et compétitifs pour tous vos déplacements.',
    openGraph: {
      title: 'Tarifs - Mon VTC 37',
      description: 'Consultez nos tarifs pour tous nos services de transport VTC.',
    },
  },
  '/transfert-aeroport': {
    title: 'Transfert Aéroport - Mon VTC 37',
    description: 'Service de transfert professionnel vers et depuis les aéroports. Confort et ponctualité garantis pour vos déplacements aériens.',
    openGraph: {
      title: 'Transfert Aéroport - Mon VTC 37',
      description: 'Service de transfert professionnel vers et depuis les aéroports.',
    },
  },
  '/contact-aeroport': {
    title: 'Contact Aéroport - Mon VTC 37',
    description: 'Réservez votre transfert aéroport avec Mon VTC 37. Service disponible 24/7 pour tous vos déplacements aériens.',
    openGraph: {
      title: 'Contact Aéroport - Mon VTC 37',
      description: 'Réservez votre transfert aéroport avec Mon VTC 37.',
    },
  },
}; 