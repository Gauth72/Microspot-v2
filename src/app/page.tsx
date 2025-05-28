'use client';

import Link from 'next/link';
import FAQ from '@/components/FAQ';
import { Building2, MapPin, Store, GraduationCap, Heart, Dumbbell, Hotel, Landmark, Building, Briefcase, School, Train, Coffee, Warehouse, PartyPopper, ParkingCircle, ShoppingBag, Tent, Pizza, ShoppingCart, Package, UtensilsCrossed, Sandwich, Gamepad2, Box } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Quels types d'emplacements sont disponibles ?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Sur notre plateforme, vous trouverez une grande variété de micro emplacements à louer à partir de 1m2 pour installer un distributeur automatique, un kiosque alimentaire, ou un point de service mobile. Mettez en location vos emplacement en interieur ou en exeterieur.
            </p>
          </motion.div>

          {/* Emplacements intérieurs */}
          <div className="mb-16">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Building2 className="w-6 h-6 text-indigo-600" />
              <h3 className="text-2xl font-bold text-gray-900">Emplacements intérieurs</h3>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* Bloc 1 - Commerces & Entreprises */}
              <motion.div
                variants={fadeIn}
                className="bg-gradient-to-br from-white to-indigo-50/30 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-indigo-100/50 relative group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 rounded-l-xl"></div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Briefcase className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h4 className="font-semibold text-lg text-gray-900">Commerces & Entreprises</h4>
                </div>
                <div className="space-y-2">
                  {[
                    "Halls d'immeubles de bureaux",
                    "Locaux commerciaux",
                    "Galeries marchandes",
                    "Salles de pause",
                    "Espaces d'accueil"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600 group-hover:text-gray-900 transition-colors">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Bloc 2 - Éducation & Transport */}
              <motion.div
                variants={fadeIn}
                className="bg-gradient-to-br from-white to-indigo-50/30 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-indigo-100/50 relative group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 rounded-l-xl"></div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <School className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h4 className="font-semibold text-lg text-gray-900">Éducation & Transport</h4>
                </div>
                <div className="space-y-2">
                  {[
                    "Universités et écoles",
                    "Bibliothèques",
                    "Gares et métros",
                    "Résidences étudiantes",
                    "Centres de formation"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600 group-hover:text-gray-900 transition-colors">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Bloc 3 - Services & Loisirs */}
              <motion.div
                variants={fadeIn}
                className="bg-gradient-to-br from-white to-indigo-50/30 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-indigo-100/50 relative group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 rounded-l-xl"></div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Coffee className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h4 className="font-semibold text-lg text-gray-900">Services & Loisirs</h4>
                </div>
                <div className="space-y-2">
                  {[
                    "Salles d'attente",
                    "Centres sportifs",
                    "Hôtels et résidences",
                    "Espaces de coworking",
                    "Centres de loisirs"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600 group-hover:text-gray-900 transition-colors">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Emplacements extérieurs */}
          <div>
            <div className="flex items-center justify-center gap-2 mb-8">
              <MapPin className="w-6 h-6 text-indigo-600" />
              <h3 className="text-2xl font-bold text-gray-900">Emplacements extérieurs</h3>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* Bloc 1 - Zones Urbaines */}
              <motion.div
                variants={fadeIn}
                className="bg-gradient-to-br from-white to-indigo-50/30 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-indigo-100/50 relative group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 rounded-l-xl"></div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Building className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h4 className="font-semibold text-lg text-gray-900">Zones Urbaines</h4>
                </div>
                <div className="space-y-2">
                  {[
                    "Trottoirs larges",
                    "Coins de rue",
                    "Places piétonnes",
                    "Parvis",
                    "Zones piétonnes"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600 group-hover:text-gray-900 transition-colors">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Bloc 2 - Commerce & Services */}
              <motion.div
                variants={fadeIn}
                className="bg-gradient-to-br from-white to-indigo-50/30 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-indigo-100/50 relative group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 rounded-l-xl"></div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <ShoppingBag className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h4 className="font-semibold text-lg text-gray-900">Commerce & Services</h4>
                </div>
                <div className="space-y-2">
                  {[
                    "Parkings commerciaux",
                    "Devantures de magasins",
                    "Stations-service",
                    "Aires de repos",
                    "Zones commerciales"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600 group-hover:text-gray-900 transition-colors">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Bloc 3 - Événementiel & Spéciaux */}
              <motion.div
                variants={fadeIn}
                className="bg-gradient-to-br from-white to-indigo-50/30 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-indigo-100/50 relative group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 rounded-l-xl"></div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <PartyPopper className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h4 className="font-semibold text-lg text-gray-900">Événementiel & Spéciaux</h4>
                </div>
                <div className="space-y-2">
                  {[
                    "Marchés et foires",
                    "Festivals",
                    "Terrains vacants",
                    "Bases de loisirs",
                    "Campings"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600 group-hover:text-gray-900 transition-colors">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Distributeurs et Kiosques */}
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
              Quels types de kiosques et de distributeurs peut-on installer ?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Notre plateforme est ouverte à tous les concepts de petit commerce autonome, que ce soit des distributeurs automatiques, jeux d'arcade ou des kiosques mobiles. Chaque emplacement précise les types de projets acceptés par le propriétaire.
            </p>
          </motion.div>

          {/* Distributeurs automatiques */}
          <div className="mb-16">
            <div className="flex items-center justify-center gap-2 mb-8">
              <ShoppingCart className="w-6 h-6 text-indigo-600" />
              <h3 className="text-2xl font-bold text-gray-900">Distributeurs automatiques</h3>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
            >
              {/* Alimentation & Boissons */}
              <motion.div
                variants={fadeIn}
                className="bg-gradient-to-br from-white to-indigo-50/30 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-indigo-100/50 relative group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 rounded-l-xl"></div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Pizza className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h4 className="font-semibold text-lg text-gray-900">Alimentation & Boissons</h4>
                </div>
                <div className="space-y-2">
                  {[
                    "Boissons fraîches",
                    "Snacks et confiseries",
                    "Café et boissons chaudes",
                    "Plats cuisinés",
                    "Sandwichs et salades"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600 group-hover:text-gray-900 transition-colors">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Produits spécialisés */}
              <motion.div
                variants={fadeIn}
                className="bg-gradient-to-br from-white to-indigo-50/30 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-indigo-100/50 relative group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 rounded-l-xl"></div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Store className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h4 className="font-semibold text-lg text-gray-900">Produits spécialisés</h4>
                </div>
                <div className="space-y-2">
                  {[
                    "Pizzas fraîches",
                    "Baguettes et viennoiseries",
                    "Fruits et légumes",
                    "Produits fermiers",
                    "Fleurs"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600 group-hover:text-gray-900 transition-colors">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Autres distributeurs */}
              <motion.div
                variants={fadeIn}
                className="bg-gradient-to-br from-white to-indigo-50/30 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-indigo-100/50 relative group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 rounded-l-xl"></div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <ShoppingBag className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h4 className="font-semibold text-lg text-gray-900">Autres distributeurs</h4>
                </div>
                <div className="space-y-2">
                  {[
                    "Cosmétiques",
                    "Produits d'hygiène",
                    "Accessoires high-tech",
                    "Journaux et magazines",
                    "Petit électroménager"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600 group-hover:text-gray-900 transition-colors">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Logistique */}
              <motion.div
                variants={fadeIn}
                className="bg-gradient-to-br from-white to-indigo-50/30 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-indigo-100/50 relative group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 rounded-l-xl"></div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Package className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h4 className="font-semibold text-lg text-gray-900">Logistique</h4>
                </div>
                <div className="space-y-2">
                  {[
                    "Consignes à colis",
                    "Click & collect",
                    "Casiers réfrigérés",
                    "Consignes entreprises",
                    "Armoires connectées"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600 group-hover:text-gray-900 transition-colors">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Kiosques */}
          <div className="mb-16">
            <div className="flex items-center justify-center gap-2 mb-8">
              <UtensilsCrossed className="w-6 h-6 text-indigo-600" />
              <h3 className="text-2xl font-bold text-gray-900">Kiosques</h3>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* Restauration rapide */}
              <motion.div
                variants={fadeIn}
                className="bg-gradient-to-br from-white to-indigo-50/30 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-indigo-100/50 relative group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 rounded-l-xl"></div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Sandwich className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h4 className="font-semibold text-lg text-gray-900">Restauration rapide</h4>
                </div>
                <div className="space-y-2">
                  {[
                    "Burgers",
                    "Frites et snacks",
                    "Crêpes et gaufres",
                    "Street food",
                    "Poke bowl et sushis"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600 group-hover:text-gray-900 transition-colors">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Services de proximité */}
              <motion.div
                variants={fadeIn}
                className="bg-gradient-to-br from-white to-indigo-50/30 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-indigo-100/50 relative group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 rounded-l-xl"></div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Box className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h4 className="font-semibold text-lg text-gray-900">Services de proximité</h4>
                </div>
                <div className="space-y-2">
                  {[
                    "Fleuriste",
                    "Retouche et couture",
                    "Pressing mobile",
                    "Cordonnerie",
                    "Réparation express"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600 group-hover:text-gray-900 transition-colors">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Concepts éphémères */}
              <motion.div
                variants={fadeIn}
                className="bg-gradient-to-br from-white to-indigo-50/30 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-indigo-100/50 relative group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 rounded-l-xl"></div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <PartyPopper className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h4 className="font-semibold text-lg text-gray-900">Concepts éphémères</h4>
                </div>
                <div className="space-y-2">
                  {[
                    "Kiosque événementiel",
                    "Stand de marque",
                    "Pop-up store",
                    "Boutique test",
                    "Festival et foire"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600 group-hover:text-gray-900 transition-colors">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Jeux et arcades */}
          <div>
            <div className="flex items-center justify-center gap-2 mb-8">
              <Gamepad2 className="w-6 h-6 text-indigo-600" />
              <h3 className="text-2xl font-bold text-gray-900">Jeux et arcades</h3>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Jeux classiques */}
              <motion.div
                variants={fadeIn}
                className="bg-gradient-to-br from-white to-indigo-50/30 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-indigo-100/50 relative group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 rounded-l-xl"></div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Gamepad2 className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h4 className="font-semibold text-lg text-gray-900">Jeux classiques</h4>
                </div>
                <div className="space-y-2">
                  {[
                    "Baby-foot à monnayeur",
                    "Billard automatique",
                    "Fléchettes électroniques",
                    "Air hockey",
                    "Bornes d'arcade rétro"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600 group-hover:text-gray-900 transition-colors">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Divertissements modernes */}
              <motion.div
                variants={fadeIn}
                className="bg-gradient-to-br from-white to-indigo-50/30 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-indigo-100/50 relative group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 rounded-l-xl"></div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Gamepad2 className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h4 className="font-semibold text-lg text-gray-900">Divertissements modernes</h4>
                </div>
                <div className="space-y-2">
                  {[
                    "Simulateurs de conduite",
                    "Machines à pinces",
                    "Photobooths",
                    "Jukebox connectés",
                    "Mini-karts (extérieur)"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600 group-hover:text-gray-900 transition-colors">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}
