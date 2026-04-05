import { FiLayers, FiExternalLink } from 'react-icons/fi';
import personasTrabajando from "../../assets/productoImagen.png";

const productos = [
    {
        id: 1,
        title: 'Producto destacado',
        description: `Aquí va algún texto importante que se debe saber sobre la empresa. Aquí va algún texto importante que se debe saber sobre la empresa. Aquí va algún texto importante que se debe saber sobre la empresa.`,
        bgImage: personasTrabajando,
        large: true,
        showButton: true,
        link: '#',
    },
    {
        id: 2,
        title: 'Producto mediano',
        description: `Aquí va algún texto importante que se debe saber sobre la empresa. Aquí va algún texto importante que se debe saber sobre la empresa.`,
        bgImage: '../../assets/productoImagen.png',
        large: false,
        link: '#',
    },
    {
        id: 3,
        title: 'Producto pequeño 1',
        description: `Aquí va algún texto importante que se debe saber sobre la empresa. Aquí va algún texto importante que se debe saber sobre la empresa.`,
        bgImage: '/ruta/a/tu/imagen2.jpg',
        small: true,
        link: '#',
    },
    {
        id: 4,
        title: 'Producto pequeño 2',
        description: `Aquí va algún texto importante que se debe saber sobre la empresa. Aquí va algún texto importante que se debe saber sobre la empresa.`,
        bgImage: '/ruta/a/tu/imagen2.jpg',
        small: true,
        link: '#',
    },
    {
        id: 5,
        title: 'Producto pequeño 3',
        description: `Aquí va algún texto importante que se debe saber sobre la empresa.`,
        bgImage: '/ruta/a/tu/imagen2.jpg',
        small: true,
        link: '#',
    },
    {
        id: 6,
        title: 'Producto pequeño 3',
        description: `Aquí va algún texto importante que se debe saber sobre la empresa.`,
        bgImage: '/ruta/a/tu/imagen2.jpg',
        small: true,
        link: '#',
    },
    {
        id: 7,
        title: 'Producto pequeño 3',
        description: `Aquí va algún texto importante que se debe saber sobre la empresa.`,
        bgImage: personasTrabajando,
        small: true,
        link: '#',
    },
];

const ProductoCard = ({ producto }) => {
    const { description, bgImage, large, showButton, link } = producto;

     const cardStyle = {
         backgroundColor: '#1C1A10',
                backgroundImage: bgImage ? `url(${bgImage})` : 'none',
                    backgroundSize: 'cover',
                        backgroundPosition: 'center',
            };
    return (
        <div className="relative rounded-3xl overflow-hidden flex flex-col justify-between text-white p-6 bg-[#1C1A10] backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:shadow-lg min-h-[280px]" 
        style={cardStyle}>

            {/* Botón "Ver producto" arriba a la izquierda en tarjetas grandes */}
            {large && showButton && (
                <div className="absolute top-4 left-4 z-20">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-[#D9D9D9] rounded-xl text-sm text-white/65 hover:bg-white/10 hover:border-white transition-all duration-200"
                    >
                        Ver producto
                        <FiExternalLink size={14} />
                    </a>
                </div>
            )}

            {/* Icono enlace externo arriba a la derecha (solo si NO es tarjeta grande) */}
            {!large && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 text-white/65 hover:text-gray-300 transition-colors duration-200 z-20"
                    aria-label="Abrir producto en nueva pestaña"
                >
                    <FiExternalLink size={18} />
                </a>
            )}

            {/* Contenido principal */}
            <div className="relative z-10 flex flex-col h-full justify-between">
                {/* Icono Layers */}
                <div className={`mb-6 text-white mt-6 ${large ? 'flex justify-end' : 'flex justify-center mb-10'}`}>
                    <FiLayers size={64} />
                </div>

                {/* Texto descriptivo */}
                <div className="mt-10">
                    <p className="text-sm leading-relaxed text-center text-white mb-4">{description}</p>
                </div>
            </div>
        </div>
    );
};

const ProductSection = () => {
    return (
        <section className="bg-[#14140A] py-24 px-4 sm:px-8 lg:px-16">
            {/* Título */}
            <div className="bg-gradient-to-r from-[#14140A] via-[#332A0C] to-[#14140A] py-3 px-8 max-w-md mx-auto mb-12">
                <h2 className="text-center text-white text-3xl sm:text-4xl md:text-5xl font-normal [text-shadow:0_0_25px_#F1C732]">
                    Productos
                </h2>
            </div>

            {/* Container principal */}
            <div className="max-w-7xl mx-auto">
                {/* Primera fila: producto grande al inicio, producto pequeño al lado */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    <div className="lg:col-span-2 h-full">
                        <ProductoCard producto={productos[0]} /> {/* Grande */}
                    </div>
                    <div className="lg:col-span-1 h-full">
                        <ProductoCard producto={productos[1]} /> {/* Pequeño */}
                    </div>
                </div>

                {/* Segunda fila: tres productos medianos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {productos.slice(2, 5).map((producto) => (
                        <div key={producto.id} className="h-full">
                            <ProductoCard producto={producto} />
                        </div>
                    ))}
                </div>

                {/* Tercera fila: producto pequeño a la izquierda, producto grande al final */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    <div className="lg:col-span-1 order-2 lg:order-1 h-full">
                        <ProductoCard producto={productos[5]} /> {/* Pequeño */}
                    </div>
                    <div className="lg:col-span-2 order-1 lg:order-2 h-full">
                        <ProductoCard producto={productos[6]} /> {/* Grande */}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ProductSection;
