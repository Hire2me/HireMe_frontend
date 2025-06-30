import React, { useEffect, useState } from 'react';
import OTPInput from 'react-otp-input';
import './Otpverify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  // Optionally, get email from localStorage if needed
  const email = localStorage.getItem('signupEmail') || '';
 


  useEffect(() => {
    const tokenStored = localStorage.getItem('signupToken');
    console.log(tokenStored)
    if (tokenStored) {
    setToken(tokenStored);
    }
    
  }, [])
  

  const handleChange = (value) => {
    setOtp(value);
    setMessage('');
    setMessageType('');
  };

  const handleVerify = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage('');
    setMessageType('');

    if (!otp || otp.length !== 6) {
      setMessage('Please enter a valid 6-digit code.');
      setMessageType('error');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        'https://hireme-backend-6lkg.onrender.com/api/artisans/verify-email',
        { email, otp },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response?.status === 200) {
        setMessage('OTP verified successfully!');
        setMessageType('success');

        navigate("/Login");

      } else {
        setMessage('Invalid OTP. Please try again.');
        setMessageType('error');
      }
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
        'OTP verification failed. Please try again.'
      );
      setMessageType('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="otp-container">
      <h2>Verify Email Address</h2>
      <p className="instruction-text">
        We have sent a six digit unit code to the mail ({email ? email : '......'})<br />
        Please kindly enter the code below to complete your email verification.
      </p>

      <div className="otp-input-wrapper">
        <OTPInput
          value={otp}
          onChange={handleChange}
          numInputs={6}
          renderInput={(props) => <input {...props} className="otp-input" />}
        />
      </div>

      {message && (
        <p className={`otp-message ${messageType === 'success' ? 'success' : 'error'}`}>
          {message}
        </p>
      )}

      <p className="resend-text">
        I have not received a code?{' '}
        <a href="#"> <span className="resend-link">Send code Again</span> </a>
      </p>

      <div className="button-group">
        <button className="btn btn-back" disabled={isLoading}>Back</button>
        <button className="btn btn-verify" onClick={handleVerify} disabled={isLoading}>
          {isLoading ? 'Verifying...' : 'Verify'}
        </button>
      </div>
    </div>
  );
};

export default OtpVerification;