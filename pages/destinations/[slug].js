import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Seo from '@/components/Seo';
import Icon from '@/components/Icon';
import SmartImage from '@/components/SmartImage';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';
import { DESTINATIONS, getDestinationBySlug, getAllDestinations } from '@/data/destinations';
import { TourSummaryArray } from '@/data/tours';

export async function getStaticPaths() {
  const paths = DESTINATIONS.map((d) => ({
    params: { slug: d.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const destination = getDestinationBySlug(params.slug);
  if (!destination) {
    return { notFound: true };
  }
  return {
    props: {
      destination,
    },
  };
}

export default function DestinationDetailPage({ destination }) {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const images = destination.images || [
    {
      src: destination.coverImage || '/images/destination/mule-ethiopia-tours-lalibela.jpg',
      title: destination.name,
      caption: destination.teaser || destination.tagline,
      alt: destination.name,
    },
  ];

  const activeImage = images[selectedImageIdx] || images[0];

  // Match tours for this destination
  const matchedTours = TourSummaryArray.filter((tour) => {
    const text = `${tour.title} ${tour.shortDescription || ''} ${(tour.description || []).join(' ')}`.toLowerCase();
    const nameMatch = text.includes(destination.name.toLowerCase());
    const slugMatch = destination.topTours?.includes(tour.id);
    return nameMatch || slugMatch;
  });

  return (
    <>
      <Seo
        title={`${destination.name} — Ethiopia Destination Guide`}
        description={destination.teaser || destination.description?.substring(0, 150)}
        path={`/destinations/${destination.slug}`}
      />

      {/* Hero Banner Section */}
      <section className="relative isolate overflow-hidden bg-forest-950 pt-28 pb-16 text-sand-50 lg:pt-36 lg:pb-24">
        {/* Background Cover Image with High Contrast Gradient Overlays */}
        <div className="absolute inset-0 -z-10">
          <SmartImage
            imageKey={destination.imageKey}
            alt={destination.name}
            fill
            priority
            quality={95}
            className="object-cover object-center scale-105"
          />
          {/* Multi-stage Scrim Overlays for Superior Image Clarity & Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-950/80 to-forest-950/30 lg:to-forest-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/50 to-transparent" />
        </div>

        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            
            {/* Left Main Content */}
            <div className="lg:col-span-7">
              {/* Breadcrumbs */}
              <nav className="inline-flex items-center gap-2 rounded-full bg-black/40 px-4 py-1.5 text-xs font-semibold text-sand-200/90 backdrop-blur-md ring-1 ring-white/15 mb-6">
                <Link href="/" className="hover:text-gold-300 transition">Home</Link>
                <span className="text-sand-400">/</span>
                <Link href="/destinations" className="hover:text-gold-300 transition">Destinations</Link>
                <span className="text-sand-400">/</span>
                <span className="text-gold-300 font-bold">{destination.name}</span>
              </nav>

              <Reveal>
                <div>
                  {/* Category & Region Pills */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-gold-500/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-300 backdrop-blur-md ring-1 ring-gold-400/30">
                      <Icon name="map-pin" size={14} className="text-gold-400" />
                      <span>{destination.region}</span>
                    </div>

                    {destination.keyDetails?.elevation && (
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold text-sand-100 backdrop-blur-md ring-1 ring-white/15">
                        <span>🏔️ {destination.keyDetails.elevation}</span>
                      </div>
                    )}

                    {destination.keyDetails?.bestTimeToVisit && (
                      <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3.5 py-1.5 text-xs font-bold text-emerald-300 backdrop-blur-md ring-1 ring-emerald-400/30">
                        <span>☀️ Best: {destination.keyDetails.bestTimeToVisit.split('(')[0]}</span>
                      </div>
                    )}
                  </div>

                  <h1 className="font-serif text-4xl font-bold tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">
                    {destination.name}
                  </h1>

                  <p className="mt-4 text-lg sm:text-xl font-medium text-gold-200/95 leading-relaxed max-w-2xl drop-shadow">
                    {destination.tagline || destination.teaser}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/tours?destination=${destination.slug}`}
                      className="inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-clay-500 to-clay-600 px-7 py-3.5 text-sm font-bold text-sand-50 shadow-xl shadow-clay-950/40 hover:from-clay-600 hover:to-clay-700 transition transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>Explore {destination.name} Tours</span>
                      <Icon name="arrow-right" size={16} />
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-2xl bg-white/15 px-6 py-3.5 text-sm font-bold text-sand-50 backdrop-blur-md ring-1 ring-white/25 hover:bg-white/25 transition transform hover:-translate-y-0.5"
                    >
                      <Icon name="compass" size={16} className="text-gold-300" />
                      <span>Book Custom Trip</span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Side Card Preview (Desktop) */}
            <div className="hidden lg:block lg:col-span-5">
              <Reveal>
                <div className="relative rounded-3xl bg-forest-950/60 p-6 backdrop-blur-xl ring-1 ring-white/15 shadow-2xl space-y-5">
                  {/* Mini Gallery Preview */}
                  <div
                    onClick={() => setLightboxOpen(true)}
                    className="group relative aspect-[16/10] overflow-hidden rounded-2xl cursor-pointer ring-1 ring-white/20 shadow-md"
                  >
                    <SmartImage
                      imageKey={destination.imageKey}
                      alt={destination.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-sand-100 font-semibold">
                      <span className="flex items-center gap-1 bg-black/50 px-2.5 py-1 rounded-lg backdrop-blur-md">
                        <Icon name="camera" size={13} className="text-gold-300" />
                        {images.length} Photos
                      </span>
                      <span className="bg-gold-400/90 text-forest-950 px-2.5 py-1 rounded-lg font-bold group-hover:bg-gold-300 transition">
                        Expand Photo ↗
                      </span>
                    </div>
                  </div>

                  {/* Quick Specs Grid */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                      <span className="block font-bold text-gold-400 uppercase tracking-wider text-[10px]">Best Season</span>
                      <span className="block font-semibold text-sand-100 mt-0.5 line-clamp-1">
                        {destination.keyDetails?.bestTimeToVisit || 'October - May'}
                      </span>
                    </div>
                    <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                      <span className="block font-bold text-gold-400 uppercase tracking-wider text-[10px]">Elevation</span>
                      <span className="block font-mono font-bold text-sand-100 mt-0.5">
                        {destination.keyDetails?.elevation || 'Highland'}
                      </span>
                    </div>
                  </div>

                  {/* Featured Tours Link */}
                  <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs font-semibold text-sand-200">
                    <span className="flex items-center gap-1.5">
                      <Icon name="star" size={14} className="text-gold-400" />
                      <span>{matchedTours.length} Guided Itineraries</span>
                    </span>
                    <Link
                      href={`/tours?destination=${destination.slug}`}
                      className="text-gold-300 hover:underline flex items-center gap-1"
                    >
                      <span>View all</span>
                      <Icon name="arrow-right" size={12} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content & Gallery */}
      <section className="py-16 sm:py-24 bg-sand-50">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12">
            
            {/* Left Column: Description & Highlights */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Detailed Story */}
              <Reveal>
                <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-card ring-1 ring-sand-200">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
                    About {destination.name}
                  </h2>
                  <div className="prose prose-sand max-w-none text-sm sm:text-base leading-relaxed text-ink/80 whitespace-pre-line">
                    {destination.description}
                  </div>
                </div>
              </Reveal>

              {/* Key Highlights */}
              {destination.highlights && (
                <Reveal>
                  <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-card ring-1 ring-sand-200">
                    <h3 className="flex items-center gap-2 font-serif text-xl sm:text-2xl font-bold text-ink mb-6">
                      <Icon name="sparkles" size={22} className="text-gold-500" />
                      <span>Must-See Highlights & Attractions</span>
                    </h3>
                    <ul className="grid gap-4 sm:grid-cols-2">
                      {destination.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 rounded-2xl bg-sand-100/60 p-4 ring-1 ring-sand-200">
                          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-xl bg-forest-600 text-sand-50 text-xs font-bold">
                            {idx + 1}
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-ink/85">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}

              {/* Photo Gallery Grid */}
              <Reveal>
                <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-card ring-1 ring-sand-200">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">
                      Photo Gallery ({images.length})
                    </h3>
                    <span className="text-xs font-semibold text-ink/50">Click photo to expand</span>
                  </div>

                  {/* Main featured photo */}
                  <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-forest-950 shadow-md">
                    <Image
                      src={activeImage.src}
                      alt={activeImage.title || destination.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 700px"
                      className="object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-sand-50">
                      <div>
                        <h4 className="font-serif text-lg font-bold">{activeImage.title}</h4>
                        <p className="text-xs text-sand-200/80">{activeImage.caption}</p>
                      </div>
                      <button
                        onClick={() => setLightboxOpen(true)}
                        className="rounded-xl bg-white/20 px-3 py-1.5 text-xs font-semibold text-sand-50 backdrop-blur-md hover:bg-white/30"
                      >
                        Expand
                      </button>
                    </div>
                  </div>

                  {/* Thumbnails grid */}
                  <div className="mt-4 grid grid-cols-4 gap-3">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImageIdx(idx)}
                        className={`relative aspect-[4/3] overflow-hidden rounded-xl transition-all ${
                          selectedImageIdx === idx ? 'ring-3 ring-clay-500 scale-95' : 'opacity-70 hover:opacity-100'
                        }`}
                      >
                        <Image src={img.src} alt={img.title || ''} fill sizes="150px" className="object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </Reveal>

            </div>

            {/* Right Column: Key Travel Details & Tours */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Travel Information Box */}
              <Reveal>
                <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-card ring-1 ring-sand-200 space-y-6">
                  <h3 className="font-serif text-xl font-bold text-ink border-b border-sand-200 pb-3">
                    Essential Travel Specs
                  </h3>

                  {destination.keyDetails && (
                    <div className="grid gap-4 text-xs sm:text-sm">
                      <div className="rounded-2xl bg-sand-100/70 p-4">
                        <span className="block font-bold uppercase tracking-wider text-[10px] text-ink/45">Best Time to Visit</span>
                        <span className="block font-semibold text-clay-600 mt-0.5">{destination.keyDetails.bestTimeToVisit}</span>
                      </div>

                      <div className="rounded-2xl bg-sand-100/70 p-4">
                        <span className="block font-bold uppercase tracking-wider text-[10px] text-ink/45">Elevation</span>
                        <span className="block font-mono font-bold text-forest-700 mt-0.5">{destination.keyDetails.elevation}</span>
                      </div>

                      <div className="rounded-2xl bg-sand-100/70 p-4">
                        <span className="block font-bold uppercase tracking-wider text-[10px] text-ink/45">Climate</span>
                        <span className="block font-semibold text-ink/80 mt-0.5">{destination.keyDetails.climate}</span>
                      </div>

                      <div className="rounded-2xl bg-sand-100/70 p-4">
                        <span className="block font-bold uppercase tracking-wider text-[10px] text-ink/45">Ideal Duration</span>
                        <span className="block font-semibold text-ink/80 mt-0.5">{destination.keyDetails.idealDuration}</span>
                      </div>

                      <div className="rounded-2xl bg-sand-100/70 p-4">
                        <span className="block font-bold uppercase tracking-wider text-[10px] text-ink/45">Getting There</span>
                        <span className="block font-semibold text-ink/80 mt-0.5">{destination.keyDetails.gettingThere}</span>
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>

              {/* Matching Tours */}
              <Reveal>
                <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-card ring-1 ring-sand-200 space-y-4">
                  <h3 className="font-serif text-xl font-bold text-ink">
                    Tours Including {destination.name} ({matchedTours.length})
                  </h3>

                  {matchedTours.length > 0 ? (
                    <div className="space-y-3">
                      {matchedTours.map((tour) => (
                        <div key={tour.id} className="rounded-2xl bg-sand-100/50 p-4 ring-1 ring-sand-200">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-clay-600">⏱️ {tour.duration}</span>
                          <h4 className="font-serif text-sm font-bold text-ink mt-0.5">{tour.title}</h4>
                          <p className="text-xs text-ink/65 line-clamp-2 mt-1">{tour.shortDescription}</p>
                          <Link
                            href="/tours"
                            className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-forest-700 hover:text-forest-900"
                          >
                            <span>Explore Itinerary</span>
                            <Icon name="arrow-right" size={12} />
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-ink/60">Contact us to design a custom tour visiting {destination.name}.</p>
                  )}

                  <Link
                    href={`/tours?destination=${destination.slug}`}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-forest-600 py-3.5 text-xs font-bold text-sand-50 shadow-md hover:bg-forest-700 transition"
                  >
                    <span>View All {destination.name} Tours</span>
                    <Icon name="arrow-right" size={14} />
                  </Link>
                </div>
              </Reveal>

            </div>

          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/20 text-white hover:bg-white/40 transition"
          >
            <Icon name="x" size={24} />
          </button>
          <div className="relative max-h-[85vh] max-w-[90vw] aspect-[16/10] overflow-hidden rounded-2xl">
            <Image
              src={activeImage.src}
              alt={activeImage.title || destination.name}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-6 text-center text-white">
            <p className="font-serif text-lg font-bold">{activeImage.title}</p>
            <p className="text-xs text-sand-200/80">{activeImage.caption}</p>
          </div>
        </div>
      )}
    </>
  );
}
