import React, { useState, useEffect } from "react";
import logo from "../../assets/OrvilLogo.png";
import eslogan from "../../assets/Autopartes.png";
import { HiOutlineSearch, HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { name: "Inicio", path: "#hero" },
  { name: "Sobre nosotros", path: "#about" },
  { name: "Servicios", path: "#services" },
  { name: "Ubicación", path: "#location" },
  //{ name: "Contacto", path: "#contact" },
];

const splitActiveText = (text) => {
  if (text.length <= 3) return ["", text];
  const prefix = text.slice(0, -3);
  const suffix = text.slice(-3);
  return [prefix, suffix];
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.path))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { root: null, rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((sec) => observer.observe(sec));

    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight / 2;
      let cur = "#hero";
      sections.forEach((sec) => {
        const top = sec.offsetTop;
        const bottom = top + sec.offsetHeight;
        if (mid >= top && mid < bottom) {
          cur = `#${sec.id}`;
        }
      });
      setActiveSection(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  const handleLinkClick = (path) => {
    const sec = document.querySelector(path);
    if (sec) sec.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-bg1">
      <div className="max-w-full mx-auto px-8 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo a la izquierda */}
          <div className="flex-shrink-0 flex items-center space-x-8 ">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <img
              src={eslogan}
              alt="Eslogan"
              className="hidden lg:block h-4 w-auto"
            />
          </div>

          {/* Enlaces + búsqueda + toggle móvil a la derecha */}
          <div className="flex items-center space-x-4">
            {/* Menú escritorio */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.path;
                const [pref, suf] = splitActiveText(item.name);

                return (
                  <button
                    key={item.name}
                    onClick={() => handleLinkClick(item.path)}
                    className="px-3 py-2 rounded-md text-sm font-normal transition group"
                  >
                    {isActive ? (
                      <>
                        <span className="text-on">{pref}</span>
                        <span className="bg-on text-black pl-[1px] pr-2 py-1 rounded-md">
                          {suf}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-off group-hover:text-white transition-colors duration-300">
                          {pref}
                        </span>
                        <span className="text-off group-hover:text-on pl-[1px] pr-2 py-1 rounded-md transition-colors duration-300">
                          {suf}
                        </span>
                      </>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Toggle móvil */}
            <button
              className="md:hidden p-2 rounded-md text-white hover:bg-gray-100 hover:text-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {menuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      <div
        className={`lg:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.path;
            const [pref, suf] = splitActiveText(item.name);
            return (
              <button
                key={item.name}
                onClick={() => handleLinkClick(item.path)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-normal transition group"
              >
                {isActive ? (
                  <>
                    <span className="text-black">{pref}</span>
                    <span className="bg-[#20345F] text-white pl-[1px] pr-2 py-1 rounded-md">
                      {suf}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-black group-hover:text-black">
                      {pref}
                    </span>
                    <span className="text-black group-hover:bg-[#20345F] group-hover:text-white pl-[1px] pr-2 py-1 rounded-md transition-colors duration-300">
                      {suf}
                    </span>
                  </>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
