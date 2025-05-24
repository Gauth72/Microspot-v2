'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function ConfirmationPage() {
  const searchParams = useSearchParams();
  const listingId = searchParams.get('id');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Félicitations !</h1>
          <p className="text-gray-600 mb-6">
            Votre annonce a été publiée avec succès. Elle est maintenant visible par tous les utilisateurs de MicroSpot.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href={`/annonces/${listingId}`}
            className="block w-full bg-indigo-600 text-white rounded-md py-3 px-4 font-medium hover:bg-indigo-700 transition-colors"
          >
            Voir mon annonce
          </Link>
          <Link 
            href="/"
            className="block w-full bg-white text-indigo-600 border border-indigo-600 rounded-md py-3 px-4 font-medium hover:bg-indigo-50 transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
