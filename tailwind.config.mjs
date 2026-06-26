/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0a1628',
          blue: '#1e40af',
          light: '#3b82f6',
          accent: '#60a5fa',
          glow: '#93c5fd',
        },
      },
    },
  },
  plugins: [],
};
