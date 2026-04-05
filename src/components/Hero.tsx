export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-[#22577A]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
          American<br />Shop
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-200 mb-6">
          Productos americanos<br />a un paso de ti
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <button className="bg-[#38A3A5] hover:bg-[#22577A] text-white px-8 py-3 rounded-full tracking-widest text-sm transition-colors flex items-center mx-auto space-x-2">
          <span>C O N O C E R &nbsp; M Á S</span>
          <span>+</span>
        </button>

        {/* Carousel Dots */}
        <div className="flex justify-center space-x-3 mt-16">
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
        </div>
      </div>
    </section>
  );
}
