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
      <PageHeader title={dict.meta.contact.h1} intro={contact.intro} compact />

      {/* Mobile : formulaire en premier, étapes ensuite. Ordinateur : étapes au-dessus. */}
      <div className="flex flex-col">
        {/* Réserver en 3 étapes */}
        <section className="order-2 bg-ink-2 md:order-1">
          <Container>
            <h2 className="sr-only">{contact.steps.title}</h2>
            <Reveal>
              {/* Vraie liste ordonnée : l'ordre des étapes compte (Taste l'autorise) */}
              <ol className="grid gap-8 py-10 md:grid-cols-3 md:gap-12 md:pb-12 md:pt-0">
                {contact.steps.items.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="font-display text-3xl leading-none text-gold">{i + 1}.</span>
                    <span>
                      <span className="block font-display text-2xl text-ivory">{step.title}</span>
                      <span className="mt-2 block leading-relaxed text-ivory">{step.text}</span>
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
                  <h2 className="font-display text-3xl text-ivory">{contact.directTitle}</h2>
                  <ul className="mt-6 space-y-2">
                    {direct.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className="flex items-center gap-4 break-all bg-ink-2 px-5 py-4 text-lg text-ivory transition-[background-color,color,transform] duration-200 hover:bg-ink-3 hover:text-gold active:scale-[0.98]"
                        >
                          <span className="text-gold">{item.icon}</span> {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-ink-2 p-8">
                  <p className="font-display text-3xl text-ivory">{commitment.title}</p>
                  <p className="mt-4 leading-relaxed text-ivory">{commitment.text}</p>
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
