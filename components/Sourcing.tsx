import Image from "next/image";
import { Reveal } from "./ui/Reveal";

export function Sourcing() {
  return (
    <section id="sourcing" className="relative overflow-hidden">
      <div className="relative h-[80vh] min-h-[560px] w-full">
        <Image
          src="/images/sourcing.png"
          alt="Rose water decanted from glass, scattered Damask petals"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/25" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
          <Reveal className="max-w-xl">
            <p className="eyebrow mb-6 text-canvas/80">Provenance</p>
            <h2
              className="font-display text-[2.2rem] leading-[1.1] text-canvas md:text-[3.2rem]"
              style={{ fontWeight: 330 }}
            >
              Two thousand roses to a single bottle.
            </h2>
            <p className="mt-7 max-w-[46ch] text-[1rem] leading-relaxed text-canvas/80">
              Our rose water is triple-distilled from Damask roses harvested at
              first light, when the oil is richest. No synthetics, no fillers,
              nothing to mask. Only the flower, and water, and time.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
