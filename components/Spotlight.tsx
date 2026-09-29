"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./ui/Reveal";
import { useCart } from "./CartProvider";
import { getProduct } from "@/lib/products";

export function Spotlight() {
  const { add } = useCart();
  const cards = getProduct("the-first-21-days")!;

  return (
    <section className="bg-canvas">
      <div className="mx-auto grid max-w-[1400px] items-stretch gap-0 md:grid-cols-2">
        {/* Image side */}
        <div className="relative min-h-[60vh] bg-silk md:min-h-[86vh]">
          <Image
            src="/images/wisdom-cards.png"
            alt="The First 21 Days, letterpress wisdom cards"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Copy side */}
        <div className="flex flex-col justify-center px-6 py-20 md:px-16 md:py-28">
          <Reveal>
            <p className="eyebrow mb-6">Begin here · Wisdom</p>
            <h2
              className="font-display text-[2.6rem] leading-[1.04] text-ink md:text-[3.6rem]"
              style={{ fontWeight: 500 }}
            >
              The First 21 Days
            </h2>
            <p className="mt-7 max-w-[44ch] text-[1.04rem] leading-relaxed text-walnut">
              A deck built to start a habit. Twenty-one cards, one for each
              morning, each carrying a line from the Gita or the Upanishads and a
              plain reflection to test against the day. Long enough to become a
              rhythm. A wisdom card without a practice is a quotation, so each one
              points to something to do.
            </p>

            <dl className="mt-10 grid max-w-md grid-cols-2 gap-y-5 border-t border-ink/12 pt-8">
              {[
                ["Contents", "21 letterpress cards"],
                ["Source", "Gita & Upanishads"],
                ["Paper", "Cotton rag, deckled"],
                ["Release", "Numbered, limited"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[0.66rem] uppercase tracking-[0.16em] text-walnut">
                    {k}
                  </dt>
                  <dd className="mt-1 text-[0.92rem] text-ink">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-11 flex flex-wrap items-center gap-6">
              <button
                onClick={() => add(cards)}
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-[0.78rem] font-medium uppercase tracking-[0.16em] text-canvas transition-all duration-500 hover:bg-pecan hover:tracking-[0.2em]"
              >
                Add to bag — {cards.priceLabel}
              </button>
              <Link
                href="/products/the-first-21-days"
                className="text-[0.78rem] uppercase tracking-[0.16em] text-walnut transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sienna"
              >
                View details →
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
