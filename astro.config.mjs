import { defineConfig } from 'astro/config';

// Supports both root domain deployment (e.g., https://bnow.app) and
// GitHub Pages repository subpath deployment (e.g., https://username.github.io/bnow-website)
// Automatically configured via GITHUB_REPOSITORY / SITE_URL in GitHub Actions if not overridden.
const site = process.env.SITE_URL || 'https://bnow.example.com';
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

