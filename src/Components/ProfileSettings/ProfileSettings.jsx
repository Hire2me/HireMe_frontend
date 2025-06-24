import React from 'react'
import './ProfileSettings.css'
import HireMMe from '../../assets/HireMMe.png'
import { CiCamera } from "react-icons/ci";
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProfileSettings = () => {
    const navigate = useNavigate();
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

    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const [certificateImage, setCertificateImage] = useState(null);
    const [certificateFile, setCertificateFile] = useState();
    const [ninImage, setNinImage] = useState(null);
    const [ninFile, setNinFile] = useState(null);
    const [popup, setPopup] = useState({ show: false, type: '', message: '' });


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
        if (!formData.certificate.trim()) newErrors.certificate = 'Upload your CAC/SMEDAN document';
        if (!formData.nin.trim()) newErrors.nin = 'Upload your NIN';
        if (!formData.bio.trim()) newErrors.bio = 'Bio is required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setIsLoading(true);
            setFormData({
                businessName: '',
                businessAddress: '',
                occupation: '',
                occupationType: '',
                availabilityDay: '',
                availabilityTime: '',
                certificate: certificateImage,
                nin: '',
                bio: '',
                profilePicture: profileImage
            });
            try {
                const response = await axios.post('https://hireme-backend-6lkg.onrender.com/api/artisans/profile', formData);
                if (response?.status === 201) {
                    const data = response?.data;
                    setPopup({ show: true, type: 'success', message: '✅ Registration Success: ' + data.message });
                    setTimeout(() => {
                        setPopup({ show: false, type: '', message: '' });
                        // navigate("/Otpverify");
                    }, 2000);
                }
            } catch (error) {
                setPopup({ show: true, type: 'error', message: error.response?.data.message || 'Profile setup failed.' });
                setTimeout(() => setPopup({ show: false, type: '', message: '' }), 2500);
            } finally {
                setIsLoading(false);
            }
        } else {
            setPopup({ show: true, type: 'error', message: 'Please fix the errors in the form.' });
            setTimeout(() => setPopup({ show: false, type: '', message: '' }), 2000);
        }
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
        <div>
            <div className='profile-settings-container'>

                <div className='HireMMe'>
                    <img src={HireMMe} alt="" />
                </div>

                <div>
                    <nav >
                        <ul className='profile-nav'>
                            <p>Home</p>
                            <p>Artisans</p>
                        </ul>
                    </nav>
                </div>

                <div className='profile-content'>
                    <div className='search-bar'>
                        <input type="text" placeholder="search by industry, service or location" />
                    </div>
                    <button className='become'>Become an Artisan</button>
                </div>
            </div>

            <div className='welcome'>
                <h2><span>Welcome,</span> Olamide</h2>
            </div>

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
                    <p className='steps'>Uplad Previous Work</p>
                </div>
                <div>
                    <hr />
                </div>

                <div className='active3'>
                    <h2 className='step-active3'>3</h2>
                    <p className='steps'>Setup Completed</p>
                </div>
            </div>

            <div className='cover-upload'>
                <div className="image-upload">
                    {profileImage && (
                        <img src={profileImage} alt="Profile" className='profile-image' />
                    )}
                    <div className="upload-placeholder" onClick={() => document.getElementById('profile-upload-input').click()} style={{ cursor: 'pointer' }}>
                        <CiCamera />
                    </div>
                    <input
                        type='file'
                        id='profile-upload-input'
                        className=''
                        style={{ display: 'none' }}
                        onChange={handleProfileImageUpload}
                    />
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    <div className='business'>
                        <div>
                            <label htmlFor="businessName">Business Name</label>
                            <input
                                type="text"
                                id="businessName"
                                name="businessName"
                                value={formData.businessName}
                                onChange={handleChange}
                                placeholder='Input your business name'
                            />
                            {errors.businessName && <p className="error">{errors.businessName}</p>}
                        </div>
                        <div>
                            <label htmlFor="businessAddress">Business Address</label>
                            <input
                                type="text"
                                id="businessAddress"
                                name="businessAddress"
                                placeholder='Input your business address'
                                value={formData.businessAddress}
                                onChange={handleChange}
                            />
                            {errors.businessAddress && <p className="error">{errors.businessAddress}</p>}
                        </div>
                    </div>

                    <div className='occupation'>
                        <div>
                            <label htmlFor="occupation">Occupation</label>
                            <input
                                type="text"
                                id="occupation"
                                name="occupation"
                                value={formData.occupation}
                                onChange={handleChange}
                                placeholder='Describe your business'
                            />
                            {errors.occupation && <p className="error">{errors.occupation}</p>}
                        </div>
                        <div>
                            <label htmlFor="occupationType">Occupation Type</label>
                            <input
                                type="text"
                                id="occupationType"
                                name="occupationType"
                                value={formData.occupationType}
                                onChange={handleChange}
                                placeholder='Describe your business'
                            />
                            {errors.occupationType && <p className="error">{errors.occupationType}</p>}
                        </div>
                    </div>

                    <div className='available'>
                        <div>
                            <label htmlFor="availabilityDay">Availability (Days)</label>
                            <select
                                id="availabilityDay"
                                name="availabilityDay"
                                value={formData.availabilityDay}
                                onChange={handleChange}
                            >
                                <option value="">Select Day</option>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                                <option value="Sunday">Sunday</option>
                            </select>
                            {errors.availabilityDay && <p className="error">{errors.availabilityDay}</p>}
                        </div>
                        <div>
                            <label htmlFor="availabilityTime">Availability (Time)</label>
                            <select
                                id="availabilityTime"
                                name="availabilityTime"
                                value={formData.availabilityTime}
                                onChange={handleChange}
                            >
                                <option value="">Select Time</option>
                                <option value="9:00 AM - 5:00 PM">9:00 AM - 5:00 PM</option>
                                <option value="10:00 AM - 6:00 PM">10:00 AM - 6:00 PM</option>
                                <option value="11:00 AM - 7:00 PM">11:00 AM - 7:00 PM</option>
                                <option value="12:00 PM - 8:00 PM">12:00 PM - 8:00 PM</option>
                                <option value="1:00 PM - 9:00 PM">1:00 PM - 9:00 PM</option>
                            </select>
                            {errors.availabilityTime && <p className="error">{errors.availabilityTime}</p>}
                        </div>
                    </div>

                    <div className='certificate'>
                        <div>
                            <label htmlFor="">Business Certificate <span>( e. g CAC, SMEDAN ) *</span></label>
                            <input type="file" id='profile-upload-certificate'
                                accept="image/*,application/pdf"
                                style={{ display: 'none' }}
                                onChange={handleCertificateUpload} />
                            <div className='input-container'>
                                <span>{certificateFile?.name}</span>
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
                            <div className='input-container'>
                                <span>{ninFile?.name}</span>
                                <button className='button1' type="button" onClick={() => document.getElementById('profile-upload-nin').click()} >Upload</button>
                            </div>
                            {errors.nin && <p className="error">{errors.nin}</p>}
                        </div>
                    </div>

                    <div>
                        <div className='bio'>
                            <div>
                                <label htmlFor="">Bio</label>
                                <textarea name='bio' value={formData.bio}
                                    onChange={handleChange} placeholder='Input your bio'></textarea>
                                {errors.bio && <p className="error">{errors.bio}</p>}
                            </div>
                        </div>
                    </div>

                    <div >
                        <button className='click-but' onClick={handleSubmit}>Proceed</button>
                    </div>
                </div>
            </form>

            {/* Popup for errors and success */}
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
                    fontSize: '1.1rem',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.12)'
                }}>
                    {popup.message}
                </div>
            )}
        </div>
    );
};



export default ProfileSettings


