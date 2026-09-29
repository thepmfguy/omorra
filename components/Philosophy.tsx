import { Reveal } from "./ui/Reveal";

export function Philosophy() {
  return (
    <section className="border-y border-ink/10 bg-canvas-deep">
      <div className="mx-auto max-w-[900px] px-6 py-20 text-center md:py-28">
        <Reveal>
          <p className="eyebrow mb-8">Why Omorra</p>
          <h2
            className="font-display text-[2.1rem] leading-[1.18] text-ink sm:text-[2.7rem] md:text-[3.2rem]"
            style={{ fontWeight: 500 }}
          >
            The modern Indian morning is not short of ambition.
            <span className="text-pecan"> It is short of pause.</span>
          </h2>
          <p className="mx-auto mt-9 max-w-[58ch] text-[1.05rem] leading-[1.8] text-walnut">
            Between the phone at 7 and the first meeting at 10, between the
            commute and the inbox, there is almost no structured moment in which
            a person sits with themselves. The Gita has a word for that moment.
            The Upanishads have a method for it. Ayurveda has a practice for it.
            These are not ancient secrets. They are instructions we stopped
            following.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
