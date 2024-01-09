export default function Header() {

  return (
    <header className='py-5'>
          <nav className='flex justify-between align-center'>
            <ul className='flex flex-row gap-5'>
              <li className='cursor-pointer'><a href="#Projects">Projects</a></li>
              <li className='cursor-pointer'><a href="#Blog">Blog</a></li>
              <li className='cursor-pointer'><a href="#Contact">Contact</a></li>
            </ul> 
          </nav>
    </header>
  )
}
