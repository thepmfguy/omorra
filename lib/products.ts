export type Spec = { label: string; value: string };

export type Product = {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  priceLabel: string;
  image: string; // primary, used on cards + cart
  gallery: string[]; // PDP gallery (primary first)
  detail: string; // short spec line for cards
  note: string; // card badge
  story: string; // provenance / craft paragraph
  ritual: string; // how it enters the ritual
  care: string; // care note
  specs: Spec[]; // PDP materials table
};

// The limited collection. Single source of truth for cards, cart, and PDPs.
export const products: Product[] = [
  {
    id: "the-mat",
    number: "No. 01",
    name: "The Mat",
    tagline: "Rose water-infused practice mat",
    description:
      "Our signature object. A dense natural-rubber mat cured with Damask rose water, so each unrolling releases a faint, grounding bloom.",
    price: 180,
    priceLabel: "$180",
    image: "/images/sku-mat.png",
    gallery: ["/images/sku-mat.png", "/images/mat-detail.png", "/images/mat-context.png"],
    detail: "4mm natural rubber · 24 × 72 in · 2.4kg",
    note: "Signature",
    story:
      "Each mat is cured slowly in small batches, the rubber drawn from responsibly tapped trees and finished by hand. During curing it is bathed in triple-distilled Damask rose water, so the scent is held in the material itself rather than sprayed on the surface. It softens with use and grows quieter, never fades to nothing.",
    ritual:
      "Unrolled at the start of practice, warmed by the body, the cured rose lifts faintly from the rubber and grounds the first pose.",
    care: "Wipe with a damp cloth and dry flat away from direct sun. Roll loosely to rest.",
    specs: [
      { label: "Material", value: "Natural tree rubber" },
      { label: "Dimensions", value: "24 × 72 in" },
      { label: "Thickness", value: "4mm" },
      { label: "Weight", value: "2.4 kg" },
      { label: "Infusion", value: "Triple-distilled Damask rose" },
      { label: "Release", value: "Numbered, limited" },
    ],
  },
  {
    id: "the-mist",
    number: "No. 02",
    name: "The Mist",
    tagline: "Practice & room mist",
    description:
      "Triple-distilled rose water in frosted glass. A few breaths over the mat, the wrists, the room, to mark the beginning.",
    price: 48,
    priceLabel: "$48",
    image: "/images/sku-mist.png",
    gallery: ["/images/sku-mist.png", "/images/mist-detail.png", "/images/mist-context.png"],
    detail: "100ml · refillable frosted glass",
    note: "Daily",
    story:
      "Nothing here but the flower, water, and time. Our rose water is triple-distilled from Damask roses gathered at first light, then bottled in frosted glass made to be refilled rather than discarded. No synthetics, no fixatives, nothing to mask.",
    ritual:
      "Two breaths over the mat and the wrists before you begin. The scent marks the threshold between the day and the practice.",
    care: "Store away from heat and light. Refills available with each new release.",
    specs: [
      { label: "Volume", value: "100ml" },
      { label: "Vessel", value: "Refillable frosted glass" },
      { label: "Contents", value: "Triple-distilled rose water" },
      { label: "Additives", value: "None" },
      { label: "Origin", value: "Damask rose, first-light harvest" },
      { label: "Release", value: "Numbered, limited" },
    ],
  },
  {
    id: "the-wrap",
    number: "No. 03",
    name: "The Wrap",
    tagline: "Woven cotton practice throw",
    description:
      "A long-staple cotton wrap, woven in small batches, soft enough to fold under the knees or wear from studio to street.",
    price: 95,
    priceLabel: "$95",
    image: "/images/sku-wrap.png",
    gallery: ["/images/sku-wrap.png", "/images/wrap-detail.png", "/images/wrap-context.png"],
    detail: "Organic cotton · 200 × 70 cm",
    note: "Limited",
    story:
      "Woven on small looms from long-staple organic cotton, the wrap is finished with a hand-stitched leather tab carrying the Omorra mark. The bone-and-blush stripe is dyed in low-impact batches, so each piece carries small, intended variation.",
    ritual:
      "Folded beneath the knees, drawn over the shoulders in stillness, or worn from the studio into the rest of the day.",
    care: "Machine wash cold, gentle. Line dry. The weave softens with every wash.",
    specs: [
      { label: "Material", value: "Long-staple organic cotton" },
      { label: "Dimensions", value: "200 × 70 cm" },
      { label: "Finish", value: "Hand-stitched leather tab" },
      { label: "Dye", value: "Low-impact, small batch" },
      { label: "Release", value: "Numbered, limited" },
    ],
  },
  {
    id: "the-block",
    number: "No. 04",
    name: "The Block",
    tagline: "Cork & rose support block",
    description:
      "A sculptural cork block, debossed with the Omorra mark, lightly scented to carry the ritual into every held shape.",
    price: 42,
    priceLabel: "$42",
    image: "/images/sku-block.png",
    gallery: ["/images/sku-block.png", "/images/block-detail.png", "/images/block-context.png"],
    detail: "Portuguese cork · 23 × 15 × 7.5 cm",
    note: "Limited",
    story:
      "Pressed from Portuguese cork, a renewable bark harvested without felling the tree, each block is debossed with the rose monogram and lightly finished with rose water. Naturally antimicrobial, warm to the touch, and quietly sculptural at rest.",
    ritual:
      "A steady support beneath the hand, the hip, or the head, carrying the scent of the practice into every held shape.",
    care: "Wipe clean with a dry cloth. Cork resists moisture and odor naturally.",
    specs: [
      { label: "Material", value: "Portuguese cork" },
      { label: "Dimensions", value: "23 × 15 × 7.5 cm" },
      { label: "Mark", value: "Debossed rose monogram" },
      { label: "Property", value: "Naturally antimicrobial" },
      { label: "Release", value: "Numbered, limited" },
    ],
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function relatedProducts(id: string, count = 3) {
  return products.filter((p) => p.id !== id).slice(0, count);
}
