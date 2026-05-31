import { Reveal } from "./ui/Reveal";
import { ProductCard } from "./ProductCard";
import { products } from "@/lib/products";

export function Collection() {
  return (
    <section id="collection" className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
      <Reveal className="mb-16 flex flex-col items-start justify-between gap-6 md:mb-20 md:flex-row md:items-end">
        <div>
          <p className="eyebrow mb-5">The collection</p>
          <h2
            className="font-display max-w-[16ch] text-[2.2rem] leading-[1.08] text-ink md:text-[3rem]"
            style={{ fontWeight: 330 }}
          >
            Four objects. One ritual.
          </h2>
        </div>
        <p className="max-w-[34ch] text-[0.95rem] leading-relaxed text-ink/60">
          A deliberately small release. Each piece is made in limited numbers
          and finished by hand, so nothing here is ever in a hurry.
        </p>
      </Reveal>

      <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-7">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
