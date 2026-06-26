# Hrant Karapetyan — Portfolio

A premium personal portfolio for **Hrant Karapetyan**, Full-Stack Software Engineer
(with a UI/UX design background). Built as a fast, accessible, SEO-friendly single page
with editorial typography, smooth scrolling, and tasteful motion.

## Stack

- **Next.js 15** (App Router) + **React 19** — statically rendered, ~166 kB first load
- **TypeScript**
- **Tailwind CSS** — custom design tokens (`ink` / `bone` / `lime` palette)
- **Motion** (Framer Motion) — scroll reveals, kinetic hero, micro-interactions
- **Lenis** — inertial smooth scrolling (auto-disabled for `prefers-reduced-motion`)
- Fonts: **Fraunces** (serif display), **Inter** (UI), **JetBrains Mono** (labels)

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production

```bash
npm run build
npm run start
```

## Deploy to Vercel

This is a standard Next.js App Router app — Vercel deploys it with zero config.

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In [Vercel](https://vercel.com/new), **Import** the repo. Framework preset
   (Next.js), build command (`next build`), and output are detected
   automatically — just click **Deploy**.
3. The site URL is resolved automatically from Vercel's
   `VERCEL_PROJECT_PRODUCTION_URL`, so canonical links, the sitemap, robots,
   and Open Graph images all point at the live `*.vercel.app` domain out of
   the box — no edits needed.

**Custom domain:** add it under *Project → Settings → Domains*, then set the
environment variable `NEXT_PUBLIC_SITE_URL` to that domain (e.g.
`https://hrantkarapetyan.com`) and redeploy. See [`.env.example`](.env.example).

Security headers (HSTS, `X-Content-Type-Options`, `X-Frame-Options`,
`Referrer-Policy`, `Permissions-Policy`) are applied via `next.config.mjs`.

## Structure

```
src/
  app/
    layout.tsx          # fonts, SEO metadata, JSON-LD
    page.tsx            # section composition
    globals.css         # design system / utilities
    icon.tsx            # generated favicon
    opengraph-image.tsx # generated 1200×630 social card
    robots.ts / sitemap.ts
  components/
    Nav, SmoothScroll, Cursor, Magnetic, Reveal, Marquee, SectionHeading
    sections/  Hero · About · Work · Capabilities · Path · Contact
  data/
    content.ts          # single source of truth for all copy
public/
  images/portrait.jpeg
  hrant-karapetyan-cv.pdf
```

## Editing content

All copy, experience, skills, education, and contact details live in
[`src/data/content.ts`](src/data/content.ts). Update that one file to change the site.

> The site URL is environment-driven (see [Deploy to Vercel](#deploy-to-vercel)) —
> nothing to hardcode. Social links point to the real
> [GitHub](https://github.com/Hrant13k),
> [LinkedIn](https://www.linkedin.com/in/hrantk13/), and
> [Behance](https://www.behance.net/hrantk13) profiles.

## Accessibility & SEO

- Semantic landmarks, keyboard-navigable, visible focus rings
- Honors `prefers-reduced-motion` (disables smooth scroll + animations)
- Open Graph + Twitter cards, JSON-LD `Person` schema, sitemap & robots
