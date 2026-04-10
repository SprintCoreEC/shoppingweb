import catalogimage1 from "../assets/catalogimage1.png";
import catalogimage2 from "../assets/catalogimage2.png";
import image1 from "../assets/catalog/Bota táctica de color beige.png";
import image2 from "../assets/catalog/Caja de presentación Mango Ice.png";
import image3 from "../assets/catalog/Gorra blanca con logo Adidas (1).png";
import image4 from "../assets/catalog/Mochila táctica de color oliva.png";
import image5 from "../assets/catalog/Reloj Gianello con cajas y correas.png";
import image6 from "../assets/catalog/Reloj Gianello con correas intercambiables (1).png";
import image7 from "../assets/catalog/Reloj y cruz_ estilo y detalles.png";
import image8 from "../assets/catalog/WhatsApp Image 2026-04-08 at 14.55.08 (5).jpeg";
import image9 from "../assets/catalog/WhatsApp Image 2026-04-08 at 14.55.08 (6).jpeg";
import image10 from "../assets/catalog/WhatsApp Image 2026-04-08 at 15.05.56.jpeg";
import image11 from "../assets/catalog/WhatsApp Image 2026-04-08 at 15.05.56.jpeg";
import image12 from "../assets/catalog/WhatsApp Image 2026-04-08 at 15.05.562.jpeg";
import image13 from "../assets/catalog/Zapatilla Adidas Dreamstrike azul y amarilla.png";
import image14 from "../assets/catalog/Zapatilla Adidas blanca con detalles burdeos.png";
import image15 from "../assets/catalog/Zapatilla Adidas blanca con detalles claros.png";
import image16 from "../assets/catalog/Zapatilla Adidas blanca y azul.png";
import image17 from "../assets/catalog/Zapatilla Adidas con sistema de amortiguación roja.png";
import image18 from "../assets/catalog/Zapatilla Adidas negra con plataforma.png";
import image19 from "../assets/catalog/Zapatilla Air Jordan con detalles rojos.png";
import image20 from "../assets/catalog/Zapatilla Calvin Klein con plataforma.png";
import image21 from "../assets/catalog/Zapatilla Nike blanca con detalles amarillos.png";
import image22 from "../assets/catalog/Zapatilla Nike blanca de perfil.png";
import image23 from "../assets/catalog/Zapatilla Nike gris y blanca.png";
import image24 from "../assets/catalog/Zapatilla Puma negra con detalles grises.png";
import image25 from "../assets/catalog/Zapatilla Tommy Hilfiger en primer plano.png";
import image26 from "../assets/catalog/Zapatilla deportiva Adidas gris claro.png";

export default function Catalog() {
  const commonSizes = "XXS, XS, S, M, L, XL, XXL";

  const products = [
    {
      id: 1,
      name: "Bota táctica beige",
      image: image1,
      sizes: commonSizes,
      price: "$89",
      active: false,
    },
    {
      id: 2,
      name: "Caja de presentación Mango Ice",
      image: image2,
      sizes: commonSizes,
      price: "$35",
      active: true,
    },
    {
      id: 3,
      name: "Gorra Adidas blanca",
      image: image3,
      sizes: commonSizes,
      price: "$29",
      active: false,
    },
    {
      id: 4,
      name: "Mochila táctica oliva",
      image: image4,
      sizes: commonSizes,
      price: "$74",
      active: true,
    },
    {
      id: 5,
      name: "Reloj Gianello con caja y correas",
      image: image5,
      sizes: commonSizes,
      price: "$119",
      active: false,
    },
    {
      id: 6,
      name: "Reloj Gianello correas intercambiables",
      image: image6,
      sizes: commonSizes,
      price: "$115",
      active: true,
    },
    {
      id: 7,
      name: "Reloj con cruz decorativa",
      image: image7,
      sizes: commonSizes,
      price: "$99",
      active: false,
    },
    {
      id: 8,
      name: "Calzado casual modelo 01",
      image: image8,
      sizes: commonSizes,
      price: "$68",
      active: true,
    },
    {
      id: 9,
      name: "Calzado casual modelo 02",
      image: image9,
      sizes: commonSizes,
      price: "$72",
      active: false,
    },
    {
      id: 10,
      name: "Calzado urbano modelo 03",
      image: image10,
      sizes: commonSizes,
      price: "$76",
      active: true,
    },
    {
      id: 11,
      name: "Calzado urbano modelo 04",
      image: image11,
      sizes: commonSizes,
      price: "$76",
      active: false,
    },
    {
      id: 12,
      name: "Calzado urbano modelo 05",
      image: image12,
      sizes: commonSizes,
      price: "$79",
      active: true,
    },
    {
      id: 13,
      name: "Adidas Dreamstrike azul y amarilla",
      image: image13,
      sizes: commonSizes,
      price: "$109",
      active: false,
    },
    {
      id: 14,
      name: "Adidas blanca con detalles burdeos",
      image: image14,
      sizes: commonSizes,
      price: "$98",
      active: true,
    },
    {
      id: 15,
      name: "Adidas blanca con detalles claros",
      image: image15,
      sizes: commonSizes,
      price: "$96",
      active: false,
    },
    {
      id: 16,
      name: "Adidas blanca y azul",
      image: image16,
      sizes: commonSizes,
      price: "$102",
      active: true,
    },
    {
      id: 17,
      name: "Adidas amortiguación roja",
      image: image17,
      sizes: commonSizes,
      price: "$112",
      active: false,
    },
    {
      id: 18,
      name: "Adidas negra con plataforma",
      image: image18,
      sizes: commonSizes,
      price: "$105",
      active: true,
    },
    {
      id: 19,
      name: "Air Jordan detalles rojos",
      image: image19,
      sizes: commonSizes,
      price: "$149",
      active: false,
    },
    {
      id: 20,
      name: "Calvin Klein con plataforma",
      image: image20,
      sizes: commonSizes,
      price: "$124",
      active: true,
    },
    {
      id: 21,
      name: "Nike blanca con detalles amarillos",
      image: image21,
      sizes: commonSizes,
      price: "$108",
      active: false,
    },
    {
      id: 22,
      name: "Nike blanca de perfil",
      image: image22,
      sizes: commonSizes,
      price: "$101",
      active: true,
    },
    {
      id: 23,
      name: "Nike gris y blanca",
      image: image23,
      sizes: commonSizes,
      price: "$104",
      active: false,
    },
    {
      id: 24,
      name: "Puma negra con detalles grises",
      image: image24,
      sizes: commonSizes,
      price: "$97",
      active: true,
    },
    {
      id: 25,
      name: "Tommy Hilfiger blanca",
      image: image25,
      sizes: commonSizes,
      price: "$118",
      active: false,
    },
    {
      id: 26,
      name: "Adidas deportiva gris claro",
      image: image26,
      sizes: commonSizes,
      price: "$94",
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
        <div className="mb-12 mt-12 text-center lg:mt-34 lg:mb-20">
          <h2 className="mb-4 text-4xl font-bold text-dark sm:text-5xl">
            <span className="text-verdigris">Catá</span>logo
          </h2>

          <p className="mx-auto max-w-md text-xs text-gray-600 sm:text-sm">
            Descubre nuestra selección de productos destacados con diseño,
            estilo y calidad para cada ocasión.
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
                    src={product.image}
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
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 text-center text-[10px] font-bold sm:text-[16px] lg:mt-24">
          <span className="tracking-[0.35em] text-dark sm:tracking-[0.5em]">
            S T A N D S
          </span>
          <span className="text-verdigris sm:tracking-[0.5em]">
            &nbsp;O U T
          </span>
          <span className="tracking-[0.35em] text-dark sm:tracking-[0.5em]">
            &nbsp;W I T H
          </span>
          <span className="tracking-[0.35em] text-dark sm:tracking-[0.5em]">
            &nbsp;O U R
          </span>
          <span className="tracking-[0.35em] text-verdigris sm:tracking-[0.5em]">
            &nbsp;S T Y L E
          </span>
        </div>
      </div>
    </section>
  );
}