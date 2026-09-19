import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { SITE } from '@/lib/config';
import Icon from '@/components/Icon';

/**
 * Floating WhatsApp click-to-chat bubble (bottom-right).
 */
export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.a
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-ink shadow-card-hover ring-1 ring-sand-200"
          >
            Chat with a local guide →
          </motion.a>
        )}
      </AnimatePresence>

      <button
        type="button"
        aria-label="Chat on WhatsApp"
        onClick={() => setOpen((v) => !v)}
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_-8px_rgba(37,211,102,0.65)] transition-transform hover:scale-105 active:scale-95"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping-soft" aria-hidden="true" />
        <Icon name="whatsapp" size={28} className="relative" />
      </button>
    </div>
  );
}