import { Reveal } from "./ui/Reveal";
import { ProductCard } from "./ProductCard";
import { byPillar, pillarOrder } from "@/lib/products";

const accentText: Record<string, string> = {
  Wisdom: "text-sienna",
  Practice: "text-sage",
  Nourish: "text-rosette",
};
const accentBg: Record<string, string> = {
  Wisdom: "bg-sienna",
  Practice: "bg-sage",
  Nourish: "bg-rosette",
};

const pillarLine: Record<string, string> = {
  Wisdom: "Something to read.",
  Practice: "Something to do.",
  Nourish: "Something for the skin, for her and for him.",
};

export function Collection() {
  return (
    <section id="collection" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <Reveal className="mb-16">
        <p className="eyebrow mb-5">The collection</p>
        <h2
          className="font-display max-w-[16ch] text-[2.2rem] leading-[1.08] text-ink md:text-[3rem]"
          style={{ fontWeight: 500 }}
        >
          Every object, by pillar.
        </h2>
      </Reveal>

      <div className="space-y-24">
        {pillarOrder.map((pillar) => {
          const items = byPillar(pillar);
          return (
            <div key={pillar} id={pillar.toLowerCase()} className="scroll-mt-28">
              <Reveal className="mb-10 flex items-end justify-between border-b border-ink/12 pb-5">
                <div className="flex items-center gap-3">
                  <span className={`h-px w-7 ${accentBg[pillar]}`} />
                  <h3
                    className={`font-display text-[1.7rem] ${accentText[pillar]} md:text-[2.1rem]`}
                    style={{ fontWeight: 500 }}
                  >
                    {pillar}
                  </h3>
                </div>
                <p className="hidden text-[0.82rem] text-walnut sm:block">
                  {pillarLine[pillar]}
                </p>
              </Reveal>

              <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-7">
                {items.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
