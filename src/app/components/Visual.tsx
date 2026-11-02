import Image from 'next/image';

type Props = {
  src: string | null;
  alt: string;
  /** Texte affiché en filigrane tant qu'aucune photo n'est fournie. */
  placeholder: string;
  className?: string;
  priority?: boolean;
};

/** Photo en grand format, ou cadre élégant en attendant la photo définitive. */
export default function Visual({ src, alt, placeholder, className = '', priority = false }: Props) {
  return (
    <div className={`group relative overflow-hidden bg-ink-3 ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-[1.03]"
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(ellipse_at_30%_20%,rgb(var(--c-gold)/0.18),transparent_60%),linear-gradient(160deg,rgb(var(--c-ink-3)),rgb(var(--c-ink)))]"
        >
          <span className="select-none font-display text-6xl italic tracking-wide text-ivory/10 md:text-8xl">
            {placeholder}
          </span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-3 border border-ivory/10" aria-hidden />
    </div>
  );
}
