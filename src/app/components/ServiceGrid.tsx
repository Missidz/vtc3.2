import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/get-dictionary';
import Reveal from './Reveal';
import { ArrowIcon, WheelchairIcon } from './Icons';
import { bookingHref, href } from '@/i18n/routes';

type Props = { lang: Locale; dict: Dictionary };

export default function ServiceGrid({ lang, dict }: Props) {
  const { services, common } = dict;
  const items = [
    { ...services.pmr, href: href(lang, 'pmr') },
    { ...services.tourism, href: href(lang, 'tourism') },
    { ...services.disposal, href: bookingHref(lang, 'disposal') },
    { ...services.longDistance, href: bookingHref(lang, 'longDistance') },
  ];

  return (
    <div className="grid gap-px border border-ink-line bg-ink-line md:grid-cols-2">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={0.08 * i} className="h-full">
          <Link
            href={item.href}
            className={`group flex h-full flex-col p-10 transition-colors duration-700 ease-premium md:p-12 ${
              'badge' in item ? 'bg-ink-2 shadow-[inset_0_0_0_1px_rgb(var(--c-gold))] hover:bg-ink-3' : 'bg-ink hover:bg-ink-2'
            }`}
          >
            <span className="font-display text-lg italic text-gold/80">0{i + 1}</span>
            <h3 className="mt-6 font-display text-3xl text-ivory md:text-4xl">{item.title}</h3>
            <p className="mt-4 max-w-md leading-relaxed text-ivory-muted">{item.text}</p>
            {'badge' in item && (
              <p className="mt-6 inline-flex w-fit items-center gap-2 border border-gold/50 px-3 py-2 text-xs font-medium uppercase tracking-[0.15em] text-gold">
                <WheelchairIcon /> {item.badge}
              </p>
            )}
            <span className="mt-auto flex items-center gap-3 pt-10 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ivory">
              {common.learnMore}
              <ArrowIcon className="h-4 w-4 text-gold transition-transform duration-500 ease-premium group-hover:translate-x-2" />
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
