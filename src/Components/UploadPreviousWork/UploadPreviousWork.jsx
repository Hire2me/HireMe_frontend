import React from 'react'
import './UploadPreviousWork.css'
import HireMMe from '../../assets/HireMMe.png'
import Uploadimg from '../../assets/Uploadimg.png'
import cross from '../../assets/cross.png'
import { Link } from 'react-router-dom';

const UploadPreviousWork = () => {
  
  return (
    <div className='uploadprevious-container'>

      <header className="uploadprevious-header">
        <div className="uploadprevious-logo">
          <img src={HireMMe} alt="" />
        </div>

        <nav className="previous-navbar">
          <Link to="/Profile" className="nav-link">Home</Link>
          <Link to="/SignUp" className="nav-link">Artisans</Link>
          {/* <a href="#">Home</a>
                <a href="#">Artisans</a> */}

          <div className='previous-search-bar'>
            <input type="text" placeholder="search by industry, service or location" />
          </div>
          <button className="become-bttnn">Become an Artisan</button>
        </nav>
      </header>

      <div className='indicate'>

        <div className='activeee'>
          <h2 className='step-activeee1'>1</h2>
          <p className='steppp'>Profile Setup</p>
        </div>
        <div>
          <hr />
        </div>

        <div className='activeee2'>
          <h2 className='step-activeee2'>2</h2>
          <p className='steppss'>Upload Previous Work</p>
        </div>
        <div>
          <hr />
        </div>

        <div className='activeee3'>
          <h2 className='step-activeee3'>3</h2>
          <p className='steppss'>Setup Completed</p>
        </div>
      </div>

      <div className='display'>
        <h2>Add at least 7 photos</h2>
        <p>Photos must include the display of your previous works</p>
      </div>

      <div className='uploadimgs'>

        <div className='uploadimg'>
          <img src={Uploadimg} alt="" />

          <div className='addphoto'>
            <img src={cross} alt="" />
            <h2>Add Photos</h2>
            <p>0 of 7 photos required</p>
          </div>

          <div className='addphotos'>
          </div>
        </div>

      </div>

      <div className='description'>

        <div className='view-pics'>
          <select name="" >
            <option value="First view picture">First view picture</option>
            <option value="First view picture">Second view picture</option>
            <option value="First view picture">Third view picture</option>
          </select>

           <select name="" >
              <option value="Upload description">Upload description</option>
              <option value="Project description">Upload description</option>
              <option value="Work description">Upload description</option>
            </select>

            <select name="" >
              <option value="Upload description">Upload description</option>
              <option value="Additional details">Upload description</option>
              <option value="Project notes">Upload description</option>
            </select>
        </div>
      </div>

        <button className='finish-btn'>Finish</button>
      

    </div>
  )
}

export default UploadPreviousWork