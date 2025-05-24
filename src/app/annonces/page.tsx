'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import ListingFilters from '@/components/listings/ListingFilters';
import ListingList from '@/components/listings/ListingList';

function ListingsPageContent() {
  const searchParams = useSearchParams();
  const { data: session } = useSession();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Annonces</h1>
        {session && (
          <Link
            href="/deposer-annonce"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Créer une annonce
          </Link>
        )}
      </div>
      <ListingFilters />
      <ListingList />
    </div>
  );
}

export default function ListingsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ListingsPageContent />
    </Suspense>
  );
}
