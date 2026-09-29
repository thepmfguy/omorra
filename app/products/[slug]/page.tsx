import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { products, getProduct } from "@/lib/products";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductBuy } from "@/components/ProductBuy";
import { RelatedProducts } from "@/components/RelatedProducts";
import { MobileStickyBuy } from "@/components/MobileStickyBuy";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { ProductSchema, BreadcrumbSchema } from "@/components/StructuredData";

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
  const url = `/products/${product.id}`;
  const ogImage = product.image;
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${product.name} — Omorra`,
      description: product.description,
      url,
      type: "website",
      images: [{ url: ogImage, alt: product.alt, width: 1200, height: 1500 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} — Omorra`,
      description: product.tagline,
      images: [ogImage],
    },
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
      <ProductSchema product={product} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Collection", url: "/#collection" },
          { name: product.name, url: `/products/${product.id}` },
        ]}
      />
      <main className="pt-6 pb-24 md:pb-0">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.14em] text-walnut">
            <Link href="/" className="transition-colors hover:text-ink">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/#collection" className="transition-colors hover:text-ink">
              Collection
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-ink" aria-current="page">
              {product.name}
            </span>
          </nav>
        </div>

        {/* Gallery + Buy */}
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-10 md:grid-cols-12 md:gap-14 md:px-10 md:py-16">
          <div className="md:col-span-7">
            <ProductGallery images={product.gallery} alt={product.alt} />
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
                style={{ fontWeight: 400 }}
              >
                {product.ritual}
              </h2>
              <p className="mt-8 max-w-[48ch] text-[1rem] leading-relaxed text-walnut">
                {product.story}
              </p>
            </Reveal>
          </div>
        </section>

        <RelatedProducts currentId={product.id} />
      </main>
      <MobileStickyBuy product={product} />
      <Footer />
    </>
  );
}
