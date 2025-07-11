
import React from 'react'
import './Complete.css'
import HireMMe from '../../assets/HireMMe.png'
import Mark from '../../assets/Mark.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Complete = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div>
            <header className="complete-header">
                <div className="complete-logo">
                    <img src={HireMMe} alt="HireMMe Logo" />
                </div>

                <nav className={`complete-navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                    <Link to="/Profile" className="nav-link">Home</Link>
                    <Link to="/SignUp" className="nav-link">Artisans</Link>

                    <div className='complete-search-bar'>
                        <input type="text" placeholder="search by industry, service or location" />
                    </div>
                    <button className="become-btttnn">Become an Artisan</button>
                </nav>

                <button 
                    className="mobile-menu-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </header>

            <div className='indicating'>
                <div className='step-item activeeee'>
                    <div className='step-circle'>
                        <h2 className='step-number'>1</h2>
                    </div>
                    <p className='step-text'>Profile Setup</p>
                </div>
                
                <div className='step-connector'>
                    <hr />
                </div>

                <div className='step-item activeeee2'>
                    <div className='step-circle'>
                        <h2 className='step-number'>2</h2>
                    </div>
                    <p className='step-text'>Upload Previous Work</p>
                </div>
                
                <div className='step-connector'>
                    <hr />
                </div>

                <div className='step-item activeeee3'>
                    <div className='step-circle'>
                        <h2 className='step-number'>3</h2>
                    </div>
                    <p className='step-text'>Setup Completed</p>
                </div>
            </div>

            <div className='complete-mark'>
                <img src= {Mark} alt="Success Mark" />
            </div>

            <div className='complete-text'>
                <h2>Setup Completed!</h2>
                <p>Congratulations, your profile setup is complete!</p>
            </div>

         
        </div>
    )
}

export default Complete