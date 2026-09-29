"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCart } from "./CartProvider";
import { buildShopifyCartUrl } from "@/lib/shopify";

export function CartDrawer() {
  const { isOpen, close, lines, subtotal, setQty, remove, count } = useCart();
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  // Esc closes drawer + focus management + body scroll lock
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => closeBtnRef.current?.focus(), 100);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      clearTimeout(t);
    };
  }, [isOpen, close]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-[2px]"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={close}
            aria-hidden="true"
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Shopping bag"
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-[440px] flex-col bg-canvas shadow-2xl"
            initial={reduce ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between border-b border-ink/12 px-7 py-6">
              <h2 className="text-[0.74rem] uppercase tracking-[0.2em] text-ink">
                Your bag ({count})
              </h2>
              <button
                ref={closeBtnRef}
                onClick={close}
                aria-label="Close bag"
                className="text-[0.74rem] uppercase tracking-[0.16em] text-walnut transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sienna"
              >
                Close
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-7">
              {lines.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <p className="font-display text-2xl text-ink" style={{ fontWeight: 500 }}>
                    Your bag is empty.
                  </p>
                  <p className="mt-3 max-w-[28ch] text-[0.9rem] text-walnut">
                    Begin with The Cards, and the practice will follow.
                  </p>
                  <Link
                    href="/#collection"
                    onClick={close}
                    className="mt-8 rounded-full bg-ink px-8 py-3 text-[0.72rem] uppercase tracking-[0.16em] text-canvas transition-colors hover:bg-pecan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sienna"
                  >
                    Browse the collection →
                  </Link>
                </div>
              ) : (
                <ul className="divide-y divide-ink/10">
                  {lines.map(({ product, qty }) => (
                    <li key={product.id} className="flex gap-4 py-6">
                      <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-[2px] bg-petal-light">
                        <Image
                          src={product.image}
                          alt={product.alt ?? product.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex justify-between">
                          <h3 className="font-display text-lg text-ink" style={{ fontWeight: 400 }}>
                            {product.name}
                          </h3>
                          <span className="text-[0.9rem] text-walnut">
                            {product.priceLabel}
                          </span>
                        </div>
                        <p className="mt-0.5 text-[0.8rem] text-walnut">
                          {product.tagline}
                        </p>
                        <div className="mt-auto flex items-center justify-between pt-3">
                          <div className="flex items-center gap-3 rounded-full border border-ink/20 px-3 py-1">
                            <button
                              onClick={() => setQty(product.id, qty - 1)}
                              className="text-ink transition-colors hover:text-pecan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sienna"
                              aria-label={`Decrease ${product.name} quantity`}
                            >
                              −
                            </button>
                            <span className="w-4 text-center text-[0.85rem] tabular-nums">{qty}</span>
                            <button
                              onClick={() => setQty(product.id, qty + 1)}
                              className="text-ink transition-colors hover:text-pecan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sienna"
                              aria-label={`Increase ${product.name} quantity`}
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => remove(product.id)}
                            className="text-[0.72rem] uppercase tracking-[0.12em] text-walnut transition-colors hover:text-pecan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sienna"
                            aria-label={`Remove ${product.name} from bag`}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {lines.length > 0 && (
              <div className="border-t border-ink/12 px-7 py-6">
                <div className="flex items-center justify-between">
                  <span className="text-[0.74rem] uppercase tracking-[0.16em] text-walnut">
                    Subtotal
                  </span>
                  <span className="font-display text-xl text-ink tabular-nums" style={{ fontWeight: 400 }}>
                    ${subtotal}
                  </span>
                </div>
                <p className="mt-1.5 text-[0.74rem] text-walnut">
                  Prices in USD. Local currency shown at checkout.
                </p>
                <a
                  href={buildShopifyCartUrl(lines)}
                  className="mt-5 block w-full rounded-full bg-ink py-4 text-center text-[0.78rem] uppercase tracking-[0.16em] text-canvas transition-colors hover:bg-pecan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sienna"
                >
                  Proceed to checkout →
                </a>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
