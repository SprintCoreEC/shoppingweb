import React from "react";
import {
  FaChevronDown,
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import fondoSprint from "../../assets/fondoSprint.png";

const FrequentQuestionsSprint = () => {
  const [openQuestion, setOpenQuestion] = React.useState(null);

  const faqCategories = [
    {
      title: "General Information",
      id: "cat1", // Añadido ID para categoría
      questions: [
        {
          question: "What are the Coffe Shop hours? ",
          id: "cat1-q1", // Añadido ID único para pregunta
          answer: (
            <>
              <p className="py-2">Our hours are:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Monday to Friday: 7:00 AM - 8:00 PM</li>
                <li>Saturdays: 8:00 AM - 9:00 PM</li>
                <li>Sundays: 9:00 AM - 6:00 PM</li>
              </ul>
              <p className="py-2">
                On holidays, our hours may vary. We recommend you to check our
                social networks for updated information.
              </p>
            </>
          ),
        },
        {
          question: "Where are you located?",
          id: "cat1-q2",
          answer:
            "We are located at Calle Principal 123, Ciudad, CP 12345. We have free parking for our clients and we are only two blocks away from the Central subway station.",
        },
        {
          question: "Do you have free WiFi?",
          id: "cat1-q3",
          answer:
            "Yes, we offer free WiFi for all our customers. The password is on your receipt or you can request it from any of our baristas.",
        },
      ],
    },
    {
      title: "Products and Menu",
      id: "cat2",
      questions: [
        {
          question: "What types of coffee do you offer? ",
          id: "cat2-q1",
          answer: (
            <>
              <p className="mb-2">
                We offer a wide variety of specialty coffees, including:{" "}
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Espresso, Americano, Cappuccino, Latte, Flat blank</li>
                <li>Filtration methods such as V60, Chemex, Aeropress</li>
                <li>Cold Brew Coffee, Cold Brew and Nitro Cold Brew</li>
                <li>Seasonal beverages and specialty creations</li>
              </ul>
              <p className="mt-2">
                All of our coffees are available with alternative milks such as
                almond, soy, oat and coconut.
              </p>
            </>
          ),
        },
        {
          question: "Do you have options for people with dietary restrictions?",
          id: "cat2-q2",
          answer:
            "Yes, we offer vegetarian, vegan, gluten-free and dairy-free options. Every item on our menu is clearly labeled, and our staff will be happy to help you find options to suit your dietary needs.",
        },
        {
          question: "Do you sell coffee beans for home preparation?",
          id: "cat2-q3",
          answer:
            "Yes, we sell our roasted coffee beans in 250g and 500g bags. We also offer ground coffee according to the preparation method you use at home. Our baristas can recommend the type of coffee that best suits your preferences.",
        },
      ],
    },
    {
      title: "Services",
      id: "cat3",
      questions: [
        {
          question: "Is it possible to reserve a table?",
          id: "cat3-q1",
          answer:
            "Yes, we accept reservations for groups of 4 or more people. You can make your reservation by calling (123) 456-7890 or through our website. For large groups or special events, we recommend you book at least 48 hours in advance.",
        },
        {
          question: "Do you offer catering services?",
          id: "cat3-q2",
          answer:
            "Yes, we offer catering services for corporate events, meetings, celebrations and more. Our catering menu includes a selection of our coffees, pastries, sandwiches and other food items. Contact us for more information and to request a custom quote.",
        },
        {
          question: "Do you do coffee workshops or cuppings?",
          id: "cat3-q3",
          answer:
            "Yes, we organize monthly coffee preparation workshops and cuppings. These events are a great way to learn more about coffee and improve your brewing skills. Check our calendar of events on our social networks or sign up for our newsletter.",
        },
      ],
    },
    {
      title: "Policies",
      id: "cat4",
      questions: [
        {
          question: "What payment methods do you accept?",
          id: "cat4-q1",
          answer:
            "We accept cash, all major credit and debit cards, and mobile payments such as Apple Pay and Google Pay. We also have our own loyalty card that allows you to collect points with every purchase.",
        },
        {
          question: "Do you have a loyalty program?",
          id: "cat4-q2",
          answer:
            "Yes, our loyalty program 'Aroma Rewards' allows you to earn points with every purchase. For every 10 points accumulated, you receive a free coffee. In addition, program members receive special offers and early access to our events. You can sign up at checkout or through our mobile app.",
        },
        {
          question: "Can I bring my own mug?",
          id: "cat4-q3",
          answer:
            "Absolutely! We encourage our customers to bring their own reusable mugs. As an incentive to reduce waste, we offer a $5 peso discount on your drink when you bring your own mug.",
        },
      ],
    },
  ];

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
      <div
          className="flex flex-col min-h-screen"
          style={{
              backgroundImage: `url(${fondoSprint})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",   // <-- aquí está la clave para fondo fijo
          }}
          
      >

      {/* FAQ Content */}
      <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto w-full">
              <h2 className="text-center text-white text-3xl sm:text-4xl md:text-5xl font-normal [text-shadow:0_0_25px_#F1C732] mb-6">
                  Preguntas Frecuentes
              </h2>
        <div className="grid gap-8">
          {faqCategories.map((category, catIndex) => (
            <motion.div
              key={category.id} // Usamos el ID de categoría como key
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
                  <h2 className="text-2xl font-bold mb-6 text-[#D9D9D9] border-b border-[#D9D9D9] pb-2">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.questions.map((item) => (
                    <motion.div
                        key={item.id}
                        whileHover={{ y: -2 }}
                        className="group"
                    >
                        <div
                            className={`flex justify-between items-center p-4 bg-transparent border border-[#D9D9D9] rounded-3xl cursor-pointer ${openQuestion === item.id ? "text-white" : "text-white/65 group-hover:text-white"
                                }`}
                            onClick={() => toggleQuestion(item.id)}
                        >
                            <span className="font-medium">{item.question}</span>
                            <motion.div
                                animate={{ rotate: openQuestion === item.id ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className={openQuestion === item.id ? "text-white" : "text-white/65"}
                            >
                                <FaChevronDown className="w-5 h-5" />
                            </motion.div>
                        </div>

                        <AnimatePresence>
                            {openQuestion === item.id && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="bg-transparent overflow-hidden text-white"
                                >
                                    <div className=" text-white border rounded-3xl border-[#D9D9D9] mt-2 p-4">
                                        {item.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                
                ))}
              </div>
              {catIndex < faqCategories.length - 1 && (
                <hr className="my-8 border-t border-lines" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default FrequentQuestionsSprint;