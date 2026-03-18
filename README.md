# build-a-polished-landing-page-starter

A minimal Next.js starter for building a conversion-focused landing page.

## Tech Stack

- [Next.js 15](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS v4

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What to Build

Build a 6-section landing page. Replace placeholder sections with real content:

- Navbar: logo, navigation links, primary CTA button
- Hero: headline, subheadline, primary CTA
- Features: 6 feature cards in a 3-column grid, each with icon, title, and 2-sentence description
- Social proof: 3 testimonial cards, each with quote, name, role, company, and star rating
- Pricing: Free tier (4 features, "Get Started" CTA) and Pro tier ($19/mo, 6 features, "Start Free Trial" CTA, "Most Popular" badge)
- Footer: nav links and legal copy

## Deploy

```bash
npm run build
vercel --prod
```

Set `<title>` and `<meta description>` in `app/layout.tsx` before going live.
