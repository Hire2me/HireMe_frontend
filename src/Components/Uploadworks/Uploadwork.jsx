import React from 'react'
import './Uploadwork.css'
import HireMMe from '../../assets/HireMMe.png'
import { FcCheckmark } from "react-icons/fc";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Uploadworks = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      setError("Please select a file.");
      setFile(null);
      return;
    }

    if (!['image/jpeg', 'image/png'].includes(selectedFile.type)) {
      setError("Only PNG and JPEG files are allowed.");
      setFile(null);
      return;
    }

    if (selectedFile.size > 2 * 1024 * 1024) {
      setError("File size must not exceed 2MB.");
      setFile(null);
      return;
    }

    setError('');
    setFile(selectedFile);
  };

  const handleProceed = () => {
    if (!file) {
      setError("Please upload a valid image file before proceeding.");
      return;
    }
    // Submit logic can go here
    alert("File is valid! Proceeding...");
    navigate('/profileSetting'); 
  };

  return (
    <div className='uploadwork-container'>
      <header className="uploadwork-header">
        <div className="uploadwork-logo">
          <img src={HireMMe} alt="" />
        </div>

        <nav className="nav-barr">
             <Link to="/profile" className="nav-link">Home</Link>
                    <Link to="/signUp" className="nav-link">Artisans</Link>
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

      {/* <div className="file-upload-section" style={{ marginLeft: '100px', marginTop: '40px' }}>
        <label htmlFor="fileInput" style={{ fontWeight: 'bold' }}>Upload your work:</label><br />
        <input
          type="file"
          accept=".jpeg,.jpg,.png"
          id="fileInput"
          onChange={handleFileChange}
          style={{ marginTop: '10px' }}
        />
        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        {file && <p style={{ color: 'green', marginTop: '10px' }}>✅ File selected: {file.name}</p>}
      </div> */}

      <div className='button-uploading'>
        <div>
          <button className='btn-back' >Back</button>
        </div>
        <div>
          <button className='btn-proceed' onClick={handleProceed}>Proceed</button>
        </div>
      </div>
    </div>
  )
}

export default Uploadworks