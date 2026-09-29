import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Pillars } from "@/components/Pillars";
import { Collection } from "@/components/Collection";
import { RitualKit } from "@/components/RitualKit";
import { Sourcing } from "@/components/Sourcing";
import { PressStrip } from "@/components/PressStrip";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Philosophy />
        <Pillars />
        <Collection />
        <RitualKit />
        <Sourcing />
        <PressStrip />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
