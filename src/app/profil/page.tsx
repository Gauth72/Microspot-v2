'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { Listing } from '@/types';

export default function ProfilePage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [listings, setListings] = useState<Listing[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    displayName: '',
    email: '',
    bio: '',
    phoneNumber: '',
    emailNotifications: true,
    profileImage: null as { url: string; publicId: string } | null,
    coverImage: null as { url: string; publicId: string } | null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session?.user) {
      router.push('/login');
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/users/profile');
        if (!response.ok) throw new Error('Failed to fetch profile');
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    const fetchListings = async () => {
      try {
        const response = await fetch('/api/users/listings');
        if (!response.ok) throw new Error('Failed to fetch listings');
        const data = await response.json();
        setListings(data);
      } catch (error) {
        console.error('Error fetching listings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
    fetchListings();
  }, [session, router]);

  const handleImageUpload = async (file: File, type: 'profile' | 'cover') => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const uploadResponse = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error('Erreur lors du téléchargement de l\'image');
      }

      const uploadResult = await uploadResponse.json();
      const imageData = {
        url: uploadResult.url,
        publicId: uploadResult.publicId,
      };

      const response = await fetch(`/api/users/images/${type}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(imageData),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour de l\'image');
      }

      setProfile(prev => ({
        ...prev,
        [type === 'profile' ? 'profileImage' : 'coverImage']: imageData
      }));
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleImageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, type: 'profile' | 'cover') => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file, type);
    }
  }, []);

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/users/profile', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profile),
      });

      if (!response.ok) throw new Error('Failed to update profile');
      setIsEditing(false);
      router.refresh();
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleListingStatusUpdate = async (listingId: string, status: 'ACTIVE' | 'RENTED' | 'INACTIVE') => {
    try {
      const response = await fetch(`/api/listings/${listingId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) throw new Error('Failed to update listing status');
      
      setListings(listings.map(listing => 
        listing.id === listingId ? { ...listing, status } : listing
      ));
    } catch (error) {
      console.error('Error updating listing status:', error);
    }
  };

  const handleListingDelete = async (listingId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette annonce ?')) return;

    try {
      const response = await fetch(`/api/listings/${listingId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete listing');
      
      setListings(listings.filter(listing => listing.id !== listingId));
    } catch (error) {
      console.error('Error deleting listing:', error);
    }
  };

  if (loading) return <div className="container mx-auto px-4 py-8">Chargement...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* En-tête du profil avec photo de couverture */}
      <div className="relative h-64 rounded-lg overflow-hidden mb-8 bg-gray-200">
        {/* Afficher l'image de couverture si elle existe */}
        {profile.coverImage?.url && (
          <Image
            src={profile.coverImage.url}
            alt="Photo de couverture"
            fill
            className="object-cover"
            priority
          />
        )}

        {/* Bouton d'upload avec icône de crayon */}
        <div className="absolute top-2 right-2">
          <label className="cursor-pointer bg-white p-2 rounded-full shadow hover:bg-gray-50 transition-colors group">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, 'cover')}
              className="hidden"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-5 h-5 text-gray-600 group-hover:text-gray-800"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </label>
        </div>
      </div>

      {/* Photo de profil et informations */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <div className="relative w-32 h-32 mx-auto md:mx-0 rounded-full overflow-hidden mb-4 bg-gray-200">
            {/* Afficher l'image de profil si elle existe */}
            {profile.profileImage?.url && (
              <Image
                src={profile.profileImage.url}
                alt="Photo de profil"
                fill
                className="object-cover"
                priority
              />
            )}

            {/* Bouton d'upload avec icône de crayon */}
            <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4">
              <label className="cursor-pointer bg-white p-1.5 rounded-full shadow hover:bg-gray-50 transition-colors group">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, 'profile')}
                  className="hidden"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-4 h-4 text-gray-600 group-hover:text-gray-800"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              </label>
            </div>
          </div>

          {/* Formulaire de profil */}
          <form onSubmit={handleProfileUpdate} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nom d'affichage
              </label>
              <input
                type="text"
                value={profile.displayName || ''}
                onChange={(e) => setProfile({ ...profile, displayName: e.target.value })}
                disabled={!isEditing}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email (privé)
              </label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                disabled={!isEditing}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Bio
              </label>
              <textarea
                value={profile.bio || ''}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                disabled={!isEditing}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Téléphone (privé)
              </label>
              <input
                type="tel"
                value={profile.phoneNumber || ''}
                onChange={(e) => setProfile({ ...profile, phoneNumber: e.target.value })}
                disabled={!isEditing}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                checked={profile.emailNotifications}
                onChange={(e) => setProfile({ ...profile, emailNotifications: e.target.checked })}
                disabled={!isEditing}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">
                Recevoir les notifications par email
              </label>
            </div>

            <div className="flex justify-end space-x-4">
              {isEditing ? (
                <>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Enregistrer
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Modifier
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Liste des annonces */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold mb-4">Mes annonces</h2>
          <div className="space-y-4">
            {listings.map((listing) => (
              <div
                key={listing.id}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{listing.title}</h3>
                    <p className="text-gray-600">{listing.address}</p>
                    <p className="text-sm text-gray-500">
                      {listing.surface}m² - {listing.price}€/mois
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <select
                      value={listing.status}
                      onChange={(e) => handleListingStatusUpdate(listing.id, e.target.value as 'ACTIVE' | 'RENTED' | 'INACTIVE')}
                      className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                      <option value="ACTIVE">Active</option>
                      <option value="RENTED">Louée</option>
                      <option value="INACTIVE">Inactive</option>
                    </select>
                    <button
                      onClick={() => router.push(`/annonces/${listing.id}/modifier`)}
                      className="p-2 text-indigo-600 hover:text-indigo-800"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleListingDelete(listing.id)}
                      className="p-2 text-red-600 hover:text-red-800"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
