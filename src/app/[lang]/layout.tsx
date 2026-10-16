import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import '../globals.css';
import { display, sans } from '../fonts';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { locales } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { resolveLang } from '@/i18n/server';
import { site } from '@/i18n/site';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  icons: { icon: '/logo.png', apple: '/logo.png' },
  twitter: { card: 'summary_large_image', site: '@monvtc37' },
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
      <body className="flex min-h-screen flex-col">
        <Navbar lang={lang} nav={dict.nav} />
        <main className="flex-grow">{children}</main>
        <Footer lang={lang} dict={dict} />
        <Analytics />
      </body>
    </html>
  );
}
