import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ConnectkitProvider } from './connectkit-provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nextjs 14 + ConnectKit starter',
  description: 'Nextjs 14 + ConnectKit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConnectkitProvider>{children}</ConnectkitProvider>
        
        </body>
    </html>
  )
}
