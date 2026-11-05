# AGENTS.md — Guide for AI Agents & Maintainers

This repository contains the static brochureware and legal documentation website for **NBuy**, built with **Astro** (`output: 'static'`) for deployment on **GitHub Pages**.

It is designed for **zero client-side JavaScript overhead**, instant page loads, high cross-browser compatibility, and effortless editing by both humans and AI agents.

---

## Quick File Map

| Task | File(s) to Edit |
| :--- | :--- |
| **Update Brand Name, Tagline, Hero Copy, or Contact Emails** | `src/config/site.ts` |
| **Update Explainer Steps ("How It Works") or Retailer Benefits** | `src/config/site.ts` |
| **Change Brand Colors, Fonts, Dark Mode, or Spacing Tokens** | `src/styles/tokens.css` |
| **Edit an Existing Legal Document** | `src/content/legals/*.md` |
| **Add a New Legal Document** | Create a new `.md` file in `src/content/legals/` (it automatically appears on `/legals/` and gets its own route) |
| **Modify Landing Page Structure or Visual Mockups** | `src/pages/index.astro` |
| **Modify Shared Header / Footer / SEO Meta Tags** | `src/layouts/BaseLayout.astro` |

---

## How to Edit Legal Documents (`src/content/legals/*.md`)

All legal policies use Astro Content Collections validated by `src/content.config.ts`. To edit or create a legal document, include the required YAML frontmatter at the top of the `.md` file:

```markdown
---
title: "Cookie & Local Storage Policy"
shortTitle: "Cookie Policy"
summary: "How NBuy uses strictly necessary storage on web and mobile."
effectiveDate: "November 5, 2026"
lastUpdated: "November 5, 2026"
order: 4
audience: "All Users" # Allowed: "All Users" | "Consumers & Retailers" | "Retail Partners"
---

## 1. Introduction
Write standard GitHub-Flavored Markdown here...
```

No route registration is required—`src/pages/legals/index.astro` and `src/pages/legals/[slug].astro` automatically discover and render every `.md` file in `src/content/legals/`.

---

## Architectural Guardrails for Agents

1. **Zero Client JS by Default:** Keep pages purely static HTML + CSS unless an interactive requirement cannot be achieved natively with HTML/CSS (e.g., `<details>`/`<summary>`, CSS Grid/Flexbox).
2. **Use Design Tokens:** Always reference variables from `src/styles/tokens.css` (e.g., `var(--color-brand-primary)`, `var(--color-surface-card)`) rather than hardcoding hex colors in components.
3. **Subpath Safe Links:** Because GitHub Pages may host the site at either a root domain (`/`) or a repository subpath (`/nbuy-website/`), internal navigation links use the helper in `src/utils/paths.ts` (`withBase('/legals/')`).
4. **Build Verification:** Always run `npm run build` after changes to verify TypeScript, Astro templates, and Content Collection schemas compile with zero errors.

