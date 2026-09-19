import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from '@/components/Icon';

/**
 * <FAQAccordion />, accessible accordion with physics-based height animation.
 * items: [{ q, a }]
 */
export default function FAQAccordion({ items, defaultOpen = 0, className = '' }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={`overflow-hidden rounded-2xl border transition-colors ${
              isOpen ? 'border-clay-300 bg-white shadow-card' : 'border-sand-200 bg-white/70 hover:bg-white'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
            >
              <span className={`font-serif text-base font-semibold sm:text-lg ${isOpen ? 'text-clay-600' : 'text-ink'}`}>
                {item.q}
              </span>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                  isOpen ? 'rotate-180 bg-clay-500 text-white' : 'bg-sand-200 text-ink/60'
                }`}
                aria-hidden="true"
              >
                <Icon name="chevron-down" size={15} />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-[15px] leading-relaxed text-ink/70 sm:px-6 sm:pb-6">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}