import React from 'react'
import './Uploadwork.css'
import HireMMe from '../../assets/HireMMe.png'
import { FcCheckmark } from "react-icons/fc";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Uploadwork = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/ProfileSetting');
  };
  const handleProceed = () => {
    navigate('/UploadPreviousWork');
  };

  return (
    <div className='uploadwork-container'>
      <header className="uploadwork-header">
        <div className="uploadwork-logo">
          <img src={HireMMe} alt="" />
        </div>

        <nav className="nav-barr">
             <Link to="/Profile" className="nav-link">Home</Link>
                    <Link to="/SignUp" className="nav-link">Artisans</Link>
          {/* <a href="#">Home</a>
          <a href="#">Artisans</a> */}

          <div className='search-barr'>
            <input type="text" placeholder="search by industry, service or location" />
          </div>
          <button className="become-bttn">Become an Artisan</button>
        </nav>
      </header>

      <div className='indicatorr'>

        <div className='activee'>
          <h2 className='step-activee1'>1</h2>
          <p className='stepp'>Profile Setup</p>
        </div>
        <div>
          <hr />
        </div>

        <div className='activee2'>
          <h2 className='step-activee2'>2</h2>
          <p className='stepps'>Upload Previous Work</p>
        </div>
        <div>
          <hr />
        </div>

        <div className='activee3'>
          <h2 className='step-activee3'>3</h2>
          <p className='stepps'>Setup Completed</p>
        </div>
      </div>

      <div>
        <div className='uploading'>
          <h2>Things to note before Uploading Your Works </h2>
          <p>Pictures must:</p>
        </div>
      </div>

      <div>
        <div className='mark'>
         <p className='checkmark1'>  <FcCheckmark />   Not more than 2mb</p>
         <p className='checkmark2'>  <FcCheckmark />   Be of a very clear quality</p>
         <p className='checkmark3'>  <FcCheckmark /> Show a tidy and clean environment  </p>
         <p className='checkmark4'>  <FcCheckmark /> Be displayed in pngs and jpegs  </p>
         <p className='checkmark5'>  <FcCheckmark />  Be in Landscape/ Horizontal form </p>
         <p className='checkmark6'>  <FcCheckmark /> Not have a logo, watermark, pets or people as that will violate our rules  </p>
        </div>
      </div>


             <div className='button-uploading'>
        <button className='btn-back' onClick={handleBack}>Back</button>
        <button className='btn-proceed' onClick={handleProceed}>Proceed</button>
      </div>
    </div>
  )
}

export default Uploadwork