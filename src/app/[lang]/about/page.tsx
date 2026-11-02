import type { Metadata } from 'next';
import { getDictionary } from '@/i18n/get-dictionary';
import { pageMetadata } from '@/i18n/metadata';
import { resolveLang } from '@/i18n/server';
import { breadcrumbSchema } from '@/i18n/schema';
import JsonLd from '../../components/JsonLd';
import Commitment from '../../components/Commitment';
import FinalCta from '../../components/FinalCta';
import Reveal from '../../components/Reveal';
import Visual from '../../components/Visual';
import { images } from '../../components/images';
import { Container, PageHeader } from '../../components/ui';

type Props = { params: { lang: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = resolveLang(params.lang);
  return pageMetadata(lang, 'about', (await getDictionary(lang)).meta.about);
}

export default async function About({ params }: Props) {
  const lang = resolveLang(params.lang);
  const dict = await getDictionary(lang);
  const { about } = dict;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(lang, dict.nav.home, [{ key: 'about', name: dict.nav.about }])}
      />
      <PageHeader title={dict.meta.about.h1} />
      <section className="py-24 md:py-32">
        <Container className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <Visual src={images.about} alt={dict.meta.about.h1} className="aspect-[4/3]" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl leading-relaxed text-ivory md:text-2xl">{about.intro}</p>
          </Reveal>
        </Container>
        {/* Valeurs en liste : titre à gauche, texte à droite */}
        <Container className="mt-24">
          <ul className="space-y-10 md:space-y-14">
            {about.values.map((value, i) => (
              <li key={value.title}>
                <Reveal delay={0.06 * i} className="grid gap-3 md:grid-cols-[1fr_1.4fr] md:gap-12">
                  <h2 className="font-display text-3xl text-ivory md:text-4xl">{value.title}</h2>
                  <p className="text-lg leading-relaxed text-ivory">{value.text}</p>
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
