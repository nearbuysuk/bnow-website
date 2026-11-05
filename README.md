# BNow Website

Static website for **BNow** — a location-based mobile discovery and reservation platform for local retailers and service providers.

## Features

- **Retailer-First Brochureware:** Clear overview of how brick-and-mortar shops list inventory and services for local map discovery and in-store reservations.
- **Markdown-Driven Legal Hub:** Edit Privacy Policy, Terms of Service, and Retailer Terms in plain Markdown (`src/content/legals/*.md`).
- **Zero Client-Side JavaScript:** Compiles to pure, semantic HTML and modern CSS for instant loads and maximum cross-browser compatibility.
- **GitHub Pages Ready:** Includes `.github/workflows/deploy.yml` and automatic base-path handling.

## Common Updates

- **Site copy, emails & explainer steps:** Edit `src/config/site.ts`
- **Brand colors & typography tokens:** Edit `src/styles/tokens.css`
- **Legal documents:** Edit or add Markdown files in `src/content/legals/`
- **Agent instructions:** See [`AGENTS.md`](./AGENTS.md)

## Commands

```bash
# Install dependencies
npm install

# Run local dev server (http://localhost:4321)
npm run dev

# Build static production files into dist/
npm run build

# Preview production build locally
npm run preview
```

