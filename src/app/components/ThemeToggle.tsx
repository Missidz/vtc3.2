'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

/** Bouton soleil / lune : bascule le thème et mémorise le choix du visiteur. */
export default function ThemeToggle({ labels }: { labels: { light: string; dark: string } }) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {}
  };

  const label = theme === 'dark' ? labels.light : labels.dark;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink-line text-ivory transition-[color,border-color,transform] duration-200 ease-premium hover:border-gold hover:text-gold active:scale-[0.94]"
    >
      {/* Les deux icônes sont superposées : fondu + léger flou pour masquer le changement (Emil Kowalski) */}
      <svg
        className={`absolute h-4 w-4 transition-[opacity,transform,filter] duration-200 ease-premium ${
          theme === 'dark' ? 'scale-100 opacity-100 blur-0' : 'scale-75 opacity-0 blur-[2px]'
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        aria-hidden
      >
        <circle cx="12" cy="12" r="4" />
        <path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
      <svg
        className={`absolute h-4 w-4 transition-[opacity,transform,filter] duration-200 ease-premium ${
          theme === 'light' ? 'scale-100 opacity-100 blur-0' : 'scale-75 opacity-0 blur-[2px]'
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}
