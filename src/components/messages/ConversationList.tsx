'use client';

import { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

type Conversation = {
  id: string;
  listing: {
    id: string;
    title: string;
  };
  otherUser: {
    id: string;
    name: string | null;
  };
  lastMessage: {
    content: string;
    createdAt: string;
  };
  unreadCount: number;
};

export default function ConversationList({
  onSelectConversation,
  selectedId,
}: {
  onSelectConversation: (conversation: Conversation) => void;
  selectedId?: string;
}) {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/messages/conversations');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des conversations');
        }
        const data = await response.json();
        setConversations(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    fetchConversations();
  }, []);

  if (loading) {
    return (
      <div className="p-4">
        <div className="animate-pulse space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-16 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-200">
      {conversations.length === 0 ? (
        <div className="p-4 text-center text-gray-500">
          Aucune conversation
        </div>
      ) : (
        conversations.map((conversation) => (
          <button
            key={conversation.id}
            onClick={() => onSelectConversation(conversation)}
            className={`w-full p-4 text-left hover:bg-gray-50 focus:outline-none ${
              selectedId === conversation.id ? 'bg-indigo-50' : ''
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {conversation.otherUser.name || 'Utilisateur'}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  {conversation.listing.title}
                </p>
                <p className="mt-1 text-sm text-gray-600 truncate">
                  {conversation.lastMessage.content}
                </p>
              </div>
              <div className="ml-3 flex flex-col items-end">
                <p className="text-xs text-gray-500">
                  {formatDistanceToNow(new Date(conversation.lastMessage.createdAt), {
                    locale: fr,
                    addSuffix: true,
                  })}
                </p>
                {conversation.unreadCount > 0 && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    {conversation.unreadCount}
                  </span>
                )}
              </div>
            </div>
          </button>
        ))
      )}
    </div>
  );
}
