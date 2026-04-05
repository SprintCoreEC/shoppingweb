import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import leftImage from "../../assets/orvil-left.jpg";
import rightImage from "../../assets/orvil-right.webp";
import watermark from "../../assets/mm3.png";
import { PiMotorcycleFill } from "react-icons/pi";
import { LiaMotorcycleSolid } from "react-icons/lia";

const SobreOrvilSection = () => {
  const [position, setPosition] = useState("center"); // 'left', 'right' o 'center'
  const [showArrows, setShowArrows] = useState(false);

  // Delay para mostrar las flechas
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowArrows(true);
    }, 500); // 500ms de delay
    return () => clearTimeout(timer);
  }, [position]);

  const moveLeft = () => {
    setShowArrows(false);
    setPosition((prev) => (prev === "right" ? "center" : "left"));
  };

  const moveRight = () => {
    setShowArrows(false);
    setPosition((prev) => (prev === "left" ? "center" : "right"));
  };

  const textos = {
    center: `En Orvil Autopartes somos especialistas en la venta de motores, cajas de cambios y diferenciales originales para vehículos.`,
    left: `Ofrecemos respaldo, garantía y experiencia en cada una de nuestras ventas, asegurando que cada repuesto funcione como debe ser.`,
    right: `Con años de trayectoria en el mercado Ecuatoriano, atendemos a talleres, empresas y clientes particulares en todo el país.`,
  };

  // Mismos textos de la tarjeta principal, divididos en dos para móvil
  const mobileItems = [
    {
      img: leftImage,
      title: "¿Quiénes somos?",
      text: `En Orvil Autopartes somos especialistas en la venta de motores, cajas de cambios y diferenciales originales para vehículos.`,
    },
    {
      img: rightImage,
      title: "¿Qué ofrecemos?",
      text: `Ofrecemos respaldo, garantía y experiencia en cada una de nuestras ventas, asegurando que cada repuesto funcione coo debe ser. Con años de trayectoria en el mercado Ecuatoriano, atendemos a talleres, empresas y clientes particulares en todo el país`,
    },
  ];

  return (
    <section className="relative bg-bg1 overflow-hidden py-10 lg:px-8 text-on">
      {/* Watermark de fondo */}
      <img
        src={watermark}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 object-contain w-1/2 opacity-50 lg:opacity-100"
      />

      {/* Título y subtítulo */}
      <div className="max-w-full mx-8 lg:mx-0 text-start mb-8 mt-24">
        <h2 className="text-4xl font-bold mb-4 ml-0 lg:ml-4">Sobre nosotros</h2>
        <p className="text-base ml-0 lg:ml-10 text-off">
          En Orvil Autopartes no vendemos cualquier repuesto, ofrecemos lo esencial para que tu vehículo se ponga en marcha y funcione como debe ser.
        </p>
      </div>

      {/* Contenedor principal */}
      <div className="relative max-w-full mx-auto">
        {/* Mobile cards */}
        <div className="block lg:hidden mb-16">
          {mobileItems.map((item, idx) => (
            <div
              key={idx}
              className="relative h-[380px] mb-20 flex items-center justify-center text-center text-on px-20 sm:px-32 overflow-hidden"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
              }}
            >
              {/* Overlay oscuro y gradiente - Más oscuro inicialmente */}
              <div className="absolute inset-0 bg-bg1/10 z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg1 via-bg1/60 to-transparent z-0" />
              <div className="absolute inset-0 bg-gradient-to-b from-bg1 via-bg1/60 to-transparent z-0" />
              {/* Contenido */}
              <div className="relative z-10">
                <div className="flex items-center justify-center space-x-3 mb-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <LiaMotorcycleSolid className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-lg font-bold">{item.title}</h4>
                </div>
                <p className="text-sm text-white/90 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop carousel */}
        <div className="hidden lg:flex items-center mx-6 justify-center -mt-12 mb-[-3rem] relative h-[660px]">
          {/* Imagen izquierda */}
          <div
            className={`
              absolute left-0 top-1/2 transform -translate-y-1/2 transition-all duration-700 ease-in-out
              w-[44%] min-w-[560px] max-w-[calc(44%-3rem)]
              ${
                position === "left"
                  ? "opacity-0 -translate-x-10 scale-95 brightness-50"
                  : position === "right"
                  ? "opacity-100 translate-x-32 scale-125 brightness-100"
                  : "opacity-100 translate-x-0 scale-100 brightness-75"
              }
            `}
          >
            <img
              src={leftImage}
              alt="Detalle mecánico Orvil"
              className="w-full h-auto max-h-[85vh] rounded-[50px] shadow-lg object-contain transition-filter duration-700"
            />
            {/* Overlay para oscurecer */}
            <div
              className={`
              absolute inset-0 bg-black/30 transition-opacity duration-700 rounded-[50px]
              ${position === "right" ? "opacity-0" : "opacity-100"}
            `}
            />
          </div>

          {/* Contenedor de la card central y flechas */}
          <div className="relative z-10">
            {/* Card central */}
            <div
              className={`rounded-[50px] px-10 md:px-14 w-full max-w-md mx-8 overflow-hidden transition-transform duration-700 ease-in-out`}
              style={{
                transform:
                  position === "left"
                    ? "translateX(-20vw)"
                    : position === "right"
                    ? "translateX(20vw)"
                    : "translateX(0)",
                boxShadow: "0px 0px 25px rgba(20, 20, 20, 0.8)",
                background: `
                  linear-gradient(135deg, #3a3a3a 0%, #535353 25%, #6e6e6e 50%, #535353 75%, #3a3a3a 100%),
                  linear-gradient(45deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.05) 100%)`,
                backgroundBlendMode: "overlay",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <LiaMotorcycleSolid className="h-12 w-12 my-6 mx-auto" />
              <div className="flex items-center space-y-4 text-center text-xl leading-snug my-6 h-[360px]">
                <p>{textos[position]}</p>
              </div>
            </div>

            {/* Flecha Izquierda - con delay */}
            {position !== "left" && showArrows && (
              <button
                onClick={moveLeft}
                className={`
                  absolute z-20 top-1/2 transform -translate-y-1/2 translate-x-[1rem] bg-on/75 rounded-full p-2 hover:bg-on shadow-lg transition-all duration-300 ease-in-out hidden lg:block
                  left-0 opacity-0 animate-fadeIn
                  ${position === "right" ? "-translate-x-1/2" : ""}
                `}
                style={{
                  left: position === "right" ? "17vw" : "0",
                  animationDelay: "300ms",
                }}
              >
                <FaChevronLeft className="h-4 w-4 text-bg1" />
              </button>
            )}

            {/* Flecha Derecha - con delay */}
            {position !== "right" && showArrows && (
              <button
                onClick={moveRight}
                className={`
                  absolute z-20 top-1/2 transform -translate-y-1/2 -translate-x-[1rem] bg-on/75 rounded-full p-2 hover:bg-on shadow-lg transition-all duration-300 ease-in-out hidden lg:block
                  right-0 opacity-0 animate-fadeIn
                  ${position === "left" ? "translate-x-1/2" : ""}
                `}
                style={{
                  right: position === "left" ? "17vw" : "0",
                  animationDelay: "300ms",
                }}
              >
                <FaChevronRight className="h-4 w-4 text-bg1" />
              </button>
            )}
          </div>

          {/* Imagen derecha */}
          <div
            className={`
              absolute right-0 top-1/2 transform -translate-y-1/2 transition-all duration-700 ease-in-out
              w-[44%] min-w-[560px] max-w-[calc(44%-3rem)]
              ${
                position === "right"
                  ? "opacity-0 translate-x-10 scale-95 brightness-50"
                  : position === "left"
                  ? "opacity-100 -translate-x-32 scale-125 brightness-100"
                  : "opacity-100 translate-x-0 scale-100 brightness-75"
              }
            `}
          >
            <img
              src={rightImage}
              alt="Detalle mecánico Orvil"
              className="w-full h-auto max-h-[85vh] rounded-[50px] shadow-lg object-contain transition-filter duration-700"
            />
            {/* Overlay para oscurecer */}
            <div
              className={`
              absolute inset-0 bg-black/30 transition-opacity duration-700 rounded-[50px]
              ${position === "left" ? "opacity-0" : "opacity-100"}
            `}
            />
          </div>
        </div>

        {/* Más info */}
        <div className="max-w-full mx-auto px-4 mt-8 lg:mt-0">
          <div className="relative w-full lg:w-1/2 lg:ml-auto px-6 py-4">
            {/* Watermark móvil en sección Más info */}
            <img
              src={watermark}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute top-0 right-0 w-24 opacity-10 block lg:hidden"
            />
            <h3 className="text-3xl font-bold my-8 text-right">Más sobre Orvil</h3>
            <div className="space-y-4 text-off text-sm leading-relaxed text-right">
              <p>
                Nos especializamos en la comercialización de
                motores, transmisiones y diferenciales, tanto completos como por
                partes, con un enfoque en productos originales y repuestos OEM
                de alta calidad. Nuestra prioridad es ofrecer a cada cliente las
                piezas clave que permiten el correcto funcionamiento y
                movimiento de su vehículo, garantizando respaldo, seguridad y
                confianza en cada compra.
              </p>
              <p>
                Contamos con experiencia comercial desde 1992, respaldados por
                años de trayectoria en el sector automotriz y una sólida
                reputación en el mercado. A lo largo de este tiempo, nos hemos
                consolidado como un proveedor confiable para talleres, empresas
                y clientes particulares en todo el país, con almacenes físicos y
                un servicio de atención ágil, transparente y personalizado.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos para la animación de fadeIn */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
};

export default SobreOrvilSection;
