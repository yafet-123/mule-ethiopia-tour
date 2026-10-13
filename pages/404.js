import Link from 'next/link';
import Seo from '@/components/Seo';
import Icon from '@/components/Icon';

export default function Custom404() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you are looking for cannot be found. Return to Mule Ethiopia Tours and Travel to explore our authentic Ethiopian journeys."
        path="/404"
        noindex={true}
      />

      <div className="flex min-h-[75vh] items-center justify-center bg-sand-50 px-4 py-24 sm:py-32">
        <div className="container-x max-w-xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-forest-900/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-forest-800">
            <span>🧭</span>
            <span>404 Error</span>
          </span>

          <h1 className="mt-6 font-serif text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Lost on the <em className="text-clay-600 not-italic italic">trail</em>?
          </h1>

          <p className="mt-4 text-base leading-relaxed text-ink/70 sm:text-lg">
            The page or route you were looking for doesn&apos;t exist or may have been moved.
            Let&apos;s guide you back to Ethiopia&apos;s most inspiring destinations.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="btn btn-primary px-6 py-3.5 text-sm font-semibold shadow-md"
            >
              <Icon name="arrow-left" size={15} />
              Return Home
            </Link>
            <Link
              href="/tours"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-sm transition hover:border-forest-600 hover:text-forest-700 hover:shadow-md"
            >
              Browse Tours
              <Icon name="arrow-right" size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 rounded-2xl border border-sand-300 bg-white/70 p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-ink/50">
              Popular Destinations
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {[
                { name: 'Lalibela', href: '/destinations/lalibela' },
                { name: 'Danakil Depression', href: '/destinations/danakil-depression' },
                { name: 'Simien Mountains', href: '/destinations/simien-mountains' },
                { name: 'Omo Valley', href: '/destinations/omo-valley' },
              ].map((dest) => (
                <Link
                  key={dest.name}
                  href={dest.href}
                  className="rounded-full bg-sand-200/80 px-3 py-1 text-xs font-medium text-forest-800 transition hover:bg-forest-100 hover:text-forest-900"
                >
                  {dest.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
