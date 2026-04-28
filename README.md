# FairLedger

> Crypto casino transparency and rewards.

A static, dark-themed marketing site built with Astro for an independent
crypto-casino transparency project. The look and feel is modeled after
[fairgambling.com](https://www.fairgambling.com/) (live deposit analytics,
honest reviews, provably fair tools, live bonus codes, weekly leaderboard).

The site has been filled with placeholder brand identity:

- Brand: **FairLedger** (legal: FairLedger Insights Ltd.)
- Tagline: Crypto casino transparency and rewards
- Domain: `https://www.fairledger.io`
- Locale: `en` only
- Server functions: none (contact form opens the user's mail client)
- Analytics: none

If you wish to ship under a different brand, edit `src/data/site.ts` (the
single source of truth) and the OG image at `public/og-default.svg`.

## Tech stack

- Astro 5 (static output)
- TypeScript strict
- Self-hosted Inter via `@fontsource/inter`
- `@astrojs/sitemap` for the XML sitemap
- Pure CSS with hand-written design tokens (no Tailwind, no UI library)

## Install and run

```bash
npm install
npm run dev      # dev server at http://localhost:4321
npm run build    # static build to ./dist
npm run preview  # serve the built site at http://localhost:4321
```

The build runs `astro build && node scripts/postbuild.mjs`. The postbuild
step:

1. Injects `<link rel="modulepreload">` for every module `<script src>` in
   each generated HTML file.
2. On Cloudflare Pages preview branches (`CF_PAGES=1` and
   `CF_PAGES_BRANCH != "main"`), appends `X-Robots-Tag: noindex` headers for
   `/robots.txt` and `/llms.txt`.

## Pages

The site ships these public routes:

- `/` (home)
- `/casinos/` (operator directory)
- `/reviews/` (in-depth reviews)
- `/analytics/` (live deposit volume)
- `/seed-analyzer/`
- `/provably-fair/`
- `/bonus-calculator/`
- `/livecodes/`
- `/leaderboard/`
- `/bet-feed/`
- `/blog/`
- `/transparency/`
- `/about/`
- `/contact/`
- `/support/`
- `/sitemap/`
- `/privacy/`, `/cookies/`, `/terms/`, `/accessibility/`, `/disclaimer/`,
  `/responsible-gambling/`, `/age-verification/`,
  `/jurisdiction-restrictions/`
- `/404` (custom not-found)
- `/robots.txt`, `/llms.txt`, `/sitemap-index.xml`

## Deploying to Cloudflare Pages

Either push the repo to GitHub and connect a Cloudflare Pages project (the
build command is `npm run build`, the output directory is `dist`), or deploy
directly with Wrangler:

```bash
npx wrangler pages deploy dist --project-name fairledger
```

## Editorial notes

- All casino names, deposit volume figures, leaderboard players and bet feed
  items are illustrative seed data placed in `src/data/casinos.ts`. Replace
  them with live data sources before launching for real users.
- The site contains responsible-gambling resources and an 18+ banner in the
  footer on every page. Do not remove these for any market where the site
  is publicly reachable.

## Licence

The site copy and design are © FairLedger Insights Ltd. The build scaffolding
is MIT licensed.
