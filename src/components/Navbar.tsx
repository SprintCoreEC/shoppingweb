import { useState, useEffect } from "react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre nosotros", href: "#sobre-nosotros" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(navLinks[0].href);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter(
        (section): section is HTMLElement => section instanceof HTMLElement,
      );

    const updateActiveSection = () => {
      const scrollPoint = window.scrollY + window.innerHeight * 0.35;
      let currentSection = navLinks[0].href;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = window.scrollY + rect.top;

        if (scrollPoint >= sectionTop) {
          currentSection = navLinks[index].href;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const linkClasses = (href: string) =>
    `transition-colors duration-200 ${
      activeSection === href
        ? "text-verdigris font-semibold"
        : "text-white/90 hover:text-white"
    }`;

  return (
    <nav
      className={`fixed w-full z-50 py-6 transition-all duration-300 ${isScrolled ? "bg-[#0a0a0a]/30 backdrop-blur-xl shadow-lg" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between mb-2">
        <div className="text-white/90 font-bold tracking-[0.3em] text-sm">
          P R I M E &nbsp; S H E L L &nbsp; S T O R E
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className={linkClasses(href)}>
              {label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          className={`md:hidden inline-flex h-10 w-10 items-center justify-center transition duration-300 
    ${
      isMenuOpen
        ? "rounded-full border border-white/20 text-gray hover:bg-white/10"
        : "text-gray"
    }`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">
            {isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          </span>
          <div className="relative h-5 w-5">
            <span
              className={`absolute left-0 top-0 h-[2px] w-full rounded-full bg-white transition-transform duration-300 ${
                isMenuOpen ? "translate-y-[10px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-full h-[2px] w-full rounded-full bg-white transition-transform duration-300 ${
                isMenuOpen ? "-translate-y-[10px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-6 rounded-2xl border border-white/10 bg-[#0a0a0a]/95 p-5 shadow-2xl shadow-black/20">
          <div className="flex flex-col gap-4 text-sm">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`block rounded-xl px-4 py-3 transition duration-300 ${
                  activeSection === href
                    ? "bg-[#0a0a0a]/70 text-verdigris"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
