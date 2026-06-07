// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. Swap `site` to the final custom domain when ready
  // (and drop `base`) — see README.
  site: 'https://aletziz.github.io',
  base: '/APM-security-services',
  // Inline small stylesheets for faster first paint on a single-page site.
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
