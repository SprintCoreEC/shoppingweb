import Hero from "../components/Sections/HeroSection";
import AboutServicesSection from "../components/Sections/AboutServicesSection";
import UbicationSection from "../components/Sections/UbicationSection";
import MovilPartsSection from "../components/Sections/MovilPartsSection";
import Footer from "../components/WebParts/Footer";
import ServicesSection from "../components/Sections/ServicesSection";
import ImpactImage from "../components/Sections/ImpactImage";
import WhatsAppButton from "../components/General/WhatsAppButton";

export default function OrvilMain() {
  return (
    <div className="flex flex-col min-h-screen bg-bg1">
      <main className="flex-1">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <AboutServicesSection />
        </section>

        <section id="components">
          <MovilPartsSection />
        </section>

        <section id="services">
          <ServicesSection />
        </section>

        <section id="location">
          <UbicationSection />
        </section>

        <section id="footer">
          <Footer />
        </section>
      </main>
      <WhatsAppButton />
    </div>
  );
}
