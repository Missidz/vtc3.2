import type { Metadata } from 'next';
import { getDictionary } from '@/i18n/get-dictionary';
import { pageMetadata } from '@/i18n/metadata';
import { bookingHref } from '@/i18n/routes';
import { breadcrumbSchema, serviceSchema } from '@/i18n/schema';
import { resolveLang } from '@/i18n/server';
import { site } from '@/i18n/site';
import Commitment from '../../components/Commitment';
import FinalCta from '../../components/FinalCta';
import JsonLd from '../../components/JsonLd';
import Reveal from '../../components/Reveal';
import { CheckIcon, PhoneIcon, WheelchairIcon } from '../../components/Icons';
import { ButtonLink, Container } from '../../components/ui';

type Props = { params: { lang: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = resolveLang(params.lang);
  return pageMetadata(lang, 'pmr', (await getDictionary(lang)).meta.pmr);
}

export default async function TransportPmr({ params }: Props) {
  const lang = resolveLang(params.lang);
  const dict = await getDictionary(lang);
  const { pmr } = dict;

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(lang, 'pmr', dict.meta.pmr, {
            serviceType: lang === 'fr' ? 'Transport PMR et handicap (non médicalisé)' : 'Reduced mobility and disability transport (non-medical)',
          }),
          breadcrumbSchema(lang, dict.nav.home, [{ key: 'pmr', name: dict.nav.pmr }]),
        ]}
      />

      {/* En-tête : texte et actions à gauche, condition obligatoire en grand à droite */}
      <section className="pb-24 pt-36 md:pb-32 md:pt-48">
        <Container className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h1 className="text-balance font-display text-4xl font-medium leading-[1.05] text-ivory sm:text-5xl lg:text-6xl">{dict.meta.pmr.h1}</h1>
            <p className="mt-8 text-lg leading-relaxed text-ivory">{pmr.intro}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={bookingHref(lang, 'pmr')}>{pmr.cta}</ButtonLink>
              <ButtonLink href={site.phoneHref} variant="secondary">
                <PhoneIcon /> {site.phone}
              </ButtonLink>
            </div>
          </Reveal>

          {/* Mention obligatoire, volontairement très visible : champ de couleur, sans cadre */}
          <Reveal delay={0.12} className="bg-gold/[0.15] p-8 md:p-12">
            <p className="text-[0.95rem] font-semibold text-gold">{pmr.requirementTitle}</p>
            <p className="mt-4 flex items-start gap-4 font-display text-3xl leading-tight text-ivory md:text-5xl">
              <WheelchairIcon className="mt-1 h-8 w-8 shrink-0 text-gold md:h-10 md:w-10" />
              {pmr.requirement}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ivory">{pmr.requirementText}</p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-ink-2 py-24 md:py-32">
        <Container className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-4xl text-ivory md:text-5xl">{pmr.audienceTitle}</h2>
            <ul className="mt-8 space-y-4">
              {pmr.audience.map((item) => (
                <li key={item} className="flex items-start gap-4 text-lg text-ivory">
                  <WheelchairIcon className="mt-1 h-5 w-5 shrink-0 text-gold" /> {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-4xl text-ivory md:text-5xl">{pmr.pointsTitle}</h2>
            <ul className="mt-8 space-y-4">
              {pmr.points.map((point) => (
                <li key={point} className="flex items-start gap-4 text-lg text-ivory">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-gold" /> {point}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-[0.95rem] leading-relaxed text-ivory-muted">{pmr.disclaimer}</p>
          </Reveal>
        </Container>
      </section>

      <Commitment commitment={dict.commitment} />
      <FinalCta lang={lang} dict={dict} />
    </>
  );
}
