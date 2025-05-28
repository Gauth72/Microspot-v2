'use client';

import { motion } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar, FaMoneyBillWave, FaHandshake, FaUserTie, FaMapMarkerAlt, FaStore, FaSearch } from 'react-icons/fa';
import Link from 'next/link';

const sections = [
  {
    label: "PROPRIÉTAIRES D'EMPLACEMENTS",
    title: "Rentabilisez vos espaces inutilisés",
    cards: [
      {
        icon: FaMoneyBillWave,
        title: "Revenus passifs",
        description: "Générez des revenus mensuels réguliers en louant vos espaces à partir de 1m².",
        color: "from-purple-500 to-indigo-500"
      },
      {
        icon: FaHandshake,
        title: "Zéro engagement",
        description: "Publiez gratuitement votre annonce et choisissez librement vos locataires.",
        color: "from-indigo-500 to-blue-500"
      },
      {
        icon: FaUserTie,
        title: "Locataires professionnels",
        description: "Nos locataires sont des entreprises vérifiées cherchant des emplacements de qualité.",
        color: "from-blue-500 to-cyan-500"
      }
    ],
    cta: {
      text: "Déposer une annonce",
      href: "/deposer-annonce"
    }
  },
  {
    label: "PROFESSIONNELS",
    title: "Trouvez l'emplacement idéal pour votre activité",
    cards: [
      {
        icon: FaMapMarkerAlt,
        title: "Emplacements premium",
        description: "Accédez à des emplacements de qualité en intérieur ou extérieur, adaptés à votre activité.",
        color: "from-purple-500 to-indigo-500"
      },
      {
        icon: FaStore,
        title: "Tous types d'activités",
        description: "Distributeurs automatiques, kiosques à pizza, micro-boutiques, et plus encore.",
        color: "from-indigo-500 to-blue-500"
      },
      {
        icon: FaSearch,
        title: "Recherche avancée",
        description: "Filtrez par localisation, surface, type d'emplacement et budget pour trouver le lieu parfait.",
        color: "from-blue-500 to-cyan-500"
      }
    ],
    cta: {
      text: "Voir les emplacements",
      href: "/annonces"
    }
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

export default function ForWho() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 w-72 h-72 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-75" />
        <div className="absolute right-1/4 bottom-0 w-72 h-72 bg-indigo-50 rounded-full mix-blend-multiply filter blur-xl opacity-75" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sections */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-24"
        >
          {sections.map((section) => (
            <div key={section.label} className="space-y-8">
              {/* Section Header */}
              <div className="text-center">
                <motion.span
                  variants={item}
                  className="inline-block text-sm font-semibold tracking-wider text-indigo-600 mb-3"
                >
                  {section.label}
                </motion.span>
                <motion.h3
                  variants={item}
                  className="text-3xl sm:text-4xl font-bold text-gray-900"
                >
                  {section.title}
                </motion.h3>
              </div>

              {/* Cards Grid */}
              <motion.div
                variants={container}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {section.cards.map((card) => (
                  <motion.div
                    key={card.title}
                    variants={item}
                    className="relative group"
                  >
                    <div className="h-full bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${card.color} p-4 mb-6`}>
                        <card.icon className="w-full h-full text-white" />
                      </div>

                      {/* Content */}
                      <h4 className="text-xl font-bold text-gray-900 mb-4">
                        {card.title}
                      </h4>
                      <p className="text-gray-600">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                variants={item}
                className="text-center"
              >
                <Link
                  href={section.cta.href}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:opacity-90 transition-opacity duration-200 font-medium text-lg shadow-md hover:shadow-xl"
                >
                  {section.cta.text}
                </Link>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
