import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '@/components/Icon';
import SmartImage from '@/components/SmartImage';
import { getDestinationBySlug } from '@/data/destinations';
import { TourSummaryArray } from '@/data/tours';

export default function DestinationModal({ destination: destProp, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const dest = typeof destProp === 'string' ? getDestinationBySlug(destProp) : destProp;

  // Reset tab and active image when destination changes
  useEffect(() => {
    setActiveTab('overview');
    setActiveImgIdx(0);
    setIsLightboxOpen(false);
  }, [destProp]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
        } else if (isOpen) {
          onClose?.();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isLightboxOpen, onClose]);

  if (!isOpen || !dest) return null;

  const images = dest.images || [
    {
      src: dest.coverImage || '/images/destination/mule-ethiopia-tours-lalibela.jpg',
      title: dest.name,
      caption: dest.teaser || dest.tagline,
      alt: dest.name,
    },
  ];

  const currentImage = images[activeImgIdx] || images[0];

  // Match tours for this destination
  const matchedTours = TourSummaryArray.filter((tour) => {
    const text = `${tour.title} ${tour.shortDescription || ''} ${(tour.description || []).join(' ')}`.toLowerCase();
    const nameMatch = text.includes(dest.name.toLowerCase());
    const slugMatch = dest.topTours?.includes(tour.id);
    return nameMatch || slugMatch;
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-forest-950/80 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 flex flex-col max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-sand-50 shadow-2xl ring-1 ring-sand-300"
        >
          {/* Modal Header */}
          <div className="relative flex items-center justify-between border-b border-sand-200/80 bg-white px-6 py-4 sm:px-8">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-forest-900/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-forest-800">
                  <Icon name="map-pin" size={13} className="text-forest-600" />
                  {dest.region}
                </span>
                {dest.keyDetails?.elevation && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-clay-500/10 px-3 py-1 text-[11px] font-bold text-clay-700">
                    🏔️ {dest.keyDetails.elevation}
                  </span>
                )}
              </div>
              <h2 className="mt-1 font-serif text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                {dest.name}
              </h2>
              <p className="text-xs sm:text-sm font-medium text-ink/65">{dest.tagline || dest.teaser}</p>
            </div>

            {/* Action controls */}
            <div className="flex items-center gap-3">
              <Link
                href={`/destinations/${dest.slug}`}
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-sand-200/80 px-4 py-2 text-xs font-semibold text-ink/75 hover:bg-sand-300 hover:text-ink transition"
                title="Open dedicated page"
              >
                <span>Full Page</span>
                <Icon name="arrow-up-right" size={14} />
              </Link>

              <button
                onClick={onClose}
                className="grid h-10 w-10 place-items-center rounded-full bg-sand-200/80 text-ink/70 hover:bg-clay-500 hover:text-sand-50 transition"
                aria-label="Close details modal"
              >
                <Icon name="x" size={20} />
              </button>
            </div>
          </div>

          {/* Main Scrollable Body */}
          <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 custom-scrollbar">
            
            {/* Top Interactive Image Showcase */}
            <div className="relative overflow-hidden rounded-2xl bg-forest-950 shadow-md">
              <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
                {currentImage.src.startsWith('/') ? (
                  <Image
                    src={currentImage.src}
                    alt={currentImage.alt || dest.name}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1000px"
                    className="object-cover transition-all duration-500"
                    priority
                  />
                ) : (
                  <SmartImage
                    imageKey={dest.imageKey}
                    alt={currentImage.alt || dest.name}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1000px"
                    className="object-cover"
                  />
                )}
                
                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-black/20" />

                {/* Image caption badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 text-sand-50">
                  <div>
                    <span className="inline-block rounded-md bg-gold-400/90 px-2 py-0.5 text-[10px] font-bold text-forest-950 uppercase tracking-wider mb-1">
                      {activeImgIdx + 1} / {images.length} Photos
                    </span>
                    <h4 className="font-serif text-base sm:text-lg font-semibold drop-shadow">{currentImage.title}</h4>
                    <p className="text-xs text-sand-200/90 line-clamp-1 drop-shadow">{currentImage.caption}</p>
                  </div>

                  <button
                    onClick={() => setIsLightboxOpen(true)}
                    className="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-white/20 px-3.5 py-2 text-xs font-semibold text-sand-50 backdrop-blur-md hover:bg-white/30 transition"
                  >
                    <Icon name="search" size={14} />
                    <span>Expand Photo</span>
                  </button>
                </div>
              </div>

              {/* Thumbnail Bar */}
              {images.length > 1 && (
                <div className="flex gap-2 bg-forest-950/90 p-3 overflow-x-auto scrollbar-none border-t border-white/10">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImgIdx(idx)}
                      className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg transition-all ${
                        activeImgIdx === idx ? 'ring-2 ring-gold-400 scale-105' : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.title || `Thumbnail ${idx}`}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Navigation Tabs Bar */}
            <div className="mt-6 flex border-b border-sand-300 overflow-x-auto scrollbar-none">
              {[
                { id: 'overview', label: 'Overview & Highlights', icon: 'sparkles' },
                { id: 'gallery', label: `Photo Gallery (${images.length})`, icon: 'camera' },
                { id: 'specs', label: 'Travel Info & Weather', icon: 'map-pin' },
                { id: 'tours', label: `Related Tours (${matchedTours.length})`, icon: 'compass' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold transition whitespace-nowrap ${
                    activeTab === tab.id ? 'text-clay-600' : 'text-ink/60 hover:text-ink'
                  }`}
                >
                  <Icon name={tab.icon} size={16} />
                  <span>{tab.label}</span>
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-clay-500"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content 1: Overview & Highlights */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 grid gap-8 lg:grid-cols-12"
              >
                {/* Main Text Content */}
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="font-serif text-xl font-bold text-ink">Discovering {dest.name}</h3>
                  <div className="prose prose-sand text-sm leading-relaxed text-ink/80 space-y-3 whitespace-pre-line">
                    {dest.description}
                  </div>

                  {/* Highlights section */}
                  {dest.highlights && dest.highlights.length > 0 && (
                    <div className="mt-6 rounded-2xl bg-white p-5 shadow-card ring-1 ring-sand-200">
                      <h4 className="flex items-center gap-2 font-serif text-base font-bold text-ink mb-3">
                        <Icon name="star" size={18} className="text-gold-500" />
                        <span>Key Highlights & Landmarks</span>
                      </h4>
                      <ul className="grid gap-2.5 sm:grid-cols-2">
                        {dest.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs font-semibold text-ink/80">
                            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-forest-900/10 text-forest-700">
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Right Side Info Box */}
                <div className="lg:col-span-5 space-y-4">
                  {/* Quick Travel Specs */}
                  <div className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-sand-200 space-y-4">
                    <h4 className="font-serif text-base font-bold text-ink border-b border-sand-200 pb-2">
                      Travel Snapshot
                    </h4>

                    {dest.keyDetails && (
                      <dl className="grid gap-3 text-xs">
                        <div>
                          <dt className="font-bold text-ink/50 uppercase tracking-wider text-[10px]">Best Season</dt>
                          <dd className="mt-0.5 font-semibold text-clay-600">{dest.keyDetails.bestTimeToVisit}</dd>
                        </div>
                        <div>
                          <dt className="font-bold text-ink/50 uppercase tracking-wider text-[10px]">Elevation</dt>
                          <dd className="mt-0.5 font-mono font-bold text-forest-700">{dest.keyDetails.elevation}</dd>
                        </div>
                        <div>
                          <dt className="font-bold text-ink/50 uppercase tracking-wider text-[10px]">Average Climate</dt>
                          <dd className="mt-0.5 font-semibold text-ink/80">{dest.keyDetails.climate}</dd>
                        </div>
                        <div>
                          <dt className="font-bold text-ink/50 uppercase tracking-wider text-[10px]">Ideal Stay Duration</dt>
                          <dd className="mt-0.5 font-semibold text-ink/80">{dest.keyDetails.idealDuration}</dd>
                        </div>
                      </dl>
                    )}

                    {/* Coordinates pill */}
                    <div className="flex items-center gap-2 rounded-xl bg-sand-100 p-3 text-xs font-mono text-ink/70">
                      <Icon name="globe" size={16} className="text-forest-600" />
                      <span>
                        Coords: {dest.coords?.[0]}° N, {dest.coords?.[1]}° E
                      </span>
                    </div>
                  </div>

                  {/* CTA Banner inside modal */}
                  <div className="rounded-2xl bg-gradient-to-br from-forest-900 to-forest-950 p-5 text-sand-50 shadow-card">
                    <h4 className="font-serif text-lg font-bold text-gold-300">Plan a trip to {dest.name}</h4>
                    <p className="mt-1 text-xs text-sand-200/80">
                      Custom itineraries crafted by Mule Ethiopia’s local native experts.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Link
                        href={`/tours?destination=${dest.slug}`}
                        onClick={onClose}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-clay-500 px-4 py-2 text-xs font-bold text-sand-50 hover:bg-clay-600 transition"
                      >
                        <span>View {matchedTours.length} Tours</span>
                        <Icon name="arrow-right" size={14} />
                      </Link>
                      <Link
                        href="/contact"
                        onClick={onClose}
                        className="inline-flex items-center gap-1 rounded-xl bg-white/10 px-4 py-2 text-xs font-bold text-sand-50 hover:bg-white/20 transition"
                      >
                        <span>Tailor-made Trip</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab Content 2: Photo Gallery */}
            {activeTab === 'gallery' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6"
              >
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {images.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setActiveImgIdx(idx);
                        setIsLightboxOpen(true);
                      }}
                      className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-forest-950 shadow-card transition-all hover:scale-[1.02]"
                    >
                      <Image
                        src={img.src}
                        alt={img.title || dest.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 text-sand-50">
                        <div>
                          <p className="font-serif text-sm font-bold">{img.title}</p>
                          <p className="text-[11px] text-sand-200/80 line-clamp-1">{img.caption}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Tab Content 3: Travel Info & Weather */}
            {activeTab === 'specs' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {dest.keyDetails && (
                  <>
                    <div className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-sand-200">
                      <div className="text-2xl mb-2">☀️</div>
                      <h4 className="font-serif font-bold text-ink text-sm">Best Time to Visit</h4>
                      <p className="mt-1 text-xs text-ink/75 leading-relaxed">{dest.keyDetails.bestTimeToVisit}</p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-sand-200">
                      <div className="text-2xl mb-2">🏔️</div>
                      <h4 className="font-serif font-bold text-ink text-sm">Elevation & Geography</h4>
                      <p className="mt-1 text-xs text-ink/75 leading-relaxed">{dest.keyDetails.elevation}</p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-sand-200">
                      <div className="text-2xl mb-2">🌡️</div>
                      <h4 className="font-serif font-bold text-ink text-sm">Climate Profile</h4>
                      <p className="mt-1 text-xs text-ink/75 leading-relaxed">{dest.keyDetails.climate}</p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-sand-200">
                      <div className="text-2xl mb-2">⏱️</div>
                      <h4 className="font-serif font-bold text-ink text-sm">Ideal Stay Duration</h4>
                      <p className="mt-1 text-xs text-ink/75 leading-relaxed">{dest.keyDetails.idealDuration}</p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-sand-200">
                      <div className="text-2xl mb-2">✈️</div>
                      <h4 className="font-serif font-bold text-ink text-sm">Getting There & Logistics</h4>
                      <p className="mt-1 text-xs text-ink/75 leading-relaxed">{dest.keyDetails.gettingThere}</p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-sand-200">
                      <div className="text-2xl mb-2">🏛️</div>
                      <h4 className="font-serif font-bold text-ink text-sm">Cultural Significance</h4>
                      <p className="mt-1 text-xs text-ink/75 leading-relaxed">{dest.keyDetails.culturalSignificance}</p>
                    </div>
                  </>
                )}
              </motion.div>
            )}

            {/* Tab Content 4: Related Tours */}
            {activeTab === 'tours' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6"
              >
                {matchedTours.length > 0 ? (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {matchedTours.map((tour) => (
                      <div
                        key={tour.id}
                        className="flex flex-col justify-between rounded-2xl bg-white p-5 shadow-card ring-1 ring-sand-200 transition hover:shadow-card-hover"
                      >
                        <div>
                          <div className="flex items-center justify-between text-xs text-clay-600 font-bold mb-2">
                            <span>⏱️ {tour.duration}</span>
                            <span>👥 {tour.groupsize} travellers</span>
                          </div>
                          <h4 className="font-serif text-base font-bold text-ink leading-snug">{tour.title}</h4>
                          <p className="mt-2 text-xs text-ink/70 line-clamp-2">{tour.shortDescription}</p>
                        </div>

                        <div className="mt-4 flex items-center justify-between border-t border-sand-200 pt-3">
                          <span className="text-xs font-semibold text-forest-700">
                            🚘 {tour.transportation}
                          </span>
                          <Link
                            href={`/tours`}
                            onClick={onClose}
                            className="inline-flex items-center gap-1 text-xs font-bold text-clay-600 hover:text-clay-700 transition"
                          >
                            <span>Explore Tour</span>
                            <Icon name="arrow-right" size={13} />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-2xl bg-white p-8 text-center text-ink/60">
                    <p className="font-serif text-lg font-bold text-ink">Custom Tours Available</p>
                    <p className="mt-1 text-xs">We customize tailored itineraries to {dest.name} based on your preferences.</p>
                    <Link
                      href="/contact"
                      onClick={onClose}
                      className="mt-4 inline-flex items-center gap-2 rounded-xl bg-clay-500 px-5 py-2.5 text-xs font-bold text-sand-50"
                    >
                      Request Custom Itinerary
                    </Link>
                  </div>
                )}
              </motion.div>
            )}

          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-between border-t border-sand-200 bg-white px-6 py-4 sm:px-8">
            <Link
              href={`/tours?destination=${dest.slug}`}
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-2xl bg-forest-600 px-6 py-3 text-xs sm:text-sm font-bold text-sand-50 hover:bg-forest-700 transition shadow-md"
            >
              <span>Explore All Tours in {dest.name}</span>
              <Icon name="arrow-right" size={16} />
            </Link>

            <button
              onClick={onClose}
              className="rounded-2xl border border-sand-300 px-5 py-3 text-xs sm:text-sm font-semibold text-ink/75 hover:bg-sand-100 transition"
            >
              Close
            </button>
          </div>
        </motion.div>

        {/* Fullscreen Image Lightbox Overlay */}
        {isLightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/20 text-white hover:bg-white/40 transition"
            >
              <Icon name="x" size={24} />
            </button>

            <div className="relative max-h-[85vh] max-w-[90vw] aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src={currentImage.src}
                alt={currentImage.title || dest.name}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-center text-white">
              <p className="font-serif text-lg font-bold">{currentImage.title}</p>
              <p className="text-xs text-sand-200/80">{currentImage.caption}</p>
            </div>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
}
