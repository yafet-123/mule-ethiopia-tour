import { motion } from 'framer-motion';

const spring = [0.22, 1, 0.36, 1];

/**
 * <Reveal />, scroll-triggered fade + rise animation.
 * Wraps its children so they glide up into view with depth.
 * Exported both as named and default for import convenience.
 */
export function Reveal({
  children,
  delay = 0,
  y = 34,
  scale = 0.985,
  duration = 0.8,
  className = '',
  as = 'div',
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      initial={{ opacity: 0, y, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, delay, ease: spring }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/** <Stagger />, container that staggers its <StaggerItem/> children on scroll. */
export function Stagger({
  children,
  className = '',
  stagger = 0.12,
  delay = 0,
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '', y = 30 }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y, scale: 0.98 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.7, ease: spring },
        },
      }}
      className={`h-full w-full ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;