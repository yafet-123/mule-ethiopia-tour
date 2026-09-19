import Link from 'next/link';
import TourCard from '@/components/TourCard';
import Icon from '@/components/Icon';
import { Stagger, StaggerItem } from '@/components/Reveal';
import { featuredTours } from '@/data/tours';

/**
 * Popular / Featured Tours grid (6 cards).
 */
export default function PopularTours() {
  const tours = featuredTours(6);

  return (
    <section className="py-10 sm:py-16" aria-labelledby="popular-tours-heading">
      <div className="container-x">
        <Stagger className="flex flex-wrap items-end justify-between gap-4">
          <StaggerItem>
            <p className="eyebrow">Hand-picked journeys</p>
            <h2
              id="popular-tours-heading"
              className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]"
            >
              Popular <em className="text-clay-600">Tours</em>
            </h2>
            <p className="mt-4 max-w-xl text-ink/60">
              Our travellers’ favourites, from one-day coffee tours in Addis to
              sleeping above the Erta Ale lava lake.
            </p>
          </StaggerItem>
          <StaggerItem>
            <Link
              href="/tours"
              className="btn btn-outline"
            >
              View all tours
              <Icon name="arrow-right" size={15} />
            </Link>
          </StaggerItem>
        </Stagger>

        <Stagger
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.1}
        >
          {tours.map((tour) => (
            <StaggerItem key={tour.id} className="h-full">
              <TourCard tour={tour} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}