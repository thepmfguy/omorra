import Image from "next/image";
import { Reveal } from "./ui/Reveal";

export function Philosophy() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
      <div className="grid items-center gap-14 md:grid-cols-2 md:gap-24">
        <Reveal>
          <p className="eyebrow mb-8">Our thinking</p>
          <h2
            className="font-display text-[2rem] leading-[1.12] text-ink sm:text-[2.6rem] md:text-[3rem]"
            style={{ fontWeight: 330 }}
          >
            We believe a practice should be felt before it is performed.
          </h2>
          <p className="mt-8 max-w-[48ch] text-[1rem] leading-relaxed text-ink/70">
            Rose water has been drawn from the Damask rose for a thousand years,
            valued for the way it settles the breath. We build it into the
            objects you return to each morning, so the scent becomes the signal,
            and the signal becomes the calm.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-petal-light md:aspect-[3/4]">
            <Image
              src="/images/philosophy.png"
              alt="Rose petals suspended in clear water"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
