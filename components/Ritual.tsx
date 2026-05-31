import Image from "next/image";
import { Reveal } from "./ui/Reveal";

const steps = [
  {
    n: "01",
    title: "Mist",
    body: "Two breaths of rose water over the mat and the wrists. The scent marks the threshold between the day and the practice.",
  },
  {
    n: "02",
    title: "Unroll",
    body: "Lay out The Mat. Warmed by the body, the cured rose lifts faintly from the rubber, grounding the first pose.",
  },
  {
    n: "03",
    title: "Return",
    body: "Fold the wrap beneath the knees, settle onto the block, and stay a little longer than you meant to.",
  },
];

export function Ritual() {
  return (
    <section id="ritual" className="bg-canvas-deep">
      <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 py-28 md:grid-cols-2 md:gap-24 md:px-10 md:py-40">
        <Reveal>
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2px] bg-petal-light">
            <Image
              src="/images/ritual.png"
              alt="A serene morning practice on an Omorra mat"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow mb-6">The ritual</p>
            <h2
              className="font-display text-[2.1rem] leading-[1.1] text-ink md:text-[3rem]"
              style={{ fontWeight: 330 }}
            >
              A few unhurried minutes, kept for yourself.
            </h2>
          </Reveal>

          <div className="mt-12 space-y-10">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={0.08 * i}>
                <div className="flex gap-6 border-t border-ink/12 pt-7">
                  <span className="font-display text-lg text-rose" style={{ fontWeight: 400 }}>
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-ink" style={{ fontWeight: 400 }}>
                      {s.title}
                    </h3>
                    <p className="mt-2 max-w-[42ch] text-[0.95rem] leading-relaxed text-ink/65">
                      {s.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
