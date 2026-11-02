import type { Metadata } from 'next';
import { getDictionary } from '@/i18n/get-dictionary';
import { pageMetadata } from '@/i18n/metadata';
import { resolveLang } from '@/i18n/server';
import { breadcrumbSchema, serviceSchema } from '@/i18n/schema';
import JsonLd from '../../../components/JsonLd';
import Commitment from '../../../components/Commitment';
import FinalCta from '../../../components/FinalCta';
import Reveal from '../../../components/Reveal';
import Visual from '../../../components/Visual';
import { CheckIcon } from '../../../components/Icons';
import { images } from '../../../components/images';
import { ButtonLink, Container, Eyebrow } from '../../../components/ui';
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
      <section className="pb-24 pt-40 md:pb-32 md:pt-48">
        <Container className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <Eyebrow as="h1">{dict.meta.tourism.h1}</Eyebrow>
            <p className="mt-6 font-display text-5xl font-medium leading-[1.05] text-ivory md:text-7xl">{tourism.title}</p>
            <p className="mt-8 text-lg leading-relaxed text-ivory-muted">{tourism.intro}</p>
            <ButtonLink href={bookingHref(lang, 'tourism')} className="mt-10">
              {tourism.cta}
            </ButtonLink>
          </Reveal>
          <Reveal delay={0.15}>
            <Visual src={images.tourism} alt={tourism.title} placeholder="Val de Loire" className="aspect-[4/5]" priority />
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-ink-line bg-ink-2 py-24 md:py-32">
        <Container>
          <Reveal>
            <Eyebrow>{tourism.circuitsTitle}</Eyebrow>
          </Reveal>
          <div className="mt-12 grid gap-px border border-ink-line bg-ink-line md:grid-cols-3">
            {tourism.circuits.map((circuit, i) => (
              <Reveal key={circuit.title} delay={0.08 * i} className="h-full">
                <article className="flex h-full flex-col bg-ink-2 p-10">
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-gold">{circuit.duration}</span>
                  <h2 className="mt-4 font-display text-3xl text-ivory">{circuit.title}</h2>
                  <p className="mt-4 leading-relaxed text-ivory-muted">{circuit.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <h2 className="font-display text-4xl text-ivory md:text-5xl">{tourism.includedTitle}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="divide-y divide-ink-line border-y border-ink-line">
              {tourism.included.map((item) => (
                <li key={item} className="flex items-center gap-4 py-5 text-ivory">
                  <CheckIcon className="h-5 w-5 shrink-0 text-gold" /> {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <Commitment commitment={dict.commitment} />
      <FinalCta lang={lang} dict={dict} />
    </>
  );
}
