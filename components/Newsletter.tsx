"use client";

import { useState } from "react";
import { Reveal } from "./ui/Reveal";

type State = "idle" | "loading" | "success" | "error";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setState("error");
      setMessage("Please enter a valid email.");
      return;
    }
    setState("loading");
    try {
      // Front-end only for now; simulate latency
      await new Promise((r) => setTimeout(r, 700));
      setState("success");
      setMessage("Thank you. The first verse will reach you soon.");
    } catch {
      setState("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="newsletter" className="bg-pecan text-canvas">
      <div className="mx-auto max-w-[1400px] px-6 py-20 text-center md:px-10 md:py-24">
        <Reveal>
          <p className="eyebrow mb-6 text-canvas/80">The door is open</p>
          <h2
            className="font-display mx-auto max-w-[20ch] text-[2.4rem] leading-[1.08] md:text-[3.4rem]"
            style={{ fontWeight: 500 }}
          >
            Begin the practice today.
          </h2>
          <p className="mx-auto mt-6 max-w-[46ch] text-[0.98rem] leading-relaxed text-canvas/90">
            Releases are small and numbered. Join the list for early access, a
            weekly verse from the source, and quiet notes on the practice.
          </p>

          {state === "success" ? (
            <p
              className="mt-10 text-[0.98rem] text-canvas"
              role="status"
              aria-live="polite"
            >
              {message}
            </p>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              aria-label="Join the newsletter"
              className="mx-auto mt-10 flex max-w-md items-center gap-0 border-b border-canvas/40 pb-2 focus-within:border-canvas"
            >
              <label htmlFor="nl-email" className="sr-only">
                Email address
              </label>
              <input
                id="nl-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (state === "error") setState("idle");
                }}
                placeholder="Your email"
                aria-invalid={state === "error"}
                aria-describedby="nl-msg"
                className="flex-1 bg-transparent px-1 py-2 text-[0.95rem] text-canvas placeholder:text-canvas/60 focus:outline-none"
              />
              <button
                type="submit"
                disabled={state === "loading"}
                className="shrink-0 px-2 text-[0.74rem] uppercase tracking-[0.16em] text-canvas transition-colors hover:text-canvas focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-canvas disabled:opacity-60"
              >
                {state === "loading" ? "Joining…" : "Join →"}
              </button>
            </form>
          )}
          <p
            id="nl-msg"
            role={state === "error" ? "alert" : undefined}
            aria-live="polite"
            className="mt-3 min-h-[1.25rem] text-[0.85rem] text-canvas"
          >
            {state === "error" ? message : ""}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
