# Visual Target — Build a Polished Landing Page

This document defines what "polished" means for this guided project.

---

## Design Principles

A polished landing page is not about flashy effects. It is about consistency, hierarchy, and intentionality. Every spacing choice, font size, and color should look deliberate — not random.

### The Three Tests

1. **The squint test** — Squint at your page. Can you tell which element is most important? If the hero headline doesn't dominate, your hierarchy is wrong.
2. **The screenshot test** — Take a screenshot and show it to someone for 5 seconds. Can they tell what the product does? If not, your copy or layout needs work.
3. **The resize test** — Drag your browser from desktop to mobile width. Does anything break, overflow, or look cramped? If yes, your responsiveness needs work.

---

## Design Direction

| Property | Value |
|----------|-------|
| **Theme** | Light (white/near-white backgrounds, dark text) |
| **Accent color** | Your choice — one primary accent for CTAs and highlights |
| **Typography** | Sans-serif (Inter, Plus Jakarta Sans, or similar via `next/font/google`) |
| **Type scale** | Hero: `text-5xl lg:text-7xl` / Heading: `text-3xl lg:text-4xl` / Body: `text-base lg:text-lg` / Caption: `text-sm` |
| **Section spacing** | `py-20 lg:py-24` between sections |
| **Internal spacing** | `gap-6` to `gap-12` within sections |
| **Max width** | Content constrained to `max-w-6xl mx-auto` |
| **Buttons** | Always have `hover:` state, `focus-visible:` ring, consistent `px-6 py-3` padding |

---

## Section-by-Section Target

### 1. Navbar (sticky)
- Logo/brand name on the left
- 3-4 nav links center or right
- CTA button on the far right
- Sticks to top on scroll
- Mobile: hamburger menu or simplified layout

### 2. Hero
- Full-width section
- Bold headline: 8 words maximum
- Subheadline: one sentence explaining the value
- Primary CTA button (filled, accent color) + secondary ghost button
- Subtle gradient or soft background — not a flat white block
- Generous vertical padding (`py-24` or more)

### 3. Features Grid
- 3-column grid on desktop, 1-column on mobile
- 6 feature cards total
- Each card: icon or emoji, short title (3-5 words), 2-sentence description
- Consistent card sizing and spacing
- No borders needed — whitespace and alignment create structure

### 4. Social Proof
- 3 testimonial cards in a row (stacked on mobile)
- Each card: quoted text, person's name, role, company
- Star rating (5 stars) on each card
- Subtle card border or shadow to separate from background

### 5. Pricing
- 2 tiers side by side (stacked on mobile)
- Free tier: 4 features listed, "Get Started" CTA
- Pro tier ($19/month): 6 features listed, "Start Free Trial" CTA
- Pro tier visually highlighted: accent border + "Most Popular" badge
- Consistent feature list alignment between tiers

### 6. Footer
- Company name and one-line tagline
- 3 columns of links: Product, Company, Legal
- Copyright line at bottom
- Muted text color, clear but unobtrusive

---

## What "Not Polished" Looks Like

Avoid these common mistakes:

- Inconsistent spacing (some sections with `py-8`, others with `py-24`)
- Too many font sizes (more than 4 distinct sizes)
- Colors that don't relate to each other (random hex values)
- Missing hover states on buttons
- Text that touches the edge of its container (always add padding)
- Feature cards of different heights in the same row
- Lorem ipsum or "asdf" placeholder text
