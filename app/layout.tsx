// app/layout.tsx (or wherever RootLayout is defined)
import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Genius Chess Academy - Learn Chess from Grandmaster Pravin Thipsay',
    template: '%s | Genius Chess Academy',
  },
  description:
    'Master chess with Genius Chess Academy. Learn from Grandmaster Pravin Thipsay with online and offline training.',
  keywords: [
    'Genius Chess Academy',
    'Grandmaster Pravin Thipsay',
    'learn chess',
    'online chess lessons',
    'offline chess training',
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
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
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
                name: 'Genius Chess Academy',
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
        <nav>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '20px' }}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/courses">Courses</a></li> {/* Replaced /programs */}
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/success-stories">Success Stories</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/book-demo">Book Demo</a></li>
            <li><a href="/classes">Classes</a></li>
          </ul>
        </nav>
        {/* Main content area */}
        {children}
        {/* Footer - Shown on all pages */}
        <footer style={{ marginTop: '20px', textAlign: 'center' }}>
          <p>&copy; {new Date().getFullYear()} Genius Chess Academy. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}