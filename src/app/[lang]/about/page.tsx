import type { Metadata } from 'next';
import { getDictionary } from '@/i18n/get-dictionary';
import { pageMetadata } from '@/i18n/metadata';
import { resolveLang } from '@/i18n/server';
import Commitment from '../../components/Commitment';
import FinalCta from '../../components/FinalCta';
import Reveal from '../../components/Reveal';
import Visual from '../../components/Visual';
import { images } from '../../components/images';
import { Container, PageHeader } from '../../components/ui';

type Props = { params: { lang: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = resolveLang(params.lang);
  return pageMetadata(lang, '/about', (await getDictionary(lang)).meta.about);
}

export default async function About({ params }: Props) {
  const lang = resolveLang(params.lang);
  const dict = await getDictionary(lang);
  const { about } = dict;

  return (
    <>
      <PageHeader eyebrow={about.eyebrow} title={about.title} />
      <section className="py-24 md:py-32">
        <Container className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <Visual src={images.about} alt={about.title} placeholder="VTC 37" className="aspect-[4/3]" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-2xl leading-relaxed text-ivory md:text-3xl">{about.intro}</p>
          </Reveal>
        </Container>
        <Container className="mt-24 grid gap-px border border-ink-line bg-ink-line md:grid-cols-3">
          {about.values.map((value, i) => (
            <Reveal key={value.title} delay={0.08 * i} className="h-full">
              <article className="h-full bg-ink p-10">
                <span className="font-display text-lg italic text-gold/80">0{i + 1}</span>
                <h2 className="mt-4 font-display text-3xl text-ivory">{value.title}</h2>
                <p className="mt-4 leading-relaxed text-ivory-muted">{value.text}</p>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>
      <Commitment commitment={dict.commitment} />
      <FinalCta lang={lang} dict={dict} />
    </>
  );
}
