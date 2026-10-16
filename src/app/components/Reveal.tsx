'use client';

import { motion, useReducedMotion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

/** Apparition lente et discrète au défilement (désactivée si l'utilisateur réduit les animations). */
export default function Reveal({ children, delay = 0, className }: Props) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
