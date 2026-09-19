import Link from 'next/link';

/**
 * Mule Ethiopia Tour, brand mark.
 * Mountain glyph (three peaks over a valley sun) inside a rounded tile.
 */

export default function Logo({ href = '/', tone = 'dark', stacked = false }) {
  // tone: 'dark' (ink text, for light bg) | 'light' (white text, for hero)
  const isLight = tone === 'light';

  return (
    <Link
      href={href}
      aria-label="Mule Ethiopia Tour, home"
      className="group inline-flex shrink-0 items-center gap-2.5"
    >
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-2xl bg-gradient-to-b from-forest-500 to-forest-800 shadow-[0_6px_16px_-6px_rgba(20,56,47,0.55)] ring-1 ring-white/20 transition-transform duration-300 group-hover:-rotate-6">
        <svg viewBox="0 0 40 40" className="h-7 w-7" aria-hidden="true">
          <circle cx="20" cy="14" r="5" fill="#E3B65B" opacity="0.9" />
          <path
            d="M4 32 L14 16 L19 23 L24 15 L36 32 Z"
            fill="none"
            stroke="#F7F1E5"
            strokeWidth="2.6"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path d="M14 32 L19 26 L24 32 Z" fill="#C4552D" />
        </svg>
      </span>
      {stacked ? (
        <span className="flex flex-col leading-none">
          <span
            className={`font-serif text-lg font-semibold tracking-tight ${
              isLight ? 'text-sand-50' : 'text-ink'
            }`}
          >
            Mule Ethiopia
          </span>
          <span
            className={`mt-1 text-[10px] font-bold uppercase tracking-[0.32em] ${
              isLight ? 'text-gold-300' : 'text-clay-600'
            }`}
          >
            Tours
          </span>
        </span>
      ) : (
        <span className="flex flex-col leading-none">
          <span
            className={`font-serif text-xl font-semibold tracking-tight ${
              isLight ? 'text-sand-50' : 'text-ink'
            }`}
          >
            Mule Ethiopia
          </span>
          <span
            className={`mt-0.5 text-[9px] font-bold uppercase tracking-[0.34em] ${
              isLight ? 'text-gold-300' : 'text-clay-600'
            }`}
          >
            Tours
          </span>
        </span>
      )}
    </Link>
  );
}