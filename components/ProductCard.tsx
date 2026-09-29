"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useCart } from "./CartProvider";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-petal-light">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-canvas/85 px-3 py-1 text-[0.6rem] uppercase tracking-[0.16em] text-ink backdrop-blur-sm">
          {product.note}
        </span>

        {/* Add button — always visible on mobile, hover-reveal on desktop */}
        <div className="absolute inset-x-3 bottom-3 z-20 opacity-100 transition-all duration-500 ease-out md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          <button
            onClick={(e) => {
              e.preventDefault();
              add(product);
            }}
            aria-label={`Add ${product.name} to bag`}
            className="w-full rounded-full bg-ink/92 py-3 text-[0.7rem] uppercase tracking-[0.16em] text-canvas backdrop-blur-sm transition-colors hover:bg-pecan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sienna"
          >
            Add to bag
          </button>
        </div>
      </div>

      <div className="mt-5 flex items-baseline justify-between">
        <h3 className="font-display text-xl text-ink" style={{ fontWeight: 400 }}>
          {product.name}
        </h3>
        <span className="text-[0.9rem] text-walnut">{product.priceLabel}</span>
      </div>
      <p className="mt-1.5 text-[0.85rem] leading-relaxed text-walnut">
        {product.tagline}
      </p>

      {/* Stretched link covers the whole card except the add button */}
      <Link
        href={`/products/${product.id}`}
        aria-label={`View ${product.name}`}
        className="absolute inset-0 z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sienna"
      />
    </motion.article>
  );
}
