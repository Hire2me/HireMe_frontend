import React from 'react'
import './Profile.css'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate();

  const handleSetupProfile = () => {
    navigate('/profile/setup');
  };

  const handleNotNow = () => {
    navigate('/');
  };

  return (
    <div>
        <div className='profile-container'>
             
            <div className= 'profile-header'>
                <h3>COMPLETE PROFILE SET UP</h3>
            </div>

            <div className='profile-content'>
                <h1>Welcome to HireMe!</h1>
                <p>
                    Let’s quickly set up your profile in just a few minutes.<br/>
                    Your customers are waiting.
                </p>
            </div>
           <div className='profile-btn-container'>
                <button className='profile-btn' onClick={handleSetupProfile}> <h2>Setup Profile</h2> </button>
                <div>
                    <button className='profile-btn2' onClick={handleNotNow}> <h2>Not now</h2></button>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Profile