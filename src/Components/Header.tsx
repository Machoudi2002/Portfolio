"use client"
import { usePathname } from 'next/navigation'

export default function Header() {
  const path = usePathname();
  return (
    <header className='py-5 flex flex-row justify-between align-center'>
          <nav className='flex justify-between align-center'>
            <ul className='flex flex-row gap-5'>
              <li className='cursor-pointer'><a href={path !== "/" ? "/Projects" : "#Projects"}>Projects</a></li>
              <li className='cursor-pointer'><a href={path !== "/" ? "/Blog" : "#Blog"}>Blog</a></li>
              <li className='cursor-pointer'><a href="#Contact">Contact</a></li>
            </ul> 
          </nav>
    </header>
  )
}
