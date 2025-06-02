import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MicroSpot - Location d\'espaces pour distributeur automatique et kiosque',
  description: 'Premier site spécialisé dans la location d\'emplacements pour distributeurs automatiques, kiosques et arcades en France. Trouvez ou proposez des espaces commerciaux adaptés à votre activité.',
  keywords: [
    'location espace distributeur automatique',
    'location espace kiosque',
    'emplacement distributeur automatique',
    'location kiosque',
    'espace commercial distributeur',
    'location arcade',
    'emplacement commercial france'
  ],
  openGraph: {
    title: 'MicroSpot - Location d\'espaces pour distributeur automatique et kiosque',
    description: 'Premier site spécialisé dans la location d\'emplacements pour distributeurs automatiques, kiosques et arcades en France.',
    type: 'website',
    siteName: 'MicroSpot',
    locale: 'fr_FR',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MicroSpot - Plateforme de location d\'espaces commerciaux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MicroSpot - Location d\'espaces pour distributeur automatique',
    description: 'Trouvez l\'emplacement idéal pour votre distributeur automatique ou kiosque en France',
  },
  alternates: {
    canonical: 'https://microspot.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
