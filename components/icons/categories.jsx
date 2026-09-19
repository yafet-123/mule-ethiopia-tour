/**
 * Travel-style category glyphs (24×24, stroke style, currentColor).
 */

const glyphs = {
  city: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21V8l6-4v9m0 8V9M3 21h18M17 21v-9h-2m-4 9V14m-3 7v-3" />
    </g>
  ),
  church: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v4m-2 0h4v3l4 3v8H6v-8l4-3V7z" />
      <path d="M9.5 21v-4.5a2.5 2.5 0 015 0V21" />
    </g>
  ),
  culture: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="14" r="6.5" />
      <path d="M4 6.5h16M7 3.5h10M6 14c0-4 3-6.5 6-6.5s6 2.5 6 6.5" />
    </g>
  ),
  trek: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 20L9 6.5 13.5 14l2-3.4L21 20H3z" />
      <path d="M12 3.5c2.4 0 4.6 1.7 4.6 4.6 0 .6-.2 1.2-.5 1.6-.6-.4-1-1-1-1.7 0-1.7-1.1-2.9-3.1-2.9z" fill="currentColor" stroke="none" />
    </g>
  ),
  boat: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 16l8-3 8 3v2H4v-2z" />
      <path d="M12 6v7M8 6h8" />
      <path d="M5.5 20.5c2 1.2 4 1.2 6 0s4-1.2 6 0" />
    </g>
  ),
  festival: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 21h16M6 21v-7c1.2-2 3.4-2 4 0 1.2-2 3.4-2 4 0 1.2-2 3.4-2 4 0v7" />
      <path d="M12 3v4" />
    </g>
  ),
  ibex: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9.5" cy="19" r="3.2" />
      <circle cx="14.5" cy="19" r="2.6" />
      <path d="M12 10c-2.8 0-4.6-2-5-5.5 0 1.8-1 2.8-2.4 2.6L6 9M12 10c2.8 0 4.6-2 5-5.5 0 1.8 1 2.8 2.4 2.6L18 9" />
      <path d="M12 10v5m0 0c0 1.6 1 2.4 2.5 2.4M12 15c0 1.6-1 2.4-2.5 2.4" />
    </g>
  ),
};

export default function CategoryGlyph({ name, size = 24, className = '' }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
      {glyphs[name] || glyphs.trek}
    </svg>
  );
}