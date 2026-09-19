import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '@/components/Icon';
import SmartImage from '@/components/SmartImage';

const REGION_SPOTLIGHTS = [
  {
    slug: 'simien-mountains',
    name: 'Simien Mountains',
    tagline: 'The Roof of Africa',
    imageKey: 'destSimien',
    elevation: '4,533m (Ras Dashen)',
    highlight: 'Walia Ibex, Gelada Baboons & Peak Treks',
    bestTime: 'Oct – Mar',
  },
  {
    slug: 'danakil-depression',
    name: 'Danakil Depression',
    tagline: 'Alien Lava & Sulfur Pools',
    imageKey: 'destDanakil',
    elevation: '-125m below sea level',
    highlight: 'Erta Ale Volcano & Dallol Springs',
    bestTime: 'Nov – Feb',
  },
  {
    slug: 'lalibela',
    name: 'Lalibela Rock Churches',
    tagline: '8th Wonder of the World',
    imageKey: 'destLalibela',
    elevation: '2,630m altitude',
    highlight: '11 Monolithic Carved Churches',
    bestTime: 'Year-round',
  },
  {
    slug: 'omo-valley',
    name: 'Omo Valley',
    tagline: 'Cradle of Human Heritage',
    imageKey: 'destOmo',
    elevation: 'Rift Valley Basin',
    highlight: 'Hamer, Mursi & Karo Tribal Traditions',
    bestTime: 'Jun – Sep & Dec – Feb',
  },
];

/**
 * DestinationsHero — Style 5: "Panoramic Horizon Explorer & 3D Interactive Region Spotlight Carousel"
 * Geographic explorer aesthetic with interactive region switcher cards and live specs badge.
 */
export default function DestinationsHero() {
  const [activeRegion, setActiveRegion] = useState(0);

  const region = REGION_SPOTLIGHTS[activeRegion];

  return (
    <section className="relative isolate overflow-hidden bg-sand-50 pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Topographic Lines Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-1/4 h-[600px] w-[600px] rounded-full bg-gold-300/15 blur-[120px]" />
        <div className="absolute -right-20 bottom-10 h-[500px] w-[500px] rounded-full bg-clay-400/10 blur-[100px]" />
        
        {/* Geographic Coordinate Lines Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #24211C 1px, transparent 1px), linear-gradient(to bottom, #24211C 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Geographic Exploration Copy */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Latitude / Geographic Eyebrow */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-forest-900/10 px-4 py-2 ring-1 ring-forest-900/20">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-forest-800">
                🌐 9.1450° N, 40.4897° E • Horn of Africa
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              From high alpine peaks to the{' '}
              <em className="text-gold-500 not-italic font-normal italic underline decoration-clay-400/60 underline-offset-8">
                hottest place on Earth
              </em>.
            </h1>

            <p className="mt-6 text-base leading-relaxed text-ink/75 sm:text-lg max-w-xl">
              Ethiopia is a continent within one country. High mountain plateaus, sunken lava lakes, ancient rock empires, and untouched tribal valleys await your footprints.
            </p>

            {/* Interactive Region Selector Bar */}
            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-wider text-ink/50 mb-3">
                Spotlight Regional Wonders (Click to Preview)
              </p>
              <div className="flex flex-wrap gap-2">
                {REGION_SPOTLIGHTS.map((item, idx) => (
                  <button
                    key={item.slug}
                    onClick={() => setActiveRegion(idx)}
                    className={`rounded-2xl px-4 py-2.5 text-xs font-bold transition-all ${
                      activeRegion === idx
                        ? 'bg-forest-600 text-sand-50 shadow-md scale-105'
                        : 'bg-white text-ink/70 hover:bg-sand-100 ring-1 ring-sand-300'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Specs Pill Box */}
            <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-white p-4 shadow-card ring-1 ring-sand-300/60 max-w-lg">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-ink/45">Elevation / Geo</span>
                <span className="block font-mono text-sm font-bold text-forest-700">{region.elevation}</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-ink/45">Best Season</span>
                <span className="block font-sans text-sm font-bold text-clay-600">{region.bestTime}</span>
              </div>
            </div>

            {/* CTA Link */}
            <div className="mt-8 flex items-center gap-4">
              <Link
                href={`/tours?destination=${region.slug}`}
                className="inline-flex items-center gap-2 rounded-2xl bg-clay-500 px-7 py-4 font-semibold text-sand-50 shadow-lg shadow-clay-900/20 transition hover:bg-clay-600 hover:scale-[1.02]"
              >
                <span>Browse {region.name} Tours</span>
                <Icon name="arrow-right" size={18} />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: 3D Interactive Spotlight Card */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-gold-400/20 via-forest-500/20 to-clay-500/20 blur-xl" />

              {/* Main Card Frame */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-3xl bg-forest-950 shadow-2xl ring-1 ring-sand-300">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={region.slug}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <SmartImage
                      imageKey={region.imageKey}
                      alt={region.name}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-black/20" />
                  </motion.div>
                </AnimatePresence>

                {/* Overlaid Card Info */}
                <div className="absolute bottom-6 left-6 right-6 text-sand-50">
                  <div className="inline-block rounded-full bg-gold-400 px-3 py-1 text-[11px] font-bold text-forest-950 mb-2">
                    {region.tagline}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold">{region.name}</h3>
                  <p className="mt-1 text-xs sm:text-sm text-sand-200/80 flex items-center gap-1.5">
                    <Icon name="sparkles" size={14} className="text-gold-300" />
                    <span>{region.highlight}</span>
                  </p>
                </div>
              </div>

              {/* Indicator dots */}
              <div className="mt-4 flex justify-center gap-2">
                {REGION_SPOTLIGHTS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveRegion(i)}
                    className={`h-2 rounded-full transition-all ${
                      activeRegion === i ? 'w-8 bg-forest-600' : 'w-2 bg-sand-300'
                    }`}
                  />
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
