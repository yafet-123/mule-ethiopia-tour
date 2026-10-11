/**
 * Global site constants for Mule Ethiopia Tour.
 * Change company contact details in ONE place, the rest of the site reads
 * from here (and from /data* modules for structured content).
 */

export const SITE = {
  name: 'Mule Ethiopia Tour',
  shortName: 'Mule Ethiopia',
  tagline: 'Walk Through Ten Thousand Years of History',
  description:
    'Mule Ethiopia Tour is a licensed, locally-owned Ethiopian tour operator. Authentic trekking, historical circuits, cultural journeys and Danakil expeditions, led by local guides who know the country by heart.',
  url: 'https://www.muleethiopiatour.com',
  phone: '+251 96 685 5894',
  phoneHref: 'tel:+251966855894',
  phoneUk: '+44 7526 130031',
  phoneUkHref: 'tel:+447526130031',
  // WhatsApp click-to-chat link (wa.me with country code, no +).
  whatsapp:
    'https://wa.me/251966855894?text=Hello%20Mule%20Ethiopia%20Tour!%20I%27d%20like%20to%20plan%20a%20trip.',
  email: 'eshetiemulugeta4@gmail.com',
  inquiryRecipient: 'eshetiemulugeta4@gmail.com',
  address: '4 Killo, in front of Birhana Selam, Kidus Plaza 3rd floor, Addis Ababa, Ethiopia',
  hours: 'Mon to Sat · 8:00 to 18:30 EAT',
  established: 2009,
  social: {
    facebook: 'https://facebook.com/muleethiopiatour',
    instagram: 'https://instagram.com/muleethiopiatour',
    tiktok: 'https://tiktok.com/@muleethiopiatour',
    youtube: 'https://youtube.com/@muleethiopiatour',
  },
};

export const NAV_LINKS = [
  { label: 'Tours', href: '/tours' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const STATS = [
  { value: '4,800+', label: 'Happy travelers' },
  { value: '4.9/5', label: 'TripAdvisor rating' },
  { value: '100%', label: 'Local Ethiopian guides' },
];