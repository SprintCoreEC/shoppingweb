import React from "react";
import fondoFooter from "../../assets/automovil.png";
import fondoAutomovil from "../../assets/fondoAutomovil.png";

const MovilPartsSection = () => {
  return (
    <div className="relative text-on bg-bg1 overflow-hidden pb-14 h-auto min-h-[500px] lg:h-[800px] lg:mt-20">
      <div
        className="hidden lg:block absolute inset-0 z-0 blur-2xl h-full lg:mt-48"
        style={{
          backgroundImage: `url(${fondoAutomovil})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "40%",
          opacity: 1,
        }}
      />

      <div className="hidden lg:block relative h-full w-full justify-center items-center">
        <div className="relative w-full h-full max-h-[800px] max-w-7xl mx-auto">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${fondoFooter})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
              opacity: 1,
            }}
          />

          <div className="relative z-10 h-full w-full">
            <div className="absolute top-[40%] left-[12%] transform -translate-x-1/2 -translate-y-1/2 bg-prin2 bg-opacity rounded-full p-3 max-w-sm shadow-lg">
              <p className="text-sm font-medium text-on">
                Repuestos originales y OEM listos para instalar
              </p>
            </div>

            <div className="absolute top-[22%] right-[14%] transform translate-x-1/2 -translate-y-1/2 bg-prin bg-opacity rounded-full p-3 max-w-sm shadow-lg">
              <p className="text-sm font-medium text-on">
                Cobertura y envíos a todo el Ecuador
              </p>
            </div>

            <div className="absolute bottom-[40%] left-[14%] transform -translate-x-1/2 translate-y-1/2 bg-prin bg-opacity rounded-full p-3 max-w-sm shadow-lg">
              <p className="text-sm font-medium text-on">
                Atención personalizada y asesoramiento técnico
              </p>
            </div>

            <div className="absolute bottom-[34%] right-[9%] transform translate-x-1/2 translate-y-1/2 bg-prin2 bg-opacity rounded-full p-3 max-w-sm shadow-lg">
              <p className="text-sm font-medium text-on">
                Garantía y respaldo en cada venta
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden relative">
        <div className="absolute top-0 left-0 right-0 z-20 px-4 py-8 space-y-6 md:space-y-14 mx-4 md:mx-20 text-center">
          <div className="backdrop-blur-sm bg-prin2/40 rounded-lg p-4 shadow-lg">
            <p className="text-sm font-medium text-on">
              Repuestos originales y OEM listos para instalar
            </p>
          </div>
          <div className="backdrop-blur-sm bg-prin/40 rounded-lg p-4 shadow-lg">
            <p className="text-sm font-medium text-on">
              Atención personalizada y asesoramiento técnico
            </p>
          </div>
          <div className="backdrop-blur-sm bg-prin2/40 rounded-lg p-4 shadow-lg">
            <p className="text-sm font-medium text-on">
              Garantía y respaldo en cada venta
            </p>
          </div>
          <div className="backdrop-blur-sm bg-prin/40 rounded-lg p-4 shadow-lg">
            <p className="text-sm font-medium text-on">
              Cobertura y envíos a todo el Ecuador
            </p>
          </div>
        </div>

        <div className="relative w-full h-96 md:h-[500px] mt-40">
          <div
            className="absolute inset-0 z-10"
            style={{
              backgroundImage: `url(${fondoFooter})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 1,
            }}
          />
          <div
            className="absolute inset-0 z-0 blur-lg"
            style={{
              backgroundImage: `url(${fondoAutomovil})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.5,
              marginTop: "20%",
              height: "60%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MovilPartsSection;
