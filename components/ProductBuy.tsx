"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useCart } from "./CartProvider";
import { getProduct, type Product } from "@/lib/products";
import { shopifyProductUrl } from "@/lib/shopify";

function Accordion({ title, children, id }: { title: string; children: React.ReactNode; id: string }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  return (
    <div className="border-t border-ink/12">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sienna"
        aria-expanded={open}
        aria-controls={`panel-${id}`}
      >
        <span className="text-[0.76rem] uppercase tracking-[0.16em] text-ink">
          {title}
        </span>
        <span className="text-walnut transition-transform duration-300" aria-hidden="true" style={{ transform: open ? "rotate(45deg)" : "none" }}>
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`panel-${id}`}
            role="region"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-[0.92rem] leading-relaxed text-walnut">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Stepper({ qty, setQty }: { qty: number; setQty: (n: number) => void }) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-ink/20 px-3 py-1.5">
      <button
        type="button"
        onClick={() => setQty(Math.max(1, qty - 1))}
        aria-label="Decrease quantity"
        className="grid h-7 w-7 place-items-center text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sienna"
      >
        −
      </button>
      <span className="min-w-[1.25rem] text-center text-[0.9rem] tabular-nums">{qty}</span>
      <button
        type="button"
        onClick={() => setQty(Math.min(5, qty + 1))}
        aria-label="Increase quantity"
        className="grid h-7 w-7 place-items-center text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sienna"
      >
        +
      </button>
    </div>
  );
}

export function ProductBuy({ product }: { product: Product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  const [qty, setQty] = useState(1);

  const onAdd = () => {
    for (let i = 0; i < qty; i++) add(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const eyebrow =
    product.kind === "kit"
      ? `Ritual Kit · ${product.audience === "Women" ? "For Her" : "For Him"}`
      : `${product.number} · ${product.pillar ?? "The Collection"}`;

  // Compute savings for kits from included singles
  const kitSavings =
    product.kind === "kit" && product.contents
      ? product.contents.reduce((sum, cid) => sum + (getProduct(cid)?.price ?? 0), 0) - product.price
      : 0;

  return (
    <div className="md:sticky md:top-28">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h1
        className="font-display text-[2.6rem] leading-[1.04] text-ink md:text-[3.4rem]"
        style={{ fontWeight: 500 }}
      >
        {product.name}
      </h1>
      <p className="mt-3 text-[1.05rem] text-walnut">{product.tagline}</p>

      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
        <span className="font-display text-2xl leading-none text-ink" style={{ fontWeight: 400 }}>
          {product.priceLabel}
        </span>
        {kitSavings > 0 && (
          <span className="rounded-full bg-sage/15 px-3 py-1 text-[0.68rem] uppercase tracking-[0.14em] text-sage">
            Save ${kitSavings}
          </span>
        )}
        <span className="text-[0.74rem] uppercase tracking-[0.14em] text-walnut">
          {product.note} release
        </span>
      </div>
      <p className="mt-1 text-[0.72rem] text-walnut">Prices in USD</p>

      <p className="mt-7 max-w-[46ch] text-[1rem] leading-relaxed text-walnut">
        {product.description}
      </p>

      {product.kind === "kit" && product.contents && (
        <div className="mt-8 rounded-[3px] border border-ink/12 p-6">
          <p className="text-[0.66rem] uppercase tracking-[0.16em] text-walnut">
            What is inside
          </p>
          <ul className="mt-4 divide-y divide-ink/10">
            {product.contents.map((cid) => {
              const item = getProduct(cid);
              if (!item) return null;
              return (
                <li key={cid} className="py-2.5">
                  <Link
                    href={`/products/${item.id}`}
                    className="flex items-center justify-between text-[0.92rem] text-ink transition-colors hover:text-pecan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sienna"
                  >
                    <span>{item.name}</span>
                    <span className="text-walnut">{item.priceLabel}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div className="mt-9 flex flex-wrap items-center gap-4">
        <Stepper qty={qty} setQty={setQty} />
        <button
          onClick={onAdd}
          className="flex-1 rounded-full bg-ink py-4 text-[0.78rem] font-medium uppercase tracking-[0.16em] text-canvas transition-all duration-500 hover:bg-pecan hover:tracking-[0.2em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sienna sm:min-w-[220px] sm:flex-initial sm:px-12"
          aria-live="polite"
        >
          {added ? "Added to bag ✓" : `Add to bag — ${product.priceLabel}`}
        </button>
      </div>
      <p className="mt-4 text-[0.76rem] text-walnut">
        Numbered piece · hand-wrapped · complimentary returns
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.76rem]">
        <a
          href={shopifyProductUrl(product)}
          className="inline-flex items-center gap-2 uppercase tracking-[0.14em] text-walnut transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sienna"
        >
          Buy on Omorra store →
        </a>
        <span className="text-walnut">Local currency at checkout</span>
      </div>

      {/* Specs */}
      <dl className="mt-11 grid grid-cols-2 gap-y-5 border-t border-ink/12 pt-8">
        {product.specs.map((s) => (
          <div key={s.label}>
            <dt className="text-[0.64rem] uppercase tracking-[0.16em] text-walnut">
              {s.label}
            </dt>
            <dd className="mt-1 text-[0.9rem] text-ink">{s.value}</dd>
          </div>
        ))}
      </dl>

      {/* Accordions */}
      <div className="mt-10">
        <Accordion id="ritual" title="The ritual">{product.ritual}</Accordion>
        <Accordion id="provenance" title="Provenance">{product.story}</Accordion>
        <Accordion id="care" title="Care">{product.care}</Accordion>
      </div>
    </div>
  );
}
