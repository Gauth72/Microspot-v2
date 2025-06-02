'use client';

import Link from 'next/link';
import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

type ListingCardProps = {
  id: string;
  title: string;
  description: string;
  surface: number;
  price: number;
  location: string;
  type: string;
  createdAt: string;
  images: string[];
  owner: {
    name: string | null;
  };
};

const typeLabels = {
  VENDING_MACHINE: 'Distributeur automatique',
  PIZZA_KIOSK: 'Kiosque à pizza',
  MICRO_SHOP: 'Micro-boutique',
  OTHER: 'Autre',
};

export default function ListingCard({
  id,
  title,
  description,
  surface,
  price,
  location,
  type,
  createdAt,
  images,
  owner,
}: ListingCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={`/annonces/${id}`} className="block relative aspect-[4/3] overflow-hidden">
        {images && images.length > 0 ? (
          <Image
            src={images[0]}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover hover:scale-105 transition-transform duration-300"
            priority={false}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">Aucune image</span>
          </div>
        )}
      </Link>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900">
            <Link href={`/annonces/${id}`} className="hover:text-indigo-600">
              {title}
            </Link>
          </h3>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
            {typeLabels[type as keyof typeof typeLabels]}
          </span>
        </div>
        
        <p className="mt-2 text-gray-600 line-clamp-2">{description}</p>
        
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <span className="text-sm text-gray-500">Surface</span>
            <p className="text-lg font-medium text-gray-900">{surface} m²</p>
          </div>
          <div>
            <span className="text-sm text-gray-500">Prix mensuel</span>
            <p className="text-lg font-medium text-gray-900">{price} €</p>
          </div>
        </div>
        
        <div className="mt-4">
          <span className="text-sm text-gray-500">Localisation</span>
          <p className="text-gray-900">{location}</p>
        </div>
        
        <div className="mt-4 flex justify-between items-center pt-4 border-t border-gray-200">
          <div className="text-sm text-gray-500">
            <span>Par </span>
            <span className="font-medium text-gray-900">{owner.name || 'Propriétaire'}</span>
          </div>
          <div className="text-sm text-gray-500">
            {formatDistanceToNow(new Date(createdAt), { locale: fr, addSuffix: true })}
          </div>
        </div>
      </div>
    </div>
  );
}
