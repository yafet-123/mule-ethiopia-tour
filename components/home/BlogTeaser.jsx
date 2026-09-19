import Link from 'next/link';
import SmartImage from '@/components/SmartImage';
import Icon from '@/components/Icon';
import { Stagger, StaggerItem } from '@/components/Reveal';
import { POSTS } from '@/data/posts';

/**
 * Blog / travel-tips teaser strip (3 to 4 recent posts).
 */
export default function BlogTeaser() {
  const posts = POSTS.slice(0, 4);

  const readableDate = (iso) =>
    new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

  return (
    <section className="py-10 sm:py-16" aria-labelledby="blog-heading">
      <div className="container-x">
        <Stagger className="flex flex-wrap items-end justify-between gap-4">
          <StaggerItem>
            <p className="eyebrow">Travel journal</p>
            <h2
              id="blog-heading"
              className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]"
            >
              Guides’ <em className="text-clay-600">Travel Tips</em>
            </h2>
            <p className="mt-4 max-w-xl text-ink/60">
              Honest advice from the people who actually walk these trails every week.
            </p>
          </StaggerItem>
          <StaggerItem>
            <Link
              href="/blog"
              className="hidden items-center gap-2 text-sm font-semibold text-clay-600 transition hover:text-clay-700 sm:inline-flex"
            >
              Read the journal <Icon name="arrow-right" size={15} />
            </Link>
          </StaggerItem>
        </Stagger>

        <Stagger className="mt-8 sm:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {posts.map((post) => (
            <StaggerItem key={post.slug} className="h-full">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <SmartImage
                    imageKey={post.imageKey}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-forest-700/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-sand-50 backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="flex items-center gap-3 text-[12px] text-ink/45">
                    <span>{readableDate(post.date)}</span>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1">
                      <Icon name="clock" size={12} /> {post.readTime} min read
                    </span>
                  </p>
                  <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-clay-600">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-ink/60">
                    {post.excerpt}
                  </p>
                  <span className="mt-auto pt-4 text-[13px] font-semibold text-clay-600 inline-flex items-center gap-1">
                    Read article <Icon name="arrow-right" size={13} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Mobile-only CTA link */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="btn btn-outline w-full py-3 text-sm font-semibold"
          >
            Read all journal articles
            <Icon name="arrow-right" size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}