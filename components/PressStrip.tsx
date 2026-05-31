import { Reveal } from "./ui/Reveal";

const quotes = [
  { q: "A study in restraint.", by: "Cereal" },
  { q: "The most beautiful object in my morning.", by: "Kinfolk" },
  { q: "Wellness, finally, with taste.", by: "Monocle" },
];

export function PressStrip() {
  return (
    <section className="border-y border-ink/10">
      <div className="mx-auto grid max-w-[1400px] divide-ink/10 px-6 py-16 md:grid-cols-3 md:divide-x md:px-10">
        {quotes.map((item, i) => (
          <Reveal key={item.by} delay={0.08 * i} className="px-2 py-6 text-center md:px-10">
            <p
              className="font-display text-[1.4rem] italic leading-snug text-ink/85"
              style={{ fontWeight: 330 }}
            >
              “{item.q}”
            </p>
            <p className="mt-4 text-[0.66rem] uppercase tracking-[0.22em] text-ink/45">
              {item.by}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
