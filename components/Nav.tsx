"use client";

import { useEffect, useState } from "react";
import { useCart } from "./CartProvider";

const links = [
  { label: "The Collection", href: "/#collection" },
  { label: "The Ritual", href: "/#ritual" },
  { label: "Provenance", href: "/#sourcing" },
];

export function Nav() {
  const { count, open } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-clay text-canvas text-center text-[0.68rem] uppercase tracking-[0.2em] py-2.5 px-4">
        Complimentary ritual mist with The Mat · A limited first release
      </div>

      <header
        className={`sticky top-0 z-50 transition-colors duration-700 ${
          scrolled
            ? "bg-canvas/85 backdrop-blur-md border-b border-ink/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
          {/* Left links */}
          <ul className="hidden flex-1 items-center gap-9 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[0.72rem] uppercase tracking-[0.16em] text-ink/70 transition-colors duration-300 hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Center wordmark */}
          <a
            href="/"
            className="font-display text-2xl tracking-[0.32em] text-ink md:flex-1 md:text-center"
            style={{ fontWeight: 400 }}
          >
            OMORRA
          </a>

          {/* Right: cart */}
          <div className="flex flex-1 items-center justify-end gap-6">
            <button
              onClick={open}
              className="group flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.16em] text-ink/70 transition-colors hover:text-ink"
            >
              Cart
              <span className="grid h-5 min-w-5 place-items-center rounded-full bg-ink px-1 text-[0.62rem] text-canvas transition-colors group-hover:bg-clay">
                {count}
              </span>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
