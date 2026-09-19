/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm cream / sand base
        sand: {
          50: '#FBF8F1',
          100: '#F7F1E5',
          200: '#EFE5D2',
          300: '#E2D3B8',
          400: '#CFB78F',
          500: '#BD9E6B',
        },
        // Terracotta / rust — primary CTA
        clay: {
          300: '#E7A078',
          400: '#D97A4A',
          500: '#C4552D',
          600: '#A63D23',
          700: '#8A3019',
          800: '#6E2512',
        },
        // Deep teal-green — heritage & trust
        forest: {
          100: '#DCE9E4',
          200: '#B5D3C7',
          300: '#7FAE9E',
          400: '#4E8A77',
          500: '#2C6E5E',
          600: '#1D4A3E',
          700: '#14382F',
          800: '#0F2B24',
          900: '#0A211C',
        },
        // Gold accent
        gold: {
          300: '#EFCB82',
          400: '#E3B65B',
          500: '#D9A441',
          600: '#B9822A',
        },
        // Near-black warm ink for text
        ink: '#24211C',
      },
      fontFamily: {
        // Fraunces — confident heritage serif for headlines
        serif: ['var(--font-fraunces)', 'Georgia', 'Cambria', 'serif'],
        // Inter — clean readable body
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      maxWidth: {
        prose: '65ch',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      backgroundImage: {
        'hero-veil': 'linear-gradient(180deg, rgba(20,15,10,0.28) 0%, rgba(20,15,10,0.1) 40%, rgba(20,15,10,0.78) 100%)',
      },
    },
  },
  plugins: [],
};