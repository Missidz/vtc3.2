import { notFound } from 'next/navigation';
import { isLocale, type Locale } from './config';

/** Valide le segment [lang] de l'URL, sinon affiche la page 404. */
export function resolveLang(value: string): Locale {
  if (!isLocale(value)) notFound();
  return value;
}
