import 'tailwindcss/tailwind.css';
import type { Metadata } from 'next'
import { Noto_Serif } from 'next/font/google'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import './globals.css'

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
        <div className='w-full pr-4 pl-4 mr-auto ml-auto sm:w-[540px] md:w-[700px]'>
          <Header />
            {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
