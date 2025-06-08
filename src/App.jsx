import React from 'react'
import './App.css'
import SignUp from './Components/Signup/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './Components/Login/Login'
import Otpverify from './Otpverify/Otpverify'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/otpverify' element={<Otpverify />} />
         
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App