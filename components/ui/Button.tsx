"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: Variant;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full text-[0.78rem] font-medium uppercase tracking-[0.16em] transition-all duration-500 ease-out cursor-pointer disabled:opacity-50";

const variants: Record<Variant, string> = {
  solid:
    "bg-ink text-canvas px-8 py-4 hover:bg-clay hover:tracking-[0.2em]",
  outline:
    "border border-ink/25 text-ink px-8 py-4 hover:border-ink hover:bg-ink hover:text-canvas",
  ghost: "text-ink px-2 py-1 hover:text-clay",
};

export function Button({
  children,
  variant = "solid",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
