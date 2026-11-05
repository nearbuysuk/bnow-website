/**
 * Prepends Astro's configured `BASE_URL` so internal links work seamlessly
 * whether deployed to a custom root domain (`/`) or a GitHub Pages repository subpath (`/bnow-website/`).
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!path.startsWith('/')) {
    return `${base}/${path}`;
  }
  return `${base}${path}` || '/';
}

