'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FaBuilding, 
  FaStore, 
  FaSubway, 
  FaGraduationCap,
  FaHospital,
  FaDumbbell,
  FaHotel,
  FaLandmark
} from 'react-icons/fa';

const locations = [
  {
    icon: FaBuilding,
    title: "Espaces professionnels",
    description: "Halls d'immeubles, espaces de coworking, centres d'affaires",
    color: "from-blue-500 to-indigo-500",
    examples: [
      "Hall d'immeuble de bureaux",
      "Open-space d'entreprise",
      "Salle de repos",
      "Espace coworking"
    ]
  },
  {
    icon: FaStore,
    title: "Commerces",
    description: "Centres commerciaux, magasins, supermarchés",
    color: "from-indigo-500 to-purple-500",
    examples: [
      "Galerie marchande",
      "Entrée de supermarché",
      "Magasin indépendant",
      "Station-service"
    ]
  },
  {
    icon: FaSubway,
    title: "Transport",
    description: "Gares, stations, aéroports, parkings",
    color: "from-purple-500 to-pink-500",
    examples: [
      "Gare SNCF",
      "Hall d'aéroport",
      "Station de bus",
      "Parking couvert"
    ]
  },
  {
    icon: FaGraduationCap,
    title: "Éducation",
    description: "Écoles, universités, bibliothèques",
    color: "from-pink-500 to-red-500",
    examples: [
      "Université",
      "Bibliothèque",
      "Résidence étudiante",
      "Centre de formation"
    ]
  },
  {
    icon: FaHospital,
    title: "Santé",
    description: "Cliniques, cabinets médicaux, laboratoires",
    color: "from-red-500 to-orange-500",
    examples: [
      "Hall d'hôpital",
      "Cabinet médical",
      "Laboratoire",
      "Centre de bien-être"
    ]
  },
  {
    icon: FaDumbbell,
    title: "Sport & Loisirs",
    description: "Salles de sport, piscines, cinémas",
    color: "from-orange-500 to-yellow-500",
    examples: [
      "Salle de sport",
      "Centre aquatique",
      "Cinéma",
      "Complexe sportif"
    ]
  },
  {
    icon: FaHotel,
    title: "Hôtellerie",
    description: "Hôtels, auberges, résidences",
    color: "from-yellow-500 to-green-500",
    examples: [
      "Hall d'hôtel",
      "Auberge de jeunesse",
      "Résidence hôtelière",
      "Camping couvert"
    ]
  },
  {
    icon: FaLandmark,
    title: "Services publics",
    description: "Mairies, administrations, centres culturels",
    color: "from-green-500 to-teal-500",
    examples: [
      "Mairie",
      "Médiathèque",
      "Centre administratif",
      "Maison de quartier"
    ]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function LocationGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
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
            Des emplacements adaptés à votre activité
          </h2>
          <p className="text-lg text-gray-600">
            Découvrez notre sélection d'emplacements premium dans des zones stratégiques à fort trafic
          </p>
        </motion.div>

        {/* Location Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {locations.map((location, index) => (
            <motion.div
              key={location.title}
              variants={item}
              className="relative group"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="h-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${location.color} p-3 mb-4`}>
                  <location.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {location.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {location.description}
                </p>

                {/* Examples Popup */}
                <div className={`
                  absolute left-0 right-0 bottom-0 bg-white rounded-b-2xl border border-gray-100 shadow-lg
                  transition-all duration-300 overflow-hidden
                  ${activeIndex === index ? 'opacity-100 translate-y-full visible' : 'opacity-0 translate-y-0 invisible'}
                `}>
                  <div className="p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Exemples d'emplacements :</h4>
                    <ul className="space-y-1">
                      {location.examples.map((example) => (
                        <li key={example} className="text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
