import { Package } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre-nosotros" className="bg-[#111111] py-24 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <div className="flex justify-between items-start mb-6 pr-4 lg:pr-12">
              <h2 className="text-5xl md:text-7xl font-bold leading-none">
                Sobre<br />noso<span className="text-[#38A3A5]">tros</span>
              </h2>
              <div className="text-6xl md:text-8xl font-bold text-[#38A3A5]">
                01
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-12 max-w-md">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            
            <div className="relative mt-20">
              <img 
                src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80" 
                alt="Hoodie Back" 
                className="w-full max-w-md rounded-lg mix-blend-luminosity opacity-80"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="relative mb-20 max-w-md mx-auto mt-8 lg:mt-0">
              <div className="absolute top-[-2rem] bottom-[2rem] left-[-2rem] right-[-2rem] border border-[#38A3A5] rounded-[2rem]"></div>
              <img 
                src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80" 
                alt="Hoodie Front" 
                className="relative z-10 w-full rounded-lg mix-blend-luminosity"
              />
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-xl font-semibold mb-3">Word word word</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-6">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div className="border border-[#38A3A5]/30 rounded-2xl p-6 text-center bg-white/5">
                  <Package className="w-5 h-5 mx-auto mb-2 text-gray-400" />
                  <div className="text-2xl font-bold mb-1">1.200+</div>
                  <div className="text-[10px] tracking-widest text-gray-400">PRODUCTOS</div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Word word word</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-6">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div className="border border-[#38A3A5]/30 rounded-2xl p-6 text-center bg-white/5">
                  <Package className="w-5 h-5 mx-auto mb-2 text-gray-400" />
                  <div className="text-2xl font-bold mb-1">1.200+</div>
                  <div className="text-[10px] tracking-widest text-gray-400">PRODUCTOS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
