import { useMemo, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from '@/components/Icon';
import { Reveal } from '@/components/Reveal';
import { DESTINATIONS } from '@/data/destinations';
import { ETHIOPIA_REGIONS, ETHIOPIA_VIEWBOX, projectLatLon } from '@/data/ethiopia-map';

/**
 * "Where we travel", interactive Ethiopia map.
 * Real region boundaries + destination pins at true coordinates.
 * Tap a pin (or a name in the legend) and the map smoothly zooms to that
 * place; tap the background or "Show all" to zoom back out.
 * Replaces the old three.js globe — lighter and always available (pure SVG).
 */

const ZOOM = 2.6; // zoom level when a place is selected
const HUB = 'addis-ababa';

const PINS = DESTINATIONS.map((d) => {
  const [px, py] = projectLatLon(d.coords[0], d.coords[1]);
  return { ...d, px, py, isHub: d.slug === HUB };
});

const HUB_PIN = PINS.find((d) => d.isHub);
const [VX, VY, VW, VH] = ETHIOPIA_VIEWBOX;

/* Dashed gold arc from the Addis hub to a destination. */
function arcPath(dest) {
  const mx = (HUB_PIN.px + dest.px) / 2;
  const my = (HUB_PIN.py + dest.py) / 2;
  const dx = dest.px - HUB_PIN.px;
  const dy = dest.py - HUB_PIN.py;
  return `M${HUB_PIN.px.toFixed(2)} ${HUB_PIN.py.toFixed(2)} Q${(mx - dy * 0.18).toFixed(2)} ${(
    my +
    dx * 0.18
  ).toFixed(2)} ${dest.px.toFixed(2)} ${dest.py.toFixed(2)}`;
}

export default function WhereWeTravel() {
  const [selected, setSelected] = useState(null); // destination slug | null
  const [hovered, setHovered] = useState(null);

  const selectedDest = PINS.find((d) => d.slug === selected) || null;

  // CSS transform on the whole map <g>: scale + translate so the selected
  // pin lands at the centre of the viewBox. Pure CSS transition = smooth.
  const mapTransform = useMemo(() => {
    if (!selectedDest) return 'none';
    const tx = VW / 2 - ZOOM * selectedDest.px;
    const ty = VH / 2 - ZOOM * selectedDest.py;
    return `translate(${tx.toFixed(3)}px, ${ty.toFixed(3)}px) scale(${ZOOM})`;
  }, [selectedDest]);

  const pick = (slug) => setSelected((cur) => (cur === slug ? null : slug));

  return (
    <section className="py-16 sm:py-24" aria-labelledby="routes-heading">
      <div className="container-x">
        <div className="text-center">
          <p className="eyebrow !justify-center">
            <span className="sr-only">Section:</span> Where we travel
          </p>
          <h2
            id="routes-heading"
            className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]"
          >
            Eight directions from <em className="text-clay-600">Addis Ababa</em>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink/60">
            Real regions, real coordinates. Tap a pin on the map — or a name beside
            it — and the map zooms straight to that place.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          {/* ---- interactive map card ---- */}
          <Reveal>
            <div>
              <div
              className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-forest-900 shadow-[0_40px_90px_-30px_rgba(10,33,28,0.65)]"
              style={{ aspectRatio: `${VW} / ${VH}` }}
              onClick={() => setSelected(null)} // tap background → zoom back out
            >
              {/* soft top glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,rgba(44,110,94,0.4),transparent_62%)]"
              />

              <svg
                viewBox={`${VX} ${VY} ${VW} ${VH}`}
                className="relative block h-full w-full"
                role="img"
                aria-label="Map of Ethiopia showing the places Mule Ethiopia Tour travels to"
              >
                <g
                  className="transition-transform duration-700 ease-spring"
                  style={{ transform: mapTransform, transformOrigin: '0px 0px' }}
                >
                  {/* region shapes */}
                  {ETHIOPIA_REGIONS.map((r) => (
                    <path
                      key={r.name}
                      d={r.d}
                      className="cursor-default transition-colors duration-300 [fill:#1B4E3E] hover:[fill:#26624C]"
                      stroke="#2C6E5E"
                      strokeWidth={0.035}
                    />
                  ))}

                  {/* dashed routes from the Addis hub */}
                  {PINS.filter((d) => !d.isHub).map((d) => (
                    <path
                      key={`arc-${d.slug}`}
                      d={arcPath(d)}
                      fill="none"
                      stroke="#E3B65B"
                      strokeWidth={0.045}
                      strokeDasharray="0.3 0.24"
                      strokeLinecap="round"
                      opacity={0.45}
                    />
                  ))}

                  {/* destination pins */}
                  {PINS.map((d) => {
                    const active = selected === d.slug;
                    const showLabel = active || hovered === d.slug;
                    return (
                      <g
                        key={d.slug}
                        role="button"
                        tabIndex={0}
                        aria-label={`Zoom the map to ${d.name}`}
                        className="cursor-pointer outline-none"
                        onClick={(e) => {
                          e.stopPropagation();
                          pick(d.slug);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            e.stopPropagation();
                            pick(d.slug);
                          }
                        }}
                        onMouseEnter={() => setHovered(d.slug)}
                        onMouseLeave={() => setHovered(null)}
                      >
                        {/* generous hit target */}
                        <circle cx={d.px} cy={d.py} r={0.8} fill="transparent" />
                        {/* pulse ring */}
                        <circle
                          cx={d.px}
                          cy={d.py}
                          r={0.3}
                          fill={d.isHub ? '#E3B65B' : '#D97A4A'}
                          opacity={0.4}
                          className="animate-ping-soft"
                          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                        />
                        {/* dot */}
                        <circle
                          cx={d.px}
                          cy={d.py}
                          r={active ? 0.33 : d.isHub ? 0.29 : 0.23}
                          fill={active || d.isHub ? '#E3B65B' : '#D97A4A'}
                          stroke="#FBF8F1"
                          strokeWidth={0.06}
                          className="transition-all duration-300"
                        />
                        {/* label */}
                        <text
                          x={d.px + 0.42}
                          y={d.py + 0.14}
                          fontSize={0.42}
                          fontWeight={600}
                          fill="#FBF8F1"
                          stroke="#0A211C"
                          strokeWidth={0.16}
                          paintOrder="stroke"
                          style={{
                            opacity: showLabel ? 1 : 0,
                            transition: 'opacity 0.3s',
                            pointerEvents: 'none',
                          }}
                        >
                          {d.name}
                        </text>
                      </g>
                    );
                  })}
                </g>
              </svg>

              {/* zoom-out control */}
              <AnimatePresence>
                {selectedDest && (
                  <motion.button
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelected(null);
                    }}
                    className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider text-sand-50 ring-1 ring-white/25 backdrop-blur-md transition hover:bg-white/25"
                  >
                    Show all <Icon name="x" size={13} />
                  </motion.button>
                )}
              </AnimatePresence>

              {/* selected place card */}
              <AnimatePresence>
                {selectedDest && (
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 18 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-x-4 bottom-4 flex items-start gap-3 rounded-2xl bg-forest-900/90 p-4 ring-1 ring-white/15 backdrop-blur-md sm:items-center sm:gap-4 sm:p-5"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gold-500/15 text-gold-400 ring-1 ring-gold-500/30">
                      <Icon name="map-pin" size={20} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="flex flex-wrap items-center gap-2 font-serif text-base font-semibold text-sand-50 sm:text-lg">
                        {selectedDest.name}
                        <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-300">
                          {selectedDest.activity}
                        </span>
                      </p>
                      <p className="mt-1 line-clamp-2 text-[12.5px] leading-snug text-sand-100/70">
                        {selectedDest.teaser}
                      </p>
                    </div>
                    <Link
                      href={`/tours?destination=${selectedDest.slug}`}
                      className="btn btn-primary shrink-0 !px-4 !py-2 text-xs uppercase tracking-wider"
                    >
                      Tours
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <p className="mt-4 flex items-center justify-center gap-1.5 text-[12px] font-medium uppercase tracking-wider text-ink/40">
              <Icon name="globe" size={13} /> Tap a pin — the map zooms to that place
            </p>
            </div>
          </Reveal>

          {/* ---- legend / quick picks ---- */}
          <div>
            <ul className="space-y-2.5">
              {PINS.map((d, i) => {
                const active = selected === d.slug;
                return (
                  <li key={d.slug}>
                    <Reveal delay={i * 0.05}>
                      <button
                        type="button"
                        onClick={() => pick(d.slug)}
                        onMouseEnter={() => setHovered(d.slug)}
                        onMouseLeave={() => setHovered(null)}
                        aria-pressed={active}
                        className={`flex w-full items-center gap-4 rounded-2xl px-5 py-3.5 text-left ring-1 transition-all duration-300 ${
                          active
                            ? 'bg-clay-500 text-white shadow-card-hover ring-clay-500'
                            : 'bg-white text-ink shadow-card ring-sand-200 hover:-translate-y-0.5 hover:ring-clay-300'
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className="relative h-3 w-3 shrink-0 rounded-full"
                          style={{ background: d.isHub ? '#E3B65B' : '#D97A4A' }}
                        >
                          <span
                            className="absolute inset-0 animate-ping-soft rounded-full"
                            style={{ background: d.isHub ? '#E3B65B' : '#D97A4A' }}
                          />
                        </span>
                        <span className="font-medium">{d.name}</span>
                        {d.isHub ? (
                          <span
                            className={`ml-auto rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                              active ? 'bg-white/20 text-white' : 'bg-gold-500/15 text-gold-600'
                            }`}
                          >
                            Hub
                          </span>
                        ) : (
                          <span className="ml-auto hidden text-[12px] text-ink/45 sm:block">
                            {d.activity}
                          </span>
                        )}
                        <Icon
                          name={active ? 'x' : 'arrow-up-right'}
                          size={15}
                          className={active ? 'text-white' : 'text-clay-500'}
                        />
                      </button>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
            <p className="mt-5 text-[12px] leading-relaxed text-ink/45">
              A schematic map — every pin sits at its real coordinates and opens the
              matching tours when selected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

