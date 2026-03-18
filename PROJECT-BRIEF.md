# Build a Polished Landing Page

**Guided Project ID:** vibe-gp-03
**Path Order:** 9
**Prerequisite:** vibe-06 (Build Polished UI with AI)

---

## Why This Project Exists

You have learned design principles, component workflows, and UI iteration loops. Now you build a complete landing page from scratch — the kind of page that converts a visitor into a user. This is not about writing clever code. It is about making something that looks intentional, professional, and trustworthy.

---

## What You Are Building

A single-page marketing landing page for a product or service of your choice. The page must have six sections: navbar, hero, features, social proof, pricing, and footer. It must be responsive, accessible, and deployable.

You pick the product. You write the copy. You choose the colors. The constraint is quality, not content.

---

## Starting Point

Clone the repo. Run `npm install && npm run dev`. You will see a starter checklist page. Replace it entirely with your landing page. The scaffold gives you Next.js 15, TypeScript, and Tailwind CSS — nothing else. You build every section from scratch.

---

## Visual Target

Your landing page must include these six sections in this order:

1. **Navbar** (sticky) — Logo left, nav links center/right, CTA button right. Sticks to top on scroll.
2. **Hero** — Bold headline (8 words max), one-sentence subheadline, primary CTA button, secondary ghost button, subtle gradient or background treatment
3. **Features Grid** — 3-column grid (collapses to 1 on mobile), 6 feature cards, each with icon/emoji, short title, and 2-sentence description
4. **Social Proof** — 3 testimonial cards with quote, name, role, company, and star rating
5. **Pricing** — 2 tiers side by side (Free and Pro), feature lists, CTA buttons, "Most Popular" badge on Pro
6. **Footer** — Company name, tagline, 3 columns of nav links (Product, Company, Legal), copyright line

See `TARGET.md` for the detailed visual target specification.

---

## Design Direction

**Light theme.** White or near-white backgrounds. Dark text. One accent color for CTAs and highlights. Clean, modern, professional.

The starter's `globals.css` provides a clean light palette with a neutral blue accent. Customize the accent color and tokens to match your product's brand before building your sections.

---

## Definition of Done

- All 6 sections are built and visually polished (Navbar, Hero, Features, Social Proof, Pricing, Footer)
- Page is fully responsive (mobile, tablet, desktop)
- All text is realistic placeholder copy (no "Lorem ipsum")
- Buttons have hover and focus states
- Deployed to a live Vercel URL
- `<title>` and `<meta description>` are set in `layout.tsx`

---

## Non-Goals

- Do not add backend functionality (no auth, no database, no API routes)
- Do not add animations or scroll effects (focus on fundamentals first)
- Do not install a component library (build with Tailwind utilities)
- Do not add a blog, contact form, or additional pages

---

## Complexity Guardrails

- One page only. No routing beyond `/`.
- Maximum 7 components (Navbar, Hero, Features, SocialProof, Pricing, Footer, plus 1 shared primitive like Button)
- If your component count exceeds 10, you are overbuilding
- Use `next/font/google` for font loading — do not use `<link>` tags
- Keep the type scale to 4 sizes: hero (`text-5xl lg:text-7xl`), heading (`text-3xl lg:text-4xl`), body (`text-base lg:text-lg`), caption (`text-sm`)

---

## Expected Deliverable

A live URL showing a professional, conversion-focused landing page that you would not be embarrassed to share publicly.

---

## Bite-Sized Steps

1. **Content Strategy** — Pick a product, write the headline, define 3 value props and a CTA
2. **Structure** — Scaffold all 6 sections as empty components (Navbar, Hero, Features, SocialProof, Pricing, Footer), wire into `page.tsx`
3. **Design** — Apply color palette, type scale, spacing rhythm (`py-20 lg:py-24`)
4. **Responsiveness** — Verify mobile layout, test at 375px and 768px widths
5. **Ship** — Deploy to Vercel, set meta tags, share the URL
