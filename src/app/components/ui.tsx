import Link from 'next/link';
import Reveal from './Reveal';

/** Titre de section : le titre porte seul le message (pas de sur-titre, cf. Impeccable). */
export function SectionHeader({ title, intro, center = false }: { title: string; intro?: string; center?: boolean }) {
  return (
    <Reveal className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <h2 className="text-balance font-display text-4xl font-medium leading-[1.1] text-ivory md:text-5xl">{title}</h2>
      {intro && <p className="mt-6 text-base leading-relaxed text-ivory md:text-lg">{intro}</p>}
    </Reveal>
  );
}

// Boutons plats, une seule couleur de remplissage, sans contour (Taste)
const buttonStyles = {
  primary: 'bg-gold text-ink hover:bg-gold-light',
  secondary: 'bg-ink-3 text-ivory hover:bg-ink-line',
  accent: 'bg-gold/[0.15] text-gold hover:bg-gold/25',
  inverse: 'bg-ink text-ivory hover:bg-ink-2',
  onGold: 'bg-ink/10 text-ink hover:bg-ink/20',
  ghost: 'text-ivory underline decoration-gold/60 underline-offset-[0.35em] hover:text-gold',
};

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof buttonStyles;
  external?: boolean;
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center gap-3 whitespace-nowrap px-7 py-4 text-[0.95rem] font-semibold transition-[background-color,border-color,color,transform] duration-200 ease-premium active:scale-[0.97] ${buttonStyles[variant]} ${className}`;
  if (external || href.startsWith('tel:')) {
    return (
      <a href={href} className={classes} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

/**
 * En-tête des pages intérieures : le H1 est le grand titre, court et riche en mots-clés.
 * `compact` : en-tête réduit sur mobile (intro masquée) pour afficher le contenu sans défiler.
 */
export function PageHeader({ title, intro, compact = false }: { title: string; intro?: string; compact?: boolean }) {
  return (
    <header className={`bg-ink-2 md:pb-28 md:pt-48 ${compact ? 'pb-6 pt-28' : 'pb-16 pt-36'}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <Reveal className="max-w-4xl">
          <h1 className="text-balance font-display text-4xl font-medium leading-[1.05] text-ivory sm:text-5xl md:text-7xl">
            {title}
          </h1>
          {intro && (
            <p className={`mt-8 max-w-2xl text-lg leading-relaxed text-ivory ${compact ? 'hidden md:block' : ''}`}>{intro}</p>
          )}
        </Reveal>
      </div>
    </header>
  );
}

export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`container mx-auto px-6 lg:px-12 ${className}`}>{children}</div>;
}
