import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mon Profil | MicroSpot',
  description: 'Gérez votre profil MicroSpot, vos annonces et vos préférences. Consultez et modifiez vos informations personnelles et suivez l\'état de vos annonces.',
  openGraph: {
    title: 'Mon Profil | MicroSpot',
    description: 'Gérez votre profil MicroSpot, vos annonces et vos préférences.',
    type: 'profile',
    siteName: 'MicroSpot',
  },
  robots: {
    index: false,
    follow: true,
  },
};
