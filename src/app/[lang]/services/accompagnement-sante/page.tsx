import type { Metadata } from 'next';
import { getDictionary } from '@/i18n/get-dictionary';
import { pageMetadata } from '@/i18n/metadata';
import { resolveLang } from '@/i18n/server';
import Commitment from '../../../components/Commitment';
import FinalCta from '../../../components/FinalCta';
import Reveal from '../../../components/Reveal';
import Visual from '../../../components/Visual';
import { CheckIcon, WheelchairIcon } from '../../../components/Icons';
import { images } from '../../../components/images';
import { ButtonLink, Container, Eyebrow } from '../../../components/ui';

type Props = { params: { lang: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = resolveLang(params.lang);
  return pageMetadata(lang, '/services/accompagnement-sante', (await getDictionary(lang)).meta.health);
}

export default async function Health({ params }: Props) {
  const lang = resolveLang(params.lang);
  const dict = await getDictionary(lang);
  const { health } = dict;

  return (
    <>
      <section className="pb-24 pt-40 md:pb-32 md:pt-48">
        <Container className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>{health.eyebrow}</Eyebrow>
            <h1 className="mt-6 font-display text-5xl font-medium leading-[1.05] text-ivory md:text-7xl">{health.title}</h1>
            <p className="mt-8 text-lg leading-relaxed text-ivory-muted">{health.intro}</p>

            {/* Mention obligatoire, volontairement très visible */}
            <div className="mt-10 border border-gold p-6">
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold">{health.requirementTitle}</p>
              <p className="mt-3 flex items-center gap-3 font-display text-2xl text-ivory md:text-3xl">
                <WheelchairIcon className="h-7 w-7 shrink-0 text-gold" />
                {health.requirement}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ivory-muted">{health.requirementText}</p>
            </div>

            <ButtonLink href={`/${lang}/contact?service=health`} className="mt-10">
              {health.cta}
            </ButtonLink>
          </Reveal>
          <Reveal delay={0.15}>
            <Visual src={images.health} alt={health.title} placeholder="VTC 37" className="aspect-[4/5]" priority />
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-ink-line bg-ink-2 py-24 md:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <h2 className="font-display text-4xl text-ivory md:text-5xl">{health.pointsTitle}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="divide-y divide-ink-line border-y border-ink-line">
              {health.points.map((point) => (
                <li key={point} className="flex items-center gap-4 py-5 text-ivory">
                  <CheckIcon className="h-5 w-5 shrink-0 text-gold" /> {point}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-ivory-muted">{health.disclaimer}</p>
          </Reveal>
        </Container>
      </section>

      <Commitment commitment={dict.commitment} />
      <FinalCta lang={lang} dict={dict} />
    </>
  );
}
