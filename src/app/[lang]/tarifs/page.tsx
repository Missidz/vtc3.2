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
      <PageHeader h1={dict.meta.rates.h1} title={rates.title} intro={rates.intro} />
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-px border border-ink-line bg-ink-line md:grid-cols-3">
            {rates.items.map((item, i) => (
              <Reveal key={item.title} delay={0.08 * i} className="h-full">
                <article className="flex h-full flex-col bg-ink p-10">
                  <h2 className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ivory-muted">{item.title}</h2>
                  <p className="mt-8 font-display text-6xl text-ivory">{item.price}</p>
                  <p className="mt-6 border-t border-ink-line pt-6 text-sm text-ivory-muted">{item.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-8 text-sm text-ivory-muted">{rates.note}</p>
          </Reveal>
        </Container>
      </section>
      <Commitment commitment={dict.commitment} />
      <FinalCta lang={lang} dict={dict} />
    </>
  );
}
