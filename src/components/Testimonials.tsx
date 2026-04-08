import { Star, ChevronDown } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    { id: 1, active: false },
    { id: 2, active: true },
    { id: 3, active: true },
    { id: 4, active: false },
    { id: 5, active: false },
    { id: 6, active: false },
  ];

  return (
    <section id="testimonios" className="bg-[#0f171a] py-24 relative overflow-hidden">
      {/* Radial Gradient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#38A3A5]/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="text-[#38A3A5] tracking-[0.3em] text-xs font-bold mb-4">
            C U S T O M E R S &nbsp; W H O &nbsp; T R U S T &nbsp; U S
          </div>
          <h2 className="text-5xl font-bold text-white flex items-center justify-center gap-4">
            <span className="text-[#38A3A5]">03</span> Testimonios
          </h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-8">
            {testimonials.map((t) => (
              <div key={t.id} className="flex gap-6 items-start">
                <div className={`w-48 h-48 rounded-3xl shrink-0 flex items-center justify-center p-4 ${t.active ? 'border border-[#38A3A5] bg-white/5' : 'bg-white/10'}`}>
                  <img 
                    src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=300&q=80" 
                    alt="Product"
                    className="w-full h-full object-contain mix-blend-luminosity opacity-80"
                  />
                </div>
                <div className="pt-2">
                  <div className="text-4xl font-bold text-gray-300 mb-2">{t.id}</div>
                  <h3 className="text-lg font-bold text-white mb-3 leading-tight">FEAR OF GOD<br />ESSENTIALS</h3>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#38A3A5] text-[#38A3A5]" />
                    ))}
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                </div>
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
