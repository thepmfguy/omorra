"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "./CartProvider";

export function CartDrawer() {
  const { isOpen, close, lines, subtotal, setQty, remove, count } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-ink/30 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={close}
          />
          <motion.aside
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-[440px] flex-col bg-canvas shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between border-b border-ink/12 px-7 py-6">
              <h2 className="text-[0.74rem] uppercase tracking-[0.2em] text-ink">
                Your bag ({count})
              </h2>
              <button
                onClick={close}
                className="text-[0.74rem] uppercase tracking-[0.16em] text-ink/55 transition-colors hover:text-ink"
              >
                Close
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-7">
              {lines.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <p className="font-display text-2xl text-ink/80" style={{ fontWeight: 330 }}>
                    Your bag is empty.
                  </p>
                  <p className="mt-3 max-w-[28ch] text-[0.9rem] text-ink/55">
                    Begin with The Mat, and the ritual will follow.
                  </p>
                </div>
              ) : (
                <ul className="divide-y divide-ink/10">
                  {lines.map(({ product, qty }) => (
                    <li key={product.id} className="flex gap-4 py-6">
                      <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-[2px] bg-petal-light">
                        <Image
                          src={product.image}
                          alt={product.name}
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
                          <span className="text-[0.9rem] text-ink/70">
                            {product.priceLabel}
                          </span>
                        </div>
                        <p className="mt-0.5 text-[0.8rem] text-ink/50">
                          {product.tagline}
                        </p>
                        <div className="mt-auto flex items-center justify-between pt-3">
                          <div className="flex items-center gap-3 rounded-full border border-ink/15 px-3 py-1">
                            <button
                              onClick={() => setQty(product.id, qty - 1)}
                              className="text-ink/60 transition-colors hover:text-ink"
                              aria-label="Decrease quantity"
                            >
                              −
                            </button>
                            <span className="w-4 text-center text-[0.85rem]">{qty}</span>
                            <button
                              onClick={() => setQty(product.id, qty + 1)}
                              className="text-ink/60 transition-colors hover:text-ink"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => remove(product.id)}
                            className="text-[0.72rem] uppercase tracking-[0.12em] text-ink/40 transition-colors hover:text-clay"
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
                  <span className="text-[0.74rem] uppercase tracking-[0.16em] text-ink/55">
                    Subtotal
                  </span>
                  <span className="font-display text-xl text-ink" style={{ fontWeight: 400 }}>
                    ${subtotal}
                  </span>
                </div>
                <p className="mt-1.5 text-[0.74rem] text-ink/45">
                  Shipping and rose-scented tissue calculated at checkout.
                </p>
                <button className="mt-5 w-full rounded-full bg-ink py-4 text-[0.78rem] uppercase tracking-[0.16em] text-canvas transition-colors hover:bg-clay">
                  Proceed to checkout
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
