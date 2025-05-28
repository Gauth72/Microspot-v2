'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const stats = [
  { number: "500+", label: "Emplacements disponibles" },
  { number: "50+", label: "Villes en France" },
  { number: "24/7", label: "Support client" }
];

export default function NewHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-white" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1 
            variants={fadeIn}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight"
          >
            <span className="inline-block mb-2">Trouvez l'emplacement idéal</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-400">
              pour votre distributeur automatique
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={fadeIn}
            className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            La première plateforme dédiée à la location d'emplacements pour distributeurs automatiques 
            et kiosques. Trouvez des espaces de qualité dans des zones à fort trafic.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeIn}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/deposer-annonce"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm transition-colors duration-200"
            >
              Déposer une annonce
            </Link>
            <Link 
              href="/annonces"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-indigo-600 bg-white border-2 border-indigo-100 hover:border-indigo-200 rounded-xl shadow-sm transition-colors duration-200"
            >
              Voir les emplacements
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={fadeIn}
            className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 text-center"
          >
            {stats.map((stat) => (
              <div 
                key={stat.label}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <div className="text-4xl font-bold text-indigo-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-gradient-to-bl from-indigo-100/40 rounded-full blur-3xl" />
        <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-100/40 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
