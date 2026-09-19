import { useState } from 'react';
import Seo from '@/components/Seo';
import {
  AboutHero,
  ContactHero,
  GalleryHero,
  ToursHero,
  DestinationsHero,
} from '@/components/heroes';

export default function HeroesShowcase() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <>
      <Seo title="Page Heroes Showcase" path="/heroes-showcase" />

      <div className="bg-ink text-sand-50 pt-28 pb-6 border-b border-sand-50/10">
        <div className="container-x flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-gold-400">
              Style Showcase
            </span>
            <h1 className="font-serif text-2xl font-bold">5 Unique Page Hero Designs</h1>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'View All 5' },
              { id: 'about', label: '1. About Hero' },
              { id: 'contact', label: '2. Contact Hero' },
              { id: 'gallery', label: '3. Gallery Hero' },
              { id: 'tours', label: '4. Tours Hero' },
              { id: 'destinations', label: '5. Destinations Hero' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition ${
                  activeTab === tab.id
                    ? 'bg-gold-400 text-ink'
                    : 'bg-white/10 text-sand-200 hover:bg-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="space-y-12 bg-sand-200/40 pb-24">
        {(activeTab === 'all' || activeTab === 'about') && (
          <div className="relative">
            <div className="container-x py-3 text-xs font-bold uppercase tracking-wider text-ink/60">
              Style 1: About Hero (Earthy Heritage & Storybook Split)
            </div>
            <AboutHero />
          </div>
        )}

        {(activeTab === 'all' || activeTab === 'contact') && (
          <div className="relative">
            <div className="container-x py-3 text-xs font-bold uppercase tracking-wider text-ink/60">
              Style 2: Contact Hero (Dark Emerald Luxury & Live Addis Concierge)
            </div>
            <ContactHero />
          </div>
        )}

        {(activeTab === 'all' || activeTab === 'gallery') && (
          <div className="relative">
            <div className="container-x py-3 text-xs font-bold uppercase tracking-wider text-ink/60">
              Style 3: Gallery Hero (Cinematic Midnight Darkroom & Photo Showcase Reel)
            </div>
            <GalleryHero activeTag="All" />
          </div>
        )}

        {(activeTab === 'all' || activeTab === 'tours') && (
          <div className="relative">
            <div className="container-x py-3 text-xs font-bold uppercase tracking-wider text-ink/60">
              Style 4: Tours Hero (Expedition Command Console & Search Bar)
            </div>
            <ToursHero tourCount={15} />
          </div>
        )}

        {(activeTab === 'all' || activeTab === 'destinations') && (
          <div className="relative">
            <div className="container-x py-3 text-xs font-bold uppercase tracking-wider text-ink/60">
              Style 5: Destinations Hero (Panoramic Horizon & 3D Region Carousel)
            </div>
            <DestinationsHero />
          </div>
        )}
      </main>
    </>
  );
}
