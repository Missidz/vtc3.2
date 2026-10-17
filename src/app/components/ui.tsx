import Link from 'next/link';
import Reveal from './Reveal';

export function Eyebrow({
  children,
  className = '',
  as: Tag = 'p',
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'p' | 'h1';
}) {
  return (
    <Tag className={`flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-eyebrow text-gold ${className}`}>
      <span className="h-px w-8 shrink-0 bg-gold/60" aria-hidden />
      {children}
    </Tag>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  center = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={`max-w-2xl ${center ? 'mx-auto text-center [&>p:first-child]:justify-center' : ''}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-5 font-display text-4xl font-medium leading-[1.1] text-ivory md:text-5xl">{title}</h2>
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
  const classes = `inline-flex items-center justify-center gap-3 whitespace-nowrap px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-500 ease-premium ${buttonStyles[variant]} ${className}`;
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

/** En-tête des pages intérieures : H1 court et riche en mots-clés, slogan en grand. */
export function PageHeader({ h1, title, intro }: { h1: string; title: string; intro?: string }) {
  return (
    <header className="relative overflow-hidden border-b border-ink-line bg-ink-2 pb-20 pt-40 md:pb-28 md:pt-48">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgb(var(--c-gold)/0.12),transparent_55%)]"
        aria-hidden
      />
      <div className="container relative mx-auto px-6 lg:px-12">
        <Reveal className="max-w-3xl">
          <Eyebrow as="h1">{h1}</Eyebrow>
          <p className="mt-6 font-display text-5xl font-medium leading-[1.05] text-ivory md:text-7xl">{title}</p>
          {intro && <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory-muted">{intro}</p>}
        </Reveal>
      </div>
    </header>
  );
}

export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`container mx-auto px-6 lg:px-12 ${className}`}>{children}</div>;
}
