'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { toast } from 'react-hot-toast';
import Link from 'next/link';

type SpaceType = 'INDOOR' | 'OUTDOOR' | 'MIXED';
type InternetType = 'wifi' | 'ethernet' | 'both' | null;

interface ImageType {
  id: string;
  url: string;
  publicId: string;
}

export default function ModifierAnnonce({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  
  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [surface, setSurface] = useState('');
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [spaceType, setSpaceType] = useState<SpaceType>('INDOOR');
  const [hasConcreteSlab, setHasConcreteSlab] = useState(false);
  const [hasElectricity, setHasElectricity] = useState(false);
  const [hasWater, setHasWater] = useState(false);
  const [internetType, setInternetType] = useState<InternetType>(null);
  const [is24_7, setIs24_7] = useState(false);
  const [openingTime, setOpeningTime] = useState('09:00');
  const [closingTime, setClosingTime] = useState('18:00');
  const [images, setImages] = useState<ImageType[]>([]);

  // Fetch listing data
  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await fetch(`/api/listings/${params.id}`);
        if (!response.ok) throw new Error('Failed to fetch listing');
        const data = await response.json();
        
        setTitle(data.title);
        setDescription(data.description);
        setSurface(data.surface.toString());
        setPrice(data.price.toString());
        setAddress(data.address);
        setPostalCode(data.postalCode);
        setCity(data.city);
        setSpaceType(data.spaceType);
        setHasConcreteSlab(data.hasConcreteSlab);
        setHasElectricity(data.hasElectricity);
        setHasWater(data.hasWater);
        setInternetType(data.internetType);
        setIs24_7(data.is24_7);
        setOpeningTime(data.openingTime || '09:00');
        setClosingTime(data.closingTime || '18:00');
        setImages(data.images);
      } catch (error) {
        console.error('Error fetching listing:', error);
        toast.error('Erreur lors du chargement de l\'annonce');
        router.push('/annonces');
      } finally {
        setLoading(false);
      }
    };

    if (params.id) fetchListing();
  }, [params.id, router]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Validation des champs numériques
      const numericSurface = parseFloat(surface);
      const numericPrice = parseFloat(price);

      if (isNaN(numericSurface) || isNaN(numericPrice)) {
        throw new Error('La surface et le prix doivent être des nombres valides');
      }

      const formData = {
        title,
        description,
        surface: numericSurface,
        price: numericPrice,
        address,
        postalCode,
        city,
        spaceType,
        hasConcreteSlab,
        hasElectricity,
        hasWater,
        internetType,
        is24_7,
        openingTime: is24_7 ? null : openingTime,
        closingTime: is24_7 ? null : closingTime,
        images: images.map(img => ({
          id: img.id,
          url: img.url,
          publicId: img.publicId
        }))
      };

      const response = await fetch(`/api/listings/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to update listing');
      }

      toast.success('Annonce modifiée avec succès');
      router.push(`/annonces/${params.id}`);
    } catch (error) {
      console.error('Error updating listing:', error);
      toast.error(error instanceof Error ? error.message : 'Erreur lors de la modification de l\'annonce');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-8">Modifier l'annonce</h1>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600"></div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Section 1: Informations générales */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-indigo-600">1. Informations générales</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-indigo-600">Titre</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 block w-full h-10 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-indigo-600">Description</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  rows={4}
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="surface" className="block text-sm font-medium text-indigo-600">Surface (m²)</label>
                  <input
                    type="number"
                    id="surface"
                    value={surface}
                    onChange={(e) => setSurface(e.target.value)}
                    className="mt-1 block w-full h-10 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                    min="0"
                    step="0.01"
                  />
                </div>
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-indigo-600">Loyer mensuel (€)</label>
                  <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="mt-1 block w-full h-10 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="spaceType" className="block text-sm font-medium text-indigo-600">Type d'espace</label>
                <select
                  id="spaceType"
                  value={spaceType}
                  onChange={(e) => setSpaceType(e.target.value as SpaceType)}
                  className="mt-1 block w-full h-10 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                >
                  <option value="INDOOR">Intérieur</option>
                  <option value="OUTDOOR">Extérieur</option>
                  <option value="MIXED">Mixte</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: Localisation */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-indigo-600">2. Localisation</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-indigo-600">Adresse</label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-1 block w-full h-10 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="postalCode" className="block text-sm font-medium text-indigo-600">Code postal</label>
                  <input
                    type="text"
                    id="postalCode"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="mt-1 block w-full h-10 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-indigo-600">Ville</label>
                  <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="mt-1 block w-full h-10 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Équipements */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-indigo-600">3. Équipements</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={hasConcreteSlab}
                    onChange={(e) => setHasConcreteSlab(e.target.checked)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <span className="text-sm font-medium text-gray-700">Dalle béton</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={hasElectricity}
                    onChange={(e) => setHasElectricity(e.target.checked)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <span className="text-sm font-medium text-gray-700">Électricité</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={hasWater}
                    onChange={(e) => setHasWater(e.target.checked)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <span className="text-sm font-medium text-gray-700">Eau</span>
                </label>
              </div>
              <div>
                <label htmlFor="internetType" className="block text-sm font-medium text-indigo-600">Internet</label>
                <select
                  id="internetType"
                  value={internetType || ''}
                  onChange={(e) => setInternetType(e.target.value ? e.target.value as InternetType : null)}
                  className="mt-1 block w-full h-10 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="">Pas de connexion internet</option>
                  <option value="wifi">Wi-Fi</option>
                  <option value="ethernet">Ethernet</option>
                  <option value="both">Wi-Fi et Ethernet</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 4: Horaires d'accès */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-indigo-600">4. Horaires d'accès</h2>
            <div className="space-y-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={is24_7}
                  onChange={(e) => setIs24_7(e.target.checked)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <span className="text-sm font-medium text-gray-700">Accès 24/7</span>
              </label>
              {!is24_7 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="openingTime" className="block text-sm font-medium text-indigo-600">
                      Heure d'ouverture
                    </label>
                    <input
                      type="time"
                      id="openingTime"
                      value={openingTime}
                      onChange={(e) => setOpeningTime(e.target.value)}
                      className="mt-1 block w-full h-10 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      required={!is24_7}
                    />
                  </div>
                  <div>
                    <label htmlFor="closingTime" className="block text-sm font-medium text-indigo-600">
                      Heure de fermeture
                    </label>
                    <input
                      type="time"
                      id="closingTime"
                      value={closingTime}
                      onChange={(e) => setClosingTime(e.target.value)}
                      className="mt-1 block w-full h-10 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      required={!is24_7}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Section 5: Photos */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-indigo-600">5. Photos</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((image) => (
                  <div
                    key={image.id}
                    className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden group"
                  >
                    <Image
                      src={image.url}
                      alt="Photo de l'annonce"
                      fill
                      className="object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => setImages(images.filter(img => img.id !== image.id))}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
                {images.length < 8 && (
                  <CldUploadWidget
                    uploadPreset="ml_default"
                    onUpload={(result: any) => {
                      if (result.info && 'secure_url' in result.info && 'public_id' in result.info) {
                        const newImage = {
                          id: result.info.public_id,
                          url: result.info.secure_url,
                          publicId: result.info.public_id
                        };
                        setImages([...images, newImage]);
                      }
                    }}
                  >
                    {({ open }) => (
                      <button
                        type="button"
                        onClick={() => open()}
                        className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:border-indigo-600 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </button>
                    )}
                  </CldUploadWidget>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Link
              href={`/annonces/${params.id}`}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Annuler
            </Link>
            <button
              type="submit"
              disabled={submitting}
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Enregistrement...' : 'Enregistrer les modifications'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
