export const dynamic = 'force-dynamic';
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
    console.log('Fetching user profile for ID:', session.user.id);
    
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: {
        id: true,
        displayName: true,
        email: true,
        bio: true,
        phoneNumber: true,
        emailNotifications: true,
        profileImage: true,
        coverImage: true,
      }
    });

    console.log('User data from database:', user);

    if (!user) {
      console.log('User not found');
      return NextResponse.json({ error: 'Utilisateur non trouvé' }, { status: 404 });
    }

    console.log('Sending user data to client:', user);
    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching profile:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération du profil' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  try {
    const data = await request.json();
    const { displayName, bio, phoneNumber, emailNotifications } = data;

    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        displayName,
        bio,
        phoneNumber,
        emailNotifications,
      },
      select: {
        id: true,
        displayName: true,
        email: true,
        bio: true,
        phoneNumber: true,
        emailNotifications: true,
        profileImage: true,
        coverImage: true,
      }
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('Error updating profile:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour du profil' },
      { status: 500 }
    );
  }
}
