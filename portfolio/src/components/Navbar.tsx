import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { BookmarkIcon, BellIcon, Pencil1Icon, ArchiveIcon, FaceIcon } from '@radix-ui/react-icons'

function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showNavbar, setShowNavbar] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      (currentScrollY > lastScrollY && currentScrollY > 50) ? setShowNavbar(true) : setShowNavbar(false) 
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {window.removeEventListener('scroll', handleScroll)}
  }, []);

  return (
    <nav className={`fixed my-4 shadow-md p-4 rounded-full text-white bg-black bottom-0 left-[50%] flex justify-center z-10 transition-transform duration-300 ${
      showNavbar ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <ul className='flex space-x-4 cursor-pointer'>
        <li><Link to='landing' smooth><FaceIcon /></Link></li>
        <li><Link to='projects' smooth><Pencil1Icon /></Link></li>
        <li><Link to='blogs' smooth><ArchiveIcon/></Link></li>
        <li><Link to='bookmarks' smooth><BookmarkIcon /></Link></li>
        <li><Link to='about' smooth><BellIcon /></Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
