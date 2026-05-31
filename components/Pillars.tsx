import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./ui/Reveal";
import { pillars } from "@/lib/products";

const accentText: Record<string, string> = {
  sienna: "text-sienna",
  sage: "text-sage",
  rosette: "text-rosette",
};
const accentBg: Record<string, string> = {
  sienna: "bg-sienna",
  sage: "bg-sage",
  rosette: "bg-rosette",
};

export function Pillars() {
  return (
    <section id="pillars" className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
      <Reveal className="mb-16 max-w-[60ch] md:mb-24">
        <p className="eyebrow mb-6">The three pillars</p>
        <h2
          className="font-display text-[2.2rem] leading-[1.1] text-ink md:text-[3.2rem]"
          style={{ fontWeight: 500 }}
        >
          Inner life is not a single thing. It is a mind that needs something to
          read, a body that needs something to do, and a surface that tells the
          truth about both.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-3">
        {pillars.map((pillar, i) => (
          <Reveal key={pillar.key} delay={0.1 * i}>
            <Link href={`#${pillar.key.toLowerCase()}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-silk">
                <Image
                  src={pillar.image}
                  alt={pillar.key}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[1300ms] ease-out group-hover:scale-[1.05]"
                />
                <span className="absolute left-4 top-4 text-[0.62rem] uppercase tracking-[0.2em] text-canvas/90 mix-blend-difference">
                  {`0${i + 1}`}
                </span>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <span className={`h-px w-6 ${accentBg[pillar.accent]}`} />
                  <h3
                    className={`font-display text-2xl ${accentText[pillar.accent]}`}
                    style={{ fontWeight: 500 }}
                  >
                    {pillar.key}
                  </h3>
                </div>
                <p className="mt-4 max-w-[40ch] text-[0.95rem] leading-relaxed text-walnut">
                  {pillar.blurb}
                </p>
                <p className="mt-5 flex items-center gap-2 text-[0.74rem] uppercase tracking-[0.16em] text-ink">
                  <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-500 group-hover:after:scale-x-100">
                    {pillar.count} {pillar.count === 1 ? "object" : "objects"} →
                  </span>
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
