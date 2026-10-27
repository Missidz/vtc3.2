'use client';

import { useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import emailjs from '@emailjs/browser';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/get-dictionary';
import { site } from '@/i18n/site';
import { MailIcon, WhatsAppIcon, WheelchairIcon } from './Icons';

type ServiceKey = keyof Dictionary['contact']['serviceOptions'];
type Props = { lang: Locale; contact: Dictionary['contact'] };

const emptyForm = {
  service: '',
  departure: '',
  arrival: '',
  day: '',
  time: '',
  passengers: '1',
  name: '',
  phone: '',
  email: '',
  details: '',
};
type FormData = typeof emptyForm;

/** Date du jour au format AAAA-MM-JJ (heure locale), pour interdire les dates passées. */
function today() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

/** « 2026-11-05 » → « jeudi 5 novembre 2026 » (ou en anglais). */
function formatDay(value: string, lang: Locale) {
  const [y, m, d] = value.split('-').map(Number);
  if (!y || !m || !d) return value;
  return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(y, m - 1, d));
}

/** Message standardisé, identique quel que soit le canal d'envoi (e-mail ou WhatsApp). */
function buildMessage(data: FormData, lang: Locale, contact: Dictionary['contact']) {
  const t = contact.message;
  const blank = '…';
  const sep = lang === 'fr' ? ' : ' : ': '; // typographie française : espace avant les deux-points
  const service = contact.serviceOptions[data.service as ServiceKey];
  const pickup = data.day ? `${formatDay(data.day, lang)}${data.time ? ` ${t.at} ${data.time}` : ''}` : data.time || blank;

  return [
    t.greeting,
    '',
    `${t.intro}${service ? `${sep}${service}` : ''}.`,
    '',
    `• ${t.departure}${sep}${data.departure || blank}`,
    `• ${t.arrival}${sep}${data.arrival || blank}`,
    `• ${t.pickup}${sep}${pickup}`,
    `• ${t.passengers}${sep}${data.passengers}`,
    data.service === 'pmr' ? `• ${t.pmr}` : null,
    data.details ? `• ${t.details}${sep}${data.details}` : null,
    '',
    `${t.name}${sep}${data.name || blank}`,
    `${t.phone}${sep}${data.phone || blank}`,
    data.email ? `${t.email}${sep}${data.email}` : null,
    '',
    t.closing,
  ]
    .filter((line) => line !== null)
    .join('\n');
}

export default function ContactForm({ lang, contact }: Props) {
  const { form, serviceOptions } = contact;
  const formRef = useRef<HTMLFormElement>(null);
  const preselected = useSearchParams()?.get('service') ?? '';
  const [data, setData] = useState<FormData>({
    ...emptyForm,
    service: preselected in serviceOptions ? preselected : '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const message = useMemo(() => buildMessage(data, lang, contact), [data, lang, contact]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') return;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await emailjs.send(
        'service_dlyt2ws',
        'template_acx7m0m',
        {
          to_email: site.email,
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          service: serviceOptions[data.service as ServiceKey] ?? data.service,
          message,
          // Champs détaillés, utilisables dans le modèle EmailJS si besoin
          depart: data.departure,
          arrivee: data.arrival,
          date: data.day,
          heure: data.time,
          passagers: data.passengers,
          langue: lang.toUpperCase(),
        },
        'papgmzAJAEHYQ2tnG',
      );
      setStatus('success');
      setData({ ...emptyForm, service: data.service });
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      setStatus('error');
    }
  };

  /** Même message, envoyé sur WhatsApp (après vérification des champs obligatoires). */
  const sendWhatsApp = () => {
    if (!formRef.current?.reportValidity()) return;
    window.open(`${site.whatsappHref}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  const field =
    'mt-2 block w-full border-0 border-b border-ink-line bg-transparent px-0 py-3 text-base normal-case tracking-normal text-ivory placeholder-ivory-muted/50 transition-colors focus:border-gold focus:outline-none focus:ring-0';
  const label = 'block text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ivory-muted';
  const legend = 'mb-6 font-display text-2xl text-ivory';

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-12">
      {status === 'success' && (
        <p role="status" className="border border-gold/50 bg-gold/10 p-4 text-sm text-ivory">
          {form.success}
        </p>
      )}
      {status === 'error' && (
        <p role="alert" className="border border-red-400/50 bg-red-400/10 p-4 text-sm text-ivory">
          {form.error}
        </p>
      )}

      <fieldset className="space-y-8">
        <legend className={legend}>{form.tripTitle}</legend>

        <label className={label}>
          {form.service}
          <select name="service" value={data.service} onChange={handleChange} required className={`${field} bg-ink`}>
            <option value="">{form.servicePlaceholder}</option>
            {(Object.keys(serviceOptions) as ServiceKey[]).map((key) => (
              <option key={key} value={key}>
                {serviceOptions[key]}
              </option>
            ))}
          </select>
        </label>

        <div className="grid gap-8 md:grid-cols-2">
          <label className={label}>
            {form.departure}
            <input
              name="departure"
              value={data.departure}
              onChange={handleChange}
              required
              autoComplete="street-address"
              placeholder={form.departurePlaceholder}
              className={field}
            />
          </label>
          <label className={label}>
            {form.arrival}
            <input name="arrival" value={data.arrival} onChange={handleChange} required placeholder={form.arrivalPlaceholder} className={field} />
          </label>
        </div>

        <div className="grid gap-8 sm:grid-cols-[1fr_1fr_auto]">
          <label className={label}>
            {form.day}
            <input type="date" name="day" value={data.day} min={today()} onChange={handleChange} required className={field} />
          </label>
          <label className={label}>
            {form.time}
            <input type="time" name="time" value={data.time} onChange={handleChange} required className={field} />
          </label>
          <label className={label}>
            {form.passengers}
            <select name="passengers" value={data.passengers} onChange={handleChange} className={`${field} bg-ink sm:w-24`}>
              {['1', '2', '3', '4'].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </label>
        </div>

        {data.service === 'pmr' && (
          <label className="flex items-start gap-4 border border-gold/50 p-5 text-sm leading-relaxed text-ivory">
            <input type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-[rgb(var(--c-gold))]" />
            <span>
              <span className="mb-2 flex items-center gap-2 font-semibold uppercase tracking-[0.15em] text-gold">
                <WheelchairIcon /> {serviceOptions.pmr}
              </span>
              {form.pmrConsent}
            </span>
          </label>
        )}
      </fieldset>

      <fieldset className="space-y-8">
        <legend className={legend}>{form.contactTitle}</legend>
        <div className="grid gap-8 md:grid-cols-2">
          <label className={label}>
            {form.name}
            <input name="name" value={data.name} onChange={handleChange} required autoComplete="name" className={field} />
          </label>
          <label className={label}>
            {form.phone}
            <input type="tel" name="phone" value={data.phone} onChange={handleChange} required autoComplete="tel" className={field} />
          </label>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <label className={label}>
            {form.email}
            <input type="email" name="email" value={data.email} onChange={handleChange} autoComplete="email" className={field} />
          </label>
          <label className={label}>
            {form.details}
            <input name="details" value={data.details} onChange={handleChange} placeholder={form.detailsPlaceholder} className={field} />
          </label>
        </div>
      </fieldset>

      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={sendWhatsApp}
          className="flex items-center justify-center gap-3 bg-gold px-8 py-5 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors duration-500 hover:bg-gold-light"
        >
          <WhatsAppIcon /> {form.whatsapp}
        </button>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="flex items-center justify-center gap-3 border border-gold/60 px-8 py-5 text-xs font-semibold uppercase tracking-[0.2em] text-ivory transition-colors duration-500 hover:border-gold hover:bg-gold/10 disabled:cursor-wait disabled:opacity-60"
        >
          <MailIcon /> {status === 'loading' ? form.sending : form.submit}
        </button>
      </div>
    </form>
  );
}
