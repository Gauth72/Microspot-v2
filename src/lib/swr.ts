import { SWRConfiguration } from 'swr';

interface FetchError extends Error {
  info?: any;
  status?: number;
}

export const fetcher = async (url: string) => {
  const res = await fetch(url);
  
  if (!res.ok) {
    const error = new Error('Une erreur est survenue lors de la requête') as FetchError;
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  const json = await res.json();
  if (!json.success) {
    throw new Error(json.error || 'Une erreur est survenue');
  }

  return json.data;
};

export const swrConfig: SWRConfiguration = {
  fetcher,
  revalidateOnFocus: true,    // Revalide quand l'utilisateur revient sur l'onglet
  revalidateOnReconnect: true, // Revalide quand l'utilisateur retrouve sa connexion
  dedupingInterval: 5000,      // Dédoublonne les requêtes dans un intervalle de 5s
  errorRetryCount: 3,          // Nombre de tentatives en cas d'erreur
};
