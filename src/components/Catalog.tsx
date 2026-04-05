export default function Catalog() {
  const products = [
    { id: 1, name: 'FEAR OF GOD ESSENTIALS', sizes: 'XXS, XS, S, M, L, XL, XXL', price: '$194', active: false },
    { id: 2, name: 'FEAR OF GOD ESSENTIALS', sizes: 'XXS, XS, S, M, L, XL, XXL', price: '$194', active: true },
    { id: 3, name: 'FEAR OF GOD ESSENTIALS', sizes: 'XXS, XS, S, M, L, XL, XXL', price: '$194', active: false },
    { id: 4, name: 'FEAR OF GOD ESSENTIALS', sizes: 'XXS, XS, S, M, L, XL, XXL', price: '$194', active: true },
    { id: 5, name: 'FEAR OF GOD ESSENTIALS', sizes: 'XXS, XS, S, M, L, XL, XXL', price: '$194', active: false },
    { id: 6, name: 'FEAR OF GOD ESSENTIALS', sizes: 'XXS, XS, S, M, L, XL, XXL', price: '$194', active: true },
  ];

  return (
    <section id="catalogo" className="bg-[#e5e7eb] py-24 relative overflow-hidden flex">
      {/* Left Image Strip */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-20 bg-cover bg-center shadow-[5px_0_15px_rgba(0,0,0,0.1)] grayscale-[0.5]" 
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=400&auto=format&fit=crop")' }}
      ></div>

      {/* Background 02 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[300px] md:text-[450px] font-bold bg-clip-text text-transparent bg-gradient-to-tr from-gray-400/60 via-gray-300/40 to-[#38A3A5]/60 leading-none select-none pointer-events-none">
        02
      </div>

      <div className="max-w-7xl mx-auto px-6 pl-24 md:pl-40 relative z-10 w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#38A3A5]">Catá</span>logo
          </h2>
          <p className="text-gray-600 text-sm max-w-md mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              <div className={`w-full aspect-square rounded-3xl flex items-center justify-center p-8 mb-6 ${product.active ? 'border border-[#38A3A5] bg-white/50' : 'bg-gray-200/80'}`}>
                <img 
                  src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=500&q=80" 
                  alt={product.name}
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>
              <h3 className="font-bold text-lg text-gray-900 text-center">{product.name}</h3>
              <p className="text-xs text-gray-500 mb-1 text-center">{product.sizes}</p>
              <p className="font-bold text-gray-900 text-center">{product.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center tracking-[0.5em] text-xs font-bold flex flex-wrap justify-center gap-y-4">
          <span className="text-gray-900">S T A N D S</span>
          <span className="text-[#38A3A5] mx-4">O U T</span>
          <span className="text-gray-900">W I T H</span>
          <span className="text-[#38A3A5] mx-4">O U R</span>
          <span className="text-[#38A3A5]">S T Y L E</span>
        </div>
      </div>
    </section>
  );
}
