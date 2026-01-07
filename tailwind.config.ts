import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        solon: {
          primary: '#3B82F6', // Trustworthy Blue
          dark: '#0B0F19',
          slate: '#141824',
          accent: '#E5E7EB' // Clean Accent
        }
      }
    },
  },
  plugins: [],
};

export default config;

