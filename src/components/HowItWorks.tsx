'use client';

import { motion } from 'framer-motion';
import { 
  FaMapMarkedAlt, 
  FaHandshake, 
  FaFileContract, 
  FaMoneyBillWave 
} from 'react-icons/fa';

const steps = [
  {
    icon: FaMapMarkedAlt,
    title: "Trouvez l'emplacement idéal",
    description: "Parcourez notre sélection d'emplacements vérifiés dans des zones à fort trafic. Filtrez par type de lieu, surface et équipements disponibles.",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: FaHandshake,
    title: "Contactez le propriétaire",
    description: "Échangez directement avec le propriétaire via notre messagerie sécurisée. Planifiez une visite et discutez des conditions de location.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: FaMoneyBillWave,
    title: "Installez votre activité",
    description: "Installez votre distributeur ou kiosque en toute sérénité. Notre support reste disponible pour vous accompagner tout au long de votre activité.",
    color: "from-purple-500 to-pink-500"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function HowItWorks() {
  return (
    <section className="relative py-20 overflow-hidden bg-gray-50">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-1/4 w-64 h-64 bg-gradient-to-br from-indigo-100/40 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-gradient-to-bl from-purple-100/40 rounded-full blur-3xl" />
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
            Comment ça marche ?
          </h2>
          <p className="text-lg text-gray-600">
            Un processus simple et transparent pour louer votre emplacement idéal
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={item}
              className="relative group"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 left-full w-full h-px bg-gradient-to-r from-gray-200 to-gray-300 -translate-y-1/2 z-0" />
              )}

              {/* Card */}
              <div className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${step.color} p-4 mb-6`}>
                  <step.icon className="w-full h-full text-white" />
                </div>

                {/* Step Number */}
                <div className="absolute top-6 right-6 text-4xl font-bold text-gray-100">
                  {index + 1}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
