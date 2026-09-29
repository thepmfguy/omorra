import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative bg-canvas">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 pb-10 pt-14 md:grid-cols-12 md:gap-8 md:px-10 md:pb-14 md:pt-20">
        {/* Left — type */}
        <div className="flex flex-col justify-center md:col-span-6 md:pr-8">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-sienna" />
            <span className="eyebrow">Wisdom · Practice · Nourish</span>
          </div>

          <h1
            className="font-display text-[3.1rem] leading-[1.0] text-ink sm:text-[4rem] md:text-[4.4rem] lg:text-[5.2rem]"
            style={{ fontWeight: 500 }}
          >
            Wisdom,<br />
            made a<br />
            <span className="italic text-pecan">daily</span> practice.
          </h1>

          <p className="mt-9 max-w-[44ch] text-[1.04rem] leading-relaxed text-walnut">
            Most of us inherit India&rsquo;s wisdom traditions without ever living
            them. Omorra closes that gap with the small, daily objects through
            which a practice actually enters a life: a verse to read, a practice
            to do, an oil for the skin.
          </p>

          <div className="mt-11 flex items-center gap-8">
            <Link
              href="#pillars"
              className="group inline-flex items-center gap-3 text-[0.8rem] uppercase tracking-[0.18em] text-ink"
            >
              <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-100 after:bg-ink after:transition-transform after:duration-500 group-hover:after:scale-x-0">
                The three pillars
              </span>
              <span className="transition-transform duration-500 group-hover:translate-x-1.5">
                →
              </span>
            </Link>
            <Link
              href="/our-story"
              className="text-[0.8rem] uppercase tracking-[0.18em] text-walnut transition-colors hover:text-ink"
            >
              Our story
            </Link>
          </div>
        </div>

        {/* Right — framed still */}
        <div className="md:col-span-6">
          <figure className="relative md:ml-auto md:max-w-[520px]">
            <div className="relative aspect-[4/5] overflow-hidden bg-silk">
              <Image
                src="/images/hero-still.png"
                alt="An Omorra morning ritual: a wisdom card, a ceramic cup and an Ayurvedic oil"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 520px"
                className="object-cover"
              />
              <span className="absolute right-4 top-4 rounded-full bg-canvas/70 px-3 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-ink backdrop-blur-sm">
                The morning ritual
              </span>
            </div>
            <figcaption className="mt-4 flex items-center justify-between text-[0.72rem] uppercase tracking-[0.14em] text-walnut">
              <span>Read · do · nourish</span>
              <span>Begin today</span>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Frama-style meta strip */}
      <div className="border-y border-ink/10">
        <ul className="mx-auto grid max-w-[1400px] grid-cols-1 divide-y divide-ink/10 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-10">
          {[
            ["Rooted in the source", "The Gita & the Upanishads"],
            ["Daily rhythm", "Dinacharya, from the Charaka Samhita"],
            ["Indian in root", "Entirely modern in form"],
          ].map(([title, sub]) => (
            <li key={title} className="flex flex-col gap-1 py-7 sm:px-8 sm:first:pl-0">
              <span className="text-[0.78rem] uppercase tracking-[0.14em] text-ink">
                {title}
              </span>
              <span className="text-[0.82rem] text-walnut">{sub}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
