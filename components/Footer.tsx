const cols = [
  {
    title: "The Collection",
    links: [
      { label: "Wisdom", href: "/#wisdom" },
      { label: "Practice", href: "/#practice" },
      { label: "Nourish", href: "/#nourish" },
      { label: "Ritual Kit", href: "/#ritual-kit" },
      { label: "Our Story", href: "/our-story" },
    ],
  },
  {
    title: "Care",
    links: [
      { label: "Shipping", href: "#" },
      { label: "Returns", href: "#" },
      { label: "Contact", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Instagram", href: "#" },
      { label: "The Journal", href: "#" },
      { label: "Stockists", href: "#" },
      { label: "The List", href: "/#newsletter" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <span
              className="font-display text-3xl tracking-[0.3em] text-ink"
              style={{ fontWeight: 500 }}
            >
              OMORRA
            </span>
            <p className="mt-6 max-w-[34ch] text-[0.9rem] leading-relaxed text-walnut">
              India&rsquo;s wisdom traditions, brought into the texture of
              ordinary days. Wisdom, Practice, Nourish. Made in small, numbered
              releases.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-[0.66rem] uppercase tracking-[0.18em] text-walnut">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[0.9rem] text-ink/70 transition-colors hover:text-ink"
                    >
                      {l.label}
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
