import type { Metadata } from 'next';
import { getDictionary } from '@/i18n/get-dictionary';
import { pageMetadata } from '@/i18n/metadata';
import { resolveLang } from '@/i18n/server';
import { breadcrumbSchema, faqSchema } from '@/i18n/schema';
import JsonLd from '../../components/JsonLd';
import Commitment from '../../components/Commitment';
import Faq from '../../components/Faq';
import FinalCta from '../../components/FinalCta';
import ServiceGrid from '../../components/ServiceGrid';
import { Container, PageHeader } from '../../components/ui';

type Props = { params: { lang: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = resolveLang(params.lang);
  return pageMetadata(lang, 'services', (await getDictionary(lang)).meta.services);
}

export default async function Services({ params }: Props) {
  const lang = resolveLang(params.lang);
  const dict = await getDictionary(lang);

  return (
    <>
      <JsonLd
        data={[breadcrumbSchema(lang, dict.nav.home, [{ key: 'services', name: dict.nav.services }]), faqSchema(dict.faq.items)]}
      />
      <PageHeader h1={dict.meta.services.h1} title={dict.servicesSection.title} intro={dict.servicesSection.intro} />
      <section className="py-24 md:py-32">
        <Container>
          <ServiceGrid lang={lang} dict={dict} />
        </Container>
      </section>
      <Commitment commitment={dict.commitment} />
      <Faq faq={dict.faq} />
      <FinalCta lang={lang} dict={dict} />
    </>
  );
}
