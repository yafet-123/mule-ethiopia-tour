import Link from 'next/link';
import SmartImage from '@/components/SmartImage';
import Icon from '@/components/Icon';
import { Reveal } from '@/components/Reveal';
import { SITE } from '@/lib/config';

/**
 * Short About-Us teaser with photo + "Read more" link.
 */
export default function AboutTeaser() {
  return (
    <section className="bg-sand-200/50 py-10 sm:py-16" aria-labelledby="about-teaser-heading">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* copy */}
        <div>
          <Reveal>
            <p className="eyebrow">Who we are</p>
            <h2
              id="about-teaser-heading"
              className="mt-4 font-serif text-3xl font-semibold leading-[1.14] tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]"
            >
              Born in Lalibela. <br />
              Raised on <em className="text-clay-600">every trail in Ethiopia.</em>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg">
              Mule Ethiopia Tour began in 2009 with one guide, two mules and a
              borrowed Land Cruiser. Today our team of 40+ local guides, drivers
              and planners designs private journeys across the country, from the salt caravans of the Danakil to the wolf meadows of Bale.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                'Licensed & police-registered guides',
                'Member: Ethiopian Tourism Board',
                'Small groups, private trips',
                'Carbon-offset on every trek',
              ].map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm font-medium text-ink/80">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-forest-600 text-white">
                    <Icon name="check" size={12} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.18} className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/about" className="btn btn-primary px-6 py-3.5 text-sm sm:text-base">
              Read more about us
              <Icon name="arrow-right" size={15} />
            </Link>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-forest-700 hover:text-clay-600 transition">
              or just say hello →
            </a>
          </Reveal>
        </div>

        {/* photo */}
        <Reveal delay={0.05} className="relative mt-4 lg:mt-0 pb-6 sm:pb-0">
          <div className="relative mx-auto max-w-[520px]">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-card-hover">
              <SmartImage
                imageKey="aboutPhoto"
                alt="The Mule Ethiopia Tour team"
                fill
                sizes="(max-width: 1024px) 90vw, 44vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-3 sm:-bottom-6 sm:-left-6 rotate-[-2deg] rounded-2xl sm:rounded-3xl bg-forest-700 px-4 py-3 sm:px-5 sm:py-4 text-sand-50 shadow-glass">
              <p className="font-serif text-xl sm:text-2xl font-semibold text-gold-400">2009</p>
              <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-sand-100/80">
                First trip, second mule
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}