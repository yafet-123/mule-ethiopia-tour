/**
 * "Choose Your Travel Style" categories, icon names map to <Icon /> glyphs.
 * `image` powers the photo tiles on the homepage bento grid; `featured`
 * marks the 2×2 hero card and `wide` the double-width card.
 */

export const CATEGORIES = [
  {
    slug: 'city-tours',
    label: 'City Tours',
    icon: 'city',
    blurb: 'Merkato, museums & coffee',
    image: '/images/tours/gondar/mule-ethiopia-tours-gondar-castles-5.jpg',
  },
  {
    slug: 'day-trips',
    label: 'Day Trips',
    icon: 'boat',
    blurb: 'Lake Tana monasteries & more',
    image: '/images/home/mule-ethiopia-tours-lake-tana.jpg',
  },
  {
    slug: 'historical',
    label: 'Historical Tours',
    icon: 'church',
    blurb: 'Rock churches, castles & stelae',
    image: '/images/tours/lalibela/mule-ethiopia-tours-rock-church-1.jpg',
    featured: true,
  },
  {
    slug: 'cultural',
    label: 'Cultural Tours',
    icon: 'culture',
    blurb: 'Living cultures of the south',
    image: '/images/tours/omo/mule-ethiopia-tours-omo-valley-10.jpg',
  },
  {
    slug: 'trekking',
    label: 'Hiking & Trekking',
    icon: 'trek',
    blurb: "Africa's rooftop on foot",
    image: '/images/tours/simien/mule-ethiopia-tours-simien-trek-1.jpg',
  },
  {
    slug: 'festival',
    label: 'Festival Tours',
    icon: 'festival',
    blurb: 'Timket, Meskel & Genna',
    image: '/images/tours/lalibela/mule-ethiopia-tours-timket-1.jpg',
  },
  {
    slug: 'wildlife',
    label: 'Wildlife & Safari',
    icon: 'ibex',
    blurb: 'Wolves, geladas & birding',
    image: '/images/tours/bale/mule-ethiopia-tours-bale-1.jpg',
  },
  {
    slug: 'adventure',
    label: 'Adventure & Volcano',
    icon: 'flame',
    blurb: 'Ertale lava & Dallol springs',
    image: '/images/tours/danakil/mule-ethiopia-tours-dallol-4.jpg',
    wide: true,
  },
];

export function getCategory(slug) {
  return CATEGORIES.find((c) => c.slug === slug) || null;
}