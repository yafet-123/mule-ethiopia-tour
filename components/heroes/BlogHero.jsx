import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SmartImage from '@/components/SmartImage';
import Icon from '@/components/Icon';
import { IMAGES } from '@/data/images';
import { POSTS } from '@/data/posts';

const CATEGORIES = [
  { label: 'All', slug: null },
  { label: 'Travel Tips', slug: 'Travel Tips' },
  { label: 'Culture', slug: 'Culture' },
  { label: 'Adventure', slug: 'Adventure' },
  { label: 'Wildlife', slug: 'Wildlife' },
  { label: 'History', slug: 'History' },
  { label: 'Food & Drink', slug: 'Food & Drink' },
];

const CATEGORY_COUNTS = POSTS.reduce((acc, p) => {
  acc[p.category] = (acc[p.category] || 0) + 1;
  return acc;
}, {});

const TICKER_ITEMS = [
  '📖 Stories from Local Guides',
  '🏔️ Trekking & Altitude Tips',
  '🦁 Wildlife Encounters',
  '☕ Ethiopian Coffee Culture',
  '🏛️ Ancient History & Temples',
  '🌶️ Food & Cuisine Guides',
  '🗺️ Route Planning Advice',
];

/**
 * BlogHero — "Editorial Dispatch" style
 * Dark ambient hero with animated stat ticker, category filter pills,
 * featured-post spotlight, and animated scrolling text banner.
 */
export default function BlogHero({ activeCategory, onCategorySelect }) {
  const [tickerX, setTickerX] = useState(0);

  // Pick featured post (most recent)
  const featured = POSTS[0];
  const featuredImg = IMAGES[featured?.imageKey] || { src: null, fallback: '/images/art/generic.svg' };

  // Animate ticker
  useEffect(() => {
    const fullText = TICKER_ITEMS.join('  ·  ') + '  ·  ';
    const itemWidth = 220;
    const totalWidth = TICKER_ITEMS.length * itemWidth;
    let frame;
    let x = 0;
    const step = () => {
      x -= 0.6;
      if (Math.abs(x) >= totalWidth) x = 0;
      setTickerX(x);
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-ink pt-28 pb-0 lg:pt-36 text-sand-50">
      {/* Ambient Background Blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 right-0 h-[700px] w-[700px] rounded-full bg-gold-500/10 blur-[160px]" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-clay-600/10 blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[800px] rounded-full bg-forest-700/10 blur-[120px]" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle, #EFCB82 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="container-x">
        {/* Top Row: Badge + Stats */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <motion.div
            className="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20 backdrop-blur-md"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-gold-400 text-ink text-xs">
              ✍️
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-sand-100">
              Journal & Travel Dispatches
            </span>
          </motion.div>

          <motion.div
            className="flex items-center gap-5 text-xs text-sand-200/60 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="flex items-center gap-1.5">
              <span className="text-gold-400 font-bold text-sm">{POSTS.length}</span> Articles
            </span>
            <span className="h-3 w-px bg-white/20" />
            <span className="flex items-center gap-1.5">
              <span className="text-gold-400 font-bold text-sm">{Object.keys(CATEGORY_COUNTS).length}</span> Topics
            </span>
            <span className="h-3 w-px bg-white/20" />
            <span className="flex items-center gap-1.5">
              <span className="text-gold-400 font-bold text-sm">100%</span> Local Guides
            </span>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-12 pb-14">

          {/* Left: Title + Filter */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-sand-50 sm:text-5xl lg:text-6xl">
              Stories from{' '}
              <em className="text-gold-400 not-italic font-normal italic underline decoration-gold-400/50 decoration-wavy underline-offset-8">
                the field
              </em>
              , not the office.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-sand-200/75 sm:text-lg">
              Cultural deep-dives, packing guides, wildlife encounters, and honest advice — written by guides who live and breathe Ethiopia every single day.
            </p>

            {/* Category Filter Pills */}
            <div className="mt-8">
              <p className="text-[11px] font-bold uppercase tracking-widest text-sand-200/40 mb-3">
                Browse by topic
              </p>
              <div className="flex flex-wrap gap-2.5">
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat.slug;
                  const count = cat.slug ? CATEGORY_COUNTS[cat.slug] || 0 : POSTS.length;
                  return (
                    <button
                      key={cat.label}
                      onClick={() => onCategorySelect && onCategorySelect(cat.slug)}
                      className={`rounded-full px-4 py-2 text-xs font-semibold transition-all backdrop-blur-sm ring-1 flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-gold-400 text-ink ring-gold-400 shadow-md'
                          : 'bg-white/10 text-sand-100 ring-white/20 hover:bg-white/20'
                      }`}
                    >
                      {cat.label}
                      <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                        isActive ? 'bg-ink/20 text-ink' : 'bg-white/15 text-sand-200/70'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap gap-4 text-xs text-sand-50/60 font-medium">
              {[
                { icon: 'map-pin', text: 'Written from Addis Ababa' },
                { icon: 'clock', text: '4–8 min avg. read time' },
                { icon: 'users', text: 'By guides, for travellers' },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-1.5">
                  <Icon name={b.icon} size={13} className="text-gold-400" />
                  <span>{b.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Featured Post Card */}
          {featured && (
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2 }}
            >
              <p className="text-[11px] font-bold uppercase tracking-widest text-gold-400/70 mb-3">
                Latest dispatch
              </p>
              <Link
                href={`/blog/${featured.slug}`}
                className="group block rounded-3xl overflow-hidden ring-1 ring-white/15 shadow-2xl hover:ring-gold-400/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-stone-900">
                  <SmartImage
                    src={featuredImg.src}
                    fallback={featuredImg.fallback}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

                  {/* Category badge */}
                  <span className="absolute top-4 left-4 rounded-full bg-gold-400/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink backdrop-blur-sm">
                    {featured.category}
                  </span>

                  {/* Read time badge */}
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium text-sand-100 backdrop-blur-md ring-1 ring-white/10">
                    <Icon name="clock" size={11} />
                    {featured.readTime} min read
                  </span>
                </div>

                {/* Content */}
                <div className="bg-white/5 p-5 backdrop-blur-md">
                  <p className="text-[11px] text-sand-200/50 font-mono mb-2">
                    {new Date(featured.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                  <h2 className="font-serif text-xl font-semibold leading-snug text-sand-50 group-hover:text-gold-300 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="mt-2 text-sm text-sand-200/65 line-clamp-2 leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-gold-400">
                    Read the full article
                    <Icon name="arrow-right" size={13} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </div>

      {/* Scrolling Ticker Banner */}
      <div className="border-t border-white/10 bg-white/5 backdrop-blur-md overflow-hidden py-3">
        <div
          className="flex items-center gap-0 whitespace-nowrap"
          style={{ transform: `translateX(${tickerX}px)` }}
        >
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2 px-8 text-xs font-medium text-sand-200/60 uppercase tracking-widest">
              <span className="h-1 w-1 rounded-full bg-gold-400/60" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
