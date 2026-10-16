import type { Dictionary } from '@/i18n/get-dictionary';
import Reveal from './Reveal';
import { Container, Eyebrow } from './ui';

export default function Commitment({ commitment }: { commitment: Dictionary['commitment'] }) {
  return (
    <section className="relative overflow-hidden border-y border-ink-line bg-ink-2 py-28 md:py-36">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(198,167,105,0.10),transparent_60%)]"
        aria-hidden
      />
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center">{commitment.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-5xl font-medium italic text-ivory md:text-6xl">{commitment.title}</h2>
          <p className="mt-8 text-lg leading-relaxed text-ivory-muted">{commitment.text}</p>
          <ul className="mt-12 flex flex-col items-center justify-center gap-4 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-ivory sm:flex-row sm:gap-8">
            {commitment.points.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
