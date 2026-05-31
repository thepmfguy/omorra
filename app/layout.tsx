import type { Metadata } from "next";
import { Cormorant, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import { Nav } from "@/components/Nav";
import { CartDrawer } from "@/components/CartDrawer";

const display = Cormorant({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Omorra — Indian Wisdom for the Everyday",
  description:
    "Omorra brings India's wisdom traditions into daily life through three pillars: Wisdom, Practice, and Nourish. Small, daily objects through which a practice actually enters a life.",
  openGraph: {
    title: "Omorra — Indian Wisdom for the Everyday",
    description:
      "Wisdom, Practice, Nourish. A way of beginning and ending a day that is Indian in its roots and modern in its form.",
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
