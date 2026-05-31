# CLAUDE.md — Omorra

Durable context for this project. Keep current. See HANDOFF.md for live state.

## Purpose
Omorra is an early-stage DTC brand: an Indian wisdom house that brings India's
wisdom traditions (Gita, Upanishads, Ayurvedic dinacharya) into daily life
through small daily objects, on three pillars: Wisdom, Practice, Nourish.
Products: The Cards (Wisdom), The Mala (Practice), The Oil (Nourish). This repo
is the marketing site (home, /our-story, /products/[slug]). Front-end only, no
live commerce. (History: started as a rose-water yoga brand; rebranded in v3.)

## The design thesis
Indian in its roots, entirely modern in its form. Warm earthen palette, a
literary high-contrast serif (wisdom-tradition voice), generous negative space,
calm motion. Reference register: Aesop, Frama, Aman Essentials, Loewe Home.

## Stack
- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (config-less, tokens in `app/globals.css` via `@theme`)
- Framer Motion for scroll reveals, hero parallax, cart drawer

## Key files
- `app/globals.css` — design tokens (`@theme`), `.eyebrow`, `.font-display`
- `app/layout.tsx` — fonts (Fraunces display + Hanken Grotesk body), metadata
- `app/page.tsx` — composes the page from section components
- `lib/products.ts` — the 4-SKU collection, single source of truth
- `components/` — one file per section + `ui/` primitives
- `components/CartProvider.tsx` / `CartDrawer.tsx` — visual-only cart
- `public/images/` — generated brand imagery (see below)

## Brand palette (tokens, app/globals.css @theme)
canvas `#faf5ec` (Ivory cream), canvas-deep `#f1e7d3`, silk `#dcceb8`,
ink `#3d2418` (Espresso), walnut `#8c7567` (Stone walnut, soft text),
sienna `#c68c5f` (Burnt sienna), pecan `#b85a2c` (Pecan, strong accent/CTA),
sage `#8fa083` (Dried sage), rosette `#c08576`. Pillar hues: Wisdom=sienna,
Practice=sage, Nourish=rosette. Back-compat aliases: clay->pecan, rose->rosette,
ink-soft->walnut, petal/petal-light->warm tints. Fonts: Cormorant (display) +
Hanken Grotesk (body); Cormorant is light, so display weights run ~500.

## Imagery (how it was made)
All imagery is AI-generated via the Masonry CLI using `gpt-image-2`.
- Logo first: `logo-wordmark.png` (OMORRA serif + rose mark) and
  `logo-monogram.png` (an O enclosing a rose).
- Product shots use the monogram/wordmark as a `--ref` so the real Omorra mark
  is embossed on each branded good (mat band, mist label, wrap tab, cork block).
- Source prompts and raw outputs live in `public/images/raw/` (gitignored).
- To regenerate: `masonry image "<prompt>" --model gpt-image-2 --aspect <r> --ref <logo> -o <name>.png`

## Conventions
- No em-dashes anywhere (see global rule). Use periods, commas, parentheses.
- Section components are self-contained; client components only where motion or
  cart state is needed ("use client").
- Inline `style={{ fontWeight: NNN }}` is used for fine serif weights because
  Fraunces is a variable font (arbitrary weights honored).
- Keep the SKU list in `lib/products.ts` as the only source; grid + cart read it.

## Run
- `npm install`
- `npm run dev` → http://localhost:3000
- `npm run build` to verify production build

## Not yet built / intentionally out of scope
- Real checkout (Shopify/Stripe). Cart is visual only.
- Product detail pages, journal, secondary routes.
- Real newsletter backend (form is front-end only).
