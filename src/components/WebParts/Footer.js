import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FiMail, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import fondoFooter from "../../assets/FondoFooter.png"; // Asegúrate de importar la imagen

import watermark from "../../assets/mm2.png";
import engineImage from "../../assets/conoceOrvil.png";

const Footer = () => {
  return (
    <footer className="relative text-on bg-bg1 overflow-hidden py-6">
      {/* Marca de agua */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${fondoFooter})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.8, // Ajusta la opacidad según necesites
        }}
      />
      <img
        src={watermark}
        alt=""
        className="pointer-events-none absolute bottom-0 right-0 md:h-96 opacity-50 z-0"
      />

      {/* Contenedor de contenido */}
      <div className="relative z-10 max-w-full mx-auto px-4 sm:px-6 py-2 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sección izquierda - Imagen y Contacto */}
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Imagen 
            <div className="flex-shrink-0 px-4 sm:px-12 mx-auto sm:mx-0">
              <img
                src={engineImage}
                alt="Motor Orvil"
                className="w-48 sm:w-56 h-auto sm:h-60 object-cover rounded-3xl shadow-lg"
              />
            </div>
            */}
            <div className="flex-shrink-0 px-4 sm:px-12 hidden sm:block">
              <img
                src={engineImage}
                alt="Motor Orvil"
                className="w-48 sm:w-56 h-auto sm:h-60 object-cover rounded-3xl shadow-lg"
              />
            </div>

            {/* Información de contacto */}
            <div className="flex-1 sm:ml-6 px-4 sm:px-0">
              <h3 className="text-2xl font-bold mb-6 text-center md:text-left">
                Contáctanos
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <AiOutlineWhatsApp size={20} className="flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold">WhatsApp</div>
                    <div className="text-sm text-off">+593 99 987 9877</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <FiMail size={20} className="flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold">Correo</div>
                    <div className="text-sm text-off">example@example.com</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <FiMapPin size={20} className="flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold">Ubicación</div>
                    <div className="text-sm text-off">
                      Calles del local físico y alguna referencia del mismo.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sección derecha - Redes sociales */}
          <div className="px-4 sm:px-0 sm:ml-10 lg:ml-40 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Síguenos
            </h3>
            <p className="mb-4 sm:mb-6">
              ¡Sigue nuestras redes sociales!
            </p>

            <div className="flex space-x-4 mb-8 sm:mb-12 justify-center sm:justify-start">
              <a
                href="https://twitter.com/"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-bg2 rounded-full flex items-center justify-center hover:bg-[#D62976] transition-colors duration-200"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://twitter.com/"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-bg2 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-200"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-bg2 rounded-full flex items-center justify-center hover:bg-[#010101] transition-colors duration-200"
              >
                <FaTiktok size={18} />
              </a>
            </div>

            <div className="text-center sm:text-right">
              <div className="text-xs leading-relaxed">
                © 2025 Orvil. Todos los derechos reservados
                <br />
                <a
                  href="https://sprintcore.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  by SpritCore SAS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
