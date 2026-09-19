import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '@/components/Icon';
import TourImage from '@/components/TourImage';

/**
 * TourDetailHero — Style 7: "Expedition Masterclass & Split-Deck Panoramic Theater"
 * Distinct 2-column hero with an interactive photographic showcase deck on the right
 * and structured expedition dossier specs on the left.
 */
export default function TourDetailHero({
  tour,
  gallery = [],
  activeImage = 0,
  setActiveImage,
  setLightbox,
  regionName = '',
}) {
  if (!tour) return null;

  const activePhoto = gallery[activeImage] || tour.imagePath;

  const metaSpecs = [
    { icon: 'calendar', label: 'Duration', value: tour.duration, sub: 'Customizable' },
    { icon: 'users', label: 'Group Size', value: tour.groupsize || 'Private / Small Group', sub: 'Max flexibility' },
    { icon: 'shield', label: 'Stay', value: tour.accommodation || 'Handpicked Lodges', sub: 'Verified quality' },
    { icon: 'globe', label: 'Transport', value: tour.transportation || '4x4 Land Cruiser', sub: 'Private driver' },
  ].filter((m) => m.value);

  return (
    <section className="relative isolate overflow-hidden bg-ink pt-24 pb-12 lg:pt-32 lg:pb-16 text-sand-50">
      {/* Dynamic Background Atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-10 h-[650px] w-[650px] rounded-full bg-gold-500/10 blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-clay-500/10 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-[0.03] [background-size:28px_28px]" />
      </div>

      <div className="container-x relative z-10">
        {/* Top Header Navigation */}
        <div className="mb-6 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-sand-100 ring-1 ring-white/20 backdrop-blur-md hover:bg-white/20 hover:text-gold-300 transition"
            >
              <Icon name="arrow-left" size={13} />
              Back to All Tours
            </Link>
          </motion.div>

          <motion.nav
            aria-label="Breadcrumb"
            className="hidden sm:flex items-center gap-2 text-xs font-medium text-sand-200/60"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="hover:text-gold-300 transition">Home</Link>
            <Icon name="chevron-right" size={10} />
            <Link href="/tours" className="hover:text-gold-300 transition">Tours</Link>
            <Icon name="chevron-right" size={10} />
            <span className="text-gold-300 line-clamp-1">{tour.title}</span>
          </motion.nav>
        </div>

        {/* Asymmetric 2-Column Theater Layout */}
        <div className="grid items-center gap-10 lg:grid-cols-12">
          
          {/* Left Column: Expedition Dossier & Key Specs */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Region Tag & Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-400/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-gold-300 ring-1 ring-gold-400/30">
                <Icon name="map-pin" size={12} className="text-gold-400" />
                {regionName || 'Ethiopian Highlands'}
              </span>
              {tour.duration && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-sand-200 ring-1 ring-white/15">
                  <Icon name="clock" size={12} className="text-gold-300" />
                  {tour.duration}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="mt-4 font-serif text-3xl font-semibold leading-[1.08] tracking-tight text-sand-50 sm:text-4xl lg:text-5xl">
              {tour.title}
            </h1>

            {/* Short Description */}
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-sand-200/80 sm:text-lg">
              {tour.shortDescription}
            </p>

            {/* Structured 2x2 Spec Matrix Cards */}
            <div className="mt-7 grid grid-cols-2 gap-3.5 sm:gap-4">
              {metaSpecs.map((spec, idx) => (
                <motion.div
                  key={spec.label}
                  className="rounded-2xl bg-white/5 p-3.5 sm:p-4 ring-1 ring-white/10 backdrop-blur-md hover:bg-white/10 transition"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.08 }}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-xl bg-gold-400/20 text-gold-300 ring-1 ring-gold-400/30">
                      <Icon name={spec.icon} size={15} />
                    </span>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-sand-200/50">
                        {spec.label}
                      </p>
                      <p className="text-sm font-semibold text-sand-50 truncate max-w-[160px]">
                        {spec.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Action Row */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={`/contact?tour=${tour.id}`}
                className="inline-flex items-center gap-2.5 rounded-2xl bg-gold-400 px-7 py-3.5 text-sm font-bold text-ink shadow-lg shadow-gold-900/30 transition hover:bg-gold-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Request Custom Tour
                <Icon name="arrow-right" size={16} />
              </Link>

              <a
                href="#itinerary"
                className="inline-flex items-center gap-2.5 rounded-2xl bg-white/10 px-6 py-3.5 text-sm font-semibold text-sand-50 ring-1 ring-white/20 backdrop-blur-md transition hover:bg-white/20"
              >
                Explore Itinerary
                <Icon name="chevron-down" size={15} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Photo Showcase Deck */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-stone-900 shadow-2xl ring-1 ring-white/20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhoto}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <TourImage
                    src={activePhoto}
                    title={tour.title}
                    alt={tour.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-black/20" />
                </motion.div>
              </AnimatePresence>

              {/* Top Right Photo Count Pill */}
              {setLightbox && gallery.length > 0 && (
                <button
                  type="button"
                  onClick={() => setLightbox(true)}
                  className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3.5 py-1.5 text-xs font-semibold text-sand-50 ring-1 ring-white/20 backdrop-blur-md hover:bg-black/80 transition"
                >
                  <Icon name="sparkles" size={13} className="text-gold-300" />
                  Full Gallery ({gallery.length})
                </button>
              )}

              {/* Bottom Photo Caption Strip */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-black/60 px-4 py-2.5 backdrop-blur-md ring-1 ring-white/15 z-10">
                <span className="text-xs font-medium text-sand-100">
                  Expedition Photo {activeImage + 1} of {gallery.length || 1}
                </span>

                {gallery.length > 1 && (
                  <div className="flex items-center gap-1.5">
                    {gallery.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActiveImage(i)}
                        aria-label={`Photo ${i + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === activeImage ? 'w-6 bg-gold-400' : 'w-2 bg-white/40 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Thumbnail Selector Strip beneath main frame */}
            {gallery.length > 1 && (
              <div className="mt-4 flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
                {gallery.map((src, i) => (
                  <button
                    key={src + i}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    aria-label={`Show photo ${i + 1}`}
                    className={`relative aspect-[4/3] h-16 w-24 shrink-0 overflow-hidden rounded-xl ring-2 transition-all duration-300 ${
                      i === activeImage
                        ? 'ring-gold-400 scale-105 shadow-lg'
                        : 'ring-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <TourImage src={src} title={tour.title} alt="" fill sizes="96px" quality={50} className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
