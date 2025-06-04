'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import ConversationList from '@/components/messages/ConversationList';
import MessageList from '@/components/messages/MessageList';
import MessageInput from '@/components/messages/MessageInput';

import { Suspense } from 'react';
import { redirect } from 'next/navigation';
import type { Message, Conversation } from '@/types/index';

function MessagesPageContent() {
  const { data: session } = useSession();
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  
  if (!session) {
    redirect('/login');
  }

  const handleSelectConversation = (conversation: Conversation) => {
    setSelectedConversation(conversation);
    // Charger les messages de la conversation
  };

  const handleSendMessage = async (content: string) => {
    if (!selectedConversation || !session?.user?.id) return;

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content,
          recipientId: selectedConversation.otherUser.id,
          listingId: selectedConversation.listing.id,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const newMessage = await response.json();
      setMessages((prev) => [...prev, newMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Messages</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ConversationList 
          onSelectConversation={handleSelectConversation}
          selectedId={selectedConversation?.id}
        />
        <div className="md:col-span-2">
          <MessageList messages={messages} />
          <MessageInput onSend={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}

function MessagesPageContentWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MessagesPageContent />
    </Suspense>
  );
}

export default function MessagesPage() {
  const { data: session, status } = useSession();
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedConversation) {
      fetchMessages(selectedConversation.id);
    }
  }, [selectedConversation]);

  const fetchMessages = async (conversationId: string) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/messages/${conversationId}`);
      if (!response.ok) throw new Error('Erreur lors de la récupération des messages');
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async (content: string) => {
    if (!selectedConversation || !session) return;

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content,
          recipientId: selectedConversation.otherUser.id,
          listingId: selectedConversation.listing.id,
        }),
      });

      if (!response.ok) throw new Error('Erreur lors de l\'envoi du message');

      const newMessage = await response.json();
      setMessages((prev) => [...prev, newMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Connexion requise
          </h2>
          <p className="text-gray-600">
            Vous devez être connecté pour accéder à vos messages.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-3 divide-x divide-gray-200 h-[calc(100vh-8rem)]">
          {/* Liste des conversations */}
          <div className="col-span-1 overflow-y-auto">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">
                Conversations
              </h2>
            </div>
            <ConversationList
              onSelectConversation={setSelectedConversation}
              selectedId={selectedConversation?.id}
            />
          </div>

          {/* Messages */}
          <div className="col-span-2 flex flex-col">
            {selectedConversation ? (
              <>
                <div className="p-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">
                    {selectedConversation.listing.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Conversation avec {selectedConversation.otherUser.name || 'Utilisateur'}
                  </p>
                </div>

                <div className="flex-1 flex flex-col min-h-0">
                  {loading ? (
                    <div className="flex-1 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                    </div>
                  ) : (
                    <MessageList messages={messages} />
                  )}
                  <MessageInput onSend={handleSendMessage} disabled={loading} />
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                Sélectionnez une conversation pour afficher les messages
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
