import type { Metadata } from 'next';
import Image from 'next/image';
import { getDictionary } from '@/i18n/get-dictionary';
import { pageMetadata } from '@/i18n/metadata';
import { resolveLang } from '@/i18n/server';
import { site } from '@/i18n/site';
import JsonLd from '../components/JsonLd';
import { faqSchema } from '@/i18n/schema';
import Commitment from '../components/Commitment';
import Faq from '../components/Faq';
import QuickContact from '../components/QuickContact';
import FinalCta from '../components/FinalCta';
import Reveal from '../components/Reveal';
import ServiceGrid from '../components/ServiceGrid';
import Visual from '../components/Visual';
import { ArrowIcon, MailIcon, PhoneIcon, WhatsAppIcon, WheelchairIcon } from '../components/Icons';
import { images } from '../components/images';
import { ButtonLink, Container, Eyebrow, SectionHeader } from '../components/ui';
import { href } from '@/i18n/routes';

type Props = { params: { lang: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = resolveLang(params.lang);
  const { title, description } = (await getDictionary(lang)).meta.home;
  return { ...pageMetadata(lang, 'home', { title, description }), title: { absolute: title } };
}

export default async function Home({ params }: Props) {
  const lang = resolveLang(params.lang);
  const dict = await getDictionary(lang);
  const { hero, pillars, servicesSection, tourism, vehicle, areas } = dict;

  return (
    <>
      <JsonLd data={faqSchema(dict.faq.items)} />

      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden pb-32 pt-32 md:items-center md:pb-24">
        {images.hero && (
          <Image src={images.hero} alt={hero.imageAlt} fill priority sizes="100vw" className="object-cover opacity-70" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" aria-hidden />
        <Container className="relative">
          <div className="max-w-3xl animate-rise">
            {/* H1 = mots-clés (chauffeur privé + ville), slogan en grand juste en dessous */}
            <Eyebrow as="h1">{hero.eyebrow}</Eyebrow>
            <p className="mt-8 font-display text-5xl font-medium leading-[1.02] text-ivory sm:text-6xl md:text-8xl">
              {hero.title}
            </p>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ivory/80">{hero.subtitle}</p>
            <div className="mt-12 grid max-w-2xl gap-3 sm:grid-cols-2">
              <ButtonLink href={href(lang, 'contact')}>
                <MailIcon /> {dict.common.contactCta}
              </ButtonLink>
              <ButtonLink href={site.phoneHref} variant="outline">
                <PhoneIcon /> {site.phone}
              </ButtonLink>
              <ButtonLink href={site.whatsappHref} variant="outline" external>
                <WhatsAppIcon /> {dict.common.whatsapp}
              </ButtonLink>
              <ButtonLink href={`${href(lang, 'contact')}?service=pmr`} variant="accent">
                <WheelchairIcon /> {dict.nav.pmr}
              </ButtonLink>
            </div>
            <ul className="mt-14 flex flex-col gap-3 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ivory-muted sm:flex-row sm:gap-8">
              {hero.trust.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Contact rapide : téléphone, WhatsApp, transport PMR */}
      <QuickContact lang={lang} dict={dict} />

      {/* Piliers */}
      <section className="border-y border-ink-line bg-ink-2">
        <Container className="grid divide-y divide-ink-line md:grid-cols-2 md:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={0.08 * i} className="py-10 lg:px-8 lg:first:pl-0 lg:last:pr-0">
              <h2 className="font-display text-2xl text-ivory">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ivory-muted">{pillar.text}</p>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Services */}
      <section className="py-28 md:py-36">
        <Container>
          <SectionHeader eyebrow={servicesSection.eyebrow} title={servicesSection.title} intro={servicesSection.intro} />
          <div className="mt-16">
            <ServiceGrid lang={lang} dict={dict} />
          </div>
        </Container>
      </section>

      {/* Tourisme en Touraine */}
      <section className="pb-28 md:pb-36">
        <Container className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <Visual src={images.tourism} alt={tourism.title} placeholder="Val de Loire" className="aspect-[4/5]" />
          </Reveal>
          <div>
            <SectionHeader eyebrow={tourism.eyebrow} title={tourism.title} intro={tourism.intro} />
            <Reveal delay={0.1}>
              <ul className="mt-10 divide-y divide-ink-line border-y border-ink-line">
                {tourism.circuits.map((circuit) => (
                  <li key={circuit.title} className="flex items-baseline justify-between gap-6 py-5">
                    <span className="font-display text-2xl text-ivory">{circuit.title}</span>
                    <span className="shrink-0 text-xs uppercase tracking-[0.15em] text-ivory-muted">{circuit.duration}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink href={href(lang, 'tourism')} variant="ghost" className="mt-8 px-0">
                {dict.common.learnMore} <ArrowIcon className="h-4 w-4 text-gold" />
              </ButtonLink>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Le véhicule */}
      <section className="border-t border-ink-line bg-ink-2 py-28 md:py-36">
        <Container className="grid items-center gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div className="lg:order-2">
            <Reveal>
              <Visual src={images.vehicle} alt={`${vehicle.title} · ${vehicle.tagline}`} placeholder="SEAL" className="mx-auto aspect-[3/4] max-w-md" />
            </Reveal>
          </div>
          <div>
            <SectionHeader eyebrow={vehicle.eyebrow} title={vehicle.title} intro={vehicle.tagline} />
            <Reveal delay={0.1}>
              <dl className="mt-10 grid grid-cols-2 gap-px border border-ink-line bg-ink-line">
                {vehicle.specs.map((spec) => (
                  <div key={spec.label} className="bg-ink-2 p-5">
                    <dt className="text-[0.65rem] uppercase tracking-[0.2em] text-ivory-muted">{spec.label}</dt>
                    <dd className="mt-2 font-display text-xl text-ivory">{spec.value}</dd>
                  </div>
                ))}
              </dl>
              <ButtonLink href={href(lang, 'vehicle')} variant="ghost" className="mt-8 px-0">
                {dict.common.learnMore} <ArrowIcon className="h-4 w-4 text-gold" />
              </ButtonLink>
            </Reveal>
          </div>
        </Container>
      </section>

      <Commitment commitment={dict.commitment} />

      {/* Zones desservies : référencement local */}
      <section className="pt-28 md:pt-36">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeader eyebrow={areas.eyebrow} title={areas.title} intro={areas.text} />
          <Reveal delay={0.1}>
            <ul className="flex flex-wrap gap-3 lg:pt-12">
              {areas.cities.map((city) => (
                <li key={city} className="border border-ink-line px-4 py-2 text-sm text-ivory-muted">
                  {city}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <Faq faq={dict.faq} />
      <FinalCta lang={lang} dict={dict} />
    </>
  );
}
