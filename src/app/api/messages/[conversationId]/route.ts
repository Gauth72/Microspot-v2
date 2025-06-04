export const dynamic = 'force-dynamic';\
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

export async function GET(
  request: Request,
  { params }: { params: { conversationId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json(
        { error: 'Non autorisé' },
        { status: 401 }
      );
    }

    const [listingId, otherUserId] = params.conversationId.split('-');

    // Récupérer tous les messages de la conversation
    const messages = await prisma.message.findMany({
      where: {
        listingId,
        OR: [
          {
            AND: [
              { senderId: session.user.id },
              { recipientId: otherUserId }
            ]
          },
          {
            AND: [
              { senderId: otherUserId },
              { recipientId: session.user.id }
            ]
          }
        ]
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    // Marquer les messages non lus comme lus
    // Marquer les messages comme lus
    const unreadMessages = await prisma.message.findMany({
      where: {
        listingId,
        recipientId: session.user.id,
        read: false,
      },
      select: {
        id: true
      }
    });

    if (unreadMessages.length > 0) {
      await prisma.message.updateMany({
        where: {
          id: {
            in: unreadMessages.map(msg => msg.id)
          }
        },
        data: {
          read: true
        }
      });
    }

    return NextResponse.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des messages' },
      { status: 500 }
    );
  }
}
