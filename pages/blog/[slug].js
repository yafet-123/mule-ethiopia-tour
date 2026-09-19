import { useEffect, useState } from 'react';
import Link from 'next/link';
import { POSTS } from '@/data/posts';
import { IMAGES } from '@/data/images';
import SmartImage from '@/components/SmartImage';
import Seo from '@/components/Seo';
import Icon from '@/components/Icon';
import Tilt from '@/components/Tilt';
import { motion } from 'framer-motion';
import ArticleContent from '@/components/ArticleContent';

export async function getStaticPaths() {
  const paths = POSTS.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = POSTS.find((p) => p.slug === params.slug);
  const postIndex = POSTS.findIndex((p) => p.slug === params.slug);

  // Related posts: same category, exclude current, max 3
  const related = POSTS.filter(
    (p) => p.slug !== params.slug && p.category === post.category
  ).slice(0, 3);

  // Fallback: pick any other posts if not enough same-cat
  const fallbackRelated = related.length < 3
    ? [...related, ...POSTS.filter(
      (p) => p.slug !== params.slug && !related.find((r) => r.slug === p.slug)
    ).slice(0, 3 - related.length)]
    : related;

  return { props: { post, related: fallbackRelated } };
}

export default function BlogPost({ post, related }) {
  const [readProgress, setReadProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setReadProgress(total > 0 ? Math.min(100, (scrolled / total) * 100) : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const imageInfo = IMAGES[post.imageKey] || { src: null, fallback: '/images/art/generic.svg' };

  const CATEGORY_COLORS = {
    'Travel Tips': 'bg-forest-500/90 text-white',
    'Culture': 'bg-clay-500/90 text-white',
    'Adventure': 'bg-gold-500/90 text-ink',
    'Wildlife': 'bg-emerald-600/90 text-white',
    'History': 'bg-stone-700/90 text-white',
    'Food & Drink': 'bg-rose-600/90 text-white',
  };
  const catColor = CATEGORY_COLORS[post.category] || 'bg-gold-400/90 text-ink';

  // Parse headings for sidebar TOC
  const tocItems = (post.content || []).filter(b => b.trim().startsWith('<h3')).map(b =>
    b.replace(/<h3[^>]*>/g, '').replace(/<\/h3>/g, '').trim()
  );

  return (
    <>
      {/* Reading progress bar */}
      <div
        className="fixed top-0 left-0 z-[9999] h-0.5 bg-gradient-to-r from-gold-400 via-clay-500 to-gold-400 transition-all duration-100 shadow-[0_0_8px_rgba(239,203,130,0.6)]"
        style={{ width: `${readProgress}%` }}
        aria-hidden="true"
      />

      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
      />

      <article className="bg-sand-50 pb-0">

        {/* ─── CINEMATIC HERO ─────────────────────────────────────── */}
        <header className="relative isolate flex min-h-[80vh] flex-col items-center justify-end overflow-hidden bg-ink pb-0 text-center">
          {/* Full-bleed background image */}
          <div className="absolute inset-0 -z-20">
            <SmartImage
              src={imageInfo.src}
              fallback={imageInfo.fallback}
              alt={post.title}
              fill
              className="object-cover opacity-70"
              priority
            />
            {/* Layered gradient: bottom heavy, top darkened */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-transparent" />
          </div>

          {/* Ambient glow */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-gold-500/15 blur-[120px]" />
          </div>

          {/* Back link — top left */}
          <div className="absolute top-0 left-0 right-0 pt-28 lg:pt-36">
            <div className="container-x max-w-5xl flex items-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-sand-100 ring-1 ring-white/20 backdrop-blur-md hover:bg-white/20 transition"
              >
                <Icon name="arrow-left" size={14} />
                Back to Journal
              </Link>
            </div>
          </div>

          {/* Hero content — sits at the bottom */}
          <div className="container-x relative z-10 max-w-4xl w-full pb-0">
            {/* Meta pill row */}
            <motion.div
              className="mb-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-sand-50/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className={`rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest ${catColor} shadow-md`}>
                {post.category}
              </span>
              <span className="hidden sm:inline h-1 w-1 rounded-full bg-sand-50/30" />
              <span className="inline-flex items-center gap-1.5 text-xs">
                <Icon name="calendar" size={13} className="text-gold-300" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              </span>
              <span className="hidden sm:inline h-1 w-1 rounded-full bg-sand-50/30" />
              <span className="inline-flex items-center gap-1.5 text-xs">
                <Icon name="clock" size={13} className="text-gold-300" />
                {post.readTime} min read
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="mb-6 font-serif text-4xl font-semibold leading-[1.08] text-sand-50 sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {post.title}
            </motion.h1>

            {/* Excerpt */}
            <motion.p
              className="mx-auto mb-8 max-w-2xl text-lg text-sand-200/85 leading-relaxed sm:text-xl"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {post.excerpt}
            </motion.p>

            {/* Divider wave shape into content below */}
            <div
              aria-hidden="true"
              className="h-16 w-full"
              style={{
                background: 'linear-gradient(to bottom, transparent, #F7F1E7)',
              }}
            />
          </div>
        </header>

        {/* ─── ARTICLE CONTENT ─────────────────────────────────────── */}
        <div className="bg-sand-50">
          <div className="container-x">
            <div className="mx-auto flex max-w-6xl gap-12 lg:gap-16">

              {/* ── Sticky Sidebar (desktop only) ─────────────────── */}
              {tocItems.length > 0 && (
                <aside className="hidden lg:block w-56 xl:w-64 flex-shrink-0">
                  <div className="sticky top-24 pt-10">
                    {/* Author card */}
                    <div className="mb-8 rounded-2xl bg-white p-5 shadow-card ring-1 ring-sand-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="grid h-9 w-9 place-items-center rounded-full bg-gold-400/20 text-gold-600 ring-2 ring-gold-400/30 flex-shrink-0">
                          <Icon name="user" size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-ink leading-tight">Mule Ethiopia Tour</p>
                          <p className="text-[10px] text-ink/50">Local Guides · Addis Ababa</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 rounded-xl bg-gold-400/10 px-3 py-2">
                        <Icon name="clock" size={12} className="text-gold-600" />
                        <span className="text-xs font-semibold text-gold-700">{post.readTime} min read</span>
                      </div>
                    </div>

                    {/* Table of Contents */}
                    <div className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-sand-200">
                      <p className="text-[10px] font-black uppercase tracking-widest text-ink/35 mb-4">
                        In this article
                      </p>
                      <nav className="space-y-2.5">
                        {tocItems.map((item, i) => (
                          <div key={i} className="flex items-start gap-2.5 group">
                            <span className="mt-1 h-4 w-4 flex-shrink-0 grid place-items-center rounded bg-gold-400/20 text-gold-600 text-[9px] font-black">
                              {i + 1}
                            </span>
                            <span className="text-xs leading-snug text-ink/65 group-hover:text-clay-600 transition-colors cursor-default font-medium">
                              {item}
                            </span>
                          </div>
                        ))}
                      </nav>
                    </div>

                    {/* CTA card */}
                    <div className="mt-6 rounded-2xl bg-gradient-to-br from-ink to-forest-950 p-5 text-center shadow-lg">
                      <p className="text-xs font-bold text-gold-400 mb-1 uppercase tracking-wider">Ready to go?</p>
                      <p className="text-[11px] text-sand-200/70 mb-4 leading-relaxed">Turn this read into your next adventure.</p>
                      <Link
                        href="/tours"
                        className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-gold-400 px-4 py-2.5 text-xs font-bold text-ink hover:bg-gold-300 transition"
                      >
                        Browse Tours
                        <Icon name="arrow-right" size={12} />
                      </Link>
                    </div>
                  </div>
                </aside>
              )}

              {/* ── Main article column ────────────────────────────── */}
              <div className="min-w-0 flex-1 max-w-2xl xl:max-w-3xl mx-auto lg:mx-0">

                {/* Mobile author strip */}
                <div className="lg:hidden flex items-center gap-4 py-8 border-b border-sand-200">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gold-400/20 text-gold-600 ring-2 ring-gold-400/30">
                    <Icon name="user" size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">Mule Ethiopia Tour — Local Team</p>
                    <p className="text-xs text-ink/50">Addis Ababa · Licensed Ethiopian Tourism Guides</p>
                  </div>
                  <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-gold-400/15 px-3 py-1.5 text-xs font-semibold text-gold-700">
                    <Icon name="clock" size={12} />
                    {post.readTime} min read
                  </span>
                </div>

                {/* Desktop author top strip */}
                <div className="hidden lg:flex items-center gap-4 py-8 border-b border-sand-200">
                  <div>
                    <p className="text-sm font-semibold text-ink">Mule Ethiopia Tour — Local Team</p>
                    <p className="text-xs text-ink/50">Addis Ababa · Licensed Ethiopian Tourism Guides</p>
                  </div>
                </div>

                {/* Rich article body */}
                <ArticleContent content={post.content} />

                {/* Tags / Category footer */}
                <div className="flex flex-wrap items-center gap-3 pt-6 pb-10 border-t border-sand-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-ink/40">Filed under:</span>
                  <span className={`rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider ${catColor}`}>
                    {post.category}
                  </span>
                  <div className="ml-auto">
                    <Link
                      href="/blog"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-forest-600 hover:text-forest-700 transition"
                    >
                      <Icon name="arrow-left" size={15} />
                      Back to Journal
                    </Link>
                  </div>
                </div>

              </div>{/* end main article column */}
            </div>{/* end flex row */}
          </div>{/* end container-x */}
        </div>

        {/* ─── CTA BAND ────────────────────────────────────────────── */}
        <div className="bg-ink py-16 text-center">
          <div className="container-x max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-3">
              {`Inspired? Let's make it real.`}
            </p>
            <h2 className="font-serif text-3xl font-semibold text-sand-50 leading-tight">
              Talk to a local guide and{' '}
              <em className="text-gold-400 font-normal italic">plan your journey</em>.
            </h2>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/tours"
                className="inline-flex items-center gap-2 rounded-2xl bg-gold-400 px-7 py-3.5 font-semibold text-ink shadow-lg transition hover:bg-gold-300 hover:scale-[1.02]"
              >
                Browse Tours
                <Icon name="arrow-right" size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-7 py-3.5 font-semibold text-sand-50 ring-1 ring-white/20 transition hover:bg-white/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* ─── RELATED POSTS ───────────────────────────────────────── */}
        {related.length > 0 && (
          <section className="bg-sand-50 py-16 sm:py-20">
            <div className="container-x">
              <div className="mb-10 flex items-end justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-clay-500 mb-1">
                    Continue Reading
                  </p>
                  <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
                    More from the Journal
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-clay-600 hover:text-clay-700 transition"
                >
                  All articles
                  <Icon name="arrow-right" size={14} />
                </Link>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((rpost) => {
                  const rImg = IMAGES[rpost.imageKey] || { src: null, fallback: '/images/art/generic.svg' };
                  return (
                    <Tilt key={rpost.slug} max={4} className="h-full">
                      <Link
                        href={`/blog/${rpost.slug}`}
                        className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
                      >
                        <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden">
                          <SmartImage
                            src={rImg.src}
                            fallback={rImg.fallback}
                            alt={rpost.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
                          <span className="absolute left-4 top-4 rounded-full bg-gold-400/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">
                            {rpost.category}
                          </span>
                        </div>

                        <div className="flex flex-1 flex-col p-6">
                          <div className="flex items-center gap-3 text-[12px] text-ink/50">
                            <span className="inline-flex items-center gap-1">
                              <Icon name="clock" size={12} className="text-clay-400" />
                              {rpost.readTime} min
                            </span>
                            <span>·</span>
                            <time>{new Date(rpost.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</time>
                          </div>
                          <h3 className="mt-2.5 font-serif text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-clay-600">
                            {rpost.title}
                          </h3>
                          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/55">
                            {rpost.excerpt}
                          </p>
                          <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[13px] font-bold text-clay-600">
                            Read article
                            <Icon
                              name="arrow-right"
                              size={13}
                              className="transition-transform group-hover:translate-x-1"
                            />
                          </span>
                        </div>
                      </Link>
                    </Tilt>
                  );
                })}
              </div>

              <div className="mt-10 text-center sm:hidden">
                <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-clay-600">
                  View all articles <Icon name="arrow-right" size={14} />
                </Link>
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
