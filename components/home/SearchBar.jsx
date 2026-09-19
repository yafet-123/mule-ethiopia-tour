import { useState } from 'react';
import { useRouter } from 'next/router';
import Icon from '@/components/Icon';
import { DESTINATIONS } from '@/data/destinations';
import { CATEGORIES } from '@/data/categories';

/**
 * <SearchBar />, the overlapping glass "Where to?" widget.
 * Destination + activity + dates + guests → filtered tours listing.
 */
export default function SearchBar() {
  const router = useRouter();
  const [destination, setDestination] = useState('');
  const [activity, setActivity] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('2');

  const submit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.set('destination', destination);
    if (activity) params.set('activity', activity);
    if (date) params.set('date', date);
    if (guests) params.set('guests', guests);
    router.push(`/tours${params.toString() ? `?${params.toString()}` : ''}`);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <form
      onSubmit={submit}
      role="search"
      className="glass-card relative z-30 mx-auto w-full max-w-5xl p-4 sm:p-6 shadow-glass"
      aria-label="Search tours"
    >
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-[1.15fr_1fr_0.95fr_0.7fr_auto] lg:items-end">
        <label className="block">
          <span className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-ink/55">
            <Icon name="map-pin" size={12} className="text-clay-500" /> Where to?
          </span>
          <span className="relative block">
            <select className="field !pr-9 text-sm" value={destination} onChange={(e) => setDestination(e.target.value)}>
              <option value="">Any destination</option>
              {DESTINATIONS.map((d) => (
                <option key={d.slug} value={d.slug}>{d.name}</option>
              ))}
            </select>
            <Icon name="chevron-down" size={15} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink/40" />
          </span>
        </label>

        <label className="block">
          <span className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-ink/55">
            <Icon name="sparkles" size={12} className="text-clay-500" /> Activity
          </span>
          <span className="relative block">
            <select className="field !pr-9 text-sm" value={activity} onChange={(e) => setActivity(e.target.value)}>
              <option value="">Any style</option>
              {CATEGORIES.map((c) => (
                <option key={c.slug} value={c.slug}>{c.label}</option>
              ))}
            </select>
            <Icon name="chevron-down" size={15} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink/40" />
          </span>
        </label>

        <label className="block">
          <span className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-ink/55">
            <Icon name="calendar" size={12} className="text-clay-500" /> Travel dates
          </span>
          <input type="date" min={today} value={date} onChange={(e) => setDate(e.target.value)} className="field text-sm" />
        </label>

        <label className="block">
          <span className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-ink/55">
            <Icon name="users" size={12} className="text-clay-500" /> Guests
          </span>
          <span className="relative block">
            <select className="field !pr-9 text-sm" value={guests} onChange={(e) => setGuests(e.target.value)}>
              {[
                { v: '2', l: '2 guests' },
                { v: '3', l: '3 guests' },
                { v: '4', l: '4 guests' },
                { v: '6', l: 'Up to 6' },
                { v: '10', l: '7 to 10' },
                { v: '12', l: '10+ (group)' },
              ].map((o) => (
                <option key={o.v} value={o.v}>{o.l}</option>
              ))}
            </select>
            <Icon name="chevron-down" size={15} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink/40" />
          </span>
        </label>

        <button type="submit" className="btn btn-primary h-[48px] w-full sm:col-span-2 lg:col-span-1 lg:w-auto !px-6 text-base font-semibold">
          Search
          <Icon name="search" size={16} />
        </button>
      </div>

      <p className="mt-3 flex items-center gap-1.5 text-[12px] text-ink/50">
        <Icon name="shield" size={13} className="shrink-0 text-forest-600" />
        Free quote in 24h · No booking fee · 100% tailor-made by local experts
      </p>
    </form>
  );
}