import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * <Tilt />, cursor-following 3D tilt card (depth effect).
 * Wraps children in a perspective container; inner content can be pushed
 * toward the viewer with `translateZ` via the [data-depth] attribute or
 * Tailwind's arbitrary transform classes.
 *
 *   <Tilt max={10}><img /></Tilt>
 *   <div style={{ transform: 'translateZ(40px)' }}>…</div>
 */

export default function Tilt({
  children,
  max = 8,
  scale = 1.02,
  className = '',
  style,
}) {
  const ref = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 220, damping: 22, mass: 0.6 });
  const springY = useSpring(rotateY, { stiffness: 220, damping: 22, mass: 0.6 });

  useEffect(() => {
    // Only engage the tilt for devices that genuinely hover.
    if (window.matchMedia && !window.matchMedia('(hover: hover)').matches) {
      // no tilt on touch
      return undefined;
    }
  }, []);

  function onMove(e) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    rotateY.set(px * max * 2);
    rotateX.set(-py * max * 2);
  }

  function onLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 1000,
        transformStyle: 'preserve-3d',
        ...style,
      }}
      whileHover={{ scale }}
      className={className}
    >
      <div className="h-full w-full" style={{ transform: 'translateZ(0)', transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </motion.div>
  );
}