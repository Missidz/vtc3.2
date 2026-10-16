/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0B0B0C', 2: '#141517', 3: '#1C1D20', line: '#2A2B2E' },
        ivory: { DEFAULT: '#F3EFE7', muted: '#A39E94' },
        gold: { DEFAULT: '#C6A769', light: '#D8BF8A', dark: '#9C8250' },
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
