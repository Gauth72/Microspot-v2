'use client';

import { motion } from 'framer-motion';
import { 
  FaBuilding, FaShoppingBag, FaTrain, FaGraduationCap, 
  FaHospital, FaDumbbell, FaHotel, FaLandmark, FaEllipsisH 
} from 'react-icons/fa';

const categories = [
  {
    icon: FaBuilding,
    title: 'Lieux professionnels / tertiaires',
    items: [
      'Hall d\'immeuble de bureaux',
      'Open-space d\'entreprise',
      'Salle de repos / espace détente entreprise',
      'Espace coworking',
      'Centres d\'affaires',
      'Espaces de formation / centres de séminaire',
      'Agences de voyage ou assurances (zone d\'attente)'
    ]
  },
  {
    icon: FaShoppingBag,
    title: 'Commerces et centres commerciaux',
    items: [
      'Galerie marchande',
      'Entrée de supermarché / hypermarché',
      'Magasin indépendant (zone d\'attente)',
      'Boutique en corner store (emplacement partagé)',
      'Magasin de bricolage / jardinerie',
      'Stations-service avec hall intérieur',
      'Magasin de sport / loisirs'
    ]
  },
  {
    icon: FaTrain,
    title: 'Transport & mobilité',
    items: [
      'Gare SNCF, RER, métro (zone intérieure)',
      'Hall d\'aéroport / aérogare',
      'Station de bus (avec salle intérieure)',
      'Parkings couverts ou souterrains (zone piétonne)',
      'Halls de péage / bornes de recharge électrique'
    ]
  },
  {
    icon: FaGraduationCap,
    title: 'Lieux d\'enseignement / apprentissage',
    items: [
      'Écoles / collèges / lycées (zone autorisée)',
      'Universités, UFR, bibliothèques',
      'Résidences étudiantes (hall ou salle commune)',
      'Centres de formation professionnelle / CFA'
    ]
  },
  {
    icon: FaHospital,
    title: 'Santé et médico-social',
    items: [
      'Cliniques / hôpitaux (hall, salles d\'attente)',
      'Cabinets médicaux ou paramédicaux (zone commune)',
      'Laboratoires d\'analyses médicales',
      'Maisons de retraite, EHPAD (zone commune)',
      'Centres de kiné / ostéopathie / bien-être'
    ]
  },
  {
    icon: FaDumbbell,
    title: 'Sport, loisirs et culture',
    items: [
      'Salles de sport / fitness (entrée ou coin détente)',
      'Centres aquatiques / piscines',
      'Gymnases municipaux / complexes sportifs',
      'Salles de danse / yoga',
      'Cinémas (hall ou couloir)',
      'Théâtres / musées (zone accueil)',
      'Espaces de jeu / escape game / laser game'
    ]
  },
  {
    icon: FaHotel,
    title: 'Hôtellerie & hébergement',
    items: [
      'Hall d\'hôtel / réception',
      'Auberges de jeunesse',
      'Résidences hôtelières',
      'Campings avec espace couvert',
      'Gîtes et meublés de tourisme (salle commune)'
    ]
  },
  {
    icon: FaLandmark,
    title: 'Bâtiments publics / institutionnels',
    items: [
      'Mairies / préfectures (zone d\'accueil)',
      'Médiathèques / bibliothèques',
      'Centres administratifs (CAF, CPAM, Pôle Emploi…)',
      'Centres sociaux / maisons de quartier',
      'Commissariats (zone d\'accueil public)'
    ]
  },
  {
    icon: FaEllipsisH,
    title: 'Autres espaces intérieurs',
    items: [
      'Salles d\'attente diverses (auto-écoles, banques...)',
      'Halls d\'immeubles résidentiels',
      'Entrepôts ou hangars avec bureaux intégrés',
      'Clubs associatifs / locaux mutualisés',
      'Zones de passage dans des salons ou événements'
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

export default function LocationCategories() {
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
            Tous les emplacements disponibles pour votre distributeur automatique
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Plus de 50 types d'emplacements intérieurs pour installer votre distributeur automatique, 
            votre kiosque ou votre commerce automatisé. Trouvez l'emplacement idéal dans des zones 
            à fort trafic : centres commerciaux, gares, entreprises, établissements publics...
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <category.icon className="w-8 h-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2" />
                    {item}
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
