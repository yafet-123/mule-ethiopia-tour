import Link from 'next/link';
import Icon from '@/components/Icon';
import { Reveal } from '@/components/Reveal';
import { SITE } from '@/lib/config';

/**
 * "Customize Your Tour" call-to-action band.
 */
export default function CustomizeCTA() {
  return (
    <section className="py-6" aria-label="Customize your tour">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-forest-800 px-6 py-14 text-center shadow-[0_30px_70px_-30px_rgba(10,33,28,0.6)] sm:px-12 sm:py-16">
            {/* decorative mountain silhouettes */}
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full text-forest-900/70"
            >
              <path d="M0 120 V70 L140 26 L260 74 L400 18 L560 84 L720 34 L880 90 L1040 46 L1200 78 V120 Z" fill="currentColor" />
            </svg>
            <div aria-hidden="true" className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-clay-500/20 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-gold-500/15 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <p className="eyebrow !justify-center text-gold-300">
                <span className="sr-only">Section:</span> Built around you
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.15] text-sand-50 sm:text-4xl lg:text-[2.75rem]">
                Dream tour? <em className="text-gold-300">Tell us the direction.</em>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sand-100/75">
                Two honeymooners, a photography crew or a family of eight, send us
                your dates and interests and a local trip designer will craft your
                private itinerary within 24 hours. No pressure, no payment required upfront.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="btn btn-primary !px-7 !py-3.5 text-base">
                  Start designing my trip
                  <Icon name="arrow-right" size={16} />
                </Link>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-glass !px-7 !py-3.5 text-base"
                >
                  <Icon name="whatsapp" size={17} />
                  WhatsApp the team
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}