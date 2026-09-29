"use client";

import { useEffect, useState } from "react";
import { useCart } from "./CartProvider";
import type { Product } from "@/lib/products";

export function MobileStickyBuy({ product }: { product: Product }) {
  const { add } = useCart();
  const [visible, setVisible] = useState(false);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onAdd = () => {
    add(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-canvas/95 px-4 py-3 backdrop-blur-md transition-transform duration-500 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-[520px] items-center justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-[1.05rem] text-ink" style={{ fontWeight: 500 }}>
            {product.name}
          </p>
          <p className="text-[0.78rem] text-walnut">{product.priceLabel}</p>
        </div>
        <button
          onClick={onAdd}
          className="shrink-0 rounded-full bg-ink px-5 py-3 text-[0.72rem] uppercase tracking-[0.14em] text-canvas transition-colors hover:bg-pecan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sienna"
        >
          {added ? "Added ✓" : "Add to bag"}
        </button>
      </div>
    </div>
  );
}
