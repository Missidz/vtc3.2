import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, isLocale, LOCALE_COOKIE, type Locale } from './i18n/config';
import { findPage, pages } from './i18n/routes';

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
  const [, first, ...restParts] = pathname.split('/');
  const url = req.nextUrl.clone();

  // URL sans langue (ex. "/", "/tarifs", anciens liens) → redirection vers la langue détectée
  if (!isLocale(first)) {
    const lang = detectLocale(req);
    const key = findPage(pathname);
    url.pathname = `/${lang}${key ? pages[key][lang] : pathname === '/' ? '' : pathname}`;
    return NextResponse.redirect(url);
  }

  const lang = first;
  const rest = restParts.length ? `/${restParts.join('/')}` : '';
  const key = findPage(rest);
  if (!key) return; // page inconnue → 404 traduite

  const page = pages[key];
  if (rest.replace(/\/$/, '') === page[lang]) {
    // Adresse publique : on sert le dossier interne sans changer l'URL
    if (page[lang] === page.internal) return;
    url.pathname = `/${lang}${page.internal}`;
    return NextResponse.rewrite(url);
  }

  // Adresse interne ou slug de l'autre langue → redirection permanente vers l'adresse officielle
  url.pathname = `/${lang}${page[lang]}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  // Ignore l'API, les fichiers internes de Next.js et tout fichier avec extension (images, robots.txt, sitemap.xml…)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
