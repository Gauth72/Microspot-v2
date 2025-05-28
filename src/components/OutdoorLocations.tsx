'use client';

import { motion } from 'framer-motion';
import { 
  FaHome, FaCalendarAlt, FaLandmark, FaStore,
} from 'react-icons/fa';

const categories = [
  {
    icon: FaHome,
    title: 'Propriétés privées ou commerciales',
    items: [
      'Jardin ou cour visible et accessible depuis l\'extérieur',
      'Devanture d\'entreprise ou atelier visible depuis la rue',
      'Entrée de garage ou hangar (zone sécurisée)',
      'Terrain privé loué pour pose de kiosque',
      'Façade ou mur extérieur de bâtiment équipé'
    ]
  },
  {
    icon: FaCalendarAlt,
    title: 'Événements temporaires ou saisonniers',
    items: [
      'Marché de Noël / marché estival',
      'Festival ou événement local (kiosque éphémère)',
      'Parc d\'attractions / foire',
      'Aire de concert ou village de food trucks',
      'Zone de camping événementiel',
      'Parking événementiel (salon, congrès, foire expo)'
    ]
  },
  {
    icon: FaLandmark,
    title: 'Lieux publics / institutionnels',
    items: [
      'Devant une mairie, une école ou un centre administratif',
      'Espaces verts urbains (parc public avec allée)',
      'Extérieur d\'une médiathèque ou salle des fêtes',
      'Abords d\'un centre culturel ou sportif'
    ]
  },
  {
    icon: FaStore,
    title: 'Commerces et centres commerciaux',
    items: [
      'Parking de supermarché ou centre commercial',
      'Devanture de magasin (sur autorisation)',
      'Entrée de station-service',
      'Aire de lavage auto / station de gonflage',
      'Zone de livraison ou contre-allée accessible',
      'Zones commerciales ouvertes (retail park)'
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

export default function OutdoorLocations() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Emplacements extérieurs pour votre kiosque ou distributeur
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Plus de 20 types d'emplacements extérieurs stratégiques pour installer votre activité. 
            Des espaces sécurisés et équipés dans des zones passantes : parkings commerciaux, 
            événements, espaces publics autorisés...
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              className="bg-gray-50 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <category.icon className="w-8 h-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
