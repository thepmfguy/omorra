"use client";

import Image from "next/image";
import { Reveal } from "./ui/Reveal";
import { useCart } from "./CartProvider";
import { products } from "@/lib/products";

export function Spotlight() {
  const { add } = useCart();
  const mat = products[0];

  return (
    <section className="bg-canvas-deep">
      <div className="mx-auto grid max-w-[1400px] items-stretch gap-0 md:grid-cols-2">
        {/* Image side */}
        <div className="relative min-h-[60vh] bg-petal-light md:min-h-[88vh]">
          <Image
            src="/images/spotlight.png"
            alt="The Omorra Mat, rolled and bound with an embossed leather strap"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Copy side */}
        <div className="flex flex-col justify-center px-6 py-20 md:px-16 md:py-28">
          <Reveal>
            <p className="eyebrow mb-6">The signature object</p>
            <h2
              className="font-display text-[2.4rem] leading-[1.05] text-ink md:text-[3.4rem]"
              style={{ fontWeight: 330 }}
            >
              The Mat
            </h2>
            <p className="mt-7 max-w-[44ch] text-[1.02rem] leading-relaxed text-ink/75">
              {mat.description} Cured slowly, finished by hand, and bound in a
              vegetable-tanned strap debossed with the Omorra mark.
            </p>

            <dl className="mt-10 grid max-w-md grid-cols-2 gap-y-5 border-t border-ink/12 pt-8">
              {[
                ["Material", "Natural tree rubber"],
                ["Dimensions", "24 × 72 in · 4mm"],
                ["Infusion", "Triple-distilled rose"],
                ["Release", "Numbered, limited"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[0.66rem] uppercase tracking-[0.16em] text-ink/45">
                    {k}
                  </dt>
                  <dd className="mt-1 text-[0.92rem] text-ink/80">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-11 flex items-center gap-7">
              <button
                onClick={() => add(mat)}
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-[0.78rem] font-medium uppercase tracking-[0.16em] text-canvas transition-all duration-500 hover:bg-clay hover:tracking-[0.2em]"
              >
                Add to bag — {mat.priceLabel}
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
