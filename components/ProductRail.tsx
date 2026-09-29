"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "./CartProvider";
import type { Product, Pillar } from "@/lib/products";

type Props = {
  title: Pillar | string;
  accent: "sienna" | "sage" | "rosette";
  items: Product[];
  id?: string;
  blurb?: string;
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

export function ProductRail({ title, accent, items, id, blurb }: Props) {
  const railRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const { add } = useCart();

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const update = () => {
      setCanScrollPrev(el.scrollLeft > 8);
      setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items.length]);

  const scrollBy = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-rail-card]");
    const step = (card?.offsetWidth ?? 280) + 20;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id={id} className="scroll-mt-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-8 flex items-end justify-between gap-6 border-b border-ink/12 pb-5">
          <div className="flex items-center gap-3">
            <span className={`h-px w-7 ${accentBg[accent]}`} aria-hidden="true" />
            <h3
              className={`font-display text-[1.7rem] ${accentText[accent]} md:text-[2.1rem]`}
              style={{ fontWeight: 500 }}
            >
              {title}
            </h3>
          </div>
          <div className="flex items-center gap-4">
            {blurb && (
              <p className="hidden text-[0.82rem] text-walnut sm:block">{blurb}</p>
            )}
            <div className="hidden gap-2 md:flex">
              <button
                type="button"
                onClick={() => scrollBy(-1)}
                disabled={!canScrollPrev}
                aria-label={`Scroll ${title} left`}
                className="grid h-9 w-9 place-items-center rounded-full border border-ink/20 text-ink transition-all hover:border-ink hover:bg-ink hover:text-canvas focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sienna disabled:cursor-not-allowed disabled:opacity-30"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollBy(1)}
                disabled={!canScrollNext}
                aria-label={`Scroll ${title} right`}
                className="grid h-9 w-9 place-items-center rounded-full border border-ink/20 text-ink transition-all hover:border-ink hover:bg-ink hover:text-canvas focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sienna disabled:cursor-not-allowed disabled:opacity-30"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll rail (edge-to-edge with inset padding on first/last card) */}
      <div className="relative">
        <div
          ref={railRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 pb-4 md:px-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          role="region"
          aria-label={`${title} products`}
          tabIndex={0}
        >
          {items.map((p) => (
            <article
              key={p.id}
              data-rail-card
              className="group relative flex w-[240px] shrink-0 snap-start flex-col md:w-[280px]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-petal-light">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 240px, 280px"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                />
                <span className="absolute left-3 top-3 rounded-full bg-canvas/85 px-3 py-1 text-[0.6rem] uppercase tracking-[0.16em] text-ink backdrop-blur-sm">
                  {p.note}
                </span>

                {/* Add-to-bag: visible on mobile, hover-reveal on md+ */}
                <div className="absolute inset-x-3 bottom-3 z-20 opacity-100 transition-all duration-500 ease-out md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      add(p);
                    }}
                    aria-label={`Add ${p.name} to bag`}
                    className="w-full rounded-full bg-ink/92 py-3 text-[0.7rem] uppercase tracking-[0.16em] text-canvas backdrop-blur-sm transition-colors hover:bg-pecan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sienna"
                  >
                    Add to bag
                  </button>
                </div>
              </div>

              <div className="mt-4 flex items-baseline justify-between">
                <h4
                  className="font-display text-lg text-ink"
                  style={{ fontWeight: 400 }}
                >
                  {p.name}
                </h4>
                <span className="text-[0.85rem] text-walnut tabular-nums">
                  {p.priceLabel}
                </span>
              </div>
              <p className="mt-1 text-[0.82rem] leading-relaxed text-walnut">
                {p.tagline}
              </p>

              <Link
                href={`/products/${p.id}`}
                aria-label={`View ${p.name}`}
                className="absolute inset-0 z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sienna"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
