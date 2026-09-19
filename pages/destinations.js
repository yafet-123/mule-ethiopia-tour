import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Seo from '@/components/Seo';
import DestinationsHero from '@/components/heroes/DestinationsHero';
import DestinationCard from '@/components/DestinationCard';
import Icon from '@/components/Icon';
import { Reveal } from '@/components/Reveal';
import { DESTINATIONS } from '@/data/destinations';

/**
 * Destinations page with 3D region explorer hero & direct navigation to dedicated destination pages.
 */
export default function DestinationsPage() {
  const [activeRegionFilter, setActiveRegionFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique regions
  const regions = ['All', ...Array.from(new Set(DESTINATIONS.map((d) => d.region)))];

  // Handle Search Input Change (resets region filter to 'All' when typing search)
  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (val.trim() !== '' && activeRegionFilter !== 'All') {
      setActiveRegionFilter('All');
    }
  };

  // Filter destinations
  const filteredDestinations = DESTINATIONS.filter((d) => {
    const matchesRegion = activeRegionFilter === 'All' || d.region === activeRegionFilter;
    const q = searchQuery.trim().toLowerCase();

    if (!q) {
      return matchesRegion;
    }

    const textToSearch = [
      d.name,
      d.tagline,
      d.teaser,
      d.description,
      d.region,
      d.activity,
      ...(d.highlights || []),
      ...(d.keyDetails ? Object.values(d.keyDetails) : []),
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();

    return textToSearch.includes(q);
  });

  return (
    <>
      <Seo
        title="Destinations & Regional Guide — Mule Ethiopia Tour"
        description="Explore Ethiopia's 9 top regions: Lalibela rock churches, Danakil Depression lava, Simien Mountains peaks, Omo Valley tribes, Gondar castles, Bale wolves, and Harar walled city."
        path="/destinations"
      />

      {/* Hero Section */}
      <DestinationsHero />

      {/* Interactive Destinations Grid Section */}
      <section className="bg-sand-100/40 py-16 sm:py-24">
        <div className="container-x">

          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-sand-300 pb-8">
              <div>
                <span className="eyebrow">Regional Explorer</span>
                <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  Explore <em className="text-clay-600 not-italic font-normal italic">Ethiopia’s Wonders</em>
                </h2>
                <p className="mt-2 text-sm sm:text-base text-ink/70 max-w-2xl">
                  Click any destination card below to open its dedicated page featuring high-resolution photo galleries, historical descriptions, climate specs, and available tours.
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-80">
                <input
                  type="text"
                  placeholder="Search destinations, regions, highlights..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full rounded-2xl border border-sand-300 bg-white py-3.5 pl-10 pr-10 text-xs font-semibold text-ink placeholder:text-ink/40 shadow-sm focus:border-clay-500 focus:outline-none focus:ring-2 focus:ring-clay-500/20 transition-all"
                />
                <Icon name="search" size={16} className="absolute left-3.5 top-4 text-ink/40" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-3.5 grid h-5 w-5 place-items-center rounded-full bg-sand-200 text-ink/60 hover:bg-clay-500 hover:text-sand-50 transition"
                    aria-label="Clear search query"
                  >
                    <Icon name="x" size={12} />
                  </button>
                )}
              </div>
            </div>
          </Reveal>

          {/* Filter Chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => {
                  setActiveRegionFilter(region);
                  if (searchQuery) setSearchQuery('');
                }}
                className={`rounded-2xl px-4 py-2 text-xs font-bold transition-all ${
                  activeRegionFilter === region
                    ? 'bg-forest-600 text-sand-50 shadow-md scale-105'
                    : 'bg-white text-ink/70 hover:bg-sand-200 ring-1 ring-sand-300'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          {/* Grid of Destination Cards */}
          <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredDestinations.map((d) => (
                <motion.div
                  key={d.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                >
                  <DestinationCard destination={d} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredDestinations.length === 0 && (
            <div className="mt-12 rounded-3xl bg-white p-12 text-center shadow-card">
              <Icon name="map-pin" size={32} className="mx-auto text-clay-400 mb-3" />
              <h3 className="font-serif text-xl font-bold text-ink">No destinations match &quot;{searchQuery}&quot;</h3>
              <p className="mt-1 text-xs text-ink/60">Try searching for another place like &quot;Lalibela&quot;, &quot;Danakil&quot;, &quot;Omo&quot;, or &quot;Simien&quot;.</p>
              <button
                onClick={() => {
                  setActiveRegionFilter('All');
                  setSearchQuery('');
                }}
                className="mt-4 rounded-xl bg-clay-500 px-5 py-2 text-xs font-bold text-sand-50 hover:bg-clay-600 transition"
              >
                Reset Search & Filters
              </button>
            </div>
          )}

        </div>
      </section>
    </>
  );
}