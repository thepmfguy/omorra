import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import { Nav } from "@/components/Nav";
import { CartDrawer } from "@/components/CartDrawer";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Omorra — Rose Water Rituals for the Practice",
  description:
    "Omorra is a quiet-luxury wellness house. A limited collection of rose water-infused objects for a slower, more sensory practice.",
  openGraph: {
    title: "Omorra — Rose Water Rituals",
    description:
      "A limited collection of rose water-infused objects for a slower, more sensory practice.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <CartProvider>
          <Nav />
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
