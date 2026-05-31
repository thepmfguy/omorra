import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Pillars } from "@/components/Pillars";
import { RitualKit } from "@/components/RitualKit";
import { Collection } from "@/components/Collection";
import { Spotlight } from "@/components/Spotlight";
import { Sourcing } from "@/components/Sourcing";
import { Ritual } from "@/components/Ritual";
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
        <Spotlight />
        <RitualKit />
        <Collection />
        <Sourcing />
        <Ritual />
        <PressStrip />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
