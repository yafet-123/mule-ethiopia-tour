import { motion } from 'framer-motion';
import { CATEGORIES } from '@/data/categories';
import SmartImage from '@/components/SmartImage';
import { IMAGES } from '@/data/images';

/**
 * ToursHero — Style 6: "Cinematic Trekking Showcase"
 * Beautiful background imagery with gradient overlay and glassmorphic category chips.
 */
export default function ToursHero({
  activeActivity,
  onActivitySelect,
  tourCount = 12,
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 -z-20">
        <SmartImage
          src={IMAGES.heroSimien.src}
          fallback={IMAGES.heroSimien.fallback}
          alt="Trekking in the Simien Mountains"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-transparent to-transparent" />
      </div>

      <div className="container-x max-w-5xl text-center relative z-10">
        
        {/* Expedition Badge */}
        <motion.div
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="grid h-5 w-5 place-items-center rounded-full bg-gold-400 text-ink font-bold text-[10px]">
            🧭
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-sand-50">
            Handcrafted Expeditions & Itineraries
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="mt-6 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-sand-50 sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Find your next{' '}
          <em className="text-gold-400 not-italic font-normal italic underline decoration-gold-400/60 decoration-wavy underline-offset-8">
            unforgettable trek
          </em>{' '}
          through Ethiopia.
        </motion.h1>

        {/* Subhead */}
        <motion.p
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-sand-200/80 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          From the summit peaks of the Simien Mountains to the glowing lava lakes of Erta Ale. Choose from our proven itineraries or customize your own private journey.
        </motion.p>

        {/* Categories (Glassmorphic) */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <button
            onClick={() => onActivitySelect && onActivitySelect(null)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition backdrop-blur-md ring-1 ${
              !activeActivity
                ? 'bg-gold-400 text-ink ring-gold-400 shadow-md'
                : 'bg-white/10 text-sand-50 ring-white/20 hover:bg-white/20'
            }`}
          >
            All Categories ({tourCount})
          </button>

          {CATEGORIES.map((cat) => {
            const isActive = activeActivity === cat.slug;
            return (
              <button
                key={cat.slug}
                onClick={() => onActivitySelect && onActivitySelect(cat.slug)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition backdrop-blur-md ring-1 ${
                  isActive
                    ? 'bg-gold-400 text-ink ring-gold-400 shadow-md'
                    : 'bg-white/10 text-sand-50 ring-white/20 hover:bg-white/20'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Feature Badges Ticker */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-sand-50/70 font-medium">
          <div className="flex items-center gap-2">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-gold-400/20 text-gold-400">✓</span>
            <span>Small Group Departures (Max 8-12)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-gold-400/20 text-gold-400">✓</span>
            <span>Licensed English-Speaking Guides</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-gold-400/20 text-gold-400">✓</span>
            <span>Custom Dates & Tailor-Made Available</span>
          </div>
        </div>

      </div>
    </section>
  );
}
