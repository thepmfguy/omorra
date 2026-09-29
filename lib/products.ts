export type Spec = { label: string; value: string };
export type Pillar = "Wisdom" | "Practice" | "Nourish";
export type Audience = "Women" | "Men";

export type Product = {
  id: string;
  number: string;
  name: string;
  kind: "single" | "kit";
  pillar?: Pillar;
  accent: "sienna" | "sage" | "rosette";
  audience?: Audience;
  tagline: string;
  description: string;
  price: number;
  priceLabel: string;
  image: string;
  alt: string;
  gallery: string[];
  detail: string;
  note: string;
  story: string;
  ritual: string;
  care: string;
  specs: Spec[];
  contents?: string[]; // for kits: ids of included products
};

// Full catalog. Singles grouped by pillar, plus the two Ritual Kits.
export const products: Product[] = [
  // ---------- WISDOM ----------
  {
    id: "the-first-21-days",
    number: "No. 01",
    name: "The First 21 Days",
    kind: "single",
    pillar: "Wisdom",
    accent: "sienna",
    tagline: "A card a day, for three weeks",
    description:
      "A deck built to start a habit. Twenty-one cards, one for each morning, each carrying a line from the Gita or the Upanishads and a plain reflection to test against the day. Long enough to become a rhythm.",
    price: 42,
    priceLabel: "$42",
    image: "/images/wisdom-cards.png",
    alt: "The First 21 Days deck laid on cotton-rag paper, one card face up in morning light",
    gallery: ["/images/wisdom-cards.png", "/images/hero-still.png", "/images/story.png"],
    detail: "21 letterpress cards · cotton rag",
    note: "Wisdom",
    story:
      "Twenty-one days is the length of time a practice needs to stop feeling like effort. The deck is letterpress-printed on cotton-rag paper, one card for each morning, the verse on one face and a plain-language reflection on the other, drawn from the Bhagavad Gita and the principal Upanishads as instruction rather than quotation.",
    ritual:
      "Drawn once at the start of the day, read slowly, and left where you will see it. One line, carried, for twenty-one mornings.",
    care: "Keep dry and away from direct sun. The paper softens and warms with handling.",
    specs: [
      { label: "Contents", value: "21 letterpress cards" },
      { label: "Source", value: "Gita & Upanishads" },
      { label: "Format", value: "Verse + reflection" },
      { label: "Paper", value: "Cotton rag, deckled" },
      { label: "Release", value: "Numbered, limited" },
    ],
  },

  // ---------- PRACTICE ----------
  {
    id: "the-mat",
    number: "No. 02",
    name: "The Mat",
    kind: "single",
    pillar: "Practice",
    accent: "sage",
    tagline: "Hand-woven kusha grass",
    description:
      "A practice mat hand-woven from organic kusha grass, the same grass named in the oldest texts as a seat for stillness. Naturally cooling, lightly textured, and entirely of the earth. A practice without philosophy is exercise, so the Mat is made to be paired with the Cards.",
    price: 120,
    priceLabel: "$120",
    image: "/images/practice-mat.png",
    alt: "Hand-woven kusha grass practice mat unrolled on a warm stone floor",
    gallery: ["/images/practice-mat.png", "/images/story.png", "/images/hero-still.png"],
    detail: "Organic kusha grass · 24 × 72 in",
    note: "Practice",
    story:
      "Kusha grass has been woven into seats for stillness for as long as the practice has existed, prized for staying cool and grounding the body. Each mat is hand-woven in small batches from organic, sustainably harvested grass, with no coatings and no markings, so it ages honestly and returns to the earth at the end of its life.",
    ritual:
      "Unrolled before the day begins. The grass is cool underfoot, a plain and grounding place to sit, breathe, and start.",
    care: "Air after use, keep dry, and roll loosely to rest. Natural variation is the point.",
    specs: [
      { label: "Material", value: "Organic kusha grass" },
      { label: "Weave", value: "Hand-woven, small batch" },
      { label: "Dimensions", value: "24 × 72 in" },
      { label: "Finish", value: "Uncoated, unmarked" },
      { label: "Release", value: "Numbered, limited" },
    ],
  },

  // ---------- NOURISH ----------
  {
    id: "rose-water-mist",
    number: "No. 03",
    name: "Rose Water Mist",
    kind: "single",
    pillar: "Nourish",
    accent: "rosette",
    tagline: "Triple-distilled, for face and room",
    description:
      "Triple-distilled rose water in frosted glass. A few breaths over the face, the wrists, the room, to mark a beginning or settle an ending. One mist, for everyone.",
    price: 38,
    priceLabel: "$38",
    image: "/images/sku-mist.png",
    alt: "Triple-distilled rose water in frosted glass, catching soft window light",
    gallery: ["/images/sku-mist.png", "/images/cat-nourish.png", "/images/hero-still.png"],
    detail: "100ml · refillable frosted glass",
    note: "Nourish",
    story:
      "Nothing but the flower, water, and time. Triple-distilled from roses gathered at first light and bottled in refillable frosted glass. No synthetics, no fixatives, nothing to mask. The surface tells the truth about the inner life, and this is where the day is marked.",
    ritual:
      "Two breaths over the face and the wrists to begin, or over the room to close the day.",
    care: "Store away from heat and light. Refills available with each release.",
    specs: [
      { label: "Volume", value: "100ml" },
      { label: "Vessel", value: "Refillable frosted glass" },
      { label: "Contents", value: "Triple-distilled rose water" },
      { label: "Additives", value: "None" },
      { label: "For", value: "Everyone" },
    ],
  },
  {
    id: "moisturizer-women",
    number: "No. 04",
    name: "Moisturizer",
    kind: "single",
    pillar: "Nourish",
    accent: "rosette",
    audience: "Women",
    tagline: "Daily moisturizer · for her",
    description:
      "A light, fast-absorbing daily moisturizer balanced for her skin, built on cold-pressed botanicals and the Ayurvedic principle of nourishing the surface to settle the whole.",
    price: 44,
    priceLabel: "$44",
    image: "/images/sku-moist-women.png",
    alt: "Omorra moisturizer for her in a frosted glass jar on cream linen",
    gallery: ["/images/sku-moist-women.png", "/images/cat-nourish.png", "/images/hero-still.png"],
    detail: "50ml · frosted glass jar",
    note: "Nourish · Her",
    story:
      "Skincare without the inner life behind it is packaging. This moisturizer is built on cold-pressed plant oils and humectants drawn from Ayurvedic practice, lightly fragranced and quick to absorb, made to be the unhurried last gesture of a morning or the first of a night.",
    ritual: "Warmed between the fingers and pressed into clean skin, morning or night.",
    care: "Keep cool and sealed. A little is enough.",
    specs: [
      { label: "Volume", value: "50ml" },
      { label: "For", value: "Her" },
      { label: "Base", value: "Cold-pressed botanicals" },
      { label: "Texture", value: "Light, fast-absorbing" },
      { label: "Vessel", value: "Frosted glass, refillable" },
    ],
  },
  {
    id: "moisturizer-men",
    number: "No. 05",
    name: "Moisturizer",
    kind: "single",
    pillar: "Nourish",
    accent: "rosette",
    audience: "Men",
    tagline: "Daily moisturizer · for him",
    description:
      "A grounded, matte-finish daily moisturizer balanced for his skin, built on the same cold-pressed botanicals, weighted for a heavier skin and a plainer routine.",
    price: 44,
    priceLabel: "$44",
    image: "/images/sku-moist-men.png",
    alt: "Omorra moisturizer for him in matte glass on a stone surface",
    gallery: ["/images/sku-moist-men.png", "/images/cat-nourish.png", "/images/hero-still.png"],
    detail: "50ml · matte glass jar",
    note: "Nourish · Him",
    story:
      "Skincare without the inner life behind it is packaging. The same cold-pressed botanical base, weighted and matte-finished for his skin, lightly grounding in scent, made to be the one plain step a morning will actually keep.",
    ritual: "Warmed between the fingers and pressed into clean skin after washing.",
    care: "Keep cool and sealed. A little is enough.",
    specs: [
      { label: "Volume", value: "50ml" },
      { label: "For", value: "Him" },
      { label: "Base", value: "Cold-pressed botanicals" },
      { label: "Texture", value: "Matte, grounding" },
      { label: "Vessel", value: "Matte glass, refillable" },
    ],
  },
  {
    id: "face-wash-women",
    number: "No. 06",
    name: "Face Wash",
    kind: "single",
    pillar: "Nourish",
    accent: "rosette",
    audience: "Women",
    tagline: "Gentle cleanser · for her",
    description:
      "A gentle, low-foam cleanser for her skin, drawing on Ayurvedic botanicals to clear the day without stripping it. The plain first step of the ritual.",
    price: 32,
    priceLabel: "$32",
    image: "/images/sku-wash-women.png",
    alt: "Omorra face wash for her in a frosted glass bottle, upright",
    gallery: ["/images/sku-wash-women.png", "/images/cat-nourish.png", "/images/hero-still.png"],
    detail: "150ml · frosted bottle",
    note: "Nourish · Her",
    story:
      "The first gesture of the ritual is to clear the day from the skin. A low-foam, gentle cleanser built on Ayurvedic botanicals, balanced for her skin, made to wash without stripping so the surface stays calm.",
    ritual: "Worked into damp skin morning and night, then rinsed with cool water.",
    care: "Keep sealed and upright. Refills with each release.",
    specs: [
      { label: "Volume", value: "150ml" },
      { label: "For", value: "Her" },
      { label: "Base", value: "Ayurvedic botanicals" },
      { label: "Lather", value: "Low-foam, gentle" },
      { label: "Vessel", value: "Frosted glass, refillable" },
    ],
  },
  {
    id: "face-wash-men",
    number: "No. 07",
    name: "Face Wash",
    kind: "single",
    pillar: "Nourish",
    accent: "rosette",
    audience: "Men",
    tagline: "Daily cleanser · for him",
    description:
      "A clarifying daily cleanser for his skin, on the same Ayurvedic botanical base, weighted to clear oil and the day without leaving the skin tight.",
    price: 32,
    priceLabel: "$32",
    image: "/images/sku-wash-men.png",
    alt: "Omorra face wash for him in a matte glass bottle, upright",
    gallery: ["/images/sku-wash-men.png", "/images/cat-nourish.png", "/images/hero-still.png"],
    detail: "150ml · matte bottle",
    note: "Nourish · Him",
    story:
      "The first gesture of the ritual is to clear the day from the skin. A clarifying cleanser on the same Ayurvedic botanical base, weighted for his skin to lift oil and grit without the tightness that makes a routine easy to abandon.",
    ritual: "Worked into damp skin morning and night, then rinsed with cool water.",
    care: "Keep sealed and upright. Refills with each release.",
    specs: [
      { label: "Volume", value: "150ml" },
      { label: "For", value: "Him" },
      { label: "Base", value: "Ayurvedic botanicals" },
      { label: "Lather", value: "Clarifying" },
      { label: "Vessel", value: "Matte glass, refillable" },
    ],
  },

  // ---------- RITUAL KITS ----------
  {
    id: "ritual-kit-her",
    number: "The Kit",
    name: "Ritual Kit · For Her",
    kind: "kit",
    accent: "rosette",
    audience: "Women",
    tagline: "The whole ritual, in one box",
    description:
      "The complete ritual, boxed: a verse to read, a mist to begin, and the cleanse-and-nourish that closes the day. Her formulations of the moisturizer and face wash, with the Rose Water Mist and the First 21 Days cards.",
    price: 140,
    priceLabel: "$140",
    image: "/images/ritual-kit-her.png",
    alt: "Ritual Kit for her, hand-wrapped: mist, cards, moisturizer and face wash",
    gallery: ["/images/ritual-kit-her.png", "/images/cat-nourish.png", "/images/wisdom-cards.png"],
    detail: "4 pieces · saving of $16",
    note: "Combo · Her",
    story:
      "A wisdom card without a practice is a quotation. A practice without philosophy is exercise. Skincare without the inner life behind it is packaging. Held together in one box, they become a way of beginning and ending a day. The Ritual Kit gathers the four, hand-wrapped, at a saving over buying them apart.",
    ritual:
      "Morning: draw a card, mist, cleanse and moisturize. Night: cleanse, moisturize, and mist the room. The whole arc, in one box.",
    care: "See each item for its own care. Box and tissue are recyclable.",
    specs: [
      { label: "Includes", value: "Mist · Cards · Moisturizer · Face Wash" },
      { label: "Formulation", value: "For her" },
      { label: "Pieces", value: "4" },
      { label: "Value", value: "$156 separately" },
      { label: "Packaging", value: "Hand-wrapped box" },
    ],
    contents: ["rose-water-mist", "the-first-21-days", "moisturizer-women", "face-wash-women"],
  },
  {
    id: "ritual-kit-him",
    number: "The Kit",
    name: "Ritual Kit · For Him",
    kind: "kit",
    accent: "rosette",
    audience: "Men",
    tagline: "The whole ritual, in one box",
    description:
      "The complete ritual, boxed: a verse to read, a mist to begin, and the cleanse-and-nourish that closes the day. His formulations of the moisturizer and face wash, with the Rose Water Mist and the First 21 Days cards.",
    price: 140,
    priceLabel: "$140",
    image: "/images/ritual-kit-him.png",
    alt: "Ritual Kit for him, hand-wrapped: mist, cards, moisturizer and face wash",
    gallery: ["/images/ritual-kit-him.png", "/images/cat-nourish.png", "/images/wisdom-cards.png"],
    detail: "4 pieces · saving of $16",
    note: "Combo · Him",
    story:
      "A wisdom card without a practice is a quotation. A practice without philosophy is exercise. Skincare without the inner life behind it is packaging. Held together in one box, they become a way of beginning and ending a day. The Ritual Kit gathers the four, hand-wrapped, at a saving over buying them apart.",
    ritual:
      "Morning: draw a card, mist, cleanse and moisturize. Night: cleanse, moisturize, and mist the room. The whole arc, in one box.",
    care: "See each item for its own care. Box and tissue are recyclable.",
    specs: [
      { label: "Includes", value: "Mist · Cards · Moisturizer · Face Wash" },
      { label: "Formulation", value: "For him" },
      { label: "Pieces", value: "4" },
      { label: "Value", value: "$156 separately" },
      { label: "Packaging", value: "Hand-wrapped box" },
    ],
    contents: ["rose-water-mist", "the-first-21-days", "moisturizer-men", "face-wash-men"],
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export const singles = products.filter((p) => p.kind === "single");
export const kits = products.filter((p) => p.kind === "kit");

export const pillarOrder: Pillar[] = ["Wisdom", "Practice", "Nourish"];

export function byPillar(pillar: Pillar) {
  return singles.filter((p) => p.pillar === pillar);
}

export function relatedProducts(id: string, count = 3) {
  const current = getProduct(id);
  // Prefer same-pillar singles, then fall back to other singles.
  const sameP = singles.filter((p) => p.id !== id && p.pillar === current?.pillar);
  const others = singles.filter((p) => p.id !== id && p.pillar !== current?.pillar);
  return [...sameP, ...others].slice(0, count);
}

export type PillarInfo = {
  key: Pillar;
  accent: "sienna" | "sage" | "rosette";
  blurb: string;
  image: string;
  count: number;
};

// The three pillars, for the home section. Copy from the founder's story.
export const pillars: PillarInfo[] = [
  {
    key: "Wisdom",
    accent: "sienna",
    blurb:
      "A mind that needs something to read. A line from the Gita or the Upanishads, drawn each morning, present and within reach.",
    image: "/images/wisdom-cards.png",
    count: byPillar("Wisdom").length,
  },
  {
    key: "Practice",
    accent: "sage",
    blurb:
      "A body that needs something to do. A seat of kusha grass and the pause the modern morning forgot, given a place to begin.",
    image: "/images/practice-mat.png",
    count: byPillar("Practice").length,
  },
  {
    key: "Nourish",
    accent: "rosette",
    blurb:
      "A surface that tells the truth about both. Cleanse, mist and moisturize, the daily care of dinacharya, for her and for him.",
    image: "/images/cat-nourish.png",
    count: byPillar("Nourish").length,
  },
];
