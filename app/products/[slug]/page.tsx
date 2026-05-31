import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { products, getProduct } from "@/lib/products";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductBuy } from "@/components/ProductBuy";
import { RelatedProducts } from "@/components/RelatedProducts";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/ui/Reveal";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Omorra" };
  return {
    title: `${product.name} — Omorra`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const contextImage = product.gallery[product.gallery.length - 1];

  return (
    <>
      <main className="pt-6">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <nav className="flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.14em] text-ink/45">
            <Link href="/" className="transition-colors hover:text-ink">
              Home
            </Link>
            <span>/</span>
            <Link href="/#collection" className="transition-colors hover:text-ink">
              Collection
            </Link>
            <span>/</span>
            <span className="text-ink/70">{product.name}</span>
          </nav>
        </div>

        {/* Gallery + Buy */}
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-10 md:grid-cols-12 md:gap-14 md:px-10 md:py-16">
          <div className="md:col-span-7">
            <ProductGallery images={product.gallery} alt={product.name} />
          </div>
          <div className="md:col-span-5">
            <ProductBuy product={product} />
          </div>
        </div>

        {/* Editorial provenance band */}
        <section className="bg-canvas-deep">
          <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-20 md:px-10 md:py-32">
            <Reveal>
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2px] bg-petal-light">
                <Image
                  src={contextImage}
                  alt={`${product.name} in context`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="eyebrow mb-6">On the making</p>
              <h2
                className="font-display text-[1.9rem] leading-[1.12] text-ink md:text-[2.6rem]"
                style={{ fontWeight: 330 }}
              >
                {product.ritual}
              </h2>
              <p className="mt-8 max-w-[48ch] text-[1rem] leading-relaxed text-ink/70">
                {product.story}
              </p>
            </Reveal>
          </div>
        </section>

        <RelatedProducts currentId={product.id} />
      </main>
      <Footer />
    </>
  );
}
