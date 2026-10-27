import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/get-dictionary';
import { href } from '@/i18n/routes';
import { site } from '@/i18n/site';
import Reveal from './Reveal';
import { ArrowIcon, MailIcon, PhoneIcon, WhatsAppIcon, WheelchairIcon } from './Icons';
import { Container } from './ui';

/** Trois encadrés de contact rapide : téléphone, WhatsApp et transport PMR (mis en avant). */
export default function QuickContact({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const { quick } = dict;
  const boxes = [
    { ...quick.contact, href: href(lang, 'contact'), icon: <MailIcon className="h-6 w-6" />, detail: null, external: false, style: 'featured' },
    { ...quick.call, href: site.phoneHref, icon: <PhoneIcon className="h-6 w-6" />, detail: site.phone, external: false, style: 'default' },
    { ...quick.whatsapp, href: site.whatsappHref, icon: <WhatsAppIcon className="h-6 w-6" />, detail: site.phone, external: true, style: 'default' },
    { ...quick.pmr, href: `${href(lang, 'contact')}?service=pmr`, icon: <WheelchairIcon className="h-6 w-6" />, detail: null, external: false, style: 'accent' },
  ];

  return (
    <section className="relative z-10 -mt-16 pb-8 md:-mt-20">
      <Container className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {boxes.map((box, i) => {
          const featured = box.style === 'featured';
          const classes = `group flex h-full flex-col p-8 transition-colors duration-500 ease-premium ${
            featured
              ? 'border border-gold bg-gold text-ink hover:bg-gold-light'
              : box.style === 'accent'
                ? 'border border-gold bg-ink-2/95 text-ivory backdrop-blur hover:bg-gold/10'
                : 'border border-ink-line bg-ink-2/95 text-ivory backdrop-blur hover:border-gold/60'
          }`;
          const content = (
            <>
              <span className={featured ? 'text-ink' : 'text-gold'}>{box.icon}</span>
              <span className="mt-6 font-display text-3xl">{box.title}</span>
              {box.detail && <span className="mt-2 text-2xl font-semibold tracking-wide">{box.detail}</span>}
              <span className={`mt-3 text-sm leading-relaxed ${featured ? 'text-ink/80' : 'text-ivory-muted'}`}>{box.text}</span>
              <span className="mt-auto flex items-center gap-3 pt-8 text-[0.7rem] font-semibold uppercase tracking-[0.2em]">
                {box.cta}
                <ArrowIcon className="h-4 w-4 transition-transform duration-500 ease-premium group-hover:translate-x-2" />
              </span>
            </>
          );
          return (
            <Reveal key={box.title} delay={0.08 * i} className="h-full">
              {box.external || box.href.startsWith('tel:') ? (
                <a href={box.href} className={classes} {...(box.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                  {content}
                </a>
              ) : (
                <Link href={box.href} className={classes}>
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
