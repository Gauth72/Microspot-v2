import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

// Ajouter un favori
export async function POST(
  request: Request,
  { params }: { params: { listingId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new NextResponse('Non autorisé', { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return new NextResponse('Utilisateur non trouvé', { status: 404 });
    }

    // Vérifier que l'annonce existe et n'appartient pas à l'utilisateur
    const listing = await prisma.listing.findUnique({
      where: { id: params.listingId }
    });

    if (!listing) {
      return new NextResponse('Annonce non trouvée', { status: 404 });
    }

    if (listing.ownerId === user.id) {
      return new NextResponse('Vous ne pouvez pas mettre en favori vos propres annonces', { status: 400 });
    }

    // Créer le favori
    const favorite = await prisma.favorite.create({
      data: {
        userId: user.id,
        listingId: params.listingId
      }
    });

    return NextResponse.json(favorite);
  } catch (error) {
    if ((error as any).code === 'P2002') {
      return new NextResponse('Cette annonce est déjà dans vos favoris', { status: 400 });
    }
    console.error('Error adding favorite:', error);
    return new NextResponse('Erreur interne du serveur', { status: 500 });
  }
}

// Supprimer un favori
export async function DELETE(
  request: Request,
  { params }: { params: { listingId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new NextResponse('Non autorisé', { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return new NextResponse('Utilisateur non trouvé', { status: 404 });
    }

    await prisma.favorite.delete({
      where: {
        userId_listingId: {
          userId: user.id,
          listingId: params.listingId
        }
      }
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    if ((error as any).code === 'P2025') {
      return new NextResponse('Favori non trouvé', { status: 404 });
    }
    console.error('Error removing favorite:', error);
    return new NextResponse('Erreur interne du serveur', { status: 500 });
  }
}
