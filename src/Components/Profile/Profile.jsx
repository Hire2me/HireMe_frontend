import React from 'react'
import './Profile.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

  const navigate = useNavigate();
  const userName = localStorage.getItem('userName');

  const [loading, setLoading] = useState(false);

  const handleSetupProfile = () => {
    const profileCompleted = localStorage.getItem('profileCompleted');
    if (profileCompleted === 'true') {
      alert('Your profile is already set up.');
      return;
    }
    if (loading) return;
    setLoading(true);
    navigate('/ProfileSetting');
  };

  const handleNotNow = () => {
    const confirmLeave = window.confirm('Are you sure you want to skip profile setup?');
    if (confirmLeave) {
      navigate('/');
    }
  };
  
  return (
    <div>
      <div className='profile-container'>

        <div className='profile-header'>
          <h3>COMPLETE PROFILE SET UP</h3>
        </div>

              <div className='profile-content'>
  <h1>Welcome to HireMe, {userName}!</h1>
</div>
        <div className='profile-text'>
          <p>Let’s quickly set up your profile in just few minutes.
            Your customers are waiting.</p>
        </div>
        <div className='profile-btn-container'>
          <button className='profile-btn' onClick={handleSetupProfile}> Setup Profile </button>
          <div>
            <button className='profile-btn2' onClick={handleNotNow}> Not now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;