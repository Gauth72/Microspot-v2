import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: "Qui peut publier une annonce d'emplacement sur votre site ?",
    answer: "Tout propriétaire de terrain, de local ou de surface disponible (intérieur ou extérieur) peut déposer une annonce. Cela inclut les particuliers, les commerçants, les agriculteurs, les collectivités ou les entreprises disposant d'un espace libre."
  },
  {
    question: "Quels types de kiosques ou de distributeurs sont acceptés ?",
    answer: "Notre plateforme accepte tous types de projets : distributeurs automatiques (pizza, boissons, snacks, produits fermiers, fleurs), kiosques alimentaires (burger, frites, sandwich, kebab), kiosques de services (coiffeur, onglerie, retouches, bien-être). Chaque annonce peut spécifier les types acceptés selon les branchements, l'environnement et la réglementation locale."
  },
  {
    question: "Quels sont les critères pour louer un emplacement ?",
    answer: "Le principal critère est la visibilité et l'accessibilité de l'emplacement (passage piéton ou voiture). Il est aussi important d'avoir une autorisation du propriétaire, un accès à l'électricité (selon l'équipement), et un sol plat ou aménageable (pour les kiosques fixes ou mobiles)."
  },
  {
    question: "Quel est le tarif moyen pour louer un emplacement ?",
    answer: "Les prix varient selon la localisation, la visibilité et les équipements disponibles. En général : pour un distributeur automatique : 30 à 300 €/mois, pour un kiosque de restauration ou service : 150 à 800 €/mois. Certains emplacements très fréquentés peuvent dépasser 1000 €."
  },
  {
    question: "Est-ce légal d'installer un distributeur ou un kiosque en extérieur ?",
    answer: "Oui, à condition d'avoir l'accord du propriétaire et parfois de la mairie (autorisation d'occupation du domaine public ou permis de travaux). Nous recommandons à tous les locataires de vérifier la réglementation locale avant installation."
  },
  {
    question: "Comment fonctionne la mise en relation sur le site ?",
    answer: "Le site fonctionne comme une plateforme d'annonces. Une fois l'annonce publiée, les porteurs de projets peuvent consulter les détails de l'emplacement, contacter le propriétaire via un formulaire sécurisé, et proposer une location ponctuelle, saisonnière ou à l'année."
  },
  {
    question: "Quels types d'emplacements sont disponibles ?",
    answer: "Nous proposons des emplacements intérieurs et extérieurs : parkings de supermarché, zones commerciales, trottoirs larges ou parvis, halls d'immeubles, locaux d'entreprise, terrains privés, agricoles ou communaux. Chaque fiche annonce précise les caractéristiques techniques, la surface disponible, l'accès électrique et les types de projets acceptés."
  },
  {
    question: "Le site est-il réservé à certaines régions ou villes ?",
    answer: "Non, notre plateforme est ouverte à toute la France. Vous pouvez publier ou rechercher un emplacement à Paris, Marseille, Lyon, Toulouse, en zone rurale ou littorale. Un système de filtrage par zone géographique est intégré pour faciliter la recherche."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { 
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 text-left flex justify-between items-start focus:outline-none"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <ChevronDown
          className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-600">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Questions fréquentes
          </h2>
          <p className="text-xl text-gray-600">
            Tout ce que vous devez savoir sur la location d'emplacements pour kiosques et distributeurs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-2"
        >
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
