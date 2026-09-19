/**
 * UI icon paths (24×24 stroke-style, currentColor).
 */
export const uiPaths = {
  star: (
    <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.6 1.1 6.5-5.8-3.05L6.2 20.45l1.1-6.5L2.6 9.35l6.5-.95L12 2.5z" fill="currentColor" />
  ),
  check: (
    <path d="M5 12.5l4.2 4.2L19 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  ),
  x: (
    <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  ),
  cross: (
    <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
  ),
  'arrow-right': (
    <path d="M4 12h15m0 0-6-6m6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  'arrow-up-right': (
    <path d="M7 17L17 7m0 0H8m9 0v9" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
  ),
  'chevron-down': (
    <path d="M6 9.5l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
  ),
  'chevron-left': (
    <path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
  ),
  'chevron-right': (
    <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
  ),
  clock: (
    <g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </g>
  ),
  calendar: (
    <g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 10h17M8 2.8v4M16 2.8v4" />
    </g>
  ),
  users: (
    <g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8.5" r="3.4" />
      <path d="M3.4 20c.6-3.4 2.9-5.2 5.6-5.2s5 1.8 5.6 5.2M15.6 5.4a3.4 3.4 0 010 6.2M17.2 15c1.8.7 3 2.3 3.5 4.6" />
    </g>
  ),
  'map-pin': (
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-5.6-7-11a7 7 0 0114 0c0 5.4-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </g>
  ),
  phone: (
    <path d="M5.5 3.5h3l1.6 4-2 1.5a12.6 12.6 0 006.4 6.4l1.5-2 4 1.6v3a2 2 0 01-2.2 2A17.4 17.4 0 013.5 5.7a2 2 0 012-2.2z" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
  ),
  mail: (
    <g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="M4.5 7.5l7.5 5.5 7.5-5.5" />
    </g>
  ),
  globe: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8.7" />
      <ellipse cx="12" cy="12" rx="3.8" ry="8.7" />
      <path d="M3.4 12h17.2M4.5 7.5h15M4.5 16.5h15" />
    </g>
  ),
  search: (
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="10.8" cy="10.8" r="6.6" />
      <path d="M20 20l-4.7-4.7" />
    </g>
  ),
  shield: (
    <g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 2.7v5.2c0 4.6-3 8-7 9.8-4-1.8-7-5.2-7-9.8V5.7L12 3z" />
      <path d="M8.8 11.8l2.3 2.3 4.3-4.5" />
    </g>
  ),
  heart: (
    <path d="M12 20.5S4 15 4 9.2A4.4 4.4 0 018.5 4.8 5 5 0 0112 7a5 5 0 013.5-2.2A4.4 4.4 0 0120 9.2c0 5.8-8 11.3-8 11.3z" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
  ),
  leaf: (
    <g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 4C11 4 5.5 8 4.5 13.5 3.8 17 6 20.4 10.5 20.4c5 0 9-4 9.5-9.6V4z" />
      <path d="M4.8 19.2C8.5 13.5 13 9.6 19 7" />
    </g>
  ),
  price: (
    <g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 16.4v-9M8.7 10h6.6c0 2.2-3.3 2.2-3.3 2.2s-3.3 0-3.3 2.2h6.6" />
    </g>
  ),
  headset: (
    <g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
      <path d="M4.5 14v-2.5a7.5 7.5 0 0115 0V14" />
      <rect x="3.5" y="13.5" width="4" height="6" rx="2" />
      <rect x="16.5" y="13.5" width="4" height="6" rx="2" />
    </g>
  ),
  sun: (
    <g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.3 5.3l1.7 1.7M17 17l1.7 1.7M18.7 5.3L17 7M7 17l-1.7 1.7" />
    </g>
  ),
  mountain: (
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 19L9.5 6.5 14 15l2.2-3.6L21 19H3z" />
    </g>
  ),
  flame: (
    <g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round">
      <path d="M12 2.8S6.8 7.2 6.8 12.4a5.2 5.2 0 0010.4 0c0-2-.9-3.8-1.8-5.4-.7 1.2-1.8 2-2.6 2.6C13.6 6.8 12 4.8 12 2.8z" />
      <path d="M12 20.6c2.5 0 4.2-1.6 4.2-3.8 0-1.4-.6-2.6-1.3-3.7-.3.7-1 1.4-1.6 1.8-.4-2.2-1.4-3.6-1.3-6.3-2 1.4-3.2 4-3.2 6.4 0 2.1 1.6 3.6 3.2 3.6z" />
    </g>
  ),
  sparkles: (
    <g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4l1.6 3.9L17.5 9.5l-3.9 1.6L12 15l-1.6-3.9L6.5 9.5l3.9-1.6L12 4z" />
      <path d="M18.5 14.5l.8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8.8-1.9z" />
    </g>
  ),
  'dash-line': (
    <path d="M4 9c3 3 6 3 9 0s6-3 9 0M4 15c3 3 6 3 9 0s6-3 9 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  ),
  camera: (
    <g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
      <circle cx="12" cy="13" r="4" />
    </g>
  ),
  sparkle: (
    <g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4l1.6 3.9L17.5 9.5l-3.9 1.6L12 15l-1.6-3.9L6.5 9.5l3.9-1.6L12 4z" />
      <path d="M18.5 14.5l.8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8.8-1.9z" />
    </g>
  ),
  zap: (
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  'shield-check': (
    <g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 2.7v5.2c0 4.6-3 8-7 9.8-4-1.8-7-5.2-7-9.8V5.7L12 3z" />
      <path d="M8.8 11.8l2.3 2.3 4.3-4.5" />
    </g>
  ),
  'arrow-down': (
    <path d="M12 4v15m0 0l-6-6m6 6l6-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  ),
};