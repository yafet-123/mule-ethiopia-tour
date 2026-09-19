import Link from 'next/link';
import Tilt from '@/components/Tilt';
import TourImage from '@/components/TourImage';
import Icon from '@/components/Icon';
import { tourCategory, tourDurationDays } from '@/data/tours';

/**
 * <TourCard />, summary card for a tour, linking to its detail page.
 * Used on the homepage (Popular Tours) and the /tours listing.
 */
export default function TourCard({ tour, className = '' }) {
  const category = tourCategory(tour);
  const days = tourDurationDays(tour);
  const image = tour.imagePath || (tour.heroimage && tour.heroimage[0]) || null;

  return (
    <Tilt max={4} className={`h-full ${className}`}>
      <Link
        href={`/tours/${tour.id}`}
        className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover"
        aria-label={`View tour: ${tour.title}`}
      >
        {/* image — aspect-ratio instead of a fixed height so it scales
            consistently with the card's own width rather than depending on
            the parent grid stretching every card to the same height.
            shrink-0 stops the flex column from ever compressing it. */}
        <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden">
          <TourImage
            src={image}
            title={tour.title}
            alt={tour.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent"
          />
          {category && (
            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-sand-50 backdrop-blur-md">
              <Icon name="sparkles" size={12} className="text-gold-300" />
              {category.label}
            </span>
          )}
        </div>

        {/* body */}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-ink/55">
            <span className="inline-flex items-center gap-1.5">
              <Icon name="calendar" size={14} className="text-clay-500" />
              {tour.duration}
            </span>
            {days > 0 && (
              <span className="inline-flex items-center gap-1.5">
                <Icon name="clock" size={14} className="text-clay-500" />
                {days} days
              </span>
            )}
            {tour.groupsize && (
              <span className="inline-flex items-center gap-1.5">
                <Icon name="users" size={14} className="text-clay-500" />
                {tour.groupsize}
              </span>
            )}
          </div>

          <h3 className="mt-3 font-serif text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-clay-600 sm:text-xl">
            {tour.title}
          </h3>

          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink/60">
            {tour.shortDescription}
          </p>

          <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[13px] font-semibold text-clay-600">
            View itinerary
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <Icon name="arrow-right" size={15} />
            </span>
          </span>
        </div>
      </Link>
    </Tilt>
  );
}