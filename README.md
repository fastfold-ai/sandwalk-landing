# Sandwalk landing

Marketing site for [sandwalk.sh](https://sandwalk.sh) — the Sandwalk open science agent.

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS v4
- [React Bits Waves](https://reactbits.dev/backgrounds/waves) hero background
- Motion for a few intentional transitions
- Vercel for deploy

## Develop

```bash
pnpm install
pnpm dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000).

## Build

```bash
pnpm build
pnpm start
```

## Deploy

1. Push to GitHub (`fastfold-ai/sandwalk-landing`).
2. Import the repo in Vercel.
3. Attach production domain `sandwalk.sh` (redirect `www` → apex).

No env vars required for v1.

## Brand / SEO

- Favicon: `public/icon.svg`
- Apple touch: `public/apple-touch-icon.png`
- Open Graph: `public/og.png`
- `metadataBase` is `https://sandwalk.sh` so OpenRouter and link previews can scrape the mark once the domain is live.
