/**
 * Testimonials, placeholder client reviews (replace with real reviews later).
 */

export const TESTIMONIALS = [
  {
    name: 'Sarah K.',
    from: 'United Kingdom',
    tour: 'Simien Mountains Trek',
    rating: 5,
    quote:
      'The star of our trip was the Simien trek, impossible views, geladas everywhere, and our guide counted every step we couldn\u2019t believe. Flawless logistics from the airport kiss to the farewell coffee.',
  },
  {
    name: 'Marc & Elena',
    from: 'France',
    tour: 'Danakil Depression Expedition',
    rating: 5,
    quote:
      'Sleeping above the lava lake of Ertale is the single most surreal thing I\u2019ve ever done. Mule Ethiopia ran a military-grade operation, water, scouts, tents, safety first, but still feeling like an adventure.',
  },
  {
    name: 'Jonas R.',
    from: 'Germany',
    tour: 'Omo Valley Cultural Tour',
    rating: 5,
    quote:
      'Most operators just drop you off in villages. Mule\u2019s guides actually belong here, the Hamer elders greeted them like family, and we got to witness a bull-jumping ceremony by invitation, not by ticket.',
  },
  {
    name: 'Amelia T.',
    from: 'United States',
    tour: 'Lalibela & the Northern Circuit',
    rating: 5,
    quote:
      'Knowledgeable, warm and constantly giving. We visited Bete Giyorgis at dawn before anyone else, met the priest who was carving crosses, and left Lalibela feeling we understood it. Worth every dollar.',
  },
  {
    name: 'Yuki H.',
    from: 'Japan',
    tour: 'Addis Ababa City Day Tour',
    rating: 5,
    quote:
      'A perfect one-day introduction to Ethiopia. Coffee ceremony on Entoto, spices at Merkato, and stories about every street corner. Our guide even helped me book onward train tickets, above and beyond.',
  },
];

export function groupTestimonials(perGroup = 3) {
  const groups = [];
  for (let i = 0; i < TESTIMONIALS.length; i += perGroup) {
    groups.push(TESTIMONIALS.slice(i, i + perGroup));
  }
  return groups;
}