import { useState, useEffect, useRef } from "react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import img1 from "../../assets/fondoOrvil.png";
import img2 from "../../assets/fondoAutomovil.png";
import img3 from "../../assets/automovil.png";
import mini from "../../assets/conoceOrvil.png";
import { FaArrowRight } from "react-icons/fa6";
import { IoPeopleCircle } from "react-icons/io5";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { FaCarAlt } from "react-icons/fa";
import { FaCarCrash } from "react-icons/fa";
import fondoAutomovil from "../../assets/fondoAutomovil.png";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [socialExpanded, setSocialExpanded] = useState(false);
  const socialRef = useRef(null);

  // Sample images - replace with your actual image imports
  const images = [img1, img2, img3];
  // Estados nuevos
  const [cardExpanded, setCardExpanded] = useState(false);

  // toggle del card
  const toggleCard = () => setCardExpanded(!cardExpanded);

  // Check for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // menor a lg
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close social dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (socialRef.current && !socialRef.current.contains(event.target)) {
        setSocialExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const toggleSocial = () => {
    setSocialExpanded(!socialExpanded);
  };

  return (
    <section className="bg-bg1 relative w-full mx-auto mt-20 md:mt-20 px-4 sm:px-6 lg:px-8">
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
      {/* Slider contenedor */}
      <div
        className="relative rounded-[20px] md:rounded-[30px] overflow-hidden bg-cover bg-center h-[230px] sm:h-[370px] lg:h-[430px] transition-all duration-500 ease-in-out"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        {/* Capa oscura */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Texto principal */}
        <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center px-4 md:px-12">
          <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug max-w-[75%] md:max-w-[65%]">
            Las piezas clave que mueven a tu <br className="hidden sm:block" />
            vehículo, con respaldo garantizado.<br className="hidden sm:block" />
            
          </h1>
        </div>

        {/* Clientes + redes sociales */}
        <div
          ref={socialRef}
          className={`absolute top-4 right-4 md:top-6 md:right-6 z-20 text-white text-right space-y-1 mr-[14px] transition-all duration-300 ${
            isMobile ? "social-container" : ""
          }`}
        >
          <p className="text-md md:text-xl font-semibold leading-tight">
            ¡Nuestros clientes!
            <br />
            <span className="text-sm md:text-lg font-semibold text-bg">
              {" "}
              {/* Antes text-[10px]  */}
              Sé parte de ellos
            </span>
          </p>
          <h2 className="text-2xl md:text-4xl font-bold">235</h2>

          {/* Desktop Social Icons */}
          {!isMobile && (
            <div className="flex flex-col items-end gap-2 md:gap-3 pt-2 md:pt-4">
              <a
                href="#!"
                className="bg-white hover:bg-[#D62976] text-black rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center hover:text-white transition"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="#!"
                className="bg-white hover:bg-blue-500 text-black rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center hover:text-white transition"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="#!"
                className="bg-white hover:bg-[#010101] text-black rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center hover:text-white transition"
              >
                <FaTiktok size={14} />
              </a>
            </div>
          )}

          {/* Mobile Social Dropdown */}
          {isMobile && (
            <div className="absolute right-0">
              <button
                onClick={toggleSocial}
                className=" text-bg rounded-full w-8 h-8 flex items-center justify-center hover:text-white transition-all shadow-lg"
              >
                {socialExpanded ? (
                  <span className="text-2xl font-bold transition-all duration-600">
                    <FaCarCrash />
                  </span>
                ) : (
                  <span className="text-xl font-bold transition-all duration-600">
                    <FaCarAlt />
                  </span>
                )}
              </button>

              <div
                className={`absolute right-0 mt-2 transition-all duration-300 ease-out ${
                  socialExpanded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                <div className="flex flex-col text-bg items-end gap-4 bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                  <a
                    href="#!"
                    className="bg-bgrounded-full flex items-center justify-center text-bg hover:text-white transition transform hover:scale-110"
                  >
                    <FaInstagram size={16} />
                  </a>
                  <a
                    href="#!"
                    className="bg-whiterounded-full flex items-center justify-center text-bg hover:text-white transition transform hover:scale-110"
                  >
                    <FaFacebookF size={16} />
                  </a>
                  <a
                    href="#!"
                    className="rounded-full  flex items-center justify-center text-bg hover:text-white transition transform hover:scale-110"
                  >
                    <FaTiktok size={16} />
                  </a>
                </div>
              </div>
              {/* <div className="flex flex-col items-end gap-4 bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                  <a
                    href="#!"
                    className=" flex items-center justify-center hover:scale-110 transition"
                  >
                    <FaInstagram size={16} className="text-pink-600" />
                  </a>

                  <a
                    href="#!"
                    className="rounded-full flex items-center justify-center hover:scale-110 transition"
                  >
                    <FaFacebookF size={16} className="text-blue-600" />
                  </a>

                  <a
                    href="#!"
                    className="rounded-full flex items-center justify-center hover:scale-110 transition"
                  >
                    <FaTiktok size={16} className="text-black" />
                  </a>
                </div> */}
            </div>
          )}
        </div>

        {/* Flechas y paginación inferiores - Hidden on mobile */}
        {!isMobile && (
          <div className="absolute left-1/2 bottom-4 md:bottom-6 transform -translate-x-1/2 flex flex-col items-center space-y-3 md:space-y-6 z-30">
            {/* fila de flechas */}
            <div className="flex items-center space-x-16 md:space-x-32 text-on">
              {/* Botón izquierdo */}
              <button
                onClick={prevImage}
                className="group w-8 h-8 md:w-10 md:h-10 rounded-full bg-bg2/75 hover:bg-on transition-all duration-300 flex items-center justify-center shadow-md border border-white/70 hover:scale-105 active:scale-95"
              >
                <FiChevronLeft className="text-xl md:text-2xl text-on group-hover:text-bg1 transition-colors duration-300" />
              </button>

              {/* Botón derecho */}
              <button
                onClick={nextImage}
                className="group w-8 h-8 md:w-10 md:h-10 rounded-full bg-bg2/75 hover:bg-on transition-all duration-300 flex items-center justify-center shadow-md border border-white/70 hover:scale-105 active:scale-95"
              >
                <FiChevronRight className="text-xl md:text-2xl text-on group-hover:text-bg1 transition-colors duration-300" />
              </button>
            </div>

            {/* fila de puntos */}
            <div className="flex items-center space-x-3 md:space-x-5">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`transition-all duration-300 ${
                    currentImageIndex === index
                      ? "w-3 h-3 md:w-4 md:h-4 bg-white"
                      : "w-2 h-2 md:w-3 md:h-3 bg-[#8A8C8E]"
                  } rounded-full shadow-md`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Mobile dots only */}
        {isMobile && (
          <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2 flex items-center space-x-3 z-30">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`transition-all duration-300 ${
                  currentImageIndex === index
                    ? "w-3 h-3 bg-white"
                    : "w-2 h-2 bg-[#8A8C8E]"
                } rounded-full shadow-md`}
              />
            ))}
          </div>
        )}
      </div>

      {/* CTA card */}
      <div
        className={`mt-4 mx-auto md:absolute md:-bottom-8 md:right-8 lg:right-[70px] z-10 bg-bg2/70 px-4 py-6 md:px-8 md:py-12 rounded-[30px] md:rounded-[40px] w-full md:w-[360px] ${
          isMobile
            ? "relative overflow-hidden flex items-center"
            : "flex-row items-center"
        } transition-shadow duration-300`}
        style={{
          boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.25)",
          height: isMobile ? "120px" : "auto",
        }}
        onClick={isMobile ? () => setCardExpanded(!cardExpanded) : undefined}
      >
        {isMobile ? (
          <>
            {/* Texto expandido a la izquierda */}
            <div
              className={`flex-1 px-2 text-on transition-all duration-700 ease-in-out ${
                cardExpanded
                  ? "opacity-100 translate-x-0 pointer-events-auto"
                  : "opacity-0 -translate-x-10 pointer-events-none"
              }`}
            >
              <h3 className="font-bold text-sm mb-1">Sobre Orvil</h3>
              <p className="text-xs font-medium mr-[40%]">
                Somos especialistas en motores, transmisiones y diferenciales.
              </p>
            </div>

            {/* Imagen + flecha desplazables con delay real */}
            <div
              className="absolute top-1/2 -translate-y-1/2 flex items-center z-20"
              style={{
                transform: `translate(${cardExpanded ? "60vw" : "0"}, -50%)`,
                opacity: cardExpanded ? 1 : 1,
                transition:
                  "transform 0.3s ease-in-out 0.1s, opacity 0.8s ease-in-out 0.3s",
              }}
            >
              <FaArrowRight className="text-on text-xl mr-4 flex-shrink-0" />
              <img
                src={mini}
                alt="Vista previa"
                className="w-20 h-20 object-cover rounded-xl shadow-lg flex-shrink-0"
              />
            </div>

            {/* Texto estático inicial con fade */}
            <div
              className={`absolute right-[40px] text-on transition-all duration-700 ease-in-out ${
                cardExpanded
                  ? "opacity-0 pointer-events-none translate-x-10"
                  : "opacity-100 pointer-events-auto translate-x-0"
              }`}
            >
              <h3 className="font-bold text-sm pl-14">
                Conoce más sobre Orvil
              </h3>
            </div>
          </>
        ) : (
          <>
            {/* Desktop: diseño original intacto */}
            <div className="flex-1 pr-4 md:pr-0 text-on">
              <h3 className="w-full flex justify-between items-center font-bold text-sm md:text-sm lg:text-xl">
                Conoce más sobre Orvil
                <FaArrowRight className="ml-1 text-sm md:text-base" />
              </h3>
              <p className="text-xs md:text-sm mt-2 md:mt-5 font-medium pr-12 md:pr-16 pl-2">
                Somos especialistas en motores, transmisiones y diferenciales.
              </p>
            </div>

            <img
              src={mini}
              alt="Vista previa"
              className="w-16 h-16 md:w-24 md:h-24 rounded-lg md:rounded-xl object-cover static md:absolute bottom-4 -right-2 md:-right-6 z-[110] hover:scale-105 transition-transform duration-300"
              style={{
                boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.50)",
              }}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
