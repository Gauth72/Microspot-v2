'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const mainCategoryLabels = {
  VENDING_MACHINE: 'Distributeur automatique',
  KIOSK: 'Kiosque',
  ARCADE: 'Arcade',
  LOGISTICS: 'Logistique',
  MISC: 'Autre',
};

const spaceTypeLabels = {
  INDOOR: 'Intérieur',
  OUTDOOR: 'Extérieur',
  MIXED: 'Mixte',
};

export default function AdvancedFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  const updateSearch = (updates: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    router.push(`/annonces?${params.toString()}`);
  };

  const handleReset = () => {
    router.push('/annonces');
    setIsOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between text-left"
      >
        <span className="text-lg font-medium text-gray-900">Filtres avancés</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="p-4 border-t">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Type d'espace */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type d'espace
              </label>
              <select
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={searchParams.get('spaceType') || ''}
                onChange={(e) => updateSearch({ spaceType: e.target.value })}
              >
                <option value="">Tous</option>
                {Object.entries(spaceTypeLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            {/* Catégorie principale */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Catégorie
              </label>
              <select
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={searchParams.get('mainCategory') || ''}
                onChange={(e) => updateSearch({ mainCategory: e.target.value })}
              >
                <option value="">Toutes</option>
                {Object.entries(mainCategoryLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            {/* Surface */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Surface minimum (m²)
                </label>
                <input
                  type="number"
                  min="0"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={searchParams.get('minSurface') || ''}
                  onChange={(e) => updateSearch({ minSurface: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Surface maximum (m²)
                </label>
                <input
                  type="number"
                  min="0"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={searchParams.get('maxSurface') || ''}
                  onChange={(e) => updateSearch({ maxSurface: e.target.value })}
                />
              </div>
            </div>

            {/* Prix */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prix minimum (€/mois)
                </label>
                <input
                  type="number"
                  min="0"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={searchParams.get('minPrice') || ''}
                  onChange={(e) => updateSearch({ minPrice: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prix maximum (€/mois)
                </label>
                <input
                  type="number"
                  min="0"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={searchParams.get('maxPrice') || ''}
                  onChange={(e) => updateSearch({ maxPrice: e.target.value })}
                />
              </div>
            </div>

            {/* Équipements */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Équipements
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    checked={searchParams.get('hasConcreteSlab') === 'true'}
                    onChange={(e) => updateSearch({ hasConcreteSlab: e.target.checked ? 'true' : '' })}
                  />
                  <span className="ml-2 text-sm text-gray-700">Dalle béton</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    checked={searchParams.get('hasElectricity') === 'true'}
                    onChange={(e) => updateSearch({ hasElectricity: e.target.checked ? 'true' : '' })}
                  />
                  <span className="ml-2 text-sm text-gray-700">Électricité</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    checked={searchParams.get('hasWater') === 'true'}
                    onChange={(e) => updateSearch({ hasWater: e.target.checked ? 'true' : '' })}
                  />
                  <span className="ml-2 text-sm text-gray-700">Eau</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    checked={searchParams.get('hasInternet') === 'true'}
                    onChange={(e) => updateSearch({ hasInternet: e.target.checked ? 'true' : '' })}
                  />
                  <span className="ml-2 text-sm text-gray-700">Internet</span>
                </label>
              </div>
            </div>

            {/* Horaires */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Accès
              </label>
              <select
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={searchParams.get('access') || ''}
                onChange={(e) => updateSearch({ access: e.target.value })}
              >
                <option value="">Tous</option>
                <option value="24_7">24h/24 et 7j/7</option>
                <option value="scheduled">Horaires définis</option>
              </select>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-4">
            <button
              onClick={handleReset}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Réinitialiser
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
