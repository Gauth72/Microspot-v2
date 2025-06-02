'use client';

import { useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import useSWR from 'swr';
import { Listing } from '@/types';
import ListingCard from './ListingCard';
import { fetcher } from '@/lib/swr';

export default function ListingList() {
  const searchParams = useSearchParams();
  const { data: session } = useSession();

  const { data: listings, error, isLoading } = useSWR<Listing[]>(
    `/api/listings?${searchParams.toString()}`,
    fetcher
  );

  // Gestion des erreurs
  if (error) {
    console.error('Error fetching listings:', error);
    toast.error(
      error instanceof Error
        ? `Erreur: ${error.message}`
        : 'Une erreur est survenue lors du chargement des annonces'
    );
  }

  // Affichage du chargement
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  // Aucune annonce trouvée
  if (!listings || listings.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        Aucune annonce trouvée
      </div>
    );
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
        <ListingCard
          key={listing.id}
          id={listing.id}
          title={listing.title}
          description={listing.description}
          surface={listing.surface}
          price={listing.price}
          location={`${listing.address}, ${listing.postalCode} ${listing.city}`}
          type={listing.mainCategory}
          createdAt={listing.createdAt}
          images={listing.images.map(img => img.url)}
          owner={{ name: listing.owner?.name || null }}
        />
      ))}
    </div>
  );
}
