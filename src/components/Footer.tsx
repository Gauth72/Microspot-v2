'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* À propos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">À propos de MicroSpot</h3>
            <p className="text-gray-400">
              La plateforme de référence pour trouver et proposer des emplacements 
              pour distributeurs automatiques, kiosques et autres espaces commerciaux.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/annonces" className="text-gray-400 hover:text-white transition">
                  Parcourir les annonces
                </Link>
              </li>
              <li>
                <Link href="/deposer-annonce" className="text-gray-400 hover:text-white transition">
                  Déposer une annonce
                </Link>
              </li>
              <li>
                <Link href="/favoris" className="text-gray-400 hover:text-white transition">
                  Mes favoris
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations légales */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informations légales</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/politique-de-confidentialite" className="text-gray-400 hover:text-white transition">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/conditions-utilisation" className="text-gray-400 hover:text-white transition">
                  Conditions d&apos;utilisation
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-gray-400 hover:text-white transition">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MicroSpot. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
