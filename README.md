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

## Deploy — GitHub Pages

**Live:** https://aletziz.github.io/APM-security-services/

The site is published to the **`gh-pages` branch** and served by GitHub Pages.
Redeploy after any change with:

```bash
npm run deploy   # builds, then force-pushes ./dist to the gh-pages branch
```

### Note on GitHub Actions
A workflow exists at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) for
automatic deploys on push. It currently **cannot run** because GitHub Actions is locked
on this account due to a billing issue ("your account is locked due to a billing
issue"). Until that's resolved at <https://github.com/settings/billing>, use
`npm run deploy` (the branch method above), which does **not** use Actions minutes.

Once billing is fixed, to switch to fully automatic deploys: set the Pages source back to
**GitHub Actions** (Repo → Settings → Pages → Build and deployment → Source) and every
push to `main` will deploy on its own.

### Custom domain
When a custom domain is ready, set `site` to it and **remove** `base` in
`astro.config.mjs` (the `base` is only needed for the `/APM-security-services/` project
path on github.io), then redeploy.
