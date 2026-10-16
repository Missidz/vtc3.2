import type { Dictionary } from '@/i18n/get-dictionary';
import Reveal from './Reveal';
import { Container, SectionHeader } from './ui';

export default function Faq({ faq }: { faq: Dictionary['faq'] }) {
  return (
    <section className="py-28 md:py-36">
      <Container className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeader eyebrow={faq.eyebrow} title={faq.title} />
        <Reveal className="divide-y divide-ink-line border-y border-ink-line">
          {faq.items.map((item) => (
            <details key={item.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg text-ivory transition-colors group-open:text-gold [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="relative h-3 w-3 shrink-0" aria-hidden>
                  <span className="absolute left-0 top-1/2 h-px w-3 bg-current" />
                  <span className="absolute left-1/2 top-0 h-3 w-px bg-current transition-transform duration-300 group-open:scale-y-0" />
                </span>
              </summary>
              <p className="mt-4 max-w-2xl leading-relaxed text-ivory-muted">{item.a}</p>
            </details>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
