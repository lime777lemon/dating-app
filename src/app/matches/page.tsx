'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';

interface Match {
  id: string;
  name: string;
  age: number;
  location: string;
  image: string;
  lastMessage?: string;
  timestamp?: string;
}

export default function Matches() {
  const [matches] = useState<Match[]>([
    {
      id: '1',
      name: 'Sarah Johnson',
      age: 28,
      location: 'New York, NY',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastMessage: 'Hey, how are you?',
      timestamp: '2m ago',
    },
    {
      id: '2',
      name: 'Emily Davis',
      age: 26,
      location: 'Los Angeles, CA',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastMessage: 'Would you like to grab coffee sometime?',
      timestamp: '1h ago',
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
      <div className="py-12 px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Matches</h1>
          <div className="space-y-4">
            {matches.map((match) => (
              <div
                key={match.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-4 flex items-center space-x-4">
                  <div className="relative h-16 w-16 flex-shrink-0">
                    <Image
                      src={match.image}
                      alt={match.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-semibold text-gray-900">
                        {match.name}, {match.age}
                      </h2>
                      <span className="text-sm text-gray-500">{match.timestamp}</span>
                    </div>
                    <p className="text-sm text-gray-500">{match.location}</p>
                    {match.lastMessage && (
                      <p className="text-sm text-gray-600 mt-1 truncate">
                        {match.lastMessage}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
} 