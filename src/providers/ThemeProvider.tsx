'use client'

import { PropsWithChildren } from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

function ThemeProvider({ children }: PropsWithChildren) {
  return <NextThemeProvider defaultTheme="system">{children}</NextThemeProvider>
}

export default ThemeProvider
