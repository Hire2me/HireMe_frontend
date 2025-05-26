import React from 'react'
import './SignUp.css'
import Bricklayers from '../../assets/Bricklayers.png'
import Google from '../../assets/Google.png'
import { useState } from 'react'

const SignUp = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    category: '',
    password: '',
    confirmPassword: '',
  })
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
      newErrors.password = "password is required";
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
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
        // console.log(response)
        if (response.ok) {
          const data = await response.json()
          console.log('data', data)
          // setShowModal(true)
        }
      } catch (error) {

      }
    }

  }
  console.log(errors)
  return (
    <div>
      <div className='container'>

        <div className='container-left'>


          <form onSubmit={handleSubmit} >
            <div className='sign'>
              <h2>Get Started</h2>
              <p>Kindly input your details to create an account with us.</p>
              <div>
                <label>Full Name</label>
                <input type="text" placeholder="Input your full name" name='fullName'
                  onChange={(e) => handleChange(e)} />
                <p>{errors.fullName}</p>
              </div>

              <div className='email'>
                <label>Email-Address</label>
                <input type="email" placeholder="Input your email-address" name='email'
                  onChange={(e) => handleChange(e)} />
                <p>{errors.email}</p>
              </div>
              {/* 
              <div>
                <label htmlFor="category">Select Category</label>
                <select name="category" id="category" onChange={(e) => handleChange(e)}>
                  <option value=''>Choose a category</option>
                  <option value="user">User</option>
                  <option value="artisan">Artisan</option>
                  <option value="both">Both</option>
                </select>
                <p>{errors.category}</p>
              </div> */}

              <div>
                <label htmlFor='password'>Password</label>
                <input type="password" placeholder="Input password" id='password' name='password'
                  onChange={(e) => handleChange(e)} />
                <p>{errors.password}</p>
              </div>

              <div>
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm password" name='confirmPassword'
                  onChange={(e) => handleChange(e)} />
                <p>{errors.confirmPassword}</p>
              </div>


              <button className='btn'><h3>Create Account</h3></button>


              <div className='account'>
                <h3>Already have an account? <a href="/login"><span className='log'>Log in</span> </a></h3>
                <h4>Or</h4>
              </div>

              <button className='bttn'>
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
            <img src={Bricklayers} alt="" />
          </div>
        </div>
      </div>

      {/* <label htmlFor="Gender">Gender</label>
                 <input type="radio" name="gender"
                 onChange={(e) => handleChange(e)} /> Male
                 <input type="radio" name="gender" 
                 onChange={(e) => handleChange(e)}/> Female
                 <input type="radio" name="gender" 
                 onChange={(e) => handleChange(e)}/> Other */}
    </div>
  )
}

export default SignUp