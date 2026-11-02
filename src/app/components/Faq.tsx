import type { Dictionary } from '@/i18n/get-dictionary';
import Reveal from './Reveal';
import { Container, SectionHeader } from './ui';

export default function Faq({ faq }: { faq: { title: string; items: Dictionary['faq']['items'] } }) {
  return (
    <section className="py-28 md:py-36">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <SectionHeader title={faq.title} />
        {/* Questions séparées par l'espace, sans filets (Taste) */}
        <Reveal className="space-y-3">
          {faq.items.map((item) => (
            <details key={item.q} className="group bg-ink-2 px-6 py-5 open:pb-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium text-ivory transition-colors group-open:text-gold [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="relative h-3 w-3 shrink-0" aria-hidden>
                  <span className="absolute left-0 top-1/2 h-0.5 w-3 -translate-y-1/2 bg-current" />
                  <span className="absolute left-1/2 top-0 h-3 w-0.5 -translate-x-1/2 bg-current transition-transform duration-200 ease-premium group-open:scale-y-0" />
                </span>
              </summary>
              <p className="mt-4 max-w-2xl leading-relaxed text-ivory">{item.a}</p>
            </details>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
