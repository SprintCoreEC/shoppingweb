import { AiFillStar } from 'react-icons/ai';
import opinion from "../../assets/opinions.png";

const Star = () => (
    <AiFillStar className="w-5 h-5 text-yellow-400" />
  );
const StarRating = ({ rating = 5, align = 'right' }) => (
    <div className={`flex ${align === 'right' ? 'justify-end' : 'justify-center'} gap-1 mb-4`}>
        {[...Array(rating)].map((_, i) => (
            <Star key={i} />
        ))}
    </div>
);

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            avatar: opinion,
            text: "Aquí va algún texto importante que se deba saber sobre la empresa. Aquí va algún texto importante que se deba saber sobre la empresa."
        },
        {
            id: 2,
            avatar: opinion,
            text: "Aquí va algún texto importante que se deba saber sobre la empresa. Aquí va algún texto importante que se deba saber sobre la empresa."
        },
        {
            id: 3,
            avatar: opinion,
            text: "Aquí va algún texto importante que se deba saber sobre la empresa. Aquí va algún texto importante que se deba saber sobre la empresa."
        },
        {
            id: 4,
            avatar: opinion,
            text: "Aquí va algún texto importante que se deba saber sobre la empresa. Aquí va algún texto importante que se deba saber sobre la empresa."
        },
        {
            id: 5,
            avatar: opinion,
            text: "Aquí va algún texto importante que se deba saber sobre la empresa. Aquí va algún texto importante que se deba saber sobre la empresa."
        },
        {
            id: 6,
            avatar: opinion,
            text: "Aquí va algún texto importante que se deba saber sobre la empresa. Aquí va algún texto importante que se deba saber sobre la empresa."
        }
    ];

    return (
        <section className="bg-[#14140A] py-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Sección de Testimonios */}
                <div>
                    <h2 className="text-center text-white text-3xl sm:text-4xl md:text-5xl font-normal [text-shadow:0_0_25px_#F1C732] mb-6">
                        Opiniones de nuestros clientes
                    </h2>
                    <p className="text-center text-white mb-12 max-w-7xl mx-auto text-md">
                        Aqupi poner algpun texto medio chévere para introducir el tema. Aqupi poner algpun texto medio chévere para introducir el tema.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 justify-items-center">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="bg-[#1C1A10] w-[95%] md:w-[80%] lg:w-[90%] xl:w-[75%] rounded-2xl p-8 pl-24 relative hover:bg-gray-750 transition-colors duration-300"
                            >
                                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
                                    <img
                                        src={testimonial.avatar}
                                        alt="Cliente"
                                        className="w-20 h-20 rounded-full grayscale object-cover"
                                    />
                                </div>
                                <div className="text-right text-md">
                                    <StarRating align="right" />
                                    <p className="text-white leading-relaxed">
                                        {testimonial.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
