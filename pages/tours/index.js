import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Seo from '@/components/Seo';
import ToursHero from '@/components/heroes/ToursHero';
import TourCard from '@/components/TourCard';
import Icon from '@/components/Icon';
import { Stagger, StaggerItem } from '@/components/Reveal';
import { getAllTours, toursInDestination, tourCategory, tourKeywords } from '@/data/tours';
import { CATEGORIES } from '@/data/categories';
import { DESTINATIONS } from '@/data/destinations';

/**
 * /tours: full tour listing with search + destination/activity filters.
 * Honors ?destination=<slug> (from DestinationCard) and ?activity=<slug>
 * (from TravelStyles) query params, everything else is client-side.
 */
export default function ToursPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [destination, setDestination] = useState(null);
  const [activity, setActivity] = useState(null);
  const [query, setQuery] = useState('');

  // Apply deep-link filters once the router has parsed the URL.
  useEffect(() => {
    if (!router.isReady) return;
    setDestination(router.query.destination || null);
    setActivity(router.query.activity || null);
    setReady(true);
  }, [router.isReady, router.query.destination, router.query.activity]);

  const tours = useMemo(() => {
    if (!ready) return getAllTours();
    let list = getAllTours();

    if (destination) list = toursInDestination(destination);
    if (activity) list = list.filter((t) => tourCategory(t).slug === activity);

    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter((t) => {
        const kw = tourKeywords(t);
        return kw.includes(q) || kw.split(' ').some((w) => w.includes(q));
      });
    }

    return list;
  }, [ready, destination, activity, query]);

  const activeDestination = destination ? DESTINATIONS.find((d) => d.slug === destination) : null;
  const activeActivity = activity ? CATEGORIES.find((c) => c.slug === activity) : null;
  const hasFilters = Boolean(destination || activity || query);

  return (
    <>
      <Seo
        title="Tours"
        description="Browse all Mule Ethiopia Tour itineraries: Danakil Depression expeditions, Omo Valley tribal journeys, Simien treks, historical circuits and coffee trails."
        path="/tours"
      />

      <ToursHero
        activeActivity={activity}
        onActivitySelect={setActivity}
        tourCount={tours.length}
      />

      {/* Filter bar */}
      <section className="relative z-10 -mt-12">
        <div className="container-x">
          <div className="glass-card grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-[1fr_220px_220px] lg:items-center p-4 sm:p-6 shadow-glass">
            {/* search */}
            <label className="relative block sm:col-span-2 lg:col-span-1">
              <span className="sr-only">Search tours</span>
              <Icon
                name="search"
                size={17}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/40"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by place, tribe or experience (e.g. Danakil, Mursi, coffee…)"
                className="field !pl-11 text-sm"
              />
            </label>

            {/* destination select */}
            <label className="block w-full">
              <span className="sr-only">Filter by destination</span>
              <select
                className="field cursor-pointer text-sm"
                value={destination || ''}
                onChange={(e) => setDestination(e.target.value || null)}
              >
                <option value="">All destinations</option>
                {DESTINATIONS.map((d) => (
                  <option key={d.slug} value={d.slug}>
                    {d.name}
                  </option>
                ))}
              </select>
            </label>

            {/* activity select */}
            <label className="block w-full">
              <span className="sr-only">Filter by travel style</span>
              <select
                className="field cursor-pointer text-sm"
                value={activity || ''}
                onChange={(e) => setActivity(e.target.value || null)}
              >
                <option value="">All travel styles</option>
                {CATEGORIES.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* active filters */}
          {hasFilters && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {activeDestination && (
                <button
                  type="button"
                  onClick={() => setDestination(null)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-forest-600 px-3.5 py-1.5 text-xs font-semibold text-sand-50 transition hover:bg-forest-700"
                >
                  <Icon name="map-pin" size={12} />
                  {activeDestination.name}
                  <Icon name="x" size={11} />
                </button>
              )}
              {activeActivity && (
                <button
                  type="button"
                  onClick={() => setActivity(null)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-clay-500 px-3.5 py-1.5 text-xs font-semibold text-sand-50 transition hover:bg-clay-600"
                >
                  <Icon name="sparkles" size={12} />
                  {activeActivity.label}
                  <Icon name="x" size={11} />
                </button>
              )}
              {query.trim() && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="inline-flex items-center gap-1.5 rounded-full bg-ink/80 px-3.5 py-1.5 text-xs font-semibold text-sand-50 transition hover:bg-ink"
                >
                  “{query.trim()}”
                  <Icon name="x" size={11} />
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  setDestination(null);
                  setActivity(null);
                  setQuery('');
                }}
                className="ml-1 text-xs font-semibold text-ink/50 underline-offset-4 hover:text-clay-600 hover:underline"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Results */}
      <section className="py-14 sm:py-20">
        <div className="container-x">
          <p className="text-sm font-medium text-ink/50" aria-live="polite">
            Showing <span className="font-semibold text-ink">{tours.length}</span>{' '}
            {tours.length === 1 ? 'tour' : 'tours'}
            {activeDestination ? ` in ${activeDestination.name}` : ''}
            {activeActivity ? ` · ${activeActivity.label}` : ''}
          </p>

          {tours.length === 0 ? (
            <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl bg-white p-12 text-center shadow-card">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-sand-200 text-clay-600">
                <Icon name="search" size={24} />
              </span>
              <h2 className="font-serif text-2xl font-semibold text-ink">No tours match your filters</h2>
              <p className="max-w-md text-sm text-ink/55">
                Try a different destination or travel style, or let us design a private
                itinerary from scratch.
              </p>
              <button
                type="button"
                onClick={() => {
                  setDestination(null);
                  setActivity(null);
                  setQuery('');
                }}
                className="btn btn-primary mt-2 px-6 py-3"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
              {tours.map((tour) => (
                <StaggerItem key={tour.id} className="h-full">
                  <TourCard tour={tour} />
                </StaggerItem>
              ))}
            </Stagger>
          )}
        </div>
      </section>
    </>
  );
}
