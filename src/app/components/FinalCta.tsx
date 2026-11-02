import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/get-dictionary';
import { bookingHref } from '@/i18n/routes';
import { site } from '@/i18n/site';
import Reveal from './Reveal';
import { MailIcon, WhatsAppIcon } from './Icons';
import { ButtonLink, Container } from './ui';

/** Appel final : un champ or plein, pour fermer chaque page sur l'action. */
export default function FinalCta({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <section className="bg-gold py-24 text-ink md:py-32">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <h2 className="text-balance font-display text-4xl font-medium leading-tight md:text-6xl">{dict.cta.title}</h2>
            <p className="mt-6 text-lg text-ink/80">{dict.cta.text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={bookingHref(lang)} variant="inverse">
              <MailIcon /> {dict.common.contactCta}
            </ButtonLink>
            <ButtonLink href={site.whatsappHref} variant="onGold" external>
              <WhatsAppIcon /> {dict.common.whatsapp}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
