/** @type {import('next-sitemap').IConfig} */
const { TourSummaryArray } = require('./data/tours');
const { DESTINATIONS } = require('./data/destinations');
const { POSTS } = require('./data/posts');

module.exports = {
  siteUrl: 'https://www.muleethiopiatours.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: null,
  priority: null,
  autoLastmod: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api'],
      },
    ],
    additionalSitemaps: [
      'https://www.muleethiopiatours.com/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    return {
      loc: path,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => {
    const result = [];
    const date = new Date().toISOString();

    // Pull tours
    TourSummaryArray.forEach((tour) => {
      result.push({
        loc: `/tours/${tour.slug || tour.id}`,
        lastmod: date,
      });
    });

    // Pull destinations
    (DESTINATIONS || []).forEach((dest) => {
      result.push({
        loc: `/destinations/${dest.slug}`,
        lastmod: date,
      });
    });

    // Pull blog posts
    (POSTS || []).forEach((post) => {
      result.push({
        loc: `/blog/${post.slug}`,
        lastmod: date,
      });
    });

    // Core static pages
    [
      '/',
      '/tours',
      '/destinations',
      '/blog',
      '/about',
      '/gallery',
      '/contact',
      '/privacy-policy',
      '/terms',
    ].forEach((route) => {
      result.push({
        loc: route,
        lastmod: date,
      });
    });

    return result;
  },
};
