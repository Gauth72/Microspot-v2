'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { prisma } from '@/lib/prisma';
import { toast } from 'react-hot-toast';

enum SpaceType {
  INDOOR = 'INDOOR',
  OUTDOOR = 'OUTDOOR',
  MIXED = 'MIXED'
}

enum MainCategory {
  VENDING_MACHINE = 'VENDING_MACHINE',
  KIOSK = 'KIOSK',
  ARCADE = 'ARCADE',
  LOGISTICS = 'LOGISTICS',
  MISC = 'MISC'
}

export default function CreateListing() {
  const router = useRouter();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!session) {
      router.replace('/login');
    }
  }, [session, router]);
  const [images, setImages] = useState<{ file: File; preview: string }[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedMainCategory, setSelectedMainCategory] = useState<MainCategory>(MainCategory.VENDING_MACHINE);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('');
  const [is24_7, setIs24_7] = useState(false);
  const [openingTime, setOpeningTime] = useState<string>('');
  const [closingTime, setClosingTime] = useState<string>('');
  const [spaceType, setSpaceType] = useState<SpaceType>(SpaceType.INDOOR);
  const [hasConcreteSlab, setHasConcreteSlab] = useState(false);
  const [hasElectricity, setHasElectricity] = useState(false);
  const [hasWater, setHasWater] = useState(false);
  const [internetType, setInternetType] = useState<string>('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [surface, setSurface] = useState('');
  const [monthlyRent, setMonthlyRent] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const handleImageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newImages = files.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));
    setImages(prev => [...prev, ...newImages]);
  }, []);

  const removeImage = useCallback((index: number) => {
    setImages(prev => {
      const newImages = [...prev];
      URL.revokeObjectURL(newImages[index].preview);
      newImages.splice(index, 1);
      return newImages;
    });
  }, []);

  const handleMainCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMainCategory(e.target.value as MainCategory);
    setSelectedSubCategory('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submission started');

    if (!session?.user) {
      router.push('/login');
      return;
    }

    if (!images || images.length === 0) {
      toast.error('Veuillez sélectionner au moins une image');
      return;
    }

    setIsSubmitting(true);
    setLoading(true);
    setUploadProgress(0);

    try {
      const uploadedImages: string[] = [];
      const totalImages = images.length;

      for (let i = 0; i < totalImages; i++) {
        try {
          const formData = new FormData();
          formData.append('file', images[i].file);

          console.log('Uploading image', i + 1, 'of', totalImages);
          console.log('File name:', images[i].file.name);
          console.log('File size:', images[i].file.size);

          const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
          });

          const data = await response.json();

          if (!response.ok) {
            console.error('Upload failed:', data.error);
            throw new Error(data.error || 'Erreur lors de l\'upload de l\'image');
          }

          console.log('Upload successful:', data.url);
          uploadedImages.push(data.url);
          setUploadProgress(((i + 1) / totalImages) * 100);
        } catch (error) {
          console.error('Error uploading image:', error);
          toast.error('Erreur lors de l\'upload de l\'image');
          setIsSubmitting(false);
          setLoading(false);
          return;
        }
      }

      const listingData = {
        title,
        description,
        surface: parseFloat(surface || '0'),
        price: parseFloat(monthlyRent || '0'),
        address,
        city,
        postalCode,
        is24_7,
        openingTime: is24_7 ? null : openingTime,
        closingTime: is24_7 ? null : closingTime,
        spaceType,
        hasConcreteSlab,
        hasElectricity,
        hasWater,
        internetType,
        mainCategory: selectedMainCategory,
        subCategory: selectedSubCategory,
        images: uploadedImages,
        listingType: 'LOCATION',
      };

      console.log('Sending listing data to API:', listingData);
      const response = await fetch('/api/listings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(listingData),
      });

      console.log('API response status:', response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('API error response:', errorData);
        throw new Error(errorData.error || 'Erreur lors de la création de l\'annonce');
      }

      const listing = await response.json();
      console.log('Listing created:', listing);
      router.push(`/annonces/${listing.id}`);
    } catch (error) {
      console.error('Error:', error);
      let errorMessage = 'Une erreur est survenue lors de la création de l\'annonce';
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      }
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
      setUploadProgress(0);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Section 1: Informations générales */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-indigo-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
                1
              </div>
              <h2 className="text-xl font-semibold">Informations générales</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-bold text-indigo-600">
                  Titre de l'annonce
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  required
                  className="h-10 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="mainCategory" className="block text-sm font-bold text-indigo-600">
                  Type d'emplacement
                </label>
                <select
                  id="mainCategory"
                  value={selectedMainCategory}
                  onChange={handleMainCategoryChange}
                  required
                  className="block w-full h-10 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Sélectionnez un type</option>
                  <option value={MainCategory.VENDING_MACHINE}>Distributeur automatique</option>
                  <option value={MainCategory.KIOSK}>Kiosque</option>
                  <option value={MainCategory.ARCADE}>Arcade / Jeux</option>
                  <option value={MainCategory.LOGISTICS}>Point logistique</option>
                  <option value={MainCategory.MISC}>Autre</option>
                </select>
              </div>

              {selectedMainCategory === MainCategory.VENDING_MACHINE && (
                <div>
                  <label htmlFor="subCategory" className="block text-sm font-bold text-indigo-600">
                    Type de distributeur
                  </label>
                  <select
                    id="subCategory"
                    name="subCategory"
                    value={selectedSubCategory}
                    onChange={(e) => setSelectedSubCategory(e.target.value)}
                    required
                    className="block w-full h-10 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Sélectionnez un type</option>
                    <option value="ALL">✨ Tout type de distributeur</option>
                    <option value="FOOD">🥗 Alimentation / Boissons</option>
                    <option value="FARM">🌿 Produits fermiers / Bio</option>
                    <option value="GOODS">🌸 Autres biens physiques</option>
                    <option value="PET">🛠️ Animaux</option>
                  </select>

                  {selectedSubCategory === 'FOOD' && (
                    <div className="mt-4">
                      <label htmlFor="specificType" className="block text-sm font-bold text-indigo-600">
                        Type de distributeur alimentaire
                      </label>
                      <select
                        id="specificType"
                        name="specificType"
                        required
                        className="block w-full h-10 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Sélectionnez un type</option>
                        <option value="ALL">✨ Tout type de distributeur alimentaire</option>
                        <option value="PIZZA">Distributeur de pizzas</option>
                        <option value="HOT_MEALS">Distributeur de plats cuisinés / repas chauds</option>
                        <option value="SANDWICHES">Distributeur de sandwiches</option>
                        <option value="SNACKS">Distributeur de snacks / confiseries</option>
                        <option value="HOT_DRINKS">Distributeur de boissons chaudes</option>
                        <option value="COLD_DRINKS">Distributeur de boissons fraîches</option>
                        <option value="DAIRY">Distributeur de lait / produits laitiers</option>
                        <option value="EGGS">Distributeur d'œufs</option>
                        <option value="FRUITS_VEGETABLES">Distributeur de fruits et légumes</option>
                        <option value="BREAD">Distributeur de pain</option>
                        <option value="ICE_CREAM">Distributeur de glaces / sorbets</option>
                        <option value="MATCHA">Distributeur de Matcha</option>
                        <option value="CBD">Distributeur de CBD</option>
                      </select>
                    </div>
                  )}

                  {selectedSubCategory === 'FARM' && (
                    <div className="mt-4">
                      <label htmlFor="specificType" className="block text-sm font-bold text-indigo-600">
                        Type de produits fermiers
                      </label>
                      <select
                        id="specificType"
                        name="specificType"
                        required
                        className="block w-full h-10 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Sélectionnez un type</option>
                        <option value="ALL">✨ Tout type de distributeur de produits fermiers</option>
                        <option value="ORGANIC">Distributeur de produits bio</option>
                        <option value="FARM_PRODUCTS">Distributeur de produits fermiers (mix)</option>
                        <option value="HONEY">Distributeur de miel</option>
                        <option value="CHEESE">Distributeur de fromage</option>
                        <option value="CHARCUTERIE">Distributeur de charcuterie</option>
                        <option value="BULK_PRODUCTS">Distributeur de produits en vrac</option>
                      </select>
                    </div>
                  )}

                  {selectedSubCategory === 'GOODS' && (
                    <div className="mt-4">
                      <label htmlFor="specificType" className="block text-sm font-bold text-indigo-600">
                        Type de biens
                      </label>
                      <select
                        id="specificType"
                        name="specificType"
                        required
                        className="block w-full h-10 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Sélectionnez un type</option>
                        <option value="ALL">✨ Tout type de biens</option>
                        <option value="CLOTHES">Vêtements</option>
                        <option value="ACCESSORIES">Accessoires</option>
                        <option value="ELECTRONICS">Électronique</option>
                        <option value="BOOKS">Livres</option>
                        <option value="SPORTS">Sports</option>
                      </select>
                    </div>
                  )}

                  {selectedSubCategory === 'PET' && (
                    <div className="mt-4">
                      <label htmlFor="specificType" className="block text-sm font-bold text-indigo-600">
                        Type de distributeur pour animaux
                      </label>
                      <select
                        id="specificType"
                        name="specificType"
                        required
                        className="block w-full h-10 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Sélectionnez un type</option>
                        <option value="ALL">✨ Tout type de distributeur pour animaux</option>
                        <option value="PET_FOOD">Distributeur d'alimentation pour animaux</option>
                      </select>
                    </div>
                  )}
                </div>
              )}

              {selectedMainCategory === 'LOGISTICS' && (
                <div className="mt-4">
                  <label htmlFor="specificType" className="block text-sm font-bold text-indigo-600">
                    Type de service logistique
                  </label>
                  <select
                    id="specificType"
                    name="specificType"
                    required
                    className="block w-full h-10 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Sélectionnez un type</option>
                    <option value="ALL">✨ Tout type de service logistique</option>
                    <option value="PARCEL_LOCKER">Consigne à colis</option>
                    <option value="PICKUP_POINT">Point relais</option>
                    <option value="SMART_LOCKER">Casier intelligent</option>
                  </select>
                </div>
              )}

              {selectedMainCategory === 'KIOSK' && (
                <div>
                  <label htmlFor="subCategory" className="block text-sm font-bold text-indigo-600">
                    Type de kiosque
                  </label>
                  <select
                    id="subCategory"
                    name="subCategory"
                    value={selectedSubCategory}
                    onChange={(e) => setSelectedSubCategory(e.target.value)}
                    required
                    className="block w-full h-10 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Sélectionnez un type</option>
                    <option value="ALL">✨ Tous types de kiosque</option>
                    <option value="FOOD">🛒 Kiosques alimentaires / restauration</option>
                    <option value="OTHER">🌸 Autres types de kiosques</option>
                    <option value="WELLNESS">🧖‍♀️ Kiosques de bien-être</option>
                  </select>

                  {selectedSubCategory === 'FOOD' && (
                    <div className="mt-4">
                      <label htmlFor="specificType" className="block text-sm font-bold text-indigo-600">
                        Type de kiosque alimentaire
                      </label>
                      <select
                        id="specificType"
                        name="specificType"
                        required
                        className="block w-full h-10 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Sélectionnez un type</option>
                        <option value="ALL">✨ Tout type de kiosque alimentaire</option>
                        <option value="BURGER">Kiosque à burgers</option>
                        <option value="WAFFLE">Kiosque à gaufres</option>
                        <option value="FRIES">Kiosque à frites</option>
                        <option value="KEBAB">Kiosque à kebab</option>
                        <option value="SANDWICH">Kiosque à sandwichs</option>
                        <option value="FRUITS_VEGETABLES">Kiosque primeur (fruits & légumes)</option>
                        <option value="CHEESE">Kiosque fromager</option>
                        <option value="CHARCUTERIE">Kiosque de charcuterie</option>
                      </select>
                    </div>
                  )}

                  {selectedSubCategory === 'OTHER' && (
                    <div className="mt-4">
                      <label htmlFor="specificType" className="block text-sm font-bold text-indigo-600">
                        Type de kiosque
                      </label>
                      <select
                        id="specificType"
                        name="specificType"
                        required
                        className="block w-full h-10 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Sélectionnez un type</option>
                        <option value="ALL">✨ Tout type de kiosque</option>
                        <option value="FLORIST">Kiosque fleuriste</option>
                        <option value="EXPRESS_REPAIR">Kiosque réparation express</option>
                      </select>
                    </div>
                  )}

                  {selectedSubCategory === 'WELLNESS' && (
                    <div className="mt-4">
                      <label htmlFor="specificType" className="block text-sm font-bold text-indigo-600">
                        Type de service bien-être
                      </label>
                      <select
                        id="specificType"
                        name="specificType"
                        required
                        className="block w-full h-10 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Sélectionnez un type</option>
                        <option value="ALL">✨ Tout type de kiosque bien-être</option>
                        <option value="HAIRDRESSER">Kiosque coiffure / barbier</option>
                        <option value="NAIL_SALON">Kiosque onglerie</option>
                        <option value="BEAUTICIAN">Kiosque esthéticienne</option>
                        <option value="FACIAL_MASSAGE">Kiosque soins du visage / massages</option>
                        <option value="TATTOO_PIERCING">Kiosque tatoueur / pierceur</option>
                        <option value="PET_GROOMING">Kiosque soins pour animaux (toilettage)</option>
                        <option value="SEWING">Kiosque de couture</option>
                        <option value="DRY_CLEANING">Kiosque pressing</option>
                      </select>
                    </div>
                  )}
                </div>
              )}

              {selectedMainCategory === 'MISC' && (
                <div className="mt-4">
                  <label htmlFor="specificType" className="block text-sm font-bold text-indigo-600">
                    Type de service
                  </label>
                  <select
                    id="specificType"
                    name="specificType"
                    required
                    className="block w-full h-10 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Sélectionnez un type</option>
                    <option value="ALL">✨ Tout type de service</option>
                    <option value="HEATING_PELLETS">Distributeur de granulés chauffage</option>
                    <option value="PHOTO_BOOTH">Photomaton</option>
                    <option value="LOCKSMITH">Distributeur de clé serrurier</option>
                  </select>
                </div>
              )}

              <div>
                <label htmlFor="description" className="block text-sm font-bold text-indigo-600">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className="block w-full h-10 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="spaceType" className="block text-sm font-bold text-indigo-600">
                  Type d'espace
                </label>
                <select
                  id="spaceType"
                  value={spaceType}
                  onChange={(e) => setSpaceType(e.target.value as SpaceType)}
                  className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  <option value="">Sélectionnez un type d'espace</option>
                  <option value={SpaceType.INDOOR}>Intérieur</option>
                  <option value={SpaceType.OUTDOOR}>Extérieur</option>
                  <option value={SpaceType.MIXED}>Mixte</option>
                </select>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="surface" className="block text-sm font-bold text-indigo-600">
                    Surface (m²)
                  </label>
                  <input
                    type="number"
                    name="surface"
                    id="surface"
                    value={surface}
                    onChange={(e) => setSurface(e.target.value)}
                    required
                    min="0"
                    step="0.01"
                    className="block w-full h-10 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="monthlyRent" className="block text-sm font-bold text-indigo-600">
                    Loyer mensuel (€)
                  </label>
                  <input
                    type="number"
                    name="monthlyRent"
                    id="monthlyRent"
                    value={monthlyRent}
                    onChange={(e) => setMonthlyRent(e.target.value)}
                    required
                    min="0"
                    step="0.01"
                    className="block w-full h-10 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Localisation */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-indigo-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
                2
              </div>
              <h2 className="text-xl font-semibold">Localisation</h2>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="address" className="block text-sm font-bold text-indigo-600">
                    Adresse
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    className="block w-full h-10 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="postalCode" className="block text-sm font-bold text-indigo-600">
                    Code postal
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    id="postalCode"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    required
                    pattern="[0-9]{5}"
                    className="block w-full h-10 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-bold text-indigo-600">
                    Ville
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    className="block w-full h-10 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Équipements */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-indigo-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
                3
              </div>
              <h2 className="text-xl font-semibold">Équipements</h2>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="hasConcreteSlab"
                      id="hasConcreteSlab"
                      checked={hasConcreteSlab}
                      onChange={(e) => setHasConcreteSlab(e.target.checked)}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="hasConcreteSlab" className="ml-2 block text-sm text-gray-900">
                      Dalle béton
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="hasElectricity"
                      id="hasElectricity"
                      checked={hasElectricity}
                      onChange={(e) => setHasElectricity(e.target.checked)}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="hasElectricity" className="ml-2 block text-sm text-gray-900">
                      Électricité
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="hasWater"
                      id="hasWater"
                      checked={hasWater}
                      onChange={(e) => setHasWater(e.target.checked)}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="hasWater" className="ml-2 block text-sm text-gray-900">
                      Branchement eau
                    </label>
                  </div>
                </div>
                <div>
                  <label htmlFor="internetType" className="block text-sm font-bold text-indigo-600">
                    Internet
                  </label>
                  <select
                    id="internetType"
                    name="internetType"
                    value={internetType}
                    onChange={(e) => setInternetType(e.target.value)}
                    className="block w-full h-10 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Aucun</option>
                    <option value="WIFI">WiFi</option>
                    <option value="RJ45">RJ45</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Horaires d'accès */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-indigo-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
                4
              </div>
              <h2 className="text-xl font-semibold">Horaires d'accès</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="is24_7"
                  checked={is24_7}
                  onChange={(e) => setIs24_7(e.target.checked)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="is24_7" className="ml-2 block text-sm text-gray-900">
                  Accessible 24h/24 et 7j/7
                </label>
              </div>

              {!is24_7 && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="openingTime" className="block text-sm font-bold text-indigo-600">
                      Heure d'ouverture
                    </label>
                    <input
                      type="time"
                      name="openingTime"
                      id="openingTime"
                      value={openingTime}
                      onChange={(e) => setOpeningTime(e.target.value)}
                      required
                      className="block w-full h-10 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="closingTime" className="block text-sm font-bold text-indigo-600">
                      Heure de fermeture
                    </label>
                    <input
                      type="time"
                      name="closingTime"
                      id="closingTime"
                      value={closingTime}
                      onChange={(e) => setClosingTime(e.target.value)}
                      required
                      className="block w-full h-10 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Section 4: Photos */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-indigo-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
                5
              </div>
              <h2 className="text-xl font-semibold">Photos</h2>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="relative group">
                    <Image
                      src={image.preview}
                      alt={`Preview ${index + 1}`}
                      width={200}
                      height={200}
                      className="w-full h-40 object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
                {images.length < 8 && (
                  <label className="w-full h-40 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-indigo-500 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                      multiple
                    />
                    <div className="text-center">
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="mt-1 text-sm text-gray-600">Ajouter des photos</p>
                    </div>
                  </label>
                )}
              </div>

              {uploadProgress > 0 && uploadProgress < 100 && (
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Upload en cours : {Math.round(uploadProgress)}%</p>
                </div>
              )}
            </div>
          </div>

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Publication en cours...
                </>
              ) : (
                'Publier l\'annonce'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
