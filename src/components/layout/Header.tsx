'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import NotificationBell from '../notifications/NotificationBell';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const { data: session } = useSession();
  const [showMenu, setShowMenu] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/users/profile');
        if (!response.ok) throw new Error('Failed to fetch profile');
        const data = await response.json();
        setProfileImage(data.profileImage);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    if (session?.user) {
      fetchProfile();
    }
  }, [session]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-indigo-600">MicroSpot</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/annonces"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                Annonces
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            {session ? (
              <>
                <NotificationBell />
                <Link
                  href="/messages"
                  className="ml-4 text-gray-600 hover:text-gray-900"
                >
                  Messages
                </Link>
                <Link
                  href="/deposer-annonce"
                  className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Déposer une annonce
                </Link>
                <div className="relative ml-4" ref={menuRef}>
                  <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="flex items-center"
                  >
                    <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                      <Image
                        src="/images/default-avatar.jpg"
                        alt="Photo de profil"
                        width={32}
                        height={32}
                        className="object-cover rounded-full"
                        priority
                      />
                    </div>
                  </button>

                  {showMenu && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                      <Link
                        href="/profil"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setShowMenu(false)}
                      >
                        Mon profil
                      </Link>
                      <button
                        onClick={() => {
                          signOut();
                          setShowMenu(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Déconnexion
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <Link
                href="/login"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
              >
                Connexion
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
