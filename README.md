# APM Security Services — Landing Page

Fast, single-page landing site for APM Security Services, a Florida-based security
company. Built with [Astro](https://astro.build) for near-instant loads (static HTML,
self-hosted fonts, ~5 KB of JS gzipped).

## Highlights

- **Bilingual** — English by default (rendered statically for SEO + speed), one-tap
  toggle to Spanish. All copy lives in [`src/i18n/translations.js`](src/i18n/translations.js).
- **WhatsApp quote form** — the contact form builds a fully formatted message with the
  client's details and opens WhatsApp pre-filled to **+1 561 808-5917**. There is also a
  direct call button (`tel:`) and a direct WhatsApp link.
- **Custom, non-generic design** — sober corporate navy + brass palette, *Space Grotesk*
  display type, hard square corners everywhere (no border-radius), editorial section
  numbering and hairline rules.
- **Reveal-on-scroll** animations via `IntersectionObserver` (respects
  `prefers-reduced-motion`).

## Content covered

- **Services:** Security Guard · Vehicle Patrol · Custom Protection Officers
- **Coverage:** West Palm Beach · Broward · Miami · Orlando (Florida)

## Commands

```bash
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build
```

## Editing key things

| What | Where |
| --- | --- |
| All text (EN/ES) | `src/i18n/translations.js` |
| Phone number | `PHONE_DISPLAY`, `PHONE_TEL`, `PHONE_WA` in `src/i18n/translations.js` |
| Colors / fonts / spacing | `:root` in `src/styles/global.css` |
| Sections | `src/components/*.astro`, assembled in `src/pages/index.astro` |

## Deploy

The output in `./dist` is fully static — host it on any static host (Netlify, Vercel,
Cloudflare Pages, GitHub Pages, S3, etc.). Update `site` in `astro.config.mjs` to the
final domain for correct canonical/OG URLs.
