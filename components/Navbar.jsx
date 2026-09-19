import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from '@/components/Logo';
import Icon from '@/components/Icon';
import { NAV_LINKS, SITE } from '@/lib/config';

/**
 * <Navbar />, sticky twin-tone navigation.
 * Solid warm-cream header with high-contrast text on all pages.
 */
export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [router.pathname]);

  // Close the mobile menu when resizing to desktop.
  useEffect(() => {
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      {/* Announcement ribbon — always pinned above the navbar */}
      <div className="fixed inset-x-0 top-0 z-50 overflow-hidden bg-forest-800 text-sand-100">
        <div className="container-x flex h-9 items-center justify-center gap-3 text-[12px] font-medium tracking-wide sm:justify-between">
          <p className="flex items-center gap-1.5 truncate">
            <Icon name="sparkles" size={13} className="shrink-0 text-gold-400" />
            <span className="truncate text-[11px] sm:text-[12px]">
              Now booking 2026/27 expeditions · save 10% with 4+ travellers
            </span>
          </p>
          <a
            href={`tel:${SITE.phoneHref}`}
            className="hidden shrink-0 items-center gap-1.5 text-sand-100/80 transition hover:text-gold-300 sm:flex text-xs"
          >
            <Icon name="phone" size={13} />
            {SITE.phone}
          </a>
        </div>
      </div>

      <header
        className="fixed inset-x-0 top-9 z-40 transition-all duration-300 border-b border-sand-200/80 bg-sand-100/90 shadow-[0_4px_20px_-10px_rgba(36,33,28,0.12)] backdrop-blur-xl"
      >
        <nav className="container-x flex h-[72px] items-center justify-between gap-3 sm:gap-6" aria-label="Main">
          <Logo tone="dark" />

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex text-ink/80">
            {NAV_LINKS.map((link) => {
              const active =
                router.pathname === link.href ||
                (link.href === '/tours' && router.pathname.startsWith('/tours'));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-[15px] font-medium transition-colors hover:text-clay-600 ${
                    active ? 'font-semibold text-clay-600' : ''
                  }`}
                >
                  {link.label}
                  {active && (
                    <span
                      className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-clay-500"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA group */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <Link
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hidden h-10 w-10 place-items-center rounded-full border border-sand-300 text-ink/70 hover:border-clay-400 hover:text-clay-600 transition md:grid"
            >
              <Icon name="whatsapp" size={18} />
            </Link>
            <Link
              href="/contact"
              className="btn btn-primary !px-3.5 sm:!px-5 !py-2.5 text-xs sm:text-sm"
            >
              <span>Plan Your Trip</span>
              <Icon name="arrow-right" size={14} className="hidden sm:inline-block" />
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full border border-sand-300 text-ink transition lg:hidden shrink-0"
            >
              <div className="relative h-3.5 w-[18px]">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${
                    open ? 'top-1/2 -translate-y-1/2 rotate-45' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded-full bg-current transition-opacity duration-200 ${
                    open ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${
                    open ? 'bottom-1/2 translate-y-1/2 -rotate-45' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[108px] z-30 max-h-[calc(100vh-108px)] overflow-y-auto border-b border-sand-200 bg-sand-100/97 shadow-xl backdrop-blur-xl lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-base sm:text-lg font-medium transition hover:bg-sand-200/70 ${
                      router.pathname === link.href ? 'text-clay-600 font-semibold' : 'text-ink'
                    }`}
                  >
                    {link.label}
                    <Icon name="arrow-up-right" size={18} className="text-ink/35" />
                  </Link>
                </motion.div>
              ))}
              <div className="mt-3 flex items-center gap-3 border-t border-sand-200 pt-4 pb-2">
                <Link href="/contact" className="btn btn-primary flex-1 py-3 text-sm">
                  Plan Your Trip
                </Link>
                <Link
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#25D366] text-white shadow-md"
                  aria-label="Chat on WhatsApp"
                >
                  <Icon name="whatsapp" size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}