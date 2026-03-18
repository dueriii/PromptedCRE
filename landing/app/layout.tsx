import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'PromptedCRE — Real Estate Intelligence for American Builders',
  description: 'The free AI agent for industrial real estate. Built for founders, operators, and builders who make physical things. Find space, compare buildings, close deals — no brokers, no gatekeepers.',
  generator: 'v0.app',
  openGraph: {
    title: 'PromptedCRE — Real Estate Intelligence for American Builders',
    description: 'The free AI agent for industrial real estate. Built for founders, operators, and builders who make physical things. Find space, compare buildings, close deals — no brokers, no gatekeepers.',
    url: 'https://promptedcre.com',
    siteName: 'PromptedCRE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PromptedCRE — Real Estate Intelligence for American Builders',
    description: 'The free AI agent for industrial real estate. Built for founders, operators, and builders who make physical things.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
