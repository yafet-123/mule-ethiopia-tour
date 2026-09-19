import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '@/components/Icon';
import SmartImage from '@/components/SmartImage';

const FEATURED_SHOTS = [
  {
    key: 'heroBale',
    title: 'Sanetti Plateau & Afro-Alpine Wilds',
    location: 'Bale Mountains National Park',
    tag: 'Highland Wildlife & Wolves',
    elevation: '4,000m afro-alpine plateau',
  },
  {
    key: 'heroAxum',
    title: 'Ancient Axumite Stelae & Monoliths',
    location: 'Axum World Heritage Site',
    tag: 'Ancient Kingdoms',
    elevation: '2,130m northern highlands',
  },
  {
    key: 'heroHarar',
    title: 'Hyena Feeding Tradition of Walled Harar',
    location: 'Harar Jugol Citadel',
    tag: 'Living Heritage',
    elevation: '1,885m eastern ramparts',
  },
  {
    key: 'heroAwash',
    title: 'Awash Canyon & Savannah Waterfalls',
    location: 'Awash National Park',
    tag: 'Rift Valley Safari',
    elevation: '900m Great Rift Valley',
  },
  {
    key: 'heroSimien2',
    title: 'Simien Mountain Escarpments & Pinnacles',
    location: 'Simien Mountains National Park',
    tag: 'Trekking & Wildlife',
    elevation: '4,100m summit crests',
  },
];

/**
 * GalleryHero — Style 3: "Cinematic Midnight Darkroom & Multi-Media Photo Showcase Reel"
 * Dark room museum aesthetics with interactive photo carousel preview strip and filter badges.
 */
export default function GalleryHero({ activeTag, onTagSelect }) {
  const [activeShot, setActiveShot] = useState(0);

  const current = FEATURED_SHOTS[activeShot];

  return (
    <section className="relative isolate overflow-hidden bg-ink pt-28 pb-16 lg:pt-36 lg:pb-20 text-sand-50">
      {/* Dark Ambient Lighting */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 h-[600px] w-[600px] rounded-full bg-gold-500/10 blur-[140px]" />
        <div className="absolute bottom-0 left-10 h-[500px] w-[500px] rounded-full bg-clay-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-[0.03] [background-size:24px_24px]" />
      </div>

      <div className="container-x">
        {/* Top Header Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-sand-50/10 px-4 py-1.5 ring-1 ring-white/15 backdrop-blur-md"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="grid h-5 w-5 place-items-center rounded-full bg-gold-400 text-ink font-bold text-[10px]">
              📷
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-300">
              Unfiltered Abyssinian Chronicles
            </span>
          </motion.div>

          <div className="flex items-center gap-2 text-xs text-sand-200/60 font-mono">
            <span>100+ High-Res Photos</span>
            <span>•</span>
            <span>Real Local Expeditions</span>
          </div>
        </div>

        {/* Main Title & Spotlight Layout */}
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-12">

          {/* Left: Headlines & Tag Filter */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-sand-50 sm:text-5xl lg:text-6xl">
              Moments through the <em className="text-gold-400 not-italic font-normal italic">lens of Abyssinia</em>.
            </h1>

            <p className="mt-5 text-base leading-relaxed text-sand-200/70">
              From the steaming neon sulfur terraces of Dallol to dawn prayer chants carved into rock. Every photograph below was taken by our local guides and travellers.
            </p>

            {/* Live Active Shot Spotlight Details */}
            <div className="mt-6 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur-md">
              <div className="flex items-center justify-between text-xs text-gold-300 font-semibold">
                <span className="uppercase tracking-wider">{current.tag}</span>
                <span className="font-mono text-sand-200/50">{current.elevation}</span>
              </div>
              <p className="mt-1 font-serif text-lg font-bold text-sand-50">{current.title}</p>
              <p className="text-xs text-sand-200/70 flex items-center gap-1.5 mt-1">
                <Icon name="map-pin" size={13} className="text-gold-400" />
                <span>{current.location}</span>
              </p>
            </div>

            {/* Quick Filter Tag Chips attached to Hero */}
            {onTagSelect && (
              <div className="mt-8">
                <p className="text-xs font-bold uppercase tracking-wider text-sand-200/50 mb-3">
                  Filter Photography Wall
                </p>
                <div className="flex flex-wrap gap-2">
                  {['All', 'Simien', 'Danakil', 'Lalibela', 'Omo Valley', 'Culture'].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => onTagSelect(tag)}
                      className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${activeTag === tag
                        ? 'bg-gold-400 text-ink shadow-md font-bold'
                        : 'bg-white/10 text-sand-200 hover:bg-white/20'
                        }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Right: Interactive Photography Showcase Frame & Reel */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Featured Photo Frame */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-stone-900 shadow-2xl ring-1 ring-white/15">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.key}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <SmartImage
                    imageKey={current.key}
                    alt={current.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-black/20" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-black/60 px-4 py-2.5 backdrop-blur-md ring-1 ring-white/10">
                <span className="text-xs font-medium text-sand-100">
                  Featured Shot {activeShot + 1} of {FEATURED_SHOTS.length}
                </span>
                <div className="flex items-center gap-1.5">
                  {FEATURED_SHOTS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveShot(i)}
                      className={`h-2 rounded-full transition-all ${activeShot === i ? 'w-6 bg-gold-400' : 'w-2 bg-white/40 hover:bg-white/70'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Thumbnail Carousel Strip */}
            <div className="mt-4 flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
              {FEATURED_SHOTS.map((shot, i) => (
                <button
                  key={shot.key}
                  onClick={() => setActiveShot(i)}
                  className={`relative aspect-[4/3] w-24 shrink-0 overflow-hidden rounded-xl ring-2 transition-all ${activeShot === i
                    ? 'ring-gold-400 scale-105 shadow-lg'
                    : 'ring-transparent opacity-60 hover:opacity-100'
                    }`}
                >
                  <SmartImage imageKey={shot.key} alt={shot.title} fill sizes="100px" className="object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
