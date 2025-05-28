'use client';

import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';

const locationTypes = {
  interior: [
    {
      title: 'Centres commerciaux',
      description: 'Emplacements premium dans les galeries marchandes',
      image: 'shopping mall interior'
    },
    {
      title: 'Halls d\'immeubles',
      description: 'Espaces communs des immeubles de bureaux ou résidentiels',
      image: 'office building lobby'
    },
    {
      title: 'Gares & Stations',
      description: 'Zones de passage à fort trafic',
      image: 'train station interior'
    },
    {
      title: 'Espaces de coworking',
      description: 'Coins détente et espaces partagés',
      image: 'modern coworking space'
    },
    {
      title: 'Halls d\'hôtels',
      description: 'Espaces d\'accueil et zones de passage',
      image: 'hotel lobby'
    },
    {
      title: 'Salles de sport',
      description: 'Espaces fitness et zones d\'attente',
      image: 'gym interior'
    }
  ],
  exterior: [
    {
      title: 'Façades commerciales',
      description: 'Devantures de magasins et vitrines',
      image: 'storefront retail'
    },
    {
      title: 'Parkings',
      description: 'Aires de stationnement et zones piétonnes',
      image: 'parking lot commercial'
    },
    {
      title: 'Places & Marchés',
      description: 'Espaces publics à forte affluence',
      image: 'market square'
    },
    {
      title: 'Zones industrielles',
      description: 'Parcs d\'activités et zones commerciales',
      image: 'industrial park'
    },
    {
      title: 'Terrasses',
      description: 'Espaces extérieurs de restaurants et cafés',
      image: 'restaurant terrace'
    },
    {
      title: 'Stations-service',
      description: 'Aires de service et points de recharge',
      image: 'gas station'
    }
  ]
};

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

export default function LocationTypes() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Types d\'emplacements disponibles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez la diversité des espaces que vous pouvez louer pour votre activité,
            que ce soit en intérieur ou en extérieur.
          </p>
        </motion.div>

        {/* Section Intérieur */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-gray-900 mb-8 flex items-center"
          >
            <svg className="w-6 h-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Emplacements intérieurs
          </motion.h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {locationTypes.interior.map((type, index) => (
              <motion.div
                key={type.title}
                variants={item}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="h-48 relative">
                  <OptimizedImage
                    keyword={type.image}
                    width={400}
                    height={300}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/80 transition-all duration-300" />
                  <h4 className="absolute bottom-4 left-4 right-4 text-lg font-semibold text-white drop-shadow-lg z-10 group-hover:scale-105 transition-transform duration-300">
                    {type.title}
                  </h4>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600">{type.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Section Extérieur */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-gray-900 mb-8 flex items-center"
          >
            <svg className="w-6 h-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Emplacements extérieurs
          </motion.h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {locationTypes.exterior.map((type, index) => (
              <motion.div
                key={type.title}
                variants={item}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="h-48 relative">
                  <OptimizedImage
                    keyword={type.image}
                    width={400}
                    height={300}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/80 transition-all duration-300" />
                  <h4 className="absolute bottom-4 left-4 right-4 text-lg font-semibold text-white drop-shadow-lg z-10 group-hover:scale-105 transition-transform duration-300">
                    {type.title}
                  </h4>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600">{type.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
