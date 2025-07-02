import React from 'react';
import './ProfileSetting.css';
import HireMMe from '../../assets/HireMMe.png'
import { CiCamera } from "react-icons/ci";
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ProfileSetting = () => {

  const navigate = useNavigate();
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    businessAddress: '',
    occupation: '',
    occupationType: '',
    availabilityDay: '',
    availabilityTime: '',
    certificate: '',
    nin: '',
    bio: '',
    coverImage: '',
    profilePicture: ''

  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [certificateImage, setCertificateImage] = useState(null);
  const [certificateFile, setCertificateFile] = useState();
  const [ninImage, setNinImage] = useState(null);
  const [ninFile, setNinFile] = useState(null);
  const [popup, setPopup] = useState({ show: false, type: '', message: '' });
  const [coverProfileImage, setCoverProfileImage] = useState(null);


  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required';
    if (!formData.businessAddress.trim()) newErrors.businessAddress = 'Business address is required';
    if (!formData.occupation.trim()) newErrors.occupation = 'Occupation is required';
    if (!formData.occupationType.trim()) newErrors.occupationType = 'Occupation type is required';
    if (!formData.availabilityDay) newErrors.availabilityDay = 'Select a day';
    if (!formData.availabilityTime) newErrors.availabilityTime = 'Select a time';
    if (!formData.certificate) newErrors.certificate = 'Upload your CAC/SMEDAN document';
    if (!formData.nin) newErrors.nin = 'Upload your NIN';
    if (!formData.bio.trim()) newErrors.bio = 'Bio is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    // if (Object.keys(validationErrors).length === 0) {
    setIsLoading(true);
    setFormData({
      businessName: formData.businessName,
      businessAddress: formData.businessAddress,
      occupation: formData.occupation,
      occupationType: formData.occupationType,
      availabilityDay: formData.availabilityDay,
      availabilityTime: formData.availabilityTime,
      certificate: certificateImage,
      nin: ninImage,
      bio: formData.bio,
      profilePicture: profileImage,
      coverImage: coverProfileImage
    });

    try {
      const response = await axios.post('https://hireme-backend-6lkg.onrender.com/api/artisans/profile', formData);
      if (response?.status === 201) {
        const data = response?.data;
        setPopup({ show: true, type: 'success', message: '✅ Registration Success: ' + data.message });
        setTimeout(() => {
          setPopup({ show: false, type: '', message: '' });
          // navigate("/Uploadwork");
        }, 2000);
      }
    }
    catch (error) {
      setPopup({ show: true, type: 'error', message: error.response?.data.message || 'Profile setup failed.' });
      setTimeout(() => setPopup({ show: false, type: '', message: '' }), 2500);
    } finally {
      setIsLoading(false);
    }
    // } else {
    //   setPopup({ show: true, type: 'error', message: 'Please fix the required form.' });
    //   setTimeout(() => setPopup({ show: false, type: '', message: '' }), 2000);
    // }
  };

  const handleProfileImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Show the image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
      // Optionally handle upload logic here
      console.log('Selected file:', file);
      console.log('File name:', file.name);
    }
  };
  const handleProfileCoverUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Show the image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
      // Optionally handle upload logic here
      console.log('Selected file:', file);
      console.log('File name:', file.name);
    }
  };
  const handleCertificateUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Show the image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setCertificateImage(reader.result);
        setCertificateFile(file);
      };
      reader.readAsDataURL(file);
      // Optionally handle upload logic here
      console.log('Selected file:', file);
      console.log('File name:', file.name);
    }
  };

  const handleNinUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Show the image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setNinImage(reader.result);
        setNinFile(file);
      };
      reader.readAsDataURL(file);
      // Optionally handle upload logic here
      console.log('Selected file:', file);
      console.log('File name:', file.name);
    }

  };
  return (
    <div className="profile-wrapper">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <img src={HireMMe} alt="" />
        </div>

        <nav className="nav-links">
          <Link to="/Profile" className="nav-link">Home</Link>
          <Link to="/SignUp" className="nav-link">Artisans</Link>

          {/* <a href="#">Home</a>
          <a href="#">Artisans</a> */}

          <div className='search-bar'>
            <input type="" placeholder="search by industry, service or location" />
          </div>
          < button className="become-btn"> <Link to="/Uploadwork">Become an Artisan</Link>  </button>
        </nav>

      </header>
      <div className='welcome'>
        <h2><span>Welcome,</span> Olamide</h2>
      </div>
      {/* Stepper */}

      <div className='indicator'>

        <div className='active'>
          <h2 className='step-active1'>1</h2>
          <p className='step'>Profile Setup</p>
        </div>
        <div>
          <hr />
        </div>

        <div className='active2'>
          <h2 className='step-active2'>2</h2>
          <p className='steps'>Upload Previous Work</p>
        </div>
        <div>
          <hr />
        </div>

        <div className='active3'>
          <h2 className='step-active3'>3</h2>
          <p className='steps'>Setup Completed</p>
        </div>
      </div>

      {/* Profile Image Upload */}
      <div className='upload-section' onClick={() => document.getElementById('cover-upload-input').click()} style={{ cursor: 'pointer' }} >
        {profileImage && (
          <img src={coverProfileImage} alt="Profile" className='cover-image' />
        )}

        <div className="image-upload-section"  >

          <div className="image-circle" onClick={() => document.getElementById('profile-upload-input').click()} style={{ cursor: 'pointer' }} >
            {profileImage && (
              <img src={profileImage} alt="Profile" className='profile-image' />
            )}
            <CiCamera className="camera-icon" />
          </div>
          <input
            type='file'
            id='profile-upload-input'
            className=''
            style={{ display: 'none' }}
            onChange={handleProfileImageUpload}
          />
          <input
            type='file'
            id='cover-upload-input'
            className=''
            style={{ display: 'none' }}
            onChange={handleProfileCoverUpload}
          />
        </div>
      </div>
      {/* Form Section */}
      <form onSubmit={handleSubmit}>
        <div className="profile-form">
          <div className="form-row">
            <input type="text" name='businessName' value={formData.businessName}
              onChange={handleChange} placeholder='Business Name' />
            {errors.businessName && <p className="error">{errors.businessName}</p>}

            <input type="text" name='businessAddress' value={formData.businessAddress}
              onChange={handleChange} placeholder="Business Address" />
            {errors.businessAddress && <p className="error">{errors.businessAddress}</p>}
          </div>

          <div className="form-row">
            <input type="text" name='occupation' value={formData.occupation}
              onChange={handleChange} placeholder="Occupation" />
            {errors.occupation && <p className="error">{errors.occupation}</p>}

            <input type="text" name='occupationType' value={formData.occupationType}
              onChange={handleChange} placeholder="Occupation Type" />
            {errors.occupationType && <p className="error">{errors.occupationType}</p>}
          </div>

          <div className="form-row">
            <select name='availabilityDay' value={formData.availabilityDay}
              onChange={handleChange}>


              <option>Select Days</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="">Wednessday</option>
              <option value="">Thursday</option>
              <option value="">Friday</option>
            </select>
            {errors.availabilityDay && <p className="error">{errors.availabilityDay}</p>}

            <select name='availabilityTime' value={formData.availabilityTime}
              onChange={handleChange}>
              <option>Select Time</option>
              <option value="12:00">12:00am</option>
              <option value="01:00">01:00am</option>
              <option value="02:00">02:00am</option>
              <option value="03:00">03:00am</option>
              <option value="04:00">04:00am</option>
              <option value="05:00">05:00am</option>
            </select>
            {errors.availabilityTime && <p className="error">{errors.availabilityTime}</p>}
          </div>

          <div className="form-row">

            <div className='cert'>
              <label htmlFor="">Business Certificate <span>( e. g CAC, SMEDAN ) *</span></label>
              <input type="file" id='profile-upload-certificate'
                accept="image/*,application/pdf"
                style={{ display: 'none' }}
                onChange={handleCertificateUpload} />

              <div className='input-container'>
                <span className='span'>{certificateFile?.name}</span>
                <button className='button1' type="button" onClick={() => document.getElementById('profile-upload-certificate').click()} >Upload</button>
              </div>
              {errors.certificate && <p className="error">{errors.certificate}</p>}
            </div>

            <div>
              <label htmlFor="">National Identification Number</label>
              <input type="file" id='profile-upload-nin'
                accept="image/*,application/pdf"
                style={{ display: 'none' }}
                onChange={handleNinUpload} />

              <div className='input-container2'>
                <span className='span'>{ninFile?.name}</span>
                <button className='button1' type="button" onClick={() => document.getElementById('profile-upload-nin').click()} >Upload</button>
              </div>
              {errors.nin && <p className="error">{errors.nin}</p>}
            </div>
          </div>

          <textarea className="bio" name='bio' value={formData.bio}
            onChange={handleChange} placeholder="Input your bio"></textarea>
          {errors.bio && <p className="error">{errors.bio}</p>}

          <div className="submit-container">
            <button type="submit" className="submit-btn" onClick={handleSubmit}>Proceed</button>
          </div>
        </div>
      </form>
      {popup.show && (
        <div style={{
          position: 'fixed',
          top: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: popup.type === 'success' ? '#2ecc40' : '#e74c3c',
          color: '#fff',
          padding: '16px 32px',
          borderRadius: '8px',
          zIndex: 9999,
          fontWeight: 600,
          fontSize: '14px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.12)'
        }}>
          {popup.message}
        </div>
      )}
    </div>
  );
};

export default ProfileSetting;
