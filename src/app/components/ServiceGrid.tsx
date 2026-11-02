import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/get-dictionary';
import { bookingHref, href } from '@/i18n/routes';
import Reveal from './Reveal';
import { ArrowIcon, WheelchairIcon } from './Icons';

type Props = { lang: Locale; dict: Dictionary };

/**
 * Services en liste éditoriale (pas une grille de cartes) : grand titre à gauche, texte et lien à droite.
 * Le transport PMR, prioritaire, ouvre la liste sur un champ de couleur.
 */
export default function ServiceGrid({ lang, dict }: Props) {
  const { services, common } = dict;
  const items = [
    { ...services.pmr, href: href(lang, 'pmr') },
    { ...services.tourism, href: href(lang, 'tourism') },
    { ...services.disposal, href: bookingHref(lang, 'disposal') },
    { ...services.longDistance, href: bookingHref(lang, 'longDistance') },
  ];

  return (
    <ul className="space-y-2">
      {items.map((item, i) => {
        const featured = 'badge' in item;
        return (
          <li key={item.title}>
            <Reveal delay={0.06 * i}>
              <Link
                href={item.href}
                className={`group grid items-start gap-4 px-6 py-10 transition-[background-color,transform] duration-200 ease-premium active:scale-[0.99] md:px-10 md:py-12 lg:grid-cols-[1fr_1.15fr] lg:gap-12 ${
                  featured ? 'bg-ink-2 hover:bg-ink-3' : 'hover:bg-ink-2'
                }`}
              >
                <h3 className="text-balance font-display text-4xl leading-tight text-ivory">{item.title}</h3>
                <div>
                  <p className="text-lg leading-relaxed text-ivory">{item.text}</p>
                  {'badge' in item && (
                    <p className="mt-5 inline-flex items-center gap-2 bg-gold/[0.15] px-3 py-2 text-[0.95rem] font-medium text-gold">
                      <WheelchairIcon /> {item.badge}
                    </p>
                  )}
                  <span className="mt-6 flex items-center gap-2 text-[0.95rem] font-semibold text-ivory">
                    {common.learnMore}
                    <ArrowIcon className="h-4 w-4 text-gold transition-transform duration-200 ease-premium group-hover:translate-x-1.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
