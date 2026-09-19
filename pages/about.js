import Seo from '@/components/Seo';
import AboutHero from '@/components/heroes/AboutHero';
import SectionHeading from '@/components/SectionHeading';
import SmartImage from '@/components/SmartImage';
import Icon from '@/components/Icon';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';
import FinalCTA from '@/components/home/FinalCTA';
import { STATS } from '@/lib/config';

/**
 * About page — company story, stats, why-choose-us, values and the team.
 */
const WHY_US = [
  {
    icon: 'mountain',
    title: 'Born on these trails',
    body: 'Founded by a Lalibela mule-guide and run by a 40-strong Ethiopian team today. We do not sell Ethiopia to you — we share our home with you.',
  },
  {
    icon: 'price',
    title: 'Honest, direct pricing',
    body: 'You book the operator on the ground, not an overseas middleman. Fair prices for you, fair wages for guides, drivers, cooks and muleteers.',
  },
  {
    icon: 'shield',
    title: 'Licensed & accountable',
    body: 'Registered with the Ethiopian Ministry of Tourism and a member of FTO Ethiopia. Insured vehicles, first-aid trained guides, paperwork in order.',
  },
  {
    icon: 'users',
    title: 'Small groups only',
    body: 'A maximum of 8–12 travellers per departure, private trips any time. You travel like a guest of the community, never like a tour bus.',
  },
  {
    icon: 'headset',
    title: '24/7 on-trip support',
    body: 'One WhatsApp message reaches a real person in Addis, day or night. Flight changes, extra nights, surprises — we handle them while you keep exploring.',
  },
  {
    icon: 'leaf',
    title: 'Travel that gives back',
    body: 'Community fees paid in person, local lodges and restaurants, porters and muleteers hired from the very villages you walk through.',
  },
];

const VALUES = [
  {
    n: '01',
    title: 'Community first',
    body: 'Every route is planned with the communities it crosses. Your visit should fund the village school, the local lodge and the family that hosts you.',
  },
  {
    n: '02',
    title: 'Tread lightly',
    body: 'Pack in, pack out on every trek. Refill stations instead of plastic bottles, and wildlife watched from a respectful distance.',
  },
  {
    n: '03',
    title: 'No hard sells',
    body: 'Itineraries shaped around what you want to see and what the season honestly allows. If a route is not right for you, we say so.',
  },
];

const TEAM_POINTS = [
  'Licensed national guides history, trekking, birding and culture specialists.',
  'Drivers and mechanics trained for Danakil and highland tracks.',
  'Cooks and muleteers hired from the villages along your route.',
  'An Addis Ababa office crew handling permits, flights and 24/7 support.',
];

export default function About() {
  return (
    <>
      <Seo title="About Us" path="/about" />
      <AboutHero />

      {/* Story + stats */}
      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
              <SmartImage
                imageKey="aboutPhoto"
                alt="The Mule Ethiopia Tour team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-3 hidden aspect-[4/5] w-40 rotate-3 overflow-hidden rounded-2xl shadow-card ring-4 ring-sand-100 sm:block md:w-48">
              <SmartImage
                imageKey="guidePhoto"
                alt="Mule, founder and lead guide"
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>
            <div className="absolute -top-5 -left-3 -rotate-3 rounded-2xl bg-forest-600 px-5 py-3 text-sand-50 shadow-card">
              <p className="font-serif text-2xl font-semibold leading-none">Since 2009</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-sand-100/80">
                Family owned
              </p>
            </div>
          </Reveal>

          <Reveal>
            <SectionHeading
              eyebrow="Our story"
              title={
                <>
                  From two mules to a <em className="text-clay-500">forty-strong family</em>
                </>
              }
            />
            <p className="mt-6 leading-relaxed text-ink/70">
              Mule Ethiopia Tour started in 2009 with two mules, a spare blanket and one conviction:
              travellers deserve both an honest price and the real Ethiopia. Mule had walked the
              Lasta massif since childhood, and he figured the best guide was someone who grew up on
              the trail not someone reading about it.
            </p>
            <p className="mt-4 leading-relaxed text-ink/70">
              Today our team includes licensed guides from every region we visit, drivers who know
              the Danakil tracks by heart, and an Addis Ababa office that keeps the logistics
              invisible. The mules still come along. The conviction has not changed either.
            </p>
            <dl className="mt-9 grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white p-5 shadow-card">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <p className="font-serif text-2xl font-semibold text-clay-600 sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-ink/55">
                      {stat.label}
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Why choose us"
            title={
              <>
                Travel with the people <em className="text-clay-500">who call it home</em>
              </>
            }
            copy="Big operators sell you a package. We hand you the keys to our country — with the licences, the experience and the honesty to back it up."
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {WHY_US.map((item) => (
              <StaggerItem key={item.title} className="h-full">
                <div className="group h-full rounded-3xl bg-sand-100/60 p-7 ring-1 ring-sand-200 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-card-hover">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest-600/10 text-forest-600 ring-1 ring-forest-600/20 transition-colors duration-300 group-hover:bg-clay-500 group-hover:text-sand-50 group-hover:ring-clay-500">
                    <Icon name={item.icon} size={22} />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink/65">{item.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Values band */}
      <section className="section bg-forest-900">
        <div className="container-x">
          <SectionHeading
            align="center"
            light
            eyebrow="What we stand for"
            title="Three promises we make on every trip"
          />
          <Stagger className="mt-14 grid gap-12 lg:grid-cols-3" stagger={0.12}>
            {VALUES.map((value) => (
              <StaggerItem key={value.n}>
                <p className="font-serif text-6xl font-semibold leading-none text-gold-300/35">
                  {value.n}
                </p>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-sand-50">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sand-100/70">{value.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="The team"
              title={
                <>
                  Guides from <em className="text-clay-500">every region</em> we walk
                </>
              }
            />
            <ul className="mt-7 space-y-4">
              {TEAM_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-ink/75">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-forest-600/10 text-forest-600">
                    <Icon name="check" size={13} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <blockquote className="mt-9 rounded-3xl border-l-4 border-clay-500 bg-white p-6 shadow-card">
              <p className="font-serif text-lg italic leading-relaxed text-ink/80">
                “Ethiopia is not a destination I sell — it is my home I open. When you travel with
                us, you travel with family.”
              </p>
              <footer className="mt-4 text-xs font-semibold uppercase tracking-wider text-ink/50">
                Mule · Founder & lead guide
              </footer>
            </blockquote>
          </Reveal>

          <Reveal className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-3xl shadow-card">
              <SmartImage
                imageKey="guidePhoto"
                alt="Mule, founder and lead guide, in Addis Ababa"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-3xl shadow-card">
              <SmartImage
                imageKey="aboutPhoto"
                alt="The Mule Ethiopia Tour team"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-3xl shadow-card">
              <SmartImage
                imageKey="heroSimien"
                alt="A guide trekking in the Simien Mountains"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}