import Link from "next/link";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Not found — Omorra",
  description: "The page you are looking for has moved or does not exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <main className="mx-auto flex min-h-[70vh] max-w-[720px] flex-col items-center justify-center px-6 py-24 text-center">
        <p className="eyebrow mb-6">Four Zero Four</p>
        <h1
          className="font-display text-[2.6rem] leading-[1.05] text-ink md:text-[3.6rem]"
          style={{ fontWeight: 500 }}
        >
          This page has moved,<br />or was never here.
        </h1>
        <p className="mt-6 max-w-[40ch] text-[1rem] leading-relaxed text-walnut">
          The door is still open. Return to the beginning and start the practice
          from where you were.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <Link
            href="/"
            className="rounded-full bg-ink px-8 py-4 text-[0.78rem] uppercase tracking-[0.16em] text-canvas transition-all duration-500 hover:bg-pecan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sienna"
          >
            Return home
          </Link>
          <Link
            href="/our-story"
            className="text-[0.78rem] uppercase tracking-[0.16em] text-walnut transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sienna"
          >
            Read our story
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
