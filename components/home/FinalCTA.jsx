import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SmartImage from '@/components/SmartImage';
import Icon from '@/components/Icon';
import { SITE } from '@/lib/config';

/**
 * Final CTA band, full-bleed Danakil imagery, centred headline.
 */
export default function FinalCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);

  return (
    <section ref={ref} className="relative flex min-h-[480px] items-center justify-center overflow-hidden" aria-label="Ready to explore Ethiopia">
      {/* parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10 scale-125">
        <SmartImage
          imageKey="heroDanakil"
          alt="Colorful mineral pools of the Dallol volcano, Danakil Depression"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-[5] bg-forest-900/70" />

      <div className="container-x relative py-20 text-center">
        <p className="eyebrow !justify-center text-gold-300">
          <span className="sr-only">Section:</span> The adventure waits
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-semibold leading-[1.1] text-sand-50 sm:text-5xl lg:text-6xl">
          Ready to explore <em className="text-gold-300">Ethiopia?</em>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sand-100/80 sm:text-lg">
          Plan your trip today, free itinerary, no deposit required, and a
          local expert on WhatsApp before you even pack your bag.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="btn btn-primary !px-8 !py-3.5 text-base">
            Plan your trip
            <Icon name="arrow-right" size={16} />
          </Link>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-glass !px-8 !py-3.5 text-base"
          >
            <Icon name="whatsapp" size={17} />
            Chat on WhatsApp
          </a>
        </div>
        <p className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] font-medium uppercase tracking-wider text-sand-100/60">
          <span className="flex items-center gap-1.5"><Icon name="check" size={13} className="text-gold-400" /> Free quote in 24h</span>
          <span className="flex items-center gap-1.5"><Icon name="check" size={13} className="text-gold-400" /> No booking fee</span>
          <span className="flex items-center gap-1.5"><Icon name="check" size={13} className="text-gold-400" /> 100% local guides</span>
        </p>
      </div>
    </section>
  );
}