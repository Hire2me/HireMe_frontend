import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import SignUp from './pages/Signup/SignUp'
import Login from './pages/Login/Login'
import Otpverify from './Components/Otpverify/Otpverify'
import Profile from './Components/Profile/Profile'
import ProfileSetting from './Components/ProfileSettings/ProfileSetting'
import Uploadwork from './Components/Uploadworks/Uploadwork'
import Header from './Components/Header/Header'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Signup' element={<SignUp />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Otpverify' element={<Otpverify />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/ProfileSetting' element={<ProfileSetting />} />
          <Route path='/Uploadwork' element={<Uploadwork />} />
          <Route path='/Header' element={<Header />} />
         
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App