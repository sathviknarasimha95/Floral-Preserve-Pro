import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Benefits } from "@/components/sections/Benefits";
import { ProfitCalculator } from "@/components/sections/ProfitCalculator";
import { FacilityHighlights } from "@/components/sections/FacilityHighlights";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-green-500/20 selection:text-green-700">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProfitCalculator />
        <FacilityHighlights />
        <Services />
        <Benefits />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
