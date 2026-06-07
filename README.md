# APM Security Services - Landing Page

Fast, single-page landing site for APM Security Services, a Florida-based security
company. Built with [Astro](https://astro.build) for near-instant loads (static HTML,
self-hosted fonts, ~5 KB of JS gzipped).

## Highlights

- **Bilingual** - English by default (rendered statically for SEO + speed), one-tap
  toggle to Spanish. All copy lives in [`src/i18n/translations.js`](src/i18n/translations.js).
- **WhatsApp quote form** - the contact form builds a fully formatted message with the
  client's details and opens WhatsApp pre-filled to **+1 561 808-5917**. There is also a
  direct call button (`tel:`), a WhatsApp link, and an email (`apmsservice@yahoo.com`).
- **Custom, non-generic design** - sober corporate navy + brass palette, *Space Grotesk*
  display type, hard square corners everywhere (no border-radius), editorial section
  numbering and hairline rules.
- **Reveal-on-scroll** animations via `IntersectionObserver` (respects
  `prefers-reduced-motion`).

## Content covered

- **Services:** Security Guard | Vehicle Patrol | Custom Protection Officers
- **Coverage:** West Palm Beach | Broward | Miami | Orlando (Florida)

## Commands

```bash
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build
npm run gen:assets  # regenerate favicons + og-image from the logo/hero
```

## Editing key things

| What | Where |
| --- | --- |
| All text (EN/ES) | `src/i18n/translations.js` |
| Phone / email | `PHONE_*` and `EMAIL` in `src/i18n/translations.js` |
| Colors / fonts / spacing | `:root` in `src/styles/global.css` |
| Sections | `src/components/*.astro`, assembled in `src/pages/index.astro` |

## Deploy - Vercel

Production domain: **https://apmsecurityservice.com**

The project is configured for Vercel (static output, auto-detected Astro framework -
see [`vercel.json`](vercel.json)). To deploy:

1. Push this repo to GitHub (already at `Aletziz/APM-security-services`).
2. In Vercel: **Add New -> Project -> Import** the repo. Vercel auto-detects Astro
   (build `astro build`, output `dist`). Click **Deploy**.
3. **Project -> Settings -> Domains** -> add `apmsecurityservice.com` and `www.apmsecurityservice.com`,
   then set the DNS records Vercel shows at your domain registrar.

Every push to `main` then redeploys automatically. No GitHub Actions needed.

> The full step-by-step (domain DNS + Google) is in
> [`GOOGLE-SEO-GUIDE.md`](GOOGLE-SEO-GUIDE.md).

## SEO

- `site` is set to the production domain in [`astro.config.mjs`](astro.config.mjs); it
  drives canonical URLs, the sitemap and Open Graph.
- Auto-generated **sitemap** (`/sitemap-index.xml`) via `@astrojs/sitemap`, referenced
  from [`public/robots.txt`](public/robots.txt).
- Rich `<head>`: title, description, keywords, canonical, Open Graph + Twitter cards,
  geo meta, and **LocalBusiness/SecurityService structured data** (JSON-LD) with services
  and the four service areas - see [`src/layouts/Layout.astro`](src/layouts/Layout.astro).
- Favicons & social image are generated from the logo/hero by
  [`scripts/gen-assets.mjs`](scripts/gen-assets.mjs): `npm run gen:assets`
  (outputs favicon PNGs, apple-touch-icon, PWA icons, and `og-image.jpg`).
