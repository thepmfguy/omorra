"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./ui/Reveal";
import { ProductRail } from "./ProductRail";
import { useCart } from "./CartProvider";
import { byPillar, pillarOrder, type Product } from "@/lib/products";

const pillarAccent: Record<string, "sienna" | "sage" | "rosette"> = {
  Wisdom: "sienna",
  Practice: "sage",
  Nourish: "rosette",
};
const accentText: Record<string, string> = {
  sienna: "text-sienna",
  sage: "text-sage",
  rosette: "text-rosette",
};
const accentBg: Record<string, string> = {
  sienna: "bg-sienna",
  sage: "bg-sage",
  rosette: "bg-rosette",
};

const pillarBlurb: Record<string, string> = {
  Wisdom: "Something to read.",
  Practice: "Something to do.",
  Nourish: "Something for the skin, for her and for him.",
};

function PillarHeader({
  pillar,
  accent,
  blurb,
}: {
  pillar: string;
  accent: "sienna" | "sage" | "rosette";
  blurb: string;
}) {
  return (
    <div className="mx-auto max-w-[1400px] px-6 md:px-10">
      <div className="mb-8 flex items-end justify-between gap-6 border-b border-ink/12 pb-5">
        <div className="flex items-center gap-3">
          <span className={`h-px w-7 ${accentBg[accent]}`} aria-hidden="true" />
          <h3
            className={`font-display text-[1.7rem] ${accentText[accent]} md:text-[2.1rem]`}
            style={{ fontWeight: 500 }}
          >
            {pillar}
          </h3>
        </div>
        <p className="hidden text-[0.82rem] text-walnut sm:block">{blurb}</p>
      </div>
    </div>
  );
}

function FeaturedCard({ product }: { product: Product }) {
  const { add } = useCart();
  return (
    <div className="mx-auto max-w-[1400px] px-6 md:px-10">
      <article className="group grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16">
        <Link
          href={`/products/${product.id}`}
          className="relative block aspect-[4/3] overflow-hidden rounded-[2px] bg-petal-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sienna md:col-span-6"
        >
          <Image
            src={product.image}
            alt={product.alt}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
          />
          <span className="absolute left-4 top-4 rounded-full bg-canvas/85 px-3 py-1 text-[0.62rem] uppercase tracking-[0.16em] text-ink backdrop-blur-sm">
            {product.note}
          </span>
        </Link>
        <div className="md:col-span-6">
          <p className="eyebrow mb-4">{product.number}</p>
          <h4
            className="font-display text-[2rem] leading-[1.08] text-ink md:text-[2.6rem]"
            style={{ fontWeight: 500 }}
          >
            {product.name}
          </h4>
          <p className="mt-4 text-[1.02rem] text-walnut">{product.tagline}</p>
          <p className="mt-6 max-w-[52ch] text-[0.98rem] leading-relaxed text-walnut">
            {product.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <button
              onClick={() => add(product)}
              className="rounded-full bg-ink px-8 py-3.5 text-[0.76rem] uppercase tracking-[0.16em] text-canvas transition-colors hover:bg-pecan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sienna"
            >
              Add to bag — {product.priceLabel}
            </button>
            <Link
              href={`/products/${product.id}`}
              className="text-[0.76rem] uppercase tracking-[0.16em] text-walnut transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sienna"
            >
              View details →
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

export function Collection() {
  return (
    <section
      id="collection"
      className="scroll-mt-28 py-16 md:py-20"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="mb-10">
          <p className="eyebrow mb-5">The collection</p>
          <h2
            className="font-display max-w-[16ch] text-[2.2rem] leading-[1.08] text-ink md:text-[3rem]"
            style={{ fontWeight: 500 }}
          >
            Every object, by pillar.
          </h2>
        </Reveal>
      </div>

      <div className="space-y-16 md:space-y-24">
        {pillarOrder.map((pillar) => {
          const items = byPillar(pillar);
          const accent = pillarAccent[pillar];
          const blurb = pillarBlurb[pillar];
          const useRail = items.length >= 3;
          return (
            <div key={pillar} id={pillar.toLowerCase()} className="scroll-mt-28">
              {useRail ? (
                <ProductRail
                  title={pillar}
                  accent={accent}
                  items={items}
                  blurb={blurb}
                />
              ) : (
                <>
                  <PillarHeader pillar={pillar} accent={accent} blurb={blurb} />
                  <FeaturedCard product={items[0]} />
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
