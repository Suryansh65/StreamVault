import React from 'react';
import './css/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <div className='navbar-left'>
            <img src='Streamvault_logo.png' alt='logo'/>
            <h2>StreamVault</h2>
        </div>
        <div className='navbar-right'>
            <ul>
                <Link to='/home' className='link'>Home</Link>
                <Link to='/about' className='link'>About</Link>
                <Link to='/contact' className='link'>Contact</Link>
                <Link to='/uploads' className='link'>Upload</Link>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar