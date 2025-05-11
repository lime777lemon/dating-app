'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
}

interface Chat {
  id: string;
  matchId: string;
  name: string;
  image: string;
  messages: Message[];
}

export default function Messages() {
  const [chats] = useState<Chat[]>([
    {
      id: '1',
      matchId: '1',
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      messages: [
        {
          id: '1',
          senderId: '1',
          text: 'Hey, how are you?',
          timestamp: '2:30 PM',
        },
        {
          id: '2',
          senderId: 'me',
          text: "I'm good, thanks! How about you?",
          timestamp: '2:31 PM',
        },
      ],
    },
  ]);

  const [selectedChat, setSelectedChat] = useState<Chat>(chats[0]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // TODO: Implement message sending functionality
    console.log('Sending message:', newMessage);
    setNewMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
      <div className="py-12 px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="relative h-12 w-12 flex-shrink-0">
                  <Image
                    src={selectedChat.image}
                    alt={selectedChat.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {selectedChat.name}
                </h2>
              </div>
            </div>

            <div className="h-[500px] overflow-y-auto p-4 space-y-4">
              {selectedChat.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.senderId === 'me' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg px-4 py-2 ${
                      message.senderId === 'me'
                        ? 'bg-pink-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p>{message.text}</p>
                    <span
                      className={`text-xs ${
                        message.senderId === 'me'
                          ? 'text-pink-100'
                          : 'text-gray-500'
                      }`}
                    >
                      {message.timestamp}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-pink-500 text-white p-2 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  <PaperAirplaneIcon className="h-6 w-6" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
} 