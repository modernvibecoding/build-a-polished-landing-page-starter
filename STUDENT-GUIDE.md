# Build a Polished Landing Page — Student Guide

**Project ID:** vibe-gp-03
**Time estimate:** 3-5 hours
**Prerequisite:** vibe-06 (Build Polished UI with AI)
**Repo:** `build-a-polished-landing-page-starter`

---

## Overview

You build a complete, professional landing page from a minimal starter. The page should have 6 sections: navbar, hero, features grid, social proof, pricing, and footer. No backend, no database, no auth — pure frontend craft.

Design principles and specifications are defined in `TARGET.md` and `design/PENCIL-PLAN.md`. Your job is to match the quality bar, not to copy pixel-for-pixel.

---

## Why This Project Exists

Every app needs a landing page. Most AI-generated landing pages look generic — same layout, same stock phrases, same bland design. This project teaches you to direct AI to produce something that looks intentional and professional.

The skill here is not CSS memorization. It is developing an eye for visual quality and learning to communicate design decisions to an AI tool.

---

## What You Are Expected to Do

1. Review `TARGET.md` and `design/PENCIL-PLAN.md` to understand the design spec
2. Build each section one at a time, starting with the navbar
3. Use realistic placeholder copy (not Lorem Ipsum)
4. Make every section responsive (mobile and desktop)
5. Ensure consistent spacing, typography, and color usage
6. Deploy the finished page to Vercel

---

## Starting Point

```bash
git clone <repo-url>
cd build-a-polished-landing-page-starter
npm install
npm run dev
```

You will see a minimal starter page. The `globals.css` file has a light theme configured with Tailwind v4. The design tokens (colors, fonts, spacing) are already set up — use them.

Review these files before you start building:
- `TARGET.md` — What "polished" means, section-by-section specs
- `design/PENCIL-PLAN.md` — Section-by-section layout reference (structure, spacing, content spec per section)

---

## Steps

### Step 1: Content strategy (20 min)
Before touching code, decide:
- What is the product? (real or fictional — either works)
- What is the one-line value proposition?
- What 6 features will you highlight?
- What pricing tiers make sense?

Write this down. You will prompt AI with these decisions.

### Step 2: Navbar (20 min)
Build a sticky navbar with logo, 3-4 nav links, and a CTA button. It should stick to the top on scroll. On mobile, simplify or add a hamburger menu.

### Step 3: Hero section (30 min)
Full-width section with:
- Bold headline (8 words max)
- Subheadline (one sentence)
- Primary CTA button (filled) + secondary ghost button
- Subtle gradient or colored background — not flat white

### Step 4: Features grid (30 min)
3-column grid (1-column on mobile) with 6 feature cards. Each card: icon, short title, 2-sentence description. Keep cards the same height.

### Step 5: Social proof (20 min)
3 testimonial cards with quoted text, name, role, company, and star rating. Use realistic but fictional names and quotes.

### Step 6: Pricing (30 min)
2 tiers side-by-side (stacked on mobile). Free tier + Pro tier. Pro tier should be visually highlighted with a "Most Popular" badge and accent border.

### Step 7: Footer (15 min)
Company name, one-line tagline, 3 columns of links (Product, Company, Legal), copyright line. Muted colors, clear but unobtrusive.

### Step 8: Polish pass (30 min)
Run the three tests from `TARGET.md`:
1. **Squint test** — Is the hero headline the most prominent element?
2. **Screenshot test** — Can someone tell what the product does in 5 seconds?
3. **Resize test** — Does anything break from desktop to mobile?

Fix issues until all three pass.

### Step 9: Deploy (15 min)
Push to GitHub and deploy to Vercel. Get a live URL.

---

## Definition of Done

- [ ] All 6 sections built (Navbar, Hero, Features, Social Proof, Pricing, Footer)
- [ ] Navbar sticks to top on scroll
- [ ] Fully responsive (mobile, tablet, desktop)
- [ ] Realistic placeholder copy (no Lorem Ipsum)
- [ ] All buttons have hover and focus states
- [ ] Consistent spacing between sections (`py-20` or similar)
- [ ] No more than 4 distinct font sizes used
- [ ] One accent color used consistently
- [ ] `<title>` and `<meta description>` set in `layout.tsx`
- [ ] Deployed to a live Vercel URL

---

## Non-Goals

- Backend or API routes
- Database or authentication
- JavaScript animations or scroll effects
- Dark mode toggle (build in light theme)
- More than 6 sections

---

## Common Failure Points

1. **Inconsistent spacing** — Some sections have `py-8`, others `py-24`. Pick one rhythm and stick with it.
2. **Too many colors** — Random hex values everywhere. Choose one accent color and use it consistently.
3. **Missing hover states** — Buttons that do nothing on hover look broken. Always add `hover:` classes.
4. **Cards of different heights** — Feature cards or pricing tiers that are different heights look unfinished. Use consistent content length or `min-h`.
5. **Placeholder text** — "Lorem ipsum" or "asdf" instantly makes the page look like a draft. Write real copy.
6. **Skipping mobile** — It looks great at 1440px but falls apart at 375px. Test early and often.

---

## Design Reference

Your design reference files:
- `TARGET.md` — Design principles, the three quality tests, section-by-section specs
- `design/PENCIL-PLAN.md` — Section-by-section layout reference (structure, spacing, content spec per section)

You should match the quality bar, not reproduce the design pixel-for-pixel. If you make a deliberate design decision that improves on the target, that is encouraged.

---

## Final Deliverable

A live Vercel URL showing a polished, responsive, 6-section landing page that passes all three tests from `TARGET.md`.
