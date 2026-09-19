import { motion } from 'framer-motion';

/**
 * <SectionHeading />, consistent eyebrow + title + optional copy block.
 */
export default function SectionHeading({
  eyebrow,
  title,
  copy,
  align = 'left',
  className = '',
  light = false,
}) {
  const centered = align === 'center';

  return (
    <div
      className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow && (
        <p className={`eyebrow ${centered ? 'justify-center' : ''}`}>
          <span className="sr-only">Section:</span>
          {eyebrow}
        </p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        className={`mt-4 font-serif text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          light ? 'text-sand-50' : 'text-ink'
        }`}
      >
        {title}
      </motion.h2>
      {copy && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            light ? 'text-sand-100/75' : 'text-ink/65'
          } ${centered ? 'mx-auto' : ''}`}
        >
          {copy}
        </p>
      )}
    </div>
  );
}