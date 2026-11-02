import type { Metadata } from 'next';
import { getDictionary } from '@/i18n/get-dictionary';
import { pageMetadata } from '@/i18n/metadata';
import { resolveLang } from '@/i18n/server';
import { breadcrumbSchema } from '@/i18n/schema';
import JsonLd from '../../components/JsonLd';
import Commitment from '../../components/Commitment';
import FinalCta from '../../components/FinalCta';
import Reveal from '../../components/Reveal';
import { Container, PageHeader } from '../../components/ui';

type Props = { params: { lang: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = resolveLang(params.lang);
  return pageMetadata(lang, 'rates', (await getDictionary(lang)).meta.rates);
}

export default async function Rates({ params }: Props) {
  const lang = resolveLang(params.lang);
  const dict = await getDictionary(lang);
  const { rates } = dict;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(lang, dict.nav.home, [{ key: 'rates', name: dict.nav.rates }])}
      />
      <PageHeader title={dict.meta.rates.h1} intro={rates.intro} />
      <section className="py-24 md:py-32">
        <Container>
          {/* Liste de prix : intitulé à gauche, prix en grand à droite, sans cases ni filets */}
          <ul className="space-y-12 md:space-y-16">
            {rates.items.map((item, i) => (
              <li key={item.title}>
                <Reveal delay={0.06 * i} className="grid items-baseline gap-3 md:grid-cols-[1fr_auto] md:gap-12">
                  <div>
                    <h2 className="text-balance font-display text-3xl text-ivory md:text-4xl">{item.title}</h2>
                    <p className="mt-2 text-lg text-ivory-muted">{item.note}</p>
                  </div>
                  <p className="font-display text-5xl tabular-nums text-gold md:text-7xl">{item.price}</p>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal>
            <p className="mt-16 text-[0.95rem] text-ivory-muted">{rates.note}</p>
          </Reveal>
        </Container>
      </section>
      <Commitment commitment={dict.commitment} />
      <FinalCta lang={lang} dict={dict} />
    </>
  );
}
