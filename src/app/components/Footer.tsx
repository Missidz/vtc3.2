import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/get-dictionary';
import { site } from '@/i18n/site';
import { MailIcon, PhoneIcon, WhatsAppIcon } from './Icons';
import LanguageSwitcher from './LanguageSwitcher';
import { href } from '@/i18n/routes';

type Props = { lang: Locale; dict: Dictionary };

export default function Footer({ lang, dict }: Props) {
  const { footer, nav, services } = dict;
  const links = [
    { href: href(lang, 'contact'), label: nav.contact },
    { href: href(lang, 'pmr'), label: nav.pmr },
    { href: href(lang, 'tourism'), label: services.tourism.title },
    { href: href(lang, 'services'), label: nav.services },
    { href: href(lang, 'vehicle'), label: nav.vehicle },
    { href: href(lang, 'rates'), label: nav.rates },
    { href: href(lang, 'about'), label: nav.about },
  ];
  const heading = 'mb-5 text-base font-semibold text-ivory';

  return (
    <footer className="bg-ink-2">
      <div className="container mx-auto grid gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
        <div>
          <Image src="/logo-mark.png" alt={site.name} width={924} height={221} className="hidden h-10 w-auto dark:block" />
          <Image src="/logo-mark-dark.png" alt={site.name} width={924} height={221} className="h-10 w-auto dark:hidden" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory-muted">{footer.tagline}</p>
        </div>

        <div>
          <p className={heading}>{footer.links}</p>
          <ul className="space-y-3 text-[0.95rem]">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-ivory-muted transition-colors hover:text-ivory">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={heading}>{footer.contact}</p>
          <ul className="space-y-4 text-[0.95rem]">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-3 text-ivory-muted transition-colors hover:text-ivory">
                <PhoneIcon /> {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all text-ivory-muted transition-colors hover:text-ivory">
                <MailIcon /> {site.email}
              </a>
            </li>
            <li>
              <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ivory-muted transition-colors hover:text-ivory">
                <WhatsAppIcon /> WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className={heading}>{footer.follow}</p>
          <a href={site.snapchatHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[0.95rem] text-ivory-muted transition-colors hover:text-ivory">
            <Image src="/snapchat_logo.png" alt="" width={20} height={20} /> Snapchat
          </a>
          <div className="mt-10">
            <LanguageSwitcher lang={lang} label={nav.language} />
          </div>
        </div>
      </div>

      {/* Clôture : le nom revient en pleine largeur (Taste) */}
      <div className="container mx-auto px-6 lg:px-12">
        <p aria-hidden className="select-none whitespace-nowrap font-display text-[15.5vw] font-medium leading-[0.8] tracking-[-0.03em] text-ivory lg:text-[13.5vw]">
          VTC Tours 37
        </p>
        <div className="flex flex-col gap-2 py-8 text-sm text-ivory-muted md:flex-row md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. {footer.rights}
          </p>
          <p>Powered by BonyuCorp</p>
        </div>
      </div>
    </footer>
  );
}
