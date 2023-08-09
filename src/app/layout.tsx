import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import AuthProvider from '@/components/AuthProvider'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn('', inter.className)}>
      <body className="bg-gray-300 dark:bg-black dark:text-white min-h-screen antialiased">
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div>
              <Navbar />
              {children}
            </div>
          </ThemeProvider>
        </AuthProvider>
        <Toaster />
      </body>
    </html >
  )
}
