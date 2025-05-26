import React, { useState } from 'react'
import './Login.css'
import Bricklayers from '../../assets/Bricklayers.png'
import Google from '../../assets/Google.png'
// import { useState } from 'react'

const Login = () => {

  return (
    <div>
      <div className='container'>

        <div className='container-left'>


          <form >
            <div className='start'>
              <h2>Get Started</h2>
              <p>Kindly input your details to create an account with us.</p>
              

              <div className='mail'>
                <label>Email-Address</label>
                <input type="email" placeholder="Input your email-address" name='email'/>
                
              </div>

              <div className='pass'>
                <label htmlFor='password'>Password</label>
                <input type="password" placeholder="Input password" id='password' name='password'
                   /> 
              </div>
              <div className='forget'>
                <div className='box'>
                    <input type="checkbox" name="" id="" />
                </div>
                <div className='remeber'>
                    <h4>Remeber Password</h4>
                </div>
                <div className='forgot'>
                    <a href="#"><h4>Forgot Password?</h4></a>
                    </div>
              </div>

              <button className='but'><h3>Login</h3></button>
              
              <div className='acct'>
                <h3>Already have an account? <a href="/sign-up"><span className='log'>SignUp</span> </a></h3>
                <h4>Or</h4>
              </div>

              <button className='butt'>
                <div className='goog'>
                  <div className='images'> 
                     <img src={Google} alt=""/>
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
            <img src={Bricklayers} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login