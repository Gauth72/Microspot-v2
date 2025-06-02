'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const cookieChoice = localStorage.getItem('cookieChoice');
    if (!cookieChoice) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieChoice', 'acceptAll');
    localStorage.setItem('analytics', 'true');
    localStorage.setItem('marketing', 'true');
    setIsVisible(false);
  };

  const handleRefuse = () => {
    localStorage.setItem('cookieChoice', 'refuse');
    localStorage.setItem('analytics', 'false');
    localStorage.setItem('marketing', 'false');
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const analytics = document.getElementById('analytics') as HTMLInputElement;
    const marketing = document.getElementById('marketing') as HTMLInputElement;

    localStorage.setItem('cookieChoice', 'custom');
    localStorage.setItem('analytics', analytics.checked.toString());
    localStorage.setItem('marketing', marketing.checked.toString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50">
      {!showDetails ? (
        <div className="max-w-7xl mx-auto p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-gray-600">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
              En continuant à naviguer, vous acceptez notre{' '}
              <Link href="/politique-de-confidentialite" className="text-indigo-600 hover:text-indigo-800">
                politique de confidentialité
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
            <button
              onClick={() => setShowDetails(true)}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Personnaliser
            </button>
            <button
              onClick={handleRefuse}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Refuser
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Tout accepter
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto p-4">
          <h3 className="text-lg font-semibold mb-4">Paramètres des cookies</h3>
          <div className="space-y-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label htmlFor="necessary" className="font-medium">
                  Cookies nécessaires
                </label>
                <p className="text-sm text-gray-500">
                  Indispensables au fonctionnement du site
                </p>
              </div>
              <input
                type="checkbox"
                id="necessary"
                checked
                disabled
                className="h-4 w-4 text-indigo-600 rounded"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label htmlFor="analytics" className="font-medium">
                  Cookies analytiques
                </label>
                <p className="text-sm text-gray-500">
                  Nous aident à comprendre comment vous utilisez le site
                </p>
              </div>
              <input
                type="checkbox"
                id="analytics"
                defaultChecked
                className="h-4 w-4 text-indigo-600 rounded"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label htmlFor="marketing" className="font-medium">
                  Cookies marketing
                </label>
                <p className="text-sm text-gray-500">
                  Utilisés pour la publicité ciblée
                </p>
              </div>
              <input
                type="checkbox"
                id="marketing"
                defaultChecked
                className="h-4 w-4 text-indigo-600 rounded"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 border-t pt-4">
            <button
              onClick={() => setShowDetails(false)}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Retour
            </button>
            <button
              onClick={handleSavePreferences}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Enregistrer mes préférences
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
