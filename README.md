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

- Repo: [fastfold-ai/sandwalk-landing](https://github.com/fastfold-ai/sandwalk-landing)
- Vercel project: `fast-fold/sandwalk-landing`
- Preview / prod alias: [https://sandwalk-landing.vercel.app](https://sandwalk-landing.vercel.app)
- Custom domains added: `sandwalk.sh`, `www.sandwalk.sh`

**DNS (Namecheap / registrar currently on `dns*.registrar-servers.com`):** point the domain at Vercel, e.g.

```text
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```

Or switch nameservers to `ns1.vercel-dns.com` / `ns2.vercel-dns.com`.

If Git auto-deploy is not connected (private repo), link the GitHub integration in the Vercel project settings, or deploy with:

```bash
vercel --prod --scope fast-fold
```

No env vars required for v1.

## Brand / SEO

- Favicon: `public/icon.svg`
- Apple touch: `public/apple-touch-icon.png`
- Open Graph: `public/og.png`
- `metadataBase` is `https://sandwalk.sh` so OpenRouter and link previews can scrape the mark once the domain is live.
