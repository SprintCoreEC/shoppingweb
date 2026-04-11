import { Package } from "lucide-react";
import aboutusimage from "../assets/aboutusimage1.png";
import aboutusimage2 from "../assets/aboutusimage2.png";

export default function About() {
  return (
    <section
      id="sobre-nosotros"
      className="relative overflow-hidden bg-[#111111] py-20 text-white lg:py-24"
    >
      <div className="pointer-events-none absolute -bottom-120 left-1/2 -translate-x-1/2 w-150 h-150 bg-white/20 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 lg:bottom-15 left-15 w-125 h-125 bg-verdigris/30 rounded-full blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-12">
          {/* Header + intro */}
          <div className="lg:col-span-7">
            <div className="flex flex-col items-center gap-5 text-center lg:flex-row lg:items-start lg:justify-between lg:gap-6 lg:text-left">
              {/* Mobile: 01 a la izquierda del título */}
              <div className="flex items-start justify-center gap-4 lg:contents">
                <div className="shrink-0 pt-1 text-5xl font-bold leading-none sm:text-6xl lg:order-2 lg:pt-2 lg:text-8xl">
                  <span className="text-verdigris">0</span>
                  <span className="text-white">1</span>
                </div>

                <h2 className="text-left text-4xl font-bold leading-none sm:text-5xl md:text-6xl lg:order-1 lg:text-7xl">
                  Sobre
                  <br />
                  noso<span className="text-verdigris">tros</span>
                </h2>
              </div>
            </div>

            <p className="mx-auto mt-6 max-w-none text-center text-sm leading-relaxed text-gray-400 sm:text-[15px] lg:mx-0 lg:mt-8 lg:max-w-2xl lg:text-left">
              Somos una tienda online dedicada a ofrecer una selección variada
              de artículos como ropa, zapatillas, perfumes, relojes, mochilas,
              gorras y más. Nuestro objetivo es brindarte opciones con estilo,
              buena presentación y atención cercana, para que encuentres
              productos que se adapten a tu gusto y necesidad. Este espacio está
              pensado para que explores nuestro catálogo de forma rápida y
              sencilla, y puedas contactarnos directamente para recibir atención
              personalizada.
            </p>
          </div>

          {/* Right top image */}
          <div className="order-2 lg:order-0 lg:col-span-5 lg:row-span-1">
            <div className="relative mx-auto w-full max-w-105 h-65 xs:h-[290px] sm:h-85 lg:max-w-130 lg:h-107.5">
              {/* Frame */}
              <div className="absolute left-1/2 top-1/2 z-0 w-[88%] h-[78%] -translate-x-1/2 -translate-y-1/2 rounded-4xl border-[1.5px] border-verdigris lg:w-[90%] lg:h-71.25" />

              {/* Image layer */}
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <img
                  src={aboutusimage}
                  alt="Hoodie Front"
                  className="block w-[75%] max-h-[150%] object-contain sm:w-[74%] lg:w-[80%] lg:max-h-none"
                />
              </div>
            </div>
          </div>

          {/* Mobile block 1 */}
          <div className="order-3 flex flex-col items-center text-center lg:hidden">
            <h3 className="mb-3 text-3xl font-semibold leading-none text-silver">
              Variedad que conecta contigo
            </h3>

            <p className="mb-8 max-w-[320px] text-sm leading-snug text-gray-400">
              Reunimos diferentes categorías en un solo lugar para que puedas
              descubrir artículos modernos, útiles y con personalidad, siempre
              con una atención directa y confiable.
            </p>

            <div className="w-full max-w-65 rounded-[1.75rem] border-[1.5px] border-verdigris px-8 py-10 text-center">
              <Package className="mx-auto mb-4 h-5 w-5 text-gray-300" />
              <div className="mb-2 text-4xl font-semibold tracking-tight text-silver">
                1.200+
              </div>
              <div className="text-xs tracking-[0.18em] text-gray-400">
                PRODUCTOS
              </div>
            </div>
          </div>

          {/* Left bottom image */}
          <div className="order-4 lg:order-0 lg:col-span-4">
            <div className="relative mx-auto flex justify-center lg:mx-0 lg:mt-4 lg:block">
              <img
                src={aboutusimage2}
                alt="Hoodie Back"
                className="w-full max-w-75 object-contain sm:max-w-85 lg:max-w-90"
              />
            </div>
          </div>

          {/* Mobile block 2 + desktop bottom content area */}
          <div className="order-5 lg:order-0 lg:col-span-8">
            {/* Mobile */}
            <div className="flex flex-col items-center text-center lg:hidden">
              <h3 className="mb-3 text-3xl font-semibold leading-none text-silver">
                Atención simple y directa
              </h3>

              <p className="mb-8 max-w-[320px] text-sm leading-snug text-gray-400">
                Nuestra web es informativa y está diseñada para que puedas ver
                los productos y conocer mejor la tienda. La atención y
                coordinación de compra se realiza de forma directa.
              </p>

              <div className="w-full max-w-65 rounded-[1.75rem] border-[1.5px] border-verdigris px-8 py-10 text-center">
                <Package className="mx-auto mb-4 h-5 w-5 text-gray-300" />
                <div className="mb-2 text-4xl font-semibold tracking-tight text-silver">
                  1.200+
                </div>
                <div className="text-xs tracking-[0.18em] text-gray-400">
                  PRODUCTOS
                </div>
              </div>
            </div>

            {/* Desktop */}
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-8 md:lg:grid-cols-2">
              {/* Card 1 */}
              <div>
                <h3 className="mb-3 text-3xl font-semibold leading-none text-silver md:text-4xl">
                  Variedad que conecta contigo
                </h3>

                <p className="mb-8 max-w-[320px] text-sm leading-snug text-gray-400">
                  Reunimos diferentes categorías en un solo lugar para que
                  puedas descubrir artículos modernos, útiles y con
                  personalidad, siempre con una atención directa y confiable.
                </p>

                <div className="w-full max-w-65 rounded-[1.75rem] border-[1.5px] border-verdigris px-8 py-10 text-center">
                  <Package className="mx-auto mb-4 h-5 w-5 text-gray-300" />
                  <div className="mb-2 text-4xl font-semibold tracking-tight text-silver">
                    1.200+
                  </div>
                  <div className="text-xs tracking-[0.18em] text-gray-400">
                    PRODUCTOS
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div>
                <h3 className="mb-3 text-3xl font-semibold leading-none text-silver md:text-4xl">
                  Atención simple y directa
                </h3>

                <p className="mb-8 max-w-[320px] text-sm leading-snug text-gray-400">
                  Esta web funciona como una vitrina informativa para que
                  conozcas nuestros artículos. La compra se concreta mediante
                  contacto directo, haciendo la experiencia más cercana, rápida
                  y personalizada.
                </p>

                <div className="w-full max-w-65 rounded-[1.75rem] border-[1.5px] border-verdigris px-8 py-10 text-center">
                  <Package className="mx-auto mb-4 h-5 w-5 text-gray-300" />
                  <div className="mb-2 text-4xl font-semibold tracking-tight text-silver">
                    1.200+
                  </div>
                  <div className="text-xs tracking-[0.18em] text-gray-400">
                    PRODUCTOS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}