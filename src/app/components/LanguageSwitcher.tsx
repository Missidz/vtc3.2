'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOCALE_COOKIE, locales, type Locale } from '@/i18n/config';
import { findPage, pages } from '@/i18n/routes';
import { FlagFr, FlagUk } from './Flags';

const flags = { fr: { Flag: FlagFr, name: 'Français' }, en: { Flag: FlagUk, name: 'English' } };

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
    <nav aria-label={label} className="flex items-center gap-2">
      {locales.map((l) => {
        const { Flag, name } = flags[l];
        const active = l === lang;
        return (
          <Link
            key={l}
            href={hrefFor(l)}
            hrefLang={l}
            lang={l}
            onClick={() => remember(l)}
            aria-current={active ? 'true' : undefined}
            aria-label={name}
            title={name}
            className={`block h-7 w-7 overflow-hidden rounded-full ring-1 ring-offset-2 ring-offset-ink transition duration-300 ${
              active ? 'ring-gold' : 'opacity-50 ring-ivory/20 hover:opacity-100 hover:ring-ivory/60'
            }`}
          >
            <Flag className="h-full w-full" />
          </Link>
        );
      })}
    </nav>
  );
}
