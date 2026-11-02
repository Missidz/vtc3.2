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
import Visual from '../../components/Visual';
import { CheckIcon, PhoneIcon, WheelchairIcon } from '../../components/Icons';
import { images } from '../../components/images';
import { ButtonLink, Container, Eyebrow } from '../../components/ui';

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

      <section className="pb-24 pt-40 md:pb-32 md:pt-48">
        <Container className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <Eyebrow as="h1">{dict.meta.pmr.h1}</Eyebrow>
            <p className="mt-6 font-display text-5xl font-medium leading-[1.05] text-ivory md:text-7xl">{pmr.title}</p>
            <p className="mt-8 text-lg leading-relaxed text-ivory-muted">{pmr.intro}</p>

            {/* Mention obligatoire, volontairement très visible */}
            <div className="mt-10 border border-gold p-6">
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold">{pmr.requirementTitle}</p>
              <p className="mt-3 flex items-center gap-3 font-display text-2xl text-ivory md:text-3xl">
                <WheelchairIcon className="h-7 w-7 shrink-0 text-gold" />
                {pmr.requirement}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ivory-muted">{pmr.requirementText}</p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={bookingHref(lang, 'pmr')}>{pmr.cta}</ButtonLink>
              <ButtonLink href={site.phoneHref} variant="outline">
                <PhoneIcon /> {site.phone}
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <Visual src={images.pmr} alt={pmr.title} placeholder="PMR" className="aspect-[4/5]" priority />
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-ink-line bg-ink-2 py-24 md:py-32">
        <Container className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-4xl text-ivory md:text-5xl">{pmr.audienceTitle}</h2>
            <ul className="mt-8 divide-y divide-ink-line border-y border-ink-line">
              {pmr.audience.map((item) => (
                <li key={item} className="flex items-center gap-4 py-5 text-ivory">
                  <WheelchairIcon className="h-5 w-5 shrink-0 text-gold" /> {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl text-ivory md:text-5xl">{pmr.pointsTitle}</h2>
            <ul className="mt-8 divide-y divide-ink-line border-y border-ink-line">
              {pmr.points.map((point) => (
                <li key={point} className="flex items-center gap-4 py-5 text-ivory">
                  <CheckIcon className="h-5 w-5 shrink-0 text-gold" /> {point}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-ivory-muted">{pmr.disclaimer}</p>
          </Reveal>
        </Container>
      </section>

      <Commitment commitment={dict.commitment} />
      <FinalCta lang={lang} dict={dict} />
    </>
  );
}
