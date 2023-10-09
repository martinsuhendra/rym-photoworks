import { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { Adamina, Italiana } from 'next/font/google'

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

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`${italiana.variable} ${adamina.variable} overflow-x-hidden overscroll-none`}
      >
        <ThemeProvider>
          <Navbar />
          <div>{children}</div>
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
