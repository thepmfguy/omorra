# CLAUDE.md — Omorra

Durable context for this project. Keep current. See HANDOFF.md for live state.

## Purpose
Omorra is an early-stage, limited-SKU DTC wellness brand: rose water-infused
yoga objects (a mat, a mist, a wrap, a cork block). This repo is the marketing
landing page: a single, premium, quiet-luxury page. Front-end only for now,
no live commerce.

## The design thesis
"Rose water as the design system." The product is soft, dewy, botanical,
calming. The interface mirrors that: warm bone canvas, blush + dusty-rose
tones, high-contrast editorial serif, generous negative space, slow calm
motion. Reference register: Aesop, Loewe, Aloe, Cereal/Kinfolk editorial.

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

## Brand palette (tokens)
canvas `#f5f0e8`, canvas-deep `#efe7da`, ink `#26221e`, ink-soft `#5c544c`,
petal `#e7c9c2`, petal-light `#f3e2dd`, rose `#c98a82`, clay `#5e4039`,
sage `#6b7363`.

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
