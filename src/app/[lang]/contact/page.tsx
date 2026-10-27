import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getDictionary } from '@/i18n/get-dictionary';
import { pageMetadata } from '@/i18n/metadata';
import { resolveLang } from '@/i18n/server';
import { breadcrumbSchema, contactPageSchema, faqSchema } from '@/i18n/schema';
import JsonLd from '../../components/JsonLd';
import { site } from '@/i18n/site';
import ContactForm from '../../components/ContactForm';
import Faq from '../../components/Faq';
import Reveal from '../../components/Reveal';
import { MailIcon, PhoneIcon, WhatsAppIcon } from '../../components/Icons';
import { Container, PageHeader } from '../../components/ui';

type Props = { params: { lang: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = resolveLang(params.lang);
  return pageMetadata(lang, 'contact', (await getDictionary(lang)).meta.contact);
}

export default async function Contact({ params }: Props) {
  const lang = resolveLang(params.lang);
  const dict = await getDictionary(lang);
  const { contact, commitment } = dict;
  const direct = [
    { href: site.phoneHref, label: site.phone, icon: <PhoneIcon className="h-5 w-5" /> },
    { href: site.whatsappHref, label: 'WhatsApp', icon: <WhatsAppIcon className="h-5 w-5" />, external: true },
    { href: `mailto:${site.email}`, label: site.email, icon: <MailIcon className="h-5 w-5" /> },
  ];

  return (
    <>
      <JsonLd
        data={[
          contactPageSchema(lang, dict.meta.contact),
          breadcrumbSchema(lang, dict.nav.home, [{ key: 'contact', name: dict.nav.contact }]),
          faqSchema(contact.faq.items),
        ]}
      />
      <PageHeader h1={dict.meta.contact.h1} title={contact.title} intro={contact.intro} compact />

      {/* Mobile : formulaire en premier, étapes ensuite. Ordinateur : étapes au-dessus. */}
      <div className="flex flex-col">
        {/* Réserver en 3 étapes */}
        <section className="order-2 border-y border-ink-line md:order-1 md:border-t-0">
          <Container>
            <h2 className="sr-only">{contact.steps.title}</h2>
            <Reveal>
              <ol className="grid divide-y divide-ink-line md:grid-cols-3 md:divide-x md:divide-y-0">
                {contact.steps.items.map((step, i) => (
                  <li key={step.title} className="flex gap-5 py-8 md:px-8 md:first:pl-0 md:last:pr-0">
                    <span className="font-display text-4xl italic leading-none text-gold">{i + 1}</span>
                    <span>
                      <span className="block font-display text-2xl text-ivory">{step.title}</span>
                      <span className="mt-2 block text-sm leading-relaxed text-ivory-muted">{step.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </Container>
        </section>
        <section id="reservation" className="order-1 scroll-mt-20 pb-16 pt-8 md:order-2 md:py-32">
          <Container className="grid gap-20 lg:grid-cols-[1.5fr_1fr]">
            {/* Pas d'animation d'apparition : le formulaire doit être visible immédiatement */}
            <Suspense>
              <ContactForm lang={lang} contact={contact} />
            </Suspense>
            <Reveal delay={0.1}>
              <aside className="space-y-12">
                <div>
                  <p className="text-[0.7rem] font-medium uppercase tracking-eyebrow text-gold">{contact.directTitle}</p>
                  <ul className="mt-6 divide-y divide-ink-line border-y border-ink-line">
                    {direct.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className="flex items-center gap-4 break-all py-5 text-ivory transition-colors hover:text-gold"
                        >
                          <span className="text-gold">{item.icon}</span> {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-ink-line bg-ink-2 p-8">
                  <p className="text-[0.7rem] font-medium uppercase tracking-eyebrow text-gold">{commitment.eyebrow}</p>
                  <p className="mt-4 font-display text-3xl italic text-ivory">{commitment.title}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ivory-muted">{commitment.text}</p>
                </div>
              </aside>
            </Reveal>
          </Container>
        </section>
      </div>
      <Faq faq={contact.faq} />
    </>
  );
}
