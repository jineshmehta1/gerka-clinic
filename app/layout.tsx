// app/layout.tsx
import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'The Genius Chess Academy - Learn Chess from Grandmaster Pravin Thipsay',
    template: '%s | The Genius Chess Academy',
  },
  description:
    'Master chess with The Genius Chess Academy. Learn from Grandmaster Pravin Thipsay with online and offline training at The Genius Chess Academy.',
  keywords: [
    'The Genius Chess Academy',
    'Genius Chess Academy',
    'Grandmaster Pravin Thipsay',
    'learn chess',
    'online chess lessons',
    'offline chess training',
    'chess academy',
    'chess training',
  ],
  metadataBase: new URL('https://www.thegeniuschessacademy.com'),
  alternates: {
    canonical: 'https://www.thegeniuschessacademy.com',
  },
  authors: [{ name: 'The Genius Chess Academy', url: 'https://www.thegeniuschessacademy.com' }],
  creator: 'The Genius Chess Academy',
  publisher: 'The Genius Chess Academy',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'The Genius Chess Academy - Learn Chess from Grandmaster Pravin Thipsay',
    description: 'World-class chess training academy led by GM Pravin Thipsay.',
    url: 'https://www.thegeniuschessacademy.com',
    siteName: 'The Genius Chess Academy',
    images: [
      {
        url: 'https://www.thegeniuschessacademy.com/genius.png',
        width: 800,
        height: 600,
        alt: 'The Genius Chess Academy Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
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
        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'EducationalOrganization',
                name: 'The Genius Chess Academy',
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
              {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What is The Genius Chess Academy?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'The Genius Chess Academy is a world-class chess training institute led by Grandmaster Pravin Thipsay offering online and offline chess training.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'Who is the head coach of The Genius Chess Academy?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'The head coach is Grandmaster Pravin Thipsay, one of India’s top chess grandmasters.'
                    }
                  }
                ]
              }
            ]),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <footer style={{ marginTop: '20px', textAlign: 'center' }}>
          <p>&copy; {new Date().getFullYear()} The Genius Chess Academy. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
