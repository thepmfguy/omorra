# OMORRA — Editorial Storefront Revamp

A complete rebuild of the OMORRA storefront as a production **Shopify Online Store 2.0
Liquid theme**: warm editorial aesthetic, fully dynamic (no hardcoded products, prices,
menus, or URLs), INR-native, accessible, and SEO-ready.

Built slice by slice against a reference design, verified in-browser at each step, and kept
entirely reversible: nothing touches the live theme or checkout until you choose to publish.

---

## 1. Where it lives

| | |
|---|---|
| **Working theme** (unpublished) | `Omorra Editorial (revamp)` — theme id `148309114959` |
| **Live theme** (untouched) | `omorra-shopify-theme-v3` — theme id `147935068239` |
| **Local source of truth** | `shopify-theme/` (this repo), branch `revamp/omorra-editorial` |
| **Preview URL** | `https://omorra-3.myshopify.com/?preview_theme_id=148309114959` |
| **Store** | `omorra-3.myshopify.com` (custom domain `omorra.com`, not yet primary) |

The revamp is a **duplicate** of the live theme. Publishing it (Step 1 of the launch
checklist) is the only action that changes the public site.

---

## 2. Architecture

- **Shopify OS 2.0** — JSON templates + sections + blocks, editable in the theme editor.
- **Everything dynamic** — Navigation menus (`linklists`), products (`all_products`,
  `collection.products`), prices, availability, filters (`collection.filters`), routes
  (`routes.*`), and localization (`request.locale`, `cart.currency`). No hardcoded catalog.
- **Design tokens** — CSS custom properties in `assets/omorra.css` (`:root`), consumed via
  `var(--token)` everywhere.
- **Money** — server-rendered with the `money` filter; client-side (cart/search) formatted
  with `Intl.NumberFormat` seeded from `request.locale` for correct INR grouping.

### File inventory

**Layout** — `layout/theme.liquid` (head/SEO/OG/JSON-LD, font loading, CSS, AJAX cart drawer,
search overlay mount, cart-count sync).

**Sections**
| File | Purpose |
|---|---|
| `announcement-bar.liquid` | Dismissible top bar |
| `header.liquid` | Dynamic menu, transparent-over-hero, sticky, accessible mobile drawer, search/account/cart |
| `hero.liquid` | Full-bleed hero, overlaid content, settings-driven |
| `pillars.liquid` | "The World of Omorra" — block-based 3 panels |
| `featured-product.liquid` | Split feature, product picker, dynamic price/availability |
| `campaign-banner.liquid` | Editorial campaign band |
| `philosophy.liquid` | Quote block |
| `ritual-kits.liquid` | Kit callout |
| `newsletter.liquid` | `{% form 'customer' %}` signup, success/error states |
| `footer.liquid` | Dynamic footer menu + policies + localization |
| `product-main.liquid` | PDP: gallery, sticky buy, variants, metafield accordions, related, mobile bar |
| `collection-main.liquid` | Collection: header, sort, Search & Discovery filters, grid, pagination |
| `our-story.liquid` | Editorial about page, reorderable passage blocks |

**Snippets** — `icon.liquid`, `product-card.liquid`, `pdp-accordion.liquid`,
`search-overlay.liquid`, `structured-data.liquid`.

**Templates (JSON)** — `index.json`, `product.json`, `collection.json`, `page.our-story.json`,
plus store defaults (`cart.json`, `page.json`, `404.json`).

**Assets** — `omorra.css` (tokens + base) and additive `omorra-slice1..10.css`.

---

## 3. Features delivered

- **Navigation** — header + footer driven by Shopify Navigation; transparent header over the
  homepage hero that solidifies on scroll; dropdowns; fully accessible mobile drawer (focus
  trap, Esc, `aria-expanded`).
- **Homepage** — hero, World of Omorra (3 pillars), featured product, campaign banner,
  philosophy, ritual kits, newsletter.
- **Product pages** — gallery + thumbnails, sticky buy column, variant selection with URL sync
  and image swap, metafield accordions, related products, mobile sticky buy bar, AJAX add-to-bag.
- **Collections** — editorial header, sort, **Search & Discovery filters** (list + price range)
  with a sticky desktop sidebar and mobile filter drawer, active-filter chips, pagination.
- **Cart** — slide-out AJAX drawer (add / remove / subtotal / checkout), live count.
- **Predictive search** — top-sliding overlay wired to the header, grouped results
  (products / collections / reading), keyboard navigation, debounced and request-cancelling.
- **Our Story** — editorial long-form page, every line editable in the theme editor.
- **Accessibility** — one `h1` per page, logical headings, landmarks, skip-link, `alt` on all
  images, `prefers-reduced-motion` throughout, visible focus ring, WCAG AA text contrast.
- **SEO** — dynamic titles + descriptions, Open Graph + Twitter cards, canonical (Shopify),
  and **JSON-LD** structured data (Organization, WebSite + SearchAction, Product).
- **Performance** — `display=swap` fonts with preconnect, eager LCP images (hero, PDP main) and
  lazy everywhere else, responsive `srcset`/`sizes`.
- **Localization** — INR-native money, country selector in footer.

---

## 4. Design system

- **Palette** (`assets/omorra.css`): canvas `#faf5ec`, canvas-deep `#f1e7d3`, silk `#dcceb8`,
  ink `#3d2418`, walnut `#7d6555`, sienna `#c68c5f`, pecan `#b85a2c`, sage `#8fa083`,
  rosette `#c08576`, petal-light `#efe3cd`. Pillar hues: Wisdom=sienna, Practice=sage,
  Nourish=rosette.
- **Type**: Cormorant Garamond (display) + DM Sans (body), via Google Fonts.
- **Contrast** (verified): ink on canvas 13.2:1; walnut secondary text 5.0:1 (AA); focus ring
  pecan 4.26:1 (over the 3:1 minimum).

---

## 5. Deploy mechanism

Files are pushed to the **unpublished** theme via the Shopify Admin API
(`themeFilesUpsert`, base64 body). The live theme is never written to. When a JSON template
references a new section/block type, push the section `.liquid` first, then the template in a
separate call (validation uses the pre-update schema).

> Recommended: set up **Shopify CLI** (`shopify theme dev` / `push`) for future edits. It ends
> the manual base64 step and enables `shopify theme check` and one-file CSS consolidation.

---

## 6. Launch checklist

Do these in order, only when ready to go live. All three change the public store.

1. **Publish** `Omorra Editorial (revamp)` (Admin → Online Store → Themes → … → Publish).
   This replaces v3 as the live theme.
2. **Assign the Our Story template**: set the `about-us` page (id `113653514319`) template to
   **`our-story`**. Deferred until now because a page's template is store-wide and the old v3
   theme has no such template — safe only after Step 1.
3. **Make `omorra.com` primary** (Admin → Settings → Domains).

**Rollback**: re-publish `omorra-shopify-theme-v3`. The revamp theme is a separate record, so
the previous storefront is restored instantly.

---

## 7. Merchant to-dos (content, not code)

- **Upload product images** for the SKUs that have none (Moisturizer Her/Him, Face Wash Her/Him,
  ritual kits). These currently show placeholder tiles on the collection grid.
- Optionally set a homepage social share image (used for `og:image`).
- Review the Search & Discovery filter set under Admin → Search & Discovery.

---

## 8. Intentionally out of scope

Journal/Notes, customer-account template styling, and CSS consolidation into a single file
(pending Shopify CLI). None block launch.
