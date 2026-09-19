import Head from 'next/head';
import { SITE } from '@/lib/config';

/**
 * <Seo />, per-page meta tags (on-page SEO).
 * Everything is optional; sane defaults fall back to global site data.
 */
export default function Seo({
  title,
  description = SITE.description,
  path = '/',
  image = '/images/home/mule-ethiopia-tours-lalibela-bete-giyorgis.jpg',
  type = 'website',
}) {
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} | ${SITE.tagline}`;
  const canonical = `${SITE.url}${path}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${SITE.url}${image}`} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE.url}${image}`} />

      {/* Theme */}
      <meta name="theme-color" content="#1D4A3E" />

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TravelAgency',
            name: SITE.name,
            description: SITE.description,
            url: SITE.url,
            telephone: SITE.phone,
            email: SITE.email,
            address: { '@type': 'PostalAddress', streetAddress: SITE.address, addressCountry: 'ET' },
            sameAs: Object.values(SITE.social),
            priceRange: '$95 to $1,290',
          }),
        }}
      />
    </Head>
  );
}