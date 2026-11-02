import type { Metadata } from 'next';
import { getDictionary } from '@/i18n/get-dictionary';
import { pageMetadata } from '@/i18n/metadata';
import { resolveLang } from '@/i18n/server';
import { breadcrumbSchema, serviceSchema } from '@/i18n/schema';
import JsonLd from '../../../components/JsonLd';
import Commitment from '../../../components/Commitment';
import FinalCta from '../../../components/FinalCta';
import Reveal from '../../../components/Reveal';
import { CheckIcon } from '../../../components/Icons';
import { images } from '../../../components/images';
import { ButtonLink, Container } from '../../../components/ui';
import { bookingHref } from '@/i18n/routes';

type Props = { params: { lang: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = resolveLang(params.lang);
  return pageMetadata(lang, 'tourism', (await getDictionary(lang)).meta.tourism);
}

export default async function Tourism({ params }: Props) {
  const lang = resolveLang(params.lang);
  const dict = await getDictionary(lang);
  const { tourism } = dict;

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(lang, 'tourism', dict.meta.tourism, {
            serviceType: 'Tourisme avec chauffeur privé',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: tourism.circuitsTitle,
              itemListElement: tourism.circuits.map((c) => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'TouristTrip', name: c.title, description: c.text },
              })),
            },
          }),
          breadcrumbSchema(lang, dict.nav.home, [
            { key: 'services', name: dict.nav.services },
            { key: 'tourism', name: dict.services.tourism.title },
          ]),
        ]}
      />
      {/* En-tête : texte à gauche, ce qui est inclus à droite (pas de photo honnête disponible pour l'instant) */}
      <section className="pb-24 pt-36 md:pb-32 md:pt-48">
        <Container className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h1 className="text-balance font-display text-4xl font-medium leading-[1.05] text-ivory sm:text-5xl lg:text-6xl">
              {dict.meta.tourism.h1}
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-ivory">{tourism.intro}</p>
            <ButtonLink href={bookingHref(lang, 'tourism')} className="mt-10">
              {tourism.cta}
            </ButtonLink>
          </Reveal>
          <Reveal delay={0.12} className="bg-ink-2 p-8 md:p-12">
            <h2 className="font-display text-3xl text-ivory md:text-4xl">{tourism.includedTitle}</h2>
            <ul className="mt-8 space-y-4">
              {tourism.included.map((item) => (
                <li key={item} className="flex items-start gap-4 text-lg text-ivory">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-gold" /> {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Circuits en liste : titre et durée à gauche, description à droite */}
      <section className="pb-24 md:pb-36">
        <Container>
          <Reveal>
            <h2 className="font-display text-4xl text-ivory md:text-5xl">{tourism.circuitsTitle}</h2>
          </Reveal>
          <ul className="mt-12 space-y-12 md:space-y-16">
            {tourism.circuits.map((circuit, i) => (
              <li key={circuit.title}>
                <Reveal delay={0.06 * i} className="grid gap-4 md:grid-cols-[1fr_1.4fr] md:gap-12">
                  <div>
                    <h3 className="font-display text-3xl text-ivory md:text-4xl">{circuit.title}</h3>
                    <p className="mt-2 text-[0.95rem] text-gold">{circuit.duration}</p>
                  </div>
                  <p className="text-lg leading-relaxed text-ivory">{circuit.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Commitment commitment={dict.commitment} />
      <FinalCta lang={lang} dict={dict} />
    </>
  );
}
