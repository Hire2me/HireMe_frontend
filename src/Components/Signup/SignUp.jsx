import React from 'react'
import './SignUp.css'
// import Bricklayers from '../../assets/Bricklayers.png'
import Senegal from '../../assets/Senegal.png'
import Google from '../../assets/Google.png'
import { useState } from 'react'
import supabase from './supabaseClient'


const SignUp = () => {
  const [Loading, setIsLoading] = useState(false);
  // const [authType, setAuthType] = useState("sign-up")
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    category: '',
    password: '',
    confirmPassword: '',
  })
  // const {email, password} = values;
  // const handleSubmission = async (e)=>{
  //   e.preventDefault();
  //   if(auth.type === "sign-up"){
  //     const {error} =  await supabase.auth.signInWithPassword({email, password})
  //  if(error) alert(error.message)
  //   else alert("Signed in Sucessfully")
  //   } else{
  //     const {error} = await supabase.auth.signUp({email, password})
  //     if(error) alert(error.message)
  //       else alert("Check Your Mail to Confirm Account")
  //   }
  // }
  const [errors, setErrors] = useState({})
  const handleChange = (e) => {
    console.log(e)
    setValues({ ...values, [e.target.name]: e.target.value })

  }

  const validate = () => {
    const newErrors = {}

    if (!values.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }
    if (!values.category.trim()) {
      newErrors.category = 'category is required'
    }

    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) newErrors.email = "Invalid email format";

    if (!values.password) {
      newErrors.password = "Password is required";
    } else if (values.password.length < 6) newErrors.password = "password must be at least 6 characters";

    if (!values.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (values.confirmPassword !== values.password) {
      newErrors.confirmPassword = 'Password does not match'
    }

    return newErrors;
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationErrors = validate();
    setErrors(validationErrors)

    // console.log(Object.keys(validationErrors))
    if (Object.keys(validationErrors).length === 0) {
      const formData = { ...values };
      console.log(formData)

      try {
        setIsLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })

        if (response.ok) {
          const data = await response.json()
          console.log('data', data)

        }
      } catch (error) {
        console.log("Error Fetching data")
      }
      finally {
        setIsLoading(false);
      }
    }

    console.log(errors)
  }

  // Google Auth handler
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
      if (error) {
        alert(error.message);
      }
      // On success, Supabase will redirect automatically
    } catch (error) {
      alert('Google sign-in failed');
    } finally {
      setIsLoading(false);
    }
  };

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

                <span className='error'>{errors.fullName}</span>
              </div>

              <div className='email'>
                <label>Email-Address</label>
                <input type="email" placeholder="Input your email-address" name='email'
                  onChange={(e) => handleChange(e)} />

                <span className='error'>{errors.email}</span>
              </div>

              <div className='psw'>
                <label htmlFor='password'>Password</label>
                <input type="password" placeholder="Input password" id='password' name='password'
                  onChange={(e) => handleChange(e)} />
                <span className='error'>{errors.password}</span>
              </div>

              <div className='confirm'>
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm password" name='confirmPassword'
                  onChange={(e) => handleChange(e)} />
                <span className='error'>{errors.confirmPassword}</span>
              </div>


              <button className='btn'><h3>Create Account</h3></button>

              <div className='account'>
                <h3>Already have an account? <a href="/login"><span className='log'>Log in</span> </a></h3>
                <h4>Or</h4>
              </div>

              <button className='bttn' type="button" onClick={handleGoogleSignIn}>
                <div className='google'>
                  <div className='img'>
                    <img src={Google} alt="" />
                  </div>
                  <div className='signn'>
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

export default SignUp