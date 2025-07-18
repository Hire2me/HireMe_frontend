import React, { useState, useRef } from 'react';
import './UploadPreviousWork.css';
import HireMMe from '../../assets/HireMMe.png';
import Uploadimg from '../../assets/Uploadimg.png';
import cross from '../../assets/cross.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const UploadPreviousWork = () => {
    const navigate = useNavigate();
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedViewPicture, setSelectedViewPicture] = useState("First view picture");
  const [descriptions, setDescriptions] = useState({ upload: "", additional: "" });
  const [uploadProgress, setUploadProgress] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (uploadedImages.length + files.length > 7) {
      alert("You can only upload up to 7 photos.");
      return;
    }

    const newImages = files.map((file, index) => ({
      id: Date.now() + index,
      url: URL.createObjectURL(file),
      file,
      name: file.name,
    }));

    setUploadedImages(prev => [...prev, ...newImages]);
  };

  const removeImage = (id) => {
    setUploadedImages(prev => prev.filter(image => image.id !== id));
  };

  const handleDescriptionChange = (key, value) => {
    setDescriptions(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleFinish = async () => {
    if (uploadedImages.length < 7) {
      alert("Please upload at least 7 images.");
      return;
    }

    setIsUploading(true);
    setUploadProgress({ percentage: 0, completed: 0, total: uploadedImages.length });

    for (let i = 0; i < uploadedImages.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate upload delay

      setUploadProgress(prev => ({
        ...prev,
        completed: i + 1,
        percentage: Math.round(((i + 1) / uploadedImages.length) * 100),
        currentFile: uploadedImages[i].name,
      }));
    }

    setIsUploading(false);
    alert("Upload completed successfully!");
      navigate("/Complete");
  };

  return (
    <div className='uploadprevious-container'>
      <header className="uploadprevious-header">
        <div className="uploadprevious-logo">
          <img src={HireMMe} alt="HireMMe Logo" />
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
        <hr />
        <div>
          <hr />
        </div>

        <div className='activeee2'>
          <h2 className='step-activeee2'>2</h2>
          <p className='steppss'>Upload Previous Work</p>
        </div>
        <hr />
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
          <img src={Uploadimg} alt="Upload placeholder" />

          <input
            id="fileInput"
            type="file"
            multiple
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />

          <div className='addphoto' onClick={triggerFileInput} style={{ cursor: 'pointer' }}>
            <div className="upload-icon">
              <img src={cross} alt="" />
            </div>
            <h2>Add Photos</h2>
            <p>{uploadedImages.length} of 7 photos required</p>
          </div>

          <div className='addphotos'>
            {uploadedImages.map((image) => (
              <div key={image.id} className='uploaded-image'>
                <img src={image.url} alt={image.name} />
                <button className='remove-btn' onClick={() => removeImage(image.id)}>×</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='description'>
        <div className='view-pics'>
          <select value={selectedViewPicture} onChange={(e) => setSelectedViewPicture(e.target.value)}>
            <option value="First view picture">First view picture</option>
            <option value="Second view picture">Second view picture</option>
            <option value="Third view picture">Third view picture</option>
          </select>

          <select value={descriptions.upload} onChange={(e) => handleDescriptionChange('upload', e.target.value)}>
            <option value="">Upload description</option>
            <option value="Project description">Project description</option>
            <option value="Work description">Work description</option>
          </select>

          <select value={descriptions.additional} onChange={(e) => handleDescriptionChange('additional', e.target.value)}>
            <option value="">Upload description</option>
            <option value="Additional details">Additional details</option>
            <option value="Project notes">Project notes</option>
          </select>
        </div>
      </div>

      <button
        className='finish-btn'
        onClick={handleFinish}
        disabled={isUploading || uploadedImages.length < 7}
      >
        {isUploading
          ? uploadProgress
            ? `Uploading... ${uploadProgress.percentage}% (${uploadProgress.completed}/${uploadProgress.total})`
            : 'Preparing...'
          : 'Finish'}
      </button>

      {uploadProgress && (
        <div className="upload-progress">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${uploadProgress.percentage}%` }}
            ></div>
          </div>
          <p>Uploading {uploadProgress.currentFile}...</p>
        </div>
      )}
    </div>
  );
};

export default UploadPreviousWork;

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
