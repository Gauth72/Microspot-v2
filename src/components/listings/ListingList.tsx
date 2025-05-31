'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { Listing } from '@/types';

export default function ListingList() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        console.log('Fetching listings...');
        const response = await fetch(`/api/listings?${searchParams.toString()}`);
        console.log('Response status:', response.status);
        
        const contentType = response.headers.get('content-type');
        console.log('Content-Type:', contentType);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Response not OK:', {
            status: response.status,
            statusText: response.statusText,
            body: errorText
          });
          throw new Error(`Failed to fetch listings: ${response.status} ${response.statusText}`);
        }
        
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Response is not JSON');
        }
        
        const data = await response.json();
        console.log('Response data:', data);
        
        if (!data.success) {
          throw new Error(data.error || 'Failed to fetch listings');
        }
        
        if (!Array.isArray(data.data)) {
          console.error('Unexpected data format:', data);
          throw new Error('Invalid data format received');
        }
        
        setListings(data.data);
      } catch (error) {
        console.error('Error details:', {
          name: error.name,
          message: error.message,
          stack: error.stack
        });
        if (error instanceof Error) {
          toast.error(`Erreur: ${error.message}`);
        } else {
          toast.error('Une erreur est survenue lors du chargement des annonces');
        }
      } finally {
        setLoading(false);
      };
    };

    fetchListings();
  }, [searchParams]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (listings.length === 0) {
    return <div>Aucune annonce trouvée</div>;
  }

  const mainCategoryLabels = {
    VENDING_MACHINE: 'Distributeur automatique',
    KIOSK: 'Kiosque',
    ARCADE: 'Arcade',
    LOGISTICS: 'Logistique',
    MISC: 'Autre',
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {listings.map((listing) => (
        <div
          key={listing.id}
          className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => router.push(`/annonces/${listing.id}`)}
        >
          {listing.images?.[0] ? (
            <div className="h-48 bg-gray-200 relative">
              <img
                src={listing.images[0].url}
                alt={listing.title}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <svg
                className="h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{listing.title}</h3>
            <div className="mb-2 flex gap-2">
              <span className="inline-block px-2 py-1 text-sm bg-indigo-100 text-indigo-800 rounded-full">
                {mainCategoryLabels[listing.mainCategory]}
              </span>
              <span className={`inline-block px-2 py-1 text-sm rounded-full ${listing.listingType === 'LOCATION' ? 'bg-blue-100 text-blue-800' : listing.listingType === 'SALE' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                {listing.listingType === 'LOCATION' ? 'Location' : listing.listingType === 'SALE' ? 'Vente' : 'Recherche'}
              </span>
            </div>
            <div className="text-gray-600 mb-2">
              <div className="flex justify-between mb-1">
                <span>{listing.surface} m²</span>
                <span className="font-medium text-indigo-600">{listing.price}€/mois</span>
              </div>
              <div className="text-sm truncate">
                {listing.address}, {listing.postalCode} {listing.city}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
