'use client';

import Link from 'next/link';
import FAQ from '@/components/FAQ';
import { Building2, MapPin, Store, GraduationCap, Heart, Dumbbell, Hotel, Landmark, Building } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const interiorLocations = [
  {
    title: 'Lieux professionnels',
    icon: Building2,
    examples: [
      'Hall d\'immeuble de bureaux',
      'Open-space',
      'Espace coworking',
      'Salle d\'attente',
      'Accueil entreprise',
      'Couloir d\'entreprise',
      'Salle de pause'
    ]
  },
  {
    title: 'Commerces',
    icon: Store,
    examples: [
      'Galerie marchande',
      'Entrée de supermarché',
      'Magasin indépendant',
      'Centre commercial',
      'Boutique de proximité',
      'Hall de magasin',
      'Zone de paiement'
    ]
  },
  {
    title: 'Transport',
    icon: MapPin,
    examples: [
      'Gare SNCF/RER',
      'Hall d\'aéroport',
      'Station de bus',
      'Station de métro',
      'Terminal portuaire',
      'Gare routière',
      'Zone d\'embarquement'
    ]
  },
  {
    title: 'Enseignement',
    icon: GraduationCap,
    examples: [
      'Universités',
      'Résidences étudiantes',
      'Bibliothèques',
      'Campus universitaire',
      'École de commerce',
      'Centre de formation',
      'Salle d\'étude'
    ]
  }
];

const exteriorLocations = [
  {
    title: 'Espace urbain',
    icon: Building,
    examples: [
      'Trottoir large',
      'Parvis',
      'Parking public',
      'Place piétonne',
      'Esplanade',
      'Zone piétonne',
      'Square public'
    ]
  },
  {
    title: 'Zones commerciales',
    icon: Store,
    examples: [
      'Parking supermarché',
      'Devanture magasin',
      'Station-service',
      'Zone commerciale',
      'Retail park',
      'Galerie extérieure',
      'Centre outlet'
    ]
  },
  {
    title: 'Transport',
    icon: MapPin,
    examples: [
      'Gare',
      'Aire de repos',
      'Station recharge',
      'Parking relais',
      'Terminal bus',
      'Zone aéroportuaire',
      'Port de plaisance'
    ]
  },
  {
    title: 'Événementiel',
    icon: Landmark,
    examples: [
      'Marché de Noël',
      'Festival',
      'Foire',
      'Parc des expositions',
      'Stade',
      'Base de loisirs',
      'Plage surveillée'
    ]
  }
];

const machineTypes = [
  {
    title: 'Distributeurs Automatiques',
    description: 'Une large gamme de distributeurs pour tous les besoins',
    items: [
      'Boissons chaudes (café, thé, chocolat)',
      'Boissons fraîches et fontaines à eau',
      'Snacks et confiseries',
      'Produits frais (sandwichs, salades)',
      'Produits d\'hygiène',
      'Fournitures de bureau',
      'Équipements de protection',
      'Produits pharmaceutiques'
    ]
  },
  {
    title: 'Kiosques Automatiques',
    description: 'Des solutions de restauration innovantes',
    items: [
      'Kiosques à pizza',
      'Boulangerie automatique',
      'Burgers et sandwichs chauds',
      'Glaces et frozen yogurt',
      'Pâtes fraîches',
      'Jus pressés',
      'Plats cuisinés',
      'Bars à salades'
    ]
  },
  {
    title: 'Bornes de Jeux',
    description: 'Divertissement pour tous les âges',
    items: [
      'Jeux d\'arcade classiques',
      'Bornes multi-jeux',
      'Simulateurs',
      'Jeux de prix',
      'Jeux de danse',
      'Machines à pinball',
      'Bornes photo',
      'Jeux pour enfants'
    ]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-6xl md:text-7xl mb-8">
              <span className="block">Le premier site de location</span>
              <span className="block text-indigo-600">d'espace pour distributeur automatique et Kiosque</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left Block - Value Proposition */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-left"
            >
              <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
                <span className="block mb-2">Monétisez vos espaces</span>
                <span className="block text-indigo-600">inutilisés dès maintenant</span>
              </h2>
              <div className="prose prose-lg prose-indigo">
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Vous avez un terrain, un trottoir, une vitrine, une cour ou même un coin de parking vide ? 
                  <span className="block mt-2 font-semibold text-indigo-600">Transformez cet espace en source de revenus passive.</span>
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/annonces"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                >
                  Voir les annonces
                </Link>
                <Link
                  href="/deposer-annonce"
                  className="inline-flex items-center justify-center px-6 py-3 border border-indigo-600 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition-colors duration-200"
                >
                  Déposer une annonce
                </Link>
              </div>
            </motion.div>

            {/* Right Block - Benefits */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Des opportunités à saisir</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                    <Store className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Forte demande</h4>
                    <p className="text-gray-600">Des centaines de commerçants et entrepreneurs cherchent des micro-emplacements pour leurs activités.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Tous types d'espaces</h4>
                    <p className="text-gray-600">Kiosques alimentaires, distributeurs automatiques, points de service mobile - chaque espace a son potentiel.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Revenus passifs</h4>
                    <p className="text-gray-600">Ne laissez plus vos mètres carrés dormir. Transformez votre espace en source de revenus réguliers.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Comment ça marche
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Une solution simple et efficace
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {[
                {
                  title: "Pour les propriétaires",
                  description:
                    "Rentabilisez votre parcelle en la louant à des professionnels. Publiez gratuitement votre annonce.",
                },
                {
                  title: "Pour les professionnels",
                  description:
                    "Trouvez rapidement l'emplacement idéal pour votre activité commerciale grâce à notre recherche avancée.",
                },
                {
                  title: "Mise en relation",
                  description:
                    "Échangez directement avec les propriétaires ou les professionnels via notre messagerie intégrée.",
                },
              ].map((feature) => (
                <div key={feature.title} className="relative">
                  <div className="relative bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-medium text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Types de machines */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              Nos Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre large gamme d'équipements automatiques pour développer votre activité
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          >
            {machineTypes.map((type) => (
              <motion.div
                key={type.title}
                variants={fadeIn}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <div className="flex-grow">
                  <ul className="space-y-3">
                    {type.items.map((item) => (
                      <li key={item} className="flex items-start">
                        <svg
                          className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Emplacements intérieurs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Emplacements intérieurs
            </h2>
            <p className="text-xl text-gray-600">
              Des espaces couverts à fort potentiel
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {interiorLocations.map((location) => (
              <motion.div
                key={location.title}
                variants={fadeIn}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <location.icon className="w-8 h-8 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{location.title}</h3>
                <ul className="space-y-2">
                  {location.examples.map((example) => (
                    <li key={example} className="text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></span>
                      {example}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Emplacements extérieurs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Emplacements extérieurs
            </h2>
            <p className="text-xl text-gray-600">
              Des espaces stratégiques à fort passage
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {exteriorLocations.map((location) => (
              <motion.div
                key={location.title}
                variants={fadeIn}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <location.icon className="w-8 h-8 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{location.title}</h3>
                <ul className="space-y-2">
                  {location.examples.map((example) => (
                    <li key={example} className="text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></span>
                      {example}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Prêt à développer votre activité ?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Rejoignez la première plateforme de location d'emplacements pour distributeurs automatiques
            </p>
            <Link
              href="/register"
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Créer un compte gratuitement
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}
