import type { Metadata } from 'next';
import { getDictionary } from '@/i18n/get-dictionary';
import { pageMetadata } from '@/i18n/metadata';
import { resolveLang } from '@/i18n/server';
import { breadcrumbSchema } from '@/i18n/schema';
import JsonLd from '../../components/JsonLd';
import FinalCta from '../../components/FinalCta';
import Reveal from '../../components/Reveal';
import Visual from '../../components/Visual';
import { CheckIcon } from '../../components/Icons';
import { images } from '../../components/images';
import { ButtonLink, Container } from '../../components/ui';
import { bookingHref } from '@/i18n/routes';

type Props = { params: { lang: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = resolveLang(params.lang);
  return pageMetadata(lang, 'vehicle', (await getDictionary(lang)).meta.vehicle);
}

export default async function Vehicle({ params }: Props) {
  const lang = resolveLang(params.lang);
  const dict = await getDictionary(lang);
  const { vehicle } = dict;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(lang, dict.nav.home, [{ key: 'vehicle', name: dict.nav.vehicle }])}
      />
      {/* En-tête : la photo de la voiture occupe la moitié de l'écran, texte et action à côté */}
      <section className="pb-20 pt-36 md:pb-28 md:pt-48">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h1 className="text-balance font-display text-4xl font-medium leading-[1.02] text-ivory sm:text-5xl lg:text-6xl">{dict.meta.vehicle.h1}</h1>
            <p className="mt-6 text-xl text-ivory">{vehicle.tagline}</p>
            <p className="mt-6 text-lg leading-relaxed text-ivory">{vehicle.intro}</p>
            <ButtonLink href={bookingHref(lang)} className="mt-10">
              {vehicle.cta}
            </ButtonLink>
          </Reveal>
          <Reveal delay={0.12}>
            <Visual
              src={images.vehicle}
              alt={`${vehicle.title} · ${vehicle.tagline}`}
              className="mx-auto aspect-[3/4] max-w-md"
              priority
            />
          </Reveal>
        </Container>
      </section>

      {/* Fiche technique et équipements, sur un champ de couleur, sans cases ni filets */}
      <section className="bg-ink-2 py-24 md:py-32">
        <Container className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-10">
              {vehicle.specs.map((spec) => (
                <div key={spec.label}>
                  <dt className="text-[0.95rem] text-ivory-muted">{spec.label}</dt>
                  <dd className="mt-1 font-display text-3xl text-ivory">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-4xl text-ivory md:text-5xl">{vehicle.featuresTitle}</h2>
            <ul className="mt-8 space-y-4">
              {vehicle.features.map((feature) => (
                <li key={feature} className="flex items-start gap-4 text-lg text-ivory">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-gold" /> {feature}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <FinalCta lang={lang} dict={dict} />
    </>
  );
}
