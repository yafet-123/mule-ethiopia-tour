# Mule Ethiopia Tour — Website

Modern, responsive tour & travel website for **Mule Ethiopia Tour**, built with
**Next.js (Pages Router) + Tailwind CSS + Framer Motion**, with an optional
lightweight **three.js (react-three-fiber)** destination globe.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Tech notes

- **Pages Router only** — no `/src`; `pages/`, `components/`, `styles/`,
  `data/`, `lib/` and `public/` live at the project root.
- **Tailwind CSS** custom theme (`tailwind.config.js`) — terracotta `clay`,
  deep `forest` green, warm `sand` cream, near-black `ink`, `gold` accent.
  Fonts: **Fraunces** (headlines) + **Inter** (body) via `next/font`.
- **Framer Motion** powers scroll-reveals (`components/Reveal.jsx`), the
  parallax hero, cursor-following 3D tilt (`components/Tilt.jsx`) and the
  testimonial carousel.
- **Interactive Ethiopia map** (`components/home/WhereWeTravel.jsx`) is a pure
  SVG map (real ADM1 region boundaries from `data/ethiopia-map.js`, generated
  by `scripts/build-ethiopia-map.mjs`). Tapping a pin or legend name zooms the
  map to that place.

## Where content lives

Everything is data-driven so a future CMS/JSON can drop in unchanged:

| File                         | Content                          |
| ---------------------------- | -------------------------------- |
| `data/tours.js`              | Tours (price, itinerary, tags…)  |
| `data/destinations.js`       | Destination tiles & coordinates  |
| `data/categories.js`         | “Choose Your Travel Style” strip |
| `data/testimonials.js`       | Reviews                          |
| `data/posts.js`              | Blog / travel-tips teasers       |
| `data/faqs.js`               | FAQ accordion                    |
| `data/partners.js`           | Partner logo strip               |
| `data/images.js`             | **Central image registry**       |

Swap in final licensed photography by editing just the `src` under a key in
`data/images.js` — components reference image keys only.
`components/SmartImage.jsx` automatically falls back to the branded
placeholder art in `public/images/art/` if a remote image fails.

Company details (phone, WhatsApp link, email, address, socials) live in
`lib/config.js` and are read site-wide.

## What’s next (2nd build pass)

- **Tours listing** — live filters (destination, category, price, duration) +
  pagination (stub ready at `/tours`)
- **Tour detail pages** — gallery, day-by-day itinerary, inclusions, sticky
  inquire card, related tours (data already modelled in `data/tours.js`)
- **Destinations** — full pages with maps
- **About / team** — story, values and team cards
- **Contact** — finishing touches + wire `/api/inquiry` to an email provider
  (Resend or Formspree — user choice)
- **Gallery** — masonry + lightbox + filters
- Wire the footer newsletter to your provider

## Styles & structure

`styles/globals.css` defines the design tokens, reusable component classes
(`.container-x`, `.btn`, `.btn-primary`, `.glass-card`, `.field`, depth
shadows) and keyframe animations (ken-burns, floaty, marquee, ping).
Section components live in `components/home/`; shared UI in `components/`.

> Imagery in this pass: CC-licensed Wikimedia Commons photography of the real
> destinations (stable CDN) + original brand-toned SVG art placeholders.