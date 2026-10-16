import { Cormorant_Garamond, Manrope } from 'next/font/google';

export const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

export const sans = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});
