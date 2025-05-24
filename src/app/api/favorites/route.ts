import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

// Récupérer les favoris de l'utilisateur connecté
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new NextResponse('Non autorisé', { status: 401 });
    }

    const favorites = await prisma.favorite.findMany({
      where: {
        user: {
          email: session.user.email
        }
      },
      include: {
        listing: {
          include: {
            images: true,
            owner: true
          }
        }
      }
    });

    return NextResponse.json(favorites);
  } catch (error) {
    console.error('Error fetching favorites:', error);
    return new NextResponse('Erreur interne du serveur', { status: 500 });
  }
}
