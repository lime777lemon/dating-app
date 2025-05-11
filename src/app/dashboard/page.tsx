'use client';

import { useState } from 'react';
import Image from 'next/image';
import { HeartIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Navigation from '@/components/Navigation';

interface Profile {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  image: string;
}

export default function Dashboard() {
  const [currentProfile, setCurrentProfile] = useState<Profile>({
    id: '1',
    name: 'Sarah Johnson',
    age: 28,
    location: 'New York, NY',
    bio: 'Adventure seeker and coffee enthusiast. Love hiking, photography, and trying new restaurants.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  });

  const handleLike = () => {
    // TODO: Implement like functionality
    console.log('Liked profile:', currentProfile.id);
  };

  const handleDislike = () => {
    // TODO: Implement dislike functionality
    console.log('Disliked profile:', currentProfile.id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
      <div className="py-12 px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-96">
              <Image
                src={currentProfile.image}
                alt={currentProfile.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {currentProfile.name}, {currentProfile.age}
                </h2>
                <span className="text-gray-600">{currentProfile.location}</span>
              </div>
              <p className="text-gray-600 mb-6">{currentProfile.bio}</p>
              <div className="flex justify-center space-x-8">
                <button
                  onClick={handleDislike}
                  className="p-4 rounded-full bg-white shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  <XMarkIcon className="h-8 w-8 text-red-500" />
                </button>
                <button
                  onClick={handleLike}
                  className="p-4 rounded-full bg-white shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <HeartIcon className="h-8 w-8 text-green-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
} 