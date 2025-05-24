import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function POST(
  request: Request,
  { params }: { params: { type: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  if (!['profile', 'cover'].includes(params.type)) {
    return NextResponse.json({ error: 'Type d\'image invalide' }, { status: 400 });
  }

  try {
    const { url, publicId } = await request.json();

    // Vérifier la taille du fichier (2MB max)
    const response = await fetch(url);
    const contentLength = response.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > 2 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'L\'image ne doit pas dépasser 2MB' },
        { status: 400 }
      );
    }

    // Récupérer l'utilisateur avec ses images
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: {
        profileImage: true,
        coverImage: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Utilisateur non trouvé' },
        { status: 404 }
      );
    }

    // Mettre à jour l'utilisateur avec la nouvelle image
    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        [params.type === 'profile' ? 'profileImage' : 'coverImage']: {
          upsert: {
            create: {
              url,
              publicId,
            },
            update: {
              url,
              publicId,
            },
          },
        },
      },
      include: {
        profileImage: true,
        coverImage: true,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('Error updating image:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour de l\'image' },
      { status: 500 }
    );
  }
}
