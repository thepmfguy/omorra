import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Why Omorra exists: to close the gap between India's wisdom traditions and the texture of ordinary days, through small daily objects.",
  alternates: { canonical: "/our-story" },
  openGraph: {
    title: "Our Story — Omorra",
    description:
      "Why Omorra exists: to close the gap between India's wisdom traditions and the texture of ordinary days.",
    url: "/our-story",
    type: "article",
    images: [{ url: "/images/story.png", alt: "Morning light through an open doorway" }],
  },
};

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[1.08rem] leading-[1.85] text-ink">{children}</p>
  );
}

export default function OurStoryPage() {
  return (
    <>
      <main>
        {/* Title */}
        <header className="mx-auto max-w-[1400px] px-6 pb-12 pt-16 md:px-10 md:pb-20 md:pt-24">
          <Reveal>
            <p className="eyebrow mb-7">Our story</p>
            <h1
              className="font-display max-w-[20ch] text-[2.8rem] leading-[1.04] text-ink md:text-[4.4rem]"
              style={{ fontWeight: 500 }}
            >
              India has never been short of wisdom.
            </h1>
            <p className="mt-8 max-w-[46ch] text-[1.05rem] leading-relaxed text-walnut">
              It has been short of a brand that treats its own wisdom with the
              seriousness it deserves.
            </p>
          </Reveal>
        </header>

        {/* Opening image */}
        <Reveal>
          <div className="relative mx-auto aspect-[16/9] w-full max-w-[1400px] overflow-hidden bg-silk px-0 md:rounded-[2px]">
            <Image
              src="/images/story.png"
              alt="Morning light through an open doorway"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Body */}
        <article className="mx-auto max-w-[640px] px-6 py-20 md:py-28">
          <div className="space-y-7">
            <Reveal>
              <P>
                Most Indians inherit the Bhagavad Gita without ever reading it.
                We grow up near Ayurveda without being taught it. We learn yoga
                as posture without the philosophy that gave the posture meaning.
                One of the great wisdom traditions of human civilisation sits, in
                most of our lives, slightly out of reach: present but not
                practiced, respected but not lived.
              </P>
            </Reveal>

            <Reveal>
              <p className="font-display text-[1.9rem] leading-[1.25] text-pecan md:text-[2.3rem]" style={{ fontWeight: 500 }}>
                I built Omorra to close that gap.
              </p>
            </Reveal>

            <Reveal>
              <P>
                Not with a retreat. Not with a course. Not with another book on
                the shelf. With the small, daily objects through which a practice
                actually enters a life: a card read in the morning, a ritual done
                before the day begins, an oil applied to the skin at night. The
                texture of ordinary days is where wisdom either takes root or
                doesn&rsquo;t. Everything else is decoration.
              </P>
            </Reveal>

            <Reveal>
              <P>
                The modern Indian morning is not short of ambition. It is short
                of pause. Between the phone at 7 and the first meeting at 10,
                between the commute and the inbox, between the evening meal and
                the scroll that ends the day, there is almost no structured
                moment in which a person sits with themselves. The Gita has a
                word for that moment. The Upanishads have a method for it.
                Ayurveda has a practice for it: dinacharya, the discipline of
                daily rhythm, prescribed in the Charaka Samhita over two thousand
                years ago. These are not ancient secrets. They are instructions
                we stopped following.
              </P>
            </Reveal>

            <Reveal>
              <P>
                Omorra rests on three pillars, Wisdom, Practice and Nourish,
                because inner life is not a single thing. It is a mind that needs
                something to read, a body that needs something to do, and a
                surface that tells the truth about both. A wisdom card without a
                practice is a quotation. A practice without philosophy is
                exercise. Skincare without the inner life behind it is packaging.
                Held together, they become something else: a way of beginning and
                ending a day that is unmistakably Indian in its roots and
                entirely modern in its form.
              </P>
            </Reveal>

            <Reveal>
              <p className="border-l-2 border-sienna pl-6 font-display text-[1.7rem] leading-[1.3] text-ink md:text-[2.1rem]" style={{ fontWeight: 500 }}>
                Inner clarity is not a philosophy to aspire to. It is a practice
                to begin today.
              </p>
            </Reveal>

            <Reveal>
              <P>
                India has not been short of wisdom. It has been short of a brand
                that treats its own wisdom with the seriousness it deserves.
              </P>
            </Reveal>

            <Reveal>
              <div className="pt-2">
                <p className="font-display text-2xl text-ink" style={{ fontWeight: 500 }}>
                  Omorra is that brand.
                </p>
                <p className="mt-6 text-[1.2rem] italic text-walnut">
                  The door is open.
                </p>
              </div>
            </Reveal>
          </div>

          {/* CTA */}
          <Reveal>
            <div className="mt-16 flex flex-wrap items-center gap-6 border-t border-ink/12 pt-10">
              <Link
                href="/#pillars"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-[0.78rem] uppercase tracking-[0.16em] text-canvas transition-all duration-500 hover:bg-pecan hover:tracking-[0.2em]"
              >
                Explore the three pillars
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="/products/the-first-21-days"
                className="text-[0.78rem] uppercase tracking-[0.16em] text-walnut transition-colors hover:text-ink"
              >
                Begin with The First 21 Days
              </Link>
            </div>
          </Reveal>
        </article>
      </main>
      <Footer />
    </>
  );
}
