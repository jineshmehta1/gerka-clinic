// app/layout.tsx (or wherever RootLayout is defined)
import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    // Strengthened default title to include "the Genius Chess Academy" explicitly
    default: 'The Genius Chess Academy - Learn Chess from Grandmaster Pravin Thipsay',
    // Template also subtly reinforces "the Genius Chess Academy"
    template: '%s | The Genius Chess Academy',
  },
  description:
    // Enhanced description to include "the Genius Chess Academy" and related terms
    'Master chess with The Genius Chess Academy. Learn from Grandmaster Pravin Thipsay with online and offline training at Genius Chess Academy.',
  keywords: [
    'The Genius Chess Academy', // Added "The Genius Chess Academy"
    'Genius Chess Academy',
    'Grandmaster Pravin Thipsay',
    'learn chess',
    'online chess lessons',
    'offline chess training',
    'chess academy', // Added a more general relevant keyword
    'chess training', // Added another general relevant keyword
  ],
  metadataBase: new URL('https://www.thegeniuschessacademy.com'),
  alternates: {
    canonical: 'https://www.thegeniuschessacademy.com',
  },
  authors: [{ name: 'Genius Chess Academy', url: 'https://www.thegeniuschessacademy.com' }],
  creator: 'Genius Chess Academy',
  publisher: 'Genius Chess Academy',
  robots: {
    index: true,
    follow: true,
  },
  generator: 'Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'EducationalOrganization',
                name: 'The Genius Chess Academy', // Updated schema name
                url: 'https://www.thegeniuschessacademy.com',
                logo: 'https://www.thegeniuschessacademy.com/genius.png',
                description: 'World-class chess training academy led by Grandmaster Pravin Thipsay.',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Sector 3',
                  addressLocality: 'Udaipur',
                  addressRegion: 'Rajasthan',
                  postalCode: '313001',
                  addressCountry: 'IN',
                },
                contactPoint: {
                  '@type': 'ContactPoint',
                  telephone: '+91-9636809800',
                  email: 'geniuschessacademy12@gmail.com',
                },
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.9',
                  reviewCount: '250',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Grandmaster Pravin Thipsay',
                jobTitle: 'Head Coach',
                url: 'https://www.thegeniuschessacademy.com',
                sameAs: [
                  'https://en.wikipedia.org/wiki/Pravin_Thipsay',
                  'https://ratings.fide.com/profile/5001499',
                ],
              },
            ]),
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Navigation Menu - Updated with all sitemap pages */}
        {/* Main content area */}
        {children}
        {/* Footer - Shown on all pages */}
        <footer style={{ marginTop: '20px', textAlign: 'center' }}>
          <p>&copy; {new Date().getFullYear()} The Genius Chess Academy. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}