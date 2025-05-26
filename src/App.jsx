import React from 'react'
import './App.css'
import SignUp from './Components/Signup/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './Components/Login/Login'
// import Homepage from "./pages/Homepage"

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<Homepage/>}/> */}
      <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App