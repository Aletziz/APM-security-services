// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://apmsecurityservices.com',
  // Inline small stylesheets for faster first paint on a single-page site.
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
