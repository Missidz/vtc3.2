import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getDictionary } from '@/i18n/get-dictionary';
import { pageMetadata } from '@/i18n/metadata';
import { resolveLang } from '@/i18n/server';
import { breadcrumbSchema } from '@/i18n/schema';
import JsonLd from '../../components/JsonLd';
import { site } from '@/i18n/site';
import ContactForm from '../../components/ContactForm';
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
        data={breadcrumbSchema(lang, dict.nav.home, [{ key: 'contact', name: dict.nav.contact }])}
      />
      <PageHeader h1={dict.meta.contact.h1} title={contact.title} intro={contact.intro} />
      <section className="py-24 md:py-32">
        <Container className="grid gap-20 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <Suspense>
              <ContactForm lang={lang} contact={contact} />
            </Suspense>
          </Reveal>
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
    </>
  );
}
