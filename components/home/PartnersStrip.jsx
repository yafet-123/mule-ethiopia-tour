import { PARTNERS } from '@/data/partners';

/**
 * Partner / association logo strip (marquee of wordmark chips).
 * Static, lightweight, no images, all text-based marks.
 */
export default function PartnersStrip() {
  const items = [...PARTNERS, ...PARTNERS]; // duplicated for seamless loop

  return (
    <section aria-label="Partners and associations" className="border-y border-sand-200 bg-sand-100 py-8">
      <div className="container-x mb-5 flex justify-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/40">
          Trusted & accredited by
        </p>
      </div>

      <div className="relative overflow-hidden" aria-hidden="true">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-sand-100 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-sand-100 to-transparent" />

        <div className="flex w-max animate-marquee items-center gap-5">
          {items.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex items-center gap-3 rounded-2xl bg-white px-6 py-4 shadow-card ring-1 ring-sand-200"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-forest-700 font-serif text-sm font-bold text-gold-400">
                {p.name
                  .split(' ')
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join('')
                  .toUpperCase()}
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink">{p.name}</span>
                <span className="block text-[11px] text-ink/45">{p.note}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}