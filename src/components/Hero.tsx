import { HiPlus } from "react-icons/hi";
import heroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image & Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
          Prime Shell
          <br />
          Store EC
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-white/90 mb-6">
          Estilo, variedad y tendencia
          <br />
          en un solo lugar
        </h2>
        <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          Descubre una selección de productos como ropa, zapatillas, perfumes,
          relojes y más. Explora nuestro catálogo y encuentra lo que buscas de
          forma rápida. Contáctanos directamente para recibir atención
          personalizada y concretar tu compra de manera sencilla.
        </p>
        <button
          className="group text-white/90 font-semibold px-10 py-4 rounded-full tracking-widest text-sm 
  flex items-center mx-auto gap-6 backdrop-blur-sm
  transition-colors duration-300"
          style={{
            background:
              "linear-gradient(to right, color-mix(in srgb, #161616 35%, transparent), #3AA3A6)",
          }}
        >
          <span className="transition-colors duration-300 group-hover:text-white">
            V E R &nbsp; C A T Á L O G O
          </span>

          <HiPlus
            size={14}
            className="text-white/90 transition-colors duration-300 group-hover:text-white"
          />
        </button>

        {/* Carousel Dots */}
        <div className="flex justify-center space-x-3 mt-16">
          <div className="w-2 h-2 rounded-full bg-silver/60"></div>
          <div className="w-2 h-2 rounded-full bg-silver/60"></div>
          <div className="w-2 h-2 rounded-full bg-silver"></div>
          <div className="w-2 h-2 rounded-full bg-silver/60"></div>
          <div className="w-2 h-2 rounded-full bg-silver/60"></div>
        </div>
      </div>
    </section>
  );
}
