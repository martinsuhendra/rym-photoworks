import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ThemeProvider from '@/providers/ThemeProvider'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RYM Photoworks',
  description: 'Wedding Photo & Videography',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
