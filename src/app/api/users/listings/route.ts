export const dynamic = 'force-dynamic';\
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  try {
    const listings = await prisma.listing.findMany({
      where: { ownerId: session.user.id },
      include: {
        images: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    // Transform les objets images en URLs
    const transformedListings = listings.map(listing => ({
      ...listing,
      images: listing.images.map((image: any) => image.url)
    }));

    return NextResponse.json(transformedListings);
  } catch (error) {
    console.error('Error fetching user listings:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des annonces' },
      { status: 500 }
    );
  }
}
