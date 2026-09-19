import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import TestimonialCard from '@/components/TestimonialCard';
import Icon from '@/components/Icon';
import { groupTestimonials } from '@/data/testimonials';
import { Stagger, StaggerItem } from '@/components/Reveal';

/**
 * Testimonials / reviews carousel (paged, with arrows + dots).
 */
export default function Testimonials() {
  const groups = groupTestimonials(3);
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (d) => {
    setDir(d);
    setIndex((i) => (i + d + groups.length) % groups.length);
  };

  return (
    <section className="overflow-hidden py-10 sm:py-16" aria-labelledby="reviews-heading">
      <div className="container-x">
        <Stagger className="flex flex-wrap items-end justify-between gap-6">
          <StaggerItem>
            <p className="eyebrow">Word of mouth</p>
            <h2
              id="reviews-heading"
              className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]"
            >
              Travellers <em className="text-clay-600">Love Us</em>
            </h2>
          </StaggerItem>
          <StaggerItem className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous reviews"
              className="grid h-11 w-11 place-items-center rounded-full border border-sand-300 bg-white text-ink transition hover:border-clay-400 hover:text-clay-600 active:scale-95"
            >
              <Icon name="chevron-left" size={17} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next reviews"
              className="grid h-11 w-11 place-items-center rounded-full border border-sand-300 bg-white text-ink transition hover:border-clay-400 hover:text-clay-600 active:scale-95"
            >
              <Icon name="chevron-right" size={17} />
            </button>
          </StaggerItem>
        </Stagger>

        {/* carousel window */}
        <div className="relative mt-12">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir * 56, scale: 0.99 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: dir * -56, scale: 0.99 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {groups[index].map((review) => (
                <TestimonialCard key={review.name} review={review} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* dots */}
          <div className="mt-8 flex justify-center gap-2">
            {groups.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); }}
                aria-label={`Show review group ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-7 bg-clay-500' : 'w-2 bg-sand-400/50 hover:bg-sand-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}