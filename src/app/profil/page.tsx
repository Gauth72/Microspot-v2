'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { toast } from 'react-hot-toast';

type Listing = {
  id: string;
  title: string;
  address: string;
  surface: number;
  price: number;
  status: 'ACTIVE' | 'RENTED' | 'INACTIVE';
  images: string[];
};

export default function ProfilePage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [profile, setProfile] = useState({
    profileImage: null as string | null,
    coverImage: null as string | null,
    displayName: '',
    email: '',

    phoneNumber: '',
    emailNotifications: true,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    if (!session?.user) {
      router.push('/login');
      return;
    }

    const fetchListings = async () => {
      try {
        const response = await fetch('/api/users/listings');
        if (!response.ok) throw new Error('Failed to fetch listings');
        const data = await response.json();
        setListings(data);
      } catch (error) {
        console.error('Error fetching listings:', error);
        toast.error('Erreur lors du chargement des annonces');
      }
    };

    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/users/profile');
        if (!response.ok) throw new Error('Failed to fetch profile');
        const data = await response.json();
        setProfile({
          profileImage: data.profileImage,
          coverImage: data.coverImage,
          displayName: data.displayName || '',
          email: data.email || '',

          phoneNumber: data.phoneNumber || '',
          emailNotifications: data.emailNotifications ?? true,
        });
      } catch (error) {
        console.error('Error fetching profile:', error);
        toast.error('Erreur lors du chargement du profil');
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
      const imageUrl = uploadResult.url;

      const response = await fetch(`/api/users/images/${type}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: imageUrl }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour de l\'image');
      }

      setProfile(prev => ({
        ...prev,
        [type === 'profile' ? 'profileImage' : 'coverImage']: imageUrl
      }));

      toast.success(`Image ${type === 'profile' ? 'de profil' : 'de couverture'} mise à jour`);
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error(error instanceof Error ? error.message : 'Erreur lors de la mise à jour de l\'image');
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'profile' | 'cover') => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file, type);
    }
  };

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Mon profil</h1>

        {/* Photo de couverture */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
          <div className="relative h-48 bg-gray-200">
            {profile.coverImage && (
              <Image
                src={profile.coverImage}
                alt="Photo de couverture"
                width={1024}
                height={192}
                className="w-full h-full object-cover"
                priority
              />
            )}
            {!profile.coverImage && (
              <div className="h-full w-full flex items-center justify-center">
                <span className="text-gray-400">Aucune photo de couverture</span>
              </div>
            )}
            <label htmlFor="coverImage" className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-sm cursor-pointer hover:bg-gray-50">
              <input
                type="file"
                id="coverImage"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleImageChange(e, 'cover')}
              />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
              </svg>
            </label>
          </div>

          {/* Photo de profil */}
          <div className="relative -mt-16 ml-8">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white bg-gray-200">
              {profile.profileImage && (
                <Image
                  src={profile.profileImage}
                  alt="Photo de profil"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  priority
                />
              )}
              {!profile.profileImage && (
                <div className="h-full w-full flex items-center justify-center">
                  <span className="text-gray-400">Aucune photo</span>
                </div>
              )}
            </div>
            <label htmlFor="profileImage" className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-sm cursor-pointer hover:bg-gray-50">
              <input
                type="file"
                id="profileImage"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleImageChange(e, 'profile')}
              />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
              </svg>
            </label>
          </div>
        </div>

        {/* Grille à 2 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Colonne de gauche : Informations du profil */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-8">
              <form onSubmit={async (e) => {
            e.preventDefault();
            try {
              const response = await fetch('/api/users/profile', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(profile),
              });

              if (!response.ok) throw new Error('Failed to update profile');
              
              setIsEditing(false);
              toast.success('Profil mis à jour');
            } catch (error) {
              console.error('Error updating profile:', error);
              toast.error('Erreur lors de la mise à jour du profil');
            }
          }} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-700">Nom d'affichage</label>
              <input
                type="text"
                value={profile.displayName}
                onChange={(e) => setProfile({ ...profile, displayName: e.target.value })}
                disabled={!isEditing}
                className="mt-0.5 block w-full text-sm rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-1"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                disabled={!isEditing}
                className="mt-0.5 block w-full text-sm rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-1"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700">Numéro de téléphone</label>
              <input
                type="tel"
                value={profile.phoneNumber}
                onChange={(e) => setProfile({ ...profile, phoneNumber: e.target.value })}
                disabled={!isEditing}
                className="mt-0.5 block w-full text-sm rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-1"
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

            <div className="flex justify-end space-x-2 mt-4">
              {isEditing ? (
                <>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-3 py-1 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-3 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Enregistrer
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="px-3 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Modifier
                </button>
              )}
            </div>
          </form>
            </div>
          </div>

          {/* Colonne de droite : Liste des annonces */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Mes annonces</h2>
                <button
                  onClick={() => router.push('/deposer-annonce')}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Nouvelle annonce
                </button>
              </div>

              <div className="space-y-3">
                {listings.map((listing) => (
                  <div key={listing.id} className="border rounded-lg p-3 hover:shadow-md transition-shadow bg-gray-50">
                    <div className="flex gap-4">
                      <div className="relative w-32 h-24 rounded-md overflow-hidden flex-shrink-0 bg-gray-100">
                        {listing.images && listing.images.length > 0 ? (
                          <Image
                            src={listing.images[0]}
                            alt={listing.title}
                            width={128}
                            height={96}
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-base">{listing.title}</h3>
                          <div className="flex items-center gap-3">
                            <span className="text-gray-600">
                              {listing.surface}
                              <span className="text-xs ml-0.5">m²</span>
                            </span>
                            <span className="text-gray-600">
                              {listing.price}
                              <span className="text-xs ml-0.5">€/mois</span>
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm">{listing.address}</p>
                        <div className="flex items-center space-x-2 mt-4">
                          <select
                            value={listing.status}
                            onChange={async (e) => {
                              try {
                                const response = await fetch(`/api/listings/${listing.id}`, {
                                  method: 'PATCH',
                                  headers: { 'Content-Type': 'application/json' },
                                  body: JSON.stringify({ status: e.target.value }),
                                });

                                if (!response.ok) throw new Error('Failed to update listing status');

                                setListings(listings.map(l => 
                                  l.id === listing.id 
                                    ? { ...l, status: e.target.value as typeof listing.status }
                                    : l
                                ));

                                toast.success('Statut mis à jour');
                              } catch (error) {
                                console.error('Error updating listing status:', error);
                                toast.error('Erreur lors de la mise à jour du statut');
                              }
                            }}
                            className="rounded text-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-0.5"
                          >
                            <option value="ACTIVE">Active</option>
                            <option value="RENTED">Louée</option>
                            <option value="INACTIVE">Inactive</option>
                          </select>
                          <button
                            onClick={() => router.push(`/annonces/${listing.id}/modifier`)}
                            className="text-indigo-600 hover:text-indigo-800 text-sm"
                          >
                            Modifier
                          </button>
                          <button
                            onClick={async () => {
                              if (!confirm('Êtes-vous sûr de vouloir supprimer cette annonce ?')) return;
                              
                              try {
                                const response = await fetch(`/api/listings/${listing.id}`, {
                                  method: 'DELETE',
                                });

                                if (!response.ok) throw new Error('Failed to delete listing');

                                setListings(listings.filter(l => l.id !== listing.id));
                                toast.success('Annonce supprimée');
                              } catch (error) {
                                console.error('Error deleting listing:', error);
                                toast.error('Erreur lors de la suppression');
                              }
                            }}
                            className="text-red-600 hover:text-red-800 text-sm"
                          >
                            Supprimer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {listings.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    Vous n'avez pas encore d'annonces.
                    <br />
                    <button
                      onClick={() => router.push('/deposer-annonce')}
                      className="text-indigo-600 hover:text-indigo-800 mt-2"
                    >
                      Déposer votre première annonce
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
