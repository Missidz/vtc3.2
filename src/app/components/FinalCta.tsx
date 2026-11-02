import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/get-dictionary';
import { site } from '@/i18n/site';
import Reveal from './Reveal';
import { WhatsAppIcon } from './Icons';
import { ButtonLink, Container } from './ui';
import { bookingHref } from '@/i18n/routes';

export default function FinalCta({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <section className="py-28 md:py-36">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-10 border-t border-gold/40 pt-16 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-medium leading-tight text-ivory md:text-6xl">{dict.cta.title}</h2>
            <p className="mt-6 text-lg text-ivory-muted">{dict.cta.text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={bookingHref(lang)}>{dict.common.contactCta}</ButtonLink>
            <ButtonLink href={site.whatsappHref} variant="outline" external>
              <WhatsAppIcon /> {dict.common.whatsapp}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
