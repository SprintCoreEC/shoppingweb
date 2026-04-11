import { Star, ChevronDown } from "lucide-react";
import aboutusimg from "../assets/aboutusimage1.png";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      active: false,
      name: "Cliente",
      text: "Pedí unas zapatillas y todo llegó bien. La atención fue rápida y clara.",
    },
    {
      id: 2,
      active: true,
      name: "Cliente",
      text: "Buena calidad en los productos. Me ayudaron por WhatsApp y todo fue sencillo.",
    },
    {
      id: 3,
      active: true,
      name: "Cliente",
      text: "Compré un reloj y me gustó bastante. Tal cual como en las fotos.",
    },
    {
      id: 4,
      active: false,
      name: "Cliente",
      text: "Me respondieron rápido y me dieron toda la info antes de comprar.",
    },
    {
      id: 5,
      active: false,
      name: "Cliente",
      text: "Buen servicio, el envío fue sin problemas y el producto llegó en buen estado.",
    },
    {
      id: 6,
      active: false,
      name: "Cliente",
      text: "Todo correcto con mi compra, volvería a pedir sin problema.",
    },
  ];

  return (
    <section
      id="testimonios"
      className="bg-[#0f171a] relative overflow-hidden pt-20"
    >
      {/* Radial Gradient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-verdigris/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="tracking-[0.35em] sm:tracking-[0.5em] mb-16 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 text-center text-[10px] font-bold sm:text-[16px] lg:mt-24">
            <span className="text-verdigris whitespace-nowrap">
              N U E S T R O S
            </span>
            <span className="text-white whitespace-nowrap">
              &nbsp;C L I E N T E S
            </span>
            <span className="text-verdigris whitespace-nowrap">
              &nbsp;O P I N A N
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white flex items-center justify-center gap-4">
            <span className="text-verdigris">03</span> Testimonios
          </h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-8">
            {testimonials.map((t) => (
              <div key={t.id} className="flex flex-col gap-4">
                <div className="flex gap-4 sm:gap-6 lg:gap-8 items-start">
                  <div
                    className={`w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 rounded-2xl sm:rounded-3xl shrink-0 flex items-center justify-center p-3 sm:p-5 lg:p-6 ${
                      t.active
                        ? "border border-verdigris bg-white/0"
                        : "bg-white/10"
                    }`}
                  >
                    <img
                      src={aboutusimg}
                      alt="Producto"
                      className="w-full h-full object-contain mix-blend-luminosity opacity-80"
                    />
                  </div>
                  <div className="pt-2 flex-1">
                    <div className="text-3xl sm:text-5xl font-bold text-gray-300 mb-2 sm:mb-3">
                      {t.id}
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                      Cliente verificado
                    </h3>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 sm:w-5 sm:h-5 fill-verdigris text-verdigris"
                        />
                      ))}
                    </div>

                    {/* Desktop */}
                    <p className="hidden lg:block text-gray-400 text-sm leading-relaxed max-w-xs mt-5">
                      {t.text}
                    </p>
                  </div>
                </div>

                {/* Mobile */}
                <p className="lg:hidden text-gray-400 text-sm leading-relaxed">
                  {t.text}
                </p>
              </div>
            ))}
          </div>

          {/* Fade Overlay & Scroll Button */}
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#0f171a] via-[#0f171a]/90 to-transparent flex items-end justify-center z-10 pointer-events-none">
            <button className="w-14 h-8 mb-6 bg-gradient-to-b from-[#3AA3A6] to-[#000000] rounded-2xl flex items-center justify-center hover:opacity-80 transition-opacity shadow-[0_4px_14px_rgba(0,0,0,0.5)] pointer-events-auto">
              <ChevronDown className="text-white w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}