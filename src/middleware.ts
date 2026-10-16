import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, isLocale, LOCALE_COOKIE, locales, type Locale } from './i18n/config';

function detectLocale(req: NextRequest): Locale {
  // 1. Langue choisie manuellement via le sélecteur FR/EN
  const cookie = req.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(cookie)) return cookie;

  // 2. Langue préférée du navigateur, ex. "en-GB,en;q=0.9,fr;q=0.8"
  const prefs = (req.headers.get('accept-language') ?? '')
    .split(',')
    .map((part) => {
      const [tag, q] = part.trim().split(';q=');
      return { base: tag.toLowerCase().split('-')[0], q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  for (const { base } of prefs) if (isLocale(base)) return base;

  // 3. Par défaut : français (c'est aussi ce que voient les robots d'indexation)
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) return;

  const url = req.nextUrl.clone();
  url.pathname = `/${detectLocale(req)}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Ignore l'API, les fichiers internes de Next.js et tout fichier avec extension (images, robots.txt, sitemap.xml…)
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
