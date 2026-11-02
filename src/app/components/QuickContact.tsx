import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/get-dictionary';
import { bookingHref } from '@/i18n/routes';
import { site } from '@/i18n/site';
import Reveal from './Reveal';
import { ArrowIcon } from './Icons';
import { Container } from './ui';

/**
 * Contact rapide sous le hero. Quatre accès de poids différents (pas une rangée de cartes identiques) :
 * le formulaire en champ or, le téléphone et WhatsApp en grand numéro, le transport PMR en teinte or.
 */
export default function QuickContact({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const { quick } = dict;
  const items = [
    { ...quick.contact, href: bookingHref(lang), detail: null, external: false, tone: 'bg-gold text-ink hover:bg-gold-light', muted: 'text-ink/75' },
    { ...quick.call, href: site.phoneHref, detail: site.phone, external: false, tone: 'bg-ink-2 text-ivory hover:bg-ink-3', muted: 'text-ivory-muted' },
    { ...quick.whatsapp, href: site.whatsappHref, detail: site.phone, external: true, tone: 'bg-ink-2 text-ivory hover:bg-ink-3', muted: 'text-ivory-muted' },
    { ...quick.pmr, href: bookingHref(lang, 'pmr'), detail: null, external: false, tone: 'bg-gold/[0.15] text-ivory hover:bg-gold/25', muted: 'text-ivory-muted' },
  ];

  return (
    <section className="relative z-10 -mt-16 pb-8 md:-mt-20">
      <Container className="grid gap-3 md:grid-cols-2 xl:grid-cols-[1.35fr_1fr_1fr_1fr]">
        {items.map((item, i) => {
          const classes = `group flex h-full flex-col p-7 transition-[background-color,transform] duration-200 ease-premium active:scale-[0.98] md:p-8 ${item.tone}`;
          const content = (
            <>
              <span className={`font-display ${i === 0 ? 'text-4xl' : 'text-3xl'}`}>{item.title}</span>
              {item.detail && <span className="mt-2 text-2xl font-semibold tabular-nums tracking-wide">{item.detail}</span>}
              <span className={`mt-3 text-[0.95rem] leading-relaxed ${item.muted}`}>{item.text}</span>
              <span className="mt-auto flex items-center gap-2 pt-8 text-[0.95rem] font-semibold">
                {item.cta}
                <ArrowIcon className="h-4 w-4 transition-transform duration-200 ease-premium group-hover:translate-x-1.5" />
              </span>
            </>
          );
          return (
            <Reveal key={item.title} delay={0.06 * i} className="h-full">
              {item.external || item.href.startsWith('tel:') ? (
                <a href={item.href} className={classes} {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                  {content}
                </a>
              ) : (
                <Link href={item.href} className={classes}>
                  {content}
                </Link>
              )}
            </Reveal>
          );
        })}
      </Container>
    </section>
  );
}
