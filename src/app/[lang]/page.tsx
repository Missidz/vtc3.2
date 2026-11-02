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
import { ButtonLink, Container, SectionHeader } from '../components/ui';
import { bookingHref, href } from '@/i18n/routes';

type Props = { params: { lang: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = resolveLang(params.lang);
  const { title, description } = (await getDictionary(lang)).meta.home;
  return { ...pageMetadata(lang, 'home', { title, description }), title: { absolute: title } };
}

export default async function Home({ params }: Props) {
  const lang = resolveLang(params.lang);
  const dict = await getDictionary(lang);
  const { hero, servicesSection, tourism, vehicle, areas, seoIntro } = dict;

  return (
    <>
      <JsonLd data={faqSchema(dict.faq.items)} />

      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden pb-32 pt-32 md:items-center md:pb-24">
        {images.hero && (
          <Image src={images.hero} alt={hero.imageAlt} fill priority sizes="100vw" className="animate-drift object-cover opacity-70" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" aria-hidden />
        <Container className="relative">
          <div className="max-w-3xl animate-rise">
            {/* H1 : le grand titre dit ce que c'est (« VTC Tours ») */}
            <h1 className="text-balance font-display text-5xl font-medium leading-[1.02] text-ivory sm:text-6xl md:text-8xl">
              {hero.h1}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ivory md:text-xl">{hero.subtitle}</p>
            <div className="mt-12 grid max-w-2xl gap-3 sm:grid-cols-2">
              <ButtonLink href={bookingHref(lang)}>
                <MailIcon /> {dict.common.contactCta}
              </ButtonLink>
              <ButtonLink href={site.phoneHref} variant="secondary">
                <PhoneIcon /> {site.phone}
              </ButtonLink>
              <ButtonLink href={site.whatsappHref} variant="secondary" external>
                <WhatsAppIcon /> {dict.common.whatsapp}
              </ButtonLink>
              <ButtonLink href={bookingHref(lang, 'pmr')} variant="accent">
                <WheelchairIcon /> {dict.nav.pmr}
              </ButtonLink>
            </div>
            <ul className="mt-12 flex flex-col gap-2 text-base text-ivory/[0.85] sm:flex-row sm:flex-wrap sm:gap-x-8">
              {hero.trust.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Contact rapide : téléphone, WhatsApp, transport PMR */}
      <QuickContact lang={lang} dict={dict} />

      {/* Services */}
      <section className="py-28 md:py-36">
        <Container>
          <SectionHeader title={servicesSection.title} intro={servicesSection.intro} />
          <div className="mt-16">
            <ServiceGrid lang={lang} dict={dict} />
          </div>
        </Container>
      </section>

      {/* Tourisme en Touraine */}
      <section className="pb-28 md:pb-36">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader title={tourism.title} intro={tourism.intro} />
            <Reveal delay={0.08}>
              <ButtonLink href={href(lang, 'tourism')} variant="ghost" className="mt-8 px-0">
                {dict.common.learnMore} <ArrowIcon className="h-4 w-4 text-gold" />
              </ButtonLink>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <ul className="space-y-8 bg-ink-2 p-8 md:p-12">
              {tourism.circuits.map((circuit) => (
                <li key={circuit.title}>
                  <p className="font-display text-3xl text-ivory">{circuit.title}</p>
                  <p className="mt-1 text-[0.95rem] text-gold">{circuit.duration}</p>
                  <p className="mt-3 leading-relaxed text-ivory">{circuit.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Le véhicule */}
      <section className="bg-ink-2 py-28 md:py-36">
        <Container className="grid items-center gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div className="lg:order-2">
            <Reveal>
              <Visual src={images.vehicle} alt={`${vehicle.title} · ${vehicle.tagline}`} className="mx-auto aspect-[3/4] max-w-md" />
            </Reveal>
          </div>
          <div>
            <SectionHeader title={vehicle.title} intro={vehicle.tagline} />
            <Reveal delay={0.1}>
              <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6">
                {vehicle.specs.map((spec) => (
                  <div key={spec.label}>
                    <dt className="text-[0.95rem] text-ivory-muted">{spec.label}</dt>
                    <dd className="mt-1 font-display text-2xl text-ivory">{spec.value}</dd>
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

      {/* Présentation « VTC Tours » : contenu textuel pour le référencement */}
      <section className="pt-28 md:pt-40">
        <Container>
          <SectionHeader title={seoIntro.title} />
          <Reveal delay={0.08} className="mt-12 grid gap-8 text-lg leading-relaxed text-ivory lg:grid-cols-3 lg:gap-12">
            {seoIntro.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Zones desservies : référencement local */}
      <section className="pt-28 md:pt-40">
        <Container>
          <SectionHeader title={areas.title} intro={areas.text} />
          <Reveal delay={0.08}>
            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-display text-2xl text-ivory md:text-3xl">
              {areas.cities.map((city) => (
                <li key={city}>{city}</li>
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
