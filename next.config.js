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
};

module.exports = nextConfig;