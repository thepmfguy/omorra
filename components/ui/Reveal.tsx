import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/**
 * Previously a scroll-triggered fade-and-rise. Now a plain wrapper — content
 * always renders visible. Aesop/Frama/Loewe don't hide content behind scroll
 * animations, and the previous approach was leaving elements at opacity 0 when
 * users scrolled fast. Kept as a component so imports don't need to change.
 */
export function Reveal({ children, className }: RevealProps) {
  return <div className={className}>{children}</div>;
}
