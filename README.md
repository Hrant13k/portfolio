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

> **Before deploying:** set your production domain in `layout.tsx`, `robots.ts`, and
> `sitemap.ts` (currently a placeholder). Social links point to the real
> [GitHub](https://github.com/Hrant13k) and
> [LinkedIn](https://www.linkedin.com/in/hrantk13/) profiles.

## Accessibility & SEO

- Semantic landmarks, keyboard-navigable, visible focus rings
- Honors `prefers-reduced-motion` (disables smooth scroll + animations)
- Open Graph + Twitter cards, JSON-LD `Person` schema, sitemap & robots
