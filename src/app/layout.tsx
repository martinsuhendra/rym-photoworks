import type { Metadata } from 'next'
import { Adamina, Italiana } from 'next/font/google'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ThemeProvider from '@/providers/ThemeProvider'

import './globals.css'

const italiana = Italiana({
  variable: '--primary-font',
  weight: ['400'],
  subsets: ['latin'],
  adjustFontFallback: true,
})

const adamina = Adamina({
  variable: '--secondary-font',
  weight: ['400'],
  subsets: ['latin'],
  adjustFontFallback: true,
})

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
      <body className={`${italiana.variable} ${adamina.variable}`}>
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
