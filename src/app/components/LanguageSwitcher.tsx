'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOCALE_COOKIE, locales, type Locale } from '@/i18n/config';
import { findPage, pages } from '@/i18n/routes';

export default function LanguageSwitcher({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname() ?? `/${lang}`;
  const rest = pathname.replace(/^\/(fr|en)(?=\/|$)/, '');
  const key = findPage(rest);
  // Renvoie vers la version traduite de la page courante (slugs différents selon la langue)
  const hrefFor = (target: Locale) => `/${target}${key ? pages[key][target] : rest}`;
  const remember = (target: Locale) => {
    document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=31536000; SameSite=Lax`;
  };

  return (
    <nav aria-label={label} className="flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.2em]">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i > 0 && <span className="text-ivory/25" aria-hidden>|</span>}
          <Link
            href={hrefFor(l)}
            hrefLang={l}
            lang={l}
            onClick={() => remember(l)}
            aria-current={l === lang ? 'true' : undefined}
            className={l === lang ? 'text-gold' : 'text-ivory-muted transition-colors hover:text-ivory'}
          >
            {l}
          </Link>
        </span>
      ))}
    </nav>
  );
}
