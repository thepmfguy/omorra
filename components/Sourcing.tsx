import Image from "next/image";
import { Reveal } from "./ui/Reveal";

export function Sourcing() {
  return (
    <section id="sourcing" className="relative overflow-hidden">
      <div className="relative h-[60vh] min-h-[440px] w-full">
        <Image
          src="/images/story.png"
          alt="Morning light through an open doorway"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/45" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
          <Reveal className="max-w-xl">
            <p className="eyebrow mb-6 text-canvas/80">Rooted in the source</p>
            <h2
              className="font-display text-[2.2rem] leading-[1.1] text-canvas md:text-[3.2rem]"
              style={{ fontWeight: 500 }}
            >
              Dinacharya. The discipline of daily rhythm.
            </h2>
            <p className="mt-7 max-w-[48ch] text-[1rem] leading-relaxed text-canvas/95">
              The instruction to begin and end the day with intention was set
              down in the Charaka Samhita over two thousand years ago. We did not
              invent it. We made the objects that bring it back into the texture
              of an ordinary day.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
