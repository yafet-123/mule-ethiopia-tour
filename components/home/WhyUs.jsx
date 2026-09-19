import Link from 'next/link';
import SmartImage from '@/components/SmartImage';
import Icon from '@/components/Icon';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const PROPS = [
  { icon: 'users', title: 'Local Ethiopian Guides', copy: 'Licensed guides born and raised where you travel, not freelancers flown in.' },
  { icon: 'culture', title: 'Deep Cultural Knowledge', copy: 'Priests, elders and coffee ceremonies your itinerary simply can’t get elsewhere.' },
  { icon: 'price', title: 'Fair Prices, No Middlemen', copy: 'You book the operator, not an agency behind an agency. Full transparency in writing.' },
  { icon: 'sparkles', title: 'Custom-Made Itineraries', copy: 'Tell us your pace, budget and dreams, we design the itinerary around them.' },
  { icon: 'headset', title: '24/7 Local Support', copy: 'A real Addis-based team on call before, during and long after your trip.' },
  { icon: 'leaf', title: 'Sustainability & Community', copy: 'We hire village scouts, buy from local lodges and protect every trail we walk.' },
];

/**
 * "Why Travel With Us", 6 value props with a supporting photo composition.
 */
export default function WhyUs() {
  return (
    <section className="bg-sand-200/50 py-10 sm:py-16" aria-labelledby="why-us-heading">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
        {/* ---- Photo composition ---- */}
        <div className="relative order-2 lg:order-1">
          <div className="relative mx-auto max-w-[560px]">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-card-hover">
                <SmartImage
                  imageKey="whyPhoto"
                  alt="Trekker overlooking the Simien Mountains escarpment"
                  fill
                  sizes="(max-width: 1024px) 90vw, 44vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/25 to-transparent" />
              </div>
            </Reveal>

            {/* floating badge, reviews */}
            <Reveal delay={0.25} className="absolute -bottom-8 left-2 sm:-left-8">
              <div className="rounded-3xl bg-white p-4 shadow-card-hover ring-1 ring-sand-200">
                <div className="flex items-center gap-2">
                  <span className="flex -space-x-2.5">
                    {['SR', 'ME', 'JT'].map((ini, i) => (
                      <span
                        key={ini}
                        className={`grid h-8 w-8 place-items-center rounded-full text-[10px] font-bold text-white ring-2 ring-white ${['bg-clay-500', 'bg-forest-600', 'bg-gold-600'][i]
                          }`}
                      >
                        {ini}
                      </span>
                    ))}
                  </span>
                  <div>
                    <p className="flex items-center gap-1 text-sm font-bold text-ink">
                      4.9 <span className="text-gold-500"><Icon name="star" size={12} /></span>
                    </p>
                    <p className="text-[11px] text-ink/55">1,200+ happy travellers</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ---- Copy ---- */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow">Why travel with us</p>
            <h2
              id="why-us-heading"
              className="mt-4 font-serif text-3xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]"
            >
              Not a tour company.
              <br />
              A family of <em className="text-clay-600">Ethiopian guides.</em>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg">
              Mule Ethiopia Tour exists because a young mule-guide from Lalibela
              refused to accept that travellers had to choose between his country’s
              magic and a safe, fair, well-organised trip. Nothing has changed
            </p>
          </Reveal>

          <Stagger className="mt-9 grid gap-5 sm:grid-cols-2" stagger={0.08}>
            {PROPS.map((p) => (
              <StaggerItem key={p.title}>
                <div className="group flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sand-100 text-clay-600 ring-1 ring-sand-300/70 transition-colors duration-300 group-hover:bg-clay-500 group-hover:text-white">
                    <Icon name={p.icon} size={20} />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold leading-snug text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/60">{p.copy}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1} className="mt-8">
            <Link href="/about" className="btn p-5 bg-white btn-outline">
              Read our story
              <Icon name="arrow-right" size={15} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}