import React, { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiMapPin,
  FiNavigation,
} from "react-icons/fi";
import img1 from "../../assets/conoceOrvil.png";
import img2 from "../../assets/ImpactImage.png"; // Asegúrate de importar más imágenes
import img3 from "../../assets/Servicio3.png";

const UbicationSection = () => {
  const [activeTab, setActiveTab] = useState("imagen");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Lista de imágenes para el carrusel
  const images = [
    { src: img1, alt: "Ubicación Orvil", description: "Ambato, Tungurahua" },
    { src: img2, alt: "Vista frontal", description: "Entrada principal" },
    { src: img3, alt: "Área común", description: "Zona de reuniones" }
  ];

  // Función para cambiar a la imagen anterior
  const prevImage = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Función para cambiar a la siguiente imagen
  const nextImage = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      id="location"
      className="bg-bg1 py-24 text-on px-8 sm:px-8 lg:px-12"
    >
      <div className="max-w-full mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-10">Ubicación</h2>

        {/* Contenido Desktop - Diseño Original */}
        <div className="hidden lg:block">
          <div className="flex relative">
            <button
              type="button"
              onClick={nextImage}
              className="
                absolute
                top-1/2 left-1/2
                transform -translate-y-1/2 -translate-x-1/2
                p-2 bg-on/75 hover:bg-on rounded-full shadow-md
                hover:bg-opacity-100 transition text-bg1
                z-50
              "
            >
              <FiChevronRight size={24} />
            </button>

            <div className="lg:w-1/2 relative z-10">
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="w-full h-[400px] object-cover rounded-l-xl shadow-lg"
              />

              <button
                type="button"
                onClick={prevImage}
                className="
                  absolute
                  top-1/2 left-0
                  transform -translate-y-1/2 -translate-x-1/2
                  p-2 bg-on/75 hover:bg-on rounded-full shadow-md
                  hover:bg-opacity-100 transition text-bg1
                  z-30
                "
              >
                <FiChevronLeft size={24} />
              </button>
            </div>

            <div className="lg:w-1/2 relative -ml-1 z-20 -top-[20px]">
              <div className="relative h-[440px] rounded-xl overflow-hidden shadow-lg">
                <iframe
                  title="Mapa de Ambato"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104543.92445780967!2d-78.616120!3d-1.248660!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d02f29171b876f%3A0xf5e68d1c49e59c37!2sAmbato%2C%20Ecuador!5e0!3m2!1ses!2ses!4v1697447801346!5m2!1ses!2ses"
                  width="100%"
                  height="100%"
                  className="block border-0"
                  allowFullScreen
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black mix-blend-saturation pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Contenido Móvil - Diseño Innovador */}
        <div className="lg:hidden">
          {/* Tabs de navegación */}
          <div className="flex bg-off rounded-xl shadow-lg p-1 mb-6 mx-auto max-w-sm">
            <button
              onClick={() => setActiveTab("imagen")}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === "imagen"
                  ? "bg-on text-bg1 shadow-md"
                  : "text-bg2 hover:text-bg1"
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <FiMapPin size={16} />
                <span>Vista</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("mapa")}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === "mapa"
                  ? "bg-on text-bg1 shadow-md"
                  : "text-bg2 hover:text-bg1"
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <FiNavigation size={16} />
                <span>Mapa</span>
              </div>
            </button>
          </div>

          {/* Contenido de tabs */}
          <div className="bg-on rounded-2xl shadow-2xl overflow-hidden">
            {activeTab === "imagen" && (
              <div className="relative">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2">
                    <button 
                      onClick={prevImage}
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 text-[#20345F]"
                    >
                      <FiChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 text-[#20345F]"
                    >
                      <FiChevronRight size={20} />
                    </button>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <FiMapPin className="text-[#20345F]" size={18} />
                            <h3 className="font-semibold text-gray-900">
                              Orvil Ecuador
                            </h3>
                          </div>
                          <p className="text-sm text-gray-600">
                            {images[currentImageIndex].description}
                          </p>
                        </div>
                        <button
                          onClick={() => setActiveTab("mapa")}
                          className="bg-bg1/80 hover:bg-prin text-off hover:text-on px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                        >
                          Ver Mapa
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "mapa" && (
              <div className="relative">
                <div className="aspect-[4/3] relative">
                  <iframe
                    title="Mapa de Ambato"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104543.92445780967!2d-78.616120!3d-1.248660!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d02f29171b876f%3A0xf5e68d1c49e59c37!2sAmbato%2C%20Ecuador!5e0!3m2!1ses!2ses!4v1697447801346!5m2!1ses!2ses"
                    width="100%"
                    height="100%"
                    className="block border-0"
                    allowFullScreen
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black mix-blend-saturation pointer-events-none" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UbicationSection;