import type { Product } from "./products";

// Shopify store used for commerce. Marketing lives on the Next.js site,
// checkout + multi-currency (Shopify Markets) live on Shopify.
export const SHOPIFY_STORE_URL = "https://omorra-3.myshopify.com";

/**
 * Optional map from a local product id to its Shopify variant id.
 * Populate this once products are imported into Shopify (get from Shopify admin
 * → product → variant → URL contains variant id, or via Admin API).
 * If empty, checkout falls back to the Shopify storefront home.
 */
export const SHOPIFY_VARIANT_IDS: Record<string, string> = {
  // "the-mat": "44000000000001",
  // "the-first-21-days": "44000000000002",
  // ...
};

/**
 * Map local product id → Shopify product handle (URL slug).
 * Defaults to the local id if not specified.
 */
export function shopifyHandle(product: Product): string {
  return product.id;
}

/**
 * URL for the product page on the Shopify storefront.
 * Works whether or not the product has been imported yet — will 404 until then.
 */
export function shopifyProductUrl(product: Product): string {
  return `${SHOPIFY_STORE_URL}/products/${shopifyHandle(product)}`;
}

/**
 * Build a Shopify cart permalink from local cart lines.
 * Format: /cart/{variantId}:{qty},{variantId}:{qty},...
 * Falls back to storefront home if no variant ids are configured yet.
 */
export function buildShopifyCartUrl(
  lines: { product: Product; qty: number }[],
): string {
  const parts: string[] = [];
  for (const line of lines) {
    const variantId = SHOPIFY_VARIANT_IDS[line.product.id];
    if (variantId) parts.push(`${variantId}:${line.qty}`);
  }
  if (parts.length === 0) return `${SHOPIFY_STORE_URL}/collections/all`;
  return `${SHOPIFY_STORE_URL}/cart/${parts.join(",")}`;
}

export function hasShopifyVariant(product: Product): boolean {
  return Boolean(SHOPIFY_VARIANT_IDS[product.id]);
}
