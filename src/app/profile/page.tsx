'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default function Profile() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    age: 30,
    location: 'San Francisco, CA',
    bio: 'Software engineer by day, amateur chef by night. Love hiking and photography.',
    interests: ['Cooking', 'Hiking', 'Photography', 'Travel'],
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    ],
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
      <div className="py-12 px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src={profile.images[0]}
                alt={profile.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {profile.name}, {profile.age}
                </h2>
                <span className="text-gray-600">{profile.location}</span>
              </div>
              <p className="text-gray-600 mb-6">{profile.bio}</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <button
                className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
} 