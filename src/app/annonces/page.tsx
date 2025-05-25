'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import SearchBar from '@/components/listings/SearchBar';
import AdvancedFilters from '@/components/listings/AdvancedFilters';
import ListingList from '@/components/listings/ListingList';

function ListingsPageContent() {
  const searchParams = useSearchParams();
  const { data: session } = useSession();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Annonces</h1>
      </div>
      <SearchBar />
      <AdvancedFilters />
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
