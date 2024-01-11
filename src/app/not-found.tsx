import Link from 'next/link'
import Contact from '@/Components/Contact'
 
export default function NotFound() {
  return (
    <main>
        <div className='text-center h-[60vh] grid place-items-center'>
            <div>
                <h1 className='text-9xl'>404</h1>
                <h2>Page Not Found</h2>
                <p>Return To <Link href="/" className='underline'>Home</Link> Page</p>
            </div>      
        </div>
        <Contact />
    </main>
  )
}