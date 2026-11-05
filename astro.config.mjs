import { defineConfig } from 'astro/config';

// Configured for custom subdomain https://nbuy.ourtech.app on GitHub Pages.
// Explicitly setting `site` and `base: '/'` ensures `withastro/action` builds
// for the root of the custom subdomain rather than a repository subpath.
const site = process.env.SITE_URL || 'https://nbuy.ourtech.app';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  compressHTML: true,
  build: {
    format: 'directory',
  },
});
