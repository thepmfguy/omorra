"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./ui/Reveal";
import { useCart } from "./CartProvider";
import { kits } from "@/lib/products";

const contentLabels = ["Rose Water Mist", "The First 21 Days", "Moisturizer", "Face Wash"];

export function RitualKit() {
  const { add } = useCart();

  return (
    <section id="ritual-kit" className="bg-canvas-deep">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
        <Reveal className="mb-16 max-w-[60ch]">
          <p className="eyebrow mb-6">The combo · Ritual Kit</p>
          <h2
            className="font-display text-[2.2rem] leading-[1.1] text-ink md:text-[3.2rem]"
            style={{ fontWeight: 500 }}
          >
            The whole ritual, in one box.
          </h2>
          <p className="mt-7 max-w-[52ch] text-[1.02rem] leading-relaxed text-walnut">
            A verse to read, a mist to begin, and the cleanse-and-nourish that
            closes the day. The four objects that hold the practice together,
            hand-wrapped and offered at a saving. Chosen for her, or for him.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {kits.map((kit, i) => (
            <Reveal key={kit.id} delay={0.1 * i}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[3px] bg-canvas">
                <Link href={`/products/${kit.id}`} className="relative block aspect-[3/2] overflow-hidden bg-silk">
                  <Image
                    src={kit.image}
                    alt={kit.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1300ms] ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-canvas/85 px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-ink/75 backdrop-blur-sm">
                    {kit.audience === "Women" ? "For Her" : "For Him"}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-7 md:p-9">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-2xl text-ink md:text-[1.8rem]" style={{ fontWeight: 500 }}>
                      {kit.name}
                    </h3>
                    <span className="text-[0.95rem] text-ink/70">{kit.priceLabel}</span>
                  </div>

                  <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-ink/10 pt-5">
                    {contentLabels.map((c) => (
                      <li key={c} className="flex items-center gap-2 text-[0.82rem] text-walnut">
                        <span className="h-1 w-1 rounded-full bg-rosette" />
                        {c}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 text-[0.78rem] text-walnut">
                    Four pieces · {kit.detail.split("·")[1]?.trim() ?? "a saving"}
                  </p>

                  <div className="mt-auto flex items-center gap-6 pt-8">
                    <button
                      onClick={() => add(kit)}
                      className="group/btn inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-[0.76rem] font-medium uppercase tracking-[0.16em] text-canvas transition-all duration-500 hover:bg-pecan hover:tracking-[0.2em]"
                    >
                      Add the kit — {kit.priceLabel}
                    </button>
                    <Link
                      href={`/products/${kit.id}`}
                      className="text-[0.76rem] uppercase tracking-[0.16em] text-walnut transition-colors hover:text-ink"
                    >
                      Details →
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
