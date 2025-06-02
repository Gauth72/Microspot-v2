'use client';

import { Toaster } from 'react-hot-toast';
import { SWRConfig } from 'swr';
import { SessionProvider } from 'next-auth/react';
import { usePrefetch } from '@/hooks/usePrefetch';
import { swrConfig } from '@/lib/swr';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieBanner from './CookieBanner';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  // Utilisation du hook de prefetch
  usePrefetch();

  return (
    <SessionProvider>
      <SWRConfig value={swrConfig}>
        <Toaster position="bottom-right" />
        <Navbar />
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </SWRConfig>
    </SessionProvider>
  );
}
