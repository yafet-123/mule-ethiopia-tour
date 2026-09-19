import { useState, useMemo } from 'react';
import Link from 'next/link';
import Seo from '@/components/Seo';
import SmartImage from '@/components/SmartImage';
import Tilt from '@/components/Tilt';
import { POSTS } from '@/data/posts';
import { IMAGES } from '@/data/images';
import Icon from '@/components/Icon';
import { Stagger, StaggerItem } from '@/components/Reveal';
import { BlogHero } from '@/components/heroes';

export default function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState(null);

  const filtered = useMemo(() => {
    if (!activeCategory) return POSTS;
    return POSTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Skip the first post (shown in hero as featured) when no filter
  const displayPosts = filtered;

  return (
    <>
      <Seo
        title="Journal & Travel Tips"
        description="Read stories, cultural insights, and travel tips straight from Mule Ethiopia Tour's local guides."
        path="/blog"
      />

      <BlogHero activeCategory={activeCategory} onCategorySelect={setActiveCategory} />

      <section className="py-16 sm:py-24 bg-sand-50">
        <div className="container-x">

          {/* Section header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-clay-500 mb-1">
                {activeCategory ? `Browsing: ${activeCategory}` : 'All Articles'}
              </p>
              <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
                {activeCategory
                  ? `${filtered.length} ${filtered.length === 1 ? 'article' : 'articles'} found`
                  : `${POSTS.length} dispatches from the field`}
              </h2>
            </div>

            {activeCategory && (
              <button
                onClick={() => setActiveCategory(null)}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-sand-50 hover:bg-ink/80 transition"
              >
                <Icon name="x" size={12} />
                Clear filter
              </button>
            )}
          </div>

          {/* No results */}
          {displayPosts.length === 0 && (
            <div className="py-24 text-center text-ink/40">
              <p className="text-4xl mb-4">📭</p>
              <p className="text-lg font-serif">No articles in this category yet.</p>
            </div>
          )}

          {/* Post grid */}
          <Stagger className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {displayPosts.map((post, idx) => {
              const imageInfo = IMAGES[post.imageKey] || { src: null, fallback: '/images/art/generic.svg' };
              const isFeatured = !activeCategory && idx === 0;

              return (
                <StaggerItem
                  key={post.slug}
                  className={`h-full ${isFeatured ? 'sm:col-span-2 lg:col-span-3' : ''}`}
                >
                  <Tilt max={isFeatured ? 2 : 4} className="h-full">
                    <Link
                      href={`/blog/${post.slug}`}
                      className={`group flex h-full overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5 ${
                        isFeatured ? 'flex-row' : 'flex-col'
                      }`}
                    >
                      {/* Image Area */}
                      <div className={`relative shrink-0 overflow-hidden ${
                        isFeatured
                          ? 'w-full sm:w-1/2 aspect-[4/3] sm:aspect-auto'
                          : 'aspect-[4/3] w-full'
                      }`}>
                        <SmartImage
                          src={imageInfo.src}
                          fallback={imageInfo.fallback}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                          priority={isFeatured}
                        />
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent"
                        />

                        {/* Category badge */}
                        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gold-400/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-ink backdrop-blur-sm">
                          {post.category}
                        </span>

                        {/* Featured flag */}
                        {isFeatured && (
                          <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-semibold text-sand-50 backdrop-blur-md ring-1 ring-white/20">
                            ⭐ Latest
                          </span>
                        )}
                      </div>

                      {/* Content Area */}
                      <div className={`flex flex-1 flex-col ${isFeatured ? 'p-8 lg:p-10 justify-center' : 'p-6'}`}>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-ink/50">
                          <span className="inline-flex items-center gap-1.5">
                            <Icon name="calendar" size={13} className="text-clay-400" />
                            {new Date(post.date).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Icon name="clock" size={13} className="text-clay-400" />
                            {post.readTime} min read
                          </span>
                        </div>

                        <h3 className={`mt-3 font-serif font-semibold leading-snug text-ink transition-colors group-hover:text-clay-700 ${
                          isFeatured ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
                        }`}>
                          {post.title}
                        </h3>

                        <p className={`mt-2 leading-relaxed text-ink/60 ${
                          isFeatured ? 'text-base line-clamp-3' : 'text-sm line-clamp-3'
                        }`}>
                          {post.excerpt}
                        </p>

                        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[13px] font-bold text-clay-600">
                          Read article
                          <Icon
                            name="arrow-right"
                            size={14}
                            className="transition-transform duration-300 group-hover:translate-x-1.5"
                          />
                        </span>
                      </div>
                    </Link>
                  </Tilt>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-ink py-20 text-center">
        <div className="container-x max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-4">
            Ready to Experience It?
          </p>
          <h2 className="font-serif text-3xl font-semibold text-sand-50 sm:text-4xl leading-tight">
            Turn these stories into{' '}
            <em className="text-gold-400 font-normal italic">your own</em>.
          </h2>
          <p className="mt-4 text-sand-200/70 text-lg">
            Every article is a taste of what awaits. Browse our tours and start planning.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 rounded-2xl bg-gold-400 px-7 py-4 font-semibold text-ink shadow-lg transition hover:bg-gold-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Browse All Tours
              <Icon name="arrow-right" size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-7 py-4 font-semibold text-sand-50 ring-1 ring-white/20 transition hover:bg-white/20"
            >
              Talk to a Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
