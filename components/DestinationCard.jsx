import Link from 'next/link';
import Tilt from '@/components/Tilt';
import SmartImage from '@/components/SmartImage';
import Icon from '@/components/Icon';

/**
 * <DestinationCard />, large image tile for destination exploration.
 * Clicking the card navigates directly to the dedicated destination detail page (/destinations/[slug]).
 */
export default function DestinationCard({ destination, className = '' }) {
  if (!destination) return null;

  return (
    <Tilt max={5} className={`h-full w-full ${className}`}>
      <Link
        href={`/destinations/${destination.slug}`}
        className="group relative block h-full min-h-[260px] w-full cursor-pointer overflow-hidden rounded-3xl shadow-card transition-all duration-300 hover:shadow-card-hover"
        aria-label={`Explore images and details for ${destination.name}`}
      >
        <SmartImage
          imageKey={destination.imageKey}
          alt={`${destination.name}, ${destination.region}, ${destination.activity}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
        />

        {/* Scrim gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />

        {/* Activity chip */}
        <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-sand-50 backdrop-blur-md">
          <Icon name="sparkles" size={12} className="text-gold-300" />
          {destination.activity}
        </span>

        {/* Name + Teaser + Action Badges */}
        <div className="absolute inset-x-0 bottom-0 p-5 text-sand-50">
          <span className="text-[10px] font-bold uppercase tracking-wider text-gold-300">
            📍 {destination.region}
          </span>
          <h3 className="font-serif text-xl font-semibold text-sand-50 drop-shadow transition-colors group-hover:text-gold-300 sm:text-2xl">
            {destination.name}
          </h3>
          <p className="mt-1 line-clamp-2 max-w-[34ch] text-[13px] leading-snug text-sand-100/80">
            {destination.teaser}
          </p>

          <div className="mt-3 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-gold-300 group-hover:underline">
              <span>View Destination Page</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <Icon name="arrow-right" size={15} />
              </span>
            </span>

            {destination.images && destination.images.length > 0 && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-sand-200/90 bg-white/10 px-2.5 py-1 rounded-full backdrop-blur-sm">
                📸 {destination.images.length} photos
              </span>
            )}
          </div>
        </div>
      </Link>
    </Tilt>
  );
}