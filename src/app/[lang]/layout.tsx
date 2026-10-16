import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import '../globals.css';
import { display, sans } from '../fonts';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MobileActionBar from '../components/MobileActionBar';
import { locales } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { resolveLang } from '@/i18n/server';
import { site } from '@/i18n/site';
import { businessSchema } from '@/i18n/schema';
import JsonLd from '../components/JsonLd';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  applicationName: site.name,
  formatDetection: { telephone: false },
  // Code de vérification Google Search Console (variable d'environnement sur Vercel)
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  icons: { apple: '/icon-512.png' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
};

export const viewport: Viewport = { themeColor: '#0B0B0C' };

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  const lang = resolveLang(params.lang);
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className={`${display.variable} ${sans.variable}`}>
      <body className="flex min-h-screen flex-col pb-16 md:pb-0">
        <JsonLd data={businessSchema(lang, dict)} />
        <Navbar lang={lang} nav={dict.nav} />
        <main className="flex-grow">{children}</main>
        <Footer lang={lang} dict={dict} />
        <MobileActionBar lang={lang} labels={dict.mobileBar} />
        <Analytics />
      </body>
    </html>
  );
}
