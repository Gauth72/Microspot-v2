import { Metadata } from 'next';
import prisma from '@/lib/prismadb';

export async function generateMetadata({ params }: { params: { listingId: string } }): Promise<Metadata> {
  // Récupération de l'annonce
  const listing = await prisma.listing.findUnique({
    where: {
      id: params.listingId,
    },
    include: {
      images: true,
    },
  });

  if (!listing) {
    return {
      title: 'Annonce non trouvée | MicroSpot',
      description: 'Cette annonce n\'existe plus ou a été supprimée.',
    };
  }

  const mainCategoryLabels = {
    VENDING_MACHINE: 'Distributeur automatique',
    KIOSK: 'Kiosque',
    ARCADE: 'Arcade',
    LOGISTICS: 'Logistique',
    MISC: 'Autre',
  };

  const title = `${listing.title} - ${mainCategoryLabels[listing.mainCategory]} | MicroSpot`;
  const description = `${listing.surface}m² - ${listing.price}€/mois - ${listing.city}. ${listing.description.slice(0, 150)}...`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: listing.images.map(img => ({
        url: img.url,
        width: 1200,
        height: 630,
        alt: listing.title,
      })),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: listing.images[0]?.url,
    },
  };
}
