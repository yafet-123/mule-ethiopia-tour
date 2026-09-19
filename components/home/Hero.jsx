import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Icon from '@/components/Icon';
import { STATS } from '@/lib/config';

/**
 * <Hero /> — Editorial travel hero with interactive 4-photo collage.
 * Features Ethiopia's 4 iconic destinations:
 * 1. Simien Mountains (mule-ethiopia-tours-simien-mountains.jpg)
 * 2. Danakil Depression (mule-ethiopia-tours-danakil-dallol.jpg)
 * 3. Omo Valley (mule-ethiopia-tours-omo-valley-walking-stick.jpg)
 * 4. Lalibela (mule-ethiopia-tours-lalibela-bete-giyorgis.jpg)
 */

// The 4 home destination photos from public/images/home
const DESTINATIONS = [
  {
    id: 'lalibela',
    src: '/images/home/mule-ethiopia-tours-lalibela-bete-giyorgis.jpg',
    label: 'Lalibela',
    sub: 'Bete Giyorgis Rock Church',
    emoji: '⛪',
    alt: 'Lalibela monolithic rock-hewn Church of Saint George Bete Giyorgis',
  },
  {
    id: 'simien',
    src: '/images/home/mule-ethiopia-tours-simien-mountains.jpg',
    label: 'Simien Mountains',
    sub: 'Walia Ibex & Trekking',
    emoji: '⛰️',
    alt: 'Simien Mountains Walia Ibex clashing horns on rugged cliffs',
  },
  {
    id: 'omo',
    src: '/images/home/mule-ethiopia-tours-omo-valley-walking-stick.jpg',
    label: 'Omo Valley',
    sub: 'Tribal Traditions',
    emoji: '🪘',
    alt: 'Omo Valley indigenous youth on walking stilts with traditional body paint',
  },
  {
    id: 'danakil',
    src: '/images/home/mule-ethiopia-tours-danakil-dallol.jpg',
    label: 'Danakil Depression',
    sub: 'Dallol Sulfur Springs',
    emoji: '🌋',
    alt: 'Danakil Depression Dallol vibrant yellow and neon green sulfur terraces',
  },


];

export default function Hero() {
  const ref = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Scroll parallax on the whole hero
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '60px']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const collageY = useTransform(scrollYProgress, [0, 1], ['0%', '40px']);

  // Main featured photo
  const current = DESTINATIONS[activeSlide];

  // Dynamic slots for the 3 secondary collage tiles so all 4 destinations remain visible simultaneously:
  // Slot 2: Top-right tall portrait (Omo Valley by default, or Simien if Omo is active)
  const slot2Index = activeSlide === 2 ? 0 : 2;
  const slot2 = DESTINATIONS[slot2Index];

  // Slot 3: Bottom-right card (Lalibela Bete Giyorgis by default, or Simien if Lalibela is active)
  const slot3Index = activeSlide === 3 ? 0 : 3;
  const slot3 = DESTINATIONS[slot3Index];

  // Slot 4: Bottom-left card (Danakil Dallol by default, or Simien if Danakil is active)
  const slot4Index = activeSlide === 1 ? 0 : 1;
  const slot4 = DESTINATIONS[slot4Index];

  return (
    <section
      ref={ref}
      className="relative isolate overflow-x-clip bg-sand-50 py-10 sm:py-16 lg:min-h-[calc(95svh-108px)] lg:py-12 lg:flex lg:items-center"
      aria-label="Welcome to Mule Ethiopia Tour"
    >
      {/* ── Subtle ambient background ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* warm sand radial glow top-right */}
        <div className="absolute -right-40 -top-40 h-[700px] w-[700px] rounded-full bg-gold-300/10 blur-[100px]" />
        {/* forest tint bottom-left */}
        <div className="absolute -bottom-20 -left-20 h-[500px] w-[500px] rounded-full bg-forest-400/8 blur-[80px]" />
        {/* subtle dot-grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(#24211c 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="container-x w-full">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16 xl:gap-20">

          {/* ══════════ LEFT — Text content ══════════ */}
          <motion.div
            style={{ y: contentY, opacity: contentOpacity }}
            className="relative z-10 max-w-xl lg:max-w-none"
          >
            {/* Rating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2.5 rounded-full border border-clay-500/20 bg-clay-500/8 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-clay-700"
            >
              <span className="flex items-center gap-0.5 text-gold-500">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Icon key={i} name="star" size={11} />
                ))}
              </span>
              Ethiopia&apos;s #1 Local Operator
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-serif text-[2.2rem] xs:text-4xl sm:text-5xl font-semibold leading-[1.06] tracking-tight text-ink lg:text-[3.5rem] xl:text-[4rem]"
            >
              Walk Through{' '}
              <span className="relative inline-block text-clay-600">
                Eight Thousand
                {/* hand-drawn underline */}
                <svg
                  viewBox="0 0 260 14"
                  className="absolute -bottom-2 left-0 w-full overflow-visible"
                  aria-hidden="true"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M4 10 Q65 3 130 7 T256 5"
                    fill="none"
                    stroke="#EFCB82"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    opacity="0.7"
                  />
                </svg>
              </span>
              <br />
              <span className="text-forest-700">Years of History</span>
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-lg text-base leading-relaxed text-ink/70 sm:text-[17px]"
            >
              Trek the Simien escarpment, stand above the kaleidoscopic springs of Dallol,
              immerse in Omo Valley traditions, and discover the rock-hewn wonders of Lalibela.
              Private journeys led by authentic local Ethiopian guides who know every trail by name.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4"
            >
              <Link
                href="/tours"
                className="btn btn-primary px-6 sm:px-7 py-3.5 text-sm sm:text-[15px] shadow-lg flex-1 sm:flex-none"
              >
                Explore Tours
                <Icon name="arrow-right" size={16} />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-ink/20 bg-white px-6 sm:px-7 py-3.5 text-sm sm:text-[15px] font-semibold text-ink shadow-sm transition-all duration-200 hover:border-forest-600 hover:text-forest-700 hover:shadow-md flex-1 sm:flex-none"
              >
                Plan Your Trip
                <span className="grid h-6 w-6 place-items-center rounded-full bg-sand-200 transition-colors group-hover:bg-forest-100">
                  <Icon name="arrow-up-right" size={13} className="text-ink/60 group-hover:text-forest-700" />
                </span>
              </Link>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="mt-8 sm:mt-10 grid grid-cols-2 gap-4 border-t border-sand-300/80 pt-6 sm:flex sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-4"
            >
              {STATS.map((s, i) => (
                <div key={s.label} className="flex items-center gap-3">
                  {i > 0 && <span className="hidden h-5 w-px bg-sand-300 sm:block" />}
                  <div>
                    <div className="font-serif text-xl sm:text-2xl font-bold text-clay-600">{s.value}</div>
                    <div className="text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-ink/50">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ══════════ MOBILE — Single hero image (hidden on lg+) ══════════ */}
          <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded-[2rem] shadow-card-hover lg:hidden">
            <Image
              src={current.src}
              alt={current.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-5 pb-5 pt-14">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">{current.label}</h3>
              <p className="mt-1 text-xs sm:text-sm text-sand-100/80">{current.sub}</p>
            </div>
            {/* Dot navigation */}
            <div className="absolute right-3 top-3 z-20 flex flex-col gap-2 rounded-full bg-black/50 p-2 backdrop-blur-sm border border-white/20">
              {DESTINATIONS.map((dest, i) => (
                <button
                  key={dest.id}
                  type="button"
                  onClick={() => setActiveSlide(i)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${activeSlide === i ? 'scale-125 bg-gold-400 ring-2 ring-gold-300/50' : 'bg-white/60 hover:bg-white'}`}
                  aria-label={`Show ${dest.label}`}
                />
              ))}
            </div>
          </div>

          {/* ══════════ DESKTOP — Interactive 4-Photo Mosaic Collage (hidden below lg) ══════════ */}
          <motion.div
            style={{ y: collageY }}
            className="relative z-10 hidden select-none lg:flex lg:justify-end"
          >
            <div className="relative mx-auto h-[480px] w-full sm:h-[540px] lg:h-[580px] xl:h-[620px]">

              {/* ── 1. MAIN SPOTLIGHT PHOTO (Top-Left area, 67% width, 70% height) ── */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 top-0 h-[70%] w-[67%] overflow-hidden rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(10,33,28,0.45)] ring-4 ring-white/90"
              >
                <AnimatePresence mode="sync">
                  <motion.div
                    key={activeSlide}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                  >
                    <Image
                      src={current.src}
                      alt={current.alt}
                      fill
                      priority
                      sizes="(max-width: 640px) 67vw, 420px"
                      className="object-cover"
                    />

                    {/* Unobstructed, high-contrast text overlay */}
                    <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/95 via-black/60 to-transparent px-5 pb-5 pt-16 pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-gold-300 backdrop-blur-md border border-gold-400/40 shadow-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
                        {current.sub}
                      </span>
                      <h3
                        className="mt-1.5 font-serif text-2xl font-bold text-white tracking-tight sm:text-3xl"
                        style={{ textShadow: '0 2px 8px rgba(0,0,0,0.85)' }}
                      >
                        {current.label}
                      </h3>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Clickable destination dots on main image */}
                <div className="absolute right-3 top-3 z-20 flex flex-col gap-1.5 rounded-full bg-black/50 p-1.5 backdrop-blur-sm border border-white/20 shadow-md">
                  {DESTINATIONS.map((dest, i) => (
                    <button
                      key={dest.id}
                      type="button"
                      onClick={() => setActiveSlide(i)}
                      className={`h-2 w-2 rounded-full transition-all duration-300 ${activeSlide === i
                        ? 'scale-125 bg-gold-400 ring-2 ring-gold-300/50'
                        : 'bg-white/60 hover:bg-white'
                        }`}
                      aria-label={`Show ${dest.label}`}
                      title={dest.label}
                    />
                  ))}
                </div>
              </motion.div>

              {/* ── 2. TALL PORTRAIT PHOTO (Top-Right side) — Omo Valley ── */}
              <motion.button
                type="button"
                onClick={() => setActiveSlide(slot2Index)}
                initial={{ opacity: 0, x: 40, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group absolute right-0 top-[2%] h-[53%] w-[31%] cursor-pointer overflow-hidden rounded-[1.5rem] text-left shadow-[0_16px_40px_-12px_rgba(10,33,28,0.4)] ring-4 ring-white/90 transition-all duration-300 hover:scale-[1.03] hover:ring-gold-400 hover:z-20 active:scale-95"
                aria-label={`Spotlight ${slot2.label}`}
                title={`Click to spotlight ${slot2.label}`}
              >
                <Image
                  src={slot2.src}
                  alt={slot2.alt}
                  fill
                  priority
                  sizes="200px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/95 via-black/60 to-transparent px-3 pb-3 pt-8 pointer-events-none">
                  <span className="inline-block rounded-md bg-black/70 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-gold-300 backdrop-blur-sm border border-gold-400/30">
                    {slot2.sub}
                  </span>
                  <p
                    className="mt-0.5 font-serif text-sm font-bold text-white truncate sm:text-[15px]"
                    style={{ textShadow: '0 2px 6px rgba(0,0,0,0.85)' }}
                  >
                    {slot2.label}
                  </p>
                </div>
              </motion.button>

              {/* ── 3. BOTTOM-RIGHT CARD — Lalibela Bete Giyorgis ── */}
              <motion.button
                type="button"
                onClick={() => setActiveSlide(slot3Index)}
                initial={{ opacity: 0, x: 20, y: 40 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group absolute bottom-[3%] right-0 h-[36%] w-[38%] rotate-[-1.5deg] cursor-pointer overflow-hidden rounded-[1.5rem] text-left shadow-[0_16px_40px_-12px_rgba(10,33,28,0.4)] ring-4 ring-white/90 transition-all duration-300 hover:rotate-0 hover:scale-[1.03] hover:ring-gold-400 hover:z-20 active:scale-95"
                aria-label={`Spotlight ${slot3.label}`}
                title={`Click to spotlight ${slot3.label}`}
              >
                <Image
                  src={slot3.src}
                  alt={slot3.alt}
                  fill
                  priority
                  sizes="240px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/95 via-black/60 to-transparent px-3 pb-3 pt-7 pointer-events-none">
                  <span className="inline-block rounded-md bg-black/70 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-gold-300 backdrop-blur-sm border border-gold-400/30">
                    {slot3.sub}
                  </span>
                  <p
                    className="mt-0.5 font-serif text-sm font-bold text-white truncate sm:text-[15px]"
                    style={{ textShadow: '0 2px 6px rgba(0,0,0,0.85)' }}
                  >
                    {slot3.label}
                  </p>
                </div>
              </motion.button>

              {/* ── 4. BOTTOM-LEFT CARD — Danakil Dallol ── */}
              <motion.button
                type="button"
                onClick={() => setActiveSlide(slot4Index)}
                initial={{ opacity: 0, x: -20, y: 40 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.9, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
                className="group absolute bottom-[3%] left-[2%] h-[28%] w-[56%] rotate-[1.5deg] cursor-pointer overflow-hidden rounded-[1.5rem] text-left shadow-[0_16px_40px_-12px_rgba(10,33,28,0.4)] ring-4 ring-white/90 transition-all duration-300 hover:rotate-0 hover:scale-[1.03] hover:ring-gold-400 hover:z-20 active:scale-95"
                aria-label={`Spotlight ${slot4.label}`}
                title={`Click to spotlight ${slot4.label}`}
              >
                <Image
                  src={slot4.src}
                  alt={slot4.alt}
                  fill
                  priority
                  sizes="320px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/95 via-black/60 to-transparent px-3.5 pb-3 pt-7 pointer-events-none">
                  <span className="inline-block rounded-md bg-black/70 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-gold-300 backdrop-blur-sm border border-gold-400/30">
                    {slot4.sub}
                  </span>
                  <p
                    className="mt-0.5 font-serif text-sm font-bold text-white truncate sm:text-[15px]"
                    style={{ textShadow: '0 2px 6px rgba(0,0,0,0.85)' }}
                  >
                    {slot4.label}
                  </p>
                </div>
              </motion.button>

            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <div
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 animate-floaty lg:flex lg:flex-col lg:items-center lg:gap-2"
        aria-hidden="true"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-ink/40">Scroll</span>
        <svg viewBox="0 0 24 40" className="h-8 w-5 text-ink/30">
          <rect x="3" y="1" width="18" height="34" rx="9" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="11" r="2.5" fill="currentColor" className="animate-pulse-soft" />
        </svg>
      </div>
    </section>
  );
}