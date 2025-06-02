import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Annonces de Location d\'Emplacements pour Distributeurs | MicroSpot',
  description: 'Consultez nos annonces d\'emplacements disponibles pour distributeurs automatiques et kiosques en France, le premier site de location de petits emplacements dès 1m2.',
  keywords: [
    'annonces location distributeur automatique',
    'emplacement distributeur france',
    'location espace commercial',
    'emplacement kiosque disponible',
    'location distributeur automatique',
    'espace commercial équipé',
    'location emplacement 24/7'
  ],
  openGraph: {
    title: 'Annonces de Location d\'Emplacements pour Distributeurs | MicroSpot',
    description: 'Découvrez des emplacements vérifiés pour vos distributeurs automatiques et kiosques. Filtrez par ville, surface et équipements.',
    type: 'website',
    siteName: 'MicroSpot',
    locale: 'fr_FR',
    images: [
      {
        url: '/annonces-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Annonces d\'emplacements pour distributeurs automatiques',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
