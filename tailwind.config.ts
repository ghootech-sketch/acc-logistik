import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#D32F2F',
          yellow: '#F9A825',
          dark: '#1A1A1A',
          cream: '#FFFDE7',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
