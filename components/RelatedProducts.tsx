import Link from "next/link";
import { Reveal } from "./ui/Reveal";
import { ProductCard } from "./ProductCard";
import { relatedProducts } from "@/lib/products";

export function RelatedProducts({ currentId }: { currentId: string }) {
  const items = relatedProducts(currentId, 3);
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <Reveal className="mb-14 flex items-end justify-between">
        <h2
          className="font-display text-[1.9rem] leading-tight text-ink md:text-[2.6rem]"
          style={{ fontWeight: 330 }}
        >
          Complete the ritual
        </h2>
        <Link
          href="/#collection"
          className="hidden text-[0.76rem] uppercase tracking-[0.16em] text-ink/55 transition-colors hover:text-ink sm:block"
        >
          All four objects →
        </Link>
      </Reveal>
      <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-7">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
