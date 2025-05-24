'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

interface Image {
  url: string;
}

interface Listing {
  id: string;
  title: string;
  price: number;
  surface: number;
  city: string;
  images: Image[];
}

interface Favorite {
  id: string;
  listing: Listing;
}

export default function FavoritesPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session) {
      router.replace('/login');
      return;
    }

    const fetchFavorites = async () => {
      try {
        const response = await fetch('/api/favorites');
        if (response.ok) {
          const data = await response.json();
          setFavorites(data);
        }
      } catch (error) {
        console.error('Error fetching favorites:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [session, router]);

  const removeFavorite = async (listingId: string) => {
    try {
      const response = await fetch(`/api/favorites/${listingId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setFavorites(favorites.filter(fav => fav.listing.id !== listingId));
      }
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Mes Favoris</h1>
      
      {favorites.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">Vous n'avez pas encore d'annonces en favoris</p>
          <Link 
            href="/annonces" 
            className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Parcourir les annonces
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((favorite) => (
            <div key={favorite.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link href={`/annonces/${favorite.listing.id}`} className="block relative h-48">
                <Image
                  src={favorite.listing.images[0]?.url || '/placeholder.png'}
                  alt={favorite.listing.title}
                  fill
                  className="object-cover"
                />
              </Link>
              <div className="p-4">
                <Link href={`/annonces/${favorite.listing.id}`}>
                  <h2 className="text-xl font-semibold mb-2 hover:text-indigo-600">
                    {favorite.listing.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-2">{favorite.listing.city}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-lg">{favorite.listing.price}€/mois</p>
                    <p className="text-sm text-gray-500">{favorite.listing.surface}m²</p>
                  </div>
                  <button
                    onClick={() => removeFavorite(favorite.listing.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
