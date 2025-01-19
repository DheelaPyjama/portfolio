import React from 'react'
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <nav className='fixed bottom-0 mb-4 bg-white shadow'>
      <ul className='flex space-x-4 cursor-pointer'>
        <li><Link to='landing' smooth>Landing</Link></li>
        <li><Link to='projects' smooth>Projects</Link></li>
        <li><Link to='blogs' smooth>Blogs</Link></li>
        <li><Link to='bookmarks' smooth>Bookmarks</Link></li>
        <li><Link to='about' smooth>About</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
