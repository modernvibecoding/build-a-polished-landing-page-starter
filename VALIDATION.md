# Build a Polished Landing Page — Validation Checklist

**Project ID:** vibe-gp-03

---

## Required (all must pass)

### Sections

| # | Section | Present | Responsive |
|---|---------|---------|------------|
| 1 | Navbar (sticky) | [ ] | [ ] |
| 2 | Hero (headline + CTA) | [ ] | [ ] |
| 3 | Features grid (6 cards) | [ ] | [ ] |
| 4 | Social proof (3 testimonials) | [ ] | [ ] |
| 5 | Pricing (2 tiers) | [ ] | [ ] |
| 6 | Footer (links + copyright) | [ ] | [ ] |

### Design Quality

| # | Check | How to verify |
|---|-------|---------------|
| 1 | Squint test | Squint at the page — hero headline dominates |
| 2 | Screenshot test | Show screenshot to someone for 5 seconds — they know what the product does |
| 3 | Resize test | Drag browser from 1440px to 375px — nothing breaks or overflows |
| 4 | Consistent spacing | All section gaps are the same (e.g., `py-20` everywhere) |
| 5 | One accent color | Primary CTA, highlighted tier, and links all use the same accent |
| 6 | Hover states | Every button changes appearance on hover |
| 7 | Focus states | Tab through the page — focus rings are visible on all interactive elements |
| 8 | Realistic copy | No Lorem Ipsum, no placeholder text, no "asdf" |
| 9 | Equal card heights | Feature cards in the same row are the same height |

### Technical

| # | Check | How to verify |
|---|-------|---------------|
| 1 | Builds clean | `npm run build` — no errors |
| 2 | No console errors | Open DevTools console — no red errors |
| 3 | Meta tags set | `<title>` and `<meta description>` present in page source |
| 4 | Deployed | Live Vercel URL loads correctly |

## Self-Assessment

1. What is the strongest section of your page? Why?
2. What would you improve with 30 more minutes?
3. Did the design target help or constrain you?

## Stretch (optional)

- [ ] Lighthouse Performance score >= 90
- [ ] All images use `next/image`
- [ ] Fonts loaded via `next/font/google`
- [ ] Hamburger menu on mobile
- [ ] Smooth scroll to sections from navbar links
