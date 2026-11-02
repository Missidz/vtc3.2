import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/get-dictionary';
import { bookingHref } from '@/i18n/routes';
import { site } from '@/i18n/site';
import { MailIcon, PhoneIcon, WhatsAppIcon, WheelchairIcon } from './Icons';

/** Barre fixe en bas de l'écran sur mobile : contact, appel, WhatsApp et transport PMR en un geste. */
export default function MobileActionBar({ lang, labels }: { lang: Locale; labels: Dictionary['mobileBar'] }) {
  const item =
    'flex flex-1 flex-col items-center justify-center gap-1 py-3 text-xs font-semibold transition-transform duration-150 ease-premium active:scale-[0.95]';
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 flex bg-ink-2 pb-[env(safe-area-inset-bottom)] md:hidden">
      <Link href={bookingHref(lang)} className={`${item} bg-gold text-ink`}>
        <MailIcon className="h-5 w-5" /> {labels.contact}
      </Link>
      <a href={site.phoneHref} className={`${item} text-ivory`}>
        <PhoneIcon className="h-5 w-5" /> {labels.call}
      </a>
      <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className={`${item} text-ivory`}>
        <WhatsAppIcon className="h-5 w-5" /> {labels.whatsapp}
      </a>
      <Link href={bookingHref(lang, 'pmr')} className={`${item} bg-gold/[0.15] text-gold`}>
        <WheelchairIcon className="h-5 w-5" /> {labels.pmr}
      </Link>
    </nav>
  );
}
