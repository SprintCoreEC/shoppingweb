import { Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import bgContact1 from "../assets/bg-contact-1.svg";
import bgContactCircle from "../assets/bg-contact-circule.svg";
import bgContact from "../assets/bg-contact.png";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative py-32 overflow-hidden bg-[#0a0a0a]"
    >
      <div className="absolute inset-0 z-0">
        {/* Top bridge: smooth transition from Testimonials */}
        <div className="absolute -top-48 inset-x-0 h-80 md:h-[500px] z-40 pointer-events-none bg-gradient-to-b from-[#0f171a] via-black/70 to-transparent" />{" "}
        {/* Photo base */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgContact})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Left: rotated gradient rect + decorative path */}
        <img
          src={bgContact1}
          alt=""
          aria-hidden="true"
          className="absolute -left-0 top-30 h-auto w-auto scale-100 origin-top-left z-40"
        />
        {/* Right: blurred teal glow circle */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="tracking-[0.3em] text-xs font-bold mb-4">
          <span className="text-white">G E T</span>
          <span className="text-white">&nbsp; I N &nbsp;</span>
          <span className="text-[#38A3A5]">T O U C H</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-20">
          Contáctanos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="flex flex-col items-center">
            <Phone className="w-6 h-6 text-[#38A3A5] mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Teléfono</h3>
            <p className="text-gray-400">(+593) 999 999 9999</p>
          </div>
          <div className="flex flex-col items-center">
            <Mail className="w-6 h-6 text-[#38A3A5] mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Correo</h3>
            <p className="text-gray-400">info@americanshop.com</p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-8">Síguenos</h3>
          <div className="flex justify-center gap-8">
            <a
              href="#"
              className="text-[#38A3A5] hover:text-white transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-[#38A3A5] hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-[#38A3A5] hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            {/* TikTok Icon placeholder using a generic icon or text */}
            <a
              href="#"
              className="text-[#38A3A5] hover:text-white transition-colors font-bold text-lg leading-none"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-6">@CoffeShop</p>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 text-gray-500 text-xs">
        2026. Todos los derechos reservados.
      </div>
    </section>
  );
}
