import React from 'react'
import './SignUp.css'
import Senegal from '../../assets/Senegal.png'
import Google from '../../assets/Google.png'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';


const SignUp = () => {

   const navigate = useNavigate();
  
    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    });
  
    const handleChange = (e) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('https://hireme-backend-6lkg.onrender.com/api/artisans/signup', formData);
        if (response.status === 201) {
          const data = response.data;
          alert('✅ Signup successful!');
          localStorage.setItem('signupToken', data.token);
          localStorage.setItem('signupEmail', data.email);
          localStorage.setItem('userName', data.fullName);
          navigate("/otpverify");
        }
      } catch (error) {
        console.error('Signup Error:', error.response?.data?.message || error.message);
        alert(error.response?.data?.message || 'Signup failed.');
      }
    };
  
    const handleGoogleSuccess = async (credentialResponse) => {
      try {
        const decoded = jwt_decode(credentialResponse.credential);
        const userData = {
          name: decoded.name,
          email: decoded.email,
          picture: decoded.picture,
          googleId: decoded.sub,
        };
  
        // Send to backend
        const res = await axios.post('https://hireme-backend-6lkg.onrender.com/api/auth/google', userData);
  
        if (res.data?.token) {
          localStorage.setItem('signupToken', res.data.token);
          localStorage.setItem('userName', res.data.name);
          localStorage.setItem('signupEmail', res.data.email);
          alert('✅ Google login successful!');
          navigate("/dashboard"); // or wherever
        } else {
          alert('❌ Google login failed.');
        }
      } catch (error) {
        console.error('Google Auth Error:', error);
        alert('Google login failed.');
      }
  
  
    };
  
//   const [Loading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

    try {
      const response = await axios.post('https://hireme-backend-6lkg.onrender.com/api/artisans/signup', formData);

      if (response?.status === 201) {
  const data = response?.data;
  alert('✅ Registration Success: ' + data.message);

  // ✅ FIX: store fullName instead of .user?.name
  // const userName = values.fullName;
  // localStorage.setItem('userName', userName);
//   const userName = response.data?.fullName || 'User';
// localStorage.setItem('userName', userName);

const userName = data.fullName || 'User';
  localStorage.setItem('userName', userName);

  console.log("🚀 Signup response:", response.data);


  localStorage.setItem('signupEmail', data.email);
  localStorage.setItem('signupToken', data.token);

  navigate("/Otpverify");


        // Navigate to OTP verification page
        navigate("/otpverify");
      }
    } catch (error) {
      console.error('❌ Signup Error:', error.response?.data.message);
      alert(error.response?.data.message);
    } finally {
      setIsLoading(false);
    }

//   const [values, setValues] = useState({
//     fullName: '',
//     email: '',
//     phoneNumber: '',
//     password: '',
//     confirmPassword: '',
//   })

//   const [errors, setErrors] = useState({})
//   const handleChange = (e) => {
//     console.log(e)
//     setValues({ ...values, [e.target.name]: e.target.value })

//   }

//   const validate = () => {
//     const newErrors = {}

//     if (!values.fullName.trim()) {
//       newErrors.fullName = 'Full name is required'
//     }
//     if (!values.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//       newErrors.email = "Invalid email format";
//     }

//     if (!values.phoneNumber) {
//       newErrors.phoneNumber = "Phone number is required";
//     } else if (!/^\d{11,}$/.test(values.phoneNumber)) {
//       newErrors.phoneNumber = "Phone number must be at least 11 digits";
//     }

//     if (!values.password) {
//       newErrors.password = "Password is required";
//     } else if (values.password.length < 8) {
//       newErrors.password = "Password must be at least 8 characters";
//     } else if (!/[A-Z]/.test(values.password)) {
//       newErrors.password = "Password must contain at least one uppercase letter";
//     } else if (!/[a-z]/.test(values.password)) {
//       newErrors.password = "Password must contain at least one lowercase letter";
//     } else if (!/[0-9]/.test(values.password)) {
//       newErrors.password = "Password must contain at least one number";
//     } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(values.password)) {
//       newErrors.password = "Password must contain at least one special character";
//     }

//     if (!values.confirmPassword) {
//       newErrors.confirmPassword = "Confirm password is required";
//     } else if (values.confirmPassword !== values.password) {
//       newErrors.confirmPassword = 'Password does not match'
//     }

//     return newErrors;
//   }


//   const handleSubmit = async (event) => {
//     setIsLoading(true);
//     event.preventDefault();

//     const validationErrors = validate();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length > 0) {
//       setIsLoading(false);
//       return;
//     }

//     const formData = {
//       fullName: values.fullName,
//       email: values.email,
//       phoneNumber: values.phoneNumber,
//       password: values.password,
//       confirmPassword: values.confirmPassword,
//     };

//     try {
//       const response = await axios.post('https://hireme-backend-6lkg.onrender.com/api/artisans/signup', formData);

//       if (response?.status === 201) {
//   const data = response?.data;
//   alert('✅ Registration Success: ' + data.message);


// const userName = data.fullName || 'User';
//   localStorage.setItem('userName', userName);

//   console.log("🚀 Signup response:", response.data);


//   localStorage.setItem('signupEmail', data.email);
//   localStorage.setItem('signupToken', data.token);

//         // Navigate to OTP verification page
//         navigate("/otpverify");
//       }
//     } catch (error) {
//       console.error('❌ Signup Error:', error.response?.data.message);
//       alert(error.response?.data.message);
//     } finally {
//       setIsLoading(false);
//     }

//   };


//   const handleGoogleSignIn = async (e) => {
//   e.preventDefault();
//   setIsLoading(true);

//   try {
//     const result = await signInWithPopup(auth, provider);
//     const user = result.user;

//     // OPTIONAL: Save user info
//     localStorage.setItem('userEmail', user.email);
//     localStorage.setItem('userName', user.displayName);

//     // ✅ Redirect to Gmail inbox
//     window.location.href = "https://mail.google.com/";

//   } catch (error) {
//     console.error("Google sign-in error:", error.message);
//     alert("Failed to sign in with Google");
//   } finally {
//     setIsLoading(false);
//   }
// };



  return (
    <div>
      <div className='container'>

        <div className='container-left'>

          <form onSubmit={handleSubmit} >
            <div className='sign'>
              <h2>Get Started</h2>
              <p>Kindly input your details to create an account with us.</p>

              <div className='success'>
                <label>Full Name</label>
                <input type="text" placeholder="Input your full name" name='fullName'
                  onChange={(e) => handleChange(e)} />

                {/* <span className='error'>{errors.fullName}</span> */}
              </div>

              <div className='email'>
                <label>Email-Address</label>
                <input type="email" placeholder="Input your email-address" name='email'
                  onChange={(e) => handleChange(e)} />

                {/* <span className='error'>{errors.email}</span> */}
              </div>

              <div className='phone'>
                <label>Phone Number</label>
                <input type="phone number" placeholder='Input your phone number' name="phoneNumber" id="#"
                  onChange={(e) => handleChange(e)} />
              </div>

              <div className='psw'>
                <label htmlFor='password'>Password</label>
                <input type="password" placeholder="Input password" id='password' name='password'
                  onChange={(e) => handleChange(e)} />
                {/* <span className='error'>{errors.password}</span> */}
              </div>
            

              <div className='confirm'>
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm password" name='confirmPassword'
                  onChange={(e) => handleChange(e)} />
                {/* <span className='error'>{errors.confirmPassword}</span> */}
              </div>


              <button className='btn'><h3>Create Account</h3></button>

              <div className='account'>
                <h3>Already have an account? <Link to="/Login">Login</Link></h3>
                <h4>Or</h4>
              </div>

                <div className="google">
              <GoogleLogin className="google-login"
                onSuccess={handleGoogleSuccess}
                onError={() => alert("Google Sign-In failed")}
              />
            </div>

              {/* <button
                className='bttn'
                type="button"
               
              
              >
                <div className='google'>
                  <div className='img'>
                    <img src={Google} alt="Google logo" />
                  </div>
                  <div className='signn'>
                    <h2>
                     Sign up with Google
                    </h2>
                  </div>
                </div>
              </button> */}
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

export default SignUp;