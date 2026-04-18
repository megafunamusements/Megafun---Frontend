import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })

export const metadata: Metadata = {
  title: 'Megafun Amusements',
  description: 'Manufacturers of 3D/5D/7D Theaters, VR Simulators and Amusement Park Attractions',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Navbar />
        <div className="flex-1 pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
