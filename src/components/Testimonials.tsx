'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "Marie Laurent",
    role: "Propriétaire d'un centre commercial",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    content: "Grâce à cette plateforme, j'ai pu rentabiliser un espace inutilisé dans mon centre commercial. Le distributeur automatique installé génère un revenu mensuel stable et les clients apprécient ce nouveau service.",
    rating: 5,
    location: "Paris"
  },
  {
    name: "Thomas Dubois",
    role: "Gérant de station-service",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    content: "La mise en place a été très simple. L'équipe m'a accompagné tout au long du processus et le distributeur s'intègre parfaitement dans notre espace. Un vrai plus pour notre chiffre d'affaires !",
    rating: 5,
    location: "Lyon"
  },
  {
    name: "Sophie Martin",
    role: "Directrice d'hôtel",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    content: "Une excellente façon de valoriser notre hall d'entrée. Les clients adorent avoir accès à des snacks et boissons 24/7. Le processus de location était transparent et professionnel.",
    rating: 5,
    location: "Bordeaux"
  },
  {
    name: "Pierre Moreau",
    role: "Propriétaire d'immeuble de bureaux",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    content: "Je recommande vivement ! Les locataires sont ravis d'avoir un distributeur dans le hall et cela me génère un revenu complémentaire intéressant. La plateforme gère tout de manière très professionnelle.",
    rating: 5,
    location: "Nantes"
  }
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

export default function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [autoplay, setAutoplay] = useState(true);

  const testimonialIndex = Math.abs(page % testimonials.length);

  const paginate = (newDirection: number) => {
    setAutoplay(false);
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      setPage([page + 1, 1]);
    }, 5000);

    return () => clearInterval(timer);
  }, [page, autoplay]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 w-72 h-72 bg-indigo-50 rounded-full mix-blend-multiply filter blur-xl opacity-75" />
        <div className="absolute right-1/4 bottom-0 w-72 h-72 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-75" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-gray-600">
            Découvrez les témoignages de propriétaires qui ont déjà rejoint notre plateforme
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative h-[400px] max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Quote Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 p-3">
                      <FaQuoteLeft className="w-full h-full text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-gray-600 text-lg mb-6 italic">
                      "{testimonials[testimonialIndex].content}"
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonials[testimonialIndex].name}
                        </h4>
                        <p className="text-gray-500">
                          {testimonials[testimonialIndex].role}
                        </p>
                        <p className="text-sm text-gray-400">
                          {testimonials[testimonialIndex].location}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex items-center justify-between">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors duration-200 -ml-6"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors duration-200 -mr-6"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 -mb-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setPage([index, index > testimonialIndex ? 1 : -1]);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === testimonialIndex ? 'bg-indigo-600 w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
