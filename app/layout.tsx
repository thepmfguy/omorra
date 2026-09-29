import type { Metadata, Viewport } from "next";
import { Cormorant, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import { Nav } from "@/components/Nav";
import { CartDrawer } from "@/components/CartDrawer";
import { OrganizationSchema } from "@/components/StructuredData";

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

const SITE = "https://omorra.com";
const OG_IMAGE = "/images/hero-still.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Omorra — Indian Wisdom for the Everyday",
    template: "%s — Omorra",
  },
  description:
    "Omorra brings India's wisdom traditions into daily life through three pillars: Wisdom, Practice, and Nourish. Small, daily objects through which a practice actually enters a life.",
  keywords: [
    "Ayurveda",
    "Bhagavad Gita cards",
    "kusha grass mat",
    "rose water mist",
    "Ayurvedic skincare",
    "dinacharya",
    "Indian wisdom",
    "wellness DTC India",
  ],
  applicationName: "Omorra",
  authors: [{ name: "Omorra" }],
  creator: "Omorra",
  publisher: "Omorra",
  category: "Wellness",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Omorra — Indian Wisdom for the Everyday",
    description:
      "Wisdom, Practice, Nourish. A way of beginning and ending a day that is Indian in its roots and modern in its form.",
    url: SITE,
    siteName: "Omorra",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "An Omorra morning ritual: wisdom card, ceramic cup, Ayurvedic oil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omorra — Indian Wisdom for the Everyday",
    description:
      "Wisdom, Practice, Nourish. Small daily objects through which a practice enters a life.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/hero-still.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf5ec",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-canvas"
        >
          Skip to content
        </a>
        <CartProvider>
          <Nav />
          <div id="main">{children}</div>
          <CartDrawer />
        </CartProvider>
        <OrganizationSchema />
      </body>
    </html>
  );
}
