import { Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="relative py-32 overflow-hidden bg-[#0a0a0a]">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#22577A]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Large 04 */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[400px] font-bold text-white/5 leading-none select-none pointer-events-none -ml-20">
        04
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="text-[#38A3A5] tracking-[0.3em] text-xs font-bold mb-4">
          G E T &nbsp; I N &nbsp; T O U C H
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
            <a href="#" className="text-[#38A3A5] hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#38A3A5] hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#38A3A5] hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            {/* TikTok Icon placeholder using a generic icon or text */}
            <a href="#" className="text-[#38A3A5] hover:text-white transition-colors font-bold text-lg leading-none">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
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
