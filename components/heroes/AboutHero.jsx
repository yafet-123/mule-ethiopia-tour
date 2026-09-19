import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Icon from '@/components/Icon';
import SmartImage from '@/components/SmartImage';

/**
 * AboutHero — Style 1: "Warm Abyssinian Heritage & Authentic Founder's Storybook"
 * Features an asymmetric split layout, warm earthy gradient, floating polaroid overlay,
 * founder badge, and interactive stat ticker.
 */
export default function AboutHero() {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <section className="relative isolate overflow-hidden bg-sand-50 pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Warm Ambient Background Orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-[550px] w-[550px] rounded-full bg-clay-400/10 blur-[100px]" />
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-gold-300/15 blur-[90px]" />
        <div className="absolute -bottom-20 left-1/3 h-[450px] w-[450px] rounded-full bg-forest-500/8 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(#24211c 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">

          {/* Left Column: Story & Editorial Copy */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Heritage Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-clay-500/10 px-4 py-2 ring-1 ring-clay-500/20">
              <span className="flex h-2 w-2 rounded-full bg-clay-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-clay-700">
                Est. 2009 • Lalibela, Ethiopia
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Born on Lalibela&apos;s trails,{' '}
              <em className="text-clay-500 not-italic underline decoration-gold-400/60 decoration-wavy underline-offset-8">
                sharing our home
              </em>{' '}
              with the world.
            </h1>

            {/* Paragraph */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/75 sm:text-lg">
              Fifteen years ago, Mule started with two mules and a simple conviction: travellers deserve an authentic Ethiopian experience without middleman markups. Today, our 40 strong team of local guides, muleteers, and cooks takes you deep into the heart of Abyssinia.
            </p>

            {/* Interactive Feature Tabs */}
            <div className="mt-8 rounded-2xl bg-white/80 p-1.5 shadow-sm ring-1 ring-sand-300/60 backdrop-blur-md max-w-xl">
              <div className="grid grid-cols-3 gap-1 text-center text-xs font-semibold sm:text-sm">
                {[
                  { id: 'mission', label: '🌿 Our Roots' },
                  { id: 'team', label: '🤝 100% Local' },
                  { id: 'promise', label: '🛡️ Fair Direct Pricing' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`rounded-xl py-2.5 px-3 transition-all duration-300 ${activeTab === tab.id
                      ? 'bg-forest-600 text-sand-50 shadow-md'
                      : 'text-ink/60 hover:text-ink hover:bg-sand-100/50'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content Box */}
              <div className="p-4 text-xs sm:text-sm text-ink/80 border-t border-sand-200/60 mt-2">
                {activeTab === 'mission' && (
                  <p className="animate-fadeIn">
                    Founded in Lalibela by a local guide. We do not package Ethiopia from a distant office — we welcome you as guests into our native villages.
                  </p>
                )}
                {activeTab === 'team' && (
                  <p className="animate-fadeIn">
                    Every guide, driver, muleteer, and cook is hired directly from local communities along your trek, ensuring your trip directly funds village livelihoods.
                  </p>
                )}
                {activeTab === 'promise' && (
                  <p className="animate-fadeIn">
                    Zero overseas agency commissions. Transparent pricing guarantees fair wages for our mountain crews and unbeatable value for you.
                  </p>
                )}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/tours"
                className="inline-flex items-center gap-2 rounded-2xl bg-forest-600 px-7 py-4 font-semibold text-sand-50 shadow-lg shadow-forest-900/20 transition hover:bg-forest-700 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Guided Journeys</span>
                <Icon name="arrow-right" size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-ink shadow-card ring-1 ring-sand-300/80 transition hover:bg-sand-100 hover:shadow-card-hover"
              >
                <Icon name="whatsapp" size={18} className="text-emerald-600" />
                <span>Talk with Founder Mule</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Layered Heritage Photo Stack */}
          <motion.div
            className="relative lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Decorative Background Frame */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-clay-500/20 via-gold-400/20 to-forest-500/20 blur-xl" />

              {/* Main Team Photo Frame */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-forest-900 shadow-2xl ring-1 ring-sand-300/50">
                <SmartImage
                  imageKey="aboutPhoto"
                  alt="Mule Ethiopia Tour local team and guides"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-black/10" />

                <div className="absolute bottom-6 left-6 right-6 text-sand-50">
                  <p className="font-serif text-xl font-semibold">The Mule Ethiopia Family</p>
                  <p className="mt-1 text-xs text-sand-200/80">
                    Lalibela • Simien • Danakil • Omo Valley Local Guides
                  </p>
                </div>
              </div>

              {/* Floating Polaroid Badge (Bottom Left) */}
              <motion.div
                className="absolute -bottom-6 -left-6 hidden sm:block w-48 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-black/5 rotate-[-4deg]"
                whileHover={{ rotate: 0, scale: 1.05 }}
              >
                <div className="relative aspect-square overflow-hidden rounded-xl bg-sand-200">
                  <SmartImage
                    imageKey="guidePhoto"
                    alt="Mule on the Simien trails"
                    fill
                    sizes="180px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-2 text-center">
                  <p className="font-serif text-xs font-bold text-ink">Mule (Founder)</p>
                  <p className="text-[10px] text-ink/60">On the Lasta Trail, 2009</p>
                </div>
              </motion.div>

              {/* Floating Experience Badge (Top Right) */}
              <motion.div
                className="absolute -top-6 -right-4 rounded-2xl bg-forest-800/90 p-4 text-sand-50 shadow-xl backdrop-blur-md ring-1 ring-white/10 rotate-[3deg]"
                whileHover={{ rotate: 0, scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gold-400 text-forest-950 font-bold font-serif text-lg">
                    15+
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gold-300">Years Active</p>
                    <p className="text-xs text-sand-100/80">5,000+ Journeys Crafted</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Bottom Ticker Trophies / Stats Strip */}
        <motion.div
          className="mt-16 grid grid-cols-2 gap-4 rounded-3xl bg-forest-900 p-6 text-sand-50 shadow-xl sm:grid-cols-4 lg:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { num: '15+', label: 'Years Trail Experience', desc: 'Guided since 2009' },
            { num: '40+', label: 'Local Ethiopian Team', desc: 'Guides, cooks & drivers' },
            { num: '100%', label: 'Direct Local Owned', desc: 'Zero middleman tax' },
            { num: '4.9★', label: 'Traveler Rating', desc: 'Verified 500+ reviews' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center p-2 border-r last:border-r-0 border-forest-800/80">
              <span className="font-serif text-2xl font-bold text-gold-300 sm:text-3xl">{stat.num}</span>
              <span className="mt-1 text-xs font-semibold text-sand-100 sm:text-sm">{stat.label}</span>
              <span className="text-[11px] text-sand-200/60">{stat.desc}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
