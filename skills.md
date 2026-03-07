# Skills & Context — Build a Polished Landing Page

> Next.js 15 starter kit

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 15.2.4 |
| Language | TypeScript | 5 |
| Styling | Tailwind CSS | v4 |
| Runtime | React | 19 |
| Deployment | Vercel | — |

**Key constraint:** No database, no auth, no API routes. Pure presentation layer. Every decision should serve clarity and conversion.

---

## Coding Standards

### File & Folder Structure
- One file per section component in `components/` (e.g., `hero-section.tsx`, `features-section.tsx`)
- `app/page.tsx` imports and composes all sections — keep it thin
- Shared UI primitives (Button, Badge, etc.) in `components/ui/`

### Naming Conventions
- Components: `PascalCase` with descriptive suffix (e.g., `HeroSection`, `PricingCard`)
- Props interfaces: `<ComponentName>Props` (e.g., `FeatureCardProps`)
- CSS: Tailwind utility classes only — no custom CSS files

### Design System Rules
- **Type scale**: Use a consistent scale — hero `text-5xl lg:text-7xl`, section headings `text-3xl lg:text-4xl`, body `text-base lg:text-lg`
- **Spacing rhythm**: Sections use `py-20 lg:py-24`; internal gaps use `gap-6` to `gap-12`
- **Color discipline**: Define 3 roles — background, primary text, accent. Do not add colors ad hoc.
- **Buttons**: Always have a `hover:` state, `focus-visible:` ring, and consistent `px-6 py-3` padding
- **Images**: Use `next/image` with explicit `width` and `height` for above-the-fold images

### Performance Rules
- Hero image must use `priority` prop on `<Image>`
- No layout shift — all images have explicit dimensions
- Fonts loaded via `next/font/google` in `layout.tsx`

---

## AI Instructions

When generating or refactoring code in this project, follow these rules:

1. **Design quality over quantity** — Prefer fewer, more polished sections over many weak ones.
2. **Real copy only** — Do not use Lorem Ipsum. Write plausible, specific placeholder copy that fits the product.
3. **Semantic HTML** — Use `<section>`, `<header>`, `<nav>`, `<main>`, `<footer>` correctly. Do not wrap everything in `<div>`.
4. **Accessibility** — All interactive elements must have accessible labels. Images need `alt` text. Color contrast must meet AA.
5. **No new dependencies** — Do not install icon libraries, animation libraries, or UI kits without instruction.
6. **Tailwind only** — Do not write `style={{}}` or create `.css` files.
7. **TypeScript strictness** — All component props must be typed. No `any`.
8. **Mobile-first** — Write base styles for mobile, then override with `lg:` for desktop. Never the reverse.
9. **Preserve structure** — Do not rename or reorganize components unless explicitly asked.
