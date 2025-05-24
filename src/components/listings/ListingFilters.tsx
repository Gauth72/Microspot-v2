'use client';

import { useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ListingFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  const handleFilterChange = (name: string, value: string) => {
    router.push(`/annonces?${createQueryString(name, value)}`);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Filtres</h2>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">
            Type d'emplacement
          </label>
          <select
            id="type"
            name="type"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={searchParams.get('type') || ''}
            onChange={(e) => handleFilterChange('type', e.target.value)}
          >
            <option value="">Tous</option>
            <option value="VENDING_MACHINE">Distributeur automatique</option>
            <option value="PIZZA_KIOSK">Kiosque à pizza</option>
            <option value="MICRO_SHOP">Micro-boutique</option>
            <option value="OTHER">Autre</option>
          </select>
        </div>

        <div>
          <label htmlFor="minSurface" className="block text-sm font-medium text-gray-700">
            Surface minimum (m²)
          </label>
          <input
            type="number"
            id="minSurface"
            name="minSurface"
            min="1"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={searchParams.get('minSurface') || ''}
            onChange={(e) => handleFilterChange('minSurface', e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700">
            Prix maximum (€/mois)
          </label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={searchParams.get('maxPrice') || ''}
            onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Localisation
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={searchParams.get('location') || ''}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            placeholder="Ville, département..."
          />
        </div>
      </div>
    </div>
  );
}
