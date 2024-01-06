import type { Metadata } from 'next'
import { Noto_Serif } from 'next/font/google'
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
        <header className='container p-5'>
          <nav className='flex justify-between align-center'>
            <ul className='flex flex-row gap-5'>
              <li className='cursor-pointer'>About</li>
              <li className='cursor-pointer'>Work</li>
              <li className='cursor-pointer'>Contact</li>
            </ul>
            <span className='cursor-pointer'>Dark</span>
          </nav>
        </header>
        {children}
        <footer className='container p-2'>
          <nav className='flex justify-between align-center'>
              <ul className='flex flex-row gap-5'>
                <li className='cursor-pointer'>Email</li>
                <li className='cursor-pointer'>Linkedin</li>
                <li className='cursor-pointer'>Github</li>
              </ul>
          </nav>
          <p className='py-1'>© 2024 All Rights Reserved. Design & Coded with ❤️️</p>
        </footer>
      </body>
    </html>
  )
}
