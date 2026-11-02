import Image from 'next/image';

type Props = {
  src: string | null;
  alt: string;
  className?: string;
  priority?: boolean;
};

/** Photo en grand format. Sans photo fournie, rien n'est affiché. */
export default function Visual({ src, alt, className = '', priority = false }: Props) {
  // Pas de photo : rien plutôt qu'un cadre vide (Taste). Les sections s'organisent sans image.
  if (!src) return null;
  return (
    <div className={`group relative overflow-hidden bg-ink-3 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-[1.03]"
      />
    </div>
  );
}
