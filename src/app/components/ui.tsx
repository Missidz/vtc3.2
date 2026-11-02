import Link from 'next/link';
import Reveal from './Reveal';

/** Titre de section : le titre porte seul le message (pas de sur-titre, cf. Impeccable). */
export function SectionHeader({ title, intro, center = false }: { title: string; intro?: string; center?: boolean }) {
  return (
    <Reveal className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <h2 className="text-balance font-display text-4xl font-medium leading-[1.1] text-ivory md:text-5xl">{title}</h2>
      {intro && <p className="mt-6 text-base leading-relaxed text-ivory-muted md:text-lg">{intro}</p>}
    </Reveal>
  );
}

const buttonStyles = {
  primary: 'bg-gold text-ink hover:bg-gold-light',
  outline: 'border border-gold/60 text-ivory hover:border-gold hover:bg-gold/10',
  accent: 'border border-gold text-gold hover:bg-gold hover:text-ink',
  ghost: 'text-ivory hover:text-gold',
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
  const classes = `inline-flex items-center justify-center gap-3 whitespace-nowrap px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-[background-color,border-color,color,transform] duration-200 ease-premium active:scale-[0.97] ${buttonStyles[variant]} ${className}`;
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
    <header
      className={`relative overflow-hidden border-b border-ink-line bg-ink-2 md:pb-28 md:pt-48 ${compact ? 'pb-6 pt-28' : 'pb-20 pt-40'}`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgb(var(--c-gold)/0.12),transparent_55%)]"
        aria-hidden
      />
      <div className="container relative mx-auto px-6 lg:px-12">
        <Reveal className="max-w-4xl">
          <h1 className={`text-balance font-display font-medium leading-[1.05] text-ivory md:text-7xl ${compact ? 'text-4xl' : 'text-5xl'}`}>
            {title}
          </h1>
          {intro && (
            <p className={`mt-8 max-w-2xl text-lg leading-relaxed text-ivory-muted ${compact ? 'hidden md:block' : ''}`}>{intro}</p>
          )}
        </Reveal>
      </div>
    </header>
  );
}

export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`container mx-auto px-6 lg:px-12 ${className}`}>{children}</div>;
}
