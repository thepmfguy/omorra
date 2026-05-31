# HANDOFF.md — Omorra

Live state. Update after every significant step.

## Status: v2 — editorial hero + product pages complete and verified

Reworked after first-pass feedback (hero felt generic, PDPs missing).
- Hero rebuilt as an Editorial Gallery (Aesop x Frama): type-led on bone
  canvas, framed product still, masked line-reveal headline, Frama-style meta
  strip. New portrait still generated (hero-still.png).
- Individual product pages: `/products/[slug]` (SSG for all 4 SKUs).
  ProductGallery (thumbnail rail + main), ProductBuy (sticky, specs grid,
  ritual/provenance/care accordions, add-to-bag), editorial provenance band,
  RelatedProducts. Generated 8 new images (detail + context per SKU).
- Cart + Nav + CartDrawer lifted to app/layout.tsx so they work site-wide.
  Nav links now use `/#anchor` so they work from any route. ProductCard uses a
  stretched-link + overlay-add-button pattern.
- Verified in real Chrome: new hero, the-mat PDP (top + full), card add-button
  does not navigate, card body navigates to PDP, PDP add-to-bag opens drawer.
- Build clean: home + 4 SSG product routes.

Screenshot scripts: scripts/shoot2.mjs, scripts/interact.mjs.

### Prior status (v1)

Production build passes clean (161 kB first load). Verified in real Chrome via
puppeteer: hero, philosophy, The Mat spotlight, collection (4 SKUs), sourcing,
ritual, press, newsletter, footer all render; add-to-bag opens the cart drawer
with line item, qty stepper, subtotal; responsive at 390px and 1440px.
Dev server: `npm run dev` → http://localhost:3000. Screenshot scripts in
`scripts/` (shoot.mjs, cart-test.mjs, mobile.mjs) use system Chrome + puppeteer-core.

## Done
- Brand identity generated (gpt-image-2): wordmark + monogram logos.
- Full 9-image art-directed set generated and placed in `public/images/`:
  hero, philosophy, sourcing, spotlight, sku-mat, sku-mist, sku-wrap,
  sku-block, ritual. Omorra mark embossed on all branded products.
- Next.js 15 + Tailwind v4 + Framer Motion scaffolded.
- Design tokens in `app/globals.css`; fonts Fraunces + Hanken Grotesk.
- Sections built: Nav (+ announce bar + cart trigger), Hero (parallax),
  Philosophy, Spotlight (The Mat), Collection (4 SKUs), Sourcing, Ritual,
  PressStrip, Newsletter, Footer.
- Visual cart: CartProvider + slide-over CartDrawer (add/qty/remove/subtotal).
- CLAUDE.md written.

## Files changed
- package.json, tsconfig.json, next.config.ts, postcss.config.mjs, .gitignore
- app/{layout,page,globals.css}
- lib/products.ts
- components/* (Nav, Hero, Philosophy, Spotlight, Sourcing, Collection,
  ProductCard, Ritual, PressStrip, Newsletter, Footer, CartProvider,
  CartDrawer, ui/Reveal, ui/Button)
- public/images/* (final) + public/images/raw/* (sources, gitignored)

## In progress
- `npm install` then `npm run build` to confirm a clean production build.

## Next steps to resume
1. Run `npm run dev`, open http://localhost:3000, visually QA each section.
2. Check responsive at 375px, 768px, 1440px.
3. Optional: optimize image file sizes (some PNGs ~2MB; convert to webp).
4. When ready for commerce: wire CartDrawer checkout to Shopify/Stripe.

## Blockers
- None currently.

## Notes
- masonry CLI used for all imagery; `--ref` edit mode places the logo on
  products cleanly. Raw prompts recoverable from shell history / raw outputs.
