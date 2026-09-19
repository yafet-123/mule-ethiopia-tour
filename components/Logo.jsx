import Link from 'next/link';
import Image from 'next/image';

/**
 * Mule Ethiopia Tour brand mark using transparent official logo.png.
 */
export default function Logo({ href = '/', tone = 'dark', stacked = false }) {
  const isLight = tone === 'light';

  return (
    <Link
      href={href}
      aria-label="Mule Ethiopia Tour, home"
      className="group inline-flex shrink-0 items-center gap-3"
    >
      <span className="relative h-10 w-14 sm:h-12 sm:w-16 shrink-0 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/logo-transparent.png"
          alt="Mule Ethiopia Tour"
          fill
          sizes="64px"
          priority
          className="object-contain"
        />
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