import React from 'react'
import './ProfileView.css'
import HireMMe from '../../assets/HireMMe.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ArtisanTools from '../../assets/ArtisanTools.png'
import Ellipsee from '../../assets/Ellipsee.png'
import Vectorr from '../../assets/Vectorr.png'

const ProfileView = () => {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div>
        <header className="profileview-header">
            <div className="profileview-logo">
            <img src={HireMMe} alt="HireMMe Logo" />
            </div>
    
            <nav className={`profileview-navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <Link to="/profile" className="nav-link">Home</Link>
            <Link to="/signUp" className="nav-link">Artisans</Link>
            <Link to="/Profile" className="nav-link">Home</Link>
            <Link to="/SignUp" className="nav-link">Artisans</Link>
    
            <div className='profileview-search-bar'>
                <input type="text" placeholder="search by industry, service or location" />
            </div>
            <button className="become-btttnnn">Become an Artisan</button>
            </nav>

            <div className="profileview-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <span className="menu-icon-line"></span>
                <span className="menu-icon-line"></span>
                <span className="menu-icon-line"></span>
            </div>
              <button 
                    className="mobile-menu-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
        </header>
    
        <div className='furniture-span'>
            <span>Home  Adekabz Furniture</span>
        </div>

       <div className='profileview-img'>
        <img src={ArtisanTools} alt="" />
       </div>

        <div className='profileview-ellipsee'>
            <img src={Ellipsee} alt="" />
            <div className='profileview-img'>
                <img src={Vectorr} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ProfileView
