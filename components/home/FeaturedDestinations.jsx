import Link from 'next/link';
import DestinationCard from '@/components/DestinationCard';
import Icon from '@/components/Icon';
import { Stagger, StaggerItem } from '@/components/Reveal';
import { DESTINATIONS } from '@/data/destinations';

/** 
 * Featured Destinations, large asymmetric image tiles ("bento" grid),
 * each linking to filtered tours.
 */
export default function FeaturedDestinations() {
  const bySlug = (slug) => DESTINATIONS.find((d) => d.slug === slug);

  const lalibela = bySlug('lalibela');
  const danakil = bySlug('danakil-depression');
  const simien = bySlug('simien-mountains');
  const gondar = bySlug('gondar');
  const omo = bySlug('omo-valley');
  const addis = bySlug('addis-ababa');

  return (
    <section
      className="bg-sand-200/50 py-16 sm:py-24"
      aria-labelledby="destinations-heading"
    >
      <div className="container-x">
        <Stagger className="flex flex-wrap items-end justify-between gap-4">
          <StaggerItem>
            <p className="eyebrow">Where to next</p>
            <h2
              id="destinations-heading"
              className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]"
            >
              Featured <em className="text-clay-600">Destinations</em>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <Link
              href="/destinations"
              className="hidden items-center gap-2 text-sm font-semibold text-clay-600 transition hover:text-clay-700 sm:inline-flex"
            >
              All destinations <Icon name="arrow-right" size={15} />
            </Link>
          </StaggerItem>
        </Stagger>

        <Stagger
          className="mt-12 grid auto-rows-[300px] grid-cols-2 gap-4 md:auto-rows-[300px] md:grid-cols-4"
          stagger={0.08}
        >
          {/* Lalibela, hero tile */}
          <StaggerItem className="col-span-2 row-span-2">
            <DestinationCard destination={lalibela} />
          </StaggerItem>

          {/* Danakil, wide */}
          <StaggerItem className="col-span-2 row-span-1">
            <DestinationCard destination={danakil} />
          </StaggerItem>

          {/* Simien, tall */}
          <StaggerItem className="col-span-1 row-span-2">
            <DestinationCard destination={simien} />
          </StaggerItem>

          {/* Omo */}
          <StaggerItem className="col-span-1 row-span-1">
            <DestinationCard destination={omo} />
          </StaggerItem>

          {/* Gondar */}
          <StaggerItem className="col-span-1 row-span-1">
            <DestinationCard destination={gondar} />
          </StaggerItem>

          {/* Addis + CTA tile */}
          <StaggerItem className="col-span-1 row-span-1">
            <DestinationCard destination={addis} />
          </StaggerItem>
          <StaggerItem className="col-span-1 row-span-1">
            <Link
              href="/destinations"
              className="group flex h-full min-h-[200px] w-full flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-clay-400/60 bg-clay-500/5 p-5 text-center transition-colors hover:border-clay-500 hover:bg-clay-500/10"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-clay-500 text-white shadow-btn-primary transition group-hover:-rotate-12">
                <Icon name="arrow-up-right" size={22} />
              </span>
              <span className="font-serif text-lg font-semibold text-ink">
                Where will you go?
              </span>
              <span className="text-[13px] text-ink/55">
                See all 9 regions we explore
              </span>
            </Link>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}