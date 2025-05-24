'use client';

import { useEffect, useRef } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import { useSession } from 'next-auth/react';

type Message = {
  id: string;
  content: string;
  createdAt: string;
  sender: {
    id: string;
    name: string | null;
  };
};

export default function MessageList({ messages }: { messages: Message[] }) {
  const { data: session } = useSession();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => {
        const isOwnMessage = message.sender.id === session?.user?.id;

        return (
          <div
            key={message.id}
            className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                isOwnMessage
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <div className="flex items-end">
                <p className="text-sm">{message.content}</p>
                <span
                  className={`ml-2 text-xs ${
                    isOwnMessage ? 'text-indigo-200' : 'text-gray-500'
                  }`}
                >
                  {formatDistanceToNow(new Date(message.createdAt), {
                    locale: fr,
                    addSuffix: true,
                  })}
                </span>
              </div>
              {!isOwnMessage && (
                <p
                  className={`text-xs mt-1 ${
                    isOwnMessage ? 'text-indigo-200' : 'text-gray-500'
                  }`}
                >
                  {message.sender.name || 'Utilisateur'}
                </p>
              )}
            </div>
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
}
