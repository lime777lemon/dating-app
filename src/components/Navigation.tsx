'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HomeIcon, UserIcon, ChatBubbleLeftRightIcon, HeartIcon } from '@heroicons/react/24/outline';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-around">
          <Link
            href="/dashboard"
            className={`flex flex-col items-center py-3 px-4 ${
              isActive('/dashboard') ? 'text-pink-500' : 'text-gray-500'
            }`}
          >
            <HomeIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link
            href="/matches"
            className={`flex flex-col items-center py-3 px-4 ${
              isActive('/matches') ? 'text-pink-500' : 'text-gray-500'
            }`}
          >
            <HeartIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Matches</span>
          </Link>
          <Link
            href="/messages"
            className={`flex flex-col items-center py-3 px-4 ${
              isActive('/messages') ? 'text-pink-500' : 'text-gray-500'
            }`}
          >
            <ChatBubbleLeftRightIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Messages</span>
          </Link>
          <Link
            href="/profile"
            className={`flex flex-col items-center py-3 px-4 ${
              isActive('/profile') ? 'text-pink-500' : 'text-gray-500'
            }`}
          >
            <UserIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Profile</span>
          </Link>
        </div>
      </div>
    </nav>
  );
} 