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
import { ButtonLink, Container, Eyebrow } from '../../components/ui';
import { href } from '@/i18n/routes';

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
      <section className="pb-16 pt-40 md:pt-48">
        <Container className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <Eyebrow as="h1">{dict.meta.vehicle.h1}</Eyebrow>
            <p className="mt-6 font-display text-6xl font-medium leading-none text-ivory md:text-8xl">{vehicle.title}</p>
            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-gold">{vehicle.tagline}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <Visual
              src={images.vehicle}
              alt={`${vehicle.title} · ${vehicle.tagline}`}
              placeholder="BYD SEAL"
              className="mx-auto aspect-[3/4] max-w-md"
              priority
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="text-lg leading-relaxed text-ivory-muted">{vehicle.intro}</p>
            <dl className="mt-10 grid grid-cols-2 gap-px border border-ink-line bg-ink-line">
              {vehicle.specs.map((spec) => (
                <div key={spec.label} className="bg-ink p-6">
                  <dt className="text-[0.65rem] uppercase tracking-[0.2em] text-ivory-muted">{spec.label}</dt>
                  <dd className="mt-2 font-display text-2xl text-ivory">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl text-ivory">{vehicle.featuresTitle}</h2>
            <ul className="mt-8 divide-y divide-ink-line border-y border-ink-line">
              {vehicle.features.map((feature) => (
                <li key={feature} className="flex items-center gap-4 py-4 text-ivory">
                  <CheckIcon className="h-5 w-5 shrink-0 text-gold" /> {feature}
                </li>
              ))}
            </ul>
            <ButtonLink href={href(lang, 'contact')} className="mt-10">
              {vehicle.cta}
            </ButtonLink>
          </Reveal>
        </Container>
      </section>

      <FinalCta lang={lang} dict={dict} />
    </>
  );
}
