import type { Dictionary } from '@/i18n/get-dictionary';
import Reveal from './Reveal';
import { Container } from './ui';

/** Engagement « Jamais sans solution » : un champ de couleur plein, titre à gauche, preuve à droite. */
export default function Commitment({ commitment }: { commitment: Dictionary['commitment'] }) {
  return (
    <section className="bg-ink-2 py-28 md:py-40">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <h2 className="text-balance font-display text-5xl font-medium leading-[1.02] text-ivory md:text-7xl">{commitment.title}</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-lg leading-relaxed text-ivory md:text-xl">{commitment.text}</p>
          <ul className="mt-10 grid gap-x-10 gap-y-4 text-lg text-ivory-muted sm:grid-cols-3">
            {commitment.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
