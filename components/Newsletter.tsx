"use client";

import { useState } from "react";
import { Reveal } from "./ui/Reveal";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section id="newsletter" className="bg-pecan text-canvas">
      <div className="mx-auto max-w-[1400px] px-6 py-28 text-center md:px-10 md:py-36">
        <Reveal>
          <p className="eyebrow mb-6 text-canvas/70">The door is open</p>
          <h2
            className="font-display mx-auto max-w-[20ch] text-[2.4rem] leading-[1.08] md:text-[3.4rem]"
            style={{ fontWeight: 500 }}
          >
            Begin the practice today.
          </h2>
          <p className="mx-auto mt-6 max-w-[46ch] text-[0.98rem] leading-relaxed text-canvas/80">
            Releases are small and numbered. Join the list for early access, a
            weekly verse from the source, and quiet notes on the practice.
          </p>

          {sent ? (
            <p className="mt-10 text-[0.95rem] text-canvas/90">
              Thank you. The first verse will reach you soon.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email.includes("@")) setSent(true);
              }}
              className="mx-auto mt-10 flex max-w-md items-center gap-0 border-b border-canvas/35 pb-2 focus-within:border-canvas"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 bg-transparent px-1 py-2 text-[0.95rem] text-canvas placeholder:text-canvas/50 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 px-2 text-[0.74rem] uppercase tracking-[0.16em] text-canvas/85 transition-colors hover:text-canvas"
              >
                Join →
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
