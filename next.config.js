/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Slow-disk Windows machines time out Next's build workers while collecting
  // page data. Run page data collection in-process and allow generous SSG time.
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  staticPageGenerationTimeout: 180,

  images: {
    formats: ['image/avif', 'image/webp'],
    // We ship local placeholder artwork by default. This pattern list lets the
    // client drop real photography URLs in later without touching this file.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
  },

  // Tailwind + custom components only → no transpile exceptions needed today.

  async redirects() {
    return [
      // 301 Redirect old domain (root & www) to final canonical domain
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'muleethiopiatour.com',
          },
        ],
        destination: 'https://www.muleethiopiatours.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.muleethiopiatour.com',
          },
        ],
        destination: 'https://www.muleethiopiatours.com/:path*',
        permanent: true,
      },
      // Canonicalize apex domain to www on final domain
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'muleethiopiatours.com',
          },
        ],
        destination: 'https://www.muleethiopiatours.com/:path*',
        permanent: true,
      },

      // 301 Permanent redirects: numeric tour URLs -> keyword slugs
      { source: '/tours/1', destination: '/tours/10-day-north-south-danakil-harar', permanent: true },
      { source: '/tours/2', destination: '/tours/omo-valley-5-day-tribal-tour', permanent: true },
      { source: '/tours/3', destination: '/tours/omo-valley-8-day-tour', permanent: true },
      { source: '/tours/4', destination: '/tours/tigray-rock-churches-3-day', permanent: true },
      { source: '/tours/5', destination: '/tours/ethiopia-coffee-tour-8-day', permanent: true },
      { source: '/tours/6', destination: '/tours/ethiopia-coffee-tour-4-day', permanent: true },
      { source: '/tours/7', destination: '/tours/simien-mountains-trekking-4-day', permanent: true },
      { source: '/tours/8', destination: '/tours/axum-gheralta-ancient-wonders-5-day', permanent: true },
      { source: '/tours/9', destination: '/tours/tigray-churches-danakil-depression-7-day', permanent: true },
      { source: '/tours/10', destination: '/tours/bale-mountains-national-park-4-day', permanent: true },
      { source: '/tours/11', destination: '/tours/danakil-depression-erta-ale-3-day', permanent: true },
      { source: '/tours/12', destination: '/tours/addis-ababa-to-arba-minch-6-day', permanent: true },
      { source: '/tours/13', destination: '/tours/tigray-rock-hewn-churches-4-day', permanent: true },
      { source: '/tours/14', destination: '/tours/addis-ababa-city-tour-4-day', permanent: true },
      { source: '/tours/15', destination: '/tours/addis-ababa-excursion-trips-4-day', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;