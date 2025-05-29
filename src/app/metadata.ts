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
    siteName: 'VTC Tours 37',
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
    title: 'VTC Tours 37 - Service de Transport Premium en Touraine',
    description: 'VTC Tours 37, votre service de transport premium en Touraine. Transferts aéroport, gares, événements. Chauffeur privé disponible 24/7 pour tous vos déplacements.',
    openGraph: {
      title: 'VTC Tours 37 - Service de Transport Premium en Touraine',
      description: 'VTC Tours 37, votre service de transport premium en Touraine. Transferts aéroport, gares, événements.',
    },
  },
  '/about': {
    title: 'À propos - VTC Tours 37',
    description: 'Découvrez VTC Tours 37, votre service de transport premium en Touraine. Qualité, fiabilité et confort pour tous vos déplacements.',
    openGraph: {
      title: 'À propos - VTC Tours 37',
      description: 'Découvrez VTC Tours 37, votre service de transport premium en Touraine.',
    },
  },
  '/contact': {
    title: 'Contact - VTC Tours 37',
    description: 'Contactez VTC Tours 37 pour vos besoins de transport. Service client disponible 24/7 pour répondre à toutes vos demandes.',
    openGraph: {
      title: 'Contact - VTC Tours 37',
      description: 'Contactez VTC Tours 37 pour vos besoins de transport.',
    },
  },
  '/services': {
    title: 'Services - VTC Tours 37',
    description: 'Découvrez nos services de transport VTC à Tours et en Touraine. Transferts aéroport, gares, événements. Chauffeur privé disponible 24/7.',
    openGraph: {
      title: 'Services - VTC Tours 37',
      description: 'Découvrez nos services de transport VTC à Tours et en Touraine.',
    },
  },
  '/transfert-aeroport': {
    title: 'Transfert Aéroport - VTC Tours 37',
    description: 'Service de transfert professionnel vers et depuis les aéroports depuis Tours. Confort et ponctualité garantis pour vos déplacements aériens.',
    openGraph: {
      title: 'Transfert Aéroport - VTC Tours 37',
      description: 'Service de transfert professionnel vers et depuis les aéroports depuis Tours.',
    },
  },
  '/contact-aeroport': {
    title: 'Contact Aéroport - VTC Tours 37',
    description: 'Réservez votre transfert aéroport avec VTC Tours 37. Service disponible 24/7 pour tous vos déplacements aériens depuis Tours.',
    openGraph: {
      title: 'Contact Aéroport - VTC Tours 37',
      description: 'Réservez votre transfert aéroport avec VTC Tours 37.',
    },
  },
}; 