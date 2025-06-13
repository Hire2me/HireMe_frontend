import React, { useState } from 'react';
import OTPInput from 'react-otp-input';
import './Otpverify.css';

const OtpVerification = () => {
  const [otp, setOtp] = useState((''));
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChange = (value) => {
    setOtp(value);
    setMessage('');
    setMessageType('');
  };

  const handleVerify = () => {
    const CORRECT_OTP = '123456';
    console.log('OTP entered:', otp);

    if (otp.length < 6) {
      setMessage('Please enter a valid 6-digit code.');
      setMessageType('error');
    } else if (otp === CORRECT_OTP) {
      setMessage('OTP verified successfully!');
      setMessageType('success');
    } else {
      setMessage('Invalid OTP. Please try again.');
      setMessageType('error');
    }
  };


  return (
    <div className="otp-container">
      <h2>Verify Email Address</h2>
      <p className="instruction-text">
        We have sent a six digit unit code to the mail (......)<br />
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
        <button className="btn btn-back">Back</button>
        <button className="btn btn-verify" onClick={handleVerify}>
          Verify
        </button>
      </div>
    </div>
  );
};

export default OtpVerification;