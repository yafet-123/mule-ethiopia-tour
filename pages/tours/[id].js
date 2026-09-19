import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Seo from '@/components/Seo';
import TourImage from '@/components/TourImage';
import TourCard from '@/components/TourCard';
import Icon from '@/components/Icon';
import { Reveal } from '@/components/Reveal';
import { TourDetailHero } from '@/components/heroes';
import { getAllTours, getTour, tourRegion, tourDurationDays } from '@/data/tours';

/** Normalize the (slightly inconsistent) itinerary shapes in the data file. */
function normalizeItinerary(tour) {
  return (tour.detailedItinerary || []).map((item, i) => ({
    num: typeof item.day === 'number' ? item.day : i + 1,
    title: item.title || item.day || `Day ${i + 1}`,
    subtitle: item.subtitle || '',
    body: item.detail || item.posttitle || '',
    overnight: item.overnight || '',
  }));
}

/** Description is stored as an array of paragraphs (sometimes a single string). */
function descriptionParagraphs(tour) {
  if (Array.isArray(tour.description)) return tour.description.filter(Boolean);
  return tour.description ? [tour.description] : [];
}

export default function TourDetailPage({ tour }) {
  const [activeImage, setActiveImage] = useState(0);
  const [openDay, setOpenDay] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  if (!tour) return null;

  const gallery = (tour.heroimage && tour.heroimage.length ? tour.heroimage : [tour.imagePath]).filter(Boolean);
  const itinerary = normalizeItinerary(tour);
  const paragraphs = descriptionParagraphs(tour);
  const days = tourDurationDays(tour);
  const related = getAllTours()
    .filter((t) => t.id !== tour.id)
    .slice(0, 3);

  const meta = [
    { icon: 'calendar', label: 'Duration', value: tour.duration },
    { icon: 'users', label: 'Group size', value: tour.groupsize },
    { icon: 'shield', label: 'Accommodation', value: tour.accommodation },
    { icon: 'globe', label: 'Transport', value: tour.transportation },
  ].filter((m) => m.value);

  return (
    <>
      <Seo title={tour.title} description={tour.shortDescription} path={`/tours/${tour.id}`} image={tour.imagePath || undefined} />

      {/* Modular Tour Detail Hero Component (Style 7: Asymmetric Split Deck) */}
      <TourDetailHero
        tour={tour}
        gallery={gallery}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
        setLightbox={setLightbox}
        regionName={tourRegion(tour)}
      />


      {/* ---------------- Floating meta card ------------------------------------------ */}
      <section className="bg-sand-50">
        <div className="container-x -mt-6 mb-10">
          <motion.div
            className="paper-card grid grid-cols-2 gap-x-6 gap-y-5 p-6 sm:grid-cols-4 sm:p-8 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {meta.map((m) => (
              <div key={m.label} className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-clay-500 to-clay-600 text-sand-50 shadow-md">
                  <Icon name={m.icon} size={18} />
                </span>
                <span>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-ink/40">{m.label}</span>
                  <span className="mt-0.5 block text-sm font-semibold text-ink">{m.value}</span>
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- Overview ---------------- */}
      {(tour.accommodation || paragraphs.length > 0) && (
        <section className="section">
          <div className="container-x grid gap-12 lg:grid-cols-[1.6fr_1fr]">
            <Reveal>
              <p className="eyebrow">The journey</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Tour <em className="text-clay-600">Overview</em>
              </h2>
              <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-ink/70 sm:text-base">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <aside className="paper-card sticky top-28 p-7">
                <h3 className="font-serif text-xl font-semibold text-ink">Trip facts</h3>
                <dl className="mt-5 space-y-4 text-sm">
                  {[
                    ['Duration', tour.duration],
                    ['Group size', tour.groupsize],
                    ['Accommodation', tour.accommodation],
                    ['Transportation', tour.transportation],
                    ['Region', tourRegion(tour)],
                  ]
                    .filter(([, v]) => v)
                    .map(([k, v]) => (
                      <div key={k} className="flex items-start justify-between gap-4 border-b border-sand-200 pb-3 last:border-0">
                        <dt className="font-medium text-ink/50">{k}</dt>
                        <dd className="text-right font-semibold text-ink">{v}</dd>
                      </div>
                    ))}
                </dl>
                <Link href={`/contact?tour=${tour.id}`} className="btn btn-primary mt-7 w-full px-6 py-3.5">
                  Customize this trip
                  <Icon name="arrow-right" size={15} />
                </Link>
              </aside>
            </Reveal>
          </div>
        </section>
      )}

      {/* ---------------- Itinerary ---------------- */}
      {itinerary.length > 0 && (
        <section id="itinerary" className="scroll-mt-24 bg-sand-200/60 py-16 sm:py-24">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">Day by day</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Detailed <em className="text-clay-600">Itinerary</em>
              </h2>
              <p className="mt-3 text-ink/60">
                {days > 0 ? `${days} days of discovery` : 'The full route'}. Tap a day to expand it.
              </p>
            </Reveal>

            <div className="mt-10 space-y-3">
              {itinerary.map((d, i) => {
                const isOpen = openDay === i;
                return (
                  <Reveal key={`${d.num}-${d.title}`} delay={Math.min(i * 0.05, 0.3)}>
                    <div
                      className={`overflow-hidden rounded-2xl border transition-colors ${
                        isOpen ? 'border-clay-300 bg-white shadow-card' : 'border-sand-300/70 bg-white/70 hover:bg-white'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenDay(isOpen ? -1 : i)}
                        aria-expanded={isOpen}
                        aria-controls={`day-panel-${i}`}
                        className="flex w-full items-center gap-4 px-5 py-4 text-left sm:gap-6 sm:px-7 sm:py-5"
                      >
                        <span
                          className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl font-serif text-sm font-bold transition-colors ${
                            isOpen ? 'bg-clay-500 text-sand-50' : 'bg-sand-200 text-clay-600'
                          }`}
                        >
                          {d.num}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className={`block truncate font-serif text-base font-semibold sm:text-lg ${isOpen ? 'text-clay-600' : 'text-ink'}`}>
                            {d.title}
                          </span>
                          {d.subtitle && (
                            <span className="mt-0.5 block truncate text-xs font-medium uppercase tracking-wider text-ink/40">
                              {d.subtitle}
                            </span>
                          )}
                        </span>
                        <span
                          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                            isOpen ? 'rotate-180 bg-clay-500 text-white' : 'bg-sand-200 text-ink/60'
                          }`}
                          aria-hidden="true"
                        >
                          <Icon name="chevron-down" size={15} />
                        </span>
                      </button>

                      {isOpen && (
                        <motion.div
                          id={`day-panel-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-6 sm:px-7 sm:pl-[6.25rem]">
                            {d.body && (
                              <p className="whitespace-pre-line text-[15px] leading-relaxed text-ink/70">{d.body}</p>
                            )}
                            {d.overnight && (
                              <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-forest-600/10 px-4 py-2 text-xs font-semibold text-forest-600">
                                <Icon name="map-pin" size={13} />
                                Overnight: {d.overnight}
                              </p>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ---------------- Included / Not included ---------------- */}
      {(tour.included?.length > 0 || tour.notincluded?.length > 0) && (
        <section className="section">
          <div className="container-x">
            <Reveal>
              <p className="eyebrow">The details</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                What&apos;s <em className="text-clay-600">Included</em>
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <Reveal className="h-full">
                <div className="h-full rounded-3xl bg-white p-7 shadow-card sm:p-8">
                  <h3 className="flex items-center gap-2.5 font-serif text-lg font-semibold text-forest-600">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-forest-600/10">
                      <Icon name="check" size={14} />
                    </span>
                    Included in every booking
                  </h3>
                  <ul className="mt-5 space-y-3 text-sm text-ink/70">
                    {(tour.included || []).map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Icon name="check" size={15} className="mt-0.5 shrink-0 text-forest-600" />
                        <span>{item.replace(/;$/, '')}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="h-full">
                <div className="h-full rounded-3xl bg-white p-7 shadow-card sm:p-8">
                  <h3 className="flex items-center gap-2.5 font-serif text-lg font-semibold text-clay-600">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-clay-500/10">
                      <Icon name="x" size={13} />
                    </span>
                    Not included
                  </h3>
                  <ul className="mt-5 space-y-3 text-sm text-ink/70">
                    {(tour.notincluded || []).map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Icon name="x" size={13} className="mt-0.5 shrink-0 text-clay-500" />
                        <span>{item.replace(/;$/, '')}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* ---------------- Final CTA ---------------- */}
      <section className="pb-20">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-forest-900 px-7 py-12 text-center shadow-glass sm:px-12 sm:py-16">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 20% 20%, #c4552d55, transparent 50%), radial-gradient(circle at 80% 80%, #d9a44144, transparent 50%)',
                }}
              />
              <h2 className="relative font-serif text-3xl font-semibold text-sand-50 sm:text-4xl">
                Ready to walk this route with us?
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-sand-100/75">
                Tell us your dates and travel style, and we&apos;ll tailor this itinerary around
                you, from airport pickup to farewell dinner.
              </p>
              <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link href={`/contact?tour=${tour.id}`} className="btn btn-primary px-8 py-4">
                  Request this tour
                  <Icon name="arrow-right" size={15} />
                </Link>
                <Link href="/tours" className="btn btn-glass px-8 py-4">
                  Browse more tours
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Related tours ---------------- */}
      {related.length > 0 && (
        <section className="pb-24">
          <div className="container-x">
            <Reveal className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Keep exploring</p>
                <h2 className="mt-4 font-serif text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  You may also <em className="text-clay-600">like</em>
                </h2>
              </div>
              <Link href="/tours" className="btn btn-outline px-6 py-3">
                View all tours
                <Icon name="arrow-right" size={14} />
              </Link>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((t) => (
                <Reveal key={t.id} className="h-full">
                  <TourCard tour={t} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------------- Lightbox ---------------- */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${tour.title} photo gallery`}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(false)}
        >
          <button
            type="button"
            onClick={() => setLightbox(false)}
            aria-label="Close gallery"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-sand-50 transition hover:bg-white/20"
          >
            <Icon name="x" size={18} />
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => { e.stopPropagation(); setActiveImage((activeImage - 1 + gallery.length) % gallery.length); }}
            className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-sand-50 transition hover:bg-white/20 sm:left-6"
          >
            <Icon name="chevron-left" size={18} />
          </button>

          <div className="relative aspect-[16/10] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <TourImage
              key={gallery[activeImage]}
              src={gallery[activeImage]}
              title={tour.title}
              alt={`${tour.title} photo ${activeImage + 1}`}
              fill
              priority
              quality={85}
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="rounded-2xl object-cover"
            />
          </div>

          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => { e.stopPropagation(); setActiveImage((activeImage + 1) % gallery.length); }}
            className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-sand-50 transition hover:bg-white/20 sm:right-6"
          >
            <Icon name="chevron-right" size={18} />
          </button>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-sand-50">
            {activeImage + 1} / {gallery.length}
          </p>
        </div>
      )}
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: getAllTours().map((t) => ({ params: { id: t.id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const tour = getTour(params.id);
  if (!tour) return { notFound: true };
  return { props: { tour } };
}
