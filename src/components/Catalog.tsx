import catalogimage1 from "../assets/catalogimage1.png";
import catalogimage2 from "../assets/catalogimage2.png";

export default function Catalog() {
  const products = [
    {
      id: 1,
      name: "FEAR OF GOD ESSENTIALS",
      sizes: "XXS, XS, S, M, L, XL, XXL",
      price: "$123",
      active: false,
    },
    {
      id: 2,
      name: "FEAR OF GOD ESSENTIALS",
      sizes: "XXS, XS, S, M, L, XL, XXL",
      price: "$456",
      active: true,
    },
    {
      id: 3,
      name: "FEAR OF GOD ESSENTIALS",
      sizes: "XXS, XS, S, M, L, XL, XXL",
      price: "$789",
      active: false,
    },
    {
      id: 4,
      name: "FEAR OF GOD ESSENTIALS",
      sizes: "XXS, XS, S, M, L, XL, XXL",
      price: "$101",
      active: true,
    },
    {
      id: 5,
      name: "FEAR OF GOD ESSENTIALS",
      sizes: "XXS, XS, S, M, L, XL, XXL",
      price: "$121",
      active: false,
    },
    {
      id: 6,
      name: "FEAR OF GOD ESSENTIALS",
      sizes: "XXS, XS, S, M, L, XL, XXL",
      price: "$131",
      active: true,
    },
  ];

  return (
    <section
      id="catalogo"
      className="relative flex overflow-hidden bg-silver py-20 lg:py-24"
    >
      {/* Left Image Strip */}
      <div
        className="absolute left-0 top-0 bottom-0 z-20 w-14 bg-cover bg-center grayscale-[0.5] shadow-[5px_0_15px_rgba(0,0,0,0.1)] sm:w-20 md:w-32"
        style={{ backgroundImage: `url(${catalogimage1})` }}
      />

      {/* Background 02 */}
      <div className="pointer-events-none absolute top-0 left-[54%] z-0 -translate-x-1/2 select-none text-[220px] font-bold leading-none sm:text-[300px] md:text-[420px]">
        <span className="text-dark/60">0</span>
        <span className="text-teal/60">2</span>
      </div>

      <div className="pointer-events-none absolute top-32 left-[54%] z-0 h-30 w-60 -translate-x-1/2 rounded-full bg-silver blur-lg lg:blur-2xl sm:h-55 sm:w-105 md:top-60 md:h-120 md:w-160" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pl-20 sm:pl-28 md:pl-40">
        {/* Header */}
        <div className="mb-12 text-center mt-12 lg:mt-34 lg:mb-20">
          <h2 className="mb-4 text-4xl font-bold text-dark sm:text-5xl">
            <span className="text-verdigris">Catá</span>logo
          </h2>

          <p className="mx-auto max-w-md text-xs text-gray-600 sm:text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-16">
          {products.map((product, index) => {
            const row = Math.floor(index / 2);
            const col = index % 2;

            const isBorderOnMobile =
              (row % 2 === 0 && col === 0) || (row % 2 === 1 && col === 1);

            const mobileCardClass = isBorderOnMobile
              ? "border border-verdigris bg-transparent"
              : "bg-[#CFCFCF]/75 border border-transparent";

            const desktopCardClass = product.active
              ? "lg:border lg:border-verdigris lg:bg-transparent"
              : "lg:bg-[#CFCFCF]/75 lg:border lg:border-transparent";

            return (
              <div key={product.id} className="flex flex-col items-center">
                <div
                  className={`mb-4 flex aspect-square w-full items-center justify-center rounded-2xl p-4 sm:mb-6 sm:rounded-3xl sm:p-6 lg:p-8 ${mobileCardClass} ${desktopCardClass}`}
                >
                  <img
                    src={catalogimage2}
                    alt={product.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                <h3 className="text-center text-[11px] font-bold leading-tight text-dark sm:text-sm lg:text-lg">
                  {product.name}
                </h3>

                <p className="mb-1 text-center text-[9px] text-gray-500 sm:text-xs">
                  {product.sizes}
                </p>

                <p className="text-center text-[11px] font-bold text-dark sm:text-sm">
                  {product.price}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footer text */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 text-center text-[10px] font-bold sm:text-lg lg:mt-24">
          <span className="tracking-[0.35em] text-dark sm:tracking-[0.5em]">
            S T A N D S
          </span>
          <span className="lg:ml-6 tracking-[0.35em] text-verdigris sm:tracking-[0.5em]">
            O U T
          </span>
          <span className="lg:ml-6 tracking-[0.35em] text-dark sm:tracking-[0.5em]">
            W I T H
          </span>
          <span className="lg:ml-6 tracking-[0.35em] text-dark sm:tracking-[0.5em]">
            O U R
          </span>
          <span className="lg:ml-6 tracking-[0.35em] text-verdigris sm:tracking-[0.5em]">
            S T Y L E
          </span>
        </div>
      </div>
    </section>
  );
}
