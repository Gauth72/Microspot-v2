export const dynamic = 'force-dynamic';
import { getServerSideSitemap } from 'next-sitemap';
import prisma from '@/lib/prismadb';

export async function GET() {
  // Récupérer toutes les annonces
  const listings = await prisma.listing.findMany({
    select: {
      id: true,
      updatedAt: true,
    },
  });

  // Créer les entrées du sitemap
  const fields = listings.map((listing) => ({
    loc: `${process.env.NEXT_PUBLIC_SITE_URL}/annonces/${listing.id}`,
    lastmod: new Date(listing.updatedAt).toISOString(),
    changefreq: 'daily',
    priority: 0.8,
  }));

  return getServerSideSitemap(fields);
}
