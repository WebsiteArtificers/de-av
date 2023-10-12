import SupabaseProvider from './supabase-provider';
import { PropsWithChildren } from 'react';
import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import { Suspense } from 'react'

const meta = {
  title: 'Delaware Audio Visual | Your audio and visual solution.',
  description: 'Delaware AV is a leading audio-visual solutions provider to the Delaware Valley serving Delaware, Pennsylvania and New Jersey',
  cardImage: '/images/',
  robots: 'follow, index',
  favicon: '/images/',
  url: process.env.NEXT_PUBLIC_SITE_URL,
  type: 'website'
};

export const metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  title: meta.title,
  description: meta.description,
  cardImage: meta.cardImage,
  robots: meta.robots,
  favicon: meta.favicon,
  url: meta.url,
  type: meta.type,
  openGraph: {
    url: meta.url,
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage,
    type: meta.type,
    site_name: meta.title
  },
  twitter: {
    card: 'summary_large_image',
    site: '@delaware-audio-visual',
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage
  }
};

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/" />
      </head>
      <body>
        <SupabaseProvider>
          <Suspense fallback='Loading...'>
            <main>
              {children}
            </main>
          </Suspense>
        </SupabaseProvider>
        <Analytics />
      </body>
    </html>
  )
}
