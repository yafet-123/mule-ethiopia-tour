import { useState } from 'react';
import Image from 'next/image';
import { getImage } from '@/data/images';

/**
 * <SmartImage />, next/image wrapper that gracefully falls back to a
 * local branded-art placeholder if a remote image fails to load.
 *
 * Usage (fill layout, e.g. inside an aspect-ratio or absolutely-positioned box):
 *   <SmartImage imageKey="destSimien" alt="..." fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
 */

export default function SmartImage({
  imageKey,
  alt = '',
  fill = false,
  priority = false,
  sizes,
  quality = 90,
  className = '',
  ...rest
}) {
  const { src, fallback } = getImage(imageKey);
  const [fallingBack, setFallingBack] = useState(false);

  const isLocal = src && src.startsWith('/');

  // Local art never fails, render it straight away.
  if (isLocal || !src) {
    return (
      <Image
        src={src || fallback}
        alt={alt}
        fill={fill}
        priority={priority}
        sizes={sizes}
        quality={quality}
        className={className}
        {...rest}
      />
    );
  }

  return (
    <Image
      key={fallingBack ? 'fb' : 'remote'}
      src={fallingBack ? fallback : src}
      alt={alt}
      fill={fill}
      priority={priority}
      sizes={sizes}
      quality={quality}
      className={className}
      onError={() => !fallingBack && setFallingBack(true)}
      {...rest}
    />
  );
}