import 'tailwindcss/tailwind.css';
import type { Metadata } from 'next'
import { Noto_Serif } from 'next/font/google'
import './globals.css'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

const font = Noto_Serif({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Machoudi Personal Portfolio',
  description: 'Showcase of my personal portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className='container'>
          <Header />
            {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
