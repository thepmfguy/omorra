"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "./CartProvider";
import type { Product } from "@/lib/products";

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-ink/12">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-[0.76rem] uppercase tracking-[0.16em] text-ink">
          {title}
        </span>
        <span className="text-ink/50 transition-transform duration-300" style={{ transform: open ? "rotate(45deg)" : "none" }}>
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-[0.92rem] leading-relaxed text-ink/65">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ProductBuy({ product }: { product: Product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const onAdd = () => {
    add(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="md:sticky md:top-28">
      <p className="eyebrow mb-4">{product.number} · The Collection</p>
      <h1
        className="font-display text-[2.6rem] leading-[1.04] text-ink md:text-[3.2rem]"
        style={{ fontWeight: 330 }}
      >
        {product.name}
      </h1>
      <p className="mt-3 text-[1.05rem] text-ink/55">{product.tagline}</p>

      <div className="mt-6 flex items-baseline gap-4">
        <span className="font-display text-2xl text-ink" style={{ fontWeight: 400 }}>
          {product.priceLabel}
        </span>
        <span className="text-[0.74rem] uppercase tracking-[0.14em] text-ink/40">
          {product.note} release
        </span>
      </div>

      <p className="mt-7 max-w-[46ch] text-[1rem] leading-relaxed text-ink/70">
        {product.description}
      </p>

      <button
        onClick={onAdd}
        className="mt-9 w-full rounded-full bg-ink py-4 text-[0.78rem] font-medium uppercase tracking-[0.16em] text-canvas transition-all duration-500 hover:bg-clay hover:tracking-[0.2em] sm:w-auto sm:px-12"
      >
        {added ? "Added to bag ✓" : `Add to bag — ${product.priceLabel}`}
      </button>
      <p className="mt-4 text-[0.76rem] text-ink/45">
        Numbered piece · ships in rose-scented tissue · complimentary returns
      </p>

      {/* Specs */}
      <dl className="mt-11 grid grid-cols-2 gap-y-5 border-t border-ink/12 pt-8">
        {product.specs.map((s) => (
          <div key={s.label}>
            <dt className="text-[0.64rem] uppercase tracking-[0.16em] text-ink/45">
              {s.label}
            </dt>
            <dd className="mt-1 text-[0.9rem] text-ink/80">{s.value}</dd>
          </div>
        ))}
      </dl>

      {/* Accordions */}
      <div className="mt-10">
        <Accordion title="The ritual">{product.ritual}</Accordion>
        <Accordion title="Provenance">{product.story}</Accordion>
        <Accordion title="Care">{product.care}</Accordion>
      </div>
    </div>
  );
}
