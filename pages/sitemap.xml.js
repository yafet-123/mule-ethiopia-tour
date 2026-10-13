import { SITE_URL } from '@/lib/config';
import { getAllTours } from '@/data/tours';
import { DESTINATIONS } from '@/data/destinations';
import { POSTS } from '@/data/posts';

function generateSiteMap({ tours, destinations, posts, lastmod }) {
  const staticRoutes = [
    '',
    '/tours',
    '/destinations',
    '/blog',
    '/about',
    '/gallery',
    '/contact',
    '/privacy-policy',
    '/terms',
  ];

  const tourRoutes = tours.map((t) => `/tours/${t.slug || t.id}`);
  const destinationRoutes = destinations.map((d) => `/destinations/${d.slug}`);
  const postRoutes = posts.map((p) => `/blog/${p.slug}`);

  const allRoutes = [
    ...staticRoutes,
    ...tourRoutes,
    ...destinationRoutes,
    ...postRoutes,
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map((route) => {
    return `  <url>
    <loc>${SITE_URL}${route.startsWith('/') ? route : `/${route}`}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`;
  })
  .join('\n')}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const tours = getAllTours();
  const destinations = DESTINATIONS || [];
  const posts = POSTS || [];
  const lastmod = new Date().toISOString().split('T')[0];

  const sitemap = generateSiteMap({ tours, destinations, posts, lastmod });

  res.setHeader('Content-Type', 'text/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {
  return null;
}
