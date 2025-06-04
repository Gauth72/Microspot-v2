export const dynamic = 'force-dynamic';\
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const listing = await prisma.listing.findUnique({
      where: {
        id: params.id,
      },
      include: {
        owner: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        images: true,
      },
    });

    if (!listing) {
      return NextResponse.json(
        { error: 'Annonce non trouvée' },
        { status: 404 }
      );
    }

    return NextResponse.json(listing);
  } catch (error) {
    console.error('Error fetching listing:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération de l\'annonce' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { error: 'Non autorisé' },
        { status: 401 }
      );
    }

    const listing = await prisma.listing.findUnique({
      where: { id: params.id },
      include: { owner: true }
    });

    if (!listing) {
      return NextResponse.json(
        { error: 'Annonce non trouvée' },
        { status: 404 }
      );
    }

    if (listing.owner.email !== session.user?.email) {
      return NextResponse.json(
        { error: 'Non autorisé' },
        { status: 403 }
      );
    }

    const data = await request.json();
    
    // Mise à jour de l'annonce
    const updatedListing = await prisma.listing.update({
      where: { id: params.id },
      data: {
        title: data.title,
        description: data.description,
        surface: data.surface,
        price: data.price,
        address: data.address,
        postalCode: data.postalCode,
        city: data.city,
        spaceType: data.spaceType,
        hasConcreteSlab: data.hasConcreteSlab,
        hasElectricity: data.hasElectricity,
        hasWater: data.hasWater,
        internetType: data.internetType,
        is24_7: data.is24_7,
        openingTime: data.openingTime,
        closingTime: data.closingTime,
      },
    });

    // Mise à jour des images
    // D'abord, supprimer toutes les images existantes
    await prisma.image.deleteMany({
      where: { listingId: params.id },
    });

    // Ensuite, créer les nouvelles images
    if (data.images && data.images.length > 0) {
      await prisma.image.createMany({
        data: data.images.map((image: any) => ({
          url: image.url,
          publicId: image.publicId,
          listingId: params.id,
        })),
      });
    }

    return NextResponse.json(updatedListing);
  } catch (error) {
    console.error('Error updating listing:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour de l\'annonce' },
      { status: 500 }
    );
  }
}
