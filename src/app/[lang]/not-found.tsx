'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import fr from '@/dictionaries/fr.json';
import en from '@/dictionaries/en.json';

export default function NotFound() {
  const lang = usePathname()?.startsWith('/en') ? 'en' : 'fr';
  const t = (lang === 'en' ? en : fr).notFound;

  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6 pt-20 text-center">
      <div>
        <p className="font-display text-8xl italic text-gold/70">404</p>
        <h1 className="mt-6 font-display text-4xl text-ivory">{t.title}</h1>
        <p className="mt-4 text-ivory-muted">{t.text}</p>
        <Link
          href={`/${lang}`}
          className="mt-10 inline-block border border-gold/60 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-gold/10"
        >
          {t.back}
        </Link>
      </div>
    </section>
  );
}
