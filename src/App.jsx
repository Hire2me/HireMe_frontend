import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import SignUp from './pages/Signup/SignUp'
import Login from './pages/Login/Login'
import Otpverify from './Components/Otpverify/Otpverify'
import Profile from './Components/Profile/Profile'
import ProfileSetting from './Components/ProfileSettings/ProfileSetting'
import Uploadwork from './Components/Uploadworks/Uploadwork'
// import Header from './Components/Header/Header'
import Homepage from './pages/Homepage'
import ViewPage from './Components/ViewPage/ViewPage'
import UploadPreviousWork from './Components/UploadPreviousWork/UploadPreviousWork'
import Complete from './Components/Complete/Complete'
import ProfileView from './Components/ProfileView/ProfileView'
// import Homepage from './pages/Homepage'



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<SignUp />} /> */}
          <Route path='/' element={<Homepage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/otpverify' element={<Otpverify />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profileSetting' element={<ProfileSetting />} />
          <Route path='/uploadwork' element={<Uploadwork />} />
          <Route path='/view-page' element={<ViewPage />} />
          {/* <Route path='/Header' element={<Header />} /> */
          <Route path='/' element={<SignUp />} />
          <Route path='/Signup' element={<SignUp />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Otpverify' element={<Otpverify />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/ProfileSetting' element={<ProfileSetting />} />
          <Route path='/Uploadwork' element={<Uploadwork />} />
          <Route path='/UploadPreviousWork' element={<UploadPreviousWork />} />
          <Route path='/Complete' element={<Complete />} />
          <Route path='/ProfileView' element={<ProfileView />} />
         
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App