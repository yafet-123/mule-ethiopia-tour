import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { TourSummaryArray } from '../data/tours.js';
import { DESTINATIONS } from '../data/destinations.js';
import { POSTS } from '../data/posts.js';
import { SITE_URL } from '../lib/config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const lastmod = new Date().toISOString().split('T')[0];

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

const tourRoutes = TourSummaryArray.map((t) => `/tours/${t.slug || t.id}`);
const destinationRoutes = (DESTINATIONS || []).map((d) => `/destinations/${d.slug}`);
const postRoutes = (POSTS || []).map((p) => `/blog/${p.slug}`);

const allRoutes = [
  ...staticRoutes,
  ...tourRoutes,
  ...destinationRoutes,
  ...postRoutes,
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route.startsWith('/') ? route : `/${route}`}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const outputPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf8');
console.log(`Generated public/sitemap.xml with ${allRoutes.length} URLs!`);
