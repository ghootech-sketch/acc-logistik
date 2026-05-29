import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#F9A825',
          'yellow-light': '#FDD835',
          red: '#D32F2F',
          dark: '#1A1A1A',
          black: '#111111',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(0,0,0,0.08)',
        yellow: '0 8px 30px rgba(249,168,37,0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
