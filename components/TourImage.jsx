import { useState } from 'react';
import Image from 'next/image';

/**
 * Brand-toned placeholder art matched by tour-title keywords.
 * Used whenever a real photo (e.g. /Tours/Danakil2.jpg) is missing or fails.
 */
const ART_RULES = [
  { re: /lalibela/i, art: '/images/art/lalibela.svg' },
  { re: /danakil|dallol|erta ale|afdera|semera|depression/i, art: '/images/art/danakil.svg' },
  { re: /omo|mursi|hamer|hama?r|karo|dorze|konso|dassenech|dasenech|tribal/i, art: '/images/art/omo.svg' },
  { re: /simien/i, art: '/images/art/simien.svg' },
  { re: /tigray|axum|gheralta|gerealta|mekelle|wukro|hawzen|monaster|church/i, art: '/images/art/axum.svg' },
  { re: /gondar|bahir dar|tana|blue nile/i, art: '/images/art/gondar.svg' },
  { re: /bale|sanetti|harrena/i, art: '/images/art/bale.svg' },
  { re: /harar|dire dawa|babile/i, art: '/images/art/harar.svg' },
  { re: /coffee|jimma|bonga|bebeka|kaffa|yirga/i, art: '/images/art/culture.svg' },
  { re: /addis|city|excursion/i, art: '/images/art/addis.svg' },
];

export function artForTour(title = '') {
  const rule = ART_RULES.find((r) => r.re.test(title)) || { art: '/images/art/generic.svg' };
  return rule.art;
}

/**
 * <TourImage />, next/image wrapper for direct asset paths (e.g. /Tours/x.jpg).
 * Gracefully falls back to branded placeholder art if the file is missing,
 * while still using Next's native image optimization when the photo exists.
 */
export default function TourImage({
  src,
  alt = '',
  title = '',
  fill = false,
  priority = false,
  sizes,
  quality = 90,
  className = '',
  ...rest
}) {
  const fallback = artForTour(title);
  const [useFallback, setUseFallback] = useState(!src);

  return (
    <Image
      src={useFallback ? fallback : src}
      alt={alt}
      fill={fill}
      priority={priority}
      sizes={sizes}
      quality={quality}
      className={className}
      onError={() => {
        if (!useFallback) setUseFallback(true);
      }}
      {...rest}
    />
  );
}