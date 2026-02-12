// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'static', // Use 'hybrid' or 'server' if you need SSR features
  adapter: cloudflare({
    mode: 'directory', // Uses _worker.js directory mode for CF Pages
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
