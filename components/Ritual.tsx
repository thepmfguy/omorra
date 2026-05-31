import { Reveal } from "./ui/Reveal";

const steps = [
  {
    n: "01",
    time: "Morning",
    title: "Read",
    accent: "text-sienna",
    body: "Draw a card. One line from the Gita or the Upanishads, and a reflection to carry. The mind is given something true to hold before the day fills it.",
  },
  {
    n: "02",
    time: "Before the day",
    title: "Practice",
    accent: "text-sage",
    body: "Unroll the kusha-grass mat. Sit, breathe, and give the morning the pause it forgot. A plain and grounding place to begin.",
  },
  {
    n: "03",
    time: "Night",
    title: "Nourish",
    accent: "text-rosette",
    body: "Cleanse, then press the moisturizer into the skin, and mist the room. The daily care of dinacharya, the way the day is set down.",
  },
];

export function Ritual() {
  return (
    <section id="ritual" className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
      <Reveal className="mb-16 max-w-[46ch] md:mb-20">
        <p className="eyebrow mb-6">The ritual</p>
        <h2
          className="font-display text-[2.1rem] leading-[1.1] text-ink md:text-[3rem]"
          style={{ fontWeight: 500 }}
        >
          A way of beginning and ending a day.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={0.1 * i}>
            <div className="border-t border-ink/15 pt-7">
              <div className="flex items-baseline justify-between">
                <span className={`font-display text-3xl ${s.accent}`} style={{ fontWeight: 500 }}>
                  {s.n}
                </span>
                <span className="text-[0.66rem] uppercase tracking-[0.18em] text-walnut">
                  {s.time}
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl text-ink" style={{ fontWeight: 500 }}>
                {s.title}
              </h3>
              <p className="mt-3 max-w-[40ch] text-[0.95rem] leading-relaxed text-walnut">
                {s.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
