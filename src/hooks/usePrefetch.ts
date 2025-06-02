'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Pages fréquemment visitées
const frequentRoutes = [
  '/annonces',
  '/deposer-annonce',
  '/profil',
  '/favoris',
  '/messages'
];

export function usePrefetch() {
  const router = useRouter();

  useEffect(() => {
    // Préchargement des routes fréquentes
    frequentRoutes.forEach(route => {
      // Précharge la page quand le navigateur est inactif
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    });
  }, []);
}
