/**
 * Canonical site origin, resolved for any environment — used by metadata,
 * canonical URLs, robots, sitemap, and Open Graph image resolution.
 *
 * Priority:
 *  1. NEXT_PUBLIC_SITE_URL — set this to your custom domain in Vercel
 *     project settings (e.g. https://hrantkarapetyan.com). Always wins.
 *  2. VERCEL_PROJECT_PRODUCTION_URL — Vercel injects the stable production
 *     domain (e.g. my-portfolio.vercel.app) automatically. Zero-config.
 *  3. http://localhost:3000 — local development fallback.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();
