'use client'

import { ThemeProvider } from 'next-themes'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      <div className='min-h-screen bg-white text-gray-900 dark:text-gray-200 dark:bg-gray-900 select-none transition-colors duration-300'>
        {children}
      </div>
    </ThemeProvider>
  )
}
