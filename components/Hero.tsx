"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

function Line({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative bg-canvas">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 pb-16 pt-14 md:grid-cols-12 md:gap-8 md:px-10 md:pb-24 md:pt-20">
        {/* Left — type */}
        <div className="flex flex-col justify-center md:col-span-6 md:pr-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="h-px w-10 bg-ink/30" />
            <span className="eyebrow">A limited first release</span>
          </motion.div>

          <h1
            className="font-display text-[2.9rem] leading-[1.04] text-ink sm:text-[3.6rem] md:text-[4rem] lg:text-[4.6rem]"
            style={{ fontWeight: 320 }}
          >
            <Line delay={0.1}>Rose water,</Line>
            <Line delay={0.2}>for the</Line>
            <Line delay={0.3}>
              <span className="italic text-clay">unhurried</span> practice.
            </Line>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease }}
            className="mt-9 max-w-[40ch] text-[1.02rem] leading-relaxed text-ink/70"
          >
            Omorra is a small house of rose water-infused objects, made to slow
            the body and scent the room. The infusion is held in the material
            itself, not sprayed on the surface. A quieter way to begin.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.74, ease }}
            className="mt-11 flex items-center gap-8"
          >
            <Link
              href="#collection"
              className="group inline-flex items-center gap-3 text-[0.8rem] uppercase tracking-[0.18em] text-ink"
            >
              <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-100 after:bg-ink after:transition-transform after:duration-500 group-hover:after:scale-x-0">
                Explore the collection
              </span>
              <span className="transition-transform duration-500 group-hover:translate-x-1.5">
                →
              </span>
            </Link>
            <Link
              href="/products/the-mat"
              className="text-[0.8rem] uppercase tracking-[0.18em] text-ink/55 transition-colors hover:text-ink"
            >
              The Mat
            </Link>
          </motion.div>
        </div>

        {/* Right — framed still */}
        <div className="md:col-span-6">
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.35, ease }}
            className="relative md:ml-auto md:max-w-[520px]"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-petal-light">
              <motion.div
                initial={{ scale: 1.12 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.6, delay: 0.35, ease }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/hero-still.png"
                  alt="The Omorra Mat, rolled and bound with an embossed leather strap"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 520px"
                  className="object-cover"
                />
              </motion.div>
              <span className="absolute right-4 top-4 text-[0.62rem] uppercase tracking-[0.2em] text-canvas/90 mix-blend-difference">
                No. 01
              </span>
            </div>
            <figcaption className="mt-4 flex items-center justify-between text-[0.72rem] uppercase tracking-[0.14em] text-ink/50">
              <span>Damask rose · the first release</span>
              <span>The Mat</span>
            </figcaption>
          </motion.figure>
        </div>
      </div>

      {/* Frama-style meta strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9, ease }}
        className="border-y border-ink/10"
      >
        <ul className="mx-auto grid max-w-[1400px] grid-cols-1 divide-y divide-ink/10 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-10">
          {[
            ["Infused, not sprayed", "Scent held in the material"],
            ["Numbered release", "Made in small batches"],
            ["Single origin", "Triple-distilled Damask rose"],
          ].map(([title, sub]) => (
            <li key={title} className="flex flex-col gap-1 py-5 sm:px-8 sm:first:pl-0">
              <span className="text-[0.78rem] uppercase tracking-[0.14em] text-ink">
                {title}
              </span>
              <span className="text-[0.82rem] text-ink/55">{sub}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
