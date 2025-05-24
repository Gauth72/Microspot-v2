'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import ContactForm from '@/components/listings/ContactForm';

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

type Listing = {
  id: string;
  title: string;
  description: string;
  surface: number;
  price: number;
  address: string;
  postalCode: string;
  city: string;
  mainCategory: string;
  foodVendingType?: string;
  farmVendingType?: string;
  goodsVendingType?: string;
  petVendingType?: string;
  arcadeType?: string;
  logisticsType?: string;
  miscType?: string;
  foodKioskType?: string;
  otherKioskType?: string;
  wellnessKioskType?: string;
  spaceType: 'INDOOR' | 'OUTDOOR' | 'MIXED';
  is24_7: boolean;
  openingTime?: string | null;
  closingTime?: string | null;
  hasConcreteSlab: boolean;
  hasElectricity: boolean;
  hasWater: boolean;
  internetType?: string | null;
  createdAt: string;
  images: Array<{
    id: string;
    url: string;
    publicId: string;
  }>;
  owner: {
    id: string;
    name: string | null;
    email: string;
  };
};

export default function ListingDetailPage() {
  const params = useParams();
  const { data: session } = useSession();
  const [listing, setListing] = useState<Listing | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteLoading, setFavoriteLoading] = useState(false);

  const toggleFavorite = async () => {
    if (!session) {
      window.location.href = '/login';
      return;
    }

    if (listing?.owner.email === session.user?.email) {
      return;
    }

    setFavoriteLoading(true);
    try {
      const method = isFavorite ? 'DELETE' : 'POST';
      const response = await fetch(`/api/favorites/${listing?.id}`, {
        method,
      });

      if (response.ok) {
        setIsFavorite(!isFavorite);
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
    } finally {
      setFavoriteLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Récupérer l'annonce
        const listingResponse = await fetch(`/api/listings/${params.id}`);
        if (!listingResponse.ok) {
          throw new Error('Annonce non trouvée');
        }
        const listingData = await listingResponse.json();
        setListing(listingData);

        // Vérifier si l'annonce est en favori
        if (session) {
          const favoritesResponse = await fetch('/api/favorites');
          if (favoritesResponse.ok) {
            const favorites = await favoritesResponse.json();
            setIsFavorite(favorites.some((fav: any) => fav.listing.id === params.id));
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchData();
    }
  }, [params.id, session]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Chargement...
          </span>
        </div>
      </div>
    );
  }

  if (error || !listing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {error || 'Annonce non trouvée'}
          </h2>
          <p className="text-gray-600">
            L'annonce que vous recherchez n'existe pas ou a été supprimée.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        {/* Informations principales */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start mb-6">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900">{listing.title}</h1>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mt-2">
                  {mainCategoryLabels[listing.mainCategory as keyof typeof mainCategoryLabels]}
                </span>
              </div>
              {session?.user?.email !== listing.owner.email && (
                <button
                  onClick={toggleFavorite}
                  disabled={favoriteLoading}
                  className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${favoriteLoading ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                  title={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transition-colors ${isFavorite ? 'text-red-500' : 'text-gray-400'}`}
                    fill={isFavorite ? 'currentColor' : 'none'}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* Images */}
            {listing.images?.length > 0 && (
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {listing.images.map((image) => (
                    <div key={image.id} className="relative aspect-video">
                      <img
                        src={image.url}
                        alt={listing.title}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Surface</h3>
                <p className="mt-1 text-2xl font-semibold text-gray-900">
                  {listing.surface} m²
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Loyer mensuel</h3>
                <p className="mt-1 text-2xl font-semibold text-gray-900">
                  {listing.price} €
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Localisation</h3>
              <p className="text-gray-900">{listing.address}</p>
              <p className="text-gray-900">{listing.postalCode} {listing.city}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Type d'espace</h3>
              <p className="text-gray-900">{spaceTypeLabels[listing.spaceType]}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Équipements</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full mr-2 ${listing.hasConcreteSlab ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span>Dalle béton</span>
                </div>
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full mr-2 ${listing.hasElectricity ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span>Électricité</span>
                </div>
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full mr-2 ${listing.hasWater ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span>Eau</span>
                </div>
                {listing.internetType && (
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full mr-2 bg-green-500" />
                    <span>Internet ({listing.internetType})</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Horaires d'accès</h3>
              {listing.is24_7 ? (
                <p className="text-gray-900">Accès 24h/24 et 7j/7</p>
              ) : (
                <p className="text-gray-900">
                  De {listing.openingTime} à {listing.closingTime}
                </p>
              )}
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Description</h3>
              <div className="prose prose-sm max-w-none text-gray-700">
                {listing.description}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    Publié par{' '}
                    <span className="font-medium text-gray-900">
                      {listing.owner.name || 'Propriétaire'}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">
                    {formatDistanceToNow(new Date(listing.createdAt), {
                      locale: fr,
                      addSuffix: true,
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire de contact (uniquement pour les autres utilisateurs) */}
        {session?.user?.email !== listing.owner.email && (
          <div className="mt-8 lg:mt-0">
            <ContactForm
              listingId={listing.id}
              ownerId={listing.owner.id}
            />
          </div>
        )}
        {/* Actions du propriétaire */}
        {session?.user?.email === listing.owner.email && (
          <div className="mt-8 lg:mt-0 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Actions</h2>
            <div className="space-y-3">
              <a
                href={`/annonces/${listing.id}/modifier`}
                className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Modifier l'annonce
              </a>
              <button
                className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Supprimer l'annonce
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
