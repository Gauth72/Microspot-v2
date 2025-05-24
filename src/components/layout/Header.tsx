'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import NotificationBell from '../notifications/NotificationBell';

export default function Header() {
  const { data: session } = useSession();

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
                <button
                  onClick={() => signOut()}
                  className="ml-4 text-gray-600 hover:text-gray-900"
                >
                  Déconnexion
                </button>
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
