import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/get-dictionary';
import { site } from '@/i18n/site';
import { MailIcon, PhoneIcon, WhatsAppIcon } from './Icons';
import LanguageSwitcher from './LanguageSwitcher';

type Props = { lang: Locale; dict: Dictionary };

export default function Footer({ lang, dict }: Props) {
  const { footer, nav, services } = dict;
  const links = [
    { href: `/${lang}/services`, label: nav.services },
    { href: `/${lang}/services/tourisme`, label: services.tourism.title },
    { href: `/${lang}/services/accompagnement-sante`, label: services.health.title },
    { href: `/${lang}/vehicule`, label: nav.vehicle },
    { href: `/${lang}/tarifs`, label: nav.rates },
    { href: `/${lang}/about`, label: nav.about },
    { href: `/${lang}/contact`, label: nav.contact },
  ];
  const heading = 'mb-6 text-[0.7rem] font-medium uppercase tracking-eyebrow text-gold';

  return (
    <footer className="border-t border-ink-line bg-ink">
      <div className="container mx-auto grid gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
        <div>
          <Image src="/logo-mark.png" alt={site.name} width={924} height={221} className="h-10 w-auto" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory-muted">{footer.tagline}</p>
        </div>

        <div>
          <p className={heading}>{footer.links}</p>
          <ul className="space-y-3 text-sm">
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
          <ul className="space-y-4 text-sm">
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
          <a href={site.snapchatHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-sm text-ivory-muted transition-colors hover:text-ivory">
            <Image src="/snapchat_logo.png" alt="" width={20} height={20} /> Snapchat
          </a>
          <div className="mt-10">
            <LanguageSwitcher lang={lang} label={nav.language} />
          </div>
        </div>
      </div>

      <div className="border-t border-ink-line">
        <div className="container mx-auto flex flex-col gap-2 px-6 py-6 text-xs text-ivory-muted/70 md:flex-row md:justify-between lg:px-12">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. {footer.rights}
          </p>
          <p>Powered by BonyuCorp</p>
        </div>
      </div>
    </footer>
  );
}
