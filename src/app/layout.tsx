import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';
import { Providers } from './providers';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  // Optimisation pour le français
  variable: '--font-inter',
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'sans-serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://microspot.com'),
  title: {
    default: 'MicroSpot - Location de micro-emplacements commerciaux',
    template: '%s | MicroSpot'
  },
  description: 'Trouvez l\'emplacement idéal pour votre activité commerciale ou rentabilisez votre parcelle de terrain',
  keywords: ['location', 'emplacement commercial', 'micro-emplacement', 'distributeur automatique', 'kiosque', 'commerce'],
  authors: [{ name: 'MicroSpot' }],
  creator: 'MicroSpot',
  publisher: 'MicroSpot',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    title: 'MicroSpot - Location d\'espaces pour distributeur automatique et kiosque',
    description: 'Site spécialisé dans la location d\'emplacement à destination des distributeurs automatiques, kiosques, jeux et arcades.',
    siteName: 'MicroSpot'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MicroSpot - Location d\'espaces pour distributeur automatique et kiosque',
    description: 'Site spécialisé dans la location d\'emplacement à destination des distributeurs automatiques, kiosques, jeux et arcades.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} font-sans antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
