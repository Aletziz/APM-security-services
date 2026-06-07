// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Production domain — used for canonical URLs, sitemap and Open Graph.
  site: 'https://apmsecurityservices.com',
  integrations: [sitemap()],
  // Inline small stylesheets for faster first paint on a single-page site.
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
