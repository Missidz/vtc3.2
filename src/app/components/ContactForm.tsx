'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import emailjs from '@emailjs/browser';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/get-dictionary';
import { site } from '@/i18n/site';
import { WheelchairIcon } from './Icons';

type ServiceKey = keyof Dictionary['contact']['serviceOptions'];
type Props = { lang: Locale; contact: Dictionary['contact'] };

const emptyForm = { name: '', email: '', phone: '', service: '', date: '', message: '' };

export default function ContactForm({ lang, contact }: Props) {
  const { form, serviceOptions } = contact;
  const preselected = useSearchParams()?.get('service') ?? '';
  const [data, setData] = useState({
    ...emptyForm,
    service: preselected in serviceOptions ? preselected : '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

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
          message: `Date souhaitée : ${data.date || '-'}\nLangue du client : ${lang.toUpperCase()}\n\n${data.message}`,
        },
        'papgmzAJAEHYQ2tnG',
      );
      setStatus('success');
      setData(emptyForm);
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      setStatus('error');
    }
  };

  const field =
    'w-full border-0 border-b border-ink-line bg-transparent px-0 py-3 text-ivory placeholder-ivory-muted/50 transition-colors focus:border-gold focus:outline-none focus:ring-0';
  const label = 'block text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ivory-muted';

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
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
          <input type="email" name="email" value={data.email} onChange={handleChange} required autoComplete="email" className={field} />
        </label>
        <label className={label}>
          {form.date}
          <input type="datetime-local" name="date" value={data.date} onChange={handleChange} className={`${field} [color-scheme:dark]`} />
        </label>
      </div>

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

      {data.service === 'health' && (
        <label className="flex items-start gap-4 border border-gold/50 p-5 text-sm leading-relaxed text-ivory">
          <input type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-[#C6A769]" />
          <span>
            <span className="mb-2 flex items-center gap-2 font-semibold uppercase tracking-[0.15em] text-gold">
              <WheelchairIcon /> {contact.serviceOptions.health}
            </span>
            {form.healthConsent}
          </span>
        </label>
      )}

      <label className={label}>
        {form.message}
        <textarea name="message" value={data.message} onChange={handleChange} rows={4} required className={`${field} resize-none`} />
      </label>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-gold px-8 py-5 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors duration-500 hover:bg-gold-light disabled:cursor-wait disabled:opacity-60"
      >
        {status === 'loading' ? form.sending : form.submit}
      </button>
    </form>
  );
}
