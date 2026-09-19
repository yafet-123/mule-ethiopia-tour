import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SmartImage from '@/components/SmartImage';

/**
 * <PageHero />, compact shared hero for interior pages.
 */
export default function PageHero({
  eyebrow,
  title,
  copy,
  imageKey = 'destSimien',
  children,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[46vh] items-end overflow-hidden bg-forest-900 pb-14 pt-44 md:min-h-[52vh]"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10 scale-110">
        <SmartImage imageKey={imageKey} alt="" fill sizes="100vw" priority className="object-cover" />
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-[5]"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(10,33,28,0.55) 0%, rgba(10,33,28,0.25) 45%, rgba(10,33,28,0.8) 100%)',
        }}
      />

      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow !text-gold-300">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-sand-50 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {copy && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-sand-100/80 sm:text-lg">
              {copy}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}