import { Star, ChevronDown } from "lucide-react";
import aboutusimg from "../assets/aboutusimage1.png";

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
    <section
      id="testimonios"
      className="bg-[#0f171a] relative overflow-hidden pt-20"
    >
      {/* Radial Gradient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#38A3A5]/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className=" tracking-[0.3em] text-xs font-bold mb-4">
            <span className="text-[#38A3A5]"> C U S T O M E R S</span>
            <span className="text-white">&nbsp; W H O &nbsp;</span>
            <span className="text-[#38A3A5]">T R U S T</span>
            <span className="text-white">&nbsp; U S</span>
          </div>
          <h2 className="text-5xl font-bold text-white flex items-center justify-center gap-4">
            <span className="text-[#38A3A5]">03</span> Testimonios
          </h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="flex gap-4 sm:gap-6 lg:gap-8 items-start"
              >
                <div
                  className={`w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 rounded-2xl sm:rounded-3xl shrink-0 flex items-center justify-center p-3 sm:p-5 lg:p-6 ${t.active ? "border border-[#38A3A5] bg-white/0" : "bg-white/10"}`}
                >
                  <img
                    src={aboutusimg}
                    alt="Product"
                    className="w-full h-full object-contain mix-blend-luminosity opacity-80"
                  />
                </div>
                <div className="pt-2">
                  <div className="text-5xl font-bold text-gray-300 mb-3">
                    {t.id}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                    FEAR OF GOD
                    <br />
                    ESSENTIALS
                  </h3>
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#38A3A5] text-[#38A3A5]"
                      />
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
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
