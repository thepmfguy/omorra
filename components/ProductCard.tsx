"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "./CartProvider";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-petal-light">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-canvas/85 px-3 py-1 text-[0.6rem] uppercase tracking-[0.16em] text-ink/70 backdrop-blur-sm">
          {product.note}
        </span>

        {/* Hover add button — sits above the stretched link */}
        <div className="absolute inset-x-3 bottom-3 z-20 translate-y-3 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <button
            onClick={(e) => {
              e.preventDefault();
              add(product);
            }}
            className="w-full rounded-full bg-ink/92 py-3 text-[0.7rem] uppercase tracking-[0.16em] text-canvas backdrop-blur-sm transition-colors hover:bg-clay"
          >
            Add to bag
          </button>
        </div>
      </div>

      <div className="mt-5 flex items-baseline justify-between">
        <h3 className="font-display text-xl text-ink" style={{ fontWeight: 400 }}>
          {product.name}
        </h3>
        <span className="text-[0.9rem] text-ink/70">{product.priceLabel}</span>
      </div>
      <p className="mt-1.5 text-[0.85rem] leading-relaxed text-ink/55">
        {product.tagline}
      </p>

      {/* Stretched link covers the whole card except the add button */}
      <Link
        href={`/products/${product.id}`}
        aria-label={`View ${product.name}`}
        className="absolute inset-0 z-10"
      />
    </motion.article>
  );
}
