import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'PromptedCRE — Free AI Agent for Industrial Real Estate',
  description: 'A free AI agent that helps industrial and manufacturing companies evaluate space, compare buildings, and navigate real estate. No email required. No cost.',
  generator: 'v0.app',
  openGraph: {
    title: 'PromptedCRE — Free AI Agent for Industrial Real Estate',
    description: 'A free AI agent that helps industrial and manufacturing companies evaluate space, compare buildings, and navigate real estate. No email required. No cost.',
    url: 'https://promptedcre.com',
    siteName: 'PromptedCRE',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'PromptedCRE — Free AI Agent for Industrial Real Estate',
    description: 'A free AI agent that helps industrial and manufacturing companies evaluate space, compare buildings, and navigate real estate.',
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
