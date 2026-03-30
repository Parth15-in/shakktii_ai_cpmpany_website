import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-deep': '#0F2A44',
        'blue-mid': '#1A3A5C',
        'blue-soft': '#325C91',
        gold: '#C9A44D',
        'gold-light': '#D4B96A',
        'text-dark': '#1C2B38',
        'text-mid': '#2C3E50',
        'text-secondary': '#6B7C8C',
        border: '#D8E4F0',
        bg: '#F0F4F8',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
