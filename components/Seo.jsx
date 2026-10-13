import Head from 'next/head';
import { SITE, SITE_NAME, SITE_URL } from '@/lib/config';

/**
 * <Seo /> — Centralized, reusable SEO component for Mule Ethiopia Tours and Travel.
 * Enforces strict technical SEO constraints:
 * - Homepage title: "Ethiopia Tours & Travel | Mule Ethiopia Tours and Travel" (<= 60 chars)
 * - Inner page title: "[Page Topic] | Mule Ethiopia Tours and Travel" (<= 60 chars)
 * - Meta descriptions <= 160 characters
 * - Open Graph & Twitter Card tags
 * - Canonical link tag with final domain
 * - Structured data (JSON-LD) for TravelAgency, TouristTrip, BreadcrumbList, etc.
 */
export default function Seo({
  title,
  description = SITE.description,
  path = '/',
  image = '/images/home/mule-ethiopia-tours-lalibela-bete-giyorgis.jpg',
  type = 'website',
  schema,
  breadcrumbs,
  noindex = false,
}) {
  const brandSuffix = ` | ${SITE_NAME}`;
  let fullTitle = '';

  if (!title || path === '/') {
    fullTitle = `Ethiopia Tours & Travel | ${SITE_NAME}`;
  } else if (title.includes(SITE_NAME)) {
    fullTitle = title.length > 60 ? `${title.slice(0, 57).trim()}...` : title;
  } else {
    let topic = title.trim();
    const maxTopicLen = 60 - brandSuffix.length; // 26 chars
    if (topic.length > maxTopicLen) {
      const truncated = topic.slice(0, maxTopicLen - 3);
      const lastSpace = truncated.lastIndexOf(' ');
      topic = `${(lastSpace > 12 ? truncated.slice(0, lastSpace) : truncated).trim()}...`;
    }
    fullTitle = `${topic}${brandSuffix}`;
  }

  // Sanitize and clamp meta description to <= 160 characters
  let cleanDesc = (description || SITE.description).replace(/\s+/g, ' ').trim();
  if (cleanDesc.length > 160) {
    const truncated = cleanDesc.slice(0, 157);
    const lastSpace = truncated.lastIndexOf(' ');
    cleanDesc = `${(lastSpace > 120 ? truncated.slice(0, lastSpace) : truncated).trim()}...`;
  }

  const canonical = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  const absoluteImage = image.startsWith('http')
    ? image
    : `${SITE_URL}${image.startsWith('/') ? image : `/${image}`}`;

  const isHome = path === '/' || path === '';

  // Homepage TravelAgency Schema (Task 6)
  const travelAgencySchema = isHome
    ? {
        '@context': 'https://schema.org',
        '@type': 'TravelAgency',
        name: SITE_NAME,
        alternateName: 'Mule Ethiopia Tours',
        url: SITE_URL,
        logo: `${SITE_URL}/logo-transparent.png`,
        image: `${SITE_URL}/images/home/mule-ethiopia-tours-lalibela-bete-giyorgis.jpg`,
        telephone: '+251966855894',
        email: SITE.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: '4 Killo, in front of Birhana Selam, Kidus Plaza 3rd floor',
          addressLocality: 'Addis Ababa',
          addressCountry: 'ET',
        },
        sameAs: Object.values(SITE.social),
        priceRange: '$$',
      }
    : null;

  // Breadcrumb Schema (Task 6)
  const breadcrumbSchema =
    breadcrumbs && breadcrumbs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((crumb, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: crumb.name,
            item: crumb.url.startsWith('http')
              ? crumb.url
              : `${SITE_URL}${crumb.url.startsWith('/') ? crumb.url : `/${crumb.url}`}`,
          })),
        }
      : null;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={cleanDesc} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={cleanDesc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={cleanDesc} />
      <meta name="twitter:image" content={absoluteImage} />

      {/* Theme */}
      <meta name="theme-color" content="#1D4A3E" />

      {/* Structured Data: TravelAgency (Homepage) */}
      {travelAgencySchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencySchema) }}
        />
      )}

      {/* Structured Data: BreadcrumbList (Inner pages) */}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}

      {/* Structured Data: Custom Page Schema (TouristTrip, etc.) */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </Head>
  );
}