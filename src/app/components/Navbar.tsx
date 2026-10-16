'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/get-dictionary';
import { site } from '@/i18n/site';
import LanguageSwitcher from './LanguageSwitcher';
import { PhoneIcon, WhatsAppIcon } from './Icons';

type Props = { lang: Locale; nav: Dictionary['nav'] };

export default function Navbar({ lang, nav }: Props) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const links = [
    { href: `/${lang}/services`, label: nav.services },
    { href: `/${lang}/vehicule`, label: nav.vehicle },
    { href: `/${lang}/tarifs`, label: nav.rates },
    { href: `/${lang}/about`, label: nav.about },
    { href: `/${lang}/contact`, label: nav.contact },
  ];
  const isActive = (href: string) => pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium ${
        scrolled || open ? 'border-b border-ink-line bg-ink/90 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-12">
        <Link href={`/${lang}`} aria-label={`${site.name} · ${nav.home}`} className="shrink-0">
          <Image src="/logo-mark.png" alt={site.name} width={924} height={221} priority className="h-8 w-auto md:h-9" />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-[0.72rem] font-medium uppercase tracking-[0.2em] transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-500 after:ease-premium ${
                isActive(link.href) ? 'text-ivory after:w-full' : 'text-ivory-muted after:w-0 hover:text-ivory hover:after:w-full'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <LanguageSwitcher lang={lang} label={nav.language} />
          <a href={site.phoneHref} className="hidden items-center gap-2 text-sm text-ivory-muted transition-colors hover:text-ivory xl:flex">
            <PhoneIcon /> {site.phone}
          </a>
          <Link
            href={`/${lang}/contact`}
            className="hidden bg-gold px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink transition-colors duration-500 hover:bg-gold-light sm:inline-block"
          >
            {nav.book}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? nav.close : nav.menu}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className={`h-px w-6 bg-ivory transition-transform duration-300 ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
            <span className={`h-px w-6 bg-ivory transition-transform duration-300 ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-[calc(100dvh-5rem)] overflow-y-auto bg-ink lg:hidden"
          >
            <nav className="container mx-auto flex flex-col px-6 py-10" aria-label="Navigation">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    className={`block border-b border-ink-line py-5 font-display text-3xl ${isActive(link.href) ? 'text-gold' : 'text-ivory'}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-10 grid gap-3">
                <Link href={`/${lang}/contact`} className="bg-gold py-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink">
                  {nav.book}
                </Link>
                <div className="grid grid-cols-2 gap-3">
                  <a href={site.phoneHref} className="flex items-center justify-center gap-2 border border-ink-line py-4 text-sm text-ivory">
                    <PhoneIcon /> {site.phone}
                  </a>
                  <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-ink-line py-4 text-sm text-ivory">
                    <WhatsAppIcon /> WhatsApp
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
