import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/Icon';
import { CATEGORIES } from '@/data/categories';
import { TOURS, tourCategory } from '@/data/tours';
import { Stagger, StaggerItem } from '@/components/Reveal';

/**
 * Editorial Travel Styles Showcase
 * Curated 8-way gateway into Ethiopia with balanced luxury proportions,
 * frosted glass chips, dynamic tour counts and rich imagery.
 */
const STYLE_META = {
  historical: {
    badge: 'UNESCO Heritage',
    tagline: 'Ancient Monoliths & Castles',
    layoutClass: 'sm:col-span-2 lg:col-span-2 min-h-[350px] sm:min-h-[380px] lg:min-h-[400px]',
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw',
    accentColor: 'from-amber-500/20',
    isHero: true,
  },
  adventure: {
    badge: 'Extreme Earth',
    tagline: 'Erta Ale Lava & Acid Springs',
    layoutClass: 'sm:col-span-2 lg:col-span-2 min-h-[350px] sm:min-h-[380px] lg:min-h-[400px]',
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw',
    accentColor: 'from-orange-500/20',
    isHero: true,
  },
  trekking: {
    badge: 'High Altitude',
    tagline: "Africa's Rooftop on Foot",
    layoutClass: 'col-span-1 min-h-[320px] sm:min-h-[340px] lg:min-h-[360px]',
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw',
    accentColor: 'from-emerald-500/20',
  },
  cultural: {
    badge: 'Living Heritage',
    tagline: 'Tribes of the Omo Valley',
    layoutClass: 'col-span-1 min-h-[320px] sm:min-h-[340px] lg:min-h-[360px]',
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw',
    accentColor: 'from-rose-500/20',
  },
  wildlife: {
    badge: 'Endemic Species',
    tagline: 'Red Wolves & Gelada Baboons',
    layoutClass: 'col-span-1 min-h-[320px] sm:min-h-[340px] lg:min-h-[360px]',
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw',
    accentColor: 'from-amber-600/20',
  },
  festival: {
    badge: 'Sacred Rituals',
    tagline: 'Timket, Meskel & Genna',
    layoutClass: 'col-span-1 min-h-[320px] sm:min-h-[340px] lg:min-h-[360px]',
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw',
    accentColor: 'from-yellow-500/20',
  },
  'city-tours': {
    badge: 'Urban Heart',
    tagline: 'Merkato, Jazz & Roasters',
    layoutClass: 'sm:col-span-1 lg:col-span-2 min-h-[280px] sm:min-h-[300px] lg:min-h-[320px]',
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw',
    accentColor: 'from-stone-500/20',
  },
  'day-trips': {
    badge: 'Short Escapes',
    tagline: 'Island Monasteries & Lakes',
    layoutClass: 'sm:col-span-1 lg:col-span-2 min-h-[280px] sm:min-h-[300px] lg:min-h-[320px]',
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw',
    accentColor: 'from-teal-500/20',
  },
};

// Symmetrical 4-column balanced order:
// Row 1: 2 Hero Cards (Historical + Adventure) = 4 cols
// Row 2: 4 Adventure & Culture Cards (Trekking + Cultural + Wildlife + Festival) = 4 cols
// Row 3: 2 Gateway Cards (City Tours + Day Trips) = 4 cols
const ORDERED_SLUGS = [
  'historical',
  'adventure',
  'trekking',
  'cultural',
  'wildlife',
  'festival',
  'city-tours',
  'day-trips',
];

export default function TravelStyles() {
  const counts = useMemo(() => {
    const map = new Map();
    TOURS.forEach((tour) => {
      const { slug } = tourCategory(tour);
      map.set(slug, (map.get(slug) || 0) + 1);
    });
    return map;
  }, []);

  const totalTours = TOURS.length;

  const orderedCategories = useMemo(() => {
    const catMap = new Map(CATEGORIES.map((c) => [c.slug, c]));
    return ORDERED_SLUGS.map((slug) => catMap.get(slug)).filter(Boolean);
  }, []);

  return (
    <section
      className="relative overflow-hidden pt-20 pb-20 lg:pt-0 lg:pb-10"
      aria-labelledby="travel-styles-heading"
    >
      {/* Subtle ambient backdrop decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-clay-500/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-gold-400/5 blur-3xl"
      />

      <div className="container-x relative">
        {/* Section Header */}
        <Stagger className="flex flex-col">
          <StaggerItem className="max-w-7xl w-full">
            <div className="inline-flex items-center gap-2 rounded-full border border-clay-500/25 bg-clay-500/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-clay-700">
              <span className="text-clay-500">✦</span> Find your journey
            </div>
          </StaggerItem>

          <StaggerItem delay={0.1} className="flex justify-between items-center shrink-0">
            <div className='flex flex-col'>
              <h2
                id="travel-styles-heading"
                className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl"
              >
                Choose Your{' '}
                <span className="relative inline-block font-serif italic text-clay-600">
                  Travel Style
                  <svg
                    viewBox="0 0 160 12"
                    className="absolute -bottom-1.5 left-0 w-full text-gold-400/40"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M3 9C45 3 115 3 157 9"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink/70 sm:text-lg">
                Eight handcrafted ways to encounter Ethiopia. Pick a style below and our guides
                tailor the route around your passions.
              </p>
            </div>
            <Link
              href="/tours"
              className="group inline-flex items-center gap-3 rounded-full border border-forest-800/15 bg-white/80 px-5 py-3 text-xs font-bold uppercase tracking-wider text-forest-800 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-forest-800 hover:bg-forest-800 hover:text-sand-50 hover:shadow-md"
            >
              <span>Browse all tours</span>
              <span className="inline-flex h-6 items-center rounded-full bg-sand-200 px-2 text-[10px] font-extrabold text-forest-900 transition-colors group-hover:bg-white/20 group-hover:text-sand-50">
                {totalTours}+
              </span>
              <span className="grid h-6 w-6 place-items-center rounded-full bg-forest-800 text-gold-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-forest-900">
                <Icon name="arrow-right" size={13} />
              </span>
            </Link>
          </StaggerItem>
        </Stagger>

        {/* Balanced Magazine Bento Grid */}
        <Stagger
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6"
          stagger={0.06}
        >
          {orderedCategories.map((cat) => {
            const count = counts.get(cat.slug) || 0;
            const meta = STYLE_META[cat.slug] || {
              badge: 'Curated',
              tagline: cat.blurb,
              layoutClass: 'col-span-1 min-h-[320px]',
              sizes: '(max-width: 768px) 100vw, 25vw',
              accentColor: 'from-forest-500/20',
              isHero: false,
            };

            return (
              <StaggerItem key={cat.slug} className={meta.layoutClass}>
                <Link
                  href={`/tours?activity=${cat.slug}`}
                  className="group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[1.75rem] border border-black/10 bg-forest-950 p-5 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/50 hover:shadow-card-hover hover:ring-2 hover:ring-gold-400/40 sm:p-6"
                  aria-label={`Explore ${cat.label}`}
                >
                  {/* Background Image with smooth zoom.
                      quality bumped from the Next.js default (75) to 90 so the photo
                      stays crisp after the group-hover scale, and `sizes` matches the
                      actual rendered width at each breakpoint so the browser doesn't
                      fetch (and then upscale) a smaller source image. */}
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    quality={90}
                    sizes={meta.sizes}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                  />

                  {/* Dual-layer cinematic gradients — deep top & bottom stops so text is crystal clear */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/85 via-black/45 to-transparent"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-forest-950 via-forest-950/90 to-transparent"
                  />
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 bg-gradient-to-br ${meta.accentColor} to-transparent opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  {/* Card Header: Icon & Hero-style Badges */}
                  <div className="relative z-10 flex items-start justify-between gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-black/60 text-gold-300 border border-white/20 backdrop-blur-md shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-clay-500 group-hover:text-white group-hover:border-clay-300">
                      <Icon name={cat.icon} size={22} />
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-black/75 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-gold-300 backdrop-blur-md border border-gold-400/40 shadow-sm">
                        {meta.badge}
                      </span>
                      {count > 0 && (
                        <span className="hidden items-center gap-1.5 rounded-full bg-black/75 px-2.5 py-1 text-[11px] font-semibold text-sand-50 backdrop-blur-md border border-white/25 shadow-sm sm:inline-flex">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
                          {count} {count === 1 ? 'Tour' : 'Tours'}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Footer: Content & CTA */}
                  <div className="relative z-10 pt-8">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-black/75 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-gold-300 backdrop-blur-md border border-gold-400/40 shadow-sm mb-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
                      {meta.tagline}
                    </span>

                    <h3
                      className={`font-serif font-bold text-white transition-colors duration-300 group-hover:text-gold-200 ${meta.isHero
                        ? 'text-2xl sm:text-3xl lg:text-[2rem]'
                        : 'text-xl sm:text-2xl'
                        }`}
                      style={{ textShadow: '0 2px 6px rgba(0,0,0,0.85)' }}
                    >
                      {cat.label}
                    </h3>

                    <p
                      className="mt-2 text-xs leading-relaxed text-sand-50/95 sm:text-sm line-clamp-2"
                      style={{ textShadow: '0 1px 3px rgba(0,0,0,0.7)' }}
                    >
                      {cat.blurb}
                    </p>

                    <div className="mt-4 flex items-center justify-between pt-1">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-sand-50 backdrop-blur-md shadow-sm transition-all duration-300 group-hover:border-gold-300 group-hover:bg-gold-400 group-hover:text-forest-950">
                        <span>Explore</span>
                        <Icon
                          name="arrow-up-right"
                          size={13}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>

                      {count > 0 && (
                        <span className="text-[11px] font-medium text-sand-100/70 sm:hidden">
                          {count} {count === 1 ? 'tour available' : 'tours available'}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}