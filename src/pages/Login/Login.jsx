import React, { useState } from 'react'
import './Login.css'
import Senegal from '../../assets/Senegal.png'
import Google from '../../assets/Google.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({ email: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let valid = true
    const newErrors = { email: '', password: '' }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!formData.email) {
      newErrors.email = 'Email is required'
      valid = false
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email'
      valid = false
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
      valid = false
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
      valid = false
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter'
      valid = false
    } else if (!/[a-z]/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one lowercase letter'
      valid = false
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one number'
      valid = false
    }

    setErrors(newErrors)
    return valid
  }
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      setIsLoading(true)
      try {
        const response = await axios.post(
          'https://hireme-backend-6lkg.onrender.com/api/artisans/login',
          formData
        )
         
        if (response?.status === 200) {
          // Handle successful login (e.g., store token, redirect)
          console.log('Login successful:', response.data)
          alert('Login successful!')
          
           navigate("/Profile");
          
        } else {
          setErrors({ ...errors, password: 'Invalid credentials' })
        }
        
      } catch (error) {
        setErrors({
          ...errors,
          password:
            error.response?.data?.message ||
            'Login failed. Please try again.',
        })
        
      } finally {
        setIsLoading(false)
      }
      
    }
  }
  

  // Google Auth handler with popup
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await axios.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
          queryParams: { prompt: 'select_account' }
        }
      });
      if (error) {
        alert(error.message);
        return;
      }
      if (data?.url) {
        window.open(
          data.url,
          'GoogleAuthPopup',
          'width=500,height=600'
        );
      }
    } catch (error) {
      alert('Google sign-in failed');
    }
  };

  // Forgot password handler
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      setErrors({ ...errors, email: 'Enter your email to reset password' });
      return;
    }
    try {
      const { error } = await axios.auth.resetPasswordForEmail(formData.email, {
        redirectTo: window.location.origin + '/reset-password'
      });
      if (error) {
        alert(error.message);
      } else {
        alert('Password reset email sent. Check your inbox.');
      }
    } catch (error) {
      alert('Failed to send reset email.');
    }
  };

  return (
    <div>
      <div className='container'>

        <div className='container-left'>

          <form onSubmit={handleSubmit} >
            <div className='start'>
              <h2>Get Started</h2>
              <p>Kindly input your details to create an account with us.</p>

              <div className='mail'>
                <label>Email-Address</ label>
                <input type="email" placeholder="Input your email-address" name='email'
                  value={formData.email}
                  onChange={handleChange} />
                {errors.email && <span className='error'>{errors.email}</span>}
              </div>

              <div className='pass'>
                <label htmlFor='password'>Password</label>
                <input type="password" placeholder="Input password" id='password' name='password'
                  value={formData.password}
                  onChange={handleChange} />
                {errors.password && <span className='error'>{errors.password}</span>}
              </div>

              <div className='forget'>
                <div className='box' >
                  <input type="checkbox" name="" id="" className='box-1' />
                  <div className='remeber'>
                    <h4>Remeber Password</h4>
                  </div>
                </div>
                <div className='forgot'>
                  <a href="#" onClick={handleForgotPassword}><h4>Forgot Password?</h4></a>
                </div>
              </div>

              <button className='but'
                onClick={handleSubmit}
              ><h3>Login</h3></button>

              <div className='acct'>
                <h3>Already have an account? <a href="/sign-up"><span className='log'>SignUp</span> </a></h3>
                <h4>Or</h4>
              </div>

              <button className='butt' type="button" onClick={handleGoogleSignIn}>
                <div className='goog'>
                  <div className='images'>
                    <img src={Google} alt="" />
                  </div>

                  <div className='sig'>
                    <h2>Sign up with Google</h2>
                  </div>

                </div>
              </button>
            </div>
          </form>

        </div>

        <div className='container-right'>
          <div className='draw'>
            <img src={Senegal} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login