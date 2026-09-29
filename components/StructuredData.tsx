import type { Product } from "@/lib/products";

const SITE = "https://omorra.com";
const CURRENCY = "USD";

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE}/#organization`,
        name: "Omorra",
        url: SITE,
        logo: `${SITE}/images/hero-still.png`,
        description:
          "Omorra brings India's wisdom traditions into daily life through three pillars: Wisdom, Practice, and Nourish.",
        sameAs: [] as string[],
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: SITE,
        name: "Omorra",
        publisher: { "@id": `${SITE}/#organization` },
        inLanguage: "en-IN",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProductSchema({ product }: { product: Product }) {
  const url = `${SITE}/products/${product.id}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.gallery.map((g) => `${SITE}${g}`),
    sku: product.id,
    brand: { "@type": "Brand", name: "Omorra" },
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: CURRENCY,
      price: product.price,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE}${it.url}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
