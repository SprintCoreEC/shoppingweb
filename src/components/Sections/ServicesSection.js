import { useEffect, useRef, useState } from "react";
import img1 from "../../assets/Servicio1.png";
import img2 from "../../assets/Servicio2.png";
import img3 from "../../assets/Servicio3.png";
import ImpactImage from "./ImpactImage";

const ServicesSection = () => {
  const squareRef1 = useRef(null);
  const squareRef2 = useRef(null);
  const [squareHeight1, setSquareHeight1] = useState(0);
  const [squareHeight2, setSquareHeight2] = useState(0);

  useEffect(() => {
    const updateHeights = () => {
      if (squareRef1.current) {
        setSquareHeight1(squareRef1.current.offsetHeight);
      }
      if (squareRef2.current) {
        setSquareHeight2(squareRef2.current.offsetHeight);
      }
    };

    updateHeights();

    // Agregar listener para cambios de tamaño de ventana
    window.addEventListener("resize", updateHeights);

    return () => {
      window.removeEventListener("resize", updateHeights);
    };
  }, []);

  return (
    <section className="relative bg-bg1 overflow-hidden pt-24 px-8 sm:px-8 lg:px-12 text-on">
      <div className="relative w-full mx-auto flex flex-col lg:flex-row items-stretch gap-8 mb-8">
        {/* Texto puede crecer todo lo que quiera */}
        <div className="w-full lg:w-[40%] px-0 flex flex-col justify-start">
          <h2 className="text-4xl font-bold mb-6">Nuestra Historia</h2>
          <p className="text-base text-off leading-relaxed mb-4">
            Orvil Autopartes tiene sus raíces en el año 1992, cuando nace bajo
            el nombre Repuestos Ortiz, fundado en la icónica Avenida El Rey de
            Ambato, una zona tradicionalmente reconocida por su actividad
            comercial en repuestos automotrices.
            <br />
            Durante más de tres décadas, la empresa se consolidó como un
            referente de confianza, calidad y atención personalizada para
            cientos de clientes, talleres y empresas a nivel nacional.
            <br />
            Con el paso de los años, logramos construir un legado familiar,
            basado en la honestidad, el compromiso y un conocimiento profundo
            del sector automotriz, entendiendo las necesidades reales de quienes
            buscan soluciones eficientes y confiables para sus vehículos.
          </p>
        </div>

        {/* Zona de imágenes */}
        <div className="w-full lg:w-[60%] flex gap-4 items-center relative flex-row-reverse">
          {/* Imágenes en pila con altura igual a la cuadrada */}
          <div
            className="w-1/2 flex flex-col justify-start gap-4"
            style={{ height: `${squareHeight1}px` }}
          >
            <div className="relative w-full h-1/2 md:h-[40%] overflow-hidden shadow-lg">
              <img
                src={img2}
                alt="Servicio secundario 1"
                className="absolute inset-0 w-full h-full object-fill"
              />
            </div>
            <div className="relative w-full h-1/2 md:h-[40%] overflow-hidden shadow-lg">
              <img
                src={img3}
                alt="Servicio secundario 2"
                className="absolute inset-0 w-full h-full object-fill"
              />
            </div>
          </div>

          {/* Imagen cuadrada centrada verticalmente */}
          <div className="w-1/2 flex justify-center relative">
            <div
              ref={squareRef1}
              className="relative w-full aspect-square overflow-hidden shadow-lg"
            >
              <img
                src={img1}
                alt="Servicio principal"
                className="absolute inset-0 w-full h-full object-cover transform scale-x-[-1]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full mx-auto flex flex-col lg:flex-row-reverse items-stretch gap-8">
        {/* Texto (a la derecha en móvil, izquierda en desktop invertido) */}
        <div className="w-full lg:w-[40%] px-0 flex flex-col justify-start text-right">
          <h2 className="text-4xl font-bold mb-6 md:mb-9 md:-mt-0">
            Nuestra misión
          </h2>
          <p className="text-base text-off leading-relaxed">
            Hoy, damos un paso firme hacia la renovación. Con el respaldo de más
            de 30 años de trayectoria, iniciamos una nueva etapa bajo el nombre
            Orvil Autopartes, reflejando una imagen moderna, profesional y
            orientada al futuro.
            <br />
            Esta evolución marca un cambio generacional en la dirección del
            negocio, impulsado por una visión estratégica de crecimiento y
            expansión, pero manteniendo intactos los valores que nos han guiado
            desde el inicio: integridad, calidad y compromiso con nuestros
            clientes.
            <br />
            Cambiamos por fuera, pero por dentro seguimos siendo los mismos:
            apasionados por ofrecer repuestos confiables y una experiencia de
            atención superior, respaldados por la experiencia y tradición de
            toda una vida en el sector automotriz.
          </p>
        </div>

        {/* Imágenes alineadas como en la parte superior */}
        <div className="w-full lg:w-[60%] flex gap-4 items-center relative flex-row-reverse">
          {/* Imagen cuadrada centrada verticalmente */}
          <div className="w-1/2 flex justify-center relative">
            <div
              ref={squareRef2}
              className="relative w-full aspect-square overflow-hidden shadow-lg"
            >
              <img
                src={img1}
                alt="Servicio principal"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Imágenes en pila con altura igual a la cuadrada */}
          <div
            className="w-1/2 flex flex-col justify-start gap-4"
            style={{ height: `${squareHeight2}px` }}
          >
            <div className="relative w-full h-1/2 md:h-[40%] overflow-hidden shadow-lg">
              <img
                src={img2}
                alt="Servicio secundario 1"
                className="absolute inset-0 w-full h-full object-fill"
              />
            </div>
            <div className="relative w-full h-1/2 md:h-[40%] oveFrflow-hidden shadow-lg">
              <img
                src={img3}
                alt="Servicio secundario 2"
                className="absolute inset-0 w-full h-full object-fill"
              />
            </div>
          </div>
        </div>
      </div>
      <ImpactImage />
    </section>
  );
};

export default ServicesSection;
