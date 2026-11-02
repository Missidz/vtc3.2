const c = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  // Les effets de survol ne s'appliquent qu'aux appareils à pointeur précis (pas au tap sur mobile)
  future: { hoverOnlyWhenSupported: true },
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
      keyframes: {
        rise: { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'none' } },
        drift: { from: { transform: 'scale(1.08)' }, to: { transform: 'scale(1)' } },
      },
      animation: {
        // Animation CSS du hero : visible sans attendre le JavaScript (meilleur LCP)
        rise: 'rise 0.8s cubic-bezier(0.23, 1, 0.32, 1) both',
        // Photo du hero qui se pose lentement (« une image qui bouge », Taste)
        drift: 'drift 18s cubic-bezier(0.23, 1, 0.32, 1) both',
      },
      transitionTimingFunction: {
        // Courbes fortes recommandées par Emil Kowalski
        premium: 'cubic-bezier(0.23, 1, 0.32, 1)',
        'in-out-strong': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
    },
  },
  plugins: [],
};
