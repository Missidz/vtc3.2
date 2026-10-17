const c = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      // Couleurs pilotées par des variables CSS (thème clair / sombre, voir globals.css)
      colors: {
        ink: { DEFAULT: c('ink'), 2: c('ink-2'), 3: c('ink-3'), line: c('ink-line') },
        ivory: { DEFAULT: c('ivory'), muted: c('ivory-muted') },
        gold: { DEFAULT: c('gold'), light: c('gold-light'), dark: c('gold-dark') },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.28em',
      },
      keyframes: {
        rise: { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'none' } },
      },
      animation: {
        // Animation CSS du hero : visible sans attendre le JavaScript (meilleur LCP)
        rise: 'rise 1.1s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
