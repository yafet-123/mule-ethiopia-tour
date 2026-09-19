/**
 * Central image registry for Mule Ethiopia Tour.
 *
 * Content in /data and /components references images by KEY only. To swap in
 * the final licensed photography later, edit just the value under key.src, * nothing else in the codebase changes.
 *
 * Most `src` entries now point at the local photo library under /public/images
 * (home /, about / and tours /, organised by place). Keys without a local photo
 * yet still point at Wikimedia Commons (CC-licensed photography). Every key
 * also has a local-branded SVG `fallback` that renders if the image fails
 * (offline review, CDN hiccup) via <SmartImage />.
 */

const wm = (path) => `https://upload.wikimedia.org/wikipedia/commons${path}`;

export const IMAGES = {
  // --- Hero carousel slides (wide, cinematic) ---
  heroSimien: {
    src: '/images/home/mule-ethiopia-tours-simien-mountains.jpg',
    fallback: '/images/art/simien.svg',
  },
  heroLalibela: {
    src: '/images/home/mule-ethiopia-tours-lalibela-bete-giyorgis.jpg',
    fallback: '/images/art/lalibela.svg',
  },
  heroDanakil: {
    src: '/images/home/mule-ethiopia-tours-danakil-dallol-fire.jpg',
    fallback: '/images/art/danakil.svg',
  },
  heroAddis: {
    src: wm(
      '/8/8b/Sunset_on_the_rising_city%2C_Addis_Ababa_-_Flickr_-_jeanotr.jpg'
    ),
    fallback: '/images/art/addis.svg',
  },
  heroBale: {
    src: '/images/gallery/mule-ethiopia-tours-Bale-Sanetti-Plateau.avif',
    fallback: '/images/art/bale.svg',
  },
  heroAxum: {
    src: '/images/gallery/mule-ethiopia-tours-axum.jpg',
    fallback: '/images/art/axum.svg',
  },
  heroHarar: {
    src: '/images/gallery/mule-ethiopia-tours-harrar-feeding-hynea.jpg',
    fallback: '/images/art/harar.svg',
  },
  heroAwash: {
    src: '/images/gallery/mule-ethiopia-tours-awash.jpg',
    fallback: '/images/art/awash.svg',
  },
  heroSimien2: {
    src: '/images/gallery/mule-ethiopia-tours-simien-mountains.jpg',
    fallback: '/images/art/simien.svg',
  },
  // --- Destinations ---
  destSimien: {
    src: '/images/destination/simien/mule-ethiopia-tours-simien-1.jpg',
    fallback: '/images/art/simien.svg',
  },
  destLalibela: {
    src: '/images/destination/lalibela/mule-ethiopia-tours-lalibela-4.jpg',
    fallback: '/images/art/lalibela.svg',
  },
  destGondar: {
    src: '/images/destination/gondar/mule-ethiopia-tours-gondar-3.jpg',
    fallback: '/images/art/gondar.svg',
  },
  destOmo: {
    src: '/images/destination/omo/mule-ethiopia-tours-omo-3.jpg',
    fallback: '/images/art/omo.svg',
  },
  destDanakil: {
    src: '/images/destination/danakil/mule-ethiopia-tours-danakil-1.jpg',
    fallback: '/images/art/danakil.svg',
  },
  destAddis: {
    src: '/images/destination/addis-ababa/mule-ethiopia-tours-addis-ababa-1.jpg',
    fallback: '/images/art/addis.svg',
  },
  destAxum: {
    src: '/images/destination/axum/mule-ethiopia-tours-axum-1.jpg',
    fallback: '/images/art/axum.svg',
  },
  destBale: {
    src: '/images/destination/bale/mule-ethiopia-tours-bale-1.jpg',
    fallback: '/images/art/bale.svg',
  },
  destHarar: {
    src: '/images/destination/harar/mule-ethiopia-tours-harar-1.jpg',
    fallback: '/images/art/harar.svg',
  },

  // --- Supporting photography ---
  whyPhoto: {
    src: '/images/home/mule-ethiopia-tours-danakil-sulfur.jpg',
    fallback: '/images/art/bale.svg',
  },
  aboutPhoto: {
    src: '/images/about/mule-ethiopia-tours-team.jpg',
    fallback: '/images/art/harar.svg',
  },
  lakeTana: {
    src: '/images/home/mule-ethiopia-tours-lake-tana-pelicans.jpg',
    fallback: '/images/art/gondar.svg',
  },
  postDanakil: {
    src: '/images/blog/mule-ethiopia-tours-danakil.jpg',
    fallback: '/images/art/danakil.svg',
  },
  // --- Blog / gallery ---
  postGheralta: {
    src: '/images/blog/mule-ethiopia-tours-gheralta.jpg',
    fallback: '/images/art/simien.svg',
  },
  postCoffee: {
    src: '/images/blog/mule-ethiopia-tours-coffee.jpg',
    fallback: '/images/art/addis.svg',
  },
  postSimien: {
    src: '/images/blog/mule-ethiopia-tours-simien.jpg',
    fallback: '/images/art/simien.svg',
  },
  postLalibela: {
    src: '/images/blog/mule-ethiopia-tours-lalibela.jpg',
    fallback: '/images/art/lalibela.svg',
  },
  postBale: {
    src: '/images/blog/mule-ethiopia-tours-bale.jpg',
    fallback: '/images/art/bale.svg',
  },
  postHarar: {
    src: '/images/blog/mule-ethiopia-tours-harar.jpg',
    fallback: '/images/art/harar.svg',
  },
  postGondar: {
    src: '/images/blog/mule-ethiopia-tours-gondar.jpg',
    fallback: '/images/art/gondar.svg',
  },
  postAxum: {
    src: '/images/blog/mule-ethiopia-tours-axum.jpg',
    fallback: '/images/art/axum.svg',
  },
  postMursi: {
    src: '/images/blog/mule-ethiopia-tours-mursi.jpg',
    fallback: '/images/art/omo.svg',
  },
  postTimket: {
    src: '/images/blog/mule-ethiopia-tours-timket.jpg',
    fallback: '/images/art/lalibela.svg',
  },
  postBirdwatching: {
    src: '/images/blog/mule-ethiopia-tours-birdwatching.jpg',
    fallback: '/images/art/birdwatching.svg',
  },
  postAddisAbaba: {
    src: '/images/blog/mule-ethiopia-tours-addis.jpg',
    fallback: '/images/art/addis.svg',
  },
  postDanakilDepression: {
    src: '/images/blog/mule-ethiopia-tours-danakil-depression.jpg',
    fallback: '/images/art/danakil.svg',
  },
  postHoneyWine: {
    src: '/images/blog/mule-ethiopia-tours-honey-wine.jpg',
    fallback: '/images/art/addis.svg',
  },
  postChurchesofTigay: {
    src: '/images/blog/mule-ethiopia-tours-churchesof-tigay.jpg',
    fallback: '/images/art/addis.svg',
  },
  postSouvenirShoppingInAddis: {
    src: '/images/blog/mule-ethiopia-tours-souvenir-shopping-in-addis.jpg',
    fallback: '/images/art/addis.svg',
  },
  postTravelingEthiopiaWithKids: {
    src: '/images/blog/mule-ethiopia-tours-traveling-ethiopia-with-kids.jpg',
    fallback: '/images/art/addis.svg',
  },
  postAddis: {
    src: '/images/blog/mule-ethiopia-tours-addis-ababa.jpg',
    fallback: '/images/art/addis.svg',
  },
  postOmoCrop: {
    src: '/images/blog/mule-ethiopia-tours-omo-tribe.jpg',
    fallback: '/images/art/omo.svg',
  },
  galleryDanakil: {
    src: '/images/tours/danakil/mule-ethiopia-tours-dallol-3.jpg',
    fallback: '/images/art/danakil.svg',
  },
  galleryMursi: {
    src: '/images/tours/omo/mule-ethiopia-tours-omo-valley-3.jpg',
    fallback: '/images/art/omo.svg',
  },

  // --- People ---
  guidePhoto: {
    src: '/images/about/mule-ethiopia-tours-guide.jpg',
    fallback: '/images/art/addis.svg',
  },
};

export function getImage(key) {
  return IMAGES[key] || { src: null, fallback: '/images/art/generic.svg' };
}

export function getImageGroup(prefix) {
  return Object.keys(IMAGES)
    .filter((k) => k.startsWith(prefix))
    .map((k) => ({ key: k, ...IMAGES[k] }));
}