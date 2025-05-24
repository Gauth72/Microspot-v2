import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json(
        { error: 'Non autorisé' },
        { status: 401 }
      );
    }

    // Récupérer toutes les conversations où l'utilisateur est impliqué
    const messages = await prisma.message.findMany({
      where: {
        OR: [
          { senderId: session.user.id },
          { recipientId: session.user.id }
        ]
      },
      include: {
        listing: {
          select: {
            id: true,
            title: true,
          },
        },
        sender: {
          select: {
            id: true,
            name: true,
          },
        },
        recipient: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Grouper les messages par conversation
    const conversations = messages.reduce((acc, message) => {
      const isUserSender = message.senderId === session.user.id;
      const otherUserId = isUserSender ? message.recipientId : message.senderId;
      const otherUser = isUserSender ? message.recipient : message.sender;
      const conversationKey = `${message.listingId}-${otherUserId}`;

      if (!acc[conversationKey]) {
        acc[conversationKey] = {
          id: conversationKey,
          listing: message.listing,
          otherUser: {
            id: otherUserId,
            name: otherUser.name,
          },
          messages: [],
          lastMessage: message,
          unreadCount: !isUserSender && !message.read ? 1 : 0,
        };
      } else if (!isUserSender && !message.read) {
        acc[conversationKey].unreadCount += 1;
      }

      acc[conversationKey].messages.push(message);
      return acc;
    }, {} as Record<string, any>);

    return NextResponse.json(Object.values(conversations));
  } catch (error) {
    console.error('Error fetching conversations:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des conversations' },
      { status: 500 }
    );
  }
}
