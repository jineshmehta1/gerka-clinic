import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// If you have Vercel Analytics, uncomment this:
// import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Primary Title for this page, with a template for other pages
  title: {
    default: "Genius Chess Academy (INTERNATIONAL SCHOOL OF CHESS) - Learn Chess from Grandmaster Pravin Thipsay",
    template: "%s | Genius Chess Academy", // Use this for dynamic titles on sub-pages
  },
  // Highly optimized and keyword-rich description
  description:
    "Master chess with Genius Chess Academy, an International School of Chess. Learn directly from Grandmaster Pravin Thipsay and transform your game. Join over 5000 successful students worldwide for elite online and offline chess training, advanced strategies, and tournament preparation. Start your journey to chess excellence today!",
  // Essential Keywords (research more specific ones if needed)
  keywords: [
    "Genius Chess Academy",
    "Genius Chess Academy",
    "International School of Chess",
    "Grandmaster Pravin Thipsay",
    "learn chess from grandmasters",
    "online chess lessons",
    "offline chess training",
    "chess coaching",
    "advanced chess strategies",
    "chess for beginners",
    "chess tournaments",
    "improve chess game",
    "elite chess training",
    "chess master classes",
    "world-class chess education",
    "GM Pravin Thipsay classes",
    "chess academy Udaipur",
    "best chess academy",
    "chess education",
    "FIDE rated coaches",
  ],
  metadataBase: new URL("https://www.thegeniuschessacademy.com"), 
  alternates: {
    canonical: "https://www.thegeniuschessacademy.com",
  },
  authors: [{ name: "Genius Chess Academy", url: "https://www.thegeniuschessacademy.com" }],
  creator: "Genius Chess Academy",
  publisher: "Genius Chess Academy",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  // Open Graph for social media sharing (Facebook, LinkedIn, etc.) - REMOVED SOCIAL MEDIA SPECIFIC FIELDS
  openGraph: {
    title: "Genius Chess Academy - Learn from Grandmaster Pravin Thipsay",
    description: "Master chess with Genius Chess Academy. Elite online and offline training from Grandmaster Pravin Thipsay. Join 5000+ successful students.",
    url: "https://www.thegeniuschessacademy.com", // IMPORTANT: Replace with your actual URL
    siteName: "Genius Chess Academy",
    images: [
      {
        url: "https://www.thegeniuschessacademy.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Genius Chess Academy - Grandmaster Pravin Thipsay",
      },
      {
        url: "https://www.thegeniuschessacademy.com/genius.jpg",
        width: 400,
        height: 400,
        alt: "Genius Chess Academy Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Twitter Card for Twitter sharing - REMOVED TWITTER SPECIFIC FIELDS
  // The 'card' and 'title/description' are still generic enough for general SEO, but 'creator'/'site' are removed.
  twitter: {
    card: "summary_large_image",
    title: "Genius Chess Academy - Grandmaster Pravin Thipsay Coaching",
    description: "Learn chess from GM Pravin Thipsay at Genius Chess Academy. World-class online/offline training for all levels.",
    images: ["https://www.thegeniuschessacademy.com/twitter-card-image.jpg"], // IMPORTANT: Create a good Twitter image (e.g., 1200x675px)
  },
  // Generator is okay, but generally not critical for SEO.
  generator: "Next.js", // More generic, or remove if you prefer.
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicons and Apple Touch Icons */}
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

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "EducationalOrganization",
                "name": "Genius Chess Academy (INTERNATIONAL SCHOOL OF CHESS)",
                "url": "https://www.thegeniuschessacademy.com", // IMPORTANT: Your actual URL
                "logo": "https://www.thegeniuschessacademy.com/genius.png", // IMPORTANT: Your logo URL
                "description": "World-class chess training academy led by Grandmaster Pravin Thipsay, offering online and offline courses for all skill levels.",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-XXXXXXXXXX", // IMPORTANT: Your contact number
                  "contactType": "customer service",
                  "email": "info@thegeniuschessacademy.com" // IMPORTANT: Your contact email
                },
                "address": { // Add physical address if applicable, crucial for local SEO
                  "@type": "PostalAddress",
                  "streetAddress": "Sector 3", 
                  "addressLocality": "Udaipur",
                  "addressRegion": "Rajasthan",
                  "postalCode": "313001",
                  "addressCountry": "IN" 
                },
                "aggregateRating": { 
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "250"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Course",
                "name": "Grandmaster Chess Mastery Program",
                "description": "An advanced chess program designed and taught by Grandmaster Pravin Thipsay, covering opening theory, middlegame strategy, and endgame techniques.",
                "provider": {
                  "@type": "EducationalOrganization",
                  "name": "Genius Chess Academy"
                },
                "hasCourseInstance": {
                  "@type": "CourseInstance",
                  "courseMode": ["online", "offline"],
                  "location": {
                    "@type": "Place",
                    "name": "Genius Chess Academy (Online & [Physical Location])",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "Your Street Address", // IMPORTANT: Ensure this matches your actual physical location if offline classes are offered
                      "addressLocality": "Your City",
                      "addressRegion": "Your State",
                      "postalCode": "Your Zip/Pin Code",
                      "addressCountry": "IN"
                    }
                  }
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Grandmaster Pravin Thipsay",
                "url": "https://www.thegeniuschessacademy.com",
                "jobTitle": "Head Coach, Grandmaster",
                "image": "https://www.thegeniuschessacademy.com/pravin.jpg",
                "sameAs": [
                  "https://en.wikipedia.org/wiki/Pravin_Thipsay",
                  "https://ratings.fide.com/profile/5001499" 
                ]
              }
            ])
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        {/* If you have Vercel Analytics, uncomment this: */}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}