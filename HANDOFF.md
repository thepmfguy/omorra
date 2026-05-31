# HANDOFF.md — Omorra

Live state. Update after every significant step.

## Status: v4 — catalog expansion + de-religioned, complete and verified

- Removed religious imagery (mala + brass bell, marigold). Replaced Practice
  with an organic kusha-grass mat; Nourish is now skincare.
- BRANDING: logo is the word OMORRA only. No monogram/rose/emblem on any
  product or in the footer. Removed logo-monogram.png and logo-wordmark.png
  (both carried a rose). Product imagery generated with wordmark-only labels.
- Catalog (lib/products.ts), 7 singles + 2 kits, grouped by pillar:
  Wisdom: The First 21 Days ($42). Practice: The Mat / kusha grass ($120).
  Nourish: Rose Water Mist ($38), Moisturizer Her/Him ($44), Face Wash Her/Him
  ($32). Kits: Ritual Kit For Her / For Him ($140), each = Mist + Cards +
  Moisturizer + Face Wash; ProductBuy shows a "what is inside" list.
- Home: added Pillars (links to category anchors), RitualKit feature section
  (#ritual-kit, both kits), Collection listing grouped by pillar with anchors
  #wisdom/#practice/#nourish. Updated Spotlight (The First 21 Days), Ritual
  copy, Nav, Footer (wordmark only).
- 10 new images generated (gpt-image-2, APPROVED, no symbols): wisdom-cards,
  practice-mat, cat-nourish, sku-mist, sku-moist-women/men, sku-wash-women/men,
  ritual-kit-her/him. Deleted stale v1/v2 rose-water images.
- Also removed stray Finder-duplicate files ("* 2.tsx") that would break build.
- Verified in Chrome: home (pillars, kit, category listing), kit PDP with
  contents, product PDPs; cart adds kits and gendered products. Build clean:
  14 static pages incl. 9 product routes.

### Prior status (v3)

Brand repositioned from rose-water yoga goods to Omorra, an Indian wisdom
house built on three pillars: Wisdom, Practice, Nourish. Founder's story added.
- New color system (globals.css @theme): Ivory cream canvas, Espresso ink,
  Stone walnut soft text, Burnt sienna + Pecan accents, Dried sage + Rosette
  secondaries. Old token names kept as aliases (clay->pecan, rose->rosette).
- Typography: display switched to Cormorant (literary high-contrast serif);
  body stays Hanken Grotesk. Inline display weights bumped to 500.
- New products (lib/products.ts): The Cards (Wisdom $42), The Mala (Practice
  $68), The Oil (Nourish $54), each with pillar + accent + gallery + specs.
- Home: Hero reworked ("Wisdom, made a daily practice"); new Pillars section
  (#pillars) with per-pillar importance copy and hues; Philosophy is now a
  centered manifesto; Spotlight features The Cards; Sourcing is the dinacharya
  provenance band; Ritual is Read/Practice/Nourish; Newsletter is a terracotta
  (pecan) band; press quotes + footer + nav updated to W/P/N + Our Story.
- New route /our-story: founder's story as long-form editorial (em-dashes
  converted to Rule-14 punctuation), doorway image, pull-quotes.
- 8 new images generated (gpt-image-2, APPROVED per Rule 16): hero-still, three
  cat-*, story, three sku-*. Promoted to public/images.
- Verified in Chrome: hero, pillars, full home, /our-story, the-mala PDP all
  render; add-to-bag works with new products; pillar cards navigate to PDPs.
  Clean build: home + /our-story + 3 SSG product routes.

NOTE: clearing Next image cache (rm -rf .next/cache/images) was needed after
overwriting hero-still.png (same URL, new bytes) for the optimizer to refresh.

### Prior status (v2)

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
