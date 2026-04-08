// App.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Catalog from "./components/Catalog";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
// Importamos la imagen decorativa aquí
import bgContactSection from "./assets/bg-contact-section.svg"; 

export default function App() {
  return (
    <div className="bg-[#111111] min-h-screen text-white font-sans selection:bg-[#3b9b9b] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Catalog />
        
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}