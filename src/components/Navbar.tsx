import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0a]/30 backdrop-blur-xl py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-white font-bold tracking-[0.3em] text-sm">
          A M E R I C A N &nbsp; S H O P
        </div>
        <div className="hidden md:flex space-x-8 text-gray-300 text-sm">
          <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
          <a href="#sobre-nosotros" className="hover:text-white transition-colors">Sobre nosotros</a>
          <a href="#catalogo" className="hover:text-white transition-colors">Catálogo</a>
          <a href="#testimonios" className="hover:text-white transition-colors">Testimonios</a>
          <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
        </div>
      </div>
    </nav>
  );
}
