import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <React.Fragment>
      <nav class className="navbar_section">
        <Link to="/" className="logo">
          <img src='images/images.jpeg' />       
        </Link>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link to='/' className='nav-links'>Home</Link>            
          </li>
          <li className='nav-item'>
            <Link to='/services' className='nav-links'>Services</Link>            
          </li>
          <li className='nav-item'>
            <Link to='/products' className='nav-links'>Products</Link>            
          </li>
          <li className='nav-item'>
            <Link to='/sign-up' className='nav-links'>Sign-up</Link>            
          </li>

        </ul>
      </nav>
      </React.Fragment>
  )
}

export default Navbar