export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request, { params }: { params: { type: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    const { url } = await request.json();
    const type = params.type;

    if (!url) {
      return NextResponse.json(
        { error: 'URL est requise' },
        { status: 400 }
      );
    }

    if (type !== 'profile' && type !== 'cover') {
      return NextResponse.json(
        { error: 'Type invalide' },
        { status: 400 }
      );
    }

    const updateData = type === 'profile'
      ? { profileImage: url }
      : { coverImage: url };

    console.log(`Updating ${type} image for user ${session.user.id}:`, updateData);

    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: updateData,
    });

    console.log('User updated successfully:', updatedUser);
    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('Error updating user image:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour de l\'image' },
      { status: 500 }
    );
  }
}
