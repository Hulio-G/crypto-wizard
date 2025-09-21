import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import './figma-styles.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crypto Wizard - The Ultimate Crypto Marketplace',
  description: 'Connect promoters, influencers, and recruiters in the crypto space. Find bounties, discover content, and grow your network.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          data-goatcounter="https://huliog.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        />
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  )
}
