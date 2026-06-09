// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// `site` is the canonical URL — used for sitemap, canonical tags, and
// Open Graph absolute URLs. Hosted free on GitHub Pages as the user site
// (abiodunraji.github.io → served at the root, so base stays '/'). When
// biodunraji.com is bought: set `site` to it + drop public/CNAME with the
// domain, and Pages serves the same build on the custom domain.
// base stays '/' (user-page deploy at root, not a project subpath).
export default defineConfig({
  site: 'https://abiodunraji.github.io',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
