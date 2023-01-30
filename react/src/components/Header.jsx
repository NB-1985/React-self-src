import React from 'react'
import { Link } from "react-router-dom"



const Header = () => {
  return (
    <div>
      <nav className='navigation'>
        <Link to='/'>Home</Link>
        <Link to='/about'>about</Link>
        <Link to='/contact'>contact</Link>
      </nav>
    </div>
  )
}

export default Header