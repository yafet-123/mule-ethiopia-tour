import { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import Seo from '@/components/Seo';
import GalleryHero from '@/components/heroes/GalleryHero';
import Icon from '@/components/Icon';
import { SITE } from '@/lib/config';
import { GALLERY } from '@/data/gallery';

/**
 * Instagram-explore-style photo wall: filter chips, mixed-size grid with
 * hover like-overlay, and a full lightbox with keyboard navigation.
 */

// Instagram Explore 12-item repeating rhythm on 3-column grid:
// Set 1 (items 0-5):
//   - item 0: Large 2×2 square (cols 1-2, rows 1-2)
//   - item 1 & 2: Small 1×1 squares (col 3, rows 1 & 2)
//   - items 3, 4, 5: Small 1×1 squares (cols 1, 2, 3 in row 3)
// Set 2 (items 6-11, mirrored):
//   - item 6 & 7: Small 1×1 squares (col 1, rows 4 & 5)
//   - item 8: Large 2×2 square (cols 2-3, rows 4-5)
//   - items 9, 10, 11: Small 1×1 squares (cols 1, 2, 3 in row 6)
// This guarantees 100% gapless packing with true square proportions!
function getTileClasses(i) {
  const mod = i % 12;
  if (mod === 0) {
    // Large square top-left
    return {
      isLarge: true,
      container: 'col-span-2 row-span-2 aspect-square',
      sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw',
    };
  }
  if (mod === 8) {
    // Large square top-right
    return {
      isLarge: true,
      container: 'col-span-2 row-span-2 aspect-square',
      sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw',
    };
  }
  // Standard small square
  return {
    isLarge: false,
    container: 'col-span-1 row-span-1 aspect-square',
    sizes: '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw',
  };
}

export default function Gallery() {
  const [activeTag, setActiveTag] = useState('All');
  const [lightbox, setLightbox] = useState(null); // index into GALLERY
  const [likedMap, setLikedMap] = useState({});

  const toggleLike = (e, index) => {
    e.stopPropagation();
    setLikedMap((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const tags = useMemo(() => {
    const counts = new Map();
    GALLERY.forEach((shot) => counts.set(shot.tag, (counts.get(shot.tag) || 0) + 1));
    return [
      { tag: 'All', count: GALLERY.length },
      ...[...counts.entries()].map(([tag, count]) => ({ tag, count })),
    ];
  }, []);

  const shots = useMemo(
    () => (activeTag === 'All' ? GALLERY : GALLERY.filter((s) => s.tag === activeTag)),
    [activeTag]
  );

  // Lock body scroll while the lightbox is open.
  useEffect(() => {
    if (lightbox === null) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [lightbox]);

  const step = useCallback(
    (dir) =>
      setLightbox((cur) => (cur === null ? cur : (cur + dir + GALLERY.length) % GALLERY.length)),
    []
  );

  // Keyboard navigation inside the lightbox.
  useEffect(() => {
    if (lightbox === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, step]);

  const shot = lightbox === null ? null : GALLERY[lightbox];

  return (
    <>
      <Seo
        title="Gallery"
        path="/gallery"
        description="Photo feed from the road — Simien treks, Danakil salt flats, Lalibela festivals and Omo Valley portraits, shot by our own guides on tour."
      />
      <GalleryHero activeTag={activeTag} onTagSelect={setActiveTag} />

      {/* Destination filter chips */}
      <section className="container-x pb-8 pt-10 sm:pb-10 sm:pt-14">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-sand-300/80 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            {tags.map(({ tag, count }) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`group flex items-center gap-1.5 rounded-full border px-4 py-2 text-[12px] font-semibold tracking-wide transition-all duration-200 ${
                  activeTag === tag
                    ? 'border-forest-700 bg-forest-700 text-sand-50 shadow-md ring-2 ring-forest-700/20'
                    : 'border-sand-300/90 bg-white/80 text-ink/75 hover:border-forest-500 hover:bg-white hover:text-forest-700'
                }`}
              >
                <span>{tag}</span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                    activeTag === tag
                      ? 'bg-white/20 text-sand-100'
                      : 'bg-sand-200 text-ink/50 group-hover:bg-forest-100 group-hover:text-forest-700'
                  }`}
                >
                  {count}
                </span>
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink/40 md:flex">
            <Icon name="camera" size={14} className="text-gold-500" />
            <span>{shots.length} Authentic Shots</span>
          </div>
        </div>
      </section>

      {/* Instagram Explore Mosaic Grid */}
      <section className="container-x pb-16 sm:pb-24">
        <motion.div
          layout
          className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {shots.map((shot, i) => {
              const index = GALLERY.indexOf(shot);
              const { isLarge, container, sizes } = getTileClasses(i);
              const isLiked = Boolean(likedMap[index]);
              const displayLikes = shot.likes + (isLiked ? 1 : 0);

              return (
                <motion.div
                  layout
                  key={shot.src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative overflow-hidden rounded-2xl bg-sand-300/50 shadow-sm transition-all duration-300 hover:shadow-xl hover:ring-2 hover:ring-gold-400/50 ${container}`}
                >
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setLightbox(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') setLightbox(index);
                    }}
                    className="relative h-full w-full block text-left cursor-pointer"
                    aria-label={`Open photo: ${shot.title}`}
                  >
                    <Image
                      src={shot.src}
                      alt={shot.title}
                      fill
                      quality={85}
                      sizes={sizes}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                    />

                    {/* Subtle Explore Badge in Top Right for Featured Large Shots */}
                    {isLarge && (
                      <span className="absolute right-3 top-3 z-10 hidden items-center gap-1 rounded-full bg-forest-950/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-300 backdrop-blur-md ring-1 ring-white/15 sm:inline-flex">
                        <Icon name="sparkle" size={10} /> Featured
                      </span>
                    )}

                    {/* Instagram-style Hover Scrim & Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/40 to-forest-950/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-between p-3.5 sm:p-5">
                      {/* Top bar on hover */}
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-medium text-sand-100 backdrop-blur-md">
                          <Icon name="map-pin" size={12} className="text-gold-300" />
                          <span className="truncate max-w-[120px] sm:max-w-[180px]">{shot.location}</span>
                        </span>

                        <button
                          type="button"
                          onClick={(e) => toggleLike(e, index)}
                          className="grid h-8 w-8 place-items-center rounded-full bg-black/40 text-sand-50 backdrop-blur-md transition hover:scale-110 hover:bg-clay-500"
                          aria-label={isLiked ? 'Unlike photo' : 'Like photo'}
                        >
                          <Icon
                            name="heart"
                            size={16}
                            className={isLiked ? 'fill-current text-rose-400' : 'text-sand-50'}
                          />
                        </button>
                      </div>

                      {/* Center likes indicator */}
                      <div className="flex items-center justify-center gap-2 text-base sm:text-lg font-bold text-sand-50 drop-shadow">
                        <Icon
                          name="heart"
                          size={22}
                          className={`transition-transform duration-300 group-hover:scale-110 ${
                            isLiked ? 'fill-current text-rose-400' : 'text-gold-300'
                          }`}
                        />
                        <span>{displayLikes.toLocaleString()}</span>
                      </div>

                      {/* Bottom caption */}
                      <div>
                        <p
                          className={`font-serif font-semibold text-sand-50 line-clamp-2 ${
                            isLarge ? 'text-base sm:text-lg' : 'text-xs sm:text-sm'
                          }`}
                        >
                          {shot.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 rounded-3xl border border-sand-300/80 bg-sand-100/70 p-6 text-center shadow-sm sm:p-8">
          <p className="font-serif text-lg font-semibold text-ink sm:text-xl">
            Have photos from your journey with Mule Ethiopia?
          </p>
          <p className="mx-auto mt-2 max-w-lg text-sm text-ink/65">
            Share your favorite travel shots on WhatsApp or tag us on social media. We feature guest photos right here every month.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-forest-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-sand-50 transition hover:bg-forest-700 shadow-sm"
            >
              <Icon name="whatsapp" size={15} /> Send us your shots
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {shot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-forest-900/95 p-4 backdrop-blur-md sm:p-8"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={shot.title}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-sand-50 transition hover:bg-white/20"
            >
              <Icon name="x" size={20} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-sand-50 transition hover:bg-white/20 sm:left-6"
            >
              <Icon name="chevron-left" size={20} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-sand-50 transition hover:bg-white/20 sm:right-6"
            >
              <Icon name="chevron-right" size={20} />
            </button>

            <motion.figure
              key={shot.src}
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[62vh] w-full overflow-hidden rounded-2xl bg-forest-800 sm:h-[68vh]">
                <Image
                  src={shot.src}
                  alt={shot.title}
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-contain"
                />
              </div>
              <figcaption className="mx-auto mt-5 flex max-w-3xl items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="truncate font-serif text-lg font-semibold text-sand-50 sm:text-xl">
                    {shot.title}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-sand-100/65">
                    <Icon name="map-pin" size={14} className="shrink-0 text-gold-300" />
                    {shot.location}
                  </p>
                </div>
                <span className="hidden shrink-0 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-sand-50 sm:block">
                  {lightbox + 1} / {GALLERY.length}
                </span>
                <span className="flex shrink-0 items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-sand-50">
                  <Icon name="heart" size={16} className="text-gold-300" />
                  {shot.likes}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
