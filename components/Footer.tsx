import Image from "next/image";

const cols = [
  {
    title: "The House",
    links: ["The Collection", "The Ritual", "Provenance", "Our Materials"],
  },
  {
    title: "Care",
    links: ["Shipping", "Returns", "Mat Care", "Contact"],
  },
  {
    title: "Connect",
    links: ["Instagram", "Journal", "Stockists", "The List"],
  },
];

export function Footer() {
  return (
    <footer className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-monogram.png"
                alt="Omorra monogram"
                width={44}
                height={44}
                className="mix-blend-multiply"
              />
              <span
                className="font-display text-2xl tracking-[0.3em] text-ink"
                style={{ fontWeight: 400 }}
              >
                OMORRA
              </span>
            </div>
            <p className="mt-6 max-w-[34ch] text-[0.9rem] leading-relaxed text-ink/55">
              Rose water-infused objects for a slower practice. Made in small,
              numbered releases.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-[0.66rem] uppercase tracking-[0.18em] text-ink/45">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-[0.9rem] text-ink/70 transition-colors hover:text-ink"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ink/10 pt-8 text-[0.74rem] text-ink/45 md:flex-row">
          <p>© {new Date().getFullYear()} Omorra. All rights reserved.</p>
          <div className="flex gap-7">
            <a href="#" className="transition-colors hover:text-ink">Privacy</a>
            <a href="#" className="transition-colors hover:text-ink">Terms</a>
            <a href="#" className="transition-colors hover:text-ink">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
